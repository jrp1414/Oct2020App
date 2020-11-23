import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms"; 
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
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { StudentGuardService } from './students/services/student-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaxMinDirective } from './directives/max-min.directive';


//     /home - Dashaboard
//     /products - ProductsComponent

// const routes:Route[] = [
const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  // { path: "productdetails/:id/:email", component: ProductDetailsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent },
  {
    path: "students", component: StudentsComponent, children: [
      { path: ":id", component: StudentDetailsComponent, canActivate: [StudentGuardService] },
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
    MaxMinDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
