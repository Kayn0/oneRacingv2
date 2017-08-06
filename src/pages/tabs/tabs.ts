import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';
import { ProfileDataProvider } from '../../providers/profile-data/profile-data';

import { HomePage } from '../home/home';
import { RacePage } from '../race/race';
import { TeamPage } from '../team/team';
import { RankingPage } from '../ranking/ranking';
import { RulesPage } from '../rules/rules';
import { ITimer } from './itimer';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

	@Input() timeInSeconds: number;
  tab1Root = HomePage;
  tab2Root = RacePage;
  tab3Root = TeamPage;
  tab4Root = RankingPage;
	tab5Root = RulesPage;

	public round: any;
  public roundDataList: any;
  public userProfile: any;
  public raceTime: number = 0;
  public gameState = "lockout";
  public tabEnabled:boolean = false;
  public userCount: number;
  public currentRound: number;

  public timer: ITimer;
  public timeOfRace;
  public timeNow;

  constructor(
  	public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage, 
    public adminData: AdminDataProvider, 
    public currentRoundData: CurrentRoundDataProvider,
    public profileData: ProfileDataProvider,
    public alertCtrl: AlertController
  ){
  	//call to firebase to retrieve currentRound
    this.currentRoundData.getCurrentRound().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          currentRound: snap.val().currentRound
        })
      });

      this.currentRound = rawList[0].currentRound;
      console.log('TABS - this round:', this.currentRound);

      //call to firebase to retrieve lockout list data 
      this.adminData.getRoundDataList(this.currentRound).on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
          rawList.push({
            id: snap.key,
            lockoutDate: snap.val().lockoutDate,
          });
        });
        this.roundDataList = rawList;
        console.log('lockout', this.roundDataList[0]);
        var raceDate = this.roundDataList[0].lockoutDate;

        var timeOfRace = Math.round(new Date(raceDate).getTime()/1000);
        var timeNow = Math.round(new Date().getTime()/1000);
        this.raceTime = this.getRaceTime(timeOfRace, timeNow);

        //start timer
        this.initTimer(this.raceTime);
        // console.log("raceTime tabs", this.raceTime);
      });

      //Save currentRound to localstorage
      this.storage.set('currentRound', this.currentRound);
    });

    this.currentRoundData.getGameState().on('value', snapshot => {
      console.log('game state-tabs:', snapshot.val().gameState);
      this.gameState = snapshot.val().gameState;
    });

     this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();

      if (this.userProfile.teamName) {
        this.tabEnabled = true;
      }
    });

    //get length of user list
    this.profileData.getUsersList().on('value', snapshot => {
      let counter = 0;
      console.log("checking:", snapshot.val());
      snapshot.forEach( snap => {
        if (snap.val().teamName == undefined) {
        } else {
          counter = counter + 1;
        }
      });
      this.userCount = counter + 1;
    });

    this.navParams = navParams;
    this.navParams.data = this.userProfile;
  } // end constructor

  updateName(){
    let alert = this.alertCtrl.create({
      title: "Enter your team name",
      inputs: [
        {
          name: 'teamName',
          placeholder: 'Your team name',
          value: ''
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateRank(this.userCount);
            this.profileData.updateName(data.teamName);
          }
        }
      ]
    });
    alert.present();
  }

  // function that caluclates time to next lockout
  getRaceTime(timeOfRace, timeNow) {
    var timeToRace = timeOfRace - timeNow;
    return timeToRace;
  }

  // sets timer properties and starts timer
  initTimer(timeInSeconds) {
    if(!timeInSeconds) { 
      timeInSeconds = 0; 
    }
    console.log("initTimer");
    this.timer = <ITimer>{
      seconds: timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    console.log("Call timerTick");
    this.timerTick();
  }
 
  startTimer() { //start timer not being used
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.hasFinished();
        // this.timer.hasFinished = true;
      }
    }, 1000);
  }
 
  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var days    = Math.floor(sec_num / 86400);
    var lessHours  = Math.ceil((sec_num - (days * 86400)) / 3600);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var daysString = '';
    var hoursString = '';
    var lessHoursString = '';
    var minutesString = '';
    var secondsString = '';

    daysString = (days < 10) ? "0" + days : days.toString();
    if (days == 0){
      lessHours = lessHours - 1;
    }
    lessHoursString = (lessHours < 10) ? "0" + lessHours : lessHours.toString();
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return daysString + ':' + lessHoursString + ':' + minutesString + ':' + secondsString + ' ';
  }

  //function sets timer to finished and changes state to lockout
  hasFinished() {
    this.changeState();
    return this.timer.hasFinished;
  }

  //change game state sitewide
  changeState() {
    this.currentRoundData.changeState("lockout");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
