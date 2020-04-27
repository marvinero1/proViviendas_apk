import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController, NavController, LoadingController,  NavParams,Platform, MenuController } from '@ionic/angular';
import { ConexionService } from './../conexion.service';

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

  inmueble:any;

  constructor(private router:Router, private loadingCtrl:LoadingController, public conexion:ConexionService){   
    this.conexion.getInmuebles()
      .then((data:any)=>{
        this.inmueble = data.data;
        console.log(this.inmueble);
      });
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