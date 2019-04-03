import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { User } from '../User';
import { ProfService } from '../services/prof.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  show:boolean = false;
  id:string;
  mobile:number;
  account:number;
  isfc:number;
  user:User = {id:"",account:0,mobile:0,isfc:0,pwd:""}
  
  constructor(private prof:ProfService,private db:DbService,private rs:Router) {
  }

  ngOnInit() {
  }

  image = "/assets/madrid.png"
  
  toggling(){
  
    this.show = true;
  }

  getId(){
    return this.prof.username;
  }

  navigate(){
    this.rs.navigate(['change'])
  }

  getAccount(){
    this.db.get(this.prof.username).subscribe(
      (response:any)=>this.user = response.json()
    )
    return this.user.account;
  }

  getIsfc(){
    this.db.get(this.prof.username).subscribe(
      (response:any)=>this.user = response.json()
    )
    return this.user.isfc;
  }
  
  getMobile(){
    this.db.get(this.prof.username).subscribe(
      (response:any)=>this.user = response.json()
    )
    return this.user.mobile;
  }
}
