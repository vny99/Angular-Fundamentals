import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrl: './event-thumbnail.component.scss'
})
export class EventThumbnailComponent {
@Input() event?: Event;
@Output() eventClick = new EventEmitter();
sendOutput(){
this.eventClick.emit(this.event?.name)
}
clearOutput(){
this.eventClick.emit('')
}

getStartTimeClass(): any{
  const earlyStart = this.event && this.event?.time === '8:00 am';
  const lateStart = this.event && this.event?.time === '10:00 am';
  const normalStart = !earlyStart && !lateStart;

  return{
    green: earlyStart,
    bold : earlyStart || lateStart,
    red: lateStart,
    yellow: normalStart
  }
}

getStartTimeStyle(): any{
  const isEarlyStart = this.event && this.event?.time === '8:00 am';
  const isLateStart = this.event && this.event?.time === '10:00 am';

  return{
    color: isEarlyStart ? '#003300' : isLateStart ? '#cc0000' : '#660000',
    'font-weight': isEarlyStart || isLateStart ? 'bold' : 'normal'
  }
}

}
