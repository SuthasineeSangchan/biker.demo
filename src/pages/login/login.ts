import { Component } from '@angular/core';
import { IonicPage,  Nav, LoadingController, ToastController } from 'ionic-angular';
import { WorkPage } from '../../pages/work/work';
import { HomePage } from '../../pages/home/home';
import { RegisterBikerPage } from '../../pages/register-biker/register-biker';
import { MyApp } from '../../app/app.component';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  page: any
  imageURI: any;
  imageFileName: any;
  constructor( public nav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage() {

    this.nav.setRoot(WorkPage)

  }
  openPage2() {

    this.nav.push(RegisterBikerPage)

  }

}