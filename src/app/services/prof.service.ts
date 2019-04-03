import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  username:string="";
  password:string="";
  account;
  mobile;
  isfc;
  constructor() { }
}
