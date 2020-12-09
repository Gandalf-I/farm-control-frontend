import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyAuthGuard } from '@core/guards/only-auth.guard';
import { OnlyAdminGuard } from '@core/guards/only-admin.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [OnlyAdminGuard],
    loadChildren: () => import('@pages/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'workspaces',
    canActivate: [OnlyAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/workspace/workspace.module').then(m => m.WorkspaceModule),
      },
      {
        path: ':id',
        loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: ':id/statistics',
        loadChildren: () => import('@pages/statistics/statistics.module').then(m => m.StatisticsModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'workspaces',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'workspaces',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
