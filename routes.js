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



module.exports = {	
	configure: function(app){

//////////////////////////Tela Responsavel/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		app.post('/novoResponsavel', function(req, res){
			var responsavel = req.body;
			js.validate(responsavel, responsavelSchema);
			funBase.cadastraResponsavel(responsavel, res);
		});

		app.post('/criarAnimalResponsavel', function(req, res){
			var animalRes = req.body;
			js.validate(animalRes, animalResSchema);
			funBase.cadastroAnimalUsuario(animalRes, res);
		});

		app.put('/RespUpdDados', function(req, res){
			var responsavelUpdateDados = req.body;
			js.validate(responsavelUpdateDados, respUpdDadosSchema);
			funBase.atualizarDadosResponsavel(responsavelUpdateDados, res);
		});

		app.put('/RespUpdContatos', function(req, res){
			var responsavelUpdateContatos = req.body;
			js.validate(responsavelUpdateContatos, respUpdContatosSchema);
			funBase.atualizarContatosResponsavel(responsavelUpdateContatos, res);
		});

		app.put('/RespUpdSenha', function(req, res){
			var responsavelUpdateSenha = req.body;
			js.validate(responsavelUpdateSenha, respUpdSenhaSchema);
			funBase.atualizarSenhaResponsavel(responsavelUpdateSenha, res);
		});

		app.delete('/excluirResponsavel', function(req,res, next){
			var responsavel = req.body;
			funBase.excluirRegistroResponsavel(responsavel, res);
		});

		app.get('/perfilResponsavel/:cpfResponsavel', function(req,res, next){  
			var cpfResponsavel = req.params.cpfResponsavel;
			funBase.perfilResponsavel(cpfResponsavel, res);
		});

		app.get('/Medicos&Auxiliares/:cpfResponsavel', function(req,res, next){  
			var cpfResponsavel = req.params.cpfResponsavel;
			funBase.listarMedicoseAuxiliares(cpfResponsavel, res);
		});

		app.get('/AnimaisResponsavel/:cpfResponsavel', function(req,res, next){  
			var cpfResponsavel = req.params.cpfResponsavel;
			funBase.listarAnimaisResponsavel(cpfResponsavel, res);
		});
//////////////////////////Tela Medicos///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		
		app.post('/novoMedico', function(req, res){
			var medico = req.body;
			js.validate(medico, medicoSchema);
			funBase.cadastraMedico(medico, res);
		});

		app.post('/criarAnimalMedico', function(req, res){
			var animalMed = req.body;
			js.validate(animalMed, animalMedSchema);
			funBase.cadastraAnimalMedico(animalMed, res);
		});

		app.post('/inserirAuxiliarMedico', function(req, res){
			var auxiliarmedico = req.body;
			js.validate(auxiliarmedico, auxiliarmedicoSchema);
			funBase.inserirAuxiliarMedico(auxiliarmedico, res);
		});

		app.put('/atualizaMedico', function(req, res){
			var atualizaMedico = req.body;
			js.validate(atualizaMedico, atualMedicoSchema);
			funBase.atualizarMedico(atualizaMedico, res);
		});

		app.put('/atualizaSenhaMedico', function(req, res){
			var atualizaSenhaMedico = req.body;
			js.validate(atualizaSenhaMedico, atualSenhaMedicoSchema);
			funBase.atualizarSenhaMedico(atualizaSenhaMedico, res);
		});

		app.put('/historicoAnimal', function(req, res){
			var historicoAnimal = req.body;
			js.validate(historicoAnimal, historicoAnimalSchema);
			funBase.inserirHistoricoAnimal(historicoAnimal, res);
		});

		app.put('/adicionarAnimal', function(req, res){
			var adicionarAnimalMedico = req.body;
			js.validate(adicionarAnimalMedico, adicionarAnimalMedicoSchema);
			funBase.inserirAnimalMedico(adicionarAnimalMedico, res);
		});

		app.put('/inserirAnemia', function(req, res){
			var inserirAnemia = req.body;
			js.validate(inserirAnemia, inserirAnemiaSchema);
			funBase.inserirAnemia(inserirAnemia, res);
		});

		app.delete('/excluirAuxiliar', function(req,res, next){
			var crmv = req.body;
			funBase.excluirAuxiliarMedico(crmv, res);
		});

		app.delete('/deletarMedico', function(req,res, next){
			var crmv = req.body;
			funBase.excluirMedico(crmv, res);
		});

		app.get('/perfilMedico/:crmv', function(req,res, next){  
			var crmv = req.params.crmv;
			funBase.perfilMedico(crmv, res);
		});

		app.get('/auxiliaresMedicos/:crmv', function(req,res, next){  
			var crmv = req.params.crmv;
			funBase.listarAuxiliaresDoMedicos(crmv, res);
		});

		app.get('/auxiliaresCadastrados/:crmv', function(req,res, next){  
			var crmv = req.params.crmv;
			funBase.listarAuxiliaresCadastrados(crmv, res);
		});

		app.get('/animaisMedico/:crmv', function(req,res, next){  
			var crmv = req.params.crmv;
			funBase.listarAnimaisMedico(crmv, res);
		});

		app.get('/animaisCadastrados/:crmv', function(req,res, next){  
			var crmv = req.params.crmv;
			funBase.listarAnimaisCadastrados(crmv, res);
		});
