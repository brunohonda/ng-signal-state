import { Injectable, signal } from '@angular/core';
import { SwapiPeople } from '../../interface/swapi-people.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiPeopleState {
  private readonly _people = signal<SwapiPeople|null>(null);

  constructor() { }

  get select() {
    return this._people.asReadonly();
  }

  setPeople(people: SwapiPeople) {
    this._people.set(people);
  }
}
