export interface ResponseData<T>{
    success: boolean;
    data: T;
    message: String;
}