//////////////////////////Tela Auxiliar////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		app.post('/novoAuxiliar', function(req, res){
			var auxiliar = req.body;
			js.validate(auxiliar, auxiliarSchema);
			funBase.cadastraAuxiliar(auxiliar, res);
		});

		app.post('/inserirAnimalAuxiliar', function(req, res){
			var cadastroAniAux = req.body;
			js.validate(cadastroAniAux, cadastroAniAuxSchema);
			funBase.cadastraAuxiliar(cadastroAniAux, res);
		});

		app.put('/atualizaAuxiliar', function(req, res){
			var atualizaAuxiliar = req.body;
			js.validate(atualizaAuxiliar, atualizarAuxiliarSchema);
			funBase.atualizarAuxiliar(atualizaAuxiliar, res);
		});

		app.put('/atualizaSenhaAuxiliar', function(req, res){
			var atualizaSenhaAuxiliar = req.body;
			js.validate(atualizaSenhaAuxiliar, atualizaSenhaAuxiliarSchema);
			funBase.atualizarSenhaAuxiliar(atualizaSenhaAuxiliar, res);
		});

		app.put('/inserirAnimalAuxiliar', function(req, res){
			var inserirAnimalAuxiliar = req.body;
			js.validate(inserirAnimalAuxiliar, inserirAnimalAuxiliarSchema);
			funBase.inserirAnimalAuxiliar(inserirAnimalAuxiliar, res);
		});

		app.delete('/deletarAuxiliar', function(req,res, next){
			var cpfAuxiliar = req.body;
			funBase.excluirAuxiliar(cpfAuxiliar, res);
		});

		app.get('/medicosAuxiliares/:cpfAuxiliar', function(req,res, next){  
			var cpfAuxiliar = req.params.cpfAuxiliar;
			funBase.listarMedicosDosAuxiliares(cpfAuxiliar, res);
		});

		app.get('/animaisDosMedicos/:cpfAuxiliar', function(req,res, next){  
			var cpfAuxiliar = req.params.cpfAuxiliar;
			funBase.listarAnimaisDosMedicosAuxiliares(cpfAuxiliar, res);
		});

		app.get('/animaisAuxiliares/:cpfAuxiliar', function(req,res, next){  
			var cpfAuxiliar = req.params.cpfAuxiliar;
			funBase.listarAnimaisDosAuxiliares(cpfAuxiliar, res);
		});
//////////////////////////Tela Clinica///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		app.post('/novaClinica', function(req, res){
			var clinica = req.body;
			js.validate(clinica, clinicaSchema);
			funBase.cadastraClinica(clinica, res);
		});
//////////////////////////Consultas Extras//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		app.get('/selecionarEstado', function(req,res){  
			funBase.listaEstados(req, res);
		});

		app.get('/selecionarCidade/:estado', function(req,res, next){  
			var estado = req.params.estado;
			funBase.listaCidadeEstados(estado, res);
		});

		app.get('/autenticacaoMedico', function(req,res, next){  
			var usuario = req.body;
			funBase.autenticaçãoDoMedico(usuario, res);
		});

		app.get('/autenticacaoAuxiliar', function(req,res, next){  
			var usuario = req.body;
			funBase.autenticaçãoDoAuxiliar(usuario, res);
		});

		app.get('/autenticacaoResponsavel', function(req,res, next){  
			var usuario = req.body;
			funBase.autenticacaoDoResponsavel(usuario, res);
		});





	}
};

