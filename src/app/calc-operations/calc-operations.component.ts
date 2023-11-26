import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CounterState } from './../shared/store/counter.state';

@Component({
  selector: 'app-calc-operations',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calc-operations.component.html',
  styleUrls: ['./calc-operations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalcOperationsComponent {
  constructor(
    private readonly counter: CounterState
  ) {}

  increment() {
    this.counter.increment();
  }

  decrement() {
    this.counter.decrement();
  }
}
