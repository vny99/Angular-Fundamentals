import { Component } from '@angular/core';
import { IUser } from '../../models';
import { AuthenticationService } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
user?: IUser = {
  userName:'',
  password:'',
};
mouseOverLogin: boolean = false;

 constructor(private authenticationService: AuthenticationService, private router: Router){}

login = (loginForm: any):void =>{
  let formValues = loginForm.value;
  this.authenticationService.login(formValues.userName, formValues.password);
  this.router.navigate(["upcoming-events"]);
}

cancel(){
  this.router.navigate(['upcoming-events']);
}
}
