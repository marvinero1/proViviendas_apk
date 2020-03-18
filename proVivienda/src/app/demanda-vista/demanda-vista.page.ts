import { Component, OnInit } from '@angular/core';
import { ModalController,NavController,Platform} from '@ionic/angular';
@Component({
  selector: 'app-demanda-vista',
  templateUrl: './demanda-vista.page.html',
  styleUrls: ['./demanda-vista.page.scss'],
})
export class DemandaVistaPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closemodal(){
    this.modalCtrl.dismiss();
  }
}
