import { EventEmitter, Injectable } from '@angular/core';
import { Recipient } from './recipient.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  recipients: Recipient[] = [];

  recipientSelectedEvent = new EventEmitter<Recipient>();

  recipientListChangedEvent = new Subject<Recipient[]>();

  maxRecipientId: number;

  constructor(private http: HttpClient) {
    this.fetchRecipients();
    this.maxRecipientId = this.getMaxId();
  }

  getRecipients(): Recipient[] {
    return this.recipients.slice();
  }

  fetchRecipients() {
    this.http.get('http://localhost:3000/recipients')
      .subscribe(
        // success method
        (recipients: Recipient[]) => {
          this.recipients = recipients['recipients'];
          this.maxRecipientId = this.getMaxId();

          this.recipients.sort((a, b) => {
            if (a.name > b.name) { return 1 }
            else if (a.name < b.name) { return -1 }
            else { return 0 }
          })
          this.recipientListChangedEvent.next(this.recipients.slice());
        }, // error method
        (error: any) => {
          console.log(error);
        });
    return;
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
    this.http.delete('http://localhost:3000/recipients/' + recipient.id)
      .subscribe((response: Response) => {
        this.recipients.splice(pos, 1);
        this.recipientListChangedEvent.next(this.recipients.slice());
      })
  }

  addRecipient(recipient: Recipient) {
    if (!recipient) {
      return;
    }
    recipient.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<{ message: string, recipient: Recipient }>
      ('http://localhost:3000/recipients',
        recipient,
        { headers: headers })
      .subscribe((responseData) => {
        this.recipients.push(responseData.recipient);
        this.recipientListChangedEvent.next(this.recipients.slice());
      });
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

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put('http://localhost:3000/recipients/' + originalRecipient.id,
      newRecipient, { headers: headers })
      .subscribe((response: Response) => {
        this.recipients[pos] = newRecipient;
        this.recipientListChangedEvent.next(this.recipients.slice());
      });
  }

  // Returns the id of a recipient when given a name
  getRecipientId(name: string) {
    for (let recipient of this.recipients) {
      if ((recipient.name).toLowerCase() == name.toLowerCase()) {
        return recipient.id;
      }
    }
    return null;
  }
}
