import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-DOYP6YY3.js";
import "./chunk-LGU3RXIR.js";
import "./chunk-ASLTLD6L.js";

// node_modules/highcharts-angular/fesm2022/highcharts-angular.mjs
var _HighchartsChartComponent = class _HighchartsChartComponent {
  constructor(el, _zone) {
    this.el = el;
    this._zone = _zone;
    this.updateChange = new EventEmitter(true);
    this.chartInstance = new EventEmitter();
  }
  ngOnChanges(changes) {
    const update = changes.update && changes.update.currentValue;
    if (changes.options || update) {
      this.wrappedUpdateOrCreateChart();
      if (update) {
        this.updateChange.emit(false);
      }
    }
  }
  wrappedUpdateOrCreateChart() {
    if (this.runOutsideAngular) {
      this._zone.runOutsideAngular(() => {
        this.updateOrCreateChart();
      });
    } else {
      this.updateOrCreateChart();
    }
  }
  updateOrCreateChart() {
    if (this.chart && this.chart.update) {
      this.chart.update(this.options, true, this.oneToOne || false);
    } else {
      this.chart = this.Highcharts[this.constructorType || "chart"](this.el.nativeElement, this.options, this.callbackFunction || null);
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
      this.chartInstance.emit(this.chart);
    }
  }
};
_HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) {
  return new (t || _HighchartsChartComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_HighchartsChartComponent.ɵcmp = ɵɵdefineComponent({
  type: _HighchartsChartComponent,
  selectors: [["highcharts-chart"]],
  inputs: {
    Highcharts: "Highcharts",
    constructorType: "constructorType",
    callbackFunction: "callbackFunction",
    oneToOne: "oneToOne",
    runOutsideAngular: "runOutsideAngular",
    options: "options",
    update: "update"
  },
  outputs: {
    updateChange: "updateChange",
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function HighchartsChartComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var HighchartsChartComponent = _HighchartsChartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighchartsChartComponent, [{
    type: Component,
    args: [{
      selector: "highcharts-chart",
      template: ""
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    Highcharts: [{
      type: Input
    }],
    constructorType: [{
      type: Input
    }],
    callbackFunction: [{
      type: Input
    }],
    oneToOne: [{
      type: Input
    }],
    runOutsideAngular: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    update: [{
      type: Input
    }],
    updateChange: [{
      type: Output
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var _HighchartsChartModule = class _HighchartsChartModule {
};
_HighchartsChartModule.ɵfac = function HighchartsChartModule_Factory(t) {
  return new (t || _HighchartsChartModule)();
};
_HighchartsChartModule.ɵmod = ɵɵdefineNgModule({
  type: _HighchartsChartModule,
  declarations: [HighchartsChartComponent],
  exports: [HighchartsChartComponent]
});
_HighchartsChartModule.ɵinj = ɵɵdefineInjector({});
var HighchartsChartModule = _HighchartsChartModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighchartsChartModule, [{
    type: NgModule,
    args: [{
      declarations: [HighchartsChartComponent],
      exports: [HighchartsChartComponent]
    }]
  }], null, null);
})();
export {
  HighchartsChartComponent,
  HighchartsChartModule
};
//# sourceMappingURL=highcharts-angular.js.map
