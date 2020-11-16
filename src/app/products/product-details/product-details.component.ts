import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(private ps: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // let id = +this.route.snapshot.params["id"];
    // // let emailId = this.route.snapshot.params["email"];
    // // console.log("Parameter retrieved : " + emailId);
    // this.product = this.ps.getProductDetails(id);


    this.route.params.subscribe((param) => {
      let id = +param["id"];
      console.log("Optional Parameter Getting Logged : " + param["email"]);
      this.product = this.ps.getProductDetails(id);
    });

    // console.log("Email : "+ this.route.snapshot.queryParams["email"]);
    // console.log("Rating : "+ this.route.snapshot.queryParams["rating"]);

    this.route.queryParams.subscribe((qParam) => {
      console.log("Email : " + qParam["email"]);
      console.log("Rating : " + qParam["rating"]);
    });
  }

  LoaFive() {
    // this.router.navigate(["productdetails", "5"], { queryParams: { email: "static@test.com", rating: 9 } });
    this.router.navigate(["/5"], { queryParams: { email: "static@test.com", rating: 9 }, relativeTo:this.route.root });
  }

}
