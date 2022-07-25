import { Comment } from "./comment";
import { User } from "./user";

export interface Blog{
    id: number|null;
    title: String;
    text: String;
    imgUrl: String|null;
    user_id: String|null;
    user: User|null;
    comments: Comment[]|null;
    picture:String|null;
}