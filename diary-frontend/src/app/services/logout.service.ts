import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendUrl } from '../config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }

  url = `${backendUrl}/auth/logout`

  logoutUser(): Observable<any>{
    return this.http.post(this.url,{},httpOptions)
  }
}
