import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // ngModel data bindign one way()
  userName: string
  password: string
  mouseoverLogin


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  // formValues from html file from formular 
  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.backToHome();
  }

  backToHome() {
      this.router.navigate(['/events']);
  }

}
