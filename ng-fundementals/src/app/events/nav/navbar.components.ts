import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.compenent.html',
    styleUrls: ['./navbar.css']
})

export class NavComponent {
    constructor(public authService: AuthService) { }

    ngOnInit() { }

    
}