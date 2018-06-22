import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-scss/contact.component.scss']
})
export class ContactComponent implements OnInit {
  //inputs and outputs
  @Input() isViewable: boolean;
  @Output() closedWindow = new EventEmitter();

  //form fields
  name: string;
  email: string;
  message: string;

  onFormSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    this.contactsCollection.add(user);
  }

  closeWindow() {
    this.closedWindow.emit();
  }

  constructor(private db: AngularFirestore) { }
  contactsCollection = this.db.collection('Contacts');

  ngOnInit() {
  }

}
