import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { WorkPage } from '../../pages/work/work';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav: Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }



  openPage2() {
    this.nav.setRoot(WorkPage)

  }
}
