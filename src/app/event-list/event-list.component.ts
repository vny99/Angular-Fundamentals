import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { Event } from '../models/event';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  recievedData?: string;
  events?: Event[];

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleReturnedResult(data: string): void {
    this.recievedData = data
  }

  handleThumbnailClick(event: Event) {
    this.toastr.success(event.name, 'Selected Event');
  }
}
