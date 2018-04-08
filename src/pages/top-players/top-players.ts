import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

@Component({
  selector: 'page-top-players',
  templateUrl: 'top-players.html',
})
export class TopPlayersPage {
  public usersList: any;
  public user: any;

	public usersLoadedList: any;

 	public userData: string;
  public allUsers: number;
  public round: number;
  public userStats: any;
  public noStats: boolean = true;
  public firstRound: boolean;
  public pointsLastRound: number = 0;
  
  public elements: any[];
  public userSearchList: any[];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public teamData: TeamDataProvider,
  	public storage: Storage,
  	public currentRoundData: CurrentRoundDataProvider
  ){

		console.log("passed user", this.navParams.data);
		this.user = this.navParams.data;
    this.userData = this.navParams.data.email;

	  this.teamData.getTopPlayers().orderByChild("rank").once('value', snapshot => {
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
          points: snapshot.val().points,
          currentPoints: snapshot.val().currentPoints
		    });
		  });
		  this.usersList = rawList;
		});
  } //end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }
}




  




