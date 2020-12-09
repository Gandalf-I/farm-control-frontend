import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [StatisticsComponent, HeaderComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
  ],
})
export class StatisticsModule { }
