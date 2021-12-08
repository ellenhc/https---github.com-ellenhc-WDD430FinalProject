import { EventEmitter, Injectable } from '@angular/core';
import { Recipient } from './recipient.model';
import { MOCKRECIPIENTS } from './MOCKRECIPIENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  recipients: Recipient[] = [];

  recipientSelectedEvent = new EventEmitter<Recipient>();

  recipientListChangedEvent = new Subject<Recipient[]>();

  maxRecipientId: number;

  constructor() {
    this.recipients = MOCKRECIPIENTS;
    this.maxRecipientId = this.getMaxId();
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

  getMaxId(): number {
    let maxId = 0;
    for (let recipient of this.recipients) {
      let currentId: number = parseInt(recipient.id);

      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
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
    this.recipientListChangedEvent.next(this.recipients.slice());
  }

  addRecipient(newRecipient: Recipient) {
    if (!newRecipient) {
      return;
    }
    this.maxRecipientId++;
    newRecipient.id = this.maxRecipientId.toString();
    this.recipients.push(newRecipient);
    this.recipientListChangedEvent.next(this.recipients.slice());
  }

  updateRecipient(originalRecipient: Recipient, newRecipient: Recipient) {
    if (!originalRecipient || !newRecipient) {
      return;
    }
    const pos = this.recipients.indexOf(originalRecipient);
    if (pos < 0) {
      return;
    }
    newRecipient.id = originalRecipient.id;
    this.recipients[pos] = newRecipient;
    this.recipientListChangedEvent.next(this.recipients.slice());
  }
}
