import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [] 
})
export class ProductThumbnailComponent {

  @Input("pd") product;

  @Output("pe") parentData:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  SendToParent(){
    let name = prompt("Please enter name");
    this.parentData.emit(name);
  }

}


