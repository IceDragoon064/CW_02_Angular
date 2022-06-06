import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '<h3>This is the second directive!</h3><app-third></app-third>',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
