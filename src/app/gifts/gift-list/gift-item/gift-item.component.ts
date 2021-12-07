import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../gift.model';

@Component({
  selector: 'app-gift-item',
  templateUrl: './gift-item.component.html',
  styleUrls: ['./gift-item.component.css']
})
export class GiftItemComponent implements OnInit {
  @Input() gift: Gift;
  @Input() id: number; //why is this here?

  constructor() { }

  ngOnInit(): void {
  }

}
