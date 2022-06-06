import { Component } from '@angular/core';
import { ConversionCtoF } from './ConversionCtoF';

@Component({
  selector: 'app-root',
  template: `<!-- Sep 17, 2019 6:00 PM -->
{{ mydate | date }}<br>
  <!-- Sep 17, 2019 -->
  <p>{{ mydate | date: 'EEEE, MMMM d, y, h:mma' }}</p>
  `,
  styleUrls: ['./app.component.css'],
  providers: [ConversionCtoF]
})
export class AppComponent {
  title = 'This is Angular!';

// Months start counting at 0.
mydate = new Date(2019, 8, 17, 18, 0, 30);

}
