import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the CreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditPage');
  }

}
