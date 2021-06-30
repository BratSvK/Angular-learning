import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from 'src/app/_models/session';
import { restrictedWords } from 'src/app/_shared/restricted_words_validator';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent implements OnInit {


  @Output() saveNewSession = new EventEmitter();
  
  @Output() cancelAddSession = new EventEmitter();


  sessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;


  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('',Validators.required);
    this.presenter = new FormControl('',Validators.required);
    this.duration = new FormControl('',Validators.required);
    this.level = new FormControl('',Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar'])]);     // plain JS

    this.sessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });

  }


  saveSession(formValues) {
    // type safety using models
    let session:ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      level: formValues.level,
      voters: []
    };

    this.saveNewSession.emit(session);

  }

  cancel() {
    this.cancelAddSession.emit();
  }

 
}
