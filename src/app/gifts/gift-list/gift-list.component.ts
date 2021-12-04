import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gift } from '../gift.model';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gifts: Gift[] = [];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.gifts = this.giftService.getGifts();
  }

  onSelectedGift(gift: Gift){
    this.giftService.giftSelectedEvent.emit(gift);
  }
}
