import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styles: [`
  a {
    text-decoration: none;
  }
  a.active{
    font-weight: bold;
  }
`],
  template: `
    <nav>
        <a  *ngFor="let route of routes" 
        [routerLink] = route.url 
        routerLinkActive="active"
        [routerLinkActiveOptions]= "{exact:true}" 
        > {{route.description}}</a>
      </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'basicAngularRoutingCourse';
  routes = [
    {
      url: "",
      description: "Home"
    },
    {
      url: "contacts",
      description: "Contact"
    },
    {
      url: "contacts/1",
      description: "Single Contact"
    }
  ];
}
