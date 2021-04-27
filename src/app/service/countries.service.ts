import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Countries} from 'src/app/models/countries.model';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  url:string;
  

  
  getCountriesList():Observable<Countries []>{
    return this._http.get <Countries []> ('https://restcountries.eu/rest/v2/all');
  }

  getCountryDetailsByName(countryName:string):Observable<Countries>{
    
    console.log("Country is: "+ countryName);

    this.url = "https://restcountries.eu/rest/v2/name/"+countryName+"?fullText=true";
    return this._http.get <Countries > (this.url);
  }


}
