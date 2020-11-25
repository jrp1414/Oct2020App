import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../services/stuent.data';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:ActivatedRoute,
    private router:Router,private ss:StudentService) { }
  studentEditForm: FormGroup;
  student:Student;
  ngOnInit(): void {

    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control("",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      LastName: this.fb.control("",Validators.required),
      EmailId: this.fb.control("",[Validators.required,Validators.email]),
      MobileNo: this.fb.control(""),
      NotificationType:this.fb.control("email"),
      Address:this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });

    this.route.params.subscribe((params)=>{
      let id = +params["id"];
      this.student = this.ss.getStudentDetails(id);
      this.studentEditForm.patchValue(this.student);
    });
    this.studentEditForm.get("NotificationType").valueChanges.subscribe(value=>{
      this.SetNotification(value);
    });
  }

  OnSubmit() {
    let student = this.studentEditForm.value;
    student.StudentId = this.student.StudentId;
    this.ss.updateStudent(student);
    this.ss.notify.emit(true);
    this.router.navigate(["/students"]);
  }

  SetNotification(notificationType:string){
    let mobileNoControl = this.studentEditForm.get("MobileNo");
    if (notificationType=='mobile') {
      mobileNoControl.setValidators(Validators.required);
    }else{
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

}
