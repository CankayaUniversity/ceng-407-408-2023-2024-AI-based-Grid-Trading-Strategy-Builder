// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor() {}

  onSubmit() {
    console.log('User email:', this.user.email);
    // Here you would add your logic to handle the login, like calling a service
  }
}
