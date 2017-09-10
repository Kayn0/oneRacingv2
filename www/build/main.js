webpackJsonp([19],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourGuidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TourGuidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TourGuidePage = (function () {
    function TourGuidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    } //end constructor
    TourGuidePage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    TourGuidePage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    TourGuidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TourGuidePage');
    };
    return TourGuidePage;
}());
TourGuidePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tour-guide',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/tour-guide/tour-guide.html"*/'<!--\n  Generated template for the TourGuidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header id="tabs" class="tabs-header">\n  <ion-navbar color="primary">\n    <ion-title>Tour Guide</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/tour-guide/tour-guide.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TourGuidePage);

//# sourceMappingURL=tour-guide.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_data_profile_data__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tour_guide_tour_guide__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the homePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, storage, authData, profileData, app, currentRoundData, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.authData = authData;
        this.profileData = profileData;
        this.app = app;
        this.currentRoundData = currentRoundData;
        this.alertCtrl = alertCtrl;
        this.lastRound = 0;
        this.raceTime = 0;
        this.gameState = "lockout";
        this.email = "mailto:oneracingleague@gmail.com?subject=App%20feedback";
    } //end constructor 
    HomePage.prototype.mailto = function () {
        window.open(this.email, "_system");
    };
    HomePage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.goToTourGuide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tour_guide_tour_guide__["a" /* TourGuidePage */]);
    };
    HomePage.prototype.logMeOut = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            window.location.reload();
        });
    };
    HomePage.prototype.termsConditionsAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Terms and Conditions',
            subTitle: '<p>This privacy policy governs your use of the software application One Racing League (“Application”) for mobile devices that was created by Kane Maslen. The Application is a fantasy racing league, based on the current Formula One season.</p>' +
                '<h4>What information does the Application obtain and how is it used?</h4>' +
                '<h3>User Provided Information</h3>' +
                '<p>The Application obtains the information you provide when you download and register the Application.<p>' +
                '<p>When you register with us and use the Application, you generally provide (a) email address and password (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) credit card information for purchase and use of the Application, and; (e) information you enter into our system when using the Application, such as team name and your team selections.<p>' +
                '<p>We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions.</p>' +
                '<h3>Automatically Collected Information</h3>' +
                '<p>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.<p>' +
                '<p>This Application does not collect precise information about the location of your mobile device.</p>' +
                '<p>Only aggregated, anonymised data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.</p>' +
                '<p>We may disclose User Provided and Automatically Collected Information:</p>' +
                '<ul><li>as required by law, such as to comply with a subpoena, or similar legal process;</li><li>when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li><li>with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li><li>if Kane Maslen is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email.</li></ul>' +
                '<h4>What are my opt-out rights?</h4>' +
                '<p>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at <a href="mailto:oneracingleague@gmail.com.com?subject=optout" >oneracingleague@gmail.com</a></p>' +
                '<h3>Data Retention Policy, Managing Your Information</h3>' +
                '<p>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at <a href="mailto:oneracingleague@gmail.com.com?subject=deleteuser" >oneracingleague@gmail.com</a> and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.</p>' +
                '<h3>Children</h3><p>We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at <a href="mailto:oneracingleague@gmail.com.com?subject=deleteuser13">oneracingleague@gmail.com</a> . We will delete such information from our files within a reasonable time.<p>' +
                '<h3>Security</h3>' +
                '<p>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorised employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavour provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</p>' +
                '<h3>Service Providers</h3>' +
                '<p>We employ a third-party company which provides the database and storage of your data. ' +
                '<p>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose. The third party being used is Firebase and you can view their privacy policy at: <a href="https://www.firebase.com/terms/privacy-policy.html">Firebase Privacy Policy</a>' +
                '<h3>Changes</h3>' +
                '<p>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by informing you via email. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>' +
                '<h3>Your Consent</h3>' +
                '<p>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information.</p>' +
                '<h3>Contact us</h3>' +
                '<p>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a href="mailto:oneracingleague@gmail.com.com?subject=query">oneracingleague@gmail.com</a>.</p>',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <ion-row>\n      <img src="assets/img/logo-car.png" class="welcome-logo logo-car slideRight delay-1" />\n      <img src="assets/img/logo-text1.png" class="welcome-logo logo-text expandOpen delay-2" />\n    </ion-row>\n\n    <ion-row>\n      <ion-card class="welcome-card">\n      <ion-card-header>\n        <div class="welcome-title">Welcome to One Racing League</div>\n      </ion-card-header>\n        <p>Manage your very own Formula One racing team. With a starting budget purchase a driver, chassis and power unit for each of your cars. Points are awarded after each Formula One race weekend.</p>\n        \n        <ion-row class="flex-right">\n          <ion-col col-6 class="button-left">\n            <button ion-button icon-right class="tour-guide-button" color="primary" block (click)="goToTourGuide()">\n              Tour guide\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n          </ion-col>  \n        </ion-row>\n      </ion-card>\n    </ion-row>\n\n    <ion-col col-6 class="center small-layout">\n      <button ion-button block class="log-out-btn" color="secondary" block (click)="logMeOut()">\n        <ion-icon name="md-log-out" class="welcome-icon"></ion-icon>\n        Log out\n      </button>\n    </ion-col>\n\n    <ion-col col-6 class="center">\n      <button ion-button block class="log-out-btn" color="secondary" block (click)="mailto()">\n        <ion-icon name="mail" class="welcome-icon"></ion-icon>\n        Feedback\n      </button>\n    </ion-col>\n\n    <ion-col col-6 class="center small-layout top-space">\n      <button ion-button block class="log-out-btn" color="secondary" block (click)="termsConditionsAlert();">\n        <ion-icon name="md-log-out" class="welcome-icon"></ion-icon>\n        Terms and Conditions\n      </button>\n    </ion-col>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_profile_data_profile_data__["a" /* ProfileDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_profile_data_profile_data__["a" /* ProfileDataProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_current_round_data_current_round_data__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RacePage = (function () {
    function RacePage(navCtrl, navParams, storage, currentRoundData, adminData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.currentRoundData = currentRoundData;
        this.adminData = adminData;
        this.raceTime = 0;
        this.gameState = "lockout";
        this.lastRound = 0;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.raceData = 'drivers';
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.round = rawList[0].currentRound;
            console.log('Home - this round:', _this.round);
            //point to last rounds data
            if (_this.round < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.round - 1;
            }
            //call to firebase to retrieve drivers list data 
            _this.adminData.getRoundDataList(_this.round).on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        lockoutCountry: snap.val().lockoutCountry,
                        lockoutDate: snap.val().lockoutDate,
                        lockoutRound: snap.val().lockoutRound,
                        lockoutTrack: snap.val().lockoutTrack,
                        lapTime: snap.val().lapTime,
                        laps: snap.val().laps,
                        raceWinner: snap.val().raceWinner,
                        trackImage: snap.val().trackImage,
                        trackLength: snap.val().trackLength,
                    });
                });
                _this.roundDataList = rawList;
                console.log('lockout data:', _this.roundDataList[0]);
                //call to firebase to retrieve drivers list data 
                _this.adminData.getDriversList(_this.lastRound).orderByChild("position").on('value', function (snapshot) {
                    var rawList = [];
                    snapshot.forEach(function (snap) {
                        rawList.push({
                            id: snap.key,
                            position: snap.val().position,
                            firstName: snap.val().firstName,
                            lastName: snap.val().lastName,
                            driverImage: snap.val().driverImage,
                            driverPoints: snap.val().driverPoints,
                        });
                    });
                    _this.driversList = rawList;
                    console.log(_this.driversList, 'Home drivers');
                });
                //call to firebase to retrieve Chassis list data 
                _this.adminData.getChassisList(_this.lastRound).orderByChild("position").on('value', function (snapshot) {
                    var rawList = [];
                    snapshot.forEach(function (snap) {
                        rawList.push({
                            id: snap.key,
                            position: snap.val().position,
                            chassisName: snap.val().chassisName,
                            chassisImage: snap.val().chassisImage,
                            chassisPoints: snap.val().chassisPoints
                        });
                    });
                    _this.chassisList = rawList;
                    console.log(_this.chassisList, 'Home chassis');
                });
                //call to firebase to retrieve pu list data 
                _this.adminData.getPUList(_this.lastRound).orderByChild("position").on('value', function (snapshot) {
                    var rawList = [];
                    snapshot.forEach(function (snap) {
                        rawList.push({
                            id: snap.key,
                            position: snap.val().position,
                            puName: snap.val().puName,
                            puImage: snap.val().puImage,
                            puPoints: snap.val().puPoints,
                        });
                    });
                    _this.puList = rawList;
                    console.log(_this.puList, 'Home pu');
                });
            });
        });
    } // end constructor
    RacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RacePage');
    };
    return RacePage;
}());
RacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-race',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/race/race.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <div class="container">\n    <div *ngIf="roundDataList">\n      <ion-row *ngFor="let round of roundDataList">\n        <ion-col col-8>\n          <div class="round stretchRight delay-2">  \n            Round: {{ round?.lockoutRound }}\n          </div>\n          <div class="location stretchRight delay-3">\n            {{ round?.lockoutTrack }},  {{ round?.lockoutCountry }}\n          </div>\n          <div class="track">\n            <img [src]="round?.trackImage" class="track-image" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n            <ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n          </div>\n        </ion-col>\n\n        <ion-col col-4 margin-top class="tall-col">\n          <div class="stat slideExpandUp delay-3">\n            <span>Track length</span> {{ round.trackLength }}\n          </div>\n          <div class="stat slideExpandUp delay-4">\n            <span>Laps</span> {{ round.laps }}\n          </div>\n          <div class="stat slideExpandUp delay-5">\n            <span>Lap record</span> {{ round.lapTime }}\n          </div>\n          <div class="stat slideExpandUp delay-6">\n            <span>Last winner</span> {{ round.raceWinner }}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="this.round > 1">\n      <ion-row class="header-marg">\n        <div class="text-center relative-pos">\n          Last Race Results\n        </div>\n      </ion-row>\n      <div padding>\n        <ion-segment mode="md" [(ngModel)]="raceData" class="seg-header">\n          <ion-segment-button value="drivers">\n            Drivers\n          </ion-segment-button>\n          <ion-segment-button value="chassis">\n            Chassis\n          </ion-segment-button>\n          <ion-segment-button value="pu">\n            Power Units\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div [ngSwitch]="raceData">\n        <ion-list *ngSwitchCase="\'drivers\'">\n          <ion-item class="relative-pos min-list-height expandUp" *ngFor="let driver of driversList">\n            <ion-row>\n              <ion-col col-2>\n                <div class="driver-position">{{ driver.position }}</div>\n              </ion-col>\n              <ion-col col-2>\n                <ion-thumbnail item-left>\n                  <img class="list-image" [src]="driver.driverImage" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n                  <ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col>\n                <h2 class="list-name">{{ driver.firstName }} {{ driver.lastName }}</h2>\n              </ion-col>\n              <ion-col>\n                 <div class="driver-points">{{ driver.driverPoints }}</div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'chassis\'">\n          <ion-item class="relative-pos chassis-list-height expandUp" *ngFor="let chassis of chassisList">\n            <ion-row>\n              <ion-col col-2>\n                <div class="driver-position">{{ chassis.position }}</div>\n              </ion-col>\n              <ion-col col-3>\n                <ion-thumbnail >\n                  <img class="chassis-img" [src]="chassis.chassisImage" (load)="loaded1 = true" [ngClass]="{\'img-loaded\':loaded1}" [hidden]="!loaded1" />\n                  <ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded1"></ion-spinner>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col>\n                <h2 class="list-name">{{ chassis.chassisName }}</h2>\n              </ion-col>\n              <ion-col>\n                 <div class="driver-points">{{ chassis.chassisPoints }}</div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'pu\'">\n          <ion-item class="relative-pos chassis-list-height expandUp" *ngFor="let pu of puList">\n            <ion-row>\n              <ion-col col-2>\n                <div class="driver-position">{{ pu.position }}</div>\n              </ion-col>\n              <ion-col col-3>\n                <ion-thumbnail>\n                  <img class="pu-img" [src]="pu.puImage" (load)="loaded2 = true" [ngClass]="{\'img-loaded\':loaded2}" [hidden]="!loaded2" />\n                  <ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded2"></ion-spinner>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col>\n                <h2 class="list-name">{{ pu.puName }}</h2>\n              </ion-col>\n              <ion-col>\n                 <div class="driver-points">{{ pu.puPoints }}</div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/race/race.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */]])
], RacePage);

