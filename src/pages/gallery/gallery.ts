import { Moment } from './../../domain/entities/moment';
import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { PostService } from '../../domain/services/post.service';
import { UserRepository } from '../../domain/repositories/user.repository';
import { Post } from '../../domain/entities/post';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  public posts : Array<Post>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _postService: PostService, public loadingCtrl: LoadingController) {

    var moment : Moment = this.navParams.get('moment');
    if (moment != null) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

      _postService.GetPosts(moment.MomentKey).subscribe(resp => {
        if (resp.errors == null) {
          this.posts = resp.Result;
          loading.dismiss();
        } else {
          console.log("erro");
          loading.dismiss();
        }
      });
    }
  }

}
