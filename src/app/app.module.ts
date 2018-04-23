import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GerardModule } from './modules/gerard/gerard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GerardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
