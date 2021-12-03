import { Component, OnInit } from '@angular/core';
import { Gift } from './gift.model';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  selectedGift: Gift;

  constructor() { }

  ngOnInit(): void {
  }

}
