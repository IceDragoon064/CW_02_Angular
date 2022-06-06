import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello world! {{title}}</h1> <app-second></app-second>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Angular!';
}
