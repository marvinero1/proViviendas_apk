import { EditarCuentaPage } from './../editar-cuenta/editar-cuenta.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController, NavParams,Platform, MenuController } from '@ionic/angular';
import { EditarCuentaPageModule } from '../editar-cuenta/editar-cuenta.module';


@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
})
export class MiCuentaPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async editarCuenta(){
    const modal = await this.modalController.create({
      component: EditarCuentaPage,
      componentProps: {accion: 'Regístrate'}
    });
    modal.present();
    modal.onDidDismiss().then(()=>{
      console.log("modal cerrado");
    });
  }
}
