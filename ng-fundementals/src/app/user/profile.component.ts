import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  private firstName: FormControl
  private lastName:FormControl

  constructor(private auth: AuthService, private router: Router) { }
  

  // using a reactive form 
  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z.*]')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }


  saveProfile(formValues) {
    if (this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.cancel();
    }

  }

  validateFirstName() {
    return ( this.firstName.invalid && this.firstName.touched)
  }
  validateLastName() {
    return ( this.lastName.invalid && this.lastName.touched)
  }

  cancel() {
      this.router.navigate(['/events']);
  }

}
