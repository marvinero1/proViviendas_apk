import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ModalController,   } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-formulario-inmueble',
  templateUrl: './formulario-inmueble.page.html',
  styleUrls: ['./formulario-inmueble.page.scss'],
})
export class FormularioInmueblePage implements OnInit {

  imagen:string = '/assets/imgs/person-default.png';
  constructor(private modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }
  
  takephoto() {
    const options: CameraOptions = {
      quality: 30,
      targetWidth: 960,
      targetHeight: 960,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  imageAlbum() {
    const options: CameraOptions = {
      quality: 30,
      targetWidth: 960,
      targetHeight: 960,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }   
    this.camera.getPicture(options).then((imageData) => {
     
     this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {

    });
  }


  closemodal(){
    this.modalController.dismiss();
  }
}
