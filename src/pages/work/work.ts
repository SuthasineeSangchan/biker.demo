import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService,public nav: Nav,) {
    this.translate.setDefaultLang('th');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }



}
