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
	public stats: any

  constructor(public http: Http) {
  	this.stats = firebase.database().ref('raceResults/');
  }

  getStats(): any {
		return this.stats
	}
}
