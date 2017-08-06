import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the AdminDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AdminDataProvider {
	driversList: any; 
 	chassisList: any; 
 	puList: any; 
 	dataList: any;  
 	roundDataList: any;
  storageRef: any;
  gameState: any;

  constructor(public http: Http) {
    // Create a database reference to the driversList node.
    this.driversList = firebase.database().ref('/drivers');

    // Create a database reference to the ChassisList node.
    this.chassisList = firebase.database().ref('/chassis');

    // Create a database reference to the Power Unit list node.
    this.puList = firebase.database().ref('/powerUnits');
    
    // Create a database reference to the Round data list node.
    this.gameState = firebase.database().ref('/gameState');
  } //end constructor

  getImage(node, name): any {
		console.log('node', node);
		console.log('name', name);
   	this.storageRef = firebase.storage().ref(node + name + '.png');
   	return this.storageRef;
  }

  createDriver(driverPos:number, firstName:string, lastName:string, abrev:string, driverValue:number, image:string): any {
	  return this.driversList.push({
	  	position: driverPos,
	    firstName: firstName,
	    lastName: lastName,
	    abrev: abrev,
	    driverValue: driverValue,
	    driverImage: image,
	    driverUpgrade: false
	  }).then( newEvent => { //adds key to obj
	    this.driversList.child(newEvent.key).child('id').set(newEvent.key); 
	  });
	}

	createChassis(chassisPos:number, chassisName:string, chassisValue:number, image:string): any {
	  return this.chassisList.push({
	  	position: chassisPos,
	    chassisName: chassisName,
	    chassisValue: chassisValue,
	    chassisImage: image,
	    chassisUpgrade: false
	  }).then( newEvent => { //add key to obj
	    this.chassisList.child(newEvent.key).child('id').set(newEvent.key); 
	  });
	}

	createPU(puPosition:number, puName:string, puValue:number, image:string): any {
	  return this.puList.push({
	  	position: puPosition,
	    puName: puName,
	    puValue: puValue,
	    puImage: image,
	    puUpgrade: false
	  }).then( newEvent => { //add key to obj
	    this.puList.child(newEvent.key).child('id').set(newEvent.key); 
	  });
	}

	createRoundData(lockoutRound, lockoutDate, lockoutCountry, lockoutTrack, trackLength, laps, lapTime, raceWinner, trackImage) {
		this.roundDataList = firebase.database().ref('/roundData/' + lockoutRound);
		return this.roundDataList.push({
	  	lockoutRound: lockoutRound,
	    lockoutDate: lockoutDate,
	    lockoutCountry: lockoutCountry,
	    lockoutTrack: lockoutTrack,
	    trackLength: trackLength,
	    laps: laps,
	    lapTime: lapTime,
	    raceWinner: raceWinner,
	    trackImage: trackImage
	
	  }).then( newEvent => { //add key to obj
	    this.roundDataList.child(newEvent.key).child('id').set(newEvent.key); 
	  });
	}

  getDriversList(round): any {
    this.dataList = firebase.database().ref('raceResults/' + round + '/drivers');
		return this.dataList;
  }

  getChassisList(round): any {
    this.dataList = firebase.database().ref('raceResults/' + round + '/chassis');
		return this.dataList;
  }

  getPUList(round): any {
		this.dataList = firebase.database().ref('raceResults/' + round + '/powerUnits');
		return this.dataList;
  }

  getRoundDataList(round): any {
    this.dataList = firebase.database().ref('roundData/' + round);
		return this.dataList;
  }

  getGameState(): any {
  	console.log("current game state", this.gameState);
		return this.gameState;
  }

	//Used to generate round 0 data.
  getInitialDriversList(): any {
		return this.driversList;
  }

  getInitialChassisList(): any {
		return this.chassisList;
  }

  getInitialPUList(): any {
		return this.puList;
  }
}
