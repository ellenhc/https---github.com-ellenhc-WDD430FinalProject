import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-edit',
  templateUrl: './recipient-edit.component.html',
  styleUrls: ['./recipient-edit.component.css']
})
export class RecipientEditComponent implements OnInit {
  originalRecipient: Recipient;
  recipient: Recipient;
  editMode: Boolean = false;

  constructor(private recipientService: RecipientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          if (!params.id) {
            this.editMode = false;
            return;
          }
          this.originalRecipient = this.recipientService.getRecipient(id);

          if (!this.originalRecipient) {
            return;
          }
          this.editMode = true;
          this.recipient = JSON.parse(JSON.stringify(this.originalRecipient));
        });
  }

  onCancel() {
    this.router.navigateByUrl('/recipients');
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newRecipient = new Recipient(value.id, value.name, value.address, value.email, value.imageUrl);
    if (this.editMode) {
      this.recipientService.updateRecipient(this.originalRecipient, newRecipient);
    }
    else {
      this.recipientService.addRecipient(newRecipient);
    }
    this.router.navigateByUrl('/recipients');
  }
}
