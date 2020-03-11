import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSiteComponent } from './slider-site.component';

describe('SliderSiteComponent', () => {
  let component: SliderSiteComponent;
  let fixture: ComponentFixture<SliderSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
