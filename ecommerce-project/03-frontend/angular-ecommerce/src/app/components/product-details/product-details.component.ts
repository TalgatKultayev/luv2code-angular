import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../../common/cart-item';
import { Product } from '../../common/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

//get the id param string. convert string to a number using "+" symbol

  product : Product = new Product();

  constructor(private productService : ProductService, 
              private route : ActivatedRoute,
              private cartService : CartService) { 
    
  }

  
  ngOnInit(): void {
      this.handleProductDetails();
  }

  handleProductDetails(){
    //get the "id" param string. convert string to a number using "+" symbol
    const theProductId : number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  AddToCart(){
    console.log(`Adding to cart ${this.product.name}, pricing ${this.product.unitPrice}`);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}
