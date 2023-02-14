import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { BookitemComponent } from './bookitem/bookitem.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    BookitemComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
