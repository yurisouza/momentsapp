import { GalleryPage } from './../gallery/gallery';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MomentService } from '../../domain/services/moment.service';
import { Moment } from '../../domain/entities/moment';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user';

@Component({
  selector: 'page-moments',
  templateUrl: 'moments.html'
})
export class MomentsPage {

  public moments : Array<Moment>;

  constructor(public navCtrl: NavController, private _momentService: MomentService, private _userRepository: UserRepository, public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this._userRepository.get().then((resp: User) => {
      if (resp != null) {
        _momentService.GetMoments(resp.userKey).subscribe(resp => {
          if (resp.errors == null) {
            this.moments = resp.Result;
            loading.dismiss();
          }else{
            console.log("erro");
            loading.dismiss();
          }
        });
      }
    });
  }

  public openGallery(moment : Moment) {
    this.navCtrl.push(GalleryPage, {moment : moment});
  }

}
