import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gift } from './gift.model';
import { MOCKGIFTS } from './MOCKGIFTS';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  gifts: Gift[] = [];

  giftSelectedEvent = new EventEmitter<Gift>();

  giftListChangedEvent = new Subject<Gift[]>();

  maxGiftId: number;

  constructor() {
    this.gifts = MOCKGIFTS;
    this.maxGiftId = this.getMaxId();
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

  getMaxId(): number {
    let maxId = 0;
    for (let gift of this.gifts) {
      let currentId: number = parseInt(gift.id);

      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
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
    this.giftListChangedEvent.next(this.gifts.slice());
  }

  addGift(newGift: Gift) {
    if (!newGift) {
      return;
    }
    // Generates unique value for id of new gift
    this.maxGiftId++;
    newGift.id = this.maxGiftId.toString();
    // New gift pushed onto gifts list
    this.gifts.push(newGift);
    // Copy of gifts list passed w/ next()
    this.giftListChangedEvent.next(this.gifts.slice());
  }

  updateGift(originalGift: Gift, newGift: Gift) {
    if (!originalGift || !newGift) {
      return;
    }
    // Gets index position of original gift in list
    const pos = this.gifts.indexOf(originalGift);
    // If value is negative, originalGift not found
    if (pos < 0) {
      return;
    }
    // If is found, id of new is set to the original's
    newGift.id = originalGift.id;
    // List updated by assigning newGift to the position
    // where the originalGift was found
    this.gifts[pos] = newGift;
    this.giftListChangedEvent.next(this.gifts.slice());
  }
}
