import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the ProfileDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileDataProvider {

	// Create a database reference to the userProfile node.
  userProfile: any; 

  // Create an auth reference to the logged in user.
  currentUser: any; 

  constructor(public http: Http) {
     //Create the references
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
  }

	getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }

  getUsersList(): any {
    return this.userProfile;
  }

  updateRank(rank: number): any {
    return this.userProfile.child(this.currentUser.uid).update({
      rank: rank,
    });
  }

  updateName(teamName: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      teamName: teamName,
    });
  }

  updateDOB(birthDate: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  updateEmail(newEmail: string): any {
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }

  updatePassword(newPassword: string): any {
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password Changed");
    }, (error) => {
      console.log(error);
    });
  }
}
