import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent {

  imgUrl: string = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
  imgWidth: number = 50;
  imgHeight: number = 50;
  buttonDisabled: boolean = true;

  constructor() {

    setTimeout(() => {
      this.buttonDisabled = false;
      this.imgWidth = 100;
      this.imgHeight = 100;
      this.imgUrl = "https://angular.io/assets/images/logos/angular/angular.png";
    }, 5000);
  }

}

//Arrow function
// () => {}

// function fun1(){

// }