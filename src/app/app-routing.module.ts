import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorService } from './shared/event-route-activator.service';
import { EventResolverService } from './shared/event-resolver.service';
import { RouteAuthenticatorService } from './shared/route-authenticator.service';
import { CreateSessionComponent } from './create-session/create-session.component';

const routes: Routes = [
  {path: 'upcoming-events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'], canActivate:[RouteAuthenticatorService]},
  {path:'upcoming-events', component:EventListComponent, resolve: {events: EventResolverService}, canActivate:[RouteAuthenticatorService]},
  {path:'upcoming-events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
  {path:'upcoming-events/:id/create-session', component:CreateSessionComponent},
  {path:'404', component: ErrorComponent},
  {path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate:[RouteAuthenticatorService]},
  {path:"", redirectTo:'upcoming-events', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
