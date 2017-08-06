import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TourGuidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour-guide',
  templateUrl: 'tour-guide.html',
})

export class TourGuidePage {
	tabBarHeader: any;
  tabsFixedContent: any;
  tabsScrollContent: any;
  tabbar: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ){

  } //end constructor

	ngAfterViewInit() {
  	let tabHeader = document.querySelectorAll('.tab-content');
    if (tabHeader !== null) {
    	tabHeader["0"].style.display = 'none';   
    }
	}

	ionViewWillLeave() {
	 	let tabHeader = document.querySelectorAll('.tab-content');
    if (tabHeader !== null) {
      tabHeader["0"].style.display = 'flex';
    }
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourGuidePage');
  }
}
