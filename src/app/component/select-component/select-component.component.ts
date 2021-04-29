import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {

  constructor() { }

  public role:string;

  public selectRole(event):void{
    this.role=event.target.value;
  }

  ngOnInit(): void {
  }

}
