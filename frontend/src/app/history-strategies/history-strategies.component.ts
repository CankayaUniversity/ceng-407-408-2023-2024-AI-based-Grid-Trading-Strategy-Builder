import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const AUTH_API = 'http://localhost:2626/api/v1/strategyGenerationParams/';

@Component({
  selector: 'app-history-strategies',
  templateUrl: './history-strategies.component.html',
  styleUrls: ['./history-strategies.component.css'],
})
export class HistoryStrategiesComponent implements OnInit {

  startStrategy(id: any) {
    this.http.get(AUTH_API + `findBestStrategy?id=${id}`, {}).subscribe({
      next: (data) => {
        console.log(data);
        window.location.reload();
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  viewStrategy(id: any) {
    this.router.navigate(['/dashboard/mychart/' + id]);
  }
  strategies = <any>[];

  constructor(private location: Location,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    let token = this.tokenStorage.getToken();
    if (!token) {
      this.router.navigate(['/login']);
    } else {
      console.log('token:', token);
      this.getMyStrategies().subscribe({
        next: (data) => {
          console.log(data.data.content);
          this.strategies = data.data.content;
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });

    }
  }
  goBack(): void {
    this.location.back();
  }

  getMyStrategies(): Observable<any> {
    return this.http.get(AUTH_API + 'findMyStrategies', {});
  }
}
