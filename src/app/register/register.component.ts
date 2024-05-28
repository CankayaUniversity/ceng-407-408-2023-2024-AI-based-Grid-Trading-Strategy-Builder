import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user';
import { NotificationService } from '../components/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user : User = new User();
  message !: string;

  constructor(private http: HttpClient,
    private notificationService: NotificationService) {}

  onSubmit() {
    console.log('Submitted:', this.user);
    this.http
      .post<any>('http://localhost:2626/api/v1/user/save', this.user)
      .subscribe({
        next: (response) => {
          this.message = response.message ? response.message : 'Your registration created was succesful'
          console.log('Response:', response);
        },
        error: (error) => {
          this.message = error;
          console.error('Error:', error);
        },
      });
  }
}
