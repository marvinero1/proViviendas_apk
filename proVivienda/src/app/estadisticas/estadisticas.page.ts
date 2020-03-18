import { Component, OnInit } from '@angular/core';
import { ModalController,} from '@ionic/angular';
import { DemandaVistaPage } from '../demanda-vista/demanda-vista.page';
import { EstadisticaModalPage } from '../estadistica-modal/estadistica-modal.page';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async detalle(){
    const modal = await this.modalController.create({
      component: EstadisticaModalPage,
      componentProps: {accion:'Regístrate'}
    });
    modal.present();
    modal.onDidDismiss().then(()=>{
      console.log("modal cerrado");
    });
  }
}
