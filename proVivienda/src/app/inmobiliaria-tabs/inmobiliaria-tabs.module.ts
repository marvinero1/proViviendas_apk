import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InmobiliariaTabsPage } from './inmobiliaria-tabs.page';

const routes: Routes = [
  {
    path: 'inmobiliaria-tabs',
    component: InmobiliariaTabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../perfil-empresa/perfil-empresa.module#PerfilEmpresaPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../perfil-contacto/perfil-contacto.module#PerfilContactoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/inmobiliaria-tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inmobiliaria-tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InmobiliariaTabsPage]
})
export class InmobiliariaTabsPageModule {}
