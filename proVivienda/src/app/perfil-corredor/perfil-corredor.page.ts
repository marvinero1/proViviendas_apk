import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormularioCorredorPage } from '../formulario-corredor/formulario-corredor.page';
import { ModalController, NavController, LoadingController, ToastController, NavParams,Platform, MenuController } from '@ionic/angular';
import { PerfilCorredorService } from './perfil-corredor.service';
import { Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-perfil-corredor',
  templateUrl: './perfil-corredor.page.html',
  styleUrls: ['./perfil-corredor.page.scss'],
})

export class PerfilCorredorPage implements OnInit {

  cart = [];
  items = [];
  itemsEdifico = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 

  constructor(public corredor: PerfilCorredorService ,private camera:Camera,private router: Router,public loadingCtrl: LoadingController,public modalController: ModalController) { }

  ngOnInit( ) {
    this.items = this.corredor.getProducts(); 
    this.itemsEdifico = this.corredor.getEdificio();
  }

  async registrarInmueble(){
    const modal = await this.modalController.create({
      component: FormularioCorredorPage,
      componentProps: {accion:'Regístrate'}
    });
    modal.present();
    modal.onDidDismiss().then(()=>{
      console.log("modal cerrado");
    });
  }

  btnInfo1(){
    this.router.navigate(['/corredor-contacto']);
  }

  casaDetalle(){
    this.router.navigate(['/publicaciones-corredor']);
  }

  btnPublicacion(){
    this.router.navigate(['/publicaciones-corredor']);
  }
}
