import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiCuentaPage } from './mi-cuenta.page';
import { EditarCuentaPage } from '../editar-cuenta/editar-cuenta.page';
import { EditarCuentaPageModule } from '../editar-cuenta/editar-cuenta.module';

const routes: Routes = [
  {
    path: '',
    component: MiCuentaPage
  }
];

@NgModule({
  entryComponents:[
    EditarCuentaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EditarCuentaPageModule,
  ],
  declarations: [MiCuentaPage]
})
export class MiCuentaPageModule {}
