import { Component, Input, OnInit } from '@angular/core';
import { Recipient } from '../../recipient.model';

@Component({
  selector: 'app-recipient-item',
  templateUrl: './recipient-item.component.html',
  styleUrls: ['./recipient-item.component.css']
})
export class RecipientItemComponent implements OnInit {
  @Input() recipient: Recipient;

  constructor() { }

  ngOnInit(): void {
  }

}
