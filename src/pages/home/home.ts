import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { UserRepository } from '../../domain/repositories/user.repository';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
