import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexAnnotations,
  PointAnnotations,
} from 'ng-apexcharts';
import * as moment from 'moment';

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
  closeTime: Date;
}

interface OrderData {
  filledAt: Date;
}

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;

  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'candlestick',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1000,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
      },
      height: 450,
      width: 1500,
    },
    xaxis: {
      type: 'category', // X ekseninin türü kategori olmalı
    },
    yaxis: {},
    title: {},
    tooltip: {},
    annotations: { points: [] },
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('assets/mum.json') //http://localhost:2626/api/v1/candle/filter
      .pipe(
        catchError((error) => {
          console.error('JSON dosyası okunurken hata oluştu:', error);
          return [];
        })
      )
      .subscribe((candleData) => {
        const originalCandleData = candleData.data.content.map((item: any) => ({
          ...item,
          openTime: new Date(item.openTime),
          closeTime: new Date(item.closeTime),
        }));

        // Son 50 veriyi göstermek için
        const candleDataLimited = originalCandleData.slice(-150);

        console.log('Mum verisi:', candleDataLimited);

        this.http
          .get<any>('assets/emir.json')//http://localhost:2626/api/v1/candle/filter
          .pipe(
            catchError((error) => {
              console.error('JSON dosyası okunurken hata oluştu:', error);
              return [];
            })
          )
          .subscribe((orderData) => {
            const processedOrderData = orderData.data.map((order: any) => ({
              ...order,
              filledAt: new Date(order.filledAt),
            }));

            console.log('Emir verisi:', processedOrderData);

            const annotations: PointAnnotations[] = [];

            candleDataLimited.forEach((candle: CandleItem, index: number) => {
              const matchingOrders = processedOrderData.filter(
                (order: OrderData) =>
                  this.isInRange(
                    order.filledAt,
                    candle.openTime,
                    candle.closeTime
                  )
              );

              console.log('Eşleşen emirler:', matchingOrders);

              matchingOrders.forEach((order: OrderData, orderIndex: number) => {
                const isUpward = candle.closePrice > candle.openPrice;
                const yPosition = isUpward ? candle.highPrice : candle.lowPrice;
                const yOffset = 20 * (orderIndex + 1); // Y koordinatı için her bir ikonun yukarıya olan kaydırma miktarı
                const y = isUpward ? yPosition + yOffset : yPosition - yOffset;

                annotations.push({
                  x: index, // Mumun indeksi
                  y: y,
                  marker: {
                    size: 1,
                    fillColor: isUpward ? '#00ff00' : '#ff0000',
                    strokeColor: isUpward ? 'green' : 'red',
                    cssClass: isUpward ? 'upward-marker' : 'downward-marker',
                  },
                });
              });
            });

            console.log('Son Anotasyonlar:', annotations);

            this.chartOptions.series = [
              {
                name: 'candle',
                data: candleDataLimited.map(
                  (candle: CandleItem, index: number) => {
                    return {
                      x: index, // Mumun indeksi
                      y: [
                        candle.openPrice,
                        candle.highPrice,
                        candle.lowPrice,
                        candle.closePrice,
                      ],
                    };
                  }
                ),
              },
            ];

            this.chartOptions.annotations = { points: annotations };

            if (this.chart) {
              this.chart.updateOptions(this.chartOptions);
            }
          });
      });
  }

  isInRange(date: Date, start: Date, end: Date): boolean {
    return date >= start && date <= end;
  }
}
