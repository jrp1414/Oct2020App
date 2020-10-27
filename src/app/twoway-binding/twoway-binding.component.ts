import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tb',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent {

  constructor() { }


  OneWayMessage:string="";
  MessageChanged(data){
    this.OneWayMessage = data.target.value;
  }
  OneWayTest(){
    this.OneWayMessage = "One Way test";
  }


  TwoWayMessage:string="";
  TwoWayTest(){
    this.TwoWayMessage = "Two Way test";
  }

  TwoWayChange(data){
    this.TwoWayMessage = data;
  }
}
