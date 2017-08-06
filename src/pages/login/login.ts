import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthDataProvider } from '../../providers/auth-data/auth-data';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

import { TabsPage } from '../tabs/tabs';
import { EmailValidator } from '../../validators/email';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(
    public nav: NavController, 
    public authData: AuthDataProvider, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController
  ){

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  elementChanged(input){
  	console.log(input);
    let field = input.ngControl.name;
    this[field + "Changed"] = true;
  }

  loginUser(){
    this.submitAttempt = true;
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
        this.nav.setRoot(TabsPage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
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

  goToSignup(){
    this.nav.push(SignupPage);
  }

  goToResetPassword(){
    this.nav.push(ResetPasswordPage);
  }
}
