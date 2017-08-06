import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyTradesPage } from './buy-trades';

@NgModule({
  declarations: [
    BuyTradesPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyTradesPage),
  ],
})
export class BuyTradesPageModule {}
