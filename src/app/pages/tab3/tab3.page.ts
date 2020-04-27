import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalProofPaymentComponent } from '../../components/modal-proof-payment/modal-proof-payment.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  shippingMethod: string;
  paymentMethod: string;
  message: string;
  totalPrice: number;
  totalProducts: number;
  constructor(private cartService: CartService,
              public toastController: ToastController,
              private router: Router,
              public modalController: ModalController) {}

  ionViewWillEnter() {
    console.log('iniciando');
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalProducts = this.cartService.getCountCart();
    this.message = this.totalProducts + ' productos en tu carrito de compra';
  }

  shipping(event) {
    this.shippingMethod = event.target.value;
  }

  payment(event) {
    this.paymentMethod = event.target.value;
  }
  canProceed() {
    return this.paymentMethod !== '' && this.shippingMethod !== '';
  }
  async payAndProceed() {
    await this.presentModal();
/*

    if (this.canProceed() && localStorage.getItem('cart')  ) {
      localStorage.removeItem('cart');
      await this.presentModal();
    }*/

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Gracias por hacer tu super en menos pasos.',
      duration: 2000
    });
    toast.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalProofPaymentComponent,
      componentProps: {
        purchaseInfo: {
          orderNumber: '01346586-235',
          pickUpDate: {
            date: '29 - Abr - 2020',
            time: '10:00 AM - 11:30 AM'
          }
        }
      }
    });
    return await modal.present();
  }

}
