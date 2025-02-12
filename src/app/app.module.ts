import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from './user/user.module';
import { AuthenticationService, EventResolverService, EventRouteActivatorService, EventService } from './shared';
import { ToastrService } from './common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './create-session/create-session.component';
import { RouteAuthenticatorService } from './shared/route-authenticator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventResolverService,
    RouteAuthenticatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDrityState },
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDrityState(component: CreateEventComponent) {
  if (component.isDirty) return window.confirm('You have not saved your data, Are you sure want to leave the page')
  return true;
}
