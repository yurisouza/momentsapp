import { FriendsPage } from './../pages/friends/friends';
import { GalleryPage } from './../pages/gallery/gallery';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileDetailPage } from './../pages/profileDetail/profileDetail';
import { MomentsPage } from '../pages/moments/moments';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProvidersModule } from '../domain/providers.module';

import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IonicStorageModule } from '@ionic/storage';
import { OptionsPage } from '../pages/options/options';

@NgModule({
  declarations: [
    MyApp,
    MomentsPage,
    GalleryPage,
    ProfilePage,
    ProfileDetailPage,
    FriendsPage,
    OptionsPage,
    HomePage,
    LoginPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrowserModule,
    HttpModule,
    ProvidersModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MomentsPage,
    GalleryPage,
    LoginPage,
    ProfilePage,
    ProfileDetailPage,
    FriendsPage,
    OptionsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
