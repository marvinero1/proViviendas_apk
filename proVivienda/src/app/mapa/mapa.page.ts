import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoogleMaps, GoogleMap, Environment, GoogleMapsEvent, Marker } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { BaseArrayClass } from '@ionic-native/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: GoogleMap;

  constructor(private platform:Platform) {

  }

   ngOnInit() {
     this.platform.ready();
    
     this.loadMap();
    
     this.addMarker();
    
     this.iconProperty();
  }

  loadMap(){
      this.map = GoogleMaps.create('map_canvas');
      this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
  }

    addMarker(){
    let marker: Marker =this.map.addMarkerSync({
    title: '@ionic-native/google-maps',
    icon:'#157424',
    animation:'BOUNCE',
    position:{
      lat:-17.3894997,
      lng:-66.1567993
    }
  });
  marker.showInfoWindow();

  // let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
  //   {
  //     position:{lat:37.2348, lng:-115.8108},
  //     iconData:"assets/images/marker.png",
  //   },
  //   {
  //     position:{lat:-17.382632, lng:-66.164062},
  //     iconData:"assets/images/marker.png",
  //   }  
  // ])
}

iconProperty(){
  let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
    {
      position:{lat:37.2348, lng:-115.8108},
      iconData:"assets/images/marker.png",
    },
    {
      position:{lat:-17.382632, lng:-66.164062},
      iconData:"assets/images/marker.png",
    }
  ]);
}
}
