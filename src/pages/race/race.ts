import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

/**
 * Generated class for the RacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-race',
  templateUrl: 'race.html',
})
export class RacePage {
	public round: any;
  public currentRoundList: any;
	public currentRoundVal: any;
  public roundDataList: any;
  public driversList: any;
  public chassisList: any;
  public puList: any;
  public teamCash: number;

  public raceTime: number = 0; 
  public gameState = "lockout";
  public lastRound: number = 0;
  public raceData;

  constructor(
		public navCtrl: NavController,
  	public navParams: NavParams,
  	public storage: Storage,
  	public currentRoundData: CurrentRoundDataProvider,
    public adminData: AdminDataProvider
  ){
		this.navCtrl = navCtrl;
    this.storage = storage;
    this.raceData = 'drivers';

    //call to firebase to retrieve currentRound
    this.currentRoundData.getCurrentRound().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          currentRound: snap.val().currentRound
        })
      });

      this.round = rawList[0].currentRound;
      console.log('Home - this round:', this.round);
      //point to last rounds data
      if (this.round < 2) {
        this.lastRound = 0;
      } else {
        this.lastRound = this.round - 1;
      }

      //call to firebase to retrieve drivers list data 
      this.adminData.getRoundDataList(this.round).on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
          rawList.push({
            id: snap.key,
            lockoutCountry: snap.val().lockoutCountry,
            lockoutDate: snap.val().lockoutDate,
            lockoutRound: snap.val().lockoutRound,
            lockoutTrack: snap.val().lockoutTrack,
            lapTime: snap.val().lapTime,
            laps: snap.val().laps,
            raceWinner: snap.val().raceWinner,
            trackImage: snap.val().trackImage,
            trackLength: snap.val().trackLength,
          });
        });
        this.roundDataList = rawList;
        console.log('lockout data:', this.roundDataList[0]);
     
        //call to firebase to retrieve drivers list data 
        this.adminData.getDriversList(this.lastRound).orderByChild("position").on('value', snapshot => {
          let rawList = [];
          snapshot.forEach( snap => {
            rawList.push({
              id: snap.key,
              position: snap.val().position,
              firstName: snap.val().firstName,
              lastName: snap.val().lastName,
              driverImage: snap.val().driverImage,
              driverPoints: snap.val().driverPoints,
            });
          });
          this.driversList = rawList;
          console.log(this.driversList, 'Home drivers');
        });

        //call to firebase to retrieve Chassis list data 
        this.adminData.getChassisList(this.lastRound).orderByChild("position").on('value', snapshot => {
          let rawList = [];
          snapshot.forEach( snap => {
            rawList.push({
              id: snap.key,
              position: snap.val().position,
              chassisName: snap.val().chassisName,
              chassisImage: snap.val().chassisImage,
              chassisPoints: snap.val().chassisPoints
            });
          });
          this.chassisList = rawList;
          console.log(this.chassisList, 'Home chassis');
        });

        //call to firebase to retrieve pu list data 
        this.adminData.getPUList(this.lastRound).orderByChild("position").on('value', snapshot => {
          let rawList = [];
          snapshot.forEach( snap => {
            rawList.push({
              id: snap.key,
              position: snap.val().position,
              puName: snap.val().puName,
              puImage: snap.val().puImage,
              puPoints: snap.val().puPoints,
            });
          });
          this.puList = rawList;
          console.log(this.puList, 'Home pu');
        });
      });
    });
  } // end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad RacePage');
  }

}
