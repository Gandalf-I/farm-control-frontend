import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsComponent } from '@pages/home/seasons/seasons.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonsRoutingModule { }
