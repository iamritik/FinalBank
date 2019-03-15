import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {

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
      this.loan = "PERSONAL";
      this.roi = 6.5; 
        break;
      case '3': 
      this.loan = "EDUCATION";
      this.roi = 4;
        break;
      case '4':
      this.loan = "CAR";
      this.roi = 8;
        break;
      default:""
    }
  }

  calculate(P:number,N:number,R:number):void{
    this.res = this.cs.calculate(P,N,R);
  }
}
