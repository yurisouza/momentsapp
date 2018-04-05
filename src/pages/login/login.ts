import { TabsPage } from './../tabs/tabs';
import { UserRepository } from './../../domain/repositories/user.repository';
import { AuthService } from './../../domain/services/auth.service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { User } from '../../domain/entities/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public user = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _authService: AuthService, private _userRepository : UserRepository, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    this.AuthVerify();
  }

  private AuthVerify(){
    if(this.navParams.get('operation') != "desconectar"){
      this._userRepository.get().then(resp => {
            if(resp != null){
                this.navCtrl.push(TabsPage);
            }
        });
    }
  }

  submit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this._authService.Token(this.user).subscribe(user => {
      if(user.errors == null){
        this._userRepository.insert(user);
        loading.dismiss();
        this.navCtrl.push(TabsPage);
      }else{
        console.log("error");
        loading.dismiss();
      }
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }
}
