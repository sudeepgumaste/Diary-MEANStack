import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authUrl:string = `http://localhost:5000/api/auth`

  constructor(private http:HttpClient) { }

  loginUser(login:any):Observable<any>{
    const loginUrl = `${this.authUrl}/login`
    return this.http.post<any>(loginUrl,login,httpOptions)
  }

}
