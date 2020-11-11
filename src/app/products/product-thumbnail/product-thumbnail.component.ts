import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent {


  @Input("pd") product;

  @Output("pe") parentData: EventEmitter<string> = new EventEmitter<string>();

  constructor(private logger: LoggerService,private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      console.log(data);
    });
  }

  SendToParent() {
    let name = prompt("Please enter name");
    this.parentData.emit(name);
  }

  TestLogger() {
    this.logger.log("Hello world");
  }

}


