import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditeWorkPageRoutingModule } from './edite-work-routing.module';

import { EditeWorkPage } from './edite-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditeWorkPageRoutingModule
  ],
  declarations: [EditeWorkPage]
})
export class EditeWorkPageModule {}
