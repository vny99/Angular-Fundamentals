import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { EventService } from './event.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService: EventService, private router: Router, private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot){
    const isValidRoute = !!this.eventService.getEvent(+route.params['id'])
    if(!this.authService.isAuthenticated()) this.router.navigate(['login']);
    if(!isValidRoute) this.router.navigate(['404'])
    return true;
  }
}
