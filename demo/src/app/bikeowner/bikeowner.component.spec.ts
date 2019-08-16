import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeownerComponent } from './bikeowner.component';

describe('BikeownerComponent', () => {
  let component: BikeownerComponent;
  let fixture: ComponentFixture<BikeownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
