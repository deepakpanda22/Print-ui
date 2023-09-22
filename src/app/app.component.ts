import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'print-ui';
  isLoginPage: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route's URL to determine if it's the login page
        this.isLoginPage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'login';
      }
    });
  }
}
