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
    repositorio.getusuario(jwt_payload.sub)
        .then(function(usuario){
			if(!usuario){
                return done(new Error("Usuario Inválido"), false);
            }
            AUTH_USER = usuario[0];
            console.log("Valor usuario");
            console.log(AUTH_USER.idusuario);
            done(null, usuario[0]);
        })
        .catch(function(err){
            done(err, false)
        });
}));

function sign(usuario, tipo) {
    console.log("função sign auth");
    var payload = {
        sub: usuario,
        type: tipo
    };
    console.log(usuario);

    return jwt.sign(payload, secret);
}

function validacaoUsuario(){
    return AUTH_USER;
}

function validate(req,res, next) {
    return passport.authenticate('jwt', {session:false});
}

module.exports = {
	validate:validate,
    validacaoUsuario:validacaoUsuario,
	sign: sign,
	AUTH_USER: AUTH_USER
};