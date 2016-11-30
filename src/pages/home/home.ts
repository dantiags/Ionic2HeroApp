import { ContactsPage } from '../contacts/contacts';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  showContactsPage() {
    this.navCtrl.push(ContactsPage);
  }

}
