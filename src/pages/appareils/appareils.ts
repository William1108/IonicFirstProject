import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {SingleAppareilPage} from "./single-appareil/single-appareil";

@Component({
  selector: 'pages-appareils',
  templateUrl:'appareils.html'
})

export class AppareilsPage{

  constructor(private navCtrl: NavController) {
  }

  onLoadAppareil(name: string ){
    this.navCtrl.push(SingleAppareilPage,{appareilName:name});
  }
}
