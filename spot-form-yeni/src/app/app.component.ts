import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
