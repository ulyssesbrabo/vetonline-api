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
			res.header("Access-Control-Allow-Origin", '*');
			res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE, OPTIONS');
			res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
			next();
		});

//////////////////////////Tela Responsavel/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		app.post('/novoResponsavel', function(req, res){
			var responsavel = req.body;
			js.validate(responsavel, responsavelSchema);
			funBase.cadastraResponsavel(responsavel, res);
		});

		app.post('/criarAnimalResponsavel', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animalRes = req.body;
			funBase.cadastroAnimalResp(animalRes, usuario, res);
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
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.excluirRegistroResponsavel(usuario, res);
		});

		app.delete('/excluirAnimalResp', auth.validate(), function(req,res, next){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animal = req.body;
			funBase.deletarAnimalDoResponsavel(animal, usuario, res)
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

		app.get('/AnimaisResponsavel', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
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
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var auxiliar = req.body;
			console.log("Variavel Auxiliares");
			console.log(auxiliar);
			funBase.inserirAuxiliarMedico(auxiliar, usuario, res);
		});

		app.put('/atualizaMedico', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var medico = req.body;
			js.validate(medico, atualMedicoSchema);
			funBase.atualizarMedico(medico, usuario, res);
		});

		app.put('/atualizaSenhaMedico', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var medico = req.body;
			funBase.atualizarSenhaMedico(medico, usuario, res);
		});

		app.put('/historicoAnimal', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animal = req.body;
			js.validate(animal, historicoAnimalSchema);
			funBase.inserirHistoricoAnimal(animal, usuario, res);
		});

		app.post('/adicionarAnimal', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animal = req.body;
			console.log(animal);
			funBase.inserirAnimalMedico(animal, usuario, res);
		});

		app.put('/inserirAnemia', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animal = req.body;
			funBase.inserirAnemia(animal, res);
		});

		app.put('/excluirAuxiliar/:idusuario', auth.validate(), function(req,res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var auxiliar = req.params.idusuario;
			console.log("Variavel Auxiliares");
			console.log(auxiliar);
			funBase.excluirAuxiliarMedico(auxiliar, usuario, res);
		});

		app.put('/excluirAnimal/:idAnimal', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			var animal = req.params.idAnimal;
			console.log("excluirAnimal")
			console.log(usuario);
			console.log(animal);
			funBase.excluirAnimalMedico(animal, usuario, res);
		});

		app.put('/deletarMedico/:statu', auth.validate(), function(req, res, next){
			var usuario = auth.validacaoUsuario();
			var statu = req.params.statu;
			console.log("Função Excluir Medico");
			console.log(usuario);
			console.log(statu);
			funBase.excluirMedico(usuario, statu, res);
		});

		app.get('/nomeMedico', auth.validate(), function(req, res, next){
			var usuario = auth.validacaoUsuario();
			funBase.nomeMedico(usuario, res);
		})

		app.get('/perfilMedico', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.perfilMedico(usuario, res);
		});

		app.get('/verificaVinculoMedicoAuxiliar', auth.validate(), function(req,res, next){
			var usuario = auth.validacaoUsuario();
			var auxiliar = req.body;
			funBase.verificaVinculoMedicoAuxiliar(auxiliar, usuario, res);
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

		app.get('/listarAnimaisAnemia', auth.validate(), function(req, res, next){
			var usuario = auth.validacaoUsuario();
			funBase.listarAnimaisAnemia(usuario, res);
		})

		app.get('/animaisMedico', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarAnimaisMedico(usuario, res);
		});

		app.get('/animaisCadastrados', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarAnimaisCadastrados(usuario, res);
		});
//////////////////////////Tela Auxiliar////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		app.post('/novoAuxiliar', function(req, res){
			var auxiliar = req.body;
			js.validate(auxiliar, auxiliarSchema);
			funBase.cadastraAuxiliar(auxiliar, res);
		});

		app.post('/inserirAnimalAuxiliar', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animal = req.body;
			funBase.inserirAnimalAuxiliar(usuario, animal, res);
		});

		app.put('/atualizaAuxiliar', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var auxiliar = req.body;
			funBase.atualizarAuxiliar(auxiliar, usuario, res);
		});

		app.put('/atualizaSenhaAuxiliar', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var auxiliar = req.body;
			funBase.atualizarSenhaAuxiliar(auxiliar, usuario, res);
		});

		app.put('/inserirAnimalAuxiliar', auth.validate(), function(req, res){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			var animal = req.body;
			funBase.inserirAnimalAuxiliar(usuario, animal, res);
		});

		app.delete('/deletarAuxiliar', auth.validate(), function(req,res, next){
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.excluirAuxiliar(usuario, res);
		});

		app.get('/medicosAuxiliares', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarMedicosDosAuxiliares(usuario, res);
		});

		app.get('/animaisDosMedicos', auth.validate(), function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarAnimaisDosMedicosAuxiliares(usuario, res);
		});

		app.get('/animaisAuxiliares', function(req,res, next){  
			var usuario = auth.validacaoUsuario();
			console.log("variavel usuario");
			console.log(usuario);
			funBase.listarAnimaisDosAuxiliares(usuario, res);
		});
//////////////////////////Tela Clinica///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		

		app.post('/novaClinica', function(req, res){
			var clinica = req.body;
			js.validate(clinica, clinicaSchema);
			funBase.cadastraClinica(clinica, res);
		});
//////////////////////////Anemias//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		app.get('/anemiaMacrociticaNormocromica', function(req,res){  
			funBase.anemiaMacrociticaNormocromica(req, res);
		});

		app.get('/anemiaMacrociticaHipocromica', function(req,res){  
			funBase.anemiaMacrociticaHipocromica(req, res);
		});

		app.get('/anemiaMicrociticoNormocromico', function(req,res){  
			funBase.anemiaMicrociticoNormocromico(req, res);
		});

		app.get('/anemiaMicrociticoHipocromico', function(req,res){  
			funBase.anemiaMicrociticoHipocromico(req, res);
		});
//////////////////////////Leucocitos//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		app.get('/leucocitosLeucopenia',function(req, res){
			funBase.leucocitosLeucopenia(req, res);
		});

		app.get('/leucocitosLeucocitose',function(req, res){
			funBase.leucocitosLeucocitose(req, res);
		});

		app.get('/leucocitosEosinopenia',function(req, res){
			funBase.leucocitosEosinopenia(req, res);
		});

		app.get('/leucocitosEosinofilia',function(req, res){
			funBase.leucocitosEosinofilia(req, res);
		});

		app.get('/leucocitosLinfocitopenia',function(req, res){
			funBase.leucocitosLinfocitopenia(req, res);
		});

		app.get('/leucocitosLinfocitose',function(req, res){
			funBase.leucocitosLinfocitose(req, res);
		});
//////////////////////////Consultas extras/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		app.get('/selecionarEspecie', function(req, res){
			funBase.especies(req, res);
		});

		app.get('/selecionarRaca/:idEspecie', function(req, res, next){
			var idEspecie = req.params.idEspecie;
			funBase.raca(idEspecie, res);
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


