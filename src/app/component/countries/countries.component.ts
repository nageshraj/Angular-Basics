import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/service/countries.service';
import {Countries} from 'src/app/models/countries.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public myCountries:Countries [];
  public  countrySelected:Countries ;
  public countryName:string;

  constructor(private _countries: CountriesService) {
  
   }

    getCountryDetailsByName() {
      this._countries.getCountryDetailsByName(this.countryName).subscribe(data => {
        this.countrySelected =data;
      })
     
   }
  


  ngOnInit(): void {
    this._countries.getCountriesList().subscribe(data =>{
      this.myCountries=data;
    })

    

  }

}
