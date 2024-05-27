import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.generateCandlestickChart();
  }

  generateCandlestickChart() {
    Highcharts.stockChart('candlestickChart', {
      rangeSelector: {
        selected: 1,
      },
      title: {
        text: 'AAPL Stock Price',
      },
      series: [
        {
          type: 'candlestick',
          name: 'AAPL Stock Price',
          data: [
            [0, 20, 10, 30, 15],
            [1, 30, 15, 35, 25],
            [2, 25, 20, 30, 22],
            [3, 22, 18, 28, 24],
            [4, 24, 20, 26, 22],
          ],
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    });
  }
}
