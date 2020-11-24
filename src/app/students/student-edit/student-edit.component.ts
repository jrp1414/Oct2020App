import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  studentEditForm: FormGroup;
  hobbies:FormArray;
  Addresses:FormArray;

  ngOnInit(): void {
    this.hobbies = this.fb.array([
      this.fb.control("")
    ]);

    this.Addresses = this.fb.array([
      this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    ])

    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control("",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      LastName: this.fb.control("",Validators.required),
      EmailId: this.fb.control("",[Validators.required,Validators.email]),
      MobileNo: this.fb.control(""),
      TermsAndConditions:this.fb.control(true),
      NotificationType:this.fb.control("email"),
      Addresses:this.Addresses,
      Hobbies: this.hobbies
    });

    this.studentEditForm.get("NotificationType").valueChanges.subscribe(value=>{
      this.SetNotification(value);
    });
  }

  OnSubmit() {
    console.log(this.studentEditForm.value);
  }

  AddHobby() {
    // this.hobbies.push(new FormControl());
    (<FormArray>this.studentEditForm.get("Hobbies")).push(this.fb.control(""));
  }

  AddAddress() {
    (<FormArray>this.studentEditForm.get("Addresses")).push(this.fb.group({
      AddLine1: this.fb.control(""),
      AddLine2: this.fb.control(""),
      AddLine3: this.fb.control(""),
      City: this.fb.control(""),
      State: this.fb.control("")
    }));
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
