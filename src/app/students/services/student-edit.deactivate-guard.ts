import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentEditComponent } from '../student-edit/student-edit.component';

@Injectable({providedIn: 'root'})
export class StudentCanDeactivateGuard implements CanDeactivate<StudentEditComponent> {
    canDeactivate(component: StudentEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
        if (component.studentEditForm.dirty) {
            return confirm("You will miss the unsaved data, Want to navigate away?");
        }
        return true;
    }
    
}