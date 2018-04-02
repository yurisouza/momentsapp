import { ErrorModel } from "./errormodel";

export class User {
    public username : string;
    public password : string;
    public userKey : string;
    public errors : Array<ErrorModel>;
}