import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksDemoComponent } from './hooks-demo.component';

describe('HooksDemoComponent', () => {
  let component: HooksDemoComponent;
  let fixture: ComponentFixture<HooksDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooksDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
