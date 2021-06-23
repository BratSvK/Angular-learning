import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';


// definujeme si vsetky route ktore mame
//  pozor na rovnake adresy nedavat vedla seba 
const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventDetailsComponent}    // za tým :id mozeme pouzit activatedRoute to get snapshot 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
