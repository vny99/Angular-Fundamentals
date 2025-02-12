import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthenticatorService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!this.authService.isAuthenticated()) this.router.navigate(['login']);
     return true;
  }
}
