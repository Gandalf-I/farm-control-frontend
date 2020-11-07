import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@core/services/services.module';
import { InterceptorsModule } from '@core/interceptors/interceptors.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    MatSnackBarModule,
  ],
})
export class CoreModule { }
