import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavControlComponent } from './side-nav-control.component';

describe('SideNavControlComponent', () => {
  let component: SideNavControlComponent;
  let fixture: ComponentFixture<SideNavControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
