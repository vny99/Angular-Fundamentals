import { Component, OnInit } from '@angular/core';
import { Session } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrl: './create-session.component.scss'
})
export class CreateSessionComponent implements OnInit{
sessionForm?: FormGroup;
name?: FormControl;
presenter?: FormControl;
duration?: FormControl;
level?: FormControl;
abstract?: FormControl;

ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('',Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.sessionForm = new FormGroup({
      name : this.name,
      presenter : this.presenter,
      duration : this.duration,
      level: this.level,
      abstract : this.abstract
    })
    
}

saveSession(formvalues: any){
  let session : Session = {
    id: Math.floor(Math.random() * 1000000),
    name: formvalues.name,
    presenter: formvalues.presenter,
    duration: +formvalues.duration,
    level: formvalues.level,
    abstract: formvalues.abstract,
    voters: []
  }
  console.log(session);
}
}
