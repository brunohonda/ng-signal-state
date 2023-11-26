import { SwapiPeopleState } from './../shared/store/SwapiPeople/swapi-people.state';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-swapi-people',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './swapi-people.component.html',
  styleUrls: ['./swapi-people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapiPeopleComponent {
  people$ = this.swapiPeopleState.select;

  constructor(
    private readonly swapiPeopleState: SwapiPeopleState
  ) {}
}
