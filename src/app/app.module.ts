import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/** App Module */
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
