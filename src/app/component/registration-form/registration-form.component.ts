import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public UserRegister={
    name:"",
    email:"",
    dob: "",
    contact:"",
    gender:"",
    password:"",
    confirmPassword:""


  }

  registration(value){
    console.log(this.UserRegister);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
