import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChassisOnePage } from './chassis-one';

@NgModule({
  declarations: [
    ChassisOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ChassisOnePage),
  ],
})
export class ChassisOnePageModule {}
