var Promise = require("bluebird");
var connection = require('../connection')
var auth = require('../auth')

///////////////////////////////////////////////////Classe Clinica//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Classe Clinica
	//Cadastro Clinica 
	function cadastraClinica(clinica, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Clinica(cnpj, nomeClinica, enderecoClinica, telefoneClinicaResidencial, telefoneClincaCelular, telefoneClnicaOutros, emailClinica, senhaClinca, perfilClinica, Estados, Cidade) values(?,?,?,?,?,?,?,?,?,?,?)", [clinica.cnpj, clinica.nomeClinica, clinica.enderecoClinica, clinica.telefoneClinicaResidencial, clinica.telefoneClincaCelular, clinica.telefoneClnicaOutros, clinica.emailClinica, clinica.senhaClinca, clinica.perfilClinica, clinica.Estados, clinica.Cidade], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Atualização de dados da clinica
	function atualizarClinica(atualClinica, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Clinica set enderecoClinica = ?, telefoneClinicaResidencial = ?, telefoneClincaCelular = ?, telefoneClnicaOutros = ?, perfilClinica = ?, Clinica.Estados = ?, Clinica.Cidade = ? where Clinica.cnpj = ?", [atualClinica.enderecoClinica, atualClinica.telefoneClinicaResidencial, atualClinica.telefoneClincaCelular, atualClinica.telefoneClnicaOutros, atualClinica.perfilClinica, atualClinica.Estados, atualClinica.Cidade, atualClinica.cnpj], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Inserir Medico a Clinica
	function inserirMedicoClinica(inserirMedCli, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Clinica_Medicos(cnpjClinica, crmvMedico) values(?,?)", [inserirMedCli.cnpj, inserirMedCli.crmv], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Exclusões
	//Excluir clinica
	function excluirClinica(cnpj, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Clinica, Clinica_Medicos using Clinica inner join Clinica_Medicos where Clinica.cnpj = Clinica_Medicos.cnpjClinica and Clinica.cnpj = "+cnpj+"", function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'Failed to delete'});
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
	//excluir médico da clinica
	//Errado melhorar
	function excluirMedicoClinica(cnpj, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Clinica_Medicos where cnpjClinica = "+cnpj+"",[], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'Failed to delete'});
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
///////////////////////////////////////////////////Classe Responsavel//////////////////////////////////////////////////////////////////////////////////////////////////////
	//Classe Responsavel
	//CadastroResponsavel
	function cadastraResponsavel(responsavel, res) {
	    connection.acquire(function(err, con) {
		      con.query( "insert into Responsavel(cpfResponsavel, nomeResponsavel, enderecoResponsavel, telefoneResponsavel, emailResponsavel, senhaResponsavel, Estado, Cidade) values(?,?,?,?,?,?,?,?)", [responsavel.cpfResponsavel,responsavel.nomeResponsavel,responsavel.enderecoResponsavel,responsavel.telefoneResponsavel,responsavel.emailResponsavel,responsavel.senhaResponsavel,responsavel.Estados,responsavel.Cidade] , function(err, result) {
		        con.release();
			        if (err) {
			          res.send({status: 1, message: 'TODO creation failed'});
			        } else {
			          res.send({status: 0, message: 'TODO created successfully'});
			        }
			  });
		});
	};
	//Atualizações
	//atualização de dados básicos do responsavel
	function atualizarDadosResponsavel(responsavelUpdateDados, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Responsavel set nomeResponsavel = ?, enderecoResponsavel = ? where idusuario = ?", [responsavelUpdateDados.nomeResponsavel ,responsavelUpdateDados.enderecoResponsavel, usuario.idusuario], function(err, result){
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    }); 
	};
	//Atualizar Contatos do responsavel
	function atualizarContatosResponsavel(responsavelUpdateContatos, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Responsavel set telefoneResponsavel = ?, emailResponsavel = ? where idusuario = ?", [responsavelUpdateContatos.telefoneResponsavel ,responsavelUpdateContatos.emailResponsavel, usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Atualizar Senha do responsavel
	function atualizarSenhaResponsavel(responsavelUpdateSenha, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Responsavel set senhaResponsavel = ? where idusuario = ?", [responsavelUpdateSenha.senhaResponsavel ,usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Exclusões
	//Excluir Medico
	function excluirRegistroResponsavel(usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query( "delete from Responsavel using Responsavel inner join Animal where Responsavel.idusuario = Animal.Responsavel and Responsavel.idusuario = ?", [usuario.idusuario],function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'Failed to delete'});
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
	//Consultas
	//Perfil do responsavel
	function perfilResponsavel(usuario, res){
		connection.acquire(function(err, con){
			con.query("select Responsavel.cpfResponsavel, Responsavel.nomeResponsavel, Responsavel.enderecoResponsavel, Responsavel.telefoneResponsavel, emailResponsavel from Responsavel where Responsavel.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
///////////////////////////////////////////////////Classe Medico///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Classe Médico e todas as suas referencias
	//Cadastro Médico
	function cadastraMedico(medico, res) {
       connection.acquire(function(err, con) {
	      con.query( "insert into Medico(crmv, nomeMedico, Estado, Cidade, perfilMedico, emailMedico, telefoneMedico, senhaMedico) values(?,?,?,?,?,?,?,?)", [medico.crmv, medico.nomeMedico, medico.Estados, medico.Cidade, medico.perfilMedico, medico.emailMedico, medico.telefoneMedico, medico.senhaMedico], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
		  });
		});
	};
	//Atualizações e inserções
	//Atualização de cadastro médico
	function atualizarMedico(medico, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Medico set emailMedico = ?, telefoneMedico = ?, perfilMedico = ? where idusuario = ?", [medico.emailMedico, medico.telefoneMedico, medico.perfilMedico, usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Inserir auxiliar ao médico na tablela auxiliar médico
	function inserirAuxiliarMedico(auxiliar, usuario, res) {
    connection.acquire(function(err, con) {
      con.query( "insert into Medico_Auxiliar(Medico, Auxiliar) values(?,?)", [usuario.idusuario, auxiliar.idauxiliar], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Atualização de senha do médico
	function atualizarSenhaMedico(medico, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Medico set senhaMedico = ? where idusuario = ?", [medico.senhaMedico, usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Exclusões
	//Excluir cadastro médico
	function excluirMedico(usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Medico, Medico_Auxiliar using Medico inner join Medico_Auxiliar where Medico.idusuario = Medico_Auxiliar.Medico and Medico.idusuario = ?", [usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'Failed to delete'});
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
	//Excluir vinculo com auxiliar
	function excluirAuxiliarMedico(usuario, auxiliar, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Medico_Auxiliar where Medico_Auxiliar.Medico = ? and Medico_Auxiliar.Auxiliar = ?", [usuario.idusuario, auxiliar.idauxiliar], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'Failed to delete'});
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
	//Consultas
	//Tela dos Auxiliares: medicos que os auxiliares prestam serviços
	function listarMedicosDosAuxiliares(usuario, res){
		connection.acquire(function(err, con){
			con.query("select crmv, nomeMedico, emailMedico, telefoneMedico from Medico, Auxiliar, Medico_Auxiliar where Medico_Auxiliar.Auxiliar = Auxiliar.idusuario and Medico_Auxiliar.Medico = Medico.idusuario and Auxiliar.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela dos Medicos: Perfil dos Médicos
	function perfilMedico(usuario, res){
		connection.acquire(function(err, con){
			con.query("select Medico.crmv, nomeMedico, telefoneMedico, emailMedico, perfilMedico, Estados.nomeEstados, Cidade.nomeCidade from Medico, EstadosCidade, Estados, Cidade where Medico.Estado = EstadosCidade.Estados and EstadosCidade.Estados = Estados.idEstados and Medico.Cidade = EstadosCidade.Cidade and EstadosCidade.Cidade = Cidade.idCidade and Medico.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela dos Responsaveis: Medicos e seus auxiliares
	function listarMedicoseAuxiliares(usuario, res){
		connection.acquire(function(err, con){
			con.query("select Medico.crmv, nomeMedico, nomeAuxiliar, telefoneAuxiliar from Medico, Auxiliar, Responsavel, Medico_Auxiliar, Estados where Medico_Auxiliar.Medico = Medico.idusuario and Medico_Auxiliar.Auxiliar = Auxiliar.idusuario and Medico.Estado = Responsavel.Estado and Medico.Estado = Estados.idEstados and Responsavel.Estado = Estados.idEstados and Responsavel.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Clinica: medicos cadastrados no meso estado da clinica
	function listarMedicoCadastrados(cnpjClinica, res){
		connection.acquire(function(err, con){
			con.query("select crmv, nomeMedico, telefoneMedico, emailMedico from Medico, Estados, Clinica where Medico.Estados = Clinica.Estados and Medico.Estados = Estados.idEstados and Clinica.Estados = Estados.idEstados and Clinica.cnpj = "+cnpjClinica+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Clinica: medicos cadastrados na clinica
	function listarMedicoClinica(cnpjClinica, res){
		connection.acquire(function(err, con){
			con.query("select crmv, nomeMedico, emailMedico, telefoneMedico from Medico, Clinica, Clinica_Medicos, Estados where Medico.Estados = Clinica.Estados and Clinica_Medicos.cnpjClinica = Clinica.cnpj and Clinica_Medicos.crmvMedico = Medico.crmv and Medico.Estados = Estados.idEstados and Clinica.Estados = Estados.idEstados and Clinica.cnpj = "+cnpjClinica+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
///////////////////////////////////////////////////Classe Auxiliar/////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Classe Auxiliar e todas as suas referenciias
	//Cadastra Auxiliar
	function cadastraAuxiliar(auxiliar, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Auxiliar(cpfAuxiliar, nomeAuxiliar, telefoneAuxiliar, emailAuxiliar, senhaAuxiliar, enderecoAuxiliar, Estado, Cidade) values(?,?,?,?,?,?,?,?)", [auxiliar.cpfAuxiliar,auxiliar.nomeAuxiliar,auxiliar.telefoneAuxiliar,auxiliar.emailAuxiliar,auxiliar.senhaAuxiliar,auxiliar.enderecoAuxiliar, auxiliar.Estados, auxiliar.Cidade], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Atualizações
	//Atualização de cadastro completa auxiliar
	function atualizarAuxiliar(auxiliar, usuario, res) {
	    connection.acquire(function(err, con){
	      con.query("update Auxiliar set telefoneAuxiliar= ?, emailAuxiliar= ?, enderecoAuxiliar = ? where Auxiliar.idusuario= ?", [auxiliar.telefoneAuxiliar, auxiliar.emailAuxiliar, auxiliar.enderecoAuxiliar, usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Atualizar Senha auxiliar
	function atualizarSenhaAuxiliar(auxiliar, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Auxiliar set Auxiliar.senhaAuxiliar = ? where Auxiliar.idusuario = ?", [auxiliar.senhaAuxiliar, usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Excluir Auxiliar
	function excluirAuxiliar(usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Auxiliar, Medico_Auxiliar using Auxiliar inner join Medico_Auxiliar where Auxiliar.idusuario = Medico_Auxiliar.Auxiliar and Auxiliar.idusuario = ?", [usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          con.query("delete from Auxiliar where Auxiliar.idusuario = ?",[usuario.idusuario], function(err, result){
		          	con.release();
		        if (err) {
		          res.send({status: 1, message: 'TODO update failed'});
		        } else {
		          res.send({status: 0, message: 'TODO updated successfully'});
		        }
	          })
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
	//Consultas
	//tela medicos: auxiliares dos medicos
	function listarAuxiliaresDoMedicos(usuario, res){
		console.log("função Auxiliar Medicos");
		console.log(usuario);
		connection.acquire(function(err, con){
			con.query("select Auxiliar.idusuario, Auxiliar.cpfAuxiliar, nomeAuxiliar, emailAuxiliar, telefoneAuxiliar from Auxiliar, Medico, Medico_Auxiliar where Medico_Auxiliar.Medico = Medico.idusuario and Auxiliar.idusuario = Medico_Auxiliar.Auxiliar and Medico.idusuario=?", [usuario.idusuario], function(err, result){
				con.release();
				res.status(200);
				res.json(result);
				console.log(result);
			});
		});
	};
	//Tela dos medicos: auxiliares cadastrados no mesmo estado dos medicos
	function listarAuxiliaresCadastrados(usuario, res){
		connection.acquire(function(err, con){
			con.query("select Auxiliar.idusuario, nomeAuxiliar, telefoneAuxiliar, emailAuxiliar from Auxiliar, Medico where Auxiliar.Estado = Medico.Estado and Medico.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
///////////////////////////////////////////////////Classe Animal///////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Classe Animal e todas as suas referencias
	//Cadastros
	//cadastro animal feito pelo usuario
	function cadastroAnimalResp(animalRes, usuario, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Animal(nomeAnimal, Especie, Raca, Responsavel) values(?,?,?,?)", [animalRes.nomeAnimal, animalRes.Especie, animalRes.Raca, usuario.idusuario], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Cadastro feito pelo Medico
	function cadastraAnimalMedico(animalMed, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Animal(cpfResponsavel, nomeAnimal, crmvMedico, Especie, Raca) values(?,?,?,?,?)", [animalMed.cpfResponsavel, animalMed.nomeAnimal, animalMed.crmv, animalMed.Especie, animalMed.Raca], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Cadastro feito pelo auxiliar
	function cadastraAnimalAuxiliar(cadastroAniAux, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Animal(cpfResponsavel, nomeAnimal, cpfAuxiliar, crmvMedico, Especie, Raca) values(?,?,?,?,?,?)", [cadastroAniAux.cpfResponsavel, cadastroAniAux.nomeAnimal, cadastroAniAux.cpfAuxiliar, cadastroAniAux.crmv, cadastroAniAux.Especie, cadastroAniAux.Raca], function(err, result) {
        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO creation failed'});
	        } else {
	          res.send({status: 0, message: 'TODO created successfully'});
	        }
	    });
	  });
	};
	//Inserções e Atualizações
	//Inserir historico apenas pelo Médico
	function inserirHistoricoAnimal(animal, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Animal set historicoAnimal = ? where Animal.Medico = ? and Animal.idAnimal = ?", [animal.historicoAnimal, usuario.idusuario, animal.idAnimal], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Inserir Animal ao auxiliar apenas pelo auxiliar
	function inserirAnimalAuxiliar(usuario, animal, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Animal set Animal.Auxiliar = ? where Animal.idAnimal = ?", [usuario.idusuario, animal.idAnimal], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Inserir Animal ao medicos apenas o médico
	function inserirAnimalMedico(animal, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Animal set Animal.Medico = ? where Animal.idAnimal = ?", [usuario.idusuario, animal.idAnimal], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//passar o animal e o resultado da anemia
	function inserirAnemia(animal, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Animal set Animal.Anemia = ? where Animal.Medico = ? and Animal.idAnimal = ?", [animal.idanemia, usuario.idusuario, animal.idAnimal], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'TODO update failed'});
	        } else {
	          res.send({status: 0, message: 'TODO updated successfully'});
	        }
	      });
	    });
	};
	//Responsavel exclui o animal
	function deletarAnimalDoResponsavel(animal, usuario, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Animal where Animal.idAnimal = ? and Animal.Responsavel = ?", [animal.idAnimal, usuario.idusuario], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 1, message: 'Failed to delete'});
	        } else {
	          res.send({status: 0, message: 'Deleted successfully'});
	        }
	      });
	    });
	};
	//Consultas
	//Tela Auxiliar: animais dos médico que o auxiliar presta serviço
	//listarAnimaisDosMedicosAuxiliares
	function listarAnimaisDosMedicosAuxiliares (usuario, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, nomeEspecie, nomeRaca, crmv, nomeMedico, telefoneMedico from Animal, Medico, Auxiliar, Medico_Auxiliar, Especie, Raca where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Medico_Auxiliar.Auxiliar = Auxiliar.idusuario and Medico_Auxiliar.Medico = Medico.idusuario and Animal.Medico = Medico.idusuario and Auxiliar.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Auxiliar: animais que os auxiliares estão relacionados
	//listarAnimaisDosAuxiliares
	function listarAnimaisDosAuxiliares (usuario, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, nomeEspecie, nomeRaca, nomeResponsavel, telefoneResponsavel from Animal, Responsavel, Auxiliar, Especie, Raca where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.Responsavel = Responsavel.idusuario and Animal.Auxiliar = Auxiliar.idusuario and Auxiliar.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Responsavel: animais dos responsaveis
	//listarAnimaisResponsavel
	function listarAnimaisResponsavel (usuario,res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, Especie.nomeEspecie, Raca.nomeRaca from Animal, Especie, Raca, Responsavel where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.Responsavel = Responsavel.idusuario and Responsavel.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Médico; lista os animais dos medicos
	//listarAnimaisMedico
	function listarAnimaisMedico (usuario, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, Especie.nomeEspecie, Raca.nomeRaca, Responsavel. nomeResponsavel, Responsavel.telefoneResponsavel from Animal, Especie, Raca, Responsavel, Medico where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.Medico = Medico.idusuario and Animal.Responsavel = Responsavel.idusuario and Medico.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Médico: animais cadastrados na mesma cidade que o médico
	//listarAnimaisCadastrados
	function listarAnimaisCadastrados (usuario, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, Especie.nomeEspecie, Raca.nomeRaca, Responsavel.nomeResponsavel, Responsavel.telefoneResponsavel from Animal, Responsavel, Estados, Medico, Especie, Raca where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.Responsavel = Responsavel.idusuario and Responsavel.Estado = Estados.idEstados and Medico.Estado = Estados.idEstados and Responsavel.Estado = Medico.Estado and Medico.idusuario = ?", [usuario.idusuario], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
///////////////////////////////////////////////////Outros Codigos//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function listaEstados(req, res){
		connection.acquire(function(err, con){
			con.query("select*from Estados", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

	function listaCidadeEstados(idEstados, res){
		connection.acquire(function(err,con){
			con.query("select idCidade, nomeCidade from Estados, Cidade, EstadosCidade where Estados.idEstados = EstadosCidade.Estados and Cidade.idCidade = EstadosCidade.Cidade and Estados.idEstados = ?", [idEstados], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

	function especies(req, res){
		connection.acquire(function(err, con){
			con.query("select*from Especie", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

	function raca(idEspecie, res){
		connection.acquire(function(err, con){
			con.query("select idRaca, nomeRaca from Especie, Raca, EspecieRaca where Especie.idEspecie = EspecieRaca.Especie and Raca.idRaca = EspecieRaca.Raca and Especie.idEspecie = ?", [idEspecie], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
///////////////////////////////////////////////////Autenticação//////////////////////////////////////////////////////////////////////////////////////////////////	
	
	function getusuario(tipo){
		return new Promise(function(resolve, reject){
			connection.acquire(function(err,con){
				con.query("select usuario.idusuario from usuario where idusuario = ?", [tipo], function(err, result){
					console.log("função getusuario");
					console.log(tipo);
					con.release();
					if(err){
						reject(err);
					}
					resolve(result);
					console.log("função getusuario resposta");
					console.log(result);
				});
			});
		});
	};

	function autenticacaoDoMedico(usuario, res, rows){
		connection.acquire(function(err, con){
			con.query("select Medico.idusuario from Medico where Medico.crmv = ? and Medico.senhaMedico = ?", [usuario.username, usuario.password], function(err, result, rows){
				con.release();
				if (result.length == 0) {
					res.status(403);
					return res.json("erro autenticação")
				}
				var token = auth.sign(result[0], 1)
				console.log("autenticação medico usuario login");
				console.log(usuario.username);
				console.log("autenticação medico");
				console.log(result[0]);
				res.json({
					user:result[0],
					token:token
				});
			});
		});
	};

	function autenticacaoDoAuxiliar(usuario, res){
		connection.acquire(function(err, con){
			con.query("select Auxiliar.idusuario from Auxiliar where Auxiliar.cpfAuxiliar = ? and Auxiliar.senhaAuxiliar = ?", [usuario.username, usuario.password], function(err, result){
				con.release();
				if (result.length == 0) {
					res.status(403);
					return res.json("erro autenticação")
				}
				var token = auth.sign(result[0], 2)
				res.json({
					user:result[0],
					token:token
				});
			});
		});
	};

	function autenticacaoClinica(usuario, res){
		connection.acquire(function(err, con){
			con.query("select Clinica.cnpj, Clinica.nomeClinica from Clinica where Clinica.cnpj = ? and Clinica.senhaClinca = ?", [usuario.username, usuario.password], function(err, result){
				con.release();
				if (result.length == 0) {
					res.status(403);
					return res.json("erro autenticação")
				}
				var token = auth.sign(result[0], 3)
				res.json({
					user:result[0],
					token:token
				});
			});
		});
	};

	function autenticacaoDoResponsavel(usuario, res){	
		connection.acquire(function(err, con){
			con.query("select Responsavel.idusuario from Responsavel where cpfResponsavel = ? and senhaResponsavel = ?", [usuario.username, usuario.password], function(err, result){
				con.release();
				if (result.length == 0) {
					res.status(403);
					return res.json("erro autenticação")
				}
				var token = auth.sign(result[0], 4)
				res.json({
					user:result[0],
					token:token
				});
			});
		});
	};

	function anemiaMacrociticaNormocromica(res){
		connection.acquire(function(err, con){
			con.query("select tipoAnemia, descricaoAnemia from Anemia where idAnemia = 1", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

	function anemiaMacrociticaHipocromica(res){
		connection.acquire(function(err, con){
			con.query("select tipoAnemia, descricaoAnemia from Anemia where idAnemia = 2", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

	function anemiaMicrociticoNormocromico(res){
		connection.acquire(function(err, con){
			con.query("select tipoAnemia, descricaoAnemia from Anemia where idAnemia = 3", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

	function anemiaMicrociticoHipocromico(res){
		connection.acquire(function(err, con){
			con.query("select tipoAnemia, descricaoAnemia from Anemia where idAnemia = 4", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};





module.exports = {
	 cadastraClinica :  cadastraClinica,
	 atualizarClinica :  atualizarClinica,
	 cadastraClinica :  cadastraClinica,
	 excluirClinica :  excluirClinica,
	 excluirMedicoClinica :  excluirMedicoClinica,
	 cadastraResponsavel :  cadastraResponsavel,
	 atualizarDadosResponsavel :  atualizarDadosResponsavel,
	 atualizarContatosResponsavel :  atualizarContatosResponsavel,
	 atualizarSenhaResponsavel :  atualizarSenhaResponsavel,
	 excluirRegistroResponsavel :  excluirRegistroResponsavel,
	 perfilResponsavel :  perfilResponsavel,
	 cadastraMedico :  cadastraMedico,
	 atualizarMedico :  atualizarMedico,
	 inserirAuxiliarMedico :  inserirAuxiliarMedico,
	 atualizarSenhaMedico :  atualizarSenhaMedico,
	 excluirMedico :  excluirMedico,
	 excluirAuxiliarMedico :  excluirAuxiliarMedico,
	 listarMedicosDosAuxiliares :  listarMedicosDosAuxiliares,
	 perfilMedico :  perfilMedico,
	 listarMedicoseAuxiliares :  listarMedicoseAuxiliares,
	 listarMedicoCadastrados :  listarMedicoCadastrados,
	 listarMedicoClinica :  listarMedicoClinica,
	 cadastraAuxiliar :  cadastraAuxiliar,
	 atualizarAuxiliar :  atualizarAuxiliar,
	 atualizarAuxiliar :  atualizarAuxiliar,
	 excluirAuxiliar :  excluirAuxiliar,
	 listarAuxiliaresDoMedicos:  listarAuxiliaresDoMedicos,
	 listarAuxiliaresCadastrados :  listarAuxiliaresCadastrados,
	 cadastroAnimalResp :  cadastroAnimalResp,
	 cadastraAnimalMedico :  cadastraAnimalMedico,
	 cadastraAnimalAuxiliar : cadastraAnimalAuxiliar,
	 inserirHistoricoAnimal :  inserirHistoricoAnimal,
	 inserirAnimalMedico :  inserirAnimalMedico,
	 inserirAnemia :  inserirAnemia,
	 deletarAnimalDoResponsavel :  deletarAnimalDoResponsavel,
	 listarAnimaisDosMedicosAuxiliares :  listarAnimaisDosMedicosAuxiliares,
	 listarAnimaisDosAuxiliares :  listarAnimaisDosAuxiliares,
	 listarAnimaisResponsavel :  listarAnimaisResponsavel,
	 listarAnimaisMedico :  listarAnimaisMedico,
	 listarAnimaisCadastrados :  listarAnimaisCadastrados,
	 listaEstados : listaEstados,
	 listaCidadeEstados : listaCidadeEstados,
	 especies : especies,
	 raca : raca,
	 autenticacaoDoMedico : autenticacaoDoMedico,
	 autenticacaoDoAuxiliar : autenticacaoDoAuxiliar,
	 autenticacaoDoResponsavel : autenticacaoDoResponsavel,
	 autenticacaoClinica : autenticacaoClinica,
	 anemiaMacrociticaNormocromica : anemiaMacrociticaNormocromica,
	 anemiaMacrociticaHipocromica : anemiaMacrociticaHipocromica,
	 anemiaMicrociticoNormocromico : anemiaMicrociticoNormocromico,
	 anemiaMicrociticoHipocromico : anemiaMicrociticoHipocromico,
	 getusuario : getusuario
};


