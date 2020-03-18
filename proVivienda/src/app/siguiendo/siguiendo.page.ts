import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-siguiendo',
  templateUrl: './siguiendo.page.html',
  styleUrls: ['./siguiendo.page.scss'],
})
export class SiguiendoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  perfil(){
    this.router.navigate(['/mi-cuenta']);
  }
}
