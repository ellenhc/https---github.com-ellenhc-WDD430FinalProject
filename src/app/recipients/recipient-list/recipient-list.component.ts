import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {
  recipients: Recipient[] = [];

  constructor(private recipientService: RecipientService) {
    this.recipients = this.recipientService.getRecipients();
  }

  ngOnInit() {
    this.recipientService.recipientChangedEvent
      .subscribe((recipientssArray: Recipient[]) => {
        this.recipients = recipientssArray;
      });
  }
}
