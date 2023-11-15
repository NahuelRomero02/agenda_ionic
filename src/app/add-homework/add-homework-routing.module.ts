import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHomeworkPage } from './add-homework.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: AddHomeworkPage
  },
  {
    path:'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,],
})
export class AddHomeworkPageRoutingModule {}
