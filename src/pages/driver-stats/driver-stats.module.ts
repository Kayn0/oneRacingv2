import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverStatsPage } from './driver-stats';

@NgModule({
  declarations: [
    DriverStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverStatsPage),
  ],
})
export class DriverStatsPageModule {}
