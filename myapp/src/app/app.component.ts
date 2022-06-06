import { Component } from '@angular/core';
import { ConversionCtoF } from './ConversionCtoF';

@Component({
  selector: 'app-root',
  template: `<!-- Sep 17, 2019 -->
{{ mydate | date }}<br>
  <!-- Sep 17, 2019 -->
  <p>{{ mydate | date: 'y MMMM d' }}<br>
  <!-- Sep 17, 2019 -->
  <p>{{ mydate | date: 'mediumDate' }}<br>
  <!-- Tuesday, Sep 17, 2019 -->
  <p>{{ mydate | date: 'fullDate' }}<br>
  <!-- 6:00 PM -->
  <p>{{ mydate | date: 'shortTime' }}<br>
  <!-- TUESDAY, Sep 17, 2019 -->
  <p>{{ mydate | date:'fullDate' | uppercase}}</p>
  <!-- Sep 17, 2019 6:00PM -->
  <p>{{ mydate | date:'MMMM d, y h:mma' }}</p>
  `,
  styleUrls: ['./app.component.css'],
  providers: [ConversionCtoF]
})
export class AppComponent {
  title = 'This is Angular!';

// Months start counting at 0.
mydate = new Date(2019, 8, 17, 18, 0, 30);

}
