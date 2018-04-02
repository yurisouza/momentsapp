import { TabsPage } from './../pages/tabs/tabs';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild  } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserRepository } from '../domain/repositories/user.repository';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild('myNav') nav: NavController
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}