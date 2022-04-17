import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ContactsComponets } from "./contacts.component";

const routes = [
    {
        path: '',
        component: ContactComponent
    },
    {
        path: ':id',
        component: ContactsComponets
    },
];

export default RouterModule.forChild(routes)