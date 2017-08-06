import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverOnePage } from './driver-one';

@NgModule({
  declarations: [
    DriverOnePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverOnePage),
  ],
})
export class DriverOnePageModule {}
