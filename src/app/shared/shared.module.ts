import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@shared/components/components.module';
import { LayoutsModule } from '@shared/layouts/layouts.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutsModule,
    TranslateModule,
  ],
})
export class SharedModule { }
