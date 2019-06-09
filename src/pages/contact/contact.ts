import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    private app : App,
    public navCtrl: NavController,
    private auth: AuthProvider) {

  }

  logout() {
    this.auth.signOut();
    this.app.getRootNav().setRoot(WelcomePage);
  }

}
