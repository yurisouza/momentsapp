import { SERVER_BASE_URL } from './../utilities/constants';
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService{

    private _headers: Headers;

    constructor(private _http: Http) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json; charset=UTF-8');
    }
}