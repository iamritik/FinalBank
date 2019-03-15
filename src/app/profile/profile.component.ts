import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { User } from '../User';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:string;
  user:User = {id:"",account:0,mobile:0,isfc:0,pwd:""}
  constructor(private dp:DbService,private lg:LoginComponent) { 
    this.id = this.lg.username;
  }

  ngOnInit() {
  }

  getId(){
    return this.lg.username;
  }

}
