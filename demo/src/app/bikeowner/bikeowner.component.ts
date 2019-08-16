import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-bikeowner',
  templateUrl: './bikeowner.component.html',
  styleUrls: ['./bikeowner.component.css']
})
export class BikeownerComponent implements OnInit {

  constructor()
  {

  }
  logout()
  {
    localStorage.clear();
  }
  ngOnInit()
  {
    
  }


}
