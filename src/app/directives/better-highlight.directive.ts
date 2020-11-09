import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  // @Input() public bgColor:string;
  @Input("better-highlight") public defaultColor:string;
  @Input() public highlightColor:string;
  @HostBinding("style") style; 
  constructor(public el:ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.style = {backgroundColor:this.defaultColor,color:"blue"};
  }

  // @HostListener("click") OnClick(){
  //   alert("Clicked");
  // }

  @HostListener("mouseenter") OnMouseEnter(){
    // this.el.nativeElement.style.backgroundColor= this.highlightColor;
    this.style = {backgroundColor:this.highlightColor,color:"maroon"};
  }

  @HostListener("mouseleave") OnMouseLeave(){
    // this.el.nativeElement.style.backgroundColor= this.defaultColor;
    this.style = {backgroundColor:this.defaultColor,color:"blue"};
  }

}
