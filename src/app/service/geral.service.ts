import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(public navCtrl:NavController, public alertCtrl:AlertController, public http:HttpClient) { }

  async alertInicial() {
    const alert = await this.alertCtrl.create({
      header: 'Organizze!',
      message: 'Deseja realmente sair dessa tela? ',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'secondary',
          handler: () => {
            this.navCtrl.navigateForward("folder/Inbox")
          }
        },
         {
          text: 'Não',
          role: 'não',
          handler: () => {
            
          }
        }
      ]
    });

    await alert.present();
  }
  
  carregarTela(page){
    this.navCtrl.navigateForward(page);
  }
  async alertComum(mensagem){
    let alertacomum = await this.alertCtrl.create({
      header: 'Organizze',
      message: mensagem,
      
      buttons: ['OK']
    });

    await alertacomum.present();

  }

  carregarCep(cep){
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';
    let headers = new HttpHeaders ({'contnt-Type': 'application/json'});
    return this.http.get(url).toPromise();
  }


  async alertConfirm() {
    const alert = await this.alertCtrl.create({
        header: 'Organizze',
      message: 'Tem certeza que deseja sair da tela',
      buttons: [

        {
          text: 'Não',
          role: 'nao',
         cssClass: 'secondary',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          role: 'sim',
          handler: () => {
            this.carregarTela("folder/Inbox")
          }
        }
      ]
    });

    await alert.present();
    
  }
}
