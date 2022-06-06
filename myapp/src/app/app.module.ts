import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FahrenheitPipe } from './app.fahrenheitPipe';
import { SecondComponent } from './directives/second/second.component';
import { ThirdComponent } from './directives/third/third.component';
import { PhonePipe } from './app.phonePipe';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    FahrenheitPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
