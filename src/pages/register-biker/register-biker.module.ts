import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBikerPage } from './register-biker';

@NgModule({
  declarations: [
    RegisterBikerPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBikerPage),
  ],
})
export class RegisterBikerPageModule {}
