import { Component } from '@angular/core';
import { ConversionCtoF } from './ConversionCtoF';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world! {{title}}</h1><ul>{{f}}</ul>`,
  styleUrls: ['./app.component.css'],
  providers: [ConversionCtoF]
})
export class AppComponent {
  title = 'This is Angular!';

  f: number;
  // Create instance of 'MyDataService' right in the constructor
  // header.
  constructor(conversionCtoF: ConversionCtoF) {
  // Use service to call getNames() method.
  this.f = conversionCtoF.getConversion();
  }
}
