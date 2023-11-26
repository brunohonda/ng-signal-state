import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';

import { CounterState } from './../shared/store/counter.state';

@Component({
  selector: 'app-calc-result',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalcResultComponent {
  count$: Signal<number> = this.counter.select;

  constructor(
    private readonly counter: CounterState
  ) { }
}
