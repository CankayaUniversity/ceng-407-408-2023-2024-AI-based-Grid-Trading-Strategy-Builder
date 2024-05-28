import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import Chart, { TooltipItem } from 'chart.js/auto';
import { DataService } from '../dataservices/data.service';
import 'chartjs-chart-financial';
import 'chartjs-adapter-luxon';

// CandlestickElement ve CandlestickController kontrolörlerini ekleyin
import {
  CandlestickElement,
  CandlestickController,
} from 'chartjs-chart-financial';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
  styleUrls: ['./grafik.component.css'],
  providers: [],
})
export class GrafikComponent implements OnInit {
  chart: any;

  constructor(private http: HttpClient) {
    Chart.register(CandlestickElement, CandlestickController);
  }

  ngOnInit(): void {
    this.http.get('assets/response.json').subscribe((data: any) => {
      const candleData = data.data.content.map((item: any) => ({
        t: item.openTime, // Zaman damgası
        o: item.openPrice, // Açılış fiyatı
        h: item.highPrice, // En yüksek fiyat
        l: item.lowPrice, // En düşük fiyat
        c: item.closePrice, // Kapanış fiyatı
      }));

      // Grafik oluştur
      this.chart = new Chart('canvas', {
        type: 'candlestick',
        data: {
          datasets: [
            {
              label: 'Candlestick Chart',
              data: candleData,
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Mum Grafikleri',
            },
            tooltip: {
              intersect: false,
              mode: 'index',
              callbacks: {
                label: function (tooltipItem: any) {
                  const datasetLabel =
                    this.chart?.config?.data?.datasets?.[
                      tooltipItem.datasetIndex
                    ]?.label || '';
                  const datasetIndex = tooltipItem.datasetIndex;
                  const dataIndex = tooltipItem.dataIndex;
                  const dataset = this.chart.data.datasets[datasetIndex];
                  const data = dataset.data[dataIndex];

                  const open = data.o || '';
                  const high = data.h || '';
                  const low = data.l || '';
                  const close = data.c || '';

                  return (
                    datasetLabel +
                    ': O:' +
                    open +
                    ' H:' +
                    high +
                    ' L:' +
                    low +
                    ' C:' +
                    close
                  );
                },
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                parser: 'YYYY-MM-DD HH:mm:ss',
                unit: 'minute',
                displayFormats: {
                  minute: 'HH:mm:ss',
                },
              },
            },
            y: {
              title: {
                display: true,
                text: 'Price',
              },
            },
          },
        },
      });
    });
  }
}
