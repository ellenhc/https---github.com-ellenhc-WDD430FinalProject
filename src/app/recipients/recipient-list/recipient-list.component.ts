import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipient } from '../recipient.model';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {
  @Output() selectedRecipientEvent = new EventEmitter<Recipient>();
  recipients: Recipient[] = [
    {
      id: '1',
      name: 'Recipient 1 name',
      address: '123 Fake Street',
      email: 'fake@email.com',
      imageUrl: '../../assets/images/favicon-16x16.png'
    },
    {
      id: '2', 
      name: 'Recipient 2 name', 
      address: '456 Sneaky Lane', 
      email: 'fake2@email.com',
      imageUrl: '../../assets/images/favicon-16x16.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipient: Recipient){
    this.selectedRecipientEvent.emit(recipient);
  }
}
