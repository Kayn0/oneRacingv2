import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChassisStatsPage } from './chassis-stats';

@NgModule({
  declarations: [
    ChassisStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChassisStatsPage),
  ],
})
export class ChassisStatsPageModule {}
