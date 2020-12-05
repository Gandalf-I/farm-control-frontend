import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'seasons',
        loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule),
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule),
      },
      {
        path: 'fields',
        loadChildren: () => import('./fields/fields.module').then(m => m.FieldsModule),
      },
      {
        path: 'sensors',
        loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
