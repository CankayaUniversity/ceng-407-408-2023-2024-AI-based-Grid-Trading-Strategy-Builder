import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class FormComponent {
  minPrice: number | null = null;
  maxPrice: number | null = null;
  grids: number | null = null;
  profitPerGrid: number | null = null;
  investment: number | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const formData = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      grids: this.grids,
      profitPerGrid: this.profitPerGrid,
      investment: this.investment,
    };

    this.http.post('http://localhost:3000/api/grid', formData).subscribe(response => {
      console.log('Form Data Sent', response);
      this.router.navigate(['/success']);
    }, error => {
      console.error('Error!', error);
    });
  }
}
