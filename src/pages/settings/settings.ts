import { Component } from '@angular/core';
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor (private alertCtrl:AlertController){

  }

  onToggleLight(){
    let alert = this.alertCtrl.create({
      title: 'Etes vous sur de vouloir continuer ?',
      subTitle:'Cette action allumere ou éteindra toutes les lumières de la maison',
      buttons:[
        {
          text:'Annuler',
          role:'cancel'
        },
        {
          text:'Confirmer',
          handler:() => console.log('Confirmé !')
        }
      ]
    });
    alert.present();
  }
}
