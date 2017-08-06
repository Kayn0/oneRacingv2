import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

import { PuStatsPage } from '../pu-stats/pu-stats';
/**
 * Generated class for the PuOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pu-one',
  templateUrl: 'pu-one.html',
})
export class PuOnePage {
	public round: any;
  public lastRound = 0;
  public currentRound: number;
  public roundDataList: any;

  public userTrades: number;

	public puList: any;
	public puOne: any;
	public puTwo: any;
  public userPuOne: any;
  public userPuTwo: any;

  public userPuOneValue: any;
  public userPuTwoValue: any;

  public teamCash: any;
  public userPoints: any;

  public puNameOne: any;
  public puNameTwo: any;
  
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

			//call to firebase to retrieve pu list data
      this.adminData.getPUList(this.lastRound).orderByChild("puValue").on('value', snapshot => {
        let rawList = [];
        snapshot.forEach( snap => {
          rawList.push({
            id: snap.key,
            position: snap.val().position,
            puName: snap.val().puName,
            puValue: snap.val().puValue,
            puImage: snap.val().puImage,
            puPoints: snap.val().puPoints,
            valChange: snap.val().valChange,
            posChange: snap.val().posChange,
            puUpgrade: snap.val().puUpgrade
          })
        });
        this.puList = rawList.reverse();
        console.log('PUList', this.puList );
      });
    });

		//call firebase to check user power unit one data
    this.teamData.getPuOne().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          position: snap.val().position,
          puName: snap.val().puName,
          puValue: snap.val().puValue,
          puImage: snap.val().puImage,
          puPoints: snap.val().puPoints,
          valChange: snap.val().valChange,
          posChange: snap.val().posChange,
          puUpgrade: snap.val().puUpgrade  
        });
        if (snap.val().puName !== undefined) {
          this.puNameOne = snap.val().puName;
        }
      });

      this.userPuOne = rawList;
      if (this.userPuOne.length > 0) {
        this.userPuOne = Object.keys(this.userPuOne).map(key => this.userPuOne[key]); //convert to array of objects
        this.userPuOneValue = parseInt(this.userPuOne[0].puValue);
      } else {
        this.userPuOneValue = 0;
      }
    });

    //call firebase to check user power unit two data
    this.teamData.getPuTwo().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          position: snap.val().position,
          puName: snap.val().puName,
          puValue: snap.val().puValue,
          puImage: snap.val().puImage,
          puPoints: snap.val().puPoints,
          valChange: snap.val().valChange,
          posChange: snap.val().posChange,
          puUpgrade: snap.val().puUpgrade
        });
        if (snap.val().puName !== undefined) {
          this.puNameTwo = snap.val().puName;
          console.log("ksjhfksjdfhksjfdh", this.puNameTwo);
        }
      });
      this.userPuTwo = rawList;
      if (this.userPuTwo.length > 0) {
        this.userPuTwo = Object.keys(this.userPuTwo).map(key => this.userPuTwo[key]); //convert to array of objects
        this.userPuTwoValue = parseInt(this.userPuTwo[0].puValue);
      } else {
        this.userPuTwoValue = 0;
      }
    });

    this.adminData.getGameState().on('value', snapshot => {
    	this.gameState = snapshot.val().gameState;
    	console.log(this.gameState);
    });
  } //end constructor

  addPU(carNum, carData){
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
          	var newValue;
          	var oldValue;
            //make sure the user has trades
            if (this.userTrades > 0) {

              //power unit one
              if (carNum === 'one') {

                //check for first entry
                if (this.userPuOne.length < 1) {
                  console.log('firstEntry');
                  newValue = carData.puValue

                  //not enough money
                  if (newValue > this.teamCash) { 
                    this.negBalance(newValue, this.teamCash, 0);
                  } else {
                    //add pu to car one
                    this.teamData.addPU(carData, this.userPuOne, carNum, this.userPoints);
                  }
                } else {
                  oldValue = parseInt(this.userPuOne[0].puValue);
                  newValue = carData.puValue;

                  //check if user has enough money
                  if ((this.teamCash + oldValue) >= newValue) {
                    //add pu to car one
                    this.teamData.addPU(carData, this.userPuOne, carNum, this.userPoints);
                  } else {
                    this.negBalance(newValue, this.teamCash, oldValue);
                  }
                }
              } // end car one
              else {
                //check for first entry
                if (this.userPuTwo.length < 1) {
                  console.log('firstEntry');
                  newValue = carData.puValue
                  if (newValue > this.teamCash) {
                    this.negBalance(newValue, this.teamCash, 0);
                  } else {
                    this.teamData.addPU(carData, this.userPuTwo, carNum, this.userPoints);
                  }
                } else {
                  oldValue = parseInt(this.userPuTwo[0].puValue);
                  newValue = carData.puValue;
                  //check if user has enough money
                  if ((this.teamCash + oldValue) >= newValue) {
                    //add pu to car two 
                    this.teamData.addPU(carData, this.userPuTwo, carNum, this.userPoints);
                  } else {
                    this.negBalance(newValue, this.teamCash, oldValue);
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
    console.log("timeToRace engine", timeToRace);
    return timeToRace;
  }

  noTradeAlert(){
    let alert = this.alertCtrl.create({
      title: 'Out of trades',
      subTitle: 'You are out of trades, purchase more to continue to make trades.',
      buttons: ['OK']
    });
    alert.present();
  }

  negBalance(newValue, teamCash, oldValue) {
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
      'When you make a trade you receive the value of your current power unit.' + '<br /><br />' +
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

 	goToPuStats(powerUnit){
    this.navCtrl.push(PuStatsPage, powerUnit);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuOnePage');
  }

}
