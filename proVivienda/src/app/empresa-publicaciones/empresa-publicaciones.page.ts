import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-empresa-publicaciones',
  templateUrl: './empresa-publicaciones.page.html',
  styleUrls: ['./empresa-publicaciones.page.scss'],
})
export class EmpresaPublicacionesPage implements OnInit {
  slides =[
    {
      img: 'assets/images/casa3.png',
    }
    ,
    {
      img: 'assets/images/casa2.png',
    },
    {
      img: 'assets/images/casa3.png',
    },
    {
      img: 'assets/images/casa1.png',
    }
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  btnInfo(){
    this.router.navigate(['/inmobiliaria-tabs/tab1']);
  }

}
