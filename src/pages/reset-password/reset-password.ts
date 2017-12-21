import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthDataProvider } from '../../providers/auth-data/auth-data';
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
	public resetPasswordForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;

  constructor(
		public nav: NavController, 
    public authData: AuthDataProvider, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController
 	){

 		this.resetPasswordForm = formBuilder.group({
    	email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    })
  } //end constructor

  elementChanged(input){
  	let field = input.ngControl.name;
    this[field + "Changed"] = true;
  }

  /**
   * If the form is valid it will call the AuthData service to reset the user's password displaying a loading
   *  component while the user waits.
   *
   * If the form is invalid it will just log the form value, feel free to handle that as you like.
   */
  resetPassword(){
    this.submitAttempt = true;
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      this.authData.resetPassword(this.resetPasswordForm.value.email).then((user) => {
        let alert = this.alertCtrl.create({
          message: "We just sent you a reset link to your email",
          buttons: [
            {
              text: "Ok",
              role: 'cancel',
              handler: () => {
                this.nav.pop();
              }
            }
          ]
        });
        alert.present();

      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
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
  }
}

