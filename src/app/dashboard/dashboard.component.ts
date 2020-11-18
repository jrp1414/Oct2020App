import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
//import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit,OnDestroy {

  constructor() { }
  
  counter:number;
  // numsSubscription:Subscription;
  ngOnInit(): void {
    // let numObs = Observable.interval(2000);

    // this.numsSubscription = numObs.subscribe((num)=>{
    //   this.counter = num;
    //   console.log(num);
    // });

    let obs = new Observable((observer:Observer<string>)=>{
      // next function - will be called when the publisher wants to publish data
      // error function - will be called when there is any error occured in the publisher
      // complete function - will be called by the publisher when it wants to stop publishing

      setTimeout(() => {
        observer.next("First Data Emitted");
      }, 1000);

      setTimeout(() => {
        observer.next("Second Data Emitted");
      }, 3000);

      setTimeout(() => {
        observer.next("Third Data Emitted");
      }, 5000);

      // setTimeout(() => {
      //   observer.error("Some Error Occurred");
      // }, 7000);

      setTimeout(() => {
        observer.complete(); 
      }, 7000);

      setTimeout(() => {
        observer.next("Forth Data Emitted");
      }, 8000);
    });

    obs.subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.error(error); 
    },()=>{
      console.info("Subscription Completed");
    });

  }
  ngOnDestroy(): void {
    // this.numsSubscription.unsubscribe();
  }
}

// function Test(){
//   ///lines of code
//   if(true){
//     const aa = 10;
//     aa = 11;
//   }

//   // aa
// }