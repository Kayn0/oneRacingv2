import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the CurrentRoundDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CurrentRoundDataProvider {
	currentRound: any; 
  newRound: any;
  gameStateNode: any;

  constructor(public http: Http) {
    this.currentRound = firebase.database().ref('/currentRound/');
    this.gameStateNode = firebase.database().ref('/gameState/');
  }

  //get currentRound val from firebase
  getCurrentRound(): any {
    return this.currentRound; 
  }

  //get gamestate val from firebase
	getGameState(): any {
    return this.gameStateNode; 
  }
  
  createRound(){
  	// create currentRound node in firebase
	  return this.currentRound.push({
	    currentRound: 0,
	  }).then( newEvent => {
	    this.currentRound.child(newEvent.key).child('id').set(newEvent.key);
	  });
  }

  changeRound(round) {
    console.log(round, 'newRound');
    
    if (this.currentRound) {
      this.currentRound.remove();
    }
     
    return this.currentRound.push({
      currentRound: round,
    }).then( newEvent => {
      this.currentRound.child(newEvent.key).child('id').set(newEvent.key);
    });
  }
  
  changeState(gameState) {
    if (this.gameStateNode) {
      this.gameStateNode.update({
         gameState: gameState
      })
    } else {
      return this.gameStateNode.push({
        gameState: gameState
      })
    }
  }
}
