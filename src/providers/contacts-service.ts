import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactsService {

  constructor(public http: Http) {
    
  }

  getContactList() {
        var key:String = "c92a7b49060a9f9640e10134aa7654ea903c2fa3";
        var method:String = "get_contacts";
        let contacts = this.http.get(`http://clubster.aycron.com/api/${method}?auth_token=${key}`);
        return contacts;
    }

}
