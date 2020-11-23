import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  constructor() { }
  studentEditForm: FormGroup;
  FName: FormControl = new FormControl();
  LName: FormControl = new FormControl();
  EmailId: FormControl = new FormControl();
  MobileNo: FormControl = new FormControl();
  AddLine1: FormControl = new FormControl();
  AddLine2: FormControl = new FormControl();
  AddLine3: FormControl = new FormControl();
  City: FormControl = new FormControl();
  State: FormControl = new FormControl();

  ngOnInit(): void {
    this.studentEditForm = new FormGroup({
      FirstName: this.FName,
      LastName: this.LName,
      EmailId: this.EmailId,
      MobileNo: this.MobileNo,
      AddLine1: this.AddLine1,
      AddLine2: this.AddLine2,
      AddLine3: this.AddLine3,
      City: this.City,
      State: this.State
    });
  }

  OnSubmit(){
    console.log(this.studentEditForm.value);
  }

}
