import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes, Route } from "@angular/router";

// import * as c from './component.index';
import {
  AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, ProductsComponent, ProductThumbnailComponent
} from './component.index';
import { ShortenPipe, FilterPipe } from './pipe.index';
import { BasicHighlightDirective } from "./directive.index";
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoggerService } from './services/logger.service';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


//     /home - Dashaboard
//     /products - ProductsComponent

// const routes:Route[] = [
const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  // { path: "productdetails/:id/:email", component: ProductDetailsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent },
  // { path: "", pathMatch: "full", redirectTo: "home" },
  // { path: "**", redirectTo: "home" }
];

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
    TempProductsComponent,
    HeaderComponent,
    DashboardComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
