import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsComponent } from '@pages/home/fields/fields.component';

const routes: Routes = [
  {
    path: '',
    component: FieldsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsRoutingModule { }
