import { User } from "./user";

export interface Comment {
    id: number|null;
    comment: String;
    user_id: number|null;
    blog_id: number|null;
    user:User|null;
}