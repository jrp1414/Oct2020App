import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmit(f){
    this.auth.SignUp(f.value).subscribe((m)=>{
    this.router.navigate(["/home"]);      
    }); 
    // this.auth.SignUp(f.value); 
  }

}
