import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email!: string;
  password!: string;
  userName!:string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = {
      email: this.email,
      password: this.password,
      userName:this.userName
    };
    console.log('Submitted:', formData);

    this.http.post<any>('http://localhost:3000/project/test', formData).subscribe({
      next: (response) => {
        console.log('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}