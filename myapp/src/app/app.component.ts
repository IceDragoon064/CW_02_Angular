import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `{{price | currency:'USD':true}}<br/>`,
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'This is Angular!';

  price: number = 23.23333;

}
