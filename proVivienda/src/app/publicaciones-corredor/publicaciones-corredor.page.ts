import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
  }

  btnInfo(){
    this.router.navigate(['/corredor-tabs/tab1']);
  }
}
