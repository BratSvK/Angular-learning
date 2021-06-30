import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './events/nav/navbar.components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { Erro404Component } from './errors/erro404.component';


// added single import from barrels 
import {
  EventsListComponent,
  ThumbNailContainer,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouteActivatorService
  
 } from './events/index';
import { AuthService } from './_services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionCreateComponent } from './events/event-details/session-create/session-create.component';
import { SessionComponent } from './events/event-details/session/session.component';




@NgModule({
  declarations: [                               // pipes and conponents            
    EventsAppComponent,
    EventsListComponent,
    ThumbNailContainer,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Erro404Component,
    SessionCreateComponent,
    SessionComponent
  ],
  imports: [                                    // importing a modules 
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  // this is wide for every module across angular 
  providers: [
    EventService, 
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolverService,
    AuthService
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
