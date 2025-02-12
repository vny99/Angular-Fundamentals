import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared';
import { IUser } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
formGroup!:FormGroup;
currentUser?: IUser;
firstName!: FormControl;
lastName!: FormControl;

constructor(public authenticationService: AuthenticationService, private router: Router){}

ngOnInit(): void {
 this.currentUser = this.authenticationService.currentUser;
this.firstName = new FormControl(this.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
this.lastName = new FormControl(this.currentUser?.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
 this.formGroup = new FormGroup( {
  firstName: this.firstName,
  lastName: this.lastName
 });
}

cancel(): void{
  this.router.navigate(['upcoming-events']);
}
save(): void{
  if (this.formGroup.valid) {
    const formValue = this.formGroup.value;
    console.log(formValue);
    this.authenticationService.updateUser(formValue.firstName, formValue.lastName);
    this.router.navigate(['upcoming-events']);
  } else {
    console.error('Form is invalid');
  }
}

isFirstNameValid(): boolean{
  return this.firstName.valid || this.firstName.untouched;
}

isLastNameValid(): boolean{
  return this.lastName.valid || this.lastName.untouched;
}
}
