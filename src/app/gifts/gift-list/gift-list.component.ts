import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gift } from '../gift.model';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  @Output() selectedGiftEvent = new EventEmitter<Gift>();

  gifts: Gift[] = [
    new Gift('1', 'Let It Snow Caramel Collection', '20.99', 'Theo', 'https://theochocolate.com/let-it-snow-caramel-collection/', 'Chris', '../assets/images/let_it_snow_collection.PNG'),
    new Gift('2', 'Create Your Own Custom Confection Box', '25.00', 'Theo', 'https://theochocolate.com/create-your-own-confection-box/', 'Michelle', '../assets/images/create_your_own.PNG'),
    new Gift('3', 'Friends In Jumpers Art Print', '23.00', 'Iamfy', 'https://www.iamfy.co/product/friends-in-jumpers-art-print', 'Rowan', '../assets/images/friends_in_jumpers.jpg'),
    new Gift('4', 'Wavy Hoop Earrings', '19.92', '&other stories', 'https://www.stories.com/en_usd/jewellery/earrings/hoops/product.wavy-hoop-earrings-gold.0783558001.html', 'Lily', '../assets/images/wavy_earrings.PNG'),
    new Gift('5', 'The World of Jane Austen Puzzle', '20.00', 'Uncommon Goods', 'https://www.uncommongoods.com/product/the-world-of-jane-austen-puzzle', 'Chris', '../assets/images/jane_austen_puzzle.jpg'),
    new Gift('6', '80s and 90s Hum the Song Game', '15.00', 'Uncommon Goods', 'https://www.uncommongoods.com/product/80s-and-90s-hum-the-song-game', 'Greg', '../assets/images/80s_90s_game.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedGift(gift: Gift){
    this.selectedGiftEvent.emit(gift);
  }
}
