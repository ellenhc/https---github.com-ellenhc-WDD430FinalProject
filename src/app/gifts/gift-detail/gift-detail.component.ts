import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gift } from '../gift.model';
import { Recipient } from 'src/app/recipients/recipient.model';
import { GiftService } from '../gift.service';
import { WindRefService } from 'src/app/wind-ref.service';
import { RecipientService } from 'src/app/recipients/recipient.service';

@Component({
  selector: 'app-gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift-detail.component.css']
})
export class GiftDetailComponent implements OnInit {
  gift: Gift;
  id: string;
  nativeWindow: any;

  // To show recipient's name not object id
  giftRecipient: string;

  constructor(private giftService: GiftService, private windowRefService: WindRefService,
    private router: Router, private route: ActivatedRoute,
    private recipientService: RecipientService) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.gift = this.giftService.getGift(this.id);

        const recipient: Recipient = this.recipientService.getRecipient(this.gift.recipient);
        if (recipient == null || recipient.name == undefined) this.giftRecipient = 'N/A';
        else this.giftRecipient = recipient.name;
      });
  }

  onView() {
    if (this.gift.url) {
      this.nativeWindow.open(this.gift.url);
    }
  }

  onDelete() {
    this.giftService.deleteGift(this.gift);
    this.router.navigateByUrl('/gifts');
  }
}
