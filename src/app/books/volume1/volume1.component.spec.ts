import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Volume1Component } from './volume1.component';

describe('Volume1Component', () => {
  let component: Volume1Component;
  let fixture: ComponentFixture<Volume1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Volume1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Volume1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
