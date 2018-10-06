import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import {OptionsPage} from "../pages/options/options";
import {AuthPage} from "../pages/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any  = TabsPage;
  optionsPage: any = OptionsPage;
  authPage:any = AuthPage
  @ViewChild('content') content: NavController;
  isAuth : boolean;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {

      // Initialize Firebase
      let config = {
        apiKey: "AIzaSyBJmdQYoOtFTrKzhp1M3t0GRadaaWQSWa0",
        authDomain: "ionicfirstproject-ca22c.firebaseapp.com",
        databaseURL: "https://ionicfirstproject-ca22c.firebaseio.com",
        projectId: "ionicfirstproject-ca22c",
        storageBucket: "",
        messagingSenderId: "750624686212"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user)=>{
            if(user){
              this.isAuth=true;
              this.content.setRoot(TabsPage);
            }else {
              this.isAuth=false;
              this.content.setRoot(AuthPage,{mode:'connect'});
            }
        }
      );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNavigate(page: any,data?:{}){
    this.content.setRoot(page,data ? data:null);
    this.menuCtrl.close();
  }
  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}
