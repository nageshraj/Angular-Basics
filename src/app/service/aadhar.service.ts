import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aadhaar } from 'src/app/models/aadhaar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AadharService {

  private aadharUrl: string;


  constructor(private http: HttpClient) { 

    this.aadharUrl = 'http://localhost:2428/getAll';

  }

  public getAll(): Observable<Aadhaar[]> {
    return this.http.get<Aadhaar[]>(this.aadharUrl);
  }
}
