import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TermPage } from '../pages/term/term';
import { NewsPage } from '../pages/news/news';
import { ProfilePage } from '../pages/profile/profile';
import { ServicePage } from '../pages/service/service';
import { SettingPage } from '../pages/setting/setting';
import { CreditPage } from '../pages/credit/credit';
import { FavoritePage } from '../pages/favorite/favorite';
import { ReportPage } from '../pages/report/report';
import { WorkPage } from '../pages/work/work';
import { LoginPage } from '../pages/login/login';
import { RegisterBikerPage } from '../pages/register-biker/register-biker';
import { OtpPage } from '../pages/otp/otp';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,icon: any}>;
  logout: Array<{title: string, component: any,icon: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'PROFILE', component: ProfilePage ,icon:'md-person'},
      { title: 'WORK', component: WorkPage ,icon:'md-copy'},
      { title: 'NEWS', component: NewsPage ,icon:'md-notifications'},
      { title: 'REPORT', component: ReportPage ,icon:'ios-paper-outline'},
      { title: 'BEECREDIT', component: CreditPage ,icon:'ios-card'},
      { title: 'TERM',component:TermPage,icon:'md-document'},
      { title: 'SETTING', component: SettingPage ,icon:'md-settings'},
    
      // { title: 'FAVORITE', component: LoginPage ,icon:'md-settings'}
    ];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    console.log("test::"+page.title)
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }

  Logout() {

    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
    this.nav.popToRoot();
  }
}
