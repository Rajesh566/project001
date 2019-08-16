import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfleetComponent } from './ourfleet.component';

describe('OurfleetComponent', () => {
  let component: OurfleetComponent;
  let fixture: ComponentFixture<OurfleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurfleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
