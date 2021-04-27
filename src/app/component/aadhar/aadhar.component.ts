import { Component, OnInit } from '@angular/core';
import { Aadhaar } from 'src/app/models/aadhaar';
import { AadharService } from 'src/app/service/aadhar.service';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.css']
})
export class AadharComponent implements OnInit {

  constructor(private aadharService: AadharService) { }

  aadharDetails: Aadhaar[];


  ngOnInit() {
    this.aadharService.getAll().subscribe(data => {
      this.aadharDetails = data;
    });
  }

}