//# sourceMappingURL=race.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__driver_one_driver_one__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__driver_two_driver_two__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chassis_one_chassis_one__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chassis_two_chassis_two__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pu_one_pu_one__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pu_two_pu_two__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__buy_trades_buy_trades__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamPage = (function () {
    function TeamPage(navCtrl, navParams, alertCtrl, adminData, teamData, storage, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        this.storage = storage;
        this.currentRoundData = currentRoundData;
        this.userDriverOneEmpty = true;
        this.userDriverTwoEmpty = true;
        this.userChassisOneEmpty = true;
        this.userChassisTwoEmpty = true;
        this.userPuOneEmpty = true;
        this.userPuTwoEmpty = true;
        this.driverOneUpgrade = true;
        this.driverTwoUpgrade = true;
        this.chassisOneUpgrade = true;
        this.chassisTwoUpgrade = true;
        this.puOneUpgrade = true;
        this.puTwoUpgrade = true;
        this.driverUpgradeCost = 1000000;
        this.chassisUpgradeCost = 1000000;
        this.puUpgradeCost = 1000000;
        this.gameState = 'lockout';
        //call firebase to check driver one data
        this.teamData.getTheMoney().on('value', function (snapshot) {
            var rawList = [];
            rawList.push({
                money: snapshot.val().money,
                trades: snapshot.val().trades
            });
            _this.userList = rawList;
            console.log(_this.userList, 'lasfjsa');
        });
        //call firebase to check driver one data
        this.teamData.getDriverOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().firstName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        abrev: snap.val().abrev,
                        driverValue: snap.val().driverValue,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                }
                if (snap.val().driverUpgrade !== undefined) {
                    _this.driverOneUpgrade = snap.val().driverUpgrade;
                }
            });
            _this.userDriverOne = rawList;
            _this.userDriverOne = Object.keys(_this.userDriverOne).map(function (key) { return _this.userDriverOne[key]; }); //convert to array of objects
            console.log('driverOne', _this.userDriverOne);
            if (_this.userDriverOne.length == 0) {
                _this.userDriverOneEmpty = true;
            }
            else {
                _this.userDriverOneEmpty = false;
            }
        });
        //call firebase to check driver two data
        this.teamData.getDriverTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().firstName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        abrev: snap.val().abrev,
                        driverValue: snap.val().driverValue,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                }
                if (snap.val().driverUpgrade !== undefined) {
                    _this.driverTwoUpgrade = snap.val().driverUpgrade;
                }
            });
            _this.userDriverTwo = rawList;
            _this.userDriverTwo = Object.keys(_this.userDriverTwo).map(function (key) { return _this.userDriverTwo[key]; }); //convert to array of objects
            console.log('driverTwo', _this.userDriverTwo);
            if (_this.userDriverTwo.length == 0) {
                _this.userDriverTwoEmpty = true;
            }
            else {
                _this.userDriverTwoEmpty = false;
            }
        });
        //call firebase to check user chassis one data
        this.teamData.getChassisOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().chassisName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        chassisName: snap.val().chassisName,
                        chassisValue: snap.val().chassisValue,
                        chassisImage: snap.val().chassisImage,
                        chassisPoints: snap.val().chassisPoints,
                        valChange: snap.val().valChange,
                        chassisUpgrade: snap.val().chassisUpgrade
                    });
                }
                if (snap.val().chassisUpgrade !== undefined) {
                    _this.chassisOneUpgrade = snap.val().chassisUpgrade;
                }
            });
            _this.userChassisOne = rawList;
            _this.userChassisOne = Object.keys(_this.userChassisOne).map(function (key) { return _this.userChassisOne[key]; }); //convert to array of objects
            console.log('chassisOne', _this.userChassisOne);
            if (_this.userChassisOne.length == 0) {
                _this.userChassisOneEmpty = true;
            }
            else {
                _this.userChassisOneEmpty = false;
            }
        });
        //call firebase to check user chassis two data
        this.teamData.getChassisTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().chassisName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        chassisName: snap.val().chassisName,
                        chassisValue: snap.val().chassisValue,
                        chassisImage: snap.val().chassisImage,
                        chassisPoints: snap.val().chassisPoints,
                        valChange: snap.val().valChange,
                        chassisUpgrade: snap.val().chassisUpgrade
                    });
                }
                if (snap.val().chassisUpgrade !== undefined) {
                    _this.chassisTwoUpgrade = snap.val().chassisUpgrade;
                }
            });
            _this.userChassisTwo = rawList;
            _this.userChassisTwo = Object.keys(_this.userChassisTwo).map(function (key) { return _this.userChassisTwo[key]; }); //convert to array of objects
            console.log('chassisTwo', _this.userChassisTwo);
            if (_this.userChassisTwo.length == 0) {
                _this.userChassisTwoEmpty = true;
            }
            else {
                _this.userChassisTwoEmpty = false;
            }
        });
        //call firebase to check user power unit one data
        this.teamData.getPuOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().puName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        puName: snap.val().puName,
                        puValue: snap.val().puValue,
                        puImage: snap.val().puImage,
                        puPoints: snap.val().puPoints,
                        valChange: snap.val().valChange,
                        posChange: snap.val().posChange,
                        puUpgrade: snap.val().puUpgrade
                    });
                }
                if (snap.val().puUpgrade !== undefined) {
                    _this.puOneUpgrade = snap.val().puUpgrade;
                }
            });
            _this.userPuOne = rawList;
            _this.userPuOne = Object.keys(_this.userPuOne).map(function (key) { return _this.userPuOne[key]; }); //convert to array of objects
            console.log('userPuOne', _this.userPuOne);
            if (_this.userPuOne.length == 0) {
                _this.userPuOneEmpty = true;
            }
            else {
                _this.userPuOneEmpty = false;
            }
        });
        //call firebase to check user power unit two data
        this.teamData.getPuTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().puName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        puName: snap.val().puName,
                        puValue: snap.val().puValue,
                        puImage: snap.val().puImage,
                        puPoints: snap.val().puPoints,
                        valChange: snap.val().valChange,
                        posChange: snap.val().posChange,
                        puUpgrade: snap.val().puUpgrade
                    });
                }
                if (snap.val().puUpgrade !== undefined) {
                    _this.puTwoUpgrade = snap.val().puUpgrade;
                }
            });
            _this.userPuTwo = rawList;
            _this.userPuTwo = Object.keys(_this.userPuTwo).map(function (key) { return _this.userPuTwo[key]; }); //convert to array of objects
            console.log('userPuTwo', _this.userPuTwo);
            if (_this.userPuTwo.length == 0) {
                _this.userPuTwoEmpty = true;
            }
            else {
                _this.userPuTwoEmpty = false;
            }
        });
        this.currentRoundData.getGameState().on('value', function (snapshot) {
            console.log('game state Team page:', snapshot.val().gameState);
            _this.gameState = snapshot.val().gameState;
        });
    } //end constructor
    TeamPage.prototype.confirmDriverAlert = function (driver) {
        var _this = this;
        var decimalSeperator = this.driverUpgradeCost;
        decimalSeperator = this.numberWithCommas(decimalSeperator);
        var confirm = this.alertCtrl.create({
            title: 'Upgrade',
            message: 'Are you sure you want to buy a driver training package for $' + decimalSeperator + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        console.log('driverUpgrade', driver);
                        var driverTypeId;
                        var driverNode;
                        //check if user has enough money
                        if (_this.teamCash < _this.driverUpgradeCost) {
                            _this.outOfMoneyAlert(_this.driverUpgradeCost);
                        }
                        else {
                            // update driver one
                            if (driver == "one") {
                                console.log('this.teamCash', _this.teamCash);
                                console.log('this.driverUpgradeCost', _this.driverUpgradeCost);
                                //update driver node
                                driverTypeId = _this.userDriverOne[0].id;
                                driverNode = '/carOne/driver/';
                                _this.teamData.addUpgrade(_this.driverUpgradeCost, driverNode, driverTypeId, _this.teamCash, "driver");
                                // update driver two
                            }
                            else {
                                driverTypeId = _this.userDriverTwo[0].id;
                                driverNode = '/carTwo/driver/';
                                _this.teamData.addUpgrade(_this.driverUpgradeCost, driverNode, driverTypeId, _this.teamCash, "driver");
                            }
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamPage.prototype.confirmChassisAlert = function (chassis) {
        var _this = this;
        var decimalSeperator = this.chassisUpgradeCost;
        decimalSeperator = this.numberWithCommas(decimalSeperator);
        var confirm = this.alertCtrl.create({
            title: 'Upgrade',
            message: 'Are you sure you want to buy a chassis upgrade for $' + decimalSeperator + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('driverUpgrade', chassis);
                        var chassisTypeId;
                        var chassisNode;
                        //check if user has enough money
                        if (_this.teamCash < _this.chassisUpgradeCost) {
                            _this.outOfMoneyAlert(_this.chassisUpgradeCost);
                        }
                        else {
                            // update chassis one
                            if (chassis == "one") {
                                console.log('this.teamCash', _this.teamCash);
                                console.log('this.chassisUpgradeCost', _this.chassisUpgradeCost);
                                chassisTypeId = _this.userChassisOne[0].id;
                                chassisNode = '/carOne/chassis/';
                                _this.teamData.addUpgrade(_this.chassisUpgradeCost, chassisNode, chassisTypeId, _this.teamCash, "chassis");
                                // update chassis two
                            }
                            else {
                                chassisTypeId = _this.userChassisTwo[0].id;
                                chassisNode = '/carTwo/chassis/';
                                _this.teamData.addUpgrade(_this.chassisUpgradeCost, chassisNode, chassisTypeId, _this.teamCash, "chassis");
                            }
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamPage.prototype.confirmPuAlert = function (pu) {
        var _this = this;
        var decimalSeperator = this.puUpgradeCost;
        decimalSeperator = this.numberWithCommas(decimalSeperator);
        console.log(decimalSeperator, 'decimalSeperator');
        var confirm = this.alertCtrl.create({
            title: 'Upgrade',
            message: 'Are you sure you want to buy a power unit upgrade for $' + decimalSeperator + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('puUpgrade', pu);
                        var puTypeId;
                        var puNode;
                        //check if user has enough money
                        if (_this.teamCash < _this.puUpgradeCost) {
                            _this.outOfMoneyAlert(_this.puUpgradeCost);
                        }
                        else {
                            // update pu one
                            if (pu == "one") {
                                puTypeId = _this.userPuOne[0].id;
                                puNode = '/carOne/powerUnit/';
                                _this.teamData.addUpgrade(_this.puUpgradeCost, puNode, puTypeId, _this.teamCash, "pu");
                                // update pu two
                            }
                            else {
                                puTypeId = _this.userPuTwo[0].id;
                                puNode = '/carTwo/powerUnit/';
                                _this.teamData.addUpgrade(_this.puUpgradeCost, puNode, puTypeId, _this.teamCash, "pu");
                            }
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamPage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'If either of your cars are missing a part then no points are scored for that car.' + '<br /><br />' +
                'Purchasing upgrades will double that parts score in the next round.' + '<br /><br />' +
                'If you trade an upgraded part you will lose your upgrade!',
            buttons: ['OK']
        });
        alert.present();
    };
    TeamPage.prototype.outOfMoneyAlert = function (upgradeCost) {
        var negVal = (this.teamCash - upgradeCost) * -1;
        negVal = this.numberWithCommas(negVal);
        console.log(negVal, 'negVal');
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negVal + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    TeamPage.prototype.numberWithCommas = function (dollarValue) {
        return dollarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    TeamPage.prototype.goToDriverOne = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__driver_one_driver_one__["a" /* DriverOnePage */]);
    };
    TeamPage.prototype.goToDriverTwo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__driver_two_driver_two__["a" /* DriverTwoPage */]);
    };
    TeamPage.prototype.goToChassisOne = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__chassis_one_chassis_one__["a" /* ChassisOnePage */]);
    };
    TeamPage.prototype.goToChassisTwo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chassis_two_chassis_two__["a" /* ChassisTwoPage */]);
    };
    TeamPage.prototype.goToPuOne = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pu_one_pu_one__["a" /* PuOnePage */]);
    };
    TeamPage.prototype.goToPuTwo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pu_two_pu_two__["a" /* PuTwoPage */]);
    };
    TeamPage.prototype.goToBuyTrades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__buy_trades_buy_trades__["a" /* BuyTradesPage */]);
    };
    TeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamPage');
    };
    return TeamPage;
}());
TeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/team/team.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="container margin-bottom">\n	<!-- Info Panel -->\n	<div *ngFor="let user of userList">\n    <ion-row>\n    	<ion-col>\n	      <ion-card class="relative-pos card-left card-height">\n	     		<img class="bank-img" src="assets/img/bank-icon.png" />\n	      	<div class="text-height">\n	      		<span class="title-text">\n	      			{{user.money | currency:\'USD\':true:\'1.0\'}}\n	      		</span>\n	      	</div>\n	      </ion-card>\n    	</ion-col>\n\n    	<ion-col>\n	      <ion-card class="relative-pos card-height">\n	     		<img class="trades-img" src="assets/img/trade-icon-dark.png" />\n	      	<div class="text-height">\n	      		Trades: \n	      		<span class="title-text">\n	      			{{user.trades }}\n	      		</span>\n	      	</div>\n				</ion-card>\n			</ion-col>\n			<button ion-button class="add-trade-btn add-btn" (click)="goToBuyTrades()" [disabled]="gameState == \'lockout\'">+</button>\n  	</ion-row>\n	</div>\n\n	<ion-row class="top-space-lg">\n		<img class="car-bg" src="assets/img/team-car.png" />\n		<div class="text-center positive-rel slideExpandUp delay-2">\n			CAR ONE\n			<ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n		</div>\n	</ion-row>\n	<ion-row class="top-space">\n		\n		<!-- Driver: car one -->\n		<ion-col width-33 class="pullUp delay-1">\n			<ion-card tappable (click)="goToDriverOne()" class="hq-card card-1 empty-card" *ngIf="userDriverOneEmpty">\n				<ion-card-header class="card-header">\n					<div>Driver</div>\n				</ion-card-header>\n				<ion-row>\n					<img class="driver-img driver-default" src="assets/img/driver-default.png" />\n				</ion-row>\n				<ion-icon name="md-add-circle" class="car-one-icon"></ion-icon>\n			</ion-card>\n\n			<ion-card *ngFor="let user of userDriverOne" (click)="goToDriverOne()" class="hq-card card-1">\n				<ion-card-header class="card-header">\n					<div>Driver</div>\n				</ion-card-header>\n\n				<div class="name">\n					{{user.firstName}}<br />\n				 	{{user.lastName}}\n				</div>\n\n				<ion-row> \n	        <img [src]="user.driverImage" class="driver-img" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n	        <ion-spinner name="crescent" [ngClass]="{\'center-spinner car-one-spinner\':true}" *ngIf="!loaded"></ion-spinner>\n			  </ion-row>\n\n			  <ion-row>\n			  	<div class="points">{{ user.driverPoints }}</div>\n				</ion-row>\n\n				<div class="value">\n					{{ +user.driverValue | currency:\'USD\':true:\'1.0\' }}\n				</div>\n\n				<h5 [ngClass]="{negative: user.valChange < 0}" class="positive val-change"> \n					{{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n				</h5>\n\n				<ion-icon class="icon-car-1 hide-icon" [ngClass]="{\'show-icon\': user.driverUpgrade === true}" name="star"></ion-icon>\n			</ion-card>\n		\n			<button ion-button class="upgrade-btn offset-bg" [hidden]="gameState == \'lockout\' || driverOneUpgrade == true" (click)="confirmDriverAlert(\'one\');">Upgrade</button>\n		</ion-col>\n\n		<!-- Chassis: car one -->\n		<ion-col width-33 class="pullUp delay-2">\n			<ion-card tappable (click)="goToChassisOne()" class="hq-card card-2 empty-card" *ngIf="userChassisOneEmpty">\n				<ion-card-header class="card-header">\n					<div>Chassis</div>\n				</ion-card-header>\n				<ion-row>\n					<img class="chassis-img chassis-default" src="assets/img/chassis-default.png" />\n				</ion-row>\n				<ion-icon name="md-add-circle" class="car-one-icon"></ion-icon>\n			</ion-card>\n\n			<ion-card *ngFor="let user of userChassisOne" class="hq-card card-2" (click)="goToChassisOne()">\n				<ion-card-header class="card-header">\n					<div>Chassis</div>\n				</ion-card-header>\n				<div class="name">{{user.chassisName}}</div>\n				<ion-row>\n					<img [src]="user.chassisImage" class="chassis-img" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n	    		<ion-spinner name="crescent" [ngClass]="{\'center-spinner car-one-spinner\':true}" *ngIf="!loaded"></ion-spinner>\n				</ion-row>\n				\n				<ion-row>\n					<div class="points">{{ user.chassisPoints }}</div>\n				</ion-row>\n\n				<div class="value">\n					{{ +user.chassisValue | currency:\'USD\':true:\'1.0\' }}\n				</div>\n	  		\n	  		<h5 [ngClass]="{negative: user.valChange < 0}" class="positive val-change"> {{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n				</h5>	\n					\n				<ion-icon class="icon-car-1 hide-icon" [ngClass]="{\'show-icon\': user.chassisUpgrade === true}" name="star"></ion-icon>\n\n			</ion-card>\n			<button ion-button class="upgrade-btn offset-bg bump-1" [hidden]="gameState == \'lockout\' || chassisOneUpgrade == true" (click)="confirmChassisAlert(\'one\');">Upgrade</button>\n		</ion-col>\n\n\n		<!-- Pu: car one -->\n		<ion-col width-33 class="pullUp delay-5">\n			<ion-card tappable (click)="goToPuOne()" class="hq-card card-3 empty-card" *ngIf="userPuOneEmpty">\n				<ion-card-header class="card-header">\n					<div>Power unit</div>\n				</ion-card-header>\n	\n				<ion-row>\n					<img class="pu-image pu-default" src="assets/img/pu-default.png" />	    		\n				</ion-row>\n\n				<ion-icon name="md-add-circle" class="car-one-icon"></ion-icon>\n			</ion-card>\n\n			<ion-card *ngFor="let user of userPuOne" class="hq-card card-3" (click)="goToPuOne()">\n				<ion-card-header class="card-header">\n					<div>Power Unit</div>\n				</ion-card-header>\n\n				<div class="name">{{user.puName}}</div>\n				<ion-row>\n					<img [src]="user.puImage" class="pu-image" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n            	\n          <ion-spinner name="crescent" [ngClass]="{\'center-spinner car-one-spinner\':true}" *ngIf="!loaded"></ion-spinner>\n        </ion-row>\n\n        <ion-row>\n					<div class="points">{{ user.puPoints }}</div>\n				</ion-row>\n\n				<div class="value">\n					{{ +user.puValue | currency:\'USD\':true:\'1.0\' }}\n				</div>\n\n				<h5 [ngClass]="{negative: user.valChange < 0}" class="positive val-change"> \n					{{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n				</h5>\n				<ion-icon class="icon-car-1 hide-icon" [ngClass]="{\'show-icon\': user.puUpgrade === true}" name="star"></ion-icon>  \n			</ion-card>\n			<button ion-button class="upgrade-btn offset-bg bump-2" [hidden]="gameState == \'lockout\' || puOneUpgrade == true" (click)="confirmPuAlert(\'one\');">Upgrade</button>\n		</ion-col>		\n	</ion-row>\n\n	<!-- *********** Car Two **********-->\n	<ion-row class="top-space">\n		<img class="car-bg" src="assets/img/team-car.png" />\n		<div class="text-center primary-bg slideExpandUp delay-3">\n			CAR TWO\n			<ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n		</div>\n	</ion-row>\n\n	<!-- Driver: car two -->\n\n	<ion-row class="top-space">\n		<ion-col width-33 class="pullUp delay-4">\n			<ion-card tappable (click)="goToDriverTwo()" class="hq-card card-1" *ngIf="userDriverTwoEmpty">\n				<ion-card-header class="car-two-header">\n					<div>Driver</div>\n				</ion-card-header>\n				<ion-row>\n					<img class="driver-img driver-default" src="assets/img/driver-default.png" />	    		\n				</ion-row>\n				<ion-icon name="md-add-circle" class="car-one-icon"></ion-icon>\n			</ion-card>\n\n			<ion-card *ngFor="let user of userDriverTwo" class="hq-card card-1 pullUp delay-4" (click)="goToDriverTwo()">\n				<ion-card-header class="car-two-header">\n					<div>Driver</div>\n				</ion-card-header>\n				<!-- <div class="hide-icon" [ngClass]="{\'fadeIn\': user.driverStatus === \'first\'}">\n		      <ion-icon class="leader" name="star"></ion-icon>\n		    </div> -->\n				<div class="name">\n					{{user.firstName}}<br />\n				 	{{user.lastName}}\n				</div>\n				<ion-row> \n	        <img [src]="user.driverImage" class="driver-img" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n	        <ion-spinner name="crescent" [ngClass]="{\'center-spinner car-two-spinner\':true}" *ngIf="!loaded"></ion-spinner>\n			  </ion-row>\n			  <ion-row>\n			  	<div class="points">{{ user.driverPoints }}</div>\n				</ion-row>\n				<div class="value">\n					{{ +user.driverValue | currency:\'USD\':true:\'1.0\' }}\n				</div>\n				<h5 [ngClass]="{negative: user.valChange < 0}" class="positive val-change"> \n					{{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n				</h5>\n				<ion-icon class="icon-car-1 hide-icon" [ngClass]="{\'show-icon\': user.driverUpgrade === true}" name="star"></ion-icon>\n			</ion-card>\n			<button ion-button class="upgrade-btn" [hidden]="gameState == \'lockout\' || driverTwoUpgrade == true" (click)="confirmDriverAlert(\'two\');">Upgrade</button>\n		</ion-col>\n\n		<!-- Chassis: car two -->\n		<ion-col width-33 class="pullUp delay-5">\n			<ion-card tappable (click)="goToChassisTwo()" class="hq-card card-2" *ngIf="userChassisTwoEmpty">\n				<ion-card-header class="car-two-header">\n					<div>Chassis</div>\n				</ion-card-header>\n				<ion-row>\n					<img class="chassis-img chassis-default" src="assets/img/chassis-default.png" />\n				</ion-row>\n				<ion-icon name="md-add-circle" class="car-one-icon"></ion-icon>\n			</ion-card>\n\n			<ion-card *ngFor="let user of userChassisTwo" class="hq-card card-2" (click)="goToChassisTwo()">\n				<ion-card-header class="car-two-header">\n					<div>Chassis</div>\n				</ion-card-header>\n				<div class="name">{{user.chassisName}}</div>\n				<ion-row>\n					<img [src]="user.chassisImage" class="chassis-img" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n	    		<ion-spinner name="crescent" [ngClass]="{\'center-spinner car-two-spinner\':true}" *ngIf="!loaded"></ion-spinner>\n				</ion-row>\n				<ion-row>\n					<div class="points">{{ user.chassisPoints }}</div>\n				</ion-row>\n				<div class="value">\n					{{ +user.chassisValue | currency:\'USD\':true:\'1.0\' }}\n				</div>\n	  		<h5 [ngClass]="{negative: user.valChange < 0}" class="positive val-change"> {{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n				</h5>\n				<ion-icon class="icon-car-1 hide-icon" [ngClass]="{\'show-icon\': user.chassisUpgrade === true}" name="star"></ion-icon>\n			</ion-card>\n			<button ion-button class="upgrade-btn bump-1" [hidden]="gameState == \'lockout\' || chassisTwoUpgrade == true" (click)="confirmChassisAlert(\'two\');">Upgrade</button>\n		</ion-col>\n\n		<!-- Pu: car two -->\n		<ion-col width-33 class="pullUp delay-6">\n			<ion-card tappable (click)="goToPuTwo()" class="hq-card card-3" *ngIf="userPuTwoEmpty">\n				<ion-card-header class="car-two-header">\n					<div>Power Unit</div>\n				</ion-card-header>\n				<ion-row>\n					<img class="pu-image pu-default" src="assets/img/pu-default.png" />\n				</ion-row>\n				<ion-icon name="md-add-circle" class="car-one-icon"></ion-icon>\n			</ion-card>\n\n			<ion-card *ngFor="let user of userPuTwo" class="hq-card card-3" (click)="goToPuTwo()" >\n				<ion-card-header class="car-two-header">\n					<div>Power Unit</div>\n				</ion-card-header>\n				<div class="name">{{user.puName}}</div>\n				<ion-row>\n					<img [src]="user.puImage" class="pu-image" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />	\n          <ion-spinner name="crescent" [ngClass]="{\'center-spinner car-two-spinner\':true}" *ngIf="!loaded"></ion-spinner>\n        </ion-row>\n\n        <ion-row>\n					<div class="points">{{ user.puPoints }}</div>\n				</ion-row>\n				<div class="value">\n					{{ +user.puValue | currency:\'USD\':true:\'1.0\' }}\n				</div>\n				<h5 [ngClass]="{negative: user.valChange < 0}" class="positive val-change"> \n					{{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n				</h5>\n				<ion-icon class="icon-car-1 hide-icon" [ngClass]="{\'show-icon\': user.puUpgrade === true}" name="star"></ion-icon>  \n			</ion-card>\n			<button ion-button class="upgrade-btn bump-2" [hidden]="gameState == \'lockout\' || puTwoUpgrade == true" (click)="confirmPuAlert(\'two\');">Upgrade</button>\n		</ion-col>\n	</ion-row>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/team/team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], TeamPage);

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__driver_stats_driver_stats__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DriverOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DriverOnePage = (function () {
    function DriverOnePage(navCtrl, navParams, alertCtrl, storage, adminData, teamData, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adminData = adminData;
        this.teamData = teamData;
        this.currentRoundData = currentRoundData;
        this.lastRound = 0;
        this.driverOneId = "";
        this.driverTwoId = "";
        this.raceTime = 0;
        this.gameState = "lockout";
        this.navCtrl = navCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        //get team cash amount
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            _this.userPoints = snapshot.val().totalPoints;
            if (_this.teamCash == 0) {
                _this.teamCash = "0";
            }
            console.log(_this.userPoints, 'userPoints');
        });
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //get last round value
            if (_this.currentRound < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.currentRound - 1;
                console.log(_this.lastRound, 'this.lastRound');
            }
            //call to firebase to retrieve drivers list data 
            _this.adminData.getDriversList(_this.lastRound).orderByChild("driverValue").on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        driverValue: snap.val().driverValue,
                        abrev: snap.val().abrev,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        posChange: snap.val().posChange,
                        qualified: snap.val().qualified,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                });
                _this.driversList = rawList.reverse();
                console.log(_this.driversList, 'DL');
            });
        });
        //call firebase to check driver one data
        this.teamData.getDriverOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().firstName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        abrev: snap.val().abrev,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        driverValue: snap.val().driverValue,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        posChange: snap.val().posChange,
                        qualified: snap.val().qualified,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                }
                if (snap.val().abrev !== undefined) {
                    _this.abrevOne = snap.val().abrev;
                    _this.driverOneId = snap.val().id;
                }
                if (snap.val().driverStatus !== undefined) {
                    _this.driverStatusOne = snap.val().driverStatus;
                }
            });
            _this.userDriverOne = rawList;
            if (_this.userDriverOne.length > 0) {
                _this.userDriverOne = Object.keys(_this.userDriverOne).map(function (key) { return _this.userDriverOne[key]; }); //convert to array of objects
                _this.userDriverOneValue = parseInt(_this.userDriverOne[0].driverValue);
            }
            else {
                _this.userDriverOneValue = 0;
            }
        });
        //call firebase to check driver two data
        this.teamData.getDriverTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().firstName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        abrev: snap.val().abrev,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        driverValue: snap.val().driverValue,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        posChange: snap.val().posChange,
                        qualified: snap.val().qualified,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                }
                if (snap.val().abrev !== undefined) {
                    _this.abrevTwo = snap.val().abrev;
                    _this.driverTwoId = snap.val().id;
                }
                if (snap.val().driverStatus !== undefined) {
                    _this.driverStatusTwo = snap.val().driverStatus;
                }
            });
            _this.userDriverTwo = rawList;
            if (_this.userDriverTwo.length > 0) {
                _this.userDriverTwo = Object.keys(_this.userDriverTwo).map(function (key) { return _this.userDriverTwo[key]; }); //convert to array of objects
                _this.userDriverTwoValue = parseInt(_this.userDriverTwo[0].driverValue);
            }
            else {
                _this.userDriverTwoValue = 0;
            }
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
        });
    } //end constructor
    // add driver to firebase from list
    DriverOnePage.prototype.addDriver = function (carNum, carData) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to make a trade?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var oldDriver;
                        var newDriver;
                        var newValue;
                        //make sure user has trades
                        if (_this.userTrades > 0) {
                            if (carNum === 'one') {
                                //check for first entry
                                if (_this.userDriverOne.length < 1) {
                                    oldDriver;
                                    //make sure driver one and two are not the same
                                    if (_this.userDriverTwo.length < 1) {
                                        oldDriver = '';
                                    }
                                    else {
                                        oldDriver = _this.userDriverTwo[0].abrev;
                                    }
                                    newDriver = carData.abrev;
                                    console.log('old and new 1', oldDriver, newDriver);
                                    if (oldDriver == newDriver) {
                                        _this.driverSameAlert();
                                    }
                                    else {
                                        newValue = carData.driverValue;
                                        //make sure user has enough money
                                        if (newValue > _this.teamCash) {
                                            var negVal = (_this.teamCash - newValue) * -1;
                                            _this.negValueAlert(negVal);
                                        }
                                        else {
                                            _this.teamData.addDriver(carData, _this.userDriverOne, carNum, _this.userPoints, _this.driverTwoId);
                                        }
                                    }
                                }
                                else {
                                    //make sure driver one and two are not the same
                                    console.log(_this.userDriverTwo, 'here');
                                    if (_this.userDriverTwo[0] == null) {
                                        oldDriver = 'none';
                                    }
                                    else {
                                        oldDriver = _this.userDriverTwo[0].abrev;
                                    }
                                    newDriver = carData.abrev;
                                    console.log('old and new 1', oldDriver, newDriver);
                                    if (oldDriver == newDriver) {
                                        _this.driverSameAlert();
                                    }
                                    else {
                                        var oldValue = parseInt(_this.userDriverOne[0].driverValue);
                                        newValue = carData.driverValue;
                                        //check if user has enough money
                                        if ((_this.teamCash + oldValue) >= newValue) {
                                            _this.teamData.addDriver(carData, _this.userDriverOne, carNum, _this.userPoints, _this.driverTwoId);
                                        }
                                        else {
                                            var negDriverVal = ((_this.teamCash + oldValue) - newValue) * -1;
                                            _this.negValueAlert(negDriverVal);
                                        }
                                    }
                                } //car two
                            }
                        }
                        else {
                            _this.noTradeAlert();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    DriverOnePage.prototype.noTradeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Out of trades',
            subTitle: 'You are out of trades, purchase more to continue to make trades.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverOnePage.prototype.negValueAlert = function (negValue) {
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negValue + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverOnePage.prototype.driverSameAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Not allowed',
            subTitle: 'Driver 1 and 2 must be different drivers.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverOnePage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'Trades are free in your first round.' + '<br /><br />' +
                'When you make a trade you receive the value of your current driver.' + '<br /><br />' +
                'Additional trades can be bought from the team page.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverOnePage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    DriverOnePage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    DriverOnePage.prototype.goToDriverStats = function (driver) {
        console.log(driver, 'test');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__driver_stats_driver_stats__["a" /* DriverStatsPage */], driver);
    };
    DriverOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverOnePage');
    };
    return DriverOnePage;
}());
DriverOnePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-driver-one',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/driver-one/driver-one.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row class="info-header">\n      <ion-col>\n        <ion-card class="relative-pos card-left">\n         <img class="title-icon" src="assets/img/bank-icon.png" />\n          <div class="title-text-bank">\n            <span class="title-val">{{teamCash | currency:\'USD\':true:\'1.0\'}}</span>\n          </div>    \n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="relative-pos">\n         <img class="trades-icon" src="assets/img/trade-icon-dark.png" />\n          <div class="title-text-trade">Trades: <span class="title-val">{{userTrades}}</span></div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="child-header">\n  <div class="container">\n  <!-- Driver one -->\n    <ion-row>\n      <ion-card *ngIf="(userDriverOne != 0)" class="card-layout pullUp delay-3">\n        <div class="relative-pos" *ngFor="let user of userDriverOne">\n          <ion-row> \n            <ion-col col-2 class="margin-image">\n              <img [src]="user.driverImage" class="driver-image" />\n            </ion-col>\n            \n            <ion-col col-7 class="vert-center">\n              <div class="margin-left">\n                <div class="driver-name">\n                  {{user.firstName}} {{user.lastName}}\n                </div>\n                <div class="driver-value">\n                  {{ +user.driverValue | currency:\'USD\':true:\'1.0\' }} \n                </div>\n                <span class="positive val-change" [ngClass]="{negative: user.valChange < 0}" > \n                  {{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n                </span>\n              </div>\n            </ion-col>\n\n            <ion-col col-3>\n              <h3 class="points">{{ user.driverPoints }}</h3>\n              <div class="to-bottom align-right">\n                <img class="car-img" src="assets/img/black-car.png" />\n                <div class="car-number">CAR ONE</div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-card>\n    </ion-row>\n\n    <ion-row class="header-marg">\n      <div class="text-center relative-pos slideExpandUp delay-3">\n        Available drivers\n        <ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n      </div>\n    </ion-row>\n\n    <ion-list *ngIf="driversList">\n      <ion-item class="relative-pos min-list-height pullUp delay-{{i}}" *ngFor="let driver of driversList; let i=index" [ngClass]="{\'highlight-one\': driver.abrev == abrevOne ? \'highlight-two\': driver.abrev == abrevTwo}">\n\n        <ion-thumbnail item-left>\n          <img class="list-image" [src]="driver.driverImage" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n          <ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n        </ion-thumbnail>\n      \n        <ion-row class="v-center">\n          <ion-col col-7>\n            <h2 class="list-name">{{ driver.firstName }} {{ driver.lastName }}</h2>\n            <h5 class="list-value">\n              {{ driver.driverValue | currency:\'USD\':true:\'1.0\' }}\n            </h5>\n            <h5 [ngClass]="{negative: driver.valChange < 0}" class="positive val-change">\n              {{ driver.valChange | currency:\'USD\':true:\'1.0\' }}\n            </h5>\n          </ion-col>\n\n          <ion-col col-4 class="align-right">\n            <button class="stats-btn" ion-button (click)="goToDriverStats(driver.abrev);" [ngClass]="{\'hide-button\': this.round < 2}">\n              <ion-icon name="stats"></ion-icon>\n            </button>\n            <button class="cantAfford buy-btn" ion-button (click)="addDriver(\'one\', driver);" [disabled]="driver.abrev == abrevOne || driver.abrev == abrevTwo ||  driver.driverValue > (teamCash + userDriverOneValue)" [hidden]="gameState == \'lockout\'">\n              <ion-icon><img class="trade-icon" src="assets/img/bank-icon-light.png" /></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n       <div *ngIf="driver.abrev == abrevOne || driver.abrev == abrevTwo" class="to-bottom right-tag" >\n          <div class="tag-driver-one" *ngIf="driver.abrev == abrevOne">\n            <div class="tag-text bumpRight">CAR ONE</div>\n            <img class="car-tag slideRight" src="assets/img/black-car.png" [ngClass]="{\'move-it\': animateCar == true }" />\n          </div>\n          <div class="tag-holder-two" *ngIf="driver.abrev == abrevTwo">\n            <div class="tag-text-two bumpRight">CAR TWO</div>\n            <img class="car-tag slideRight delay-mach" src="assets/img/red-car.png" />\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/driver-one/driver-one.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], DriverOnePage);

