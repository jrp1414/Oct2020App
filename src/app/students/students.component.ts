import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  studentsList:any[];
  constructor(private ss:StudentService) { }

  ngOnInit(): void {
      this.studentsList = this.ss.getStudents();
  }

}
