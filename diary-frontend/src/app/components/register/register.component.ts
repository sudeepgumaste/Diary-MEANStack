import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register.models';

import { RegisterService } from '../../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  username: string;
  password: string;
  message: string;
  error: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const data: Register = {
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.registerService.registerUser(data).subscribe(
      data => {
        this.message = data.msg;
        this.error = '';
      },
      err => {
        this.error = err.error.msg;
      }
    )
  }

}
