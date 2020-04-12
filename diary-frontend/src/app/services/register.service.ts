import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Register } from '../models/register.models';
import { backendUrl } from '../config'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl:string = `${backendUrl}/auth/register`

  constructor(private http:HttpClient) { }

  registerUser(register: Register):Observable<any>{
    return this.http.post<Register>(this.registerUrl,register,httpOptions)
  }
}
