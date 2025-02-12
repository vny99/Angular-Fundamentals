import { Component } from '@angular/core';
import { AuthenticationService } from '../shared';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(public authenticationService: AuthenticationService){}
}
