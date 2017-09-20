import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerTeamPage } from './player-team';

@NgModule({
  declarations: [
    PlayerTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerTeamPage),
  ],
})
export class PlayerTeamPageModule {}
