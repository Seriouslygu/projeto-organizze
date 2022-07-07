import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {
  public erroEmail; erroEmailConfir; erroSenha; erroSenhaConfir; erroNome; erroSobrenome; erroTelefone : boolean = false;
  constructor() { }



  validarEmail(valor: string) {
    if (valor == undefined || valor == '' || valor.search("@") == -1 || valor.indexOf(".") == -1) {
      this.erroEmail=true
    }
    else {
     this.erroEmail=false
    }
  }

  validarConfirmarEmail(valor: string, valor1:string) {
    if (valor1 == undefined || valor1 == '' || valor1.search("@") == -1 || valor1.indexOf(".") == -1 || valor !=valor1) {
      this.erroEmailConfir=true
    }
    else {
     this.erroEmailConfir=false
    }
  }

  validarSenha(valor: string) {
    if (valor == undefined || valor == '' || valor.length <= 8 || valor.match(/[@#$%&;*]/) == null || valor.match(/[0-9]/) == null) {
      this.erroSenha=true
    }
    else {
      this.erroSenha=false
    }
  }

  validarConfirmarSenha(valor: string, valor1:string) {
    if (valor == undefined || valor == '' || valor.length <= 8 || valor.match(/[@#$%&;*]/) == null || valor.match(/[0-9]/) == null || valor !=valor1) {
      this.erroSenhaConfir=true
    }
    else {
     this.erroSenhaConfir=false
    }
  }

  validarNome (valor: string){
    if (valor == undefined || valor == '' || valor.length <= 3|| valor.match(/[0-9]/) != null ||valor.match(/[@#$%&;*]/) != null || valor.length > 20) {
      this.erroNome=true
    }
    else {
      this.erroNome=false
    }
  }

 validarSobrenome (valor: string){
  if (valor == undefined || valor == '' || valor.length <= 3|| valor.match(/[0-9]/) != null ||valor.match(/[@#$%&;*]/) != null || valor.length > 20) {
    this.erroSobrenome=true
  }
  else {
    this.erroSobrenome=false
  }
  }
  
validarTelefone(valor: string) {
    if (valor == undefined || valor == '' || valor.length < 14) {
      this.erroTelefone=true
    }
    else {
      this.erroTelefone=false
        }
  }




}
