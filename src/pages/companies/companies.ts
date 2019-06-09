import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { companies } from '../../data/companies'
import * as lodash from 'lodash';
import { CompanyPage } from '../company/company';

@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage implements OnInit {

  public companiesList: any = lodash.sortBy(companies, [function (o) { return o.name; }]);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
  }

  async company(item) {
    const modal = await this.modalCtrl.create(CompanyPage, { value: item });
    return await modal.present();
  }

  modalhide() {
    this.viewCtrl.dismiss();
  }
}
