/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalcResultComponent } from './calc-result.component';

describe('CalcResultComponent', () => {
  let component: CalcResultComponent;
  let fixture: ComponentFixture<CalcResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
