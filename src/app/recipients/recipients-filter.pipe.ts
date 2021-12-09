import { Pipe, PipeTransform } from '@angular/core';
import { Recipient } from './recipient.model';

@Pipe({
  name: 'recipientsFilter'
})
export class RecipientsFilterPipe implements PipeTransform {

  transform(recipients: Recipient[], term: string): any {
    let filteredRecipients: Recipient[] = [];
    if (term && term.length > 0) {
      filteredRecipients = recipients.filter(
        (recipient: Recipient) =>
          recipient.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (filteredRecipients.length < 1) {
      return recipients;
    }
    return filteredRecipients;
  }
}
