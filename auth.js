var jwt = require("jsonwebtoken");
var passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var secret = "ASDASHDOAHSDOAIHSFB6AA";

var AUTH_USER = {};

var options = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    ignoreExpiration: true
};

passport.use(new JwtStrategy(options, function(jwt_payload, done){
    var repositorio = require('./models/vetonline.js');
    console.log(repositorio);
    repositorio.getusuario(jwt_payload.sub)
        .then(function(usuario){
			if(!usuario){
                return done(new Error("Usuario Inválido"), false);
            }
            AUTH_USER = usuario;
            done(null, usuario);
        })
        .catch(function(err){
            done(err, false)
        });
}));

function sign(idusuario, tipo) {
    var payload = {
        sub: idusuario,
        type: tipo
    };
        console.log("Chegou aqui 6");
    return jwt.sign(payload, secret);
}

function validate(req,res, next) {
    return passport.authenticate('jwt', {session:false});
}

module.exports = {
	validate:validate,
	sign: sign,
	authUser: AUTH_USER
};