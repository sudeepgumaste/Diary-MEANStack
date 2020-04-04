import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpservicesService {

  constructor(private http:HttpClient) {}

  postlogindata(data){
    return this.http.post<any>("http://localhost:5000/api/auth/login",data)
  }

  postregisterdata(data){
    return this.http.post<any>("http://localhost:5000/api/auth/register",data)
  }

  getfeeddata(){
    return this.http.get("")
  }
}
