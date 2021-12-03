import { Component, OnInit } from '@angular/core';
import { Recipient } from './recipient.model';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {

  selectedRecipient: Recipient;

  constructor() { }

  ngOnInit(): void {
  }

}
