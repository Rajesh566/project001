import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(public http:Http,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  onloginSubmit() {
    const user = {
      email: this.username,
      password: this.password
    }
    this.http.post('http://localhost:3000/user/login',user).subscribe(res => {
      console.log(res.json());
      var data = res.json();
      
     if(data.msg === 'Success')
     {
      var result = data.response[0]
      var role =  data.response[0].role
      localStorage.setItem('role',role);
      localStorage.setItem('email',result.email)
        if(role ==='User')
        {
          this.router.navigateByUrl('/user')
        }
        else
        {
          this.router.navigateByUrl('/bike')
        }
     }
     else
     {
       alert('Login Failed')
     }
    })
    // this.authService.authenticateUser(user).subscribe(data => {
    //     if(data.success) {
    //       alert('login success');
    //      // this.authService.storeUserData(data.token, data.user);
    //     //  this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
    //       // this.router.navigate(['dashboard']);
    //     } else {
    //      // this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    //       // this.router.navigate(['login']);
    //       alert('login ');
    //     }
    // });
  }

}
