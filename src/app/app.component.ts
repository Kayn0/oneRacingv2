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
      apiKey: "AIzaSyB1HE0-IWi4TtHuKozfJWuacYuOx33e0FY",
      authDomain: "one-racing-league.firebaseio.com",
      databaseURL: "https://one-racing-league.firebaseio.com/",
      storageBucket: "gs://one-racing-league.appspot.com/",
      messagingSenderId: "967268565014"
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
        if(data.wasTapped) {
         console.info("Received in background a");
         console.log(data, "data");
         alert(data.title);
        } else {
         console.info("Received in foreground b");
         console.log(data, "data");
          alert(data.title);
        };
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        // backend.registerToken(token);
      });
      splashScreen.hide();
    });
  }
}
