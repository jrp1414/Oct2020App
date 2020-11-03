import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

// import * as c from './component.index';
import { AppComponent,StringInterpolationComponent,PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, ProductsComponent, ProductThumbnailComponent } from './component.index';
import { ShortenPipe,FilterPipe } from './pipe.index';
import {BasicHighlightDirective} from "./directive.index";

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
