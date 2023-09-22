import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
