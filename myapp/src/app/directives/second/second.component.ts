import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '<h3>This is the second directive! {{firstName}}</h3>',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input()
  firstName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
