import { Component, OnInit } from '@angular/core';

// Define third directive
@Component({
  selector: 'app-third',
  template: '<h3>hello from the third directive</h3>',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
