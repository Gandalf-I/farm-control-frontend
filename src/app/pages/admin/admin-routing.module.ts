import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '@pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'statistics',
        loadChildren: () => import('@pages/admin/statistics/statistics.module').then(m => m.StatisticsModule),
      },
      {
        path: 'fields',
        loadChildren: () => import('@pages/admin/fields/fields.module').then(m => m.FieldsModule),
      },
      {
        path: 'users',
        loadChildren: () => import('@pages/admin/users/users.module').then(m => m.UsersModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: './statistics',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
