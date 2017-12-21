import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthDataProvider } from '../../providers/auth-data/auth-data';
import { EmailValidator } from '../../validators/email';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	public signupForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(
  	public nav: NavController,
  	public navParams: NavParams,
  	public authData: AuthDataProvider,
  	public formBuilder: FormBuilder,
  	public loadingCtrl: LoadingController,
  	public alertCtrl: AlertController
 	){
 		this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  } //end constructor

  elementChanged(input){
    let field = input.ngControl.name;
    this[field + "Changed"] = true;
  }

  signupUser(){
    this.submitAttempt = true;

    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
        this.nav.setRoot(TabsPage);
      }, (error) => {
        this.loading.dismiss().then( () => {
          var errorMessage: string = error.message;
          let alert = this.alertCtrl.create({
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
  }

  showLoading() {
    return new Promise(resolve => {
      this.loading = this.loadingCtrl.create({
        spinner: 'crescent'
      })
      this.loading.present()
        .then(() => {

          setTimeout(() => {
            this.loading.dismiss();
          }, 2000);

          resolve('loaded');
        })
    })
  }

}
