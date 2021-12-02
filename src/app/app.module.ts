import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RecipientListComponent } from './recipients/recipient-list/recipient-list.component';
import { RecipientDetailComponent } from './recipients/recipient-detail/recipient-detail.component';
import { RecipientItemComponent } from './recipients/recipient-list/recipient-item/recipient-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipientsComponent,
    GiftsComponent,
    RecipientListComponent,
    RecipientDetailComponent,
    RecipientItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
