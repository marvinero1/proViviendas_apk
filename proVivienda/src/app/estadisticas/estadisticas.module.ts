import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadisticasPage } from './estadisticas.page';
import { EstadisticaModalPage } from '../estadistica-modal/estadistica-modal.page';
import { EstadisticaModalPageModule } from '../estadistica-modal/estadistica-modal.module';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasPage
  }
];
@NgModule({
  entryComponents:[
    EstadisticaModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticaModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule {}