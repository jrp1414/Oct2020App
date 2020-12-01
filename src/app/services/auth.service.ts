import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:"root"
})
export class AuthService{
    constructor(private http:HttpClient) {
        
    }

    private baseUrl:string="http://localhost:44319/";

    SignUp(user:any):Observable<any>{
        return this.http.post(this.baseUrl+"SignUpUser",user);
    }

}