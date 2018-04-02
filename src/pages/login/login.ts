import { TabsPage } from './../tabs/tabs';
import { UserRepository } from './../../domain/repositories/user.repository';
import { AuthService } from './../../domain/services/auth.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../domain/entities/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public user = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _authService: AuthService, private _userRepository : UserRepository) {}

  ionViewDidLoad() {
    this.user.username = "yurisouza";
    this.user.password = "1234";
    this.AuthVerify();
  }

  private AuthVerify(){
    if(this.navParams.get('operation') != "desconectar"){
      this._userRepository.get().then(resp => {
            if(resp != null){
                this.navCtrl.push(TabsPage);
            }
        })
    }
  }

  submit(){
    this._authService.Token(this.user).subscribe(user => {
      if(user.errors == null){
        console.log("usuario correto");
        this._userRepository.insert(user);
        this.navCtrl.push(TabsPage);
      }else{
        console.log(user.errors);      
      }
    }, err => {
      console.log(err);
    });
  }
}
