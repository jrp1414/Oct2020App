import {Component} from "@angular/core";

@Component({
    selector:"app-si",
    templateUrl:"./string-interpolation.component.html"
})
export class StringInterpolationComponent{
    num1=10;
    name="Kofi";
    termsAndConditions= true;

    num2:number = 25;
    name2:string = "Hillary";
    termsAndConditions2:boolean = false;
    someProp:any = true;
    person:Person = new Person();
    //Person person = new Person();

    getData(){
        return "Sample Data returned from class";
    }

    // getData(num1:number,num2:number):number{
    //     return num1+num2;
    // }
    
}

class Person{

}