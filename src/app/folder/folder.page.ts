import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {


  constructor(public navCTRL: NavController) { }

  ngOnInit() {
  
  }

  carregarTela(tela){
    this.navCTRL.navigateForward(tela);
  }

}