import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

import { ChassisStatsPage } from '../chassis-stats/chassis-stats';

/**
 * Generated class for the ChassisOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chassis-one',
  templateUrl: 'chassis-one.html',
})
export class ChassisOnePage {
	public round: any;
  public lastRound = 0;
  public currentRound: number;
  public roundDataList: any;

  public userTrades: number;

	public chassisList: any;
	public chassisOne: any;
	public chassisTwo: any;
  public userChassisOne: any;
  public userChassisTwo: any;

  public userChassisOneValue: any;
  public userChassisTwoValue: any;

  public teamCash: any;
  public userPoints: any;

  public chassisOneName: any;
  public chassisTwoName: any;

  public gameState = "lockout";
  public raceTime: number = 0;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
  	public storage: Storage,
  	public adminData: AdminDataProvider,
  	public teamData: TeamDataProvider,
  	public currentRoundData: CurrentRoundDataProvider
 	){
  	this.navCtrl = navCtrl;
  	this.adminData = adminData;
  	this.teamData = teamData;

  	//get team cash amount
    this.teamData.getTheMoney().on('value', (snapshot) => {
      this.teamCash = snapshot.val().money;
      this.userTrades = snapshot.val().trades;
      this.userPoints = snapshot.val().totalPoints;
      if (this.teamCash == 0) {
        this.teamCash = "0";
      }
      console.log(this.userPoints, 'userPoints');
    });

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
	
      //get last round value
      if (this.currentRound < 2){
        this.lastRound = 0;
      } else {
        this.lastRound = this.currentRound - 1;
        console.log(this.lastRound, 'this.lastRound');
      }

    	//call to firebase to retrieve chassis list data
    	this.adminData.getChassisList(this.lastRound).orderByChild("chassisValue").on('value', snapshot => {
  		  let rawList = [];
  		  snapshot.forEach( snap => {
  		    rawList.push({
  		      id: snap.key,
            position: snap.val().position,
  		      chassisName: snap.val().chassisName,
            chassisValue: snap.val().chassisValue,
  		      chassisImage: snap.val().chassisImage,
            chassisPoints: snap.val().chassisPoints,
            valChange: snap.val().valChange,
            chassisUpgrade: snap.val().chassisUpgrade
  		    });
  		  });
  		  this.chassisList = rawList.reverse();
  		});
    });

    //call firebase to check user chassis one data
    this.teamData.getChassisOne().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          position: snap.val().position,
          chassisName: snap.val().chassisName,
          chassisValue: snap.val().chassisValue,
          chassisImage: snap.val().chassisImage,
          chassisPoints: snap.val().chassisPoints,
          valChange: snap.val().valChange,
          chassisUpgrade: snap.val().chassisUpgrade
        });
        if (snap.val().chassisName !== undefined) {
          this.chassisOneName = snap.val().chassisName;
        }
      });
      this.userChassisOne = rawList;
      if (this.userChassisOne.length > 0) {
        this.userChassisOne = Object.keys(this.userChassisOne).map(key => this.userChassisOne[key]); //convert to array of objects
        this.userChassisOneValue = parseInt(this.userChassisOne[0].chassisValue);
      } else {
        this.userChassisOneValue = 0;
      }
    });

    //call firebase to check user chassis two data
    this.teamData.getChassisTwo().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          position: snap.val().position,
          chassisName: snap.val().chassisName,
          chassisValue: snap.val().chassisValue,
          chassisImage: snap.val().chassisImage,
          chassisPoints: snap.val().chassisPoints,
          valChange: snap.val().valChange,
          chassisUpgrade: snap.val().chassisUpgrade
        });
        if (snap.val().chassisName !== undefined) {
          this.chassisTwoName =  snap.val().chassisName;
        }
      });

      this.userChassisTwo = rawList;
      if (this.userChassisTwo.length > 0) {
        this.userChassisTwo = Object.keys(this.userChassisTwo).map(key => this.userChassisTwo[key]); //convert to array of objects
        this.userChassisTwoValue = parseInt(this.userChassisTwo[0].chassisValue);
      } else {
        this.userChassisTwoValue = 0;
      }
    });

    this.adminData.getGameState().on('value', snapshot => {
      this.gameState = snapshot.val().gameState;
      console.log(this.gameState);
    });
  }//end constructor

  //add chassis to firebase from list
  addChassis(carNum, carData) {
    let confirm = this.alertCtrl.create({
    title: 'Confirm',
    message: 'Are you sure you want to make a trade?',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Car Number', carNum);
          console.log('Car data', carData);
          var newValue;
          var oldValue;


          //make sure the user has trades
          if (this.userTrades > 0) {
            if (carNum === 'one') {

              //check for first entry
              if (this.userChassisOne.length < 1) {
                console.log('firstEntry');
                newValue = carData.chassisValue

                //check that this.driverOne.driverValue > this.teamCash
                if (newValue > this.teamCash) {
                  this.negBalanceAlert(newValue, this.teamCash, 0);
                } else {
                  this.teamData.addChassis(carData, this.userChassisOne, carNum, this.userPoints);
                }
              } else {

                oldValue = parseInt(this.userChassisOne[0].chassisValue);
                newValue = carData.chassisValue;

                //check if user has enough money
                if ((this.teamCash + oldValue) >= newValue) { 
                  this.teamData.addChassis(carData, this.userChassisOne, carNum, this.userPoints);
                } else {
                  this.negBalanceAlert(newValue, this.teamCash, oldValue);
                }
              }
            } // end car one

            else {
              //check for first entry
              if (this.userChassisTwo.length < 1) {
                console.log('firstEntry');
                newValue = carData.chassisValue

                //check that driver one's value > teamCash
                if (newValue > this.teamCash) {
                  this.negBalanceAlert(newValue, this.teamCash, 0);
                } else {
                  this.teamData.addChassis(carData, this.userChassisTwo, carNum, this.userPoints);
                }
              } else {

                oldValue = parseInt(this.userChassisTwo[0].chassisValue);
                newValue = carData.chassisValue;

                //check if user has enough money
                if ((this.teamCash + oldValue) >= newValue) { 
                  this.teamData.addChassis(carData, this.userChassisTwo, carNum, this.userPoints);
                } else {
                  this.negBalanceAlert(newValue, this.teamCash, oldValue);
                }
              }
            } // end car two

          } else {
            this.noTradeAlert();
          }
        }
      }
    ]
    });
    confirm.present();
  }

  getRaceTime(timeOfRace, timeNow) {
    var timeToRace = timeOfRace - timeNow;
    console.log("timeToRace Chassis", timeToRace);
    return timeToRace;
  }

  noTradeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Out of trades',
      subTitle: 'You are out of trades, purchase more to continue to make trades.',
      buttons: ['OK']
    });
    alert.present();
  }

  negBalanceAlert(newValue, teamCash, oldValue) {
    var negVal = ((this.teamCash + oldValue) - newValue) * -1;

    let alert = this.alertCtrl.create({
      title: 'Not enough money',
      subTitle: 'You need an additional $' + negVal + ' to make the trade.',
      buttons: ['OK']
    });
    alert.present();
  }

  carHelp() {
    let alert = this.alertCtrl.create({
      title: 'Hints and tips',
      subTitle: 'Trades are free in your first round.' + '<br /><br />' +
      'When you make a trade you receive the value of your current chassis.' + '<br /><br />' +
      'Additional trades can be bought from the team page.',
      buttons: ['OK']
    });
    alert.present();
  }

  ngAfterViewInit() {
  	let tabHeader = document.querySelectorAll('.tab-content');
    if (tabHeader !== null) {
    	tabHeader["0"].style.display = 'none';   
    }
	}

	ionViewWillLeave() {
	 	let tabHeader = document.querySelectorAll('.tab-content');
    if (tabHeader !== null) {
      tabHeader["0"].style.display = 'flex';
    }
	}

  goToChassisStats(chassis){
    this.navCtrl.push(ChassisStatsPage, chassis);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChassisOnePage');
  }

}
