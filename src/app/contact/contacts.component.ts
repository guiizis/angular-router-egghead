import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { map, switchMap } from 'rxjs/operators';

@Component({
  template: `
      contact name <h2>{{(contacts$ | async).name}}</h2>
      contact image <h2>{{(contacts$ | async).image}}</h2>
      <img src=''>
      `
})
export class ContactsComponets {
  contacts$ = new BehaviorSubject({name: 'load...', image:''});

  constructor(private route: ActivatedRoute, http: HttpClient) {
   this.route.params
      .pipe(
        map((p:any) => p.id),
        switchMap(id => http.get('https://swapi.dev/api/people/' + id)),
        map(response => response)
      )
      .subscribe(this.contacts$)
  }
}