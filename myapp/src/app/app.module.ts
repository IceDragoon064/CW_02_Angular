import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FahrenheitPipe } from './app.fahrenheitPipe';
import { SecondComponent } from './directives/second/second.component';
import { ThirdComponent } from './directives/third/third.component';
import { PhonePipe } from './app.phonePipe';

import { PageDefault } from './app.pagedefault';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing } from './directives/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    FahrenheitPipe,
    PhonePipe,
    PageDefault,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
