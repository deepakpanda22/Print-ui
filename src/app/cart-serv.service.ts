import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor() {
    // Initialize the cart with data from local storage, if available.
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItemsSubject.next(JSON.parse(savedCartItems));
      this.updateCartItemCount();
    }
  }

  addToCart(item: any) {
    const currentCartItems = this.cartItemsSubject.value;
    currentCartItems.push(item);
    this.cartItemsSubject.next(currentCartItems);
    this.updateCartItemCount();

    localStorage.setItem('cartItems', JSON.stringify(currentCartItems));
  }
  removeFromCart(item: any) {
    const currentCartItems = this.cartItemsSubject.value;
    const itemIndex = currentCartItems.indexOf(item);
    if (itemIndex !== -1) {
      currentCartItems.splice(itemIndex, 1);
      this.cartItemsSubject.next(currentCartItems);
      this.updateCartItemCount(); // Update the cart item count
  
      localStorage.setItem('cartItems', JSON.stringify(currentCartItems));
    }
  }
  
  

  getCartItems() {
    return this.cartItemsSubject.value;
  }

  private updateCartItemCount() {
    const itemCount = this.cartItemsSubject.value.length;
    this.cartItemCountSubject.next(itemCount);
  }
}
