import { EventEmitter, Injectable } from '@angular/core';
import { Gift } from './gift.model';
import { MOCKGIFTS } from './MOCKGIFTS';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  gifts: Gift[] = [];

  giftSelectedEvent = new EventEmitter<Gift>();

  constructor() {
    this.gifts = MOCKGIFTS;
  }

  getGifts(): Gift[] {
    return this.gifts.slice();
  }

  getGift(id: string) {
    for (let gift in this.gifts) {
      if (this.gifts[id] == id) {
        return this.gifts[gift];
      }
    }
    return null;
  }
}
