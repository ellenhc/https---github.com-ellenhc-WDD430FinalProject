import { EventEmitter, Injectable } from '@angular/core';
import { Recipient } from './recipient.model';
import { MOCKRECIPIENTS } from './MOCKRECIPIENTS';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  recipients: Recipient[] = [];

  recipientSelectedEvent = new EventEmitter<Recipient>();

  constructor() {
    this.recipients = MOCKRECIPIENTS;
  }

  getRecipients(): Recipient[] {
    return this.recipients.slice();
  }

  getRecipient(id: string): Recipient{
    for(let recipient in this.recipients){
      if(this.recipients[id]== id){
        return this.recipients[recipient];
      } // end if
    } // end for
    return null;
  }
}
