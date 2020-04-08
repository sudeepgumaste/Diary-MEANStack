import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {

  @Input() title:string = "Login";

  constructor() { }

  ngOnInit(): void {
  }

}
