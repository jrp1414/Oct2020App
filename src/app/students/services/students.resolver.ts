import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from './student.service';

@Injectable({ providedIn: 'root' })
export class StudentsResolver implements Resolve<any> {
    constructor(private ss:StudentService,private auth:AuthService) {
        
    }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.ss.getStudents();
    }
}