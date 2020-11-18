import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {

  student:any;

  constructor(private ss:StudentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.student = this.ss.getStudentDetails(+param.id);
    });
  }

}
