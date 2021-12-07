import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-detail',
  templateUrl: './recipient-detail.component.html',
  styleUrls: ['./recipient-detail.component.css']
})
export class RecipientDetailComponent implements OnInit {
  recipient: Recipient;
  id: string;
  nativeWindow: any;

  constructor(private recipientService: RecipientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.recipient = this.recipientService.getRecipient(this.id);
      })
  }

  onDelete() {
    this.recipientService.deleteRecipient(this.recipient);
    this.router.navigateByUrl('/recipients');
  }
}
