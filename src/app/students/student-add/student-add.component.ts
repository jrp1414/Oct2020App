import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../services/stuent.data';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styles: []
})
export class StudentAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private ss: StudentService) { }
  studentAddForm: FormGroup;
  student: Student;
  ngOnInit(): void {

    this.studentAddForm = this.fb.group({
      FirstName: this.fb.control("", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      LastName: this.fb.control("", Validators.required),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      MobileNo: this.fb.control(""),
      NotificationType: this.fb.control("email"),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });
    this.studentAddForm.get("NotificationType").valueChanges.subscribe(value => {
      this.SetNotification(value);
    });
  }

  OnSubmit() {
    this.ss.addStudent(
      { ...this.studentAddForm.value, StudentId: 0 }).subscribe((resp) => {
        this.ss.notify.emit(true);
        this.router.navigate(["/students"]);      
      });
    
  }

  SetNotification(notificationType: string) {
    let mobileNoControl = this.studentAddForm.get("MobileNo");
    if (notificationType == 'mobile') {
      mobileNoControl.setValidators(Validators.required);
    } else {
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

}
