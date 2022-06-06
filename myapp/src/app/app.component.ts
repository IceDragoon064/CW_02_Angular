import { Component } from '@angular/core';
import { MyDataService } from './myDataService';

@Component({
  selector: 'app-root',
  template: '<h1>Hello world! {{title}}</h1><ul><li *ngFor="let name of names">{{name}}</li></ul>',
  styleUrls: ['./app.component.css'],
  providers: [MyDataService]
})
export class AppComponent {
  title = 'This is Angular!';
  names: Array<any>;

  // Create instance of 'MyDataService' right in the constructor
  // header.
  constructor(myDataService: MyDataService) {
     // Use service to call getNames() method.
    this.names = myDataService.getNames();
  }


}
