import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourGuidePage } from './tour-guide';

@NgModule({
  declarations: [
    TourGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(TourGuidePage),
  ],
})
export class TourGuidePageModule {}
