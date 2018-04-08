import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDataProvider } from '../../providers/team-data/team-data';
import { StatsDataProvider } from '../../providers/stats-data/stats-data';
import { CurrentRoundDataProvider } from '../../providers/current-round-data/current-round-data';

@IonicPage()
@Component({
  selector: 'page-random-league',
  templateUrl: 'random-league.html',
})
export class RandomLeaguePage {
	
	public allUsers: any;
	public customLeague = [];
	public allUsersCount = 0;
	public customPlayers: any;
	public customPlayerIds: any;
	public userData = '';
	public userStats: any;
	public pointsLastRound = 0;
	public noStats: boolean = true;
	public round: number;

  constructor(
  	public navCtrl: NavController,
		public teamData: TeamDataProvider,
		public statsData: StatsDataProvider,
		public navParams: NavParams,
		public currentRoundData: CurrentRoundDataProvider
  ){
  
	this.userData = this.navParams.data.email;
	this.userStats =this.navParams.data;

  this.statsData.getRandomLeague().orderByChild("rank").on('value', snapshot => {
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
        userId: snapshot.val().userId
	    });
	  });
	  this.customPlayerIds = rawList;
	});

	this.teamData.getUsersList().orderByChild("rank").on('value', snapshot => {
	  let rawList = [];
	  snapshot.forEach( snapshot => {
	  	for(let i = 0; i < this.customPlayerIds.length; i++){
		  	if (snapshot.key == this.customPlayerIds[i].userId) {
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
		  		}
	  		}
	  });
	  this.customPlayers = rawList;
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
          points: snapshot.val().points,
		    });
		  });
		  this.allUsers = rawList;
		  console.log('Custom league Page', this.allUsers);
		  this.allUsersCount = this.allUsers.length;
		});
	} // end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomLeaguePage');
  }
  
  createRandomLeague(){
  	console.log(this.allUsers, "allUsers");
  	let randomUsersArray = [];
		let randomUser;
		let duplicateCheck = false;
  	for(let i = 0; i < 19; i++) {
			randomUser = this.allUsers[Math.floor(Math.random()*this.allUsers.length)];			
			if (i > 0) {
				for (let j = 0; j < randomUsersArray.length; j++) {
					if(randomUsersArray[j].email === randomUser.email || this.navParams.data.email === randomUser.email){
						duplicateCheck = true;
					}
				}
				if (duplicateCheck === false && randomUser.totalPoints !== 0) {
					randomUsersArray.push(randomUser);
					this.statsData.addRandomLeague(randomUser);
				} else {
					i--;
					duplicateCheck = false;
				}
			} else {
				randomUsersArray.push(randomUser);
				this.statsData.addRandomLeague(randomUser);
			}
  	}
  	this.statsData.addRandomLeague(this.navParams.data);
  }
}
