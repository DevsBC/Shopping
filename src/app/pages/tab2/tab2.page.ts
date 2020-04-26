import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cart = [];
  items = [
    {
      category: 'Pan',
      expanded: true,
      products: [
        { id: 0, name: 'barra', price: 25 },
        { id: 1, name: 'bollilo', price: 2 },
        { id: 2, name: 'dulce', price: 5 }
      ]
    },
    {
      category: 'Carne',
      expanded: false,
      products: [
        { id: 0, name: 'puerco', price: 70 },
        { id: 1, name: 'res', price: 180 },
        { id: 2, name: 'pollo', price: 50 }
      ]
    }
  ];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  promos: any;

  constructor(private router: Router) {
    this.promos = [
      {nameProduct: 'Vino', price: 78, img: 'https://picsum.photos/500/400?image=693'},
      {nameProduct: 'Paketaxo', price: '2x1', img: 'https://picsum.photos/500/400?image=1060'},
      {nameProduct: 'Leche Galon', price: 45, img: 'https://picsum.photos/500/400?image=1043'},
      {nameProduct: 'Chocolate', price: 12, img: 'https://picsum.photos/500/400?image=903'}
    ];
  }

  addToCart(product) {
    console.log(product);
  }

  openCart() {
  }

  getIcon(isShow: boolean) {
    if (isShow) {
      return 'arrow-down-outline';
    } else {
      return 'arrow-back-outline';
    }
  }
}
