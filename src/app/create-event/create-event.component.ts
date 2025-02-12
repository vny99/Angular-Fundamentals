import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models';
import { Session } from "../models/session";
import { EventService } from '../shared';
import { ToastrService } from '../common';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {

isDirty:boolean = true;
newEvent: Event = {
  id: Math.floor(Math.random() * 1000000),
  name:'',
  date: new Date(),
  time:'',
  price:0,
  location:{
    address:'',
    city:'',
    country:''
  },
  sessions : [],
  onlineUrl:'',
  imageUrl:''
};

constructor(private router:Router, private eventService: EventService, private toastrService: ToastrService){}

cancel(){
  this.router.navigate(['/upcoming-events'])
}

saveForm(){
 this.eventService.saveEvent(this.newEvent)
 this.toastrService.success(this.newEvent.name+" is created successfully");
 this.isDirty = false;
 this.router.navigate(['/upcoming-events'])
}
}
