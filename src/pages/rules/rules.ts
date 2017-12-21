import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the RulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {
	public overviewToggle:boolean = false;
	public tradesToggle:boolean = false;
  public upgradesToggle:boolean = false;

	public lockoutToggle:boolean = false;
	public pointsToggle:boolean = false;
	

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ){
  }//end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }
}
