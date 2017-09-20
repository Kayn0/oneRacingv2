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
  		var carOneDriverHolder = Object.keys(this.carOne.driver).map(key => this.carOne.driver[key]); //convert to array of objects
      console.log('driverOne', carOneDriverHolder);
      this.carOneDriver = carOneDriverHolder[0];

      if (this.carOneDriver.length == 0) {
        this.userDriverOneEmpty = true;
      } else {
        this.userDriverOneEmpty = false;
      }

      var carOneChassisHolder = Object.keys(this.carOne.chassis).map(key => this.carOne.chassis[key]); //convert to array of objects
      console.log('ChassisOne', carOneChassisHolder[0]);
  		this.carOneChassis = carOneChassisHolder[0];

  		if (this.carOneChassis.length == 0) {
        this.userChassisOneEmpty = true;
      } else {
        this.userChassisOneEmpty = false;
      }

      var carOnePuHolder = Object.keys(this.carOne.powerUnit).map(key => this.carOne.powerUnit[key]); //convert to array of objects
      console.log('PuOne', carOnePuHolder[0]);
      this.carOnePu = carOnePuHolder[0];
      
      if (this.carOnePu.length == 0) {
          this.userPuOneEmpty = true;
        } else {
          this.userPuOneEmpty = false;
      }
    }

    if (!this.carTwo) {
      this.userDriverOneEmpty = true;
      this.userChassisOneEmpty = true;
      this.userPuOneEmpty = true;

    } else {
    	//car two
      var carTwoDriverHolder = Object.keys(this.carTwo.driver).map(key => this.carTwo.driver[key]); //convert to array of objects
      console.log('driverTwo', carTwoDriverHolder[0]);
      this.carTwoDriver = carTwoDriverHolder[0];

      if (this.carTwoDriver.length == 0) {
        this.userDriverTwoEmpty = true;
      } else {
        this.userDriverTwoEmpty = false;
      }

      var carTwoChassisHolder = Object.keys(this.carTwo.chassis).map(key => this.carTwo.chassis[key]); //convert to array of objects
      console.log('ChassisTwo', carTwoChassisHolder[0]);
      this.carTwoChassis = carTwoChassisHolder[0];

      if (this.carTwoChassis.length == 0) {
        this.userChassisTwoEmpty = true;
      } else {
        this.userChassisTwoEmpty = false;
      }

      var carTwoPuHolder = Object.keys(this.carTwo.powerUnit).map(key => this.carTwo.powerUnit[key]); //convert to array of objects
      console.log('PuTwo', carTwoPuHolder[0]);
      this.carTwoPu = carTwoPuHolder[0];

      if (this.carTwoPu.length == 0) {
        this.userPuTwoEmpty = true;
      } else {
        this.userPuTwoEmpty = false;
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
