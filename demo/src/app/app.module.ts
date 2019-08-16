import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { DemoUtilsModule } from '../demo-utils/module';

import { AppComponent } from './app.component';
import { RouterComponent } from './router/router.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,

} from '@angular/material';
import { CalendarModule,CalendarDateFormatter } from 'angular-calendar';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './home/about/about.component';
import { OurfleetComponent } from './ourfleet/ourfleet.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';

import { SearchComponent } from './user/search/search.component';
import { UsersigninComponent } from './home/usersignin/usersignin.component';
import { OwnersigninComponent } from './home/ownersignin/ownersignin.component';
import { BikeownerComponent } from './bikeowner/bikeowner.component';
import { ProfileComponent } from './bikeowner/profile/profile.component';
import { AddbikeComponent } from './bikeowner/addbike/addbike.component';
import { HttpModule } from '@angular/http';
import { OwnerProfileComponent } from './bikeowner/owner-profile/owner-profile.component';
import { Home1Component } from './home/home1/home1.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UploadComponent } from './user/upload/upload.component';



const ROUTES: Route[] = 
[

  
  { path: '',component:HomeComponent,
children:[
  { path:'home1',component:Home1Component
},
  { path:'login',component:LoginComponent
  },
    {
      path:'about',component:AboutComponent
    },
      {
        path:'contact',component:ContactComponent
      },
        {
          path:'usersignup',component:UsersigninComponent
        },
          {
            path:'ownersignup',component:OwnersigninComponent
          },
          {
            path:'offers',component:OffersComponent
          }
]},
  
{path:'user',component:UserComponent,
children:[
  {path:'userprofile',
  component:UserprofileComponent
},
{
  path:'checkout',component:UploadComponent
}
]},
{path:'bike',component:BikeownerComponent,
children:[
  {
    path:'',
    component:AddbikeComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
]}
    
  ]


@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    
    UserComponent,
    AboutComponent,
    OurfleetComponent,
    LoginComponent,
    ContactComponent,
    OffersComponent,
    HomeComponent,
    SearchComponent,
    UsersigninComponent,
    OwnersigninComponent,
    BikeownerComponent,
    ProfileComponent,
    AddbikeComponent,
    OwnerProfileComponent,
  
    Home1Component,
    UserprofileComponent,
    UploadComponent
  ],
  imports: [
    MatAutocompleteModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    DemoUtilsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