//# sourceMappingURL=driver-one.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__driver_stats_driver_stats__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DriverTwoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DriverTwoPage = (function () {
    function DriverTwoPage(navCtrl, navParams, alertCtrl, storage, adminData, teamData, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adminData = adminData;
        this.teamData = teamData;
        this.currentRoundData = currentRoundData;
        this.lastRound = 0;
        this.driverOneId = "";
        this.driverTwoId = "";
        this.raceTime = 0;
        this.gameState = "lockout";
        this.navCtrl = navCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        //get team cash amount
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            _this.userPoints = snapshot.val().totalPoints;
            if (_this.teamCash == 0) {
                _this.teamCash = "0";
            }
            console.log(_this.userPoints, 'userPoints');
        });
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //get last round value
            if (_this.currentRound < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.currentRound - 1;
                console.log(_this.lastRound, 'this.lastRound');
            }
            //call to firebase to retrieve drivers list data 
            _this.adminData.getDriversList(_this.lastRound).orderByChild("driverValue").on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        driverValue: snap.val().driverValue,
                        abrev: snap.val().abrev,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        posChange: snap.val().posChange,
                        qualified: snap.val().qualified,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                });
                _this.driversList = rawList.reverse();
                console.log(_this.driversList, 'DL');
            });
        });
        //call firebase to check driver one data
        this.teamData.getDriverOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().firstName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        abrev: snap.val().abrev,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        driverValue: snap.val().driverValue,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        posChange: snap.val().posChange,
                        qualified: snap.val().qualified,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                }
                if (snap.val().abrev !== undefined) {
                    _this.abrevOne = snap.val().abrev;
                    _this.driverOneId = snap.val().id;
                }
                if (snap.val().driverStatus !== undefined) {
                    _this.driverStatusOne = snap.val().driverStatus;
                }
            });
            _this.userDriverOne = rawList;
            if (_this.userDriverOne.length > 0) {
                _this.userDriverOne = Object.keys(_this.userDriverOne).map(function (key) { return _this.userDriverOne[key]; }); //convert to array of objects
                _this.userDriverOneValue = parseInt(_this.userDriverOne[0].driverValue);
            }
            else {
                _this.userDriverOneValue = 0;
            }
        });
        //call firebase to check driver two data
        this.teamData.getDriverTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().firstName !== undefined) {
                    rawList.push({
                        id: snap.key,
                        abrev: snap.val().abrev,
                        firstName: snap.val().firstName,
                        lastName: snap.val().lastName,
                        driverValue: snap.val().driverValue,
                        driverImage: snap.val().driverImage,
                        driverPoints: snap.val().driverPoints,
                        posChange: snap.val().posChange,
                        qualified: snap.val().qualified,
                        valChange: snap.val().valChange,
                        driverStatus: snap.val().driverStatus,
                        driverUpgrade: snap.val().driverUpgrade
                    });
                }
                if (snap.val().abrev !== undefined) {
                    _this.abrevTwo = snap.val().abrev;
                    _this.driverTwoId = snap.val().id;
                }
                if (snap.val().driverStatus !== undefined) {
                    _this.driverStatusTwo = snap.val().driverStatus;
                }
            });
            _this.userDriverTwo = rawList;
            if (_this.userDriverTwo.length > 0) {
                _this.userDriverTwo = Object.keys(_this.userDriverTwo).map(function (key) { return _this.userDriverTwo[key]; }); //convert to array of objects
                _this.userDriverTwoValue = parseInt(_this.userDriverTwo[0].driverValue);
            }
            else {
                _this.userDriverTwoValue = 0;
            }
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
        });
    } //end constructor
    // add driver to firebase from list
    DriverTwoPage.prototype.addDriver = function (carNum, carData) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to make a trade?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var oldDriver;
                        var newDriver;
                        var newValue;
                        //make sure user has trades
                        if (_this.userTrades > 0) {
                            if (carNum === 'two') {
                                //check for first entry
                                if (_this.userDriverTwo.length < 1) {
                                    console.log('firstEntry');
                                    //make sure driver one and two are not the same
                                    if (_this.userDriverOne.length < 1) {
                                        oldDriver = '';
                                    }
                                    else {
                                        oldDriver = _this.userDriverOne[0].abrev;
                                    }
                                    newDriver = carData.abrev;
                                    console.log('old and new 2', oldDriver, newDriver);
                                    if (oldDriver == newDriver) {
                                        _this.driverSameAlert();
                                    }
                                    else {
                                        newValue = carData.driverValue;
                                        //make sure user has enough money
                                        if (newValue > _this.teamCash) {
                                            var negVal = (_this.teamCash - newValue) * -1;
                                            _this.negValueAlert(negVal);
                                        }
                                        else {
                                            _this.teamData.addDriver(carData, _this.userDriverTwo, carNum, _this.userPoints, _this.driverOneId);
                                        }
                                    }
                                }
                                else {
                                    //make sure driver one and two are not the same
                                    oldDriver = _this.userDriverOne[0].abrev;
                                    newDriver = carData.abrev;
                                    console.log('old and new 2', oldDriver, newDriver);
                                    if (oldDriver == newDriver) {
                                        _this.driverSameAlert();
                                    }
                                    else {
                                        var oldValue = parseInt(_this.userDriverTwo[0].driverValue);
                                        newValue = carData.driverValue;
                                        //check if user has enough money
                                        if ((_this.teamCash + oldValue) >= newValue) {
                                            _this.teamData.addDriver(carData, _this.userDriverTwo, carNum, _this.userPoints, _this.driverOneId);
                                        }
                                        else {
                                            var negDriverVal = ((_this.teamCash + oldValue) - newValue) * -1;
                                            _this.negValueAlert(negDriverVal);
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            _this.noTradeAlert();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    DriverTwoPage.prototype.noTradeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Out of trades',
            subTitle: 'You are out of trades, purchase more to continue to make trades.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverTwoPage.prototype.negValueAlert = function (negValue) {
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negValue + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverTwoPage.prototype.driverSameAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Not allowed',
            subTitle: 'Driver 1 and 2 must be different drivers.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverTwoPage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'Trades are free in your first round.' + '<br /><br />' +
                'When you make a trade you receive the value of your current driver.' + '<br /><br />' +
                'Additional trades can be bought from the team page.',
            buttons: ['OK']
        });
        alert.present();
    };
    DriverTwoPage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    DriverTwoPage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    DriverTwoPage.prototype.goToDriverStats = function (driver) {
        console.log(driver, 'test');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__driver_stats_driver_stats__["a" /* DriverStatsPage */], driver);
    };
    DriverTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverTwoPage');
    };
    return DriverTwoPage;
}());
DriverTwoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-driver-two',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/driver-two/driver-two.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row class="info-header">\n      <ion-col>\n        <ion-card class="relative-pos card-left">\n         <img class="title-icon" src="assets/img/bank-icon.png" />\n          <div class="title-text-bank">\n            <span class="title-val">{{teamCash | currency:\'USD\':true:\'1.0\'}}</span>\n          </div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="relative-pos">\n         <img class="trades-icon" src="assets/img/trade-icon-dark.png" />\n          <div class="title-text-trade">Trades: <span class="title-val">{{userTrades}}</span></div>\n        </ion-card>\n      </ion-col>\n  	</ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="child-header">\n  <div class="container">\n	  <!-- Driver one -->\n	  <ion-row>\n      <ion-card *ngIf="(userDriverTwo != 0)" class="card-layout pullUp delay-3">\n        <div class="relative-pos" *ngFor="let user of userDriverTwo">  \n          <ion-row> \n            <ion-col col-2 class="margin-image">\n              <img [src]="user.driverImage" class="driver-image" />\n            </ion-col>\n            <ion-col col-7 class="vert-center">\n              <div class="margin-left">\n                <div class="driver-name">\n                  {{user.firstName}} {{user.lastName}}\n                </div>\n                <div class="driver-value">\n                  {{ +user.driverValue | currency:\'USD\':true:\'1.0\' }} \n                </div>\n                <span class="positive val-change" [ngClass]="{negative: user.valChange < 0}" > \n                  {{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n                </span>\n              </div>\n            </ion-col>\n\n            <ion-col col-3>\n              <h3 class="points">{{ user.driverPoints }}</h3>\n              <div class="to-bottom">\n                <img class="car-img" src="assets/img/red-car.png" />\n                <div class="car-number car-two">CAR TWO</div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-card>\n  </ion-row>\n\n  <ion-row class="header-marg">\n    <div class="text-center relative-pos slideExpandUp delay-3">\n      Available drivers\n      <ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n    </div>\n  </ion-row>\n\n  <ion-list *ngIf="driversList">\n    <ion-item class="relative-pos min-list-height pullUp delay-{{i}}" *ngFor="let driver of driversList; let i=index" [ngClass]="{\'highlight-one\': driver.abrev == abrevOne ? \'highlight-two\': driver.abrev == abrevTwo}">\n\n      <ion-thumbnail item-left>\n        <img class="list-image" [src]="driver.driverImage" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n        <ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n      </ion-thumbnail>\n\n      <ion-row class="v-center">\n        <ion-col col-7>\n          <h2 class="list-name">{{ driver.firstName }} {{ driver.lastName }}</h2>\n          <h5 class="list-value">\n            {{ driver.driverValue | currency:\'USD\':true:\'1.0\' }}\n          </h5>\n          <h5 [ngClass]="{negative: driver.valChange < 0}" class="val-change positive">\n            {{ driver.valChange | currency:\'USD\':true:\'1.0\' }}\n          </h5>\n        </ion-col>\n\n        <ion-col col-4 class="align-right">\n          <button class="stats-btn" ion-button (click)="goToDriverStats(driver.abrev);" [ngClass]="{\'hide-button\': this.round < 2}">\n            <ion-icon name="stats"></ion-icon>\n          </button>\n          <button class="cantAfford buy-btn" ion-button (click)="addDriver(\'two\', driver);" [disabled]="driver.abrev == abrevOne || driver.abrev == abrevTwo ||  driver.driverValue > (teamCash + userDriverTwoValue)" [hidden]="gameState == \'lockout\'">\n            <ion-icon>\n            	<img class="trade-icon" src="assets/img/bank-icon-light.png" />\n            </ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n     	<div *ngIf="driver.abrev == abrevOne || driver.abrev == abrevTwo" class="to-bottom right-tag" >\n        <div class="tag-driver-one" *ngIf="driver.abrev == abrevOne">\n          <div class="tag-text bumpRight">CAR ONE</div>\n          <img class="car-tag slideRight delay-mach" src="assets/img/black-car.png" [ngClass]="{\'move-it\': animateCar == true }" />\n        </div>\n        <div class="tag-holder-two" *ngIf="driver.abrev == abrevTwo">\n          <div class="tag-text-two bumpRight">CAR TWO</div>\n          <img class="car-tag slideRight" src="assets/img/red-car.png" />\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/driver-two/driver-two.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], DriverTwoPage);

