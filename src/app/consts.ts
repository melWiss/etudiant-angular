import { environment } from "src/environments/environment";

var baseUrl: String;
if (environment.production) {
    baseUrl = "/api";
} else {
    // const baseUrl:String = "http://127.0.0.1:8000/api";
    baseUrl = "https://etudiant-angular.herokuapp.com/api";
}

export { baseUrl };