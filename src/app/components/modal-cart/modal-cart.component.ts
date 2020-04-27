import { Component, Input, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class ModalCartComponent {

  @ViewChild(IonInfiniteScroll,  {static: false}) infiniteScroll: IonInfiniteScroll;
  cartItems: any[] = [];
  @Input() message;
  totalPrice = 0;

  constructor(private modalController: ModalController,
              private serviceCart: CartService,
              private router: Router ) {}

  ionViewWillEnter() {
    this.cartItems = this.serviceCart.getCart();
    this.totalPrice = this.serviceCart.getTotalPrice();
  }

  loadData(event) {
    const data = [1, 2, 3, 4, 5, 6];
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


  addItem(item, label) {
    item.totalPrice += item.unitPrice;
    item.amount++;
    label.el.innerText = item.amount;
    this.totalPrice += item.unitPrice;
    this.serviceCart.saveCart(this.cartItems);
  }

  removeItem(item, label) {
    if (item.amount > 1) {
      item.amount--;
      item.totalPrice -= item.unitPrice;
      label.el.innerText = item.amount;
      this.totalPrice -= item.unitPrice;
      this.serviceCart.saveCart(this.cartItems);
    }
  }

  deleteFromCart(item, ionItem) {
    this.totalPrice -= item.totalPrice;
    console.log(this.totalPrice);
    delete this.cartItems[item];
    this.serviceCart.saveCart(this.cartItems);
    ionItem.el.remove();

  }

  checkout() {
    this.serviceCart.saveCart(this.cartItems);
    this.dismissModal();
    this.router.navigate(['/tabs/tab3']);
  }
}
