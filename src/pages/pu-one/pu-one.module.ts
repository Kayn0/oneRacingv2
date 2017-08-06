import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuOnePage } from './pu-one';

@NgModule({
  declarations: [
    PuOnePage,
  ],
  imports: [
    IonicPageModule.forChild(PuOnePage),
  ],
})
export class PuOnePageModule {}
