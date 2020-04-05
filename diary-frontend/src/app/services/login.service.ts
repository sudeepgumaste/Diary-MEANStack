import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../models/login.models';
import { backendUrl } from '../config'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl:string = `${backendUrl}/auth/login`

  constructor(private http:HttpClient) { }

  loginUser(login: Login):Observable<Login>{
    return this.http.post<Login>(this.loginUrl,login,httpOptions)
  }
}
