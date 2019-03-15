import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { User } from '../User';
import { Router } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private db:DbService,private router:Router) {

   }
  
  form;
  done:boolean = false;

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])),
      account:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12)
      ])),
      mobile:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),
      isfc:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12)
      ])),
      pwd:new FormControl("",Validators.required),
      conf:new FormControl("",Validators.compose([
        Validators.required,
        this.confValidator
      ]))

    });
  }

confValidator(control){
  if(control.value === "abc")
    return {"conf":false}
}

  addUser(user,account,isfc,mobile,pwd){
    let us = new User(user,account,isfc,mobile,pwd);
    this.db.postUser(us).subscribe(
      (response:any)=>console.log("Added Employee")
    )
    this.done = true;
  }

  navigate(){
    this.router.navigate([""])
  }

  onSubmit(form){
    console.log(form)
  }

}
