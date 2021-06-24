import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../_services/event.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {

    events: any;

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

    }


  // better put long http calls here over contructor
  ngOnInit(): void {
    // data we getting through resolver in route we have all events 
    this.events = this.route.snapshot.data['events'];


  }


  handleEventClick(eventName: string) {
    //this.toastr.success(eventName);
  }
    

    
}

