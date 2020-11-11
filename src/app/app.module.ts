import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

// import * as c from './component.index';
import { AppComponent,StringInterpolationComponent,PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, ProductsComponent, ProductThumbnailComponent } from './component.index';
import { ShortenPipe,FilterPipe } from './pipe.index';
import {BasicHighlightDirective} from "./directive.index";
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoggerService } from './services/logger.service';
import { TempProductsComponent } from './temp-products/temp-products.component';

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
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
