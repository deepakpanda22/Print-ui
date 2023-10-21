import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartServService } from '../cart-serv.service';

@Component({
  selector: 'app-key-chain',
  templateUrl: './key-chain.component.html',
  styleUrls: ['./key-chain.component.css']
})
export class KeyChainComponent implements OnInit {
  products: any[] = [];
  // cartItems: any[] = [];

  constructor(public http: HttpClient, private cartServService: CartServService) { }

  ngOnInit(): void {
    this.http.get('assets/json/product.json').subscribe((data: any)=> {
      this.products = data.products;
      console.log(this.products);
      
    });
    // this.cartItems = this.cartServService.getCartItems();
  }
  addToCart(product: any){
    // console.log('clicked')
    // this.cartItems.push(product);
    this.cartServService.addToCart(product);
    console.log(product)
  }

}
