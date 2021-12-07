import { EventEmitter, Injectable } from '@angular/core';
import { Recipient } from './recipient.model';
import { MOCKRECIPIENTS } from './MOCKRECIPIENTS';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  recipients: Recipient[] = [];

  recipientSelectedEvent = new EventEmitter<Recipient>();

  recipientChangedEvent = new EventEmitter<Recipient[]>();

  constructor() {
    this.recipients = MOCKRECIPIENTS;
  }

  getRecipients(): Recipient[] {
    return this.recipients.slice();
  }

  getRecipient(id: string): Recipient {
    for (let recipient of this.recipients) {
      if (recipient.id == id) {
        return recipient;
      }
    }
    return null;
  }

  deleteRecipient(recipient: Recipient) {
    if (!recipient) {
      return;
    }
    const pos = this.recipients.indexOf(recipient);
    if (pos < 0) {
      return;
    }
    this.recipients.splice(pos, 1);
    this.recipientChangedEvent.emit(this.recipients.slice());
  }
}
