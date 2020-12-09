import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '@pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AdminComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class AdminModule { }
