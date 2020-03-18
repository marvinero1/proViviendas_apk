import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { DemandaVistaPage } from '../demanda-vista/demanda-vista.page';

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.page.html',
  styleUrls: ['./demanda.page.scss'],
})
export class DemandaPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async detalle(){
    const modal = await this.modalController.create({
      component: DemandaVistaPage,
      componentProps: {accion:'Regístrate'}
    });
    modal.present();
    modal.onDidDismiss().then(()=>{
      console.log("modal cerrado");
    });
  }  
}
