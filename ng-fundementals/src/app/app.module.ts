import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { ThumbNailContainer } from './events/event-thumbnail/event-thumbnail.component';

import { EventsListComponent } from './events/events-list.component';
import { NavComponent } from './events/nav/navbar.components';

@NgModule({
  declarations: [                               // pipes and conponents            
    EventsAppComponent,
    EventsListComponent,
    ThumbNailContainer,
    NavComponent
  ],
  imports: [                                    // importing a modules 
    BrowserModule
  ],
  providers: [],                                // for services 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