//# sourceMappingURL=driver-two.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChassisOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chassis_stats_chassis_stats__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChassisOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChassisOnePage = (function () {
    function ChassisOnePage(navCtrl, navParams, alertCtrl, storage, adminData, teamData, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adminData = adminData;
        this.teamData = teamData;
        this.currentRoundData = currentRoundData;
        this.lastRound = 0;
        this.gameState = "lockout";
        this.raceTime = 0;
        this.navCtrl = navCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        //get team cash amount
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            _this.userPoints = snapshot.val().totalPoints;
            if (_this.teamCash == 0) {
                _this.teamCash = "0";
            }
            console.log(_this.userPoints, 'userPoints');
        });
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //get last round value
            if (_this.currentRound < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.currentRound - 1;
                console.log(_this.lastRound, 'this.lastRound');
            }
            //call to firebase to retrieve chassis list data
            _this.adminData.getChassisList(_this.lastRound).orderByChild("chassisValue").on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        chassisName: snap.val().chassisName,
                        chassisValue: snap.val().chassisValue,
                        chassisImage: snap.val().chassisImage,
                        chassisPoints: snap.val().chassisPoints,
                        valChange: snap.val().valChange,
                        chassisUpgrade: snap.val().chassisUpgrade
                    });
                });
                _this.chassisList = rawList.reverse();
            });
        });
        //call firebase to check user chassis one data
        this.teamData.getChassisOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    chassisName: snap.val().chassisName,
                    chassisValue: snap.val().chassisValue,
                    chassisImage: snap.val().chassisImage,
                    chassisPoints: snap.val().chassisPoints,
                    valChange: snap.val().valChange,
                    chassisUpgrade: snap.val().chassisUpgrade
                });
                if (snap.val().chassisName !== undefined) {
                    _this.chassisOneName = snap.val().chassisName;
                }
            });
            _this.userChassisOne = rawList;
            if (_this.userChassisOne.length > 0) {
                _this.userChassisOne = Object.keys(_this.userChassisOne).map(function (key) { return _this.userChassisOne[key]; }); //convert to array of objects
                _this.userChassisOneValue = parseInt(_this.userChassisOne[0].chassisValue);
            }
            else {
                _this.userChassisOneValue = 0;
            }
        });
        //call firebase to check user chassis two data
        this.teamData.getChassisTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    chassisName: snap.val().chassisName,
                    chassisValue: snap.val().chassisValue,
                    chassisImage: snap.val().chassisImage,
                    chassisPoints: snap.val().chassisPoints,
                    valChange: snap.val().valChange,
                    chassisUpgrade: snap.val().chassisUpgrade
                });
                if (snap.val().chassisName !== undefined) {
                    _this.chassisTwoName = snap.val().chassisName;
                }
            });
            _this.userChassisTwo = rawList;
            if (_this.userChassisTwo.length > 0) {
                _this.userChassisTwo = Object.keys(_this.userChassisTwo).map(function (key) { return _this.userChassisTwo[key]; }); //convert to array of objects
                _this.userChassisTwoValue = parseInt(_this.userChassisTwo[0].chassisValue);
            }
            else {
                _this.userChassisTwoValue = 0;
            }
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
            console.log(_this.gameState);
        });
    } //end constructor
    //add chassis to firebase from list
    ChassisOnePage.prototype.addChassis = function (carNum, carData) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to make a trade?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Car Number', carNum);
                        console.log('Car data', carData);
                        var newValue;
                        var oldValue;
                        //make sure the user has trades
                        if (_this.userTrades > 0) {
                            if (carNum === 'one') {
                                //check for first entry
                                if (_this.userChassisOne.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.chassisValue;
                                    //check that this.driverOne.driverValue > this.teamCash
                                    if (newValue > _this.teamCash) {
                                        _this.negBalanceAlert(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        _this.teamData.addChassis(carData, _this.userChassisOne, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userChassisOne[0].chassisValue);
                                    newValue = carData.chassisValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        _this.teamData.addChassis(carData, _this.userChassisOne, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalanceAlert(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car one
                            else {
                                //check for first entry
                                if (_this.userChassisTwo.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.chassisValue;
                                    //check that driver one's value > teamCash
                                    if (newValue > _this.teamCash) {
                                        _this.negBalanceAlert(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        _this.teamData.addChassis(carData, _this.userChassisTwo, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userChassisTwo[0].chassisValue);
                                    newValue = carData.chassisValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        _this.teamData.addChassis(carData, _this.userChassisTwo, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalanceAlert(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car two
                        }
                        else {
                            _this.noTradeAlert();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    ChassisOnePage.prototype.getRaceTime = function (timeOfRace, timeNow) {
        var timeToRace = timeOfRace - timeNow;
        console.log("timeToRace Chassis", timeToRace);
        return timeToRace;
    };
    ChassisOnePage.prototype.noTradeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Out of trades',
            subTitle: 'You are out of trades, purchase more to continue to make trades.',
            buttons: ['OK']
        });
        alert.present();
    };
    ChassisOnePage.prototype.negBalanceAlert = function (newValue, teamCash, oldValue) {
        var negVal = ((this.teamCash + oldValue) - newValue) * -1;
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negVal + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    ChassisOnePage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'Trades are free in your first round.' + '<br /><br />' +
                'When you make a trade you receive the value of your current chassis.' + '<br /><br />' +
                'Additional trades can be bought from the team page.',
            buttons: ['OK']
        });
        alert.present();
    };
    ChassisOnePage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    ChassisOnePage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    ChassisOnePage.prototype.goToChassisStats = function (chassis) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chassis_stats_chassis_stats__["a" /* ChassisStatsPage */], chassis);
    };
    ChassisOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChassisOnePage');
    };
    return ChassisOnePage;
}());
ChassisOnePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chassis-one',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/chassis-one/chassis-one.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row class="info-header">\n      <ion-col>\n        <ion-card class="relative-pos card-left">\n         <img class="title-icon" src="assets/img/bank-icon.png" />\n          <div class="title-text-bank"><span class="title-val">{{teamCash | currency:\'USD\':true:\'1.0\'}}</span></div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="relative-pos">\n         <img class="trades-icon" src="assets/img/trade-icon-dark.png" />\n          <div class="title-text-trade">Trades: <span class="title-val">{{userTrades}}</span></div>\n        </ion-card>\n      </ion-col>\n  	</ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="child-header">\n	<div class="container">\n		<!-- Chassis one -->\n		<ion-row>\n			<ion-card class="card-layout left pullUp delay-3 card-min-height" *ngIf="(userChassisOne?.length > 0)">\n			  <div class="relative-pos" *ngFor="let user of userChassisOne">\n		  		<ion-row> \n	          <ion-col col-2>\n	            <img class="chassis-image" [src]="user.chassisImage" />\n	          </ion-col>\n\n						<ion-col col-7 class="vert-center">\n					   	<div class="chassis-name"> \n					   		{{user.chassisName}}\n					   	</div>\n\n					   	<div class="chassis-value">\n					   		{{ user?.chassisValue | currency:\'USD\':true:\'1.0\' }}\n              </div>\n      		   	<span class="positive val-change" [ngClass]="{negative: user.valChange < 0}"> \n                {{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n              </span>\n					  </ion-col>\n\n						<ion-col col-3 class="relative-pos">\n              <h3 class="points"> {{ user.chassisPoints }} </h3>\n							<div class="to-bottom align-right">\n	              <img class="car-img" src="assets/img/black-car.png" />\n	              <div class="car-number">CAR ONE</div>\n	            </div>\n            </ion-col>\n					</ion-row>\n			  </div>\n			</ion-card>\n		</ion-row>\n\n		<ion-row class="header-marg">\n		  <div class="text-center relative-pos slideExpandUp delay-3"> \n		  	Available chassis\n		  	<ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n		  </div>\n		</ion-row>\n\n		<ion-list *ngIf="chassisList">\n		  <ion-item class="relative-pos chassis-item-height pullUp delay-{{i}}" *ngFor="let chassis of chassisList; let i=index" [ngClass]="{\'highlight-one\': chassis.chassisName == chassisOneName ? \'highlight-two\': chassis.chassisName == chassisTwoName}">\n		   	\n		   	<ion-thumbnail item-left>\n		   		<img [src]="chassis.chassisImage" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" class="chassis-size" />\n\n	      	<ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n		   	</ion-thumbnail>\n		   	\n		   	<ion-row class="v-center">\n			   	<ion-col class="vert-center">\n				  	<h2 class="list-name">{{ chassis.chassisName }}</h2>\n				   	<h5 class="list-value">\n				   		{{ chassis.chassisValue | currency:\'USD\':true:\'1.0\' }}\n				   	</h5>\n				   	<span class="positive val-change" [ngClass]="{negative: chassis.valChange < 0}"> \n		   	 			{{ chassis.valChange | currency:\'USD\':true:\'1.0\' }}\n		   	 		</span>\n					</ion-col>\n\n					<ion-col class="align-right">\n						<button class="stats-btn" ion-button (click)="goToChassisStats(chassis.chassisName)" [ngClass]="{\'hide-button\': this.round < 2}">\n				   		<ion-icon name="stats"></ion-icon>\n				   	</button>\n				   	\n				   	<button class="cantAfford buy-btn" ion-button (click)="addChassis(\'one\', chassis)" [disabled]="chassis.chassisName == chassisOneName || chassis.chassisValue > (teamCash + userChassisOneValue)" [hidden]="gameState == \'lockout\'">\n				   		<ion-icon>\n				   			<img class="trade-icon" src="assets/img/bank-icon-light.png" />\n				   		</ion-icon>\n				   	</button>\n				  </ion-col>\n			  </ion-row>\n\n			  <div *ngIf="chassis.chassisName == chassisOneName || chassis.chassisName == chassisTwoName" class="to-bottom right-tag">\n	        <div class="tag-holder-one" *ngIf="chassis.chassisName == chassisOneName">\n	          <div class="tag-text bumpRight">CAR ONE</div>\n	          <img class="car-tag slideRight" src="assets/img/black-car.png" />\n	        </div>\n\n	        <div class="tag-holder-two" *ngIf="chassis.chassisName == chassisTwoName">\n	        	<div class="tag-text-two bumpRight">CAR TWO</div>\n	          <img class="car-tag slideRight delay-mach" src="assets/img/red-car.png" />\n	        </div>\n	      </div>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/chassis-one/chassis-one.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], ChassisOnePage);

//# sourceMappingURL=chassis-one.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChassisTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chassis_stats_chassis_stats__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChassisTwoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChassisTwoPage = (function () {
    function ChassisTwoPage(navCtrl, navParams, alertCtrl, storage, adminData, teamData, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adminData = adminData;
        this.teamData = teamData;
        this.currentRoundData = currentRoundData;
        this.lastRound = 0;
        this.gameState = "lockout";
        this.raceTime = 0;
        this.navCtrl = navCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        //get team cash amount
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            _this.userPoints = snapshot.val().totalPoints;
            if (_this.teamCash == 0) {
                _this.teamCash = "0";
            }
            console.log(_this.userPoints, 'userPoints');
        });
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //get last round value
            if (_this.currentRound < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.currentRound - 1;
                console.log(_this.lastRound, 'this.lastRound');
            }
            //call to firebase to retrieve chassis list data
            _this.adminData.getChassisList(_this.lastRound).orderByChild("chassisValue").on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        chassisName: snap.val().chassisName,
                        chassisValue: snap.val().chassisValue,
                        chassisImage: snap.val().chassisImage,
                        chassisPoints: snap.val().chassisPoints,
                        valChange: snap.val().valChange,
                        chassisUpgrade: snap.val().chassisUpgrade
                    });
                });
                _this.chassisList = rawList.reverse();
            });
        });
        //call firebase to check user chassis one data
        this.teamData.getChassisOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    chassisName: snap.val().chassisName,
                    chassisValue: snap.val().chassisValue,
                    chassisImage: snap.val().chassisImage,
                    chassisPoints: snap.val().chassisPoints,
                    valChange: snap.val().valChange,
                    chassisUpgrade: snap.val().chassisUpgrade
                });
                if (snap.val().chassisName !== undefined) {
                    _this.chassisOneName = snap.val().chassisName;
                }
            });
            _this.userChassisOne = rawList;
            if (_this.userChassisOne.length > 0) {
                _this.userChassisOne = Object.keys(_this.userChassisOne).map(function (key) { return _this.userChassisOne[key]; }); //convert to array of objects
                _this.userChassisOneValue = parseInt(_this.userChassisOne[0].chassisValue);
            }
            else {
                _this.userChassisOneValue = 0;
            }
        });
        //call firebase to check user chassis two data
        this.teamData.getChassisTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    chassisName: snap.val().chassisName,
                    chassisValue: snap.val().chassisValue,
                    chassisImage: snap.val().chassisImage,
                    chassisPoints: snap.val().chassisPoints,
                    valChange: snap.val().valChange,
                    chassisUpgrade: snap.val().chassisUpgrade
                });
                if (snap.val().chassisName !== undefined) {
                    _this.chassisTwoName = snap.val().chassisName;
                }
            });
            _this.userChassisTwo = rawList;
            if (_this.userChassisTwo.length > 0) {
                _this.userChassisTwo = Object.keys(_this.userChassisTwo).map(function (key) { return _this.userChassisTwo[key]; }); //convert to array of objects
                _this.userChassisTwoValue = parseInt(_this.userChassisTwo[0].chassisValue);
            }
            else {
                _this.userChassisTwoValue = 0;
            }
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
            console.log(_this.gameState);
        });
    } //end constructor
    //add chassis to firebase from list
    ChassisTwoPage.prototype.addChassis = function (carNum, carData) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to make a trade?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Car Number', carNum);
                        console.log('Car data', carData);
                        var newValue;
                        var oldValue;
                        //make sure the user has trades
                        if (_this.userTrades > 0) {
                            if (carNum === 'one') {
                                //check for first entry
                                if (_this.userChassisOne.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.chassisValue;
                                    //check that this.driverOne.driverValue > this.teamCash
                                    if (newValue > _this.teamCash) {
                                        _this.negBalanceAlert(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        _this.teamData.addChassis(carData, _this.userChassisOne, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userChassisOne[0].chassisValue);
                                    newValue = carData.chassisValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        _this.teamData.addChassis(carData, _this.userChassisOne, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalanceAlert(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car one
                            else {
                                //check for first entry
                                if (_this.userChassisTwo.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.chassisValue;
                                    //check that this.driverOne.driverValue > this.teamCash
                                    if (newValue > _this.teamCash) {
                                        _this.negBalanceAlert(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        _this.teamData.addChassis(carData, _this.userChassisTwo, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userChassisTwo[0].chassisValue);
                                    newValue = carData.chassisValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        _this.teamData.addChassis(carData, _this.userChassisTwo, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalanceAlert(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car two
                        }
                        else {
                            _this.noTradeAlert();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    ChassisTwoPage.prototype.getRaceTime = function (timeOfRace, timeNow) {
        var timeToRace = timeOfRace - timeNow;
        return timeToRace;
    };
    ChassisTwoPage.prototype.noTradeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Out of trades',
            subTitle: 'You are out of trades, purchase more to continue to make trades.',
            buttons: ['OK']
        });
        alert.present();
    };
    ChassisTwoPage.prototype.negBalanceAlert = function (newValue, teamCash, oldValue) {
        var negVal = ((this.teamCash + oldValue) - newValue) * -1;
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negVal + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    ChassisTwoPage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'Trades are free in your first round.' + '<br /><br />' +
                'When you make a trade you receive the value of your current chassis.' + '<br /><br />' +
                'Additional trades can be bought from the team page.',
            buttons: ['OK']
        });
        alert.present();
    };
    ChassisTwoPage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    ChassisTwoPage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    ChassisTwoPage.prototype.goToChassisStats = function (chassis) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chassis_stats_chassis_stats__["a" /* ChassisStatsPage */], chassis);
    };
    ChassisTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChassisTwoPage');
    };
    return ChassisTwoPage;
}());
ChassisTwoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chassis-two',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/chassis-two/chassis-two.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row class="info-header">\n      <ion-col>\n        <ion-card class="relative-pos card-left">\n         <img class="title-icon" src="assets/img/bank-icon.png" />\n          <div class="title-text-bank"><span class="title-val">{{teamCash | currency:\'USD\':true:\'1.0\'}}</span></div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="relative-pos">\n         <img class="trades-icon" src="assets/img/trade-icon-dark.png" />\n          <div class="title-text-trade">Trades: <span class="title-val">{{userTrades}}</span></div>\n        </ion-card>\n      </ion-col>\n  	</ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="child-header">\n	<div class="container">\n		<!-- Chassis two -->\n		<ion-row>	\n			<ion-card *ngIf="(userChassisTwo != 0)" class="card-layout left pullUp delay-3 card-min-height">\n			  <div class="relative-pos" *ngFor="let user of userChassisTwo">\n		  		<ion-row> \n	          <ion-col col-2>\n	            <img class="chassis-image" [src]="user.chassisImage" />\n	          </ion-col>\n\n						<ion-col col-7 class="vert-center">\n					   	<div class="chassis-name"> \n					   		{{user.chassisName}}\n					   	</div>\n\n					   	<div class="chassis-value">\n					   		{{ user.chassisValue | currency:\'USD\':true:\'1.0\' }}\n              </div>\n              <span class="positive val-change" [ngClass]="{negative: user.valChange < 0}"> \n	              {{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n	            </span>\n					  </ion-col>\n\n						<ion-col col-3 class="relative-pos">\n              <h3 class="points"> {{ user.chassisPoints }} </h3>\n							<div class="to-bottom align-right">\n	              <img class="car-img" src="assets/img/red-car.png" />\n	              <div class="car-number car-two">CAR TWO</div>\n	            </div>\n            </ion-col>\n					</ion-row>	\n			  </div>\n			</ion-card>\n		</ion-row>\n\n		<ion-row class="header-marg">\n		  <div class="text-center relative-pos slideExpandUp delay-3">\n				Available chassis\n		  	<ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n		  </div>\n		</ion-row>\n\n		<ion-list *ngIf="chassisList">\n		  <ion-item class="relative-pos chassis-item-height pullUp delay-{{i}}" *ngFor="let chassis of chassisList; let i=index" [ngClass]="{\'highlight-one\': chassis.chassisName == chassisOneName ? \'highlight-two\': chassis.chassisName == chassisTwoName}">\n		   	\n		   	<ion-thumbnail item-left>\n		   		<img [src]="chassis.chassisImage" class="chassis-size" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n\n	      	<ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n		   	</ion-thumbnail>\n		   	\n		   	<ion-row class="v-center">\n			   	<ion-col class="vert-center">\n				  	<h2 class="list-name">{{ chassis.chassisName }}</h2>\n				   	<h5 class="list-value">\n				   		{{ chassis.chassisValue | currency:\'USD\':true:\'1.0\' }}\n				   	</h5>\n\n				   	<span class="positive val-change" [ngClass]="{negative: chassis.valChange < 0}"> \n		   	 			{{ chassis.valChange | currency:\'USD\':true:\'1.0\' }}\n		   	 		</span>\n					</ion-col>\n\n					<ion-col class="align-right">\n						<button class="stats-btn" ion-button (click)="goToChassisStats(chassis.chassisName)" [ngClass]="{\'hide-button\': this.round < 2}">\n				   		<ion-icon name="stats"></ion-icon>\n				   	</button>\n				   	\n				   	<button class="cantAfford buy-btn" ion-button (click)="addChassis(\'two\', chassis)" [disabled]="chassis.chassisName == chassisTwoName || chassis.chassisValue > (teamCash + userChassisTwoValue)" [hidden]="gameState == \'lockout\'">\n				   		<ion-icon>\n				   			<img class="trade-icon" src="assets/img/bank-icon-light.png" />\n				   		</ion-icon>\n				   	</button>\n				  </ion-col>\n			  </ion-row>\n\n			  <div *ngIf="chassis.chassisName == chassisOneName || chassis.chassisName == chassisTwoName" class="to-bottom right-tag">\n	        <div class="tag-holder-one" *ngIf="chassis.chassisName == chassisOneName">\n	          <div class="tag-text bumpRight">CAR ONE</div>\n	          <img class="car-tag slideRight delay-mach" src="assets/img/black-car.png" />\n	        </div>\n\n	        <div class="tag-holder-two" *ngIf="chassis.chassisName == chassisTwoName">\n	        	<div class="tag-text-two bumpRight">CAR TWO</div>\n	          <img class="car-tag slideRight" src="assets/img/red-car.png" />\n	        </div>\n	      </div>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/chassis-two/chassis-two.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], ChassisTwoPage);

//# sourceMappingURL=chassis-two.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pu_stats_pu_stats__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PuOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PuOnePage = (function () {
    function PuOnePage(navCtrl, navParams, alertCtrl, storage, adminData, teamData, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adminData = adminData;
        this.teamData = teamData;
        this.currentRoundData = currentRoundData;
        this.lastRound = 0;
        this.gameState = "lockout";
        this.raceTime = 0;
        this.navCtrl = navCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        //get team cash amount
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            _this.userPoints = snapshot.val().totalPoints;
            if (_this.teamCash == 0) {
                _this.teamCash = "0";
            }
            console.log(_this.userPoints, 'userPoints');
        });
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //get last round value
            if (_this.currentRound < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.currentRound - 1;
                console.log(_this.lastRound, 'this.lastRound');
            }
            //call to firebase to retrieve pu list data
            _this.adminData.getPUList(_this.lastRound).orderByChild("puValue").on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        puName: snap.val().puName,
                        puValue: snap.val().puValue,
                        puImage: snap.val().puImage,
                        puPoints: snap.val().puPoints,
                        valChange: snap.val().valChange,
                        posChange: snap.val().posChange,
                        puUpgrade: snap.val().puUpgrade
                    });
                });
                _this.puList = rawList.reverse();
                console.log('PUList', _this.puList);
            });
        });
        //call firebase to check user power unit one data
        this.teamData.getPuOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    puName: snap.val().puName,
                    puValue: snap.val().puValue,
                    puImage: snap.val().puImage,
                    puPoints: snap.val().puPoints,
                    valChange: snap.val().valChange,
                    posChange: snap.val().posChange,
                    puUpgrade: snap.val().puUpgrade
                });
                if (snap.val().puName !== undefined) {
                    _this.puNameOne = snap.val().puName;
                }
            });
            _this.userPuOne = rawList;
            if (_this.userPuOne.length > 0) {
                _this.userPuOne = Object.keys(_this.userPuOne).map(function (key) { return _this.userPuOne[key]; }); //convert to array of objects
                _this.userPuOneValue = parseInt(_this.userPuOne[0].puValue);
            }
            else {
                _this.userPuOneValue = 0;
            }
        });
        //call firebase to check user power unit two data
        this.teamData.getPuTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    puName: snap.val().puName,
                    puValue: snap.val().puValue,
                    puImage: snap.val().puImage,
                    puPoints: snap.val().puPoints,
                    valChange: snap.val().valChange,
                    posChange: snap.val().posChange,
                    puUpgrade: snap.val().puUpgrade
                });
                if (snap.val().puName !== undefined) {
                    _this.puNameTwo = snap.val().puName;
                    console.log("ksjhfksjdfhksjfdh", _this.puNameTwo);
                }
            });
            _this.userPuTwo = rawList;
            if (_this.userPuTwo.length > 0) {
                _this.userPuTwo = Object.keys(_this.userPuTwo).map(function (key) { return _this.userPuTwo[key]; }); //convert to array of objects
                _this.userPuTwoValue = parseInt(_this.userPuTwo[0].puValue);
            }
            else {
                _this.userPuTwoValue = 0;
            }
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
            console.log(_this.gameState);
        });
    } //end constructor
    PuOnePage.prototype.addPU = function (carNum, carData) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to make a trade?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var newValue;
                        var oldValue;
                        //make sure the user has trades
                        if (_this.userTrades > 0) {
                            //power unit one
                            if (carNum === 'one') {
                                //check for first entry
                                if (_this.userPuOne.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.puValue;
                                    //not enough money
                                    if (newValue > _this.teamCash) {
                                        _this.negBalance(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        //add pu to car one
                                        _this.teamData.addPU(carData, _this.userPuOne, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userPuOne[0].puValue);
                                    newValue = carData.puValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        //add pu to car one
                                        _this.teamData.addPU(carData, _this.userPuOne, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalance(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car one
                            else {
                                //check for first entry
                                if (_this.userPuTwo.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.puValue;
                                    if (newValue > _this.teamCash) {
                                        _this.negBalance(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        _this.teamData.addPU(carData, _this.userPuTwo, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userPuTwo[0].puValue);
                                    newValue = carData.puValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        //add pu to car two 
                                        _this.teamData.addPU(carData, _this.userPuTwo, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalance(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car two
                        }
                        else {
                            _this.noTradeAlert();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    PuOnePage.prototype.getRaceTime = function (timeOfRace, timeNow) {
        var timeToRace = timeOfRace - timeNow;
        console.log("timeToRace engine", timeToRace);
        return timeToRace;
    };
    PuOnePage.prototype.noTradeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Out of trades',
            subTitle: 'You are out of trades, purchase more to continue to make trades.',
            buttons: ['OK']
        });
        alert.present();
    };
    PuOnePage.prototype.negBalance = function (newValue, teamCash, oldValue) {
        var negVal = ((this.teamCash + oldValue) - newValue) * -1;
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negVal + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    PuOnePage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'Trades are free in your first round.' + '<br /><br />' +
                'When you make a trade you receive the value of your current power unit.' + '<br /><br />' +
                'Additional trades can be bought from the team page.',
            buttons: ['OK']
        });
        alert.present();
    };
    PuOnePage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    PuOnePage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    PuOnePage.prototype.goToPuStats = function (powerUnit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pu_stats_pu_stats__["a" /* PuStatsPage */], powerUnit);
    };
    PuOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PuOnePage');
    };
    return PuOnePage;
}());
PuOnePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pu-one',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/pu-one/pu-one.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row class="info-header">\n      <ion-col>\n        <ion-card class="relative-pos card-left">\n         <img class="title-icon" src="assets/img/bank-icon.png" />\n          <div class="title-text-bank"><span class="title-val">{{teamCash | currency:\'USD\':true:\'1.0\'}}</span></div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="relative-pos">\n         <img class="trades-icon" src="assets/img/trade-icon-dark.png" />\n          <div class="title-text-trade">Trades: <span class="title-val">{{userTrades}}</span></div>\n        </ion-card>\n      </ion-col>\n  	</ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="child-header">\n	<div class="container">\n		<!-- Power unit One -->\n		<ion-row>\n			<ion-card *ngIf="(userPuOne != 0)" class="card-layout left pullUp delay-3">\n			  <div class="relative-pos" *ngFor="let user of userPuOne" (click)="goToPu()">\n				  <ion-row> \n						<ion-col col-2 class="margin-image">\n							<img [src]="user.puImage" class="pu-image" />\n					  </ion-col>\n					  <ion-col col-7 class="vert-center">\n					  	<div class="pu-name"> \n					   		{{user.puName}}\n					   	</div>\n					   	<div class="pu-value">\n					  		{{ user.puValue | currency:\'USD\':true:\'1.0\' }}\n					  	</div>\n					  	<span class="positive val-change bump" [ngClass]="{negative: user.valChange < 0}"> \n								{{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n							</span>\n					  </ion-col>\n				  	<ion-col col-3 class="relative-pos">\n            	<h3 class="points"> {{ user.puPoints }} </h3>\n            	<div class="to-bottom align-right">\n            		<img class="car-img" src="assets/img/black-car.png" />\n            		<div class="car-number">CAR ONE</div>\n            	</div>\n          	</ion-col>\n					</ion-row>\n		  	</div>\n			</ion-card>\n		</ion-row>\n\n		<ion-row class="header-marg">\n		  <div class="text-center relative-pos slideExpandUp delay-3">\n		  	Available power units\n		  	<ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n		  </div>\n		</ion-row>\n\n		<ion-list *ngIf="puList">\n		  <ion-item class="relative-pos pu-item-height pullUp delay-{{i}}" *ngFor="let pu of puList; let i=index" [ngClass]="{\'highlight-one\': pu.puName == puNameOne ? \'highlight-two\': pu.puName == puNameTwo}">\n		   	<ion-thumbnail item-left>\n		   		<img class="margin-image" [src]="pu.puImage" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n	      	<ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n		   	</ion-thumbnail>\n		   	<ion-row class="v-center">\n			   	<ion-col class="vert-center">\n				  	<h2 class="list-name">{{ pu.puName }}</h2>\n				  	<h5 class="list-value">\n				   		{{ pu.puValue | currency:\'USD\':true:\'1.0\' }}\n				   	</h5>\n				   	<span class="positive val-change" [ngClass]="{negative: pu.valChange < 0}"> \n				   	 	{{ pu.valChange | currency:\'USD\':true:\'1.0\' }}\n				   	</span>\n			   	</ion-col>\n			   	<ion-col class="align-right">\n						<button class="stats-btn" ion-button (click)="goToPuStats(pu.puName);" [ngClass]="{\'hide-button\': this.round < 2}">\n			   			<ion-icon name="stats"></ion-icon>\n			   		</button>\n				   	<button class="cantAfford buy-btn" ion-button (click)="addPU(\'one\', pu);" [disabled]="pu.puName == puNameOne || pu.puValue > (teamCash + userPuOneValue)" [hidden]="gameState == \'lockout\'">\n				   		<ion-icon>\n				   			<img class="trade-icon" src="assets/img/bank-icon-light.png" />\n				   		</ion-icon>\n				   	</button>\n					</ion-col>\n				</ion-row>\n\n				<div *ngIf="pu.puName == puNameOne || pu.puName == puNameTwo" class="to-bottom right-tag">\n        	<div class="tag-driver-one" *ngIf="pu.puName == puNameOne">\n	          <div class="tag-text bumpRight">CAR ONE</div>\n	          <img class="car-tag slideRight" src="assets/img/black-car.png" />\n	        </div>\n	        <div class="tag-holder-two" *ngIf="pu.puName == puNameTwo">\n	         	<div class="tag-text-two bumpRight">CAR TWO</div>\n	          <img class="car-tag slideRight delay-mach" src="assets/img/red-car.png" />\n	        </div>\n	      </div>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/pu-one/pu-one.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], PuOnePage);

//# sourceMappingURL=pu-one.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pu_stats_pu_stats__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PuTwoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PuTwoPage = (function () {
    function PuTwoPage(navCtrl, navParams, alertCtrl, storage, adminData, teamData, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adminData = adminData;
        this.teamData = teamData;
        this.currentRoundData = currentRoundData;
        this.lastRound = 0;
        this.gameState = "lockout";
        this.raceTime = 0;
        this.navCtrl = navCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        //get team cash amount
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            _this.userPoints = snapshot.val().totalPoints;
            if (_this.teamCash == 0) {
                _this.teamCash = "0";
            }
            console.log(_this.userPoints, 'userPoints');
        });
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //get last round value
            if (_this.currentRound < 2) {
                _this.lastRound = 0;
            }
            else {
                _this.lastRound = _this.currentRound - 1;
                console.log(_this.lastRound, 'this.lastRound');
            }
            //call to firebase to retrieve pu list data
            _this.adminData.getPUList(_this.lastRound).orderByChild("puValue").on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        position: snap.val().position,
                        puName: snap.val().puName,
                        puValue: snap.val().puValue,
                        puImage: snap.val().puImage,
                        puPoints: snap.val().puPoints,
                        valChange: snap.val().valChange,
                        posChange: snap.val().posChange,
                        puUpgrade: snap.val().puUpgrade
                    });
                });
                _this.puList = rawList.reverse();
                console.log('PUList', _this.puList);
            });
        });
        //call firebase to check user power unit one data
        this.teamData.getPuOne().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    puName: snap.val().puName,
                    puValue: snap.val().puValue,
                    puImage: snap.val().puImage,
                    puPoints: snap.val().puPoints,
                    valChange: snap.val().valChange,
                    posChange: snap.val().posChange,
                    puUpgrade: snap.val().puUpgrade
                });
                if (snap.val().puName !== undefined) {
                    _this.puNameOne = snap.val().puName;
                }
            });
            _this.userPuOne = rawList;
            if (_this.userPuOne.length > 0) {
                _this.userPuOne = Object.keys(_this.userPuOne).map(function (key) { return _this.userPuOne[key]; }); //convert to array of objects
                _this.userPuOneValue = parseInt(_this.userPuOne[0].puValue);
            }
            else {
                _this.userPuOneValue = 0;
            }
        });
        //call firebase to check user power unit two data
        this.teamData.getPuTwo().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    id: snap.key,
                    position: snap.val().position,
                    puName: snap.val().puName,
                    puValue: snap.val().puValue,
                    puImage: snap.val().puImage,
                    puPoints: snap.val().puPoints,
                    valChange: snap.val().valChange,
                    posChange: snap.val().posChange,
                    puUpgrade: snap.val().puUpgrade
                });
                if (snap.val().puName !== undefined) {
                    _this.puNameTwo = snap.val().puName;
                    console.log("ksjhfksjdfhksjfdh", _this.puNameTwo);
                }
            });
            _this.userPuTwo = rawList;
            if (_this.userPuTwo.length > 0) {
                _this.userPuTwo = Object.keys(_this.userPuTwo).map(function (key) { return _this.userPuTwo[key]; }); //convert to array of objects
                _this.userPuTwoValue = parseInt(_this.userPuTwo[0].puValue);
            }
            else {
                _this.userPuTwoValue = 0;
            }
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
            console.log(_this.gameState);
        });
    } //end constructor
    PuTwoPage.prototype.addPU = function (carNum, carData) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to make a trade?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var newValue;
                        var oldValue;
                        //make sure the user has trades
                        if (_this.userTrades > 0) {
                            //power unit one
                            if (carNum === 'one') {
                                //check for first entry
                                if (_this.userPuOne.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.puValue;
                                    //not enough money
                                    if (newValue > _this.teamCash) {
                                        _this.negBalance(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        //add pu to car one
                                        _this.teamData.addPU(carData, _this.userPuOne, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userPuOne[0].puValue);
                                    newValue = carData.puValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        //add pu to car one
                                        _this.teamData.addPU(carData, _this.userPuOne, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalance(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car one
                            else {
                                //check for first entry
                                if (_this.userPuTwo.length < 1) {
                                    console.log('firstEntry');
                                    newValue = carData.puValue;
                                    if (newValue > _this.teamCash) {
                                        _this.negBalance(newValue, _this.teamCash, 0);
                                    }
                                    else {
                                        _this.teamData.addPU(carData, _this.userPuTwo, carNum, _this.userPoints);
                                    }
                                }
                                else {
                                    oldValue = parseInt(_this.userPuTwo[0].puValue);
                                    newValue = carData.puValue;
                                    //check if user has enough money
                                    if ((_this.teamCash + oldValue) >= newValue) {
                                        //add pu to car two 
                                        _this.teamData.addPU(carData, _this.userPuTwo, carNum, _this.userPoints);
                                    }
                                    else {
                                        _this.negBalance(newValue, _this.teamCash, oldValue);
                                    }
                                }
                            } // end car two
                        }
                        else {
                            _this.noTradeAlert();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    PuTwoPage.prototype.getRaceTime = function (timeOfRace, timeNow) {
        var timeToRace = timeOfRace - timeNow;
        console.log("timeToRace engine", timeToRace);
        return timeToRace;
    };
    PuTwoPage.prototype.noTradeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Out of trades',
            subTitle: 'You are out of trades, purchase more to continue to make trades.',
            buttons: ['OK']
        });
        alert.present();
    };
    PuTwoPage.prototype.negBalance = function (newValue, teamCash, oldValue) {
        var negVal = ((this.teamCash + oldValue) - newValue) * -1;
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            subTitle: 'You need an additional $' + negVal + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    PuTwoPage.prototype.carHelp = function () {
        var alert = this.alertCtrl.create({
            title: 'Hints and tips',
            subTitle: 'Trades are free in your first round.' + '<br /><br />' +
                'When you make a trade you receive the value of your current power unit.' + '<br /><br />' +
                'Additional trades can be bought from the team page.',
            buttons: ['OK']
        });
        alert.present();
    };
    PuTwoPage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    PuTwoPage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    PuTwoPage.prototype.goToPuStats = function (powerUnit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pu_stats_pu_stats__["a" /* PuStatsPage */], powerUnit);
    };
    PuTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PuTwoPage');
    };
    return PuTwoPage;
}());
PuTwoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pu-two',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/pu-two/pu-two.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row class="info-header">\n      <ion-col>\n        <ion-card class="relative-pos card-left">\n         <img class="title-icon" src="assets/img/bank-icon.png" />\n          <div class="title-text-bank"><span class="title-val">{{teamCash | currency:\'USD\':true:\'1.0\'}}</span></div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class="relative-pos">\n         <img class="trades-icon" src="assets/img/trade-icon-dark.png" />\n          <div class="title-text-trade">Trades: <span class="title-val">{{userTrades}}</span></div>\n        </ion-card>\n      </ion-col>\n  	</ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="child-header">\n	<div class="container">\n		<!-- Power unit two -->\n		<ion-row>\n			<ion-card *ngIf="(userPuTwo != 0)" class="card-layout left pullUp delay-3">\n			  <div class="relative-pos" *ngFor="let user of userPuTwo" (click)="goToPu()"> \n				  <ion-row> \n						<ion-col col-2 class="margin-image">\n							<img [src]="user.puImage" class="pu-image" />\n					  </ion-col>\n					  <ion-col col-7 class="vert-center">\n					  	<div class="pu-name"> \n					   		{{user.puName}}\n					   	</div>\n					   	<div class="pu-value">\n					  		{{ user.puValue | currency:\'USD\':true:\'1.0\' }}\n					  	</div>\n					  	<span class="positive val-change bump" [ngClass]="{negative: user.valChange < 0}"> \n								{{ user.valChange | currency:\'USD\':true:\'1.0\' }}\n							</span>\n					  </ion-col>\n				  	<ion-col col-3 class="relative-pos">\n            	<h3 class="points"> {{ user.puPoints }} </h3>\n            	<div class="to-bottom align-right">\n            		<img class="car-img" src="assets/img/red-car.png" />\n            		<div class="car-number car-two">CAR TWO</div>\n            	</div>\n          	</ion-col>\n					</ion-row>\n		  	</div>\n			</ion-card>\n		</ion-row>\n\n		<ion-row class="header-marg">\n		  <div class="text-center relative-pos slideExpandUp delay-3">\n		  	Available power units\n		  	<ion-icon name="md-information-circle" class="car-help" (click)="carHelp();"></ion-icon>\n		  </div>\n		</ion-row>\n\n		<ion-list *ngIf="puList">\n		  <ion-item class="relative-pos pu-item-height pullUp delay-{{i}}" *ngFor="let pu of puList; let i=index" [ngClass]="{\'highlight-one\': pu.puName == puNameOne ? \'highlight-two\': pu.puName == puNameTwo}">\n		   	<ion-thumbnail item-left>\n		   		<img class="margin-image" [src]="pu.puImage" (load)="loaded = true" [ngClass]="{\'img-loaded\':loaded}" [hidden]="!loaded" />\n	      	<ion-spinner name="crescent" [ngClass]="{\'center-spinner \':true}" *ngIf="!loaded"></ion-spinner>\n		   	</ion-thumbnail>\n\n		   	<ion-row class="v-center">\n			   	<ion-col class="vert-center">\n				  	<h2 class="list-name">{{ pu.puName }}</h2>\n				  	<h5 class="list-value">\n				   		{{ pu.puValue | currency:\'USD\':true:\'1.0\' }}\n				   	</h5>\n				   	<span class="positive val-change" [ngClass]="{negative: pu.valChange < 0}"> \n				   	 	{{ pu.valChange | currency:\'USD\':true:\'1.0\' }}\n				   	</span>\n			   	</ion-col>\n\n			   	<ion-col class="align-right">\n						<button class="stats-btn" ion-button (click)="goToPuStats(pu.puName);" [ngClass]="{\'hide-button\': this.round < 2}">\n			   			<ion-icon name="stats"></ion-icon>\n			   		</button>\n				   	<button class="cantAfford buy-btn" ion-button (click)="addPU(\'two\', pu);" [disabled]="pu.puName == puNameTwo || pu.puValue > (teamCash + userPuTwoValue)" [hidden]="gameState == \'lockout\'">\n				   		<ion-icon>\n				   			<img class="trade-icon" src="assets/img/bank-icon-light.png" />\n				   		</ion-icon>\n				   	</button>\n					</ion-col>\n				</ion-row>\n\n				<div *ngIf="pu.puName == puNameOne || pu.puName == puNameTwo" class="to-bottom right-tag">\n        	<div class="tag-driver-one" *ngIf="pu.puName == puNameOne">\n	          <div class="tag-text bumpRight">CAR ONE</div>\n	          <img class="car-tag slideRight delay-mach" src="assets/img/black-car.png" />\n	        </div>\n	        <div class="tag-holder-two" *ngIf="pu.puName == puNameTwo">\n	         	<div class="tag-text-two bumpRight">CAR TWO</div>\n	          <img class="car-tag slideRight" src="assets/img/red-car.png" />\n	        </div>\n	      </div>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/pu-two/pu-two.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], PuTwoPage);

//# sourceMappingURL=pu-two.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyTradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_team_data_team_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BuyTradesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BuyTradesPage = (function () {
    function BuyTradesPage(navCtrl, navParams, alertCtrl, adminData, teamData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.adminData = adminData;
        this.teamData = teamData;
        this.tradeCostOne = 500000;
        this.tradeCostThree = 1000000;
        this.tradeCostFive = 2000000;
        this.gameState = "lockout";
        this.buyOneTrade = 0;
        this.buyThreeTrades = 0;
        this.buyFiveTrades = 0;
        this.tradeAnimate = false;
        this.teamData.getTheMoney().on('value', function (snapshot) {
            _this.teamCash = snapshot.val().money;
            _this.userTrades = snapshot.val().trades;
            console.log(_this.teamCash, 'woooooo2');
        });
        this.adminData.getGameState().on('value', function (snapshot) {
            _this.gameState = snapshot.val().gameState;
            console.log(_this.gameState);
        });
    } //end constructor
    BuyTradesPage.prototype.confirmTrade = function (num) {
        var _this = this;
        console.log('num', num);
        var tradeCost;
        if (num === 5) {
            tradeCost = this.tradeCostFive;
        }
        else if (num === 3) {
            tradeCost = this.tradeCostThree;
        }
        else {
            num = 1;
            tradeCost = this.tradeCostOne;
        }
        if (this.teamCash >= tradeCost) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Confirm',
                message: 'Are you sure you want to buy a trade?',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Agree clicked');
                            if (num === 5) {
                                _this.buyFiveTrades = 1;
                            }
                            else if (num === 3) {
                                _this.buyThreeTrades = 1;
                            }
                            else {
                                _this.buyOneTrade = 1;
                            }
                            _this.tradeAnimate = true;
                            _this.teamData.addTrade(num, tradeCost);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var negVal = (this.teamCash - tradeCost) * -1;
            this.negValueAlert(negVal);
        }
    }; //end constructor
    BuyTradesPage.prototype.negValueAlert = function (negValue) {
        var decimalSeperator = this.numberWithCommas(negValue);
        var alert = this.alertCtrl.create({
            title: 'Not enough money',
            message: 'You need an additional $' + decimalSeperator + ' to make the trade.',
            buttons: ['OK']
        });
        alert.present();
    };
    BuyTradesPage.prototype.numberWithCommas = function (dollarValue) {
        return dollarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    BuyTradesPage.prototype.ngAfterViewInit = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    BuyTradesPage.prototype.ionViewWillLeave = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'flex';
        }
    };
    BuyTradesPage.prototype.ionViewDidLoad = function () {
        console.log('Hello Buy Trades Page');
    };
    return BuyTradesPage;
}());
BuyTradesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buy-trades',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/buy-trades/buy-trades.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row>\n      <div class="absolute-pos trades-heading">Buy trades</div>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="container">\n  <ion-row>\n    <ion-col>\n      <ion-card class="relative-pos card-left card-height">\n        <img class="bank-img" src="assets/img/bank-icon.png" />\n        <div class="text-height">\n          <span class="title-text">\n            {{teamCash | currency:\'USD\':true:\'1.0\'}}\n          </span>\n        </div>\n      </ion-card>\n    </ion-col>\n    \n    <ion-col>\n      <ion-card class="relative-pos card-height">\n        <img class="trades-img" src="assets/img/trade-icon-dark.png" />\n        <div class="text-height">\n          Trades: \n          <span class="title-text">\n            {{userTrades}}\n          </span>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="gameState != \'lockout\'">  \n    <ion-row>\n      <ion-col class="flex-center">\n        <ion-card class="clear-bg">\n          <div id="banner">\n            <div class="no-fill" [ngClass]="{\'fill\': buyOneTrade === 1, \'fill1\': buyThreeTrades === 1, \'fill2\': buyFiveTrades === 1}">\n              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">\n                <path fill="#04ACFF" id="waveShape" class="color-1" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z" fill-opacity="0.5"/>\n              </svg>\n            </div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="flex-center">\n        <div class="trades-center">\n          <div class="trades-counter" [ngClass]="{\'slideDown\': buyOneTrade === 1, \'pullUp\': buyThreeTrades === 1, \'bounce\': buyFiveTrades === 1}"> \n            <span>Trades: {{ userTrades }}</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col width-33>\n        <div class="trade-button slideExpandUp delay-3" (click)="confirmTrade(1);">\n          <div class="trade-text">Buy one trade</div>\n          <span>$500,000</span>\n        </div>\n      </ion-col>\n\n      <ion-col width-33>\n        <div class="trade-button middle-btn slideExpandUp delay-5" (click)="confirmTrade(3);">\n          <div class="trade-text">Buy three trades</div>\n          <span>1 million</span>\n        </div>\n      </ion-col>\n\n      <ion-col width-33>\n        <div class="trade-button slideExpandUp delay-7" (click)="confirmTrade(5);">\n          <div class="trade-text">Buy five trades</div>\n          <span>2 million</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/buy-trades/buy-trades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_team_data_team_data__["a" /* TeamDataProvider */]])
], BuyTradesPage);

