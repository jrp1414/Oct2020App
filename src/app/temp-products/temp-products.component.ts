import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'temp-products',
  template: `
    <p>
      temp-products works!
    </p>
  `,
  styles: []
  //providers:[ProductService]
})
export class TempProductsComponent  implements OnInit{

  constructor(private ps:ProductService) { }
  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      console.log(data);
    });
  }


}
