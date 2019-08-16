import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {
  ModelName: String;
  ModelNo: String;
  ContactNumber: String;
  Location: String;
  files:any;
  Price:number;
  constructor(public http:Http) { }
  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
  }
  onRegisterSubmit()
  {
    var email = localStorage.getItem('email');
    var formdata:any = new FormData();
    formdata.append("BikeModel",this.ModelName);
    formdata.append("Modelno",this.ModelNo);
    formdata.append("Contactno",this.ContactNumber);
    formdata.append("Ownerid",email);
    formdata.append("Location",this.Location);
    formdata.append("bikeimg",this.files[0],this.files[0]['name']);
    formdata.append("Price",this.Price);

    this.http.post('http://localhost:3000/owner/addbike',formdata).subscribe(res => 
  {
  
    var data = res.json();
    if(data.msg ==='Success')
    {
      alert('Added Successfully');
    }
    else
    {
      alert('Failed')
    }
  })
  }

  ngOnInit() {
  }

}
