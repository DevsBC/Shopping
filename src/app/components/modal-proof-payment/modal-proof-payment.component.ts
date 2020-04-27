import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-proof-payment',
  templateUrl: './modal-proof-payment.component.html',
  styleUrls: ['./modal-proof-payment.component.scss'],
})
export class ModalProofPaymentComponent implements OnInit {
  @Input() purchaseInfo: any;

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    console.log(this.purchaseInfo);
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  backToShopping() {
    this.dismissModal();
    this.router.navigate(['/tabs/tab2']);
  }
}
