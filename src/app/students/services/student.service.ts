import { Injectable } from '@angular/core';
import { students } from './stuent.data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = students;
  constructor() { }

  getStudents(){
    return this.students;
  }

  getStudentDetails(id:number){
    return this.students.find((std)=>std.StudentId==id);
  }
}
