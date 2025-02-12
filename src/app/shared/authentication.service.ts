import { Injectable } from '@angular/core';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  currentUser?: IUser;
  
  login(userName: string, password: string){
    this.currentUser = {
      userName: userName,
      password: password,
      firstName:"John",
      lastName:'Doe',
      id:1
    }
  }

  isAuthenticated(): boolean{
    return !!this.currentUser;
  }

  updateUser(firstName: string, lastName: string): void{
    console.log(firstName+" "+lastName);
    if(this.currentUser){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    }
  }
}
