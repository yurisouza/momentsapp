import { ErrorModel } from "./errormodel";
import { DateTime } from "ionic-angular";
import { Post } from "./post";

export class Moment {
    public MomentKey : string;
    public Name : string;
    public CreateAt : DateTime; 
    public DateTime : DateTime; 
    public Posts : Array<Post>; 
    public errors : Array<ErrorModel>;
}