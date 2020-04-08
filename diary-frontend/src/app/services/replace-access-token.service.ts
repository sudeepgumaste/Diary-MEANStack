import { Injectable } from '@angular/core';
import { RefreshTokenService } from './refresh-token.service';

@Injectable({
  providedIn: 'root'
})
export class ReplaceAccessTokenService {

  constructor(private refreshTokenService: RefreshTokenService) { }

  setAccessToken() {
    this.refreshTokenService.refreshToken(localStorage.getItem('refreshToken'))
      .subscribe(
        data => localStorage.setItem('accessToken', data.accessToken),
        error => {
          console.log('Error refreshing token')
          console.log(error)
        }
      )
  }
}
