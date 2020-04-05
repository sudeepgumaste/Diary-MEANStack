import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    }

    this.authenticationService.loginUser(loginData).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
  }
}
