import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServService } from '../cart-serv.service';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  cartItemCount$ = this.cartServService.cartItemCount$;

  constructor(private router: Router, private cartServService: CartServService) {}

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
  viewCart(){
    this.router.navigate(['/cart'])
  }

}
