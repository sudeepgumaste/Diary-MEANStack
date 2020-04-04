import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpservicesService } from '../httpservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _http: HttpservicesService) { }

  data: Object;

  ngOnInit(): void {
  }

  submit(data:Object) {
    this._http.postlogindata(data).subscribe(
      data => this.data=data,
      error => alert("Error! "+error.error.msg)
    );
    if(this.data)
    //alert('Login Succesfull')
     { at:"dgfbfbcc"
      rt:"dxgfdhfgf"
      this.router.navigate(['/feed/:at/:rt'])
     }else
      this.router.navigate(['/login'])
  }

}
