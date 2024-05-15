import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import moment from 'moment';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexAnnotations,
} from 'ng-apexcharts';
import { catchError } from 'rxjs/operators';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  annotations: ApexAnnotations;
};

interface CandleItem {
  openTime: Date;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  closePrice: number;
}

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  @ViewChild('colorDiv') colorDiv: ElementRef | undefined;

  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'candlestick',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1000, // Animasyonun süresi (1 saniye)
        animateGradually: {
          enabled: true,
          delay: 150,
        },
      },
      height: 450,
      width: 30950,
    },
    xaxis: {},
    yaxis: {},
    title: {},
    tooltip: {},
    annotations: {},
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('assets/response.json')
      .pipe(
        catchError((error) => {
          console.error('Error reading JSON file:', error);
          return [];
        })
      )
      .subscribe((data) => {
        const originalCandleData = data.data.content;
        const numberOfCandlesToShow = 1000;
        const step = Math.ceil(
          originalCandleData.length / numberOfCandlesToShow
        );
        const candleData = originalCandleData.filter(
          (item: any, index: any) => index % step === 0
        );

        const annotations = candleData.map((item: CandleItem) => {
          const isUpward = item.closePrice > item.openPrice;
          const offset = 50;
          const yPosition = isUpward ? item.highPrice : item.lowPrice;
          const yOffset = 10; // Y koordinatı için kaydırma miktarı
          const y = isUpward ? yPosition + yOffset : yPosition - yOffset;
          return {
            x: item.openTime,
            y: y,
            marker: {
              size: 1,
              fillColor: isUpward ? '00ff00' : 'ff0000',
              strokeColor:
                item.closePrice === item.openPrice
                  ? 'white'
                  : isUpward
                  ? 'green'
                  : 'red',
              cssClass:
                item.closePrice === item.openPrice
                  ? 'neutral-marker'
                  : isUpward
                  ? 'upward-marker'
                  : 'downward-marker',
            },
          };
        });

        this.chartOptions.series = [
          {
            name: 'candle',
            data: candleData.map((item: CandleItem) => ({
              x: item.openTime,
              y: [
                item.openPrice,
                item.highPrice,
                item.lowPrice,
                item.closePrice,
              ],
            })),
          },
        ];

        this.chartOptions.annotations = { points: annotations };
      });
  }
}
