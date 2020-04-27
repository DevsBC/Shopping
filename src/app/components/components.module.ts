import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavigationdrawerComponent } from './navigationdrawer/navigationdrawer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModalCartComponent } from './modal-cart/modal-cart.component';
import { LoginComponent } from './login/login.component';
import { ModalProofPaymentComponent } from './modal-proof-payment/modal-proof-payment.component';



@NgModule({
  declarations: [
    NavigationdrawerComponent,
    ToolbarComponent,
    ModalCartComponent,
    LoginComponent,
    ModalProofPaymentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavigationdrawerComponent,
    ToolbarComponent,
    ModalCartComponent,
    LoginComponent,
    ModalProofPaymentComponent
  ]
})
export class ComponentsModule { }
