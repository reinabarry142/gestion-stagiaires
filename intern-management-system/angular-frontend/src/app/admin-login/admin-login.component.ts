import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username: string = '';
  password: string = '';
  loginError: string | null = null;

  constructor(private router: Router) {}


  onLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginError = null;
      this.router.navigate(['/home']); // Redirect to the home page upon successful login
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
