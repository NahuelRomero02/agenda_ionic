import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-homework',
    loadChildren: () => import('./add-homework/add-homework.module').then( m => m.AddHomeworkPageModule)
  },
  {
    path: 'edite-work',
    loadChildren: () => import('./edite-work/edite-work.module').then( m => m.EditeWorkPageModule)
  },
  // {
  //   path: 'index',
  //   loadChildren: () => import('./page/index/index.module').then( m => m.IndexPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
