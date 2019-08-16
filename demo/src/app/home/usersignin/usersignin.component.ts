import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css']
})
export class UsersigninComponent implements OnInit {

  
  firstname: String;
      lastname: String;
      phonenumber: String;
      email: String;
      password: String;
      licenseno:String;
      // licensepic:String;
      adharno:String;
      // adharpic:String;
      profilepic:String;
      state: String;
      area: String;

files:any;
  constructor(public http:Http) { }
  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
    
  }
  onRegisterSubmit()
  {
    const formData: any = new FormData();


    formData.append ("firstname",this.firstname);
    formData.append ("lastname",this.lastname);
    formData.append ("phonenumber",this.phonenumber);
    formData.append ("email",this.email);
    formData.append ("password",this.password);
    formData.append ("licenseno",this.licenseno);
    // formData.append("dikshitha", this.files[0], this.files[0]['name']);
    formData.append ("adharno",this.adharno);
    // formData.append("dikshitha", this.files[0], this.files[0]['name']);
    formData.append("userimg", this.files[0], this.files[0]['name']);
    formData.append("state",this.state);
    formData.append("area",this.area);
     let url = 'http://localhost:3000/user/usersignup';
      
      //  let url1 ='http://localhost:3000/create1';

    this.http.post(url,formData).subscribe(res => {
      console.log(res.json())
      var data = res.json();
      if(data.msg === 'Success')
      {
        alert('Registration Success');
      }
      else
      {
        alert('Registration Failed')
      }
    });

    
      // this.http.post(url1,user).subscribe(res => {
        // console.log(res)});

  }


  ngOnInit() {
  }


}
