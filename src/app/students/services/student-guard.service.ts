import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService implements CanActivate {

  constructor(private ss:StudentService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let students = this.ss.getStudentDetails(+route.params.id);
    if (students) {
      return true;
    }
    alert("Invalid Student Id");
    this.router.navigate(["students"]);
    return false;
  }
}
