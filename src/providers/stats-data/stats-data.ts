import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the StatsDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StatsDataProvider {
  public currentUser: any;
  public stats: any
  public randomLeague: any
  public customLeague: any

  constructor(public http: Http) {
    this.currentUser = firebase.auth().currentUser.uid;
  	this.stats = firebase.database().ref('raceResults/');
    this.randomLeague = firebase.database().ref('userProfile/' + this.currentUser + '/randomLeague/');
    this.customLeague = firebase.database().ref('userProfile/' + this.currentUser + '/customLeague/');
  }

  getStats(): any {
    return this.stats
  } 

  getRandomLeague(): any {
		return this.randomLeague;
	}

  getCustomLeague(): any {
    return this.customLeague;
  }
  
  addCustomLeague(user): any {
    if (user.points === undefined) {
      user.points = 0;
    }
    if (user.teamName === undefined) {
      user.teamName = 'New Team';
    }
    return this.customLeague.push({
      userId: user.id,
      email: user.email,
      teamName: user.teamName,
      money: user.money,
      rank: user.rank,
      rankDiff: user.rankDiff,
      totalPoints: user.totalPoints,
      trades: user.trades,
      points: user.points,
    }).then( newEvent => {
        this.customLeague.child(newEvent.key).child('customId').set(newEvent.key);
    });
  }
  
  addRandomLeague(user): any {
    if (user.points === undefined) {
      user.points = 0;
    }
    if (user.teamName === undefined) {
      user.teamName = 'New Team';
    }
    return this.randomLeague.push({
      userId: user.id,
      email: user.email,
      teamName: user.teamName,
      money: user.money,
      rank: user.rank,
      rankDiff: user.rankDiff,
      totalPoints: user.totalPoints,
      trades: user.trades,
      points: user.points,
    });
  }

  removeFromLeague(userNode): any {
    let customPlayer;
    customPlayer = firebase.database().ref('userProfile/' + this.currentUser + '/customLeague/' + userNode);
    customPlayer.remove();
  }
}
