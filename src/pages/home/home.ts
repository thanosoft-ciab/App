import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CompaniesPage } from '../companies/companies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  modalPage: any;
  data = [
    {
      'color': 'secondary',
      'label': 'Banco Vermelho',
      'value': 'R$ 1,50',
      'date': '07/06/2019',
      'icon': 'ios-cash-outline',
    },
    {
      'color': 'dark',
      'label': 'Banco Azul',
      'value': 'R$ 0,50',
      'date': '07/06/2019',
      'icon': 'ios-cash-outline',
    },
  ]
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  modal(Page) {
    this.modalPage = this.modalCtrl.create(Page);
    this.modalPage.present();
  }

  companies() {
    this.modal(CompaniesPage);
  }
}