//# sourceMappingURL=buy-trades.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_current_round_data_current_round_data__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RankingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RankingPage = (function () {
    function RankingPage(navCtrl, navParams, teamData, storage, currentRoundData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamData = teamData;
        this.storage = storage;
        this.currentRoundData = currentRoundData;
        this.noStats = true;
        this.pointsLastRound = 0;
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.round = rawList[0].currentRound;
            console.log('Ranking - this round:', _this.round);
            if (_this.round > 1) {
                _this.round = _this.round - 1;
                _this.firstRound = false;
            }
            else {
                _this.firstRound = true;
            }
        });
        this.teamData.getUsersList().orderByChild("rank").on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snapshot) {
                rawList.push({
                    id: snapshot.key,
                    email: snapshot.val().email,
                    teamName: snapshot.val().teamName,
                    money: snapshot.val().money,
                    rank: snapshot.val().rank,
                    rankDiff: snapshot.val().rankDiff,
                    totalPoints: snapshot.val().totalPoints,
                    trades: snapshot.val().trades,
                    points: snapshot.val().points
                });
            });
            _this.usersList = rawList;
            console.log('1st: Userslist Ranking Page', _this.usersList);
            _this.allUsers = _this.usersList.length;
        });
        console.log("passed user", this.navParams.data);
        this.userData = this.navParams.data.email;
        for (var _i = 0, _a = this.usersList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (this.userData == user.email) {
                this.userStats = user;
                if (user.points !== undefined) {
                    console.log('user has a score');
                    this.pointsLastRound = user.points[this.round].points;
                    this.noStats = false;
                }
                else {
                    console.log('user has no score');
                    this.noStats = true;
                }
            }
        }
    } //end constructor
    RankingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankingPage');
    };
    return RankingPage;
}());
RankingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ranking',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/ranking/ranking.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="container">\n		<ion-row *ngIf="noStats !== true || firstRound !== true" class="header-marg">\n			<ion-col>\n	    	<div class="stat slideExpandUp delay-3">\n        	Last Round<span>{{ pointsLastRound }}</span>\n      	</div>\n      </ion-col>\n\n      <ion-col>\n        <div class="stat slideExpandUp delay-4">\n          Total Score<span>{{userStats.totalPoints}}</span>\n        </div>\n      </ion-col>\n\n      <ion-col>\n        <div class="stat slideExpandUp delay-5">\n          Rank<span>{{userStats.rank}}</span>\n        </div>\n      </ion-col>\n	  </ion-row>\n\n	  <ion-row class="header-marg">\n	    <div class="header-text slideExpandUp delay-2">Team Ranking</div>\n	  </ion-row>\n\n		<ion-list *ngFor="let user of usersList" class="constructor-list pullUp delay-2">\n		  <ion-item *ngIf="user.teamName"\n		   	[ngClass]="{\'highlight-item\': userData == user.email}">\n		   	<ion-row>\n		   	\n			   	<ion-col>\n				   	<div class="team-name">{{ user.teamName}}</div>\n				  	<div class="team-cash">Cash: {{ user.money | currency:\'USD\':true:\'1.0\' }}</div>\n			   		<div class="team-trades">Trades: {{ user.trades }}</div>\n			   	</ion-col>\n\n			   	<ion-col class="right-col rel-position">\n				   	<div class="team-rank">{{ user.rank }}</div>\n\n						<div class="points-text">\n							Total points: \n							<span class="number-points"> \n								{{ user.totalPoints }}\n							</span>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/ranking/ranking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_team_data_team_data__["a" /* TeamDataProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RulesPage = (function () {
    function RulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.overviewToggle = false;
        this.tradesToggle = false;
        this.upgradesToggle = false;
        this.lockoutToggle = false;
        this.pointsToggle = false;
    } //end constructor
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    return RulesPage;
}());
RulesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rules',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/rules/rules.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="container">\n\n		<!-- Overview card -->\n		<div class="rules-card slideExpandUp delay-3">\n			<button class="rules-header" (click)="overviewToggle = !overviewToggle;">\n				Overview\n				 <ion-icon class="header-icon" ios="ios-arrow-down-outline" md="ios-arrow-down-outline" [ngClass]="{\'spin\': overviewToggle}"></ion-icon>\n			</button>\n\n			<div class="rules-content" [ngClass]="{\'showing\': overviewToggle,\n				\'hidden\': !overviewToggle, \'hidden1\': tradesToggle}">\n				<p>As the manager of your own Formula One race team, with a starting budget you need to purchase a driver, chassis and power unit for both of your cars. After each F1 race weekend your drivers, chassis and power units will recieve points based on the race results. In addition the value of each part will rise or fall depending on its performance in the race.</p>\n				<p>Just before the start of each Formula One race weekend a lockout will be established, no longer allowing trades or upgrades.</p>\n				<p>\n					<span>Please note:</span><br />\n				 	If either of your cars are missing a part (driver, chassis, power unit), then no points are scored for that car.\n				 </p>\n			</div>\n		</div>\n\n		<!-- trades card -->\n		<div class="rules-card slideExpandUp delay-4">\n			<button class="rules-header" (click)="tradesToggle = !tradesToggle;">\n				Trades\n				 <ion-icon class="header-icon" ios="ios-arrow-down-outline" md="ios-arrow-down-outline" [ngClass]="{\'spin\': tradesToggle}"></ion-icon>\n			</button>\n\n			<div class="rules-content" [ngClass]="{\'showing\': tradesToggle,\n			\'hidden\': !tradesToggle}">\n				<p>To maximise your score and rise in the rankings, you should always be looking to improve your team by making trades.</p>\n				<p>You start the season with twenty trades. Each time you swap a part, it will cost you one trade.</p>\n				<p>During your first round all trades are free, so experiment with different combinations of drivers, chassis and power units until you are happy with your team.</p> \n				<p>If you\'re running low on trades you can purchase additional trades, look for the + icon on the team page.</p>\n				\n				<p><span>Don\'t forget</span><br />\n					When you make a trade you recieve the value of the traded item.\n				</p>\n			</div>\n		</div>\n\n		<!-- upgrades card -->\n		<div class="rules-card slideExpandUp delay-5">\n			<button class="rules-header" (click)="upgradesToggle = !upgradesToggle;">\n				Upgrades\n				 <ion-icon class="header-icon" ios="ios-arrow-down-outline" md="ios-arrow-down-outline" [ngClass]="{\'spin\': upgradesToggle}"></ion-icon>\n			</button>\n\n\n			<div class="rules-content" [ngClass]="{\'showing\': upgradesToggle,\n			\'hidden\': !upgradesToggle}">\n				<p>Purchasing an upgrade will double that parts score in the next round.<p>\n				<span>Please note:</span> <br />\n				If you make an upgrade and then trade out that particular part, you will lose the upgrade!</p>\n			</div>\n		</div>\n		\n		<!-- lockout card -->\n		<div class="rules-card slideExpandUp delay-6">\n			<button class="rules-header" (click)="lockoutToggle = !lockoutToggle;">\n				Lock out\n				 <ion-icon class="header-icon" ios="ios-arrow-down-outline" md="ios-arrow-down-outline" [ngClass]="{\'spin\': lockoutToggle}"></ion-icon>\n			</button>\n			<div class="rules-content" [ngClass]="{\'showing\': lockoutToggle,\n			\'hidden\': !lockoutToggle}">\n				<p>Just before each race weekend the app will enter a lockout status. During this time you will not be able to make trades or upgrades until the race weekend is completed. The timer shows how long until the next lock out.</p>\n			</div>\n		</div>\n\n		<!-- point card -->\n		<div class="rules-card slideExpandUp delay-7">\n			<button class="rules-header" (click)="pointsToggle = !pointsToggle;">\n				Points\n				 <ion-icon class="header-icon" ios="ios-arrow-down-outline" md="ios-arrow-down-outline" [ngClass]="{\'spin\': pointsToggle}"></ion-icon>\n			</button>\n			<div class="rules-content" [ngClass]="{\'showing\': pointsToggle,\n			\'hidden\': !pointsToggle}">\n				<p>The points allocated to drivers, chassis and power units after each race weekend is calculated from a combination of results. Drivers points are calculated by their quallifying position, race result and how many positions were gained during the race. Chassis points are calculated by the position each chassis qualified and race result of both chassis. Lastly power unit points are calulated by the best qualifying result of each brand and their race result. </p>\n			</div>\n		</div>\n\n		<!-- misc card -->\n		<div class="rules-card slideExpandUp delay-7">\n			<button class="rules-header" (click)="extraToggle = !extraToggle;">\n				Extra information\n				 <ion-icon class="header-icon" ios="ios-arrow-down-outline" md="ios-arrow-down-outline" [ngClass]="{\'spin\': extraToggle}"></ion-icon>\n			</button>\n			<div class="rules-content" [ngClass]="{\'showing\': extraToggle,\n			\'hidden\': !extraToggle}">\n				<p>Once the Formula one race results have been released and pushed into the app the dollar values and scores of drivers, chassis, power units and player teams are final.</p>\n\n				<p>If during the Formula One race season a driver is unable to drive and is replaced for a race, the replacment driver will race under the usual drivers alias. Any teams effected by this will automatically be awared the results of the replacment driver after the race.</p>\n			</div>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/rules/rules.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
], RulesPage);

