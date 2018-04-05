import { TabsPage } from './../../pages/tabs/tabs';
import { LoginPage } from './../../pages/login/login';
import { Injectable, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { User } from '../entities/user';
import { NavController, App } from 'ionic-angular';

@Injectable()
export class UserRepository{
    
    constructor(private storage: Storage) { }

    public insert(user : User){
        return this.storage.set("user", user);
    }

    public remove(){
        return this.storage.remove("user");
    }

    public get() : Promise<User>{
        return this.storage.get("user");
    }

    public count() {
        return this.storage.length();
    }
}