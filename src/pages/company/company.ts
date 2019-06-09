import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage implements OnInit {

  public data = this.navParams.get('value');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  modalhide() {
    this.viewCtrl.dismiss();
  }
}
