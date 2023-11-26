import { SwapiPeopleService } from './../services/swapi-people.service';
import { Injectable, effect, signal } from '@angular/core';
import { SwapiPeopleState } from './SwapiPeople/swapi-people.state';

@Injectable({
  providedIn: 'root'
})
export class CounterState {
  private readonly _count = signal(1);

  constructor(
    private readonly swapiPeopleState: SwapiPeopleState,
    private readonly swapiPeopleService: SwapiPeopleService,
  ) {
    this.addEffect();
  }

  get select() {
    return this._count.asReadonly();
  }

  increment() {
    this._count.update(count => count + 1);
  }

  decrement() {
    this._count.update(count => Math.max(1, count - 1));
  }

  addEffect() {
    effect(() => {
      const id = this._count();
      this.swapiPeopleService
        .getPeople(id)
        .subscribe(people => this.swapiPeopleState.setPeople(people));
    });
  }
}
