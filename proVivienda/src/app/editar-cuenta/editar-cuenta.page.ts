import { Component, OnInit } from '@angular/core';
import { ModalController,NavController, LoadingController, ToastController, NavParams,Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.page.html',
  styleUrls: ['./editar-cuenta.page.scss'],
})
export class EditarCuentaPage implements OnInit {

 constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closemodal(){
    this.modalCtrl.dismiss();
  }
}
