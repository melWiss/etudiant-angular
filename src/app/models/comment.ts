import { User } from "./user";

export interface Comment {
    id: number;
    comment: String;
    user_id: number;
    blog_id: number;
    user:User;
}