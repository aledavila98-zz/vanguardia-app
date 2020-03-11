import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuwebcontrolComponent } from './menuwebcontrol.component';

describe('MenuwebcontrolComponent', () => {
  let component: MenuwebcontrolComponent;
  let fixture: ComponentFixture<MenuwebcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuwebcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuwebcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
