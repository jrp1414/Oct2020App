import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';
import { Student } from './stuent.data';

@Injectable({ providedIn: 'root' })
export class StudentDetailsResolver implements Resolve<Student> {
    constructor(private ss:StudentService) {
        
    }
    resolve(route: ActivatedRouteSnapshot): Observable<Student> {
        return this.ss.getStudentDetails(+route.params["id"]);
    }
}