import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

import { DriverStatsPage } from '../driver-stats/driver-stats';

/**
 * Generated class for the DriverOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-one',
  templateUrl: 'driver-one.html',
})
export class DriverOnePage {
	public round: any;
  public lastRound = 0;
  public currentRound: number;
	public roundDataList: any;

  public userTrades: number;

  public driversList: any;
  public driverOne: any;
  public driverTwo: any;
  public userDriverOne: any;
  public userDriverTwo: any;

  public userDriverOneValue: any;
  public userDriverTwoValue: any;

  public teamCash: any;
  public userPoints: any;

  public abrevOne: any;
  public abrevTwo: any;
  public driverStatusOne: any;
  public driverStatusTwo: any;
  public driverOneId: any = "";
  public driverTwoId: any = "";
  
  public raceTime: number = 0;
  public gameState = "lockout";

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

			//call to firebase to retrieve drivers list data 
	    this.adminData.getDriversList(this.lastRound).orderByChild("driverValue").on('value', snapshot => {
	      let rawList = [];
	      snapshot.forEach( snap => {
	        rawList.push({
	          id: snap.key,
	          position: snap.val().position,
	          firstName: snap.val().firstName,
	          lastName: snap.val().lastName,
	          driverValue: snap.val().driverValue,
	          abrev: snap.val().abrev,
	          driverImage: snap.val().driverImage,
	          driverPoints: snap.val().driverPoints,
	          posChange: snap.val().posChange,
	          qualified: snap.val().qualified,
	          valChange: snap.val().valChange,
	          driverStatus: snap.val().driverStatus,
	          driverUpgrade: snap.val().driverUpgrade
	        });
	      });
	      this.driversList = rawList.reverse();
	      console.log(this.driversList, 'DL');
	    });
	  });

    //call firebase to check driver one data
    this.teamData.getDriverOne().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().firstName !== undefined) {
          rawList.push({
            id: snap.key,
            abrev: snap.val().abrev,
            firstName: snap.val().firstName,
            lastName: snap.val().lastName,
            driverValue: snap.val().driverValue,
            driverImage: snap.val().driverImage,
            driverPoints: snap.val().driverPoints,
            posChange: snap.val().posChange,
            qualified: snap.val().qualified,
            valChange: snap.val().valChange,
            driverStatus: snap.val().driverStatus,
            driverUpgrade: snap.val().driverUpgrade
          });
        } 
        if (snap.val().abrev !== undefined) {
          this.abrevOne = snap.val().abrev;
          this.driverOneId = snap.val().id;
        }
        if (snap.val().driverStatus !== undefined) {
          this.driverStatusOne = snap.val().driverStatus;
        }
      }); 

      this.userDriverOne = rawList;

      if (this.userDriverOne.length > 0) {
        this.userDriverOne = Object.keys(this.userDriverOne).map(key => this.userDriverOne[key]); //convert to array of objects
        this.userDriverOneValue = parseInt(this.userDriverOne[0].driverValue);
      } else {
        this.userDriverOneValue = 0;
      }
    });

    //call firebase to check driver two data
    this.teamData.getDriverTwo().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().firstName !== undefined) {
          rawList.push({
            id: snap.key,
            abrev: snap.val().abrev,
            firstName: snap.val().firstName,
            lastName: snap.val().lastName,
            driverValue: snap.val().driverValue,
            driverImage: snap.val().driverImage,
            driverPoints: snap.val().driverPoints,
            posChange: snap.val().posChange,
            qualified: snap.val().qualified,
            valChange: snap.val().valChange,
            driverStatus: snap.val().driverStatus,
            driverUpgrade: snap.val().driverUpgrade
          });
        }
        if (snap.val().abrev !== undefined) {
          this.abrevTwo = snap.val().abrev;
          this.driverTwoId = snap.val().id;
        }
        if (snap.val().driverStatus !== undefined) {
          this.driverStatusTwo = snap.val().driverStatus;
        } 
      });

      this.userDriverTwo = rawList;
      if (this.userDriverTwo.length > 0) {
        this.userDriverTwo = Object.keys(this.userDriverTwo).map(key => this.userDriverTwo[key]); //convert to array of objects
        this.userDriverTwoValue = parseInt(this.userDriverTwo[0].driverValue);
      } else {
        this.userDriverTwoValue = 0;
      }
    });
    
    this.adminData.getGameState().on('value', snapshot => {
      this.gameState = snapshot.val().gameState;
    });
  } //end constructor

  // add driver to firebase from list
  addDriver(carNum, carData) {
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
          	var oldDriver;
          	var newDriver;
          	var newValue;
            //make sure user has trades
            if (this.userTrades > 0) {
              if (carNum === 'one') {
                //check for first entry
                if (this.userDriverOne.length < 1) {
                  oldDriver;
                  //make sure driver one and two are not the same
                  if (this.userDriverTwo.length < 1) {
                    oldDriver = '';
                  } else {
                    oldDriver = this.userDriverTwo[0].abrev;
                  }
                  newDriver = carData.abrev;
                  console.log('old and new 1', oldDriver, newDriver);
                  
                  if (oldDriver == newDriver) {
                   this.driverSameAlert(); 
                  } else {
                    newValue = carData.driverValue
                    //make sure user has enough money
                    if (newValue > this.teamCash) {
                      var negVal = (this.teamCash - newValue) * -1;
                      this.negValueAlert(negVal);
                    } else {
                      this.teamData.addDriver(carData, this.userDriverOne, carNum, this.userPoints, this.driverTwoId);
                    }
                  }
                } else {
                  //make sure driver one and two are not the same
                  console.log (this.userDriverTwo, 'here');
                  if (this.userDriverTwo[0] == null) {
                    oldDriver = 'none';
                  } else {
                    oldDriver = this.userDriverTwo[0].abrev;
                  }
                 
                  newDriver = carData.abrev;
                  console.log('old and new 1', oldDriver, newDriver);
                  
                  if (oldDriver == newDriver) {
                   this.driverSameAlert(); 
                  } else {
                    var oldValue = parseInt(this.userDriverOne[0].driverValue);
                    newValue = carData.driverValue;

                    //check if user has enough money
                    if ((this.teamCash + oldValue) >= newValue) { 
                      this.teamData.addDriver(carData, this.userDriverOne, carNum, this.userPoints, this.driverTwoId);
                    } else {
                      var negDriverVal = ((this.teamCash + oldValue) - newValue) * -1;
                      this.negValueAlert(negDriverVal);
                    }
                  }
                }//car two
              }
            } else {
              this.noTradeAlert();
            }
          }
        }
      ]
    });
    confirm.present(); 
  }

  noTradeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Out of trades',
      subTitle: 'You are out of trades, purchase more to continue to make trades.',
      buttons: ['OK']
    });
    alert.present();
  }

  negValueAlert(negValue) {
    let alert = this.alertCtrl.create({
      title: 'Not enough money',
      subTitle: 'You need an additional $' + negValue + ' to make the trade.',
      buttons: ['OK']
    });
    alert.present();
  }
 
  driverSameAlert() {
    let alert = this.alertCtrl.create({
      title: 'Not allowed',
      subTitle: 'Driver 1 and 2 must be different drivers.',
      buttons: ['OK']
    });
    alert.present();
  }

  carHelp() {
    let alert = this.alertCtrl.create({
      title: 'Hints and tips',
      subTitle: 'Trades are free in your first round.' + '<br /><br />' +
      'When you make a trade you receive the value of your current driver.' + '<br /><br />' +
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

  goToDriverStats(driver){
    console.log(driver, 'test');
    this.navCtrl.push(DriverStatsPage, driver);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverOnePage');
  }
}
