import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwapiPeople } from '../interface/swapi-people.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiPeopleService {
  constructor(
    private readonly http: HttpClient
  ) { }

  getPeople(id: number) {
    return this.http.get<SwapiPeople>(`https://swapi.dev/api/people/${ id }`);
  }
}
