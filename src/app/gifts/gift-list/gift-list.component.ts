import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gift } from '../gift.model';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gifts: Gift[] = [];

  subscription: Subscription;

  constructor(private giftService: GiftService) {
    this.gifts = this.giftService.getGifts();
  }

  ngOnInit() {
    this.subscription = this.giftService.giftListChangedEvent
      .subscribe((giftsList: Gift[]) => {
        this.gifts = giftsList;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
