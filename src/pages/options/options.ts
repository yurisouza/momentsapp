import { UserRepository } from './../../domain/repositories/user.repository';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  constructor(public navCtrl : NavController, public appCtrl: App, public userRepository : UserRepository) {
  }

  public desconectar(){
    //console.log("desconectar");
    this.userRepository.remove();
    //this.navCtrl.setRoot(LoginPage, { operation : "desconectar"});
    this.appCtrl.getRootNav().setRoot(LoginPage, { operation : "desconectar"});
  }
}
