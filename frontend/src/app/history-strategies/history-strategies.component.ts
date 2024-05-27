import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history-strategies',
  templateUrl: './history-strategies.component.html',
  styleUrls: ['./history-strategies.component.css'],
})
export class HistoryStrategiesComponent implements OnInit {
  strategies = [
    { name: 'Strateji 1', date: '2024-01-01' },
    { name: 'Strateji 2', date: '2024-02-01' },
    { name: 'Strateji 3', date: '2024-03-01' },
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {}
  goBack(): void {
    this.location.back();
  }
}
