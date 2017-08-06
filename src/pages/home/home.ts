import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthDataProvider } from '../../providers/auth-data/auth-data';
import { ProfileDataProvider } from '../../providers/profile-data/profile-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

import { TourGuidePage } from '../tour-guide/tour-guide';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

/**
 * Generated class for the homePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
	public round: any;
  public lastRound = 0;
  public roundDataList: any;
  public raceTime: number = 0;
  public gameState = "lockout";
  public email = "mailto:oneracingleague@gmail.com?subject=App%20feedback"
  tabbar: any;
  teamName: any;

  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams, 
    public storage: Storage,
    public authData: AuthDataProvider, 
    public profileData: ProfileDataProvider,
    public app: App,
    public currentRoundData: CurrentRoundDataProvider
   	){
 	} //end constructor 

  mailto() {
    window.open(this.email, "_system");
  }

  goToHome(){
    this.navCtrl.push(TabsPage);
  }

  goToTourGuide(){
    this.navCtrl.push(TourGuidePage);
  }

  logMeOut(): void {
    this.authData.logoutUser().then(() => {
      this.app.getRootNav().setRoot(LoginPage);
      window.location.reload();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
