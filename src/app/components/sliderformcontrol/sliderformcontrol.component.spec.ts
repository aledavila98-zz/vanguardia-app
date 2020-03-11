import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderformcontrolComponent } from './sliderformcontrol.component';

describe('SliderformcontrolComponent', () => {
  let component: SliderformcontrolComponent;
  let fixture: ComponentFixture<SliderformcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderformcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderformcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
