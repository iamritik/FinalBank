import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userLoggedIn: boolean;

  constructor() { 
    this.userLoggedIn = false;
  }

  getUserLoggedIn(){
    return this.userLoggedIn;
  }

  setUserLoggedIn(){
    this.userLoggedIn = true;
  }
}
