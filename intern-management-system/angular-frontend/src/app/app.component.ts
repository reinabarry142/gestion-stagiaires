import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayActive=true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });
  }

  private checkRoute(): void {
    if (this.router.url === '/login') {
      this.displayActive = false;
    } else {
      // Ensure displayActive is true for other routes
      this.displayActive = true;
    }
  }
}
