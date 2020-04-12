import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';

import { Login } from '../../models/login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  error: string;
  password: string;

  constructor(private loginService: LoginService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginData:Login = {
      email: this.email,
      password: this.password
    }

    this.loginService.loginUser(loginData).subscribe(
      data=>{
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
        this.route.navigate(['posts'])
      },
      error=>{
        this.error = error.error.msg
      }
    )
  }
}
