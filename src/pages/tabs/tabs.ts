import { FriendsPage } from './../friends/friends';
import { ProfileDetailPage } from './../profileDetail/profileDetail';
import { Component } from '@angular/core';

import { MomentsPage } from '../moments/moments';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { App, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public mySelectedIndex : number;
  home = HomePage;
  moments = MomentsPage;
  friends = FriendsPage;
  tab3Root = ProfilePage;

  constructor(public appCtrl : App, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
