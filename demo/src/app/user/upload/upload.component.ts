
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { Subject } from 'rxjs';

const RED_CELL: 'red-cell' = 'red-cell';
const BLUE_CELL: 'blue-cell' = 'blue-cell';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadComponent  {
  refresh: Subject<any> = new Subject();
  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = 
  [{
    start:new Date('2018-06-11'),
    end: new Date('2018-06-11'),
    title:''
  }];

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    
    body.forEach(day => {
      this.events.forEach(event => {
        if (day.date.getDate() === event.start.getDate() && day.inMonth) {
          day.cssClass = 'odd-cell';
        }
        else
        {
          day.cssClass = 'ava-cell';
        }
      })
      
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.events.push({'start':date,'end':date,'title':''});
  
  
  }

}
