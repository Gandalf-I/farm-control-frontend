import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [SeasonsComponent],
  imports: [
    CommonModule,
    SeasonsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class SeasonsModule { }
