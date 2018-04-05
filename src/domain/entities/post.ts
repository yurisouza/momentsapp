import { ErrorModel } from "./errormodel";
import { DateTime } from "ionic-angular";

export class Post {
    public PostKey : string; 
    public CreateAt : DateTime; 
    public PostType : string; 
    public Url : string; 
    public errors : Array<ErrorModel>;
}