var _a, _b;
//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(nav, navParams, authData, formBuilder, loadingCtrl, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    } //end constructor
    SignupPage.prototype.elementChanged = function (input) {
        var field = input.ngControl.name;
        this[field + "Changed"] = true;
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var errorMessage = error.message;
                    var alert = _this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.showLoading();
        }
    };
    SignupPage.prototype.showLoading = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loading = _this.loadingCtrl.create({
                spinner: 'crescent'
            });
            _this.loading.present()
                .then(function () {
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 2000);
                resolve('loaded');
            });
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Create an account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="signup">\n  <div class="container">\n    <ion-row>\n      <img src="assets/img/welcome-logo1.png" class="welcome-logo" />\n    </ion-row>\n    <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n    <ion-card>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)"\n          placeholder="Your email address"\n          [class.invalid]="!signupForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && (emailChanged || submitAttempt)">\n        <p>Please enter a valid email.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input #password formControlName="password" type="password" (change)="elementChanged(password)"\n          placeholder="Your password"\n          [class.invalid]="!signupForm.controls.password.valid && (passwordChanged || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && (passwordChanged || submitAttempt)">\n        <p>Your password needs more than 6 characters.</p>\n      </ion-item>\n\n      <button ion-button block type="submit" class="login-btn">\n        Create an Account\n      </button>\n    </ion-card>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResetPasswordPage = (function () {
    function ResetPasswordPage(nav, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
        });
    } //end constructor
    ResetPasswordPage.prototype.elementChanged = function (input) {
        var field = input.ngControl.name;
        this[field + "Changed"] = true;
    };
    /**
     * If the form is valid it will call the AuthData service to reset the user's password displaying a loading
     *  component while the user waits.
     *
     * If the form is invalid it will just log the form value, feel free to handle that as you like.
     */
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We just sent you a reset link to your email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.nav.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                errorAlert.present();
            });
        }
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-password',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/reset-password/reset-password.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title class="center-text">\n      Reset your password\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="login">\n<div class="container">\n  <ion-row>\n    <img src="assets/img/welcome-logo1.png" class="welcome-logo" />\n  </ion-row>\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n  <ion-card>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)"\n        placeholder="Your email address"\n        [class.invalid]="!resetPasswordForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <button ion-button block type="submit" class="login-btn">\n      Reset your Password\n    </button>\n    </ion-card>\n  </form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/reset-password/reset-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentRoundDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CurrentRoundDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CurrentRoundDataProvider = (function () {
    function CurrentRoundDataProvider(http) {
        this.http = http;
        this.currentRound = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/currentRound/');
        this.gameStateNode = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gameState/');
    }
    //get currentRound val from firebase
    CurrentRoundDataProvider.prototype.getCurrentRound = function () {
        return this.currentRound;
    };
    //get gamestate val from firebase
    CurrentRoundDataProvider.prototype.getGameState = function () {
        return this.gameStateNode;
    };
    CurrentRoundDataProvider.prototype.createRound = function () {
        var _this = this;
        // create currentRound node in firebase
        return this.currentRound.push({
            currentRound: 0,
        }).then(function (newEvent) {
            _this.currentRound.child(newEvent.key).child('id').set(newEvent.key);
        });
    };
    CurrentRoundDataProvider.prototype.changeRound = function (round) {
        var _this = this;
        console.log(round, 'newRound');
        if (this.currentRound) {
            this.currentRound.remove();
        }
        return this.currentRound.push({
            currentRound: round,
        }).then(function (newEvent) {
            _this.currentRound.child(newEvent.key).child('id').set(newEvent.key);
        });
    };
    CurrentRoundDataProvider.prototype.changeState = function (gameState) {
        if (this.gameStateNode) {
            this.gameStateNode.update({
                gameState: gameState
            });
        }
        else {
            return this.gameStateNode.push({
                gameState: gameState
            });
        }
    };
    return CurrentRoundDataProvider;
}());
CurrentRoundDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CurrentRoundDataProvider);

//# sourceMappingURL=current-round-data.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buy-trades/buy-trades.module": [
		481,
		18
	],
	"../pages/chassis-one/chassis-one.module": [
		476,
		17
	],
	"../pages/chassis-stats/chassis-stats.module": [
		475,
		16
	],
	"../pages/chassis-two/chassis-two.module": [
		477,
		15
	],
	"../pages/driver-one/driver-one.module": [
		473,
		14
	],
	"../pages/driver-stats/driver-stats.module": [
		472,
		13
	],
	"../pages/driver-two/driver-two.module": [
		474,
		12
	],
	"../pages/home/home.module": [
		470,
		11
	],
	"../pages/login/login.module": [
		487,
		10
	],
	"../pages/pu-one/pu-one.module": [
		479,
		9
	],
	"../pages/pu-stats/pu-stats.module": [
		478,
		8
	],
	"../pages/pu-two/pu-two.module": [
		480,
		7
	],
	"../pages/race/race.module": [
		471,
		6
	],
	"../pages/ranking/ranking.module": [
		483,
		5
	],
	"../pages/reset-password/reset-password.module": [
		486,
		4
	],
	"../pages/rules/rules.module": [
		484,
		3
	],
	"../pages/signup/signup.module": [
		485,
		2
	],
	"../pages/team/team.module": [
		482,
		1
	],
	"../pages/tour-guide/tour-guide.module": [
		469,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 182;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AdminDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AdminDataProvider = (function () {
    function AdminDataProvider(http) {
        this.http = http;
        // Create a database reference to the driversList node.
        this.driversList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/drivers');
        // Create a database reference to the ChassisList node.
        this.chassisList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/chassis');
        // Create a database reference to the Power Unit list node.
        this.puList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/powerUnits');
        // Create a database reference to the Round data list node.
        this.gameState = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gameState');
    } //end constructor
    AdminDataProvider.prototype.getImage = function (node, name) {
        console.log('node', node);
        console.log('name', name);
        this.storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref(node + name + '.png');
        return this.storageRef;
    };
    AdminDataProvider.prototype.createDriver = function (driverPos, firstName, lastName, abrev, driverValue, image) {
        var _this = this;
        return this.driversList.push({
            position: driverPos,
            firstName: firstName,
            lastName: lastName,
            abrev: abrev,
            driverValue: driverValue,
            driverImage: image,
            driverUpgrade: false
        }).then(function (newEvent) {
            _this.driversList.child(newEvent.key).child('id').set(newEvent.key);
        });
    };
    AdminDataProvider.prototype.createChassis = function (chassisPos, chassisName, chassisValue, image) {
        var _this = this;
        return this.chassisList.push({
            position: chassisPos,
            chassisName: chassisName,
            chassisValue: chassisValue,
            chassisImage: image,
            chassisUpgrade: false
        }).then(function (newEvent) {
            _this.chassisList.child(newEvent.key).child('id').set(newEvent.key);
        });
    };
    AdminDataProvider.prototype.createPU = function (puPosition, puName, puValue, image) {
        var _this = this;
        return this.puList.push({
            position: puPosition,
            puName: puName,
            puValue: puValue,
            puImage: image,
            puUpgrade: false
        }).then(function (newEvent) {
            _this.puList.child(newEvent.key).child('id').set(newEvent.key);
        });
    };
    AdminDataProvider.prototype.createRoundData = function (lockoutRound, lockoutDate, lockoutCountry, lockoutTrack, trackLength, laps, lapTime, raceWinner, trackImage) {
        var _this = this;
        this.roundDataList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/roundData/' + lockoutRound);
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
        }).then(function (newEvent) {
            _this.roundDataList.child(newEvent.key).child('id').set(newEvent.key);
        });
    };
    AdminDataProvider.prototype.getDriversList = function (round) {
        this.dataList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('raceResults/' + round + '/drivers');
        return this.dataList;
    };
    AdminDataProvider.prototype.getChassisList = function (round) {
        this.dataList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('raceResults/' + round + '/chassis');
        return this.dataList;
    };
    AdminDataProvider.prototype.getPUList = function (round) {
        this.dataList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('raceResults/' + round + '/powerUnits');
        return this.dataList;
    };
    AdminDataProvider.prototype.getRoundDataList = function (round) {
        this.dataList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('roundData/' + round);
        return this.dataList;
    };
    AdminDataProvider.prototype.getGameState = function () {
        console.log("current game state", this.gameState);
        return this.gameState;
    };
    //Used to generate round 0 data.
    AdminDataProvider.prototype.getInitialDriversList = function () {
        return this.driversList;
    };
    AdminDataProvider.prototype.getInitialChassisList = function () {
        return this.chassisList;
    };
    AdminDataProvider.prototype.getInitialPUList = function () {
        return this.puList;
    };
    return AdminDataProvider;
}());
AdminDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AdminDataProvider);

//# sourceMappingURL=admin-data.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TeamDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TeamDataProvider = (function () {
    function TeamDataProvider(http) {
        this.http = http;
        console.log('Hello TeamDataProvider Provider');
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.userList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/');
        this.userMoney = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser);
        this.chassisOne = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/chassis');
        this.chassisTwo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/chassis');
        this.driverOne = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/driver');
        this.driverTwo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/driver');
        this.driverOne = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/driver');
        this.driverTwo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/driver');
        this.puOne = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/powerUnit');
        this.puTwo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/powerUnit');
    }
    TeamDataProvider.prototype.getUsersList = function () {
        return this.userList;
    };
    TeamDataProvider.prototype.getTheMoney = function () {
        return this.userMoney;
    };
    TeamDataProvider.prototype.getChassisOne = function () {
        return this.chassisOne;
    };
    TeamDataProvider.prototype.getChassisTwo = function () {
        return this.chassisTwo;
    };
    TeamDataProvider.prototype.getOtherDriverId = function (car, driverId) {
        var driverNode;
        if (car == "one") {
            driverNode = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/driver' + driverId);
        }
        else {
            driverNode = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/driver' + driverId);
        }
        return driverNode;
    };
    //*************//
    //   Chassis   //
    //*************//
    TeamDataProvider.prototype.addChassis = function (chassis, oldChassis, carNum, userPoints) {
        var _this = this;
        var chassisDifference;
        //if first entry
        if (oldChassis.length == 0) {
            chassisDifference = -chassis.chassisValue;
        }
        else {
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
            }).then(function (newEvent) {
                _this.chassisOne.child(newEvent.key).child('id').set(newEvent.key);
            });
        }
        else {
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
            }).then(function (newEvent) {
                _this.chassisTwo.child(newEvent.key).child('id').set(newEvent.key);
            });
        }
    };
    //*************//
    // Power units //
    //*************//
    TeamDataProvider.prototype.getPuOne = function () {
        return this.puOne;
    };
    TeamDataProvider.prototype.getPuTwo = function () {
        return this.puTwo;
    };
    TeamDataProvider.prototype.addPU = function (powerUnit, oldPu, carNum, userPoints) {
        var _this = this;
        var puDifference;
        //if first entry
        if (oldPu.length == 0) {
            puDifference = -powerUnit.puValue;
        }
        else {
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
            }).then(function (newEvent) {
                _this.puOne.child(newEvent.key).child('id').set(newEvent.key);
            });
        }
        else {
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
            }).then(function (newEvent) {
                _this.puTwo.child(newEvent.key).child('id').set(newEvent.key);
            });
        }
    };
    //*************//
    //   Drivers   //
    //*************//
    TeamDataProvider.prototype.getDriverOne = function () {
        return this.driverOne;
    };
    TeamDataProvider.prototype.getDriverTwo = function () {
        return this.driverTwo;
    };
    TeamDataProvider.prototype.addDriver = function (driver, oldDriver, driverNum, userPoints, driverId) {
        var _this = this;
        var driverDifference;
        //if first entry
        if (oldDriver.length == 0) {
            driverDifference = -driver.driverValue;
        }
        else {
            driverDifference = oldDriver[0].driverValue - driver.driverValue;
        }
        /* Get players bank balance and add to driver difference */
        this.bankIt(driverDifference, userPoints);
        var driverRef;
        if (driverNum === 'one') {
            driverRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/driver/' + driverId);
            //delete driver one reference
            if (this.driverOne) {
                this.driverOne.remove();
            }
            // add driver one in users profile
            return this.driverOne.push({
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
            }).then(function (newEvent) {
                _this.driverOne.child(newEvent.key).child('id').set(newEvent.key);
            }).then(function () {
                if (driverId == "") {
                }
                else {
                    driverRef.update({
                        driverStatus: "equal"
                    });
                }
            });
        }
        else {
            driverRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/driver/' + driverId);
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
            }).then(function (newEvent) {
                _this.driverTwo.child(newEvent.key).child('id').set(newEvent.key);
            }).then(function () {
                if (driverId == "") {
                }
                else {
                    driverRef.update({
                        driverStatus: "equal"
                    });
                }
            });
        }
    };
    /* Get players bank balance and add to chassis difference */
    /* Get playeres trade count and -1 */
    TeamDataProvider.prototype.bankIt = function (difference, userPoints) {
        var _this = this;
        var bankAcc;
        var tradeCount;
        console.log("diff, round", difference, userPoints);
        this.userMoney.once('value').then(function (snapshot) {
            bankAcc = parseInt(snapshot.val().money);
            //if user has no points then don't count trade 
            if (userPoints != 0) {
                tradeCount = snapshot.val().trades;
                tradeCount = tradeCount - 1;
            }
            else {
                tradeCount = snapshot.val().trades;
            }
            console.log(bankAcc, "money");
        }).then(function () {
            _this.userMoney.update({
                money: bankAcc + difference,
                trades: tradeCount,
            });
        });
    };
    //adds a trade to the user for a cost
    TeamDataProvider.prototype.addTrade = function (num, tradeCost) {
        var _this = this;
        var bankAcc;
        var tradeCount;
        this.userMoney.once('value').then(function (snapshot) {
            bankAcc = parseInt(snapshot.val().money);
            console.log(bankAcc, "money");
            tradeCount = snapshot.val().trades;
            tradeCount = tradeCount + num;
        }).then(function () {
            _this.userMoney.update({
                money: bankAcc - tradeCost,
                trades: tradeCount,
            });
        });
    };
    //adds a upgrade to the user for a cost
    TeamDataProvider.prototype.addUpgrade = function (cost, node, typeID, bank, component) {
        var _this = this;
        console.log("cost, car, node, typeID", cost, node, typeID);
        var updateUpgrade = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + node + typeID);
        // var userMoney = firebase.database().ref('userProfile/' + this.currentUser);
        if (component == "driver") {
            updateUpgrade.update({
                driverUpgrade: true
            }).then(function () {
                _this.userMoney.update({
                    money: bank - cost
                });
            });
        }
        else if (component == "chassis") {
            updateUpgrade.update({
                chassisUpgrade: true
            }).then(function () {
                _this.userMoney.update({
                    money: bank - cost
                });
            });
        }
        else {
            updateUpgrade.update({
                puUpgrade: true
            }).then(function () {
                _this.userMoney.update({
                    money: bank - cost
                });
            });
        }
        // var driverTwoUpdate = firebase.database().ref('userProfile/' + this.currentUser + node + driverTwoId);
        // this.userMoney.once('value').then(function(snapshot) {
        // 		bankAcc = parseInt(snapshot.val().money);
        // 		console.log(bankAcc, "money");
        // 	tradeCount = snapshot.val().trades;
        // 	tradeCount = tradeCount + 1;
        // }).then(() => {
        // 	this.userMoney.update ({
        //     	money: bankAcc - tradeCost,
        //     	trades: tradeCount,
        //   	});
        //   });
    };
    //updates driver one and two status
    TeamDataProvider.prototype.updateDriverStatus = function (driver, driverOneId, driverTwoId) {
        var driverOneUpdate = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carOne/driver/' + driverOneId);
        var driverTwoUpdate = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('userProfile/' + this.currentUser + '/carTwo/driver/' + driverTwoId);
        if (driver == "driverOne") {
            driverOneUpdate.update({
                driverStatus: "first"
            }).then(function () {
                driverTwoUpdate.update({
                    driverStatus: "second"
                });
            });
        }
        else if (driver == "driverTwo") {
            driverOneUpdate.update({
                driverStatus: "second"
            }).then(function () {
                driverTwoUpdate.update({
                    driverStatus: "first"
                });
            });
        }
        else {
            driverOneUpdate.update({
                driverStatus: "equal"
            }).then(function () {
                driverTwoUpdate.update({
                    driverStatus: "equal"
                });
            });
        }
    };
    return TeamDataProvider;
}());
TeamDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TeamDataProvider);

