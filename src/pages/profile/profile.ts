import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { OptionsPage } from './../options/options';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl : NavController) {
  }

  public openOptions(){
    this.navCtrl.push(OptionsPage);
  }

}
