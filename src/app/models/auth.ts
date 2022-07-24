import { User } from "./user";

export interface Authentication{
    token:string|null;
    user:User|null;
}