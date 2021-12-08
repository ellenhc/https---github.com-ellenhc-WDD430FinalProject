import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gift } from '../gift.model';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-gift-edit',
  templateUrl: './gift-edit.component.html',
  styleUrls: ['./gift-edit.component.css']
})
export class GiftEditComponent implements OnInit {
  originalGift: Gift;
  gift: Gift;
  editMode: Boolean = false;

  constructor(private giftService: GiftService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        if (!params.id) {
          this.editMode = false;
          return;
        }
        this.originalGift = this.giftService.getGift(id);

        if (!this.originalGift) {
          return;
        }
        this.editMode = true;
        this.gift = JSON.parse(JSON.stringify(this.originalGift));
      }
    )
  }

  onCancel() {
    this.router.navigateByUrl('/gifts');
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newGift = new Gift(value.id, value.name, value.price, value.retailer, value.url, value.imageUrl, value.recipient);
    if (this.editMode) {
      this.giftService.updateGift(this.originalGift, newGift);
    }
    else {
      this.giftService.addGift(newGift);
    }
    this.router.navigateByUrl('/gifts');
  }
}
