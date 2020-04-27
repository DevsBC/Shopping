import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCartComponent } from '../modal-cart/modal-cart.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})

export class ToolbarComponent {
  @Input() quantity = 0;

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalCartComponent,
      componentProps: {
        cartItems: [],
        message: 'No hay productos'
      }
    });
    return await modal.present();
  }


}
