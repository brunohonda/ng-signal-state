/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CounterState } from './counter.state';

describe('Service: Counter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterState]
    });
  });

  it('should ...', inject([CounterState], (service: CounterState) => {
    expect(service).toBeTruthy();
  }));
});
