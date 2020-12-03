import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeValidator } from 'src/app/Validators/range.validation';
import { StudentService } from '../services/student.service';
import { Student } from '../services/stuent.data';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private ss: StudentService) { }
  studentEditForm: FormGroup;
  student: Student;
  ngOnInit(): void {

    this.studentEditForm = this.fb.group({
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

    this.route.params.subscribe((params) => {
      let id = +params["id"];
      this.ss.getStudentDetails(id).subscribe((resp) => {
        this.student = resp;
        this.studentEditForm.patchValue(this.student);
      });

    });
    this.studentEditForm.get("NotificationType").valueChanges.subscribe(value => {
      this.SetNotification(value);
    });
  }

  OnSubmit() {
    this.ss.updateStudent(
      { ...this.studentEditForm.value, StudentId: this.student.StudentId }).subscribe((resp) => {
        this.ss.notify.emit(true);
        this.router.navigate(["/students"]);      
      });
    
  }

  SetNotification(notificationType: string) {
    let mobileNoControl = this.studentEditForm.get("MobileNo");
    if (notificationType == 'mobile') {
      mobileNoControl.setValidators(Validators.required);
    } else {
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

  Cancel(){
    this.router.navigate(["/students"]);
  }

}

// function ValidateAge(control:AbstractControl):ValidationErrors | null {
//   if (control.value >=10 && control.value <=25) {
//     return null;
//   }
//   return {range:true};
// }
