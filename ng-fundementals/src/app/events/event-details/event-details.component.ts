import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISession } from 'src/app/_models/session';
import { IEvent } from 'src/app/_services';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);

  }


  addSession() {
    this.addMode = true;

  }

  cancelAddSession() {
    this.addMode = false;
  }


  saveNewSession(session:ISession) {

    // we need to check max of session id's
    const nextId = Math.max.apply(null,this.event.sessions
      .map(s => s.id));

      session.id = nextId + 1;

      this.event.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;

  }

}
