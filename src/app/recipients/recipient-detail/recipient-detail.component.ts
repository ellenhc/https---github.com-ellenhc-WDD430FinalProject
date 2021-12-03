import { Component, Input, OnInit } from '@angular/core';
import {Recipient} from '../recipient.model';

@Component({
  selector: 'app-recipient-detail',
  templateUrl: './recipient-detail.component.html',
  styleUrls: ['./recipient-detail.component.css']
})
export class RecipientDetailComponent implements OnInit {

  @Input() recipient: Recipient;

  constructor() { }

  ngOnInit(): void {
  }

}
