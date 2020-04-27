import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  cart = [];
  items = [
    {
      category: 'Panadería y tortillería',
      expanded: true,
      products: [
        { id: 0, name: 'Concha', unitPrice: 4.50, totalPrice: 4.50, img: 'assets/fotos/PanDulce_Concha.png', amount: 1 },
        { id: 1, name: 'Varios', unitPrice: 4.50, totalPrice: 4.50, img: 'assets/fotos/PanDulceVarios.png', amount: 1 },
        { id: 2, name: 'Tortillas de Maiz', unitPrice: 14.50, totalPrice: 14.50, img: 'assets/fotos/TortillasMaiz.png', amount: 1 }
      ]
    },
    {
      category: 'Carnicería',
      expanded: true,
      products: [
        { id: 3, name: 'Rib Eye', unitPrice: 199.99, totalPrice: 199.99, img: 'assets/fotos/RibEye.png', amount: 1 },
        { id: 4, name: 'Molida Especial', unitPrice: 89.99, totalPrice: 89.99, img: 'assets/fotos/PulpaBolaMolida.png', amount: 1 }
      ]
    },
    {
      category: 'Lácteos y embutidos',
      expanded: true,
      products: [
        { id: 5, name: 'Salchicha San Rafael', unitPrice: 45, totalPrice: 45, img: 'assets/fotos/SalchichaSanRafael.png', amount: 1 },
        { id: 6, name: 'Salchichon Chimex', unitPrice: 40, totalPrice: 40, img: 'assets/fotos/SalchichonChimex.png', amount: 1 },
        { id: 7, name: 'Queso Clavel', unitPrice: 124.99, totalPrice: 124.99, img: 'assets/fotos/QuesoClavel.png', amount: 1 },
      ]
    }
  ];

  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 3,
    centeredSlides: false,
    preloadImages: true,

  };

  sliderPromo = {
    linitialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  promos: any;

  constructor(private cartService: CartService) {
    this.promos = [
      {id: 8, name: 'Nescafe 225gr y 42gr', unitPrice: 84.99, totalPrice: 84.99, img: 'assets/fotos/Nescafe225y42grs.png', amount: 1},
      {id: 9, name: 'Paketaxo 2x1', unitPrice: 68, totalPrice: 68, img: 'assets/fotos/Paketaxo.png', amount: 1},
      {id: 10, name: 'Smirnoff', unitPrice: 175, totalPrice: 175, img: 'assets/fotos/Smirnoff.png', amount: 1},
      {id: 11, name: 'Salvo', unitPrice: 27.50, totalPrice: 27.50, img: 'assets/fotos/JabonSalvo.png', amount: 1}
    ];
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  openCart() {
  }

  getIcon(isShow: boolean) {
    if (isShow) {
      return 'chevron-down-outline';
    } else {
      return 'chevron-back-outline';
    }
  }

  addProductAmount(product, labelQuantity) {
    product.amount++;
    product.totalPrice += product.unitPrice;
    labelQuantity.el.innerText = product.amount;
  }

  removeProductAmount(product, labelQuantity) {
    if (product.amount > 1) {
      product.totalPrice -= product.unitPrice;
      product.amount--;
      labelQuantity.el.innerText = product.amount;
    }
  }
  getCount() {
    return this.cartService.getCountCart();
  }

  expandCategory(category: any) {
    for (const cat of this.items) {
      cat.expanded = false;
    }
    category.expanded = true;
  }
}
