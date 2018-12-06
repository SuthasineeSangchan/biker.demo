import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Nav, Platform, NavController, MenuController } from 'ionic-angular';

import { MyApp } from './app.component';
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



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/Lang/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TermPage,
    NewsPage,
    ProfilePage,
    ServicePage,
    SettingPage,
    CreditPage,
    FavoritePage,
    ReportPage,
    WorkPage,
    LoginPage,
    RegisterBikerPage,
    OtpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TermPage,
    NewsPage,
    ProfilePage,
    ServicePage,
    SettingPage,
    CreditPage,
    FavoritePage,
    ReportPage,
    WorkPage,
    LoginPage,
    RegisterBikerPage,
    OtpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
