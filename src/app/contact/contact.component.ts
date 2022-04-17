import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  template:
    `
        <div *ngFor="let contact of contacts$ | async; index as i">
          <a [routerLink]="contact.id">
            {{contact.name}}
          </a>
        </div>
    `
})
export class ContactComponent {
  contacts$;

  constructor(private http: HttpClient) {
   this.contacts$ = this.http.get('https://swapi.dev/api/people')
      .pipe(map((data: any) =>{
        return data.results.map((element,index)=>{
          return {...element, id:index + 1}
        });
      }))
  }
}