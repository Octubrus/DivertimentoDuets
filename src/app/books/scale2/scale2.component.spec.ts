import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scale2Component } from './scale2.component';

describe('Scale2Component', () => {
  let component: Scale2Component;
  let fixture: ComponentFixture<Scale2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scale2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scale2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
