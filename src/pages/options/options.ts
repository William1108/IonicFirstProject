import {Component} from "@angular/core";
import {MenuController} from "ionic-angular";


@Component({
  selector: 'page-home',
  templateUrl: 'options.html'
})
export class OptionsPage {
  constructor(private menuCtrl: MenuController){}

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
