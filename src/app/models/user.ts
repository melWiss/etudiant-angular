export interface User {
    id: number|null;
    name: String;
    email: String;
    password: String|null;
    is_admin:boolean;
}