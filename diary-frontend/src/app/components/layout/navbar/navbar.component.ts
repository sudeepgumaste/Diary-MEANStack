import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor( private route: Router, private logoutService: LogoutService) { }

  ngOnInit(): void {
    const loc = window.location.href.split('/')
    const locLength = loc.length
    const url = loc[locLength-1]
    console.log(url)
    this.isAuthenticated = url !== 'login' && url !== '' && url !== 'register'
  }

  logout() {
    this.logoutService.logoutUser().subscribe(
      data => {
        localStorage.clear()
        setTimeout(() => {
          this.route.navigate(['login'])
        }, 300)
        setTimeout(()=>{
          window.location.reload()
        },500)
      },
      err => {
        console.log(err)
      }
    )
  }
}
