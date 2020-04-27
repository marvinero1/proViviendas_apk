import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ConexionService } from './../conexion.service';

@Component({
  selector: 'app-publicaciones-corredor',
  templateUrl: './publicaciones-corredor.page.html',
  styleUrls: ['./publicaciones-corredor.page.scss'],
})
export class PublicacionesCorredorPage implements OnInit {
  
  slides =[
    {
      img: 'assets/images/casa1.png',
    },
    {
      img: 'assets/images/casa2.png',
    },
    {
      img: 'assets/images/casa3.png',
    },
  ];

  inmueble:any;
  
  constructor(private router:Router,public conexion:ConexionService) {
    this.conexion.getInmuebles()
      .then((data:any)=>{
        this.inmueble = data.data;
        console.log(this.inmueble);
      });
   }

  ngOnInit() {
  }

  btnInfo(){
    this.router.navigate(['/corredor-tabs/tab1']);
  }
}
