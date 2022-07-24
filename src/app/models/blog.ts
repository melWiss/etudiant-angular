import { Comment } from "./comment";
import { User } from "./user";

export interface Blog{
    id: number;
    title: String;
    text: String;
    imgUrl: String|null;
    user_id: String;
    user: User;
    comments: Comment[]|null;
}