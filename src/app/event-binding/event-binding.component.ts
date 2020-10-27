import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: [
    `.row{
      margin-bottom: 10px;
    }`
  ]
}) 
export class EventBindingComponent {

  constructor() { }

  name:string="Hillary";
  message:string="";
  SomeMethod(){
    this.name = prompt("Enter your name");
  }

  dblClickMethod(){
    this.name = "Double Click occured";
  }

  MessageChanged(data){
    this.message = data.target.value;
  }
}
