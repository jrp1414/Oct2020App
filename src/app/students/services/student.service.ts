import { EventEmitter, Injectable } from '@angular/core';
import { Address, Student, students } from './stuent.data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = students;
  constructor() { 
    // let student:Student = new Student(1,"Amit","Kapoor","985898588","amit.k@gmail.com","email",
    // new Address(1,"Test","Test","Test","Test"));
    
  }

  public notify:EventEmitter<boolean> = new EventEmitter<boolean>();

  getStudents():Student[]{
    return this.students;
  }

  getStudentDetails(id:number):Student{
    return this.students.find((std)=>std.StudentId==id);
  }

  updateStudent(student:Student):void{
    let tempStudents = students.filter((std)=>std.StudentId!=student.StudentId);
    tempStudents.push(student);
    this.students = tempStudents;

  }


}
