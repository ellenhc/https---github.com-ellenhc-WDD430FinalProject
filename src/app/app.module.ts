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
import { RecipientEditComponent } from './recipients/recipient-edit/recipient-edit.component';
import { GiftListComponent } from './gifts/gift-list/gift-list.component';
import { GiftEditComponent } from './gifts/gift-edit/gift-edit.component';
import { GiftDetailComponent } from './gifts/gift-detail/gift-detail.component';
import { GiftItemComponent } from './gifts/gift-list/gift-item/gift-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RecipientsFilterPipe } from './recipients/recipients-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipientsComponent,
    GiftsComponent,
    RecipientListComponent,
    RecipientDetailComponent,
    RecipientItemComponent,
    RecipientEditComponent,
    GiftListComponent,
    GiftEditComponent,
    GiftDetailComponent,
    GiftItemComponent,
    RecipientsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
