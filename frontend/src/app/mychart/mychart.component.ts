import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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

const AUTH_API = 'http://localhost:2626/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent | undefined;

  id: number = 0;
  orders: any[] = [];
  page: number = 0;
  maxPage: number = 0;
  pageNumbers!: number[];
  simulation: any;
  profit: any;

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
    },
    xaxis: {
      type: 'datetime', // X ekseninin türü kategori olmalı
    },
    yaxis: {},
    title: {},
    tooltip: {},
    annotations: { points: [] },
  };

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    // get query param id
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getMostProfitableSimulation(this.id).subscribe((simulation) => {
      this.simulation = simulation.data;
      console.log('simulation', simulation);

      let investment = this.simulation.strategy.investment;
      let profit = this.simulation.profitLoss;
      let sign = profit > 0 ? '+' : '';

      console.log('investment', investment)
      console.log('profit', profit)
      console.log('sign', sign)

      this.profit = profit + ' (' + sign + (profit / investment * 100).toFixed(2) + '%)';

      this.getCandles({ candleChartId: 1, minOpenTime: simulation.data.startingDate }, this.page).pipe(
        catchError((error) => {
          console.error('JSON dosyası okunurken hata oluştu:', error);
          return [];
        })
      ).subscribe((candleData) => {
        this.handleCandles(candleData, simulation);
      });
    });
  }

  nextPage() {
    if (this.page < this.maxPage - 1) {
      this.page++;
      this.fetchData();
    }
  }

  goToPage(index: number) {
    this.page = index;
    this.fetchData();
  }

  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.fetchData();
    }
  }

  handleCandles(candleData: any, data: any) {
    this.maxPage = candleData.data.totalPages;
    this.pageNumbers = Array(this.maxPage).fill(0).map((x, i) => i + 1);
    const originalCandleData = candleData.data.content.map((item: any) => ({
      ...item,
      openTime: new Date(item.openTime).getTime() + 3 * 60 * 60 * 1000,
      closeTime: new Date(item.closeTime).getTime() + 3 * 60 * 60 * 1000,
    }));

    // Son 50 veriyi göstermek için
    const candleDataLimited = originalCandleData;



    this.getFilledOrdersBySimulationId(data.data.id).pipe(
      catchError((error) => {
        console.error('JSON dosyası okunurken hata oluştu:', error);
        return [];
      })
    ).subscribe((orderData) => {
      this.handleOrders(orderData, candleDataLimited);
      console.log('orders', orderData);
      this.orders = orderData.data;
    });

  }

  handleOrders(orderData: any, candleDataLimited: any) {
    const processedOrderData = orderData.data.map((order: any) => ({
      ...order,
      filledAt: new Date(order.filledAt),
    }));

    //console.log('Emir verisi:', processedOrderData);

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

      //console.log('Eşleşen emirler:', matchingOrders);

      matchingOrders.forEach((order: OrderData, orderIndex: number) => {
        const isUpward = candle.closePrice > candle.openPrice;
        const yPosition = isUpward ? candle.highPrice : candle.lowPrice;
        const yOffset = 20 * (orderIndex + 1); // Y koordinatı için her bir ikonun yukarıya olan kaydırma miktarı
        const y = isUpward ? yPosition + yOffset : yPosition - yOffset;

        annotations.push({
          x: candle.openTime.toString(), // Mumun indeksi
          y: y,
          marker: {
            size: 1,
            fillColor: isUpward ? '#00ff00' : '#ff0000',
            strokeColor: isUpward ? 'red' : 'green',
            cssClass: isUpward ? 'upward-marker' : 'downward-marker',
          },
        });
      });
    });

    //console.log('Son Anotasyonlar:', annotations);

    this.chartOptions.series = [
      {
        name: 'candle',
        data: candleDataLimited.map(
          (candle: CandleItem, index: number) => {
            return {
              x: candle.openTime, // Mumun indeksi
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
  }

  isInRange(date: Date, start: Date, end: Date): boolean {
    return date >= start && date <= end;
  }

  getMostProfitableSimulation(id: any): Observable<any> {
    return this.http.get(AUTH_API + `simulation/mostProfitable?id=${id}`, {});
  }

  getCandles(filterOptions: any, page: number): Observable<any> {
    return this.http.post(AUTH_API + `candle/filter?page=${page}&size=2000`, filterOptions, httpOptions);
  }

  getFilledOrdersBySimulationId(id: any): Observable<any> {
    return this.http.get(AUTH_API + `simulationOrder/findAllFilledBySimulationId?simulationId=${id}`, {});
  }
}
