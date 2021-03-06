import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  lang:any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService,) {
  
    this.lang = 'th';
    // this.translate.use('en');
  }


  
  
  switchLanguage() {
    this.translate.use(this.lang);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
