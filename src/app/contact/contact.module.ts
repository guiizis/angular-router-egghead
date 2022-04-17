import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import ContactRoutes from "./contact.routes";
import { ContactsComponets } from "./contacts.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule,ContactRoutes, HttpClientModule],
    declarations: [ContactComponent, ContactsComponets]
})
export class ContactModule {}