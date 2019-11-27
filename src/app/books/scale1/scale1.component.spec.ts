import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scale1Component } from './scale1.component';

describe('Scale1Component', () => {
  let component: Scale1Component;
  let fixture: ComponentFixture<Scale1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scale1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scale1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
