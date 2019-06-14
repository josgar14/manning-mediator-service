import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EbayComponent } from './ebay/ebay.component';
import { AmazonComponent } from './amazon/amazon.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StateService } from './state.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EbayComponent,
    AmazonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: EbayComponent },
      { path: 'amazon', component: AmazonComponent }
    ]),
    ReactiveFormsModule
  ],
  providers: [StateService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
