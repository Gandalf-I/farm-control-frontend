import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { SensorsComponent } from './sensors.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SensorsComponent],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    MatButtonModule,
  ],
})
export class SensorsModule { }
