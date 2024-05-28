import {
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/highcharts/highstock.js
var require_highstock = __commonJS({
  "node_modules/highcharts/highstock.js"(exports, module) {
    !/**
    * Highstock JS v11.4.0 (2024-03-04)
    *
    * (c) 2009-2024 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    function(t, e) {
      "object" == typeof module && module.exports ? (e.default = e, module.exports = t && t.document ? e(t) : e) : "function" == typeof define && define.amd ? define("highcharts/highstock", function() {
        return e(t);
      }) : (t.Highcharts && t.Highcharts.error(16, true), t.Highcharts = e(t));
    }("undefined" != typeof window ? window : exports, function(t) {
      "use strict";
      var e = {};
      function i(e2, i2, s, o) {
        e2.hasOwnProperty(i2) || (e2[i2] = o.apply(null, s), "function" == typeof CustomEvent && t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: i2, module: e2[i2] } })));
      }
      return i(e, "Core/Globals.js", [], function() {
        var e2, i2;
        return (i2 = e2 || (e2 = {})).SVG_NS = "http://www.w3.org/2000/svg", i2.product = "Highcharts", i2.version = "11.4.0", i2.win = void 0 !== t ? t : {}, i2.doc = i2.win.document, i2.svg = i2.doc && i2.doc.createElementNS && !!i2.doc.createElementNS(i2.SVG_NS, "svg").createSVGRect, i2.userAgent = i2.win.navigator && i2.win.navigator.userAgent || "", i2.isChrome = -1 !== i2.userAgent.indexOf("Chrome"), i2.isFirefox = -1 !== i2.userAgent.indexOf("Firefox"), i2.isMS = /(edge|msie|trident)/i.test(i2.userAgent) && !i2.win.opera, i2.isSafari = !i2.isChrome && -1 !== i2.userAgent.indexOf("Safari"), i2.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(i2.userAgent), i2.isWebKit = -1 !== i2.userAgent.indexOf("AppleWebKit"), i2.deg2rad = 2 * Math.PI / 360, i2.hasBidiBug = i2.isFirefox && 4 > parseInt(i2.userAgent.split("Firefox/")[1], 10), i2.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], i2.noop = function() {
        }, i2.supportsPassiveEvents = function() {
          let t2 = false;
          if (!i2.isMS) {
            let e3 = Object.defineProperty({}, "passive", { get: function() {
              t2 = true;
            } });
            i2.win.addEventListener && i2.win.removeEventListener && (i2.win.addEventListener("testPassive", i2.noop, e3), i2.win.removeEventListener("testPassive", i2.noop, e3));
          }
          return t2;
        }(), i2.charts = [], i2.composed = [], i2.dateFormats = {}, i2.seriesTypes = {}, i2.symbolSizes = {}, i2.chartCount = 0, e2;
      }), i(e, "Core/Utilities.js", [e["Core/Globals.js"]], function(t2) {
        let e2;
        let { charts: i2, doc: s, win: o } = t2;
        function r(e3, i3, s2, a2) {
          let n2 = i3 ? "Highcharts error" : "Highcharts warning";
          32 === e3 && (e3 = `${n2}: Deprecated member`);
          let l2 = p(e3), h2 = l2 ? `${n2} #${e3}: www.highcharts.com/errors/${e3}/` : e3.toString();
          if (void 0 !== a2) {
            let t3 = "";
            l2 && (h2 += "?"), M(a2, function(e4, i4) {
              t3 += `
 - ${i4}: ${e4}`, l2 && (h2 += encodeURI(i4) + "=" + encodeURI(e4));
            }), h2 += t3;
          }
          C(t2, "displayError", { chart: s2, code: e3, message: h2, params: a2 }, function() {
            if (i3)
              throw Error(h2);
            o.console && -1 === r.messages.indexOf(h2) && console.warn(h2);
          }), r.messages.push(h2);
        }
        function a(t3, e3) {
          return parseInt(t3, e3 || 10);
        }
        function n(t3) {
          return "string" == typeof t3;
        }
        function l(t3) {
          let e3 = Object.prototype.toString.call(t3);
          return "[object Array]" === e3 || "[object Array Iterator]" === e3;
        }
        function h(t3, e3) {
          return !!t3 && "object" == typeof t3 && (!e3 || !l(t3));
        }
        function d(t3) {
          return h(t3) && "number" == typeof t3.nodeType;
        }
        function c(t3) {
          let e3 = t3 && t3.constructor;
          return !!(h(t3, true) && !d(t3) && e3 && e3.name && "Object" !== e3.name);
        }
        function p(t3) {
          return "number" == typeof t3 && !isNaN(t3) && t3 < 1 / 0 && t3 > -1 / 0;
        }
        function u(t3) {
          return null != t3;
        }
        function g(t3, e3, i3) {
          let s2;
          let o2 = n(e3) && !u(i3), r2 = (e4, i4) => {
            u(e4) ? t3.setAttribute(i4, e4) : o2 ? (s2 = t3.getAttribute(i4)) || "class" !== i4 || (s2 = t3.getAttribute(i4 + "Name")) : t3.removeAttribute(i4);
          };
          return n(e3) ? r2(i3, e3) : M(e3, r2), s2;
        }
        function f(t3) {
          return l(t3) ? t3 : [t3];
        }
        function m(t3, e3) {
          let i3;
          for (i3 in t3 || (t3 = {}), e3)
            t3[i3] = e3[i3];
          return t3;
        }
        function x() {
          let t3 = arguments, e3 = t3.length;
          for (let i3 = 0; i3 < e3; i3++) {
            let e4 = t3[i3];
            if (null != e4)
              return e4;
          }
        }
        function y(t3, e3) {
          m(t3.style, e3);
        }
        function b(t3) {
          return Math.pow(10, Math.floor(Math.log(t3) / Math.LN10));
        }
        function v(t3, e3) {
          return t3 > 1e14 ? t3 : parseFloat(t3.toPrecision(e3 || 14));
        }
        (r || (r = {})).messages = [], Math.easeInOutSine = function(t3) {
          return -0.5 * (Math.cos(Math.PI * t3) - 1);
        };
        let S = Array.prototype.find ? function(t3, e3) {
          return t3.find(e3);
        } : function(t3, e3) {
          let i3;
          let s2 = t3.length;
          for (i3 = 0; i3 < s2; i3++)
            if (e3(t3[i3], i3))
              return t3[i3];
        };
        function M(t3, e3, i3) {
          for (let s2 in t3)
            Object.hasOwnProperty.call(t3, s2) && e3.call(i3 || t3[s2], t3[s2], s2, t3);
        }
        function k(t3, e3, i3) {
          function s2(e4, i4) {
            let s3 = t3.removeEventListener;
            s3 && s3.call(t3, e4, i4, false);
          }
          function o2(i4) {
            let o3, r3;
            t3.nodeName && (e3 ? (o3 = {})[e3] = true : o3 = i4, M(o3, function(t4, e4) {
              if (i4[e4])
                for (r3 = i4[e4].length; r3--; )
                  s2(e4, i4[e4][r3].fn);
            }));
          }
          let r2 = "function" == typeof t3 && t3.prototype || t3;
          if (Object.hasOwnProperty.call(r2, "hcEvents")) {
            let t4 = r2.hcEvents;
            if (e3) {
              let r3 = t4[e3] || [];
              i3 ? (t4[e3] = r3.filter(function(t5) {
                return i3 !== t5.fn;
              }), s2(e3, i3)) : (o2(t4), t4[e3] = []);
            } else
              o2(t4), delete r2.hcEvents;
          }
        }
        function C(e3, i3, o2, r2) {
          if (o2 = o2 || {}, s.createEvent && (e3.dispatchEvent || e3.fireEvent && e3 !== t2)) {
            let t3 = s.createEvent("Events");
            t3.initEvent(i3, true, true), o2 = m(t3, o2), e3.dispatchEvent ? e3.dispatchEvent(o2) : e3.fireEvent(i3, o2);
          } else if (e3.hcEvents) {
            o2.target || m(o2, { preventDefault: function() {
              o2.defaultPrevented = true;
            }, target: e3, type: i3 });
            let t3 = [], s2 = e3, r3 = false;
            for (; s2.hcEvents; )
              Object.hasOwnProperty.call(s2, "hcEvents") && s2.hcEvents[i3] && (t3.length && (r3 = true), t3.unshift.apply(t3, s2.hcEvents[i3])), s2 = Object.getPrototypeOf(s2);
            r3 && t3.sort((t4, e4) => t4.order - e4.order), t3.forEach((t4) => {
              false === t4.fn.call(e3, o2) && o2.preventDefault();
            });
          }
          r2 && !o2.defaultPrevented && r2.call(e3, o2);
        }
        M({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(e3, i3) {
          t2[i3] = function(t3) {
            return r(32, false, void 0, { [`Highcharts.${i3}`]: `use Array.${e3}` }), Array.prototype[e3].apply(t3, [].slice.call(arguments, 1));
          };
        });
        let A = function() {
          let t3 = Math.random().toString(36).substring(2, 9) + "-", i3 = 0;
          return function() {
            return "highcharts-" + (e2 ? "" : t3) + i3++;
          };
        }();
        return o.jQuery && (o.jQuery.fn.highcharts = function() {
          let e3 = [].slice.call(arguments);
          if (this[0])
            return e3[0] ? (new t2[n(e3[0]) ? e3.shift() : "Chart"](this[0], e3[0], e3[1]), this) : i2[g(this[0], "data-highcharts-chart")];
        }), { addEvent: function(e3, i3, s2, o2 = {}) {
          let r2 = "function" == typeof e3 && e3.prototype || e3;
          Object.hasOwnProperty.call(r2, "hcEvents") || (r2.hcEvents = {});
          let a2 = r2.hcEvents;
          t2.Point && e3 instanceof t2.Point && e3.series && e3.series.chart && (e3.series.chart.runTrackerClick = true);
          let n2 = e3.addEventListener;
          n2 && n2.call(e3, i3, s2, !!t2.supportsPassiveEvents && { passive: void 0 === o2.passive ? -1 !== i3.indexOf("touch") : o2.passive, capture: false }), a2[i3] || (a2[i3] = []);
          let l2 = { fn: s2, order: "number" == typeof o2.order ? o2.order : 1 / 0 };
          return a2[i3].push(l2), a2[i3].sort((t3, e4) => t3.order - e4.order), function() {
            k(e3, i3, s2);
          };
        }, arrayMax: function(t3) {
          let e3 = t3.length, i3 = t3[0];
          for (; e3--; )
            t3[e3] > i3 && (i3 = t3[e3]);
          return i3;
        }, arrayMin: function(t3) {
          let e3 = t3.length, i3 = t3[0];
          for (; e3--; )
            t3[e3] < i3 && (i3 = t3[e3]);
          return i3;
        }, attr: g, clamp: function(t3, e3, i3) {
          return t3 > e3 ? t3 < i3 ? t3 : i3 : e3;
        }, clearTimeout: function(t3) {
          u(t3) && clearTimeout(t3);
        }, correctFloat: v, createElement: function(t3, e3, i3, o2, r2) {
          let a2 = s.createElement(t3);
          return e3 && m(a2, e3), r2 && y(a2, { padding: "0", border: "none", margin: "0" }), i3 && y(a2, i3), o2 && o2.appendChild(a2), a2;
        }, css: y, defined: u, destroyObjectProperties: function(t3, e3, i3) {
          M(t3, function(s2, o2) {
            s2 !== e3 && s2?.destroy && s2.destroy(), (s2?.destroy || !i3) && delete t3[o2];
          });
        }, diffObjects: function(t3, e3, i3, s2) {
          let o2 = {};
          return function t4(e4, o3, r2, a2) {
            let n2 = i3 ? o3 : e4;
            M(e4, function(i4, d2) {
              if (!a2 && s2 && s2.indexOf(d2) > -1 && o3[d2]) {
                i4 = f(i4), r2[d2] = [];
                for (let e5 = 0; e5 < Math.max(i4.length, o3[d2].length); e5++)
                  o3[d2][e5] && (void 0 === i4[e5] ? r2[d2][e5] = o3[d2][e5] : (r2[d2][e5] = {}, t4(i4[e5], o3[d2][e5], r2[d2][e5], a2 + 1)));
              } else
                h(i4, true) && !i4.nodeType ? (r2[d2] = l(i4) ? [] : {}, t4(i4, o3[d2] || {}, r2[d2], a2 + 1), 0 !== Object.keys(r2[d2]).length || "colorAxis" === d2 && 0 === a2 || delete r2[d2]) : (e4[d2] !== o3[d2] || d2 in e4 && !(d2 in o3)) && "__proto__" !== d2 && "constructor" !== d2 && (r2[d2] = n2[d2]);
            });
          }(t3, e3, o2, 0), o2;
        }, discardElement: function(t3) {
          t3 && t3.parentElement && t3.parentElement.removeChild(t3);
        }, erase: function(t3, e3) {
          let i3 = t3.length;
          for (; i3--; )
            if (t3[i3] === e3) {
              t3.splice(i3, 1);
              break;
            }
        }, error: r, extend: m, extendClass: function(t3, e3) {
          let i3 = function() {
          };
          return i3.prototype = new t3(), m(i3.prototype, e3), i3;
        }, find: S, fireEvent: C, getClosestDistance: function(t3, e3) {
          let i3, s2, o2, r2;
          let a2 = !e3;
          return t3.forEach((t4) => {
            if (t4.length > 1)
              for (r2 = s2 = t4.length - 1; r2 > 0; r2--)
                (o2 = t4[r2] - t4[r2 - 1]) < 0 && !a2 ? (e3?.(), e3 = void 0) : o2 && (void 0 === i3 || o2 < i3) && (i3 = o2);
          }), i3;
        }, getMagnitude: b, getNestedProperty: function(t3, e3) {
          let i3 = t3.split(".");
          for (; i3.length && u(e3); ) {
            let t4 = i3.shift();
            if (void 0 === t4 || "__proto__" === t4)
              return;
            if ("this" === t4) {
              let t5;
              return h(e3) && (t5 = e3["@this"]), t5 ?? e3;
            }
            let s2 = e3[t4];
            if (!u(s2) || "function" == typeof s2 || "number" == typeof s2.nodeType || s2 === o)
              return;
            e3 = s2;
          }
          return e3;
        }, getStyle: function t3(e3, i3, s2) {
          let r2;
          if ("width" === i3) {
            let i4 = Math.min(e3.offsetWidth, e3.scrollWidth), s3 = e3.getBoundingClientRect && e3.getBoundingClientRect().width;
            return s3 < i4 && s3 >= i4 - 1 && (i4 = Math.floor(s3)), Math.max(0, i4 - (t3(e3, "padding-left", true) || 0) - (t3(e3, "padding-right", true) || 0));
          }
          if ("height" === i3)
            return Math.max(0, Math.min(e3.offsetHeight, e3.scrollHeight) - (t3(e3, "padding-top", true) || 0) - (t3(e3, "padding-bottom", true) || 0));
          let n2 = o.getComputedStyle(e3, void 0);
          return n2 && (r2 = n2.getPropertyValue(i3), x(s2, "opacity" !== i3) && (r2 = a(r2))), r2;
        }, inArray: function(t3, e3, i3) {
          return r(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" }), e3.indexOf(t3, i3);
        }, insertItem: function(t3, e3) {
          let i3;
          let s2 = t3.options.index, o2 = e3.length;
          for (i3 = t3.options.isInternal ? o2 : 0; i3 < o2 + 1; i3++)
            if (!e3[i3] || p(s2) && s2 < x(e3[i3].options.index, e3[i3]._i) || e3[i3].options.isInternal) {
              e3.splice(i3, 0, t3);
              break;
            }
          return i3;
        }, isArray: l, isClass: c, isDOMElement: d, isFunction: function(t3) {
          return "function" == typeof t3;
        }, isNumber: p, isObject: h, isString: n, keys: function(t3) {
          return r(32, false, void 0, { "Highcharts.keys": "use Object.keys" }), Object.keys(t3);
        }, merge: function() {
          let t3, e3 = arguments, i3 = {}, s2 = function(t4, e4) {
            return "object" != typeof t4 && (t4 = {}), M(e4, function(i4, o3) {
              "__proto__" !== o3 && "constructor" !== o3 && (!h(i4, true) || c(i4) || d(i4) ? t4[o3] = e4[o3] : t4[o3] = s2(t4[o3] || {}, i4));
            }), t4;
          };
          true === e3[0] && (i3 = e3[1], e3 = Array.prototype.slice.call(e3, 2));
          let o2 = e3.length;
          for (t3 = 0; t3 < o2; t3++)
            i3 = s2(i3, e3[t3]);
          return i3;
        }, normalizeTickInterval: function(t3, e3, i3, s2, o2) {
          let r2, a2 = t3;
          i3 = x(i3, b(t3));
          let n2 = t3 / i3;
          for (!e3 && (e3 = o2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === s2 && (1 === i3 ? e3 = e3.filter(function(t4) {
            return t4 % 1 == 0;
          }) : i3 <= 0.1 && (e3 = [1 / i3]))), r2 = 0; r2 < e3.length && (a2 = e3[r2], (!o2 || !(a2 * i3 >= t3)) && (o2 || !(n2 <= (e3[r2] + (e3[r2 + 1] || e3[r2])) / 2))); r2++)
            ;
          return v(a2 * i3, -Math.round(Math.log(1e-3) / Math.LN10));
        }, objectEach: M, offset: function(t3) {
          let e3 = s.documentElement, i3 = t3.parentElement || t3.parentNode ? t3.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
          return { top: i3.top + (o.pageYOffset || e3.scrollTop) - (e3.clientTop || 0), left: i3.left + (o.pageXOffset || e3.scrollLeft) - (e3.clientLeft || 0), width: i3.width, height: i3.height };
        }, pad: function(t3, e3, i3) {
          return Array((e3 || 2) + 1 - String(t3).replace("-", "").length).join(i3 || "0") + t3;
        }, pick: x, pInt: a, pushUnique: function(t3, e3) {
          return 0 > t3.indexOf(e3) && !!t3.push(e3);
        }, relativeLength: function(t3, e3, i3) {
          return /%$/.test(t3) ? e3 * parseFloat(t3) / 100 + (i3 || 0) : parseFloat(t3);
        }, removeEvent: k, replaceNested: function(t3, ...e3) {
          let i3, s2;
          do
            for (s2 of (i3 = t3, e3))
              t3 = t3.replace(s2[0], s2[1]);
          while (t3 !== i3);
          return t3;
        }, splat: f, stableSort: function(t3, e3) {
          let i3, s2;
          let o2 = t3.length;
          for (s2 = 0; s2 < o2; s2++)
            t3[s2].safeI = s2;
          for (t3.sort(function(t4, s3) {
            return 0 === (i3 = e3(t4, s3)) ? t4.safeI - s3.safeI : i3;
          }), s2 = 0; s2 < o2; s2++)
            delete t3[s2].safeI;
        }, syncTimeout: function(t3, e3, i3) {
          return e3 > 0 ? setTimeout(t3, e3, i3) : (t3.call(0, i3), -1);
        }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: A, useSerialIds: function(t3) {
          return e2 = x(t3, e2);
        }, wrap: function(t3, e3, i3) {
          let s2 = t3[e3];
          t3[e3] = function() {
            let t4 = arguments, e4 = this;
            return i3.apply(this, [function() {
              return s2.apply(e4, arguments.length ? arguments : t4);
            }].concat([].slice.call(arguments)));
          };
        } };
      }), i(e, "Core/Chart/ChartDefaults.js", [], function() {
        return { alignThresholds: false, panning: { enabled: false, type: "x" }, styledMode: false, borderRadius: 0, colorCount: 10, allowMutatingData: true, ignoreHiddenSeries: true, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: true, type: "line", zooming: { singleTouch: false, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" };
      }), i(e, "Core/Color/Palettes.js", [], function() {
        return { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"] };
      }), i(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { win: i2 } = t2, { defined: s, error: o, extend: r, isNumber: a, isObject: n, merge: l, objectEach: h, pad: d, pick: c, splat: p, timeUnits: u } = e2, g = t2.isSafari && i2.Intl && i2.Intl.DateTimeFormat.prototype.formatRange, f = t2.isSafari && i2.Intl && !i2.Intl.DateTimeFormat.prototype.formatRange;
        class m {
          constructor(t3) {
            this.options = {}, this.useUTC = false, this.variableTimezone = false, this.Date = i2.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t3);
          }
          get(t3, e3) {
            if (this.variableTimezone || this.timezoneOffset) {
              let i3 = e3.getTime(), s2 = i3 - this.getTimezoneOffset(e3);
              e3.setTime(s2);
              let o2 = e3["getUTC" + t3]();
              return e3.setTime(i3), o2;
            }
            return this.useUTC ? e3["getUTC" + t3]() : e3["get" + t3]();
          }
          set(t3, e3, i3) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === t3 || "Seconds" === t3 || "Minutes" === t3 && this.getTimezoneOffset(e3) % 36e5 == 0)
                return e3["setUTC" + t3](i3);
              let s2 = this.getTimezoneOffset(e3), o2 = e3.getTime() - s2;
              e3.setTime(o2), e3["setUTC" + t3](i3);
              let r2 = this.getTimezoneOffset(e3);
              return o2 = e3.getTime() + r2, e3.setTime(o2);
            }
            return this.useUTC || g && "FullYear" === t3 ? e3["setUTC" + t3](i3) : e3["set" + t3](i3);
          }
          update(t3 = {}) {
            let e3 = c(t3.useUTC, true);
            this.options = t3 = l(true, this.options, t3), this.Date = t3.Date || i2.Date || Date, this.useUTC = e3, this.timezoneOffset = e3 && t3.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = e3 && !!(t3.getTimezoneOffset || t3.timezone);
          }
          makeTime(t3, e3, i3, s2, o2, r2) {
            let a2, n2, l2;
            return this.useUTC ? (a2 = this.Date.UTC.apply(0, arguments), n2 = this.getTimezoneOffset(a2), a2 += n2, n2 !== (l2 = this.getTimezoneOffset(a2)) ? a2 += l2 - n2 : n2 - 36e5 !== this.getTimezoneOffset(a2 - 36e5) || f || (a2 -= 36e5)) : a2 = new this.Date(t3, e3, c(i3, 1), c(s2, 0), c(o2, 0), c(r2, 0)).getTime(), a2;
          }
          timezoneOffsetFunction() {
            let t3 = this, e3 = this.options, i3 = e3.getTimezoneOffset;
            return this.useUTC ? e3.timezone ? (t4) => {
              try {
                let i4 = `shortOffset,${e3.timezone || ""}`, [s2, o2, r2, n2, l2 = 0] = (m.formatCache[i4] = m.formatCache[i4] || Intl.DateTimeFormat("en", { timeZone: e3.timezone, timeZoneName: "shortOffset" })).format(t4).split(/(GMT|:)/).map(Number), h2 = -(36e5 * (r2 + l2 / 60));
                if (a(h2))
                  return h2;
              } catch (t5) {
                o(34);
              }
              return 0;
            } : this.useUTC && i3 ? (t4) => 6e4 * i3(t4.valueOf()) : () => 6e4 * (t3.timezoneOffset || 0) : (t4) => 6e4 * new Date(t4.toString()).getTimezoneOffset();
          }
          dateFormat(e3, i3, o2) {
            if (!s(i3) || isNaN(i3))
              return t2.defaultOptions.lang && t2.defaultOptions.lang.invalidDate || "";
            e3 = c(e3, "%Y-%m-%d %H:%M:%S");
            let a2 = this, n2 = new this.Date(i3), l2 = this.get("Hours", n2), p2 = this.get("Day", n2), u2 = this.get("Date", n2), g2 = this.get("Month", n2), f2 = this.get("FullYear", n2), m2 = t2.defaultOptions.lang, x = m2 && m2.weekdays, y = m2 && m2.shortWeekdays;
            return h(r({ a: y ? y[p2] : x[p2].substr(0, 3), A: x[p2], d: d(u2), e: d(u2, 2, " "), w: p2, b: m2.shortMonths[g2], B: m2.months[g2], m: d(g2 + 1), o: g2 + 1, y: f2.toString().substr(2, 2), Y: f2, H: d(l2), k: l2, I: d(l2 % 12 || 12), l: l2 % 12 || 12, M: d(this.get("Minutes", n2)), p: l2 < 12 ? "AM" : "PM", P: l2 < 12 ? "am" : "pm", S: d(this.get("Seconds", n2)), L: d(Math.floor(i3 % 1e3), 3) }, t2.dateFormats), function(t3, s2) {
              for (; -1 !== e3.indexOf("%" + s2); )
                e3 = e3.replace("%" + s2, "function" == typeof t3 ? t3.call(a2, i3) : t3);
            }), o2 ? e3.substr(0, 1).toUpperCase() + e3.substr(1) : e3;
          }
          resolveDTLFormat(t3) {
            return n(t3, true) ? t3 : { main: (t3 = p(t3))[0], from: t3[1], to: t3[2] };
          }
          getTimeTicks(t3, e3, i3, o2) {
            let a2, n2, l2, h2;
            let d2 = this, p2 = d2.Date, g2 = [], f2 = {}, m2 = new p2(e3), x = t3.unitRange, y = t3.count || 1;
            if (o2 = c(o2, 1), s(e3)) {
              d2.set("Milliseconds", m2, x >= u.second ? 0 : y * Math.floor(d2.get("Milliseconds", m2) / y)), x >= u.second && d2.set("Seconds", m2, x >= u.minute ? 0 : y * Math.floor(d2.get("Seconds", m2) / y)), x >= u.minute && d2.set("Minutes", m2, x >= u.hour ? 0 : y * Math.floor(d2.get("Minutes", m2) / y)), x >= u.hour && d2.set("Hours", m2, x >= u.day ? 0 : y * Math.floor(d2.get("Hours", m2) / y)), x >= u.day && d2.set("Date", m2, x >= u.month ? 1 : Math.max(1, y * Math.floor(d2.get("Date", m2) / y))), x >= u.month && (d2.set("Month", m2, x >= u.year ? 0 : y * Math.floor(d2.get("Month", m2) / y)), n2 = d2.get("FullYear", m2)), x >= u.year && (n2 -= n2 % y, d2.set("FullYear", m2, n2)), x === u.week && (h2 = d2.get("Day", m2), d2.set("Date", m2, d2.get("Date", m2) - h2 + o2 + (h2 < o2 ? -7 : 0))), n2 = d2.get("FullYear", m2);
              let t4 = d2.get("Month", m2), r2 = d2.get("Date", m2), c2 = d2.get("Hours", m2);
              e3 = m2.getTime(), (d2.variableTimezone || !d2.useUTC) && s(i3) && (l2 = i3 - e3 > 4 * u.month || d2.getTimezoneOffset(e3) !== d2.getTimezoneOffset(i3));
              let p3 = m2.getTime();
              for (a2 = 1; p3 < i3; )
                g2.push(p3), x === u.year ? p3 = d2.makeTime(n2 + a2 * y, 0) : x === u.month ? p3 = d2.makeTime(n2, t4 + a2 * y) : l2 && (x === u.day || x === u.week) ? p3 = d2.makeTime(n2, t4, r2 + a2 * y * (x === u.day ? 1 : 7)) : l2 && x === u.hour && y > 1 ? p3 = d2.makeTime(n2, t4, r2, c2 + a2 * y) : p3 += x * y, a2++;
              g2.push(p3), x <= u.hour && g2.length < 1e4 && g2.forEach(function(t5) {
                t5 % 18e5 == 0 && "000000000" === d2.dateFormat("%H%M%S%L", t5) && (f2[t5] = "day");
              });
            }
            return g2.info = r(t3, { higherRanks: f2, totalRange: x * y }), g2;
          }
          getDateFormat(t3, e3, i3, s2) {
            let o2 = this.dateFormat("%m-%d %H:%M:%S.%L", e3), r2 = "01-01 00:00:00.000", a2 = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, n2 = "millisecond", l2 = n2;
            for (n2 in u) {
              if (t3 === u.week && +this.dateFormat("%w", e3) === i3 && o2.substr(6) === r2.substr(6)) {
                n2 = "week";
                break;
              }
              if (u[n2] > t3) {
                n2 = l2;
                break;
              }
              if (a2[n2] && o2.substr(a2[n2]) !== r2.substr(a2[n2]))
                break;
              "week" !== n2 && (l2 = n2);
            }
            return this.resolveDTLFormat(s2[n2]).main;
          }
        }
        return m.formatCache = {}, m;
      }), i(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { isTouchDevice: r, svg: a } = e2, { merge: n } = o, l = { colors: i2.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], decimalPoint: ".", numericSymbols: ["k", "M", "G", "T", "P", "E"], resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: true }, chart: t2, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: true, align: "center", alignColumns: true, className: "highcharts-no-tooltip", layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
          return this.name;
        }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: false, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: true, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: true, animation: a, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %e %b, %H:%M:%S.%L", second: "%A, %e %b, %H:%M:%S", minute: "%A, %e %b, %H:%M", hour: "%A, %e %b, %H:%M", day: "%A, %e %b %Y", week: "Week from %A, %e %b %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: false, snap: r ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, shadow: true, stickOnContact: false, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: false }, credits: { enabled: true, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } };
        l.chart.styledMode = false;
        let h = new s(l.time);
        return { defaultOptions: l, defaultTime: h, getOptions: function() {
          return l;
        }, setOptions: function(t3) {
          return n(true, l, t3), (t3.time || t3.global) && (e2.time ? e2.time.update(n(l.global, l.time, t3.global, t3.time)) : e2.time = h), l;
        } };
      }), i(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { isNumber: i2, merge: s, pInt: o } = e2;
        class r {
          static parse(t3) {
            return t3 ? new r(t3) : r.None;
          }
          constructor(e3) {
            let i3, s2, o2, a;
            this.rgba = [NaN, NaN, NaN, NaN], this.input = e3;
            let n = t2.Color;
            if (n && n !== r)
              return new n(e3);
            if ("object" == typeof e3 && void 0 !== e3.stops)
              this.stops = e3.stops.map((t3) => new r(t3[1]));
            else if ("string" == typeof e3) {
              if (this.input = e3 = r.names[e3.toLowerCase()] || e3, "#" === e3.charAt(0)) {
                let t3 = e3.length, i4 = parseInt(e3.substr(1), 16);
                7 === t3 ? s2 = [(16711680 & i4) >> 16, (65280 & i4) >> 8, 255 & i4, 1] : 4 === t3 && (s2 = [(3840 & i4) >> 4 | (3840 & i4) >> 8, (240 & i4) >> 4 | 240 & i4, (15 & i4) << 4 | 15 & i4, 1]);
              }
              if (!s2)
                for (o2 = r.parsers.length; o2-- && !s2; )
                  (i3 = (a = r.parsers[o2]).regex.exec(e3)) && (s2 = a.parse(i3));
            }
            s2 && (this.rgba = s2);
          }
          get(t3) {
            let e3 = this.input, o2 = this.rgba;
            if ("object" == typeof e3 && void 0 !== this.stops) {
              let i3 = s(e3);
              return i3.stops = [].slice.call(i3.stops), this.stops.forEach((e4, s2) => {
                i3.stops[s2] = [i3.stops[s2][0], e4.get(t3)];
              }), i3;
            }
            return o2 && i2(o2[0]) ? "rgb" !== t3 && (t3 || 1 !== o2[3]) ? "a" === t3 ? `${o2[3]}` : "rgba(" + o2.join(",") + ")" : "rgb(" + o2[0] + "," + o2[1] + "," + o2[2] + ")" : e3;
          }
          brighten(t3) {
            let e3 = this.rgba;
            if (this.stops)
              this.stops.forEach(function(e4) {
                e4.brighten(t3);
              });
            else if (i2(t3) && 0 !== t3)
              for (let i3 = 0; i3 < 3; i3++)
                e3[i3] += o(255 * t3), e3[i3] < 0 && (e3[i3] = 0), e3[i3] > 255 && (e3[i3] = 255);
            return this;
          }
          setOpacity(t3) {
            return this.rgba[3] = t3, this;
          }
          tweenTo(t3, e3) {
            let s2 = this.rgba, o2 = t3.rgba;
            if (!i2(s2[0]) || !i2(o2[0]))
              return t3.input || "none";
            let r2 = 1 !== o2[3] || 1 !== s2[3];
            return (r2 ? "rgba(" : "rgb(") + Math.round(o2[0] + (s2[0] - o2[0]) * (1 - e3)) + "," + Math.round(o2[1] + (s2[1] - o2[1]) * (1 - e3)) + "," + Math.round(o2[2] + (s2[2] - o2[2]) * (1 - e3)) + (r2 ? "," + (o2[3] + (s2[3] - o2[3]) * (1 - e3)) : "") + ")";
          }
        }
        return r.names = { white: "#ffffff", black: "#000000" }, r.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(t3) {
          return [o(t3[1]), o(t3[2]), o(t3[3]), parseFloat(t3[4], 10)];
        } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(t3) {
          return [o(t3[1]), o(t3[2]), o(t3[3]), 1];
        } }], r.None = new r(""), r;
      }), i(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { parse: s } = t2, { win: o } = e2, { isNumber: r, objectEach: a } = i2;
        class n {
          constructor(t3, e3, i3) {
            this.pos = NaN, this.options = e3, this.elem = t3, this.prop = i3;
          }
          dSetter() {
            let t3 = this.paths, e3 = t3 && t3[0], i3 = t3 && t3[1], s2 = this.now || 0, o2 = [];
            if (1 !== s2 && e3 && i3) {
              if (e3.length === i3.length && s2 < 1)
                for (let t4 = 0; t4 < i3.length; t4++) {
                  let a2 = e3[t4], n2 = i3[t4], l = [];
                  for (let t5 = 0; t5 < n2.length; t5++) {
                    let e4 = a2[t5], i4 = n2[t5];
                    r(e4) && r(i4) && !("A" === n2[0] && (4 === t5 || 5 === t5)) ? l[t5] = e4 + s2 * (i4 - e4) : l[t5] = i4;
                  }
                  o2.push(l);
                }
              else
                o2 = i3;
            } else
              o2 = this.toD || [];
            this.elem.attr("d", o2, void 0, true);
          }
          update() {
            let t3 = this.elem, e3 = this.prop, i3 = this.now, s2 = this.options.step;
            this[e3 + "Setter"] ? this[e3 + "Setter"]() : t3.attr ? t3.element && t3.attr(e3, i3, null, true) : t3.style[e3] = i3 + this.unit, s2 && s2.call(t3, i3, this);
          }
          run(t3, e3, i3) {
            let s2 = this, r2 = s2.options, a2 = function(t4) {
              return !a2.stopped && s2.step(t4);
            }, l = o.requestAnimationFrame || function(t4) {
              setTimeout(t4, 13);
            }, h = function() {
              for (let t4 = 0; t4 < n.timers.length; t4++)
                n.timers[t4]() || n.timers.splice(t4--, 1);
              n.timers.length && l(h);
            };
            t3 !== e3 || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t3, this.end = e3, this.unit = i3, this.now = this.start, this.pos = 0, a2.elem = this.elem, a2.prop = this.prop, a2() && 1 === n.timers.push(a2) && l(h)) : (delete r2.curAnim[this.prop], r2.complete && 0 === Object.keys(r2.curAnim).length && r2.complete.call(this.elem));
          }
          step(t3) {
            let e3, i3;
            let s2 = +/* @__PURE__ */ new Date(), o2 = this.options, r2 = this.elem, n2 = o2.complete, l = o2.duration, h = o2.curAnim;
            return r2.attr && !r2.element ? e3 = false : t3 || s2 >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h[this.prop] = true, i3 = true, a(h, function(t4) {
              true !== t4 && (i3 = false);
            }), i3 && n2 && n2.call(r2), e3 = false) : (this.pos = o2.easing((s2 - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e3 = true), e3;
          }
          initPath(t3, e3, i3) {
            let s2 = t3.startX, o2 = t3.endX, a2 = i3.slice(), n2 = t3.isArea, l = n2 ? 2 : 1, h, d, c, p, u = e3 && e3.slice();
            if (!u)
              return [a2, a2];
            function g(t4, e4) {
              for (; t4.length < d; ) {
                let i4 = t4[0], s3 = e4[d - t4.length];
                if (s3 && "M" === i4[0] && ("C" === s3[0] ? t4[0] = ["C", i4[1], i4[2], i4[1], i4[2], i4[1], i4[2]] : t4[0] = ["L", i4[1], i4[2]]), t4.unshift(i4), n2) {
                  let e5 = t4.pop();
                  t4.push(t4[t4.length - 1], e5);
                }
              }
            }
            function f(t4) {
              for (; t4.length < d; ) {
                let e4 = t4[Math.floor(t4.length / l) - 1].slice();
                if ("C" === e4[0] && (e4[1] = e4[5], e4[2] = e4[6]), n2) {
                  let i4 = t4[Math.floor(t4.length / l)].slice();
                  t4.splice(t4.length / 2, 0, e4, i4);
                } else
                  t4.push(e4);
              }
            }
            if (s2 && o2 && o2.length) {
              for (c = 0; c < s2.length; c++) {
                if (s2[c] === o2[0]) {
                  h = c;
                  break;
                }
                if (s2[0] === o2[o2.length - s2.length + c]) {
                  h = c, p = true;
                  break;
                }
                if (s2[s2.length - 1] === o2[o2.length - s2.length + c]) {
                  h = s2.length - c;
                  break;
                }
              }
              void 0 === h && (u = []);
            }
            return u.length && r(h) && (d = a2.length + h * l, p ? (g(u, a2), f(a2)) : (g(a2, u), f(u))), [u, a2];
          }
          fillSetter() {
            n.prototype.strokeSetter.apply(this, arguments);
          }
          strokeSetter() {
            this.elem.attr(this.prop, s(this.start).tweenTo(s(this.end), this.pos), void 0, true);
          }
        }
        return n.timers = [], n;
      }), i(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { defined: i2, getStyle: s, isArray: o, isNumber: r, isObject: a, merge: n, objectEach: l, pick: h } = e2;
        function d(t3) {
          return a(t3) ? n({ duration: 500, defer: 0 }, t3) : { duration: t3 ? 500 : 0, defer: 0 };
        }
        function c(e3, i3) {
          let s2 = t2.timers.length;
          for (; s2--; )
            t2.timers[s2].elem !== e3 || i3 && i3 !== t2.timers[s2].prop || (t2.timers[s2].stopped = true);
        }
        return { animate: function(e3, i3, h2) {
          let d2, p = "", u, g, f;
          a(h2) || (f = arguments, h2 = { duration: f[2], easing: f[3], complete: f[4] }), r(h2.duration) || (h2.duration = 400), h2.easing = "function" == typeof h2.easing ? h2.easing : Math[h2.easing] || Math.easeInOutSine, h2.curAnim = n(i3), l(i3, function(r2, a2) {
            c(e3, a2), g = new t2(e3, h2, a2), u = void 0, "d" === a2 && o(i3.d) ? (g.paths = g.initPath(e3, e3.pathArray, i3.d), g.toD = i3.d, d2 = 0, u = 1) : e3.attr ? d2 = e3.attr(a2) : (d2 = parseFloat(s(e3, a2)) || 0, "opacity" !== a2 && (p = "px")), u || (u = r2), "string" == typeof u && u.match("px") && (u = u.replace(/px/g, "")), g.run(d2, u, p);
          });
        }, animObject: d, getDeferredAnimation: function(t3, e3, s2) {
          let o2 = d(e3), r2 = s2 ? [s2] : t3.series, n2 = 0, l2 = 0;
          return r2.forEach((t4) => {
            let s3 = d(t4.options.animation);
            n2 = a(e3) && i2(e3.defer) ? o2.defer : Math.max(n2, s3.duration + s3.defer), l2 = Math.min(o2.duration, s3.duration);
          }), t3.renderer.forExport && (n2 = 0), { defer: Math.max(0, n2 - l2), duration: Math.min(n2, l2) };
        }, setAnimation: function(t3, e3) {
          e3.renderer.globalAnimation = h(t3, e3.options.chart.animation, true);
        }, stop: c };
      }), i(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { SVG_NS: i2, win: s } = t2, { attr: o, createElement: r, css: a, error: n, isFunction: l, isString: h, objectEach: d, splat: c } = e2, { trustedTypes: p } = s, u = p && l(p.createPolicy) && p.createPolicy("highcharts", { createHTML: (t3) => t3 }), g = u ? u.createHTML("") : "", f = function() {
          try {
            return !!new DOMParser().parseFromString(g, "text/html");
          } catch (t3) {
            return false;
          }
        }();
        class m {
          static filterUserAttributes(t3) {
            return d(t3, (e3, i3) => {
              let s2 = true;
              -1 === m.allowedAttributes.indexOf(i3) && (s2 = false), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i3) && (s2 = h(e3) && m.allowedReferences.some((t4) => 0 === e3.indexOf(t4))), s2 || (n(33, false, void 0, { "Invalid attribute in config": `${i3}` }), delete t3[i3]), h(e3) && t3[i3] && (t3[i3] = e3.replace(/</g, "&lt;"));
            }), t3;
          }
          static parseStyle(t3) {
            return t3.split(";").reduce((t4, e3) => {
              let i3 = e3.split(":").map((t5) => t5.trim()), s2 = i3.shift();
              return s2 && i3.length && (t4[s2.replace(/-([a-z])/g, (t5) => t5[1].toUpperCase())] = i3.join(":")), t4;
            }, {});
          }
          static setElementHTML(t3, e3) {
            t3.innerHTML = m.emptyHTML, e3 && new m(e3).addToDOM(t3);
          }
          constructor(t3) {
            this.nodes = "string" == typeof t3 ? this.parseMarkup(t3) : t3;
          }
          addToDOM(e3) {
            return function e4(s2, r2) {
              let l2;
              return c(s2).forEach(function(s3) {
                let h2;
                let c2 = s3.tagName, p2 = s3.textContent ? t2.doc.createTextNode(s3.textContent) : void 0, u2 = m.bypassHTMLFiltering;
                if (c2) {
                  if ("#text" === c2)
                    h2 = p2;
                  else if (-1 !== m.allowedTags.indexOf(c2) || u2) {
                    let n2 = "svg" === c2 ? i2 : r2.namespaceURI || i2, l3 = t2.doc.createElementNS(n2, c2), g2 = s3.attributes || {};
                    d(s3, function(t3, e5) {
                      "tagName" !== e5 && "attributes" !== e5 && "children" !== e5 && "style" !== e5 && "textContent" !== e5 && (g2[e5] = t3);
                    }), o(l3, u2 ? g2 : m.filterUserAttributes(g2)), s3.style && a(l3, s3.style), p2 && l3.appendChild(p2), e4(s3.children || [], l3), h2 = l3;
                  } else
                    n(33, false, void 0, { "Invalid tagName in config": c2 });
                }
                h2 && r2.appendChild(h2), l2 = h2;
              }), l2;
            }(this.nodes, e3);
          }
          parseMarkup(t3) {
            let e3;
            let i3 = [];
            if (t3 = t3.trim().replace(/ style=(["'])/g, " data-style=$1"), f)
              e3 = new DOMParser().parseFromString(u ? u.createHTML(t3) : t3, "text/html");
            else {
              let i4 = r("div");
              i4.innerHTML = t3, e3 = { body: i4 };
            }
            let s2 = (t4, e4) => {
              let i4 = t4.nodeName.toLowerCase(), o2 = { tagName: i4 };
              "#text" === i4 && (o2.textContent = t4.textContent || "");
              let r2 = t4.attributes;
              if (r2) {
                let t5 = {};
                [].forEach.call(r2, (e5) => {
                  "data-style" === e5.name ? o2.style = m.parseStyle(e5.value) : t5[e5.name] = e5.value;
                }), o2.attributes = t5;
              }
              if (t4.childNodes.length) {
                let e5 = [];
                [].forEach.call(t4.childNodes, (t5) => {
                  s2(t5, e5);
                }), e5.length && (o2.children = e5);
              }
              e4.push(o2);
            };
            return [].forEach.call(e3.body.childNodes, (t4) => s2(t4, i3)), i3;
          }
        }
        return m.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "markerHeight", "markerWidth", "offset", "opacity", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], m.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], m.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feDropShadow", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], m.emptyHTML = g, m.bypassHTMLFiltering = false, m;
      }), i(e, "Core/Templating.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { defaultOptions: i2, defaultTime: s } = t2, { extend: o, getNestedProperty: r, isArray: a, isNumber: n, isObject: l, pick: h, pInt: d } = e2, c = { add: (t3, e3) => t3 + e3, divide: (t3, e3) => 0 !== e3 ? t3 / e3 : "", eq: (t3, e3) => t3 == e3, each: function(t3) {
          let e3 = arguments[arguments.length - 1];
          return !!a(t3) && t3.map((i3, s2) => p(e3.body, o(l(i3) ? i3 : { "@this": i3 }, { "@index": s2, "@first": 0 === s2, "@last": s2 === t3.length - 1 }))).join("");
        }, ge: (t3, e3) => t3 >= e3, gt: (t3, e3) => t3 > e3, if: (t3) => !!t3, le: (t3, e3) => t3 <= e3, lt: (t3, e3) => t3 < e3, multiply: (t3, e3) => t3 * e3, ne: (t3, e3) => t3 != e3, subtract: (t3, e3) => t3 - e3, unless: (t3) => !t3 };
        function p(t3 = "", e3, o2) {
          let a2 = /\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g, n2 = /\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g, l2 = [], d2 = /f$/, g = /\.([0-9])/, f = i2.lang, m = o2 && o2.time || s, x = o2 && o2.numberFormatter || u, y = (t4 = "") => {
            let i3;
            return "true" === t4 || "false" !== t4 && ((i3 = Number(t4)).toString() === t4 ? i3 : r(t4, e3));
          }, b, v, S = 0, M;
          for (; null !== (b = a2.exec(t3)); ) {
            let i3 = n2.exec(b[1]);
            i3 && (b = i3, M = true), v && v.isBlock || (v = { ctx: e3, expression: b[1], find: b[0], isBlock: "#" === b[1].charAt(0), start: b.index, startInner: b.index + b[0].length, length: b[0].length });
            let s2 = b[1].split(" ")[0].replace("#", "");
            c[s2] && (v.isBlock && s2 === v.fn && S++, v.fn || (v.fn = s2));
            let o3 = "else" === b[1];
            if (v.isBlock && v.fn && (b[1] === `/${v.fn}` || o3)) {
              if (S)
                !o3 && S--;
              else {
                let e4 = v.startInner, i4 = t3.substr(e4, b.index - e4);
                void 0 === v.body ? (v.body = i4, v.startInner = b.index + b[0].length) : v.elseBody = i4, v.find += i4 + b[0], o3 || (l2.push(v), v = void 0);
              }
            } else
              v.isBlock || l2.push(v);
            if (i3 && !v?.isBlock)
              break;
          }
          return l2.forEach((i3) => {
            let s2, o3;
            let { body: r2, elseBody: a3, expression: n3, fn: l3 } = i3;
            if (l3) {
              let t4 = [i3], h2 = n3.split(" ");
              for (o3 = c[l3].length; o3--; )
                t4.unshift(y(h2[o3 + 1]));
              s2 = c[l3].apply(e3, t4), i3.isBlock && "boolean" == typeof s2 && (s2 = p(s2 ? r2 : a3, e3));
            } else {
              let t4 = n3.split(":");
              if (s2 = y(t4.shift() || ""), t4.length && "number" == typeof s2) {
                let e4 = t4.join(":");
                if (d2.test(e4)) {
                  let t5 = parseInt((e4.match(g) || ["", "-1"])[1], 10);
                  null !== s2 && (s2 = x(s2, t5, f.decimalPoint, e4.indexOf(",") > -1 ? f.thousandsSep : ""));
                } else
                  s2 = m.dateFormat(e4, s2);
              }
            }
            t3 = t3.replace(i3.find, h(s2, ""));
          }), M ? p(t3, e3, o2) : t3;
        }
        function u(t3, e3, s2, o2) {
          let r2, a2;
          t3 = +t3 || 0, e3 = +e3;
          let l2 = i2.lang, c2 = (t3.toString().split(".")[1] || "").split("e")[0].length, p2 = t3.toString().split("e"), u2 = e3;
          -1 === e3 ? e3 = Math.min(c2, 20) : n(e3) ? e3 && p2[1] && p2[1] < 0 && ((a2 = e3 + +p2[1]) >= 0 ? (p2[0] = (+p2[0]).toExponential(a2).split("e")[0], e3 = a2) : (p2[0] = p2[0].split(".")[0] || 0, t3 = e3 < 20 ? (p2[0] * Math.pow(10, p2[1])).toFixed(e3) : 0, p2[1] = 0)) : e3 = 2;
          let g = (Math.abs(p2[1] ? p2[0] : t3) + Math.pow(10, -Math.max(e3, c2) - 1)).toFixed(e3), f = String(d(g)), m = f.length > 3 ? f.length % 3 : 0;
          return s2 = h(s2, l2.decimalPoint), o2 = h(o2, l2.thousandsSep), r2 = (t3 < 0 ? "-" : "") + (m ? f.substr(0, m) + o2 : ""), 0 > +p2[1] && !u2 ? r2 = "0" : r2 += f.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + o2), e3 && (r2 += s2 + g.slice(-e3)), p2[1] && 0 != +r2 && (r2 += "e" + p2[1]), r2;
        }
        return { dateFormat: function(t3, e3, i3) {
          return s.dateFormat(t3, e3, i3);
        }, format: p, helpers: c, numberFormat: u };
      }), i(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function(t2) {
        var e2, i2;
        let s;
        return (i2 = e2 || (e2 = {})).rendererTypes = {}, i2.getRendererType = function(t3 = s) {
          return i2.rendererTypes[t3] || i2.rendererTypes[s];
        }, i2.registerRendererType = function(e3, o, r) {
          i2.rendererTypes[e3] = o, (!s || r) && (s = e3, t2.Renderer = o);
        }, e2;
      }), i(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { clamp: i2, pick: s, pushUnique: o, stableSort: r } = t2;
        return (e2 || (e2 = {})).distribute = function t3(e3, a, n) {
          let l = e3, h = l.reducedLen || a, d = (t4, e4) => t4.target - e4.target, c = [], p = e3.length, u = [], g = c.push, f, m, x, y = true, b, v, S = 0, M;
          for (f = p; f--; )
            S += e3[f].size;
          if (S > h) {
            for (r(e3, (t4, e4) => (e4.rank || 0) - (t4.rank || 0)), x = (M = e3[0].rank === e3[e3.length - 1].rank) ? p / 2 : -1, m = M ? x : p - 1; x && S > h; )
              b = e3[f = Math.floor(m)], o(u, f) && (S -= b.size), m += x, M && m >= e3.length && (x /= 2, m = x);
            u.sort((t4, e4) => e4 - t4).forEach((t4) => g.apply(c, e3.splice(t4, 1)));
          }
          for (r(e3, d), e3 = e3.map((t4) => ({ size: t4.size, targets: [t4.target], align: s(t4.align, 0.5) })); y; ) {
            for (f = e3.length; f--; )
              b = e3[f], v = (Math.min.apply(0, b.targets) + Math.max.apply(0, b.targets)) / 2, b.pos = i2(v - b.size * b.align, 0, a - b.size);
            for (f = e3.length, y = false; f--; )
              f > 0 && e3[f - 1].pos + e3[f - 1].size > e3[f].pos && (e3[f - 1].size += e3[f].size, e3[f - 1].targets = e3[f - 1].targets.concat(e3[f].targets), e3[f - 1].align = 0.5, e3[f - 1].pos + e3[f - 1].size > a && (e3[f - 1].pos = a - e3[f - 1].size), e3.splice(f, 1), y = true);
          }
          return g.apply(l, c), f = 0, e3.some((e4) => {
            let i3 = 0;
            return (e4.targets || []).some(() => (l[f].pos = e4.pos + i3, void 0 !== n && Math.abs(l[f].pos - l[f].target) > n) ? (l.slice(0, f + 1).forEach((t4) => delete t4.pos), l.reducedLen = (l.reducedLen || a) - 0.1 * a, l.reducedLen > 0.1 * a && t3(l, a, n), true) : (i3 += l[f].size, f++, false));
          }), r(l, d), l;
        }, e2;
      }), i(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { animate: o, animObject: r, stop: a } = t2, { deg2rad: n, doc: l, svg: h, SVG_NS: d, win: c } = i2, { addEvent: p, attr: u, createElement: g, css: f, defined: m, erase: x, extend: y, fireEvent: b, isArray: v, isFunction: S, isObject: M, isString: k, merge: C, objectEach: A, pick: w, pInt: T, replaceNested: P, syncTimeout: L, uniqueKey: O } = s;
        class D {
          _defaultGetter(t3) {
            let e3 = w(this[t3 + "Value"], this[t3], this.element ? this.element.getAttribute(t3) : null, 0);
            return /^[\-0-9\.]+$/.test(e3) && (e3 = parseFloat(e3)), e3;
          }
          _defaultSetter(t3, e3, i3) {
            i3.setAttribute(e3, t3);
          }
          add(t3) {
            let e3;
            let i3 = this.renderer, s2 = this.element;
            return t3 && (this.parentGroup = t3), void 0 !== this.textStr && "text" === this.element.nodeName && i3.buildText(this), this.added = true, (!t3 || t3.handleZ || this.zIndex) && (e3 = this.zIndexSetter()), e3 || (t3 ? t3.element : i3.box).appendChild(s2), this.onAdd && this.onAdd(), this;
          }
          addClass(t3, e3) {
            let i3 = e3 ? "" : this.attr("class") || "";
            return (t3 = (t3 || "").split(/ /g).reduce(function(t4, e4) {
              return -1 === i3.indexOf(e4) && t4.push(e4), t4;
            }, i3 ? [i3] : []).join(" ")) !== i3 && this.attr("class", t3), this;
          }
          afterSetters() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          }
          align(t3, e3, i3, s2 = true) {
            let o2, r2, a2, n2, l2;
            let h2 = {}, d2 = this.renderer, c2 = d2.alignedObjects;
            t3 ? (this.alignOptions = t3, this.alignByTranslate = e3, (!i3 || k(i3)) && (this.alignTo = a2 = i3 || "renderer", x(c2, this), c2.push(this), i3 = void 0)) : (t3 = this.alignOptions, e3 = this.alignByTranslate, a2 = this.alignTo), i3 = w(i3, d2[a2], d2);
            let p2 = t3.align, u2 = t3.verticalAlign;
            return o2 = (i3.x || 0) + (t3.x || 0), r2 = (i3.y || 0) + (t3.y || 0), "right" === p2 ? n2 = 1 : "center" === p2 && (n2 = 2), n2 && (o2 += (i3.width - (t3.width || 0)) / n2), h2[e3 ? "translateX" : "x"] = Math.round(o2), "bottom" === u2 ? l2 = 1 : "middle" === u2 && (l2 = 2), l2 && (r2 += (i3.height - (t3.height || 0)) / l2), h2[e3 ? "translateY" : "y"] = Math.round(r2), s2 && (this[this.placed ? "animate" : "attr"](h2), this.placed = true), this.alignAttr = h2, this;
          }
          alignSetter(t3) {
            let e3 = { left: "start", center: "middle", right: "end" };
            e3[t3] && (this.alignValue = t3, this.element.setAttribute("text-anchor", e3[t3]));
          }
          animate(t3, e3, i3) {
            let s2 = r(w(e3, this.renderer.globalAnimation, true)), a2 = s2.defer;
            return l.hidden && (s2.duration = 0), 0 !== s2.duration ? (i3 && (s2.complete = i3), L(() => {
              this.element && o(this, t3, s2);
            }, a2)) : (this.attr(t3, void 0, i3 || s2.complete), A(t3, function(t4, e4) {
              s2.step && s2.step.call(this, t4, { prop: e4, pos: 1, elem: this });
            }, this)), this;
          }
          applyTextOutline(t3) {
            let e3 = this.element;
            -1 !== t3.indexOf("contrast") && (t3 = t3.replace(/contrast/g, this.renderer.getContrast(e3.style.fill)));
            let s2 = t3.split(" "), o2 = s2[s2.length - 1], r2 = s2[0];
            if (r2 && "none" !== r2 && i2.svg) {
              this.fakeTS = true, r2 = r2.replace(/(^[\d\.]+)(.*?)$/g, function(t5, e4, i4) {
                return 2 * Number(e4) + i4;
              }), this.removeTextOutline();
              let t4 = l.createElementNS(d, "tspan");
              u(t4, { class: "highcharts-text-outline", fill: o2, stroke: o2, "stroke-width": r2, "stroke-linejoin": "round" });
              let i3 = e3.querySelector("textPath") || e3;
              [].forEach.call(i3.childNodes, (e4) => {
                let i4 = e4.cloneNode(true);
                i4.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((t5) => i4.removeAttribute(t5)), t4.appendChild(i4);
              });
              let s3 = 0;
              [].forEach.call(i3.querySelectorAll("text tspan"), (t5) => {
                s3 += Number(t5.getAttribute("dy"));
              });
              let a2 = l.createElementNS(d, "tspan");
              a2.textContent = "​", u(a2, { x: Number(e3.getAttribute("x")), dy: -s3 }), t4.appendChild(a2), i3.insertBefore(t4, i3.firstChild);
            }
          }
          attr(t3, e3, i3, s2) {
            let o2 = this.element, r2 = D.symbolCustomAttribs, n2, l2, h2 = this, d2;
            return "string" == typeof t3 && void 0 !== e3 && (n2 = t3, (t3 = {})[n2] = e3), "string" == typeof t3 ? h2 = (this[t3 + "Getter"] || this._defaultGetter).call(this, t3, o2) : (A(t3, function(e4, i4) {
              d2 = false, s2 || a(this, i4), this.symbolName && -1 !== r2.indexOf(i4) && (l2 || (this.symbolAttr(t3), l2 = true), d2 = true), this.rotation && ("x" === i4 || "y" === i4) && (this.doTransform = true), d2 || (this[i4 + "Setter"] || this._defaultSetter).call(this, e4, i4, o2);
            }, this), this.afterSetters()), i3 && i3.call(this), h2;
          }
          clip(t3) {
            if (t3 && !t3.clipPath) {
              let e3 = O() + "-", i3 = this.renderer.createElement("clipPath").attr({ id: e3 }).add(this.renderer.defs);
              y(t3, { clipPath: i3, id: e3, count: 0 }), t3.add(i3);
            }
            return this.attr("clip-path", t3 ? `url(${this.renderer.url}#${t3.id})` : "none");
          }
          crisp(t3, e3) {
            let i3 = Math.round(e3 = e3 || t3.strokeWidth || 0) % 2 / 2;
            return t3.x = Math.floor(t3.x || this.x || 0) + i3, t3.y = Math.floor(t3.y || this.y || 0) + i3, t3.width = Math.floor((t3.width || this.width || 0) - 2 * i3), t3.height = Math.floor((t3.height || this.height || 0) - 2 * i3), m(t3.strokeWidth) && (t3.strokeWidth = e3), t3;
          }
          complexColor(t3, i3, s2) {
            let o2 = this.renderer, r2, a2, n2, l2, h2, d2, c2, p2, u2, g2, f2 = [], x2;
            b(this.renderer, "complexColor", { args: arguments }, function() {
              if (t3.radialGradient ? a2 = "radialGradient" : t3.linearGradient && (a2 = "linearGradient"), a2) {
                if (n2 = t3[a2], h2 = o2.gradients, d2 = t3.stops, u2 = s2.radialReference, v(n2) && (t3[a2] = n2 = { x1: n2[0], y1: n2[1], x2: n2[2], y2: n2[3], gradientUnits: "userSpaceOnUse" }), "radialGradient" === a2 && u2 && !m(n2.gradientUnits) && (l2 = n2, n2 = C(n2, o2.getRadialAttr(u2, l2), { gradientUnits: "userSpaceOnUse" })), A(n2, function(t4, e3) {
                  "id" !== e3 && f2.push(e3, t4);
                }), A(d2, function(t4) {
                  f2.push(t4);
                }), h2[f2 = f2.join(",")])
                  g2 = h2[f2].attr("id");
                else {
                  n2.id = g2 = O();
                  let t4 = h2[f2] = o2.createElement(a2).attr(n2).add(o2.defs);
                  t4.radAttr = l2, t4.stops = [], d2.forEach(function(i4) {
                    0 === i4[1].indexOf("rgba") ? (c2 = (r2 = e2.parse(i4[1])).get("rgb"), p2 = r2.get("a")) : (c2 = i4[1], p2 = 1);
                    let s3 = o2.createElement("stop").attr({ offset: i4[0], "stop-color": c2, "stop-opacity": p2 }).add(t4);
                    t4.stops.push(s3);
                  });
                }
                x2 = "url(" + o2.url + "#" + g2 + ")", s2.setAttribute(i3, x2), s2.gradient = f2, t3.toString = function() {
                  return x2;
                };
              }
            });
          }
          css(t3) {
            let e3 = this.styles, i3 = {}, s2 = this.element, o2, r2 = !e3;
            if (e3 && A(t3, function(t4, s3) {
              e3 && e3[s3] !== t4 && (i3[s3] = t4, r2 = true);
            }), r2) {
              e3 && (t3 = y(e3, i3)), null === t3.width || "auto" === t3.width ? delete this.textWidth : "text" === s2.nodeName.toLowerCase() && t3.width && (o2 = this.textWidth = T(t3.width)), y(this.styles, t3), o2 && !h && this.renderer.forExport && delete t3.width;
              let r3 = C(t3);
              s2.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((t4) => r3 && delete r3[t4]), r3.color && (r3.fill = r3.color)), f(s2, r3);
            }
            return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t3.textOutline && this.applyTextOutline(t3.textOutline)), this;
          }
          dashstyleSetter(t3) {
            let e3, i3 = this["stroke-width"];
            if ("inherit" === i3 && (i3 = 1), t3 = t3 && t3.toLowerCase()) {
              let s2 = t3.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (e3 = s2.length; e3--; )
                s2[e3] = "" + T(s2[e3]) * w(i3, NaN);
              t3 = s2.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t3);
            }
          }
          destroy() {
            let t3 = this, e3 = t3.element || {}, i3 = t3.renderer, s2 = e3.ownerSVGElement, o2 = "SPAN" === e3.nodeName && t3.parentGroup || void 0, r2, n2;
            if (e3.onclick = e3.onmouseout = e3.onmouseover = e3.onmousemove = e3.point = null, a(t3), t3.clipPath && s2) {
              let e4 = t3.clipPath;
              [].forEach.call(s2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t4) {
                t4.getAttribute("clip-path").indexOf(e4.element.id) > -1 && t4.removeAttribute("clip-path");
              }), t3.clipPath = e4.destroy();
            }
            if (t3.connector = t3.connector?.destroy(), t3.stops) {
              for (n2 = 0; n2 < t3.stops.length; n2++)
                t3.stops[n2].destroy();
              t3.stops.length = 0, t3.stops = void 0;
            }
            for (t3.safeRemoveChild(e3); o2 && o2.div && 0 === o2.div.childNodes.length; )
              r2 = o2.parentGroup, t3.safeRemoveChild(o2.div), delete o2.div, o2 = r2;
            t3.alignTo && x(i3.alignedObjects, t3), A(t3, function(e4, i4) {
              t3[i4] && t3[i4].parentGroup === t3 && t3[i4].destroy && t3[i4].destroy(), delete t3[i4];
            });
          }
          dSetter(t3, e3, i3) {
            v(t3) && ("string" == typeof t3[0] && (t3 = this.renderer.pathToSegments(t3)), this.pathArray = t3, t3 = t3.reduce((t4, e4, i4) => e4 && e4.join ? (i4 ? t4 + " " : "") + e4.join(" ") : (e4 || "").toString(), "")), /(NaN| {2}|^$)/.test(t3) && (t3 = "M 0 0"), this[e3] !== t3 && (i3.setAttribute(e3, t3), this[e3] = t3);
          }
          fillSetter(t3, e3, i3) {
            "string" == typeof t3 ? i3.setAttribute(e3, t3) : t3 && this.complexColor(t3, e3, i3);
          }
          hrefSetter(t3, e3, i3) {
            i3.setAttributeNS("http://www.w3.org/1999/xlink", e3, t3);
          }
          getBBox(t3, e3) {
            let i3, s2, o2, r2;
            let { alignValue: a2, element: n2, renderer: l2, styles: h2, textStr: d2 } = this, { cache: c2, cacheKeys: p2 } = l2, u2 = n2.namespaceURI === this.SVG_NS, g2 = w(e3, this.rotation, 0), x2 = l2.styledMode ? n2 && D.prototype.getStyle.call(n2, "font-size") : h2.fontSize;
            if (m(d2) && (-1 === (r2 = d2.toString()).indexOf("<") && (r2 = r2.replace(/[0-9]/g, "0")), r2 += ["", l2.rootFontSize, x2, g2, this.textWidth, a2, h2.textOverflow, h2.fontWeight].join(",")), r2 && !t3 && (i3 = c2[r2]), !i3) {
              if (u2 || l2.forExport) {
                try {
                  o2 = this.fakeTS && function(t4) {
                    let e4 = n2.querySelector(".highcharts-text-outline");
                    e4 && f(e4, { display: t4 });
                  }, S(o2) && o2("none"), i3 = n2.getBBox ? y({}, n2.getBBox()) : { width: n2.offsetWidth, height: n2.offsetHeight, x: 0, y: 0 }, S(o2) && o2("");
                } catch (t4) {
                }
                (!i3 || i3.width < 0) && (i3 = { x: 0, y: 0, width: 0, height: 0 });
              } else
                i3 = this.htmlGetBBox();
              s2 = i3.height, u2 && (i3.height = s2 = { "11px,17": 14, "13px,20": 16 }[`${x2 || ""},${Math.round(s2)}`] || s2), g2 && (i3 = this.getRotatedBox(i3, g2));
            }
            if (r2 && ("" === d2 || i3.height > 0)) {
              for (; p2.length > 250; )
                delete c2[p2.shift()];
              c2[r2] || p2.push(r2), c2[r2] = i3;
            }
            return i3;
          }
          getRotatedBox(t3, e3) {
            let { x: i3, y: s2, width: o2, height: r2 } = t3, { alignValue: a2, translateY: l2, rotationOriginX: h2 = 0, rotationOriginY: d2 = 0 } = this, c2 = { right: 1, center: 0.5 }[a2 || 0] || 0, p2 = Number(this.element.getAttribute("y") || 0) - (l2 ? 0 : s2), u2 = e3 * n, g2 = (e3 - 90) * n, f2 = Math.cos(u2), m2 = Math.sin(u2), x2 = o2 * f2, y2 = o2 * m2, b2 = Math.cos(g2), v2 = Math.sin(g2), [[S2, M2], [k2, C2]] = [h2, d2].map((t4) => [t4 - t4 * f2, t4 * m2]), A2 = i3 + c2 * (o2 - x2) + S2 + C2 + p2 * b2, w2 = A2 + x2, T2 = w2 - r2 * b2, P2 = T2 - x2, L2 = s2 + p2 - c2 * y2 - M2 + k2 + p2 * v2, O2 = L2 + y2, D2 = O2 - r2 * v2, E = D2 - y2, B = Math.min(A2, w2, T2, P2), j = Math.min(L2, O2, D2, E), I = Math.max(A2, w2, T2, P2) - B, R = Math.max(L2, O2, D2, E) - j;
            return { x: B, y: j, width: I, height: R };
          }
          getStyle(t3) {
            return c.getComputedStyle(this.element || this, "").getPropertyValue(t3);
          }
          hasClass(t3) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t3);
          }
          hide() {
            return this.attr({ visibility: "hidden" });
          }
          htmlGetBBox() {
            return { height: 0, width: 0, x: 0, y: 0 };
          }
          constructor(t3, e3) {
            this.onEvents = {}, this.opacity = 1, this.SVG_NS = d, this.element = "span" === e3 || "body" === e3 ? g(e3) : l.createElementNS(this.SVG_NS, e3), this.renderer = t3, this.styles = {}, b(this, "afterInit");
          }
          on(t3, e3) {
            let { onEvents: i3 } = this;
            return i3[t3] && i3[t3](), i3[t3] = p(this.element, t3, e3), this;
          }
          opacitySetter(t3, e3, i3) {
            let s2 = Number(Number(t3).toFixed(3));
            this.opacity = s2, i3.setAttribute(e3, s2);
          }
          removeClass(t3) {
            return this.attr("class", ("" + this.attr("class")).replace(k(t3) ? RegExp(`(^| )${t3}( |$)`) : t3, " ").replace(/ +/g, " ").trim());
          }
          removeTextOutline() {
            let t3 = this.element.querySelector("tspan.highcharts-text-outline");
            t3 && this.safeRemoveChild(t3);
          }
          safeRemoveChild(t3) {
            let e3 = t3.parentNode;
            e3 && e3.removeChild(t3);
          }
          setRadialReference(t3) {
            let e3 = this.element.gradient && this.renderer.gradients[this.element.gradient];
            return this.element.radialReference = t3, e3 && e3.radAttr && e3.animate(this.renderer.getRadialAttr(t3, e3.radAttr)), this;
          }
          setTextPath(t3, e3) {
            e3 = C(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, e3);
            let i3 = this.renderer.url, s2 = this.text || this, o2 = s2.textPath, { attributes: r2, enabled: a2 } = e3;
            if (t3 = t3 || o2 && o2.path, o2 && o2.undo(), t3 && a2) {
              let e4 = p(s2, "afterModifyTree", (e5) => {
                if (t3 && a2) {
                  let o3 = t3.attr("id");
                  o3 || t3.attr("id", o3 = O());
                  let a3 = { x: 0, y: 0 };
                  m(r2.dx) && (a3.dx = r2.dx, delete r2.dx), m(r2.dy) && (a3.dy = r2.dy, delete r2.dy), s2.attr(a3), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy());
                  let n2 = e5.nodes.slice(0);
                  e5.nodes.length = 0, e5.nodes[0] = { tagName: "textPath", attributes: y(r2, { "text-anchor": r2.textAnchor, href: `${i3}#${o3}` }), children: n2 };
                }
              });
              s2.textPath = { path: t3, undo: e4 };
            } else
              s2.attr({ dx: 0, dy: 0 }), delete s2.textPath;
            return this.added && (s2.textCache = "", this.renderer.buildText(s2)), this;
          }
          shadow(t3) {
            let { renderer: e3 } = this, i3 = C(this.parentGroup?.rotation === 90 ? { offsetX: -1, offsetY: -1 } : {}, M(t3) ? t3 : {}), s2 = e3.shadowDefinition(i3);
            return this.attr({ filter: t3 ? `url(${e3.url}#${s2})` : "none" });
          }
          show(t3 = true) {
            return this.attr({ visibility: t3 ? "inherit" : "visible" });
          }
          "stroke-widthSetter"(t3, e3, i3) {
            this[e3] = t3, i3.setAttribute(e3, t3);
          }
          strokeWidth() {
            if (!this.renderer.styledMode)
              return this["stroke-width"] || 0;
            let t3 = this.getStyle("stroke-width"), e3 = 0, i3;
            return /px$/.test(t3) ? e3 = T(t3) : "" !== t3 && (u(i3 = l.createElementNS(d, "rect"), { width: t3, "stroke-width": 0 }), this.element.parentNode.appendChild(i3), e3 = i3.getBBox().width, i3.parentNode.removeChild(i3)), e3;
          }
          symbolAttr(t3) {
            let e3 = this;
            D.symbolCustomAttribs.forEach(function(i3) {
              e3[i3] = w(t3[i3], e3[i3]);
            }), e3.attr({ d: e3.renderer.symbols[e3.symbolName](e3.x, e3.y, e3.width, e3.height, e3) });
          }
          textSetter(t3) {
            t3 !== this.textStr && (delete this.textPxLength, this.textStr = t3, this.added && this.renderer.buildText(this));
          }
          titleSetter(t3) {
            let e3 = this.element, i3 = e3.getElementsByTagName("title")[0] || l.createElementNS(this.SVG_NS, "title");
            e3.insertBefore ? e3.insertBefore(i3, e3.firstChild) : e3.appendChild(i3), i3.textContent = P(w(t3, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          }
          toFront() {
            let t3 = this.element;
            return t3.parentNode.appendChild(t3), this;
          }
          translate(t3, e3) {
            return this.attr({ translateX: t3, translateY: e3 });
          }
          updateTransform(t3 = "transform") {
            let { element: e3, matrix: i3, rotation: s2 = 0, rotationOriginX: o2, rotationOriginY: r2, scaleX: a2, scaleY: n2, translateX: l2 = 0, translateY: h2 = 0 } = this, d2 = ["translate(" + l2 + "," + h2 + ")"];
            m(i3) && d2.push("matrix(" + i3.join(",") + ")"), s2 && (d2.push("rotate(" + s2 + " " + w(o2, e3.getAttribute("x"), 0) + " " + w(r2, e3.getAttribute("y") || 0) + ")"), this.text?.element.tagName === "SPAN" && this.text.attr({ rotation: s2, rotationOriginX: (o2 || 0) - this.padding, rotationOriginY: (r2 || 0) - this.padding })), (m(a2) || m(n2)) && d2.push("scale(" + w(a2, 1) + " " + w(n2, 1) + ")"), d2.length && !(this.text || this).textPath && e3.setAttribute(t3, d2.join(" "));
          }
          visibilitySetter(t3, e3, i3) {
            "inherit" === t3 ? i3.removeAttribute(e3) : this[e3] !== t3 && i3.setAttribute(e3, t3), this[e3] = t3;
          }
          xGetter(t3) {
            return "circle" === this.element.nodeName && ("x" === t3 ? t3 = "cx" : "y" === t3 && (t3 = "cy")), this._defaultGetter(t3);
          }
          zIndexSetter(t3, e3) {
            let i3 = this.renderer, s2 = this.parentGroup, o2 = (s2 || i3).element || i3.box, r2 = this.element, a2 = o2 === i3.box, n2, l2, h2, d2 = false, c2, p2 = this.added, u2;
            if (m(t3) ? (r2.setAttribute("data-z-index", t3), t3 = +t3, this[e3] === t3 && (p2 = false)) : m(this[e3]) && r2.removeAttribute("data-z-index"), this[e3] = t3, p2) {
              for ((t3 = this.zIndex) && s2 && (s2.handleZ = true), u2 = (n2 = o2.childNodes).length - 1; u2 >= 0 && !d2; u2--)
                c2 = !m(h2 = (l2 = n2[u2]).getAttribute("data-z-index")), l2 !== r2 && (t3 < 0 && c2 && !a2 && !u2 ? (o2.insertBefore(r2, n2[u2]), d2 = true) : (T(h2) <= t3 || c2 && (!m(t3) || t3 >= 0)) && (o2.insertBefore(r2, n2[u2 + 1]), d2 = true));
              d2 || (o2.insertBefore(r2, n2[a2 ? 3 : 0]), d2 = true);
            }
            return d2;
          }
        }
        return D.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], D.prototype.strokeSetter = D.prototype.fillSetter, D.prototype.yGetter = D.prototype.xGetter, D.prototype.matrixSetter = D.prototype.rotationOriginXSetter = D.prototype.rotationOriginYSetter = D.prototype.rotationSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.verticalAlignSetter = function(t3, e3) {
          this[e3] = t3, this.doTransform = true;
        }, D;
      }), i(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { defined: i2, extend: s, isNumber: o, merge: r, pick: a, removeEvent: n } = e2;
        class l extends t2 {
          constructor(t3, e3, i3, s2, o2, r2, a2, n2, h, d) {
            let c;
            super(t3, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.textStr = e3, this.x = i3, this.y = s2, this.anchorX = r2, this.anchorY = a2, this.baseline = h, this.className = d, this.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && this.addClass("highcharts-" + d), this.text = t3.text(void 0, 0, 0, n2).attr({ zIndex: 1 }), "string" == typeof o2 && ((c = /^url\((.*?)\)$/.test(o2)) || this.renderer.symbols[o2]) && (this.symbolKey = o2), this.bBox = l.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t3.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0;
          }
          alignSetter(t3) {
            let e3 = { left: 0, center: 0.5, right: 1 }[t3];
            e3 !== this.alignFactor && (this.alignFactor = e3, this.bBox && o(this.xSetting) && this.attr({ x: this.xSetting }));
          }
          anchorXSetter(t3, e3) {
            this.anchorX = t3, this.boxAttr(e3, Math.round(t3) - this.getCrispAdjust() - this.xSetting);
          }
          anchorYSetter(t3, e3) {
            this.anchorY = t3, this.boxAttr(e3, t3 - this.ySetting);
          }
          boxAttr(t3, e3) {
            this.box ? this.box.attr(t3, e3) : this.deferredAttr[t3] = e3;
          }
          css(e3) {
            if (e3) {
              let t3 = {};
              e3 = r(e3), l.textProps.forEach((i3) => {
                void 0 !== e3[i3] && (t3[i3] = e3[i3], delete e3[i3]);
              }), this.text.css(t3), "fontSize" in t3 || "fontWeight" in t3 ? this.updateTextPadding() : ("width" in t3 || "textOverflow" in t3) && this.updateBoxSize();
            }
            return t2.prototype.css.call(this, e3);
          }
          destroy() {
            n(this.element, "mouseenter"), n(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t2.prototype.destroy.call(this);
          }
          fillSetter(t3, e3) {
            t3 && (this.needsBox = true), this.fill = t3, this.boxAttr(e3, t3);
          }
          getBBox(t3, e3) {
            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
            let { padding: i3, height: s2 = 0, translateX: o2 = 0, translateY: r2 = 0, width: n2 = 0 } = this, l2 = a(this.paddingLeft, i3), h = e3 ?? (this.rotation || 0), d = { width: n2, height: s2, x: o2 + this.bBox.x - l2, y: r2 + this.bBox.y - i3 + this.baselineOffset };
            return h && (d = this.getRotatedBox(d, h)), d;
          }
          getCrispAdjust() {
            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
          }
          heightSetter(t3) {
            this.heightSetting = t3;
          }
          onAdd() {
            this.text.add(this), this.attr({ text: a(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && i2(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
          }
          paddingSetter(t3, e3) {
            o(t3) ? t3 !== this[e3] && (this[e3] = t3, this.updateTextPadding()) : this[e3] = void 0;
          }
          rSetter(t3, e3) {
            this.boxAttr(e3, t3);
          }
          strokeSetter(t3, e3) {
            this.stroke = t3, this.boxAttr(e3, t3);
          }
          "stroke-widthSetter"(t3, e3) {
            t3 && (this.needsBox = true), this["stroke-width"] = t3, this.boxAttr(e3, t3);
          }
          "text-alignSetter"(t3) {
            this.textAlign = t3;
          }
          textSetter(t3) {
            void 0 !== t3 && this.text.attr({ text: t3 }), this.updateTextPadding();
          }
          updateBoxSize() {
            let t3;
            let e3 = this.text, r2 = {}, a2 = this.padding, n2 = this.bBox = (!o(this.widthSetting) || !o(this.heightSetting) || this.textAlign) && i2(e3.textStr) ? e3.getBBox(void 0, 0) : l.emptyBBox;
            this.width = this.getPaddedWidth(), this.height = (this.heightSetting || n2.height || 0) + 2 * a2;
            let h = this.renderer.fontMetrics(e3);
            if (this.baselineOffset = a2 + Math.min((this.text.firstLineMetrics || h).b, n2.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - h.h) / 2), this.needsBox && !e3.textPath) {
              if (!this.box) {
                let t4 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                t4.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t4.add(this);
              }
              t3 = this.getCrispAdjust(), r2.x = t3, r2.y = (this.baseline ? -this.baselineOffset : 0) + t3, r2.width = Math.round(this.width), r2.height = Math.round(this.height), this.box.attr(s(r2, this.deferredAttr)), this.deferredAttr = {};
            }
          }
          updateTextPadding() {
            let t3 = this.text;
            if (!t3.textPath) {
              this.updateBoxSize();
              let e3 = this.baseline ? 0 : this.baselineOffset, s2 = a(this.paddingLeft, this.padding);
              i2(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s2 += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)), (s2 !== t3.x || e3 !== t3.y) && (t3.attr("x", s2), t3.hasBoxWidthChanged && (this.bBox = t3.getBBox(true)), void 0 !== e3 && t3.attr("y", e3)), t3.x = s2, t3.y = e3;
            }
          }
          widthSetter(t3) {
            this.widthSetting = o(t3) ? t3 : void 0;
          }
          getPaddedWidth() {
            let t3 = this.padding, e3 = a(this.paddingLeft, t3), i3 = a(this.paddingRight, t3);
            return (this.widthSetting || this.bBox.width || 0) + e3 + i3;
          }
          xSetter(t3) {
            this.x = t3, this.alignFactor && (t3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true), this.xSetting = Math.round(t3), this.attr("translateX", this.xSetting);
          }
          ySetter(t3) {
            this.ySetting = this.y = Math.round(t3), this.attr("translateY", this.ySetting);
          }
        }
        return l.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, l.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], l;
      }), i(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function(t2) {
        let { defined: e2, isNumber: i2, pick: s } = t2;
        function o(t3, i3, o2, r2, a2) {
          let n = [];
          if (a2) {
            let l = a2.start || 0, h = s(a2.r, o2), d = s(a2.r, r2 || o2), c = 1e-3 > Math.abs((a2.end || 0) - l - 2 * Math.PI), p = (a2.end || 0) - 1e-3, u = a2.innerR, g = s(a2.open, c), f = Math.cos(l), m = Math.sin(l), x = Math.cos(p), y = Math.sin(p), b = s(a2.longArc, p - l - Math.PI < 1e-3 ? 0 : 1), v = ["A", h, d, 0, b, s(a2.clockwise, 1), t3 + h * x, i3 + d * y];
            v.params = { start: l, end: p, cx: t3, cy: i3 }, n.push(["M", t3 + h * f, i3 + d * m], v), e2(u) && ((v = ["A", u, u, 0, b, e2(a2.clockwise) ? 1 - a2.clockwise : 0, t3 + u * f, i3 + u * m]).params = { start: p, end: l, cx: t3, cy: i3 }, n.push(g ? ["M", t3 + u * x, i3 + u * y] : ["L", t3 + u * x, i3 + u * y], v)), g || n.push(["Z"]);
          }
          return n;
        }
        function r(t3, e3, i3, s2, o2) {
          return o2 && o2.r ? a(t3, e3, i3, s2, o2) : [["M", t3, e3], ["L", t3 + i3, e3], ["L", t3 + i3, e3 + s2], ["L", t3, e3 + s2], ["Z"]];
        }
        function a(t3, e3, i3, s2, o2) {
          let r2 = o2?.r || 0;
          return [["M", t3 + r2, e3], ["L", t3 + i3 - r2, e3], ["A", r2, r2, 0, 0, 1, t3 + i3, e3 + r2], ["L", t3 + i3, e3 + s2 - r2], ["A", r2, r2, 0, 0, 1, t3 + i3 - r2, e3 + s2], ["L", t3 + r2, e3 + s2], ["A", r2, r2, 0, 0, 1, t3, e3 + s2 - r2], ["L", t3, e3 + r2], ["A", r2, r2, 0, 0, 1, t3 + r2, e3], ["Z"]];
        }
        return { arc: o, callout: function(t3, e3, s2, o2, r2) {
          let n = Math.min(r2 && r2.r || 0, s2, o2), l = n + 6, h = r2 && r2.anchorX, d = r2 && r2.anchorY || 0, c = a(t3, e3, s2, o2, { r: n });
          if (!i2(h) || h < s2 && h > 0 && d < o2 && d > 0)
            return c;
          if (t3 + h > s2 - l) {
            if (d > e3 + l && d < e3 + o2 - l)
              c.splice(3, 1, ["L", t3 + s2, d - 6], ["L", t3 + s2 + 6, d], ["L", t3 + s2, d + 6], ["L", t3 + s2, e3 + o2 - n]);
            else if (h < s2) {
              let i3 = d < e3 + l, r3 = i3 ? e3 : e3 + o2;
              c.splice(i3 ? 2 : 5, 0, ["L", h, d], ["L", t3 + s2 - n, r3]);
            } else
              c.splice(3, 1, ["L", t3 + s2, o2 / 2], ["L", h, d], ["L", t3 + s2, o2 / 2], ["L", t3 + s2, e3 + o2 - n]);
          } else if (t3 + h < l) {
            if (d > e3 + l && d < e3 + o2 - l)
              c.splice(7, 1, ["L", t3, d + 6], ["L", t3 - 6, d], ["L", t3, d - 6], ["L", t3, e3 + n]);
            else if (h > 0) {
              let i3 = d < e3 + l, s3 = i3 ? e3 : e3 + o2;
              c.splice(i3 ? 1 : 6, 0, ["L", h, d], ["L", t3 + n, s3]);
            } else
              c.splice(7, 1, ["L", t3, o2 / 2], ["L", h, d], ["L", t3, o2 / 2], ["L", t3, e3 + n]);
          } else
            d > o2 && h < s2 - l ? c.splice(5, 1, ["L", h + 6, e3 + o2], ["L", h, e3 + o2 + 6], ["L", h - 6, e3 + o2], ["L", t3 + n, e3 + o2]) : d < 0 && h > l && c.splice(1, 1, ["L", h - 6, e3], ["L", h, e3 - 6], ["L", h + 6, e3], ["L", s2 - n, e3]);
          return c;
        }, circle: function(t3, e3, i3, s2) {
          return o(t3 + i3 / 2, e3 + s2 / 2, i3 / 2, s2 / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
        }, diamond: function(t3, e3, i3, s2) {
          return [["M", t3 + i3 / 2, e3], ["L", t3 + i3, e3 + s2 / 2], ["L", t3 + i3 / 2, e3 + s2], ["L", t3, e3 + s2 / 2], ["Z"]];
        }, rect: r, roundedRect: a, square: r, triangle: function(t3, e3, i3, s2) {
          return [["M", t3 + i3 / 2, e3], ["L", t3 + i3, e3 + s2], ["L", t3, e3 + s2], ["Z"]];
        }, "triangle-down": function(t3, e3, i3, s2) {
          return [["M", t3, e3], ["L", t3 + i3, e3], ["L", t3 + i3 / 2, e3 + s2], ["Z"]];
        } };
      }), i(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { doc: s, SVG_NS: o, win: r } = e2, { attr: a, extend: n, fireEvent: l, isString: h, objectEach: d, pick: c } = i2;
        return class {
          constructor(t3) {
            let e3 = t3.styles;
            this.renderer = t3.renderer, this.svgElement = t3, this.width = t3.textWidth, this.textLineHeight = e3 && e3.lineHeight, this.textOutline = e3 && e3.textOutline, this.ellipsis = !!(e3 && "ellipsis" === e3.textOverflow), this.noWrap = !!(e3 && "nowrap" === e3.whiteSpace);
          }
          buildSVG() {
            let e3 = this.svgElement, i3 = e3.element, o2 = e3.renderer, r2 = c(e3.textStr, "").toString(), a2 = -1 !== r2.indexOf("<"), n2 = i3.childNodes, l2 = !e3.added && o2.box, d2 = [r2, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, e3.getStyle("font-size"), this.width].join(",");
            if (d2 !== e3.textCache) {
              e3.textCache = d2, delete e3.actualWidth;
              for (let t3 = n2.length; t3--; )
                i3.removeChild(n2[t3]);
              if (a2 || this.ellipsis || this.width || e3.textPath || -1 !== r2.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(r2))) {
                if ("" !== r2) {
                  l2 && l2.appendChild(i3);
                  let s2 = new t2(r2);
                  this.modifyTree(s2.nodes), s2.addToDOM(i3), this.modifyDOM(), this.ellipsis && -1 !== (i3.textContent || "").indexOf("…") && e3.attr("title", this.unescapeEntities(e3.textStr || "", ["&lt;", "&gt;"])), l2 && l2.removeChild(i3);
                }
              } else
                i3.appendChild(s.createTextNode(this.unescapeEntities(r2)));
              h(this.textOutline) && e3.applyTextOutline && e3.applyTextOutline(this.textOutline);
            }
          }
          modifyDOM() {
            let t3;
            let e3 = this.svgElement, i3 = a(e3.element, "x");
            for (e3.firstLineMetrics = void 0; t3 = e3.element.firstChild; )
              if (/^[\s\u200B]*$/.test(t3.textContent || " "))
                e3.element.removeChild(t3);
              else
                break;
            [].forEach.call(e3.element.querySelectorAll("tspan.highcharts-br"), (t4, s2) => {
              t4.nextSibling && t4.previousSibling && (0 === s2 && 1 === t4.previousSibling.nodeType && (e3.firstLineMetrics = e3.renderer.fontMetrics(t4.previousSibling)), a(t4, { dy: this.getLineHeight(t4.nextSibling), x: i3 }));
            });
            let n2 = this.width || 0;
            if (!n2)
              return;
            let l2 = (t4, r2) => {
              let l3 = t4.textContent || "", h3 = l3.replace(/([^\^])-/g, "$1- ").split(" "), d2 = !this.noWrap && (h3.length > 1 || e3.element.childNodes.length > 1), c2 = this.getLineHeight(r2), p = 0, u = e3.actualWidth;
              if (this.ellipsis)
                l3 && this.truncate(t4, l3, void 0, 0, Math.max(0, n2 - 0.8 * c2), (t5, e4) => t5.substring(0, e4) + "…");
              else if (d2) {
                let l4 = [], d3 = [];
                for (; r2.firstChild && r2.firstChild !== t4; )
                  d3.push(r2.firstChild), r2.removeChild(r2.firstChild);
                for (; h3.length; )
                  h3.length && !this.noWrap && p > 0 && (l4.push(t4.textContent || ""), t4.textContent = h3.join(" ").replace(/- /g, "-")), this.truncate(t4, void 0, h3, 0 === p && u || 0, n2, (t5, e4) => h3.slice(0, e4).join(" ").replace(/- /g, "-")), u = e3.actualWidth, p++;
                d3.forEach((e4) => {
                  r2.insertBefore(e4, t4);
                }), l4.forEach((e4) => {
                  r2.insertBefore(s.createTextNode(e4), t4);
                  let n3 = s.createElementNS(o, "tspan");
                  n3.textContent = "​", a(n3, { dy: c2, x: i3 }), r2.insertBefore(n3, t4);
                });
              }
            }, h2 = (t4) => {
              [].slice.call(t4.childNodes).forEach((i4) => {
                i4.nodeType === r.Node.TEXT_NODE ? l2(i4, t4) : (-1 !== i4.className.baseVal.indexOf("highcharts-br") && (e3.actualWidth = 0), h2(i4));
              });
            };
            h2(e3.element);
          }
          getLineHeight(t3) {
            let e3 = t3.nodeType === r.Node.TEXT_NODE ? t3.parentElement : t3;
            return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e3 || this.svgElement.element).h;
          }
          modifyTree(t3) {
            let e3 = (i3, s2) => {
              let { attributes: o2 = {}, children: r2, style: a2 = {}, tagName: l2 } = i3, h2 = this.renderer.styledMode;
              if ("b" === l2 || "strong" === l2 ? h2 ? o2.class = "highcharts-strong" : a2.fontWeight = "bold" : ("i" === l2 || "em" === l2) && (h2 ? o2.class = "highcharts-emphasized" : a2.fontStyle = "italic"), a2 && a2.color && (a2.fill = a2.color), "br" === l2) {
                o2.class = "highcharts-br", i3.textContent = "​";
                let e4 = t3[s2 + 1];
                e4 && e4.textContent && (e4.textContent = e4.textContent.replace(/^ +/gm, ""));
              } else
                "a" === l2 && r2 && r2.some((t4) => "#text" === t4.tagName) && (i3.children = [{ children: r2, tagName: "tspan" }]);
              "#text" !== l2 && "a" !== l2 && (i3.tagName = "tspan"), n(i3, { attributes: o2, style: a2 }), r2 && r2.filter((t4) => "#text" !== t4.tagName).forEach(e3);
            };
            t3.forEach(e3), l(this.svgElement, "afterModifyTree", { nodes: t3 });
          }
          truncate(t3, e3, i3, s2, o2, r2) {
            let a2, n2;
            let l2 = this.svgElement, { rotation: h2 } = l2, d2 = [], c2 = i3 ? 1 : 0, p = (e3 || i3 || "").length, u = p, g = function(e4, o3) {
              let r3 = o3 || e4, a3 = t3.parentNode;
              if (a3 && void 0 === d2[r3] && a3.getSubStringLength)
                try {
                  d2[r3] = s2 + a3.getSubStringLength(0, i3 ? r3 + 1 : r3);
                } catch (t4) {
                }
              return d2[r3];
            };
            if (l2.rotation = 0, s2 + (n2 = g(t3.textContent.length)) > o2) {
              for (; c2 <= p; )
                u = Math.ceil((c2 + p) / 2), i3 && (a2 = r2(i3, u)), n2 = g(u, a2 && a2.length - 1), c2 === p ? c2 = p + 1 : n2 > o2 ? p = u - 1 : c2 = u;
              0 === p ? t3.textContent = "" : e3 && p === e3.length - 1 || (t3.textContent = a2 || r2(e3 || i3, u));
            }
            i3 && i3.splice(0, u), l2.actualWidth = n2, l2.rotation = h2;
          }
          unescapeEntities(t3, e3) {
            return d(this.renderer.escapes, function(i3, s2) {
              e3 && -1 !== e3.indexOf(i3) || (t3 = t3.toString().replace(RegExp(i3, "g"), s2));
            }), t3;
          }
        };
      }), i(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
        let h;
        let { charts: d, deg2rad: c, doc: p, isFirefox: u, isMS: g, isWebKit: f, noop: m, SVG_NS: x, symbolSizes: y, win: b } = i2, { addEvent: v, attr: S, createElement: M, css: k, defined: C, destroyObjectProperties: A, extend: w, isArray: T, isNumber: P, isObject: L, isString: O, merge: D, pick: E, pInt: B, replaceNested: j, uniqueKey: I } = l;
        class R {
          constructor(t3, e3, i3, s2, o2, r2, a2) {
            let n2, l2;
            let h2 = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), d2 = h2.element;
            a2 || h2.css(this.getStyle(s2 || {})), t3.appendChild(d2), S(t3, "dir", "ltr"), -1 === t3.innerHTML.indexOf("xmlns") && S(d2, "xmlns", this.SVG_NS), this.box = d2, this.boxWrapper = h2, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 11.4.0")), this.defs = this.createElement("defs").add(), this.allowHTML = r2, this.forExport = o2, this.styledMode = a2, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = h2.getStyle("font-size"), this.setSize(e3, i3, false), u && t3.getBoundingClientRect && ((n2 = function() {
              k(t3, { left: 0, top: 0 }), l2 = t3.getBoundingClientRect(), k(t3, { left: Math.ceil(l2.left) - l2.left + "px", top: Math.ceil(l2.top) - l2.top + "px" });
            })(), this.unSubPixelFix = v(b, "resize", n2));
          }
          definition(e3) {
            return new t2([e3]).addToDOM(this.defs.element);
          }
          getReferenceURL() {
            if ((u || f) && p.getElementsByTagName("base").length) {
              if (!C(h)) {
                let e3 = I(), i3 = new t2([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: e3 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${e3})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(p.body);
                k(i3, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                let s2 = p.elementFromPoint(6, 6);
                h = "hitme" === (s2 && s2.id), p.body.removeChild(i3);
              }
              if (h)
                return j(b.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
            }
            return "";
          }
          getStyle(t3) {
            return this.style = w({ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1rem" }, t3), this.style;
          }
          setStyle(t3) {
            this.boxWrapper.css(this.getStyle(t3));
          }
          isHidden() {
            return !this.boxWrapper.getBBox().width;
          }
          destroy() {
            let t3 = this.defs;
            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), A(this.gradients || {}), this.gradients = null, this.defs = t3.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
          }
          createElement(t3) {
            return new this.Element(this, t3);
          }
          getRadialAttr(t3, e3) {
            return { cx: t3[0] - t3[2] / 2 + (e3.cx || 0) * t3[2], cy: t3[1] - t3[2] / 2 + (e3.cy || 0) * t3[2], r: (e3.r || 0) * t3[2] };
          }
          shadowDefinition(t3) {
            let e3 = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t3).map((e4) => `${e4}-${t3[e4]}`)].join("-").toLowerCase().replace(/[^a-z0-9\-]/g, ""), i3 = D({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t3);
            return this.defs.element.querySelector(`#${e3}`) || this.definition({ tagName: "filter", attributes: { id: e3, filterUnits: i3.filterUnits }, children: [{ tagName: "feDropShadow", attributes: { dx: i3.offsetX, dy: i3.offsetY, "flood-color": i3.color, "flood-opacity": Math.min(5 * i3.opacity, 1), stdDeviation: i3.width / 2 } }] }), e3;
          }
          buildText(t3) {
            new n(t3).buildSVG();
          }
          getContrast(t3) {
            let i3 = e2.parse(t3).rgba.map((t4) => {
              let e3 = t4 / 255;
              return e3 <= 0.03928 ? e3 / 12.92 : Math.pow((e3 + 0.055) / 1.055, 2.4);
            }), s2 = 0.2126 * i3[0] + 0.7152 * i3[1] + 0.0722 * i3[2];
            return 1.05 / (s2 + 0.05) > (s2 + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          button(e3, i3, s2, o2, r2 = {}, a2, n2, l2, h2, d2) {
            let c2, p2, u2;
            let f2 = this.label(e3, i3, s2, h2, void 0, void 0, d2, void 0, "button"), m2 = this.styledMode, x2 = r2.states || {}, y2 = 0;
            r2 = D(r2), delete r2.states;
            let b2 = D({ color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, r2.style);
            delete r2.style;
            let S2 = t2.filterUserAttributes(r2);
            return f2.attr(D({ padding: 8, r: 2 }, S2)), m2 || (S2 = D({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, S2), c2 = (a2 = D(S2, { fill: "#e6e6e6" }, t2.filterUserAttributes(a2 || x2.hover || {}))).style, delete a2.style, p2 = (n2 = D(S2, { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, t2.filterUserAttributes(n2 || x2.select || {}))).style, delete n2.style, u2 = (l2 = D(S2, { style: { color: "#cccccc" } }, t2.filterUserAttributes(l2 || x2.disabled || {}))).style, delete l2.style), v(f2.element, g ? "mouseover" : "mouseenter", function() {
              3 !== y2 && f2.setState(1);
            }), v(f2.element, g ? "mouseout" : "mouseleave", function() {
              3 !== y2 && f2.setState(y2);
            }), f2.setState = function(t3) {
              if (1 !== t3 && (f2.state = y2 = t3), f2.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t3 || 0]), !m2) {
                f2.attr([S2, a2, n2, l2][t3 || 0]);
                let e4 = [b2, c2, p2, u2][t3 || 0];
                L(e4) && f2.css(e4);
              }
            }, !m2 && (f2.attr(S2).css(w({ cursor: "default" }, b2)), d2 && f2.text.css({ pointerEvents: "none" })), f2.on("touchstart", (t3) => t3.stopPropagation()).on("click", function(t3) {
              3 !== y2 && o2.call(f2, t3);
            });
          }
          crispLine(t3, e3, i3 = "round") {
            let s2 = t3[0], o2 = t3[1];
            return C(s2[1]) && s2[1] === o2[1] && (s2[1] = o2[1] = Math[i3](s2[1]) - e3 % 2 / 2), C(s2[2]) && s2[2] === o2[2] && (s2[2] = o2[2] = Math[i3](s2[2]) + e3 % 2 / 2), t3;
          }
          path(t3) {
            let e3 = this.styledMode ? {} : { fill: "none" };
            return T(t3) ? e3.d = t3 : L(t3) && w(e3, t3), this.createElement("path").attr(e3);
          }
          circle(t3, e3, i3) {
            let s2 = L(t3) ? t3 : void 0 === t3 ? {} : { x: t3, y: e3, r: i3 }, o2 = this.createElement("circle");
            return o2.xSetter = o2.ySetter = function(t4, e4, i4) {
              i4.setAttribute("c" + e4, t4);
            }, o2.attr(s2);
          }
          arc(t3, e3, i3, s2, o2, r2) {
            let a2;
            L(t3) ? (e3 = (a2 = t3).y, i3 = a2.r, s2 = a2.innerR, o2 = a2.start, r2 = a2.end, t3 = a2.x) : a2 = { innerR: s2, start: o2, end: r2 };
            let n2 = this.symbol("arc", t3, e3, i3, i3, a2);
            return n2.r = i3, n2;
          }
          rect(t3, e3, i3, s2, o2, r2) {
            let a2 = L(t3) ? t3 : void 0 === t3 ? {} : { x: t3, y: e3, r: o2, width: Math.max(i3 || 0, 0), height: Math.max(s2 || 0, 0) }, n2 = this.createElement("rect");
            return this.styledMode || (void 0 !== r2 && (a2["stroke-width"] = r2, w(a2, n2.crisp(a2))), a2.fill = "none"), n2.rSetter = function(t4, e4, i4) {
              n2.r = t4, S(i4, { rx: t4, ry: t4 });
            }, n2.rGetter = function() {
              return n2.r || 0;
            }, n2.attr(a2);
          }
          roundedRect(t3) {
            return this.symbol("roundedRect").attr(t3);
          }
          setSize(t3, e3, i3) {
            this.width = t3, this.height = e3, this.boxWrapper.animate({ width: t3, height: e3 }, { step: function() {
              this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
            }, duration: E(i3, true) ? void 0 : 0 }), this.alignElements();
          }
          g(t3) {
            let e3 = this.createElement("g");
            return t3 ? e3.attr({ class: "highcharts-" + t3 }) : e3;
          }
          image(t3, e3, i3, s2, o2, r2) {
            let a2 = { preserveAspectRatio: "none" };
            P(e3) && (a2.x = e3), P(i3) && (a2.y = i3), P(s2) && (a2.width = s2), P(o2) && (a2.height = o2);
            let n2 = this.createElement("image").attr(a2), l2 = function(e4) {
              n2.attr({ href: t3 }), r2.call(n2, e4);
            };
            if (r2) {
              n2.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
              let e4 = new b.Image();
              v(e4, "load", l2), e4.src = t3, e4.complete && l2({});
            } else
              n2.attr({ href: t3 });
            return n2;
          }
          symbol(t3, e3, i3, s2, o2, r2) {
            let a2, n2, l2, h2;
            let c2 = this, u2 = /^url\((.*?)\)$/, g2 = u2.test(t3), f2 = !g2 && (this.symbols[t3] ? t3 : "circle"), m2 = f2 && this.symbols[f2];
            if (m2)
              "number" == typeof e3 && (n2 = m2.call(this.symbols, Math.round(e3 || 0), Math.round(i3 || 0), s2 || 0, o2 || 0, r2)), a2 = this.path(n2), c2.styledMode || a2.attr("fill", "none"), w(a2, { symbolName: f2 || void 0, x: e3, y: i3, width: s2, height: o2 }), r2 && w(a2, r2);
            else if (g2) {
              l2 = t3.match(u2)[1];
              let s3 = a2 = this.image(l2);
              s3.imgwidth = E(r2 && r2.width, y[l2] && y[l2].width), s3.imgheight = E(r2 && r2.height, y[l2] && y[l2].height), h2 = (t4) => t4.attr({ width: t4.width, height: t4.height }), ["width", "height"].forEach((t4) => {
                s3[`${t4}Setter`] = function(t5, e4) {
                  this[e4] = t5;
                  let { alignByTranslate: i4, element: s4, width: o3, height: a3, imgwidth: n3, imgheight: l3 } = this, h3 = "width" === e4 ? n3 : l3, d2 = 1;
                  r2 && "within" === r2.backgroundSize && o3 && a3 && n3 && l3 ? (d2 = Math.min(o3 / n3, a3 / l3), S(s4, { width: Math.round(n3 * d2), height: Math.round(l3 * d2) })) : s4 && h3 && s4.setAttribute(e4, h3), !i4 && n3 && l3 && this.translate(((o3 || 0) - n3 * d2) / 2, ((a3 || 0) - l3 * d2) / 2);
                };
              }), C(e3) && s3.attr({ x: e3, y: i3 }), s3.isImg = true, C(s3.imgwidth) && C(s3.imgheight) ? h2(s3) : (s3.attr({ width: 0, height: 0 }), M("img", { onload: function() {
                let t4 = d[c2.chartIndex];
                0 === this.width && (k(this, { position: "absolute", top: "-999em" }), p.body.appendChild(this)), y[l2] = { width: this.width, height: this.height }, s3.imgwidth = this.width, s3.imgheight = this.height, s3.element && h2(s3), this.parentNode && this.parentNode.removeChild(this), c2.imgCount--, c2.imgCount || !t4 || t4.hasLoaded || t4.onload();
              }, src: l2 }), this.imgCount++);
            }
            return a2;
          }
          clipRect(t3, e3, i3, s2) {
            return this.rect(t3, e3, i3, s2, 0);
          }
          text(t3, e3, i3, s2) {
            let o2 = {};
            if (s2 && (this.allowHTML || !this.forExport))
              return this.html(t3, e3, i3);
            o2.x = Math.round(e3 || 0), i3 && (o2.y = Math.round(i3)), C(t3) && (o2.text = t3);
            let r2 = this.createElement("text").attr(o2);
            return s2 && (!this.forExport || this.allowHTML) || (r2.xSetter = function(t4, e4, i4) {
              let s3 = i4.getElementsByTagName("tspan"), o3 = i4.getAttribute(e4);
              for (let i5 = 0, r3; i5 < s3.length; i5++)
                (r3 = s3[i5]).getAttribute(e4) === o3 && r3.setAttribute(e4, t4);
              i4.setAttribute(e4, t4);
            }), r2;
          }
          fontMetrics(t3) {
            let e3 = B(o.prototype.getStyle.call(t3, "font-size") || 0), i3 = e3 < 24 ? e3 + 3 : Math.round(1.2 * e3), s2 = Math.round(0.8 * i3);
            return { h: i3, b: s2, f: e3 };
          }
          rotCorr(t3, e3, i3) {
            let s2 = t3;
            return e3 && i3 && (s2 = Math.max(s2 * Math.cos(e3 * c), 4)), { x: -t3 / 3 * Math.sin(e3 * c), y: s2 };
          }
          pathToSegments(t3) {
            let e3 = [], i3 = [], s2 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
            for (let o2 = 0; o2 < t3.length; o2++)
              O(i3[0]) && P(t3[o2]) && i3.length === s2[i3[0].toUpperCase()] && t3.splice(o2, 0, i3[0].replace("M", "L").replace("m", "l")), "string" == typeof t3[o2] && (i3.length && e3.push(i3.slice(0)), i3.length = 0), i3.push(t3[o2]);
            return e3.push(i3.slice(0)), e3;
          }
          label(t3, e3, i3, s2, o2, a2, n2, l2, h2) {
            return new r(this, t3, e3, i3, s2, o2, a2, n2, l2, h2);
          }
          alignElements() {
            this.alignedObjects.forEach((t3) => t3.align());
          }
        }
        return w(R.prototype, { Element: o, SVG_NS: x, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: a, draw: m }), s.registerRendererType("svg", R, true), R;
      }), i(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { composed: o } = e2, { attr: r, css: a, createElement: n, defined: l, extend: h, pInt: d, pushUnique: c } = s;
        function p(t3, e3, s2) {
          let o2 = this.div?.style || s2.style;
          i2.prototype[`${e3}Setter`].call(this, t3, e3, s2), o2 && (o2[e3] = t3);
        }
        let u = (t3, e3) => {
          if (!t3.div) {
            let s2 = r(t3.element, "class"), o2 = t3.css, a2 = n("div", s2 ? { className: s2 } : void 0, __spreadProps(__spreadValues({ position: "absolute", left: `${t3.translateX || 0}px`, top: `${t3.translateY || 0}px` }, t3.styles), { display: t3.display, opacity: t3.opacity, visibility: t3.visibility }), t3.parentGroup?.div || e3);
            t3.classSetter = (t4, e4, i3) => {
              i3.setAttribute("class", t4), a2.className = t4;
            }, t3.translateXSetter = t3.translateYSetter = (e4, i3) => {
              t3[i3] = e4, a2.style["translateX" === i3 ? "left" : "top"] = `${e4}px`, t3.doTransform = true;
            }, t3.opacitySetter = t3.visibilitySetter = p, t3.css = (e4) => (o2.call(t3, e4), e4.cursor && (a2.style.cursor = e4.cursor), e4.pointerEvents && (a2.style.pointerEvents = e4.pointerEvents), t3), t3.on = function() {
              return i2.prototype.on.apply({ element: a2, onEvents: t3.onEvents }, arguments), t3;
            }, t3.div = a2;
          }
          return t3.div;
        };
        class g extends i2 {
          static compose(t3) {
            c(o, this.compose) && (t3.prototype.html = function(t4, e3, i3) {
              return new g(this, "span").attr({ text: t4, x: Math.round(e3), y: Math.round(i3) });
            });
          }
          constructor(t3, e3) {
            super(t3, e3), this.css(__spreadValues({ position: "absolute" }, t3.styledMode ? {} : { fontFamily: t3.style.fontFamily, fontSize: t3.style.fontSize })), this.element.style.whiteSpace = "nowrap";
          }
          getSpanCorrection(t3, e3, i3) {
            this.xCorr = -t3 * i3, this.yCorr = -e3;
          }
          css(t3) {
            let e3;
            let { element: i3 } = this, s2 = "SPAN" === i3.tagName && t3 && "width" in t3, o2 = s2 && t3.width;
            return s2 && (delete t3.width, this.textWidth = d(o2) || void 0, e3 = true), t3?.textOverflow === "ellipsis" && (t3.whiteSpace = "nowrap", t3.overflow = "hidden"), h(this.styles, t3), a(i3, t3), e3 && this.updateTransform(), this;
          }
          htmlGetBBox() {
            let { element: t3 } = this;
            return { x: t3.offsetLeft, y: t3.offsetTop, width: t3.offsetWidth, height: t3.offsetHeight };
          }
          updateTransform() {
            if (!this.added) {
              this.alignOnAdd = true;
              return;
            }
            let { element: t3, renderer: e3, rotation: i3, rotationOriginX: s2, rotationOriginY: o2, styles: r2, textAlign: n2 = "left", textWidth: h2, translateX: d2 = 0, translateY: c2 = 0, x: p2 = 0, y: u2 = 0 } = this, g2 = r2.whiteSpace;
            if (a(t3, { marginLeft: `${d2}px`, marginTop: `${c2}px` }), "SPAN" === t3.tagName) {
              let r3 = [i3, n2, t3.innerHTML, h2, this.textAlign].join(","), d3 = -(this.parentGroup?.padding * 1) || 0, c3, f2 = false;
              if (h2 !== this.oldTextWidth) {
                let e4 = this.textPxLength ? this.textPxLength : (a(t3, { width: "", whiteSpace: g2 || "nowrap" }), t3.offsetWidth), s3 = h2 || 0;
                (s3 > this.oldTextWidth || e4 > s3) && (/[ \-]/.test(t3.textContent || t3.innerText) || "ellipsis" === t3.style.textOverflow) && (a(t3, { width: e4 > s3 || i3 ? h2 + "px" : "auto", display: "block", whiteSpace: g2 || "normal" }), this.oldTextWidth = h2, f2 = true);
              }
              this.hasBoxWidthChanged = f2, r3 !== this.cTT && (c3 = e3.fontMetrics(t3).b, l(i3) && (i3 !== (this.oldRotation || 0) || n2 !== this.oldAlign) && this.setSpanRotation(i3, d3, d3), this.getSpanCorrection(!l(i3) && this.textPxLength || t3.offsetWidth, c3, { left: 0, center: 0.5, right: 1 }[n2]));
              let { xCorr: m = 0, yCorr: x = 0 } = this, y = (s2 ?? p2) - m - p2 - d3, b = (o2 ?? u2) - x - u2 - d3;
              a(t3, { left: `${p2 + m}px`, top: `${u2 + x}px`, transformOrigin: `${y}px ${b}px` }), this.cTT = r3, this.oldRotation = i3, this.oldAlign = n2;
            }
          }
          setSpanRotation(t3, e3, i3) {
            a(this.element, { transform: `rotate(${t3}deg)`, transformOrigin: `${e3}% ${i3}px` });
          }
          add(t3) {
            let e3;
            let i3 = this.renderer.box.parentNode, s2 = [];
            if (this.parentGroup = t3, t3 && !(e3 = t3.div)) {
              let o2 = t3;
              for (; o2; )
                s2.push(o2), o2 = o2.parentGroup;
              for (let t4 of s2.reverse())
                e3 = u(t4, i3);
            }
            return (e3 || i3).appendChild(this.element), this.added = true, this.alignOnAdd && this.updateTransform(), this;
          }
          textSetter(e3) {
            e3 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t2.setElementHTML(this.element, e3 ?? ""), this.textStr = e3, this.doTransform = true);
          }
          alignSetter(t3) {
            this.alignValue = this.textAlign = t3, this.doTransform = true;
          }
          xSetter(t3, e3) {
            this[e3] = t3, this.doTransform = true;
          }
        }
        let f = g.prototype;
        return f.visibilitySetter = f.opacitySetter = p, f.ySetter = f.rotationSetter = f.rotationOriginXSetter = f.rotationOriginYSetter = f.xSetter, g;
      }), i(e, "Core/Axis/AxisDefaults.js", [], function() {
        var t2, e2;
        return (e2 = t2 || (t2 = {})).xAxis = { alignTicks: true, allowDecimals: void 0, panningEnabled: true, zIndex: 2, zoomEnabled: true, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: false }, second: { main: "%H:%M:%S", range: false }, minute: { main: "%H:%M", range: false }, hour: { main: "%H:%M", range: false }, day: { main: "%e %b" }, week: { main: "%e %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: false, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: true, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: false, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: false, showEmpty: true, showFirstLabel: true, showLastLabel: true, startOfWeek: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: false, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, type: "linear", uniqueNames: true, visible: true, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, e2.yAxis = { reversedStacks: true, endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: void 0 }, startOnTick: true, title: { text: "Values" }, stackLabels: { animation: {}, allowOverlap: false, enabled: false, crop: true, overflow: "justify", formatter: function() {
          let { numberFormatter: t3 } = this.axis.chart;
          return t3(this.total || 0, -1);
        }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, t2;
      }), i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { addEvent: i2, isFunction: s, objectEach: o, removeEvent: r } = t2;
        return (e2 || (e2 = {})).registerEventOptions = function(t3, e3) {
          t3.eventOptions = t3.eventOptions || {}, o(e3.events, function(e4, o2) {
            t3.eventOptions[o2] !== e4 && (t3.eventOptions[o2] && (r(t3, o2, t3.eventOptions[o2]), delete t3.eventOptions[o2]), s(e4) && (t3.eventOptions[o2] = e4, i2(t3, o2, e4, { order: 0 })));
          });
        }, e2;
      }), i(e, "Core/Axis/Tick.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { deg2rad: s } = e2, { clamp: o, correctFloat: r, defined: a, destroyObjectProperties: n, extend: l, fireEvent: h, isNumber: d, merge: c, objectEach: p, pick: u } = i2;
        return class {
          constructor(t3, e3, i3, s2, o2) {
            this.isNew = true, this.isNewLabel = true, this.axis = t3, this.pos = e3, this.type = i3 || "", this.parameters = o2 || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, h(this, "init"), i3 || s2 || this.addLabel();
          }
          addLabel() {
            let e3 = this, i3 = e3.axis, s2 = i3.options, o2 = i3.chart, n2 = i3.categories, c2 = i3.logarithmic, p2 = i3.names, g = e3.pos, f = u(e3.options && e3.options.labels, s2.labels), m = i3.tickPositions, x = g === m[0], y = g === m[m.length - 1], b = (!f.step || 1 === f.step) && 1 === i3.tickInterval, v = m.info, S = e3.label, M, k, C, A = this.parameters.category || (n2 ? u(n2[g], p2[g], g) : g);
            c2 && d(A) && (A = r(c2.lin2log(A))), i3.dateTime && (v ? M = (k = o2.time.resolveDTLFormat(s2.dateTimeLabelFormats[!s2.grid && v.higherRanks[g] || v.unitName])).main : d(A) && (M = i3.dateTime.getXDateFormat(A, s2.dateTimeLabelFormats || {}))), e3.isFirst = x, e3.isLast = y;
            let w = { axis: i3, chart: o2, dateTimeLabelFormat: M, isFirst: x, isLast: y, pos: g, tick: e3, tickPositionInfo: v, value: A };
            h(this, "labelFormat", w);
            let T = (e4) => f.formatter ? f.formatter.call(e4, e4) : f.format ? (e4.text = i3.defaultLabelFormatter.call(e4), t2.format(f.format, e4, o2)) : i3.defaultLabelFormatter.call(e4), P = T.call(w, w), L = k && k.list;
            L ? e3.shortenLabel = function() {
              for (C = 0; C < L.length; C++)
                if (l(w, { dateTimeLabelFormat: L[C] }), S.attr({ text: T.call(w, w) }), S.getBBox().width < i3.getSlotWidth(e3) - 2 * f.padding)
                  return;
              S.attr({ text: "" });
            } : e3.shortenLabel = void 0, b && i3._addedPlotLB && e3.moveLabel(P, f), a(S) || e3.movedLabel ? S && S.textStr !== P && !b && (!S.textWidth || f.style.width || S.styles.width || S.css({ width: null }), S.attr({ text: P }), S.textPxLength = S.getBBox().width) : (e3.label = S = e3.createLabel(P, f), e3.rotation = 0);
          }
          createLabel(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.chart, r2 = a(t3) && e3.enabled ? o2.renderer.text(t3, i3?.x, i3?.y, e3.useHTML).add(s2.labelGroup) : void 0;
            return r2 && (o2.styledMode || r2.css(c(e3.style)), r2.textPxLength = r2.getBBox().width), r2;
          }
          destroy() {
            n(this, this.axis);
          }
          getPosition(t3, e3, i3, s2) {
            let a2 = this.axis, n2 = a2.chart, l2 = s2 && n2.oldChartHeight || n2.chartHeight, d2 = { x: t3 ? r(a2.translate(e3 + i3, void 0, void 0, s2) + a2.transB) : a2.left + a2.offset + (a2.opposite ? (s2 && n2.oldChartWidth || n2.chartWidth) - a2.right - a2.left : 0), y: t3 ? l2 - a2.bottom + a2.offset - (a2.opposite ? a2.height : 0) : r(l2 - a2.translate(e3 + i3, void 0, void 0, s2) - a2.transB) };
            return d2.y = o(d2.y, -1e5, 1e5), h(this, "afterGetPosition", { pos: d2 }), d2;
          }
          getLabelPosition(t3, e3, i3, o2, r2, n2, l2, d2) {
            let c2, p2;
            let g = this.axis, f = g.transA, m = g.isLinked && g.linkedParent ? g.linkedParent.reversed : g.reversed, x = g.staggerLines, y = g.tickRotCorr || { x: 0, y: 0 }, b = o2 || g.reserveSpaceDefault ? 0 : -g.labelOffset * ("center" === g.labelAlign ? 0.5 : 1), v = r2.distance, S = {};
            return c2 = 0 === g.side ? i3.rotation ? -v : -i3.getBBox().height : 2 === g.side ? y.y + v : Math.cos(i3.rotation * s) * (y.y - i3.getBBox(false, 0).height / 2), a(r2.y) && (c2 = 0 === g.side && g.horiz ? r2.y + c2 : r2.y), t3 = t3 + u(r2.x, [0, 1, 0, -1][g.side] * v) + b + y.x - (n2 && o2 ? n2 * f * (m ? -1 : 1) : 0), e3 = e3 + c2 - (n2 && !o2 ? n2 * f * (m ? 1 : -1) : 0), x && (p2 = l2 / (d2 || 1) % x, g.opposite && (p2 = x - p2 - 1), e3 += g.labelOffset / x * p2), S.x = t3, S.y = Math.round(e3), h(this, "afterGetLabelPosition", { pos: S, tickmarkOffset: n2, index: l2 }), S;
          }
          getLabelSize() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          }
          getMarkPath(t3, e3, i3, s2, o2, r2) {
            return r2.crispLine([["M", t3, e3], ["L", t3 + (o2 ? 0 : -i3), e3 + (o2 ? i3 : 0)]], s2);
          }
          handleOverflow(t3) {
            let e3 = this.axis, i3 = e3.options.labels, o2 = t3.x, r2 = e3.chart.chartWidth, a2 = e3.chart.spacing, n2 = u(e3.labelLeft, Math.min(e3.pos, a2[3])), l2 = u(e3.labelRight, Math.max(e3.isRadial ? 0 : e3.pos + e3.len, r2 - a2[1])), h2 = this.label, d2 = this.rotation, c2 = { left: 0, center: 0.5, right: 1 }[e3.labelAlign || h2.attr("align")], p2 = h2.getBBox().width, g = e3.getSlotWidth(this), f = {}, m = g, x = 1, y, b, v;
            d2 || "justify" !== i3.overflow ? d2 < 0 && o2 - c2 * p2 < n2 ? v = Math.round(o2 / Math.cos(d2 * s) - n2) : d2 > 0 && o2 + c2 * p2 > l2 && (v = Math.round((r2 - o2) / Math.cos(d2 * s))) : (y = o2 - c2 * p2, b = o2 + (1 - c2) * p2, y < n2 ? m = t3.x + m * (1 - c2) - n2 : b > l2 && (m = l2 - t3.x + m * c2, x = -1), (m = Math.min(g, m)) < g && "center" === e3.labelAlign && (t3.x += x * (g - m - c2 * (g - Math.min(p2, m)))), (p2 > m || e3.autoRotation && (h2.styles || {}).width) && (v = m)), v && (this.shortenLabel ? this.shortenLabel() : (f.width = Math.floor(v) + "px", (i3.style || {}).textOverflow || (f.textOverflow = "ellipsis"), h2.css(f)));
          }
          moveLabel(t3, e3) {
            let i3 = this, s2 = i3.label, o2 = i3.axis, r2 = false, a2;
            s2 && s2.textStr === t3 ? (i3.movedLabel = s2, r2 = true, delete i3.label) : p(o2.ticks, function(e4) {
              r2 || e4.isNew || e4 === i3 || !e4.label || e4.label.textStr !== t3 || (i3.movedLabel = e4.label, r2 = true, e4.labelPos = i3.movedLabel.xy, delete e4.label);
            }), !r2 && (i3.labelPos || s2) && (a2 = i3.labelPos || s2.xy, i3.movedLabel = i3.createLabel(t3, e3, a2), i3.movedLabel && i3.movedLabel.attr({ opacity: 0 }));
          }
          render(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.horiz, a2 = this.pos, n2 = u(this.tickmarkOffset, s2.tickmarkOffset), l2 = this.getPosition(o2, a2, n2, e3), d2 = l2.x, c2 = l2.y, p2 = s2.pos, g = p2 + s2.len, f = o2 && d2 === g || !o2 && c2 === p2 ? -1 : 1, m = o2 ? d2 : c2;
            !s2.chart.polar && this.isNew && (r(m) < p2 || m > g) && (i3 = 0);
            let x = u(i3, this.label && this.label.newOpacity, 1);
            i3 = u(i3, 1), this.isActive = true, this.renderGridLine(e3, i3, f), this.renderMark(l2, i3, f), this.renderLabel(l2, e3, x, t3), this.isNew = false, h(this, "afterRender");
          }
          renderGridLine(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.options, r2 = {}, a2 = this.pos, n2 = this.type, l2 = u(this.tickmarkOffset, s2.tickmarkOffset), h2 = s2.chart.renderer, d2 = this.gridLine, c2, p2 = o2.gridLineWidth, g = o2.gridLineColor, f = o2.gridLineDashStyle;
            "minor" === this.type && (p2 = o2.minorGridLineWidth, g = o2.minorGridLineColor, f = o2.minorGridLineDashStyle), d2 || (s2.chart.styledMode || (r2.stroke = g, r2["stroke-width"] = p2 || 0, r2.dashstyle = f), n2 || (r2.zIndex = 1), t3 && (e3 = 0), this.gridLine = d2 = h2.path().attr(r2).addClass("highcharts-" + (n2 ? n2 + "-" : "") + "grid-line").add(s2.gridGroup)), d2 && (c2 = s2.getPlotLinePath({ value: a2 + l2, lineWidth: d2.strokeWidth() * i3, force: "pass", old: t3, acrossPanes: false })) && d2[t3 || this.isNew ? "attr" : "animate"]({ d: c2, opacity: e3 });
          }
          renderMark(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.options, r2 = s2.chart.renderer, a2 = this.type, n2 = s2.tickSize(a2 ? a2 + "Tick" : "tick"), l2 = t3.x, h2 = t3.y, d2 = u(o2["minor" !== a2 ? "tickWidth" : "minorTickWidth"], !a2 && s2.isXAxis ? 1 : 0), c2 = o2["minor" !== a2 ? "tickColor" : "minorTickColor"], p2 = this.mark, g = !p2;
            n2 && (s2.opposite && (n2[0] = -n2[0]), p2 || (this.mark = p2 = r2.path().addClass("highcharts-" + (a2 ? a2 + "-" : "") + "tick").add(s2.axisGroup), s2.chart.styledMode || p2.attr({ stroke: c2, "stroke-width": d2 })), p2[g ? "attr" : "animate"]({ d: this.getMarkPath(l2, h2, n2[0], p2.strokeWidth() * i3, s2.horiz, r2), opacity: e3 }));
          }
          renderLabel(t3, e3, i3, s2) {
            let o2 = this.axis, r2 = o2.horiz, a2 = o2.options, n2 = this.label, l2 = a2.labels, h2 = l2.step, c2 = u(this.tickmarkOffset, o2.tickmarkOffset), p2 = t3.x, g = t3.y, f = true;
            n2 && d(p2) && (n2.xy = t3 = this.getLabelPosition(p2, g, n2, r2, l2, c2, s2, h2), (!this.isFirst || this.isLast || a2.showFirstLabel) && (!this.isLast || this.isFirst || a2.showLastLabel) ? !r2 || l2.step || l2.rotation || e3 || 0 === i3 || this.handleOverflow(t3) : f = false, h2 && s2 % h2 && (f = false), f && d(t3.y) ? (t3.opacity = i3, n2[this.isNewLabel ? "attr" : "animate"](t3).show(true), this.isNewLabel = false) : (n2.hide(), this.isNewLabel = true));
          }
          replaceMovedLabel() {
            let t3 = this.label, e3 = this.axis;
            t3 && !this.isNew && (t3.animate({ opacity: 0 }, void 0, t3.destroy), delete this.label), e3.isDirty = true, this.label = this.movedLabel, delete this.movedLabel;
          }
        };
      }), i(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
        let { animObject: l } = t2, { xAxis: h, yAxis: d } = e2, { defaultOptions: c } = s, { registerEventOptions: p } = o, { deg2rad: u } = r, { arrayMax: g, arrayMin: f, clamp: m, correctFloat: x, defined: y, destroyObjectProperties: b, erase: v, error: S, extend: M, fireEvent: k, getClosestDistance: C, insertItem: A, isArray: w, isNumber: T, isString: P, merge: L, normalizeTickInterval: O, objectEach: D, pick: E, relativeLength: B, removeEvent: j, splat: I, syncTimeout: R } = n, z = (t3, e3) => O(e3, void 0, void 0, E(t3.options.allowDecimals, e3 < 0.5 || void 0 !== t3.tickAmount), !!t3.tickAmount);
        M(c, { xAxis: h, yAxis: L(h, d) });
        class G {
          constructor(t3, e3, i3) {
            this.init(t3, e3, i3);
          }
          init(t3, e3, i3 = this.coll) {
            let s2 = "xAxis" === i3, o2 = this.isZAxis || (t3.inverted ? !s2 : s2);
            this.chart = t3, this.horiz = o2, this.isXAxis = s2, this.coll = i3, k(this, "init", { userOptions: e3 }), this.opposite = E(e3.opposite, this.opposite), this.side = E(e3.side, this.side, o2 ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e3);
            let r2 = this.options, a2 = r2.labels, n2 = r2.type;
            this.userOptions = e3, this.minPixelPadding = 0, this.reversed = E(r2.reversed, this.reversed), this.visible = r2.visible, this.zoomEnabled = r2.zoomEnabled, this.hasNames = "category" === n2 || true === r2.categories, this.categories = w(r2.categories) && r2.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = y(r2.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = r2.minRange || r2.maxZoom, this.range = r2.range, this.offset = r2.offset || 0, this.max = void 0, this.min = void 0;
            let l2 = E(r2.crosshair, I(t3.options.tooltip.crosshairs)[s2 ? 0 : 1]);
            this.crosshair = true === l2 ? {} : l2, -1 === t3.axes.indexOf(this) && (s2 ? t3.axes.splice(t3.xAxis.length, 0, this) : t3.axes.push(this), A(this, t3[this.coll])), t3.orderItems(this.coll), this.series = this.series || [], t3.inverted && !this.isZAxis && s2 && !y(this.reversed) && (this.reversed = true), this.labelRotation = T(a2.rotation) ? a2.rotation : void 0, p(this, r2), k(this, "afterInit");
          }
          setOptions(t3) {
            let e3 = this.horiz ? { labels: { autoRotation: [-45] }, margin: 15 } : { title: { rotation: 90 * this.side } };
            this.options = L(e3, c[this.coll], t3), k(this, "afterSetOptions", { userOptions: t3 });
          }
          defaultLabelFormatter() {
            let t3 = this.axis, { numberFormatter: e3 } = this.chart, i3 = T(this.value) ? this.value : NaN, s2 = t3.chart.time, o2 = t3.categories, r2 = this.dateTimeLabelFormat, a2 = c.lang, n2 = a2.numericSymbols, l2 = a2.numericSymbolMagnitude || 1e3, h2 = t3.logarithmic ? Math.abs(i3) : t3.tickInterval, d2 = n2 && n2.length, p2, u2;
            if (o2)
              u2 = `${this.value}`;
            else if (r2)
              u2 = s2.dateFormat(r2, i3);
            else if (d2 && n2 && h2 >= 1e3)
              for (; d2-- && void 0 === u2; )
                h2 >= (p2 = Math.pow(l2, d2 + 1)) && 10 * i3 % p2 == 0 && null !== n2[d2] && 0 !== i3 && (u2 = e3(i3 / p2, -1) + n2[d2]);
            return void 0 === u2 && (u2 = Math.abs(i3) >= 1e4 ? e3(i3, -1) : e3(i3, -1, void 0, "")), u2;
          }
          getSeriesExtremes() {
            let t3;
            let e3 = this;
            k(this, "getSeriesExtremes", null, function() {
              e3.hasVisibleSeries = false, e3.dataMin = e3.dataMax = e3.threshold = void 0, e3.softThreshold = !e3.isXAxis, e3.series.forEach((i3) => {
                if (i3.reserveSpace()) {
                  let s2 = i3.options, o2, r2 = s2.threshold, a2, n2;
                  if (e3.hasVisibleSeries = true, e3.positiveValuesOnly && 0 >= (r2 || 0) && (r2 = void 0), e3.isXAxis)
                    (o2 = i3.xData) && o2.length && (o2 = e3.logarithmic ? o2.filter((t4) => t4 > 0) : o2, a2 = (t3 = i3.getXExtremes(o2)).min, n2 = t3.max, T(a2) || a2 instanceof Date || (o2 = o2.filter(T), a2 = (t3 = i3.getXExtremes(o2)).min, n2 = t3.max), o2.length && (e3.dataMin = Math.min(E(e3.dataMin, a2), a2), e3.dataMax = Math.max(E(e3.dataMax, n2), n2)));
                  else {
                    let t4 = i3.applyExtremes();
                    T(t4.dataMin) && (a2 = t4.dataMin, e3.dataMin = Math.min(E(e3.dataMin, a2), a2)), T(t4.dataMax) && (n2 = t4.dataMax, e3.dataMax = Math.max(E(e3.dataMax, n2), n2)), y(r2) && (e3.threshold = r2), (!s2.softThreshold || e3.positiveValuesOnly) && (e3.softThreshold = false);
                  }
                }
              });
            }), k(this, "afterGetSeriesExtremes");
          }
          translate(t3, e3, i3, s2, o2, r2) {
            let a2 = this.linkedParent || this, n2 = s2 && a2.old ? a2.old.min : a2.min;
            if (!T(n2))
              return NaN;
            let l2 = a2.minPixelPadding, h2 = (a2.isOrdinal || a2.brokenAxis?.hasBreaks || a2.logarithmic && o2) && a2.lin2val, d2 = 1, c2 = 0, p2 = s2 && a2.old ? a2.old.transA : a2.transA, u2 = 0;
            if (p2 || (p2 = a2.transA), i3 && (d2 *= -1, c2 = a2.len), a2.reversed && (d2 *= -1, c2 -= d2 * (a2.sector || a2.len)), e3)
              u2 = (t3 = t3 * d2 + c2 - l2) / p2 + n2, h2 && (u2 = a2.lin2val(u2));
            else {
              h2 && (t3 = a2.val2lin(t3));
              let e4 = d2 * (t3 - n2) * p2;
              u2 = (a2.isRadial ? e4 : x(e4)) + c2 + d2 * l2 + (T(r2) ? p2 * r2 : 0);
            }
            return u2;
          }
          toPixels(t3, e3) {
            return this.translate(t3, false, !this.horiz, void 0, true) + (e3 ? 0 : this.pos);
          }
          toValue(t3, e3) {
            return this.translate(t3 - (e3 ? 0 : this.pos), true, !this.horiz, void 0, true);
          }
          getPlotLinePath(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.left, o2 = e3.top, r2 = t3.old, a2 = t3.value, n2 = t3.lineWidth, l2 = r2 && i3.oldChartHeight || i3.chartHeight, h2 = r2 && i3.oldChartWidth || i3.chartWidth, d2 = e3.transB, c2 = t3.translatedValue, p2 = t3.force, u2, g2, f2, x2, y2;
            function b2(t4, e4, i4) {
              return "pass" !== p2 && (t4 < e4 || t4 > i4) && (p2 ? t4 = m(t4, e4, i4) : y2 = true), t4;
            }
            let v2 = { value: a2, lineWidth: n2, old: r2, force: p2, acrossPanes: t3.acrossPanes, translatedValue: c2 };
            return k(this, "getPlotLinePath", v2, function(t4) {
              u2 = f2 = Math.round((c2 = m(c2 = E(c2, e3.translate(a2, void 0, void 0, r2)), -1e5, 1e5)) + d2), g2 = x2 = Math.round(l2 - c2 - d2), T(c2) ? e3.horiz ? (g2 = o2, x2 = l2 - e3.bottom + (i3.scrollablePixelsY || 0), u2 = f2 = b2(u2, s2, s2 + e3.width)) : (u2 = s2, f2 = h2 - e3.right + (i3.scrollablePixelsX || 0), g2 = x2 = b2(g2, o2, o2 + e3.height)) : (y2 = true, p2 = false), t4.path = y2 && !p2 ? void 0 : i3.renderer.crispLine([["M", u2, g2], ["L", f2, x2]], n2 || 1);
            }), v2.path;
          }
          getLinearTickPositions(t3, e3, i3) {
            let s2, o2, r2;
            let a2 = x(Math.floor(e3 / t3) * t3), n2 = x(Math.ceil(i3 / t3) * t3), l2 = [];
            if (x(a2 + t3) === a2 && (r2 = 20), this.single)
              return [e3];
            for (s2 = a2; s2 <= n2 && (l2.push(s2), (s2 = x(s2 + t3, r2)) !== o2); )
              o2 = s2;
            return l2;
          }
          getMinorTickInterval() {
            let { minorTicks: t3, minorTickInterval: e3 } = this.options;
            return true === t3 ? E(e3, "auto") : false !== t3 ? e3 : void 0;
          }
          getMinorTickPositions() {
            let t3 = this.options, e3 = this.tickPositions, i3 = this.minorTickInterval, s2 = this.pointRangePadding || 0, o2 = (this.min || 0) - s2, r2 = (this.max || 0) + s2, a2 = r2 - o2, n2 = [], l2;
            if (a2 && a2 / i3 < this.len / 3) {
              let s3 = this.logarithmic;
              if (s3)
                this.paddedTicks.forEach(function(t4, e4, o3) {
                  e4 && n2.push.apply(n2, s3.getLogTickPositions(i3, o3[e4 - 1], o3[e4], true));
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                n2 = n2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i3), o2, r2, t3.startOfWeek));
              else
                for (l2 = o2 + (e3[0] - o2) % i3; l2 <= r2 && l2 !== n2[0]; l2 += i3)
                  n2.push(l2);
            }
            return 0 !== n2.length && this.trimTicks(n2), n2;
          }
          adjustForMinRange() {
            let t3 = this.options, e3 = this.logarithmic, { max: i3, min: s2, minRange: o2 } = this, r2, a2, n2, l2;
            this.isXAxis && void 0 === o2 && !e3 && (o2 = y(t3.min) || y(t3.max) || y(t3.floor) || y(t3.ceiling) ? null : Math.min(5 * (C(this.series.map((t4) => (t4.xIncrement ? t4.xData?.slice(0, 2) : t4.xData) || [])) || 0), this.dataMax - this.dataMin)), T(i3) && T(s2) && T(o2) && i3 - s2 < o2 && (a2 = this.dataMax - this.dataMin >= o2, r2 = (o2 - i3 + s2) / 2, n2 = [s2 - r2, E(t3.min, s2 - r2)], a2 && (n2[2] = e3 ? e3.log2lin(this.dataMin) : this.dataMin), l2 = [(s2 = g(n2)) + o2, E(t3.max, s2 + o2)], a2 && (l2[2] = e3 ? e3.log2lin(this.dataMax) : this.dataMax), (i3 = f(l2)) - s2 < o2 && (n2[0] = i3 - o2, n2[1] = E(t3.min, i3 - o2), s2 = g(n2))), this.minRange = o2, this.min = s2, this.max = i3;
          }
          getClosest() {
            let t3, e3;
            if (this.categories)
              e3 = 1;
            else {
              let i3 = [];
              this.series.forEach(function(t4) {
                let s2 = t4.closestPointRange;
                t4.xData?.length === 1 ? i3.push(t4.xData[0]) : !t4.noSharedTooltip && y(s2) && t4.reserveSpace() && (e3 = y(e3) ? Math.min(e3, s2) : s2);
              }), i3.length && (i3.sort((t4, e4) => t4 - e4), t3 = C([i3]));
            }
            return t3 && e3 ? Math.min(t3, e3) : t3 || e3;
          }
          nameToX(t3) {
            let e3 = w(this.options.categories), i3 = e3 ? this.categories : this.names, s2 = t3.options.x, o2;
            return t3.series.requireSorting = false, y(s2) || (s2 = this.options.uniqueNames && i3 ? e3 ? i3.indexOf(t3.name) : E(i3.keys[t3.name], -1) : t3.series.autoIncrement()), -1 === s2 ? !e3 && i3 && (o2 = i3.length) : o2 = s2, void 0 !== o2 ? (this.names[o2] = t3.name, this.names.keys[t3.name] = o2) : t3.x && (o2 = t3.x), o2;
          }
          updateNames() {
            let t3 = this, e3 = this.names;
            e3.length > 0 && (Object.keys(e3.keys).forEach(function(t4) {
              delete e3.keys[t4];
            }), e3.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((e4) => {
              e4.xIncrement = null, (!e4.points || e4.isDirtyData) && (t3.max = Math.max(t3.max, e4.xData.length - 1), e4.processData(), e4.generatePoints()), e4.data.forEach(function(i3, s2) {
                let o2;
                i3?.options && void 0 !== i3.name && void 0 !== (o2 = t3.nameToX(i3)) && o2 !== i3.x && (i3.x = o2, e4.xData[s2] = o2);
              });
            }));
          }
          setAxisTranslation() {
            let t3 = this, e3 = t3.max - t3.min, i3 = t3.linkedParent, s2 = !!t3.categories, o2 = t3.isXAxis, r2 = t3.axisPointRange || 0, a2, n2 = 0, l2 = 0, h2, d2 = t3.transA;
            (o2 || s2 || r2) && (a2 = t3.getClosest(), i3 ? (n2 = i3.minPointOffset, l2 = i3.pointRangePadding) : t3.series.forEach(function(e4) {
              let i4 = s2 ? 1 : o2 ? E(e4.options.pointRange, a2, 0) : t3.axisPointRange || 0, h3 = e4.options.pointPlacement;
              if (r2 = Math.max(r2, i4), !t3.single || s2) {
                let t4 = e4.is("xrange") ? !o2 : o2;
                n2 = Math.max(n2, t4 && P(h3) ? 0 : i4 / 2), l2 = Math.max(l2, t4 && "on" === h3 ? 0 : i4);
              }
            }), h2 = t3.ordinal && t3.ordinal.slope && a2 ? t3.ordinal.slope / a2 : 1, t3.minPointOffset = n2 *= h2, t3.pointRangePadding = l2 *= h2, t3.pointRange = Math.min(r2, t3.single && s2 ? 1 : e3), o2 && a2 && (t3.closestPointRange = a2)), t3.translationSlope = t3.transA = d2 = t3.staticScale || t3.len / (e3 + l2 || 1), t3.transB = t3.horiz ? t3.left : t3.bottom, t3.minPixelPadding = d2 * n2, k(this, "afterSetAxisTranslation");
          }
          minFromRange() {
            let { max: t3, min: e3 } = this;
            return T(t3) && T(e3) && t3 - e3 || void 0;
          }
          setTickInterval(t3) {
            let { categories: e3, chart: i3, dataMax: s2, dataMin: o2, dateTime: r2, isXAxis: a2, logarithmic: n2, options: l2, softThreshold: h2 } = this, d2 = T(this.threshold) ? this.threshold : void 0, c2 = this.minRange || 0, { ceiling: p2, floor: u2, linkedTo: g2, softMax: f2, softMin: m2 } = l2, b2 = T(g2) && i3[this.coll]?.[g2], v2 = l2.tickPixelInterval, M2 = l2.maxPadding, C2 = l2.minPadding, A2 = 0, w2, P2 = T(l2.tickInterval) && l2.tickInterval >= 0 ? l2.tickInterval : void 0, L2, O2, D2, B2;
            if (r2 || e3 || b2 || this.getTickAmount(), D2 = E(this.userMin, l2.min), B2 = E(this.userMax, l2.max), b2 ? (this.linkedParent = b2, w2 = b2.getExtremes(), this.min = E(w2.min, w2.dataMin), this.max = E(w2.max, w2.dataMax), l2.type !== b2.options.type && S(11, true, i3)) : (h2 && y(d2) && T(s2) && T(o2) && (o2 >= d2 ? (L2 = d2, C2 = 0) : s2 <= d2 && (O2 = d2, M2 = 0)), this.min = E(D2, L2, o2), this.max = E(B2, O2, s2)), T(this.max) && T(this.min) && (n2 && (this.positiveValuesOnly && !t3 && 0 >= Math.min(this.min, E(o2, this.min)) && S(10, true, i3), this.min = x(n2.log2lin(this.min), 16), this.max = x(n2.log2lin(this.max), 16)), this.range && T(o2) && (this.userMin = this.min = D2 = Math.max(o2, this.minFromRange() || 0), this.userMax = B2 = this.max, this.range = void 0)), k(this, "foundExtremes"), this.adjustForMinRange(), T(this.min) && T(this.max)) {
              if (!T(this.userMin) && T(m2) && m2 < this.min && (this.min = D2 = m2), !T(this.userMax) && T(f2) && f2 > this.max && (this.max = B2 = f2), e3 || this.axisPointRange || this.stacking?.usePercentage || b2 || !(A2 = this.max - this.min) || (!y(D2) && C2 && (this.min -= A2 * C2), y(B2) || !M2 || (this.max += A2 * M2)), !T(this.userMin) && T(u2) && (this.min = Math.max(this.min, u2)), !T(this.userMax) && T(p2) && (this.max = Math.min(this.max, p2)), h2 && T(o2) && T(s2)) {
                let t4 = d2 || 0;
                !y(D2) && this.min < t4 && o2 >= t4 ? this.min = l2.minRange ? Math.min(t4, this.max - c2) : t4 : !y(B2) && this.max > t4 && s2 <= t4 && (this.max = l2.minRange ? Math.max(t4, this.min + c2) : t4);
              }
              !i3.polar && this.min > this.max && (y(l2.min) ? this.max = this.min : y(l2.max) && (this.min = this.max)), A2 = this.max - this.min;
            }
            if (this.min !== this.max && T(this.min) && T(this.max) ? b2 && !P2 && v2 === b2.options.tickPixelInterval ? this.tickInterval = P2 = b2.tickInterval : this.tickInterval = E(P2, this.tickAmount ? A2 / Math.max(this.tickAmount - 1, 1) : void 0, e3 ? 1 : A2 * v2 / Math.max(this.len, v2)) : this.tickInterval = 1, a2 && !t3) {
              let t4 = this.min !== this.old?.min || this.max !== this.old?.max;
              this.series.forEach(function(e4) {
                e4.forceCrop = e4.forceCropping?.(), e4.processData(t4);
              }), k(this, "postProcessData", { hasExtremesChanged: t4 });
            }
            this.setAxisTranslation(), k(this, "initialAxisTranslation"), this.pointRange && !P2 && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
            let j2 = E(l2.minTickInterval, r2 && !this.series.some((t4) => t4.noSharedTooltip) ? this.closestPointRange : 0);
            !P2 && this.tickInterval < j2 && (this.tickInterval = j2), r2 || n2 || P2 || (this.tickInterval = z(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
          }
          setTickPositions() {
            let t3 = this.options, e3 = t3.tickPositions, i3 = t3.tickPositioner, s2 = this.getMinorTickInterval(), o2 = !this.isPanning, r2 = o2 && t3.startOnTick, a2 = o2 && t3.endOnTick, n2 = [], l2;
            if (this.tickmarkOffset = this.categories && "between" === t3.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0, this.minorTickInterval = "auto" === s2 && this.tickInterval ? this.tickInterval / t3.minorTicksPerMajor : s2, this.single = this.min === this.max && y(this.min) && !this.tickAmount && (this.min % 1 == 0 || false !== t3.allowDecimals), e3)
              n2 = e3.slice();
            else if (T(this.min) && T(this.max)) {
              if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))
                n2 = [this.min, this.max], S(19, false, this.chart);
              else if (this.dateTime)
                n2 = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t3.units), this.min, this.max, t3.startOfWeek, this.ordinal?.positions, this.closestPointRange, true);
              else if (this.logarithmic)
                n2 = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
              else {
                let t4 = this.tickInterval, e4 = t4;
                for (; e4 <= 2 * t4; )
                  if (n2 = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && n2.length > this.tickAmount)
                    this.tickInterval = z(this, e4 *= 1.1);
                  else
                    break;
              }
              n2.length > this.len && (n2 = [n2[0], n2[n2.length - 1]])[0] === n2[1] && (n2.length = 1), i3 && (this.tickPositions = n2, (l2 = i3.apply(this, [this.min, this.max])) && (n2 = l2));
            }
            this.tickPositions = n2, this.paddedTicks = n2.slice(0), this.trimTicks(n2, r2, a2), !this.isLinked && T(this.min) && T(this.max) && (this.single && n2.length < 2 && !this.categories && !this.series.some((t4) => t4.is("heatmap") && "between" === t4.options.pointPlacement) && (this.min -= 0.5, this.max += 0.5), e3 || l2 || this.adjustTickAmount()), k(this, "afterSetTickPositions");
          }
          trimTicks(t3, e3, i3) {
            let s2 = t3[0], o2 = t3[t3.length - 1], r2 = !this.isOrdinal && this.minPointOffset || 0;
            if (k(this, "trimTicks"), !this.isLinked) {
              if (e3 && s2 !== -1 / 0)
                this.min = s2;
              else
                for (; this.min - r2 > t3[0]; )
                  t3.shift();
              if (i3)
                this.max = o2;
              else
                for (; this.max + r2 < t3[t3.length - 1]; )
                  t3.pop();
              0 === t3.length && y(s2) && !this.options.tickPositions && t3.push((o2 + s2) / 2);
            }
          }
          alignToOthers() {
            let t3;
            let e3 = this, i3 = e3.chart, s2 = [this], o2 = e3.options, r2 = i3.options.chart, a2 = "yAxis" === this.coll && r2.alignThresholds, n2 = [];
            if (e3.thresholdAlignment = void 0, (false !== r2.alignTicks && o2.alignTicks || a2) && false !== o2.startOnTick && false !== o2.endOnTick && !e3.logarithmic) {
              let o3 = (t4) => {
                let { horiz: e4, options: i4 } = t4;
                return [e4 ? i4.left : i4.top, i4.width, i4.height, i4.pane].join(",");
              }, r3 = o3(this);
              i3[this.coll].forEach(function(i4) {
                let { series: a3 } = i4;
                a3.length && a3.some((t4) => t4.visible) && i4 !== e3 && o3(i4) === r3 && (t3 = true, s2.push(i4));
              });
            }
            if (t3 && a2) {
              s2.forEach((t5) => {
                let i4 = t5.getThresholdAlignment(e3);
                T(i4) && n2.push(i4);
              });
              let t4 = n2.length > 1 ? n2.reduce((t5, e4) => t5 += e4, 0) / n2.length : void 0;
              s2.forEach((e4) => {
                e4.thresholdAlignment = t4;
              });
            }
            return t3;
          }
          getThresholdAlignment(t3) {
            if ((!T(this.dataMin) || this !== t3 && this.series.some((t4) => t4.isDirty || t4.isDirtyData)) && this.getSeriesExtremes(), T(this.threshold)) {
              let t4 = m((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
              return this.options.reversed && (t4 = 1 - t4), t4;
            }
          }
          getTickAmount() {
            let t3 = this.options, e3 = t3.tickPixelInterval, i3 = t3.tickAmount;
            y(t3.tickInterval) || i3 || !(this.len < e3) || this.isRadial || this.logarithmic || !t3.startOnTick || !t3.endOnTick || (i3 = 2), !i3 && this.alignToOthers() && (i3 = Math.ceil(this.len / e3) + 1), i3 < 4 && (this.finalTickAmt = i3, i3 = 5), this.tickAmount = i3;
          }
          adjustTickAmount() {
            let t3 = this, { finalTickAmt: e3, max: i3, min: s2, options: o2, tickPositions: r2, tickAmount: a2, thresholdAlignment: n2 } = t3, l2 = r2?.length, h2 = E(t3.threshold, t3.softThreshold ? 0 : null), d2, c2, p2 = t3.tickInterval, u2, g2 = () => r2.push(x(r2[r2.length - 1] + p2)), f2 = () => r2.unshift(x(r2[0] - p2));
            if (T(n2) && (u2 = n2 < 0.5 ? Math.ceil(n2 * (a2 - 1)) : Math.floor(n2 * (a2 - 1)), o2.reversed && (u2 = a2 - 1 - u2)), t3.hasData() && T(s2) && T(i3)) {
              let n3 = () => {
                t3.transA *= (l2 - 1) / (a2 - 1), t3.min = o2.startOnTick ? r2[0] : Math.min(s2, r2[0]), t3.max = o2.endOnTick ? r2[r2.length - 1] : Math.max(i3, r2[r2.length - 1]);
              };
              if (T(u2) && T(t3.threshold)) {
                for (; r2[u2] !== h2 || r2.length !== a2 || r2[0] > s2 || r2[r2.length - 1] < i3; ) {
                  for (r2.length = 0, r2.push(t3.threshold); r2.length < a2; )
                    void 0 === r2[u2] || r2[u2] > t3.threshold ? f2() : g2();
                  if (p2 > 8 * t3.tickInterval)
                    break;
                  p2 *= 2;
                }
                n3();
              } else if (l2 < a2) {
                for (; r2.length < a2; )
                  r2.length % 2 || s2 === h2 ? g2() : f2();
                n3();
              }
              if (y(e3)) {
                for (c2 = d2 = r2.length; c2--; )
                  (3 === e3 && c2 % 2 == 1 || e3 <= 2 && c2 > 0 && c2 < d2 - 1) && r2.splice(c2, 1);
                t3.finalTickAmt = void 0;
              }
            }
          }
          setScale() {
            let { coll: t3, stacking: e3 } = this, i3 = false, s2 = false;
            this.series.forEach((t4) => {
              i3 = i3 || t4.isDirtyData || t4.isDirty, s2 = s2 || t4.xAxis && t4.xAxis.isDirty || false;
            }), this.setAxisSize();
            let o2 = this.len !== (this.old && this.old.len);
            o2 || i3 || s2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e3 && "yAxis" === t3 && e3.buildStacks(), this.forceRedraw = false, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e3 && "xAxis" === t3 && e3.buildStacks(), this.isDirty || (this.isDirty = o2 || this.min !== this.old?.min || this.max !== this.old?.max)) : e3 && e3.cleanStacks(), i3 && delete this.allExtremes, k(this, "afterSetScale");
          }
          setExtremes(t3, e3, i3 = true, s2, o2) {
            this.series.forEach((t4) => {
              delete t4.kdTree;
            }), k(this, "setExtremes", o2 = M(o2, { min: t3, max: e3 }), (t4) => {
              this.userMin = t4.min, this.userMax = t4.max, this.eventArgs = t4, i3 && this.chart.redraw(s2);
            });
          }
          setAxisSize() {
            let t3 = this.chart, e3 = this.options, i3 = e3.offsets || [0, 0, 0, 0], s2 = this.horiz, o2 = this.width = Math.round(B(E(e3.width, t3.plotWidth - i3[3] + i3[1]), t3.plotWidth)), r2 = this.height = Math.round(B(E(e3.height, t3.plotHeight - i3[0] + i3[2]), t3.plotHeight)), a2 = this.top = Math.round(B(E(e3.top, t3.plotTop + i3[0]), t3.plotHeight, t3.plotTop)), n2 = this.left = Math.round(B(E(e3.left, t3.plotLeft + i3[3]), t3.plotWidth, t3.plotLeft));
            this.bottom = t3.chartHeight - r2 - a2, this.right = t3.chartWidth - o2 - n2, this.len = Math.max(s2 ? o2 : r2, 0), this.pos = s2 ? n2 : a2;
          }
          getExtremes() {
            let t3 = this.logarithmic;
            return { min: t3 ? x(t3.lin2log(this.min)) : this.min, max: t3 ? x(t3.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
          }
          getThreshold(t3) {
            let e3 = this.logarithmic, i3 = e3 ? e3.lin2log(this.min) : this.min, s2 = e3 ? e3.lin2log(this.max) : this.max;
            return null === t3 || t3 === -1 / 0 ? t3 = i3 : t3 === 1 / 0 ? t3 = s2 : i3 > t3 ? t3 = i3 : s2 < t3 && (t3 = s2), this.translate(t3, 0, 1, 0, 1);
          }
          autoLabelAlign(t3) {
            let e3 = (E(t3, 0) - 90 * this.side + 720) % 360, i3 = { align: "center" };
            return k(this, "autoLabelAlign", i3, function(t4) {
              e3 > 15 && e3 < 165 ? t4.align = "right" : e3 > 195 && e3 < 345 && (t4.align = "left");
            }), i3.align;
          }
          tickSize(t3) {
            let e3 = this.options, i3 = E(e3["tick" === t3 ? "tickWidth" : "minorTickWidth"], "tick" === t3 && this.isXAxis && !this.categories ? 1 : 0), s2 = e3["tick" === t3 ? "tickLength" : "minorTickLength"], o2;
            i3 && s2 && ("inside" === e3[t3 + "Position"] && (s2 = -s2), o2 = [s2, i3]);
            let r2 = { tickSize: o2 };
            return k(this, "afterTickSize", r2), r2.tickSize;
          }
          labelMetrics() {
            let t3 = this.chart.renderer, e3 = this.ticks, i3 = e3[Object.keys(e3)[0]] || {};
            return this.chart.renderer.fontMetrics(i3.label || i3.movedLabel || t3.box);
          }
          unsquish() {
            let t3 = this.options.labels, e3 = this.horiz, i3 = this.tickInterval, s2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / i3), o2 = t3.rotation, r2 = this.labelMetrics().h, a2 = Math.max(this.max - this.min, 0), n2 = function(t4) {
              let e4 = t4 / (s2 || 1);
              return (e4 = e4 > 1 ? Math.ceil(e4) : 1) * i3 > a2 && t4 !== 1 / 0 && s2 !== 1 / 0 && a2 && (e4 = Math.ceil(a2 / i3)), x(e4 * i3);
            }, l2 = i3, h2, d2 = Number.MAX_VALUE, c2;
            if (e3) {
              if (!t3.staggerLines && (T(o2) ? c2 = [o2] : s2 < t3.autoRotationLimit && (c2 = t3.autoRotation)), c2) {
                let t4, e4;
                for (let i4 of c2)
                  (i4 === o2 || i4 && i4 >= -90 && i4 <= 90) && (e4 = (t4 = n2(Math.abs(r2 / Math.sin(u * i4)))) + Math.abs(i4 / 360)) < d2 && (d2 = e4, h2 = i4, l2 = t4);
              }
            } else
              l2 = n2(0.75 * r2);
            return this.autoRotation = c2, this.labelRotation = E(h2, T(o2) ? o2 : 0), t3.step ? i3 : l2;
          }
          getSlotWidth(t3) {
            let e3 = this.chart, i3 = this.horiz, s2 = this.options.labels, o2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), r2 = e3.margin[3];
            if (t3 && T(t3.slotWidth))
              return t3.slotWidth;
            if (i3 && s2.step < 2)
              return s2.rotation ? 0 : (this.staggerLines || 1) * this.len / o2;
            if (!i3) {
              let t4 = s2.style.width;
              if (void 0 !== t4)
                return parseInt(String(t4), 10);
              if (r2)
                return r2 - e3.spacing[3];
            }
            return 0.33 * e3.chartWidth;
          }
          renderUnsquish() {
            let t3 = this.chart, e3 = t3.renderer, i3 = this.tickPositions, s2 = this.ticks, o2 = this.options.labels, r2 = o2.style, a2 = this.horiz, n2 = this.getSlotWidth(), l2 = Math.max(1, Math.round(n2 - 2 * o2.padding)), h2 = {}, d2 = this.labelMetrics(), c2 = r2.textOverflow, p2, u2, g2 = 0, f2, m2;
            if (P(o2.rotation) || (h2.rotation = o2.rotation || 0), i3.forEach(function(t4) {
              let e4 = s2[t4];
              e4.movedLabel && e4.replaceMovedLabel(), e4 && e4.label && e4.label.textPxLength > g2 && (g2 = e4.label.textPxLength);
            }), this.maxLabelLength = g2, this.autoRotation)
              g2 > l2 && g2 > d2.h ? h2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (n2 && (p2 = l2, !c2))
              for (u2 = "clip", m2 = i3.length; !a2 && m2--; )
                (f2 = s2[i3[m2]].label) && ("ellipsis" === f2.styles.textOverflow ? f2.css({ textOverflow: "clip" }) : f2.textPxLength > n2 && f2.css({ width: n2 + "px" }), f2.getBBox().height > this.len / i3.length - (d2.h - d2.f) && (f2.specificTextOverflow = "ellipsis"));
            h2.rotation && (p2 = g2 > 0.5 * t3.chartHeight ? 0.33 * t3.chartHeight : g2, c2 || (u2 = "ellipsis")), this.labelAlign = o2.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (h2.align = this.labelAlign), i3.forEach(function(t4) {
              let e4 = s2[t4], i4 = e4 && e4.label, o3 = r2.width, a3 = {};
              i4 && (i4.attr(h2), e4.shortenLabel ? e4.shortenLabel() : p2 && !o3 && "nowrap" !== r2.whiteSpace && (p2 < i4.textPxLength || "SPAN" === i4.element.tagName) ? (a3.width = p2 + "px", c2 || (a3.textOverflow = i4.specificTextOverflow || u2), i4.css(a3)) : !i4.styles.width || a3.width || o3 || i4.css({ width: null }), delete i4.specificTextOverflow, e4.rotation = h2.rotation);
            }, this), this.tickRotCorr = e3.rotCorr(d2.b, this.labelRotation || 0, 0 !== this.side);
          }
          hasData() {
            return this.series.some(function(t3) {
              return t3.hasData();
            }) || this.options.showEmpty && y(this.min) && y(this.max);
          }
          addTitle(t3) {
            let e3;
            let i3 = this.chart.renderer, s2 = this.horiz, o2 = this.opposite, r2 = this.options.title, a2 = this.chart.styledMode;
            this.axisTitle || ((e3 = r2.textAlign) || (e3 = (s2 ? { low: "left", middle: "center", high: "right" } : { low: o2 ? "right" : "left", middle: "center", high: o2 ? "left" : "right" })[r2.align]), this.axisTitle = i3.text(r2.text || "", 0, 0, r2.useHTML).attr({ zIndex: 7, rotation: r2.rotation || 0, align: e3 }).addClass("highcharts-axis-title"), a2 || this.axisTitle.css(L(r2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true), a2 || r2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t3 ? "show" : "hide"](t3);
          }
          generateTick(t3) {
            let e3 = this.ticks;
            e3[t3] ? e3[t3].addLabel() : e3[t3] = new a(this, t3);
          }
          createGroups() {
            let { axisParent: t3, chart: e3, coll: i3, options: s2 } = this, o2 = e3.renderer, r2 = (e4, r3, a2) => o2.g(e4).attr({ zIndex: a2 }).addClass(`highcharts-${i3.toLowerCase()}${r3} ` + (this.isRadial ? `highcharts-radial-axis${r3} ` : "") + (s2.className || "")).add(t3);
            this.axisGroup || (this.gridGroup = r2("grid", "-grid", s2.gridZIndex), this.axisGroup = r2("axis", "", s2.zIndex), this.labelGroup = r2("axis-labels", "-labels", s2.labels.zIndex));
          }
          getOffset() {
            let t3 = this, { chart: e3, horiz: i3, options: s2, side: o2, ticks: r2, tickPositions: a2, coll: n2 } = t3, l2 = e3.inverted && !t3.isZAxis ? [1, 0, 3, 2][o2] : o2, h2 = t3.hasData(), d2 = s2.title, c2 = s2.labels, p2 = T(s2.crossing), u2 = e3.axisOffset, g2 = e3.clipOffset, f2 = [-1, 1, 1, -1][o2], m2, x2 = 0, b2, v2 = 0, S2 = 0, M2, C2;
            if (t3.showAxis = m2 = h2 || s2.showEmpty, t3.staggerLines = t3.horiz && c2.staggerLines || void 0, t3.createGroups(), h2 || t3.isLinked ? (a2.forEach(function(e4) {
              t3.generateTick(e4);
            }), t3.renderUnsquish(), t3.reserveSpaceDefault = 0 === o2 || 2 === o2 || { 1: "left", 3: "right" }[o2] === t3.labelAlign, E(c2.reserveSpace, !p2 && null, "center" === t3.labelAlign || null, t3.reserveSpaceDefault) && a2.forEach(function(t4) {
              S2 = Math.max(r2[t4].getLabelSize(), S2);
            }), t3.staggerLines && (S2 *= t3.staggerLines), t3.labelOffset = S2 * (t3.opposite ? -1 : 1)) : D(r2, function(t4, e4) {
              t4.destroy(), delete r2[e4];
            }), d2?.text && false !== d2.enabled && (t3.addTitle(m2), m2 && !p2 && false !== d2.reserveSpace && (t3.titleOffset = x2 = t3.axisTitle.getBBox()[i3 ? "height" : "width"], v2 = y(b2 = d2.offset) ? 0 : E(d2.margin, i3 ? 5 : 10))), t3.renderLine(), t3.offset = f2 * E(s2.offset, u2[o2] ? u2[o2] + (s2.margin || 0) : 0), t3.tickRotCorr = t3.tickRotCorr || { x: 0, y: 0 }, C2 = 0 === o2 ? -t3.labelMetrics().h : 2 === o2 ? t3.tickRotCorr.y : 0, M2 = Math.abs(S2) + v2, S2 && (M2 -= C2, M2 += f2 * (i3 ? E(c2.y, t3.tickRotCorr.y + f2 * c2.distance) : E(c2.x, f2 * c2.distance))), t3.axisTitleMargin = E(b2, M2), t3.getMaxLabelDimensions && (t3.maxLabelDimensions = t3.getMaxLabelDimensions(r2, a2)), "colorAxis" !== n2) {
              let e4 = this.tickSize("tick");
              u2[o2] = Math.max(u2[o2], (t3.axisTitleMargin || 0) + x2 + f2 * t3.offset, M2, a2 && a2.length && e4 ? e4[0] + f2 * t3.offset : 0);
              let i4 = !t3.axisLine || s2.offset ? 0 : 2 * Math.floor(t3.axisLine.strokeWidth() / 2);
              g2[l2] = Math.max(g2[l2], i4);
            }
            k(this, "afterGetOffset");
          }
          getLinePath(t3) {
            let e3 = this.chart, i3 = this.opposite, s2 = this.offset, o2 = this.horiz, r2 = this.left + (i3 ? this.width : 0) + s2, a2 = e3.chartHeight - this.bottom - (i3 ? this.height : 0) + s2;
            return i3 && (t3 *= -1), e3.renderer.crispLine([["M", o2 ? this.left : r2, o2 ? a2 : this.top], ["L", o2 ? e3.chartWidth - this.right : r2, o2 ? a2 : e3.chartHeight - this.bottom]], t3);
          }
          renderLine() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
          }
          getTitlePosition(t3) {
            let e3 = this.horiz, i3 = this.left, s2 = this.top, o2 = this.len, r2 = this.options.title, a2 = e3 ? i3 : s2, n2 = this.opposite, l2 = this.offset, h2 = r2.x, d2 = r2.y, c2 = this.chart.renderer.fontMetrics(t3), p2 = t3 ? Math.max(t3.getBBox(false, 0).height - c2.h - 1, 0) : 0, u2 = { low: a2 + (e3 ? 0 : o2), middle: a2 + o2 / 2, high: a2 + (e3 ? o2 : 0) }[r2.align], g2 = (e3 ? s2 + this.height : i3) + (e3 ? 1 : -1) * (n2 ? -1 : 1) * (this.axisTitleMargin || 0) + [-p2, p2, c2.f, -p2][this.side], f2 = { x: e3 ? u2 + h2 : g2 + (n2 ? this.width : 0) + l2 + h2, y: e3 ? g2 + d2 - (n2 ? this.height : 0) + l2 : u2 + d2 };
            return k(this, "afterGetTitlePosition", { titlePosition: f2 }), f2;
          }
          renderMinorTick(t3, e3) {
            let i3 = this.minorTicks;
            i3[t3] || (i3[t3] = new a(this, t3, "minor")), e3 && i3[t3].isNew && i3[t3].render(null, true), i3[t3].render(null, false, 1);
          }
          renderTick(t3, e3, i3) {
            let s2 = this.isLinked, o2 = this.ticks;
            (!s2 || t3 >= this.min && t3 <= this.max || this.grid && this.grid.isColumn) && (o2[t3] || (o2[t3] = new a(this, t3)), i3 && o2[t3].isNew && o2[t3].render(e3, true, -1), o2[t3].render(e3));
          }
          render() {
            let t3, e3;
            let i3 = this, s2 = i3.chart, o2 = i3.logarithmic, n2 = s2.renderer, h2 = i3.options, d2 = i3.isLinked, c2 = i3.tickPositions, p2 = i3.axisTitle, u2 = i3.ticks, g2 = i3.minorTicks, f2 = i3.alternateBands, m2 = h2.stackLabels, x2 = h2.alternateGridColor, y2 = h2.crossing, b2 = i3.tickmarkOffset, v2 = i3.axisLine, S2 = i3.showAxis, M2 = l(n2.globalAnimation);
            if (i3.labelEdge.length = 0, i3.overlap = false, [u2, g2, f2].forEach(function(t4) {
              D(t4, function(t5) {
                t5.isActive = false;
              });
            }), T(y2)) {
              let t4 = this.isXAxis ? s2.yAxis[0] : s2.xAxis[0], e4 = [1, -1, -1, 1][this.side];
              if (t4) {
                let s3 = t4.toPixels(y2, true);
                i3.horiz && (s3 = t4.len - s3), i3.offset = e4 * s3;
              }
            }
            if (i3.hasData() || d2) {
              let n3 = i3.chart.hasRendered && i3.old && T(i3.old.min);
              i3.minorTickInterval && !i3.categories && i3.getMinorTickPositions().forEach(function(t4) {
                i3.renderMinorTick(t4, n3);
              }), c2.length && (c2.forEach(function(t4, e4) {
                i3.renderTick(t4, e4, n3);
              }), b2 && (0 === i3.min || i3.single) && (u2[-1] || (u2[-1] = new a(i3, -1, null, true)), u2[-1].render(-1))), x2 && c2.forEach(function(a2, n4) {
                e3 = void 0 !== c2[n4 + 1] ? c2[n4 + 1] + b2 : i3.max - b2, n4 % 2 == 0 && a2 < i3.max && e3 <= i3.max + (s2.polar ? -b2 : b2) && (f2[a2] || (f2[a2] = new r.PlotLineOrBand(i3, {})), t3 = a2 + b2, f2[a2].options = { from: o2 ? o2.lin2log(t3) : t3, to: o2 ? o2.lin2log(e3) : e3, color: x2, className: "highcharts-alternate-grid" }, f2[a2].render(), f2[a2].isActive = true);
              }), i3._addedPlotLB || (i3._addedPlotLB = true, (h2.plotLines || []).concat(h2.plotBands || []).forEach(function(t4) {
                i3.addPlotBandOrLine(t4);
              }));
            }
            [u2, g2, f2].forEach(function(t4) {
              let e4 = [], i4 = M2.duration;
              D(t4, function(t5, i5) {
                t5.isActive || (t5.render(i5, false, 0), t5.isActive = false, e4.push(i5));
              }), R(function() {
                let i5 = e4.length;
                for (; i5--; )
                  t4[e4[i5]] && !t4[e4[i5]].isActive && (t4[e4[i5]].destroy(), delete t4[e4[i5]]);
              }, t4 !== f2 && s2.hasRendered && i4 ? i4 : 0);
            }), v2 && (v2[v2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(v2.strokeWidth()) }), v2.isPlaced = true, v2[S2 ? "show" : "hide"](S2)), p2 && S2 && (p2[p2.isNew ? "attr" : "animate"](i3.getTitlePosition(p2)), p2.isNew = false), m2 && m2.enabled && i3.stacking && i3.stacking.renderStackTotals(), i3.old = { len: i3.len, max: i3.max, min: i3.min, transA: i3.transA, userMax: i3.userMax, userMin: i3.userMin }, i3.isDirty = false, k(this, "afterRender");
          }
          redraw() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t3) {
              t3.render();
            })), this.series.forEach(function(t3) {
              t3.isDirty = true;
            });
          }
          getKeepProps() {
            return this.keepProps || G.keepProps;
          }
          destroy(t3) {
            let e3 = this, i3 = e3.plotLinesAndBands, s2 = this.eventOptions;
            if (k(this, "destroy", { keepEvents: t3 }), t3 || j(e3), [e3.ticks, e3.minorTicks, e3.alternateBands].forEach(function(t4) {
              b(t4);
            }), i3) {
              let t4 = i3.length;
              for (; t4--; )
                i3[t4].destroy();
            }
            for (let t4 in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(t5) {
              e3[t5] && (e3[t5] = e3[t5].destroy());
            }), e3.plotLinesAndBandsGroups)
              e3.plotLinesAndBandsGroups[t4] = e3.plotLinesAndBandsGroups[t4].destroy();
            D(e3, function(t4, i4) {
              -1 === e3.getKeepProps().indexOf(i4) && delete e3[i4];
            }), this.eventOptions = s2;
          }
          drawCrosshair(t3, e3) {
            let s2 = this.crosshair, o2 = E(s2 && s2.snap, true), r2 = this.chart, a2, n2, l2, h2 = this.cross, d2;
            if (k(this, "drawCrosshair", { e: t3, point: e3 }), t3 || (t3 = this.cross && this.cross.e), s2 && false !== (y(e3) || !o2)) {
              if (o2 ? y(e3) && (n2 = E("colorAxis" !== this.coll ? e3.crosshairPos : null, this.isXAxis ? e3.plotX : this.len - e3.plotY)) : n2 = t3 && (this.horiz ? t3.chartX - this.pos : this.len - t3.chartY + this.pos), y(n2) && (d2 = { value: e3 && (this.isXAxis ? e3.x : E(e3.stackY, e3.y)), translatedValue: n2 }, r2.polar && M(d2, { isCrosshair: true, chartX: t3 && t3.chartX, chartY: t3 && t3.chartY, point: e3 }), a2 = this.getPlotLinePath(d2) || null), !y(a2)) {
                this.hideCrosshair();
                return;
              }
              l2 = this.categories && !this.isRadial, h2 || (this.cross = h2 = r2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l2 ? "category " : "thin ") + (s2.className || "")).attr({ zIndex: E(s2.zIndex, 2) }).add(), !r2.styledMode && (h2.attr({ stroke: s2.color || (l2 ? i2.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": E(s2.width, 1) }).css({ "pointer-events": "none" }), s2.dashStyle && h2.attr({ dashstyle: s2.dashStyle }))), h2.show().attr({ d: a2 }), l2 && !s2.width && h2.attr({ "stroke-width": this.transA }), this.cross.e = t3;
            } else
              this.hideCrosshair();
            k(this, "afterDrawCrosshair", { e: t3, point: e3 });
          }
          hideCrosshair() {
            this.cross && this.cross.hide(), k(this, "afterHideCrosshair");
          }
          update(t3, e3) {
            let i3 = this.chart;
            t3 = L(this.userOptions, t3), this.destroy(true), this.init(i3, t3), i3.isDirtyBox = true, E(e3, true) && i3.redraw();
          }
          remove(t3) {
            let e3 = this.chart, i3 = this.coll, s2 = this.series, o2 = s2.length;
            for (; o2--; )
              s2[o2] && s2[o2].remove(false);
            v(e3.axes, this), v(e3[i3] || [], this), e3.orderItems(i3), this.destroy(), e3.isDirtyBox = true, E(t3, true) && e3.redraw();
          }
          setTitle(t3, e3) {
            this.update({ title: t3 }, e3);
          }
          setCategories(t3, e3) {
            this.update({ categories: t3 }, e3);
          }
        }
        return G.keepProps = ["coll", "extKey", "hcEvents", "names", "series", "userMax", "userMin"], G;
      }), i(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { addEvent: i2, getMagnitude: s, normalizeTickInterval: o, timeUnits: r } = t2;
        return function(t3) {
          function e3() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function a() {
            if ("datetime" !== this.options.type) {
              this.dateTime = void 0;
              return;
            }
            this.dateTime || (this.dateTime = new n(this));
          }
          t3.compose = function(t4) {
            return t4.keepProps.includes("dateTime") || (t4.keepProps.push("dateTime"), t4.prototype.getTimeTicks = e3, i2(t4, "afterSetOptions", a)), t4;
          };
          class n {
            constructor(t4) {
              this.axis = t4;
            }
            normalizeTimeTickInterval(t4, e4) {
              let i3 = e4 || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], a2 = i3[i3.length - 1], n2 = r[a2[0]], l = a2[1], h;
              for (h = 0; h < i3.length && (n2 = r[(a2 = i3[h])[0]], l = a2[1], !i3[h + 1] || !(t4 <= (n2 * l[l.length - 1] + r[i3[h + 1][0]]) / 2)); h++)
                ;
              n2 === r.year && t4 < 5 * n2 && (l = [1, 2, 5]);
              let d = o(t4 / n2, l, "year" === a2[0] ? Math.max(s(t4 / n2), 1) : 1);
              return { unitRange: n2, count: d, unitName: a2[0] };
            }
            getXDateFormat(t4, e4) {
              let { axis: i3 } = this, s2 = i3.chart.time;
              return i3.closestPointRange ? s2.getDateFormat(i3.closestPointRange, t4, i3.options.startOfWeek, e4) || s2.resolveDTLFormat(e4.year).main : s2.resolveDTLFormat(e4.day).main;
            }
          }
          t3.Additions = n;
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { addEvent: i2, normalizeTickInterval: s, pick: o } = t2;
        return function(t3) {
          function e3(t4) {
            let e4 = t4.userOptions, i3 = this.logarithmic;
            "logarithmic" !== e4.type ? this.logarithmic = void 0 : i3 || (i3 = this.logarithmic = new a(this));
          }
          function r() {
            let t4 = this.logarithmic;
            t4 && (this.lin2val = function(e4) {
              return t4.lin2log(e4);
            }, this.val2lin = function(e4) {
              return t4.log2lin(e4);
            });
          }
          t3.compose = function(t4) {
            return t4.keepProps.includes("logarithmic") || (t4.keepProps.push("logarithmic"), i2(t4, "init", e3), i2(t4, "afterInit", r)), t4;
          };
          class a {
            constructor(t4) {
              this.axis = t4;
            }
            getLogTickPositions(t4, e4, i3, r2) {
              let a2 = this.axis, n = a2.len, l = a2.options, h = [];
              if (r2 || (this.minorAutoInterval = void 0), t4 >= 0.5)
                t4 = Math.round(t4), h = a2.getLinearTickPositions(t4, e4, i3);
              else if (t4 >= 0.08) {
                let s2, o2, a3, n2, l2, d, c;
                let p = Math.floor(e4);
                for (s2 = t4 > 0.3 ? [1, 2, 4] : t4 > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], o2 = p; o2 < i3 + 1 && !c; o2++)
                  for (a3 = 0, n2 = s2.length; a3 < n2 && !c; a3++)
                    (l2 = this.log2lin(this.lin2log(o2) * s2[a3])) > e4 && (!r2 || d <= i3) && void 0 !== d && h.push(d), d > i3 && (c = true), d = l2;
              } else {
                let d = this.lin2log(e4), c = this.lin2log(i3), p = r2 ? a2.getMinorTickInterval() : l.tickInterval, u = l.tickPixelInterval / (r2 ? 5 : 1), g = r2 ? n / a2.tickPositions.length : n;
                t4 = s(t4 = o("auto" === p ? null : p, this.minorAutoInterval, (c - d) * u / (g || 1))), h = a2.getLinearTickPositions(t4, d, c).map(this.log2lin), r2 || (this.minorAutoInterval = t4 / 5);
              }
              return r2 || (a2.tickInterval = t4), h;
            }
            lin2log(t4) {
              return Math.pow(10, t4);
            }
            log2lin(t4) {
              return Math.log(t4) / Math.LN10;
            }
          }
          t3.Additions = a;
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { erase: i2, extend: s, isNumber: o } = t2;
        return function(t3) {
          let e3;
          function r(t4) {
            return this.addPlotBandOrLine(t4, "plotBands");
          }
          function a(t4, i3) {
            let s2 = this.userOptions, o2 = new e3(this, t4);
            if (this.visible && (o2 = o2.render()), o2) {
              if (this._addedPlotLB || (this._addedPlotLB = true, (s2.plotLines || []).concat(s2.plotBands || []).forEach((t5) => {
                this.addPlotBandOrLine(t5);
              })), i3) {
                let e4 = s2[i3] || [];
                e4.push(t4), s2[i3] = e4;
              }
              this.plotLinesAndBands.push(o2);
            }
            return o2;
          }
          function n(t4) {
            return this.addPlotBandOrLine(t4, "plotLines");
          }
          function l(t4, e4, i3) {
            i3 = i3 || this.options;
            let s2 = this.getPlotLinePath({ value: e4, force: true, acrossPanes: i3.acrossPanes }), r2 = [], a2 = this.horiz, n2 = !o(this.min) || !o(this.max) || t4 < this.min && e4 < this.min || t4 > this.max && e4 > this.max, l2 = this.getPlotLinePath({ value: t4, force: true, acrossPanes: i3.acrossPanes }), h2, d2 = 1, c2;
            if (l2 && s2)
              for (n2 && (c2 = l2.toString() === s2.toString(), d2 = 0), h2 = 0; h2 < l2.length; h2 += 2) {
                let t5 = l2[h2], e5 = l2[h2 + 1], i4 = s2[h2], o2 = s2[h2 + 1];
                ("M" === t5[0] || "L" === t5[0]) && ("M" === e5[0] || "L" === e5[0]) && ("M" === i4[0] || "L" === i4[0]) && ("M" === o2[0] || "L" === o2[0]) && (a2 && i4[1] === t5[1] ? (i4[1] += d2, o2[1] += d2) : a2 || i4[2] !== t5[2] || (i4[2] += d2, o2[2] += d2), r2.push(["M", t5[1], t5[2]], ["L", e5[1], e5[2]], ["L", o2[1], o2[2]], ["L", i4[1], i4[2]], ["Z"])), r2.isFlat = c2;
              }
            return r2;
          }
          function h(t4) {
            this.removePlotBandOrLine(t4);
          }
          function d(t4) {
            let e4 = this.plotLinesAndBands, s2 = this.options, o2 = this.userOptions;
            if (e4) {
              let r2 = e4.length;
              for (; r2--; )
                e4[r2].id === t4 && e4[r2].destroy();
              [s2.plotLines || [], o2.plotLines || [], s2.plotBands || [], o2.plotBands || []].forEach(function(e5) {
                for (r2 = e5.length; r2--; )
                  (e5[r2] || {}).id === t4 && i2(e5, e5[r2]);
              });
            }
          }
          function c(t4) {
            this.removePlotBandOrLine(t4);
          }
          t3.compose = function(t4, i3) {
            let o2 = i3.prototype;
            return o2.addPlotBand || (e3 = t4, s(o2, { addPlotBand: r, addPlotLine: n, addPlotBandOrLine: a, getPlotBandPath: l, removePlotBand: h, removePlotLine: c, removePlotBandOrLine: d })), i3;
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { arrayMax: i2, arrayMin: s, defined: o, destroyObjectProperties: r, erase: a, fireEvent: n, merge: l, objectEach: h, pick: d } = e2;
        class c {
          static compose(e3) {
            return t2.compose(c, e3);
          }
          constructor(t3, e3) {
            this.axis = t3, this.options = e3, this.id = e3.id;
          }
          render() {
            n(this, "render");
            let { axis: t3, options: e3 } = this, { horiz: i3, logarithmic: s2 } = t3, { color: r2, events: a2, zIndex: c2 = 0 } = e3, p = {}, u = t3.chart.renderer, g = e3.to, f = e3.from, m = e3.value, x = e3.borderWidth, y = e3.label, { label: b, svgElem: v } = this, S = [], M, k = o(f) && o(g), C = o(m), A = !v, w = { class: "highcharts-plot-" + (k ? "band " : "line ") + (e3.className || "") }, T = k ? "bands" : "lines";
            if (!t3.chart.styledMode && (C ? (w.stroke = r2 || "#999999", w["stroke-width"] = d(e3.width, 1), e3.dashStyle && (w.dashstyle = e3.dashStyle)) : k && (w.fill = r2 || "#e6e9ff", x && (w.stroke = e3.borderColor, w["stroke-width"] = x))), p.zIndex = c2, T += "-" + c2, (M = t3.plotLinesAndBandsGroups[T]) || (t3.plotLinesAndBandsGroups[T] = M = u.g("plot-" + T).attr(p).add()), v || (this.svgElem = v = u.path().attr(w).add(M)), o(m))
              S = t3.getPlotLinePath({ value: s2?.log2lin(m) ?? m, lineWidth: v.strokeWidth(), acrossPanes: e3.acrossPanes });
            else {
              if (!(o(f) && o(g)))
                return;
              S = t3.getPlotBandPath(s2?.log2lin(f) ?? f, s2?.log2lin(g) ?? g, e3);
            }
            return !this.eventsAdded && a2 && (h(a2, (t4, e4) => {
              v?.on(e4, (t5) => {
                a2[e4].apply(this, [t5]);
              });
            }), this.eventsAdded = true), (A || !v.d) && S?.length ? v.attr({ d: S }) : v && (S ? (v.show(), v.animate({ d: S })) : v.d && (v.hide(), b && (this.label = b = b.destroy()))), y && (o(y.text) || o(y.formatter)) && S?.length && t3.width > 0 && t3.height > 0 && !S.isFlat ? (y = l({ align: i3 && k && "center", x: i3 ? !k && 4 : 10, verticalAlign: !i3 && k && "middle", y: i3 ? k ? 16 : 10 : k ? 6 : -4, rotation: i3 && !k && 90 }, y), this.renderLabel(y, S, k, c2)) : b && b.hide(), this;
          }
          renderLabel(t3, e3, o2, r2) {
            let a2 = this.axis, n2 = a2.chart.renderer, h2 = this.label;
            h2 || (this.label = h2 = n2.text(this.getLabelText(t3), 0, 0, t3.useHTML).attr({ align: t3.textAlign || t3.align, rotation: t3.rotation, class: "highcharts-plot-" + (o2 ? "band" : "line") + "-label" + (t3.className || ""), zIndex: r2 }), a2.chart.styledMode || h2.css(l({ fontSize: "0.8em", textOverflow: "ellipsis" }, t3.style)), h2.add());
            let d2 = e3.xBounds || [e3[0][1], e3[1][1], o2 ? e3[2][1] : e3[0][1]], c2 = e3.yBounds || [e3[0][2], e3[1][2], o2 ? e3[2][2] : e3[0][2]], p = s(d2), u = s(c2);
            if (h2.align(t3, false, { x: p, y: u, width: i2(d2) - p, height: i2(c2) - u }), !h2.alignValue || "left" === h2.alignValue) {
              let e4 = t3.clip ? a2.width : a2.chart.chartWidth;
              h2.css({ width: (90 === h2.rotation ? a2.height - (h2.alignAttr.y - a2.top) : e4 - (h2.alignAttr.x - a2.left)) + "px" });
            }
            h2.show(true);
          }
          getLabelText(t3) {
            return o(t3.formatter) ? t3.formatter.call(this) : t3.text;
          }
          destroy() {
            a(this.axis.plotLinesAndBands, this), delete this.axis, r(this);
          }
        }
        return c;
      }), i(e, "Core/Tooltip.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let { format: a } = t2, { composed: n, doc: l, isSafari: h } = e2, { distribute: d } = i2, { addEvent: c, clamp: p, css: u, discardElement: g, extend: f, fireEvent: m, isArray: x, isNumber: y, isString: b, merge: v, pick: S, pushUnique: M, splat: k, syncTimeout: C } = o;
        class A {
          constructor(t3, e3, i3) {
            this.allowShared = true, this.crosshairs = [], this.distance = 0, this.isHidden = true, this.isSticky = false, this.now = {}, this.options = {}, this.outside = false, this.chart = t3, this.init(t3, e3), this.pointer = i3;
          }
          bodyFormatter(t3) {
            return t3.map(function(t4) {
              let e3 = t4.series.tooltipOptions;
              return (e3[(t4.point.formatPrefix || "point") + "Formatter"] || t4.point.tooltipFormatter).call(t4.point, e3[(t4.point.formatPrefix || "point") + "Format"] || "");
            });
          }
          cleanSplit(t3) {
            this.chart.series.forEach(function(e3) {
              let i3 = e3 && e3.tt;
              i3 && (!i3.isActive || t3 ? e3.tt = i3.destroy() : i3.isActive = false);
            });
          }
          defaultFormatter(t3) {
            let e3;
            let i3 = this.points || k(this);
            return (e3 = (e3 = [t3.tooltipFooterHeaderFormatter(i3[0])]).concat(t3.bodyFormatter(i3))).push(t3.tooltipFooterHeaderFormatter(i3[0], true)), e3;
          }
          destroy() {
            this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(true), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), g(this.container)), o.clearTimeout(this.hideTimer), o.clearTimeout(this.tooltipTimeout);
          }
          getAnchor(t3, e3) {
            let i3;
            let { chart: s2, pointer: o2 } = this, r2 = s2.inverted, a2 = s2.plotTop, n2 = s2.plotLeft;
            if ((t3 = k(t3))[0].series && t3[0].series.yAxis && !t3[0].series.yAxis.options.reversedStacks && (t3 = t3.slice().reverse()), this.followPointer && e3)
              void 0 === e3.chartX && (e3 = o2.normalize(e3)), i3 = [e3.chartX - n2, e3.chartY - a2];
            else if (t3[0].tooltipPos)
              i3 = t3[0].tooltipPos;
            else {
              let s3 = 0, o3 = 0;
              t3.forEach(function(t4) {
                let e4 = t4.pos(true);
                e4 && (s3 += e4[0], o3 += e4[1]);
              }), s3 /= t3.length, o3 /= t3.length, this.shared && t3.length > 1 && e3 && (r2 ? s3 = e3.chartX : o3 = e3.chartY), i3 = [s3 - n2, o3 - a2];
            }
            return i3.map(Math.round);
          }
          getClassName(t3, e3, i3) {
            let s2 = this.options, o2 = t3.series, r2 = o2.options;
            return [s2.className, "highcharts-label", i3 && "highcharts-tooltip-header", e3 ? "highcharts-tooltip-box" : "highcharts-tooltip", !i3 && "highcharts-color-" + S(t3.colorIndex, o2.colorIndex), r2 && r2.className].filter(b).join(" ");
          }
          getLabel() {
            let t3 = this, i3 = this.chart.styledMode, o2 = this.options, r2 = this.split && this.allowShared, a2 = this.container, n2 = this.chart.renderer;
            if (this.label) {
              let t4 = !this.label.hasClass("highcharts-label");
              (!r2 && t4 || r2 && !t4) && this.destroy();
            }
            if (!this.label) {
              if (this.outside) {
                let t4 = this.chart.options.chart.style, i4 = s.getRendererType();
                this.container = a2 = e2.doc.createElement("div"), a2.className = "highcharts-tooltip-container", u(a2, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (t4 && t4.zIndex || 0) + 3) }), this.renderer = n2 = new i4(a2, 0, 0, t4, void 0, void 0, n2.styledMode);
              }
              if (r2 ? this.label = n2.g("tooltip") : (this.label = n2.label("", 0, 0, o2.shape, void 0, void 0, o2.useHTML, void 0, "tooltip").attr({ padding: o2.padding, r: o2.borderRadius }), i3 || this.label.attr({ fill: o2.backgroundColor, "stroke-width": o2.borderWidth || 0 }).css(o2.style).css({ pointerEvents: o2.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), t3.outside) {
                let e3 = this.label, { xSetter: i4, ySetter: s2 } = e3;
                e3.xSetter = function(s3) {
                  i4.call(e3, t3.distance), a2 && (a2.style.left = s3 + "px");
                }, e3.ySetter = function(i5) {
                  s2.call(e3, t3.distance), a2 && (a2.style.top = i5 + "px");
                };
              }
              this.label.attr({ zIndex: 8 }).shadow(o2.shadow).add();
            }
            return a2 && !a2.parentElement && e2.doc.body.appendChild(a2), this.label;
          }
          getPlayingField() {
            let { body: t3, documentElement: e3 } = l, { chart: i3, distance: s2, outside: o2 } = this;
            return { width: o2 ? Math.max(t3.scrollWidth, e3.scrollWidth, t3.offsetWidth, e3.offsetWidth, e3.clientWidth) - 2 * s2 : i3.chartWidth, height: o2 ? Math.max(t3.scrollHeight, e3.scrollHeight, t3.offsetHeight, e3.offsetHeight, e3.clientHeight) : i3.chartHeight };
          }
          getPosition(t3, e3, i3) {
            let { distance: s2, chart: o2, outside: r2, pointer: a2 } = this, { inverted: n2, plotLeft: l2, plotTop: h2, polar: d2 } = o2, { plotX: c2 = 0, plotY: p2 = 0 } = i3, u2 = {}, g2 = n2 && i3.h || 0, { height: f2, width: m2 } = this.getPlayingField(), x2 = a2.getChartPosition(), y2 = (t4) => t4 * x2.scaleX, b2 = (t4) => t4 * x2.scaleY, v2 = (i4) => {
              let a3 = "x" === i4;
              return [i4, a3 ? m2 : f2, a3 ? t3 : e3].concat(r2 ? [a3 ? y2(t3) : b2(e3), a3 ? x2.left - s2 + y2(c2 + l2) : x2.top - s2 + b2(p2 + h2), 0, a3 ? m2 : f2] : [a3 ? t3 : e3, a3 ? c2 + l2 : p2 + h2, a3 ? l2 : h2, a3 ? l2 + o2.plotWidth : h2 + o2.plotHeight]);
            }, M2 = v2("y"), k2 = v2("x"), C2, A2 = !!i3.negative;
            !d2 && o2.hoverSeries?.yAxis?.reversed && (A2 = !A2);
            let w = !this.followPointer && S(i3.ttBelow, !d2 && !n2 === A2), T = function(t4, e4, i4, o3, a3, n3, l3) {
              let h3 = r2 ? "y" === t4 ? b2(s2) : y2(s2) : s2, d3 = (i4 - o3) / 2, c3 = o3 < a3 - s2, p3 = a3 + s2 + o3 < e4, f3 = a3 - h3 - i4 + d3, m3 = a3 + h3 - d3;
              if (w && p3)
                u2[t4] = m3;
              else if (!w && c3)
                u2[t4] = f3;
              else if (c3)
                u2[t4] = Math.min(l3 - o3, f3 - g2 < 0 ? f3 : f3 - g2);
              else {
                if (!p3)
                  return false;
                u2[t4] = Math.max(n3, m3 + g2 + i4 > e4 ? m3 : m3 + g2);
              }
            }, P = function(t4, e4, i4, o3, r3) {
              if (r3 < s2 || r3 > e4 - s2)
                return false;
              r3 < i4 / 2 ? u2[t4] = 1 : r3 > e4 - o3 / 2 ? u2[t4] = e4 - o3 - 2 : u2[t4] = r3 - i4 / 2;
            }, L = function(t4) {
              [M2, k2] = [k2, M2], C2 = t4;
            }, O = () => {
              false !== T.apply(0, M2) ? false !== P.apply(0, k2) || C2 || (L(true), O()) : C2 ? u2.x = u2.y = 0 : (L(true), O());
            };
            return (n2 && !d2 || this.len > 1) && L(), O(), u2;
          }
          hide(t3) {
            let e3 = this;
            o.clearTimeout(this.hideTimer), t3 = S(t3, this.options.hideDelay), this.isHidden || (this.hideTimer = C(function() {
              let i3 = e3.getLabel();
              e3.getLabel().animate({ opacity: 0 }, { duration: t3 ? 150 : t3, complete: () => {
                i3.hide(), e3.container && e3.container.remove();
              } }), e3.isHidden = true;
            }, t3));
          }
          init(t3, e3) {
            this.chart = t3, this.options = e3, this.crosshairs = [], this.now = { x: 0, y: 0 }, this.isHidden = true, this.split = e3.split && !t3.inverted && !t3.polar, this.shared = e3.shared || this.split, this.outside = S(e3.outside, !!(t3.scrollablePixelsX || t3.scrollablePixelsY));
          }
          shouldStickOnContact(t3) {
            return !!(!this.followPointer && this.options.stickOnContact && (!t3 || this.pointer.inClass(t3.target, "highcharts-tooltip")));
          }
          move(t3, e3, i3, s2) {
            let r2 = this, a2 = r2.now, n2 = false !== r2.options.animation && !r2.isHidden && (Math.abs(t3 - a2.x) > 1 || Math.abs(e3 - a2.y) > 1), l2 = r2.followPointer || r2.len > 1;
            f(a2, { x: n2 ? (2 * a2.x + t3) / 3 : t3, y: n2 ? (a2.y + e3) / 2 : e3, anchorX: l2 ? void 0 : n2 ? (2 * a2.anchorX + i3) / 3 : i3, anchorY: l2 ? void 0 : n2 ? (a2.anchorY + s2) / 2 : s2 }), r2.getLabel().attr(a2), r2.drawTracker(), n2 && (o.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
              r2 && r2.move(t3, e3, i3, s2);
            }, 32));
          }
          refresh(t3, e3) {
            let { chart: i3, options: s2, pointer: r2, shared: n2 } = this, l2 = k(t3), h2 = l2[0], d2 = [], c2 = s2.format, p2 = s2.formatter || this.defaultFormatter, u2 = i3.styledMode, g2 = {};
            if (!s2.enabled || !h2.series)
              return;
            o.clearTimeout(this.hideTimer), this.allowShared = !(!x(t3) && t3.series && t3.series.noSharedTooltip), this.followPointer = !this.split && h2.series.tooltipOptions.followPointer;
            let f2 = this.getAnchor(t3, e3), y2 = f2[0], v2 = f2[1];
            n2 && this.allowShared ? (r2.applyInactiveState(l2), l2.forEach(function(t4) {
              t4.setState("hover"), d2.push(t4.getLabelConfig());
            }), (g2 = h2.getLabelConfig()).points = d2) : g2 = h2.getLabelConfig(), this.len = d2.length;
            let M2 = b(c2) ? a(c2, g2, i3) : p2.call(g2, this), C2 = h2.series;
            if (this.distance = S(C2.tooltipOptions.distance, 16), false === M2)
              this.hide();
            else {
              if (this.split && this.allowShared)
                this.renderSplit(M2, l2);
              else {
                let t4 = y2, o2 = v2;
                if (e3 && r2.isDirectTouch && (t4 = e3.chartX - i3.plotLeft, o2 = e3.chartY - i3.plotTop), i3.polar || false === C2.options.clip || l2.some((e4) => r2.isDirectTouch || e4.series.shouldShowTooltip(t4, o2))) {
                  let t5 = this.getLabel();
                  (!s2.style.width || u2) && t5.css({ width: (this.outside ? this.getPlayingField() : i3.spacingBox).width + "px" }), t5.attr({ text: M2 && M2.join ? M2.join("") : M2 }), t5.addClass(this.getClassName(h2), true), u2 || t5.attr({ stroke: s2.borderColor || h2.color || C2.color || "#666666" }), this.updatePosition({ plotX: y2, plotY: v2, negative: h2.negative, ttBelow: h2.ttBelow, h: f2[2] || 0 });
                } else {
                  this.hide();
                  return;
                }
              }
              this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = false;
            }
            m(this, "refresh");
          }
          renderSplit(t3, e3) {
            let i3 = this, { chart: s2, chart: { chartWidth: o2, chartHeight: r2, plotHeight: a2, plotLeft: n2, plotTop: c2, scrollablePixelsY: u2 = 0, scrollablePixelsX: g2, styledMode: m2 }, distance: x2, options: y2, options: { positioner: v2 }, pointer: M2 } = i3, { scrollLeft: k2 = 0, scrollTop: C2 = 0 } = s2.scrollablePlotArea?.scrollingContainer || {}, A2 = i3.outside && "number" != typeof g2 ? l.documentElement.getBoundingClientRect() : { left: k2, right: k2 + o2, top: C2, bottom: C2 + r2 }, w = i3.getLabel(), T = this.renderer || s2.renderer, P = !!(s2.xAxis[0] && s2.xAxis[0].opposite), { left: L, top: O } = M2.getChartPosition(), D = c2 + C2, E = 0, B = a2 - u2;
            function j(t4, e4, s3, o3, r3 = true) {
              let a3, n3;
              return s3 ? (a3 = P ? 0 : B, n3 = p(t4 - o3 / 2, A2.left, A2.right - o3 - (i3.outside ? L : 0))) : (a3 = e4 - D, n3 = p(n3 = r3 ? t4 - o3 - x2 : t4 + x2, r3 ? n3 : A2.left, A2.right)), { x: n3, y: a3 };
            }
            b(t3) && (t3 = [false, t3]);
            let I = t3.slice(0, e3.length + 1).reduce(function(t4, s3, o3) {
              if (false !== s3 && "" !== s3) {
                let r3 = e3[o3 - 1] || { isHeader: true, plotX: e3[0].plotX, plotY: a2, series: {} }, l2 = r3.isHeader, h2 = l2 ? i3 : r3.series, d2 = h2.tt = function(t5, e4, s4) {
                  let o4 = t5, { isHeader: r4, series: a3 } = e4;
                  if (!o4) {
                    let t6 = { padding: y2.padding, r: y2.borderRadius };
                    m2 || (t6.fill = y2.backgroundColor, t6["stroke-width"] = y2.borderWidth ?? 1), o4 = T.label("", 0, 0, y2[r4 ? "headerShape" : "shape"], void 0, void 0, y2.useHTML).addClass(i3.getClassName(e4, true, r4)).attr(t6).add(w);
                  }
                  return o4.isActive = true, o4.attr({ text: s4 }), m2 || o4.css(y2.style).attr({ stroke: y2.borderColor || e4.color || a3.color || "#333333" }), o4;
                }(h2.tt, r3, s3.toString()), u3 = d2.getBBox(), g3 = u3.width + d2.strokeWidth();
                l2 && (E = u3.height, B += E, P && (D -= E));
                let { anchorX: f2, anchorY: b2 } = function(t5) {
                  let e4, i4;
                  let { isHeader: s4, plotX: o4 = 0, plotY: r4 = 0, series: l3 } = t5;
                  if (s4)
                    e4 = Math.max(n2 + o4, n2), i4 = c2 + a2 / 2;
                  else {
                    let { xAxis: t6, yAxis: s5 } = l3;
                    e4 = t6.pos + p(o4, -x2, t6.len + x2), l3.shouldShowTooltip(0, s5.pos - c2 + r4, { ignoreX: true }) && (i4 = s5.pos + r4);
                  }
                  return { anchorX: e4 = p(e4, A2.left - x2, A2.right + x2), anchorY: i4 };
                }(r3);
                if ("number" == typeof b2) {
                  let e4 = u3.height + 1, s4 = v2 ? v2.call(i3, g3, e4, r3) : j(f2, b2, l2, g3);
                  t4.push({ align: v2 ? 0 : void 0, anchorX: f2, anchorY: b2, boxWidth: g3, point: r3, rank: S(s4.rank, l2 ? 1 : 0), size: e4, target: s4.y, tt: d2, x: s4.x });
                } else
                  d2.isActive = false;
              }
              return t4;
            }, []);
            !v2 && I.some((t4) => {
              let { outside: e4 } = i3, s3 = (e4 ? L : 0) + t4.anchorX;
              return s3 < A2.left && s3 + t4.boxWidth < A2.right || s3 < L - A2.left + t4.boxWidth && A2.right - s3 > s3;
            }) && (I = I.map((t4) => {
              let { x: e4, y: i4 } = j(t4.anchorX, t4.anchorY, t4.point.isHeader, t4.boxWidth, false);
              return f(t4, { target: i4, x: e4 });
            })), i3.cleanSplit(), d(I, B);
            let R = { left: L, right: L };
            I.forEach(function(t4) {
              let { x: e4, boxWidth: s3, isHeader: o3 } = t4;
              !o3 && (i3.outside && L + e4 < R.left && (R.left = L + e4), !o3 && i3.outside && R.left + s3 > R.right && (R.right = L + e4));
            }), I.forEach(function(t4) {
              let { x: e4, anchorX: s3, anchorY: o3, pos: r3, point: { isHeader: a3 } } = t4, n3 = { visibility: void 0 === r3 ? "hidden" : "inherit", x: e4, y: (r3 || 0) + D, anchorX: s3, anchorY: o3 };
              if (i3.outside && e4 < s3) {
                let t5 = L - R.left;
                t5 > 0 && (a3 || (n3.x = e4 + t5, n3.anchorX = s3 + t5), a3 && (n3.x = (R.right - R.left) / 2, n3.anchorX = s3 + t5));
              }
              t4.tt.attr(n3);
            });
            let { container: z, outside: G, renderer: N } = i3;
            if (G && z && N) {
              let { width: t4, height: e4, x: i4, y: s3 } = w.getBBox();
              N.setSize(t4 + i4, e4 + s3, false), z.style.left = R.left + "px", z.style.top = O + "px";
            }
            h && w.attr({ opacity: 1 === w.opacity ? 0.999 : 1 });
          }
          drawTracker() {
            if (!this.shouldStickOnContact()) {
              this.tracker && (this.tracker = this.tracker.destroy());
              return;
            }
            let t3 = this.chart, e3 = this.label, i3 = this.shared ? t3.hoverPoints : t3.hoverPoint;
            if (!e3 || !i3)
              return;
            let s2 = { x: 0, y: 0, width: 0, height: 0 }, o2 = this.getAnchor(i3), r2 = e3.getBBox();
            o2[0] += t3.plotLeft - (e3.translateX || 0), o2[1] += t3.plotTop - (e3.translateY || 0), s2.x = Math.min(0, o2[0]), s2.y = Math.min(0, o2[1]), s2.width = o2[0] < 0 ? Math.max(Math.abs(o2[0]), r2.width - o2[0]) : Math.max(Math.abs(o2[0]), r2.width), s2.height = o2[1] < 0 ? Math.max(Math.abs(o2[1]), r2.height - Math.abs(o2[1])) : Math.max(Math.abs(o2[1]), r2.height), this.tracker ? this.tracker.attr(s2) : (this.tracker = e3.renderer.rect(s2).addClass("highcharts-tracker").add(e3), t3.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
          }
          styledModeFormat(t3) {
            return t3.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
          }
          tooltipFooterHeaderFormatter(t3, e3) {
            let i3 = t3.series, s2 = i3.tooltipOptions, o2 = i3.xAxis, r2 = o2 && o2.dateTime, n2 = { isFooter: e3, labelConfig: t3 }, l2 = s2.xDateFormat, h2 = s2[e3 ? "footerFormat" : "headerFormat"];
            return m(this, "headerFormatter", n2, function(e4) {
              r2 && !l2 && y(t3.key) && (l2 = r2.getXDateFormat(t3.key, s2.dateTimeLabelFormats)), r2 && l2 && (t3.point && t3.point.tooltipDateKeys || ["key"]).forEach(function(t4) {
                h2 = h2.replace("{point." + t4 + "}", "{point." + t4 + ":" + l2 + "}");
              }), i3.chart.styledMode && (h2 = this.styledModeFormat(h2)), e4.text = a(h2, { point: t3, series: i3 }, this.chart);
            }), n2.text;
          }
          update(t3) {
            this.destroy(), this.init(this.chart, v(true, this.options, t3));
          }
          updatePosition(t3) {
            let { chart: e3, container: i3, distance: s2, options: o2, pointer: r2, renderer: a2 } = this, { height: n2 = 0, width: l2 = 0 } = this.getLabel(), { left: h2, top: d2, scaleX: c2, scaleY: p2 } = r2.getChartPosition(), g2 = (o2.positioner || this.getPosition).call(this, l2, n2, t3), f2 = (t3.plotX || 0) + e3.plotLeft, m2 = (t3.plotY || 0) + e3.plotTop, x2;
            a2 && i3 && (o2.positioner && (g2.x += h2 - s2, g2.y += d2 - s2), x2 = (o2.borderWidth || 0) + 2 * s2 + 2, a2.setSize(l2 + x2, n2 + x2, false), (1 !== c2 || 1 !== p2) && (u(i3, { transform: `scale(${c2}, ${p2})` }), f2 *= c2, m2 *= p2), f2 += h2 - g2.x, m2 += d2 - g2.y), this.move(Math.round(g2.x), Math.round(g2.y || 0), f2, m2);
          }
        }
        return (r = A || (A = {})).compose = function(t3) {
          M(n, "Core.Tooltip") && c(t3, "afterInit", function() {
            let t4 = this.chart;
            t4.options.tooltip && (t4.tooltip = new r(t4, t4.options.tooltip, this));
          });
        }, A;
      }), i(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { animObject: r } = e2, { defaultOptions: a } = i2, { format: n } = s, { addEvent: l, erase: h, extend: d, fireEvent: c, getNestedProperty: p, isArray: u, isFunction: g, isNumber: f, isObject: m, pick: x, syncTimeout: y, removeEvent: b, uniqueKey: v } = o;
        class S {
          animateBeforeDestroy() {
            let t3 = this, e3 = { x: t3.startXPos, opacity: 0 }, i3 = t3.getGraphicalProps();
            i3.singular.forEach(function(i4) {
              t3[i4] = t3[i4].animate("dataLabel" === i4 ? { x: t3[i4].startXPos, y: t3[i4].startYPos, opacity: 0 } : e3);
            }), i3.plural.forEach(function(e4) {
              t3[e4].forEach(function(e5) {
                e5.element && e5.animate(d({ x: t3.startXPos }, e5.startYPos ? { x: e5.startXPos, y: e5.startYPos } : {}));
              });
            });
          }
          applyOptions(t3, e3) {
            let i3 = this.series, s2 = i3.options.pointValKey || i3.pointValKey;
            return d(this, t3 = S.prototype.optionsToObject.call(this, t3)), this.options = this.options ? d(this.options, t3) : t3, t3.group && delete this.group, t3.dataLabels && delete this.dataLabels, s2 && (this.y = S.prototype.getNestedProperty.call(this, s2)), this.selected && (this.state = "select"), "name" in this && void 0 === e3 && i3.xAxis && i3.xAxis.hasNames && (this.x = i3.xAxis.nameToX(this)), void 0 === this.x && i3 ? void 0 === e3 ? this.x = i3.autoIncrement() : this.x = e3 : f(t3.x) && i3.options.relativeXValue && (this.x = i3.autoIncrement(t3.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
          }
          destroy() {
            if (!this.destroyed) {
              let t3 = this, e3 = t3.series, i3 = e3.chart, s2 = e3.options.dataSorting, o2 = i3.hoverPoints, a2 = r(t3.series.chart.renderer.globalAnimation), n2 = () => {
                for (let e4 in (t3.graphic || t3.graphics || t3.dataLabel || t3.dataLabels) && (b(t3), t3.destroyElements()), t3)
                  delete t3[e4];
              };
              t3.legendItem && i3.legend.destroyItem(t3), o2 && (t3.setState(), h(o2, t3), o2.length || (i3.hoverPoints = null)), t3 === i3.hoverPoint && t3.onMouseOut(), s2 && s2.enabled ? (this.animateBeforeDestroy(), y(n2, a2.duration)) : n2(), i3.pointCount--;
            }
            this.destroyed = true;
          }
          destroyElements(t3) {
            let e3 = this, i3 = e3.getGraphicalProps(t3);
            i3.singular.forEach(function(t4) {
              e3[t4] = e3[t4].destroy();
            }), i3.plural.forEach(function(t4) {
              e3[t4].forEach(function(t5) {
                t5 && t5.element && t5.destroy();
              }), delete e3[t4];
            });
          }
          firePointEvent(t3, e3, i3) {
            let s2 = this, o2 = this.series.options;
            s2.manageEvent(t3), "click" === t3 && o2.allowPointSelect && (i3 = function(t4) {
              !s2.destroyed && s2.select && s2.select(null, t4.ctrlKey || t4.metaKey || t4.shiftKey);
            }), c(s2, t3, e3, i3);
          }
          getClassName() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          }
          getGraphicalProps(t3) {
            let e3, i3;
            let s2 = this, o2 = [], r2 = { singular: [], plural: [] };
            for ((t3 = t3 || { graphic: 1, dataLabel: 1 }).graphic && o2.push("graphic", "connector"), t3.dataLabel && o2.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i3 = o2.length; i3--; )
              s2[e3 = o2[i3]] && r2.singular.push(e3);
            return ["graphic", "dataLabel"].forEach(function(e4) {
              let i4 = e4 + "s";
              t3[e4] && s2[i4] && r2.plural.push(i4);
            }), r2;
          }
          getLabelConfig() {
            return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
          }
          getNestedProperty(t3) {
            return t3 ? 0 === t3.indexOf("custom.") ? p(t3, this.options) : this[t3] : void 0;
          }
          getZone() {
            let t3 = this.series, e3 = t3.zones, i3 = t3.zoneAxis || "y", s2, o2 = 0;
            for (s2 = e3[0]; this[i3] >= s2.value; )
              s2 = e3[++o2];
            return this.nonZonedColor || (this.nonZonedColor = this.color), s2 && s2.color && !this.options.color ? this.color = s2.color : this.color = this.nonZonedColor, s2;
          }
          hasNewShapeType() {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          }
          constructor(t3, e3, i3) {
            this.formatPrefix = "point", this.visible = true, this.series = t3, this.applyOptions(e3, i3), this.id ?? (this.id = v()), this.resolveColor(), t3.chart.pointCount++, c(this, "afterInit");
          }
          isValid() {
            return (f(this.x) || this.x instanceof Date) && f(this.y);
          }
          optionsToObject(t3) {
            let e3 = this.series, i3 = e3.options.keys, s2 = i3 || e3.pointArrayMap || ["y"], o2 = s2.length, r2 = {}, a2, n2 = 0, l2 = 0;
            if (f(t3) || null === t3)
              r2[s2[0]] = t3;
            else if (u(t3))
              for (!i3 && t3.length > o2 && ("string" == (a2 = typeof t3[0]) ? r2.name = t3[0] : "number" === a2 && (r2.x = t3[0]), n2++); l2 < o2; )
                i3 && void 0 === t3[n2] || (s2[l2].indexOf(".") > 0 ? S.prototype.setNestedProperty(r2, t3[n2], s2[l2]) : r2[s2[l2]] = t3[n2]), n2++, l2++;
            else
              "object" == typeof t3 && (r2 = t3, t3.dataLabels && (e3.hasDataLabels = () => true), t3.marker && (e3._hasPointMarkers = true));
            return r2;
          }
          pos(t3, e3 = this.plotY) {
            if (!this.destroyed) {
              let { plotX: i3, series: s2 } = this, { chart: o2, xAxis: r2, yAxis: a2 } = s2, n2 = 0, l2 = 0;
              if (f(i3) && f(e3))
                return t3 && (n2 = r2 ? r2.pos : o2.plotLeft, l2 = a2 ? a2.pos : o2.plotTop), o2.inverted && r2 && a2 ? [a2.len - e3 + l2, r2.len - i3 + n2] : [i3 + n2, e3 + l2];
            }
          }
          resolveColor() {
            let t3 = this.series, e3 = t3.chart.options.chart, i3 = t3.chart.styledMode, s2, o2, r2 = e3.colorCount, a2;
            delete this.nonZonedColor, t3.options.colorByPoint ? (i3 || (s2 = (o2 = t3.options.colors || t3.chart.options.colors)[t3.colorCounter], r2 = o2.length), a2 = t3.colorCounter, t3.colorCounter++, t3.colorCounter === r2 && (t3.colorCounter = 0)) : (i3 || (s2 = t3.color), a2 = t3.colorIndex), this.colorIndex = x(this.options.colorIndex, a2), this.color = x(this.options.color, s2);
          }
          setNestedProperty(t3, e3, i3) {
            return i3.split(".").reduce(function(t4, i4, s2, o2) {
              let r2 = o2.length - 1 === s2;
              return t4[i4] = r2 ? e3 : m(t4[i4], true) ? t4[i4] : {}, t4[i4];
            }, t3), t3;
          }
          shouldDraw() {
            return !this.isNull;
          }
          tooltipFormatter(t3) {
            let e3 = this.series, i3 = e3.tooltipOptions, s2 = x(i3.valueDecimals, ""), o2 = i3.valuePrefix || "", r2 = i3.valueSuffix || "";
            return e3.chart.styledMode && (t3 = e3.chart.tooltip.styledModeFormat(t3)), (e3.pointArrayMap || ["y"]).forEach(function(e4) {
              e4 = "{point." + e4, (o2 || r2) && (t3 = t3.replace(RegExp(e4 + "}", "g"), o2 + e4 + "}" + r2)), t3 = t3.replace(RegExp(e4 + "}", "g"), e4 + ":,." + s2 + "f}");
            }), n(t3, { point: this, series: this.series }, e3.chart);
          }
          update(t3, e3, i3, s2) {
            let o2;
            let r2 = this, a2 = r2.series, n2 = r2.graphic, l2 = a2.chart, h2 = a2.options;
            function d2() {
              r2.applyOptions(t3);
              let s3 = n2 && r2.hasMockGraphic, d3 = null === r2.y ? !s3 : s3;
              n2 && d3 && (r2.graphic = n2.destroy(), delete r2.hasMockGraphic), m(t3, true) && (n2 && n2.element && t3 && t3.marker && void 0 !== t3.marker.symbol && (r2.graphic = n2.destroy()), t3?.dataLabels && r2.dataLabel && (r2.dataLabel = r2.dataLabel.destroy())), o2 = r2.index, a2.updateParallelArrays(r2, o2), h2.data[o2] = m(h2.data[o2], true) || m(t3, true) ? r2.options : x(t3, h2.data[o2]), a2.isDirty = a2.isDirtyData = true, !a2.fixedBox && a2.hasCartesianSeries && (l2.isDirtyBox = true), "point" === h2.legendType && (l2.isDirtyLegend = true), e3 && l2.redraw(i3);
            }
            e3 = x(e3, true), false === s2 ? d2() : r2.firePointEvent("update", { options: t3 }, d2);
          }
          remove(t3, e3) {
            this.series.removePoint(this.series.data.indexOf(this), t3, e3);
          }
          select(t3, e3) {
            let i3 = this, s2 = i3.series, o2 = s2.chart;
            t3 = x(t3, !i3.selected), this.selectedStaging = t3, i3.firePointEvent(t3 ? "select" : "unselect", { accumulate: e3 }, function() {
              i3.selected = i3.options.selected = t3, s2.options.data[s2.data.indexOf(i3)] = i3.options, i3.setState(t3 && "select"), e3 || o2.getSelectedPoints().forEach(function(t4) {
                let e4 = t4.series;
                t4.selected && t4 !== i3 && (t4.selected = t4.options.selected = false, e4.options.data[e4.data.indexOf(t4)] = t4.options, t4.setState(o2.hoverPoints && e4.options.inactiveOtherPoints ? "inactive" : ""), t4.firePointEvent("unselect"));
              });
            }), delete this.selectedStaging;
          }
          onMouseOver(t3) {
            let { inverted: e3, pointer: i3 } = this.series.chart;
            i3 && (t3 = t3 ? i3.normalize(t3) : i3.getChartCoordinatesFromPoint(this, e3), i3.runPointActions(t3, this));
          }
          onMouseOut() {
            let t3 = this.series.chart;
            this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t3.hoverPoints || []).forEach(function(t4) {
              t4.setState();
            }), t3.hoverPoints = t3.hoverPoint = null;
          }
          manageEvent(t3) {
            let e3 = this.series.options.point || {}, i3 = e3.events?.[t3];
            g(i3) && (!this.hcEvents?.[t3] || this.hcEvents?.[t3]?.map((t4) => t4.fn).indexOf(i3) === -1) ? (l(this, t3, i3), this.hasImportedEvents = true) : this.hasImportedEvents && !i3 && this.hcEvents?.[t3] && (b(this, t3), delete this.hcEvents[t3], Object.keys(this.hcEvents) || (this.hasImportedEvents = false));
          }
          setState(e3, i3) {
            let s2 = this.series, o2 = this.state, r2 = s2.options.states[e3 || "normal"] || {}, n2 = a.plotOptions[s2.type].marker && s2.options.marker, l2 = n2 && false === n2.enabled, h2 = n2 && n2.states && n2.states[e3 || "normal"] || {}, p2 = false === h2.enabled, u2 = this.marker || {}, g2 = s2.chart, m2 = n2 && s2.markerAttribs, y2 = s2.halo, b2, v2, S2, M = s2.stateMarkerGraphic, k;
            if ((e3 = e3 || "") === this.state && !i3 || this.selected && "select" !== e3 || false === r2.enabled || e3 && (p2 || l2 && false === h2.enabled) || e3 && u2.states && u2.states[e3] && false === u2.states[e3].enabled)
              return;
            if (this.state = e3, m2 && (b2 = s2.markerAttribs(this, e3)), this.graphic && !this.hasMockGraphic) {
              if (o2 && this.graphic.removeClass("highcharts-point-" + o2), e3 && this.graphic.addClass("highcharts-point-" + e3), !g2.styledMode) {
                v2 = s2.pointAttribs(this, e3), S2 = x(g2.options.chart.animation, r2.animation);
                let t3 = v2.opacity;
                s2.options.inactiveOtherPoints && f(t3) && (this.dataLabels || []).forEach(function(e4) {
                  e4 && !e4.hasClass("highcharts-data-label-hidden") && (e4.animate({ opacity: t3 }, S2), e4.connector && e4.connector.animate({ opacity: t3 }, S2));
                }), this.graphic.animate(v2, S2);
              }
              b2 && this.graphic.animate(b2, x(g2.options.chart.animation, h2.animation, n2.animation)), M && M.hide();
            } else
              e3 && h2 && (k = u2.symbol || s2.symbol, M && M.currentSymbol !== k && (M = M.destroy()), b2 && (M ? M[i3 ? "animate" : "attr"]({ x: b2.x, y: b2.y }) : k && (s2.stateMarkerGraphic = M = g2.renderer.symbol(k, b2.x, b2.y, b2.width, b2.height).add(s2.markerGroup), M.currentSymbol = k)), !g2.styledMode && M && "inactive" !== this.state && M.attr(s2.pointAttribs(this, e3))), M && (M[e3 && this.isInside ? "show" : "hide"](), M.element.point = this, M.addClass(this.getClassName(), true));
            let C = r2.halo, A = this.graphic || M, w = A && A.visibility || "inherit";
            C && C.size && A && "hidden" !== w && !this.isCluster ? (y2 || (s2.halo = y2 = g2.renderer.path().add(A.parentGroup)), y2.show()[i3 ? "animate" : "attr"]({ d: this.haloPath(C.size) }), y2.attr({ class: "highcharts-halo highcharts-color-" + x(this.colorIndex, s2.colorIndex) + (this.className ? " " + this.className : ""), visibility: w, zIndex: -1 }), y2.point = this, g2.styledMode || y2.attr(d({ fill: this.color || s2.color, "fill-opacity": C.opacity }, t2.filterUserAttributes(C.attributes || {})))) : y2 && y2.point && y2.point.haloPath && y2.animate({ d: y2.point.haloPath(0) }, null, y2.hide), c(this, "afterSetState", { state: e3 });
          }
          haloPath(t3) {
            let e3 = this.pos();
            return e3 ? this.series.chart.renderer.symbols.circle(Math.floor(e3[0]) - t3, e3[1] - t3, 2 * t3, 2 * t3) : [];
          }
        }
        return S;
      }), i(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let { parse: o } = t2, { charts: r, composed: a } = e2, { addEvent: n, attr: l, css: h, extend: d, find: c, fireEvent: p, isNumber: u, isObject: g, objectEach: f, offset: m, pick: x, pushUnique: y, splat: b } = i2;
        class v {
          applyInactiveState(t3) {
            let e3 = [], i3;
            (t3 || []).forEach(function(t4) {
              i3 = t4.series, e3.push(i3), i3.linkedParent && e3.push(i3.linkedParent), i3.linkedSeries && (e3 = e3.concat(i3.linkedSeries)), i3.navigatorSeries && e3.push(i3.navigatorSeries);
            }), this.chart.series.forEach(function(t4) {
              -1 === e3.indexOf(t4) ? t4.setState("inactive", true) : t4.options.inactiveOtherPoints && t4.setAllPointsToState("inactive");
            });
          }
          destroy() {
            let t3 = this;
            this.eventsToUnbind.forEach((t4) => t4()), this.eventsToUnbind = [], !e2.chartCount && (v.unbindDocumentMouseUp && (v.unbindDocumentMouseUp = v.unbindDocumentMouseUp()), v.unbindDocumentTouchEnd && (v.unbindDocumentTouchEnd = v.unbindDocumentTouchEnd())), clearInterval(t3.tooltipTimeout), f(t3, function(e3, i3) {
              t3[i3] = void 0;
            });
          }
          getSelectionMarkerAttrs(t3, e3) {
            let i3 = { args: { chartX: t3, chartY: e3 }, attrs: {}, shapeType: "rect" };
            return p(this, "getSelectionMarkerAttrs", i3, (i4) => {
              let s2;
              let { chart: o2, zoomHor: r2, zoomVert: a2 } = this, { mouseDownX: n2 = 0, mouseDownY: l2 = 0 } = o2, h2 = i4.attrs;
              h2.x = o2.plotLeft, h2.y = o2.plotTop, h2.width = r2 ? 1 : o2.plotWidth, h2.height = a2 ? 1 : o2.plotHeight, r2 && (s2 = t3 - n2, h2.width = Math.max(1, Math.abs(s2)), h2.x = (s2 > 0 ? 0 : s2) + n2), a2 && (s2 = e3 - l2, h2.height = Math.max(1, Math.abs(s2)), h2.y = (s2 > 0 ? 0 : s2) + l2);
            }), i3;
          }
          drag(t3) {
            let { chart: e3 } = this, { mouseDownX: i3 = 0, mouseDownY: s2 = 0 } = e3, { panning: r2, panKey: a2, selectionMarkerFill: n2 } = e3.options.chart, l2 = e3.plotLeft, h2 = e3.plotTop, d2 = e3.plotWidth, c2 = e3.plotHeight, p2 = g(r2) ? r2.enabled : r2, u2 = a2 && t3[`${a2}Key`], f2 = t3.chartX, m2 = t3.chartY, x2, y2 = this.selectionMarker;
            if ((!y2 || !y2.touch) && (f2 < l2 ? f2 = l2 : f2 > l2 + d2 && (f2 = l2 + d2), m2 < h2 ? m2 = h2 : m2 > h2 + c2 && (m2 = h2 + c2), this.hasDragged = Math.sqrt(Math.pow(i3 - f2, 2) + Math.pow(s2 - m2, 2)), this.hasDragged > 10)) {
              x2 = e3.isInsidePlot(i3 - l2, s2 - h2, { visiblePlotOnly: true });
              let { shapeType: a3, attrs: d3 } = this.getSelectionMarkerAttrs(f2, m2);
              (e3.hasCartesianSeries || e3.mapView) && this.hasZoom && x2 && !u2 && !y2 && (this.selectionMarker = y2 = e3.renderer[a3](), y2.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e3.styledMode || y2.attr({ fill: n2 || o("#334eff").setOpacity(0.25).get() })), y2 && y2.attr(d3), x2 && !y2 && p2 && e3.pan(t3, r2);
            }
          }
          dragStart(t3) {
            let e3 = this.chart;
            e3.mouseIsDown = t3.type, e3.cancelClick = false, e3.mouseDownX = t3.chartX, e3.mouseDownY = t3.chartY;
          }
          getSelectionBox(t3) {
            let e3 = { args: { marker: t3 }, result: t3.getBBox() };
            return p(this, "getSelectionBox", e3), e3.result;
          }
          drop(t3) {
            let e3;
            let { chart: i3, selectionMarker: s2 } = this;
            for (let t4 of i3.axes)
              t4.isPanning && (t4.isPanning = false, (t4.options.startOnTick || t4.options.endOnTick || t4.series.some((t5) => t5.boosted)) && (t4.forceRedraw = true, t4.setExtremes(t4.userMin, t4.userMax, false), e3 = true));
            if (e3 && i3.redraw(), s2 && t3) {
              if (this.hasDragged) {
                let e4 = this.getSelectionBox(s2);
                i3.transform({ axes: i3.axes.filter((t4) => t4.zoomEnabled && ("xAxis" === t4.coll && this.zoomX || "yAxis" === t4.coll && this.zoomY)), selection: __spreadValues({ originalEvent: t3, xAxis: [], yAxis: [] }, e4), from: e4 });
              }
              u(i3.index) && (this.selectionMarker = s2.destroy());
            }
            i3 && u(i3.index) && (h(i3.container, { cursor: i3._cursor }), i3.cancelClick = this.hasDragged > 10, i3.mouseIsDown = false, this.hasDragged = 0, this.pinchDown = []);
          }
          findNearestKDPoint(t3, e3, i3) {
            let s2;
            return t3.forEach(function(t4) {
              let o2 = !(t4.noSharedTooltip && e3) && 0 > t4.options.findNearestPointBy.indexOf("y"), r2 = t4.searchPoint(i3, o2);
              g(r2, true) && r2.series && (!g(s2, true) || function(t5, i4) {
                let s3 = t5.distX - i4.distX, o3 = t5.dist - i4.dist, r3 = i4.series.group?.zIndex - t5.series.group?.zIndex;
                return 0 !== s3 && e3 ? s3 : 0 !== o3 ? o3 : 0 !== r3 ? r3 : t5.series.index > i4.series.index ? -1 : 1;
              }(s2, r2) > 0) && (s2 = r2);
            }), s2;
          }
          getChartCoordinatesFromPoint(t3, e3) {
            let { xAxis: i3, yAxis: s2 } = t3.series, o2 = t3.shapeArgs;
            if (i3 && s2) {
              let r2 = t3.clientX ?? t3.plotX ?? 0, a2 = t3.plotY || 0;
              return t3.isNode && o2 && u(o2.x) && u(o2.y) && (r2 = o2.x, a2 = o2.y), e3 ? { chartX: s2.len + s2.pos - a2, chartY: i3.len + i3.pos - r2 } : { chartX: r2 + i3.pos, chartY: a2 + s2.pos };
            }
            if (o2 && o2.x && o2.y)
              return { chartX: o2.x, chartY: o2.y };
          }
          getChartPosition() {
            if (this.chartPosition)
              return this.chartPosition;
            let { container: t3 } = this.chart, e3 = m(t3);
            this.chartPosition = { left: e3.left, top: e3.top, scaleX: 1, scaleY: 1 };
            let { offsetHeight: i3, offsetWidth: s2 } = t3;
            return s2 > 2 && i3 > 2 && (this.chartPosition.scaleX = e3.width / s2, this.chartPosition.scaleY = e3.height / i3), this.chartPosition;
          }
          getCoordinates(t3) {
            let e3 = { xAxis: [], yAxis: [] };
            for (let i3 of this.chart.axes)
              e3[i3.isXAxis ? "xAxis" : "yAxis"].push({ axis: i3, value: i3.toValue(t3[i3.horiz ? "chartX" : "chartY"]) });
            return e3;
          }
          getHoverData(t3, e3, i3, s2, o2, r2) {
            let a2 = [], n2 = function(t4) {
              return t4.visible && !(!o2 && t4.directTouch) && x(t4.options.enableMouseTracking, true);
            }, l2 = e3, h2, d2 = { chartX: r2 ? r2.chartX : void 0, chartY: r2 ? r2.chartY : void 0, shared: o2 };
            p(this, "beforeGetHoverData", d2), h2 = l2 && !l2.stickyTracking ? [l2] : i3.filter((t4) => t4.stickyTracking && (d2.filter || n2)(t4));
            let u2 = s2 && t3 || !r2 ? t3 : this.findNearestKDPoint(h2, o2, r2);
            return l2 = u2 && u2.series, u2 && (o2 && !l2.noSharedTooltip ? (h2 = i3.filter(function(t4) {
              return d2.filter ? d2.filter(t4) : n2(t4) && !t4.noSharedTooltip;
            })).forEach(function(t4) {
              let e4 = c(t4.points, function(t5) {
                return t5.x === u2.x && !t5.isNull;
              });
              g(e4) && (t4.boosted && t4.boost && (e4 = t4.boost.getPoint(e4)), a2.push(e4));
            }) : a2.push(u2)), p(this, "afterGetHoverData", d2 = { hoverPoint: u2 }), { hoverPoint: d2.hoverPoint, hoverSeries: l2, hoverPoints: a2 };
          }
          getPointFromEvent(t3) {
            let e3 = t3.target, i3;
            for (; e3 && !i3; )
              i3 = e3.point, e3 = e3.parentNode;
            return i3;
          }
          onTrackerMouseOut(t3) {
            let e3 = this.chart, i3 = t3.relatedTarget, s2 = e3.hoverSeries;
            this.isDirectTouch = false, !s2 || !i3 || s2.stickyTracking || this.inClass(i3, "highcharts-tooltip") || this.inClass(i3, "highcharts-series-" + s2.index) && this.inClass(i3, "highcharts-tracker") || s2.onMouseOut();
          }
          inClass(t3, e3) {
            let i3 = t3, s2;
            for (; i3; ) {
              if (s2 = l(i3, "class")) {
                if (-1 !== s2.indexOf(e3))
                  return true;
                if (-1 !== s2.indexOf("highcharts-container"))
                  return false;
              }
              i3 = i3.parentElement;
            }
          }
          constructor(t3, e3) {
            this.hasDragged = 0, this.eventsToUnbind = [], this.options = e3, this.chart = t3, this.runChartClick = !!e3.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), p(this, "afterInit");
          }
          normalize(t3, e3) {
            let i3 = t3.touches, s2 = i3 ? i3.length ? i3.item(0) : x(i3.changedTouches, t3.changedTouches)[0] : t3;
            e3 || (e3 = this.getChartPosition());
            let o2 = s2.pageX - e3.left, r2 = s2.pageY - e3.top;
            return d(t3, { chartX: Math.round(o2 /= e3.scaleX), chartY: Math.round(r2 /= e3.scaleY) });
          }
          onContainerClick(t3) {
            let e3 = this.chart, i3 = e3.hoverPoint, s2 = this.normalize(t3), o2 = e3.plotLeft, r2 = e3.plotTop;
            !e3.cancelClick && (i3 && this.inClass(s2.target, "highcharts-tracker") ? (p(i3.series, "click", d(s2, { point: i3 })), e3.hoverPoint && i3.firePointEvent("click", s2)) : (d(s2, this.getCoordinates(s2)), e3.isInsidePlot(s2.chartX - o2, s2.chartY - r2, { visiblePlotOnly: true }) && p(e3, "click", s2)));
          }
          onContainerMouseDown(t3) {
            let i3 = (1 & (t3.buttons || t3.button)) == 1;
            t3 = this.normalize(t3), e2.isFirefox && 0 !== t3.button && this.onContainerMouseMove(t3), (void 0 === t3.button || i3) && (this.zoomOption(t3), i3 && t3.preventDefault?.(), this.dragStart(t3));
          }
          onContainerMouseLeave(t3) {
            let { pointer: e3 } = r[x(v.hoverChartIndex, -1)] || {};
            t3 = this.normalize(t3), this.onContainerMouseMove(t3), e3 && t3.relatedTarget && !this.inClass(t3.relatedTarget, "highcharts-tooltip") && (e3.reset(), e3.chartPosition = void 0);
          }
          onContainerMouseEnter() {
            delete this.chartPosition;
          }
          onContainerMouseMove(t3) {
            let e3 = this.chart, i3 = e3.tooltip, s2 = this.normalize(t3);
            this.setHoverChartIndex(t3), ("mousedown" === e3.mouseIsDown || this.touchSelect(s2)) && this.drag(s2), !e3.openMenu && (this.inClass(s2.target, "highcharts-tracker") || e3.isInsidePlot(s2.chartX - e3.plotLeft, s2.chartY - e3.plotTop, { visiblePlotOnly: true })) && !(i3 && i3.shouldStickOnContact(s2)) && (this.inClass(s2.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(s2));
          }
          onDocumentTouchEnd(t3) {
            this.onDocumentMouseUp(t3);
          }
          onContainerTouchMove(t3) {
            this.touchSelect(t3) ? this.onContainerMouseMove(t3) : this.touch(t3);
          }
          onContainerTouchStart(t3) {
            this.touchSelect(t3) ? this.onContainerMouseDown(t3) : (this.zoomOption(t3), this.touch(t3, true));
          }
          onDocumentMouseMove(t3) {
            let e3 = this.chart, i3 = e3.tooltip, s2 = this.chartPosition, o2 = this.normalize(t3, s2);
            !s2 || e3.isInsidePlot(o2.chartX - e3.plotLeft, o2.chartY - e3.plotTop, { visiblePlotOnly: true }) || i3 && i3.shouldStickOnContact(o2) || this.inClass(o2.target, "highcharts-tracker") || this.reset();
          }
          onDocumentMouseUp(t3) {
            r[x(v.hoverChartIndex, -1)]?.pointer?.drop(t3);
          }
          pinch(t3) {
            let e3 = this, { chart: i3, hasZoom: s2, lastTouches: o2 } = e3, r2 = [].map.call(t3.touches || [], (t4) => e3.normalize(t4)), a2 = r2.length, n2 = 1 === a2 && (e3.inClass(t3.target, "highcharts-tracker") && i3.runTrackerClick || e3.runChartClick), l2 = i3.tooltip, h2 = 1 === a2 && x(l2?.options.followTouchMove, true);
            a2 > 1 ? e3.initiated = true : h2 && (e3.initiated = false), s2 && e3.initiated && !n2 && false !== t3.cancelable && t3.preventDefault(), "touchstart" === t3.type ? (e3.pinchDown = r2, e3.res = true) : h2 ? this.runPointActions(e3.normalize(t3)) : o2 && (p(i3, "touchpan", { originalEvent: t3, touches: r2 }, () => {
              let e4 = (t4) => {
                let e5 = t4[0], i4 = t4[1] || e5;
                return { x: e5.chartX, y: e5.chartY, width: i4.chartX - e5.chartX, height: i4.chartY - e5.chartY };
              };
              i3.transform({ axes: i3.axes.filter((t4) => t4.zoomEnabled && (this.zoomHor && t4.horiz || this.zoomVert && !t4.horiz)), to: e4(r2), from: e4(o2), trigger: t3.type });
            }), e3.res && (e3.res = false, this.reset(false, 0))), e3.lastTouches = r2;
          }
          reset(t3, e3) {
            let i3 = this.chart, s2 = i3.hoverSeries, o2 = i3.hoverPoint, r2 = i3.hoverPoints, a2 = i3.tooltip, n2 = a2 && a2.shared ? r2 : o2;
            t3 && n2 && b(n2).forEach(function(e4) {
              e4.series.isCartesian && void 0 === e4.plotX && (t3 = false);
            }), t3 ? a2 && n2 && b(n2).length && (a2.refresh(n2), a2.shared && r2 ? r2.forEach(function(t4) {
              t4.setState(t4.state, true), t4.series.isCartesian && (t4.series.xAxis.crosshair && t4.series.xAxis.drawCrosshair(null, t4), t4.series.yAxis.crosshair && t4.series.yAxis.drawCrosshair(null, t4));
            }) : o2 && (o2.setState(o2.state, true), i3.axes.forEach(function(t4) {
              t4.crosshair && o2.series[t4.coll] === t4 && t4.drawCrosshair(null, o2);
            }))) : (o2 && o2.onMouseOut(), r2 && r2.forEach(function(t4) {
              t4.setState();
            }), s2 && s2.onMouseOut(), a2 && a2.hide(e3), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i3.axes.forEach(function(t4) {
              t4.hideCrosshair();
            }), i3.hoverPoints = i3.hoverPoint = void 0);
          }
          runPointActions(t3, e3, i3) {
            let s2 = this.chart, o2 = s2.series, a2 = s2.tooltip && s2.tooltip.options.enabled ? s2.tooltip : void 0, l2 = !!a2 && a2.shared, h2 = e3 || s2.hoverPoint, d2 = h2 && h2.series || s2.hoverSeries, p2 = (!t3 || "touchmove" !== t3.type) && (!!e3 || d2 && d2.directTouch && this.isDirectTouch), u2 = this.getHoverData(h2, d2, o2, p2, l2, t3);
            h2 = u2.hoverPoint, d2 = u2.hoverSeries;
            let g2 = u2.hoverPoints, f2 = d2 && d2.tooltipOptions.followPointer && !d2.tooltipOptions.split, m2 = l2 && d2 && !d2.noSharedTooltip;
            if (h2 && (i3 || h2 !== s2.hoverPoint || a2 && a2.isHidden)) {
              if ((s2.hoverPoints || []).forEach(function(t4) {
                -1 === g2.indexOf(t4) && t4.setState();
              }), s2.hoverSeries !== d2 && d2.onMouseOver(), this.applyInactiveState(g2), (g2 || []).forEach(function(t4) {
                t4.setState("hover");
              }), s2.hoverPoint && s2.hoverPoint.firePointEvent("mouseOut"), !h2.series)
                return;
              s2.hoverPoints = g2, s2.hoverPoint = h2, h2.firePointEvent("mouseOver", void 0, () => {
                a2 && h2 && a2.refresh(m2 ? g2 : h2, t3);
              });
            } else if (f2 && a2 && !a2.isHidden) {
              let e4 = a2.getAnchor([{}], t3);
              s2.isInsidePlot(e4[0], e4[1], { visiblePlotOnly: true }) && a2.updatePosition({ plotX: e4[0], plotY: e4[1] });
            }
            this.unDocMouseMove || (this.unDocMouseMove = n(s2.container.ownerDocument, "mousemove", (t4) => r[v.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t4)), this.eventsToUnbind.push(this.unDocMouseMove)), s2.axes.forEach(function(e4) {
              let i4;
              let o3 = x((e4.crosshair || {}).snap, true);
              !o3 || (i4 = s2.hoverPoint) && i4.series[e4.coll] === e4 || (i4 = c(g2, (t4) => t4.series && t4.series[e4.coll] === e4)), i4 || !o3 ? e4.drawCrosshair(t3, i4) : e4.hideCrosshair();
            });
          }
          setDOMEvents() {
            let t3 = this.chart.container, e3 = t3.ownerDocument;
            t3.onmousedown = this.onContainerMouseDown.bind(this), t3.onmousemove = this.onContainerMouseMove.bind(this), t3.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(n(t3, "mouseenter", this.onContainerMouseEnter.bind(this)), n(t3, "mouseleave", this.onContainerMouseLeave.bind(this))), v.unbindDocumentMouseUp || (v.unbindDocumentMouseUp = n(e3, "mouseup", this.onDocumentMouseUp.bind(this)));
            let i3 = this.chart.renderTo.parentElement;
            for (; i3 && "BODY" !== i3.tagName; )
              this.eventsToUnbind.push(n(i3, "scroll", () => {
                delete this.chartPosition;
              })), i3 = i3.parentElement;
            this.eventsToUnbind.push(n(t3, "touchstart", this.onContainerTouchStart.bind(this), { passive: false }), n(t3, "touchmove", this.onContainerTouchMove.bind(this), { passive: false })), v.unbindDocumentTouchEnd || (v.unbindDocumentTouchEnd = n(e3, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false }));
          }
          setHoverChartIndex(t3) {
            let i3 = this.chart, s2 = e2.charts[x(v.hoverChartIndex, -1)];
            s2 && s2 !== i3 && s2.pointer?.onContainerMouseLeave(t3 || { relatedTarget: i3.container }), s2 && s2.mouseIsDown || (v.hoverChartIndex = i3.index);
          }
          touch(t3, e3) {
            let i3;
            let { chart: s2, pinchDown: o2 = [] } = this;
            this.setHoverChartIndex(), 1 === t3.touches.length ? (t3 = this.normalize(t3), s2.isInsidePlot(t3.chartX - s2.plotLeft, t3.chartY - s2.plotTop, { visiblePlotOnly: true }) && !s2.openMenu ? (e3 && this.runPointActions(t3), "touchmove" === t3.type && (i3 = !!o2[0] && Math.pow(o2[0].chartX - t3.chartX, 2) + Math.pow(o2[0].chartY - t3.chartY, 2) >= 16), x(i3, true) && this.pinch(t3)) : e3 && this.reset()) : 2 === t3.touches.length && this.pinch(t3);
          }
          touchSelect(t3) {
            return !!(this.chart.zooming.singleTouch && t3.touches && 1 === t3.touches.length);
          }
          zoomOption(t3) {
            let e3 = this.chart, i3 = e3.inverted, s2 = e3.zooming.type || "", o2, r2;
            /touch/.test(t3.type) && (s2 = x(e3.zooming.pinchType, s2)), this.zoomX = o2 = /x/.test(s2), this.zoomY = r2 = /y/.test(s2), this.zoomHor = o2 && !i3 || r2 && i3, this.zoomVert = r2 && !i3 || o2 && i3, this.hasZoom = o2 || r2;
          }
        }
        return (s = v || (v = {})).compose = function(t3) {
          y(a, "Core.Pointer") && n(t3, "beforeRender", function() {
            this.pointer = new s(this, this.options);
          });
        }, v;
      }), i(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        var a;
        let { animObject: n, setAnimation: l } = t2, { format: h } = e2, { composed: d, marginNames: c } = i2, { distribute: p } = o, { addEvent: u, createElement: g, css: f, defined: m, discardElement: x, find: y, fireEvent: b, isNumber: v, merge: S, pick: M, pushUnique: k, relativeLength: C, stableSort: A, syncTimeout: w } = r;
        class T {
          constructor(t3, e3) {
            this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t3, this.setOptions(e3), e3.enabled && (this.render(), u(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            })), u(this.chart, "render", () => {
              this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
            });
          }
          setOptions(t3) {
            let e3 = M(t3.padding, 8);
            this.options = t3, this.chart.styledMode || (this.itemStyle = t3.itemStyle, this.itemHiddenStyle = S(this.itemStyle, t3.itemHiddenStyle)), this.itemMarginTop = t3.itemMarginTop, this.itemMarginBottom = t3.itemMarginBottom, this.padding = e3, this.initialItemY = e3 - 5, this.symbolWidth = M(t3.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t3.layout && !this.chart.inverted, this.baseline = void 0;
          }
          update(t3, e3) {
            let i3 = this.chart;
            this.setOptions(S(true, this.options, t3)), this.destroy(), i3.isDirtyLegend = i3.isDirtyBox = true, M(e3, true) && i3.redraw(), b(this, "afterUpdate", { redraw: e3 });
          }
          colorizeItem(t3, e3) {
            let { area: i3, group: s2, label: o2, line: r2, symbol: a2 } = t3.legendItem || {};
            if (s2?.[e3 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
              let { itemHiddenStyle: s3 = {} } = this, n2 = s3.color, { fillColor: l2, fillOpacity: h2, lineColor: d2, marker: c2 } = t3.options, p2 = (t4) => (!e3 && (t4.fill && (t4.fill = n2), t4.stroke && (t4.stroke = n2)), t4);
              o2?.css(S(e3 ? this.itemStyle : s3)), r2?.attr(p2({ stroke: d2 || t3.color })), a2 && a2.attr(p2(c2 && a2.isMarker ? t3.pointAttribs() : { fill: t3.color })), i3?.attr(p2({ fill: l2 || t3.color, "fill-opacity": l2 ? 1 : h2 ?? 0.75 }));
            }
            b(this, "afterColorizeItem", { item: t3, visible: e3 });
          }
          positionItems() {
            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
          }
          positionItem(t3) {
            let { group: e3, x: i3 = 0, y: s2 = 0 } = t3.legendItem || {}, o2 = this.options, r2 = o2.symbolPadding, a2 = !o2.rtl, n2 = t3.checkbox;
            if (e3 && e3.element) {
              let o3 = { translateX: a2 ? i3 : this.legendWidth - i3 - 2 * r2 - 4, translateY: s2 };
              e3[m(e3.translateY) ? "animate" : "attr"](o3, void 0, () => {
                b(this, "afterPositionItem", { item: t3 });
              });
            }
            n2 && (n2.x = i3, n2.y = s2);
          }
          destroyItem(t3) {
            let e3 = t3.checkbox, i3 = t3.legendItem || {};
            for (let t4 of ["group", "label", "line", "symbol"])
              i3[t4] && (i3[t4] = i3[t4].destroy());
            e3 && x(e3), t3.legendItem = void 0;
          }
          destroy() {
            for (let t3 of this.getAllItems())
              this.destroyItem(t3);
            for (let t3 of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"])
              this[t3] && (this[t3] = this[t3].destroy());
            this.display = null;
          }
          positionCheckboxes() {
            let t3;
            let e3 = this.group && this.group.alignAttr, i3 = this.clipHeight || this.legendHeight, s2 = this.titleHeight;
            e3 && (t3 = e3.translateY, this.allItems.forEach(function(o2) {
              let r2;
              let a2 = o2.checkbox;
              a2 && (r2 = t3 + s2 + a2.y + (this.scrollOffset || 0) + 3, f(a2, { left: e3.translateX + o2.checkboxOffset + a2.x - 20 + "px", top: r2 + "px", display: this.proximate || r2 > t3 - 6 && r2 < t3 + i3 - 6 ? "" : "none" }));
            }, this));
          }
          renderTitle() {
            let t3 = this.options, e3 = this.padding, i3 = t3.title, s2, o2 = 0;
            i3.text && (this.title || (this.title = this.chart.renderer.label(i3.text, e3 - 3, e3 - 4, void 0, void 0, void 0, t3.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i3.style), this.title.add(this.group)), i3.width || this.title.css({ width: this.maxLegendWidth + "px" }), o2 = (s2 = this.title.getBBox()).height, this.offsetWidth = s2.width, this.contentGroup.attr({ translateY: o2 })), this.titleHeight = o2;
          }
          setText(t3) {
            let e3 = this.options;
            t3.legendItem.label.attr({ text: e3.labelFormat ? h(e3.labelFormat, t3, this.chart) : e3.labelFormatter.call(t3) });
          }
          renderItem(t3) {
            let e3 = t3.legendItem = t3.legendItem || {}, i3 = this.chart, s2 = i3.renderer, o2 = this.options, r2 = "horizontal" === o2.layout, a2 = this.symbolWidth, n2 = o2.symbolPadding || 0, l2 = this.itemStyle, h2 = this.itemHiddenStyle, d2 = r2 ? M(o2.itemDistance, 20) : 0, c2 = !o2.rtl, p2 = !t3.series, u2 = !p2 && t3.series.drawLegendSymbol ? t3.series : t3, g2 = u2.options, f2 = !!this.createCheckboxForItem && g2 && g2.showCheckbox, m2 = o2.useHTML, x2 = t3.options.className, y2 = e3.label, b2 = a2 + n2 + d2 + (f2 ? 20 : 0);
            !y2 && (e3.group = s2.g("legend-item").addClass("highcharts-" + u2.type + "-series highcharts-color-" + t3.colorIndex + (x2 ? " " + x2 : "") + (p2 ? " highcharts-series-" + t3.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e3.label = y2 = s2.text("", c2 ? a2 + n2 : -n2, this.baseline || 0, m2), i3.styledMode || y2.css(S(t3.visible ? l2 : h2)), y2.attr({ align: c2 ? "left" : "right", zIndex: 2 }).add(e3.group), !this.baseline && (this.fontMetrics = s2.fontMetrics(y2), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y2.attr("y", this.baseline), this.symbolHeight = M(o2.symbolHeight, this.fontMetrics.f), o2.squareSymbol && (this.symbolWidth = M(o2.symbolWidth, Math.max(this.symbolHeight, 16)), b2 = this.symbolWidth + n2 + d2 + (f2 ? 20 : 0), c2 && y2.attr("x", this.symbolWidth + n2))), u2.drawLegendSymbol(this, t3), this.setItemEvents && this.setItemEvents(t3, y2, m2)), f2 && !t3.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t3), this.colorizeItem(t3, t3.visible), (i3.styledMode || !l2.width) && y2.css({ width: (o2.itemWidth || this.widthOption || i3.spacingBox.width) - b2 + "px" }), this.setText(t3);
            let v2 = y2.getBBox(), k2 = this.fontMetrics && this.fontMetrics.h || 0;
            t3.itemWidth = t3.checkboxOffset = o2.itemWidth || e3.labelWidth || v2.width + b2, this.maxItemWidth = Math.max(this.maxItemWidth, t3.itemWidth), this.totalItemWidth += t3.itemWidth, this.itemHeight = t3.itemHeight = Math.round(e3.labelHeight || (v2.height > 1.5 * k2 ? v2.height : k2));
          }
          layoutItem(t3) {
            let e3 = this.options, i3 = this.padding, s2 = "horizontal" === e3.layout, o2 = t3.itemHeight, r2 = this.itemMarginBottom, a2 = this.itemMarginTop, n2 = s2 ? M(e3.itemDistance, 20) : 0, l2 = this.maxLegendWidth, h2 = e3.alignColumns && this.totalItemWidth > l2 ? this.maxItemWidth : t3.itemWidth, d2 = t3.legendItem || {};
            s2 && this.itemX - i3 + h2 > l2 && (this.itemX = i3, this.lastLineHeight && (this.itemY += a2 + this.lastLineHeight + r2), this.lastLineHeight = 0), this.lastItemY = a2 + this.itemY + r2, this.lastLineHeight = Math.max(o2, this.lastLineHeight), d2.x = this.itemX, d2.y = this.itemY, s2 ? this.itemX += h2 : (this.itemY += a2 + o2 + r2, this.lastLineHeight = o2), this.offsetWidth = this.widthOption || Math.max((s2 ? this.itemX - i3 - (t3.checkbox ? 0 : n2) : h2) + i3, this.offsetWidth);
          }
          getAllItems() {
            let t3 = [];
            return this.chart.series.forEach(function(e3) {
              let i3 = e3 && e3.options;
              e3 && M(i3.showInLegend, !m(i3.linkedTo) && void 0, true) && (t3 = t3.concat((e3.legendItem || {}).labels || ("point" === i3.legendType ? e3.data : e3)));
            }), b(this, "afterGetAllItems", { allItems: t3 }), t3;
          }
          getAlignment() {
            let t3 = this.options;
            return this.proximate ? t3.align.charAt(0) + "tv" : t3.floating ? "" : t3.align.charAt(0) + t3.verticalAlign.charAt(0) + t3.layout.charAt(0);
          }
          adjustMargins(t3, e3) {
            let i3 = this.chart, s2 = this.options, o2 = this.getAlignment();
            o2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(r2, a2) {
              r2.test(o2) && !m(t3[a2]) && (i3[c[a2]] = Math.max(i3[c[a2]], i3.legend[(a2 + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a2] * s2[a2 % 2 ? "x" : "y"] + M(s2.margin, 12) + e3[a2] + (i3.titleOffset[a2] || 0)));
            });
          }
          proximatePositions() {
            let t3;
            let e3 = this.chart, i3 = [], s2 = "left" === this.options.align;
            for (let o2 of (this.allItems.forEach(function(t4) {
              let o3, r2, a2 = s2, n2, l2;
              t4.yAxis && (t4.xAxis.options.reversed && (a2 = !a2), t4.points && (o3 = y(a2 ? t4.points : t4.points.slice(0).reverse(), function(t5) {
                return v(t5.plotY);
              })), r2 = this.itemMarginTop + t4.legendItem.label.getBBox().height + this.itemMarginBottom, l2 = t4.yAxis.top - e3.plotTop, n2 = t4.visible ? (o3 ? o3.plotY : t4.yAxis.height) + (l2 - 0.3 * r2) : l2 + t4.yAxis.height, i3.push({ target: n2, size: r2, item: t4 }));
            }, this), p(i3, e3.plotHeight)))
              t3 = o2.item.legendItem || {}, v(o2.pos) && (t3.y = e3.plotTop - e3.spacing[0] + o2.pos);
          }
          render() {
            let t3 = this.chart, e3 = t3.renderer, i3 = this.options, s2 = this.padding, o2 = this.getAllItems(), r2, a2, n2, l2 = this.group, h2, d2 = this.box;
            this.itemX = s2, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = C(i3.width, t3.spacingBox.width - s2), h2 = t3.spacingBox.width - 2 * s2 - i3.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (h2 /= 2), this.maxLegendWidth = this.widthOption || h2, l2 || (this.group = l2 = e3.g("legend").addClass(i3.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e3.g().attr({ zIndex: 1 }).add(l2), this.scrollGroup = e3.g().add(this.contentGroup)), this.renderTitle(), A(o2, (t4, e4) => (t4.options && t4.options.legendIndex || 0) - (e4.options && e4.options.legendIndex || 0)), i3.reversed && o2.reverse(), this.allItems = o2, this.display = r2 = !!o2.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, o2.forEach(this.renderItem, this), o2.forEach(this.layoutItem, this), a2 = (this.widthOption || this.offsetWidth) + s2, n2 = this.lastItemY + this.lastLineHeight + this.titleHeight, n2 = this.handleOverflow(n2) + s2, d2 || (this.box = d2 = e3.rect().addClass("highcharts-legend-box").attr({ r: i3.borderRadius }).add(l2)), t3.styledMode || d2.attr({ stroke: i3.borderColor, "stroke-width": i3.borderWidth || 0, fill: i3.backgroundColor || "none" }).shadow(i3.shadow), a2 > 0 && n2 > 0 && d2[d2.placed ? "animate" : "attr"](d2.crisp.call({}, { x: 0, y: 0, width: a2, height: n2 }, d2.strokeWidth())), l2[r2 ? "show" : "hide"](), t3.styledMode && "none" === l2.getStyle("display") && (a2 = n2 = 0), this.legendWidth = a2, this.legendHeight = n2, r2 && this.align(), this.proximate || this.positionItems(), b(this, "afterRender");
          }
          align(t3 = this.chart.spacingBox) {
            let e3 = this.chart, i3 = this.options, s2 = t3.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && e3.titleOffset[0] > 0 ? s2 += e3.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e3.titleOffset[2] > 0 && (s2 -= e3.titleOffset[2]), s2 !== t3.y && (t3 = S(t3, { y: s2 })), e3.hasRendered || (this.group.placed = false), this.group.align(S(i3, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i3.verticalAlign }), true, t3);
          }
          handleOverflow(t3) {
            let e3 = this, i3 = this.chart, s2 = i3.renderer, o2 = this.options, r2 = o2.y, a2 = "top" === o2.verticalAlign, n2 = this.padding, l2 = o2.maxHeight, h2 = o2.navigation, d2 = M(h2.animation, true), c2 = h2.arrowSize || 12, p2 = this.pages, u2 = this.allItems, g2 = function(t4) {
              "number" == typeof t4 ? S2.attr({ height: t4 }) : S2 && (e3.clipRect = S2.destroy(), e3.contentGroup.clip()), e3.contentGroup.div && (e3.contentGroup.div.style.clip = t4 ? "rect(" + n2 + "px,9999px," + (n2 + t4) + "px,0)" : "auto");
            }, f2 = function(t4) {
              return e3[t4] = s2.circle(0, 0, 1.3 * c2).translate(c2 / 2, c2 / 2).add(v2), i3.styledMode || e3[t4].attr("fill", "rgba(0,0,0,0.0001)"), e3[t4];
            }, m2, x2, y2, b2 = i3.spacingBox.height + (a2 ? -r2 : r2) - n2, v2 = this.nav, S2 = this.clipRect;
            return "horizontal" !== o2.layout || "middle" === o2.verticalAlign || o2.floating || (b2 /= 2), l2 && (b2 = Math.min(b2, l2)), p2.length = 0, t3 && b2 > 0 && t3 > b2 && false !== h2.enabled ? (this.clipHeight = m2 = Math.max(b2 - 20 - this.titleHeight - n2, 0), this.currentPage = M(this.currentPage, 1), this.fullHeight = t3, u2.forEach((t4, e4) => {
              let i4 = (y2 = t4.legendItem || {}).y || 0, s3 = Math.round(y2.label.getBBox().height), o3 = p2.length;
              (!o3 || i4 - p2[o3 - 1] > m2 && (x2 || i4) !== p2[o3 - 1]) && (p2.push(x2 || i4), o3++), y2.pageIx = o3 - 1, x2 && ((u2[e4 - 1].legendItem || {}).pageIx = o3 - 1), e4 === u2.length - 1 && i4 + s3 - p2[o3 - 1] > m2 && i4 > p2[o3 - 1] && (p2.push(i4), y2.pageIx = o3), i4 !== x2 && (x2 = i4);
            }), S2 || (S2 = e3.clipRect = s2.clipRect(0, n2 - 2, 9999, 0), e3.contentGroup.clip(S2)), g2(m2), v2 || (this.nav = v2 = s2.g().attr({ zIndex: 1 }).add(this.group), this.up = s2.symbol("triangle", 0, 0, c2, c2).add(v2), f2("upTracker").on("click", function() {
              e3.scroll(-1, d2);
            }), this.pager = s2.text("", 15, 10).addClass("highcharts-legend-navigation"), !i3.styledMode && h2.style && this.pager.css(h2.style), this.pager.add(v2), this.down = s2.symbol("triangle-down", 0, 0, c2, c2).add(v2), f2("downTracker").on("click", function() {
              e3.scroll(1, d2);
            })), e3.scroll(0), t3 = b2) : v2 && (g2(), this.nav = v2.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t3;
          }
          scroll(t3, e3) {
            let i3 = this.chart, s2 = this.pages, o2 = s2.length, r2 = this.clipHeight, a2 = this.options.navigation, h2 = this.pager, d2 = this.padding, c2 = this.currentPage + t3;
            c2 > o2 && (c2 = o2), c2 > 0 && (void 0 !== e3 && l(e3, i3), this.nav.attr({ translateX: d2, translateY: r2 + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(t4) {
              t4.attr({ class: 1 === c2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }), h2.attr({ text: c2 + "/" + o2 }), [this.down, this.downTracker].forEach(function(t4) {
              t4.attr({ x: 18 + this.pager.getBBox().width, class: c2 === o2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }, this), i3.styledMode || (this.up.attr({ fill: 1 === c2 ? a2.inactiveColor : a2.activeColor }), this.upTracker.css({ cursor: 1 === c2 ? "default" : "pointer" }), this.down.attr({ fill: c2 === o2 ? a2.inactiveColor : a2.activeColor }), this.downTracker.css({ cursor: c2 === o2 ? "default" : "pointer" })), this.scrollOffset = -s2[c2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = c2, this.positionCheckboxes(), w(() => {
              b(this, "afterScroll", { currentPage: c2 });
            }, n(M(e3, i3.renderer.globalAnimation, true)).duration));
          }
          setItemEvents(t3, e3, i3) {
            let o2 = this, r2 = t3.legendItem || {}, a2 = o2.chart.renderer.boxWrapper, n2 = t3 instanceof s, l2 = "highcharts-legend-" + (n2 ? "point" : "series") + "-active", h2 = o2.chart.styledMode, d2 = i3 ? [e3, r2.symbol] : [r2.group], c2 = (e4) => {
              o2.allItems.forEach((i4) => {
                t3 !== i4 && [i4].concat(i4.linkedSeries || []).forEach((t4) => {
                  t4.setState(e4, !n2);
                });
              });
            };
            for (let i4 of d2)
              i4 && i4.on("mouseover", function() {
                t3.visible && c2("inactive"), t3.setState("hover"), t3.visible && a2.addClass(l2), h2 || e3.css(o2.options.itemHoverStyle);
              }).on("mouseout", function() {
                o2.chart.styledMode || e3.css(S(t3.visible ? o2.itemStyle : o2.itemHiddenStyle)), c2(""), a2.removeClass(l2), t3.setState();
              }).on("click", function(e4) {
                let i5 = "legendItemClick", s2 = function() {
                  t3.setVisible && t3.setVisible(), c2(t3.visible ? "inactive" : "");
                };
                a2.removeClass(l2), e4 = { browserEvent: e4 }, t3.firePointEvent ? t3.firePointEvent(i5, e4, s2) : b(t3, i5, e4, s2);
              });
          }
          createCheckboxForItem(t3) {
            t3.checkbox = g("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t3.selected, defaultChecked: t3.selected }, this.options.itemCheckboxStyle, this.chart.container), u(t3.checkbox, "click", function(e3) {
              let i3 = e3.target;
              b(t3.series || t3, "checkboxClick", { checked: i3.checked, item: t3 }, function() {
                t3.select();
              });
            });
          }
        }
        return (a = T || (T = {})).compose = function(t3) {
          k(d, "Core.Legend") && u(t3, "beforeMargins", function() {
            this.legend = new a(this, this.options.legend);
          });
        }, T;
      }), i(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { extend: i2, merge: s, pick: o } = t2;
        return function(t3) {
          function e3(t4, e4, r) {
            let a = this.legendItem = this.legendItem || {}, { chart: n, options: l } = this, { baseline: h = 0, symbolWidth: d, symbolHeight: c } = t4, p = this.symbol || "circle", u = c / 2, g = n.renderer, f = a.group, m = h - Math.round(c * (r ? 0.4 : 0.3)), x = {}, y, b = l.marker, v = 0;
            if (n.styledMode || (x["stroke-width"] = Math.min(l.lineWidth || 0, 24), l.dashStyle ? x.dashstyle = l.dashStyle : "square" === l.linecap || (x["stroke-linecap"] = "round")), a.line = g.path().addClass("highcharts-graph").attr(x).add(f), r && (a.area = g.path().addClass("highcharts-area").add(f)), x["stroke-linecap"] && (v = Math.min(a.line.strokeWidth(), d) / 2), d) {
              let t5 = [["M", v, m], ["L", d - v, m]];
              a.line.attr({ d: t5 }), a.area?.attr({ d: [...t5, ["L", d - v, h], ["L", v, h]] });
            }
            if (b && false !== b.enabled && d) {
              let t5 = Math.min(o(b.radius, u), u);
              0 === p.indexOf("url") && (b = s(b, { width: c, height: c }), t5 = 0), a.symbol = y = g.symbol(p, d / 2 - t5, m - t5, 2 * t5, 2 * t5, i2({ context: "legend" }, b)).addClass("highcharts-point").add(f), y.isMarker = true;
            }
          }
          t3.areaMarker = function(t4, i3) {
            e3.call(this, t4, i3, true);
          }, t3.lineMarker = e3, t3.rectangle = function(t4, e4) {
            let i3 = e4.legendItem || {}, s2 = t4.options, r = t4.symbolHeight, a = s2.squareSymbol, n = a ? r : t4.symbolWidth;
            i3.symbol = this.chart.renderer.rect(a ? (t4.symbolWidth - r) / 2 : 0, t4.baseline - r + 1, n, r, o(t4.options.symbolRadius, r / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(i3.group);
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Series/SeriesDefaults.js", [], function() {
        return { lineWidth: 2, allowPointSelect: false, crisp: true, showCheckbox: false, animation: { duration: 1e3 }, enableMouseTracking: true, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: true }, hover: { animation: { duration: 150 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: true, formatter: function() {
          let { numberFormatter: t2 } = this.series.chart;
          return "number" != typeof this.y ? "" : t2(this.y, -1);
        }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: true, states: { normal: { animation: true }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: true, turboThreshold: 1e3, findNearestPointBy: "x" };
      }), i(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { defaultOptions: r } = e2, { extend: a, extendClass: n, merge: l } = s;
        return function(e3) {
          function s2(t3, s3) {
            let o2 = r.plotOptions || {}, a2 = s3.defaultOptions, n2 = s3.prototype;
            return n2.type = t3, n2.pointClass || (n2.pointClass = i2), !e3.seriesTypes[t3] && (a2 && (o2[t3] = a2), e3.seriesTypes[t3] = s3, true);
          }
          e3.seriesTypes = t2.seriesTypes, e3.registerSeriesType = s2, e3.seriesType = function(t3, o2, h, d, c) {
            let p = r.plotOptions || {};
            if (o2 = o2 || "", p[t3] = l(p[o2], h), delete e3.seriesTypes[t3], s2(t3, n(e3.seriesTypes[o2] || function() {
            }, d)), e3.seriesTypes[t3].prototype.type = t3, c) {
              class s3 extends i2 {
              }
              a(s3.prototype, c), e3.seriesTypes[t3].prototype.pointClass = s3;
            }
            return e3.seriesTypes[t3];
          };
        }(o || (o = {})), o;
      }), i(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l, h) {
        let { animObject: d, setAnimation: c } = t2, { defaultOptions: p } = e2, { registerEventOptions: u } = i2, { svg: g, win: f } = s, { seriesTypes: m } = n, { arrayMax: x, arrayMin: y, clamp: b, correctFloat: v, defined: S, destroyObjectProperties: M, diffObjects: k, erase: C, error: A, extend: w, find: T, fireEvent: P, getClosestDistance: L, getNestedProperty: O, insertItem: D, isArray: E, isNumber: B, isString: j, merge: I, objectEach: R, pick: z, removeEvent: G, splat: N, syncTimeout: W } = h;
        class H {
          constructor() {
            this.zoneAxis = "y";
          }
          init(t3, e3) {
            let i3;
            P(this, "init", { options: e3 });
            let s2 = this, o2 = t3.series;
            this.eventsToUnbind = [], s2.chart = t3, s2.options = s2.setOptions(e3);
            let r2 = s2.options, a2 = false !== r2.visible;
            s2.linkedSeries = [], s2.bindAxes(), w(s2, { name: r2.name, state: "", visible: a2, selected: true === r2.selected }), u(this, r2);
            let n2 = r2.events;
            (n2 && n2.click || r2.point && r2.point.events && r2.point.events.click || r2.allowPointSelect) && (t3.runTrackerClick = true), s2.getColor(), s2.getSymbol(), s2.parallelArrays.forEach(function(t4) {
              s2[t4 + "Data"] || (s2[t4 + "Data"] = []);
            }), s2.isCartesian && (t3.hasCartesianSeries = true), o2.length && (i3 = o2[o2.length - 1]), s2._i = z(i3 && i3._i, -1) + 1, s2.opacity = s2.options.opacity, t3.orderItems("series", D(this, o2)), r2.dataSorting && r2.dataSorting.enabled ? s2.setDataSortingOptions() : s2.points || s2.data || s2.setData(r2.data, false), P(this, "afterInit");
          }
          is(t3) {
            return m[t3] && this instanceof m[t3];
          }
          bindAxes() {
            let t3;
            let e3 = this, i3 = e3.options, s2 = e3.chart;
            P(this, "bindAxes", null, function() {
              (e3.axisTypes || []).forEach(function(o2) {
                s2[o2].forEach(function(s3) {
                  t3 = s3.options, (z(i3[o2], 0) === s3.index || void 0 !== i3[o2] && i3[o2] === t3.id) && (D(e3, s3.series), e3[o2] = s3, s3.isDirty = true);
                }), e3[o2] || e3.optionalAxis === o2 || A(18, true, s2);
              });
            }), P(this, "afterBindAxes");
          }
          updateParallelArrays(t3, e3, i3) {
            let s2 = t3.series, o2 = B(e3) ? function(i4) {
              let o3 = "y" === i4 && s2.toYData ? s2.toYData(t3) : t3[i4];
              s2[i4 + "Data"][e3] = o3;
            } : function(t4) {
              Array.prototype[e3].apply(s2[t4 + "Data"], i3);
            };
            s2.parallelArrays.forEach(o2);
          }
          hasData() {
            return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && this.yData.length > 0;
          }
          hasMarkerChanged(t3, e3) {
            let i3 = t3.marker, s2 = e3.marker || {};
            return i3 && (s2.enabled && !i3.enabled || s2.symbol !== i3.symbol || s2.height !== i3.height || s2.width !== i3.width);
          }
          autoIncrement(t3) {
            let e3 = this.options, i3 = e3.pointIntervalUnit, s2 = e3.relativeXValue, o2 = this.chart.time, r2 = this.xIncrement, a2, n2;
            return (r2 = z(r2, e3.pointStart, 0), this.pointInterval = n2 = z(this.pointInterval, e3.pointInterval, 1), s2 && B(t3) && (n2 *= t3), i3 && (a2 = new o2.Date(r2), "day" === i3 ? o2.set("Date", a2, o2.get("Date", a2) + n2) : "month" === i3 ? o2.set("Month", a2, o2.get("Month", a2) + n2) : "year" === i3 && o2.set("FullYear", a2, o2.get("FullYear", a2) + n2), n2 = a2.getTime() - r2), s2 && B(t3)) ? r2 + n2 : (this.xIncrement = r2 + n2, r2);
          }
          setDataSortingOptions() {
            let t3 = this.options;
            w(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false }), S(t3.pointRange) || (t3.pointRange = 1);
          }
          setOptions(t3) {
            let e3;
            let i3 = this.chart, s2 = i3.options.plotOptions, o2 = i3.userOptions || {}, r2 = I(t3), a2 = i3.styledMode, n2 = { plotOptions: s2, userOptions: r2 };
            P(this, "setOptions", n2);
            let l2 = n2.plotOptions[this.type], h2 = o2.plotOptions || {}, d2 = h2.series || {}, c2 = p.plotOptions[this.type] || {}, u2 = h2[this.type] || {};
            this.userOptions = n2.userOptions;
            let g2 = I(l2, s2.series, u2, r2);
            this.tooltipOptions = I(p.tooltip, p.plotOptions.series?.tooltip, c2?.tooltip, i3.userOptions.tooltip, h2.series?.tooltip, u2.tooltip, r2.tooltip), this.stickyTracking = z(r2.stickyTracking, u2.stickyTracking, d2.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || g2.stickyTracking), null === l2.marker && delete g2.marker, this.zoneAxis = g2.zoneAxis || "y";
            let f2 = this.zones = (g2.zones || []).map((t4) => __spreadValues({}, t4));
            return (g2.negativeColor || g2.negativeFillColor) && !g2.zones && (e3 = { value: g2[this.zoneAxis + "Threshold"] || g2.threshold || 0, className: "highcharts-negative" }, a2 || (e3.color = g2.negativeColor, e3.fillColor = g2.negativeFillColor), f2.push(e3)), f2.length && S(f2[f2.length - 1].value) && f2.push(a2 ? {} : { color: this.color, fillColor: this.fillColor }), P(this, "afterSetOptions", { options: g2 }), g2;
          }
          getName() {
            return z(this.options.name, "Series " + (this.index + 1));
          }
          getCyclic(t3, e3, i3) {
            let s2, o2;
            let r2 = this.chart, a2 = `${t3}Index`, n2 = `${t3}Counter`, l2 = i3?.length || r2.options.chart.colorCount;
            !e3 && (S(o2 = z("color" === t3 ? this.options.colorIndex : void 0, this[a2])) ? s2 = o2 : (r2.series.length || (r2[n2] = 0), s2 = r2[n2] % l2, r2[n2] += 1), i3 && (e3 = i3[s2])), void 0 !== s2 && (this[a2] = s2), this[t3] = e3;
          }
          getColor() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || p.plotOptions[this.type].color, this.chart.options.colors);
          }
          getPointsCollection() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          }
          getSymbol() {
            let t3 = this.options.marker;
            this.getCyclic("symbol", t3.symbol, this.chart.options.symbols);
          }
          findPointIndex(t3, e3) {
            let i3, s2, o2;
            let a2 = t3.id, n2 = t3.x, l2 = this.points, h2 = this.options.dataSorting;
            if (a2) {
              let t4 = this.chart.get(a2);
              t4 instanceof r && (i3 = t4);
            } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
              let e4 = (e5) => !e5.touched && e5.index === t3.index;
              if (h2 && h2.matchByName ? e4 = (e5) => !e5.touched && e5.name === t3.name : this.options.relativeXValue && (e4 = (e5) => !e5.touched && e5.options.x === t3.x), !(i3 = T(l2, e4)))
                return;
            }
            return i3 && void 0 !== (o2 = i3 && i3.index) && (s2 = true), void 0 === o2 && B(n2) && (o2 = this.xData.indexOf(n2, e3)), -1 !== o2 && void 0 !== o2 && this.cropped && (o2 = o2 >= this.cropStart ? o2 - this.cropStart : o2), !s2 && B(o2) && l2[o2] && l2[o2].touched && (o2 = void 0), o2;
          }
          updateData(t3, e3) {
            let i3 = this.options, s2 = i3.dataSorting, o2 = this.points, r2 = [], a2 = this.requireSorting, n2 = t3.length === o2.length, l2, h2, d2, c2, p2 = true;
            if (this.xIncrement = null, t3.forEach(function(t4, e4) {
              let h3;
              let d3 = S(t4) && this.pointClass.prototype.optionsToObject.call({ series: this }, t4) || {}, p3 = d3.x;
              d3.id || B(p3) ? (-1 === (h3 = this.findPointIndex(d3, c2)) || void 0 === h3 ? r2.push(t4) : o2[h3] && t4 !== i3.data[h3] ? (o2[h3].update(t4, false, null, false), o2[h3].touched = true, a2 && (c2 = h3 + 1)) : o2[h3] && (o2[h3].touched = true), (!n2 || e4 !== h3 || s2 && s2.enabled || this.hasDerivedData) && (l2 = true)) : r2.push(t4);
            }, this), l2)
              for (h2 = o2.length; h2--; )
                (d2 = o2[h2]) && !d2.touched && d2.remove && d2.remove(false, e3);
            else
              !n2 || s2 && s2.enabled ? p2 = false : (t3.forEach(function(t4, e4) {
                t4 === o2[e4].y || o2[e4].destroyed || o2[e4].update(t4, false, null, false);
              }), r2.length = 0);
            return o2.forEach(function(t4) {
              t4 && (t4.touched = false);
            }), !!p2 && (r2.forEach(function(t4) {
              this.addPoint(t4, false, null, null, false);
            }, this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = x(this.xData), this.autoIncrement()), true);
          }
          setData(t3, e3 = true, i3, s2) {
            let o2 = this, r2 = o2.points, a2 = r2 && r2.length || 0, n2 = o2.options, l2 = o2.chart, h2 = n2.dataSorting, d2 = o2.xAxis, c2 = n2.turboThreshold, p2 = this.xData, u2 = this.yData, g2 = o2.pointArrayMap, f2 = g2 && g2.length, m2 = n2.keys, x2, y2, b2, v2 = 0, S2 = 1, M2 = null, k2;
            l2.options.chart.allowMutatingData || (n2.data && delete o2.options.data, o2.userOptions.data && delete o2.userOptions.data, k2 = I(true, t3));
            let C2 = (t3 = k2 || t3 || []).length;
            if (h2 && h2.enabled && (t3 = this.sortData(t3)), l2.options.chart.allowMutatingData && false !== s2 && C2 && a2 && !o2.cropped && !o2.hasGroupedData && o2.visible && !o2.boosted && (b2 = this.updateData(t3, i3)), !b2) {
              if (o2.xIncrement = null, o2.colorCounter = 0, this.parallelArrays.forEach(function(t4) {
                o2[t4 + "Data"].length = 0;
              }), c2 && C2 > c2) {
                if (B(M2 = o2.getFirstValidPoint(t3)))
                  for (x2 = 0; x2 < C2; x2++)
                    p2[x2] = this.autoIncrement(), u2[x2] = t3[x2];
                else if (E(M2)) {
                  if (f2) {
                    if (M2.length === f2)
                      for (x2 = 0; x2 < C2; x2++)
                        p2[x2] = this.autoIncrement(), u2[x2] = t3[x2];
                    else
                      for (x2 = 0; x2 < C2; x2++)
                        y2 = t3[x2], p2[x2] = y2[0], u2[x2] = y2.slice(1, f2 + 1);
                  } else if (m2 && (v2 = m2.indexOf("x"), S2 = m2.indexOf("y"), v2 = v2 >= 0 ? v2 : 0, S2 = S2 >= 0 ? S2 : 1), 1 === M2.length && (S2 = 0), v2 === S2)
                    for (x2 = 0; x2 < C2; x2++)
                      p2[x2] = this.autoIncrement(), u2[x2] = t3[x2][S2];
                  else
                    for (x2 = 0; x2 < C2; x2++)
                      y2 = t3[x2], p2[x2] = y2[v2], u2[x2] = y2[S2];
                } else
                  A(12, false, l2);
              } else
                for (x2 = 0; x2 < C2; x2++)
                  y2 = { series: o2 }, o2.pointClass.prototype.applyOptions.apply(y2, [t3[x2]]), o2.updateParallelArrays(y2, x2);
              for (u2 && j(u2[0]) && A(14, true, l2), o2.data = [], o2.options.data = o2.userOptions.data = t3, x2 = a2; x2--; )
                r2[x2]?.destroy();
              d2 && (d2.minRange = d2.userMinRange), o2.isDirty = l2.isDirtyBox = true, o2.isDirtyData = !!r2, i3 = false;
            }
            "point" === n2.legendType && (this.processData(), this.generatePoints()), e3 && l2.redraw(i3);
          }
          sortData(t3) {
            let e3 = this, i3 = e3.options.dataSorting.sortKey || "y", s2 = function(t4, e4) {
              return S(e4) && t4.pointClass.prototype.optionsToObject.call({ series: t4 }, e4) || {};
            };
            return t3.forEach(function(i4, o2) {
              t3[o2] = s2(e3, i4), t3[o2].index = o2;
            }, this), t3.concat().sort((t4, e4) => {
              let s3 = O(i3, t4), o2 = O(i3, e4);
              return o2 < s3 ? -1 : o2 > s3 ? 1 : 0;
            }).forEach(function(t4, e4) {
              t4.x = e4;
            }, this), e3.linkedSeries && e3.linkedSeries.forEach(function(e4) {
              let i4 = e4.options, o2 = i4.data;
              i4.dataSorting && i4.dataSorting.enabled || !o2 || (o2.forEach(function(i5, r2) {
                o2[r2] = s2(e4, i5), t3[r2] && (o2[r2].x = t3[r2].x, o2[r2].index = r2);
              }), e4.setData(o2, false));
            }), t3;
          }
          getProcessedData(t3) {
            let e3 = this, i3 = e3.xAxis, s2 = e3.options, o2 = s2.cropThreshold, r2 = t3 || e3.getExtremesFromAll || s2.getExtremesFromAll, a2 = i3?.logarithmic, n2 = e3.isCartesian, l2, h2, d2 = 0, c2, p2, u2, g2 = e3.xData, f2 = e3.yData, m2 = false, x2 = g2.length;
            i3 && (p2 = (c2 = i3.getExtremes()).min, u2 = c2.max, m2 = !!(i3.categories && !i3.names.length)), n2 && e3.sorted && !r2 && (!o2 || x2 > o2 || e3.forceCrop) && (g2[x2 - 1] < p2 || g2[0] > u2 ? (g2 = [], f2 = []) : e3.yData && (g2[0] < p2 || g2[x2 - 1] > u2) && (g2 = (l2 = this.cropData(e3.xData, e3.yData, p2, u2)).xData, f2 = l2.yData, d2 = l2.start, h2 = true));
            let y2 = L([a2 ? g2.map(a2.log2lin) : g2], () => e3.requireSorting && !m2 && A(15, false, e3.chart));
            return { xData: g2, yData: f2, cropped: h2, cropStart: d2, closestPointRange: y2 };
          }
          processData(t3) {
            let e3 = this.xAxis;
            if (this.isCartesian && !this.isDirty && !e3.isDirty && !this.yAxis.isDirty && !t3)
              return false;
            let i3 = this.getProcessedData();
            this.cropped = i3.cropped, this.cropStart = i3.cropStart, this.processedXData = i3.xData, this.processedYData = i3.yData, this.closestPointRange = this.basePointRange = i3.closestPointRange, P(this, "afterProcessData");
          }
          cropData(t3, e3, i3, s2) {
            let o2 = t3.length, r2, a2, n2 = 0, l2 = o2;
            for (r2 = 0; r2 < o2; r2++)
              if (t3[r2] >= i3) {
                n2 = Math.max(0, r2 - 1);
                break;
              }
            for (a2 = r2; a2 < o2; a2++)
              if (t3[a2] > s2) {
                l2 = a2 + 1;
                break;
              }
            return { xData: t3.slice(n2, l2), yData: e3.slice(n2, l2), start: n2, end: l2 };
          }
          generatePoints() {
            let t3 = this.options, e3 = this.processedData || t3.data, i3 = this.processedXData, s2 = this.processedYData, o2 = this.pointClass, r2 = i3.length, a2 = this.cropStart || 0, n2 = this.hasGroupedData, l2 = t3.keys, h2 = [], d2 = t3.dataGrouping && t3.dataGrouping.groupAll ? a2 : 0, c2, p2, u2, g2, f2 = this.data;
            if (!f2 && !n2) {
              let t4 = [];
              t4.length = e3.length, f2 = this.data = t4;
            }
            for (l2 && n2 && (this.options.keys = false), g2 = 0; g2 < r2; g2++)
              p2 = a2 + g2, n2 ? ((u2 = new o2(this, [i3[g2]].concat(N(s2[g2])))).dataGroup = this.groupMap[d2 + g2], u2.dataGroup.options && (u2.options = u2.dataGroup.options, w(u2, u2.dataGroup.options), delete u2.dataLabels)) : (u2 = f2[p2]) || void 0 === e3[p2] || (f2[p2] = u2 = new o2(this, e3[p2], i3[g2])), u2 && (u2.index = n2 ? d2 + g2 : p2, h2[g2] = u2);
            if (this.options.keys = l2, f2 && (r2 !== (c2 = f2.length) || n2))
              for (g2 = 0; g2 < c2; g2++)
                g2 !== a2 || n2 || (g2 += r2), f2[g2] && (f2[g2].destroyElements(), f2[g2].plotX = void 0);
            this.data = f2, this.points = h2, P(this, "afterGeneratePoints");
          }
          getXExtremes(t3) {
            return { min: y(t3), max: x(t3) };
          }
          getExtremes(t3, e3) {
            let i3 = this.xAxis, s2 = this.yAxis, o2 = this.processedXData || this.xData, r2 = [], a2 = this.requireSorting && !this.is("column") ? 1 : 0, n2 = !!s2 && s2.positiveValuesOnly, l2, h2, d2, c2, p2, u2, g2, f2 = 0, m2 = 0, b2 = 0, v2 = (t3 = t3 || this.stackedYData || this.processedYData || []).length;
            for (i3 && (f2 = (l2 = i3.getExtremes()).min, m2 = l2.max), u2 = 0; u2 < v2; u2++)
              if (c2 = o2[u2], h2 = (B(p2 = t3[u2]) || E(p2)) && ((B(p2) ? p2 > 0 : p2.length) || !n2), d2 = e3 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !i3 || (o2[u2 + a2] || c2) >= f2 && (o2[u2 - a2] || c2) <= m2, h2 && d2) {
                if (g2 = p2.length)
                  for (; g2--; )
                    B(p2[g2]) && (r2[b2++] = p2[g2]);
                else
                  r2[b2++] = p2;
              }
            let S2 = { activeYData: r2, dataMin: y(r2), dataMax: x(r2) };
            return P(this, "afterGetExtremes", { dataExtremes: S2 }), S2;
          }
          applyExtremes() {
            let t3 = this.getExtremes();
            return this.dataMin = t3.dataMin, this.dataMax = t3.dataMax, t3;
          }
          getFirstValidPoint(t3) {
            let e3 = t3.length, i3 = 0, s2 = null;
            for (; null === s2 && i3 < e3; )
              s2 = t3[i3], i3++;
            return s2;
          }
          translate() {
            this.processedXData || this.processData(), this.generatePoints();
            let t3 = this.options, e3 = t3.stacking, i3 = this.xAxis, s2 = i3.categories, o2 = this.enabledDataSorting, r2 = this.yAxis, a2 = this.points, n2 = a2.length, l2 = this.pointPlacementToXValue(), h2 = !!l2, d2 = t3.threshold, c2 = t3.startFromThreshold ? d2 : 0, p2, u2, g2, f2, m2 = Number.MAX_VALUE;
            function x2(t4) {
              return b(t4, -1e5, 1e5);
            }
            for (p2 = 0; p2 < n2; p2++) {
              let t4;
              let n3 = a2[p2], y2 = n3.x, b2, M2, k2 = n3.y, C2 = n3.low, A2 = e3 && r2.stacking?.stacks[(this.negStacks && k2 < (c2 ? 0 : d2) ? "-" : "") + this.stackKey];
              u2 = i3.translate(y2, false, false, false, true, l2), n3.plotX = B(u2) ? v(x2(u2)) : void 0, e3 && this.visible && A2 && A2[y2] && (f2 = this.getStackIndicator(f2, y2, this.index), !n3.isNull && f2.key && (M2 = (b2 = A2[y2]).points[f2.key]), b2 && E(M2) && (C2 = M2[0], k2 = M2[1], C2 === c2 && f2.key === A2[y2].base && (C2 = z(B(d2) ? d2 : r2.min)), r2.positiveValuesOnly && S(C2) && C2 <= 0 && (C2 = void 0), n3.total = n3.stackTotal = z(b2.total), n3.percentage = S(n3.y) && b2.total ? n3.y / b2.total * 100 : void 0, n3.stackY = k2, this.irregularWidths || b2.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), n3.yBottom = S(C2) ? x2(r2.translate(C2, false, true, false, true)) : void 0, this.dataModify && (k2 = this.dataModify.modifyValue(k2, p2)), B(k2) && void 0 !== n3.plotX && (t4 = B(t4 = r2.translate(k2, false, true, false, true)) ? x2(t4) : void 0), n3.plotY = t4, n3.isInside = this.isPointInside(n3), n3.clientX = h2 ? v(i3.translate(y2, false, false, false, true, l2)) : u2, n3.negative = (n3.y || 0) < (d2 || 0), n3.category = z(s2 && s2[n3.x], n3.x), n3.isNull || false === n3.visible || (void 0 !== g2 && (m2 = Math.min(m2, Math.abs(u2 - g2))), g2 = u2), n3.zone = this.zones.length ? n3.getZone() : void 0, !n3.graphic && this.group && o2 && (n3.isNew = true);
            }
            this.closestPointRangePx = m2, P(this, "afterTranslate");
          }
          getValidPoints(t3, e3, i3) {
            let s2 = this.chart;
            return (t3 || this.points || []).filter(function(t4) {
              let { plotX: o2, plotY: r2 } = t4;
              return !!((i3 || !t4.isNull && B(r2)) && (!e3 || s2.isInsidePlot(o2, r2, { inverted: s2.inverted }))) && false !== t4.visible;
            });
          }
          getClipBox() {
            let { chart: t3, xAxis: e3, yAxis: i3 } = this, { x: s2, y: o2, width: r2, height: a2 } = I(t3.clipBox);
            return e3 && e3.len !== t3.plotSizeX && (r2 = e3.len), i3 && i3.len !== t3.plotSizeY && (a2 = i3.len), t3.inverted && !this.invertible && ([r2, a2] = [a2, r2]), { x: s2, y: o2, width: r2, height: a2 };
          }
          getSharedClipKey() {
            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
          }
          setClip() {
            let { chart: t3, group: e3, markerGroup: i3 } = this, s2 = t3.sharedClips, o2 = t3.renderer, r2 = this.getClipBox(), a2 = this.getSharedClipKey(), n2 = s2[a2];
            n2 ? n2.animate(r2) : s2[a2] = n2 = o2.clipRect(r2), e3 && e3.clip(false === this.options.clip ? void 0 : n2), i3 && i3.clip();
          }
          animate(t3) {
            let { chart: e3, group: i3, markerGroup: s2 } = this, o2 = e3.inverted, r2 = d(this.options.animation), a2 = [this.getSharedClipKey(), r2.duration, r2.easing, r2.defer].join(","), n2 = e3.sharedClips[a2], l2 = e3.sharedClips[a2 + "m"];
            if (t3 && i3) {
              let t4 = this.getClipBox();
              if (n2)
                n2.attr("height", t4.height);
              else {
                t4.width = 0, o2 && (t4.x = e3.plotHeight), n2 = e3.renderer.clipRect(t4), e3.sharedClips[a2] = n2;
                let i4 = { x: -99, y: -99, width: o2 ? e3.plotWidth + 199 : 99, height: o2 ? 99 : e3.plotHeight + 199 };
                l2 = e3.renderer.clipRect(i4), e3.sharedClips[a2 + "m"] = l2;
              }
              i3.clip(n2), s2?.clip(l2);
            } else if (n2 && !n2.hasClass("highcharts-animating")) {
              let t4 = this.getClipBox(), i4 = r2.step;
              (s2?.element.childNodes.length || e3.series.length > 1) && (r2.step = function(t5, e4) {
                i4 && i4.apply(e4, arguments), "width" === e4.prop && l2?.element && l2.attr(o2 ? "height" : "width", t5 + 99);
              }), n2.addClass("highcharts-animating").animate(t4, r2);
            }
          }
          afterAnimate() {
            this.setClip(), R(this.chart.sharedClips, (t3, e3, i3) => {
              t3 && !this.chart.container.querySelector(`[clip-path="url(#${t3.id})"]`) && (t3.destroy(), delete i3[e3]);
            }), this.finishedAnimating = true, P(this, "afterAnimate");
          }
          drawPoints(t3 = this.points) {
            let e3, i3, s2, o2, r2, a2, n2;
            let l2 = this.chart, h2 = l2.styledMode, { colorAxis: d2, options: c2 } = this, p2 = c2.marker, u2 = this[this.specialGroup || "markerGroup"], g2 = this.xAxis, f2 = z(p2.enabled, !g2 || !!g2.isRadial || null, this.closestPointRangePx >= p2.enabledThreshold * p2.radius);
            if (false !== p2.enabled || this._hasPointMarkers)
              for (e3 = 0; e3 < t3.length; e3++)
                if (o2 = (s2 = (i3 = t3[e3]).graphic) ? "animate" : "attr", r2 = i3.marker || {}, a2 = !!i3.marker, (f2 && void 0 === r2.enabled || r2.enabled) && !i3.isNull && false !== i3.visible) {
                  let t4 = z(r2.symbol, this.symbol, "rect");
                  n2 = this.markerAttribs(i3, i3.selected && "select"), this.enabledDataSorting && (i3.startXPos = g2.reversed ? -(n2.width || 0) : g2.width);
                  let e4 = false !== i3.isInside;
                  if (!s2 && e4 && ((n2.width || 0) > 0 || i3.hasImage) && (i3.graphic = s2 = l2.renderer.symbol(t4, n2.x, n2.y, n2.width, n2.height, a2 ? r2 : p2).add(u2), this.enabledDataSorting && l2.hasRendered && (s2.attr({ x: i3.startXPos }), o2 = "animate")), s2 && "animate" === o2 && s2[e4 ? "show" : "hide"](e4).animate(n2), s2) {
                    let t5 = this.pointAttribs(i3, h2 || !i3.selected ? void 0 : "select");
                    h2 ? d2 && s2.css({ fill: t5.fill }) : s2[o2](t5);
                  }
                  s2 && s2.addClass(i3.getClassName(), true);
                } else
                  s2 && (i3.graphic = s2.destroy());
          }
          markerAttribs(t3, e3) {
            let i3 = this.options, s2 = i3.marker, o2 = t3.marker || {}, r2 = o2.symbol || s2.symbol, a2 = {}, n2, l2, h2 = z(o2.radius, s2 && s2.radius);
            e3 && (n2 = s2.states[e3], h2 = z((l2 = o2.states && o2.states[e3]) && l2.radius, n2 && n2.radius, h2 && h2 + (n2 && n2.radiusPlus || 0))), t3.hasImage = r2 && 0 === r2.indexOf("url"), t3.hasImage && (h2 = 0);
            let d2 = t3.pos();
            return B(h2) && d2 && (a2.x = d2[0] - h2, a2.y = d2[1] - h2, i3.crisp && (a2.x = Math.floor(a2.x))), h2 && (a2.width = a2.height = 2 * h2), a2;
          }
          pointAttribs(t3, e3) {
            let i3 = this.options.marker, s2 = t3 && t3.options, o2 = s2 && s2.marker || {}, r2 = s2 && s2.color, a2 = t3 && t3.color, n2 = t3 && t3.zone && t3.zone.color, l2, h2, d2 = this.color, c2, p2, u2 = z(o2.lineWidth, i3.lineWidth), g2 = 1;
            return d2 = r2 || n2 || a2 || d2, c2 = o2.fillColor || i3.fillColor || d2, p2 = o2.lineColor || i3.lineColor || d2, e3 = e3 || "normal", l2 = i3.states[e3] || {}, u2 = z((h2 = o2.states && o2.states[e3] || {}).lineWidth, l2.lineWidth, u2 + z(h2.lineWidthPlus, l2.lineWidthPlus, 0)), c2 = h2.fillColor || l2.fillColor || c2, { stroke: p2 = h2.lineColor || l2.lineColor || p2, "stroke-width": u2, fill: c2, opacity: g2 = z(h2.opacity, l2.opacity, g2) };
          }
          destroy(t3) {
            let e3, i3, s2;
            let o2 = this, r2 = o2.chart, a2 = /AppleWebKit\/533/.test(f.navigator.userAgent), n2 = o2.data || [];
            for (P(o2, "destroy", { keepEventsForUpdate: t3 }), this.removeEvents(t3), (o2.axisTypes || []).forEach(function(t4) {
              (s2 = o2[t4]) && s2.series && (C(s2.series, o2), s2.isDirty = s2.forceRedraw = true);
            }), o2.legendItem && o2.chart.legend.destroyItem(o2), e3 = n2.length; e3--; )
              (i3 = n2[e3]) && i3.destroy && i3.destroy();
            for (let t4 of o2.zones)
              M(t4, void 0, true);
            h.clearTimeout(o2.animationTimeout), R(o2, function(t4, e4) {
              t4 instanceof l && !t4.survive && t4[a2 && "group" === e4 ? "hide" : "destroy"]();
            }), r2.hoverSeries === o2 && (r2.hoverSeries = void 0), C(r2.series, o2), r2.orderItems("series"), R(o2, function(e4, i4) {
              t3 && "hcEvents" === i4 || delete o2[i4];
            });
          }
          applyZones() {
            let { area: t3, chart: e3, graph: i3, zones: s2, points: o2, xAxis: r2, yAxis: a2, zoneAxis: n2 } = this, { inverted: l2, renderer: h2 } = e3, d2 = this[`${n2}Axis`], { isXAxis: c2, len: p2 = 0 } = d2 || {}, u2 = (i3?.strokeWidth() || 0) / 2 + 1, g2 = (t4, e4 = 0, i4 = 0) => {
              l2 && (i4 = p2 - i4);
              let { translated: s3 = 0, lineClip: o3 } = t4, r3 = i4 - s3;
              o3?.push(["L", e4, Math.abs(r3) < u2 ? i4 - u2 * (r3 <= 0 ? -1 : 1) : s3]);
            };
            if (s2.length && (i3 || t3) && d2 && B(d2.min)) {
              let e4 = d2.getExtremes().max, u3 = (t4) => {
                t4.forEach((e5, i4) => {
                  ("M" === e5[0] || "L" === e5[0]) && (t4[i4] = [e5[0], c2 ? p2 - e5[1] : e5[1], c2 ? e5[2] : p2 - e5[2]]);
                });
              };
              if (s2.forEach((t4) => {
                t4.lineClip = [], t4.translated = b(d2.toPixels(z(t4.value, e4), true) || 0, 0, p2);
              }), i3 && !this.showLine && i3.hide(), t3 && t3.hide(), "y" === n2 && o2.length < r2.len)
                for (let t4 of o2) {
                  let { plotX: e5, plotY: i4, zone: o3 } = t4, r3 = o3 && s2[s2.indexOf(o3) - 1];
                  o3 && g2(o3, e5, i4), r3 && g2(r3, e5, i4);
                }
              let f2 = [], m2 = d2.toPixels(d2.getExtremes().min, true);
              s2.forEach((e5) => {
                let s3 = e5.lineClip || [], o3 = Math.round(e5.translated || 0);
                r2.reversed && s3.reverse();
                let { clip: n3, simpleClip: d3 } = e5, p3 = 0, g3 = 0, x2 = r2.len, y2 = a2.len;
                c2 ? (p3 = o3, x2 = m2) : (g3 = o3, y2 = m2);
                let b2 = [["M", p3, g3], ["L", x2, g3], ["L", x2, y2], ["L", p3, y2], ["Z"]], v2 = [b2[0], ...s3, b2[1], b2[2], ...f2, b2[3], b2[4]];
                f2 = s3.reverse(), m2 = o3, l2 && (u3(v2), t3 && u3(b2)), n3 ? (n3.animate({ d: v2 }), d3?.animate({ d: b2 })) : (n3 = e5.clip = h2.path(v2), t3 && (d3 = e5.simpleClip = h2.path(b2))), i3 && e5.graph?.clip(n3), t3 && e5.area?.clip(d3);
              });
            } else
              this.visible && (i3 && i3.show(), t3 && t3.show());
          }
          plotGroup(t3, e3, i3, s2, o2) {
            let r2 = this[t3], a2 = !r2, n2 = { visibility: i3, zIndex: s2 || 0.1 };
            return S(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (n2.opacity = this.opacity), r2 || (this[t3] = r2 = this.chart.renderer.g().add(o2)), r2.addClass("highcharts-" + e3 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (S(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (r2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true), r2.attr(n2)[a2 ? "attr" : "animate"](this.getPlotBox(e3)), r2;
          }
          getPlotBox(t3) {
            let e3 = this.xAxis, i3 = this.yAxis, s2 = this.chart, o2 = s2.inverted && !s2.polar && e3 && this.invertible && "series" === t3;
            return s2.inverted && (e3 = i3, i3 = this.xAxis), { translateX: e3 ? e3.left : s2.plotLeft, translateY: i3 ? i3.top : s2.plotTop, rotation: o2 ? 90 : 0, rotationOriginX: o2 ? (e3.len - i3.len) / 2 : 0, rotationOriginY: o2 ? (e3.len + i3.len) / 2 : 0, scaleX: o2 ? -1 : 1, scaleY: 1 };
          }
          removeEvents(t3) {
            let { eventsToUnbind: e3 } = this;
            t3 || G(this), e3.length && (e3.forEach((t4) => {
              t4();
            }), e3.length = 0);
          }
          render() {
            let t3 = this, { chart: e3, options: i3, hasRendered: s2 } = t3, o2 = d(i3.animation), r2 = t3.visible ? "inherit" : "hidden", a2 = i3.zIndex, n2 = e3.seriesGroup, l2 = t3.finishedAnimating ? 0 : o2.duration;
            P(this, "render"), t3.plotGroup("group", "series", r2, a2, n2), t3.markerGroup = t3.plotGroup("markerGroup", "markers", r2, a2, n2), false !== i3.clip && t3.setClip(), l2 && t3.animate?.(true), t3.drawGraph && (t3.drawGraph(), t3.applyZones()), t3.visible && t3.drawPoints(), t3.drawDataLabels?.(), t3.redrawPoints?.(), i3.enableMouseTracking && t3.drawTracker?.(), l2 && t3.animate?.(), s2 || (l2 && o2.defer && (l2 += o2.defer), t3.animationTimeout = W(() => {
              t3.afterAnimate();
            }, l2 || 0)), t3.isDirty = false, t3.hasRendered = true, P(t3, "afterRender");
          }
          redraw() {
            let t3 = this.isDirty || this.isDirtyData;
            this.translate(), this.render(), t3 && delete this.kdTree;
          }
          reserveSpace() {
            return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
          }
          searchPoint(t3, e3) {
            let { xAxis: i3, yAxis: s2 } = this, o2 = this.chart.inverted;
            return this.searchKDTree({ clientX: o2 ? i3.len - t3.chartY + i3.pos : t3.chartX - i3.pos, plotY: o2 ? s2.len - t3.chartX + s2.pos : t3.chartY - s2.pos }, e3, t3);
          }
          buildKDTree(t3) {
            this.buildingKdTree = true;
            let e3 = this, i3 = e3.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
            delete e3.kdTree, W(function() {
              e3.kdTree = function t4(i4, s2, o2) {
                let r2, a2;
                let n2 = i4?.length;
                if (n2)
                  return r2 = e3.kdAxisArray[s2 % o2], i4.sort((t5, e4) => (t5[r2] || 0) - (e4[r2] || 0)), { point: i4[a2 = Math.floor(n2 / 2)], left: t4(i4.slice(0, a2), s2 + 1, o2), right: t4(i4.slice(a2 + 1), s2 + 1, o2) };
              }(e3.getValidPoints(void 0, !e3.directTouch), i3, i3), e3.buildingKdTree = false;
            }, e3.options.kdNow || t3?.type === "touchstart" ? 0 : 1);
          }
          searchKDTree(t3, e3, i3) {
            let s2 = this, [o2, r2] = this.kdAxisArray, a2 = e3 ? "distX" : "dist", n2 = (s2.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, l2 = !!s2.isBubble;
            if (this.kdTree || this.buildingKdTree || this.buildKDTree(i3), this.kdTree)
              return function t4(e4, i4, n3, h2) {
                let d2 = i4.point, c2 = s2.kdAxisArray[n3 % h2], p2, u2, g2 = d2;
                !function(t5, e5) {
                  let i5 = t5[o2], s3 = e5[o2], a3 = S(i5) && S(s3) ? i5 - s3 : null, n4 = t5[r2], h3 = e5[r2], d3 = S(n4) && S(h3) ? n4 - h3 : 0, c3 = l2 && e5.marker?.radius || 0;
                  e5.dist = Math.sqrt((a3 && a3 * a3 || 0) + d3 * d3) - c3, e5.distX = S(a3) ? Math.abs(a3) - c3 : Number.MAX_VALUE;
                }(e4, d2);
                let f2 = (e4[c2] || 0) - (d2[c2] || 0) + (l2 && d2.marker?.radius || 0), m2 = f2 < 0 ? "left" : "right", x2 = f2 < 0 ? "right" : "left";
                return i4[m2] && (g2 = (p2 = t4(e4, i4[m2], n3 + 1, h2))[a2] < g2[a2] ? p2 : d2), i4[x2] && Math.sqrt(f2 * f2) < g2[a2] && (g2 = (u2 = t4(e4, i4[x2], n3 + 1, h2))[a2] < g2[a2] ? u2 : g2), g2;
              }(t3, this.kdTree, n2, n2);
          }
          pointPlacementToXValue() {
            let { options: t3, xAxis: e3 } = this, i3 = t3.pointPlacement;
            return "between" === i3 && (i3 = e3.reversed ? -0.5 : 0.5), B(i3) ? i3 * (t3.pointRange || e3.pointRange) : 0;
          }
          isPointInside(t3) {
            let { chart: e3, xAxis: i3, yAxis: s2 } = this, { plotX: o2 = -1, plotY: r2 = -1 } = t3;
            return r2 >= 0 && r2 <= (s2 ? s2.len : e3.plotHeight) && o2 >= 0 && o2 <= (i3 ? i3.len : e3.plotWidth);
          }
          drawTracker() {
            let t3 = this, e3 = t3.options, i3 = e3.trackByArea, s2 = [].concat((i3 ? t3.areaPath : t3.graphPath) || []), o2 = t3.chart, r2 = o2.pointer, a2 = o2.renderer, n2 = o2.options.tooltip?.snap || 0, l2 = () => {
              e3.enableMouseTracking && o2.hoverSeries !== t3 && t3.onMouseOver();
            }, h2 = "rgba(192,192,192," + (g ? 1e-4 : 2e-3) + ")", d2 = t3.tracker;
            d2 ? d2.attr({ d: s2 }) : t3.graph && (t3.tracker = d2 = a2.path(s2).attr({ visibility: t3.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i3 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t3.group), o2.styledMode || d2.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: h2, fill: i3 ? h2 : "none", "stroke-width": t3.graph.strokeWidth() + (i3 ? 0 : 2 * n2) }), [t3.tracker, t3.markerGroup, t3.dataLabelsGroup].forEach((t4) => {
              t4 && (t4.addClass("highcharts-tracker").on("mouseover", l2).on("mouseout", (t5) => {
                r2?.onTrackerMouseOut(t5);
              }), e3.cursor && !o2.styledMode && t4.css({ cursor: e3.cursor }), t4.on("touchstart", l2));
            })), P(this, "afterDrawTracker");
          }
          addPoint(t3, e3, i3, s2, o2) {
            let r2, a2;
            let n2 = this.options, l2 = this.data, h2 = this.chart, d2 = this.xAxis, c2 = d2 && d2.hasNames && d2.names, p2 = n2.data, u2 = this.xData;
            e3 = z(e3, true);
            let g2 = { series: this };
            this.pointClass.prototype.applyOptions.apply(g2, [t3]);
            let f2 = g2.x;
            if (a2 = u2.length, this.requireSorting && f2 < u2[a2 - 1])
              for (r2 = true; a2 && u2[a2 - 1] > f2; )
                a2--;
            this.updateParallelArrays(g2, "splice", [a2, 0, 0]), this.updateParallelArrays(g2, a2), c2 && g2.name && (c2[f2] = g2.name), p2.splice(a2, 0, t3), (r2 || this.processedData) && (this.data.splice(a2, 0, null), this.processData()), "point" === n2.legendType && this.generatePoints(), i3 && (l2[0] && l2[0].remove ? l2[0].remove(false) : (l2.shift(), this.updateParallelArrays(g2, "shift"), p2.shift())), false !== o2 && P(this, "addPoint", { point: g2 }), this.isDirty = true, this.isDirtyData = true, e3 && h2.redraw(s2);
          }
          removePoint(t3, e3, i3) {
            let s2 = this, o2 = s2.data, r2 = o2[t3], a2 = s2.points, n2 = s2.chart, l2 = function() {
              a2 && a2.length === o2.length && a2.splice(t3, 1), o2.splice(t3, 1), s2.options.data.splice(t3, 1), s2.updateParallelArrays(r2 || { series: s2 }, "splice", [t3, 1]), r2 && r2.destroy(), s2.isDirty = true, s2.isDirtyData = true, e3 && n2.redraw();
            };
            c(i3, n2), e3 = z(e3, true), r2 ? r2.firePointEvent("remove", null, l2) : l2();
          }
          remove(t3, e3, i3, s2) {
            let o2 = this, r2 = o2.chart;
            function a2() {
              o2.destroy(s2), r2.isDirtyLegend = r2.isDirtyBox = true, r2.linkSeries(s2), z(t3, true) && r2.redraw(e3);
            }
            false !== i3 ? P(o2, "remove", null, a2) : a2();
          }
          update(t3, e3) {
            P(this, "update", { options: t3 = k(t3, this.userOptions) });
            let i3 = this, s2 = i3.chart, o2 = i3.userOptions, r2 = i3.initialType || i3.type, a2 = s2.options.plotOptions, n2 = m[r2].prototype, l2 = i3.finishedAnimating && { animation: false }, h2 = {}, d2, c2, p2 = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], u2 = t3.type || o2.type || s2.options.chart.type, g2 = !(this.hasDerivedData || u2 && u2 !== this.type || void 0 !== t3.pointStart || void 0 !== t3.pointInterval || void 0 !== t3.relativeXValue || t3.joinBy || t3.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((t4) => i3.hasOptionChanged(t4)));
            u2 = u2 || r2, g2 && (p2.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), false !== t3.visible && p2.push("area", "graph"), i3.parallelArrays.forEach(function(t4) {
              p2.push(t4 + "Data");
            }), t3.data && (t3.dataSorting && w(i3.options.dataSorting, t3.dataSorting), this.setData(t3.data, false))), t3 = I(o2, { index: void 0 === o2.index ? i3.index : o2.index, pointStart: a2?.series?.pointStart ?? o2.pointStart ?? i3.xData?.[0] }, !g2 && { data: i3.options.data }, t3, l2), g2 && t3.data && (t3.data = i3.options.data), (p2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(p2)).forEach(function(t4) {
              p2[t4] = i3[t4], delete i3[t4];
            });
            let f2 = false;
            if (m[u2]) {
              if (f2 = u2 !== i3.type, i3.remove(false, false, false, true), f2) {
                if (s2.propFromSeries(), Object.setPrototypeOf)
                  Object.setPrototypeOf(i3, m[u2].prototype);
                else {
                  let t4 = Object.hasOwnProperty.call(i3, "hcEvents") && i3.hcEvents;
                  for (c2 in n2)
                    i3[c2] = void 0;
                  w(i3, m[u2].prototype), t4 ? i3.hcEvents = t4 : delete i3.hcEvents;
                }
              }
            } else
              A(17, true, s2, { missingModuleFor: u2 });
            if (p2.forEach(function(t4) {
              i3[t4] = p2[t4];
            }), i3.init(s2, t3), g2 && this.points)
              for (let t4 of (false === (d2 = i3.options).visible ? (h2.graphic = 1, h2.dataLabel = 1) : (this.hasMarkerChanged(d2, o2) && (h2.graphic = 1), i3.hasDataLabels?.() || (h2.dataLabel = 1)), this.points))
                t4 && t4.series && (t4.resolveColor(), Object.keys(h2).length && t4.destroyElements(h2), false === d2.showInLegend && t4.legendItem && s2.legend.destroyItem(t4));
            i3.initialType = r2, s2.linkSeries(), s2.setSortedData(), f2 && i3.linkedSeries.length && (i3.isDirtyData = true), P(this, "afterUpdate"), z(e3, true) && s2.redraw(!!g2 && void 0);
          }
          setName(t3) {
            this.name = this.options.name = this.userOptions.name = t3, this.chart.isDirtyLegend = true;
          }
          hasOptionChanged(t3) {
            let e3 = this.chart, i3 = this.options[t3], s2 = e3.options.plotOptions, o2 = this.userOptions[t3], r2 = z(s2?.[this.type]?.[t3], s2?.series?.[t3]);
            return o2 && !S(r2) ? i3 !== o2 : i3 !== z(r2, i3);
          }
          onMouseOver() {
            let t3 = this.chart, e3 = t3.hoverSeries, i3 = t3.pointer;
            i3?.setHoverChartIndex(), e3 && e3 !== this && e3.onMouseOut(), this.options.events.mouseOver && P(this, "mouseOver"), this.setState("hover"), t3.hoverSeries = this;
          }
          onMouseOut() {
            let t3 = this.options, e3 = this.chart, i3 = e3.tooltip, s2 = e3.hoverPoint;
            e3.hoverSeries = null, s2 && s2.onMouseOut(), this && t3.events.mouseOut && P(this, "mouseOut"), i3 && !this.stickyTracking && (!i3.shared || this.noSharedTooltip) && i3.hide(), e3.series.forEach(function(t4) {
              t4.setState("", true);
            });
          }
          setState(t3, e3) {
            let i3 = this, s2 = i3.options, o2 = i3.graph, r2 = s2.inactiveOtherPoints, a2 = s2.states, n2 = z(a2[t3 || "normal"] && a2[t3 || "normal"].animation, i3.chart.options.chart.animation), l2 = s2.lineWidth, h2 = s2.opacity;
            if (t3 = t3 || "", i3.state !== t3 && ([i3.group, i3.markerGroup, i3.dataLabelsGroup].forEach(function(e4) {
              e4 && (i3.state && e4.removeClass("highcharts-series-" + i3.state), t3 && e4.addClass("highcharts-series-" + t3));
            }), i3.state = t3, !i3.chart.styledMode)) {
              if (a2[t3] && false === a2[t3].enabled)
                return;
              if (t3 && (l2 = a2[t3].lineWidth || l2 + (a2[t3].lineWidthPlus || 0), h2 = z(a2[t3].opacity, h2)), o2 && !o2.dashstyle && B(l2))
                for (let t4 of [o2, ...this.zones.map((t5) => t5.graph)])
                  t4?.animate({ "stroke-width": l2 }, n2);
              r2 || [i3.group, i3.markerGroup, i3.dataLabelsGroup, i3.labelBySeries].forEach(function(t4) {
                t4 && t4.animate({ opacity: h2 }, n2);
              });
            }
            e3 && r2 && i3.points && i3.setAllPointsToState(t3 || void 0);
          }
          setAllPointsToState(t3) {
            this.points.forEach(function(e3) {
              e3.setState && e3.setState(t3);
            });
          }
          setVisible(t3, e3) {
            let i3 = this, s2 = i3.chart, o2 = s2.options.chart.ignoreHiddenSeries, r2 = i3.visible;
            i3.visible = t3 = i3.options.visible = i3.userOptions.visible = void 0 === t3 ? !r2 : t3;
            let a2 = t3 ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((t4) => {
              i3[t4]?.[a2]();
            }), (s2.hoverSeries === i3 || s2.hoverPoint?.series === i3) && i3.onMouseOut(), i3.legendItem && s2.legend.colorizeItem(i3, t3), i3.isDirty = true, i3.options.stacking && s2.series.forEach((t4) => {
              t4.options.stacking && t4.visible && (t4.isDirty = true);
            }), i3.linkedSeries.forEach((e4) => {
              e4.setVisible(t3, false);
            }), o2 && (s2.isDirtyBox = true), P(i3, a2), false !== e3 && s2.redraw();
          }
          show() {
            this.setVisible(true);
          }
          hide() {
            this.setVisible(false);
          }
          select(t3) {
            this.selected = t3 = this.options.selected = void 0 === t3 ? !this.selected : t3, this.checkbox && (this.checkbox.checked = t3), P(this, t3 ? "select" : "unselect");
          }
          shouldShowTooltip(t3, e3, i3 = {}) {
            return i3.series = this, i3.visiblePlotOnly = true, this.chart.isInsidePlot(t3, e3, i3);
          }
          drawLegendSymbol(t3, e3) {
            o[this.options.legendSymbol || "rectangle"]?.call(this, t3, e3);
          }
        }
        return H.defaultOptions = a, H.types = n.seriesTypes, H.registerType = n.registerSeriesType, w(H.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: false, invertible: true, isCartesian: true, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: r, requireSorting: true, sorted: true }), n.series = H, H;
      }), i(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Axis/Tick.js"]], function(t2, e2, i2, s, o, r, a, n, l, h, d, c, p, u) {
        let { animate: g, animObject: f, setAnimation: m } = t2, { defaultOptions: x, defaultTime: y } = i2, { numberFormat: b } = s, { registerEventOptions: v } = o, { charts: S, doc: M, marginNames: k, svg: C, win: A } = r, { seriesTypes: w } = l, { addEvent: T, attr: P, createElement: L, css: O, defined: D, diffObjects: E, discardElement: B, erase: j, error: I, extend: R, find: z, fireEvent: G, getStyle: N, isArray: W, isNumber: H, isObject: X, isString: F, merge: Y, objectEach: U, pick: V, pInt: _, relativeLength: $, removeEvent: Z, splat: K, syncTimeout: q, uniqueKey: J } = c;
        class Q {
          static chart(t3, e3, i3) {
            return new Q(t3, e3, i3);
          }
          constructor(t3, e3, i3) {
            this.sharedClips = {};
            let s2 = [...arguments];
            (F(t3) || t3.nodeName) && (this.renderTo = s2.shift()), this.init(s2[0], s2[1]);
          }
          setZoomOptions() {
            let t3 = this.options.chart, e3 = t3.zooming;
            this.zooming = __spreadProps(__spreadValues({}, e3), { type: V(t3.zoomType, e3.type), key: V(t3.zoomKey, e3.key), pinchType: V(t3.pinchType, e3.pinchType), singleTouch: V(t3.zoomBySingleTouch, e3.singleTouch, false), resetButton: Y(e3.resetButton, t3.resetZoomButton) });
          }
          init(t3, e3) {
            G(this, "init", { args: arguments }, function() {
              let i3 = Y(x, t3), s2 = i3.chart;
              this.userOptions = R({}, t3), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e3, this.isResizing = 0, this.options = i3, this.axes = [], this.series = [], this.time = t3.time && Object.keys(t3.time).length ? new d(t3.time) : r.time, this.numberFormatter = s2.numberFormatter || b, this.styledMode = s2.styledMode, this.hasCartesianSeries = s2.showAxes, this.index = S.length, S.push(this), r.chartCount++, v(this, s2), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), G(this, "afterInit"), this.firstRender();
            });
          }
          initSeries(t3) {
            let e3 = this.options.chart, i3 = t3.type || e3.type, s2 = w[i3];
            s2 || I(17, true, this, { missingModuleFor: i3 });
            let o2 = new s2();
            return "function" == typeof o2.init && o2.init(this, t3), o2;
          }
          setSortedData() {
            this.getSeriesOrderByLinks().forEach(function(t3) {
              t3.points || t3.data || !t3.enabledDataSorting || t3.setData(t3.options.data, false);
            });
          }
          getSeriesOrderByLinks() {
            return this.series.concat().sort(function(t3, e3) {
              return t3.linkedSeries.length || e3.linkedSeries.length ? e3.linkedSeries.length - t3.linkedSeries.length : 0;
            });
          }
          orderItems(t3, e3 = 0) {
            let i3 = this[t3], s2 = this.options[t3] = K(this.options[t3]).slice(), o2 = this.userOptions[t3] = this.userOptions[t3] ? K(this.userOptions[t3]).slice() : [];
            if (this.hasRendered && (s2.splice(e3), o2.splice(e3)), i3)
              for (let t4 = e3, r2 = i3.length; t4 < r2; ++t4) {
                let e4 = i3[t4];
                e4 && (e4.index = t4, e4 instanceof n && (e4.name = e4.getName()), e4.options.isInternal || (s2[t4] = e4.options, o2[t4] = e4.userOptions));
              }
          }
          isInsidePlot(t3, e3, i3 = {}) {
            let { inverted: s2, plotBox: o2, plotLeft: r2, plotTop: a2, scrollablePlotBox: n2 } = this, { scrollLeft: l2 = 0, scrollTop: h2 = 0 } = i3.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, d2 = i3.series, c2 = i3.visiblePlotOnly && n2 || o2, p2 = i3.inverted ? e3 : t3, u2 = i3.inverted ? t3 : e3, g2 = { x: p2, y: u2, isInsidePlot: true, options: i3 };
            if (!i3.ignoreX) {
              let t4 = d2 && (s2 && !this.polar ? d2.yAxis : d2.xAxis) || { pos: r2, len: 1 / 0 }, e4 = i3.paneCoordinates ? t4.pos + p2 : r2 + p2;
              e4 >= Math.max(l2 + r2, t4.pos) && e4 <= Math.min(l2 + r2 + c2.width, t4.pos + t4.len) || (g2.isInsidePlot = false);
            }
            if (!i3.ignoreY && g2.isInsidePlot) {
              let t4 = !s2 && i3.axis && !i3.axis.isXAxis && i3.axis || d2 && (s2 ? d2.xAxis : d2.yAxis) || { pos: a2, len: 1 / 0 }, e4 = i3.paneCoordinates ? t4.pos + u2 : a2 + u2;
              e4 >= Math.max(h2 + a2, t4.pos) && e4 <= Math.min(h2 + a2 + c2.height, t4.pos + t4.len) || (g2.isInsidePlot = false);
            }
            return G(this, "afterIsInsidePlot", g2), g2.isInsidePlot;
          }
          redraw(t3) {
            G(this, "beforeRedraw");
            let e3 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i3 = this.series, s2 = this.pointer, o2 = this.legend, r2 = this.userOptions.legend, a2 = this.renderer, n2 = a2.isHidden(), l2 = [], h2, d2, c2, p2 = this.isDirtyBox, u2 = this.isDirtyLegend, g2;
            for (a2.rootFontSize = a2.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(false), m(!!this.hasRendered && t3, this), n2 && this.temporaryDisplay(), this.layOutTitles(false), c2 = i3.length; c2--; )
              if (((g2 = i3[c2]).options.stacking || g2.options.centerInCategory) && (d2 = true, g2.isDirty)) {
                h2 = true;
                break;
              }
            if (h2)
              for (c2 = i3.length; c2--; )
                (g2 = i3[c2]).options.stacking && (g2.isDirty = true);
            i3.forEach(function(t4) {
              t4.isDirty && ("point" === t4.options.legendType ? ("function" == typeof t4.updateTotals && t4.updateTotals(), u2 = true) : r2 && (r2.labelFormatter || r2.labelFormat) && (u2 = true)), t4.isDirtyData && G(t4, "updatedData");
            }), u2 && o2 && o2.options.enabled && (o2.render(), this.isDirtyLegend = false), d2 && this.getStacks(), e3.forEach(function(t4) {
              t4.updateNames(), t4.setScale();
            }), this.getMargins(), e3.forEach(function(t4) {
              t4.isDirty && (p2 = true);
            }), e3.forEach(function(t4) {
              let e4 = t4.min + "," + t4.max;
              t4.extKey !== e4 && (t4.extKey = e4, l2.push(function() {
                G(t4, "afterSetExtremes", R(t4.eventArgs, t4.getExtremes())), delete t4.eventArgs;
              })), (p2 || d2) && t4.redraw();
            }), p2 && this.drawChartBox(), G(this, "predraw"), i3.forEach(function(t4) {
              (p2 || t4.isDirty) && t4.visible && t4.redraw(), t4.isDirtyData = false;
            }), s2 && s2.reset(true), a2.draw(), G(this, "redraw"), G(this, "render"), n2 && this.temporaryDisplay(true), l2.forEach(function(t4) {
              t4.call();
            });
          }
          get(t3) {
            let e3 = this.series;
            function i3(e4) {
              return e4.id === t3 || e4.options && e4.options.id === t3;
            }
            let s2 = z(this.axes, i3) || z(this.series, i3);
            for (let t4 = 0; !s2 && t4 < e3.length; t4++)
              s2 = z(e3[t4].points || [], i3);
            return s2;
          }
          getAxes() {
            let t3 = this.userOptions;
            for (let i3 of (G(this, "getAxes"), ["xAxis", "yAxis"]))
              for (let s2 of t3[i3] = K(t3[i3] || {}))
                new e2(this, s2, i3);
            G(this, "afterGetAxes");
          }
          getSelectedPoints() {
            return this.series.reduce((t3, e3) => (e3.getPointsCollection().forEach((e4) => {
              V(e4.selectedStaging, e4.selected) && t3.push(e4);
            }), t3), []);
          }
          getSelectedSeries() {
            return this.series.filter(function(t3) {
              return t3.selected;
            });
          }
          setTitle(t3, e3, i3) {
            this.applyDescription("title", t3), this.applyDescription("subtitle", e3), this.applyDescription("caption", void 0), this.layOutTitles(i3);
          }
          applyDescription(t3, e3) {
            let i3 = this, s2 = this.options[t3] = Y(this.options[t3], e3), o2 = this[t3];
            o2 && e3 && (this[t3] = o2 = o2.destroy()), s2 && !o2 && ((o2 = this.renderer.text(s2.text, 0, 0, s2.useHTML).attr({ align: s2.align, class: "highcharts-" + t3, zIndex: s2.zIndex || 4 }).add()).update = function(e4, s3) {
              i3.applyDescription(t3, e4), i3.layOutTitles(s3);
            }, this.styledMode || o2.css(R("title" === t3 ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s2.style)), this[t3] = o2);
          }
          layOutTitles(t3 = true) {
            let e3 = [0, 0, 0], i3 = this.renderer, s2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(t4) {
              let o3 = this[t4], r2 = this.options[t4], a2 = r2.verticalAlign || "top", n2 = "title" === t4 ? "top" === a2 ? -3 : 0 : "top" === a2 ? e3[0] + 2 : 0;
              if (o3) {
                o3.css({ width: (r2.width || s2.width + (r2.widthAdjust || 0)) + "px" });
                let t5 = i3.fontMetrics(o3).b, l2 = Math.round(o3.getBBox(r2.useHTML).height);
                o3.align(R({ y: "bottom" === a2 ? t5 : n2 + t5, height: l2 }, r2), false, "spacingBox"), r2.floating || ("top" === a2 ? e3[0] = Math.ceil(e3[0] + l2) : "bottom" === a2 && (e3[2] = Math.ceil(e3[2] + l2)));
              }
            }, this), e3[0] && "top" === (this.options.title.verticalAlign || "top") && (e3[0] += this.options.title.margin), e3[2] && "bottom" === this.options.caption.verticalAlign && (e3[2] += this.options.caption.margin);
            let o2 = !this.titleOffset || this.titleOffset.join(",") !== e3.join(",");
            this.titleOffset = e3, G(this, "afterLayOutTitles"), !this.isDirtyBox && o2 && (this.isDirtyBox = this.isDirtyLegend = o2, this.hasRendered && t3 && this.isDirtyBox && this.redraw());
          }
          getContainerBox() {
            return { width: N(this.renderTo, "width", true) || 0, height: N(this.renderTo, "height", true) || 0 };
          }
          getChartSize() {
            let t3 = this.options.chart, e3 = t3.width, i3 = t3.height, s2 = this.getContainerBox();
            this.chartWidth = Math.max(0, e3 || s2.width || 600), this.chartHeight = Math.max(0, $(i3, this.chartWidth) || (s2.height > 1 ? s2.height : 400)), this.containerBox = s2;
          }
          temporaryDisplay(t3) {
            let e3 = this.renderTo, i3;
            if (t3)
              for (; e3 && e3.style; )
                e3.hcOrigStyle && (O(e3, e3.hcOrigStyle), delete e3.hcOrigStyle), e3.hcOrigDetached && (M.body.removeChild(e3), e3.hcOrigDetached = false), e3 = e3.parentNode;
            else
              for (; e3 && e3.style && (M.body.contains(e3) || e3.parentNode || (e3.hcOrigDetached = true, M.body.appendChild(e3)), ("none" === N(e3, "display", false) || e3.hcOricDetached) && (e3.hcOrigStyle = { display: e3.style.display, height: e3.style.height, overflow: e3.style.overflow }, i3 = { display: "block", overflow: "hidden" }, e3 !== this.renderTo && (i3.height = 0), O(e3, i3), e3.offsetWidth || e3.style.setProperty("display", "block", "important")), (e3 = e3.parentNode) !== M.body); )
                ;
          }
          setClassName(t3) {
            this.container.className = "highcharts-container " + (t3 || "");
          }
          getContainer() {
            let t3 = this.options, e3 = t3.chart, i3 = "data-highcharts-chart", s2 = J(), o2, r2 = this.renderTo;
            r2 || (this.renderTo = r2 = e3.renderTo), F(r2) && (this.renderTo = r2 = M.getElementById(r2)), r2 || I(13, true, this);
            let n2 = _(P(r2, i3));
            H(n2) && S[n2] && S[n2].hasRendered && S[n2].destroy(), P(r2, i3, this.index), r2.innerHTML = p.emptyHTML, e3.skipClone || r2.offsetWidth || this.temporaryDisplay(), this.getChartSize();
            let l2 = this.chartHeight, d2 = this.chartWidth;
            O(r2, { overflow: "hidden" }), this.styledMode || (o2 = R({ position: "relative", overflow: "hidden", width: d2 + "px", height: l2 + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, e3.style || {}));
            let c2 = L("div", { id: s2 }, o2, r2);
            this.container = c2, this.getChartSize(), d2 === this.chartWidth || (d2 = this.chartWidth, this.styledMode || O(c2, { width: V(e3.style?.width, d2 + "px") })), this.containerBox = this.getContainerBox(), this._cursor = c2.style.cursor;
            let u2 = e3.renderer || !C ? a.getRendererType(e3.renderer) : h;
            if (this.renderer = new u2(c2, d2, l2, void 0, e3.forExport, t3.exporting && t3.exporting.allowHTML, this.styledMode), m(void 0, this), this.setClassName(e3.className), this.styledMode)
              for (let e4 in t3.defs)
                this.renderer.definition(t3.defs[e4]);
            else
              this.renderer.setStyle(e3.style);
            this.renderer.chartIndex = this.index, G(this, "afterGetContainer");
          }
          getMargins(t3) {
            let { spacing: e3, margin: i3, titleOffset: s2 } = this;
            this.resetMargins(), s2[0] && !D(i3[0]) && (this.plotTop = Math.max(this.plotTop, s2[0] + e3[0])), s2[2] && !D(i3[2]) && (this.marginBottom = Math.max(this.marginBottom, s2[2] + e3[2])), this.legend && this.legend.display && this.legend.adjustMargins(i3, e3), G(this, "getMargins"), t3 || this.getAxisMargins();
          }
          getAxisMargins() {
            let t3 = this, e3 = t3.axisOffset = [0, 0, 0, 0], i3 = t3.colorAxis, s2 = t3.margin, o2 = function(t4) {
              t4.forEach(function(t5) {
                t5.visible && t5.getOffset();
              });
            };
            t3.hasCartesianSeries ? o2(t3.axes) : i3 && i3.length && o2(i3), k.forEach(function(i4, o3) {
              D(s2[o3]) || (t3[i4] += e3[o3]);
            }), t3.setChartSize();
          }
          getOptions() {
            return E(this.userOptions, x);
          }
          reflow(t3) {
            let e3 = this, i3 = e3.containerBox, s2 = e3.getContainerBox();
            delete e3.pointer?.chartPosition, !e3.isPrinting && !e3.isResizing && i3 && s2.width && ((s2.width !== i3.width || s2.height !== i3.height) && (c.clearTimeout(e3.reflowTimeout), e3.reflowTimeout = q(function() {
              e3.container && e3.setSize(void 0, void 0, false);
            }, t3 ? 100 : 0)), e3.containerBox = s2);
          }
          setReflow() {
            let t3 = this, e3 = (e4) => {
              t3.options?.chart.reflow && t3.hasLoaded && t3.reflow(e4);
            };
            if ("function" == typeof ResizeObserver)
              new ResizeObserver(e3).observe(t3.renderTo);
            else {
              let t4 = T(A, "resize", e3);
              T(this, "destroy", t4);
            }
          }
          setSize(t3, e3, i3) {
            let s2 = this, o2 = s2.renderer;
            s2.isResizing += 1, m(i3, s2);
            let r2 = o2.globalAnimation;
            s2.oldChartHeight = s2.chartHeight, s2.oldChartWidth = s2.chartWidth, void 0 !== t3 && (s2.options.chart.width = t3), void 0 !== e3 && (s2.options.chart.height = e3), s2.getChartSize();
            let { chartWidth: a2, chartHeight: n2, scrollablePixelsX: l2 = 0, scrollablePixelsY: h2 = 0 } = s2;
            (s2.isDirtyBox || a2 !== s2.oldChartWidth || n2 !== s2.oldChartHeight) && (s2.styledMode || (r2 ? g : O)(s2.container, { width: `${a2 + l2}px`, height: `${n2 + h2}px` }, r2), s2.setChartSize(true), o2.setSize(a2, n2, r2), s2.axes.forEach(function(t4) {
              t4.isDirty = true, t4.setScale();
            }), s2.isDirtyLegend = true, s2.isDirtyBox = true, s2.layOutTitles(), s2.getMargins(), s2.redraw(r2), s2.oldChartHeight = void 0, G(s2, "resize"), setTimeout(() => {
              s2 && G(s2, "endResize", void 0, () => {
                s2.isResizing -= 1;
              });
            }, f(r2).duration));
          }
          setChartSize(t3) {
            let e3, i3, s2, o2;
            let r2 = this.inverted, a2 = this.renderer, n2 = this.chartWidth, l2 = this.chartHeight, h2 = this.options.chart, d2 = this.spacing, c2 = this.clipOffset;
            this.plotLeft = e3 = Math.round(this.plotLeft), this.plotTop = i3 = Math.round(this.plotTop), this.plotWidth = s2 = Math.max(0, Math.round(n2 - e3 - this.marginRight)), this.plotHeight = o2 = Math.max(0, Math.round(l2 - i3 - this.marginBottom)), this.plotSizeX = r2 ? o2 : s2, this.plotSizeY = r2 ? s2 : o2, this.plotBorderWidth = h2.plotBorderWidth || 0, this.spacingBox = a2.spacingBox = { x: d2[3], y: d2[0], width: n2 - d2[3] - d2[1], height: l2 - d2[0] - d2[2] }, this.plotBox = a2.plotBox = { x: e3, y: i3, width: s2, height: o2 };
            let p2 = 2 * Math.floor(this.plotBorderWidth / 2), u2 = Math.ceil(Math.max(p2, c2[3]) / 2), g2 = Math.ceil(Math.max(p2, c2[0]) / 2);
            this.clipBox = { x: u2, y: g2, width: Math.floor(this.plotSizeX - Math.max(p2, c2[1]) / 2 - u2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(p2, c2[2]) / 2 - g2)) }, t3 || (this.axes.forEach(function(t4) {
              t4.setAxisSize(), t4.setAxisTranslation();
            }), a2.alignElements()), G(this, "afterSetChartSize", { skipAxes: t3 });
          }
          resetMargins() {
            G(this, "resetMargins");
            let t3 = this, e3 = t3.options.chart;
            ["margin", "spacing"].forEach(function(i3) {
              let s2 = e3[i3], o2 = X(s2) ? s2 : [s2, s2, s2, s2];
              ["Top", "Right", "Bottom", "Left"].forEach(function(s3, r2) {
                t3[i3][r2] = V(e3[i3 + s3], o2[r2]);
              });
            }), k.forEach(function(e4, i3) {
              t3[e4] = V(t3.margin[i3], t3.spacing[i3]);
            }), t3.axisOffset = [0, 0, 0, 0], t3.clipOffset = [0, 0, 0, 0];
          }
          drawChartBox() {
            let t3 = this.options.chart, e3 = this.renderer, i3 = this.chartWidth, s2 = this.chartHeight, o2 = this.styledMode, r2 = this.plotBGImage, a2 = t3.backgroundColor, n2 = t3.plotBackgroundColor, l2 = t3.plotBackgroundImage, h2 = this.plotLeft, d2 = this.plotTop, c2 = this.plotWidth, p2 = this.plotHeight, u2 = this.plotBox, g2 = this.clipRect, f2 = this.clipBox, m2 = this.chartBackground, x2 = this.plotBackground, y2 = this.plotBorder, b2, v2, S2, M2 = "animate";
            m2 || (this.chartBackground = m2 = e3.rect().addClass("highcharts-background").add(), M2 = "attr"), o2 ? b2 = v2 = m2.strokeWidth() : (v2 = (b2 = t3.borderWidth || 0) + (t3.shadow ? 8 : 0), S2 = { fill: a2 || "none" }, (b2 || m2["stroke-width"]) && (S2.stroke = t3.borderColor, S2["stroke-width"] = b2), m2.attr(S2).shadow(t3.shadow)), m2[M2]({ x: v2 / 2, y: v2 / 2, width: i3 - v2 - b2 % 2, height: s2 - v2 - b2 % 2, r: t3.borderRadius }), M2 = "animate", x2 || (M2 = "attr", this.plotBackground = x2 = e3.rect().addClass("highcharts-plot-background").add()), x2[M2](u2), !o2 && (x2.attr({ fill: n2 || "none" }).shadow(t3.plotShadow), l2 && (r2 ? (l2 !== r2.attr("href") && r2.attr("href", l2), r2.animate(u2)) : this.plotBGImage = e3.image(l2, h2, d2, c2, p2).add())), g2 ? g2.animate({ width: f2.width, height: f2.height }) : this.clipRect = e3.clipRect(f2), M2 = "animate", y2 || (M2 = "attr", this.plotBorder = y2 = e3.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), o2 || y2.attr({ stroke: t3.plotBorderColor, "stroke-width": t3.plotBorderWidth || 0, fill: "none" }), y2[M2](y2.crisp({ x: h2, y: d2, width: c2, height: p2 }, -y2.strokeWidth())), this.isDirtyBox = false, G(this, "afterDrawChartBox");
          }
          propFromSeries() {
            let t3, e3, i3;
            let s2 = this, o2 = s2.options.chart, r2 = s2.options.series;
            ["inverted", "angular", "polar"].forEach(function(a2) {
              for (e3 = w[o2.type], i3 = o2[a2] || e3 && e3.prototype[a2], t3 = r2 && r2.length; !i3 && t3--; )
                (e3 = w[r2[t3].type]) && e3.prototype[a2] && (i3 = true);
              s2[a2] = i3;
            });
          }
          linkSeries(t3) {
            let e3 = this, i3 = e3.series;
            i3.forEach(function(t4) {
              t4.linkedSeries.length = 0;
            }), i3.forEach(function(t4) {
              let { linkedTo: i4 } = t4.options;
              if (F(i4)) {
                let s2;
                (s2 = ":previous" === i4 ? e3.series[t4.index - 1] : e3.get(i4)) && s2.linkedParent !== t4 && (s2.linkedSeries.push(t4), t4.linkedParent = s2, s2.enabledDataSorting && t4.setDataSortingOptions(), t4.visible = V(t4.options.visible, s2.options.visible, t4.visible));
              }
            }), G(this, "afterLinkSeries", { isUpdating: t3 });
          }
          renderSeries() {
            this.series.forEach(function(t3) {
              t3.translate(), t3.render();
            });
          }
          render() {
            let t3 = this.axes, e3 = this.colorAxis, i3 = this.renderer, s2 = this.options.chart.axisLayoutRuns || 2, o2 = (t4) => {
              t4.forEach((t5) => {
                t5.visible && t5.render();
              });
            }, r2 = 0, a2 = true, n2, l2 = 0;
            for (let e4 of (this.setTitle(), G(this, "beforeMargins"), this.getStacks?.(), this.getMargins(true), this.setChartSize(), t3)) {
              let { options: t4 } = e4, { labels: i4 } = t4;
              if (e4.horiz && e4.visible && i4.enabled && e4.series.length && "colorAxis" !== e4.coll && !this.polar) {
                r2 = t4.tickLength, e4.createGroups();
                let s3 = new u(e4, 0, "", true), o3 = s3.createLabel("x", i4);
                if (s3.destroy(), o3 && V(i4.reserveSpace, !H(t4.crossing)) && (r2 = o3.getBBox().height + i4.distance + Math.max(t4.offset || 0, 0)), r2) {
                  o3?.destroy();
                  break;
                }
              }
            }
            for (this.plotHeight = Math.max(this.plotHeight - r2, 0); (a2 || n2 || s2 > 1) && l2 < s2; ) {
              let e4 = this.plotWidth, i4 = this.plotHeight;
              for (let e5 of t3)
                0 === l2 ? e5.setScale() : (e5.horiz && a2 || !e5.horiz && n2) && e5.setTickInterval(true);
              0 === l2 ? this.getAxisMargins() : this.getMargins(), a2 = e4 / this.plotWidth > (l2 ? 1 : 1.1), n2 = i4 / this.plotHeight > (l2 ? 1 : 1.05), l2++;
            }
            this.drawChartBox(), this.hasCartesianSeries ? o2(t3) : e3 && e3.length && o2(e3), this.seriesGroup || (this.seriesGroup = i3.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = true;
          }
          addCredits(t3) {
            let e3 = this, i3 = Y(true, this.options.credits, t3);
            i3.enabled && !this.credits && (this.credits = this.renderer.text(i3.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              i3.href && (A.location.href = i3.href);
            }).attr({ align: i3.position.align, zIndex: 8 }), e3.styledMode || this.credits.css(i3.style), this.credits.add().align(i3.position), this.credits.update = function(t4) {
              e3.credits = e3.credits.destroy(), e3.addCredits(t4);
            });
          }
          destroy() {
            let t3;
            let e3 = this, i3 = e3.axes, s2 = e3.series, o2 = e3.container, a2 = o2 && o2.parentNode;
            for (G(e3, "destroy"), e3.renderer.forExport ? j(S, e3) : S[e3.index] = void 0, r.chartCount--, e3.renderTo.removeAttribute("data-highcharts-chart"), Z(e3), t3 = i3.length; t3--; )
              i3[t3] = i3[t3].destroy();
            for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t3 = s2.length; t3--; )
              s2[t3] = s2[t3].destroy();
            ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(t4) {
              let i4 = e3[t4];
              i4 && i4.destroy && (e3[t4] = i4.destroy());
            }), o2 && (o2.innerHTML = p.emptyHTML, Z(o2), a2 && B(o2)), U(e3, function(t4, i4) {
              delete e3[i4];
            });
          }
          firstRender() {
            let t3 = this, e3 = t3.options;
            t3.getContainer(), t3.resetMargins(), t3.setChartSize(), t3.propFromSeries(), t3.getAxes();
            let i3 = W(e3.series) ? e3.series : [];
            e3.series = [], i3.forEach(function(e4) {
              t3.initSeries(e4);
            }), t3.linkSeries(), t3.setSortedData(), G(t3, "beforeRender"), t3.render(), t3.pointer?.getChartPosition(), t3.renderer.imgCount || t3.hasLoaded || t3.onload(), t3.temporaryDisplay(true);
          }
          onload() {
            this.callbacks.concat([this.callback]).forEach(function(t3) {
              t3 && void 0 !== this.index && t3.apply(this, [this]);
            }, this), G(this, "load"), G(this, "render"), D(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = true;
          }
          warnIfA11yModuleNotLoaded() {
            let { options: t3, title: e3 } = this;
            !t3 || this.accessibility || (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e3 && e3.element.textContent || "").replace(/</g, "&lt;") }), t3.accessibility && false === t3.accessibility.enabled || I('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', false, this));
          }
          addSeries(t3, e3, i3) {
            let s2;
            let o2 = this;
            return t3 && (e3 = V(e3, true), G(o2, "addSeries", { options: t3 }, function() {
              s2 = o2.initSeries(t3), o2.isDirtyLegend = true, o2.linkSeries(), s2.enabledDataSorting && s2.setData(t3.data, false), G(o2, "afterAddSeries", { series: s2 }), e3 && o2.redraw(i3);
            })), s2;
          }
          addAxis(t3, e3, i3, s2) {
            return this.createAxis(e3 ? "xAxis" : "yAxis", { axis: t3, redraw: i3, animation: s2 });
          }
          addColorAxis(t3, e3, i3) {
            return this.createAxis("colorAxis", { axis: t3, redraw: e3, animation: i3 });
          }
          createAxis(t3, i3) {
            let s2 = new e2(this, i3.axis, t3);
            return V(i3.redraw, true) && this.redraw(i3.animation), s2;
          }
          showLoading(t3) {
            let e3 = this, i3 = e3.options, s2 = i3.loading, o2 = function() {
              r2 && O(r2, { left: e3.plotLeft + "px", top: e3.plotTop + "px", width: e3.plotWidth + "px", height: e3.plotHeight + "px" });
            }, r2 = e3.loadingDiv, a2 = e3.loadingSpan;
            r2 || (e3.loadingDiv = r2 = L("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e3.container)), a2 || (e3.loadingSpan = a2 = L("span", { className: "highcharts-loading-inner" }, null, r2), T(e3, "redraw", o2)), r2.className = "highcharts-loading", p.setElementHTML(a2, V(t3, i3.lang.loading, "")), e3.styledMode || (O(r2, R(s2.style, { zIndex: 10 })), O(a2, s2.labelStyle), e3.loadingShown || (O(r2, { opacity: 0, display: "" }), g(r2, { opacity: s2.style.opacity || 0.5 }, { duration: s2.showDuration || 0 }))), e3.loadingShown = true, o2();
          }
          hideLoading() {
            let t3 = this.options, e3 = this.loadingDiv;
            e3 && (e3.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(e3, { opacity: 0 }, { duration: t3.loading.hideDuration || 100, complete: function() {
              O(e3, { display: "none" });
            } })), this.loadingShown = false;
          }
          update(t3, e3, i3, s2) {
            let o2, r2, a2;
            let n2 = this, l2 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, h2 = t3.isResponsiveOptions, c2 = [];
            G(n2, "update", { options: t3 }), h2 || n2.setResponsive(false, true), t3 = E(t3, n2.options), n2.userOptions = Y(n2.userOptions, t3);
            let p2 = t3.chart;
            p2 && (Y(true, n2.options.chart, p2), this.setZoomOptions(), "className" in p2 && n2.setClassName(p2.className), ("inverted" in p2 || "polar" in p2 || "type" in p2) && (n2.propFromSeries(), o2 = true), "alignTicks" in p2 && (o2 = true), "events" in p2 && v(this, p2), U(p2, function(t4, e4) {
              -1 !== n2.propsRequireUpdateSeries.indexOf("chart." + e4) && (r2 = true), -1 !== n2.propsRequireDirtyBox.indexOf(e4) && (n2.isDirtyBox = true), -1 === n2.propsRequireReflow.indexOf(e4) || (n2.isDirtyBox = true, h2 || (a2 = true));
            }), !n2.styledMode && p2.style && n2.renderer.setStyle(n2.options.chart.style || {})), !n2.styledMode && t3.colors && (this.options.colors = t3.colors), t3.time && (this.time === y && (this.time = new d(t3.time)), Y(true, n2.options.time, t3.time)), U(t3, function(e4, i4) {
              n2[i4] && "function" == typeof n2[i4].update ? n2[i4].update(e4, false) : "function" == typeof n2[l2[i4]] ? n2[l2[i4]](e4) : "colors" !== i4 && -1 === n2.collectionsWithUpdate.indexOf(i4) && Y(true, n2.options[i4], t3[i4]), "chart" !== i4 && -1 !== n2.propsRequireUpdateSeries.indexOf(i4) && (r2 = true);
            }), this.collectionsWithUpdate.forEach(function(e4) {
              t3[e4] && (K(t3[e4]).forEach(function(t4, s3) {
                let o3;
                let r3 = D(t4.id);
                r3 && (o3 = n2.get(t4.id)), !o3 && n2[e4] && (o3 = n2[e4][V(t4.index, s3)]) && (r3 && D(o3.options.id) || o3.options.isInternal) && (o3 = void 0), o3 && o3.coll === e4 && (o3.update(t4, false), i3 && (o3.touched = true)), !o3 && i3 && n2.collectionsWithInit[e4] && (n2.collectionsWithInit[e4][0].apply(n2, [t4].concat(n2.collectionsWithInit[e4][1] || []).concat([false])).touched = true);
              }), i3 && n2[e4].forEach(function(t4) {
                t4.touched || t4.options.isInternal ? delete t4.touched : c2.push(t4);
              }));
            }), c2.forEach(function(t4) {
              t4.chart && t4.remove && t4.remove(false);
            }), o2 && n2.axes.forEach(function(t4) {
              t4.update({}, false);
            }), r2 && n2.getSeriesOrderByLinks().forEach(function(t4) {
              t4.chart && t4.update({}, false);
            }, this);
            let u2 = p2 && p2.width, g2 = p2 && (F(p2.height) ? $(p2.height, u2 || n2.chartWidth) : p2.height);
            a2 || H(u2) && u2 !== n2.chartWidth || H(g2) && g2 !== n2.chartHeight ? n2.setSize(u2, g2, s2) : V(e3, true) && n2.redraw(s2), G(n2, "afterUpdate", { options: t3, redraw: e3, animation: s2 });
          }
          setSubtitle(t3, e3) {
            this.applyDescription("subtitle", t3), this.layOutTitles(e3);
          }
          setCaption(t3, e3) {
            this.applyDescription("caption", t3), this.layOutTitles(e3);
          }
          showResetZoom() {
            let t3 = this, e3 = x.lang, i3 = t3.zooming.resetButton, s2 = i3.theme, o2 = "chart" === i3.relativeTo || "spacingBox" === i3.relativeTo ? null : "plotBox";
            function r2() {
              t3.zoomOut();
            }
            G(this, "beforeShowResetZoom", null, function() {
              t3.resetZoomButton = t3.renderer.button(e3.resetZoom, null, null, r2, s2).attr({ align: i3.position.align, title: e3.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i3.position, false, o2);
            }), G(this, "afterShowResetZoom");
          }
          zoomOut() {
            G(this, "selection", { resetSelection: true }, () => this.transform({ reset: true, trigger: "zoom" }));
          }
          pan(t3, e3) {
            let i3 = this, s2 = "object" == typeof e3 ? e3 : { enabled: e3, type: "x" }, o2 = s2.type, r2 = o2 && i3[{ x: "xAxis", xy: "axes", y: "yAxis" }[o2]].filter((t4) => t4.options.panningEnabled && !t4.options.isInternal), a2 = i3.options.chart;
            a2?.panning && (a2.panning = s2), G(this, "pan", { originalEvent: t3 }, () => {
              i3.transform({ axes: r2, event: t3, to: { x: t3.chartX - (i3.mouseDownX || 0), y: t3.chartY - (i3.mouseDownY || 0) }, trigger: "pan" }), O(i3.container, { cursor: "move" });
            });
          }
          transform(t3) {
            let { axes: e3 = this.axes, event: i3, from: s2 = {}, reset: o2, selection: r2, to: a2 = {}, trigger: n2 } = t3, { inverted: l2, resetZoomButton: h2 } = this, d2 = false, c2;
            for (let t4 of (this.hoverPoints?.forEach((t5) => t5.setState()), e3)) {
              let { horiz: e4, len: h3, minPointOffset: p2 = 0, options: u2, reversed: g2 } = t4, f2 = e4 ? "width" : "height", m2 = e4 ? "x" : "y", x2 = a2[f2] || t4.len, y2 = s2[f2] || t4.len, b2 = 10 > Math.abs(x2) ? 1 : x2 / y2, v2 = (s2[m2] || 0) + y2 / 2 - t4.pos, S2 = v2 - ((a2[m2] ?? t4.pos) + x2 / 2 - t4.pos) / b2, M2 = g2 && !l2 || !g2 && l2 ? -1 : 1;
              if (!o2 && (v2 < 0 || v2 > t4.len))
                continue;
              let k2 = t4.toValue(S2, true) + p2 * M2, C2 = t4.toValue(S2 + h3 / b2, true) - (p2 * M2 || 0), A2 = t4.allExtremes;
              if (k2 > C2 && ([k2, C2] = [C2, k2]), 1 === b2 && !o2 && "yAxis" === t4.coll && !A2) {
                for (let e5 of t4.series) {
                  let t5 = e5.getExtremes(e5.getProcessedData(true).yData, true);
                  A2 ?? (A2 = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), H(t5.dataMin) && H(t5.dataMax) && (A2.dataMin = Math.min(t5.dataMin, A2.dataMin), A2.dataMax = Math.max(t5.dataMax, A2.dataMax));
                }
                t4.allExtremes = A2;
              }
              let { dataMin: w2, dataMax: T2, min: P2, max: L2 } = R(t4.getExtremes(), A2 || {}), O2 = w2 ?? u2.min, E2 = T2 ?? u2.max, B2 = C2 - k2, j2 = t4.categories ? 0 : Math.min(B2, E2 - O2), I2 = O2 - j2 * (D(u2.min) ? 0 : u2.minPadding), z2 = E2 + j2 * (D(u2.max) ? 0 : u2.maxPadding), G2 = t4.allowZoomOutside || 1 === b2 || "zoom" !== n2 && b2 > 1, N2 = Math.min(u2.min ?? I2, I2, G2 ? P2 : I2), W2 = Math.max(u2.max ?? z2, z2, G2 ? L2 : z2);
              (!t4.isOrdinal || 1 !== b2 || o2) && (k2 < N2 && (k2 = N2, b2 >= 1 && (C2 = k2 + B2)), C2 > W2 && (C2 = W2, b2 >= 1 && (k2 = C2 - B2)), (o2 || t4.series.length && (k2 !== P2 || C2 !== L2) && k2 >= N2 && C2 <= W2) && (r2 ? r2[t4.coll].push({ axis: t4, min: k2, max: C2 }) : (t4.isPanning = "zoom" !== n2, t4.setExtremes(o2 ? void 0 : k2, o2 ? void 0 : C2, false, false, { move: S2, trigger: n2, scale: b2 }), !o2 && (k2 > N2 || C2 < W2) && "mousewheel" !== n2 && (c2 = true)), d2 = true), i3 && (this[e4 ? "mouseDownX" : "mouseDownY"] = i3[e4 ? "chartX" : "chartY"]));
            }
            return d2 && (r2 ? G(this, "selection", r2, () => {
              delete t3.selection, t3.trigger = "zoom", this.transform(t3);
            }) : (c2 && !h2 ? this.showResetZoom() : !c2 && h2 && (this.resetZoomButton = h2.destroy()), this.redraw("zoom" === n2 && (this.options.chart.animation ?? this.pointCount < 100)))), d2;
          }
        }
        return R(Q.prototype, { callbacks: [], collectionsWithInit: { xAxis: [Q.prototype.addAxis, [true]], yAxis: [Q.prototype.addAxis, [false]], series: [Q.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] }), Q;
      }), i(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { stop: o } = t2, { composed: r } = e2, { addEvent: a, createElement: n, css: l, defined: h, merge: d, pushUnique: c } = s;
        function p() {
          let t3 = this.scrollablePlotArea;
          (this.scrollablePixelsX || this.scrollablePixelsY) && !t3 && (this.scrollablePlotArea = t3 = new g(this)), t3?.applyFixed();
        }
        function u() {
          this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = true);
        }
        class g {
          static compose(t3, e3, i3) {
            c(r, this.compose) && (a(t3, "afterInit", u), a(e3, "afterSetChartSize", (t4) => this.afterSetSize(t4.target, t4)), a(e3, "render", p), a(i3, "show", u));
          }
          static afterSetSize(t3, e3) {
            let i3, s2, o2;
            let { minWidth: r2, minHeight: a2 } = t3.options.chart.scrollablePlotArea || {}, { clipBox: n2, plotBox: l2, inverted: c2, renderer: p2 } = t3;
            if (!p2.forExport && (r2 ? (t3.scrollablePixelsX = i3 = Math.max(0, r2 - t3.chartWidth), i3 && (t3.scrollablePlotBox = d(t3.plotBox), l2.width = t3.plotWidth += i3, n2[c2 ? "height" : "width"] += i3, o2 = true)) : a2 && (t3.scrollablePixelsY = s2 = Math.max(0, a2 - t3.chartHeight), h(s2) && (t3.scrollablePlotBox = d(t3.plotBox), l2.height = t3.plotHeight += s2, n2[c2 ? "width" : "height"] += s2, o2 = false)), h(o2) && !e3.skipAxes))
              for (let e4 of t3.axes)
                e4.horiz === o2 && (e4.setAxisSize(), e4.setAxisTranslation());
          }
          constructor(t3) {
            let e3;
            let s2 = t3.options.chart, o2 = i2.getRendererType(), r2 = s2.scrollablePlotArea || {}, h2 = this.moveFixedElements.bind(this), d2 = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
            t3.scrollablePixelsX && (d2.overflowX = "auto"), t3.scrollablePixelsY && (d2.overflowY = "auto"), this.chart = t3;
            let c2 = this.parentDiv = n("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, t3.renderTo), p2 = this.scrollingContainer = n("div", { className: "highcharts-scrolling" }, d2, c2), u2 = this.innerContainer = n("div", { className: "highcharts-inner-container" }, void 0, p2), g2 = this.fixedDiv = n("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (s2.style?.zIndex || 0) + 2, top: 0 }, void 0, true), f = this.fixedRenderer = new o2(g2, t3.chartWidth, t3.chartHeight, s2.style);
            this.mask = f.path().attr({ fill: s2.backgroundColor || "#fff", "fill-opacity": r2.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), p2.parentNode.insertBefore(g2, p2), l(t3.renderTo, { overflow: "visible" }), a(t3, "afterShowResetZoom", h2), a(t3, "afterApplyDrilldown", h2), a(t3, "afterLayOutTitles", h2), a(p2, "scroll", () => {
              let { pointer: i3, hoverPoint: s3 } = t3;
              i3 && (delete i3.chartPosition, s3 && (e3 = s3), i3.runPointActions(void 0, e3, true));
            }), u2.appendChild(t3.container);
          }
          applyFixed() {
            let { chart: t3, fixedRenderer: e3, isDirty: i3, scrollingContainer: s2 } = this, { axisOffset: r2, chartWidth: a2, chartHeight: n2, container: d2, plotHeight: c2, plotLeft: p2, plotTop: u2, plotWidth: g2, scrollablePixelsX: f = 0, scrollablePixelsY: m = 0 } = t3, { scrollPositionX: x = 0, scrollPositionY: y = 0 } = t3.options.chart.scrollablePlotArea || {}, b = a2 + f, v = n2 + m;
            e3.setSize(a2, n2), (i3 ?? true) && (this.isDirty = false, this.moveFixedElements()), o(t3.container), l(d2, { width: `${b}px`, height: `${v}px` }), t3.renderer.boxWrapper.attr({ width: b, height: v, viewBox: [0, 0, b, v].join(" ") }), t3.chartBackground?.attr({ width: b, height: v }), l(s2, { width: `${a2}px`, height: `${n2}px` }), h(i3) || (s2.scrollLeft = f * x, s2.scrollTop = m * y);
            let S = u2 - r2[0] - 1, M = p2 - r2[3] - 1, k = u2 + c2 + r2[2] + 1, C = p2 + g2 + r2[1] + 1, A = p2 + g2 - f, w = u2 + c2 - m, T = [["M", 0, 0]];
            f ? T = [["M", 0, S], ["L", p2 - 1, S], ["L", p2 - 1, k], ["L", 0, k], ["Z"], ["M", A, S], ["L", a2, S], ["L", a2, k], ["L", A, k], ["Z"]] : m && (T = [["M", M, 0], ["L", M, u2 - 1], ["L", C, u2 - 1], ["L", C, 0], ["Z"], ["M", M, w], ["L", M, n2], ["L", C, n2], ["L", C, w], ["Z"]]), "adjustHeight" !== t3.redrawTrigger && this.mask.attr({ d: T });
          }
          moveFixedElements() {
            let t3;
            let { container: e3, inverted: i3, scrollablePixelsX: s2, scrollablePixelsY: o2 } = this.chart, r2 = this.fixedRenderer, a2 = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-reset-zoom", ".highcharts-drillup-button", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
            for (let n2 of (s2 && !i3 ? t3 = ".highcharts-yaxis" : s2 && i3 ? t3 = ".highcharts-xaxis" : o2 && !i3 ? t3 = ".highcharts-xaxis" : o2 && i3 && (t3 = ".highcharts-yaxis"), t3 && a2.push(`${t3}:not(.highcharts-radial-axis)`, `${t3}-labels:not(.highcharts-radial-axis-labels)`), a2))
              [].forEach.call(e3.querySelectorAll(n2), (t4) => {
                (t4.namespaceURI === r2.SVG_NS ? r2.box : r2.box.parentNode).appendChild(t4), t4.style.pointerEvents = "auto";
              });
          }
        }
        return g;
      }), i(e, "Core/Axis/Stacking/StackItem.js", [e["Core/Templating.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { format: s } = t2, { series: o } = e2, { destroyObjectProperties: r, fireEvent: a, isNumber: n, pick: l } = i2;
        return class {
          constructor(t3, e3, i3, s2, o2) {
            let r2 = t3.chart.inverted, a2 = t3.reversed;
            this.axis = t3;
            let n2 = this.isNegative = !!i3 != !!a2;
            this.options = e3 = e3 || {}, this.x = s2, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = false, this.stack = o2, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: e3.align || (r2 ? n2 ? "left" : "right" : "center"), verticalAlign: e3.verticalAlign || (r2 ? "middle" : n2 ? "bottom" : "top"), y: e3.y, x: e3.x }, this.textAlign = e3.textAlign || (r2 ? n2 ? "right" : "left" : "center");
          }
          destroy() {
            r(this, this.axis);
          }
          render(t3) {
            let e3 = this.axis.chart, i3 = this.options, o2 = i3.format, r2 = o2 ? s(o2, this, e3) : i3.formatter.call(this);
            if (this.label)
              this.label.attr({ text: r2, visibility: "hidden" });
            else {
              this.label = e3.renderer.label(r2, null, void 0, i3.shape, void 0, void 0, i3.useHTML, false, "stack-labels");
              let s2 = { r: i3.borderRadius || 0, text: r2, padding: l(i3.padding, 5), visibility: "hidden" };
              e3.styledMode || (s2.fill = i3.backgroundColor, s2.stroke = i3.borderColor, s2["stroke-width"] = i3.borderWidth, this.label.css(i3.style || {})), this.label.attr(s2), this.label.added || this.label.add(t3);
            }
            this.label.labelrank = e3.plotSizeY, a(this, "afterRender");
          }
          setOffset(t3, e3, i3, s2, r2, h) {
            let { alignOptions: d, axis: c, label: p, options: u, textAlign: g } = this, f = c.chart, m = this.getStackBox({ xOffset: t3, width: e3, boxBottom: i3, boxTop: s2, defaultX: r2, xAxis: h }), { verticalAlign: x } = d;
            if (p && m) {
              let t4 = p.getBBox(void 0, 0), e4 = p.padding, i4 = "justify" === l(u.overflow, "justify"), s3;
              d.x = u.x || 0, d.y = u.y || 0;
              let { x: r3, y: a2 } = this.adjustStackPosition({ labelBox: t4, verticalAlign: x, textAlign: g });
              m.x -= r3, m.y -= a2, p.align(d, false, m), (s3 = f.isInsidePlot(p.alignAttr.x + d.x + r3, p.alignAttr.y + d.y + a2)) || (i4 = false), i4 && o.prototype.justifyDataLabel.call(c, p, d, p.alignAttr, t4, m), p.attr({ x: p.alignAttr.x, y: p.alignAttr.y, rotation: u.rotation, rotationOriginX: t4.width * { left: 0, center: 0.5, right: 1 }[u.textAlign || "center"], rotationOriginY: t4.height / 2 }), l(!i4 && u.crop, true) && (s3 = n(p.x) && n(p.y) && f.isInsidePlot(p.x - e4 + (p.width || 0), p.y) && f.isInsidePlot(p.x + e4, p.y)), p[s3 ? "show" : "hide"]();
            }
            a(this, "afterSetOffset", { xOffset: t3, width: e3 });
          }
          adjustStackPosition({ labelBox: t3, verticalAlign: e3, textAlign: i3 }) {
            let s2 = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 }, o2 = s2[e3], r2 = s2[i3];
            return { x: t3.width / 2 + t3.width / 2 * r2, y: t3.height / 2 * o2 };
          }
          getStackBox(t3) {
            let e3 = this.axis, i3 = e3.chart, { boxTop: s2, defaultX: o2, xOffset: r2, width: a2, boxBottom: h } = t3, d = e3.stacking.usePercentage ? 100 : l(s2, this.total, 0), c = e3.toPixels(d), p = t3.xAxis || i3.xAxis[0], u = l(o2, p.translate(this.x)) + r2, g = Math.abs(c - e3.toPixels(h || n(e3.min) && e3.logarithmic && e3.logarithmic.lin2log(e3.min) || 0)), f = i3.inverted, m = this.isNegative;
            return f ? { x: (m ? c : c - g) - i3.plotLeft, y: p.height - u - a2, width: g, height: a2 } : { x: u + p.transB - i3.plotLeft, y: (m ? c - g : c) - i3.plotTop, width: a2, height: g };
          }
        };
      }), i(e, "Core/Axis/Stacking/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let { getDeferredAnimation: a } = t2, { series: { prototype: n } } = i2, { addEvent: l, correctFloat: h, defined: d, destroyObjectProperties: c, fireEvent: p, isArray: u, isNumber: g, objectEach: f, pick: m } = o;
        function x() {
          let t3 = this.inverted;
          this.axes.forEach((t4) => {
            t4.stacking && t4.stacking.stacks && t4.hasVisibleSeries && (t4.stacking.oldStacks = t4.stacking.stacks);
          }), this.series.forEach((e3) => {
            let i3 = e3.xAxis && e3.xAxis.options || {};
            e3.options.stacking && e3.reserveSpace() && (e3.stackKey = [e3.type, m(e3.options.stack, ""), t3 ? i3.top : i3.left, t3 ? i3.height : i3.width].join(","));
          });
        }
        function y() {
          let t3 = this.stacking;
          if (t3) {
            let e3 = t3.stacks;
            f(e3, (t4, i3) => {
              c(t4), delete e3[i3];
            }), t3.stackTotalGroup?.destroy();
          }
        }
        function b() {
          this.stacking || (this.stacking = new A(this));
        }
        function v(t3, e3, i3, s2) {
          return !d(t3) || t3.x !== e3 || s2 && t3.stackKey !== s2 ? t3 = { x: e3, index: 0, key: s2, stackKey: s2 } : t3.index++, t3.key = [i3, e3, t3.index].join(","), t3;
        }
        function S() {
          let t3;
          let e3 = this, i3 = e3.yAxis, s2 = e3.stackKey || "", o2 = i3.stacking.stacks, r2 = e3.processedXData, a2 = e3.options.stacking, n2 = e3[a2 + "Stacker"];
          n2 && [s2, "-" + s2].forEach((i4) => {
            let s3 = r2.length, a3, l2, h2;
            for (; s3--; )
              a3 = r2[s3], t3 = e3.getStackIndicator(t3, a3, e3.index, i4), l2 = o2[i4]?.[a3], (h2 = l2?.points[t3.key || ""]) && n2.call(e3, h2, l2, s3);
          });
        }
        function M(t3, e3, i3) {
          let s2 = e3.total ? 100 / e3.total : 0;
          t3[0] = h(t3[0] * s2), t3[1] = h(t3[1] * s2), this.stackedYData[i3] = t3[1];
        }
        function k(t3) {
          (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && !this.options.stacking && this.chart.series.length > 1 ? n.setStackedPoints.call(this, t3, "group") : t3.stacking.resetStacks());
        }
        function C(t3, e3) {
          let i3, o2, r2, a2, n2, l2, c2, p2, g2;
          let f2 = e3 || this.options.stacking;
          if (!f2 || !this.reserveSpace() || ({ group: "xAxis" }[f2] || "yAxis") !== t3.coll)
            return;
          let x2 = this.processedXData, y2 = this.processedYData, b2 = [], v2 = y2.length, S2 = this.options, M2 = S2.threshold || 0, k2 = S2.startFromThreshold ? M2 : 0, C2 = S2.stack, A2 = e3 ? `${this.type},${f2}` : this.stackKey || "", w = "-" + A2, T = this.negStacks, P = t3.stacking, L = P.stacks, O = P.oldStacks;
          for (P.stacksTouched += 1, c2 = 0; c2 < v2; c2++) {
            p2 = x2[c2], g2 = y2[c2], l2 = (i3 = this.getStackIndicator(i3, p2, this.index)).key || "", L[n2 = (o2 = T && g2 < (k2 ? 0 : M2)) ? w : A2] || (L[n2] = {}), L[n2][p2] || (O[n2]?.[p2] ? (L[n2][p2] = O[n2][p2], L[n2][p2].total = null) : L[n2][p2] = new s(t3, t3.options.stackLabels, !!o2, p2, C2)), r2 = L[n2][p2], null !== g2 ? (r2.points[l2] = r2.points[this.index] = [m(r2.cumulative, k2)], d(r2.cumulative) || (r2.base = l2), r2.touched = P.stacksTouched, i3.index > 0 && false === this.singleStacks && (r2.points[l2][0] = r2.points[this.index + "," + p2 + ",0"][0])) : (delete r2.points[l2], delete r2.points[this.index]);
            let e4 = r2.total || 0;
            "percent" === f2 ? (a2 = o2 ? A2 : w, e4 = T && L[a2]?.[p2] ? (a2 = L[a2][p2]).total = Math.max(a2.total || 0, e4) + Math.abs(g2) || 0 : h(e4 + (Math.abs(g2) || 0))) : "group" === f2 ? (u(g2) && (g2 = g2[0]), null !== g2 && e4++) : e4 = h(e4 + (g2 || 0)), "group" === f2 ? r2.cumulative = (e4 || 1) - 1 : r2.cumulative = h(m(r2.cumulative, k2) + (g2 || 0)), r2.total = e4, null !== g2 && (r2.points[l2].push(r2.cumulative), b2[c2] = r2.cumulative, r2.hasValidPoints = true);
          }
          "percent" === f2 && (P.usePercentage = true), "group" !== f2 && (this.stackedYData = b2), P.oldStacks = {};
        }
        class A {
          constructor(t3) {
            this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t3;
          }
          buildStacks() {
            let t3, e3;
            let i3 = this.axis, s2 = i3.series, o2 = "xAxis" === i3.coll, r2 = i3.options.reversedStacks, a2 = s2.length;
            for (this.resetStacks(), this.usePercentage = false, e3 = a2; e3--; )
              t3 = s2[r2 ? e3 : a2 - e3 - 1], o2 && t3.setGroupedPoints(i3), t3.setStackedPoints(i3);
            if (!o2)
              for (e3 = 0; e3 < a2; e3++)
                s2[e3].modifyStacks();
            p(i3, "afterBuildStacks");
          }
          cleanStacks() {
            this.oldStacks && (this.stacks = this.oldStacks, f(this.stacks, (t3) => {
              f(t3, (t4) => {
                t4.cumulative = t4.total;
              });
            }));
          }
          resetStacks() {
            f(this.stacks, (t3) => {
              f(t3, (e3, i3) => {
                g(e3.touched) && e3.touched < this.stacksTouched ? (e3.destroy(), delete t3[i3]) : (e3.total = null, e3.cumulative = null);
              });
            });
          }
          renderStackTotals() {
            let t3 = this.axis, e3 = t3.chart, i3 = e3.renderer, s2 = this.stacks, o2 = a(e3, t3.options.stackLabels?.animation || false), r2 = this.stackTotalGroup = this.stackTotalGroup || i3.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
            r2.translate(e3.plotLeft, e3.plotTop), f(s2, (t4) => {
              f(t4, (t5) => {
                t5.render(r2);
              });
            }), r2.animate({ opacity: 1 }, o2);
          }
        }
        return (r || (r = {})).compose = function(t3, e3, i3) {
          let s2 = e3.prototype, o2 = i3.prototype;
          s2.getStacks || (l(t3, "init", b), l(t3, "destroy", y), s2.getStacks = x, o2.getStackIndicator = v, o2.modifyStacks = S, o2.percentStacker = M, o2.setGroupedPoints = k, o2.setStackedPoints = C);
        }, r;
      }), i(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { defined: s, merge: o, isObject: r } = i2;
        class a extends t2 {
          drawGraph() {
            let t3 = this.options, e3 = (this.gappedPath || this.getGraphPath).call(this), i3 = this.chart.styledMode;
            [this, ...this.zones].forEach((s2, a2) => {
              let n, l = s2.graph, h = l ? "animate" : "attr", d = s2.dashStyle || t3.dashStyle;
              l ? (l.endX = this.preventGraphAnimation ? null : e3.xMap, l.animate({ d: e3 })) : e3.length && (s2.graph = l = this.chart.renderer.path(e3).addClass("highcharts-graph" + (a2 ? ` highcharts-zone-graph-${a2 - 1} ` : " ") + (a2 && s2.className || "")).attr({ zIndex: 1 }).add(this.group)), l && !i3 && (n = { stroke: !a2 && t3.lineColor || s2.color || this.color || "#cccccc", "stroke-width": t3.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, d ? n.dashstyle = d : "square" !== t3.linecap && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), l[h](n).shadow(a2 < 2 && t3.shadow && o({ filterUnits: "userSpaceOnUse" }, r(t3.shadow) ? t3.shadow : {}))), l && (l.startX = e3.xMap, l.isArea = e3.isArea);
            });
          }
          getGraphPath(t3, e3, i3) {
            let o2 = this, r2 = o2.options, a2 = [], n = [], l, h = r2.step, d = (t3 = t3 || o2.points).reversed;
            return d && t3.reverse(), (h = { right: 1, center: 2 }[h] || h && 3) && d && (h = 4 - h), (t3 = this.getValidPoints(t3, false, !(r2.connectNulls && !e3 && !i3))).forEach(function(d2, c) {
              let p;
              let u = d2.plotX, g = d2.plotY, f = t3[c - 1], m = d2.isNull || "number" != typeof g;
              (d2.leftCliff || f && f.rightCliff) && !i3 && (l = true), m && !s(e3) && c > 0 ? l = !r2.connectNulls : m && !e3 ? l = true : (0 === c || l ? p = [["M", d2.plotX, d2.plotY]] : o2.getPointSpline ? p = [o2.getPointSpline(t3, d2, c)] : h ? (p = 1 === h ? [["L", f.plotX, g]] : 2 === h ? [["L", (f.plotX + u) / 2, f.plotY], ["L", (f.plotX + u) / 2, g]] : [["L", u, f.plotY]]).push(["L", u, g]) : p = [["L", u, g]], n.push(d2.x), h && (n.push(d2.x), 2 === h && n.push(d2.x)), a2.push.apply(a2, p), l = false);
            }), a2.xMap = n, o2.graphPath = a2, a2;
          }
        }
        return a.defaultOptions = o(t2.defaultOptions, { legendSymbol: "lineMarker" }), e2.registerSeriesType("line", a), a;
      }), i(e, "Series/Area/AreaSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { seriesTypes: { line: i2 } } = t2, { extend: s, merge: o, objectEach: r, pick: a } = e2;
        class n extends i2 {
          drawGraph() {
            this.areaPath = [], super.drawGraph.apply(this);
            let { areaPath: t3, options: e3 } = this;
            [this, ...this.zones].forEach((i3, s2) => {
              let o2 = {}, r2 = i3.fillColor || e3.fillColor, a2 = i3.area, n2 = a2 ? "animate" : "attr";
              a2 ? (a2.endX = this.preventGraphAnimation ? null : t3.xMap, a2.animate({ d: t3 })) : (o2.zIndex = 0, (a2 = i3.area = this.chart.renderer.path(t3).addClass("highcharts-area" + (s2 ? ` highcharts-zone-area-${s2 - 1} ` : " ") + (s2 && i3.className || "")).add(this.group)).isArea = true), this.chart.styledMode || (o2.fill = r2 || i3.color || this.color, o2["fill-opacity"] = r2 ? 1 : e3.fillOpacity ?? 0.75, a2.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), a2[n2](o2), a2.startX = t3.xMap, a2.shiftUnit = e3.step ? 2 : 1;
            });
          }
          getGraphPath(t3) {
            let e3, s2, o2;
            let r2 = i2.prototype.getGraphPath, n2 = this.options, l = n2.stacking, h = this.yAxis, d = [], c = [], p = this.index, u = h.stacking.stacks[this.stackKey], g = n2.threshold, f = Math.round(h.getThreshold(n2.threshold)), m = a(n2.connectNulls, "percent" === l), x = function(i3, s3, o3) {
              let r3 = t3[i3], a2 = l && u[r3.x].points[p], n3 = r3[o3 + "Null"] || 0, m2 = r3[o3 + "Cliff"] || 0, x2, y2, b2 = true;
              m2 || n3 ? (x2 = (n3 ? a2[0] : a2[1]) + m2, y2 = a2[0] + m2, b2 = !!n3) : !l && t3[s3] && t3[s3].isNull && (x2 = y2 = g), void 0 !== x2 && (c.push({ plotX: e3, plotY: null === x2 ? f : h.getThreshold(x2), isNull: b2, isCliff: true }), d.push({ plotX: e3, plotY: null === y2 ? f : h.getThreshold(y2), doCurve: false }));
            };
            t3 = t3 || this.points, l && (t3 = this.getStackPoints(t3));
            for (let i3 = 0, r3 = t3.length; i3 < r3; ++i3)
              l || (t3[i3].leftCliff = t3[i3].rightCliff = t3[i3].leftNull = t3[i3].rightNull = void 0), s2 = t3[i3].isNull, e3 = a(t3[i3].rectPlotX, t3[i3].plotX), o2 = l ? a(t3[i3].yBottom, f) : f, s2 && !m || (m || x(i3, i3 - 1, "left"), s2 && !l && m || (c.push(t3[i3]), d.push({ x: i3, plotX: e3, plotY: o2 })), m || x(i3, i3 + 1, "right"));
            let y = r2.call(this, c, true, true);
            d.reversed = true;
            let b = r2.call(this, d, true, true), v = b[0];
            v && "M" === v[0] && (b[0] = ["L", v[1], v[2]]);
            let S = y.concat(b);
            S.length && S.push(["Z"]);
            let M = r2.call(this, c, false, m);
            return S.xMap = y.xMap, this.areaPath = S, M;
          }
          getStackPoints(t3) {
            let e3 = this, i3 = [], s2 = [], o2 = this.xAxis, n2 = this.yAxis, l = n2.stacking.stacks[this.stackKey], h = {}, d = n2.series, c = d.length, p = n2.options.reversedStacks ? 1 : -1, u = d.indexOf(e3);
            if (t3 = t3 || this.points, this.options.stacking) {
              for (let e4 = 0; e4 < t3.length; e4++)
                t3[e4].leftNull = t3[e4].rightNull = void 0, h[t3[e4].x] = t3[e4];
              r(l, function(t4, e4) {
                null !== t4.total && s2.push(e4);
              }), s2.sort(function(t4, e4) {
                return t4 - e4;
              });
              let g = d.map((t4) => t4.visible);
              s2.forEach(function(t4, r2) {
                let f = 0, m, x;
                if (h[t4] && !h[t4].isNull)
                  i3.push(h[t4]), [-1, 1].forEach(function(i4) {
                    let o3 = 1 === i4 ? "rightNull" : "leftNull", a2 = l[s2[r2 + i4]], n3 = 0;
                    if (a2) {
                      let i5 = u;
                      for (; i5 >= 0 && i5 < c; ) {
                        let s3 = d[i5].index;
                        !(m = a2.points[s3]) && (s3 === e3.index ? h[t4][o3] = true : g[i5] && (x = l[t4].points[s3]) && (n3 -= x[1] - x[0])), i5 += p;
                      }
                    }
                    h[t4][1 === i4 ? "rightCliff" : "leftCliff"] = n3;
                  });
                else {
                  let e4 = u;
                  for (; e4 >= 0 && e4 < c; ) {
                    let i4 = d[e4].index;
                    if (m = l[t4].points[i4]) {
                      f = m[1];
                      break;
                    }
                    e4 += p;
                  }
                  f = a(f, 0), f = n2.translate(f, 0, 1, 0, 1), i3.push({ isNull: true, plotX: o2.translate(t4, 0, 0, 0, 1), x: t4, plotY: f, yBottom: f });
                }
              });
            }
            return i3;
          }
        }
        return n.defaultOptions = o(i2.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" }), s(n.prototype, { singleStacks: false }), t2.registerSeriesType("area", n), n;
      }), i(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { line: i2 } = t2.seriesTypes, { merge: s, pick: o } = e2;
        class r extends i2 {
          getPointSpline(t3, e3, i3) {
            let s2, r2, a, n;
            let l = e3.plotX || 0, h = e3.plotY || 0, d = t3[i3 - 1], c = t3[i3 + 1];
            function p(t4) {
              return t4 && !t4.isNull && false !== t4.doCurve && !e3.isCliff;
            }
            if (p(d) && p(c)) {
              let t4 = d.plotX || 0, i4 = d.plotY || 0, o2 = c.plotX || 0, p2 = c.plotY || 0, u2 = 0;
              s2 = (1.5 * l + t4) / 2.5, r2 = (1.5 * h + i4) / 2.5, a = (1.5 * l + o2) / 2.5, n = (1.5 * h + p2) / 2.5, a !== s2 && (u2 = (n - r2) * (a - l) / (a - s2) + h - n), r2 += u2, n += u2, r2 > i4 && r2 > h ? (r2 = Math.max(i4, h), n = 2 * h - r2) : r2 < i4 && r2 < h && (r2 = Math.min(i4, h), n = 2 * h - r2), n > p2 && n > h ? (n = Math.max(p2, h), r2 = 2 * h - n) : n < p2 && n < h && (n = Math.min(p2, h), r2 = 2 * h - n), e3.rightContX = a, e3.rightContY = n, e3.controlPoints = { low: [s2, r2], high: [a, n] };
            }
            let u = ["C", o(d.rightContX, d.plotX, 0), o(d.rightContY, d.plotY, 0), o(s2, l, 0), o(r2, h, 0), l, h];
            return d.rightContX = d.rightContY = void 0, u;
          }
        }
        return r.defaultOptions = s(i2.defaultOptions), t2.registerSeriesType("spline", r), r;
      }), i(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { area: s, area: { prototype: o } } = e2.seriesTypes, { extend: r, merge: a } = i2;
        class n extends t2 {
        }
        return n.defaultOptions = a(t2.defaultOptions, s.defaultOptions), r(n.prototype, { getGraphPath: o.getGraphPath, getStackPoints: o.getStackPoints, drawGraph: o.drawGraph }), e2.registerSeriesType("areaspline", n), n;
      }), i(e, "Series/Column/ColumnSeriesDefaults.js", [], function() {
        return { borderRadius: 3, centerInCategory: false, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: false, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: true, stickyTracking: false, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
      }), i(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a) {
        let { animObject: n } = t2, { parse: l } = e2, { noop: h } = s, { clamp: d, defined: c, extend: p, fireEvent: u, isArray: g, isNumber: f, merge: m, pick: x, objectEach: y } = a;
        class b extends o {
          animate(t3) {
            let e3, i3;
            let s2 = this, o2 = this.yAxis, r2 = o2.pos, a2 = s2.options, l2 = this.chart.inverted, h2 = {}, c2 = l2 ? "translateX" : "translateY";
            t3 ? (h2.scaleY = 1e-3, i3 = d(o2.toPixels(a2.threshold), r2, r2 + o2.len), l2 ? h2.translateX = i3 - o2.len : h2.translateY = i3, s2.clipBox && s2.setClip(), s2.group.attr(h2)) : (e3 = Number(s2.group.attr(c2)), s2.group.animate({ scaleY: 1 }, p(n(s2.options.animation), { step: function(t4, i4) {
              s2.group && (h2[c2] = e3 + i4.pos * (r2 - e3), s2.group.attr(h2));
            } })));
          }
          init(t3, e3) {
            super.init.apply(this, arguments);
            let i3 = this;
            (t3 = i3.chart).hasRendered && t3.series.forEach(function(t4) {
              t4.type === i3.type && (t4.isDirty = true);
            });
          }
          getColumnMetrics() {
            let t3 = this, e3 = t3.options, i3 = t3.xAxis, s2 = t3.yAxis, o2 = i3.options.reversedStacks, r2 = i3.reversed && !o2 || !i3.reversed && o2, a2 = {}, n2, l2 = 0;
            false === e3.grouping ? l2 = 1 : t3.chart.series.forEach(function(e4) {
              let i4;
              let o3 = e4.yAxis, r3 = e4.options;
              e4.type === t3.type && e4.reserveSpace() && s2.len === o3.len && s2.pos === o3.pos && (r3.stacking && "group" !== r3.stacking ? (void 0 === a2[n2 = e4.stackKey] && (a2[n2] = l2++), i4 = a2[n2]) : false !== r3.grouping && (i4 = l2++), e4.columnIndex = i4);
            });
            let h2 = Math.min(Math.abs(i3.transA) * (!i3.brokenAxis?.hasBreaks && i3.ordinal?.slope || e3.pointRange || i3.closestPointRange || i3.tickInterval || 1), i3.len), d2 = h2 * e3.groupPadding, c2 = (h2 - 2 * d2) / (l2 || 1), p2 = Math.min(e3.maxPointWidth || i3.len, x(e3.pointWidth, c2 * (1 - 2 * e3.pointPadding))), u2 = (t3.columnIndex || 0) + (r2 ? 1 : 0);
            return t3.columnMetrics = { width: p2, offset: (c2 - p2) / 2 + (d2 + u2 * c2 - h2 / 2) * (r2 ? -1 : 1), paddedWidth: c2, columnCount: l2 }, t3.columnMetrics;
          }
          crispCol(t3, e3, i3, s2) {
            let o2 = this.borderWidth, r2 = -(o2 % 2 ? 0.5 : 0), a2 = o2 % 2 ? 0.5 : 1;
            this.options.crisp && (i3 = Math.round(t3 + i3) + r2 - (t3 = Math.round(t3) + r2));
            let n2 = Math.round(e3 + s2) + a2, l2 = 0.5 >= Math.abs(e3) && n2 > 0.5;
            return s2 = n2 - (e3 = Math.round(e3) + a2), l2 && s2 && (e3 -= 1, s2 += 1), { x: t3, y: e3, width: i3, height: s2 };
          }
          adjustForMissingColumns(t3, e3, i3, s2) {
            if (!i3.isNull && s2.columnCount > 1) {
              let o2 = this.xAxis.series.filter((t4) => t4.visible).map((t4) => t4.index), r2 = 0, a2 = 0;
              y(this.xAxis.stacking?.stacks, (t4) => {
                if ("number" == typeof i3.x) {
                  let e4 = t4[i3.x.toString()];
                  if (e4 && g(e4.points[this.index])) {
                    let t5 = Object.keys(e4.points).filter((t6) => !t6.match(",") && e4.points[t6] && e4.points[t6].length > 1).map(parseFloat).filter((t6) => -1 !== o2.indexOf(t6)).sort((t6, e5) => e5 - t6);
                    r2 = t5.indexOf(this.index), a2 = t5.length;
                  }
                }
              }), r2 = this.xAxis.reversed ? a2 - 1 - r2 : r2;
              let n2 = (a2 - 1) * s2.paddedWidth + e3;
              t3 = (i3.plotX || 0) + n2 / 2 - e3 - r2 * s2.paddedWidth;
            }
            return t3;
          }
          translate() {
            let t3 = this, e3 = t3.chart, i3 = t3.options, s2 = t3.dense = t3.closestPointRange * t3.xAxis.transA < 2, r2 = t3.borderWidth = x(i3.borderWidth, s2 ? 0 : 1), a2 = t3.xAxis, n2 = t3.yAxis, l2 = i3.threshold, h2 = x(i3.minPointLength, 5), p2 = t3.getColumnMetrics(), g2 = p2.width, m2 = t3.pointXOffset = p2.offset, y2 = t3.dataMin, b2 = t3.dataMax, v = t3.barW = Math.max(g2, 1 + 2 * r2), S = t3.translatedThreshold = n2.getThreshold(l2);
            e3.inverted && (S -= 0.5), i3.pointPadding && (v = Math.ceil(v)), o.prototype.translate.apply(t3), t3.points.forEach(function(s3) {
              let o2 = x(s3.yBottom, S), r3 = 999 + Math.abs(o2), u2 = s3.plotX || 0, M = d(s3.plotY, -r3, n2.len + r3), k, C = Math.min(M, o2), A = Math.max(M, o2) - C, w = g2, T = u2 + m2, P = v;
              h2 && Math.abs(A) < h2 && (A = h2, k = !n2.reversed && !s3.negative || n2.reversed && s3.negative, f(l2) && f(b2) && s3.y === l2 && b2 <= l2 && (n2.min || 0) < l2 && (y2 !== b2 || (n2.max || 0) <= l2) && (k = !k, s3.negative = !s3.negative), C = Math.abs(C - S) > h2 ? o2 - h2 : S - (k ? h2 : 0)), c(s3.options.pointWidth) && (T -= Math.round(((w = P = Math.ceil(s3.options.pointWidth)) - g2) / 2)), i3.centerInCategory && !i3.stacking && (T = t3.adjustForMissingColumns(T, w, s3, p2)), s3.barX = T, s3.pointWidth = w, s3.tooltipPos = e3.inverted ? [d(n2.len + n2.pos - e3.plotLeft - M, n2.pos - e3.plotLeft, n2.len + n2.pos - e3.plotLeft), a2.len + a2.pos - e3.plotTop - T - P / 2, A] : [a2.left - e3.plotLeft + T + P / 2, d(M + n2.pos - e3.plotTop, n2.pos - e3.plotTop, n2.len + n2.pos - e3.plotTop), A], s3.shapeType = t3.pointClass.prototype.shapeType || "roundedRect", s3.shapeArgs = t3.crispCol(T, s3.isNull ? S : C, P, s3.isNull ? 0 : A);
            }), u(this, "afterColumnTranslate");
          }
          drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          }
          pointAttribs(t3, e3) {
            let i3 = this.options, s2 = this.pointAttrToOptions || {}, o2 = s2.stroke || "borderColor", r2 = s2["stroke-width"] || "borderWidth", a2, n2, h2, d2 = t3 && t3.color || this.color, c2 = t3 && t3[o2] || i3[o2] || d2, p2 = t3 && t3.options.dashStyle || i3.dashStyle, u2 = t3 && t3[r2] || i3[r2] || this[r2] || 0, g2 = x(t3 && t3.opacity, i3.opacity, 1);
            t3 && this.zones.length && (n2 = t3.getZone(), d2 = t3.options.color || n2 && (n2.color || t3.nonZonedColor) || this.color, n2 && (c2 = n2.borderColor || c2, p2 = n2.dashStyle || p2, u2 = n2.borderWidth || u2)), e3 && t3 && (h2 = (a2 = m(i3.states[e3], t3.options.states && t3.options.states[e3] || {})).brightness, d2 = a2.color || void 0 !== h2 && l(d2).brighten(a2.brightness).get() || d2, c2 = a2[o2] || c2, u2 = a2[r2] || u2, p2 = a2.dashStyle || p2, g2 = x(a2.opacity, g2));
            let f2 = { fill: d2, stroke: c2, "stroke-width": u2, opacity: g2 };
            return p2 && (f2.dashstyle = p2), f2;
          }
          drawPoints(t3 = this.points) {
            let e3;
            let i3 = this, s2 = this.chart, o2 = i3.options, r2 = s2.renderer, a2 = o2.animationLimit || 250;
            t3.forEach(function(t4) {
              let n2 = t4.plotY, l2 = t4.graphic, h2 = !!l2, d2 = l2 && s2.pointCount < a2 ? "animate" : "attr";
              f(n2) && null !== t4.y ? (e3 = t4.shapeArgs, l2 && t4.hasNewShapeType() && (l2 = l2.destroy()), i3.enabledDataSorting && (t4.startXPos = i3.xAxis.reversed ? -(e3 && e3.width || 0) : i3.xAxis.width), !l2 && (t4.graphic = l2 = r2[t4.shapeType](e3).add(t4.group || i3.group), l2 && i3.enabledDataSorting && s2.hasRendered && s2.pointCount < a2 && (l2.attr({ x: t4.startXPos }), h2 = true, d2 = "animate")), l2 && h2 && l2[d2](m(e3)), s2.styledMode || l2[d2](i3.pointAttribs(t4, t4.selected && "select")).shadow(false !== t4.allowShadow && o2.shadow), l2 && (l2.addClass(t4.getClassName(), true), l2.attr({ visibility: t4.visible ? "inherit" : "hidden" }))) : l2 && (t4.graphic = l2.destroy());
            });
          }
          drawTracker(t3 = this.points) {
            let e3;
            let i3 = this, s2 = i3.chart, o2 = s2.pointer, r2 = function(t4) {
              let e4 = o2?.getPointFromEvent(t4);
              o2 && e4 && i3.options.enableMouseTracking && (o2.isDirectTouch = true, e4.onMouseOver(t4));
            };
            t3.forEach(function(t4) {
              e3 = g(t4.dataLabels) ? t4.dataLabels : t4.dataLabel ? [t4.dataLabel] : [], t4.graphic && (t4.graphic.element.point = t4), e3.forEach(function(e4) {
                (e4.div || e4.element).point = t4;
              });
            }), i3._hasTracking || (i3.trackerGroups.forEach(function(t4) {
              i3[t4] && (i3[t4].addClass("highcharts-tracker").on("mouseover", r2).on("mouseout", function(t5) {
                o2?.onTrackerMouseOut(t5);
              }).on("touchstart", r2), !s2.styledMode && i3.options.cursor && i3[t4].css({ cursor: i3.options.cursor }));
            }), i3._hasTracking = true), u(this, "afterDrawTracker");
          }
          remove() {
            let t3 = this, e3 = t3.chart;
            e3.hasRendered && e3.series.forEach(function(e4) {
              e4.type === t3.type && (e4.isDirty = true);
            }), o.prototype.remove.apply(t3, arguments);
          }
        }
        return b.defaultOptions = m(o.defaultOptions, i2), p(b.prototype, { directTouch: true, getSymbol: h, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] }), r.registerSeriesType("column", b), b;
      }), i(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let { getDeferredAnimation: o } = t2, { format: r } = e2, { defined: a, extend: n, fireEvent: l, isArray: h, isString: d, merge: c, objectEach: p, pick: u, pInt: g, splat: f } = i2;
        return function(t3) {
          function e3() {
            return v(this).some((t4) => t4?.enabled);
          }
          function i3(t4, e4, i4, s3, o2) {
            let r2 = this.chart, l2 = this.isCartesian && r2.inverted, h2 = this.enabledDataSorting, d2 = t4.plotX, p2 = t4.plotY, g2 = i4.rotation || 0, f2 = a(d2) && a(p2) && r2.isInsidePlot(d2, Math.round(p2), { inverted: l2, paneCoordinates: true, series: this }), m2 = 0 === g2 && "justify" === u(i4.overflow, h2 ? "none" : "justify"), x2 = this.visible && false !== t4.visible && a(d2) && (t4.series.forceDL || h2 && !m2 || f2 || u(i4.inside, !!this.options.stacking) && s3 && r2.isInsidePlot(d2, l2 ? s3.x + 1 : s3.y + s3.height - 1, { inverted: l2, paneCoordinates: true, series: this })), y2 = t4.pos();
            if (x2 && y2) {
              var b2;
              let a2 = e4.getBBox(), l3 = e4.getBBox(void 0, 0), d3 = { right: 1, center: 0.5 }[i4.align || 0] || 0, p3 = { bottom: 1, middle: 0.5 }[i4.verticalAlign || 0] || 0;
              if (s3 = n({ x: y2[0], y: Math.round(y2[1]), width: 0, height: 0 }, s3 || {}), n(i4, { width: a2.width, height: a2.height }), b2 = s3, h2 && this.xAxis && !m2 && this.setDataLabelStartPos(t4, e4, o2, f2, b2), e4.align(c(i4, { width: l3.width, height: l3.height }), false, s3, false), e4.alignAttr.x += d3 * (l3.width - a2.width), e4.alignAttr.y += p3 * (l3.height - a2.height), e4[e4.placed ? "animate" : "attr"]({ x: e4.alignAttr.x + (a2.width - l3.width) / 2, y: e4.alignAttr.y + (a2.height - l3.height) / 2, rotationOriginX: (e4.width || 0) / 2, rotationOriginY: (e4.height || 0) / 2 }), m2 && s3.height >= 0)
                this.justifyDataLabel(e4, i4, e4.alignAttr, a2, s3, o2);
              else if (u(i4.crop, true)) {
                let { x: t5, y: i5 } = e4.alignAttr;
                x2 = r2.isInsidePlot(t5, i5, { paneCoordinates: true, series: this }) && r2.isInsidePlot(t5 + a2.width - 1, i5 + a2.height - 1, { paneCoordinates: true, series: this });
              }
              i4.shape && !g2 && e4[o2 ? "attr" : "animate"]({ anchorX: y2[0], anchorY: y2[1] });
            }
            o2 && h2 && (e4.placed = false), x2 || h2 && !m2 ? (e4.show(), e4.placed = true) : (e4.hide(), e4.placed = false);
          }
          function s2() {
            return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
          }
          function m(t4) {
            let e4 = this.hasRendered || 0, i4 = this.initDataLabelsGroup().attr({ opacity: +e4 });
            return !e4 && i4 && (this.visible && i4.show(), this.options.animation ? i4.animate({ opacity: 1 }, t4) : i4.attr({ opacity: 1 })), i4;
          }
          function x(t4) {
            let e4;
            t4 = t4 || this.points;
            let i4 = this, s3 = i4.chart, n2 = i4.options, h2 = s3.renderer, { backgroundColor: c2, plotBackgroundColor: m2 } = s3.options.chart, x2 = h2.getContrast(d(m2) && m2 || d(c2) && c2 || "#000000"), y2 = v(i4), { animation: S2, defer: M } = y2[0], k = M ? o(s3, S2, i4) : { defer: 0, duration: 0 };
            l(this, "drawDataLabels"), i4.hasDataLabels?.() && (e4 = this.initDataLabels(k), t4.forEach((t5) => {
              let o2 = t5.dataLabels || [];
              f(b(y2, t5.dlOptions || t5.options?.dataLabels)).forEach((l3, c3) => {
                let f2 = l3.enabled && (t5.visible || t5.dataLabelOnHidden) && (!t5.isNull || t5.dataLabelOnNull) && function(t6, e5) {
                  let i5 = e5.filter;
                  if (i5) {
                    let e6 = i5.operator, s4 = t6[i5.property], o3 = i5.value;
                    return ">" === e6 && s4 > o3 || "<" === e6 && s4 < o3 || ">=" === e6 && s4 >= o3 || "<=" === e6 && s4 <= o3 || "==" === e6 && s4 == o3 || "===" === e6 && s4 === o3 || "!=" === e6 && s4 != o3 || "!==" === e6 && s4 !== o3;
                  }
                  return true;
                }(t5, l3), { backgroundColor: m3, borderColor: y3, distance: b2, style: v2 = {} } = l3, S3, M2, k2, C, A = {}, w = o2[c3], T = !w, P;
                if (f2 && (M2 = u(l3[t5.formatPrefix + "Format"], l3.format), S3 = t5.getLabelConfig(), k2 = a(M2) ? r(M2, S3, s3) : (l3[t5.formatPrefix + "Formatter"] || l3.formatter).call(S3, l3), C = l3.rotation, !s3.styledMode && (v2.color = u(l3.color, v2.color, d(i4.color) ? i4.color : void 0, "#000000"), "contrast" === v2.color ? ("none" !== m3 && (P = m3), t5.contrastColor = h2.getContrast("auto" !== P && P || t5.color || i4.color), v2.color = P || !a(b2) && l3.inside || 0 > g(b2 || 0) || n2.stacking ? t5.contrastColor : x2) : delete t5.contrastColor, n2.cursor && (v2.cursor = n2.cursor)), A = { r: l3.borderRadius || 0, rotation: C, padding: l3.padding, zIndex: 1 }, s3.styledMode || (A.fill = "auto" === m3 ? t5.color : m3, A.stroke = "auto" === y3 ? t5.color : y3, A["stroke-width"] = l3.borderWidth), p(A, (t6, e5) => {
                  void 0 === t6 && delete A[e5];
                })), !w || f2 && a(k2) && !!w.div == !!l3.useHTML && (w.rotation && l3.rotation || w.rotation === l3.rotation) || (w = void 0, T = true), f2 && a(k2) && (w ? A.text = k2 : (w = h2.label(k2, 0, 0, l3.shape, void 0, void 0, l3.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + t5.colorIndex + " " + (l3.className || "") + (l3.useHTML ? " highcharts-tracker" : "")), w)) {
                  w.options = l3, w.attr(A), s3.styledMode || w.css(v2).shadow(l3.shadow);
                  let r2 = l3[t5.formatPrefix + "TextPath"] || l3.textPath;
                  r2 && !l3.useHTML && (w.setTextPath(t5.getDataLabelPath?.(w) || t5.graphic, r2), t5.dataLabelPath && !r2.enabled && (t5.dataLabelPath = t5.dataLabelPath.destroy())), w.added || w.add(e4), i4.alignDataLabel(t5, w, l3, void 0, T), w.isActive = true, o2[c3] && o2[c3] !== w && o2[c3].destroy(), o2[c3] = w;
                }
              });
              let l2 = o2.length;
              for (; l2--; )
                o2[l2] && o2[l2].isActive ? o2[l2].isActive = false : (o2[l2]?.destroy(), o2.splice(l2, 1));
              t5.dataLabel = o2[0], t5.dataLabels = o2;
            })), l(this, "afterDrawDataLabels");
          }
          function y(t4, e4, i4, s3, o2, r2) {
            let a2 = this.chart, n2 = e4.align, l2 = e4.verticalAlign, h2 = t4.box ? 0 : t4.padding || 0, { x: d2 = 0, y: c2 = 0 } = e4, p2, u2;
            return (p2 = (i4.x || 0) + h2) < 0 && ("right" === n2 && d2 >= 0 ? (e4.align = "left", e4.inside = true) : d2 -= p2, u2 = true), (p2 = (i4.x || 0) + s3.width - h2) > a2.plotWidth && ("left" === n2 && d2 <= 0 ? (e4.align = "right", e4.inside = true) : d2 += a2.plotWidth - p2, u2 = true), (p2 = i4.y + h2) < 0 && ("bottom" === l2 && c2 >= 0 ? (e4.verticalAlign = "top", e4.inside = true) : c2 -= p2, u2 = true), (p2 = (i4.y || 0) + s3.height - h2) > a2.plotHeight && ("top" === l2 && c2 <= 0 ? (e4.verticalAlign = "bottom", e4.inside = true) : c2 += a2.plotHeight - p2, u2 = true), u2 && (e4.x = d2, e4.y = c2, t4.placed = !r2, t4.align(e4, void 0, o2)), u2;
          }
          function b(t4, e4) {
            let i4 = [], s3;
            if (h(t4) && !h(e4))
              i4 = t4.map(function(t5) {
                return c(t5, e4);
              });
            else if (h(e4) && !h(t4))
              i4 = e4.map(function(e5) {
                return c(t4, e5);
              });
            else if (h(t4) || h(e4)) {
              if (h(t4) && h(e4))
                for (s3 = Math.max(t4.length, e4.length); s3--; )
                  i4[s3] = c(t4[s3], e4[s3]);
            } else
              i4 = c(t4, e4);
            return i4;
          }
          function v(t4) {
            let e4 = t4.chart.options.plotOptions;
            return f(b(b(e4?.series?.dataLabels, e4?.[t4.type]?.dataLabels), t4.options.dataLabels));
          }
          function S(t4, e4, i4, s3, o2) {
            let r2 = this.chart, a2 = r2.inverted, n2 = this.xAxis, l2 = n2.reversed, h2 = ((a2 ? e4.height : e4.width) || 0) / 2, d2 = t4.pointWidth, c2 = d2 ? d2 / 2 : 0;
            e4.startXPos = a2 ? o2.x : l2 ? -h2 - c2 : n2.width - h2 + c2, e4.startYPos = a2 ? l2 ? this.yAxis.height - h2 + c2 : -h2 - c2 : o2.y, s3 ? "hidden" === e4.visibility && (e4.show(), e4.attr({ opacity: 0 }).animate({ opacity: 1 })) : e4.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e4.hide), r2.hasRendered && (i4 && e4.attr({ x: e4.startXPos, y: e4.startYPos }), e4.placed = true);
          }
          t3.compose = function(t4) {
            let o2 = t4.prototype;
            o2.initDataLabels || (o2.initDataLabels = m, o2.initDataLabelsGroup = s2, o2.alignDataLabel = i3, o2.drawDataLabels = x, o2.justifyDataLabel = y, o2.setDataLabelStartPos = S, o2.hasDataLabels = e3);
          };
        }(s || (s = {})), s;
      }), i(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { composed: r } = e2, { series: a } = i2, { merge: n, pick: l, pushUnique: h } = s;
        return function(e3) {
          function i3(t3, e4, i4, s2, o2) {
            let r2 = this.chart.inverted, h2 = t3.series, d = (h2.xAxis ? h2.xAxis.len : this.chart.plotSizeX) || 0, c = (h2.yAxis ? h2.yAxis.len : this.chart.plotSizeY) || 0, p = t3.dlBox || t3.shapeArgs, u = l(t3.below, t3.plotY > l(this.translatedThreshold, c)), g = l(i4.inside, !!this.options.stacking);
            if (p) {
              if (s2 = n(p), !("allow" === i4.overflow && false === i4.crop)) {
                s2.y < 0 && (s2.height += s2.y, s2.y = 0);
                let t4 = s2.y + s2.height - c;
                t4 > 0 && t4 < s2.height && (s2.height -= t4);
              }
              r2 && (s2 = { x: c - s2.y - s2.height, y: d - s2.x - s2.width, width: s2.height, height: s2.width }), g || (r2 ? (s2.x += u ? 0 : s2.width, s2.width = 0) : (s2.y += u ? s2.height : 0, s2.height = 0));
            }
            i4.align = l(i4.align, !r2 || g ? "center" : u ? "right" : "left"), i4.verticalAlign = l(i4.verticalAlign, r2 || g ? "middle" : u ? "top" : "bottom"), a.prototype.alignDataLabel.call(this, t3, e4, i4, s2, o2), i4.inside && t3.contrastColor && e4.css({ color: t3.contrastColor });
          }
          e3.compose = function(e4) {
            t2.compose(a), h(r, "ColumnDataLabel") && (e4.prototype.alignDataLabel = i3);
          };
        }(o || (o = {})), o;
      }), i(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { extend: s, merge: o } = i2;
        class r extends t2 {
        }
        return r.defaultOptions = o(t2.defaultOptions, {}), s(r.prototype, { inverted: true }), e2.registerSeriesType("bar", r), r;
      }), i(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
        return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: true }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
      }), i(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { column: s, line: o } = e2.seriesTypes, { addEvent: r, extend: a, merge: n } = i2;
        class l extends o {
          applyJitter() {
            let t3 = this, e3 = this.options.jitter, i3 = this.points.length;
            e3 && this.points.forEach(function(s2, o2) {
              ["x", "y"].forEach(function(r2, a2) {
                let n2, l2 = "plot" + r2.toUpperCase(), h, d, c;
                e3[r2] && !s2.isNull && (n2 = t3[r2 + "Axis"], c = e3[r2] * n2.transA, n2 && !n2.isLog && (h = Math.max(0, s2[l2] - c), d = Math.min(n2.len, s2[l2] + c), s2[l2] = h + (d - h) * function(t4) {
                  let e4 = 1e4 * Math.sin(t4);
                  return e4 - Math.floor(e4);
                }(o2 + a2 * i3), "x" === r2 && (s2.clientX = s2.plotX)));
              });
            });
          }
          drawGraph() {
            this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
          }
        }
        return l.defaultOptions = n(o.defaultOptions, t2), a(l.prototype, { drawTracker: s.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), r(l, "afterTranslate", function() {
          this.applyJitter();
        }), e2.registerSeriesType("scatter", l), l;
      }), i(e, "Series/CenteredUtilities.js", [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s, o;
        let { deg2rad: r } = t2, { fireEvent: a, isNumber: n, pick: l, relativeLength: h } = i2;
        return (o = s || (s = {})).getCenter = function() {
          let t3 = this.options, i3 = this.chart, s2 = 2 * (t3.slicedOffset || 0), o2 = i3.plotWidth - 2 * s2, r2 = i3.plotHeight - 2 * s2, d = t3.center, c = Math.min(o2, r2), p = t3.thickness, u, g = t3.size, f = t3.innerSize || 0, m, x;
          "string" == typeof g && (g = parseFloat(g)), "string" == typeof f && (f = parseFloat(f));
          let y = [l(d[0], "50%"), l(d[1], "50%"), l(g && g < 0 ? void 0 : t3.size, "100%"), l(f && f < 0 ? void 0 : t3.innerSize || 0, "0%")];
          for (!i3.angular || this instanceof e2 || (y[3] = 0), m = 0; m < 4; ++m)
            x = y[m], u = m < 2 || 2 === m && /%$/.test(x), y[m] = h(x, [o2, r2, c, y[2]][m]) + (u ? s2 : 0);
          return y[3] > y[2] && (y[3] = y[2]), n(p) && 2 * p < y[2] && p > 0 && (y[3] = y[2] - 2 * p), a(this, "afterGetCenter", { positions: y }), y;
        }, o.getStartAndEndRadians = function(t3, e3) {
          let i3 = n(t3) ? t3 : 0, s2 = n(e3) && e3 > i3 && e3 - i3 < 360 ? e3 : i3 + 360;
          return { start: r * (i3 + -90), end: r * (s2 + -90) };
        }, s;
      }), i(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { setAnimation: s } = t2, { addEvent: o, defined: r, extend: a, isNumber: n, pick: l, relativeLength: h } = i2;
        class d extends e2 {
          getConnectorPath(t3) {
            let e3 = t3.dataLabelPosition, i3 = t3.options || {}, s2 = i3.connectorShape, o2 = this.connectorShapes[s2] || s2;
            return e3 && o2.call(this, __spreadProps(__spreadValues({}, e3.computed), { alignment: e3.alignment }), e3.connectorPosition, i3) || [];
          }
          getTranslate() {
            return this.sliced && this.slicedTranslation || { translateX: 0, translateY: 0 };
          }
          haloPath(t3) {
            let e3 = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e3.x, e3.y, e3.r + t3, e3.r + t3, { innerR: e3.r - 1, start: e3.start, end: e3.end, borderRadius: e3.borderRadius });
          }
          constructor(t3, e3, i3) {
            super(t3, e3, i3), this.half = 0, this.name ?? (this.name = "Slice");
            let s2 = (t4) => {
              this.slice("select" === t4.type);
            };
            o(this, "select", s2), o(this, "unselect", s2);
          }
          isValid() {
            return n(this.y) && this.y >= 0;
          }
          setVisible(t3, e3 = true) {
            t3 !== this.visible && this.update({ visible: t3 ?? !this.visible }, e3, void 0, false);
          }
          slice(t3, e3, i3) {
            let o2 = this.series;
            s(i3, o2.chart), e3 = l(e3, true), this.sliced = this.options.sliced = t3 = r(t3) ? t3 : !this.sliced, o2.options.data[o2.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
          }
        }
        return a(d.prototype, { connectorShapes: { fixedOffset: function(t3, e3, i3) {
          let s2 = e3.breakAt, o2 = e3.touchingSliceAt, r2 = i3.softConnector ? ["C", t3.x + ("left" === t3.alignment ? -5 : 5), t3.y, 2 * s2.x - o2.x, 2 * s2.y - o2.y, s2.x, s2.y] : ["L", s2.x, s2.y];
          return [["M", t3.x, t3.y], r2, ["L", o2.x, o2.y]];
        }, straight: function(t3, e3) {
          let i3 = e3.touchingSliceAt;
          return [["M", t3.x, t3.y], ["L", i3.x, i3.y]];
        }, crookedLine: function(t3, e3, i3) {
          let { breakAt: s2, touchingSliceAt: o2 } = e3, { series: r2 } = this, [a2, n2, l2] = r2.center, d2 = l2 / 2, { plotLeft: c, plotWidth: p } = r2.chart, u = "left" === t3.alignment, { x: g, y: f } = t3, m = s2.x;
          if (i3.crookDistance) {
            let t4 = h(i3.crookDistance, 1);
            m = u ? a2 + d2 + (p + c - a2 - d2) * (1 - t4) : c + (a2 - d2) * t4;
          } else
            m = a2 + (n2 - f) * Math.tan((this.angle || 0) - Math.PI / 2);
          let x = [["M", g, f]];
          return (u ? m <= g && m >= s2.x : m >= g && m <= s2.x) && x.push(["L", m, f]), x.push(["L", s2.x, s2.y], ["L", o2.x, o2.y]), x;
        } } }), d;
      }), i(e, "Series/Pie/PieSeriesDefaults.js", [], function() {
        return { borderRadius: 3, center: [null, null], clip: false, colorByPoint: true, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: true, formatter: function() {
          return this.point.isNull ? void 0 : this.point.name;
        }, softConnector: true, x: 0 }, fillColor: void 0, ignoreHiddenPoint: true, inactiveOtherPoints: true, legendType: "point", marker: null, size: null, showInLegend: false, slicedOffset: 10, stickyTracking: false, tooltip: { followPointer: true }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } };
      }), i(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
        let { getStartAndEndRadians: h } = t2, { noop: d } = i2, { clamp: c, extend: p, fireEvent: u, merge: g, pick: f } = l;
        class m extends r {
          animate(t3) {
            let e3 = this, i3 = e3.points, s2 = e3.startAngleRad;
            t3 || i3.forEach(function(t4) {
              let i4 = t4.graphic, o2 = t4.shapeArgs;
              i4 && o2 && (i4.attr({ r: f(t4.startR, e3.center && e3.center[3] / 2), start: s2, end: s2 }), i4.animate({ r: o2.r, start: o2.start, end: o2.end }, e3.options.animation));
            });
          }
          drawEmpty() {
            let t3, e3;
            let i3 = this.startAngleRad, s2 = this.endAngleRad, o2 = this.options;
            0 === this.total && this.center ? (t3 = this.center[0], e3 = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t3, e3, this.center[1] / 2, 0, i3, s2).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: n.arc(t3, e3, this.center[2] / 2, 0, { start: i3, end: s2, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": o2.borderWidth, fill: o2.fillColor || "none", stroke: o2.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
          }
          drawPoints() {
            let t3 = this.chart.renderer;
            this.points.forEach(function(e3) {
              e3.graphic && e3.hasNewShapeType() && (e3.graphic = e3.graphic.destroy()), e3.graphic || (e3.graphic = t3[e3.shapeType](e3.shapeArgs).add(e3.series.group), e3.delayedRendering = true);
            });
          }
          generatePoints() {
            super.generatePoints(), this.updateTotals();
          }
          getX(t3, e3, i3, s2) {
            let o2 = this.center, r2 = this.radii ? this.radii[i3.index] || 0 : o2[2] / 2, a2 = s2.dataLabelPosition, n2 = a2?.distance || 0, l2 = Math.asin(c((t3 - o2[1]) / (r2 + n2), -1, 1));
            return o2[0] + Math.cos(l2) * (r2 + n2) * (e3 ? -1 : 1) + (n2 > 0 ? (e3 ? -1 : 1) * (s2.padding || 0) : 0);
          }
          hasData() {
            return !!this.processedXData.length;
          }
          redrawPoints() {
            let t3, e3, i3, s2;
            let o2 = this, r2 = o2.chart;
            this.drawEmpty(), o2.group && !r2.styledMode && o2.group.shadow(o2.options.shadow), o2.points.forEach(function(a2) {
              let n2 = {};
              e3 = a2.graphic, !a2.isNull && e3 ? (s2 = a2.shapeArgs, t3 = a2.getTranslate(), r2.styledMode || (i3 = o2.pointAttribs(a2, a2.selected && "select")), a2.delayedRendering ? (e3.setRadialReference(o2.center).attr(s2).attr(t3), r2.styledMode || e3.attr(i3).attr({ "stroke-linejoin": "round" }), a2.delayedRendering = false) : (e3.setRadialReference(o2.center), r2.styledMode || g(true, n2, i3), g(true, n2, s2, t3), e3.animate(n2)), e3.attr({ visibility: a2.visible ? "inherit" : "hidden" }), e3.addClass(a2.getClassName(), true)) : e3 && (a2.graphic = e3.destroy());
            });
          }
          sortByAngle(t3, e3) {
            t3.sort(function(t4, i3) {
              return void 0 !== t4.angle && (i3.angle - t4.angle) * e3;
            });
          }
          translate(t3) {
            u(this, "translate"), this.generatePoints();
            let e3 = this.options, i3 = e3.slicedOffset, s2 = h(e3.startAngle, e3.endAngle), o2 = this.startAngleRad = s2.start, r2 = (this.endAngleRad = s2.end) - o2, a2 = this.points, n2 = e3.ignoreHiddenPoint, l2 = a2.length, d2, c2, p2, g2, f2, m2, x, y = 0;
            for (t3 || (this.center = t3 = this.getCenter()), m2 = 0; m2 < l2; m2++) {
              x = a2[m2], d2 = o2 + y * r2, x.isValid() && (!n2 || x.visible) && (y += x.percentage / 100), c2 = o2 + y * r2;
              let e4 = { x: t3[0], y: t3[1], r: t3[2] / 2, innerR: t3[3] / 2, start: Math.round(1e3 * d2) / 1e3, end: Math.round(1e3 * c2) / 1e3 };
              x.shapeType = "arc", x.shapeArgs = e4, (p2 = (c2 + d2) / 2) > 1.5 * Math.PI ? p2 -= 2 * Math.PI : p2 < -Math.PI / 2 && (p2 += 2 * Math.PI), x.slicedTranslation = { translateX: Math.round(Math.cos(p2) * i3), translateY: Math.round(Math.sin(p2) * i3) }, g2 = Math.cos(p2) * t3[2] / 2, f2 = Math.sin(p2) * t3[2] / 2, x.tooltipPos = [t3[0] + 0.7 * g2, t3[1] + 0.7 * f2], x.half = p2 < -Math.PI / 2 || p2 > Math.PI / 2 ? 1 : 0, x.angle = p2;
            }
            u(this, "afterTranslate");
          }
          updateTotals() {
            let t3 = this.points, e3 = t3.length, i3 = this.options.ignoreHiddenPoint, s2, o2, r2 = 0;
            for (s2 = 0; s2 < e3; s2++)
              (o2 = t3[s2]).isValid() && (!i3 || o2.visible) && (r2 += o2.y);
            for (s2 = 0, this.total = r2; s2 < e3; s2++)
              (o2 = t3[s2]).percentage = r2 > 0 && (o2.visible || !i3) ? o2.y / r2 * 100 : 0, o2.total = r2;
          }
        }
        return m.defaultOptions = g(r.defaultOptions, o), p(m.prototype, { axisTypes: [], directTouch: true, drawGraph: void 0, drawTracker: e2.prototype.drawTracker, getCenter: t2.getCenter, getSymbol: d, invertible: false, isCartesian: false, noSharedTooltip: true, pointAttribs: e2.prototype.pointAttribs, pointClass: s, requireSorting: false, searchPoint: d, trackerGroups: ["group", "dataLabelsGroup"] }), a.registerSeriesType("pie", m), m;
      }), i(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let { composed: a, noop: n } = e2, { distribute: l } = i2, { series: h } = s, { arrayMax: d, clamp: c, defined: p, pick: u, pushUnique: g, relativeLength: f } = o;
        return function(e3) {
          let i3 = { radialDistributionY: function(t3, e4) {
            return (e4.dataLabelPosition?.top || 0) + t3.distributeBox.pos;
          }, radialDistributionX: function(t3, e4, i4, s3, o3) {
            let r3 = o3.dataLabelPosition;
            return t3.getX(i4 < (r3?.top || 0) + 2 || i4 > (r3?.bottom || 0) - 2 ? s3 : i4, e4.half, e4, o3);
          }, justify: function(t3, e4, i4, s3) {
            return s3[0] + (t3.half ? -1 : 1) * (i4 + (e4.dataLabelPosition?.distance || 0));
          }, alignToPlotEdges: function(t3, e4, i4, s3) {
            let o3 = t3.getBBox().width;
            return e4 ? o3 + s3 : i4 - o3 - s3;
          }, alignToConnectors: function(t3, e4, i4, s3) {
            let o3 = 0, r3;
            return t3.forEach(function(t4) {
              (r3 = t4.dataLabel.getBBox().width) > o3 && (o3 = r3);
            }), e4 ? o3 + s3 : i4 - o3 - s3;
          } };
          function s2(t3, e4) {
            let { center: i4, options: s3 } = this, o3 = i4[2] / 2, r3 = t3.angle || 0, a2 = Math.cos(r3), n2 = Math.sin(r3), l2 = i4[0] + a2 * o3, h2 = i4[1] + n2 * o3, d2 = Math.min((s3.slicedOffset || 0) + (s3.borderWidth || 0), e4 / 5);
            return { natural: { x: l2 + a2 * e4, y: h2 + n2 * e4 }, computed: {}, alignment: e4 < 0 ? "center" : t3.half ? "right" : "left", connectorPosition: { breakAt: { x: l2 + a2 * d2, y: h2 + n2 * d2 }, touchingSliceAt: { x: l2, y: h2 } }, distance: e4 };
          }
          function o2() {
            let t3 = this, e4 = t3.points, i4 = t3.chart, s3 = i4.plotWidth, o3 = i4.plotHeight, r3 = i4.plotLeft, a2 = Math.round(i4.chartWidth / 3), n2 = t3.center, c2 = n2[2] / 2, g2 = n2[1], m2 = [[], []], x = [0, 0, 0, 0], y = t3.dataLabelPositioners, b, v, S, M = 0;
            t3.visible && t3.hasDataLabels?.() && (e4.forEach((t4) => {
              (t4.dataLabels || []).forEach((t5) => {
                t5.shortened && (t5.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), t5.shortened = false);
              });
            }), h.prototype.drawDataLabels.apply(t3), e4.forEach((t4) => {
              (t4.dataLabels || []).forEach((e5, i5) => {
                let s4 = n2[2] / 2, o4 = e5.options, r4 = f(o4?.distance || 0, s4);
                0 === i5 && m2[t4.half].push(t4), !p(o4?.style?.width) && e5.getBBox().width > a2 && (e5.css({ width: Math.round(0.7 * a2) + "px" }), e5.shortened = true), e5.dataLabelPosition = this.getDataLabelPosition(t4, r4), M = Math.max(M, r4);
              });
            }), m2.forEach((e5, a3) => {
              let h2 = e5.length, d2 = [], f2, m3, b2 = 0, k;
              h2 && (t3.sortByAngle(e5, a3 - 0.5), M > 0 && (f2 = Math.max(0, g2 - c2 - M), m3 = Math.min(g2 + c2 + M, i4.plotHeight), e5.forEach((t4) => {
                (t4.dataLabels || []).forEach((e6) => {
                  let s4 = e6.dataLabelPosition;
                  s4 && s4.distance > 0 && (s4.top = Math.max(0, g2 - c2 - s4.distance), s4.bottom = Math.min(g2 + c2 + s4.distance, i4.plotHeight), b2 = e6.getBBox().height || 21, t4.distributeBox = { target: (e6.dataLabelPosition?.natural.y || 0) - s4.top + b2 / 2, size: b2, rank: t4.y }, d2.push(t4.distributeBox));
                });
              }), l(d2, k = m3 + b2 - f2, k / 5)), e5.forEach((i5) => {
                (i5.dataLabels || []).forEach((l2) => {
                  let h3 = l2.options || {}, g3 = i5.distributeBox, f3 = l2.dataLabelPosition, m4 = f3?.natural.y || 0, b3 = h3.connectorPadding || 0, M2 = 0, k2 = m4, C = "inherit";
                  if (f3) {
                    if (d2 && p(g3) && f3.distance > 0 && (void 0 === g3.pos ? C = "hidden" : (S = g3.size, k2 = y.radialDistributionY(i5, l2))), h3.justify)
                      M2 = y.justify(i5, l2, c2, n2);
                    else
                      switch (h3.alignTo) {
                        case "connectors":
                          M2 = y.alignToConnectors(e5, a3, s3, r3);
                          break;
                        case "plotEdges":
                          M2 = y.alignToPlotEdges(l2, a3, s3, r3);
                          break;
                        default:
                          M2 = y.radialDistributionX(t3, i5, k2, m4, l2);
                      }
                    if (f3.attribs = { visibility: C, align: f3.alignment }, f3.posAttribs = { x: M2 + (h3.x || 0) + ({ left: b3, right: -b3 }[f3.alignment] || 0), y: k2 + (h3.y || 0) - l2.getBBox().height / 2 }, f3.computed.x = M2, f3.computed.y = k2, u(h3.crop, true)) {
                      let t4;
                      M2 - (v = l2.getBBox().width) < b3 && 1 === a3 ? (t4 = Math.round(v - M2 + b3), x[3] = Math.max(t4, x[3])) : M2 + v > s3 - b3 && 0 === a3 && (t4 = Math.round(M2 + v - s3 + b3), x[1] = Math.max(t4, x[1])), k2 - S / 2 < 0 ? x[0] = Math.max(Math.round(-k2 + S / 2), x[0]) : k2 + S / 2 > o3 && (x[2] = Math.max(Math.round(k2 + S / 2 - o3), x[2])), f3.sideOverflow = t4;
                    }
                  }
                });
              }));
            }), (0 === d(x) || this.verifyDataLabelOverflow(x)) && (this.placeDataLabels(), this.points.forEach((e5) => {
              (e5.dataLabels || []).forEach((s4) => {
                let { connectorColor: o4, connectorWidth: r4 = 1 } = s4.options || {}, a3 = s4.dataLabelPosition;
                if (r4) {
                  let n3;
                  b = s4.connector, a3 && a3.distance > 0 ? (n3 = !b, b || (s4.connector = b = i4.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e5.colorIndex + (e5.className ? " " + e5.className : "")).add(t3.dataLabelsGroup)), i4.styledMode || b.attr({ "stroke-width": r4, stroke: o4 || e5.color || "#666666" }), b[n3 ? "attr" : "animate"]({ d: e5.getConnectorPath(s4) }), b.attr({ visibility: a3.attribs?.visibility })) : b && (s4.connector = b.destroy());
                }
              });
            })));
          }
          function r2() {
            this.points.forEach((t3) => {
              (t3.dataLabels || []).forEach((t4) => {
                let e4 = t4.dataLabelPosition;
                e4 ? (e4.sideOverflow && (t4.css({ width: Math.max(t4.getBBox().width - e4.sideOverflow, 0) + "px", textOverflow: (t4.options?.style || {}).textOverflow || "ellipsis" }), t4.shortened = true), t4.attr(e4.attribs), t4[t4.moved ? "animate" : "attr"](e4.posAttribs), t4.moved = true) : t4 && t4.attr({ y: -9999 });
              }), delete t3.distributeBox;
            }, this);
          }
          function m(t3) {
            let e4 = this.center, i4 = this.options, s3 = i4.center, o3 = i4.minSize || 80, r3 = o3, a2 = null !== i4.size;
            return !a2 && (null !== s3[0] ? r3 = Math.max(e4[2] - Math.max(t3[1], t3[3]), o3) : (r3 = Math.max(e4[2] - t3[1] - t3[3], o3), e4[0] += (t3[3] - t3[1]) / 2), null !== s3[1] ? r3 = c(r3, o3, e4[2] - Math.max(t3[0], t3[2])) : (r3 = c(r3, o3, e4[2] - t3[0] - t3[2]), e4[1] += (t3[0] - t3[2]) / 2), r3 < e4[2] ? (e4[2] = r3, e4[3] = Math.min(i4.thickness ? Math.max(0, r3 - 2 * i4.thickness) : Math.max(0, f(i4.innerSize || 0, r3)), r3), this.translate(e4), this.drawDataLabels && this.drawDataLabels()) : a2 = true), a2;
          }
          e3.compose = function(e4) {
            if (t2.compose(h), g(a, "PieDataLabel")) {
              let t3 = e4.prototype;
              t3.dataLabelPositioners = i3, t3.alignDataLabel = n, t3.drawDataLabels = o2, t3.getDataLabelPosition = s2, t3.placeDataLabels = r2, t3.verifyDataLabelOverflow = m;
            }
          };
        }(r || (r = {})), r;
      }), i(e, "Extensions/OverlappingDataLabels.js", [e["Core/Utilities.js"]], function(t2) {
        let { addEvent: e2, fireEvent: i2, objectEach: s, pick: o } = t2;
        function r(t3) {
          let e3 = t3.length, s2 = (t4, e4) => !(e4.x >= t4.x + t4.width || e4.x + e4.width <= t4.x || e4.y >= t4.y + t4.height || e4.y + e4.height <= t4.y), o2, r2, n2, l, h, d = false;
          for (let i3 = 0; i3 < e3; i3++)
            (o2 = t3[i3]) && (o2.oldOpacity = o2.opacity, o2.newOpacity = 1, o2.absoluteBox = function(t4) {
              if (t4 && (!t4.alignAttr || t4.placed)) {
                let e4 = t4.box ? 0 : t4.padding || 0, i4 = t4.alignAttr || { x: t4.attr("x"), y: t4.attr("y") }, s3 = t4.getBBox();
                return t4.width = s3.width, t4.height = s3.height, { x: i4.x + (t4.parentGroup?.translateX || 0) + e4, y: i4.y + (t4.parentGroup?.translateY || 0) + e4, width: (t4.width || 0) - 2 * e4, height: (t4.height || 0) - 2 * e4 };
              }
            }(o2));
          t3.sort((t4, e4) => (e4.labelrank || 0) - (t4.labelrank || 0));
          for (let i3 = 0; i3 < e3; ++i3) {
            l = (r2 = t3[i3]) && r2.absoluteBox;
            for (let o3 = i3 + 1; o3 < e3; ++o3)
              h = (n2 = t3[o3]) && n2.absoluteBox, l && h && r2 !== n2 && 0 !== r2.newOpacity && 0 !== n2.newOpacity && "hidden" !== r2.visibility && "hidden" !== n2.visibility && s2(l, h) && ((r2.labelrank < n2.labelrank ? r2 : n2).newOpacity = 0);
          }
          for (let e4 of t3)
            a(e4, this) && (d = true);
          d && i2(this, "afterHideAllOverlappingLabels");
        }
        function a(t3, e3) {
          let s2, o2, r2 = false;
          return t3 && (o2 = t3.newOpacity, t3.oldOpacity !== o2 && (t3.hasClass("highcharts-data-label") ? (t3[o2 ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), s2 = function() {
            e3.styledMode || t3.css({ pointerEvents: o2 ? "auto" : "none" });
          }, r2 = true, t3[t3.isOld ? "animate" : "attr"]({ opacity: o2 }, void 0, s2), i2(e3, "afterHideOverlappingLabel")) : t3.attr({ opacity: o2 })), t3.isOld = true), r2;
        }
        function n() {
          let t3 = this, e3 = [];
          for (let i3 of t3.labelCollectors || [])
            e3 = e3.concat(i3());
          for (let i3 of t3.yAxis || [])
            i3.stacking && i3.options.stackLabels && !i3.options.stackLabels.allowOverlap && s(i3.stacking.stacks, (t4) => {
              s(t4, (t5) => {
                t5.label && e3.push(t5.label);
              });
            });
          for (let i3 of t3.series || [])
            if (i3.visible && i3.hasDataLabels?.()) {
              let s2 = (i4) => {
                for (let s3 of i4)
                  s3.visible && (s3.dataLabels || []).forEach((i5) => {
                    let r2 = i5.options || {};
                    i5.labelrank = o(r2.labelrank, s3.labelrank, s3.shapeArgs?.height), r2.allowOverlap ?? Number(r2.distance) > 0 ? (i5.oldOpacity = i5.opacity, i5.newOpacity = 1, a(i5, t3)) : e3.push(i5);
                  });
              };
              s2(i3.nodes || []), s2(i3.points);
            }
          this.hideOverlappingLabels(e3);
        }
        return { compose: function(t3) {
          let i3 = t3.prototype;
          i3.hideOverlappingLabels || (i3.hideOverlappingLabels = r, e2(t3, "render", n));
        } };
      }), i(e, "Extensions/BorderRadius.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { defaultOptions: s } = t2, { noop: o } = e2, { addEvent: r, extend: a, isObject: n, merge: l, relativeLength: h } = i2, d = { radius: 0, scope: "stack", where: void 0 }, c = o, p = o;
        function u(t3, e3, i3, s2, o2 = {}) {
          let r2 = c(t3, e3, i3, s2, o2), { innerR: a2 = 0, r: n2 = i3, start: l2 = 0, end: d2 = 0 } = o2;
          if (o2.open || !o2.borderRadius)
            return r2;
          let p2 = d2 - l2, u2 = Math.sin(p2 / 2), g2 = Math.max(Math.min(h(o2.borderRadius || 0, n2 - a2), (n2 - a2) / 2, n2 * u2 / (1 + u2)), 0), f2 = Math.min(g2, p2 / Math.PI * 2 * a2), m2 = r2.length - 1;
          for (; m2--; )
            !function(t4, e4, i4) {
              let s3, o3, r3;
              let a3 = t4[e4], n3 = t4[e4 + 1];
              if ("Z" === n3[0] && (n3 = t4[0]), ("M" === a3[0] || "L" === a3[0]) && "A" === n3[0] ? (s3 = a3, o3 = n3, r3 = true) : "A" === a3[0] && ("M" === n3[0] || "L" === n3[0]) && (s3 = n3, o3 = a3), s3 && o3 && o3.params) {
                let a4 = o3[1], n4 = o3[5], l3 = o3.params, { start: h2, end: d3, cx: c2, cy: p3 } = l3, u3 = n4 ? a4 - i4 : a4 + i4, g3 = u3 ? Math.asin(i4 / u3) : 0, f3 = n4 ? g3 : -g3, m3 = Math.cos(g3) * u3;
                r3 ? (l3.start = h2 + f3, s3[1] = c2 + m3 * Math.cos(h2), s3[2] = p3 + m3 * Math.sin(h2), t4.splice(e4 + 1, 0, ["A", i4, i4, 0, 0, 1, c2 + a4 * Math.cos(l3.start), p3 + a4 * Math.sin(l3.start)])) : (l3.end = d3 - f3, o3[6] = c2 + a4 * Math.cos(l3.end), o3[7] = p3 + a4 * Math.sin(l3.end), t4.splice(e4 + 1, 0, ["A", i4, i4, 0, 0, 1, c2 + m3 * Math.cos(d3), p3 + m3 * Math.sin(d3)])), o3[4] = Math.abs(l3.end - l3.start) < Math.PI ? 0 : 1;
              }
            }(r2, m2, m2 > 1 ? f2 : g2);
          return r2;
        }
        function g() {
          if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
            let { options: t3, yAxis: e3 } = this, i3 = "percent" === t3.stacking, o2 = s.plotOptions?.[this.type]?.borderRadius, r2 = f(t3.borderRadius, n(o2) ? o2 : {}), l2 = e3.options.reversed;
            for (let s2 of this.points) {
              let { shapeArgs: o3 } = s2;
              if ("roundedRect" === s2.shapeType && o3) {
                let { width: n2 = 0, height: d2 = 0, y: c2 = 0 } = o3, p2 = c2, u2 = d2;
                if ("stack" === r2.scope && s2.stackTotal) {
                  let o4 = e3.translate(i3 ? 100 : s2.stackTotal, false, true, false, true), r3 = e3.translate(t3.threshold || 0, false, true, false, true), a2 = this.crispCol(0, Math.min(o4, r3), 0, Math.abs(o4 - r3));
                  p2 = a2.y, u2 = a2.height;
                }
                let g2 = (s2.negative ? -1 : 1) * (l2 ? -1 : 1) == -1, f2 = r2.where;
                !f2 && this.is("waterfall") && Math.abs((s2.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (f2 = "all"), f2 || (f2 = "end");
                let m2 = Math.min(h(r2.radius, n2), n2 / 2, "all" === f2 ? d2 / 2 : 1 / 0) || 0;
                "end" === f2 && (g2 && (p2 -= m2), u2 += m2), a(o3, { brBoxHeight: u2, brBoxY: p2, r: m2 });
              }
            }
          }
        }
        function f(t3, e3) {
          return n(t3) || (t3 = { radius: t3 || 0 }), l(d, e3, t3);
        }
        function m() {
          let t3 = f(this.options.borderRadius);
          for (let e3 of this.points) {
            let i3 = e3.shapeArgs;
            i3 && (i3.borderRadius = h(t3.radius, (i3.r || 0) - (i3.innerR || 0)));
          }
        }
        function x(t3, e3, i3, s2, o2 = {}) {
          let r2 = p(t3, e3, i3, s2, o2), { r: a2 = 0, brBoxHeight: n2 = s2, brBoxY: l2 = e3 } = o2, h2 = e3 - l2, d2 = l2 + n2 - (e3 + s2), c2 = h2 - a2 > -0.1 ? 0 : a2, u2 = d2 - a2 > -0.1 ? 0 : a2, g2 = Math.max(c2 && h2, 0), f2 = Math.max(u2 && d2, 0), m2 = [t3 + c2, e3], x2 = [t3 + i3 - c2, e3], y = [t3 + i3, e3 + c2], b = [t3 + i3, e3 + s2 - u2], v = [t3 + i3 - u2, e3 + s2], S = [t3 + u2, e3 + s2], M = [t3, e3 + s2 - u2], k = [t3, e3 + c2], C = (t4, e4) => Math.sqrt(Math.pow(t4, 2) - Math.pow(e4, 2));
          if (g2) {
            let t4 = C(c2, c2 - g2);
            m2[0] -= t4, x2[0] += t4, y[1] = k[1] = e3 + c2 - g2;
          }
          if (s2 < c2 - g2) {
            let o3 = C(c2, c2 - g2 - s2);
            y[0] = b[0] = t3 + i3 - c2 + o3, v[0] = Math.min(y[0], v[0]), S[0] = Math.max(b[0], S[0]), M[0] = k[0] = t3 + c2 - o3, y[1] = k[1] = e3 + s2;
          }
          if (f2) {
            let t4 = C(u2, u2 - f2);
            v[0] += t4, S[0] -= t4, b[1] = M[1] = e3 + s2 - u2 + f2;
          }
          if (s2 < u2 - f2) {
            let o3 = C(u2, u2 - f2 - s2);
            y[0] = b[0] = t3 + i3 - u2 + o3, x2[0] = Math.min(y[0], x2[0]), m2[0] = Math.max(b[0], m2[0]), M[0] = k[0] = t3 + u2 - o3, b[1] = M[1] = e3;
          }
          return r2.length = 0, r2.push(["M", ...m2], ["L", ...x2], ["A", c2, c2, 0, 0, 1, ...y], ["L", ...b], ["A", u2, u2, 0, 0, 1, ...v], ["L", ...S], ["A", u2, u2, 0, 0, 1, ...M], ["L", ...k], ["A", c2, c2, 0, 0, 1, ...m2], ["Z"]), r2;
        }
        return { compose: function(t3, e3, i3) {
          let s2 = t3.types.pie;
          if (!e3.symbolCustomAttribs.includes("borderRadius")) {
            let o2 = i3.prototype.symbols;
            r(t3, "afterColumnTranslate", g, { order: 9 }), r(s2, "afterTranslate", m), e3.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), c = o2.arc, p = o2.roundedRect, o2.arc = u, o2.roundedRect = x;
          }
        }, optionsToObject: f };
      }), i(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { diffObjects: i2, extend: s, find: o, merge: r, pick: a, uniqueKey: n } = t2;
        return function(t3) {
          function e3(t4, e4) {
            let i3 = t4.condition;
            (i3.callback || function() {
              return this.chartWidth <= a(i3.maxWidth, Number.MAX_VALUE) && this.chartHeight <= a(i3.maxHeight, Number.MAX_VALUE) && this.chartWidth >= a(i3.minWidth, 0) && this.chartHeight >= a(i3.minHeight, 0);
            }).call(this) && e4.push(t4._id);
          }
          function l(t4, e4) {
            let s2 = this.options.responsive, a2 = this.currentResponsive, l2 = [], h;
            !e4 && s2 && s2.rules && s2.rules.forEach((t5) => {
              void 0 === t5._id && (t5._id = n()), this.matchResponsiveRule(t5, l2);
            }, this);
            let d = r(...l2.map((t5) => o((s2 || {}).rules || [], (e5) => e5._id === t5)).map((t5) => t5 && t5.chartOptions));
            d.isResponsiveOptions = true, l2 = l2.toString() || void 0;
            let c = a2 && a2.ruleIds;
            l2 !== c && (a2 && this.update(a2.undoOptions, t4, true), l2 ? ((h = i2(d, this.options, true, this.collectionsWithUpdate)).isResponsiveOptions = true, this.currentResponsive = { ruleIds: l2, mergedOptions: d, undoOptions: h }, this.update(d, t4, true)) : this.currentResponsive = void 0);
          }
          t3.compose = function(t4) {
            let i3 = t4.prototype;
            return i3.matchResponsiveRule || s(i3, { matchResponsiveRule: e3, setResponsive: l }), t4;
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Templating.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/Legend/Legend.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Chart/Chart.js"], e["Extensions/ScrollablePlotArea.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Column/ColumnDataLabel.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Extensions/OverlappingDataLabels.js"], e["Extensions/BorderRadius.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], function(t2, e2, i2, s, o, r, a, n, l, h, d, c, p, u, g, f, m, x, y, b, v, S, M, k, C, A, w, T, P, L, O, D, E, B, j, I) {
        return t2.AST = r, t2.Axis = p, t2.Chart = M, t2.Color = j, t2.DataLabel = O, t2.Fx = s, t2.HTMLElement = c, t2.Legend = v, t2.LegendSymbol = S, t2.OverlappingDataLabels = t2.OverlappingDataLabels || D, t2.PlotLineOrBand = f, t2.Point = y, t2.Pointer = b, t2.RendererRegistry = n, t2.Series = w, t2.SeriesRegistry = T, t2.StackItem = A, t2.SVGElement = h, t2.SVGRenderer = d, t2.Templating = a, t2.Tick = m, t2.Time = I, t2.Tooltip = x, t2.animate = o.animate, t2.animObject = o.animObject, t2.chart = M.chart, t2.color = j.parse, t2.dateFormat = a.dateFormat, t2.defaultOptions = i2.defaultOptions, t2.distribute = l.distribute, t2.format = a.format, t2.getDeferredAnimation = o.getDeferredAnimation, t2.getOptions = i2.getOptions, t2.numberFormat = a.numberFormat, t2.seriesType = T.seriesType, t2.setAnimation = o.setAnimation, t2.setOptions = i2.setOptions, t2.stop = o.stop, t2.time = i2.defaultTime, t2.timers = s.timers, E.compose(t2.Series, t2.SVGElement, t2.SVGRenderer), P.compose(t2.Series.types.column), O.compose(t2.Series), u.compose(t2.Axis), c.compose(t2.SVGRenderer), v.compose(t2.Chart), g.compose(t2.Axis), D.compose(t2.Chart), L.compose(t2.Series.types.pie), f.compose(t2.Axis), b.compose(t2.Chart), B.compose(t2.Chart), k.compose(t2.Axis, t2.Chart, t2.Series), C.compose(t2.Axis, t2.Chart, t2.Series), x.compose(t2.Pointer), e2.extend(t2, e2), t2;
      }), i(e, "Series/DataModifyComposition.js", [e["Core/Axis/Axis.js"], e["Core/Series/Point.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { tooltipFormatter: r } = e2.prototype, { addEvent: a, arrayMax: n, arrayMin: l, correctFloat: h, defined: d, isArray: c, isNumber: p, isString: u, pick: g } = s;
        return function(t3) {
          function e3(t4, e4, i4) {
            !this.isXAxis && (this.series.forEach(function(i5) {
              "compare" === t4 && "boolean" != typeof e4 ? i5.setCompare(e4, false) : "cumulative" !== t4 || u(e4) || i5.setCumulative(e4, false);
            }), g(i4, true) && this.chart.redraw());
          }
          function i3(t4) {
            let e4 = this, { numberFormatter: i4 } = e4.series.chart, s3 = function(s4) {
              t4 = t4.replace("{point." + s4 + "}", (e4[s4] > 0 && "change" === s4 ? "+" : "") + i4(e4[s4], g(e4.series.tooltipOptions.changeDecimals, 2)));
            };
            return d(e4.change) && s3("change"), d(e4.cumulativeSum) && s3("cumulativeSum"), r.apply(this, [t4]);
          }
          function s2() {
            let t4;
            let e4 = this.options.compare;
            ("percent" === e4 || "value" === e4 || this.options.cumulative) && (t4 = new v(this), "percent" === e4 || "value" === e4 ? t4.initCompare(e4) : t4.initCumulative()), this.dataModify = t4;
          }
          function o2(t4) {
            let e4 = t4.dataExtremes, i4 = e4.activeYData;
            if (this.dataModify && e4) {
              let t5;
              this.options.compare ? t5 = [this.dataModify.modifyValue(e4.dataMin), this.dataModify.modifyValue(e4.dataMax)] : this.options.cumulative && c(i4) && i4.length >= 2 && (t5 = v.getCumulativeExtremes(i4)), t5 && (e4.dataMin = l(t5), e4.dataMax = n(t5));
            }
          }
          function f(t4, e4) {
            this.options.compare = this.userOptions.compare = t4, this.update({}, g(e4, true)), this.dataModify && ("value" === t4 || "percent" === t4) ? this.dataModify.initCompare(t4) : this.points.forEach((t5) => {
              delete t5.change;
            });
          }
          function m() {
            if (this.xAxis && this.processedYData && this.dataModify) {
              let t4 = this.processedXData, e4 = this.processedYData, i4 = e4.length, s3 = true === this.options.compareStart ? 0 : 1, o3 = -1, r2;
              for (this.pointArrayMap && (o3 = this.pointArrayMap.indexOf(this.options.pointValKey || this.pointValKey || "y")), r2 = 0; r2 < i4 - s3; r2++) {
                let i5 = e4[r2] && o3 > -1 ? e4[r2][o3] : e4[r2];
                if (p(i5) && 0 !== i5 && t4[r2 + s3] >= (this.xAxis.min || 0)) {
                  this.dataModify.compareValue = i5;
                  break;
                }
              }
            }
          }
          function x(t4, e4) {
            this.setModifier("compare", t4, e4);
          }
          function y(t4, e4) {
            t4 = g(t4, false), this.options.cumulative = this.userOptions.cumulative = t4, this.update({}, g(e4, true)), this.dataModify ? this.dataModify.initCumulative() : this.points.forEach((t5) => {
              delete t5.cumulativeSum;
            });
          }
          function b(t4, e4) {
            this.setModifier("cumulative", t4, e4);
          }
          t3.compose = function(t4, r2, n2) {
            let l2 = r2.prototype, h2 = n2.prototype, d2 = t4.prototype;
            return d2.setCompare || (d2.setCompare = f, d2.setCumulative = y, a(t4, "afterInit", s2), a(t4, "afterGetExtremes", o2), a(t4, "afterProcessData", m)), l2.setCompare || (l2.setCompare = x, l2.setModifier = e3, l2.setCumulative = b, h2.tooltipFormatter = i3), t4;
          };
          class v {
            constructor(t4) {
              this.series = t4;
            }
            modifyValue() {
              return 0;
            }
            static getCumulativeExtremes(t4) {
              let e4 = 1 / 0, i4 = -1 / 0;
              return t4.reduce((t5, s3) => {
                let o3 = t5 + s3;
                return e4 = Math.min(e4, o3, t5), i4 = Math.max(i4, o3, t5), o3;
              }), [e4, i4];
            }
            initCompare(t4) {
              this.modifyValue = function(e4, i4) {
                null === e4 && (e4 = 0);
                let s3 = this.compareValue;
                if (void 0 !== e4 && void 0 !== s3) {
                  if ("value" === t4 ? e4 -= s3 : e4 = e4 / s3 * 100 - (100 === this.series.options.compareBase ? 0 : 100), void 0 !== i4) {
                    let t5 = this.series.points[i4];
                    t5 && (t5.change = e4);
                  }
                  return e4;
                }
                return 0;
              };
            }
            initCumulative() {
              this.modifyValue = function(t4, e4) {
                if (null === t4 && (t4 = 0), void 0 !== t4 && void 0 !== e4) {
                  let i4 = e4 > 0 ? this.series.points[e4 - 1] : null;
                  i4 && i4.cumulativeSum && (t4 = h(i4.cumulativeSum + t4));
                  let s3 = this.series.points[e4];
                  return s3 && (s3.cumulativeSum = t4), t4;
                }
                return 0;
              };
            }
          }
          t3.Additions = v;
        }(o || (o = {})), o;
      }), i(e, "Stock/Navigator/ChartNavigatorComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let i2;
        let { isTouchDevice: s } = t2, { addEvent: o, merge: r, pick: a } = e2, n = [];
        function l() {
          this.navigator && this.navigator.setBaseSeries(null, false);
        }
        function h() {
          let t3, e3, i3;
          let s2 = this.legend, o2 = this.navigator;
          if (o2) {
            t3 = s2 && s2.options, e3 = o2.xAxis, i3 = o2.yAxis;
            let { scrollbarHeight: r2, scrollButtonSize: n2 } = o2;
            this.inverted ? (o2.left = o2.opposite ? this.chartWidth - r2 - o2.height : this.spacing[3] + r2, o2.top = this.plotTop + n2) : (o2.left = a(e3.left, this.plotLeft + n2), o2.top = o2.navigatorOptions.top || this.chartHeight - o2.height - r2 - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (t3 && "bottom" === t3.verticalAlign && "proximate" !== t3.layout && t3.enabled && !t3.floating ? s2.legendHeight + a(t3.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), e3 && i3 && (this.inverted ? e3.options.left = i3.options.left = o2.left : e3.options.top = i3.options.top = o2.top, e3.setAxisSize(), i3.setAxisSize());
          }
        }
        function d(t3) {
          !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this), a(t3.redraw, true) && this.redraw(t3.animation));
        }
        function c() {
          let t3 = this.options;
          (t3.navigator.enabled || t3.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this));
        }
        function p() {
          let t3 = this.options, e3 = t3.navigator, i3 = t3.rangeSelector;
          if ((e3 && e3.enabled || i3 && i3.enabled) && (!s && "x" === this.zooming.type || s && "x" === this.zooming.pinchType))
            return false;
        }
        function u(t3) {
          let e3 = t3.navigator;
          if (e3 && t3.xAxis[0]) {
            let i3 = t3.xAxis[0].getExtremes();
            e3.render(i3.min, i3.max);
          }
        }
        function g(t3) {
          let e3 = t3.options.navigator || {}, i3 = t3.options.scrollbar || {};
          !this.navigator && !this.scroller && (e3.enabled || i3.enabled) && (r(true, this.options.navigator, e3), r(true, this.options.scrollbar, i3), delete t3.options.navigator, delete t3.options.scrollbar);
        }
        return { compose: function(t3, s2) {
          if (e2.pushUnique(n, t3)) {
            let e3 = t3.prototype;
            i2 = s2, e3.callbacks.push(u), o(t3, "afterAddSeries", l), o(t3, "afterSetChartSize", h), o(t3, "afterUpdate", d), o(t3, "beforeRender", c), o(t3, "beforeShowResetZoom", p), o(t3, "update", g);
          }
        } };
      }), i(e, "Core/Axis/NavigatorAxisComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { isTouchDevice: i2 } = t2, { addEvent: s, correctFloat: o, defined: r, isNumber: a, pick: n } = e2;
        function l() {
          this.navigatorAxis || (this.navigatorAxis = new d(this));
        }
        function h(t3) {
          let e3;
          let s2 = this.chart, o2 = s2.options, a2 = o2.navigator, n2 = this.navigatorAxis, l2 = s2.zooming.pinchType, h2 = o2.rangeSelector, d2 = s2.zooming.type;
          if (this.isXAxis && (a2?.enabled || h2?.enabled)) {
            if ("y" === d2 && "zoom" === t3.trigger)
              e3 = false;
            else if (("zoom" === t3.trigger && "xy" === d2 || i2 && "xy" === l2) && this.options.range) {
              let e4 = n2.previousZoom;
              r(t3.min) ? n2.previousZoom = [this.min, this.max] : e4 && (t3.min = e4[0], t3.max = e4[1], n2.previousZoom = void 0);
            }
          }
          void 0 !== e3 && t3.preventDefault();
        }
        class d {
          static compose(t3) {
            t3.keepProps.includes("navigatorAxis") || (t3.keepProps.push("navigatorAxis"), s(t3, "init", l), s(t3, "setExtremes", h));
          }
          constructor(t3) {
            this.axis = t3;
          }
          destroy() {
            this.axis = void 0;
          }
          toFixedRange(t3, e3, i3, s2) {
            let l2 = this.axis, h2 = l2.chart, d2 = n(l2.ordinal?.convertOverscroll(l2.options.overscroll), 0), c = n(i3, l2.translate(t3, true, !l2.horiz)), p = n(s2, l2.translate(e3, true, !l2.horiz)), u = h2 && h2.fixedRange, g = (l2.pointRange || 0) / 2;
            if (r(i3) || (c = o(c + g)), r(s2) || (p = o(p - g)), u && l2.dataMin && l2.dataMax) {
              let t4 = l2.dataMax + d2;
              p >= t4 && (c = o(t4 - u), p = o(t4)), c <= l2.dataMin && (p = o(l2.dataMin + u));
            }
            return a(c) && a(p) || (c = p = void 0), { min: c, max: p };
          }
        }
        return d;
      }), i(e, "Stock/Navigator/NavigatorDefaults.js", [e["Core/Color/Color.js"], e["Core/Series/SeriesRegistry.js"]], function(t2, e2) {
        let { parse: i2 } = t2, { seriesTypes: s } = e2;
        return { height: 40, margin: 25, maskInside: true, handles: { width: 7, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: true, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: i2("#667aff").setOpacity(0.3).get(), outlineColor: "#999999", outlineWidth: 1, series: { type: void 0 === s.areaspline ? "line" : "areaspline", fillOpacity: 0.05, lineWidth: 1, compare: null, sonification: { enabled: false }, dataGrouping: { approximation: "average", enabled: true, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] }, dataLabels: { enabled: false, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: false }, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#000000", fontSize: "0.7em", opacity: 0.6, textOutline: "2px contrast" }, x: 3, y: -4 }, crosshair: false }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: false, endOnTick: false, minPadding: 0.1, maxPadding: 0.1, labels: { enabled: false }, crosshair: false, title: { text: null }, tickLength: 0, tickWidth: 0 } };
      }), i(e, "Stock/Navigator/NavigatorSymbols.js", [], function() {
        return { "navigator-handle": function(t2, e2, i2, s, o = {}) {
          let r = o.width ? o.width / 2 : i2, a = Math.round(r / 3) + 0.5;
          return [["M", -r - 1, 0.5], ["L", r, 0.5], ["L", r, (s = o.height || s) + 0.5], ["L", -r - 1, s + 0.5], ["L", -r - 1, 0.5], ["M", -a, 4], ["L", -a, s - 3], ["M", a - 1, 4], ["L", a - 1, s - 3]];
        } };
      }), i(e, "Stock/Utilities/StockUtilities.js", [e["Core/Utilities.js"]], function(t2) {
        let { defined: e2 } = t2;
        return { setFixedRange: function(t3) {
          let i2 = this.xAxis[0];
          e2(i2.dataMax) && e2(i2.dataMin) && t3 ? this.fixedRange = Math.min(t3, i2.dataMax - i2.dataMin) : this.fixedRange = t3;
        } };
      }), i(e, "Stock/Navigator/NavigatorComposition.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/NavigatorAxisComposition.js"], e["Stock/Navigator/NavigatorDefaults.js"], e["Stock/Navigator/NavigatorSymbols.js"], e["Core/Renderer/RendererRegistry.js"], e["Stock/Utilities/StockUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
        let { setOptions: l } = t2, { composed: h } = e2, { getRendererType: d } = r, { setFixedRange: c } = a, { addEvent: p, extend: u, pushUnique: g } = n;
        function f() {
          this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
        }
        return { compose: function(t3, e3, r2) {
          i2.compose(e3), g(h, "Navigator") && (t3.prototype.setFixedRange = c, u(d().prototype.symbols, o), p(r2, "afterUpdate", f), l({ navigator: s }));
        } };
      }), i(e, "Core/Axis/ScrollbarAxis.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        var i2;
        let { composed: s } = t2, { addEvent: o, defined: r, pick: a, pushUnique: n } = e2;
        return function(t3) {
          let e3;
          function i3(t4) {
            let e4 = a(t4.options && t4.options.min, t4.min), i4 = a(t4.options && t4.options.max, t4.max);
            return { axisMin: e4, axisMax: i4, scrollMin: r(t4.dataMin) ? Math.min(e4, t4.min, t4.dataMin, a(t4.threshold, 1 / 0)) : e4, scrollMax: r(t4.dataMax) ? Math.max(i4, t4.max, t4.dataMax, a(t4.threshold, -1 / 0)) : i4 };
          }
          function l() {
            let t4 = this.scrollbar, e4 = t4 && !t4.options.opposite, i4 = this.horiz ? 2 : e4 ? 3 : 1;
            t4 && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i4] += t4.size + (t4.options.margin || 0));
          }
          function h() {
            let t4 = this;
            t4.options && t4.options.scrollbar && t4.options.scrollbar.enabled && (t4.options.scrollbar.vertical = !t4.horiz, t4.options.startOnTick = t4.options.endOnTick = false, t4.scrollbar = new e3(t4.chart.renderer, t4.options.scrollbar, t4.chart), o(t4.scrollbar, "changed", function(e4) {
              let s2, o2;
              let { axisMin: a2, axisMax: n2, scrollMin: l2, scrollMax: h2 } = i3(t4), d2 = h2 - l2;
              if (r(a2) && r(n2)) {
                if (t4.horiz && !t4.reversed || !t4.horiz && t4.reversed ? (s2 = l2 + d2 * this.to, o2 = l2 + d2 * this.from) : (s2 = l2 + d2 * (1 - this.from), o2 = l2 + d2 * (1 - this.to)), this.shouldUpdateExtremes(e4.DOMType)) {
                  let i4 = "mousemove" !== e4.DOMType && "touchmove" !== e4.DOMType && void 0;
                  t4.setExtremes(o2, s2, true, i4, e4);
                } else
                  this.setRange(this.from, this.to);
              }
            }));
          }
          function d() {
            let t4, e4, s2;
            let { scrollMin: o2, scrollMax: a2 } = i3(this), n2 = this.scrollbar, l2 = this.axisTitleMargin + (this.titleOffset || 0), h2 = this.chart.scrollbarsOffsets, d2 = this.options.margin || 0;
            if (n2 && h2) {
              if (this.horiz)
                this.opposite || (h2[1] += l2), n2.position(this.left, this.top + this.height + 2 + h2[1] - (this.opposite ? d2 : 0), this.width, this.height), this.opposite || (h2[1] += d2), t4 = 1;
              else {
                let e5;
                this.opposite && (h2[0] += l2), e5 = n2.options.opposite ? this.left + this.width + 2 + h2[0] - (this.opposite ? 0 : d2) : this.opposite ? 0 : d2, n2.position(e5, this.top, this.width, this.height), this.opposite && (h2[0] += d2), t4 = 0;
              }
              h2[t4] += n2.size + (n2.options.margin || 0), isNaN(o2) || isNaN(a2) || !r(this.min) || !r(this.max) || this.min === this.max ? n2.setRange(0, 1) : (e4 = (this.min - o2) / (a2 - o2), s2 = (this.max - o2) / (a2 - o2), this.horiz && !this.reversed || !this.horiz && this.reversed ? n2.setRange(e4, s2) : n2.setRange(1 - s2, 1 - e4));
            }
          }
          t3.compose = function(t4, i4) {
            n(s, "Axis.Scrollbar") && (e3 = i4, o(t4, "afterGetOffset", l), o(t4, "afterInit", h), o(t4, "afterRender", d));
          };
        }(i2 || (i2 = {})), i2;
      }), i(e, "Stock/Scrollbar/ScrollbarDefaults.js", [], function() {
        return { height: 10, barBorderRadius: 5, buttonBorderRadius: 0, buttonsEnabled: false, liveRedraw: void 0, margin: void 0, minWidth: 6, opposite: true, step: 0.2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 0, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "none", trackBackgroundColor: "rgba(255, 255, 255, 0.001)", trackBorderColor: "#cccccc", trackBorderRadius: 5, trackBorderWidth: 1 };
      }), i(e, "Stock/Scrollbar/Scrollbar.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/ScrollbarAxis.js"], e["Stock/Scrollbar/ScrollbarDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { defaultOptions: r } = t2, { addEvent: a, correctFloat: n, defined: l, destroyObjectProperties: h, fireEvent: d, merge: c, pick: p, removeEvent: u } = o;
        class g {
          static compose(t3) {
            i2.compose(t3, g);
          }
          static swapXY(t3, e3) {
            return e3 && t3.forEach((t4) => {
              let e4;
              let i3 = t4.length;
              for (let s2 = 0; s2 < i3; s2 += 2)
                "number" == typeof (e4 = t4[s2 + 1]) && (t4[s2 + 1] = t4[s2 + 2], t4[s2 + 2] = e4);
            }), t3;
          }
          constructor(t3, e3, i3) {
            this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(t3, e3, i3);
          }
          addEvents() {
            let t3 = this.options.inverted ? [1, 0] : [0, 1], e3 = this.scrollbarButtons, i3 = this.scrollbarGroup.element, s2 = this.track.element, o2 = this.mouseDownHandler.bind(this), r2 = this.mouseMoveHandler.bind(this), n2 = this.mouseUpHandler.bind(this), l2 = [[e3[t3[0]].element, "click", this.buttonToMinClick.bind(this)], [e3[t3[1]].element, "click", this.buttonToMaxClick.bind(this)], [s2, "click", this.trackClick.bind(this)], [i3, "mousedown", o2], [i3.ownerDocument, "mousemove", r2], [i3.ownerDocument, "mouseup", n2], [i3, "touchstart", o2], [i3.ownerDocument, "touchmove", r2], [i3.ownerDocument, "touchend", n2]];
            l2.forEach(function(t4) {
              a.apply(null, t4);
            }), this._events = l2;
          }
          buttonToMaxClick(t3) {
            let e3 = (this.to - this.from) * p(this.options.step, 0.2);
            this.updatePosition(this.from + e3, this.to + e3), d(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: t3 });
          }
          buttonToMinClick(t3) {
            let e3 = n(this.to - this.from) * p(this.options.step, 0.2);
            this.updatePosition(n(this.from - e3), n(this.to - e3)), d(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: t3 });
          }
          cursorToScrollbarPosition(t3) {
            let e3 = this.options, i3 = e3.minWidth > this.calculatedWidth ? e3.minWidth : 0;
            return { chartX: (t3.chartX - this.x - this.xOffset) / (this.barWidth - i3), chartY: (t3.chartY - this.y - this.yOffset) / (this.barWidth - i3) };
          }
          destroy() {
            let t3 = this, e3 = t3.chart.scroller;
            t3.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(e4) {
              t3[e4] && t3[e4].destroy && (t3[e4] = t3[e4].destroy());
            }), e3 && t3 === e3.scrollbar && (e3.scrollbar = null, h(e3.scrollbarButtons));
          }
          drawScrollbarButton(t3) {
            let e3 = this.renderer, i3 = this.scrollbarButtons, s2 = this.options, o2 = this.size, r2 = e3.g().add(this.group);
            if (i3.push(r2), s2.buttonsEnabled) {
              let a2 = e3.rect().addClass("highcharts-scrollbar-button").add(r2);
              this.chart.styledMode || a2.attr({ stroke: s2.buttonBorderColor, "stroke-width": s2.buttonBorderWidth, fill: s2.buttonBackgroundColor }), a2.attr(a2.crisp({ x: -0.5, y: -0.5, width: o2 + 1, height: o2 + 1, r: s2.buttonBorderRadius }, a2.strokeWidth()));
              let n2 = e3.path(g.swapXY([["M", o2 / 2 + (t3 ? -1 : 1), o2 / 2 - 3], ["L", o2 / 2 + (t3 ? -1 : 1), o2 / 2 + 3], ["L", o2 / 2 + (t3 ? 2 : -2), o2 / 2]], s2.vertical)).addClass("highcharts-scrollbar-arrow").add(i3[t3]);
              this.chart.styledMode || n2.attr({ fill: s2.buttonArrowColor });
            }
          }
          init(t3, e3, i3) {
            this.scrollbarButtons = [], this.renderer = t3, this.userOptions = e3, this.options = c(s, r.scrollbar, e3), this.options.margin = p(this.options.margin, 10), this.chart = i3, this.size = p(this.options.size, this.options.height), e3.enabled && (this.render(), this.addEvents());
          }
          mouseDownHandler(t3) {
            let e3 = this.chart.pointer?.normalize(t3) || t3, i3 = this.cursorToScrollbarPosition(e3);
            this.chartX = i3.chartX, this.chartY = i3.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = true;
          }
          mouseMoveHandler(t3) {
            let e3;
            let i3 = this.chart.pointer?.normalize(t3) || t3, s2 = this.options.vertical ? "chartY" : "chartX", o2 = this.initPositions || [];
            this.grabbedCenter && (!t3.touches || 0 !== t3.touches[0][s2]) && (e3 = this.cursorToScrollbarPosition(i3)[s2] - this[s2], this.hasDragged = true, this.updatePosition(o2[0] + e3, o2[1] + e3), this.hasDragged && d(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: t3.type, DOMEvent: t3 }));
          }
          mouseUpHandler(t3) {
            this.hasDragged && d(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: t3.type, DOMEvent: t3 }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
          }
          position(t3, e3, i3, s2) {
            let { buttonsEnabled: o2, margin: r2 = 0, vertical: a2 } = this.options, n2 = this.rendered ? "animate" : "attr", l2 = s2, h2 = 0;
            this.group.show(), this.x = t3, this.y = e3 + this.trackBorderWidth, this.width = i3, this.height = s2, this.xOffset = l2, this.yOffset = h2, a2 ? (this.width = this.yOffset = i3 = h2 = this.size, this.xOffset = l2 = 0, this.yOffset = h2 = o2 ? this.size : 0, this.barWidth = s2 - (o2 ? 2 * i3 : 0), this.x = t3 += r2) : (this.height = s2 = this.size, this.xOffset = l2 = o2 ? this.size : 0, this.barWidth = i3 - (o2 ? 2 * s2 : 0), this.y = this.y + r2), this.group[n2]({ translateX: t3, translateY: this.y }), this.track[n2]({ width: i3, height: s2 }), this.scrollbarButtons[1][n2]({ translateX: a2 ? 0 : i3 - l2, translateY: a2 ? s2 - h2 : 0 });
          }
          removeEvents() {
            this._events.forEach(function(t3) {
              u.apply(null, t3);
            }), this._events.length = 0;
          }
          render() {
            let t3 = this.renderer, e3 = this.options, i3 = this.size, s2 = this.chart.styledMode, o2 = t3.g("scrollbar").attr({ zIndex: e3.zIndex }).hide().add();
            this.group = o2, this.track = t3.rect().addClass("highcharts-scrollbar-track").attr({ r: e3.trackBorderRadius || 0, height: i3, width: i3 }).add(o2), s2 || this.track.attr({ fill: e3.trackBackgroundColor, stroke: e3.trackBorderColor, "stroke-width": e3.trackBorderWidth });
            let r2 = this.trackBorderWidth = this.track.strokeWidth();
            this.track.attr({ x: -r2 % 2 / 2, y: -r2 % 2 / 2 }), this.scrollbarGroup = t3.g().add(o2), this.scrollbar = t3.rect().addClass("highcharts-scrollbar-thumb").attr({ height: i3 - r2, width: i3 - r2, r: e3.barBorderRadius || 0 }).add(this.scrollbarGroup), this.scrollbarRifles = t3.path(g.swapXY([["M", -3, i3 / 4], ["L", -3, 2 * i3 / 3], ["M", 0, i3 / 4], ["L", 0, 2 * i3 / 3], ["M", 3, i3 / 4], ["L", 3, 2 * i3 / 3]], e3.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), s2 || (this.scrollbar.attr({ fill: e3.barBackgroundColor, stroke: e3.barBorderColor, "stroke-width": e3.barBorderWidth }), this.scrollbarRifles.attr({ stroke: e3.rifleColor, "stroke-width": 1 })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
          }
          setRange(t3, e3) {
            let i3, s2;
            let o2 = this.options, r2 = o2.vertical, a2 = o2.minWidth, h2 = this.barWidth, d2 = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
            if (!l(h2))
              return;
            let c2 = h2 * Math.min(e3, 1);
            i3 = Math.ceil(h2 * (t3 = Math.max(t3, 0))), this.calculatedWidth = s2 = n(c2 - i3), s2 < a2 && (i3 = (h2 - a2 + s2) * t3, s2 = a2);
            let p2 = Math.floor(i3 + this.xOffset + this.yOffset), u2 = s2 / 2 - 0.5;
            this.from = t3, this.to = e3, r2 ? (this.scrollbarGroup[d2]({ translateY: p2 }), this.scrollbar[d2]({ height: s2 }), this.scrollbarRifles[d2]({ translateY: u2 }), this.scrollbarTop = p2, this.scrollbarLeft = 0) : (this.scrollbarGroup[d2]({ translateX: p2 }), this.scrollbar[d2]({ width: s2 }), this.scrollbarRifles[d2]({ translateX: u2 }), this.scrollbarLeft = p2, this.scrollbarTop = 0), s2 <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), false === o2.showFull && (t3 <= 0 && e3 >= 1 ? this.group.hide() : this.group.show()), this.rendered = true;
          }
          shouldUpdateExtremes(t3) {
            return p(this.options.liveRedraw, e2.svg && !e2.isTouchDevice && !this.chart.boosted) || "mouseup" === t3 || "touchend" === t3 || !l(t3);
          }
          trackClick(t3) {
            let e3 = this.chart.pointer?.normalize(t3) || t3, i3 = this.to - this.from, s2 = this.y + this.scrollbarTop, o2 = this.x + this.scrollbarLeft;
            this.options.vertical && e3.chartY > s2 || !this.options.vertical && e3.chartX > o2 ? this.updatePosition(this.from + i3, this.to + i3) : this.updatePosition(this.from - i3, this.to - i3), d(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: t3 });
          }
          update(t3) {
            this.destroy(), this.init(this.chart.renderer, c(true, this.options, t3), this.chart);
          }
          updatePosition(t3, e3) {
            e3 > 1 && (t3 = n(1 - n(e3 - t3)), e3 = 1), t3 < 0 && (e3 = n(e3 - t3), t3 = 0), this.from = t3, this.to = e3;
          }
        }
        return g.defaultOptions = s, r.scrollbar = c(true, g.defaultOptions, r.scrollbar), g;
      }), i(e, "Stock/Navigator/Navigator.js", [e["Core/Axis/Axis.js"], e["Stock/Navigator/ChartNavigatorComposition.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/NavigatorAxisComposition.js"], e["Stock/Navigator/NavigatorComposition.js"], e["Stock/Scrollbar/Scrollbar.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
        let { defaultOptions: l } = i2, { isTouchDevice: h } = s, { addEvent: d, clamp: c, correctFloat: p, defined: u, destroyObjectProperties: g, erase: f, extend: m, find: x, fireEvent: y, isArray: b, isNumber: v, merge: S, pick: M, removeEvent: k, splat: C } = n;
        function A(t3, ...e3) {
          let i3 = [].filter.call(e3, v);
          if (i3.length)
            return Math[t3].apply(0, i3);
        }
        class w {
          static compose(t3, i3, s2) {
            e2.compose(t3, w), r.compose(t3, i3, s2);
          }
          constructor(t3) {
            this.scrollbarHeight = 0, this.init(t3);
          }
          drawHandle(t3, e3, i3, s2) {
            let o2 = this.navigatorOptions.handles.height;
            this.handles[e3][s2](i3 ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(t3, 10) + 0.5 - o2) } : { translateX: Math.round(this.left + parseInt(t3, 10)), translateY: Math.round(this.top + this.height / 2 - o2 / 2 - 1) });
          }
          drawOutline(t3, e3, i3, s2) {
            let o2 = this.navigatorOptions.maskInside, r2 = this.outline.strokeWidth(), a2 = r2 / 2, n2 = r2 % 2 / 2, l2 = this.scrollButtonSize, h2 = this.size, d2 = this.top, c2 = this.height, p2 = d2 - a2, u2 = d2 + c2, g2 = this.left, f2, m2;
            i3 ? (f2 = d2 + e3 + n2, e3 = d2 + t3 + n2, m2 = [["M", g2 + c2, d2 - l2 - n2], ["L", g2 + c2, f2], ["L", g2, f2], ["M", g2, e3], ["L", g2 + c2, e3], ["L", g2 + c2, d2 + h2 + l2]], o2 && m2.push(["M", g2 + c2, f2 - a2], ["L", g2 + c2, e3 + a2])) : (g2 -= l2, t3 += g2 + l2 - n2, e3 += g2 + l2 - n2, m2 = [["M", g2, p2], ["L", t3, p2], ["L", t3, u2], ["M", e3, u2], ["L", e3, p2], ["L", g2 + h2 + 2 * l2, d2 + a2]], o2 && m2.push(["M", t3 - a2, p2], ["L", e3 + a2, p2])), this.outline[s2]({ d: m2 });
          }
          drawMasks(t3, e3, i3, s2) {
            let o2, r2, a2, n2;
            let l2 = this.left, h2 = this.top, d2 = this.height;
            i3 ? (a2 = [l2, l2, l2], n2 = [h2, h2 + t3, h2 + e3], r2 = [d2, d2, d2], o2 = [t3, e3 - t3, this.size - e3]) : (a2 = [l2, l2 + t3, l2 + e3], n2 = [h2, h2, h2], r2 = [t3, e3 - t3, this.size - e3], o2 = [d2, d2, d2]), this.shades.forEach((t4, e4) => {
              t4[s2]({ x: a2[e4], y: n2[e4], width: r2[e4], height: o2[e4] });
            });
          }
          renderElements() {
            let t3 = this, e3 = t3.navigatorOptions, i3 = e3.maskInside, s2 = t3.chart, o2 = s2.inverted, r2 = s2.renderer, a2 = { cursor: o2 ? "ns-resize" : "ew-resize" }, n2 = t3.navigatorGroup = r2.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add();
            if ([!i3, i3, !i3].forEach((i4, o3) => {
              let l2 = r2.rect().addClass("highcharts-navigator-mask" + (1 === o3 ? "-inside" : "-outside")).add(n2);
              s2.styledMode || (l2.attr({ fill: i4 ? e3.maskFill : "rgba(0,0,0,0)" }), 1 === o3 && l2.css(a2)), t3.shades[o3] = l2;
            }), t3.outline = r2.path().addClass("highcharts-navigator-outline").add(n2), s2.styledMode || t3.outline.attr({ "stroke-width": e3.outlineWidth, stroke: e3.outlineColor }), e3.handles && e3.handles.enabled) {
              let i4 = e3.handles, { height: o3, width: l2 } = i4;
              [0, 1].forEach((e4) => {
                t3.handles[e4] = r2.symbol(i4.symbols[e4], -l2 / 2 - 1, 0, l2, o3, i4), s2.inverted && t3.handles[e4].attr({ rotation: 90, rotationOriginX: Math.floor(-l2 / 2), rotationOriginY: (o3 + l2) / 2 }), t3.handles[e4].attr({ zIndex: 7 - e4 }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][e4]).add(n2), s2.styledMode || t3.handles[e4].attr({ fill: i4.backgroundColor, stroke: i4.borderColor, "stroke-width": i4.lineWidth }).css(a2);
              });
            }
          }
          update(t3) {
            (this.series || []).forEach((t4) => {
              t4.baseSeries && delete t4.baseSeries.navigatorSeries;
            }), this.destroy(), S(true, this.chart.options.navigator, t3), this.init(this.chart);
          }
          render(t3, e3, i3, s2) {
            let o2 = this.chart, r2 = this.xAxis, a2 = r2.pointRange || 0, n2 = r2.navigatorAxis.fake ? o2.xAxis[0] : r2, l2 = this.navigatorEnabled, h2 = this.rendered, d2 = o2.inverted, g2 = o2.xAxis[0].minRange, f2 = o2.xAxis[0].options.maxRange, m2 = this.scrollButtonSize, x2, b2, S2, k2 = this.scrollbarHeight, C2, A2;
            if (this.hasDragged && !u(i3))
              return;
            if (t3 = p(t3 - a2 / 2), e3 = p(e3 + a2 / 2), !v(t3) || !v(e3)) {
              if (!h2)
                return;
              i3 = 0, s2 = M(r2.width, n2.width);
            }
            this.left = M(r2.left, o2.plotLeft + m2 + (d2 ? o2.plotWidth : 0));
            let w2 = this.size = C2 = M(r2.len, (d2 ? o2.plotHeight : o2.plotWidth) - 2 * m2);
            x2 = d2 ? k2 : C2 + 2 * m2, i3 = M(i3, r2.toPixels(t3, true)), s2 = M(s2, r2.toPixels(e3, true)), v(i3) && Math.abs(i3) !== 1 / 0 || (i3 = 0, s2 = x2);
            let T = r2.toValue(i3, true), P = r2.toValue(s2, true), L = Math.abs(p(P - T));
            L < g2 ? this.grabbedLeft ? i3 = r2.toPixels(P - g2 - a2, true) : this.grabbedRight && (s2 = r2.toPixels(T + g2 + a2, true)) : u(f2) && p(L - a2) > f2 && (this.grabbedLeft ? i3 = r2.toPixels(P - f2 - a2, true) : this.grabbedRight && (s2 = r2.toPixels(T + f2 + a2, true))), this.zoomedMax = c(Math.max(i3, s2), 0, w2), this.zoomedMin = c(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i3, s2), 0, w2), this.range = this.zoomedMax - this.zoomedMin, w2 = Math.round(this.zoomedMax);
            let O = Math.round(this.zoomedMin);
            l2 && (this.navigatorGroup.attr({ visibility: "inherit" }), A2 = h2 && !this.hasDragged ? "animate" : "attr", this.drawMasks(O, w2, d2, A2), this.drawOutline(O, w2, d2, A2), this.navigatorOptions.handles.enabled && (this.drawHandle(O, 0, d2, A2), this.drawHandle(w2, 1, d2, A2))), this.scrollbar && (d2 ? (S2 = this.top - m2, b2 = this.left - k2 + (l2 || !n2.opposite ? 0 : (n2.titleOffset || 0) + n2.axisTitleMargin), k2 = C2 + 2 * m2) : (S2 = this.top + (l2 ? this.height : -k2), b2 = this.left - m2), this.scrollbar.position(b2, S2, x2, k2), this.scrollbar.setRange(this.zoomedMin / (C2 || 1), this.zoomedMax / (C2 || 1))), this.rendered = true, y(this, "afterRender");
          }
          addMouseEvents() {
            let t3 = this, e3 = t3.chart, i3 = e3.container, s2 = [], o2, r2;
            t3.mouseMoveHandler = o2 = function(e4) {
              t3.onMouseMove(e4);
            }, t3.mouseUpHandler = r2 = function(e4) {
              t3.onMouseUp(e4);
            }, (s2 = t3.getPartsEvents("mousedown")).push(d(e3.renderTo, "mousemove", o2), d(i3.ownerDocument, "mouseup", r2), d(e3.renderTo, "touchmove", o2), d(i3.ownerDocument, "touchend", r2)), s2.concat(t3.getPartsEvents("touchstart")), t3.eventsToUnbind = s2, t3.series && t3.series[0] && s2.push(d(t3.series[0].xAxis, "foundExtremes", function() {
              e3.navigator.modifyNavigatorAxisExtremes();
            }));
          }
          getPartsEvents(t3) {
            let e3 = this, i3 = [];
            return ["shades", "handles"].forEach(function(s2) {
              e3[s2].forEach(function(o2, r2) {
                i3.push(d(o2.element, t3, function(t4) {
                  e3[s2 + "Mousedown"](t4, r2);
                }));
              });
            }), i3;
          }
          shadesMousedown(t3, e3) {
            t3 = this.chart.pointer?.normalize(t3) || t3;
            let i3 = this.chart, s2 = this.xAxis, o2 = this.zoomedMin, r2 = this.size, a2 = this.range, n2 = this.left, l2 = t3.chartX, h2, d2, c2, p2;
            i3.inverted && (l2 = t3.chartY, n2 = this.top), 1 === e3 ? (this.grabbedCenter = l2, this.fixedWidth = a2, this.dragOffset = l2 - o2) : (p2 = l2 - n2 - a2 / 2, 0 === e3 ? p2 = Math.max(0, p2) : 2 === e3 && p2 + a2 >= r2 && (p2 = r2 - a2, this.reversedExtremes ? (p2 -= a2, d2 = this.getUnionExtremes().dataMin) : h2 = this.getUnionExtremes().dataMax), p2 !== o2 && (this.fixedWidth = a2, u((c2 = s2.navigatorAxis.toFixedRange(p2, p2 + a2, d2, h2)).min) && y(this, "setRange", { min: Math.min(c2.min, c2.max), max: Math.max(c2.min, c2.max), redraw: true, eventArguments: { trigger: "navigator" } })));
          }
          handlesMousedown(t3, e3) {
            t3 = this.chart.pointer?.normalize(t3) || t3;
            let i3 = this.chart, s2 = i3.xAxis[0], o2 = this.reversedExtremes;
            0 === e3 ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = o2 ? s2.min : s2.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = o2 ? s2.max : s2.min), i3.setFixedRange(void 0);
          }
          onMouseMove(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.navigatorSize, o2 = e3.range, r2 = e3.dragOffset, a2 = i3.inverted, n2 = e3.left, l2;
            (!t3.touches || 0 !== t3.touches[0].pageX) && (l2 = (t3 = i3.pointer?.normalize(t3) || t3).chartX, a2 && (n2 = e3.top, l2 = t3.chartY), e3.grabbedLeft ? (e3.hasDragged = true, e3.render(0, 0, l2 - n2, e3.otherHandlePos)) : e3.grabbedRight ? (e3.hasDragged = true, e3.render(0, 0, e3.otherHandlePos, l2 - n2)) : e3.grabbedCenter && (e3.hasDragged = true, l2 < r2 ? l2 = r2 : l2 > s2 + r2 - o2 && (l2 = s2 + r2 - o2), e3.render(0, 0, l2 - r2, l2 - r2 + o2)), e3.hasDragged && e3.scrollbar && M(e3.scrollbar.options.liveRedraw, !h && !this.chart.boosted) && (t3.DOMType = t3.type, setTimeout(function() {
              e3.onMouseUp(t3);
            }, 0)));
          }
          onMouseUp(t3) {
            let e3, i3, s2, o2, r2, a2;
            let n2 = this.chart, l2 = this.xAxis, h2 = this.scrollbar, d2 = t3.DOMEvent || t3, c2 = n2.inverted, p2 = this.rendered && !this.hasDragged ? "animate" : "attr";
            (this.hasDragged && (!h2 || !h2.hasDragged) || "scrollbar" === t3.trigger) && (s2 = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? o2 = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r2 = this.fixedExtreme), this.zoomedMax === this.size && (r2 = this.reversedExtremes ? s2.dataMin : s2.dataMax), 0 === this.zoomedMin && (o2 = this.reversedExtremes ? s2.dataMax : s2.dataMin), u((a2 = l2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, o2, r2)).min) && y(this, "setRange", { min: Math.min(a2.min, a2.max), max: Math.max(a2.min, a2.max), redraw: true, animation: !this.hasDragged && null, eventArguments: { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: d2 } })), "mousemove" !== t3.DOMType && "touchmove" !== t3.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && v(this.zoomedMin) && v(this.zoomedMax) && (i3 = Math.round(this.zoomedMin), e3 = Math.round(this.zoomedMax), this.shades && this.drawMasks(i3, e3, c2, p2), this.outline && this.drawOutline(i3, e3, c2, p2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i3, 0, c2, p2), this.drawHandle(e3, 1, c2, p2)));
          }
          removeEvents() {
            this.eventsToUnbind && (this.eventsToUnbind.forEach(function(t3) {
              t3();
            }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
          }
          removeBaseSeriesEvents() {
            let t3 = this.baseSeries || [];
            this.navigatorEnabled && t3[0] && (false !== this.navigatorOptions.adaptToUpdatedData && t3.forEach(function(t4) {
              k(t4, "updatedData", this.updatedDataHandler);
            }, this), t3[0].xAxis && k(t3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
          }
          init(e3) {
            let i3 = e3.options, s2 = i3.navigator || {}, r2 = s2.enabled, n2 = i3.scrollbar || {}, l2 = n2.enabled, h2 = r2 && s2.height || 0, c2 = l2 && n2.height || 0, p2 = n2.buttonsEnabled && c2 || 0;
            this.handles = [], this.shades = [], this.chart = e3, this.setBaseSeries(), this.height = h2, this.scrollbarHeight = c2, this.scrollButtonSize = p2, this.scrollbarEnabled = l2, this.navigatorEnabled = r2, this.navigatorOptions = s2, this.scrollbarOptions = n2, this.opposite = M(s2.opposite, !!(!r2 && e3.inverted));
            let u2 = this, g2 = u2.baseSeries, f2 = e3.xAxis.length, m2 = e3.yAxis.length, x2 = g2 && g2[0] && g2[0].xAxis || e3.xAxis[0] || { options: {} };
            if (e3.isDirtyBox = true, u2.navigatorEnabled ? (u2.xAxis = new t2(e3, S({ breaks: x2.options.breaks, ordinal: x2.options.ordinal, overscroll: x2.options.overscroll }, s2.xAxis, { id: "navigator-x-axis", yAxis: "navigator-y-axis", type: "datetime", index: f2, isInternal: true, offset: 0, keepOrdinalPadding: true, startOnTick: false, endOnTick: false, minPadding: 0, maxPadding: 0, zoomEnabled: false }, e3.inverted ? { offsets: [p2, 0, -p2, 0], width: h2 } : { offsets: [0, -p2, 0, p2], height: h2 }), "xAxis"), u2.yAxis = new t2(e3, S(s2.yAxis, { id: "navigator-y-axis", alignTicks: false, offset: 0, index: m2, isInternal: true, reversed: M(s2.yAxis && s2.yAxis.reversed, e3.yAxis[0] && e3.yAxis[0].reversed, false), zoomEnabled: false }, e3.inverted ? { width: h2 } : { height: h2 }), "yAxis"), g2 || s2.series.data ? u2.updateNavigatorSeries(false) : 0 === e3.series.length && (u2.unbindRedraw = d(e3, "beforeRedraw", function() {
              e3.series.length > 0 && !u2.series && (u2.setBaseSeries(), u2.unbindRedraw());
            })), u2.reversedExtremes = e3.inverted && !u2.xAxis.reversed || !e3.inverted && u2.xAxis.reversed, u2.renderElements(), u2.addMouseEvents()) : (u2.xAxis = { chart: e3, navigatorAxis: { fake: true }, translate: function(t3, i4) {
              let s3 = e3.xAxis[0], o2 = s3.getExtremes(), r3 = s3.len - 2 * p2, a2 = A("min", s3.options.min, o2.dataMin), n3 = A("max", s3.options.max, o2.dataMax) - a2;
              return i4 ? t3 * n3 / r3 + a2 : r3 * (t3 - a2) / n3;
            }, toPixels: function(t3) {
              return this.translate(t3);
            }, toValue: function(t3) {
              return this.translate(t3, true);
            } }, u2.xAxis.navigatorAxis.axis = u2.xAxis, u2.xAxis.navigatorAxis.toFixedRange = o.prototype.toFixedRange.bind(u2.xAxis.navigatorAxis)), e3.options.scrollbar.enabled) {
              let t3 = S(e3.options.scrollbar, { vertical: e3.inverted });
              !v(t3.margin) && u2.navigatorEnabled && (t3.margin = e3.inverted ? -3 : 3), e3.scrollbar = u2.scrollbar = new a(e3.renderer, t3, e3), d(u2.scrollbar, "changed", function(t4) {
                let e4 = u2.size, i4 = e4 * this.to, s3 = e4 * this.from;
                u2.hasDragged = u2.scrollbar.hasDragged, u2.render(0, 0, s3, i4), this.shouldUpdateExtremes(t4.DOMType) && setTimeout(function() {
                  u2.onMouseUp(t4);
                });
              });
            }
            u2.addBaseSeriesEvents(), u2.addChartEvents();
          }
          getUnionExtremes(t3) {
            let e3;
            let i3 = this.chart.xAxis[0], s2 = this.xAxis, o2 = s2.options, r2 = i3.options;
            return t3 && null === i3.dataMin || (e3 = { dataMin: M(o2 && o2.min, A("min", r2.min, i3.dataMin, s2.dataMin, s2.min)), dataMax: M(o2 && o2.max, A("max", r2.max, i3.dataMax, s2.dataMax, s2.max)) }), e3;
          }
          setBaseSeries(t3, e3) {
            let i3 = this.chart, s2 = this.baseSeries = [];
            t3 = t3 || i3.options && i3.options.navigator.baseSeries || (i3.series.length ? x(i3.series, (t4) => !t4.options.isInternal).index : 0), (i3.series || []).forEach((e4, i4) => {
              !e4.options.isInternal && (e4.options.showInNavigator || (i4 === t3 || e4.options.id === t3) && false !== e4.options.showInNavigator) && s2.push(e4);
            }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, e3);
          }
          updateNavigatorSeries(t3, e3) {
            let i3 = this, s2 = i3.chart, o2 = i3.baseSeries, r2 = { enableMouseTracking: false, index: null, linkedTo: null, group: "nav", padXAxis: false, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", showInLegend: false, stacking: void 0, isInternal: true, states: { inactive: { opacity: 1 } } }, a2 = i3.series = (i3.series || []).filter((t4) => {
              let e4 = t4.baseSeries;
              return !(0 > o2.indexOf(e4)) || (e4 && (k(e4, "updatedData", i3.updatedDataHandler), delete e4.navigatorSeries), t4.chart && t4.destroy(), false);
            }), n2, h2, d2 = i3.navigatorOptions.series, c2;
            o2 && o2.length && o2.forEach((t4) => {
              let p2 = t4.navigatorSeries, u2 = m({ color: t4.color, visible: t4.visible }, b(d2) ? l.navigator.series : d2);
              if (p2 && false === i3.navigatorOptions.adaptToUpdatedData)
                return;
              r2.name = "Navigator " + o2.length, c2 = (n2 = t4.options || {}).navigatorOptions || {}, u2.dataLabels = C(u2.dataLabels), (h2 = S(n2, r2, u2, c2)).pointRange = M(u2.pointRange, c2.pointRange, l.plotOptions[h2.type || "line"].pointRange);
              let g2 = c2.data || u2.data;
              i3.hasNavigatorData = i3.hasNavigatorData || !!g2, h2.data = g2 || n2.data && n2.data.slice(0), p2 && p2.options ? p2.update(h2, e3) : (t4.navigatorSeries = s2.initSeries(h2), s2.setSortedData(), t4.navigatorSeries.baseSeries = t4, a2.push(t4.navigatorSeries));
            }), (d2.data && !(o2 && o2.length) || b(d2)) && (i3.hasNavigatorData = false, (d2 = C(d2)).forEach((t4, e4) => {
              r2.name = "Navigator " + (a2.length + 1), (h2 = S(l.navigator.series, { color: s2.series[e4] && !s2.series[e4].options.isInternal && s2.series[e4].color || s2.options.colors[e4] || s2.options.colors[0] }, r2, t4)).data = t4.data, h2.data && (i3.hasNavigatorData = true, a2.push(s2.initSeries(h2)));
            })), t3 && this.addBaseSeriesEvents();
          }
          addBaseSeriesEvents() {
            let t3 = this, e3 = t3.baseSeries || [];
            e3[0] && e3[0].xAxis && e3[0].eventsToUnbind.push(d(e3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), e3.forEach((e4) => {
              e4.eventsToUnbind.push(d(e4, "show", function() {
                this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
              })), e4.eventsToUnbind.push(d(e4, "hide", function() {
                this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
              })), false !== this.navigatorOptions.adaptToUpdatedData && e4.xAxis && e4.eventsToUnbind.push(d(e4, "updatedData", this.updatedDataHandler)), e4.eventsToUnbind.push(d(e4, "remove", function() {
                this.navigatorSeries && (f(t3.series, this.navigatorSeries), u(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
              }));
            });
          }
          getBaseSeriesMin(t3) {
            return this.baseSeries.reduce(function(t4, e3) {
              return Math.min(t4, e3.xData && e3.xData.length ? e3.xData[0] : t4);
            }, t3);
          }
          modifyNavigatorAxisExtremes() {
            let t3 = this.xAxis;
            if (void 0 !== t3.getExtremes) {
              let e3 = this.getUnionExtremes(true);
              e3 && (e3.dataMin !== t3.min || e3.dataMax !== t3.max) && (t3.min = e3.dataMin, t3.max = e3.dataMax);
            }
          }
          modifyBaseAxisExtremes() {
            let t3, e3;
            let i3 = this.chart.navigator, s2 = this.getExtremes(), o2 = s2.min, r2 = s2.max, a2 = s2.dataMin, n2 = s2.dataMax, l2 = r2 - o2, h2 = i3.stickToMin, d2 = i3.stickToMax, c2 = M(this.ordinal?.convertOverscroll(this.options.overscroll), 0), p2 = i3.series && i3.series[0], u2 = !!this.setExtremes;
            !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (h2 && (t3 = (e3 = a2) + l2), d2 && (t3 = n2 + c2, h2 || (e3 = Math.max(a2, t3 - l2, i3.getBaseSeriesMin(p2 && p2.xData ? p2.xData[0] : -Number.MAX_VALUE)))), u2 && (h2 || d2) && v(e3) && (this.min = this.userMin = e3, this.max = this.userMax = t3)), i3.stickToMin = i3.stickToMax = null;
          }
          updatedDataHandler() {
            let t3 = this.chart.navigator, e3 = this.navigatorSeries, i3 = t3.reversedExtremes ? 0 === Math.round(t3.zoomedMin) : Math.round(t3.zoomedMax) >= Math.round(t3.size);
            t3.stickToMax = M(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i3), t3.stickToMin = t3.shouldStickToMin(this, t3), e3 && !t3.hasNavigatorData && (e3.options.pointStart = this.xData[0], e3.setData(this.options.data, false, null, false));
          }
          shouldStickToMin(t3, e3) {
            let i3 = e3.getBaseSeriesMin(t3.xData[0]), s2 = t3.xAxis, o2 = s2.max, r2 = s2.min, a2 = s2.options.range;
            return !!(v(o2) && v(r2)) && (a2 && o2 - i3 > 0 ? o2 - i3 < a2 : r2 <= i3);
          }
          addChartEvents() {
            this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(d(this.chart, "redraw", function() {
              let t3 = this.navigator, e3 = t3 && (t3.baseSeries && t3.baseSeries[0] && t3.baseSeries[0].xAxis || this.xAxis[0]);
              e3 && t3.render(e3.min, e3.max);
            }), d(this.chart, "getMargins", function() {
              let t3 = this.navigator, e3 = t3.opposite ? "plotTop" : "marginBottom";
              this.inverted && (e3 = t3.opposite ? "marginRight" : "plotLeft"), this[e3] = (this[e3] || 0) + (t3.navigatorEnabled || !this.inverted ? t3.height + t3.scrollbarHeight : 0) + t3.navigatorOptions.margin;
            }), d(w, "setRange", function(t3) {
              this.chart.xAxis[0].setExtremes(t3.min, t3.max, t3.redraw, t3.animation, t3.eventArguments);
            }));
          }
          destroy() {
            this.removeEvents(), this.xAxis && (f(this.chart.xAxis, this.xAxis), f(this.chart.axes, this.xAxis)), this.yAxis && (f(this.chart.yAxis, this.yAxis), f(this.chart.axes, this.yAxis)), (this.series || []).forEach((t3) => {
              t3.destroy && t3.destroy();
            }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((t3) => {
              this[t3] && this[t3].destroy && this[t3].destroy(), this[t3] = null;
            }), [this.handles].forEach((t3) => {
              g(t3);
            });
          }
        }
        return w;
      }), i(e, "Core/Axis/OrdinalAxis.js", [e["Core/Axis/Axis.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { addEvent: r, correctFloat: a, css: n, defined: l, error: h, isNumber: d, pick: c, timeUnits: p, isString: u } = s;
        return function(t3) {
          function s2(t4, e3, i3, s3, o3 = [], r2 = 0, a2) {
            let n2 = {}, d2 = this.options.tickPixelInterval, c2 = this.chart.time, u2 = [], g2, f2, m2, x2, y2, b2 = 0, v2 = [], S2 = -Number.MAX_VALUE;
            if (!this.options.ordinal && !this.options.breaks || !o3 || o3.length < 3 || void 0 === e3)
              return c2.getTimeTicks.apply(c2, arguments);
            let M2 = o3.length;
            for (g2 = 0; g2 < M2; g2++) {
              if (y2 = g2 && o3[g2 - 1] > i3, o3[g2] < e3 && (b2 = g2), g2 === M2 - 1 || o3[g2 + 1] - o3[g2] > 5 * r2 || y2) {
                if (o3[g2] > S2) {
                  for (f2 = c2.getTimeTicks(t4, o3[b2], o3[g2], s3); f2.length && f2[0] <= S2; )
                    f2.shift();
                  f2.length && (S2 = f2[f2.length - 1]), u2.push(v2.length), v2 = v2.concat(f2);
                }
                b2 = g2 + 1;
              }
              if (y2)
                break;
            }
            if (f2) {
              if (x2 = f2.info, a2 && x2.unitRange <= p.hour) {
                for (b2 = 1, g2 = v2.length - 1; b2 < g2; b2++)
                  c2.dateFormat("%d", v2[b2]) !== c2.dateFormat("%d", v2[b2 - 1]) && (n2[v2[b2]] = "day", m2 = true);
                m2 && (n2[v2[0]] = "day"), x2.higherRanks = n2;
              }
              x2.segmentStarts = u2, v2.info = x2;
            } else
              h(12, false, this.chart);
            if (a2 && l(d2)) {
              let t5 = v2.length, e4 = [], s4 = [], o4, r3, a3, l2, h2, c3 = t5;
              for (; c3--; )
                r3 = this.translate(v2[c3]), a3 && (s4[c3] = a3 - r3), e4[c3] = a3 = r3;
              for (s4.sort(), (l2 = s4[Math.floor(s4.length / 2)]) < 0.6 * d2 && (l2 = null), c3 = v2[t5 - 1] > i3 ? t5 - 1 : t5, a3 = void 0; c3--; )
                h2 = Math.abs(a3 - (r3 = e4[c3])), a3 && h2 < 0.8 * d2 && (null === l2 || h2 < 0.8 * l2) ? (n2[v2[c3]] && !n2[v2[c3 + 1]] ? (o4 = c3 + 1, a3 = r3) : o4 = c3, v2.splice(o4, 1)) : a3 = r3;
            }
            return v2;
          }
          function o2(t4) {
            let e3 = this.ordinal.positions;
            if (!e3)
              return t4;
            let i3 = e3.length - 1, s3;
            return (t4 < 0 ? t4 = e3[0] : t4 > i3 ? t4 = e3[i3] : (i3 = Math.floor(t4), s3 = t4 - i3), void 0 !== s3 && void 0 !== e3[i3]) ? e3[i3] + (s3 ? s3 * (e3[i3 + 1] - e3[i3]) : 0) : t4;
          }
          function g(t4) {
            let e3 = this.ordinal, i3 = this.old ? this.old.min : this.min, s3 = this.old ? this.old.transA : this.transA, o3 = e3.getExtendedPositions();
            if (o3 && o3.length) {
              let r2 = a((t4 - i3) * s3 + this.minPixelPadding), n2 = a(e3.getIndexOfPoint(r2, o3)), l2 = a(n2 % 1);
              if (n2 >= 0 && n2 <= o3.length - 1) {
                let t5 = o3[Math.floor(n2)], e4 = o3[Math.ceil(n2)];
                return o3[Math.floor(n2)] + l2 * (e4 - t5);
              }
            }
            return t4;
          }
          function f(e3, i3) {
            let s3 = t3.Additions.findIndexOf(e3, i3, true);
            if (e3[s3] === i3)
              return s3;
            let o3 = (i3 - e3[s3]) / (e3[s3 + 1] - e3[s3]);
            return s3 + o3;
          }
          function m() {
            this.ordinal || (this.ordinal = new t3.Additions(this));
          }
          function x() {
            let { eventArgs: t4, options: e3 } = this;
            if (this.isXAxis && l(e3.overscroll) && 0 !== e3.overscroll && d(this.max) && d(this.min) && (this.options.ordinal && !this.ordinal.originalOrdinalRange && this.ordinal.getExtendedPositions(false), this.max === this.dataMax && (t4?.trigger !== "pan" || this.isInternal) && t4?.trigger !== "navigator")) {
              let i3 = this.ordinal.convertOverscroll(e3.overscroll);
              this.max += i3, !this.isInternal && l(this.userMin) && t4?.trigger !== "mousewheel" && (this.min += i3);
            }
          }
          function y() {
            this.horiz && !this.isDirty && (this.isDirty = this.isOrdinal && this.chart.navigator && !this.chart.navigator.adaptToUpdatedData);
          }
          function b() {
            this.ordinal && (this.ordinal.beforeSetTickPositions(), this.tickInterval = this.ordinal.postProcessTickInterval(this.tickInterval));
          }
          function v(t4) {
            let e3 = this.xAxis[0], i3 = e3.ordinal.convertOverscroll(e3.options.overscroll), s3 = t4.originalEvent.chartX, o3 = this.options.chart.panning, r2 = false;
            if (o3 && "y" !== o3.type && e3.options.ordinal && e3.series.length) {
              let t5, o4;
              let a2 = this.mouseDownX, l2 = e3.getExtremes(), h2 = l2.dataMax, d2 = l2.min, c2 = l2.max, p2 = this.hoverPoints, u2 = e3.closestPointRange || e3.ordinal && e3.ordinal.overscrollPointsRange, g2 = Math.round((a2 - s3) / (e3.translationSlope * (e3.ordinal.slope || u2))), f2 = e3.ordinal.getExtendedPositions(), m2 = { ordinal: { positions: f2, extendedOrdinalPositions: f2 } }, x2 = e3.index2val, y2 = e3.val2lin;
              m2.ordinal.positions ? Math.abs(g2) > 1 && (p2 && p2.forEach(function(t6) {
                t6.setState();
              }), h2 > (o4 = m2.ordinal.positions)[o4.length - 1] && o4.push(h2), this.setFixedRange(c2 - d2), (t5 = e3.navigatorAxis.toFixedRange(void 0, void 0, x2.apply(m2, [y2.apply(m2, [d2, true]) + g2]), x2.apply(m2, [y2.apply(m2, [c2, true]) + g2]))).min >= Math.min(l2.dataMin, d2) && t5.max <= Math.max(h2, c2) + i3 && e3.setExtremes(t5.min, t5.max, true, false, { trigger: "pan" }), this.mouseDownX = s3, n(this.container, { cursor: "move" })) : r2 = true;
            } else
              r2 = true;
            r2 || o3 && /y/.test(o3.type) ? i3 && (e3.max = e3.dataMax + i3) : t4.preventDefault();
          }
          function S() {
            let t4 = this.xAxis;
            t4 && t4.options.ordinal && (delete t4.ordinal.index, delete t4.ordinal.originalOrdinalRange);
          }
          function M(t4, e3) {
            let i3;
            let s3 = this.ordinal, o3 = s3.positions, r2 = s3.slope, a2;
            if (!o3)
              return t4;
            let n2 = o3.length;
            if (o3[0] <= t4 && o3[n2 - 1] >= t4)
              i3 = f(o3, t4);
            else {
              if (!((a2 = s3.getExtendedPositions && s3.getExtendedPositions()) && a2.length))
                return t4;
              let n3 = a2.length;
              r2 || (r2 = (a2[n3 - 1] - a2[0]) / n3);
              let l2 = f(a2, o3[0]);
              if (t4 >= a2[0] && t4 <= a2[n3 - 1])
                i3 = f(a2, t4) - l2;
              else {
                if (!e3)
                  return t4;
                i3 = t4 < a2[0] ? -l2 - (a2[0] - t4) / r2 : (t4 - a2[n3 - 1]) / r2 + n3 - l2;
              }
            }
            return e3 ? i3 : r2 * (i3 || 0) + s3.offset;
          }
          t3.compose = function(t4, e3, i3) {
            let a2 = t4.prototype;
            return a2.ordinal2lin || (a2.getTimeTicks = s2, a2.index2val = o2, a2.lin2val = g, a2.val2lin = M, a2.ordinal2lin = a2.val2lin, r(t4, "afterInit", m), r(t4, "foundExtremes", x), r(t4, "afterSetScale", y), r(t4, "initialAxisTranslation", b), r(i3, "pan", v), r(e3, "updatedData", S)), t4;
          };
          class k {
            constructor(t4) {
              this.index = {}, this.axis = t4;
            }
            beforeSetTickPositions() {
              let t4 = this.axis, e3 = t4.ordinal, i3 = t4.getExtremes(), s3 = i3.min, o3 = i3.max, r2 = t4.brokenAxis?.hasBreaks, a2 = t4.options.ordinal, n2, l2, h2, d2, p2, u2, g2, f2 = [], m2 = Number.MAX_VALUE, x2 = false, y2 = false, b2 = false;
              if (a2 || r2) {
                let i4 = 0;
                if (t4.series.forEach(function(t5, e4) {
                  if (l2 = [], e4 > 0 && "highcharts-navigator-series" !== t5.options.id && t5.processedXData.length > 1 && (y2 = i4 !== t5.processedXData[1] - t5.processedXData[0]), i4 = t5.processedXData[1] - t5.processedXData[0], t5.boosted && (b2 = t5.boosted), t5.reserveSpace() && (false !== t5.takeOrdinalPosition || r2) && (n2 = (f2 = f2.concat(t5.processedXData)).length, f2.sort(function(t6, e5) {
                    return t6 - e5;
                  }), m2 = Math.min(m2, c(t5.closestPointRange, m2)), n2)) {
                    for (e4 = 0; e4 < n2 - 1; )
                      f2[e4] !== f2[e4 + 1] && l2.push(f2[e4 + 1]), e4++;
                    l2[0] !== f2[0] && l2.unshift(f2[0]), f2 = l2;
                  }
                }), t4.ordinal.originalOrdinalRange || (t4.ordinal.originalOrdinalRange = (f2.length - 1) * m2), y2 && b2 && (f2.pop(), f2.shift()), (n2 = f2.length) > 2) {
                  for (h2 = f2[1] - f2[0], g2 = n2 - 1; g2-- && !x2; )
                    f2[g2 + 1] - f2[g2] !== h2 && (x2 = true);
                  !t4.options.keepOrdinalPadding && (f2[0] - s3 > h2 || o3 - f2[f2.length - 1] > h2) && (x2 = true);
                } else
                  t4.options.overscroll && (2 === n2 ? m2 = f2[1] - f2[0] : 1 === n2 ? (m2 = t4.ordinal.convertOverscroll(t4.options.overscroll), f2 = [f2[0], f2[0] + m2]) : m2 = e3.overscrollPointsRange);
                x2 || t4.forceOrdinal ? (t4.options.overscroll && (e3.overscrollPointsRange = m2, f2 = f2.concat(e3.getOverscrollPositions())), e3.positions = f2, d2 = t4.ordinal2lin(Math.max(s3, f2[0]), true), p2 = Math.max(t4.ordinal2lin(Math.min(o3, f2[f2.length - 1]), true), 1), e3.slope = u2 = (o3 - s3) / (p2 - d2), e3.offset = s3 - d2 * u2) : (e3.overscrollPointsRange = c(t4.closestPointRange, e3.overscrollPointsRange), e3.positions = t4.ordinal.slope = e3.offset = void 0);
              }
              t4.isOrdinal = a2 && x2, e3.groupIntervalFactor = null;
            }
            static findIndexOf(t4, e3, i3) {
              let s3 = 0, o3 = t4.length - 1, r2;
              for (; s3 < o3; )
                t4[r2 = Math.ceil((s3 + o3) / 2)] <= e3 ? s3 = r2 : o3 = r2 - 1;
              return t4[s3] === e3 ? s3 : i3 ? s3 : -1;
            }
            getExtendedPositions(t4 = true) {
              let s3 = this, o3 = s3.axis, r2 = o3.constructor.prototype, a2 = o3.chart, n2 = o3.series[0]?.currentDataGrouping, l2 = n2 ? n2.count + n2.unitName : "raw", h2 = t4 ? o3.ordinal.convertOverscroll(o3.options.overscroll) : 0, d2 = o3.getExtremes(), c2, p2, u2 = s3.index;
              return u2 || (u2 = s3.index = {}), u2[l2] || ((c2 = { series: [], chart: a2, forceOrdinal: false, getExtremes: function() {
                return { min: d2.dataMin, max: d2.dataMax + h2 };
              }, applyGrouping: r2.applyGrouping, getGroupPixelWidth: r2.getGroupPixelWidth, getTimeTicks: r2.getTimeTicks, options: { ordinal: true }, ordinal: { getGroupIntervalFactor: this.getGroupIntervalFactor }, ordinal2lin: r2.ordinal2lin, getIndexOfPoint: r2.getIndexOfPoint, val2lin: r2.val2lin }).ordinal.axis = c2, o3.series.forEach(function(o4) {
                p2 = { xAxis: c2, xData: o4.xData.slice(), chart: a2, groupPixelWidth: o4.groupPixelWidth, destroyGroupedData: e2.noop, getProcessedData: i2.prototype.getProcessedData, applyGrouping: i2.prototype.applyGrouping, reserveSpace: i2.prototype.reserveSpace, visible: o4.visible }, t4 && (p2.xData = p2.xData.concat(s3.getOverscrollPositions())), p2.options = { dataGrouping: n2 ? { firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", enabled: true, forced: true, approximation: "open", units: [[n2.unitName, [n2.count]]] } : { enabled: false } }, c2.series.push(p2), o4.processData.apply(p2);
              }), c2.applyGrouping({ hasExtremesChanged: true }), p2?.closestPointRange !== p2?.basePointRange && p2.currentDataGrouping && (c2.forceOrdinal = true), o3.ordinal.beforeSetTickPositions.apply({ axis: c2 }), !o3.ordinal.originalOrdinalRange && c2.ordinal.originalOrdinalRange && (o3.ordinal.originalOrdinalRange = c2.ordinal.originalOrdinalRange), u2[l2] = c2.ordinal.positions), u2[l2];
            }
            getGroupIntervalFactor(t4, e3, i3) {
              let s3 = i3.processedXData, o3 = s3.length, r2 = [], a2, n2, l2 = this.groupIntervalFactor;
              if (!l2) {
                for (n2 = 0; n2 < o3 - 1; n2++)
                  r2[n2] = s3[n2 + 1] - s3[n2];
                r2.sort(function(t5, e4) {
                  return t5 - e4;
                }), a2 = r2[Math.floor(o3 / 2)], t4 = Math.max(t4, s3[0]), e3 = Math.min(e3, s3[o3 - 1]), this.groupIntervalFactor = l2 = o3 * a2 / (e3 - t4);
              }
              return l2;
            }
            getIndexOfPoint(t4, e3) {
              let i3;
              let s3 = this.axis, o3 = 0, r2 = function(t5) {
                let { min: e4, max: i4 } = s3;
                return !!(l(e4) && l(i4)) && t5.points.some((t6) => t6.x >= e4 && t6.x <= i4);
              };
              s3.series.forEach((t5) => {
                let e4 = t5.points?.[0];
                l(e4?.plotX) && (e4.plotX < i3 || !l(i3)) && r2(t5) && (i3 = e4.plotX, o3 = e4.x);
              }), i3 ?? (i3 = s3.minPixelPadding);
              let n2 = s3.translationSlope * (this.slope || s3.closestPointRange || this.overscrollPointsRange), h2 = a((t4 - i3) / n2);
              return k.findIndexOf(e3, o3, true) + h2;
            }
            getOverscrollPositions() {
              let t4 = this.axis, e3 = this.convertOverscroll(t4.options.overscroll), i3 = this.overscrollPointsRange, s3 = [], o3 = t4.dataMax;
              if (l(i3))
                for (; o3 <= t4.dataMax + e3; )
                  s3.push(o3 += i3);
              return s3;
            }
            postProcessTickInterval(t4) {
              let e3 = this.axis, i3 = this.slope;
              return i3 ? e3.options.breaks ? e3.closestPointRange || t4 : t4 / (i3 / e3.closestPointRange) : t4;
            }
            convertOverscroll(t4 = 0) {
              let e3 = this, i3 = e3.axis, s3 = function(t5) {
                return c(e3.originalOrdinalRange, l(i3.dataMax) && l(i3.dataMin) ? i3.dataMax - i3.dataMin : 0) * t5;
              };
              if (u(t4)) {
                let e4 = parseInt(t4, 10);
                if (/%$/.test(t4))
                  return s3(e4 / 100);
                if (/px/.test(t4)) {
                  let t5 = Math.min(e4, 0.9 * i3.len) / i3.len;
                  return s3(t5 / (1 - t5));
                }
                return 0;
              }
              return t4;
            }
          }
          t3.Additions = k;
        }(o || (o = {})), o;
      }), i(e, "Stock/RangeSelector/RangeSelectorDefaults.js", [], function() {
        return { lang: { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "", rangeSelectorTo: "→" }, rangeSelector: { allButtonsEnabled: false, buttons: void 0, buttonSpacing: 5, dropdown: "responsive", enabled: void 0, verticalAlign: "top", buttonTheme: { width: 28, height: 18, padding: 2, zIndex: 7 }, floating: false, x: 0, y: 0, height: void 0, inputBoxBorderColor: "none", inputBoxHeight: 17, inputBoxWidth: void 0, inputDateFormat: "%e %b %Y", inputDateParser: void 0, inputEditDateFormat: "%Y-%m-%d", inputEnabled: true, inputPosition: { align: "right", x: 0, y: 0 }, inputSpacing: 5, selected: void 0, buttonPosition: { align: "left", x: 0, y: 0 }, inputStyle: { color: "#334eff", cursor: "pointer", fontSize: "0.8em" }, labelStyle: { color: "#666666", fontSize: "0.8em" } } };
      }), i(e, "Stock/RangeSelector/RangeSelectorComposition.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Stock/RangeSelector/RangeSelectorDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let o;
        let { defaultOptions: r } = t2, { composed: a } = e2, { addEvent: n, defined: l, extend: h, find: d, isNumber: c, merge: p, pick: u, pushUnique: g } = s, f = [];
        function m() {
          let t3, e3;
          let i3 = this.range, s2 = i3.type, o2 = this.max, r2 = this.chart.time, a2 = function(t4, e4) {
            let i4 = "year" === s2 ? "FullYear" : "Month", o3 = new r2.Date(t4), a3 = r2.get(i4, o3);
            return r2.set(i4, o3, a3 + e4), a3 === r2.get(i4, o3) && r2.set("Date", o3, 0), o3.getTime() - t4;
          };
          c(i3) ? (t3 = o2 - i3, e3 = i3) : i3 && (t3 = o2 + a2(o2, -(i3.count || 1)), this.chart && this.chart.setFixedRange(o2 - t3));
          let n2 = u(this.dataMin, Number.MIN_VALUE);
          return c(t3) || (t3 = n2), t3 <= n2 && (t3 = n2, void 0 === e3 && (e3 = a2(t3, i3.count)), this.newMax = Math.min(t3 + e3, u(this.dataMax, Number.MAX_VALUE))), c(o2) ? !c(i3) && i3 && i3._offsetMin && (t3 += i3._offsetMin) : t3 = void 0, t3;
        }
        function x() {
          this.options.rangeSelector && this.options.rangeSelector.enabled && (this.rangeSelector = new o(this));
        }
        function y() {
          let t3 = this.axes, e3 = this.rangeSelector;
          if (e3) {
            c(e3.deferredYTDClick) && (e3.clickButton(e3.deferredYTDClick), delete e3.deferredYTDClick), t3.forEach((t4) => {
              t4.updateNames(), t4.setScale();
            }), this.getAxisMargins(), e3.render();
            let i3 = e3.options.verticalAlign;
            e3.options.floating || ("bottom" === i3 ? this.extraBottomMargin = true : "middle" === i3 || (this.extraTopMargin = true));
          }
        }
        function b(t3) {
          let e3, i3, s2, o2;
          let r2 = t3.rangeSelector, a2 = () => {
            r2 && (e3 = t3.xAxis[0].getExtremes(), i3 = t3.legend, o2 = r2 && r2.options.verticalAlign, c(e3.min) && r2.render(e3.min, e3.max), i3.display && "top" === o2 && o2 === i3.options.verticalAlign && (s2 = p(t3.spacingBox), "vertical" === i3.options.layout ? s2.y = t3.plotTop : s2.y += r2.getHeight(), i3.group.placed = false, i3.align(s2)));
          };
          r2 && (d(f, (e4) => e4[0] === t3) || f.push([t3, [n(t3.xAxis[0], "afterSetExtremes", function(t4) {
            r2 && r2.render(t4.min, t4.max);
          }), n(t3, "redraw", a2)]]), a2());
        }
        function v() {
          for (let t3 = 0, e3 = f.length; t3 < e3; ++t3) {
            let e4 = f[t3];
            if (e4[0] === this) {
              e4[1].forEach((t4) => t4()), f.splice(t3, 1);
              return;
            }
          }
        }
        function S() {
          let t3 = this.rangeSelector;
          if (t3) {
            let e3 = t3.getHeight();
            this.extraTopMargin && (this.plotTop += e3), this.extraBottomMargin && (this.marginBottom += e3);
          }
        }
        function M() {
          let t3 = this.rangeSelector;
          if (t3 && !t3.options.floating) {
            t3.render();
            let e3 = t3.options.verticalAlign;
            "bottom" === e3 ? this.extraBottomMargin = true : "middle" !== e3 && (this.extraTopMargin = true);
          }
        }
        function k(t3) {
          let e3 = t3.options.rangeSelector, i3 = this.extraBottomMargin, s2 = this.extraTopMargin, r2 = this.rangeSelector;
          if (e3 && e3.enabled && !l(r2) && this.options.rangeSelector && (this.options.rangeSelector.enabled = true, this.rangeSelector = r2 = new o(this)), this.extraBottomMargin = false, this.extraTopMargin = false, r2) {
            b(this);
            let t4 = e3 && e3.verticalAlign || r2.options && r2.options.verticalAlign;
            r2.options.floating || ("bottom" === t4 ? this.extraBottomMargin = true : "middle" === t4 || (this.extraTopMargin = true)), (this.extraBottomMargin !== i3 || this.extraTopMargin !== s2) && (this.isDirtyBox = true);
          }
        }
        return { compose: function(t3, e3, s2) {
          if (o = s2, g(a, "RangeSelector")) {
            let s3 = e3.prototype;
            t3.prototype.minFromRange = m, n(e3, "afterGetContainer", x), n(e3, "beforeRender", y), n(e3, "destroy", v), n(e3, "getMargins", S), n(e3, "render", M), n(e3, "update", k), s3.callbacks.push(b), h(r, { rangeSelector: i2.rangeSelector }), h(r.lang, i2.lang);
          }
        } };
      }), i(e, "Stock/RangeSelector/RangeSelector.js", [e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Stock/RangeSelector/RangeSelectorComposition.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(e2, i2, s, o, r, a) {
        let { defaultOptions: n } = i2, { addEvent: l, createElement: h, css: d, defined: c, destroyObjectProperties: p, discardElement: u, extend: g, fireEvent: f, isNumber: m, merge: x, objectEach: y, pad: b, pick: v, pInt: S, splat: M } = a;
        class k {
          static compose(t2, e3) {
            o.compose(t2, e3, k);
          }
          constructor(t2) {
            this.buttonOptions = k.prototype.defaultButtons, this.initialButtonGroupWidth = 0, this.chart = t2, this.init(t2);
          }
          clickButton(t2, i3) {
            let s2 = this.chart, o2 = this.buttonOptions[t2], r2 = s2.xAxis[0], a2 = s2.scroller && s2.scroller.getUnionExtremes() || r2 || {}, n2 = o2.type, h2 = o2.dataGrouping, d2 = a2.dataMin, p2 = a2.dataMax, u2, g2 = r2 && Math.round(Math.min(r2.max, v(p2, r2.max))), x2, y2 = o2._range, b2, S2, k2, C, A, w = true;
            if (null !== d2 && null !== p2) {
              if (this.setSelected(t2), h2 && (this.forcedDataGrouping = true, e2.prototype.setDataGrouping.call(r2 || { chart: this.chart }, h2, false), this.frozenStates = o2.preserveDataGrouping), "month" === n2 || "year" === n2)
                r2 ? (C = { range: o2, max: g2, chart: s2, dataMin: d2, dataMax: p2 }, u2 = r2.minFromRange.call(C), m(C.newMax) && (g2 = C.newMax), w = false) : y2 = o2;
              else if (y2)
                g2 = Math.min((u2 = Math.max(g2 - y2, d2)) + y2, p2), w = false;
              else if ("ytd" === n2) {
                if (r2)
                  (void 0 === p2 || void 0 === d2) && (d2 = Number.MAX_VALUE, p2 = Number.MIN_VALUE, s2.series.forEach((t3) => {
                    let e3 = t3.xData;
                    e3 && (d2 = Math.min(e3[0], d2), p2 = Math.max(e3[e3.length - 1], p2));
                  }), i3 = false), u2 = b2 = (A = this.getYTDExtremes(p2, d2, s2.time.useUTC)).min, g2 = A.max;
                else {
                  this.deferredYTDClick = t2;
                  return;
                }
              } else
                "all" === n2 && r2 && (s2.navigator && s2.navigator.baseSeries[0] && (s2.navigator.baseSeries[0].xAxis.options.range = void 0), u2 = d2, g2 = p2);
              w && o2._offsetMin && c(u2) && (u2 += o2._offsetMin), o2._offsetMax && c(g2) && (g2 += o2._offsetMax), this.dropdown && (this.dropdown.selectedIndex = t2 + 1), r2 ? (r2.setExtremes(u2, g2, v(i3, true), void 0, { trigger: "rangeSelectorButton", rangeSelectorButton: o2 }), s2.setFixedRange(o2._range)) : (k2 = (x2 = M(s2.options.xAxis)[0]).range, x2.range = y2, S2 = x2.min, x2.min = b2, l(s2, "load", function() {
                s2.setFixedRange(o2._range), x2.range = k2, x2.min = S2;
              })), f(this, "afterBtnClick");
            }
          }
          setSelected(t2) {
            this.selected = this.options.selected = t2;
          }
          init(t2) {
            let e3 = this, i3 = t2.options.rangeSelector, s2 = i3.buttons || e3.defaultButtons.slice(), o2 = i3.selected, r2 = function() {
              let t3 = e3.minInput, i4 = e3.maxInput;
              t3 && t3.blur && f(t3, "blur"), i4 && i4.blur && f(i4, "blur");
            };
            e3.chart = t2, e3.options = i3, e3.buttons = [], e3.buttonOptions = s2, this.eventsToUnbind = [], this.eventsToUnbind.push(l(t2.container, "mousedown", r2)), this.eventsToUnbind.push(l(t2, "resize", r2)), s2.forEach(e3.computeButtonRange), void 0 !== o2 && s2[o2] && this.clickButton(o2, false), this.eventsToUnbind.push(l(t2, "load", function() {
              t2.xAxis && t2.xAxis[0] && l(t2.xAxis[0], "setExtremes", function(i4) {
                m(this.max) && m(this.min) && this.max - this.min !== t2.fixedRange && "rangeSelectorButton" !== i4.trigger && "updatedData" !== i4.trigger && e3.forcedDataGrouping && !e3.frozenStates && this.setDataGrouping(false, false);
              });
            }));
          }
          updateButtonStates() {
            let t2 = this, e3 = this.chart, i3 = this.dropdown, s2 = e3.xAxis[0], o2 = Math.round(s2.max - s2.min), r2 = !s2.hasVisibleSeries, a2 = 24 * 36e5, n2 = e3.scroller && e3.scroller.getUnionExtremes() || s2, l2 = n2.dataMin, h2 = n2.dataMax, d2 = t2.getYTDExtremes(h2, l2, e3.time.useUTC), p2 = d2.min, u2 = d2.max, g2 = t2.selected, f2 = t2.options.allButtonsEnabled, x2 = t2.buttons, y2 = m(g2), b2 = false;
            t2.buttonOptions.forEach((e4, n3) => {
              let d3 = e4._range, m2 = e4.type, v2 = e4.count || 1, S2 = x2[n3], M2 = e4._offsetMax - e4._offsetMin, k2 = n3 === g2, C = d3 > h2 - l2, A = d3 < s2.minRange, w = 0, T = false, P = false, L = d3 === o2;
              if (k2 && C && (b2 = true), s2.isOrdinal && s2.ordinal?.positions && d3 && o2 < d3) {
                let t3 = s2.ordinal.positions;
                t3[t3.length - 1] - t3[0] > d3 && (L = true);
              } else
                ("month" === m2 || "year" === m2) && o2 + 36e5 >= { month: 28, year: 365 }[m2] * a2 * v2 - M2 && o2 - 36e5 <= { month: 31, year: 366 }[m2] * a2 * v2 + M2 ? L = true : "ytd" === m2 ? (L = u2 - p2 + M2 === o2, T = !k2) : "all" === m2 && (L = s2.max - s2.min >= h2 - l2, P = !k2 && y2 && L);
              let O = !f2 && !(b2 && "all" === m2) && (C || A || P || r2), D = b2 && "all" === m2 || k2 && L || L && !y2 && !T || k2 && t2.frozenStates;
              O ? w = 3 : D && (y2 = true, w = 2), S2.state !== w && (S2.setState(w), i3 && (i3.options[n3 + 1].disabled = O, 2 === w && (i3.selectedIndex = n3 + 1)), 0 === w && g2 === n3 ? t2.setSelected() : (2 === w && !c(g2) || b2) && t2.setSelected(n3));
            });
          }
          computeButtonRange(t2) {
            let e3 = t2.type, i3 = t2.count || 1, s2 = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5 };
            s2[e3] ? t2._range = s2[e3] * i3 : ("month" === e3 || "year" === e3) && (t2._range = 24 * { month: 30, year: 365 }[e3] * 36e5 * i3), t2._offsetMin = v(t2.offsetMin, 0), t2._offsetMax = v(t2.offsetMax, 0), t2._range += t2._offsetMax - t2._offsetMin;
          }
          getInputValue(t2) {
            let e3 = "min" === t2 ? this.minInput : this.maxInput, i3 = this.chart.options.rangeSelector, s2 = this.chart.time;
            return e3 ? ("text" === e3.type && i3.inputDateParser || this.defaultInputDateParser)(e3.value, s2.useUTC, s2) : 0;
          }
          setInputValue(t2, e3) {
            let i3 = this.options, s2 = this.chart.time, o2 = "min" === t2 ? this.minInput : this.maxInput, r2 = "min" === t2 ? this.minDateBox : this.maxDateBox;
            if (o2) {
              let t3 = o2.getAttribute("data-hc-time"), a2 = c(t3) ? Number(t3) : void 0;
              if (c(e3)) {
                let t4 = a2;
                c(t4) && o2.setAttribute("data-hc-time-previous", t4), o2.setAttribute("data-hc-time", e3), a2 = e3;
              }
              o2.value = s2.dateFormat(this.inputTypeFormats[o2.type] || i3.inputEditDateFormat, a2), r2 && r2.attr({ text: s2.dateFormat(i3.inputDateFormat, a2) });
            }
          }
          setInputExtremes(t2, e3, i3) {
            let s2 = "min" === t2 ? this.minInput : this.maxInput;
            if (s2) {
              let t3 = this.inputTypeFormats[s2.type], o2 = this.chart.time;
              if (t3) {
                let r2 = o2.dateFormat(t3, e3);
                s2.min !== r2 && (s2.min = r2);
                let a2 = o2.dateFormat(t3, i3);
                s2.max !== a2 && (s2.max = a2);
              }
            }
          }
          showInput(t2) {
            let e3 = "min" === t2 ? this.minDateBox : this.maxDateBox, i3 = "min" === t2 ? this.minInput : this.maxInput;
            if (i3 && e3 && this.inputGroup) {
              let t3 = "text" === i3.type, { translateX: s2 = 0, translateY: o2 = 0 } = this.inputGroup, { x: r2 = 0, width: a2 = 0, height: n2 = 0 } = e3, { inputBoxWidth: l2 } = this.options;
              d(i3, { width: t3 ? a2 + (l2 ? -2 : 20) + "px" : "auto", height: n2 - 2 + "px", border: "2px solid silver" }), t3 && l2 ? d(i3, { left: s2 + r2 + "px", top: o2 + "px" }) : d(i3, { left: Math.min(Math.round(r2 + s2 - (i3.offsetWidth - a2) / 2), this.chart.chartWidth - i3.offsetWidth) + "px", top: o2 - (i3.offsetHeight - n2) / 2 + "px" });
            }
          }
          hideInput(t2) {
            let e3 = "min" === t2 ? this.minInput : this.maxInput;
            e3 && d(e3, { top: "-9999em", border: 0, width: "1px", height: "1px" });
          }
          defaultInputDateParser(t2, e3, i3) {
            let o2 = t2.split("/").join("-").split(" ").join("T");
            if (-1 === o2.indexOf("T") && (o2 += "T00:00"), e3)
              o2 += "Z";
            else {
              let t3;
              if (s.isSafari && !((t3 = o2).length > 6 && (t3.lastIndexOf("-") === t3.length - 6 || t3.lastIndexOf("+") === t3.length - 6))) {
                let t4 = new Date(o2).getTimezoneOffset() / 60;
                o2 += t4 <= 0 ? `+${b(-t4)}:00` : `-${b(t4)}:00`;
              }
            }
            let r2 = Date.parse(o2);
            if (!m(r2)) {
              let e4 = t2.split("-");
              r2 = Date.UTC(S(e4[0]), S(e4[1]) - 1, S(e4[2]));
            }
            return i3 && e3 && m(r2) && (r2 += i3.getTimezoneOffset(r2)), r2;
          }
          drawInput(t2) {
            let { chart: e3, div: i3, inputGroup: o2 } = this, r2 = this, a2 = e3.renderer.style || {}, l2 = e3.renderer, c2 = e3.options.rangeSelector, p2 = n.lang, u2 = "min" === t2;
            function f2() {
              let { maxInput: i4, minInput: s2 } = r2, o3 = e3.xAxis[0], a3 = e3.scroller && e3.scroller.getUnionExtremes() || o3, n2 = a3.dataMin, l3 = a3.dataMax, h2 = r2.getInputValue(t2);
              h2 !== Number(S2.getAttribute("data-hc-time-previous")) && m(h2) && (S2.setAttribute("data-hc-time-previous", h2), u2 && i4 && m(n2) ? h2 > Number(i4.getAttribute("data-hc-time")) ? h2 = void 0 : h2 < n2 && (h2 = n2) : s2 && m(l3) && (h2 < Number(s2.getAttribute("data-hc-time")) ? h2 = void 0 : h2 > l3 && (h2 = l3)), void 0 !== h2 && o3.setExtremes(u2 ? h2 : o3.min, u2 ? o3.max : h2, void 0, void 0, { trigger: "rangeSelectorInput" }));
            }
            let y2 = p2[u2 ? "rangeSelectorFrom" : "rangeSelectorTo"] || "", b2 = l2.label(y2, 0).addClass("highcharts-range-label").attr({ padding: y2 ? 2 : 0, height: y2 ? c2.inputBoxHeight : 0 }).add(o2), v2 = l2.label("", 0).addClass("highcharts-range-input").attr({ padding: 2, width: c2.inputBoxWidth, height: c2.inputBoxHeight, "text-align": "center" }).on("click", function() {
              r2.showInput(t2), r2[t2 + "Input"].focus();
            });
            e3.styledMode || v2.attr({ stroke: c2.inputBoxBorderColor, "stroke-width": 1 }), v2.add(o2);
            let S2 = h("input", { name: t2, className: "highcharts-range-selector" }, void 0, i3);
            S2.setAttribute("type", function(t3) {
              if (-1 !== t3.indexOf("%L"))
                return "text";
              let e4 = ["a", "A", "d", "e", "w", "b", "B", "m", "o", "y", "Y"].some((e5) => -1 !== t3.indexOf("%" + e5)), i4 = ["H", "k", "I", "l", "M", "S"].some((e5) => -1 !== t3.indexOf("%" + e5));
              return e4 && i4 ? "datetime-local" : e4 ? "date" : i4 ? "time" : "text";
            }(c2.inputDateFormat || "%e %b %Y")), e3.styledMode || (b2.css(x(a2, c2.labelStyle)), v2.css(x({ color: "#333333" }, a2, c2.inputStyle)), d(S2, g({ position: "absolute", border: 0, boxShadow: "0 0 15px rgba(0,0,0,0.3)", width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: a2.fontSize, fontFamily: a2.fontFamily, top: "-9999em" }, c2.inputStyle))), S2.onfocus = () => {
              r2.showInput(t2);
            }, S2.onblur = () => {
              S2 === s.doc.activeElement && f2(), r2.hideInput(t2), r2.setInputValue(t2), S2.blur();
            };
            let M2 = false;
            return S2.onchange = () => {
              M2 || (f2(), r2.hideInput(t2), S2.blur());
            }, S2.onkeypress = (t3) => {
              13 === t3.keyCode && f2();
            }, S2.onkeydown = (t3) => {
              M2 = true, (38 === t3.keyCode || 40 === t3.keyCode) && f2();
            }, S2.onkeyup = () => {
              M2 = false;
            }, { dateBox: v2, input: S2, label: b2 };
          }
          getPosition() {
            let t2 = this.chart, e3 = t2.options.rangeSelector, i3 = "top" === e3.verticalAlign ? t2.plotTop - t2.axisOffset[0] : 0;
            return { buttonTop: i3 + e3.buttonPosition.y, inputTop: i3 + e3.inputPosition.y - 10 };
          }
          getYTDExtremes(t2, e3, i3) {
            let s2 = this.chart.time, o2 = new s2.Date(t2), r2 = s2.get("FullYear", o2), a2 = Math.max(e3, i3 ? s2.Date.UTC(r2, 0, 1) : +new s2.Date(r2, 0, 1)), n2 = o2.getTime();
            return { max: Math.min(t2 || n2, n2), min: a2 };
          }
          render(t2, e3) {
            let i3 = this.chart, s2 = i3.renderer, o2 = i3.container, r2 = i3.options, a2 = r2.rangeSelector, n2 = v(r2.chart.style && r2.chart.style.zIndex, 0) + 1, l2 = a2.inputEnabled, d2 = this.rendered;
            if (false !== a2.enabled) {
              if (!d2 && (this.group = s2.g("range-selector-group").attr({ zIndex: 7 }).add(), this.div = h("div", void 0, { position: "relative", height: 0, zIndex: n2 }), this.buttonOptions.length && this.renderButtons(), o2.parentNode && o2.parentNode.insertBefore(this.div, o2), l2)) {
                this.inputGroup = s2.g("input-group").add(this.group);
                let t3 = this.drawInput("min");
                this.minDateBox = t3.dateBox, this.minLabel = t3.label, this.minInput = t3.input;
                let e4 = this.drawInput("max");
                this.maxDateBox = e4.dateBox, this.maxLabel = e4.label, this.maxInput = e4.input;
              }
              if (l2) {
                this.setInputValue("min", t2), this.setInputValue("max", e3);
                let s3 = i3.scroller && i3.scroller.getUnionExtremes() || i3.xAxis[0] || {};
                if (c(s3.dataMin) && c(s3.dataMax)) {
                  let t3 = i3.xAxis[0].minRange || 0;
                  this.setInputExtremes("min", s3.dataMin, Math.min(s3.dataMax, this.getInputValue("max")) - t3), this.setInputExtremes("max", Math.max(s3.dataMin, this.getInputValue("min")) + t3, s3.dataMax);
                }
                if (this.inputGroup) {
                  let t3 = 0;
                  [this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach((e4) => {
                    if (e4) {
                      let { width: i4 } = e4.getBBox();
                      i4 && (e4.attr({ x: t3 }), t3 += i4 + a2.inputSpacing);
                    }
                  });
                }
              }
              this.alignElements(), this.rendered = true;
            }
          }
          renderButtons() {
            let { buttons: t2, chart: e3, options: i3 } = this, o2 = n.lang, r2 = e3.renderer, a2 = x(i3.buttonTheme), d2 = a2 && a2.states, c2 = a2.width || 28;
            delete a2.width, delete a2.states, this.buttonGroup = r2.g("range-selector-buttons").add(this.group);
            let p2 = this.dropdown = h("select", void 0, { position: "absolute", width: "1px", height: "1px", padding: 0, border: 0, top: "-9999em", cursor: "pointer", opacity: 1e-4 }, this.div);
            l(p2, "touchstart", () => {
              p2.style.fontSize = "16px";
            }), [[s.isMS ? "mouseover" : "mouseenter"], [s.isMS ? "mouseout" : "mouseleave"], ["change", "click"]].forEach(([e4, i4]) => {
              l(p2, e4, () => {
                let s2 = t2[this.currentButtonIndex()];
                s2 && f(s2.element, i4 || e4);
              });
            }), this.zoomText = r2.label(o2 && o2.rangeSelectorZoom || "", 0).attr({ padding: i3.buttonTheme.padding, height: i3.buttonTheme.height, paddingLeft: 0, paddingRight: 0 }).add(this.buttonGroup), this.chart.styledMode || (this.zoomText.css(i3.labelStyle), a2["stroke-width"] = v(a2["stroke-width"], 0)), h("option", { textContent: this.zoomText.textStr, disabled: true }, void 0, p2), this.buttonOptions.forEach((e4, i4) => {
              h("option", { textContent: e4.title || e4.text }, void 0, p2), t2[i4] = r2.button(e4.text, 0, 0, (t3) => {
                let s2;
                let o3 = e4.events && e4.events.click;
                o3 && (s2 = o3.call(e4, t3)), false !== s2 && this.clickButton(i4), this.isActive = true;
              }, a2, d2 && d2.hover, d2 && d2.select, d2 && d2.disabled).attr({ "text-align": "center", width: c2 }).add(this.buttonGroup), e4.title && t2[i4].attr("title", e4.title);
            });
          }
          alignElements() {
            let { buttonGroup: t2, buttons: e3, chart: i3, group: s2, inputGroup: o2, options: r2, zoomText: a2 } = this, n2 = i3.options, l2 = n2.exporting && false !== n2.exporting.enabled && n2.navigation && n2.navigation.buttonOptions, { buttonPosition: h2, inputPosition: d2, verticalAlign: c2 } = r2, p2 = (t3, e4) => l2 && this.titleCollision(i3) && "top" === c2 && "right" === e4.align && e4.y - t3.getBBox().height - 12 < (l2.y || 0) + (l2.height || 0) + i3.spacing[0] ? -40 : 0, u2 = i3.plotLeft;
            if (s2 && h2 && d2) {
              let n3 = h2.x - i3.spacing[3];
              if (t2) {
                if (this.positionButtons(), !this.initialButtonGroupWidth) {
                  let t3 = 0;
                  a2 && (t3 += a2.getBBox().width + 5), e3.forEach((i4, s3) => {
                    t3 += i4.width || 0, s3 !== e3.length - 1 && (t3 += r2.buttonSpacing);
                  }), this.initialButtonGroupWidth = t3;
                }
                u2 -= i3.spacing[3], this.updateButtonStates();
                let o3 = p2(t2, h2);
                this.alignButtonGroup(o3), s2.placed = t2.placed = i3.hasLoaded;
              }
              let l3 = 0;
              o2 && (l3 = p2(o2, d2), "left" === d2.align ? n3 = u2 : "right" === d2.align && (n3 = -Math.max(i3.axisOffset[1], -l3)), o2.align({ y: d2.y, width: o2.getBBox().width, align: d2.align, x: d2.x + n3 - 2 }, true, i3.spacingBox), o2.placed = i3.hasLoaded), this.handleCollision(l3), s2.align({ verticalAlign: c2 }, true, i3.spacingBox);
              let g2 = s2.alignAttr.translateY, f2 = s2.getBBox().height + 20, m2 = 0;
              if ("bottom" === c2) {
                let t3 = i3.legend && i3.legend.options;
                m2 = g2 - (f2 = f2 + (t3 && "bottom" === t3.verticalAlign && t3.enabled && !t3.floating ? i3.legend.legendHeight + v(t3.margin, 10) : 0) - 20) - (r2.floating ? 0 : r2.y) - (i3.titleOffset ? i3.titleOffset[2] : 0) - 10;
              }
              "top" === c2 ? (r2.floating && (m2 = 0), i3.titleOffset && i3.titleOffset[0] && (m2 = i3.titleOffset[0]), m2 += i3.margin[0] - i3.spacing[0] || 0) : "middle" === c2 && (d2.y === h2.y ? m2 = g2 : (d2.y || h2.y) && (d2.y < 0 || h2.y < 0 ? m2 -= Math.min(d2.y, h2.y) : m2 = g2 - f2)), s2.translate(r2.x, r2.y + Math.floor(m2));
              let { minInput: x2, maxInput: y2, dropdown: b2 } = this;
              r2.inputEnabled && x2 && y2 && (x2.style.marginTop = s2.translateY + "px", y2.style.marginTop = s2.translateY + "px"), b2 && (b2.style.marginTop = s2.translateY + "px");
            }
          }
          alignButtonGroup(t2, e3) {
            let { chart: i3, options: s2, buttonGroup: o2 } = this, { buttonPosition: r2 } = s2, a2 = i3.plotLeft - i3.spacing[3], n2 = r2.x - i3.spacing[3];
            "right" === r2.align ? n2 += t2 - a2 : "center" === r2.align && (n2 -= a2 / 2), o2 && o2.align({ y: r2.y, width: v(e3, this.initialButtonGroupWidth), align: r2.align, x: n2 }, true, i3.spacingBox);
          }
          positionButtons() {
            let { buttons: t2, chart: e3, options: i3, zoomText: s2 } = this, o2 = e3.hasLoaded ? "animate" : "attr", { buttonPosition: r2 } = i3, a2 = e3.plotLeft, n2 = a2;
            s2 && "hidden" !== s2.visibility && (s2[o2]({ x: v(a2 + r2.x, a2) }), n2 += r2.x + s2.getBBox().width + 5);
            for (let e4 = 0, s3 = this.buttonOptions.length; e4 < s3; ++e4)
              "hidden" !== t2[e4].visibility ? (t2[e4][o2]({ x: n2 }), n2 += (t2[e4].width || 0) + i3.buttonSpacing) : t2[e4][o2]({ x: a2 });
          }
          handleCollision(t2) {
            let { chart: e3, buttonGroup: i3, inputGroup: s2 } = this, { buttonPosition: o2, dropdown: r2, inputPosition: a2 } = this.options, n2 = () => {
              let t3 = 0;
              return this.buttons.forEach((e4) => {
                let i4 = e4.getBBox();
                i4.width > t3 && (t3 = i4.width);
              }), t3;
            }, l2 = (e4) => {
              if (s2 && i3) {
                let r3 = s2.alignAttr.translateX + s2.alignOptions.x - t2 + s2.getBBox().x + 2, n3 = s2.alignOptions.width, l3 = i3.alignAttr.translateX + i3.getBBox().x;
                return l3 + e4 > r3 && r3 + n3 > l3 && o2.y < a2.y + s2.getBBox().height;
              }
              return false;
            }, h2 = () => {
              s2 && i3 && s2.attr({ translateX: s2.alignAttr.translateX + (e3.axisOffset[1] >= -t2 ? 0 : -t2), translateY: s2.alignAttr.translateY + i3.getBBox().height + 10 });
            };
            if (i3) {
              if ("always" === r2) {
                this.collapseButtons(t2), l2(n2()) && h2();
                return;
              }
              "never" === r2 && this.expandButtons();
            }
            s2 && i3 ? a2.align === o2.align || l2(this.initialButtonGroupWidth + 20) ? "responsive" === r2 ? (this.collapseButtons(t2), l2(n2()) && h2()) : h2() : "responsive" === r2 && this.expandButtons() : i3 && "responsive" === r2 && (this.initialButtonGroupWidth > e3.plotWidth ? this.collapseButtons(t2) : this.expandButtons());
          }
          collapseButtons(t2) {
            let { buttons: e3, buttonOptions: i3, chart: s2, dropdown: o2, options: r2, zoomText: a2 } = this;
            if (true === this.isCollapsed)
              return;
            this.isCollapsed = true;
            let n2 = s2.userOptions.rangeSelector && s2.userOptions.rangeSelector.buttonTheme || {}, l2 = (t3) => ({ text: t3 ? `${t3} ▾` : "▾", width: "auto", paddingLeft: v(r2.buttonTheme.paddingLeft, n2.padding, 8), paddingRight: v(r2.buttonTheme.paddingRight, n2.padding, 8) });
            a2 && a2.hide();
            let h2 = false;
            i3.forEach((t3, i4) => {
              let s3 = e3[i4];
              2 !== s3.state ? s3.hide() : (s3.show(), s3.attr(l2(t3.text)), h2 = true);
            }), h2 || (o2 && (o2.selectedIndex = 0), e3[0].show(), e3[0].attr(l2(this.zoomText && this.zoomText.textStr)));
            let { align: d2 } = r2.buttonPosition;
            this.positionButtons(), ("right" === d2 || "center" === d2) && this.alignButtonGroup(t2, e3[this.currentButtonIndex()].getBBox().width), this.showDropdown();
          }
          expandButtons() {
            let { buttons: t2, buttonOptions: e3, options: i3, zoomText: s2 } = this;
            this.hideDropdown(), false !== this.isCollapsed && (this.isCollapsed = false, s2 && s2.show(), e3.forEach((e4, s3) => {
              let o2 = t2[s3];
              o2.show(), o2.attr({ text: e4.text, width: i3.buttonTheme.width || 28, paddingLeft: v(i3.buttonTheme.paddingLeft, "unset"), paddingRight: v(i3.buttonTheme.paddingRight, "unset") }), o2.state < 2 && o2.setState(0);
            }), this.positionButtons());
          }
          currentButtonIndex() {
            let { dropdown: t2 } = this;
            return t2 && t2.selectedIndex > 0 ? t2.selectedIndex - 1 : 0;
          }
          showDropdown() {
            let { buttonGroup: t2, buttons: e3, chart: i3, dropdown: s2 } = this;
            if (t2 && s2) {
              let { translateX: o2 = 0, translateY: r2 = 0 } = t2, a2 = e3[this.currentButtonIndex()].getBBox();
              d(s2, { left: i3.plotLeft + o2 + "px", top: r2 + 0.5 + "px", width: a2.width + "px", height: a2.height + "px" }), this.hasVisibleDropdown = true;
            }
          }
          hideDropdown() {
            let { dropdown: t2 } = this;
            t2 && (d(t2, { top: "-9999em", width: "1px", height: "1px" }), this.hasVisibleDropdown = false);
          }
          getHeight() {
            let t2 = this.options, e3 = this.group, i3 = t2.inputPosition, s2 = t2.buttonPosition, o2 = t2.y, r2 = s2.y, a2 = i3.y, n2 = 0;
            if (t2.height)
              return t2.height;
            this.alignElements(), n2 = e3 ? e3.getBBox(true).height + 13 + o2 : 0;
            let l2 = Math.min(a2, r2);
            return (a2 < 0 && r2 < 0 || a2 > 0 && r2 > 0) && (n2 += Math.abs(l2)), n2;
          }
          titleCollision(t2) {
            return !(t2.options.title.text || t2.options.subtitle.text);
          }
          update(t2) {
            let e3 = this.chart;
            x(true, e3.options.rangeSelector, t2), this.destroy(), this.init(e3), this.render();
          }
          destroy() {
            let e3 = this, i3 = e3.minInput, s2 = e3.maxInput;
            e3.eventsToUnbind && (e3.eventsToUnbind.forEach((t2) => t2()), e3.eventsToUnbind = void 0), p(e3.buttons), i3 && (i3.onfocus = i3.onblur = i3.onchange = null), s2 && (s2.onfocus = s2.onblur = s2.onchange = null), y(e3, function(i4, s3) {
              i4 && "chart" !== s3 && (i4 instanceof r ? i4.destroy() : i4 instanceof t.HTMLElement && u(i4)), i4 !== k.prototype[s3] && (e3[s3] = null);
            }, this);
          }
        }
        return g(k.prototype, { defaultButtons: [{ type: "month", count: 1, text: "1m", title: "View 1 month" }, { type: "month", count: 3, text: "3m", title: "View 3 months" }, { type: "month", count: 6, text: "6m", title: "View 6 months" }, { type: "ytd", text: "YTD", title: "View year to date" }, { type: "year", count: 1, text: "1y", title: "View 1 year" }, { type: "all", text: "All", title: "View all" }], inputTypeFormats: { "datetime-local": "%Y-%m-%dT%H:%M:%S", date: "%Y-%m-%d", time: "%H:%M:%S" } }), k;
      }), i(e, "Core/Chart/StockChart.js", [e["Core/Chart/Chart.js"], e["Core/Templating.js"], e["Core/Defaults.js"], e["Stock/Navigator/NavigatorDefaults.js"], e["Stock/RangeSelector/RangeSelectorDefaults.js"], e["Stock/Scrollbar/ScrollbarDefaults.js"], e["Stock/Utilities/StockUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
        let { format: l } = e2, { getOptions: h } = i2, { setFixedRange: d } = a, { addEvent: c, clamp: p, defined: u, extend: g, find: f, isNumber: m, isString: x, merge: y, pick: b, splat: v } = n;
        function S(t3, e3, i3) {
          return "xAxis" === t3 ? { minPadding: 0, maxPadding: 0, overscroll: 0, ordinal: true } : "yAxis" === t3 ? { labels: { y: -2 }, opposite: i3.opposite ?? e3.opposite ?? true, showLastLabel: !!(e3.categories || "category" === e3.type), title: { text: i3.title?.text !== "Values" ? i3.title?.text : null } } : {};
        }
        function M(t3, e3) {
          if ("xAxis" === t3) {
            let t4 = b(e3.navigator && e3.navigator.enabled, s.enabled, true), i3 = { type: "datetime", categories: void 0 };
            return t4 && (i3.startOnTick = false, i3.endOnTick = false), i3;
          }
          return {};
        }
        class k extends t2 {
          init(t3, e3) {
            let i3 = h(), a2 = t3.xAxis, n2 = t3.yAxis, l2 = b(t3.navigator && t3.navigator.enabled, s.enabled, true);
            t3.xAxis = t3.yAxis = void 0;
            let d2 = y({ chart: { panning: { enabled: true, type: "x" }, zooming: { pinchType: "x", mouseWheel: { type: "x" } } }, navigator: { enabled: l2 }, scrollbar: { enabled: b(r.enabled, true) }, rangeSelector: { enabled: b(o.rangeSelector.enabled, true) }, title: { text: null }, tooltip: { split: b(i3.tooltip && i3.tooltip.split, true), crosshairs: true }, legend: { enabled: false } }, t3, { isStock: true });
            t3.xAxis = a2, t3.yAxis = n2, d2.xAxis = v(t3.xAxis || {}).map((e4) => y(S("xAxis", e4, i3.xAxis), e4, M("xAxis", t3))), d2.yAxis = v(t3.yAxis || {}).map((t4) => y(S("yAxis", t4, i3.yAxis), t4)), super.init(d2, e3);
          }
          createAxis(t3, e3) {
            return e3.axis = y(S(t3, e3.axis, h()[t3]), e3.axis, M(t3, this.userOptions)), super.createAxis(t3, e3);
          }
        }
        return c(t2, "update", function(t3) {
          let e3 = t3.options;
          "scrollbar" in e3 && this.navigator && (y(true, this.options.scrollbar, e3.scrollbar), this.navigator.update({}), delete e3.scrollbar);
        }), function(t3) {
          function e3(t4) {
            if (!this.crosshair || !this.crosshair.label || !this.crosshair.label.enabled || !this.cross || !m(this.min) || !m(this.max))
              return;
            let e4 = this.chart, i4 = this.logarithmic, s3 = this.crosshair.label, o3 = this.horiz, r3 = this.opposite, a3 = this.left, n3 = this.top, h3 = this.width, d2 = "inside" === this.options.tickPosition, c2 = false !== this.crosshair.snap, p2 = t4.e || this.cross && this.cross.e, u2 = t4.point, f2 = this.crossLabel, x2, y2, v2 = s3.format, S2 = "", M2, k2 = 0, C = this.min, A = this.max;
            i4 && (C = i4.lin2log(this.min), A = i4.lin2log(this.max));
            let w = o3 ? "center" : r3 ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center";
            f2 || (f2 = this.crossLabel = e4.renderer.label("", 0, void 0, s3.shape || "callout").addClass("highcharts-crosshair-label highcharts-color-" + (u2 && u2.series ? u2.series.colorIndex : this.series[0] && this.series[0].colorIndex)).attr({ align: s3.align || w, padding: b(s3.padding, 8), r: b(s3.borderRadius, 3), zIndex: 2 }).add(this.labelGroup), e4.styledMode || f2.attr({ fill: s3.backgroundColor || u2 && u2.series && u2.series.color || "#666666", stroke: s3.borderColor || "", "stroke-width": s3.borderWidth || 0 }).css(g({ color: "#ffffff", fontWeight: "normal", fontSize: "0.7em", textAlign: "center" }, s3.style || {}))), o3 ? (x2 = c2 ? (u2.plotX || 0) + a3 : p2.chartX, y2 = n3 + (r3 ? 0 : this.height)) : (x2 = a3 + this.offset + (r3 ? h3 : 0), y2 = c2 ? (u2.plotY || 0) + n3 : p2.chartY), v2 || s3.formatter || (this.dateTime && (S2 = "%b %d, %Y"), v2 = "{value" + (S2 ? ":" + S2 : "") + "}");
            let T = c2 ? this.isXAxis ? u2.x : u2.y : this.toValue(o3 ? p2.chartX : p2.chartY), P = u2 && u2.series ? u2.series.isPointInside(u2) : m(T) && T > C && T < A, L = "";
            v2 ? L = l(v2, { value: T }, e4) : s3.formatter && m(T) && (L = s3.formatter.call(this, T)), f2.attr({ text: L, x: x2, y: y2, visibility: P ? "inherit" : "hidden" });
            let O = f2.getBBox();
            !m(f2.x) || o3 || r3 || (x2 = f2.x - O.width / 2), m(f2.y) && (o3 ? (d2 && !r3 || !d2 && r3) && (y2 = f2.y - O.height) : y2 = f2.y - O.height / 2), M2 = o3 ? { left: a3 - O.x, right: a3 + this.width - O.x } : { left: "left" === this.labelAlign ? a3 : 0, right: "right" === this.labelAlign ? a3 + this.width : e4.chartWidth };
            let D = f2.translateX || 0;
            D < M2.left && (k2 = M2.left - D), D + O.width >= M2.right && (k2 = -(D + O.width - M2.right)), f2.attr({ x: x2 + k2, y: y2, anchorX: o3 ? x2 : this.opposite ? 0 : e4.chartWidth, anchorY: o3 ? this.opposite ? e4.chartHeight : 0 : y2 + O.height / 2 });
          }
          function i3() {
            this.crossLabel && (this.crossLabel = this.crossLabel.hide());
          }
          function s2(t4) {
            let e4 = this.chart, i4 = this.options, s3 = e4._labelPanes = e4._labelPanes || {}, o3 = i4.labels;
            if (e4.options.isStock && "yAxis" === this.coll) {
              let e5 = i4.top + "," + i4.height;
              !s3[e5] && o3.enabled && (15 === o3.distance && 1 === this.side && (o3.distance = 0), void 0 === o3.align && (o3.align = "right"), s3[e5] = this, t4.align = "right", t4.preventDefault());
            }
          }
          function o2() {
            let t4 = this.chart, e4 = this.options && this.options.top + "," + this.options.height;
            e4 && t4._labelPanes && t4._labelPanes[e4] === this && delete t4._labelPanes[e4];
          }
          function r2(t4) {
            let e4 = this, i4 = e4.isLinked && !e4.series && e4.linkedParent ? e4.linkedParent.series : e4.series, s3 = e4.chart, o3 = s3.renderer, r3 = e4.left, a3 = e4.top, n3 = [], l2 = t4.translatedValue, h3 = t4.value, d2 = t4.force, c2, g2, y2, v2, S2 = [], M2, k2;
            if (s3.options.isStock && false !== t4.acrossPanes && "xAxis" === e4.coll || "yAxis" === e4.coll) {
              for (let o4 of (t4.preventDefault(), S2 = ((t5) => {
                let o5 = "xAxis" === t5 ? "yAxis" : "xAxis", r4 = e4.options[o5];
                return m(r4) ? [s3[o5][r4]] : x(r4) ? [s3.get(r4)] : i4.map((t6) => t6[o5]);
              })(e4.coll), e4.isXAxis ? s3.yAxis : s3.xAxis))
                if (!u(o4.options.id) || -1 === o4.options.id.indexOf("navigator")) {
                  let t5 = o4.isXAxis ? "yAxis" : "xAxis";
                  e4 === (u(o4.options[t5]) ? s3[t5][o4.options[t5]] : s3[t5][0]) && S2.push(o4);
                }
              for (let t5 of (M2 = S2.length ? [] : [e4.isXAxis ? s3.yAxis[0] : s3.xAxis[0]], S2))
                -1 !== M2.indexOf(t5) || f(M2, (e5) => e5.pos === t5.pos && e5.len === t5.len) || M2.push(t5);
              if (m(k2 = b(l2, e4.translate(h3 || 0, void 0, void 0, t4.old)))) {
                if (e4.horiz)
                  for (let t5 of M2) {
                    let i5;
                    v2 = (g2 = t5.pos) + t5.len, c2 = y2 = Math.round(k2 + e4.transB), "pass" !== d2 && (c2 < r3 || c2 > r3 + e4.width) && (d2 ? c2 = y2 = p(c2, r3, r3 + e4.width) : i5 = true), i5 || n3.push(["M", c2, g2], ["L", y2, v2]);
                  }
                else
                  for (let t5 of M2) {
                    let i5;
                    y2 = (c2 = t5.pos) + t5.len, g2 = v2 = Math.round(a3 + e4.height - k2), "pass" !== d2 && (g2 < a3 || g2 > a3 + e4.height) && (d2 ? g2 = v2 = p(g2, a3, a3 + e4.height) : i5 = true), i5 || n3.push(["M", c2, g2], ["L", y2, v2]);
                  }
              }
              t4.path = n3.length > 0 ? o3.crispPolyLine(n3, t4.lineWidth || 1) : void 0;
            }
          }
          function a2(t4) {
            if (this.chart.options.isStock) {
              let e4;
              this.is("column") || this.is("columnrange") ? e4 = { borderWidth: 0, shadow: false } : this.is("scatter") || this.is("sma") || (e4 = { marker: { enabled: false, radius: 2 } }), e4 && (t4.plotOptions[this.type] = y(t4.plotOptions[this.type], e4));
            }
          }
          function n2() {
            let t4 = this.chart, e4 = this.options.dataGrouping;
            return false !== this.allowDG && e4 && b(e4.enabled, t4.options.isStock);
          }
          function h2(t4, e4) {
            for (let i4 = 0; i4 < t4.length; i4 += 2) {
              let s3 = t4[i4], o3 = t4[i4 + 1];
              s3[1] === o3[1] && (s3[1] = o3[1] = Math.round(s3[1]) - e4 % 2 / 2), s3[2] === o3[2] && (s3[2] = o3[2] = Math.round(s3[2]) + e4 % 2 / 2);
            }
            return t4;
          }
          t3.compose = function(t4, l2, p2, u2) {
            let g2 = p2.prototype;
            g2.forceCropping || (c(l2, "afterDrawCrosshair", e3), c(l2, "afterHideCrosshair", i3), c(l2, "autoLabelAlign", s2), c(l2, "destroy", o2), c(l2, "getPlotLinePath", r2), t4.prototype.setFixedRange = d, g2.forceCropping = n2, c(p2, "setOptions", a2), u2.prototype.crispPolyLine = h2);
          }, t3.stockChart = function(e4, i4, s3) {
            return new t3(e4, i4, s3);
          };
        }(k || (k = {})), k;
      }), i(e, "Series/HLC/HLCPoint.js", [e["Core/Series/SeriesRegistry.js"]], function(t2) {
        let { column: { prototype: { pointClass: e2 } } } = t2.seriesTypes;
        return class extends e2 {
        };
      }), i(e, "Series/HLC/HLCSeriesDefaults.js", [], function() {
        return { lineWidth: 1, tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' }, threshold: null, states: { hover: { lineWidth: 3 } }, stickyTracking: true };
      }), i(e, "Series/HLC/HLCSeries.js", [e["Series/HLC/HLCPoint.js"], e["Series/HLC/HLCSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { column: o } = i2.seriesTypes, { extend: r, merge: a } = s;
        class n extends o {
          extendStem(t3, e3, i3) {
            let s2 = t3[0], o2 = t3[1];
            "number" == typeof s2[2] && (s2[2] = Math.max(i3 + e3, s2[2])), "number" == typeof o2[2] && (o2[2] = Math.min(i3 - e3, o2[2]));
          }
          getPointPath(t3, e3) {
            let i3 = e3.strokeWidth(), s2 = t3.series, o2 = i3 % 2 / 2, r2 = Math.round(t3.plotX) - o2, a2 = Math.round(t3.shapeArgs.width / 2), n2 = t3.plotClose, l = [["M", r2, Math.round(t3.yBottom)], ["L", r2, Math.round(t3.plotHigh)]];
            return null !== t3.close && (n2 = Math.round(t3.plotClose) + o2, l.push(["M", r2, n2], ["L", r2 + a2, n2]), s2.extendStem(l, i3 / 2, n2)), l;
          }
          drawSinglePoint(t3) {
            let e3 = t3.series, i3 = e3.chart, s2, o2 = t3.graphic;
            void 0 !== t3.plotY && (o2 || (t3.graphic = o2 = i3.renderer.path().add(e3.group)), i3.styledMode || o2.attr(e3.pointAttribs(t3, t3.selected && "select")), s2 = e3.getPointPath(t3, o2), o2[o2 ? "animate" : "attr"]({ d: s2 }).addClass(t3.getClassName(), true));
          }
          drawPoints() {
            this.points.forEach(this.drawSinglePoint);
          }
          init() {
            super.init.apply(this, arguments), this.options.stacking = void 0;
          }
          pointAttribs(t3, e3) {
            let i3 = super.pointAttribs.call(this, t3, e3);
            return delete i3.fill, i3;
          }
          toYData(t3) {
            return [t3.high, t3.low, t3.close];
          }
          translate() {
            let t3 = this, e3 = t3.yAxis, i3 = this.pointArrayMap && this.pointArrayMap.slice() || [], s2 = i3.map((t4) => `plot${t4.charAt(0).toUpperCase() + t4.slice(1)}`);
            s2.push("yBottom"), i3.push("low"), super.translate.apply(t3), t3.points.forEach(function(o2) {
              i3.forEach(function(i4, r2) {
                let a2 = o2[i4];
                null !== a2 && (t3.dataModify && (a2 = t3.dataModify.modifyValue(a2)), o2[s2[r2]] = e3.toPixels(a2, true));
              }), o2.tooltipPos[1] = o2.plotHigh + e3.pos - t3.chart.plotTop;
            });
          }
        }
        return n.defaultOptions = a(o.defaultOptions, e2), r(n.prototype, { pointClass: t2, animate: null, directTouch: false, pointArrayMap: ["high", "low", "close"], pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, pointValKey: "close" }), i2.registerSeriesType("hlc", n), n;
      }), i(e, "Series/OHLC/OHLCPoint.js", [e["Core/Series/SeriesRegistry.js"]], function(t2) {
        let { seriesTypes: { hlc: e2 } } = t2;
        class i2 extends e2.prototype.pointClass {
          getClassName() {
            return super.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down");
          }
          resolveUpColor() {
            this.open < this.close && !this.options.color && this.series.options.upColor && (this.color = this.series.options.upColor);
          }
          resolveColor() {
            super.resolveColor(), this.series.is("heikinashi") || this.resolveUpColor();
          }
          getZone() {
            let t3 = super.getZone();
            return this.resolveUpColor(), t3;
          }
          applyOptions() {
            return super.applyOptions.apply(this, arguments), this.resolveColor && this.resolveColor(), this;
          }
        }
        return i2;
      }), i(e, "Series/OHLC/OHLCSeriesDefaults.js", [], function() {
        return { tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' } };
      }), i(e, "Series/OHLC/OHLCSeries.js", [e["Core/Globals.js"], e["Series/OHLC/OHLCPoint.js"], e["Series/OHLC/OHLCSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { composed: r } = t2, { hlc: a } = s.seriesTypes, { addEvent: n, extend: l, merge: h, pushUnique: d } = o;
        function c(t3) {
          let e3 = t3.options, i3 = e3.dataGrouping;
          i3 && e3.useOhlcData && "highcharts-navigator-series" !== e3.id && (i3.approximation = "ohlc");
        }
        function p(t3) {
          let e3 = t3.options;
          e3.useOhlcData && "highcharts-navigator-series" !== e3.id && l(this, { pointValKey: u.prototype.pointValKey, pointArrayMap: u.prototype.pointArrayMap, toYData: u.prototype.toYData });
        }
        class u extends a {
          static compose(t3, ...e3) {
            d(r, "OHLCSeries") && (n(t3, "afterSetOptions", c), n(t3, "init", p));
          }
          getPointPath(t3, e3) {
            let i3 = super.getPointPath(t3, e3), s2 = e3.strokeWidth(), o2 = s2 % 2 / 2, r2 = Math.round(t3.plotX) - o2, a2 = Math.round(t3.shapeArgs.width / 2), n2 = t3.plotOpen;
            return null !== t3.open && (n2 = Math.round(t3.plotOpen) + o2, i3.push(["M", r2, n2], ["L", r2 - a2, n2]), super.extendStem(i3, s2 / 2, n2)), i3;
          }
          pointAttribs(t3, e3) {
            let i3 = super.pointAttribs.call(this, t3, e3), s2 = this.options;
            return delete i3.fill, !t3.options.color && s2.upColor && t3.open < t3.close && (i3.stroke = s2.upColor), i3;
          }
          toYData(t3) {
            return [t3.open, t3.high, t3.low, t3.close];
          }
        }
        return u.defaultOptions = h(a.defaultOptions, i2), l(u.prototype, { pointClass: e2, pointArrayMap: ["open", "high", "low", "close"] }), s.registerSeriesType("ohlc", u), u;
      }), i(e, "Series/Candlestick/CandlestickSeriesDefaults.js", [], function() {
        return { states: { hover: { lineWidth: 2 } }, threshold: null, lineColor: "#000000", lineWidth: 1, upColor: "#ffffff", stickyTracking: true };
      }), i(e, "Series/Candlestick/CandlestickSeries.js", [e["Series/Candlestick/CandlestickSeriesDefaults.js"], e["Core/Defaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { defaultOptions: o } = e2, { column: r, ohlc: a } = i2.seriesTypes, { merge: n } = s;
        class l extends a {
          pointAttribs(t3, e3) {
            let i3 = r.prototype.pointAttribs.call(this, t3, e3), s2 = this.options, o2 = t3.open < t3.close, a2 = s2.lineColor || this.color, n2 = t3.color || this.color;
            if (i3["stroke-width"] = s2.lineWidth, i3.fill = t3.options.color || o2 && s2.upColor || n2, i3.stroke = t3.options.lineColor || o2 && s2.upLineColor || a2, e3) {
              let t4 = s2.states[e3];
              i3.fill = t4.color || i3.fill, i3.stroke = t4.lineColor || i3.stroke, i3["stroke-width"] = t4.lineWidth || i3["stroke-width"];
            }
            return i3;
          }
          drawPoints() {
            let t3 = this.points, e3 = this.chart, i3 = this.yAxis.reversed;
            for (let s2 of t3) {
              let t4 = s2.graphic, o2, r2, a2, n2, l2, h, d, c, p, u, g = !t4;
              void 0 !== s2.plotY && (t4 || (s2.graphic = t4 = e3.renderer.path().add(this.group)), this.chart.styledMode || t4.attr(this.pointAttribs(s2, s2.selected && "select")).shadow(this.options.shadow), d = t4.strokeWidth() % 2 / 2, c = Math.round(s2.plotX) - d, a2 = Math.min(o2 = s2.plotOpen, r2 = s2.plotClose), n2 = Math.max(o2, r2), u = Math.round(s2.shapeArgs.width / 2), l2 = i3 ? n2 !== s2.yBottom : Math.round(a2) !== Math.round(s2.plotHigh), h = i3 ? Math.round(a2) !== Math.round(s2.plotHigh) : n2 !== s2.yBottom, a2 = Math.round(a2) + d, n2 = Math.round(n2) + d, (p = []).push(["M", c - u, n2], ["L", c - u, a2], ["L", c + u, a2], ["L", c + u, n2], ["Z"], ["M", c, a2], ["L", c, l2 ? Math.round(i3 ? s2.yBottom : s2.plotHigh) : a2], ["M", c, n2], ["L", c, h ? Math.round(i3 ? s2.plotHigh : s2.yBottom) : n2]), t4[g ? "attr" : "animate"]({ d: p }).addClass(s2.getClassName(), true));
            }
          }
        }
        return l.defaultOptions = n(a.defaultOptions, o.plotOptions, { tooltip: a.defaultOptions.tooltip }, t2), i2.registerSeriesType("candlestick", l), l;
      }), i(e, "Series/Flags/FlagsPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { column: { prototype: { pointClass: i2 } } } = t2.seriesTypes, { isNumber: s } = e2;
        return class extends i2 {
          constructor() {
            super(...arguments), this.ttBelow = false;
          }
          isValid() {
            return s(this.y) || void 0 === this.y;
          }
          hasNewShapeType() {
            let t3 = this.options.shape || this.series.options.shape;
            return this.graphic && t3 && t3 !== this.graphic.symbolKey;
          }
        };
      }), i(e, "Series/Flags/FlagsSeriesDefaults.js", [], function() {
        return { pointRange: 0, allowOverlapX: false, shape: "flag", stackDistance: 12, textAlign: "center", tooltip: { pointFormat: "{point.text}" }, threshold: null, y: -30, fillColor: "#ffffff", lineWidth: 1, states: { hover: { lineColor: "#000000", fillColor: "#ccd3ff" } }, style: { fontSize: "0.7em", fontWeight: "bold" } };
      }), i(e, "Series/Flags/FlagsSymbols.js", [e["Core/Renderer/RendererRegistry.js"]], function(t2) {
        var e2;
        return function(e3) {
          let i2 = [];
          function s(t3, e4, i3, s2, o2) {
            let r = o2 && o2.anchorX || t3, a = o2 && o2.anchorY || e4, n = this.circle(r - 1, a - 1, 2, 2);
            return n.push(["M", r, a], ["L", t3, e4 + s2], ["L", t3, e4], ["L", t3 + i3, e4], ["L", t3 + i3, e4 + s2], ["L", t3, e4 + s2], ["Z"]), n;
          }
          function o(t3, e4) {
            t3[e4 + "pin"] = function(i3, s2, o2, r, a) {
              let n;
              let l = a && a.anchorX, h = a && a.anchorY;
              if ("circle" === e4 && r > o2 && (i3 -= Math.round((r - o2) / 2), o2 = r), n = t3[e4](i3, s2, o2, r), l && h) {
                let a2 = l;
                if ("circle" === e4)
                  a2 = i3 + o2 / 2;
                else {
                  let t4 = n[0], e5 = n[1];
                  "M" === t4[0] && "L" === e5[0] && (a2 = (t4[1] + e5[1]) / 2);
                }
                let d = s2 > h ? s2 : s2 + r;
                n.push(["M", a2, d], ["L", l, h]), n = n.concat(t3.circle(l - 1, h - 1, 2, 2));
              }
              return n;
            };
          }
          e3.compose = function(e4) {
            if (-1 === i2.indexOf(e4)) {
              i2.push(e4);
              let t3 = e4.prototype.symbols;
              t3.flag = s, o(t3, "circle"), o(t3, "square");
            }
            let r = t2.getRendererType();
            i2.indexOf(r) && i2.push(r);
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Series/OnSeriesComposition.js", [e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { composed: r } = e2, { prototype: a } = t2, { prototype: n } = i2, { defined: l, pushUnique: h, stableSort: d } = s;
        return function(t3) {
          function e3(t4) {
            return n.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this, t4);
          }
          function i3() {
            a.translate.apply(this);
            let t4 = this, e4 = t4.options, i4 = t4.chart, s2 = t4.points, o2 = e4.onSeries, r2 = o2 && i4.get(o2), n2 = r2 && r2.options.step, h2 = r2 && r2.points, c = i4.inverted, p = t4.xAxis, u = t4.yAxis, g = s2.length - 1, f, m, x = e4.onKey || "y", y = h2 && h2.length, b = 0, v, S, M, k, C;
            if (r2 && r2.visible && y) {
              for (b = (r2.pointXOffset || 0) + (r2.barW || 0) / 2, k = r2.currentDataGrouping, S = h2[y - 1].x + (k ? k.totalRange : 0), d(s2, (t5, e5) => t5.x - e5.x), x = "plot" + x[0].toUpperCase() + x.substr(1); y-- && s2[g]; )
                if (v = h2[y], (f = s2[g]).y = v.y, v.x <= f.x && void 0 !== v[x]) {
                  if (f.x <= S && (f.plotY = v[x], v.x < f.x && !n2 && (M = h2[y + 1]) && void 0 !== M[x])) {
                    if (l(f.plotX) && r2.is("spline")) {
                      let t5 = [v.plotX || 0, v.plotY || 0], e5 = [M.plotX || 0, M.plotY || 0], i5 = v.controlPoints?.high || t5, s3 = M.controlPoints?.low || e5, o3 = (o4, r4) => Math.pow(1 - o4, 3) * t5[r4] + 3 * (1 - o4) * (1 - o4) * o4 * i5[r4] + 3 * (1 - o4) * o4 * o4 * s3[r4] + o4 * o4 * o4 * e5[r4], r3 = 0, a2 = 1, n3;
                      for (let t6 = 0; t6 < 100; t6++) {
                        let t7 = (r3 + a2) / 2, e6 = o3(t7, 0);
                        if (null === e6)
                          break;
                        if (0.25 > Math.abs(e6 - f.plotX)) {
                          n3 = t7;
                          break;
                        }
                        e6 < f.plotX ? r3 = t7 : a2 = t7;
                      }
                      l(n3) && (f.plotY = o3(n3, 1), f.y = u.toValue(f.plotY, true));
                    } else
                      C = (f.x - v.x) / (M.x - v.x), f.plotY += C * (M[x] - v[x]), f.y += C * (M.y - v.y);
                  }
                  if (g--, y++, g < 0)
                    break;
                }
            }
            s2.forEach((e5, i5) => {
              let o3;
              e5.plotX += b, (void 0 === e5.plotY || c) && (e5.plotX >= 0 && e5.plotX <= p.len ? c ? (e5.plotY = p.translate(e5.x, 0, 1, 0, 1), e5.plotX = l(e5.y) ? u.translate(e5.y, 0, 0, 0, 1) : 0) : e5.plotY = (p.opposite ? 0 : t4.yAxis.len) + p.offset : e5.shapeArgs = {}), (m = s2[i5 - 1]) && m.plotX === e5.plotX && (void 0 === m.stackIndex && (m.stackIndex = 0), o3 = m.stackIndex + 1), e5.stackIndex = o3;
            }), this.onSeries = r2;
          }
          t3.compose = function(t4) {
            if (h(r, "OnSeries")) {
              let s2 = t4.prototype;
              s2.getPlotBox = e3, s2.translate = i3;
            }
            return t4;
          }, t3.getPlotBox = e3, t3.translate = i3;
        }(o || (o = {})), o;
      }), i(e, "Series/Flags/FlagsSeries.js", [e["Series/Flags/FlagsPoint.js"], e["Series/Flags/FlagsSeriesDefaults.js"], e["Series/Flags/FlagsSymbols.js"], e["Core/Globals.js"], e["Series/OnSeriesComposition.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
        let { noop: h } = s, { distribute: d } = r, { series: c, seriesTypes: { column: p } } = a, { addEvent: u, defined: g, extend: f, merge: m, objectEach: x, wrap: y } = l;
        class b extends p {
          animate(t3) {
            t3 && this.setClip();
          }
          drawPoints() {
            let t3, e3, i3, s2, o2, r2, a2, l2, h2, c2, p2;
            let u2 = this.points, f2 = this.chart, b2 = f2.renderer, v = f2.inverted, S = this.options, M = S.y, k = this.yAxis, C = {}, A = [];
            for (s2 = u2.length; s2--; )
              o2 = u2[s2], c2 = (v ? o2.plotY : o2.plotX) > this.xAxis.len, t3 = o2.plotX, a2 = o2.stackIndex, i3 = o2.options.shape || S.shape, void 0 !== (e3 = o2.plotY) && (e3 = o2.plotY + M - (void 0 !== a2 && a2 * S.stackDistance)), o2.anchorX = a2 ? void 0 : o2.plotX, l2 = a2 ? void 0 : o2.plotY, p2 = "flag" !== i3, r2 = o2.graphic, void 0 !== e3 && t3 >= 0 && !c2 ? (r2 && o2.hasNewShapeType() && (r2 = r2.destroy()), r2 || (r2 = o2.graphic = b2.label("", null, null, i3, null, null, S.useHTML).addClass("highcharts-point").add(this.markerGroup), o2.graphic.div && (o2.graphic.div.point = o2), r2.isNew = true), r2.attr({ align: p2 ? "center" : "left", width: S.width, height: S.height, "text-align": S.textAlign }), f2.styledMode || r2.attr(this.pointAttribs(o2)).css(m(S.style, o2.style)).shadow(S.shadow), t3 > 0 && (t3 -= r2.strokeWidth() % 2), h2 = { y: e3, anchorY: l2 }, S.allowOverlapX && (h2.x = t3, h2.anchorX = o2.anchorX), r2.attr({ text: o2.options.title || S.title || "A" })[r2.isNew ? "attr" : "animate"](h2), S.allowOverlapX || (C[o2.plotX] ? C[o2.plotX].size = Math.max(C[o2.plotX].size, r2.width || 0) : C[o2.plotX] = { align: p2 ? 0.5 : 0, size: r2.width || 0, target: t3, anchorX: t3 }), o2.tooltipPos = [t3, e3 + k.pos - f2.plotTop]) : r2 && (o2.graphic = r2.destroy());
            if (!S.allowOverlapX) {
              let t4 = 100;
              for (let e4 of (x(C, function(e5) {
                e5.plotX = e5.anchorX, A.push(e5), t4 = Math.max(e5.size, t4);
              }), d(A, v ? k.len : this.xAxis.len, t4), u2)) {
                let t5 = e4.plotX, i4 = e4.graphic, s3 = i4 && C[t5];
                s3 && i4 && (g(s3.pos) ? i4[i4.isNew ? "attr" : "animate"]({ x: s3.pos + (s3.align || 0) * s3.size, anchorX: e4.anchorX }).show().isNew = false : i4.hide().isNew = true);
              }
            }
            S.useHTML && this.markerGroup && y(this.markerGroup, "on", function(t4) {
              return n.prototype.on.apply(t4.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1));
            });
          }
          drawTracker() {
            let t3 = this.points;
            for (let e3 of (super.drawTracker(), t3)) {
              let i3 = e3.graphic;
              i3 && (e3.unbindMouseOver && e3.unbindMouseOver(), e3.unbindMouseOver = u(i3.element, "mouseover", function() {
                for (let s2 of (e3.stackIndex > 0 && !e3.raised && (e3._y = i3.y, i3.attr({ y: e3._y - 8 }), e3.raised = true), t3))
                  s2 !== e3 && s2.raised && s2.graphic && (s2.graphic.attr({ y: s2._y }), s2.raised = false);
              }));
            }
          }
          pointAttribs(t3, e3) {
            let i3 = this.options, s2 = t3 && t3.color || this.color, o2 = i3.lineColor, r2 = t3 && t3.lineWidth, a2 = t3 && t3.fillColor || i3.fillColor;
            return e3 && (a2 = i3.states[e3].fillColor, o2 = i3.states[e3].lineColor, r2 = i3.states[e3].lineWidth), { fill: a2 || s2, stroke: o2 || s2, "stroke-width": r2 || i3.lineWidth || 0 };
          }
          setClip() {
            c.prototype.setClip.apply(this, arguments), false !== this.options.clip && this.sharedClipKey && this.markerGroup && this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey]);
          }
        }
        return b.compose = i2.compose, b.defaultOptions = m(p.defaultOptions, e2), o.compose(b), f(b.prototype, { allowDG: false, forceCrop: true, invertible: false, noSharedTooltip: true, pointClass: t2, sorted: false, takeOrdinalPosition: false, trackerGroups: ["markerGroup"], buildKDTree: h, init: c.prototype.init }), a.registerSeriesType("flags", b), b;
      }), i(e, "Core/Axis/BrokenAxis.js", [e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2) {
        var i2;
        let { addEvent: s, find: o, fireEvent: r, isArray: a, isNumber: n, pick: l } = e2;
        return function(e3) {
          function i3() {
            void 0 !== this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, false);
          }
          function h() {
            this.brokenAxis?.hasBreaks && (this.options.ordinal = false);
          }
          function d() {
            let t3 = this.brokenAxis;
            if (t3?.hasBreaks) {
              let e4 = this.tickPositions, i4 = this.tickPositions.info, s2 = [];
              for (let i5 = 0; i5 < e4.length; i5++)
                t3.isInAnyBreak(e4[i5]) || s2.push(e4[i5]);
              this.tickPositions = s2, this.tickPositions.info = i4;
            }
          }
          function c() {
            this.brokenAxis || (this.brokenAxis = new m(this));
          }
          function p() {
            let { isDirty: t3, options: { connectNulls: e4 }, points: i4, xAxis: s2, yAxis: o2 } = this;
            if (t3) {
              let t4 = i4.length;
              for (; t4--; ) {
                let r2 = i4[t4], a2 = !(null === r2.y && false === e4) && (s2?.brokenAxis?.isInAnyBreak(r2.x, true) || o2?.brokenAxis?.isInAnyBreak(r2.y, true));
                r2.visible = !a2 && false !== r2.options.visible;
              }
            }
          }
          function u() {
            this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, l(this.pointArrayMap, ["y"]));
          }
          function g(t3, e4) {
            let i4, s2, o2;
            let a2 = this, h2 = a2.points;
            if (t3?.brokenAxis?.hasBreaks) {
              let d2 = t3.brokenAxis;
              e4.forEach(function(e5) {
                i4 = d2?.breakArray || [], s2 = t3.isXAxis ? t3.min : l(a2.options.threshold, t3.min);
                let c2 = t3?.options?.breaks?.filter(function(t4) {
                  let e6 = true;
                  for (let s3 = 0; s3 < i4.length; s3++) {
                    let o3 = i4[s3];
                    if (o3.from === t4.from && o3.to === t4.to) {
                      e6 = false;
                      break;
                    }
                  }
                  return e6;
                });
                h2.forEach(function(a3) {
                  o2 = l(a3["stack" + e5.toUpperCase()], a3[e5]), i4.forEach(function(e6) {
                    if (n(s2) && n(o2)) {
                      let i5 = "";
                      s2 < e6.from && o2 > e6.to || s2 > e6.from && o2 < e6.from ? i5 = "pointBreak" : (s2 < e6.from && o2 > e6.from && o2 < e6.to || s2 > e6.from && o2 > e6.to && o2 < e6.from) && (i5 = "pointInBreak"), i5 && r(t3, i5, { point: a3, brk: e6 });
                    }
                  }), c2?.forEach(function(e6) {
                    r(t3, "pointOutsideOfBreak", { point: a3, brk: e6 });
                  });
                });
              });
            }
          }
          function f() {
            let e4 = this.currentDataGrouping, i4 = e4?.gapSize, s2 = this.points.slice(), o2 = this.yAxis, r2 = this.options.gapSize, a2 = s2.length - 1;
            if (r2 && a2 > 0) {
              let e5, n2;
              for ("value" !== this.options.gapUnit && (r2 *= this.basePointRange), i4 && i4 > r2 && i4 >= this.basePointRange && (r2 = i4); a2--; )
                if (n2 && false !== n2.visible || (n2 = s2[a2 + 1]), e5 = s2[a2], false !== n2.visible && false !== e5.visible) {
                  if (n2.x - e5.x > r2) {
                    let i5 = (e5.x + n2.x) / 2;
                    s2.splice(a2 + 1, 0, { isNull: true, x: i5 }), o2.stacking && this.options.stacking && ((o2.stacking.stacks[this.stackKey][i5] = new t2(o2, o2.options.stackLabels, false, i5, this.stack)).total = 0);
                  }
                  n2 = e5;
                }
            }
            return this.getGraphPath(s2);
          }
          e3.compose = function(t3, e4) {
            if (!t3.keepProps.includes("brokenAxis")) {
              t3.keepProps.push("brokenAxis"), s(t3, "init", c), s(t3, "afterInit", i3), s(t3, "afterSetTickPositions", d), s(t3, "afterSetOptions", h);
              let o2 = e4.prototype;
              o2.drawBreaks = g, o2.gappedPath = f, s(e4, "afterGeneratePoints", p), s(e4, "afterRender", u);
            }
            return t3;
          };
          class m {
            static isInBreak(t3, e4) {
              let i4 = t3.repeat || 1 / 0, s2 = t3.from, o2 = t3.to - t3.from, r2 = e4 >= s2 ? (e4 - s2) % i4 : i4 - (s2 - e4) % i4;
              return t3.inclusive ? r2 <= o2 : r2 < o2 && 0 !== r2;
            }
            static lin2Val(t3) {
              let e4 = this.brokenAxis, i4 = e4 && e4.breakArray;
              if (!i4 || !n(t3))
                return t3;
              let s2 = t3, o2, r2;
              for (r2 = 0; r2 < i4.length && !((o2 = i4[r2]).from >= s2); r2++)
                o2.to < s2 ? s2 += o2.len : m.isInBreak(o2, s2) && (s2 += o2.len);
              return s2;
            }
            static val2Lin(t3) {
              let e4 = this.brokenAxis, i4 = e4 && e4.breakArray;
              if (!i4 || !n(t3))
                return t3;
              let s2 = t3, o2, r2;
              for (r2 = 0; r2 < i4.length; r2++)
                if ((o2 = i4[r2]).to <= t3)
                  s2 -= o2.len;
                else if (o2.from >= t3)
                  break;
                else if (m.isInBreak(o2, t3)) {
                  s2 -= t3 - o2.from;
                  break;
                }
              return s2;
            }
            constructor(t3) {
              this.hasBreaks = false, this.axis = t3;
            }
            findBreakAt(t3, e4) {
              return o(e4, function(e5) {
                return e5.from < t3 && t3 < e5.to;
              });
            }
            isInAnyBreak(t3, e4) {
              let i4 = this.axis, s2 = i4.options.breaks || [], o2 = s2.length, r2, a2, h2;
              if (o2 && n(t3)) {
                for (; o2--; )
                  m.isInBreak(s2[o2], t3) && (r2 = true, a2 || (a2 = l(s2[o2].showPoints, !i4.isXAxis)));
                h2 = r2 && e4 ? r2 && !a2 : r2;
              }
              return h2;
            }
            setBreaks(t3, e4) {
              let i4 = this, s2 = i4.axis, o2 = a(t3) && !!t3.length && !!Object.keys(t3[0]).length;
              s2.isDirty = i4.hasBreaks !== o2, i4.hasBreaks = o2, t3 !== s2.options.breaks && (s2.options.breaks = s2.userOptions.breaks = t3), s2.forceRedraw = true, s2.series.forEach(function(t4) {
                t4.isDirty = true;
              }), o2 || s2.val2lin !== m.val2Lin || (delete s2.val2lin, delete s2.lin2val), o2 && (s2.userOptions.ordinal = false, s2.lin2val = m.lin2Val, s2.val2lin = m.val2Lin, s2.setExtremes = function(t4, e5, o3, r2, a2) {
                if (i4.hasBreaks) {
                  let s3;
                  let o4 = this.options.breaks || [];
                  for (; s3 = i4.findBreakAt(t4, o4); )
                    t4 = s3.to;
                  for (; s3 = i4.findBreakAt(e5, o4); )
                    e5 = s3.from;
                  e5 < t4 && (e5 = t4);
                }
                s2.constructor.prototype.setExtremes.call(this, t4, e5, o3, r2, a2);
              }, s2.setAxisTranslation = function() {
                if (s2.constructor.prototype.setAxisTranslation.call(this), i4.unitLength = void 0, i4.hasBreaks) {
                  let t4 = s2.options.breaks || [], e5 = [], o3 = [], a2 = l(s2.pointRangePadding, 0), h2 = 0, d2, c2, p2 = s2.userMin || s2.min, u2 = s2.userMax || s2.max, g2, f2;
                  t4.forEach(function(t5) {
                    c2 = t5.repeat || 1 / 0, n(p2) && n(u2) && (m.isInBreak(t5, p2) && (p2 += t5.to % c2 - p2 % c2), m.isInBreak(t5, u2) && (u2 -= u2 % c2 - t5.from % c2));
                  }), t4.forEach(function(t5) {
                    if (g2 = t5.from, c2 = t5.repeat || 1 / 0, n(p2) && n(u2)) {
                      for (; g2 - c2 > p2; )
                        g2 -= c2;
                      for (; g2 < p2; )
                        g2 += c2;
                      for (f2 = g2; f2 < u2; f2 += c2)
                        e5.push({ value: f2, move: "in" }), e5.push({ value: f2 + t5.to - t5.from, move: "out", size: t5.breakSize });
                    }
                  }), e5.sort(function(t5, e6) {
                    return t5.value === e6.value ? ("in" === t5.move ? 0 : 1) - ("in" === e6.move ? 0 : 1) : t5.value - e6.value;
                  }), d2 = 0, g2 = p2, e5.forEach(function(t5) {
                    1 === (d2 += "in" === t5.move ? 1 : -1) && "in" === t5.move && (g2 = t5.value), 0 === d2 && n(g2) && (o3.push({ from: g2, to: t5.value, len: t5.value - g2 - (t5.size || 0) }), h2 += t5.value - g2 - (t5.size || 0));
                  }), i4.breakArray = o3, n(p2) && n(u2) && n(s2.min) && (i4.unitLength = u2 - p2 - h2 + a2, r(s2, "afterBreaks"), s2.staticScale ? s2.transA = s2.staticScale : i4.unitLength && (s2.transA *= (u2 - s2.min + a2) / i4.unitLength), a2 && (s2.minPixelPadding = s2.transA * (s2.minPointOffset || 0)), s2.min = p2, s2.max = u2);
                }
              }), l(e4, true) && s2.chart.redraw();
            }
          }
          e3.Additions = m;
        }(i2 || (i2 = {})), i2;
      }), i(e, "masters/modules/broken-axis.src.js", [e["Core/Globals.js"], e["Core/Axis/BrokenAxis.js"]], function(t2, e2) {
        return t2.BrokenAxis = t2.BrokenAxis || e2, t2.BrokenAxis.compose(t2.Axis, t2.Series), t2;
      }), i(e, "Extensions/DataGrouping/ApproximationRegistry.js", [], function() {
        return {};
      }), i(e, "Extensions/DataGrouping/ApproximationDefaults.js", [e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { arrayMax: i2, arrayMin: s, correctFloat: o, extend: r, isNumber: a } = e2;
        function n(t3) {
          let e3 = t3.length, i3 = l(t3);
          return a(i3) && e3 && (i3 = o(i3 / e3)), i3;
        }
        function l(t3) {
          let e3 = t3.length, i3;
          if (!e3 && t3.hasNulls)
            i3 = null;
          else if (e3)
            for (i3 = 0; e3--; )
              i3 += t3[e3];
          return i3;
        }
        let h = { average: n, averages: function() {
          let t3 = [];
          return [].forEach.call(arguments, function(e3) {
            t3.push(n(e3));
          }), void 0 === t3[0] ? void 0 : t3;
        }, close: function(t3) {
          return t3.length ? t3[t3.length - 1] : t3.hasNulls ? null : void 0;
        }, high: function(t3) {
          return t3.length ? i2(t3) : t3.hasNulls ? null : void 0;
        }, hlc: function(e3, i3, s2) {
          if (e3 = t2.high(e3), i3 = t2.low(i3), s2 = t2.close(s2), a(e3) || a(i3) || a(s2))
            return [e3, i3, s2];
        }, low: function(t3) {
          return t3.length ? s(t3) : t3.hasNulls ? null : void 0;
        }, ohlc: function(e3, i3, s2, o2) {
          if (e3 = t2.open(e3), i3 = t2.high(i3), s2 = t2.low(s2), o2 = t2.close(o2), a(e3) || a(i3) || a(s2) || a(o2))
            return [e3, i3, s2, o2];
        }, open: function(t3) {
          return t3.length ? t3[0] : t3.hasNulls ? null : void 0;
        }, range: function(e3, i3) {
          return (e3 = t2.low(e3), i3 = t2.high(i3), a(e3) || a(i3)) ? [e3, i3] : null === e3 && null === i3 ? null : void 0;
        }, sum: l };
        return r(t2, h), h;
      }), i(e, "Extensions/DataGrouping/DataGroupingDefaults.js", [], function() {
        return { common: { groupPixelWidth: 2, dateTimeLabelFormats: { millisecond: ["%A, %e %b, %H:%M:%S.%L", "%A, %e %b, %H:%M:%S.%L", "-%H:%M:%S.%L"], second: ["%A, %e %b, %H:%M:%S", "%A, %e %b, %H:%M:%S", "-%H:%M:%S"], minute: ["%A, %e %b, %H:%M", "%A, %e %b, %H:%M", "-%H:%M"], hour: ["%A, %e %b, %H:%M", "%A, %e %b, %H:%M", "-%H:%M"], day: ["%A, %e %b %Y", "%A, %e %b", "-%A, %e %b %Y"], week: ["Week from %A, %e %b %Y", "%A, %e %b", "-%A, %e %b %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"] } }, seriesSpecific: { line: {}, spline: {}, area: {}, areaspline: {}, arearange: {}, column: { groupPixelWidth: 10 }, columnrange: { groupPixelWidth: 10 }, candlestick: { groupPixelWidth: 10 }, ohlc: { groupPixelWidth: 5 }, hlc: { groupPixelWidth: 5 }, heikinashi: { groupPixelWidth: 10 } }, units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]] };
      }), i(e, "Extensions/DataGrouping/DataGroupingAxisComposition.js", [e["Extensions/DataGrouping/DataGroupingDefaults.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let i2;
        let { addEvent: s, extend: o, merge: r, pick: a } = e2;
        function n(t3) {
          let e3 = this, i3 = e3.series;
          i3.forEach(function(t4) {
            t4.groupPixelWidth = void 0;
          }), i3.forEach(function(i4) {
            i4.groupPixelWidth = e3.getGroupPixelWidth && e3.getGroupPixelWidth(), i4.groupPixelWidth && (i4.hasProcessed = true), i4.applyGrouping(!!t3.hasExtremesChanged);
          });
        }
        function l() {
          let e3 = this.series, i3 = e3.length, s2 = 0, o2 = false, r2, n2;
          for (; i3--; )
            (n2 = e3[i3].options.dataGrouping) && (s2 = Math.max(s2, a(n2.groupPixelWidth, t2.common.groupPixelWidth)), r2 = (e3[i3].processedXData || e3[i3].data).length, (e3[i3].groupPixelWidth || r2 > this.chart.plotSizeX / s2 || r2 && n2.forced) && (o2 = true));
          return o2 ? s2 : 0;
        }
        function h() {
          this.series.forEach(function(t3) {
            t3.hasProcessed = false;
          });
        }
        function d(t3, e3) {
          let s2;
          if (e3 = a(e3, true), t3 || (t3 = { forced: false, units: null }), this instanceof i2)
            for (s2 = this.series.length; s2--; )
              this.series[s2].update({ dataGrouping: t3 }, false);
          else
            this.chart.options.series.forEach(function(e4) {
              e4.dataGrouping = "boolean" == typeof t3 ? t3 : r(t3, e4.dataGrouping);
            });
          this.ordinal && (this.ordinal.slope = void 0), e3 && this.chart.redraw();
        }
        return { compose: function(t3) {
          i2 = t3;
          let e3 = t3.prototype;
          e3.applyGrouping || (s(t3, "afterSetScale", h), s(t3, "postProcessData", n), o(e3, { applyGrouping: n, getGroupPixelWidth: l, setDataGrouping: d }));
        } };
      }), i(e, "Extensions/DataGrouping/DataGroupingSeriesComposition.js", [e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Extensions/DataGrouping/DataGroupingDefaults.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Defaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { series: { prototype: a } } = o, { addEvent: n, defined: l, error: h, extend: d, isNumber: c, merge: p, pick: u } = r, g = a.generatePoints;
        function f(t3) {
          var s2;
          let o2, r2;
          let n2 = this.chart, d2 = this.options.dataGrouping, p2 = false !== this.allowDG && d2 && u(d2.enabled, n2.options.isStock), g2 = this.reserveSpace(), f2 = this.currentDataGrouping, m2, x2, y2 = false;
          p2 && !this.requireSorting && (this.requireSorting = y2 = true);
          let b2 = false == !(this.isCartesian && !this.isDirty && !this.xAxis.isDirty && !this.yAxis.isDirty && !t3) || !p2;
          if (y2 && (this.requireSorting = false), b2)
            return;
          this.destroyGroupedData();
          let v2 = d2.groupAll ? this.xData : this.processedXData, S = d2.groupAll ? this.yData : this.processedYData, M = n2.plotSizeX, k = this.xAxis, C = k.options.ordinal, A = this.groupPixelWidth;
          if (A && v2 && v2.length && M) {
            r2 = true, this.isDirty = true, this.points = null;
            let t4 = k.getExtremes(), p3 = t4.min, u2 = t4.max, f3 = C && k.ordinal && k.ordinal.getGroupIntervalFactor(p3, u2, this) || 1, y3 = A * (u2 - p3) / M * f3, b3 = k.getTimeTicks(i2.Additions.prototype.normalizeTimeTickInterval(y3, d2.units || e2.units), Math.min(p3, v2[0]), Math.max(u2, v2[v2.length - 1]), k.options.startOfWeek, v2, this.closestPointRange), w = a.groupData.apply(this, [v2, S, b3, d2.approximation]), T = w.groupedXData, P = w.groupedYData, L = 0;
            for (d2 && d2.smoothed && T.length && (d2.firstAnchor = "firstPoint", d2.anchor = "middle", d2.lastAnchor = "lastPoint", h(32, false, n2, { "dataGrouping.smoothed": "use dataGrouping.anchor" })), o2 = 1; o2 < b3.length; o2++)
              b3.info.segmentStarts && -1 !== b3.info.segmentStarts.indexOf(o2) || (L = Math.max(b3[o2] - b3[o2 - 1], L));
            (m2 = b3.info).gapSize = L, this.closestPointRange = b3.info.totalRange, this.groupMap = w.groupMap, this.currentDataGrouping = m2, function(t5, e3, i3) {
              let s3 = t5.options.dataGrouping, o3 = t5.currentDataGrouping && t5.currentDataGrouping.gapSize;
              if (!(s3 && t5.xData && o3 && t5.groupMap))
                return;
              let r3 = e3.length - 1, a2 = s3.anchor, n3 = s3.firstAnchor, l2 = s3.lastAnchor, h2 = e3.length - 1, d3 = 0;
              if (n3 && t5.xData[0] >= e3[0]) {
                let i4;
                d3++;
                let s4 = t5.groupMap[0].start, r4 = t5.groupMap[0].length;
                c(s4) && c(r4) && (i4 = s4 + (r4 - 1)), e3[0] = { start: e3[0], middle: e3[0] + 0.5 * o3, end: e3[0] + o3, firstPoint: t5.xData[0], lastPoint: i4 && t5.xData[i4] }[n3];
              }
              if (r3 > 0 && l2 && o3 && e3[r3] >= i3 - o3) {
                h2--;
                let i4 = t5.groupMap[t5.groupMap.length - 1].start;
                e3[r3] = { start: e3[r3], middle: e3[r3] + 0.5 * o3, end: e3[r3] + o3, firstPoint: i4 && t5.xData[i4], lastPoint: t5.xData[t5.xData.length - 1] }[l2];
              }
              if (a2 && "start" !== a2) {
                let t6 = o3 * { middle: 0.5, end: 1 }[a2];
                for (; h2 >= d3; )
                  e3[h2] += t6, h2--;
              }
            }(this, T, u2), g2 && (l((s2 = T)[0]) && c(k.min) && c(k.dataMin) && s2[0] < k.min && ((!l(k.options.min) && k.min <= k.dataMin || k.min === k.dataMin) && (k.min = Math.min(s2[0], k.min)), k.dataMin = Math.min(s2[0], k.dataMin)), l(s2[s2.length - 1]) && c(k.max) && c(k.dataMax) && s2[s2.length - 1] > k.max && ((!l(k.options.max) && c(k.dataMax) && k.max >= k.dataMax || k.max === k.dataMax) && (k.max = Math.max(s2[s2.length - 1], k.max)), k.dataMax = Math.max(s2[s2.length - 1], k.dataMax))), d2.groupAll && (this.allGroupedData = P, T = (x2 = this.cropData(T, P, k.min, k.max)).xData, P = x2.yData, this.cropStart = x2.start), this.processedXData = T, this.processedYData = P;
          } else
            this.groupMap = null;
          this.hasGroupedData = r2, this.preventGraphAnimation = (f2 && f2.totalRange) !== (m2 && m2.totalRange);
        }
        function m() {
          this.groupedData && (this.groupedData.forEach(function(t3, e3) {
            t3 && (this.groupedData[e3] = t3.destroy ? t3.destroy() : null);
          }, this), this.groupedData.length = 0, delete this.allGroupedData);
        }
        function x() {
          g.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null;
        }
        function y() {
          return this.is("arearange") ? "range" : this.is("ohlc") ? "ohlc" : this.is("hlc") ? "hlc" : this.is("column") || this.options.cumulative ? "sum" : "average";
        }
        function b(e3, i3, s2, o2) {
          let r2 = this, a2 = r2.data, n2 = r2.options && r2.options.data, h2 = [], d2 = [], u2 = [], g2 = e3.length, f2 = !!i3, m2 = [], x2 = r2.pointArrayMap, y2 = x2 && x2.length, b2 = ["x"].concat(x2 || ["y"]), v2 = this.options.dataGrouping && this.options.dataGrouping.groupAll, S, M, k, C = 0, A = 0, w = "function" == typeof o2 ? o2 : o2 && t2[o2] ? t2[o2] : t2[r2.getDGApproximation && r2.getDGApproximation() || "average"];
          if (y2) {
            let t3 = x2.length;
            for (; t3--; )
              m2.push([]);
          } else
            m2.push([]);
          let T = y2 || 1;
          for (let t3 = 0; t3 <= g2; t3++)
            if (!(e3[t3] < s2[0])) {
              for (; void 0 !== s2[C + 1] && e3[t3] >= s2[C + 1] || t3 === g2; ) {
                S = s2[C], r2.dataGroupInfo = { start: v2 ? A : r2.cropStart + A, length: m2[0].length, groupStart: S }, k = w.apply(r2, m2), r2.pointClass && !l(r2.dataGroupInfo.options) && (r2.dataGroupInfo.options = p(r2.pointClass.prototype.optionsToObject.call({ series: r2 }, r2.options.data[r2.cropStart + A])), b2.forEach(function(t4) {
                  delete r2.dataGroupInfo.options[t4];
                })), void 0 !== k && (h2.push(S), d2.push(k), u2.push(r2.dataGroupInfo)), A = t3;
                for (let t4 = 0; t4 < T; t4++)
                  m2[t4].length = 0, m2[t4].hasNulls = false;
                if (C += 1, t3 === g2)
                  break;
              }
              if (t3 === g2)
                break;
              if (x2) {
                let e4;
                let i4 = r2.options.dataGrouping && r2.options.dataGrouping.groupAll ? t3 : r2.cropStart + t3, s3 = a2 && a2[i4] || r2.pointClass.prototype.applyOptions.apply({ series: r2 }, [n2[i4]]);
                for (let t4 = 0; t4 < y2; t4++)
                  c(e4 = s3[x2[t4]]) ? m2[t4].push(e4) : null === e4 && (m2[t4].hasNulls = true);
              } else
                c(M = f2 ? i3[t3] : null) ? m2[0].push(M) : null === M && (m2[0].hasNulls = true);
            }
          return { groupedXData: h2, groupedYData: d2, groupMap: u2 };
        }
        function v(t3) {
          let i3 = t3.options, o2 = this.type, r2 = this.chart.options.plotOptions, a2 = this.useCommonDataGrouping && e2.common, n2 = e2.seriesSpecific, l2 = s.defaultOptions.plotOptions[o2].dataGrouping;
          if (r2 && (n2[o2] || a2)) {
            let t4 = this.chart.rangeSelector;
            l2 || (l2 = p(e2.common, n2[o2])), i3.dataGrouping = p(a2, l2, r2.series && r2.series.dataGrouping, r2[o2].dataGrouping, this.userOptions.dataGrouping, !i3.isInternal && t4 && c(t4.selected) && t4.buttonOptions[t4.selected].dataGrouping);
          }
        }
        return { compose: function(t3) {
          let e3 = t3.prototype;
          e3.applyGrouping || (n(t3.prototype.pointClass, "update", function() {
            if (this.dataGroup)
              return h(24, false, this.series.chart), false;
          }), n(t3, "afterSetOptions", v), n(t3, "destroy", m), d(e3, { applyGrouping: f, destroyGroupedData: m, generatePoints: x, getDGApproximation: y, groupData: b }));
        }, groupData: b };
      }), i(e, "Extensions/DataGrouping/DataGrouping.js", [e["Extensions/DataGrouping/DataGroupingAxisComposition.js"], e["Extensions/DataGrouping/DataGroupingDefaults.js"], e["Extensions/DataGrouping/DataGroupingSeriesComposition.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { format: a } = s, { composed: n } = o, { addEvent: l, extend: h, isNumber: d, pick: c, pushUnique: p } = r;
        function u(t3) {
          let i3 = this.chart, s2 = i3.time, o2 = t3.labelConfig, r2 = o2.series, n2 = o2.point, l2 = r2.options, p2 = r2.tooltipOptions, u2 = l2.dataGrouping, g = r2.xAxis, f = p2.xDateFormat, m, x, y, b, v, S = p2[t3.isFooter ? "footerFormat" : "headerFormat"];
          if (g && "datetime" === g.options.type && u2 && d(o2.key)) {
            x = r2.currentDataGrouping, y = u2.dateTimeLabelFormats || e2.common.dateTimeLabelFormats, x ? (b = y[x.unitName], 1 === x.count ? f = b[0] : (f = b[1], m = b[2])) : !f && y && g.dateTime && (f = g.dateTime.getXDateFormat(o2.x, p2.dateTimeLabelFormats));
            let l3 = c(r2.groupMap?.[n2.index].groupStart, o2.key), d2 = l3 + x?.totalRange - 1;
            v = s2.dateFormat(f, l3), m && (v += s2.dateFormat(m, d2)), r2.chart.styledMode && (S = this.styledModeFormat(S)), t3.text = a(S, { point: h(o2.point, { key: v }), series: r2 }, i3), t3.preventDefault();
          }
        }
        return { compose: function(e3, s2, o2) {
          t2.compose(e3), i2.compose(s2), o2 && p(n, "DataGrouping") && l(o2, "headerFormatter", u);
        }, groupData: i2.groupData };
      }), i(e, "masters/modules/datagrouping.src.js", [e["Core/Globals.js"], e["Extensions/DataGrouping/ApproximationDefaults.js"], e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Extensions/DataGrouping/DataGrouping.js"]], function(t2, e2, i2, s) {
        return t2.dataGrouping = t2.dataGrouping || {}, t2.dataGrouping.approximationDefaults = t2.dataGrouping.approximationDefaults || e2, t2.dataGrouping.approximations = t2.dataGrouping.approximations || i2, s.compose(t2.Axis, t2.Series, t2.Tooltip), t2;
      }), i(e, "Extensions/Annotations/NavigationBindingsUtilities.js", [e["Core/Utilities.js"]], function(t2) {
        let { defined: e2, isNumber: i2, pick: s } = t2, o = { backgroundColor: "string", borderColor: "string", borderRadius: "string", color: "string", fill: "string", fontSize: "string", labels: "string", name: "string", stroke: "string", title: "string" };
        return { annotationsFieldsTypes: o, getAssignedAxis: function(t3) {
          return t3.filter((t4) => {
            let e3 = t4.axis.getExtremes(), o2 = e3.min, r = e3.max, a = s(t4.axis.minPointOffset, 0);
            return i2(o2) && i2(r) && t4.value >= o2 - a && t4.value <= r + a && !t4.axis.options.isInternal;
          })[0];
        }, getFieldType: function(t3, i3) {
          let s2 = o[t3], r = typeof i3;
          return e2(s2) && (r = s2), { string: "text", number: "number", boolean: "checkbox" }[r];
        } };
      }), i(e, "Extensions/MouseWheelZoom/MouseWheelZoom.js", [e["Core/Utilities.js"], e["Extensions/Annotations/NavigationBindingsUtilities.js"]], function(t2, e2) {
        let i2;
        let { addEvent: s, isObject: o, pick: r, defined: a, merge: n } = t2, { getAssignedAxis: l } = e2, h = [], d = { enabled: true, sensitivity: 1.1 }, c = (t3) => (o(t3) || (t3 = { enabled: t3 ?? true }), n(d, t3)), p = function(t3, e3, s2, o2, n2, l2, h2) {
          let d2 = r(h2.type, t3.zooming.type, ""), c2 = [];
          "x" === d2 ? c2 = s2 : "y" === d2 ? c2 = o2 : "xy" === d2 && (c2 = t3.axes);
          let p2 = t3.transform({ axes: c2, to: { x: n2 - 5, y: l2 - 5, width: 10, height: 10 }, from: { x: n2 - 5 * e3, y: l2 - 5 * e3, width: 10 * e3, height: 10 * e3 }, trigger: "mousewheel" });
          return p2 && (a(i2) && clearTimeout(i2), i2 = setTimeout(() => {
            t3.pointer?.drop();
          }, 400)), p2;
        };
        function u() {
          let t3 = c(this.zooming.mouseWheel);
          t3.enabled && s(this.container, "wheel", (e3) => {
            e3 = this.pointer?.normalize(e3) || e3;
            let { pointer: i3 } = this, s2 = i3 && !i3.inClass(e3.target, "highcharts-no-mousewheel");
            if (this.isInsidePlot(e3.chartX - this.plotLeft, e3.chartY - this.plotTop) && s2) {
              let s3 = t3.sensitivity || 1.1, o2 = e3.detail || (e3.deltaY || 0) / 120, r2 = l(i3.getCoordinates(e3).xAxis), a2 = l(i3.getCoordinates(e3).yAxis);
              p(this, Math.pow(s3, o2), r2 ? [r2.axis] : this.xAxis, a2 ? [a2.axis] : this.yAxis, e3.chartX, e3.chartY, t3) && e3.preventDefault?.();
            }
          });
        }
        return { compose: function(t3) {
          -1 === h.indexOf(t3) && (h.push(t3), s(t3, "afterGetContainer", u));
        } };
      }), i(e, "masters/modules/mouse-wheel-zoom.src.js", [e["Core/Globals.js"], e["Extensions/MouseWheelZoom/MouseWheelZoom.js"]], function(t2, e2) {
        return t2.MouseWheelZoom = t2.MouseWheelZoom || e2, t2.MouseWheelZoom.compose(t2.Chart), t2;
      }), i(e, "masters/modules/stock.src.js", [e["Core/Globals.js"], e["Series/DataModifyComposition.js"], e["Stock/Navigator/Navigator.js"], e["Core/Axis/OrdinalAxis.js"], e["Stock/RangeSelector/RangeSelector.js"], e["Stock/Scrollbar/Scrollbar.js"], e["Core/Chart/StockChart.js"], e["Series/OHLC/OHLCSeries.js"], e["Series/Flags/FlagsSeries.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
        return t2.Navigator = t2.Navigator || i2, t2.OrdinalAxis = t2.OrdinalAxis || s, t2.RangeSelector = t2.RangeSelector || o, t2.Scrollbar = t2.Scrollbar || r, t2.stockChart = t2.stockChart || a.stockChart, t2.StockChart = t2.StockChart || t2.stockChart, t2.extend(t2.StockChart, a), e2.compose(t2.Series, t2.Axis, t2.Point), l.compose(t2.Renderer), n.compose(t2.Series), t2.Navigator.compose(t2.Chart, t2.Axis, t2.Series), t2.OrdinalAxis.compose(t2.Axis, t2.Series, t2.Chart), t2.RangeSelector.compose(t2.Axis, t2.Chart), t2.Scrollbar.compose(t2.Axis), t2.StockChart.compose(t2.Chart, t2.Axis, t2.Series, t2.SVGRenderer), t2;
      }), i(e, "masters/highstock.src.js", [e["masters/highcharts.src.js"]], function(t2) {
        return t2.product = "Highstock", t2;
      }), e["masters/highstock.src.js"]._modules = e, e["masters/highstock.src.js"];
    });
  }
});
export default require_highstock();
//# sourceMappingURL=highcharts_highstock.js.map
