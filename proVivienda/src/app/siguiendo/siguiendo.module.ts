import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SiguiendoPage } from './siguiendo.page';

const routes: Routes = [
  {
    path: '',
    component: SiguiendoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SiguiendoPage]
})
export class SiguiendoPageModule {}
