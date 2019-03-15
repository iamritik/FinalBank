// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CalcService {

  constructor() { }

  calculate(P:number,N:number,R:number):number{
    let res;
    let first:number = Math.pow(1+R/1200,N);
    res = (P*R/1200*first)/(first-1);
    res = Math.round(res);
    return res;
  }

}
