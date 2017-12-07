import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-team',
  templateUrl: 'player-team.html',
})
export class PlayerTeamPage {
	
	public tabBarHeader: any;
  public tabsFixedContent: any;
  public tabsScrollContent: any;
  public tabbar: any;

	public playerTeam: any;
	public carOne: any;
	public carTwo: any;
	public carOneDriver: any;
	public carOneChassis: any;
	public carOnePu: any;
	public carTwoDriver: any;
	public carTwoChassis: any;
	public carTwoPu: any;

	public userDriverOneEmpty:boolean = true;
  public userDriverTwoEmpty:boolean = true;
  public userChassisOneEmpty:boolean = true;
  public userChassisTwoEmpty:boolean = true;
  public userPuOneEmpty:boolean = true;
  public userPuTwoEmpty:boolean = true;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
 	){

		this.playerTeam = this.navParams.data;
  	console.log("passed team", this.playerTeam);
  	
  	this.carOne = this.playerTeam.carOne;
  	this.carTwo = this.playerTeam.carTwo;

    if (!this.carOne) {
      this.userDriverOneEmpty = true;
      this.userChassisOneEmpty = true;
      this.userPuOneEmpty = true;
    } else {
  		//car one
      if (this.carOne.driver) {
        var carOneDriverHolder = Object.keys(this.carOne.driver).map(key => this.carOne.driver[key]); //convert to array of objects
        this.carOneDriver = carOneDriverHolder[0];
        this.userDriverOneEmpty = false;
      } else {
        this.userDriverOneEmpty = true;
      }

      if (this.carOne.chassis) {
        var carOneChassisHolder = Object.keys(this.carOne.chassis).map(key => this.carOne.chassis[key]); //convert to array of objects
  		  this.carOneChassis = carOneChassisHolder[0];
        this.userChassisOneEmpty = false;
      } else {
        this.userChassisOneEmpty = true;
      }

      if (this.carOne.powerUnit) {
        var carOnePuHolder = Object.keys(this.carOne.powerUnit).map(key => this.carOne.powerUnit[key]); //convert to array of objects
        this.carOnePu = carOnePuHolder[0];
        this.userPuOneEmpty = false;
      } else {
        this.userPuOneEmpty = true;
      }
    }

    if (!this.carTwo) {
      this.userDriverOneEmpty = true;
      this.userChassisOneEmpty = true;
      this.userPuOneEmpty = true;

    } else {
    	//car two
      if (this.carTwo.driver) {
        var carTwoDriverHolder = Object.keys(this.carTwo.driver).map(key => this.carTwo.driver[key]); //convert to array of objects
        this.carTwoDriver = carTwoDriverHolder[0];
        this.userDriverTwoEmpty = false;
      } else {
        this.userDriverTwoEmpty = true;
      }

      if (this.carTwo.chassis) {
        var carTwoChassisHolder = Object.keys(this.carTwo.chassis).map(key => this.carTwo.chassis[key]); //convert to array of objects
        this.carTwoChassis = carTwoChassisHolder[0];
        this.userChassisTwoEmpty = false;
      } else {
        this.userChassisTwoEmpty = true;
      }

      if (this.carTwo.powerUnit) {
        var carTwoPuHolder = Object.keys(this.carTwo.powerUnit).map(key => this.carTwo.powerUnit[key]); //convert to array of objects
        this.carTwoPu = carTwoPuHolder[0];
        this.userPuTwoEmpty = false;
      } else {
        this.userPuTwoEmpty = true;
      }
    }
  } //end constructor

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
    console.log('ionViewDidLoad PlayerTeamPage');
  }

}
