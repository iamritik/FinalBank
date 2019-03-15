import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from '../User';
import 'rxjs/rx'
import { dbW } from '../dbW';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  constructor(private http:Http) { 
    
  }
  url:string = "http://localhost:3000/UserInfo/"

  postUser(user:User){
    return this.http.post(this.url,user)
      .map((response:any)=>response);

  }

  get(id:string){
    return this.http.get(this.url+id)
      .map((response:any)=>response)
  }

}
