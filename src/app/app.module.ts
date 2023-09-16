import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CountdownPipe} from "./pipes/count-down.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CountdownPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
