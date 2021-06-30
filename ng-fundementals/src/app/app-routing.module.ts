import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Erro404Component } from './errors/erro404.component';


// single import from barrels 

import {
  EventListResolverService,
  EventRouteActivatorService,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  SessionCreateComponent
  
} from './events/index'
import { SessionComponent } from './events/event-details/session/session.component';


// definujeme si vsetky route ktore mame
//  pozor na rovnake adresy nedavat vedla seba 
export const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Erro404Component},
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},               // za tým :id mozeme pouzit activatedRoute to get snapshot 
  { path: 'events/session/new', component: SessionCreateComponent},
  { path: 'user', loadChildren:  () => import('./user/user.module').then( m => m.UserModule)}              // ked sa klikneme na routu s user tak nacitam classu podla importu co mam 

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
