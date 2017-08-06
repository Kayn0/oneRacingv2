import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuStatsPage } from './pu-stats';

@NgModule({
  declarations: [
    PuStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(PuStatsPage),
  ],
})
export class PuStatsPageModule {}
