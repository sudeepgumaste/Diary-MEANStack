import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RouteProtectionService } from './route-protection.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectAuthenticatedService implements CanActivate {
  constructor(public routeProtection: RouteProtectionService, public router: Router) { }
  canActivate(): boolean {
    if (this.routeProtection.isAuthenticated()) {
      this.router.navigate(['posts'])
      return false
    }
    return true
  }
}
