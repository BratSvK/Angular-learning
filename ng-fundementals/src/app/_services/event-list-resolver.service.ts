import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  // call ajax call and retrieve a objects 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // to get stram of data in observable we need map in pipe method 
    return this.eventService.getEvents().pipe(
      map(events => events)
    )
  }




}
