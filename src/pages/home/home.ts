import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController , NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public popCtrl: PopoverController ) {

  }

  ionViewWillEnter()
  {
    let loginPop = this.popCtrl.create(LoginPage, {}, {cssClass: 'login-popover'});
    loginPop.present({});
  }

}
