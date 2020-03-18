import { Component, OnInit } from '@angular/core';
import { ModalController,NavController, LoadingController, ToastController, NavParams,Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  public pais: any = [
    {
      valor: 1,
      nombre: 'Bolivia',
    },
    {
      id: 2,
      nombre: 'Chile',
    },
    {
      id: 3,
      nombre: 'Wakanda',
    }
  ];
  
  closemodal(){
    this.modalCtrl.dismiss();
  }
}
