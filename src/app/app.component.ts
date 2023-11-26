import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CalcOperationsComponent } from './calc-operations/calc-operations.component';
import { CalcResultComponent } from './calc-result/calc-result.component';
import { SwapiPeopleComponent } from './swapi-people/swapi-people.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CalcOperationsComponent,
    CalcResultComponent,
    SwapiPeopleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
