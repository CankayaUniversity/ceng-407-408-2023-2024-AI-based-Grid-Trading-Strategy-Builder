import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCandleChartData(): Observable<any[]> {
    return this.http
      .get<any>('assets/response.json')
      .pipe(map((response) => response.data.content));
  }
}
