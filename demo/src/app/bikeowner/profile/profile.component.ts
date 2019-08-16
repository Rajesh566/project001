import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any = [];
  constructor(public http:Http) { }
   
  ngOnInit() {
    var email = localStorage.getItem('email');
    this.http.post('http://localhost:3000/owner/profile',{'email':email}).subscribe(res => 
  {
    console.log(res.json())
    var data = res.json();
    console.log(JSON.stringify(data.msg[0]));
    this.profile = data.msg[0];
    console.log(this.profile)
  })
  }

}
