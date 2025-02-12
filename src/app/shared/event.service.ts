import { Injectable } from '@angular/core';
import { EVENTS } from '../mocks/events.mock.data';
import { delay, Observable, of, Subject } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]>{
    return of(EVENTS).pipe(delay(100))
  }

  getEvent(id: number){
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event: Event): void{
    EVENTS.push(event);
  }
}
