import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit{

  event?: Event;
  constructor(private eventService: EventService,private route:ActivatedRoute){}
ngOnInit(): void {
  this.event = this.eventService.getEvent(Number(this.route.snapshot.params['id']));
}

}
