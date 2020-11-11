import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers: [LoggerService,ProductService]
})
export class ProductsComponent {

  constructor(private logger: LoggerService,private ps:ProductService) {
    // for (let i = 0; i < this.products.length; i++) {
    //   console.log(this.products[i]);
    // }

    // for (let key in this.products) {
    //   console.log(this.products[key]);
    // }

    // this.products.forEach((value)=>{
    //   console.log(value);
    // });

    // for (let prod of this.products) {
    //   console.log(prod);
    // }

    //MyFunc(true);
    this.products = this.ps.getProducts();
  }

  products:any[];

  filterText: string = "";
  Filter(data) {
    this.filterText = data.target.value;
  }

  receiveData(data: string) {
    console.log("Hello " + data);
  }

  getClass(prod) {
    if (prod.starRating > 3) {
      // return "green bold";
      return ["green", "bold"];
    }
    return "yellow";
  }

  TestLogger() {
    this.ps.notify.emit("Emitted from Products Component");
    // this.logger.log("Test Message");
  }

  
}



// function MyFunc(condition) {
//   if (condition) {
//     var a;
//     let b;
//   }

//   console.log(a);
//   console.log(b);
// }