import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  constructor() {}

  addToCart(product) {
    const cart = this.getCart();
    if (cart.length > 0) {
      const filterItem = cart.filter(item => item.id === product.id);
      if (filterItem.length > 0) {
          filterItem[0].totalPrice = product.totalPrice;
          filterItem[0].amount = product.amount;
      } else {
        cart.push(product);
      }
    } else {
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }

  getCart() {
    if (localStorage.getItem('cart')) {
      const cartItems = JSON.parse(localStorage.getItem('cart'));
      return cartItems;
    } else {
      return [];
    }
  }

  getCountCart() {
    const cart = this.getCart();
    let totalProducts = 0;
    for (const product of cart) {
      totalProducts += product.amount;
    }
    return totalProducts;
  }

  saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Guardado');
  }

  getTotalPrice() {
    const cart = this.getCart();
    let total = 0;
    for (const product of cart) {
        total += product.totalPrice;
    }
    return total;
  }

}
