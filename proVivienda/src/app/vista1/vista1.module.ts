import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { Vista1Page } from './vista1.page';

const routes: Routes = [
  {
    path: '',
    component: Vista1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Vista1Page]
})
export class Vista1PageModule {}
