import { Component, OnInit } from '@angular/core';
import { Gift } from '../gift.model';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gifts: Gift[] = [];

  constructor(private giftService: GiftService) {
    this.gifts = this.giftService.getGifts();
  }

  ngOnInit() {
    this.gifts = this.giftService.getGifts();

    this.giftService.giftChangedEvent
    .subscribe((giftsArray: Gift[]) => {
      this.gifts = giftsArray;
    });
  }
}
