import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Recipient } from './recipient.model';
import { RecipientService } from './recipient.service';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {

  selectedRecipient: Recipient;

  constructor(private recipientService: RecipientService) { }

  ngOnInit(): void {
    this.recipientService.recipientSelectedEvent
      .subscribe((recipient: Recipient) => {
        this.selectedRecipient = recipient;
      })
  }

}
