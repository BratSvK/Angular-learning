import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// /user/profile will be URL 
export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
]

// lazy loadable module, feature module 
@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),        //user/profile will be URL 
    FormsModule,                              //Template base form -> for small forms
    ReactiveFormsModule                       // for reactive form -> bigger better validations
  ],
  providers: []
})
export class UserModule { }
