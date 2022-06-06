import { Component } from '@angular/core';
import { PhonePipe } from './app.phonePipe';

@Component({
  selector: 'app-root',
  template: `<p>{{number|phonePipe}}</p>`,
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  number = "1234567890"

  constructor(){

  }

}
