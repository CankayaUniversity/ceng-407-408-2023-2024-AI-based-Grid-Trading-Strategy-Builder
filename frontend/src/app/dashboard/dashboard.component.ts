import { Component, AfterViewInit, ElementRef, Renderer2, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/dashboard/home']);
    }
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
