import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'

import { Login } from '../../models/login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginData:Login = {
      email: this.email,
      password: this.password
    }

    this.loginService.loginUser(loginData).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
      },
      error=>console.log(error)
    )
  }
}
