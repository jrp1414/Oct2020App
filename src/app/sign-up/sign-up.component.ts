import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
    `
    input.ng-touched.ng-invalid{
      border-color:darkred;
      border-width:3px;
    }
    `
  ]
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(f){
    console.log(f); 
  }

}
