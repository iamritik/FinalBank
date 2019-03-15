import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  res:number;
  loan: string;
  calc:boolean = false;
  roi:number;
  constructor(private cs:CalcService) { }

  ngOnInit() {
  }
  
  abc(op) {
    this.calc = true;
    switch (op) {
      case '1':this.calc = false;
      alert("Select valid option")
      case '2': 
      this.loan = "FIXED";
      this.roi = 6;
        break;
      case '3': 
      this.loan = "RECURRENCE"
      this.roi = 7;
        break;
      default:""
    }
  }

  calculate(P:number,N:number,R:number):void{
    this.res = this.cs.calculate(P,N,R);
  }
}
