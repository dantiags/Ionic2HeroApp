import { ContactsService } from './../../providers/contacts-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  providers: [ContactsService]  
})
export class ContactsPage {
   public contacts;

  constructor(public navCtrl: NavController, private contactService: ContactsService) {}

  ionViewDidLoad() {
     this.contactService.getContactList().subscribe(
            data => {
                this.contacts = data.json();
            },
            err => console.error(err),
            () => console.log('get Contacts from Clubster completed')
        );
  }

}
