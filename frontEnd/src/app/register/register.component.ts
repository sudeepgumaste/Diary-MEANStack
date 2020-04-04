import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpservicesService } from '../httpservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private _http: HttpservicesService) { }

  data:Object;

  ngOnInit(): void {
  }

  submit(data) {
    this._http.postregisterdata(data).subscribe(
      response => this.data=response,
      error => alert("Error! "+error.error.msg)
    );
    if(this.data)
      this.router.navigate(['/login'])
    else
      this.router.navigate(['/register'])
  }
}
