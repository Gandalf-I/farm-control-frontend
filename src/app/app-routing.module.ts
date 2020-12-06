import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyAuthGuard } from '@core/guards/only-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    canActivate: [OnlyAuthGuard],
    children: [
      {
        path: 'workspaces',
        loadChildren: () => import('@pages/workspace/workspace.module').then(m => m.WorkspaceModule),
      },
      {
        path: 'workspace/:id',
        loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'workspace/:id/statistics',
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
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
