import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
template: `This is page b. {{retrievedFromStorage}}
  <input type="input" (ngModelChange) = "mychange($event)" [ngModel]="mymodel">`
})

export class PageBComponent {
  retrievedFromStorage;
  mymodel;
  constructor() {

  }

  mychange(val:string) {
    sessionStorage.setItem("autosave", val);
    console.log(val); // updated value
    let retrievedFromStorage = sessionStorage.getItem('autosave');
}
}