//# sourceMappingURL=team-data.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reset_password_reset_password__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_race_race__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_team_team__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_rules_rules__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tour_guide_tour_guide__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_buy_trades_buy_trades__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_driver_one_driver_one__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_driver_two_driver_two__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chassis_one_chassis_one__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chassis_two_chassis_two__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pu_one_pu_one__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_pu_two_pu_two__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_driver_stats_driver_stats__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_chassis_stats_chassis_stats__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pu_stats_pu_stats__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_auth_data_auth_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_profile_data_profile_data__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_team_data_team_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_stats_data_stats_data__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Auth pages



//Tab pages






//Sub pages











//Providers






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_race_race__["a" /* RacePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_team_team__["a" /* TeamPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_rules_rules__["a" /* RulesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tour_guide_tour_guide__["a" /* TourGuidePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_buy_trades_buy_trades__["a" /* BuyTradesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_driver_one_driver_one__["a" /* DriverOnePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_driver_two_driver_two__["a" /* DriverTwoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_chassis_one_chassis_one__["a" /* ChassisOnePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_chassis_two_chassis_two__["a" /* ChassisTwoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_pu_one_pu_one__["a" /* PuOnePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_pu_two_pu_two__["a" /* PuTwoPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_driver_stats_driver_stats__["a" /* DriverStatsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_chassis_stats_chassis_stats__["a" /* ChassisStatsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pu_stats_pu_stats__["a" /* PuStatsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true,
            }, {
                links: [
                    { loadChildren: '../pages/tour-guide/tour-guide.module#TourGuidePageModule', name: 'TourGuidePage', segment: 'tour-guide', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/race/race.module#RacePageModule', name: 'RacePage', segment: 'race', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/driver-stats/driver-stats.module#DriverStatsPageModule', name: 'DriverStatsPage', segment: 'driver-stats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/driver-one/driver-one.module#DriverOnePageModule', name: 'DriverOnePage', segment: 'driver-one', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/driver-two/driver-two.module#DriverTwoPageModule', name: 'DriverTwoPage', segment: 'driver-two', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chassis-stats/chassis-stats.module#ChassisStatsPageModule', name: 'ChassisStatsPage', segment: 'chassis-stats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chassis-one/chassis-one.module#ChassisOnePageModule', name: 'ChassisOnePage', segment: 'chassis-one', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chassis-two/chassis-two.module#ChassisTwoPageModule', name: 'ChassisTwoPage', segment: 'chassis-two', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pu-stats/pu-stats.module#PuStatsPageModule', name: 'PuStatsPage', segment: 'pu-stats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pu-one/pu-one.module#PuOnePageModule', name: 'PuOnePage', segment: 'pu-one', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pu-two/pu-two.module#PuTwoPageModule', name: 'PuTwoPage', segment: 'pu-two', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/buy-trades/buy-trades.module#BuyTradesPageModule', name: 'BuyTradesPage', segment: 'buy-trades', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ranking/ranking.module#RankingPageModule', name: 'RankingPage', segment: 'ranking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_race_race__["a" /* RacePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_team_team__["a" /* TeamPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_rules_rules__["a" /* RulesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tour_guide_tour_guide__["a" /* TourGuidePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_buy_trades_buy_trades__["a" /* BuyTradesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_driver_one_driver_one__["a" /* DriverOnePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_driver_two_driver_two__["a" /* DriverTwoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_chassis_one_chassis_one__["a" /* ChassisOnePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_chassis_two_chassis_two__["a" /* ChassisTwoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_pu_one_pu_one__["a" /* PuOnePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_pu_two_pu_two__["a" /* PuTwoPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_driver_stats_driver_stats__["a" /* DriverStatsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_chassis_stats_chassis_stats__["a" /* ChassisStatsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pu_stats_pu_stats__["a" /* PuStatsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_28__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_profile_data_profile_data__["a" /* ProfileDataProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_team_data_team_data__["a" /* TeamDataProvider */],
            __WEBPACK_IMPORTED_MODULE_33__providers_stats_data_stats_data__["a" /* StatsDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 185,
	"./af.js": 185,
	"./ar": 186,
	"./ar-dz": 187,
	"./ar-dz.js": 187,
	"./ar-kw": 188,
	"./ar-kw.js": 188,
	"./ar-ly": 189,
	"./ar-ly.js": 189,
	"./ar-ma": 190,
	"./ar-ma.js": 190,
	"./ar-sa": 191,
	"./ar-sa.js": 191,
	"./ar-tn": 192,
	"./ar-tn.js": 192,
	"./ar.js": 186,
	"./az": 193,
	"./az.js": 193,
	"./be": 194,
	"./be.js": 194,
	"./bg": 195,
	"./bg.js": 195,
	"./bn": 196,
	"./bn.js": 196,
	"./bo": 197,
	"./bo.js": 197,
	"./br": 198,
	"./br.js": 198,
	"./bs": 199,
	"./bs.js": 199,
	"./ca": 200,
	"./ca.js": 200,
	"./cs": 201,
	"./cs.js": 201,
	"./cv": 202,
	"./cv.js": 202,
	"./cy": 203,
	"./cy.js": 203,
	"./da": 204,
	"./da.js": 204,
	"./de": 205,
	"./de-at": 206,
	"./de-at.js": 206,
	"./de-ch": 207,
	"./de-ch.js": 207,
	"./de.js": 205,
	"./dv": 208,
	"./dv.js": 208,
	"./el": 209,
	"./el.js": 209,
	"./en-au": 210,
	"./en-au.js": 210,
	"./en-ca": 211,
	"./en-ca.js": 211,
	"./en-gb": 212,
	"./en-gb.js": 212,
	"./en-ie": 213,
	"./en-ie.js": 213,
	"./en-nz": 214,
	"./en-nz.js": 214,
	"./eo": 215,
	"./eo.js": 215,
	"./es": 216,
	"./es-do": 217,
	"./es-do.js": 217,
	"./es.js": 216,
	"./et": 218,
	"./et.js": 218,
	"./eu": 219,
	"./eu.js": 219,
	"./fa": 220,
	"./fa.js": 220,
	"./fi": 221,
	"./fi.js": 221,
	"./fo": 222,
	"./fo.js": 222,
	"./fr": 223,
	"./fr-ca": 224,
	"./fr-ca.js": 224,
	"./fr-ch": 225,
	"./fr-ch.js": 225,
	"./fr.js": 223,
	"./fy": 226,
	"./fy.js": 226,
	"./gd": 227,
	"./gd.js": 227,
	"./gl": 228,
	"./gl.js": 228,
	"./gom-latn": 229,
	"./gom-latn.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 255,
	"./ms-my": 256,
	"./ms-my.js": 256,
	"./ms.js": 255,
	"./my": 257,
	"./my.js": 257,
	"./nb": 258,
	"./nb.js": 258,
	"./ne": 259,
	"./ne.js": 259,
	"./nl": 260,
	"./nl-be": 261,
	"./nl-be.js": 261,
	"./nl.js": 260,
	"./nn": 262,
	"./nn.js": 262,
	"./pa-in": 263,
	"./pa-in.js": 263,
	"./pl": 264,
	"./pl.js": 264,
	"./pt": 265,
	"./pt-br": 266,
	"./pt-br.js": 266,
	"./pt.js": 265,
	"./ro": 267,
	"./ro.js": 267,
	"./ru": 268,
	"./ru.js": 268,
	"./sd": 269,
	"./sd.js": 269,
	"./se": 270,
	"./se.js": 270,
	"./si": 271,
	"./si.js": 271,
	"./sk": 272,
	"./sk.js": 272,
	"./sl": 273,
	"./sl.js": 273,
	"./sq": 274,
	"./sq.js": 274,
	"./sr": 275,
	"./sr-cyrl": 276,
	"./sr-cyrl.js": 276,
	"./sr.js": 275,
	"./ss": 277,
	"./ss.js": 277,
	"./sv": 278,
	"./sv.js": 278,
	"./sw": 279,
	"./sw.js": 279,
	"./ta": 280,
	"./ta.js": 280,
	"./te": 281,
	"./te.js": 281,
	"./tet": 282,
	"./tet.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./uk": 290,
	"./uk.js": 290,
	"./ur": 291,
	"./ur.js": 291,
	"./uz": 292,
	"./uz-latn": 293,
	"./uz-latn.js": 293,
	"./uz.js": 292,
	"./vi": 294,
	"./vi.js": 294,
	"./x-pseudo": 295,
	"./x-pseudo.js": 295,
	"./yo": 296,
	"./yo.js": 296,
	"./zh-cn": 297,
	"./zh-cn.js": 297,
	"./zh-hk": 298,
	"./zh-hk.js": 298,
	"./zh-tw": 299,
	"./zh-tw.js": 299
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 426;

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        var config = {
            apiKey: "AIzaSyCZ3g2-drs3byijLtUu3y9YP0ZoeFY5_LI",
            authDomain: "fantasyf1-e3378.firebaseapp.com",
            databaseURL: "https://fantasyf1-e3378.firebaseio.com",
            storageBucket: "fantasyf1-e3378.appspot.com",
            messagingSenderId: "796933852913"
        };
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]({});
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
            _this.zone.run(function () {
                if (!user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                    unsubscribe();
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                    // this.rootPage = LoginPage; 
                    unsubscribe();
                }
            });
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthDataProvider = (function () {
    function AuthDataProvider() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth(); // We are creating an auth reference.
        // This declares a database reference for the userProfile/ node.
        this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('userProfile/');
    }
    /**
     * [loginUser We'll take an email and password and log the user into the firebase app]
     * @param  {string} email    [User's email address]
     * @param  {string} password [User's password]
     */
    AuthDataProvider.prototype.loginUser = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    /**
     * [signupUser description]
     * This function will take the user's email and password and create a new account on the Firebase app, once it does
     * it's going to log the user in and create a node on userProfile/uid with the user's email address, you can use
     * that node to store the profile information.
     * @param  {string} email    [User's email address]
     * @param  {string} password [User's password]
     * @param  {number} money [User's money]
     * @param  {number} trades [User's trades]
     * @param  {number} totalPoints [User's points]
     * @param  {number} rank [User's ranking]
     */
    AuthDataProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            _this.userProfile.child(newUser.uid).set({
                email: email,
                money: 90000000,
                trades: 20,
                totalPoints: 0,
                rank: 0,
                rankDiff: 0,
            });
        });
    };
    /**
     * [resetPassword description]
     * This function will take the user's email address and send a password reset link, then Firebase will handle the
     * email reset part, you won't have to do anything else.
     *
     * @param  {string} email    [User's email address]
     */
    AuthDataProvider.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    AuthDataProvider.prototype.getPlayerCount = function () {
        var playerCount = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('userProfile/');
        return playerCount;
    };
    // logoutUser(): any {
    //   this.userProfile.child(this.fireAuth.currentUser.uid).off();
    //   return this.fireAuth.signOut();
    // }
    AuthDataProvider.prototype.logoutUser = function () {
        this.userProfile.child(this.fireAuth.currentUser.uid).off();
        return this.fireAuth.signOut();
    };
    return AuthDataProvider;
}());
AuthDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthDataProvider);

//# sourceMappingURL=auth-data.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_current_round_data_current_round_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_data_profile_data__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__race_race__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_team__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ranking_ranking__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rules_rules__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, storage, adminData, currentRoundData, profileData, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.adminData = adminData;
        this.currentRoundData = currentRoundData;
        this.profileData = profileData;
        this.alertCtrl = alertCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__race_race__["a" /* RacePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__team_team__["a" /* TeamPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_9__ranking_ranking__["a" /* RankingPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_10__rules_rules__["a" /* RulesPage */];
        this.raceTime = 0;
        this.gameState = "lockout";
        this.tabEnabled = false;
        //call to firebase to retrieve currentRound
        this.currentRoundData.getCurrentRound().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
                rawList.push({
                    currentRound: snap.val().currentRound
                });
            });
            _this.currentRound = rawList[0].currentRound;
            console.log('TABS - this round:', _this.currentRound);
            //call to firebase to retrieve lockout list data 
            _this.adminData.getRoundDataList(_this.currentRound).on('value', function (snapshot) {
                var rawList = [];
                snapshot.forEach(function (snap) {
                    rawList.push({
                        id: snap.key,
                        lockoutDate: snap.val().lockoutDate,
                    });
                });
                _this.roundDataList = rawList;
                console.log('lockout', _this.roundDataList[0]);
                var raceDate = _this.roundDataList[0].lockoutDate;
                var timeOfRace = Math.round(new Date(raceDate).getTime() / 1000);
                var timeNow = Math.round(new Date().getTime() / 1000);
                _this.raceTime = _this.getRaceTime(timeOfRace, timeNow);
                //start timer
                _this.initTimer(_this.raceTime);
                // console.log("raceTime tabs", this.raceTime);
            });
            //Save currentRound to localstorage
            _this.storage.set('currentRound', _this.currentRound);
        });
        this.currentRoundData.getGameState().on('value', function (snapshot) {
            console.log('game state-tabs:', snapshot.val().gameState);
            _this.gameState = snapshot.val().gameState;
        });
        this.profileData.getUserProfile().on('value', function (data) {
            _this.userProfile = data.val();
            if (_this.userProfile.teamName) {
                _this.tabEnabled = true;
                _this.hasTeamName = true;
            }
            else {
                _this.hasTeamName = false;
            }
        });
        if (this.hasTeamName == false) {
            this.updateName();
        }
        //get length of user list
        this.profileData.getUsersList().on('value', function (snapshot) {
            var counter = 0;
            console.log("checking:", snapshot.val());
            snapshot.forEach(function (snap) {
                if (snap.val().teamName == undefined) {
                }
                else {
                    counter = counter + 1;
                }
            });
            _this.userCount = counter + 1;
        });
        this.navParams = navParams;
        this.navParams.data = this.userProfile;
    } // end constructor
    TabsPage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Enter your team name",
            inputs: [
                {
                    name: 'teamName',
                    placeholder: 'Your team name',
                    value: ''
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileData.updateRank(_this.userCount);
                        _this.profileData.updateName(data.teamName);
                    }
                }
            ]
        });
        alert.present();
    };
    // function that caluclates time to next lockout
    TabsPage.prototype.getRaceTime = function (timeOfRace, timeNow) {
        var timeToRace = timeOfRace - timeNow;
        return timeToRace;
    };
    // sets timer properties and starts timer
    TabsPage.prototype.initTimer = function (timeInSeconds) {
        if (!timeInSeconds) {
            timeInSeconds = 0;
        }
        console.log("initTimer");
        this.timer = {
            seconds: timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        console.log("Call timerTick");
        this.timerTick();
    };
    TabsPage.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TabsPage.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.hasFinished();
                // this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TabsPage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var days = Math.floor(sec_num / 86400);
        var lessHours = Math.ceil((sec_num - (days * 86400)) / 3600);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var daysString = '';
        var hoursString = '';
        var lessHoursString = '';
        var minutesString = '';
        var secondsString = '';
        daysString = (days < 10) ? "0" + days : days.toString();
        if (days == 0) {
            lessHours = lessHours - 1;
        }
        lessHoursString = (lessHours < 10) ? "0" + lessHours : lessHours.toString();
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return daysString + ':' + lessHoursString + ':' + minutesString + ':' + secondsString + ' ';
    };
    //function sets timer to finished and changes state to lockout
    TabsPage.prototype.hasFinished = function () {
        this.changeState();
        return this.timer.hasFinished;
    };
    //change game state sitewide
    TabsPage.prototype.changeState = function () {
        this.currentRoundData.changeState("lockout");
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TabsPage.prototype, "timeInSeconds", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/tabs/tabs.html"*/'<ion-content padding no-bounce>\n  <ion-row class="text-align-right tab-content">\n    <ion-col col-7 *ngIf="userProfile?.teamName">\n      <div class="team-text">\n        {{userProfile?.teamName}}\n      </div>\n    </ion-col>\n    <ion-col col-5>\n      <div *ngIf="raceTime" class="timer-right">\n        <div *ngIf="gameState !== \'lockout\'">\n          <ion-col class="flex-right" *ngIf="(timer.secondsRemaining && timer.secondsRemaining > 0)">\n            <div class="timer-button timer-text timer-card">\n              {{timer.displayTime}}\n              <div class="time-type" style="font-size: 9px;"> \n                <span>DAYS &nbsp; HRS &nbsp; MINS &nbsp; SECS </span>\n              </div>\n            </div>\n          </ion-col>\n        </div>\n        <div *ngIf="gameState == \'lockout\'" class="lockout">\n          <div class="lockout-text">LOCK OUT</div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n	<ion-tabs>\n    <ion-tab [root]="tab1Root" tappable tabTitle="Home" tabIcon="md-home"></ion-tab>\n    <ion-tab [root]="tab2Root" tappable tabTitle="Race" tabIcon="md-speedometer"></ion-tab>\n	  <ion-tab [root]="tab3Root" tappable tabTitle="Team" tabIcon="md-people"></ion-tab>\n    <ion-tab [root]="tab4Root" tappable [enabled]="tabEnabled" [rootParams]="userProfile" tabTitle="Rank" tabIcon="md-trending-up"></ion-tab>\n	  <ion-tab [root]="tab5Root" tappable tabTitle="Rules" tabIcon="md-book"></ion-tab>\n	</ion-tabs>\n</ion-content>\n\n\n<!-- <ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs> -->\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_admin_data_admin_data__["a" /* AdminDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_current_round_data_current_round_data__["a" /* CurrentRoundDataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_profile_data_profile_data__["a" /* ProfileDataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the StatsDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var StatsDataProvider = (function () {
    function StatsDataProvider(http) {
        this.http = http;
        this.stats = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('raceResults/');
    }
    StatsDataProvider.prototype.getStats = function () {
        return this.stats;
    };
    return StatsDataProvider;
}());
StatsDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], StatsDataProvider);

