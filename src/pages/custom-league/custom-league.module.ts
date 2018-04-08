import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomLeaguePage } from './custom-league';

@NgModule({
  declarations: [
    CustomLeaguePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomLeaguePage),
  ],
})
export class CustomLeaguePageModule {}
