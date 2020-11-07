import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from '@backend/backend.service';
import { ApiModule } from '@backend/api/api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule,
  ],
  providers: [
    BackendService,
  ],
})
export class BackendModule { }
