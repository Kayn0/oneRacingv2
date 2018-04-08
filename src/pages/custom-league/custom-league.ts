import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { StatsDataProvider } from '../../providers/stats-data/stats-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

/**
 * Generated class for the CustomLeaguePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-custom-league',
  templateUrl: 'custom-league.html',
})
export class CustomLeaguePage {
  public usersList: any;
	public usersLoadedList: any;

 	public userData: string;
  public allUsers: number;
  public round: number;
  public userStats: any;
  public noStats: boolean = true;
  public firstRound: boolean;
  public pointsLastRound: number = 0;
  public customPlayerIds: any;
  public customPlayers: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public teamData: TeamDataProvider,
  	public statsData: StatsDataProvider,
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

  	this.statsData.getCustomLeague().orderByChild("rank").on('value', snapshot => {
		  let rawList = [];
		  snapshot.forEach( snapshot => {
		    rawList.push({
				  id: snapshot.key,
		      email: snapshot.val().email,
		      teamName: snapshot.val().teamName,
	        userId: snapshot.val().userId,
	        customId: snapshot.val().customId,
		    });
		  });
		  this.customPlayerIds = rawList;
		});

	  this.teamData.getUsersList().orderByChild("rank").on('value', snapshot => {
		  let custList = [];
		  snapshot.forEach( snapshot => {
		  	for(let i = 0; i < this.customPlayerIds.length; i++){
			  	if (snapshot.key == this.customPlayerIds[i].userId) {
			  		 custList.push({
					      id: snapshot.key,
					      email: snapshot.val().email,
					      teamName: snapshot.val().teamName,
					      money: snapshot.val().money,
				        rank: snapshot.val().rank,
				        rankDiff: snapshot.val().rankDiff,
				        totalPoints: snapshot.val().totalPoints,
				        trades: snapshot.val().trades,
				        points: snapshot.val().points,
				        customId: snapshot.val().customId,
					    });
			  		}
		  		}
		  });
		  this.customPlayers = custList;
		  console.log(this.customPlayers, "cusotm players");
		});

	  this.teamData.getUsersList().orderByChild("rank").once('value', snapshot => {
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
		    });
		  });
		  this.usersList = rawList;
	    this.usersLoadedList = rawList;
		  console.log('1st: Userslist Ranking Page', this.usersList);
		  this.allUsers = this.usersList.length;
		});

		console.log("passed user", this.navParams.data);
  	this.userData = this.navParams.data.email;
  } //end constructor

  initializeItems(): void {
    this.usersList = this.usersLoadedList;
  }

  addToLeague(user) {
  	//add user to league
  	console.log(user);
  	if (this.customPlayers.length > 0) {
  		console.log("keep adding");
			this.statsData.addCustomLeague(user);
  	} else {
  		console.log("first time");
  		this.statsData.addCustomLeague(this.navParams.data);
  		this.statsData.addCustomLeague(user);
  	}
  }

	removeFromLeague(user) {
		let userNode;
		for(let i = 0; i < this.customPlayerIds.length; i++ ) {
      if(this.customPlayerIds[i].email === user.email) {
        userNode = this.customPlayerIds[i].customId;
      }
    }
		this.statsData.removeFromLeague(userNode);
	}
  
  checkDisabled(user) {
    for (let i = 0; i < this.customPlayers.length; i++) {
      if(user.id === this.customPlayers[i].id) {
        console.log("true", user.id);
        return true;
      } 
    }
    return false;
  } 
  

  getItems(searchbar) {
    this.initializeItems();
    var searchbarInput = searchbar.srcElement.value;
    if (!searchbarInput) {
      return;
    }
    this.usersList = this.usersList.filter((check) => {
      if(check.teamName && searchbarInput) {
        if (check.teamName.toLowerCase().indexOf(searchbarInput.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
}
