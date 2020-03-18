import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.page.html',
  styleUrls: ['./mis-favoritos.page.scss'],
})
export class MisFavoritosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  perfil(){
    this.router.navigate(['/mi-cuenta']);
  }
}
