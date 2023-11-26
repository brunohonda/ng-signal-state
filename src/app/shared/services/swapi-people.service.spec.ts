/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwapiPeopleService } from './swapi-people.service';

describe('Service: SwapiPeople', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapiPeopleService]
    });
  });

  it('should ...', inject([SwapiPeopleService], (service: SwapiPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
