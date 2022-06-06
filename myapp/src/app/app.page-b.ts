import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
template: `This is page b. {{retrievedFromStorage}}
<input type="input" (ngModelChange)="mychange($event)" [ngModel]="mymodel">
<input type="input" (ngModelChange)="mychange2($event)" [ngModel]="mymodel2">`
})

export class PageBComponent {
  retrievedFromStorage;
  mymodel;
  mymodel2;
  constructor() {

  }

  mychange(val:string) {
    sessionStorage.setItem("autosave", val);
    console.log(val); // updated value
  }

  mychange2(val2: string) {
    sessionStorage.setItem("autosave2", val2);
    console.log(val2); // updated value
  }
}
