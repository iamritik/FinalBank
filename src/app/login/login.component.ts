import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Router } from "@angular/router"
import { Http } from '@angular/http';
import { User } from '../User';
import { DbService } from '../services/db.service';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private http:DbService,private sec:SecurityService) { }

  form;
  disp:boolean = false;
  obj:User = {id:"",account:0,mobile:0,isfc:0,pwd:""};
  pwds:string = "";
  username:string;

  ngOnInit() {
    this.form = new FormGroup({});
  }


  hideIt(){
    this.router.navigate(["register"])
  }

  aage(user,pwd){
    if(this.disp){
      this.router.navigate(["menu"])
    }
  }

  getUsername(user:string){
    this.username = user;
    this.http.get(user).subscribe(
      (response:any)=>this.obj = response.json()
    )
  }

  pass(conf){
    if(conf===this.obj.pwd){
      this.disp = true;
      this.sec.setUserLoggedIn();
    }
    else{
      alert("Enter right password")
    }
  }
  
}
