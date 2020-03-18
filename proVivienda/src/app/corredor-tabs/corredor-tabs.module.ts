import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CorredorTabsPage } from './corredor-tabs.page';

const routes: Routes = [
  {
    path: 'corredor-tabs',
    component: CorredorTabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../perfil-corredor/perfil-corredor.module#PerfilCorredorPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../corredor-contacto/corredor-contacto.module#CorredorContactoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/corredor-tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/corredor-tabs/tab1',
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
  declarations: [CorredorTabsPage]
})
export class CorredorTabsPageModule {}
