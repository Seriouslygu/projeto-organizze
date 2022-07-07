import { Component, OnInit } from '@angular/core';
import { CameraService } from '../service/camera.service';
import { GeralService } from '../service/geral.service';
import { ValidacaoService } from '../service/validacao.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public email; emailConfir; senha; senhaConfir; nome; sobrenome; telefone; sexo = "M"; nasc="2000/01/01";  cep; endereco; numero; complemento; bairro; cidade : string;
  public erroEmail; erroEmailConfir; erroSenha; erroSenhaConfir;erroNome; erroSobrenome; erroTelefone : boolean = false;
  
  constructor(public geralCtrl: GeralService, public validacaoCtrl: ValidacaoService, public cameraCtrl: CameraService) { }
  
    ngOnInit() {
    }
  
    maskTelefone(valor: string) {
      valor = valor.replace(/\D/g, "")
      valor = valor.replace(/^(\d)/, "($1")
      valor = valor.replace(/(.{3})(\d)/, "$1)$2")
      if (valor.length == 9) {
        valor = valor.replace(/(.{1})$/, "-$1")
      } else if (valor.length == 10) {
        valor = valor.replace(/(.{2})$/, "-$1")
      } else if (valor.length == 11) {
        valor = valor.replace(/(.{3})$/, "-$1")
      } else if (valor.length == 12) {
        valor = valor.replace(/(.{4})$/, "-$1")
      } else if (valor.length > 12) {
        valor = valor.replace(/(.{4})$/, "-$1")
      }
      this.telefone = valor
    }
    
    formatarData() {
      var data = this.nasc.split("T");
      this.nasc = data[0];
    }
    
    carregarcep(cep){
     this.geralCtrl.carregarCep(cep)
      .then((response: any) => {
        this.endereco = response.logradouro;
        this.bairro = response.bairro;
        this.cidade = response.localidade;
      })
      .catch((response) => {
  
      });
    }
  
    salvar(){
     //this.validacaoCtrl.validarEmail(this.email);
     // this.validacaoCtrl.validarConfirmarEmail(this.email, this.emailConfir);
     // this.validacaoCtrl.validarSenha(this.senha);
      //this.validacaoCtrl.validarConfirmarSenha(this.senha, this.senhaConfir);
      //this.validacaoCtrl.validarNome(this.nome);
      //this.validacaoCtrl.validarSobrenome(this.sobrenome);
      //this.validacaoCtrl.validarTelefone(this.telefone);   
  
      if(this.validacaoCtrl.erroEmail==true || this.validacaoCtrl.erroEmailConfir==true ||  this.validacaoCtrl.erroSenha==true|| this.validacaoCtrl.erroEmailConfir==true|| this.validacaoCtrl.erroNome==true ||   this.validacaoCtrl.erroSobrenome==true || this.validacaoCtrl.erroTelefone==true){
        this.geralCtrl.alertComum("Por favor, preencher os campo necessário")
        return false;
      }

  
  
  
    }

  
  }
  
  
  
  
  
  
  
  
  