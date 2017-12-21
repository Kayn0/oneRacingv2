import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AdminDataProvider } from '../../providers/admin-data/admin-data';
import { TeamDataProvider } from '../../providers/team-data/team-data';
/**
 * Generated class for the BuyTradesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buy-trades',
  templateUrl: 'buy-trades.html',
})
export class BuyTradesPage {

	public teamCash: number;
	public userTrades: number;

  public tradeCostOne = 500000;
  public tradeCostThree = 1000000;
  public tradeCostFive = 2000000;

  public roundDataList;
  public gameState = "lockout";
  public buyOneTrade = 0;
  public buyThreeTrades = 0;
  public buyFiveTrades = 0;
  public tradeAnimate:boolean = false;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
  	public adminData: AdminDataProvider,
  	public teamData: TeamDataProvider
  ){

	  this.teamData.getTheMoney().on('value', (snapshot) => {
	    this.teamCash = snapshot.val().money;
	    this.userTrades = snapshot.val().trades;
	  });

	  this.adminData.getGameState().on('value', snapshot => {
	    this.gameState = snapshot.val().gameState;
	  });
	} //end constructor

  confirmTrade(num) { 
    var tradeCost;
    if (num === 5) {
      tradeCost = this.tradeCostFive;
    } else if (num === 3) {
      tradeCost = this.tradeCostThree;
    } else {
      num = 1
      tradeCost = this.tradeCostOne;
    }

    if (this.teamCash >= tradeCost) {
      let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to buy a trade?',
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
            if (num === 5) {
              this.buyFiveTrades = 1;
            } else if (num === 3) {
               this.buyThreeTrades = 1;
            } else {
              this.buyOneTrade = 1;
            }
            this.tradeAnimate = true;
            this.teamData.addTrade(num, tradeCost);
          }
        }
      ]
    });
    confirm.present();
    } else {
      var negVal = (this.teamCash - tradeCost) * -1;
      this.negValueAlert(negVal)
    }
  } //end constructor
  
  negValueAlert(negValue) {
    var decimalSeperator = this.numberWithCommas(negValue);
    let alert = this.alertCtrl.create({
      title: 'Not enough money',
      message: 'You need an additional $' + decimalSeperator + ' to make the trade.',
      buttons: ['OK']
    });
    alert.present();
  }

  numberWithCommas(dollarValue) {
    return dollarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

  ionViewDidLoad() {
    console.log('Hello Buy Trades Page');
  }
}
