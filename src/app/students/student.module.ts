
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';
import { AuthGuard } from '../services/auth.guard';
import { OctoberBatchInterceptor } from '../services/http.interceptor';
import { SharedModule } from '../shared/shared.module';
import { StudentDetailsResolver } from './services/student-details.resolver';
import { StudentCanDeactivateGuard } from './services/student-edit.deactivate-guard';
import { StudentsResolver } from './services/students.resolver';
import { StudentAddComponent } from './student-add/student-add.component';

import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
    {
        path: "", component: StudentsComponent, canActivate: [AuthGuard], resolve: { students: StudentsResolver }, children: [
            { path: "new", component: StudentAddComponent },
            { path: ":id", component: StudentDetailsComponent, resolve: { student: StudentDetailsResolver } }, //, canActivate: [StudentGuardService]
            { path: ":id/edit", component: StudentEditComponent, canDeactivate: [StudentCanDeactivateGuard] }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        PrimengModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        StudentsComponent,
        StudentDetailsComponent,
        StudentEditComponent,
        StudentAddComponent
    ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: OctoberBatchInterceptor, multi: true }
    ],
})
export class StudentModule { }
