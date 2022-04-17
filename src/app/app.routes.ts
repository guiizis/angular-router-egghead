import { RouterModule } from "@angular/router";

const routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'contacts',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    }
];

export default RouterModule.forRoot(routes);
