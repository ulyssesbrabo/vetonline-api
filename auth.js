var jwt = require("jsonwebtoken");
var passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var repositorio = require("./models/vetonline");
var secret = "ASDASHDOAHSDOAIHSFB6AA";

var AUTH_USER = {};

var options = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    ignoreExpiration: true
};

passport.use(new JwtStrategy(options, function(jwt_payload, done){
	repositorio.getUsuario(jwt_payload.sub)
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
    
    return jwt.sign(payload, secret);
}

function validate(req,res, next) {
	passport.authenticate('jwt', {session:false});
}

module.exports = {
	validate:validate,
	sign: sign,
	authUser: AUTH_USER
};