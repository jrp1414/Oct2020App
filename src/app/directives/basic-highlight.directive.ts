import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {
    
    constructor(public el:ElementRef) { // Construtor Paramter Property
     
    }
    ngOnInit(): void {
        this.el.nativeElement.style["background-color"]= "yellow";
        //this.el.nativeElement.style.backgroundColor = "yellow";
    }
}