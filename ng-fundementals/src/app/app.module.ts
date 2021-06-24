import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { ThumbNailContainer } from './events/event-thumbnail/event-thumbnail.component';

import { EventsListComponent } from './events/events-list.component';
import { NavComponent } from './events/nav/navbar.components';
import { EventService } from './_services/event.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Erro404Component } from './errors/erro404.component';
import { EventRouteActivatorService } from './_services/event-route-activator.service';
import { EventListResolverService } from './_services/event-list-resolver.service';

@NgModule({
  declarations: [                               // pipes and conponents            
    EventsAppComponent,
    EventsListComponent,
    ThumbNailContainer,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Erro404Component,
  ],
  imports: [                                    // importing a modules 
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [
    EventService, 
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolverService
  ],                                // for services 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// for unsaved work in our form to post 
export function checkDirtyState(component: CreateEventComponent) {

  if (component.isDirty) {
    return window.confirm('You have unsaved work, do you really want to cancel?');
  }

  return true;
}
