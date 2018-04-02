import { SERVER_BASE_URL } from './../utilities/constants';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { User } from "../entities/user";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    private endpoint = SERVER_BASE_URL + "authentication";
    private _headers: Headers;

    constructor(private _http: Http) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    public Token(user: User) : Observable<User>{
        return this._http
            .post(this.endpoint, user, { headers: this._headers })
            .map((res:Response) => res.json());
    }
}