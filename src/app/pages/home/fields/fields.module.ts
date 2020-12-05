import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsRoutingModule } from './fields-routing.module';
import { FieldsComponent } from './fields.component';

@NgModule({
  declarations: [FieldsComponent],
  imports: [
    CommonModule,
    FieldsRoutingModule,
  ],
})
export class FieldsModule { }
