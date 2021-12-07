import { EventEmitter, Injectable } from '@angular/core';
import { Gift } from './gift.model';
import { MOCKGIFTS } from './MOCKGIFTS';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  gifts: Gift[] = [];

  giftSelectedEvent = new EventEmitter<Gift>();

  giftChangedEvent = new EventEmitter<Gift[]>();

  constructor() {
    this.gifts = MOCKGIFTS;
  }

  getGifts(): Gift[] {
    return this.gifts.slice();
  }

  getGift(id: string): Gift {
    for (let gift of this.gifts) {
      if (gift.id == id) {
        return gift;
      }
    }
    return null;
  }

  deleteGift(gift: Gift) {
    if (!gift) {
      return;
    }
    const pos = this.gifts.indexOf(gift);
    if (pos < 0) {
      return;
    }
    this.gifts.splice(pos, 1);
    this.giftChangedEvent.emit(this.gifts.slice());
  }
}
