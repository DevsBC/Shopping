import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class ModalCartComponent implements OnInit {

  @ViewChild(IonInfiniteScroll,  {static: false}) infiniteScroll: IonInfiniteScroll;
  @Input() cartItems;
  @Input() message;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

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
}
