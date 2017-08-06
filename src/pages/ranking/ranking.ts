import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';
/**
 * Generated class for the RankingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
	public usersList: any;
 	public userData: string;
  public allUsers: number;
  public round: number;
  public userStats: any;
  public noStats: boolean = true;
  public firstRound: boolean;
  public pointsLastRound: number = 0;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public teamData: TeamDataProvider,
  	public storage: Storage,
  	public currentRoundData: CurrentRoundDataProvider
  ){

  	this.currentRoundData.getCurrentRound().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          currentRound: snap.val().currentRound
        })
      });

      this.round = rawList[0].currentRound;
      console.log('Ranking - this round:', this.round);
      if (this.round > 1) {
      	this.round = this.round - 1;
      	this.firstRound = false;
      } else {
      	this.firstRound = true;
      }
    });

	  this.teamData.getUsersList().orderByChild("rank").on('value', snapshot => {
		  let rawList = [];
		  snapshot.forEach( snapshot => {
		    rawList.push({
		      id: snapshot.key,
		      email: snapshot.val().email,
		      teamName: snapshot.val().teamName,
		      money: snapshot.val().money,
	        rank: snapshot.val().rank,
	        rankDiff: snapshot.val().rankDiff,
	        totalPoints: snapshot.val().totalPoints,
	        trades: snapshot.val().trades,
	        points: snapshot.val().points
		    });
		  });
		  this.usersList = rawList;
		  console.log('1st: Userslist Ranking Page', this.usersList);
		  this.allUsers = this.usersList.length;
		});

		console.log("passed user", this.navParams.data);
  	this.userData = this.navParams.data.email;

  	for(let user of this.usersList) {
  		if(this.userData == user.email) {
  			 this.userStats = user;
  			if (user.points !== undefined) {
  				console.log('user has a score');
          this.pointsLastRound = user.points[this.round].points;
					this.noStats = false;
  			} else {
  				console.log('user has no score');
					this.noStats = true;
  			}
  		}
  	}
  } //end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }
}
