import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KieuanhxinhComponent } from './kieuanhxinh/kieuanhxinh.component';
import { PetComponent } from './pet/pet.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    KieuanhxinhComponent,
    PetComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
