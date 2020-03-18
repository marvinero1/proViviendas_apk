import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController,
  ) {
    this.initializeApp();
  }

  // async cerrarsesion(){
  //   console.log("cerrar secion");
  //   const loading = await this.loadingCtrl.create({
  //     spinner: 'circles',
  //     // duration: 1500
  //   });
  //   loading.present().then(() => {
  //     this.auth.logout().subscribe(
  //       data => {
  //         loading.dismiss().then(()=>{
  //           // this.navCtrl.navigateRoot('/home');
  //           // this.router.navigate(['/inicio']);
  //         });
  //         console.log("terminado");
  //       },
  //       ()=>{
  //         // this.navCtrl.navigateRoot('/home');
  //         loading.dismiss();
  //       }
  //     );
  //   });
  // }

  rootPage: any;

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();

    this.statusBar.styleDefault();
    this.splashScreen.hide();
      // this.rootPage = '../mapa/mapa.module#MapaPageModule';
    });
  }
}