//# sourceMappingURL=stats-data.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverStatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_data_stats_data__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DriverStatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DriverStatsPage = (function () {
    function DriverStatsPage(navCtrl, navParams, storage, statsData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.statsData = statsData;
        this.driverValueChange = 0;
        console.log("passed driver", this.navParams.data);
        this.selectedDriver = this.navParams.data;
        // call local to get round number
        storage.get('currentRound').then(function (val) {
            _this.round = val;
            console.log('1 - The Current Round is: ', _this.round);
            //call to firebase to retrieve drivers list data 
            _this.statsData.getStats().on('value', function (snapshot) {
                var rawList = [];
                var selectedDriver = [];
                var arrayHolder = [];
                var rootNode = snapshot.val();
                var driversNode = [];
                var i;
                //get race result data and find drivers node.
                for (i = 0; i < rootNode.length; i++) {
                    if (rootNode[i].drivers) {
                        arrayHolder = rootNode[i].drivers;
                        driversNode = Object.keys(arrayHolder).map(function (key) { return arrayHolder[key]; });
                        selectedDriver.push(driversNode);
                    }
                }
                //loop through all drivers for each round and get selected drivers data
                for (i = 0; i < selectedDriver.length; i++) {
                    for (var k = 0; k < selectedDriver[i].length; k++) {
                        if (selectedDriver[i][k].abrev == _this.selectedDriver) {
                            rawList.push(selectedDriver[i][k]);
                        }
                    }
                }
                _this.driverStats = rawList;
                console.log('Driver stats', _this.driverStats);
                _this.driverInfo = _this.driverStats[_this.driverStats.length - 1];
                console.log('Driver stats', _this.driverInfo);
                //pass driver data to chart
                _this.chartData(_this.driverStats);
            });
        });
    } //end constructor
    //add drivers data to chart
    DriverStatsPage.prototype.chartData = function (driverStats) {
        var driverPoints = [];
        var driverValue = [];
        var roundCounter = [];
        var qualRaceCounter = [];
        var qualified = [];
        var finished = [];
        var totalPoints = 0;
        console.log('DriverStatsPage', driverStats);
        for (var i = 0; i < driverStats.length; i++) {
            console.log('round stats', driverStats[i]);
            driverPoints.push(driverStats[i].driverPoints);
            driverValue.push(parseInt(driverStats[i].driverValue));
            roundCounter.push([i]);
            //calc drivers total value change
            this.driverValueChange = driverStats[0].valChange + driverStats[i].valChange;
            //exclude round 0 data
            if (i > 0) {
                //calc average points per race
                totalPoints = totalPoints + driverStats[i].driverPoints;
                console.log('totalPoints', totalPoints);
                //store qualified and finished data for charts
                qualRaceCounter.push([i]);
                qualified.push(driverStats[i].qualified);
                finished.push(driverStats[i].position);
            }
        }
        this.averagePoints = Math.floor(totalPoints / (driverStats.length - 1));
        //Drivers points chart
        this.chartPoints = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvasPoints.nativeElement, {
            type: 'line',
            data: {
                labels: roundCounter,
                datasets: [
                    {
                        label: "Points: ",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(211,20,17,0.5)",
                        borderColor: "rgba(211,20,17,1)",
                        borderCapStyle: 'round',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: "rgba(211,20,17,1)",
                        pointBackgroundColor: "rgba(211,20,17,1)",
                        pointBorderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: driverPoints,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                color: "rgba(0,0,0,1)",
                                zeroLineColor: "rgba(0,0,0,0.4)",
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                color: "rgba(0,0,0,1)",
                                zeroLineColor: "rgba(0,0,0,0.4)",
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                            }
                        }],
                }
            }
        });
        //Drivers value chart
        this.chartValue = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvasValue.nativeElement, {
            type: 'line',
            data: {
                labels: roundCounter,
                datasets: [
                    {
                        label: "Value: ",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(29,155,160,0.4)",
                        borderColor: "rgba(29,155,160,1)",
                        borderCapStyle: 'round',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: "rgba(29,155,160,1)",
                        pointBackgroundColor: "rgba(29,155,160,1)",
                        pointBorderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: driverValue,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                                fontColor: "rgba(255,255,255,0.7)",
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                                callback: function (value, index, values) {
                                    if (parseInt(value) >= 1000) {
                                        value = value / 1000000;
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
                                    }
                                    else {
                                        return '$' + value;
                                    }
                                }
                            }
                        }]
                }
            }
        });
    }; //end chart data
    DriverStatsPage.prototype.ionViewWillEnter = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    DriverStatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverStatsPage');
    };
    return DriverStatsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvasPoints'),
    __metadata("design:type", Object)
], DriverStatsPage.prototype, "lineCanvasPoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvasValue'),
    __metadata("design:type", Object)
], DriverStatsPage.prototype, "lineCanvasValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvasQualRace'),
    __metadata("design:type", Object)
], DriverStatsPage.prototype, "barCanvasQualRace", void 0);
DriverStatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-driver-stats',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/driver-stats/driver-stats.html"*/'<ion-header>\n  <ion-navbar color="primary">\n	  <ion-row *ngIf="driverInfo">\n	    <div class="nav-heading">{{ driverInfo.firstName }} {{ driverInfo.lastName }}</div>\n	  </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <div *ngIf="driverInfo">\n      <ion-row>\n        <ion-col col-3>\n          <div class="horizontal-pad">\n    		    <img class="driver-image" [src]="driverInfo.driverImage" />\n           </div>\n        </ion-col>\n        <ion-col col-6>\n      	  <div class="driver-value">\n            {{ driverInfo.driverValue | currency:\'USD\':true:\'1.0\'}}\n          </div>\n      	  <div class="driver-change">\n            Last value change\n            <span>{{ driverValueChange | currency:\'USD\':true:\'1.0\'}}</span>\n          </div> \n        </ion-col>\n        <ion-col col-3>\n          <div class="driver-points">Average points<span>{{ averagePoints }}</span></div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="chart-card">\n      <ion-row>\n        <div class="header-text slideExpandUp delay-3">Points per round</div>\n      </ion-row>\n      <ion-card>\n        <ion-card-content>\n          <canvas #lineCanvasPoints></canvas>\n        </ion-card-content>\n      </ion-card>\n      <ion-row>\n        <div class="header-text slideExpandUp delay-5">Value per round</div>\n      </ion-row>\n      <ion-card>\n        <ion-card-content>\n          <canvas #lineCanvasValue></canvas>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/driver-stats/driver-stats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_stats_data_stats_data__["a" /* StatsDataProvider */]])
], DriverStatsPage);

//# sourceMappingURL=driver-stats.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChassisStatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_data_stats_data__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChassisStatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChassisStatsPage = (function () {
    function ChassisStatsPage(navCtrl, navParams, storage, statsData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.statsData = statsData;
        this.chassisValueChange = 0;
        console.log("passed driver", this.navParams.data);
        this.selectedChassis = this.navParams.data;
        // call local to get round number
        storage.get('currentRound').then(function (val) {
            _this.round = val;
            console.log('1 - The Current Round is: ', _this.round);
            var i;
            //call to firebase to retrieve drivers list data 
            _this.statsData.getStats().on('value', function (snapshot) {
                var rawList = [];
                var selected = [];
                var arrayHolder = [];
                var rootNode = snapshot.val();
                var chassisNode = [];
                //get race result data and find chassis node.
                for (i = 0; i < rootNode.length; i++) {
                    if (rootNode[i].chassis) {
                        arrayHolder = rootNode[i].chassis;
                        chassisNode = Object.keys(arrayHolder).map(function (key) { return arrayHolder[key]; });
                        selected.push(chassisNode);
                    }
                }
                //loop through all drivers for each round and get selected drivers data
                for (i = 0; i < selected.length; i++) {
                    for (var k = 0; k < selected[i].length; k++) {
                        if (selected[i][k].chassisName == _this.selectedChassis) {
                            rawList.push(selected[i][k]);
                        }
                    }
                }
                _this.chassisStats = rawList;
                _this.chassisInfo = _this.chassisStats[_this.chassisStats.length - 1];
                //pass driver data to chart
                _this.chartData(_this.chassisStats);
            });
        });
    } // end constructor
    //add drivers data to chart
    ChassisStatsPage.prototype.chartData = function (chassisStats) {
        var chassisPoints = [];
        var chassisValue = [];
        var roundCounter = [];
        var totalPoints = 0;
        console.log('chassisStatsPage', chassisStats);
        for (var i = 0; i < chassisStats.length; i++) {
            console.log('round stats', chassisStats[i]);
            chassisPoints.push(chassisStats[i].chassisPoints);
            chassisValue.push(parseInt(chassisStats[i].chassisValue));
            roundCounter.push([i]);
            totalPoints = totalPoints + chassisStats[i].chassisPoints;
            //calc chassis total value change
            this.chassisValueChange = chassisStats[0].valChange + chassisStats[i].valChange;
        }
        //calc average points per race
        this.averagePoints = Math.floor(totalPoints / (chassisStats.length - 1));
        console.log('this.averagePoints', this.averagePoints);
        console.log('driverValueChange', this.chassisValueChange);
        console.log('driverPoints', chassisPoints);
        console.log('driverValue', chassisValue);
        console.log('roundCounter', roundCounter);
        //Drivers points chart
        this.chartPoints = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvasPoints.nativeElement, {
            type: 'line',
            data: {
                labels: roundCounter,
                datasets: [
                    {
                        label: "Constructor points",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(211,20,17,0.5)",
                        borderColor: "rgba(211,20,17,1)",
                        borderCapStyle: 'round',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: "rgba(211,20,17,1)",
                        pointBackgroundColor: "rgba(211,20,17,1)",
                        pointBorderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: chassisPoints,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                color: "rgba(0,0,0,1)",
                                zeroLineColor: "rgba(0,0,0,0.4)",
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                color: "rgba(0,0,0,1)",
                                zeroLineColor: "rgba(0,0,0,0.4)",
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                            }
                        }],
                }
            }
        });
        //Drivers value chart
        this.chartValue = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvasValue.nativeElement, {
            type: 'line',
            data: {
                labels: roundCounter,
                datasets: [
                    {
                        label: "Constructor value",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(29,155,160,0.4)",
                        borderColor: "rgba(29,155,160,1)",
                        borderCapStyle: 'round',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: "rgba(29,155,160,1)",
                        pointBackgroundColor: "rgba(29,155,160,1)",
                        pointBorderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: chassisValue,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                                fontColor: "rgba(255,255,255,0.7)",
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                                callback: function (value, index, values) {
                                    if (parseInt(value) >= 1000) {
                                        value = value / 1000000;
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
                                    }
                                    else {
                                        return '$' + value;
                                    }
                                }
                            }
                        }]
                }
            }
        });
    }; //end chart data
    ChassisStatsPage.prototype.ionViewWillEnter = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    ChassisStatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChassisStatsPage');
    };
    return ChassisStatsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvasPoints'),
    __metadata("design:type", Object)
], ChassisStatsPage.prototype, "lineCanvasPoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvasValue'),
    __metadata("design:type", Object)
], ChassisStatsPage.prototype, "lineCanvasValue", void 0);
ChassisStatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chassis-stats',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/chassis-stats/chassis-stats.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title class="text-center" *ngIf="chassisInfo">{{ chassisInfo.chassisName }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="container">\n		<div *ngIf="chassisInfo">\n		  <ion-row>\n	      <ion-col col-3>\n	        <div class="horizontal-pad">\n			      <img class="chassis-image" [src]="chassisInfo.chassisImage" />\n	        </div>\n	      </ion-col>\n	      <ion-col col-6>\n	  		  <div class="chassis-value"> \n	          {{ chassisInfo.chassisValue | currency:\'USD\':true:\'1.0\'}}\n	        </div>\n	  		  <div class="chassis-change">\n	          Last value change\n	          <span>{{ chassisValueChange | currency:\'USD\':true:\'1.0\'}}</span>\n	        </div>\n	      </ion-col>\n	      <ion-col col-3>\n	        <div class="chassis-points">\n	          Average points\n	          <span>{{ averagePoints }}</span>\n	        </div>\n	      </ion-col>\n	    </ion-row>\n		</div>\n\n		<div class="chart-card">\n		  <ion-row>\n		    <div class="header-text slideExpandUp delay-3">Points per round</div>\n		  </ion-row>\n			<ion-card>\n		    <ion-card-content>\n		      <canvas #lineCanvasPoints></canvas>\n		    </ion-card-content>\n		  </ion-card>\n		  <ion-row>\n		    <div class="header-text slideExpandUp delay-5">Value per round</div>\n		  </ion-row>\n		  <ion-card>\n		    <ion-card-content>\n		      <canvas #lineCanvasValue></canvas>\n		    </ion-card-content>\n		  </ion-card>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/chassis-stats/chassis-stats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_stats_data_stats_data__["a" /* StatsDataProvider */]])
], ChassisStatsPage);

//# sourceMappingURL=chassis-stats.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuStatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_data_stats_data__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PuStatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PuStatsPage = (function () {
    function PuStatsPage(navCtrl, navParams, storage, statsData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.statsData = statsData;
        this.puValueChange = 0;
        this.selectedPu = this.navParams.data;
        // call local to get round number
        storage.get('currentRound').then(function (val) {
            _this.round = val;
            //call to firebase to retrieve drivers list data 
            _this.statsData.getStats().on('value', function (snapshot) {
                var rawList = [];
                var selected = [];
                var arrayHolder = [];
                var rootNode = snapshot.val();
                var puNode = [];
                var i;
                //get race result data and find drivers node.
                for (i = 0; i < rootNode.length; i++) {
                    if (rootNode[i].powerUnits) {
                        arrayHolder = rootNode[i].powerUnits;
                        puNode = Object.keys(arrayHolder).map(function (key) { return arrayHolder[key]; });
                        selected.push(puNode);
                    }
                }
                //loop through all pu's for each round and get selected drivers data
                for (i = 0; i < selected.length; i++) {
                    for (var k = 0; k < selected[i].length; k++) {
                        if (selected[i][k].puName == _this.selectedPu) {
                            rawList.push(selected[i][k]);
                        }
                    }
                }
                _this.puStats = rawList;
                _this.puInfo = _this.puStats[_this.puStats.length - 1];
                //pass pu data to chart
                _this.chartData(_this.puStats);
            });
        });
    } //end constructor
    //add drivers data to chart
    PuStatsPage.prototype.chartData = function (puStats) {
        var puPoints = [];
        var puValue = [];
        var roundCounter = [];
        var totalPoints = 0;
        for (var i = 0; i < puStats.length; i++) {
            puPoints.push(puStats[i].puPoints);
            puValue.push(parseInt(puStats[i].puValue));
            roundCounter.push([i]);
            //calc drivers total value change
            this.puValueChange = puStats[0].valChange + puStats[i].valChange;
            totalPoints = totalPoints + puStats[i].puPoints;
        }
        this.averagePoints = Math.floor(totalPoints / (puStats.length - 1));
        //Drivers points chart
        this.chartPoints = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvasPoints.nativeElement, {
            type: 'line',
            data: {
                labels: roundCounter,
                datasets: [
                    {
                        label: "Power unit points",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(211,20,17,0.5)",
                        borderColor: "rgba(211,20,17,1)",
                        borderCapStyle: 'round',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: "rgba(211,20,17,1)",
                        pointBackgroundColor: "rgba(211,20,17,1)",
                        pointBorderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: puPoints,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                color: "rgba(0,0,0,1)",
                                zeroLineColor: "rgba(0,0,0,0.4)",
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                color: "rgba(0,0,0,1)",
                                zeroLineColor: "rgba(0,0,0,0.4)",
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                            }
                        }],
                }
            }
        });
        //Drivers value chart
        this.chartValue = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvasValue.nativeElement, {
            type: 'line',
            data: {
                labels: roundCounter,
                datasets: [
                    {
                        label: "Power unit value",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(29,155,160,0.4)",
                        borderColor: "rgba(29,155,160,1)",
                        borderCapStyle: 'round',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: "rgba(29,155,160,1)",
                        pointBackgroundColor: "rgba(29,155,160,1)",
                        pointBorderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: puValue,
                        spanGaps: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                                fontColor: "rgba(255,255,255,0.7)",
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                fontColor: "rgba(255,255,255,0.7)",
                                fontFamily: "'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
                                callback: function (value, index, values) {
                                    if (parseInt(value) >= 1000) {
                                        value = value / 1000000;
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
                                    }
                                    else {
                                        return '$' + value;
                                    }
                                }
                            }
                        }]
                }
            }
        });
    }; //end chart data
    PuStatsPage.prototype.ionViewWillEnter = function () {
        var tabHeader = document.querySelectorAll('.tab-content');
        if (tabHeader !== null) {
            tabHeader["0"].style.display = 'none';
        }
    };
    PuStatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PuStatsPage');
    };
    return PuStatsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvasPoints'),
    __metadata("design:type", Object)
], PuStatsPage.prototype, "lineCanvasPoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvasValue'),
    __metadata("design:type", Object)
], PuStatsPage.prototype, "lineCanvasValue", void 0);
PuStatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pu-stats',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/pu-stats/pu-stats.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title class="text-center" *ngIf="puInfo">{{ puInfo.puName }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="stats-page">\n  <div class="container">\n    <div *ngIf="puInfo">\n      <ion-row>\n        <ion-col col-3>\n          <div class="horizontal-pad">\n  		      <img [src]="puInfo.puImage" />\n          </div>\n        </ion-col>\n        <ion-col col-6>\n    		  <div class="pu-value">\n            {{ puInfo.puValue | currency:\'USD\':true:\'1.0\'}}\n          </div>\n          <div class="pu-change">\n            Last value change\n            <span>{{ puValueChange | currency:\'USD\':true:\'1.0\'}}</span>\n          </div> \n  	    </ion-col>\n  	    <ion-col col-3>\n          <div class="pu-points">\n            Average points\n            <span>{{ averagePoints }}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="chart-card">\n      <ion-row>\n        <div class="header-text slideExpandUp delay-3">Points per round</div>\n      </ion-row>\n    	<ion-card>\n        <ion-card-content>\n          <canvas #lineCanvasPoints></canvas>\n        </ion-card-content>\n      </ion-card>\n      <ion-row>\n        <div class="header-text slideExpandUp delay-5">Value per round</div>\n      </ion-row>\n      <ion-card>\n        <ion-card-content>\n          <canvas #lineCanvasValue></canvas>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/pu-stats/pu-stats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_stats_data_stats_data__["a" /* StatsDataProvider */]])
], PuStatsPage);

//# sourceMappingURL=pu-stats.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_email__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.elementChanged = function (input) {
        console.log(input);
        var field = input.ngControl.name;
        this[field + "Changed"] = true;
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            // this.loading = this.loadingCtrl.create({
            //   dismissOnPageChange: true,
            // });
            // this.loading.present();
            this.showLoading();
        }
    };
    LoginPage.prototype.showLoading = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loading = _this.loadingCtrl.create({
                spinner: 'crescent'
            });
            _this.loading.present()
                .then(function () {
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 2000);
                resolve('loaded');
            });
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title class="center-text">\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="login">\n<div class="container">\n  <ion-row>\n    <img src="assets/img/welcome-logo1.png" class="welcome-logo" />\n  </ion-row>\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n    <ion-card>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)"\n          placeholder="Your email address"\n          [class.invalid]="!loginForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  && (emailChanged || submitAttempt)">\n        <p>Please enter a valid email.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input #password formControlName="password" type="password" (change)="elementChanged(password)"\n          placeholder="Your password"\n          [class.invalid]="!loginForm.controls.password.valid && (passwordChanged || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  && (passwordChanged || submitAttempt)">\n        <p>Your password needs more than 6 characters.</p>\n      </ion-item>\n\n      <button ion-button block type="submit" class="login-btn">\n        Login\n      </button>\n    </ion-card>\n  </form>\n \n  <ion-row col-6 class="center small-layout">\n    <button ion-button block class="create-btn"  (click)="goToSignup()">\n      Create account\n    </button>\n  </ion-row>\n\n  <ion-row col-6 class="center less-margin">\n    <button ion-button block outline class="white-button"  (click)="goToResetPassword()">\n      Forgot password?\n    </button>\n  </ion-row>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Sophie/Desktop/grail/oneRacingApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProfileDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProfileDataProvider = (function () {
    function ProfileDataProvider(http) {
        this.http = http;
        //Create the references
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        this.userProfile = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/userProfile');
    }
    ProfileDataProvider.prototype.getUserProfile = function () {
        return this.userProfile.child(this.currentUser.uid);
    };
    ProfileDataProvider.prototype.getUsersList = function () {
        return this.userProfile;
    };
    ProfileDataProvider.prototype.updateRank = function (rank) {
        return this.userProfile.child(this.currentUser.uid).update({
            rank: rank,
        });
    };
    ProfileDataProvider.prototype.updateName = function (teamName) {
        return this.userProfile.child(this.currentUser.uid).update({
            teamName: teamName,
        });
    };
    ProfileDataProvider.prototype.updateDOB = function (birthDate) {
        return this.userProfile.child(this.currentUser.uid).update({
            birthDate: birthDate,
        });
    };
    ProfileDataProvider.prototype.updateEmail = function (newEmail) {
        var _this = this;
        this.currentUser.updateEmail(newEmail).then(function () {
            _this.userProfile.child(_this.currentUser.uid).update({
                email: newEmail
            });
        }, function (error) {
            console.log(error);
        });
    };
    ProfileDataProvider.prototype.updatePassword = function (newPassword) {
        this.currentUser.updatePassword(newPassword).then(function () {
            console.log("Password Changed");
        }, function (error) {
            console.log(error);
        });
    };
    return ProfileDataProvider;
}());
ProfileDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProfileDataProvider);

//# sourceMappingURL=profile-data.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map