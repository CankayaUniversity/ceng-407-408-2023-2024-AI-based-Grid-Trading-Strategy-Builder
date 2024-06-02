import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, max } from 'rxjs';

const AUTH_API = 'http://localhost:2626/api/v1/strategyGenerationParams/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule, HttpClientModule]
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  symbols = ['BTCUSDT', 'ETHUSDT'];
  timeIntervals = ['One Week', 'One Month', 'Six Months', 'One Year'];


  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      symbol: [null, Validators.required],
      timeInterval: [null, Validators.required],
      minGrids: [null, Validators.required],
      maxGrids: [null, Validators.required],
      minPrice: [null, Validators.required],
      maxPrice: [null, Validators.required],
      investment: [null, Validators.required]
    });
  }

  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    let formData = <any>{
      currencyPair: { id: 1 },
      maxProfitGrids: 0,
      minProfitGrids: 0
    }
    for (let key in this.form.value) {
      if (key === 'timeInterval') {
        let value = this.form.value[key];
        switch (value) {
          case 'One Month':
            formData['timePeriod'] = 'ONE_MONTH';
            break;
          case 'Six Months':
            formData['timePeriod'] = 'SIX_MONTHS';
            break;
          case 'One Year':
            formData['timePeriod'] = 'ONE_YEAR';
            break;
          default:
            formData['timePeriod'] = 'ONE_WEEK';
            break;
        }
      } else
        formData[key] = this.form.value[key];
    }


    this.saveStrategy(formData).subscribe({
      next: (data) => {
        console.log(data.data.content);
        this.router.navigate(['/dashboard/history-strategies']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  saveStrategy(formData: any): Observable<any> {
    return this.http.post(AUTH_API + 'save', formData, httpOptions);
  }
}
