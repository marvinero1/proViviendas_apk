import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, Platform, MenuController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.page.html',
  styleUrls: ['./vista1.page.scss'],
})
export class Vista1Page implements OnInit {

  slides =[
    {
      img: 'assets/images/casa1.png',
      titulo:'La primera aplicación dedicada a los bienes raíces'
    },
    {
      img: 'assets/images/casa2.png',
      titulo:'Compra y venta de todo tipo de mobiliaria'
    },
  ];
  constructor(private platform: Platform, private router:Router,
    private menu : MenuController, public loadingCtrl: LoadingController,
     public modalController: ModalController, public httpModule:HttpClient)
    { }

  ngOnInit() {
  }
  
  continuar(){
    this.router.navigate(['/home-tabs']);
  }
}
