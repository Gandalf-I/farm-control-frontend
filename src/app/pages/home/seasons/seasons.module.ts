import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';

@NgModule({
  declarations: [SeasonsComponent],
  imports: [
    CommonModule,
    SeasonsRoutingModule,
  ],
})
export class SeasonsModule { }
