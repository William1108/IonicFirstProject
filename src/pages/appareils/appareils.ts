import { Component } from '@angular/core';
import {SingleAppareilPage} from "./single-appareil/single-appareil";
import {ModalController} from "ionic-angular";

@Component({
  selector: 'pages-appareils',
  templateUrl:'appareils.html'
})

export class AppareilsPage{

  appareilsList = [
    {
      name:'Machine à laver',
      description:[
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consomation: 135 kWh/an'

      ]
    },
    {
      name:'Lavabo',
      description:[
        'Dimension: 40 pouces',
        'Consomation: 22 kWh/an'
      ]
    },
    {
      name:'Ordinateur',
      description:[
        'Marque: Asus',
        'Consomation: 500 kWh/an'
      ]
    }
    ];
  constructor(private modalCtrl:ModalController) {
  }

  onLoadAppareil(appareil: {name:string, description:string[]} ){
    let modal = this.modalCtrl.create(SingleAppareilPage,{appareil:appareil});
    modal.present();
  }
}
