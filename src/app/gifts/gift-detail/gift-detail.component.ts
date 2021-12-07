import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gift } from '../gift.model';
import { GiftService } from '../gift.service';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'app-gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift-detail.component.css']
})
export class GiftDetailComponent implements OnInit {
  gift: Gift;
  id: string;
  nativeWindow: any;

  constructor(private giftService: GiftService, private windowRefService: WindRefService, private router: Router, private route: ActivatedRoute) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.gift = this.giftService.getGift(this.id);
      });
  }

  onView() {
    if (this.gift.url) {
      this.nativeWindow.open(this.gift.url);
    }
  }

  onDelete(){
    this.giftService.deleteGift(this.gift);
    this.router.navigateByUrl('/gifts');
  }
}
