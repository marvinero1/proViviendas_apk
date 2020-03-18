import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpresaPage } from './perfil-empresa.page';
import { FormularioInmueblePage } from '../formulario-inmueble/formulario-inmueble.page';
import { FormularioInmueblePageModule } from '../formulario-inmueble/formulario-inmueble.module';

const routes: Routes = [
  {
    path: '',
    component: PerfilEmpresaPage
  }
];

@NgModule({entryComponents:[
  FormularioInmueblePage
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioInmueblePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilEmpresaPage]
})
export class PerfilEmpresaPageModule {}
