import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes, Route } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

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
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { StudentGuardService } from './students/services/student-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaxMinDirective } from './directives/max-min.directive';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentsResolver } from './students/services/students.resolver';
import { StudentDetailsResolver } from './students/services/student-details.resolver';


//     /home - Dashaboard
//     /products - ProductsComponent

// const routes:Route[] = [
const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  // { path: "productdetails/:id/:email", component: ProductDetailsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent },
  {
    path: "students", component: StudentsComponent, resolve:{students:StudentsResolver}, children: [
      { path: "new", component: StudentAddComponent },
      { path: ":id", component: StudentDetailsComponent,resolve:{student:StudentDetailsResolver} }, //, canActivate: [StudentGuardService]
      { path: ":id/edit", component: StudentEditComponent }      
    ]
  },
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
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent,
    HeaderComponent,
    DashboardComponent,
    ProductDetailsComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    SignUpComponent,
    MaxMinDirective,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
