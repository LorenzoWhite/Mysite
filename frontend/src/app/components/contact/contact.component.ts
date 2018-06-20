import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-scss/contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() isViewable: boolean;
  @Output() closedWindow = new EventEmitter();

  closeWindow() {
    this.closedWindow.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
