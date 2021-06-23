import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../_services/event.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {

    events: any[];

    constructor(private eventService: EventService, private toastr: ToastrService) {

    }


  // better put long http calls here over contructor
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }


  handleEventClick(eventName: string) {
    //this.toastr.success(eventName);
  }
    

    
}

