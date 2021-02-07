import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, Observer } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';
//import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit,OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor() { 
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  
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

      setTimeout(Test, 1000);

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


export function Test(){
        
}