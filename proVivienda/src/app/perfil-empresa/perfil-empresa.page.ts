import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { ModalController, NavController, LoadingController, ToastController, NavParams,Platform, MenuController } from '@ionic/angular';
import { FormularioInmueblePage } from '../formulario-inmueble/formulario-inmueble.page';
import { PerfilEmpresaService } from './perfil-empresa.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.page.html',
  styleUrls: ['./perfil-empresa.page.scss'],
})
export class PerfilEmpresaPage implements OnInit {

  cart = [];
  items = [];
  itemsEdifico = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 

  constructor(public empresa: PerfilEmpresaService ,private camera:Camera,private router: Router,public loadingCtrl: LoadingController,public modalController: ModalController) { }

  ngOnInit( ) {
    this.items = this.empresa.getProducts(); 
    this.itemsEdifico = this.empresa.getEdificio();
  }
 
  async registrarInmueble(){
    const modal = await this.modalController.create({
      component: FormularioInmueblePage,
      componentProps: {accion:'Regístrate'}
    });
    modal.present();
    modal.onDidDismiss().then(()=>{
      console.log("modal cerrado");
    });
  }

  continuar(){
    this.router.navigate(['/perfil-contacto']);
  }

  btnPublicacion(){
    this.router.navigate(['/empresa-publicaciones']);
  }

  btnHome(){
    this.router.navigate(['./home-tabs/home-tabs.module#HomeTabsPageModule']);
  }
}

