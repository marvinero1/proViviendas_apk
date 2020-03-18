// import { AuthProvider } from '../providers/auth/auth';
import { ModalController, NavController, LoadingController, ToastController, NavParams,Platform, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta.page';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { AuthProvider } from '../providers/auth/auth';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  usuario:any= {
    nombre:'',
    password:''
  }
  usuarioData:any;
  // private fb: Facebook
  // private auth: AuthProvider
  constructor(private restangular: Restangular, private navCtrl: NavController,public loadingCtrl: LoadingController,public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }

  async registrate(){
    const modal = await this.modalController.create({
      component: CrearCuentaPage,
      componentProps: {accion:'Regístrate'}
    });
    modal.present();
    modal.onDidDismiss().then(()=>{
      console.log("modal cerrado");
    });
  }

  omitir(){
    this.router.navigate(['/vista1']);
  }

  async iniciarSesion(){
    const loading=await this.loadingCtrl.create({
      message:'Ingresando...',
      duration:5000
    });
    await loading.present();
  }


//   loginFacebook(){
//   this.logoutFacebook();
//   const loading1 = await this.loadingCtrl.create({
//     message: 'iniciar sesión.',
//     // duration: 1500
//   });
//   const loading = await this.loadingCtrl.create({
//     message: 'Verificando.',
//     // duration: 1500
//   });
//   // user_friends
//   this.fb.login(['public_profile', 'email'])
//   .then((res: FacebookLoginResponse) => {
//     console.log('Inicia sesión en Facebook!', res);
//     if(res.status ==="connected"){
//       this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
//         this.usuarioData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']};
//         this.usuario = {
//           ciudad_id:'',
//           nombre:this.usuarioData.username,
//           email:this.usuarioData.email,
//           provider:'facebook',
//           provider_user_id:res.authResponse.userID,
//           imagen:this.usuarioData.picture,
//           rol:'usuario'
//         };
//         console.log("data login");
//         console.log(this.usuario);
//         loading.present().then(() => {            
//           this.restangular.one('ionicsocialExit',this.usuario.provider_user_id).one(this.usuario.provider).get( ).subscribe((data) => {
//             loading.dismiss();
//             console.log(data.mensaje);
//             let val = data.mensaje;
//             console.log(val);
//             if(val){
//               console.log("ya existe");
//               loading1.present().then(() => {
//                 this.auth.loginsocial(this.usuario).subscribe(
//                   (dat) => {
//                     console.log("autenticado correctamente Facebook");
//                     this.auth.getuser().subscribe(
//                       data => {
//                         loading1.dismiss().then(()=>{
//                           // this.presentToast(response.mensaje).then(()=>{
//                             // this.router.navigate(['/zona']);
//                             this.navCtrl.navigateRoot('/ciudad');
        
//                           // });
//                         });
//                         console.log("correcto");
//                       },
//                       err => {
//                         loading1.dismiss();
//                         console.log(err);
//                       }
//                     );
                  
//                   },
//                   (error: HttpErrorResponse) => {
//                     loading1.dismiss().then(()=>{
//                       // this.presentToast("Credenciales no válidas");
//                     });
//                   },
//                   () => {
//                     loading1.dismiss();
//                   }
//                 );
//               });
//             }else{
//               console.log("no existe");
//               this.router.navigate(['/pais',{user:JSON.stringify(this.usuario),accion:'facebook'}]);
//             }
//           },
//           ()=>{
//             loading.dismiss();
//           });
//         });
//       })
//       .catch(e => {
//         // alert('Error al iniciar sesión en Facebook1'+JSON.stringify(e));
//         console.log('Error al iniciar sesión en Facebook', e);
//       });
//     }else{
//       // alert('fallo login facebook');
//       console.log("fallo login facebook");
//     }
//   })
//   .catch(e => {
//     // this.logoutFacebook();
//     // alert('Error al iniciar sesión en Facebook2'+JSON.stringify(e))
//     console.log('Error al iniciar sesión en Facebook', e);
//   });
//   // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
// }
// logoutFacebook() {
//   console.log("acction logout");

//   this.fb.logout()
//     .then(res => {
//       console.log("deslogueado correctamente Facebook");
//       console.log(res);
    
//     })
//     .catch(err => console.error(err));
//   }
}
