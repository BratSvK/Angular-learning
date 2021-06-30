import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/_models/session';

@Component({
  selector: 'session-list',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @Input() sessions: ISession[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
