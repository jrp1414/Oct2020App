import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent {

  constructor() {
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

  }

  filterText: string="";
  Filter(data) {
    this.filterText = data.target.value;
  }

  receiveData(data:string){
    console.log("Hello "+data);
  }

  getClass(prod){
    if (prod.starRating>3) {
      // return "green bold";
      return ["green","bold"];
    }
    return "yellow";
  }

  AddData(){
    this.products.push({
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date(2016, 10, 25),
      "description": {
        "descText": "Leaf rake with 48-inch wooden handle.",
        "emailId": "test@test.com"
      },
      "price": 19.95,
      "starRating": 1,
      "currentAvailibility": true,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    });
  }

  products: any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date(2016, 10, 25),
      "description": {
        "descText": "Leaf rake with 48-inch wooden handle.",
        "emailId": "test@test.com"
      },
      "price": 19.95,
      "starRating": 1,
      "currentAvailibility": true,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": new Date(2017, 9, 20),
      //"description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
      "price": 32.99985,
      "starRating": 2,
      "currentAvailibility": false,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": new Date(2016, 10, 25),
      "description": { "descText": "Curved claw steel hammer", "emailId": "test@test.com" },
      "price": 8.9,
      "starRating": 3,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "15-inch steel blade hand saw", "emailId": "test@test.com" },
      "price": 11.55787878,
      "starRating": 6,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "Standard two-button video game controller", "emailId": "test@test.com" },
      "price": 35.957878,
      "starRating": 5,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];
}



// function MyFunc(condition) {
//   if (condition) {
//     var a;
//     let b;
//   }

//   console.log(a);
//   console.log(b);
// }