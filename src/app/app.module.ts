import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

//Auth pages
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

//Tab pages
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RacePage } from '../pages/race/race';
import { TeamPage } from '../pages/team/team';
import { RankingPage } from '../pages/ranking/ranking';
import { RulesPage } from '../pages/rules/rules';

//Sub pages
import { BuyTradesPage } from '../pages/buy-trades/buy-trades';
import { DriverOnePage } from '../pages/driver-one/driver-one';
import { DriverTwoPage } from '../pages/driver-two/driver-two';
import { ChassisOnePage } from '../pages/chassis-one/chassis-one';
import { ChassisTwoPage } from '../pages/chassis-two/chassis-two';
import { PuOnePage } from '../pages/pu-one/pu-one';
import { PuTwoPage } from '../pages/pu-two/pu-two';

import { DriverStatsPage } from '../pages/driver-stats/driver-stats';
import { ChassisStatsPage } from '../pages/chassis-stats/chassis-stats';
import { PuStatsPage } from '../pages/pu-stats/pu-stats';
import { PlayerTeamPage } from '../pages/player-team/player-team';

//Providers
import { AuthDataProvider } from '../providers/auth-data/auth-data';
import { ProfileDataProvider } from '../providers/profile-data/profile-data';
import { CurrentRoundDataProvider } from '../providers/current-round-data/current-round-data';
import { AdminDataProvider } from '../providers/admin-data/admin-data';
import { TeamDataProvider } from '../providers/team-data/team-data';
import { StatsDataProvider } from '../providers/stats-data/stats-data';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ResetPasswordPage,

    TabsPage,
    HomePage,
    RacePage,
    TeamPage,
    RankingPage,
    RulesPage,

    BuyTradesPage,
    DriverOnePage,
    DriverTwoPage,
    ChassisOnePage,
    ChassisTwoPage,
    PuOnePage,
    PuTwoPage,

    DriverStatsPage,
    ChassisStatsPage,
    PuStatsPage,
    PlayerTeamPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }), 
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ResetPasswordPage,

    TabsPage,
    HomePage,
    RacePage,
    TeamPage,
    RankingPage,
    RulesPage,

    BuyTradesPage,
    DriverOnePage,
    DriverTwoPage,
    ChassisOnePage,
    ChassisTwoPage,
    PuOnePage,
    PuTwoPage,

    DriverStatsPage,
    ChassisStatsPage,
    PuStatsPage,
    PlayerTeamPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthDataProvider,
    ProfileDataProvider,
    CurrentRoundDataProvider,
    AdminDataProvider,
    TeamDataProvider,
    StatsDataProvider,
    FCM,
  ]
})
export class AppModule {}
