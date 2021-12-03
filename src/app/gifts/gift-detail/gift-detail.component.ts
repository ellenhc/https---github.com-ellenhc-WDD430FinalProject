import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../gift.model';

@Component({
  selector: 'app-gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift-detail.component.css']
})
export class GiftDetailComponent implements OnInit {
  @Input() gift: Gift;

  constructor() { }

  ngOnInit(): void {
  }

}
