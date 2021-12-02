import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GiftsComponent} from "./gifts/gifts.component";
import {GiftDetailComponent} from "./gifts/gift-detail/gift-detail.component";
import {GiftEditComponent} from "./gifts/gift-edit/gift-edit.component";
import {RecipientsComponent} from "./recipients/recipients.component";
import {RecipientDetailComponent} from "./recipients/recipient-detail/recipient-detail.component";
import {RecipientEditComponent} from "./recipients/recipient-edit/recipient-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/gifts', pathMatch: 'full'},
    {path: 'gifts', component: GiftsComponent, children:[
        {path: 'new', component: GiftEditComponent},
        {path: ':id', component: GiftDetailComponent},
        {path: ':id/edit', component: GiftEditComponent}
    ]},
    {path: 'recipients', component: RecipientsComponent, children:[
        {path: 'new', component: RecipientEditComponent},
        {path: ':id', component: RecipientDetailComponent},
        {path: ':id/edit', component: RecipientEditComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}