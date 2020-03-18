import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DemandaPage } from './demanda.page';
import { DemandaVistaPage } from '../demanda-vista/demanda-vista.page';
import { DemandaVistaPageModule } from '../demanda-vista/demanda-vista.module';

const routes: Routes = [
  {
    path: '',
    component: DemandaPage
  }
];

@NgModule({
  entryComponents:[
    DemandaVistaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandaVistaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DemandaPage]
})
export class DemandaPageModule {}