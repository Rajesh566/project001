import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.css']
})
export class OwnersigninComponent implements OnInit {
  firstname: String;
  lastname: String;
  phonenumber: String;
  email: String;
  password: String;
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

 /* // const user={
    firstname: this.firstname,
    lastname: this.lastname,
    phonenumber: this.phonenumber,
    email: this.email,
    password: this.password,
    state: this.state,
    area: this.area,
  // }*/

  formData.append ("firstname",this.firstname);
  formData.append ("lastname",this.lastname);
  formData.append ("phonenumber",this.phonenumber);
  formData.append ("email",this.email);
  formData.append ("password",this.password);
  formData.append("ownerimg", this.files[0], this.files[0]['name']);
  formData.append("state",this.state);
  formData.append("area",this.area);
   let url = 'http://localhost:3000/owner/ownersignup';

    //  let url1 ='http://localhost:3000/create1';

  this.http.post(url,formData).subscribe(res => {
    console.log(res);
    var data = res.json();
    if(data.msg === 'Success')
    {
      alert('Registration Success')
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
