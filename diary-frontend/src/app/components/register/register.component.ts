import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register.models';

import { RegisterService } from '../../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  email:string;
  username:string;
  password:string;

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const data:Register = { 
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.registerService.registerUser(data).subscribe(
      data=>console.log(data),
      err=>console.log(err.error)
    )
  }

}
