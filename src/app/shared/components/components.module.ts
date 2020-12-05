import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderBtnComponent } from './loader-btn/loader-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwitchLanguageButtonComponent } from '@shared/components/switch-language-button/switch-language-button.component';

@NgModule({
  declarations: [LoaderBtnComponent, SwitchLanguageButtonComponent],
  exports: [
    LoaderBtnComponent, SwitchLanguageButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class ComponentsModule {
}
