import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCartComponent } from './components/modal-cart/modal-cart.component';
import { ComponentsModule } from './components/components.module';
import { ModalProofPaymentComponent } from './components/modal-proof-payment/modal-proof-payment.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ModalCartComponent, ModalProofPaymentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
