import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gift } from './gift.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  gifts: Gift[] = [];

  giftSelectedEvent = new EventEmitter<Gift>();

  giftListChangedEvent = new Subject<Gift[]>();

  maxGiftId: number;

  constructor(private http: HttpClient) {
    this.fetchGifts();
    this.maxGiftId = this.getMaxId();
  }

  getGifts(): Gift[] {
    return this.gifts.slice();
  }

  fetchGifts() {
    this.http.get('http://localhost:3000/gifts')
      .subscribe(
        // success method
        (gifts: Gift[]) => {
          this.gifts = gifts['gifts'];
          this.maxGiftId = this.getMaxId();

          this.gifts.sort((a, b) => {
            if (a.name > b.name) { return 1 }
            else if (a.name < b.name) { return -1 }
            else { return 0 }
          })
          this.giftListChangedEvent.next(this.gifts.slice());
        }, // error method
        (error: any) => {
          console.log(error);
        });
    return;
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
    this.http.delete('http://localhost:3000/gifts/' + gift.id)
      .subscribe((response: Response) => {
        this.gifts.splice(pos, 1);
        this.giftListChangedEvent.next(this.gifts.slice());
      })
  }

  addGift(gift: Gift) {
    if (!gift) {
      return;
    }

    gift.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<{ message: string, gift: Gift }>
      ('http://localhost:3000/gifts',
        gift,
        { headers: headers })
      .subscribe((responseData) => {
        this.gifts.push(responseData.gift);
        this.giftListChangedEvent.next(this.gifts.slice());
      });
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

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put('http://localhost:3000/gifts/' + originalGift.id,
      newGift, { headers: headers })
      .subscribe((response: Response) => {
        this.gifts[pos] = newGift;
        this.giftListChangedEvent.next(this.gifts.slice());
      });
  }
}
