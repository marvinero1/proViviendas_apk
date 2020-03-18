import { Component, OnInit } from '@angular/core';
import { ModalController,} from '@ionic/angular';

@Component({
  selector: 'app-estadistica-modal',
  templateUrl: './estadistica-modal.page.html',
  styleUrls: ['./estadistica-modal.page.scss'],
})

export class EstadisticaModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closemodal(){
    this.modalCtrl.dismiss();
  }
}
