import { Injectable } from '@angular/core';
import { MaybeAsync } from '@angular/router';
import { map } from 'rxjs';
import { Event } from '../models/event';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService {

  constructor(private eventService: EventService) {}

  resolve(): MaybeAsync<Event[]> {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
