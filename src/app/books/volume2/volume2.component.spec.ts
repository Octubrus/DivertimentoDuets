import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Volume2Component } from './volume2.component';

describe('Volume2Component', () => {
  let component: Volume2Component;
  let fixture: ComponentFixture<Volume2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Volume2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Volume2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
