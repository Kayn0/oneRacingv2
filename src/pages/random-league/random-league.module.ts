import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomLeaguePage } from './random-league';

@NgModule({
  declarations: [
    RandomLeaguePage,
  ],
  imports: [
    IonicPageModule.forChild(RandomLeaguePage),
  ],
})
export class RandomLeaguePageModule {}
