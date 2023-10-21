import { Component, Input, OnInit } from '@angular/core';
import { CartServService } from '../cart-serv.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  // @Input() cartItems: any[] = [];
  cartItems: any[] = []
  item: any
  constructor( private cartServService: CartServService) { }

  ngOnInit(): void {
    this.cartItems = this.cartServService.getCartItems();
  }

  clearAll(item: any) {
    const itemIndex = this.cartItems.indexOf(item);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
      this.cartServService.removeFromCart(item); // Notify the service
  
      if (this.cartItems.length === 0) {
        // Remove 'cartItems' from local storage when the cart is empty
        localStorage.removeItem('cartItems');
        
      }
      window.location.reload(
      )
    }
  }
  
  

}
