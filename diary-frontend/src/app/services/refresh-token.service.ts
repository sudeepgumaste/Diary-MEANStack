import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { backendUrl } from '../config'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  refreshUrl:string = `${backendUrl}/auth/refresh`
  
  constructor(private http:HttpClient) { }
  
  refreshToken(token: string):Observable<any>{
    const req = {
      token
    }
    return this.http.post<Object>(this.refreshUrl,req,httpOptions)
  }
}
