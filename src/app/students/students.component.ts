import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  studentsList: any[];
  constructor(private ss: StudentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.studentsList = data.students;
    });
    this.ss.notify.subscribe((flag) => {
      if (flag) {
        this.RefreshStudentsList();
      }
    });
  }

  DeleteStudent(studentId: number, firstName: string, lastName: string) {
    if (confirm("Are you sure to Delete " + firstName + " " + lastName + " ?")) {
      this.ss.deleteStudent(studentId).subscribe((resp) => {
        this.RefreshStudentsList();
      });
    }
  }

  RefreshStudentsList() {
    this.ss.getStudents().subscribe((resp) => {
      this.studentsList = resp;
    });
  }

}
