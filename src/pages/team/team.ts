import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

import { DriverOnePage } from '../driver-one/driver-one';
import { DriverTwoPage } from '../driver-two/driver-two';
import { ChassisOnePage } from '../chassis-one/chassis-one';
import { ChassisTwoPage } from '../chassis-two/chassis-two';
import { PuOnePage } from '../pu-one/pu-one';
import { PuTwoPage } from '../pu-two/pu-two';
import { BuyTradesPage } from '../buy-trades/buy-trades';

/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
	public roundDataList: any;

  public userDriverOne: any;
  public userDriverTwo: any;
  public userChassisOne: any;
	public userChassisTwo: any;
 	public userPuOne: any;
  public userPuTwo: any;

  public userDriverOneEmpty:boolean = true;
  public userDriverTwoEmpty:boolean = true;
  public userChassisOneEmpty:boolean = true;
  public userChassisTwoEmpty:boolean = true;
  public userPuOneEmpty:boolean = true;
  public userPuTwoEmpty:boolean = true;

  public driverOneUpgrade:boolean = true;
  public driverTwoUpgrade:boolean = true;

  public chassisOneUpgrade:boolean = true;
  public chassisTwoUpgrade:boolean = true;

  public puOneUpgrade:boolean = true;
  public puTwoUpgrade:boolean = true;

  public driverUpgradeCost:number = 1000000;
  public chassisUpgradeCost:number = 1000000;
  public puUpgradeCost:number = 1000000;

  public userList: any;
  public teamCash: any;
  public gameState: string = 'lockout';

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
    public adminData: AdminDataProvider, 
    public teamData: TeamDataProvider, 
    public storage: Storage,
    public currentRoundData: CurrentRoundDataProvider
  ){
    
    //call firebase to check driver one data
    this.teamData.getTheMoney().on('value', snapshot => {
      let rawList = [];
      rawList.push({
        money: snapshot.val().money,
        trades: snapshot.val().trades
      });
      this.userList = rawList;
      console.log(this.userList, 'lasfjsa');
    });

    //call firebase to check driver one data
    this.teamData.getDriverOne().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().firstName !== undefined) {
          rawList.push({
            id: snap.key,
            firstName: snap.val().firstName,
            lastName: snap.val().lastName,
            abrev: snap.val().abrev,
            driverValue: snap.val().driverValue,
            driverImage: snap.val().driverImage,
            driverPoints: snap.val().driverPoints,
            valChange: snap.val().valChange,
            driverStatus: snap.val().driverStatus,
            driverUpgrade: snap.val().driverUpgrade
          });
         }

        if (snap.val().driverUpgrade !== undefined) {
            this.driverOneUpgrade = snap.val().driverUpgrade;
        }
      });
      this.userDriverOne = rawList;
      this.userDriverOne = Object.keys(this.userDriverOne).map(key => this.userDriverOne[key]); //convert to array of objects
      console.log('driverOne', this.userDriverOne);

      if (this.userDriverOne.length == 0) {
        this.userDriverOneEmpty = true;
      } else {
        this.userDriverOneEmpty = false;
      }
    });

    //call firebase to check driver two data
    this.teamData.getDriverTwo().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().firstName !== undefined) {
          rawList.push({
            id: snap.key,
            firstName: snap.val().firstName,
            lastName: snap.val().lastName,
            abrev: snap.val().abrev,
            driverValue: snap.val().driverValue,
            driverImage: snap.val().driverImage,
            driverPoints: snap.val().driverPoints,
            valChange: snap.val().valChange,
            driverStatus: snap.val().driverStatus,
            driverUpgrade: snap.val().driverUpgrade
          });
        }

       if (snap.val().driverUpgrade !== undefined) {
          this.driverTwoUpgrade = snap.val().driverUpgrade;
        }
      });
      this.userDriverTwo = rawList;
      this.userDriverTwo = Object.keys(this.userDriverTwo).map(key => this.userDriverTwo[key]); //convert to array of objects
      console.log('driverTwo', this.userDriverTwo);

      if (this.userDriverTwo.length == 0) {
        this.userDriverTwoEmpty = true;
      } else {
        this.userDriverTwoEmpty = false;
      }
    });

    //call firebase to check user chassis one data
    this.teamData.getChassisOne().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().chassisName !== undefined) {
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
        }

        if (snap.val().chassisUpgrade !== undefined) {
          this.chassisOneUpgrade = snap.val().chassisUpgrade;
        }
      });

      this.userChassisOne = rawList;
      this.userChassisOne = Object.keys(this.userChassisOne).map(key => this.userChassisOne[key]); //convert to array of objects
      console.log('chassisOne', this.userChassisOne);

      if (this.userChassisOne.length == 0) {
        this.userChassisOneEmpty = true;
      } else {
        this.userChassisOneEmpty = false;
      }
    });

    //call firebase to check user chassis two data
    this.teamData.getChassisTwo().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().chassisName !== undefined) {
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
        }
        if (snap.val().chassisUpgrade !== undefined) {
          this.chassisTwoUpgrade = snap.val().chassisUpgrade;
        }
      });
      this.userChassisTwo = rawList;
      this.userChassisTwo = Object.keys(this.userChassisTwo).map(key => this.userChassisTwo[key]); //convert to array of objects
      console.log('chassisTwo', this.userChassisTwo);

      if (this.userChassisTwo.length == 0) {
        this.userChassisTwoEmpty = true;
      } else {
        this.userChassisTwoEmpty = false;
      }
    });

    //call firebase to check user power unit one data
    this.teamData.getPuOne().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().puName !== undefined) {
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
        }
        if (snap.val().puUpgrade !== undefined) {
          this.puOneUpgrade = snap.val().puUpgrade;
        }
      });
      this.userPuOne = rawList;
      this.userPuOne = Object.keys(this.userPuOne).map(key => this.userPuOne[key]); //convert to array of objects
      console.log('userPuOne', this.userPuOne);

      if (this.userPuOne.length == 0) {
        this.userPuOneEmpty = true;
      } else {
        this.userPuOneEmpty = false;
      }
    });

    //call firebase to check user power unit two data
    this.teamData.getPuTwo().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().puName !== undefined) {
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
        }
        if (snap.val().puUpgrade !== undefined) {
          this.puTwoUpgrade = snap.val().puUpgrade;
        }
      });

      this.userPuTwo = rawList;
      this.userPuTwo = Object.keys(this.userPuTwo).map(key => this.userPuTwo[key]); //convert to array of objects
      console.log('userPuTwo', this.userPuTwo);

      if (this.userPuTwo.length == 0) {
        this.userPuTwoEmpty = true;
      } else {
        this.userPuTwoEmpty = false;
      }
    });

    this.currentRoundData.getGameState().on('value', snapshot => {
      console.log('game state Team page:', snapshot.val().gameState);
      this.gameState = snapshot.val().gameState;
    });
  } //end constructor

 confirmDriverAlert(driver) {
    var decimalSeperator = this.driverUpgradeCost;
    decimalSeperator = this.numberWithCommas(decimalSeperator);
    let confirm = this.alertCtrl.create({
      title: 'Upgrade',
      message: 'Are you sure you want to buy a driver training package for $' + decimalSeperator + '?',
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
            console.log('Agree clicked');
            console.log('driverUpgrade', driver);
            var driverTypeId;
            var driverNode;
            //check if user has enough money
            if (this.teamCash < this.driverUpgradeCost) {
              this.outOfMoneyAlert(this.driverUpgradeCost);
            } else {

              // update driver one
              if (driver == "one") {
                console.log('this.teamCash', this.teamCash);
                console.log('this.driverUpgradeCost', this.driverUpgradeCost);

                //update driver node
                driverTypeId = this.userDriverOne[0].id;
                driverNode = '/carOne/driver/';
                this.teamData.addUpgrade(this.driverUpgradeCost, driverNode, driverTypeId, this.teamCash, "driver");

              // update driver two
              } else {
                driverTypeId = this.userDriverTwo[0].id;
                driverNode = '/carTwo/driver/';
                this.teamData.addUpgrade(this.driverUpgradeCost, driverNode, driverTypeId, this.teamCash, "driver");
              }
            }
          }
        }
      ]
    });
    confirm.present();
  }


   confirmChassisAlert(chassis) {
    var decimalSeperator = this.chassisUpgradeCost;
    decimalSeperator = this.numberWithCommas(decimalSeperator);
    let confirm = this.alertCtrl.create({
      title: 'Upgrade',
      message: 'Are you sure you want to buy a chassis upgrade for $' + decimalSeperator + '?',
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
            console.log('driverUpgrade', chassis);
            var chassisTypeId;
            var chassisNode;
            //check if user has enough money
            if (this.teamCash < this.chassisUpgradeCost) {
              this.outOfMoneyAlert(this.chassisUpgradeCost);
            } else {

              // update chassis one
              if (chassis == "one") {
                console.log('this.teamCash', this.teamCash);
                console.log('this.chassisUpgradeCost', this.chassisUpgradeCost);

                chassisTypeId = this.userChassisOne[0].id;
                chassisNode = '/carOne/chassis/';
                this.teamData.addUpgrade(this.chassisUpgradeCost, chassisNode, chassisTypeId, this.teamCash, "chassis");

              // update chassis two
              } else {
                chassisTypeId = this.userChassisTwo[0].id;
                chassisNode = '/carTwo/chassis/';
                this.teamData.addUpgrade(this.chassisUpgradeCost, chassisNode, chassisTypeId, this.teamCash, "chassis");
              }
            }
          }
        }
      ]
    });
    confirm.present();
  }

  confirmPuAlert(pu) {
    var decimalSeperator = this.puUpgradeCost;
    decimalSeperator = this.numberWithCommas(decimalSeperator);

    console.log(decimalSeperator, 'decimalSeperator');
    let confirm = this.alertCtrl.create({
      title: 'Upgrade',
      message: 'Are you sure you want to buy a power unit upgrade for $' + decimalSeperator + '?',

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
            console.log('puUpgrade', pu);
             var puTypeId;
             var puNode;
            //check if user has enough money
            if (this.teamCash < this.puUpgradeCost) {
              this.outOfMoneyAlert(this.puUpgradeCost);
            } else {
              // update pu one
              if (pu == "one") {
                puTypeId = this.userPuOne[0].id;
                puNode = '/carOne/powerUnit/';
                this.teamData.addUpgrade(this.puUpgradeCost, puNode, puTypeId, this.teamCash, "pu");
              // update pu two
              } else {
                puTypeId = this.userPuTwo[0].id;
                puNode = '/carTwo/powerUnit/';
                this.teamData.addUpgrade(this.puUpgradeCost, puNode, puTypeId, this.teamCash, "pu");
              }
            }
          }
        }
      ]
    });
    confirm.present();
  }

  carHelp() {
    let alert = this.alertCtrl.create({
      title: 'Hints and tips',
      subTitle: 'If either of your cars are missing a part then no points are scored for that car.' + '<br /><br />' +
      'Purchasing upgrades will double that parts score in the next round.' + '<br /><br />' + 
      'If you trade an upgraded part you will lose your upgrade!',
      buttons: ['OK']
    });
    alert.present();
  }

  outOfMoneyAlert(upgradeCost) {
    var negVal = (this.teamCash - upgradeCost) * -1;
    negVal = this.numberWithCommas(negVal);
    console.log(negVal, 'negVal');
    let alert = this.alertCtrl.create({
      title: 'Not enough money',
      subTitle: 'You need an additional $' + negVal + ' to make the trade.',
      buttons: ['OK']
    });
    alert.present();
  }


  numberWithCommas(dollarValue) {
    return dollarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  goToDriverOne(){
    this.navCtrl.push(DriverOnePage);
  }

  goToDriverTwo(){
    this.navCtrl.push(DriverTwoPage);
  }

  goToChassisOne(){
    this.navCtrl.push(ChassisOnePage);
  }

  goToChassisTwo(){
    this.navCtrl.push(ChassisTwoPage);
  }

  goToPuOne(){
    this.navCtrl.push(PuOnePage);
  }

  goToPuTwo(){
    this.navCtrl.push(PuTwoPage);
  }

  goToBuyTrades(){
    this.navCtrl.push(BuyTradesPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }
}
