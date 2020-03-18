import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogInPage } from './log-in.page';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta.page';
import { CrearCuentaPageModule } from '../crear-cuenta/crear-cuenta.module';

const routes: Routes = [
  {
    path: '',
    component: LogInPage
  }
];

@NgModule({
  entryComponents:[
    CrearCuentaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCuentaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogInPage]
})
export class LogInPageModule {}
