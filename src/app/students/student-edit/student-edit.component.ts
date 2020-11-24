import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  studentEditForm: FormGroup;
  hobbies:FormArray = new FormArray([
    new FormControl()
  ]);

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control(""),
      LastName: this.fb.control(""),
      EmailId: this.fb.control(""),
      MobileNo: this.fb.control(""),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      }),
      Hobbies: this.hobbies
    });
  }

  OnSubmit() {
    console.log(this.studentEditForm.value);
  }

  AddHobby() {
    this.hobbies.push(new FormControl());
    //(<FormArray>this.studentEditForm.get("Hobbies")).push(this.fb.control(""));
  }

}
