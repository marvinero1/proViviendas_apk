import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilCorredorService {
  private data = [
    {
      category: 'casas',
      expanded: true,
      products: [
        { img: 'assets/images/casa1.png' },
        { img: 'assets/images/casa1.png' },
        { img: 'assets/images/casa1.png' },
        { img: 'assets/images/casa1.png' },
      ]
    },
  ];
  private data1 = [
    {
      category: 'departamentos',
      expanded: true,
      products: [
        { img: 'assets/images/casa2.png' },
        { img: 'assets/images/casa2.png' },
        { img: 'assets/images/casa2.png' },
        { img: 'assets/images/casa2.png' },
      ]
    },
  ];
 
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }

  getEdificio() {
    return this.data1;
  }
}
