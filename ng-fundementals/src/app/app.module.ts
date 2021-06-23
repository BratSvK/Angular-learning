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

@NgModule({
  declarations: [                               // pipes and conponents            
    EventsAppComponent,
    EventsListComponent,
    ThumbNailContainer,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [                                    // importing a modules 
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [EventService],                                // for services 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
