
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Http } from '@angular/http';

export class locationnames {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent{
  location:string;
  BikesInfo:any = [];
  margintop = 200;
  constructor(public http:Http) {
    
  }

  Search()
{
  
  this.http.post('http://localhost:3000/owner/search',{'location':this.location}).subscribe(res => 
{
  
  var data = res.json();
  this.margintop = 50;
  this.BikesInfo = data.msg
})
}

}