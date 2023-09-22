import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-key-chain',
  templateUrl: './key-chain.component.html',
  styleUrls: ['./key-chain.component.css']
})
export class KeyChainComponent implements OnInit {
  products: any[] = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/json/product.json').subscribe((data: any)=> {
      this.products = data.products;
      console.log(this.products);
      
    })
  }

}
