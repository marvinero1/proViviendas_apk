import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController, NavController, LoadingController,  NavParams,Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  slideOpts = {
    loop: false,
    effect: 'slide',
    // loopFillGroupWithBlank: true,
    autoplay: {
      delay: 1000,
      // stopOnLastSlide:false
    },
    speed:2000
  };

  constructor(private router:Router, private loadingCtrl:LoadingController){   
  }
  perfil(){
    this.router.navigate(['/mi-cuenta']);
  }

  async btnInfo(){
    this.router.navigate(['/publicaciones-corredor']);

    const loading=await this.loadingCtrl.create({
      message:'Ingresando...',
      duration:3000
    });
    await loading.present();
  }
  
  hola(){
    console.log("estoy en Mapa");
    return(0);
  }
}