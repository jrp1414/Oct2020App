import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { authAction } from '../store/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router,private store:Store) { }

  ngOnInit(): void {
    this.store.subscribe((s)=>{
      // console.log(s);
      // console.log(s["authReducer"]);
      this.auth.isAuthenticated = s["authReducer"].isAuthenticated;
      this.auth.token = s["authReducer"].token;
    });
  }

  OnSubmit(f: NgForm) {
    this.auth.SignIn(f.value).subscribe((response) => {
      //localStorage.setItem("token", response.data);
      //this.auth.isAuthenticated = true;
      let auth = {token:response.data,isAuthenticated:true};
      this.store.dispatch(authAction({auth}));
    });
  }

  SignOut() {
    let auth = {token:"",isAuthenticated:false};
      this.store.dispatch(authAction({auth}));
    this.router.navigate(["/home"]);
  }
}
