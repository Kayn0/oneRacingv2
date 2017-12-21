import { Component, NgZone } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import * as firebase from 'firebase';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  zone: NgZone;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private fcm: FCM
   ){

    const config = {
      apiKey: "AIzaSyCZ3g2-drs3byijLtUu3y9YP0ZoeFY5_LI",
      authDomain: "fantasyf1-e3378.firebaseapp.com",
      databaseURL: "https://fantasyf1-e3378.firebaseio.com",
      storageBucket: "fantasyf1-e3378.appspot.com",
      messagingSenderId: "796933852913"
    };
    firebase.initializeApp(config);

    this.zone = new NgZone({});
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => { 
      this.zone.run( () => {
        if (!user) { 
          this.rootPage = LoginPage; 
          unsubscribe();
        } else {
          this.rootPage = TabsPage;
          // this.rootPage = LoginPage; 
          unsubscribe();
        } 
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.fcm.subscribeToTopic('all');

      this.fcm.getToken().then(token => {
        // backend.registerToken(token);
      });
      this.fcm.onNotification().subscribe(data => {
        // console.log("push notification data", data.msg);
        if(data.wasTapped) {
         console.info("Received in background");
         alert(data.msg);
        } else {
         console.info("Received in foreground");
        };
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        // backend.registerToken(token);
      });

      splashScreen.hide();
    });
  }
}
