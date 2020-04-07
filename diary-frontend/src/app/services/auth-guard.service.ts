import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RouteProtectionService } from './route-protection.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public routeProtection: RouteProtectionService, public router: Router) {}
  canActivate(): boolean {
    if (!this.routeProtection.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}