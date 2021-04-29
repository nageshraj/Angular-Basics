import { Component, OnInit } from '@angular/core';
import {SimpleInterestService} from '../../service/simple-interest.service';


@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent implements OnInit {

  constructor(private simpleInterestService: SimpleInterestService) { }

  public SI:any;

  public principle:number;
  public time:number;
  public roi:number;

 public SIForAny:any;

  public SIcalculation(){
  
    this.SIForAny=this.simpleInterestService.calculateSI(this.principle,this.time,this.roi);
    this.SI = "Your SI : "+this.SIForAny;
    return  this.SI;
    
  }

  ngOnInit(): void {
  }

}
