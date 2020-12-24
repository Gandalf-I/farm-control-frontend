import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from '@shared/components/components.module';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@NgModule({
  declarations: [StatisticsComponent, HeaderComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MatButtonModule,
    ComponentsModule,
    ChartjsModule,
  ],
})
export class StatisticsModule { }
