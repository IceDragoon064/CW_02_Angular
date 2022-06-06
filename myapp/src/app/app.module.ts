import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponent } from './directives/second/second.component';
import { ThirdComponent } from './directives/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
