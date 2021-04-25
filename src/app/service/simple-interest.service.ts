import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleInterestService {

  constructor() { }

  public SI:number;
  public calculateSI(principle:number,time:number,rate:number):number{
    this.SI = (principle*time*rate)/100;
    return this.SI;

}
}
