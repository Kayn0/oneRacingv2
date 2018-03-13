import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the TeamDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TeamDataProvider {

	public currentUser: any;
	public userList: any;
	public userMoney: any;
	
	public chassisOne: any;
	public chassisTwo: any;

	public driverOne: any;
	public driverTwo: any;

	public driverOneNode: any;
	public driverTwoNode: any;

	public puOne: any;
	public puTwo: any;

  constructor(public http: Http) {
    console.log('Hello TeamDataProvider Provider');
   	this.currentUser = firebase.auth().currentUser.uid;
  	this.userList = firebase.database().ref('userProfile/');
  	this.userMoney = firebase.database().ref('userProfile/' + this.currentUser);

  	this.chassisOne = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/chassis');
  	this.chassisTwo = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/chassis');

  	this.driverOne = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/driver');
  	this.driverTwo = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/driver');

  	this.driverOne = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/driver');
  	this.driverTwo = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/driver');

  	this.puOne = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/powerUnit');
  	this.puTwo = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/powerUnit');
  }

  getUsersList(): any {
		return this.userList
	}

	getTheMoney(): any {
		return this.userMoney
	}

	getChassisOne(): any {
    return this.chassisOne;
  }

  getChassisTwo(): any {
    return this.chassisTwo;
  }

	getOtherDriverId(car, driverId): any {
		var driverNode;
		if (car == "one") {
			driverNode = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/driver' + driverId);
		} else {
  		driverNode = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/driver' + driverId);
  	}
  	return driverNode;
	}

	//*************//
	//   Chassis   //
	//*************//

	
	addChassis(chassis, oldChassis, carNum, userPoints) {

		var chassisDifference;
	
		//if first entry
		if (oldChassis.length == 0) {	
			chassisDifference = -chassis.chassisValue;
		} else {
			chassisDifference = oldChassis[0].chassisValue - chassis.chassisValue;
		}
	
		console.log(chassisDifference, 'bankIt1');

		/* Get players bank balance and add to chassis difference */
		this.bankIt(chassisDifference, userPoints);

		if (carNum === 'one') {
			
			/* Delete chassis one reference */
			if (this.chassisOne) {
				this.chassisOne.remove();
			}
			
			// add chassis to users node
		  return this.chassisOne.push({
		    chassisName: chassis.chassisName,
		    chassisValue: chassis.chassisValue,
		    chassisImage: chassis.chassisImage,
		    chassisPoints: chassis.chassisPoints,
		    position: chassis.position,
		    valChange: chassis.valChange,
		    chassisUpgrade: chassis.chassisUpgrade

		  }).then( newEvent => {
		    this.chassisOne.child(newEvent.key).child('id').set(newEvent.key);
		  });

		} else {

			//delete chassis two reference
		  if (this.chassisTwo) {
				this.chassisTwo.remove();
			}
			
			// create new chassis in firebase
		  return this.chassisTwo.push({
		    chassisName: chassis.chassisName,
		    chassisValue: chassis.chassisValue,
		    chassisImage: chassis.chassisImage,
		    chassisPoints: chassis.chassisPoints,
		    position: chassis.position,
		    valChange: chassis.valChange,
		    chassisUpgrade: chassis.chassisUpgrade
		    
		  }).then( newEvent => {
		    this.chassisTwo.child(newEvent.key).child('id').set(newEvent.key);
		  });
		}
	}


	//*************//
	// Power units //
	//*************//
	

	getPuOne(): any {
    return this.puOne;
  }

  getPuTwo(): any {
    return this.puTwo;
  }

	addPU(powerUnit, oldPu, carNum, userPoints) {

		var puDifference;
	
		//if first entry
		if (oldPu.length == 0) {	
			puDifference = -powerUnit.puValue;
		} else {
			puDifference = oldPu[0].puValue - powerUnit.puValue;
		}

		/* Get players bank balance and add to power unit difference */
		this.bankIt(puDifference, userPoints);

		if (carNum === 'one') {

			//delete power unit one reference
	  	if (this.puOne) {
				this.puOne.remove();
			}
		
			// create new power unit in firebase
		  return this.puOne.push({
		    puName: powerUnit.puName,
		    puValue: powerUnit.puValue,
		    puImage: powerUnit.puImage,
		    position: powerUnit.position,
		    puPoints: powerUnit.puPoints,
		    valChange: powerUnit.valChange,
		    posChange: powerUnit.posChange,
		    puUpgrade: powerUnit.puUpgrade

		  }).then( newEvent => {
		    this.puOne.child(newEvent.key).child('id').set(newEvent.key);
		  })

		} else {
			//delete power unit two reference
		  if (this.puTwo) {
				this.puTwo.remove();
			}
			
			// create new power unit in firebase
		  return this.puTwo.push({
		    puName: powerUnit.puName,
		    puValue: powerUnit.puValue,
		    puImage: powerUnit.puImage,
		   	position: powerUnit.position,
		    puPoints: powerUnit.puPoints,
		    valChange: powerUnit.valChange,
		    posChange: powerUnit.posChange,
		    puUpgrade: powerUnit.puUpgrade
		   
		  }).then( newEvent => {
		    this.puTwo.child(newEvent.key).child('id').set(newEvent.key);
		  });
		}
	}

	//*************//
	//   Drivers   //
	//*************//
	
	getDriverOne(): any {
    return this.driverOne;
  }

  getDriverTwo(): any {
    return this.driverTwo;
  }

	addDriver(driver, oldDriver, driverNum, userPoints, driverId) {
	
		var driverDifference;
		//if first entry
		if (oldDriver.length == 0) {	
			driverDifference = -driver.driverValue;
		} else {
			driverDifference = oldDriver[0].driverValue - driver.driverValue;
		}

		/* Get players bank balance and add to driver difference */
		this.bankIt(driverDifference, userPoints);
			var driverRef;
		if (driverNum === 'one') {
			driverRef = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/driver/' + driverId);
			//delete driver one reference
	  	if (this.driverOne) {
				this.driverOne.remove();
			}
		
			// add driver one in users profile
		  return this.driverOne.push ({
		    firstName: driver.firstName,
		    lastName: driver.lastName,
		    driverValue: driver.driverValue,
		    abrev: driver.abrev,
		    driverImage: driver.driverImage,
		    driverPoints: driver.driverPoints,
        posChange: driver.posChange,
        qualified: driver.qualified,
        valChange: driver.valChange,
        driverStatus: driver.driverStatus,
	    	driverUpgrade: driver.driverUpgrade,
		  }).then( newEvent => {
		    this.driverOne.child(newEvent.key).child('id').set(newEvent.key);
		  }).then(() => {
		  	if (driverId == "") {

		  	} else {
					driverRef.update ({
		      	driverStatus: "equal"
		    	});
				}
	    });
		} else {
			driverRef = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/driver/' + driverId);
			//delete driver two reference
		  if (this.driverTwo) {
				this.driverTwo.remove();
			}
			
			// add driver two in users profile
		  return this.driverTwo.push({
		    firstName: driver.firstName,
		    lastName: driver.lastName,
		    driverValue: driver.driverValue,
		    abrev: driver.abrev,
		    driverImage: driver.driverImage,
		    driverPoints: driver.driverPoints,
        posChange: driver.posChange,
        qualified: driver.qualified,
        valChange: driver.valChange,
        driverStatus: driver.driverStatus,
	    	driverUpgrade: driver.driverUpgrade,
		   
		  }).then( newEvent => {
		    this.driverTwo.child(newEvent.key).child('id').set(newEvent.key);
		  }).then(() => {

		  	if (driverId == "") {

		  	} else {
					driverRef.update ({
		      	driverStatus: "equal"
		    	});
				}
    	});
		}
		
	}

	/* Get players bank balance and add to chassis difference */
	/* Get playeres trade count and -1 */
	bankIt(difference, userPoints) {
		let bankAcc;
		let tradeCount;

		console.log("diff, round", difference, userPoints);
		
		this.userMoney.once('value').then(function(snapshot) {
  		bankAcc = parseInt(snapshot.val().money);
  			
  		//if user has no points then don't count trade 
  		if (userPoints != 0) {
				tradeCount = snapshot.val().trades;
				tradeCount = tradeCount - 1;
  		} else {
  			tradeCount = snapshot.val().trades;
  		}
  		console.log(bankAcc, "money");
		}).then(() => {
			this.userMoney.update ({
      	money: bankAcc + difference,
      	trades: tradeCount,
    	});
    });
	}

	//adds a trade to the user for a cost
	addTrade(num, tradeCost) {
		let bankAcc;
		let tradeCount;
		this.userMoney.once('value').then(function(snapshot) {
  		bankAcc = parseInt(snapshot.val().money);
			tradeCount = snapshot.val().trades;
			tradeCount = tradeCount + num;
  		
		}).then(() => {
			this.userMoney.update ({
      	money: bankAcc - tradeCost,
      	trades: tradeCount,
    	});
    });
	}

	//adds a upgrade to the user for a cost
	addUpgrade(cost, node, typeID, bank, component) {
		var updateUpgrade = firebase.database().ref('userProfile/' + this.currentUser + node + typeID);
		if (component == "driver") {
			updateUpgrade.update ({
      	driverUpgrade: true
	    	}).then(() => {
					this.userMoney.update ({
	      		money: bank - cost
	    	});
    	});
		} else if (component == "chassis") {
			updateUpgrade.update ({
      	chassisUpgrade: true
	    	}).then(() => {
					this.userMoney.update ({
	      		money: bank - cost
	    	});
    	});
		} else {
			updateUpgrade.update ({
      	puUpgrade: true
	    	}).then(() => {
					this.userMoney.update ({
	      	money: bank - cost
	    	});
    	});
		}
	}

	//updates driver one and two status
	updateDriverStatus(driver, driverOneId, driverTwoId) {

		var driverOneUpdate = firebase.database().ref('userProfile/' + this.currentUser + '/carOne/driver/' + driverOneId);
		var driverTwoUpdate = firebase.database().ref('userProfile/' + this.currentUser + '/carTwo/driver/' + driverTwoId);
			
		if (driver == "driverOne") {
			driverOneUpdate.update ({
  			driverStatus: "first"
     	}).then(() => {
			driverTwoUpdate.update ({
      	driverStatus: "second"
    	});
		});
			
		} else if (driver == "driverTwo"){
			driverOneUpdate.update ({
  			driverStatus: "second"
     	}).then(() => {
			driverTwoUpdate.update ({
      	driverStatus: "first"
    	});
		});
    } else {
				driverOneUpdate.update ({
	  			driverStatus: "equal"
	     	}).then(() => {
				driverTwoUpdate.update ({
      		driverStatus: "equal"
	    	});
    	});
	  }
	}
}
