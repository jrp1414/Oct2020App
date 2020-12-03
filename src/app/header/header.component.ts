import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if(token){
      this.auth.isAuthenticated = true;
    }
  }

  OnSubmit(f:NgForm){
    this.auth.SignIn(f.value).subscribe((response)=>{
      localStorage.setItem("token",response.data);
      this.auth.isAuthenticated = true;
    });
  }

  SignOut(){
    localStorage.removeItem("token");
    this.auth.isAuthenticated = false;
    this.router.navigate(["/home"]);
  }
}
