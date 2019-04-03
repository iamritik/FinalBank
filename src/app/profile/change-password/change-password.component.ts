import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/services/prof.service';
import { DbService } from 'src/app/services/db.service';
import { User } from 'src/app/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {

  constructor(private prof:ProfService,private db:DbService,private router:Router) { 
    
  }

  ngOnInit() {
  }


  disp:boolean = true;
  checkpass(pass){
    if(pass===this.prof.password)
      this.disp = false;
    else{
      alert("Enter the correct password ")
    }
  }

  changep(newp){
    let user:User = {id:this.prof.username,account:this.prof.account,mobile:this.prof.mobile,isfc:this.prof.isfc,pwd:newp};
    this.db.update(this.prof.username,user).subscribe(
      (response:any)=>console.log("changed")
    )
  }

  back(){
    this.router.navigate(['menu'])
  }

}

