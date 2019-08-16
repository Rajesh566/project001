import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  bikes = ['Pulsar 220','Pulsar 250','Pulsar 150','Pulsar 180','Duke','KTM Suzuki','fz','royal enfield','glamour',
    'scooty','honda shine'];
  constructor() { }

  ngOnInit() {
  }

}
