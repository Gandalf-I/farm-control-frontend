import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsComponent } from '@pages/home/sensors/sensors.component';

const routes: Routes = [
  {
    path: '',
    component: SensorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorsRoutingModule { }
