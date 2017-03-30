var funBase = require('./models/vetonline.js');
var jayschema = require("jayschema");
js = new jayschema();
var responsavelSchema = require("./responsavel.json");
var respUpdDadosSchema = require("./RespUpdDados.json");
var respUpdContatosSchema = require("./RespUpdContatos.json");
var respUpdSenhaSchema = require("./RespUpdSenha.json");
var animalResSchema = require("./animalRes.json");
var medicoSchema = require("./medico.json");
var auxiliarmedicoSchema = require("./auxiliarmedico.json");
var atualMedicoSchema = require("./atualizaMedico.json");
var atualSenhaMedicoSchema = require("./atualizaSenhaMedico.json");
var historicoAnimalSchema = require("./historicoAnimal.json");
var adicionarAnimalMedicoSchema = require("./adicionarAnimal.json");
var auxiliarSchema = require("./auxiliar.json");
var atualizarAuxiliarSchema = require("./atualizarAuxiliar.json");
var atualizaSenhaAuxiliarSchema = require("./atualizaSenhaAuxiliar.json");
var inserirAnimalAuxiliarSchema = require("./inserirAnimalAuxiliar.json");
var clinicaSchema = require("./clinica.json");
var animalMedSchema = require("./animalMed.json");
var cadastroAniAuxSchema = require("./cadastroAniAux.json");
var autenticacaoMedicoSchema = require("./autenticacaoMedico.json");
var autenticacaoAuxiliarSchema = require("./autenticacaoAuxiliar.json");
var autenticacaoResponsavelSchema = require("./autenticacaoResponsavel.json");
var autenticacaoClinicaSchema = require("./autenticacaoClinica.json");
var auth = require("./auth.js");


module.exports = {	
	configure: function(app){
		app.all('*', function(req, res, next){
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods", "'*'");
			res.header("Access-Control-Allow-Headers", "'Origin, X-Requested-With, Content-Type, Accept, Authorization'");
			next();
		});

//////////////////////////Tela Responsavel/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		app.post('/novoResponsavel', function(req, res){
			var responsavel = req.body;
			js.validate(responsavel, responsavelSchema);
			funBase.cadastraResponsavel(responsavel, res);
		});

		app.post('/criarAnimalResponsavel', auth.validate(), function(req, res){
			var animalRes = req.body;
			js.validate(animalRes, animalResSchema);
			funBase.cadastroAnimalUsuario(animalRes, res);
		});

		app.put('/RespUpdDados', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var responsavelUpdateDados = req.body;
			js.validate(responsavelUpdateDados, respUpdDadosSchema);
			funBase.atualizarDadosResponsavel(responsavelUpdateDados, usuario, res);
		});

		app.put('/RespUpdContatos', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var responsavelUpdateContatos = req.body;
			js.validate(responsavelUpdateContatos, respUpdContatosSchema);
			funBase.atualizarContatosResponsavel(responsavelUpdateContatos, usuario, res);
		});

		app.put('/RespUpdSenha', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var responsavelUpdateSenha = req.body;
			js.validate(responsavelUpdateSenha, respUpdSenhaSchema);
			funBase.atualizarSenhaResponsavel(responsavelUpdateSenha, usuario, res);
		});

		app.delete('/excluirResponsavel', auth.validate(), function(req,res, next){
			var usuario = req.body;
			funBase.excluirRegistroResponsavel(usuario, res);
		});

		app.get('/perfilResponsavel', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.perfilResponsavel(usuario, res);
		});

		app.get('/Medicos&Auxiliares', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarMedicoseAuxiliares(usuario, res);
		});

		app.get('/AnimaisResponsavel', function(req,res, next){  
			var usuario = req.body;
			funBase.listarAnimaisResponsavel(usuario, res);
		});
//////////////////////////Tela Medicos///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		
		app.post('/novoMedico', function(req, res){
			var medico = req.body;
			js.validate(medico, medicoSchema);
			funBase.cadastraMedico(medico, res);
		});

		app.post('/criarAnimalMedico', auth.validate(), function(req, res){
			var animalMed = req.body;
			js.validate(animalMed, animalMedSchema);
			funBase.cadastraAnimalMedico(animalMed, res);
		});

		app.post('/inserirAuxiliarMedico', auth.validate(), function(req, res){
			var inserirAuxiliar = req.body;
			js.validate(inserirAuxiliar, auxiliarmedicoSchema);
			funBase.inserirAuxiliarMedico(inserirAuxiliar, res);
		});

		app.put('/atualizaMedico', auth.validate(), function(req, res){
			var atualizaMedico = req.body;
			js.validate(atualizaMedico, atualMedicoSchema);
			funBase.atualizarMedico(atualizaMedico, res);
		});

		app.put('/atualizaSenhaMedico', auth.validate(), function(req, res){
			var atualizaSenhaMedico = req.body;
			js.validate(atualizaSenhaMedico, atualSenhaMedicoSchema);
			funBase.atualizarSenhaMedico(atualizaSenhaMedico, res);
		});

		app.put('/historicoAnimal', auth.validate(), function(req, res){
			var historicoAnimal = req.body;
			js.validate(historicoAnimal, historicoAnimalSchema);
			funBase.inserirHistoricoAnimal(historicoAnimal, res);
		});

		app.put('/adicionarAnimal', auth.validate(), function(req, res){
			var inserirAnimalMedico = req.body;
			js.validate(inserirAnimalMedico, adicionarAnimalMedicoSchema);
			funBase.inserirAnimalMedico(inserirAnimalMedico, res);
		});

		app.put('/inserirAnemia', auth.validate(), function(req, res){
			var inserirAnemia = req.body;
			js.validate(inserirAnemia, inserirAnemiaSchema);
			funBase.inserirAnemia(inserirAnemia, res);
		});

		app.delete('/excluirAuxiliar', auth.validate(), function(req,res, next){
			var usuario = req.body;
			funBase.excluirAuxiliarMedico(usuario, res);
		});

		app.delete('/deletarMedico', auth.validate(), function(req,res, next){
			var usuario = req.body;
			funBase.excluirMedico(usuario, res);
		});

		app.get('/perfilMedico', function(req,res, next){  
			var usuario = req.body;
			funBase.perfilMedico(usuario, res);
		});

		app.get('/auxiliaresMedicos', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarAuxiliaresDoMedicos(usuario, res);
		});

		app.get('/auxiliaresCadastrados', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarAuxiliaresCadastrados(usuario, res);
		});

		app.get('/animaisMedico', function(req,res, next){  
			var usuario = req.body;
			funBase.listarAnimaisMedico(usuario, res);
		});

		app.get('/animaisCadastrados', function(req,res, next){  
			var usuario = req.body;
			funBase.listarAnimaisCadastrados(usuario, res);
		});
//////////////////////////Tela Auxiliar////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		app.post('/novoAuxiliar', function(req, res){
			var auxiliar = req.body;
			js.validate(auxiliar, auxiliarSchema);
			funBase.cadastraAuxiliar(auxiliar, res);
		});

		app.post('/inserirAnimalAuxiliar', auth.validate(), function(req, res){
			var cadastroAniAux = req.body;
			js.validate(cadastroAniAux, cadastroAniAuxSchema);
			funBase.cadastraAuxiliar(cadastroAniAux, res);
		});

		app.put('/atualizaAuxiliar', auth.validate(), function(req, res){
			var atualizaAuxiliar = req.body;
			js.validate(atualizaAuxiliar, atualizarAuxiliarSchema);
			funBase.atualizarAuxiliar(atualizaAuxiliar, res);
		});

		app.put('/atualizaSenhaAuxiliar', auth.validate(), function(req, res){
			var atualizaSenhaAuxiliar = req.body;
			js.validate(atualizaSenhaAuxiliar, atualizaSenhaAuxiliarSchema);
			funBase.atualizarSenhaAuxiliar(atualizaSenhaAuxiliar, res);
		});

		app.put('/inserirAnimalAuxiliar', auth.validate(), function(req, res){
			var inserirAnimalAuxiliar = req.body;
			js.validate(inserirAnimalAuxiliar, inserirAnimalAuxiliarSchema);
			funBase.inserirAnimalAuxiliar(inserirAnimalAuxiliar, res);
		});

		app.delete('/deletarAuxiliar', auth.validate(), function(req,res, next){
			var usuario = req.body;
			funBase.excluirAuxiliar(usuario, res);
		});

		app.get('/medicosAuxiliares', function(req,res, next){  
			var usuario = req.body;
			funBase.listarMedicosDosAuxiliares(usuario, res);
		});

		app.get('/animaisDosMedicos', function(req,res, next){  
			var usuario = req.body;
			funBase.listarAnimaisDosMedicosAuxiliares(usuario, res);
		});

		app.get('/animaisAuxiliares', function(req,res, next){  
			var usuario = req.body;
			funBase.listarAnimaisDosAuxiliares(usuario, res);
		});
//////////////////////////Tela Clinica///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		app.post('/novaClinica', function(req, res){
			var clinica = req.body;
			js.validate(clinica, clinicaSchema);
			funBase.cadastraClinica(clinica, res);
		});
//////////////////////////Consultas Extras//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		app.get('/anemiaMacrocitica', function(req,res){  
			funBase.anemiaMacrociticaNormocromica(req, res);
		});

		app.get('/anemiaMacrociticaHipocromica', function(req,res){  
			funBase.anemiaMacrociticaHipocromica(req, res);
		});

		app.get('/anemiaMicrocitico', function(req,res){  
			funBase.anemiaMicrociticoNormocromico(req, res);
		});

		app.get('/anemiaMicrociticoHipocromico', function(req,res){  
			funBase.anemiaMicrociticoHipocromico(req, res);
		});

		app.get('/selecionarEstado', function(req,res){
			console.log("Oi");
			funBase.listaEstados(req, res);
		});

		app.get('/selecionarCidade/:idEstados', function(req,res, next){  
			var idEstados = req.params.idEstados;
			funBase.listaCidadeEstados(idEstados, res);
		});
//////////////////////////Autenticação///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		app.post('/autenticacaoMedico', function(req,res, next){  
			var usuario = req.body;
			js.validate(usuario, autenticacaoMedicoSchema);
			funBase.autenticacaoDoMedico(usuario, res);
		});

		app.post('/autenticacaoAuxiliar', function(req,res, next){  
			var usuario = req.body;
			js.validate(usuario, autenticacaoAuxiliarSchema);
			funBase.autenticacaoDoAuxiliar(usuario, res);
		});

		app.post('/autenticacaoResponsavel', function(req,res, next){  
			var usuario = req.body;
			js.validate(usuario, autenticacaoResponsavelSchema);
			funBase.autenticacaoDoResponsavel(usuario, res);
		});

		app.post('/autenticacaoClinica', function(req,res, next){  
			var usuario = req.body;
			js.validate(usuario, autenticacaoClinicaSchema);
			funBase.autenticacaoClinica(usuario, res);
		});
	}
};


