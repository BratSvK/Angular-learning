import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { userRoutes } from '../user/user.module';
import { IUser } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  currentUser: IUser

  constructor() { }


  loginUser(userName: string, password: string) {

    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  isAutheticated() {
    return !!this.currentUser;
  }


  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }


}
