import { SERVER_BASE_URL } from './../utilities/constants';
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Moment } from '../entities/moment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

    private endpoint = SERVER_BASE_URL + "posts";
    private _headers: Headers;

    constructor(private _http: Http) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    public GetPosts(momentKey) {
        return this._http
            .get(this.endpoint + "/" + momentKey, { headers: this._headers })
            .map(res => res.json());
    }
}