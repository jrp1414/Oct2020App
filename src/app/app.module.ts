import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes, Route } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";

// import * as c from './component.index';
import {
  AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, ProductsComponent, ProductThumbnailComponent
} from './component.index';
import { LoggerService } from './services/logger.service';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthGuard } from './services/auth.guard';
import { PrimengModule } from './primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { OctoberBatchInterceptor } from './services/http.interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { StudentModule } from './students/student.module';


//     /home - Dashaboard
//     /products - ProductsComponent

// const routes:Route[] = [
const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent, canActivate: [AuthGuard] },
  // { path: "productdetails/:id/:email", component: ProductDetailsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: "students", loadChildren: () => import("./students/student.module").then(m => m.StudentModule) },
  { path: "signup", component: SignUpComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "home" }
];

//    /stuents - It will display the list of students
//    /stuents/2 - It will display the details of student id 2


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    TempProductsComponent,
    HeaderComponent,
    DashboardComponent,
    ProductDetailsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    StoreModule.forRoot({ authReducer: authReducer })
  ],
  providers: [
    LoggerService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: OctoberBatchInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
