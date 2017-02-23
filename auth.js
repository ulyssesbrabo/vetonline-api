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
            console.log("Chegou aqui 9");
			if(!usuario){
                return done(new Error("Usuario Inválido"), false);
                console.log("Chegou aqui 4");
            }
            AUTH_USER = usuario;
            done(null, usuario);
            console.log("Chegou aqui 5");
        })
        .catch(function(err){
            done(err, false)
            console.log("Chegou aqui 3");
        });
}));

function sign(idusuario, tipo) {
    var payload = {
        sub: idusuario,
        type: tipo
    };
        console.log("Chegou aqui 6");
    return jwt.sign(payload, secret);
    console.log("Chegou aqui 7");
}

function validate(req,res, next) {
    console.log("Chegou aqui 8");
    return passport.authenticate('jwt', {session:false});
}

module.exports = {
	validate:validate,
	sign: sign,
	authUser: AUTH_USER
};