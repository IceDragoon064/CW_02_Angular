import { Component } from '@angular/core';
import { FahrenheitPipe } from './app.fahrenheitPipe';

@Component({
  selector: 'app-root',
  template: `<p>{{celsius | fahrenheitPipe }}</p>`,
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  celsius: number;

  constructor(){
    this.celsius = 33;
  }

}
