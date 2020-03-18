import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaisProvinciaPage } from './pais-provincia.page';

const routes: Routes = [
  {
    path: '',
    component: PaisProvinciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaisProvinciaPage]
})
export class PaisProvinciaPageModule {}
