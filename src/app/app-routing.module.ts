import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/employee-detail/employee-detail.module').then( m => m.EmployeeDetailPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/employee-edit/employee-edit.module').then( m => m.EmployeeEditPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/employee-add/employee-add.module').then( m => m.EmployeeAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
