import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { NavigationdrawerComponent } from './navigationdrawer/navigationdrawer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModalCartComponent } from './modal-cart/modal-cart.component';



@NgModule({
  declarations: [
    ExploreContainerComponent,
    NavigationdrawerComponent,
    ToolbarComponent,
    ModalCartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ExploreContainerComponent,
    NavigationdrawerComponent,
    ToolbarComponent,
    ModalCartComponent
  ]
})
export class ComponentsModule { }
