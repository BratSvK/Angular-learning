import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }


  // check if id is valid event'id
  canActivate(route: ActivatedRouteSnapshot): boolean{
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists)
      this.router.navigate(['/404']);

      return eventExists;
  }



}
