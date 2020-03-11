import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidertoggleformcontrolComponent } from './slidertoggleformcontrol.component';

describe('SlidertoggleformcontrolComponent', () => {
  let component: SlidertoggleformcontrolComponent;
  let fixture: ComponentFixture<SlidertoggleformcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidertoggleformcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidertoggleformcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
