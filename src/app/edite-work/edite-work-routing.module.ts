import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditeWorkPage } from './edite-work.page';

const routes: Routes = [
  {
    path: '',
    component: EditeWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditeWorkPageRoutingModule {}
