var connection = require('../connection')

///////////////////////////////////////////////////Classe Clinica//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Classe Clinica
	//Cadastro Clinica 
	function cadastraClinica(cadastroClin, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Clinica(cnpj, nomeClinica, enderecoClinica, telefoneClinicaResidencial, telefoneClincaCelular, telefoneClnicaOutros, emailClinica, senhaClinca, perfilClinica, Estados, Cidade) values(?,?,?,?,?,?,?,?,?,?,?)", [cadastroClin.cnpj, cadastroClin.nomeClinica, cadastroClin.enderecoClinica, cadastroClin.telefoneClinicaResidencial, cadastroClin.telefoneClincaCelular, cadastroClin.telefoneClnicaOutros, cadastroClin.emailClinica, cadastroClin.senhaClinca, cadastroClin.perfilClinica, cadastroClin.Estados, cadastroClin.Cidade], function(err, result) {
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
		      con.query( "insert into Responsavel(cpfResponsavel, nomeResponsavel, enderecoResponsavel, telefoneResponsavel, emailResponsavel, senhaResponsavel, Estados, Cidade) values(?,?,?,?,?,?,?,?)", [responsavel.cpfResponsavel,responsavel.nomeResponsavel,responsavel.enderecoResponsavel,responsavel.telefoneResponsavel,responsavel.emailResponsavel,responsavel.senhaResponsavel,responsavel.Estados,responsavel.Cidade] , function(err, result) {
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
	function atualizarDadosResponsavel(responsavelUpdateDados, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Responsavel set nomeResponsavel = ?, enderecoResponsavel = ? where cpfResponsavel = ?", [responsavelUpdateDados.nomeResponsavel ,responsavelUpdateDados.enderecoResponsavel, responsavelUpdateDados.cpfResponsavel], function(err, result){
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
	function atualizarContatosResponsavel(responsavelUpdateContatos, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Responsavel set telefoneResponsavel = ?, emailResponsavel = ? where cpfResponsavel = ?", [responsavelUpdateContatos.telefoneResponsavel ,responsavelUpdateContatos.emailResponsavel,responsavelUpdateContatos.cpfResponsavel], function(err, result) {
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
	function atualizarSenhaResponsavel(responsavelUpdateSenha, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Responsavel set senhaResponsavel = ? where cpfResponsavel = ?", [responsavelUpdateSenha.senhaResponsavel ,responsavelUpdateSenha.cpfResponsavel], function(err, result) {
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
	function excluirRegistroResponsavel(responsavel, res) {
	    connection.acquire(function(err, con) {
	      con.query( "delete from Responsavel, Animal using Responsavel inner join Animal where Responsavel.cpfResponsavel = Animal.cpfResponsavel and Responsavel.cpfResponsavel = ?", [responsavel.cpfResponsavel],function(err, result) {
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
	function perfilResponsavel(cpfResponsavel, res){
		connection.acquire(function(err, con){
			con.query("select Responsavel.cpfResponsavel, nomeResponsavel, enderecoResponsavel, telefoneResponsavel, emailResponsavel, nomeEstados, nomeCidade, nomeAnimal, nomeEspecie, nomeRaca from Animal, Responsavel, Especie_Raca, Especie, Raca, Estado_Cidade, Estados, Cidade where Responsavel.Estados = Estado_Cidade.Estados and Estado_Cidade.Estados = Estados.idEstados and Responsavel.Cidade = Estado_Cidade.Cidade and Estado_Cidade.Cidade = Cidade.idCidade and Animal.Especie = Especie_Raca.Especie and Especie_Raca.Especie = Especie.idEspecie and Animal.Raca = Especie_Raca.Raca and Especie_Raca.Raca = Raca.idRaca and Animal.cpfResponsavel = Responsavel.cpfResponsavel and Responsavel.cpfResponsavel = "+cpfResponsavel+" ", function(err, result){
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
	      con.query( "insert into Medico(crmv, nomeMedico, telefoneMedico, emailMedico, senhaMedico, perfilMedico, Estados, Cidade) values(?,?,?,?,?,?,?,?)", [medico.crmv, medico.nomeMedico, medico.telefoneMedico, medico.emailMedico, medico.senhaMedico, medico.perfilMedico, medico.Estados, medico.Cidade], function(err, result) {
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
	function atualizarMedico(atualizaMedico, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Medico set nomeMedico = ?, emailMedico = ?, telefoneMedico = ?, perfilMedico = ? where crmv = ?", [atualizaMedico.nomeMedico, atualizaMedico.emailMedico, atualizaMedico.telefoneMedico, atualizaMedico.perfilMedico, atualizaMedico.crmv], function(err, result) {
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
	function inserirAuxiliarMedico(auxiliarmedico, res) {
    connection.acquire(function(err, con) {
      con.query( "insert into Medico_Auxiliar(crmv, cpfAuxiliar) values(?,?)", [auxiliarmedico.crmv, auxiliarmedico.cpfAuxiliar], function(err, result) {
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
	function atualizarSenhaMedico(atualizaSenhaMedico, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Medico set senhaMedico = ? where crmv = ?", [atualizaSenhaMedico.senhaMedico, atualizaSenhaMedico.crmv], function(err, result) {
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
	function excluirMedico(crmv, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Medico, Medico_Auxiliar using Medico inner join Medico_Auxiliar where Medico.crmv = Medico_Auxiliar.CRMVMedico and crmv = "+crmv+"", function(err, result) {
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
	function excluirAuxiliarMedico(crmv, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Medico_Auxiliar where crmvMedico = "+crmv+"", function(err, result) {
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
	function listarMedicosDosAuxiliares(cpfAuxiliar, res){
		connection.acquire(function(err, con){
			con.query("select crmv, nomeMedico, emailMedico, telefoneMedico from Medico, Auxiliar, Medico_Auxiliar where Medico_Auxiliar.CPFAuxiliar = Auxiliar.cpfAuxiliar and Medico_Auxiliar.CRMVMedico = Medico.crmv and Auxiliar.cpfAuxiliar = "+cpfAuxiliar+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela dos Medicos: Perfil dos Médicos
	function perfilMedico(crmv, res){
		connection.acquire(function(err, con){
			con.query("select Medico.crmv, nomeMedico, telefoneMedico, emailMedico, perfilMedico, Estados.nomeEstados, Cidade.nomeCidade from Medico, Estado_Cidade, Estados, Cidade where Medico.Estados = Estado_Cidade.Estados and Estado_Cidade.Estados = Estados.idEstados and Medico.Cidade = Estado_Cidade.Cidade and Estado_Cidade.Cidade = Cidade.idCidade and Medico.crmv = "+crmv+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela dos Responsaveis: Medicos e seus auxiliares
	function listarMedicoseAuxiliares(cpfResponsavel, res){
		connection.acquire(function(err, con){
			con.query("select Medico.crmv, nomeMedico, nomeAuxiliar, telefoneAuxiliar from Medico, Auxiliar, Responsavel, Medico_Auxiliar, Estados where Medico_Auxiliar.CRMVMedico = Medico.crmv and Medico_Auxiliar.CPFAuxiliar = Auxiliar.cpfAuxiliar and Medico.Estados = Responsavel.Estados and Medico.Estados = Estados.idEstados and Responsavel.Estados = Estados.idEstados and Responsavel.cpfResponsavel = "+cpfResponsavel+"", function(err, result){
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
      con.query("insert into Auxiliar(cpfAuxiliar, nomeAuxiliar, telefoneAuxiliar, emailAuxiliar, senhaAuxiliar, enderecoAuxiliar, Estados, Cidade) values(?,?,?,?,?,?,?,?)", [auxiliar.cpfAuxiliar,auxiliar.nomeAuxiliar,auxiliar.telefoneAuxiliar,auxiliar.emailAuxiliar,auxiliar.senhaAuxiliar,auxiliar.enderecoAuxiliar, auxiliar.Estados, auxiliar.Cidade], function(err, result) {
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
	function atualizarAuxiliar(atualizaAuxiliar, res) {
	    connection.acquire(function(err, con){
	      con.query("update Auxiliar set Auxiliar.nomeAuxiliar= ?, telefoneAuxiliar= ?, emailAuxiliar= ?, enderecoAuxiliar=?, Auxiliar.Estados= ?, Auxiliar.Cidade= ? where Auxiliar.cpfAuxiliar= ?", [atualizaAuxiliar.nomeAuxiliar, atualizaAuxiliar.telefoneAuxiliar, atualizaAuxiliar.emailAuxiliar, atualizaAuxiliar.enderecoAuxiliar, atualizaAuxiliar.Estados, atualizaAuxiliar.Cidade, atualizaAuxiliar.cpfAuxiliar], function(err, result) {
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
	function atualizarSenhaAuxiliar(atualizaSenhaAuxiliar, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Auxiliar set Auxiliar.senhaAuxiliar = ? where Auxiliar.cpfAuxiliar = ?", [atualizaSenhaAuxiliar.senhaAuxiliar, atualizaSenhaAuxiliar.cpfAuxiliar], function(err, result) {
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
	function excluirAuxiliar(cpfAuxiliar, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Auxiliar, Medico_Auxiliar using Auxiliar inner join Medico_Auxiliar where Auxiliar.cpfAuxiliar = Medico_Auxiliar.CPFAuxiliar and Auxiliar.cpfAuxiliar = "+cpfAuxiliar+"", function(err, result) {
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
	//tela medicos: auxiliares dos medicos
	function listarAuxiliaresDoMedicos(crmv, res){
		connection.acquire(function(err, con){
			con.query('select Auxiliar.cpfAuxiliar, nomeAuxiliar, emailAuxiliar, telefoneAuxiliar from Auxiliar, Medico, Medico_Auxiliar where Medico_Auxiliar.CRMVMedico = Medico.crmv and Auxiliar.cpfAuxiliar = Medico_Auxiliar.CPFAuxiliar and Medico.crmv=?', [crmv], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela dos medicos: auxiliares cadastrados no mesmo estado dos medicos
	function listarAuxiliaresCadastrados(crmv, res){
		connection.acquire(function(err, con){
			con.query('select Auxiliar.cpfAuxiliar, nomeAuxiliar, emailAuxiliar, telefoneAuxiliar, Estados.nomeEstados from Auxiliar, Medico, Medico_Auxiliar, Estados where Medico.Estados = Estados.idEstados and Auxiliar.Estados = Estados.idEstados and Auxiliar.cpfAuxiliar = Medico_Auxiliar.CPFAuxiliar and Medico_Auxiliar.CRMVMedico = Medico.crmv and Medico.crmv=?', [crmv], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
///////////////////////////////////////////////////Classe Animal///////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Classe Animal e todas as suas referencias
	//Cadastros
	//cadastro animal feito pelo usuario
	function cadastroAnimalUsuario(animalRes, res) {
    connection.acquire(function(err, con) {
      con.query("insert into Animal(cpfResponsavel, nomeAnimal, Especie, Raca) values(?,?,?,?)", [animalRes.cpfResponsavel, animalRes.nomeAnimal, animalRes.Especie, animalRes.Raca], function(err, result) {
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
	function inserirHistoricoAnimal(historicoAnimal, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Animal set historicoAnimal = ? where Animal.crmvMedico = ?", [historicoAnimal.historicoAnimal, historicoAnimal.crmv], function(err, result) {
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
	function inserirAnimalAuxiliar(inserirAnimalAuxiliar, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Animal set Animal.cpfAuxiliar = ? where Animal.cpfResponsavel = ?", [inserirAnimalAuxiliar.cpfAuxiliar, inserirAnimalAuxiliar.cpfResponsavel], function(err, result) {
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
	function inserirAnimalMedico(adicionarAnimalMedico, res) {
	    connection.acquire(function(err, con) {
	      con.query("update Animal set Animal.crmvMedico = ? where Animal.cpfResponsavel = ?", [adicionarAnimalMedico.crmv, adicionarAnimalMedico.cpfResponsavel], function(err, result) {
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
	function inserirAnemia(inserirAnemia, res) {
	    connection.acquire(function(err, con) {
	      con.query( "update Animal set Animal.Anemia = ? where Animal.crmvMedico = ?", [inserirAnemia.Anemia, inserirAnemia.crmv], function(err, result) {
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
	function deletarAnimalDoResponsavel(cpfResponsavel, res) {
	    connection.acquire(function(err, con) {
	      con.query("delete from Animal where cpfResponsavel = "+cpfResponsavel+"", function(err, result) {
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
	function listarAnimaisDosMedicosAuxiliares (cpfAuxiliar, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, nomeEspecie, nomeRaca, crmv, nomeMedico, telefoneMedico from Animal, Medico, Auxiliar, Medico_Auxiliar, Especie, Raca where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Medico_Auxiliar.CPFAuxiliar = Auxiliar.cpfAuxiliar and Medico_Auxiliar.CRMVMedico = Medico.crmv and Animal.crmvMedico = Medico.crmv and Auxiliar.cpfAuxiliar = "+cpfAuxiliar+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Auxiliar: animais que os auxiliares estão relacionados
	//listarAnimaisDosAuxiliares
	function listarAnimaisDosAuxiliares (cpfAuxiliar, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, nomeEspecie, nomeRaca, nomeResponsavel, telefoneResponsavel from Animal, Responsavel, Auxiliar, Especie, Raca where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.cpfResponsavel = Responsavel.cpfResponsavel and Animal.cpfAuxiliar = Auxiliar.cpfAuxiliar and Auxiliar.cpfAuxiliar = "+cpfAuxiliar+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Responsavel: animais dos responsaveis
	//listarAnimaisResponsavel
	function listarAnimaisResponsavel (cpfResponsavel,res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, Especie.nomeEspecie, Raca.nomeRaca from Animal, Especie, Raca, Responsavel where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.cpfResponsavel = Responsavel.cpfResponsavel and Responsavel.cpfResponsavel = "+cpfResponsavel+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Médico; lista os animais dos medicos
	//listarAnimaisMedico
	function listarAnimaisMedico (crmv, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, Especie.nomeEspecie, Raca.nomeRaca, Responsavel. nomeResponsavel, Responsavel.telefoneResponsavel from Animal, Especie, Raca, Responsavel, Medico where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.crmvMedico = Medico.crmv and Animal.cpfResponsavel = Responsavel.cpfResponsavel and Medico.crmv = "+crmv+"", function(err, result){
				con.release();
				res.json(result);
			});
		});
	};
	//Tela Médico: animais cadastrados na mesma cidade que o médico
	//listarAnimaisCadastrados
	function listarAnimaisCadastrados (crmv, res){
		connection.acquire(function(err, con){
			con.query("select nomeAnimal, Especie.nomeEspecie, Raca.nomeRaca, Responsavel.nomeResponsavel, Responsavel.telefoneResponsavel from Animal, Responsavel, Estados, Medico, Especie, Raca where Animal.Especie = Especie.idEspecie and Animal.Raca = Raca.idRaca and Animal.cpfResponsavel = Responsavel.cpfResponsavel and Responsavel.Estados = Estados.idEstados and Medico.Estados = Estados.idEstados and Responsavel.Estados = Medico.Estados and Medico.crmv = "+crmv+"", function(err, result){
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

	function listaCidadeEstados(estado, res){
		connection.acquire(function(err,con){
			con.query("select idCidade, nomeCidade from Estados, Cidade, Estado_Cidade where Estados.idEstados = Estado_Cidade.Estados and Cidade.idCidade = Estado_Cidade.Cidade and Estados.nomeEstados = ?", [estado], function(err, result){
				con.release();
				res.json(result);
			});
		});
	};

///////////////////////////////////////////////////Autenticação//////////////////////////////////////////////////////////////////////////////////////////////////	

	function autenticaçãoDoMedico(usuario, res){
			connection.acquire(function(err, con){
				con.query("select Medico.crmv, Medico.nomeMedico, Estados.nomeEstados, Cidade.nomeCidade from Medico, Estado_Cidade, Estados, Cidade where Medico.Estados = Estado_Cidade.Estados and Medico.Cidade = Estado_Cidade.Cidade and Estado_Cidade.Estados = Estados.idEstados and Estado_Cidade.Cidade = Cidade.idCidade and Medico.crmv = ? and Medico.senhaMedico = ?", [usuario.crmv, usuario.senhaMedico], function(err, result){
					con.release();
					res.json(result);
				});
			});
		};

	function autenticaçãoDoAuxiliar(usuario, res){
			connection.acquire(function(err, con){
				con.query("select Auxiliar.cpfAuxiliar, Auxiliar.nomeAuxiliar, Estados.nomeEstados, Cidade.nomeCidade from Auxiliar, Estado_Cidade, Estados, Cidade where Auxiliar.Estados = Estado_Cidade.Estados and Auxiliar.Cidade = Estado_Cidade.Cidade and Estado_Cidade.Estados = Estados.idEstados and Estado_Cidade.Cidade = Cidade.idCidade and Auxiliar.cpfAuxiliar = ? and Auxiliar.senhaAuxiliar = ?", [usuario.cpfAuxiliar, usuario.senhaAuxiliar], function(err, result){
					con.release();
					res.json(result);
				});
			});
		};

	function autenticacaoDoResponsavel(usuario, res){	
			connection.acquire(function(err, con){
				con.query("select Responsavel.cpfResponsavel, Responsavel.nomeResponsavel, Estados.nomeEstados, Cidade.nomeCidade from Responsavel, Estados, Cidade, Estado_Cidade where Responsavel.Estados = Estado_Cidade.Estados and Responsavel.Cidade = Estado_Cidade.Cidade and Estado_Cidade.Estados= Estados.idEstados and Estado_Cidade.Cidade = Cidade.idCidade and cpfResponsavel = ? and senhaResponsavel = ?", [usuario.cpfResponsavel, usuario.senhaResponsavel], function(err, result){
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
	 cadastroAnimalUsuario :  cadastroAnimalUsuario,
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
	 autenticaçãoDeUsuario : autenticaçãoDeUsuario
};

