import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AppareilsPage} from "../pages/appareils/appareils";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SingleAppareilPage} from "../pages/appareils/single-appareil/single-appareil";
import {SettingsPage} from "../pages/settings/settings";
import {AppareilsService} from "../services/appareils.service";
import {OptionsPage} from "../pages/options/options";
import {AppareilFormPage} from "../pages/appareil-form/appareil-form";
import {AuthService} from "../services/auth.service";
import {AuthPage} from "../pages/auth/auth";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
  ],
  providers: [
    AppareilsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
