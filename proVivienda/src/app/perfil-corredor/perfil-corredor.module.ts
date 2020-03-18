import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilCorredorPage } from './perfil-corredor.page';
import { FormularioCorredorPage } from '../formulario-corredor/formulario-corredor.page';
import { FormularioCorredorPageModule } from '../formulario-corredor/formulario-corredor.module';

const routes: Routes = [
  {
    path: '',
    component: PerfilCorredorPage
  }
];

@NgModule({entryComponents:[
  FormularioCorredorPage
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioCorredorPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilCorredorPage]
})
export class PerfilCorredorPageModule {}
