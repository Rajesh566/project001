import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  public userprofile:any = [];
  constructor(public http:Http) { }
   
  ngOnInit() {
    var email = localStorage.getItem('email');
    this.http.post('http://localhost:3000/user/userprofile',{'email':email}).subscribe(res => 
  {
    console.log(res.json())
    var data = res.json();
    console.log(JSON.stringify(data.msg[0]));
    this.userprofile = data.msg[0];
    console.log(this.userprofile)
  })
  }

}
