import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {
  

  constructor( public router:Router, private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
  perfil(){
    this.router.navigate(['/mi-cuenta']);
  }

  async loading(){
    const loading=await this.loadingCtrl.create({
      message:'Ingresando...',
      duration:5000
    });
    await loading.present();
  }

}
