import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {
  recipients: Recipient[] = [];

  subscription: Subscription;

  constructor(private recipientService: RecipientService) {
    this.recipients = this.recipientService.getRecipients();
  }

  ngOnInit() {
    this.subscription = this.recipientService.recipientListChangedEvent
      .subscribe((recipientsArray: Recipient[]) => {
        this.recipients = recipientsArray;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
