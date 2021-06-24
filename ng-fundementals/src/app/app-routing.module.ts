import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Erro404Component } from './errors/erro404.component';
import { EventRouteActivatorService } from './_services/event-route-activator.service';
import { EventListResolverService } from './_services/event-list-resolver.service';


// definujeme si vsetky route ktore mame
//  pozor na rovnake adresy nedavat vedla seba 
const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Erro404Component},
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]}    // za tým :id mozeme pouzit activatedRoute to get snapshot 

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
