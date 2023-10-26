/*! For license information please see memberstack.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      9644: (t, e, n) => {
        t.exports = n(5644);
      },
      353: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = n(6955),
          i = n(2233),
          s = n(8030),
          a = n(7948),
          c = n(1875),
          u = n(842),
          l = n(8560),
          d = n(1218),
          f = n(8047),
          h = n(738);
        t.exports = function (t) {
          return new Promise(function (e, n) {
            var p,
              m = t.data,
              v = t.headers,
              g = t.responseType;
            function b() {
              t.cancelToken && t.cancelToken.unsubscribe(p),
                t.signal && t.signal.removeEventListener("abort", p);
            }
            r.isFormData(m) &&
              r.isStandardBrowserEnv() &&
              delete v["Content-Type"];
            var w = new XMLHttpRequest();
            if (t.auth) {
              var y = t.auth.username || "",
                _ = t.auth.password
                  ? unescape(encodeURIComponent(t.auth.password))
                  : "";
              v.Authorization = "Basic " + btoa(y + ":" + _);
            }
            var k = a(t.baseURL, t.url);
            function x() {
              if (w) {
                var r =
                    "getAllResponseHeaders" in w
                      ? c(w.getAllResponseHeaders())
                      : null,
                  i = {
                    data:
                      g && "text" !== g && "json" !== g
                        ? w.response
                        : w.responseText,
                    status: w.status,
                    statusText: w.statusText,
                    headers: r,
                    config: t,
                    request: w,
                  };
                o(
                  function (t) {
                    e(t), b();
                  },
                  function (t) {
                    n(t), b();
                  },
                  i
                ),
                  (w = null);
              }
            }
            if (
              (w.open(
                t.method.toUpperCase(),
                s(k, t.params, t.paramsSerializer),
                !0
              ),
              (w.timeout = t.timeout),
              "onloadend" in w
                ? (w.onloadend = x)
                : (w.onreadystatechange = function () {
                    w &&
                      4 === w.readyState &&
                      (0 !== w.status ||
                        (w.responseURL &&
                          0 === w.responseURL.indexOf("file:"))) &&
                      setTimeout(x);
                  }),
              (w.onabort = function () {
                w &&
                  (n(new d("Request aborted", d.ECONNABORTED, t, w)),
                  (w = null));
              }),
              (w.onerror = function () {
                n(new d("Network Error", d.ERR_NETWORK, t, w, w)), (w = null);
              }),
              (w.ontimeout = function () {
                var e = t.timeout
                    ? "timeout of " + t.timeout + "ms exceeded"
                    : "timeout exceeded",
                  r = t.transitional || l;
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                  n(
                    new d(
                      e,
                      r.clarifyTimeoutError ? d.ETIMEDOUT : d.ECONNABORTED,
                      t,
                      w
                    )
                  ),
                  (w = null);
              }),
              r.isStandardBrowserEnv())
            ) {
              var S =
                (t.withCredentials || u(k)) && t.xsrfCookieName
                  ? i.read(t.xsrfCookieName)
                  : void 0;
              S && (v[t.xsrfHeaderName] = S);
            }
            "setRequestHeader" in w &&
              r.forEach(v, function (t, e) {
                void 0 === m && "content-type" === e.toLowerCase()
                  ? delete v[e]
                  : w.setRequestHeader(e, t);
              }),
              r.isUndefined(t.withCredentials) ||
                (w.withCredentials = !!t.withCredentials),
              g && "json" !== g && (w.responseType = t.responseType),
              "function" == typeof t.onDownloadProgress &&
                w.addEventListener("progress", t.onDownloadProgress),
              "function" == typeof t.onUploadProgress &&
                w.upload &&
                w.upload.addEventListener("progress", t.onUploadProgress),
              (t.cancelToken || t.signal) &&
                ((p = function (t) {
                  w &&
                    (n(!t || (t && t.type) ? new f() : t),
                    w.abort(),
                    (w = null));
                }),
                t.cancelToken && t.cancelToken.subscribe(p),
                t.signal &&
                  (t.signal.aborted
                    ? p()
                    : t.signal.addEventListener("abort", p))),
              m || (m = null);
            var P = h(k);
            P && -1 === ["http", "https", "file"].indexOf(P)
              ? n(
                  new d("Unsupported protocol " + P + ":", d.ERR_BAD_REQUEST, t)
                )
              : w.send(m);
          });
        };
      },
      5644: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = n(3644),
          i = n(2215),
          s = n(2937),
          a = (function t(e) {
            var n = new i(e),
              a = o(i.prototype.request, n);
            return (
              r.extend(a, i.prototype, n),
              r.extend(a, n),
              (a.create = function (n) {
                return t(s(e, n));
              }),
              a
            );
          })(n(663));
        (a.Axios = i),
          (a.CanceledError = n(8047)),
          (a.CancelToken = n(4089)),
          (a.isCancel = n(8041)),
          (a.VERSION = n(9241).version),
          (a.toFormData = n(9027)),
          (a.AxiosError = n(1218)),
          (a.Cancel = a.CanceledError),
          (a.all = function (t) {
            return Promise.all(t);
          }),
          (a.spread = n(783)),
          (a.isAxiosError = n(5587)),
          (t.exports = a),
          (t.exports.default = a);
      },
      4089: (t, e, n) => {
        "use strict";
        var r = n(8047);
        function o(t) {
          if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
          var e;
          this.promise = new Promise(function (t) {
            e = t;
          });
          var n = this;
          this.promise.then(function (t) {
            if (n._listeners) {
              var e,
                r = n._listeners.length;
              for (e = 0; e < r; e++) n._listeners[e](t);
              n._listeners = null;
            }
          }),
            (this.promise.then = function (t) {
              var e,
                r = new Promise(function (t) {
                  n.subscribe(t), (e = t);
                }).then(t);
              return (
                (r.cancel = function () {
                  n.unsubscribe(e);
                }),
                r
              );
            }),
            t(function (t) {
              n.reason || ((n.reason = new r(t)), e(n.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.prototype.subscribe = function (t) {
            this.reason
              ? t(this.reason)
              : this._listeners
              ? this._listeners.push(t)
              : (this._listeners = [t]);
          }),
          (o.prototype.unsubscribe = function (t) {
            if (this._listeners) {
              var e = this._listeners.indexOf(t);
              -1 !== e && this._listeners.splice(e, 1);
            }
          }),
          (o.source = function () {
            var t;
            return {
              token: new o(function (e) {
                t = e;
              }),
              cancel: t,
            };
          }),
          (t.exports = o);
      },
      8047: (t, e, n) => {
        "use strict";
        var r = n(1218);
        function o(t) {
          r.call(this, null == t ? "canceled" : t, r.ERR_CANCELED),
            (this.name = "CanceledError");
        }
        n(3044).inherits(o, r, { __CANCEL__: !0 }), (t.exports = o);
      },
      8041: (t) => {
        "use strict";
        t.exports = function (t) {
          return !(!t || !t.__CANCEL__);
        };
      },
      2215: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = n(8030),
          i = n(946),
          s = n(6895),
          a = n(2937),
          c = n(7948),
          u = n(7525),
          l = u.validators;
        function d(t) {
          (this.defaults = t),
            (this.interceptors = { request: new i(), response: new i() });
        }
        (d.prototype.request = function (t, e) {
          "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
            (e = a(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var n = e.transitional;
          void 0 !== n &&
            u.assertOptions(
              n,
              {
                silentJSONParsing: l.transitional(l.boolean),
                forcedJSONParsing: l.transitional(l.boolean),
                clarifyTimeoutError: l.transitional(l.boolean),
              },
              !1
            );
          var r = [],
            o = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((o = o && t.synchronous), r.unshift(t.fulfilled, t.rejected));
          });
          var i,
            c = [];
          if (
            (this.interceptors.response.forEach(function (t) {
              c.push(t.fulfilled, t.rejected);
            }),
            !o)
          ) {
            var d = [s, void 0];
            for (
              Array.prototype.unshift.apply(d, r),
                d = d.concat(c),
                i = Promise.resolve(e);
              d.length;

            )
              i = i.then(d.shift(), d.shift());
            return i;
          }
          for (var f = e; r.length; ) {
            var h = r.shift(),
              p = r.shift();
            try {
              f = h(f);
            } catch (t) {
              p(t);
              break;
            }
          }
          try {
            i = s(f);
          } catch (t) {
            return Promise.reject(t);
          }
          for (; c.length; ) i = i.then(c.shift(), c.shift());
          return i;
        }),
          (d.prototype.getUri = function (t) {
            t = a(this.defaults, t);
            var e = c(t.baseURL, t.url);
            return o(e, t.params, t.paramsSerializer);
          }),
          r.forEach(["delete", "get", "head", "options"], function (t) {
            d.prototype[t] = function (e, n) {
              return this.request(
                a(n || {}, { method: t, url: e, data: (n || {}).data })
              );
            };
          }),
          r.forEach(["post", "put", "patch"], function (t) {
            function e(e) {
              return function (n, r, o) {
                return this.request(
                  a(o || {}, {
                    method: t,
                    headers: e ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (d.prototype[t] = e()), (d.prototype[t + "Form"] = e(!0));
          }),
          (t.exports = d);
      },
      1218: (t, e, n) => {
        "use strict";
        var r = n(3044);
        function o(t, e, n, r, o) {
          Error.call(this),
            (this.message = t),
            (this.name = "AxiosError"),
            e && (this.code = e),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        r.inherits(o, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        var i = o.prototype,
          s = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
        ].forEach(function (t) {
          s[t] = { value: t };
        }),
          Object.defineProperties(o, s),
          Object.defineProperty(i, "isAxiosError", { value: !0 }),
          (o.from = function (t, e, n, s, a, c) {
            var u = Object.create(i);
            return (
              r.toFlatObject(t, u, function (t) {
                return t !== Error.prototype;
              }),
              o.call(u, t.message, e, n, s, a),
              (u.name = t.name),
              c && Object.assign(u, c),
              u
            );
          }),
          (t.exports = o);
      },
      946: (t, e, n) => {
        "use strict";
        var r = n(3044);
        function o() {
          this.handlers = [];
        }
        (o.prototype.use = function (t, e, n) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (o.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null);
          }),
          (o.prototype.forEach = function (t) {
            r.forEach(this.handlers, function (e) {
              null !== e && t(e);
            });
          }),
          (t.exports = o);
      },
      7948: (t, e, n) => {
        "use strict";
        var r = n(9192),
          o = n(8762);
        t.exports = function (t, e) {
          return t && !r(e) ? o(t, e) : e;
        };
      },
      6895: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = n(8556),
          i = n(8041),
          s = n(663),
          a = n(8047);
        function c(t) {
          if (
            (t.cancelToken && t.cancelToken.throwIfRequested(),
            t.signal && t.signal.aborted)
          )
            throw new a();
        }
        t.exports = function (t) {
          return (
            c(t),
            (t.headers = t.headers || {}),
            (t.data = o.call(t, t.data, t.headers, t.transformRequest)),
            (t.headers = r.merge(
              t.headers.common || {},
              t.headers[t.method] || {},
              t.headers
            )),
            r.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (e) {
                delete t.headers[e];
              }
            ),
            (t.adapter || s.adapter)(t).then(
              function (e) {
                return (
                  c(t),
                  (e.data = o.call(t, e.data, e.headers, t.transformResponse)),
                  e
                );
              },
              function (e) {
                return (
                  i(e) ||
                    (c(t),
                    e &&
                      e.response &&
                      (e.response.data = o.call(
                        t,
                        e.response.data,
                        e.response.headers,
                        t.transformResponse
                      ))),
                  Promise.reject(e)
                );
              }
            )
          );
        };
      },
      2937: (t, e, n) => {
        "use strict";
        var r = n(3044);
        t.exports = function (t, e) {
          e = e || {};
          var n = {};
          function o(t, e) {
            return r.isPlainObject(t) && r.isPlainObject(e)
              ? r.merge(t, e)
              : r.isPlainObject(e)
              ? r.merge({}, e)
              : r.isArray(e)
              ? e.slice()
              : e;
          }
          function i(n) {
            return r.isUndefined(e[n])
              ? r.isUndefined(t[n])
                ? void 0
                : o(void 0, t[n])
              : o(t[n], e[n]);
          }
          function s(t) {
            if (!r.isUndefined(e[t])) return o(void 0, e[t]);
          }
          function a(n) {
            return r.isUndefined(e[n])
              ? r.isUndefined(t[n])
                ? void 0
                : o(void 0, t[n])
              : o(void 0, e[n]);
          }
          function c(n) {
            return n in e ? o(t[n], e[n]) : n in t ? o(void 0, t[n]) : void 0;
          }
          var u = {
            url: s,
            method: s,
            data: s,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: c,
          };
          return (
            r.forEach(Object.keys(t).concat(Object.keys(e)), function (t) {
              var e = u[t] || i,
                o = e(t);
              (r.isUndefined(o) && e !== c) || (n[t] = o);
            }),
            n
          );
        };
      },
      6955: (t, e, n) => {
        "use strict";
        var r = n(1218);
        t.exports = function (t, e, n) {
          var o = n.config.validateStatus;
          n.status && o && !o(n.status)
            ? e(
                new r(
                  "Request failed with status code " + n.status,
                  [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][
                    Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
                )
              )
            : t(n);
        };
      },
      8556: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = n(663);
        t.exports = function (t, e, n) {
          var i = this || o;
          return (
            r.forEach(n, function (n) {
              t = n.call(i, t, e);
            }),
            t
          );
        };
      },
      663: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = n(8868),
          i = n(1218),
          s = n(8560),
          a = n(9027),
          c = { "Content-Type": "application/x-www-form-urlencoded" };
        function u(t, e) {
          !r.isUndefined(t) &&
            r.isUndefined(t["Content-Type"]) &&
            (t["Content-Type"] = e);
        }
        var l,
          d = {
            transitional: s,
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                ("undefined" != typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (l = n(353)),
              l),
            transformRequest: [
              function (t, e) {
                if (
                  (o(e, "Accept"),
                  o(e, "Content-Type"),
                  r.isFormData(t) ||
                    r.isArrayBuffer(t) ||
                    r.isBuffer(t) ||
                    r.isStream(t) ||
                    r.isFile(t) ||
                    r.isBlob(t))
                )
                  return t;
                if (r.isArrayBufferView(t)) return t.buffer;
                if (r.isURLSearchParams(t))
                  return (
                    u(e, "application/x-www-form-urlencoded;charset=utf-8"),
                    t.toString()
                  );
                var n,
                  i = r.isObject(t),
                  s = e && e["Content-Type"];
                if (
                  (n = r.isFileList(t)) ||
                  (i && "multipart/form-data" === s)
                ) {
                  var c = this.env && this.env.FormData;
                  return a(n ? { "files[]": t } : t, c && new c());
                }
                return i || "application/json" === s
                  ? (u(e, "application/json"),
                    (function (t, e, n) {
                      if (r.isString(t))
                        try {
                          return (0, JSON.parse)(t), r.trim(t);
                        } catch (t) {
                          if ("SyntaxError" !== t.name) throw t;
                        }
                      return (0, JSON.stringify)(t);
                    })(t))
                  : t;
              },
            ],
            transformResponse: [
              function (t) {
                var e = this.transitional || d.transitional,
                  n = e && e.silentJSONParsing,
                  o = e && e.forcedJSONParsing,
                  s = !n && "json" === this.responseType;
                if (s || (o && r.isString(t) && t.length))
                  try {
                    return JSON.parse(t);
                  } catch (t) {
                    if (s) {
                      if ("SyntaxError" === t.name)
                        throw i.from(
                          t,
                          i.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response
                        );
                      throw t;
                    }
                  }
                return t;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: n(4684) },
            validateStatus: function (t) {
              return t >= 200 && t < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        r.forEach(["delete", "get", "head"], function (t) {
          d.headers[t] = {};
        }),
          r.forEach(["post", "put", "patch"], function (t) {
            d.headers[t] = r.merge(c);
          }),
          (t.exports = d);
      },
      8560: (t) => {
        "use strict";
        t.exports = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
      },
      9241: (t) => {
        t.exports = { version: "0.27.2" };
      },
      3644: (t) => {
        "use strict";
        t.exports = function (t, e) {
          return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            return t.apply(e, n);
          };
        };
      },
      8030: (t, e, n) => {
        "use strict";
        var r = n(3044);
        function o(t) {
          return encodeURIComponent(t)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        t.exports = function (t, e, n) {
          if (!e) return t;
          var i;
          if (n) i = n(e);
          else if (r.isURLSearchParams(e)) i = e.toString();
          else {
            var s = [];
            r.forEach(e, function (t, e) {
              null != t &&
                (r.isArray(t) ? (e += "[]") : (t = [t]),
                r.forEach(t, function (t) {
                  r.isDate(t)
                    ? (t = t.toISOString())
                    : r.isObject(t) && (t = JSON.stringify(t)),
                    s.push(o(e) + "=" + o(t));
                }));
            }),
              (i = s.join("&"));
          }
          if (i) {
            var a = t.indexOf("#");
            -1 !== a && (t = t.slice(0, a)),
              (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
          }
          return t;
        };
      },
      8762: (t) => {
        "use strict";
        t.exports = function (t, e) {
          return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        };
      },
      2233: (t, e, n) => {
        "use strict";
        var r = n(3044);
        t.exports = r.isStandardBrowserEnv()
          ? {
              write: function (t, e, n, o, i, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)),
                  r.isNumber(n) &&
                    a.push("expires=" + new Date(n).toGMTString()),
                  r.isString(o) && a.push("path=" + o),
                  r.isString(i) && a.push("domain=" + i),
                  !0 === s && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read: function (t) {
                var e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove: function (t) {
                this.write(t, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      9192: (t) => {
        "use strict";
        t.exports = function (t) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        };
      },
      5587: (t, e, n) => {
        "use strict";
        var r = n(3044);
        t.exports = function (t) {
          return r.isObject(t) && !0 === t.isAxiosError;
        };
      },
      842: (t, e, n) => {
        "use strict";
        var r = n(3044);
        t.exports = r.isStandardBrowserEnv()
          ? (function () {
              var t,
                e = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function o(t) {
                var r = t;
                return (
                  e && (n.setAttribute("href", r), (r = n.href)),
                  n.setAttribute("href", r),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (t = o(window.location.href)),
                function (e) {
                  var n = r.isString(e) ? o(e) : e;
                  return n.protocol === t.protocol && n.host === t.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      8868: (t, e, n) => {
        "use strict";
        var r = n(3044);
        t.exports = function (t, e) {
          r.forEach(t, function (n, r) {
            r !== e &&
              r.toUpperCase() === e.toUpperCase() &&
              ((t[e] = n), delete t[r]);
          });
        };
      },
      4684: (t) => {
        t.exports = null;
      },
      1875: (t, e, n) => {
        "use strict";
        var r = n(3044),
          o = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        t.exports = function (t) {
          var e,
            n,
            i,
            s = {};
          return t
            ? (r.forEach(t.split("\n"), function (t) {
                if (
                  ((i = t.indexOf(":")),
                  (e = r.trim(t.substr(0, i)).toLowerCase()),
                  (n = r.trim(t.substr(i + 1))),
                  e)
                ) {
                  if (s[e] && o.indexOf(e) >= 0) return;
                  s[e] =
                    "set-cookie" === e
                      ? (s[e] ? s[e] : []).concat([n])
                      : s[e]
                      ? s[e] + ", " + n
                      : n;
                }
              }),
              s)
            : s;
        };
      },
      738: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
          return (e && e[1]) || "";
        };
      },
      783: (t) => {
        "use strict";
        t.exports = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        };
      },
      9027: (t, e, n) => {
        "use strict";
        var r = n(3044);
        t.exports = function (t, e) {
          e = e || new FormData();
          var n = [];
          function o(t) {
            return null === t
              ? ""
              : r.isDate(t)
              ? t.toISOString()
              : r.isArrayBuffer(t) || r.isTypedArray(t)
              ? "function" == typeof Blob
                ? new Blob([t])
                : Buffer.from(t)
              : t;
          }
          return (
            (function t(i, s) {
              if (r.isPlainObject(i) || r.isArray(i)) {
                if (-1 !== n.indexOf(i))
                  throw Error("Circular reference detected in " + s);
                n.push(i),
                  r.forEach(i, function (n, i) {
                    if (!r.isUndefined(n)) {
                      var a,
                        c = s ? s + "." + i : i;
                      if (n && !s && "object" == typeof n)
                        if (r.endsWith(i, "{}")) n = JSON.stringify(n);
                        else if (r.endsWith(i, "[]") && (a = r.toArray(n)))
                          return void a.forEach(function (t) {
                            !r.isUndefined(t) && e.append(c, o(t));
                          });
                      t(n, c);
                    }
                  }),
                  n.pop();
              } else e.append(s, o(i));
            })(t),
            e
          );
        };
      },
      7525: (t, e, n) => {
        "use strict";
        var r = n(9241).version,
          o = n(1218),
          i = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (t, e) {
            i[t] = function (n) {
              return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
            };
          }
        );
        var s = {};
        (i.transitional = function (t, e, n) {
          function i(t, e) {
            return (
              "[Axios v" +
              r +
              "] Transitional option '" +
              t +
              "'" +
              e +
              (n ? ". " + n : "")
            );
          }
          return function (n, r, a) {
            if (!1 === t)
              throw new o(
                i(r, " has been removed" + (e ? " in " + e : "")),
                o.ERR_DEPRECATED
              );
            return (
              e &&
                !s[r] &&
                ((s[r] = !0),
                console.warn(
                  i(
                    r,
                    " has been deprecated since v" +
                      e +
                      " and will be removed in the near future"
                  )
                )),
              !t || t(n, r, a)
            );
          };
        }),
          (t.exports = {
            assertOptions: function (t, e, n) {
              if ("object" != typeof t)
                throw new o(
                  "options must be an object",
                  o.ERR_BAD_OPTION_VALUE
                );
              for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
                var s = r[i],
                  a = e[s];
                if (a) {
                  var c = t[s],
                    u = void 0 === c || a(c, s, t);
                  if (!0 !== u)
                    throw new o(
                      "option " + s + " must be " + u,
                      o.ERR_BAD_OPTION_VALUE
                    );
                } else if (!0 !== n)
                  throw new o("Unknown option " + s, o.ERR_BAD_OPTION);
              }
            },
            validators: i,
          });
      },
      3044: (t, e, n) => {
        "use strict";
        var r,
          o = n(3644),
          i = Object.prototype.toString,
          s =
            ((r = Object.create(null)),
            function (t) {
              var e = i.call(t);
              return r[e] || (r[e] = e.slice(8, -1).toLowerCase());
            });
        function a(t) {
          return (
            (t = t.toLowerCase()),
            function (e) {
              return s(e) === t;
            }
          );
        }
        function c(t) {
          return Array.isArray(t);
        }
        function u(t) {
          return void 0 === t;
        }
        var l = a("ArrayBuffer");
        function d(t) {
          return null !== t && "object" == typeof t;
        }
        function f(t) {
          if ("object" !== s(t)) return !1;
          var e = Object.getPrototypeOf(t);
          return null === e || e === Object.prototype;
        }
        var h = a("Date"),
          p = a("File"),
          m = a("Blob"),
          v = a("FileList");
        function g(t) {
          return "[object Function]" === i.call(t);
        }
        var b = a("URLSearchParams");
        function w(t, e) {
          if (null != t)
            if (("object" != typeof t && (t = [t]), c(t)))
              for (var n = 0, r = t.length; n < r; n++)
                e.call(null, t[n], n, t);
            else
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) &&
                  e.call(null, t[o], o, t);
        }
        var y,
          _ =
            ((y =
              "undefined" != typeof Uint8Array &&
              Object.getPrototypeOf(Uint8Array)),
            function (t) {
              return y && t instanceof y;
            });
        t.exports = {
          isArray: c,
          isArrayBuffer: l,
          isBuffer: function (t) {
            return (
              null !== t &&
              !u(t) &&
              null !== t.constructor &&
              !u(t.constructor) &&
              "function" == typeof t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
          },
          isFormData: function (t) {
            var e = "[object FormData]";
            return (
              t &&
              (("function" == typeof FormData && t instanceof FormData) ||
                i.call(t) === e ||
                (g(t.toString) && t.toString() === e))
            );
          },
          isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && l(t.buffer);
          },
          isString: function (t) {
            return "string" == typeof t;
          },
          isNumber: function (t) {
            return "number" == typeof t;
          },
          isObject: d,
          isPlainObject: f,
          isUndefined: u,
          isDate: h,
          isFile: p,
          isBlob: m,
          isFunction: g,
          isStream: function (t) {
            return d(t) && g(t.pipe);
          },
          isURLSearchParams: b,
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: w,
          merge: function t() {
            var e = {};
            function n(n, r) {
              f(e[r]) && f(n)
                ? (e[r] = t(e[r], n))
                : f(n)
                ? (e[r] = t({}, n))
                : c(n)
                ? (e[r] = n.slice())
                : (e[r] = n);
            }
            for (var r = 0, o = arguments.length; r < o; r++)
              w(arguments[r], n);
            return e;
          },
          extend: function (t, e, n) {
            return (
              w(e, function (e, r) {
                t[r] = n && "function" == typeof e ? o(e, n) : e;
              }),
              t
            );
          },
          trim: function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (t) {
            return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
          },
          inherits: function (t, e, n, r) {
            (t.prototype = Object.create(e.prototype, r)),
              (t.prototype.constructor = t),
              n && Object.assign(t.prototype, n);
          },
          toFlatObject: function (t, e, n) {
            var r,
              o,
              i,
              s = {};
            e = e || {};
            do {
              for (o = (r = Object.getOwnPropertyNames(t)).length; o-- > 0; )
                s[(i = r[o])] || ((e[i] = t[i]), (s[i] = !0));
              t = Object.getPrototypeOf(t);
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e;
          },
          kindOf: s,
          kindOfTest: a,
          endsWith: function (t, e, n) {
            (t = String(t)),
              (void 0 === n || n > t.length) && (n = t.length),
              (n -= e.length);
            var r = t.indexOf(e, n);
            return -1 !== r && r === n;
          },
          toArray: function (t) {
            if (!t) return null;
            var e = t.length;
            if (u(e)) return null;
            for (var n = new Array(e); e-- > 0; ) n[e] = t[e];
            return n;
          },
          isTypedArray: _,
          isFileList: v,
        };
      },
      602: function (t) {
        t.exports = (function () {
          "use strict";
          function t(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) t[r] = n[r];
            }
            return t;
          }
          return (function e(n, r) {
            function o(e, o, i) {
              if ("undefined" != typeof document) {
                "number" == typeof (i = t({}, r, i)).expires &&
                  (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                  i.expires && (i.expires = i.expires.toUTCString()),
                  (e = encodeURIComponent(e)
                    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[()]/g, escape));
                var s = "";
                for (var a in i)
                  i[a] &&
                    ((s += "; " + a),
                    !0 !== i[a] && (s += "=" + i[a].split(";")[0]));
                return (document.cookie = e + "=" + n.write(o, e) + s);
              }
            }
            return Object.create(
              {
                set: o,
                get: function (t) {
                  if (
                    "undefined" != typeof document &&
                    (!arguments.length || t)
                  ) {
                    for (
                      var e = document.cookie
                          ? document.cookie.split("; ")
                          : [],
                        r = {},
                        o = 0;
                      o < e.length;
                      o++
                    ) {
                      var i = e[o].split("="),
                        s = i.slice(1).join("=");
                      try {
                        var a = decodeURIComponent(i[0]);
                        if (((r[a] = n.read(s, a)), t === a)) break;
                      } catch (t) {}
                    }
                    return t ? r[t] : r;
                  }
                },
                remove: function (e, n) {
                  o(e, "", t({}, n, { expires: -1 }));
                },
                withAttributes: function (n) {
                  return e(this.converter, t({}, this.attributes, n));
                },
                withConverter: function (n) {
                  return e(t({}, this.converter, n), this.attributes);
                },
              },
              {
                attributes: { value: Object.freeze(r) },
                converter: { value: Object.freeze(n) },
              }
            );
          })(
            {
              read: function (t) {
                return (
                  '"' === t[0] && (t = t.slice(1, -1)),
                  t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                );
              },
              write: function (t) {
                return encodeURIComponent(t).replace(
                  /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                  decodeURIComponent
                );
              },
            },
            { path: "/" }
          );
        })();
      },
      9672: (t) => {
        var e;
        window,
          (e = function () {
            return (function (t) {
              var e = {};
              function n(r) {
                if (e[r]) return e[r].exports;
                var o = (e[r] = { i: r, l: !1, exports: {} });
                return (
                  t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
                );
              }
              return (
                (n.m = t),
                (n.c = e),
                (n.d = function (t, e, r) {
                  n.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: r });
                }),
                (n.r = function (t) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (n.t = function (t, e) {
                  if ((1 & e && (t = n(t)), 8 & e)) return t;
                  if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: t,
                    }),
                    2 & e && "string" != typeof t)
                  )
                    for (var o in t)
                      n.d(
                        r,
                        o,
                        function (e) {
                          return t[e];
                        }.bind(null, o)
                      );
                  return r;
                }),
                (n.n = function (t) {
                  var e =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return n.d(e, "a", e), e;
                }),
                (n.o = function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (n.p = ""),
                n((n.s = 2))
              );
            })([
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r = function (t, e) {
                      return (
                        (r =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                              t.__proto__ = e;
                            }) ||
                          function (t, e) {
                            for (var n in e)
                              e.hasOwnProperty(n) && (t[n] = e[n]);
                          }),
                        r(t, e)
                      );
                    }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = 256,
                  s = (function () {
                    function t(t) {
                      void 0 === t && (t = "="), (this._paddingCharacter = t);
                    }
                    return (
                      (t.prototype.encodedLength = function (t) {
                        return this._paddingCharacter
                          ? (((t + 2) / 3) * 4) | 0
                          : ((8 * t + 5) / 6) | 0;
                      }),
                      (t.prototype.encode = function (t) {
                        for (var e = "", n = 0; n < t.length - 2; n += 3) {
                          var r = (t[n] << 16) | (t[n + 1] << 8) | t[n + 2];
                          (e += this._encodeByte((r >>> 18) & 63)),
                            (e += this._encodeByte((r >>> 12) & 63)),
                            (e += this._encodeByte((r >>> 6) & 63)),
                            (e += this._encodeByte((r >>> 0) & 63));
                        }
                        var o = t.length - n;
                        return (
                          o > 0 &&
                            ((r = (t[n] << 16) | (2 === o ? t[n + 1] << 8 : 0)),
                            (e += this._encodeByte((r >>> 18) & 63)),
                            (e += this._encodeByte((r >>> 12) & 63)),
                            (e +=
                              2 === o
                                ? this._encodeByte((r >>> 6) & 63)
                                : this._paddingCharacter || ""),
                            (e += this._paddingCharacter || "")),
                          e
                        );
                      }),
                      (t.prototype.maxDecodedLength = function (t) {
                        return this._paddingCharacter
                          ? ((t / 4) * 3) | 0
                          : ((6 * t + 7) / 8) | 0;
                      }),
                      (t.prototype.decodedLength = function (t) {
                        return this.maxDecodedLength(
                          t.length - this._getPaddingLength(t)
                        );
                      }),
                      (t.prototype.decode = function (t) {
                        if (0 === t.length) return new Uint8Array(0);
                        for (
                          var e = this._getPaddingLength(t),
                            n = t.length - e,
                            r = new Uint8Array(this.maxDecodedLength(n)),
                            o = 0,
                            s = 0,
                            a = 0,
                            c = 0,
                            u = 0,
                            l = 0,
                            d = 0;
                          s < n - 4;
                          s += 4
                        )
                          (c = this._decodeChar(t.charCodeAt(s + 0))),
                            (u = this._decodeChar(t.charCodeAt(s + 1))),
                            (l = this._decodeChar(t.charCodeAt(s + 2))),
                            (d = this._decodeChar(t.charCodeAt(s + 3))),
                            (r[o++] = (c << 2) | (u >>> 4)),
                            (r[o++] = (u << 4) | (l >>> 2)),
                            (r[o++] = (l << 6) | d),
                            (a |= c & i),
                            (a |= u & i),
                            (a |= l & i),
                            (a |= d & i);
                        if (
                          (s < n - 1 &&
                            ((c = this._decodeChar(t.charCodeAt(s))),
                            (u = this._decodeChar(t.charCodeAt(s + 1))),
                            (r[o++] = (c << 2) | (u >>> 4)),
                            (a |= c & i),
                            (a |= u & i)),
                          s < n - 2 &&
                            ((l = this._decodeChar(t.charCodeAt(s + 2))),
                            (r[o++] = (u << 4) | (l >>> 2)),
                            (a |= l & i)),
                          s < n - 3 &&
                            ((d = this._decodeChar(t.charCodeAt(s + 3))),
                            (r[o++] = (l << 6) | d),
                            (a |= d & i)),
                          0 !== a)
                        )
                          throw new Error(
                            "Base64Coder: incorrect characters for decoding"
                          );
                        return r;
                      }),
                      (t.prototype._encodeByte = function (t) {
                        var e = t;
                        return (
                          (e += 65),
                          (e += ((25 - t) >>> 8) & 6),
                          (e += ((51 - t) >>> 8) & -75),
                          (e += ((61 - t) >>> 8) & -15),
                          (e += ((62 - t) >>> 8) & 3),
                          String.fromCharCode(e)
                        );
                      }),
                      (t.prototype._decodeChar = function (t) {
                        var e = i;
                        return (
                          (e +=
                            (((42 - t) & (t - 44)) >>> 8) &
                            (-256 + t - 43 + 62)),
                          (e +=
                            (((46 - t) & (t - 48)) >>> 8) &
                            (-256 + t - 47 + 63)),
                          (e +=
                            (((47 - t) & (t - 58)) >>> 8) &
                            (-256 + t - 48 + 52)),
                          (e +=
                            (((64 - t) & (t - 91)) >>> 8) &
                            (-256 + t - 65 + 0)) +
                            ((((96 - t) & (t - 123)) >>> 8) &
                              (-256 + t - 97 + 26))
                        );
                      }),
                      (t.prototype._getPaddingLength = function (t) {
                        var e = 0;
                        if (this._paddingCharacter) {
                          for (
                            var n = t.length - 1;
                            n >= 0 && t[n] === this._paddingCharacter;
                            n--
                          )
                            e++;
                          if (t.length < 4 || e > 2)
                            throw new Error("Base64Coder: incorrect padding");
                        }
                        return e;
                      }),
                      t
                    );
                  })();
                e.Coder = s;
                var a = new s();
                (e.encode = function (t) {
                  return a.encode(t);
                }),
                  (e.decode = function (t) {
                    return a.decode(t);
                  });
                var c = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.prototype._encodeByte = function (t) {
                      var e = t;
                      return (
                        (e += 65),
                        (e += ((25 - t) >>> 8) & 6),
                        (e += ((51 - t) >>> 8) & -75),
                        (e += ((61 - t) >>> 8) & -13),
                        (e += ((62 - t) >>> 8) & 49),
                        String.fromCharCode(e)
                      );
                    }),
                    (e.prototype._decodeChar = function (t) {
                      var e = i;
                      return (
                        (e +=
                          (((44 - t) & (t - 46)) >>> 8) & (-256 + t - 45 + 62)),
                        (e +=
                          (((94 - t) & (t - 96)) >>> 8) & (-256 + t - 95 + 63)),
                        (e +=
                          (((47 - t) & (t - 58)) >>> 8) & (-256 + t - 48 + 52)),
                        (e +=
                          (((64 - t) & (t - 91)) >>> 8) & (-256 + t - 65 + 0)) +
                          ((((96 - t) & (t - 123)) >>> 8) &
                            (-256 + t - 97 + 26))
                      );
                    }),
                    e
                  );
                })(s);
                e.URLSafeCoder = c;
                var u = new c();
                (e.encodeURLSafe = function (t) {
                  return u.encode(t);
                }),
                  (e.decodeURLSafe = function (t) {
                    return u.decode(t);
                  }),
                  (e.encodedLength = function (t) {
                    return a.encodedLength(t);
                  }),
                  (e.maxDecodedLength = function (t) {
                    return a.maxDecodedLength(t);
                  }),
                  (e.decodedLength = function (t) {
                    return a.decodedLength(t);
                  });
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = "utf8: invalid string",
                  o = "utf8: invalid source encoding";
                function i(t) {
                  for (var e = 0, n = 0; n < t.length; n++) {
                    var o = t.charCodeAt(n);
                    if (o < 128) e += 1;
                    else if (o < 2048) e += 2;
                    else if (o < 55296) e += 3;
                    else {
                      if (!(o <= 57343)) throw new Error(r);
                      if (n >= t.length - 1) throw new Error(r);
                      n++, (e += 4);
                    }
                  }
                  return e;
                }
                (e.encode = function (t) {
                  for (
                    var e = new Uint8Array(i(t)), n = 0, r = 0;
                    r < t.length;
                    r++
                  ) {
                    var o = t.charCodeAt(r);
                    o < 128
                      ? (e[n++] = o)
                      : o < 2048
                      ? ((e[n++] = 192 | (o >> 6)), (e[n++] = 128 | (63 & o)))
                      : o < 55296
                      ? ((e[n++] = 224 | (o >> 12)),
                        (e[n++] = 128 | ((o >> 6) & 63)),
                        (e[n++] = 128 | (63 & o)))
                      : (r++,
                        (o = (1023 & o) << 10),
                        (o |= 1023 & t.charCodeAt(r)),
                        (o += 65536),
                        (e[n++] = 240 | (o >> 18)),
                        (e[n++] = 128 | ((o >> 12) & 63)),
                        (e[n++] = 128 | ((o >> 6) & 63)),
                        (e[n++] = 128 | (63 & o)));
                  }
                  return e;
                }),
                  (e.encodedLength = i),
                  (e.decode = function (t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                      var r = t[n];
                      if (128 & r) {
                        var i = void 0;
                        if (r < 224) {
                          if (n >= t.length) throw new Error(o);
                          if (128 != (192 & (s = t[++n]))) throw new Error(o);
                          (r = ((31 & r) << 6) | (63 & s)), (i = 128);
                        } else if (r < 240) {
                          if (n >= t.length - 1) throw new Error(o);
                          var s = t[++n],
                            a = t[++n];
                          if (128 != (192 & s) || 128 != (192 & a))
                            throw new Error(o);
                          (r = ((15 & r) << 12) | ((63 & s) << 6) | (63 & a)),
                            (i = 2048);
                        } else {
                          if (!(r < 248)) throw new Error(o);
                          if (n >= t.length - 2) throw new Error(o);
                          (s = t[++n]), (a = t[++n]);
                          var c = t[++n];
                          if (
                            128 != (192 & s) ||
                            128 != (192 & a) ||
                            128 != (192 & c)
                          )
                            throw new Error(o);
                          (r =
                            ((15 & r) << 18) |
                            ((63 & s) << 12) |
                            ((63 & a) << 6) |
                            (63 & c)),
                            (i = 65536);
                        }
                        if (r < i || (r >= 55296 && r <= 57343))
                          throw new Error(o);
                        if (r >= 65536) {
                          if (r > 1114111) throw new Error(o);
                          (r -= 65536),
                            e.push(String.fromCharCode(55296 | (r >> 10))),
                            (r = 56320 | (1023 & r));
                        }
                      }
                      e.push(String.fromCharCode(r));
                    }
                    return e.join("");
                  });
              },
              function (t, e, n) {
                t.exports = n(3).default;
              },
              function (t, e, n) {
                "use strict";
                n.r(e);
                class r {
                  constructor(t, e) {
                    (this.lastId = 0), (this.prefix = t), (this.name = e);
                  }
                  create(t) {
                    this.lastId++;
                    var e = this.lastId,
                      n = this.prefix + e,
                      r = this.name + "[" + e + "]",
                      o = !1,
                      i = function () {
                        o || (t.apply(null, arguments), (o = !0));
                      };
                    return (
                      (this[e] = i), { number: e, id: n, name: r, callback: i }
                    );
                  }
                  remove(t) {
                    delete this[t.number];
                  }
                }
                var o = new r("_pusher_script_", "Pusher.ScriptReceivers"),
                  i = "8.3.0",
                  s = 7,
                  a = 80,
                  c = 443,
                  u = "",
                  l = "sockjs.pusher.com",
                  d = 80,
                  f = 443,
                  h = "/pusher",
                  p = "stats.pusher.com",
                  m = "/pusher/auth",
                  v = "ajax",
                  g = 12e4,
                  b = 3e4,
                  w = 1e4,
                  y = { endpoint: "/pusher/user-auth", transport: "ajax" },
                  _ = { endpoint: "/pusher/auth", transport: "ajax" },
                  k = "http://js.pusher.com",
                  x = "https://js.pusher.com",
                  S = "",
                  P = new r(
                    "_pusher_dependencies",
                    "Pusher.DependenciesReceivers"
                  ),
                  $ = new (class {
                    constructor(t) {
                      (this.options = t),
                        (this.receivers = t.receivers || o),
                        (this.loading = {});
                    }
                    load(t, e, n) {
                      var r = this;
                      if (r.loading[t] && r.loading[t].length > 0)
                        r.loading[t].push(n);
                      else {
                        r.loading[t] = [n];
                        var o = Pe.createScriptRequest(r.getPath(t, e)),
                          i = r.receivers.create(function (e) {
                            if ((r.receivers.remove(i), r.loading[t])) {
                              var n = r.loading[t];
                              delete r.loading[t];
                              for (
                                var s = function (t) {
                                    t || o.cleanup();
                                  },
                                  a = 0;
                                a < n.length;
                                a++
                              )
                                n[a](e, s);
                            }
                          });
                        o.send(i);
                      }
                    }
                    getRoot(t) {
                      var e = Pe.getDocument().location.protocol;
                      return (
                        ((t && t.useTLS) || "https:" === e
                          ? this.options.cdn_https
                          : this.options.cdn_http
                        ).replace(/\/*$/, "") +
                        "/" +
                        this.options.version
                      );
                    }
                    getPath(t, e) {
                      return (
                        this.getRoot(e) + "/" + t + this.options.suffix + ".js"
                      );
                    }
                  })({
                    cdn_http: k,
                    cdn_https: x,
                    version: i,
                    suffix: S,
                    receivers: P,
                  });
                const C = {
                  baseUrl: "https://pusher.com",
                  urls: {
                    authenticationEndpoint: {
                      path: "/docs/channels/server_api/authenticating_users",
                    },
                    authorizationEndpoint: {
                      path: "/docs/channels/server_api/authorizing-users/",
                    },
                    javascriptQuickStart: {
                      path: "/docs/javascript_quick_start",
                    },
                    triggeringClientEvents: {
                      path: "/docs/client_api_guide/client_events#trigger-events",
                    },
                    encryptedChannelSupport: {
                      fullUrl:
                        "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support",
                    },
                  },
                };
                var M,
                  L = function (t) {
                    const e = C.urls[t];
                    if (!e) return "";
                    let n;
                    return (
                      e.fullUrl
                        ? (n = e.fullUrl)
                        : e.path && (n = C.baseUrl + e.path),
                      n ? `See: ${n}` : ""
                    );
                  };
                !(function (t) {
                  (t.UserAuthentication = "user-authentication"),
                    (t.ChannelAuthorization = "channel-authorization");
                })(M || (M = {}));
                class T extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class E extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class A extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class I extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class O extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class R extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class D extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class q extends Error {
                  constructor(t) {
                    super(t), Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                class B extends Error {
                  constructor(t, e) {
                    super(e),
                      (this.status = t),
                      Object.setPrototypeOf(this, new.target.prototype);
                  }
                }
                for (
                  var j = function (t, e, n, r, o) {
                      const i = Pe.createXHR();
                      for (var s in (i.open("POST", n.endpoint, !0),
                      i.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlencoded"
                      ),
                      n.headers))
                        i.setRequestHeader(s, n.headers[s]);
                      if (null != n.headersProvider) {
                        let t = n.headersProvider();
                        for (var s in t) i.setRequestHeader(s, t[s]);
                      }
                      return (
                        (i.onreadystatechange = function () {
                          if (4 === i.readyState)
                            if (200 === i.status) {
                              let t,
                                e = !1;
                              try {
                                (t = JSON.parse(i.responseText)), (e = !0);
                              } catch (t) {
                                o(
                                  new B(
                                    200,
                                    `JSON returned from ${r.toString()} endpoint was invalid, yet status code was 200. Data was: ${
                                      i.responseText
                                    }`
                                  ),
                                  null
                                );
                              }
                              e && o(null, t);
                            } else {
                              let t = "";
                              switch (r) {
                                case M.UserAuthentication:
                                  t = L("authenticationEndpoint");
                                  break;
                                case M.ChannelAuthorization:
                                  t = `Clients must be authorized to join private or presence channels. ${L(
                                    "authorizationEndpoint"
                                  )}`;
                              }
                              o(
                                new B(
                                  i.status,
                                  `Unable to retrieve auth string from ${r.toString()} endpoint - received status: ${
                                    i.status
                                  } from ${n.endpoint}. ${t}`
                                ),
                                null
                              );
                            }
                        }),
                        i.send(e),
                        i
                      );
                    },
                    N = String.fromCharCode,
                    H =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    F = {},
                    U = 0;
                  U < 64;
                  U++
                )
                  F[H.charAt(U)] = U;
                var V = function (t) {
                    var e = t.charCodeAt(0);
                    return e < 128
                      ? t
                      : e < 2048
                      ? N(192 | (e >>> 6)) + N(128 | (63 & e))
                      : N(224 | ((e >>> 12) & 15)) +
                        N(128 | ((e >>> 6) & 63)) +
                        N(128 | (63 & e));
                  },
                  z = function (t) {
                    return t.replace(/[^\x00-\x7F]/g, V);
                  },
                  G = function (t) {
                    var e = [0, 2, 1][t.length % 3],
                      n =
                        (t.charCodeAt(0) << 16) |
                        ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) |
                        (t.length > 2 ? t.charCodeAt(2) : 0);
                    return [
                      H.charAt(n >>> 18),
                      H.charAt((n >>> 12) & 63),
                      e >= 2 ? "=" : H.charAt((n >>> 6) & 63),
                      e >= 1 ? "=" : H.charAt(63 & n),
                    ].join("");
                  },
                  J =
                    window.btoa ||
                    function (t) {
                      return t.replace(/[\s\S]{1,3}/g, G);
                    },
                  W = class {
                    constructor(t, e, n, r) {
                      (this.clear = e),
                        (this.timer = t(() => {
                          this.timer && (this.timer = r(this.timer));
                        }, n));
                    }
                    isRunning() {
                      return null !== this.timer;
                    }
                    ensureAborted() {
                      this.timer &&
                        (this.clear(this.timer), (this.timer = null));
                    }
                  };
                function K(t) {
                  window.clearTimeout(t);
                }
                function X(t) {
                  window.clearInterval(t);
                }
                class Z extends W {
                  constructor(t, e) {
                    super(setTimeout, K, t, function (t) {
                      return e(), null;
                    });
                  }
                }
                class Y extends W {
                  constructor(t, e) {
                    super(setInterval, X, t, function (t) {
                      return e(), t;
                    });
                  }
                }
                var Q = {
                    now: () => (Date.now ? Date.now() : new Date().valueOf()),
                    defer: (t) => new Z(0, t),
                    method(t, ...e) {
                      var n = Array.prototype.slice.call(arguments, 1);
                      return function (e) {
                        return e[t].apply(e, n.concat(arguments));
                      };
                    },
                  },
                  tt = Q;
                function et(t, ...e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    for (var o in r)
                      r[o] && r[o].constructor && r[o].constructor === Object
                        ? (t[o] = et(t[o] || {}, r[o]))
                        : (t[o] = r[o]);
                  }
                  return t;
                }
                function nt() {
                  for (var t = ["Pusher"], e = 0; e < arguments.length; e++)
                    "string" == typeof arguments[e]
                      ? t.push(arguments[e])
                      : t.push(ft(arguments[e]));
                  return t.join(" : ");
                }
                function rt(t, e) {
                  var n = Array.prototype.indexOf;
                  if (null === t) return -1;
                  if (n && t.indexOf === n) return t.indexOf(e);
                  for (var r = 0, o = t.length; r < o; r++)
                    if (t[r] === e) return r;
                  return -1;
                }
                function ot(t, e) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n, t);
                }
                function it(t) {
                  var e = [];
                  return (
                    ot(t, function (t, n) {
                      e.push(n);
                    }),
                    e
                  );
                }
                function st(t, e, n) {
                  for (var r = 0; r < t.length; r++)
                    e.call(n || window, t[r], r, t);
                }
                function at(t, e) {
                  for (var n = [], r = 0; r < t.length; r++)
                    n.push(e(t[r], r, t, n));
                  return n;
                }
                function ct(t, e) {
                  e =
                    e ||
                    function (t) {
                      return !!t;
                    };
                  for (var n = [], r = 0; r < t.length; r++)
                    e(t[r], r, t, n) && n.push(t[r]);
                  return n;
                }
                function ut(t, e) {
                  var n = {};
                  return (
                    ot(t, function (r, o) {
                      ((e && e(r, o, t, n)) || Boolean(r)) && (n[o] = r);
                    }),
                    n
                  );
                }
                function lt(t, e) {
                  for (var n = 0; n < t.length; n++)
                    if (e(t[n], n, t)) return !0;
                  return !1;
                }
                function dt(t) {
                  var e, n;
                  return at(
                    ((e = (function (t) {
                      return (
                        (e = function (t) {
                          return (
                            "object" == typeof t && (t = ft(t)),
                            encodeURIComponent(((e = t.toString()), J(z(e))))
                          );
                          var e;
                        }),
                        (n = {}),
                        ot(t, function (t, r) {
                          n[r] = e(t);
                        }),
                        n
                      );
                      var e, n;
                    })(
                      ut(t, function (t) {
                        return void 0 !== t;
                      })
                    )),
                    (n = []),
                    ot(e, function (t, e) {
                      n.push([e, t]);
                    }),
                    n),
                    tt.method("join", "=")
                  ).join("&");
                }
                function ft(t) {
                  try {
                    return JSON.stringify(t);
                  } catch (r) {
                    return JSON.stringify(
                      ((e = []),
                      (n = []),
                      (function t(r, o) {
                        var i, s, a;
                        switch (typeof r) {
                          case "object":
                            if (!r) return null;
                            for (i = 0; i < e.length; i += 1)
                              if (e[i] === r) return { $ref: n[i] };
                            if (
                              (e.push(r),
                              n.push(o),
                              "[object Array]" ===
                                Object.prototype.toString.apply(r))
                            )
                              for (a = [], i = 0; i < r.length; i += 1)
                                a[i] = t(r[i], o + "[" + i + "]");
                            else
                              for (s in ((a = {}), r))
                                Object.prototype.hasOwnProperty.call(r, s) &&
                                  (a[s] = t(
                                    r[s],
                                    o + "[" + JSON.stringify(s) + "]"
                                  ));
                            return a;
                          case "number":
                          case "string":
                          case "boolean":
                            return r;
                        }
                      })(t, "$"))
                    );
                  }
                  var e, n;
                }
                var ht = new (class {
                    constructor() {
                      this.globalLog = (t) => {
                        window.console &&
                          window.console.log &&
                          window.console.log(t);
                      };
                    }
                    debug(...t) {
                      this.log(this.globalLog, t);
                    }
                    warn(...t) {
                      this.log(this.globalLogWarn, t);
                    }
                    error(...t) {
                      this.log(this.globalLogError, t);
                    }
                    globalLogWarn(t) {
                      window.console && window.console.warn
                        ? window.console.warn(t)
                        : this.globalLog(t);
                    }
                    globalLogError(t) {
                      window.console && window.console.error
                        ? window.console.error(t)
                        : this.globalLogWarn(t);
                    }
                    log(t, ...e) {
                      var n = nt.apply(this, arguments);
                      Fe.log ? Fe.log(n) : Fe.logToConsole && t.bind(this)(n);
                    }
                  })(),
                  pt = function (t, e, n, r, o) {
                    (void 0 === n.headers && null == n.headersProvider) ||
                      ht.warn(
                        `To send headers with the ${r.toString()} request, you must use AJAX, rather than JSONP.`
                      );
                    var i = t.nextAuthCallbackID.toString();
                    t.nextAuthCallbackID++;
                    var s = t.getDocument(),
                      a = s.createElement("script");
                    t.auth_callbacks[i] = function (t) {
                      o(null, t);
                    };
                    var c = "Pusher.auth_callbacks['" + i + "']";
                    a.src =
                      n.endpoint +
                      "?callback=" +
                      encodeURIComponent(c) +
                      "&" +
                      e;
                    var u =
                      s.getElementsByTagName("head")[0] || s.documentElement;
                    u.insertBefore(a, u.firstChild);
                  };
                class mt {
                  constructor(t) {
                    this.src = t;
                  }
                  send(t) {
                    var e = this,
                      n = "Error loading " + e.src;
                    (e.script = document.createElement("script")),
                      (e.script.id = t.id),
                      (e.script.src = e.src),
                      (e.script.type = "text/javascript"),
                      (e.script.charset = "UTF-8"),
                      e.script.addEventListener
                        ? ((e.script.onerror = function () {
                            t.callback(n);
                          }),
                          (e.script.onload = function () {
                            t.callback(null);
                          }))
                        : (e.script.onreadystatechange = function () {
                            ("loaded" !== e.script.readyState &&
                              "complete" !== e.script.readyState) ||
                              t.callback(null);
                          }),
                      void 0 === e.script.async &&
                      document.attachEvent &&
                      /opera/i.test(navigator.userAgent)
                        ? ((e.errorScript = document.createElement("script")),
                          (e.errorScript.id = t.id + "_error"),
                          (e.errorScript.text = t.name + "('" + n + "');"),
                          (e.script.async = e.errorScript.async = !1))
                        : (e.script.async = !0);
                    var r = document.getElementsByTagName("head")[0];
                    r.insertBefore(e.script, r.firstChild),
                      e.errorScript &&
                        r.insertBefore(e.errorScript, e.script.nextSibling);
                  }
                  cleanup() {
                    this.script &&
                      ((this.script.onload = this.script.onerror = null),
                      (this.script.onreadystatechange = null)),
                      this.script &&
                        this.script.parentNode &&
                        this.script.parentNode.removeChild(this.script),
                      this.errorScript &&
                        this.errorScript.parentNode &&
                        this.errorScript.parentNode.removeChild(
                          this.errorScript
                        ),
                      (this.script = null),
                      (this.errorScript = null);
                  }
                }
                class vt {
                  constructor(t, e) {
                    (this.url = t), (this.data = e);
                  }
                  send(t) {
                    if (!this.request) {
                      var e = dt(this.data),
                        n = this.url + "/" + t.number + "?" + e;
                      (this.request = Pe.createScriptRequest(n)),
                        this.request.send(t);
                    }
                  }
                  cleanup() {
                    this.request && this.request.cleanup();
                  }
                }
                var gt = {
                  name: "jsonp",
                  getAgent: function (t, e) {
                    return function (n, r) {
                      var i =
                          "http" +
                          (e ? "s" : "") +
                          "://" +
                          (t.host || t.options.host) +
                          t.options.path,
                        s = Pe.createJSONPRequest(i, n),
                        a = Pe.ScriptReceivers.create(function (e, n) {
                          o.remove(a),
                            s.cleanup(),
                            n && n.host && (t.host = n.host),
                            r && r(e, n);
                        });
                      s.send(a);
                    };
                  },
                };
                function bt(t, e, n) {
                  return (
                    t +
                    (e.useTLS ? "s" : "") +
                    "://" +
                    (e.useTLS ? e.hostTLS : e.hostNonTLS) +
                    n
                  );
                }
                function wt(t, e) {
                  return (
                    "/app/" +
                    t +
                    "?protocol=" +
                    s +
                    "&client=js&version=" +
                    i +
                    (e ? "&" + e : "")
                  );
                }
                var yt = {
                    getInitial: function (t, e) {
                      return bt(
                        "ws",
                        e,
                        (e.httpPath || "") + wt(t, "flash=false")
                      );
                    },
                  },
                  _t = {
                    getInitial: function (t, e) {
                      return bt("http", e, (e.httpPath || "/pusher") + wt(t));
                    },
                  },
                  kt = {
                    getInitial: function (t, e) {
                      return bt("http", e, e.httpPath || "/pusher");
                    },
                    getPath: function (t, e) {
                      return wt(t);
                    },
                  };
                class xt {
                  constructor() {
                    this._callbacks = {};
                  }
                  get(t) {
                    return this._callbacks[St(t)];
                  }
                  add(t, e, n) {
                    var r = St(t);
                    (this._callbacks[r] = this._callbacks[r] || []),
                      this._callbacks[r].push({ fn: e, context: n });
                  }
                  remove(t, e, n) {
                    if (t || e || n) {
                      var r = t ? [St(t)] : it(this._callbacks);
                      e || n
                        ? this.removeCallback(r, e, n)
                        : this.removeAllCallbacks(r);
                    } else this._callbacks = {};
                  }
                  removeCallback(t, e, n) {
                    st(
                      t,
                      function (t) {
                        (this._callbacks[t] = ct(
                          this._callbacks[t] || [],
                          function (t) {
                            return (e && e !== t.fn) || (n && n !== t.context);
                          }
                        )),
                          0 === this._callbacks[t].length &&
                            delete this._callbacks[t];
                      },
                      this
                    );
                  }
                  removeAllCallbacks(t) {
                    st(
                      t,
                      function (t) {
                        delete this._callbacks[t];
                      },
                      this
                    );
                  }
                }
                function St(t) {
                  return "_" + t;
                }
                class Pt {
                  constructor(t) {
                    (this.callbacks = new xt()),
                      (this.global_callbacks = []),
                      (this.failThrough = t);
                  }
                  bind(t, e, n) {
                    return this.callbacks.add(t, e, n), this;
                  }
                  bind_global(t) {
                    return this.global_callbacks.push(t), this;
                  }
                  unbind(t, e, n) {
                    return this.callbacks.remove(t, e, n), this;
                  }
                  unbind_global(t) {
                    return t
                      ? ((this.global_callbacks = ct(
                          this.global_callbacks || [],
                          (e) => e !== t
                        )),
                        this)
                      : ((this.global_callbacks = []), this);
                  }
                  unbind_all() {
                    return this.unbind(), this.unbind_global(), this;
                  }
                  emit(t, e, n) {
                    for (var r = 0; r < this.global_callbacks.length; r++)
                      this.global_callbacks[r](t, e);
                    var o = this.callbacks.get(t),
                      i = [];
                    if ((n ? i.push(e, n) : e && i.push(e), o && o.length > 0))
                      for (r = 0; r < o.length; r++)
                        o[r].fn.apply(o[r].context || window, i);
                    else this.failThrough && this.failThrough(t, e);
                    return this;
                  }
                }
                class $t extends Pt {
                  constructor(t, e, n, r, o) {
                    super(),
                      (this.initialize = Pe.transportConnectionInitializer),
                      (this.hooks = t),
                      (this.name = e),
                      (this.priority = n),
                      (this.key = r),
                      (this.options = o),
                      (this.state = "new"),
                      (this.timeline = o.timeline),
                      (this.activityTimeout = o.activityTimeout),
                      (this.id = this.timeline.generateUniqueID());
                  }
                  handlesActivityChecks() {
                    return Boolean(this.hooks.handlesActivityChecks);
                  }
                  supportsPing() {
                    return Boolean(this.hooks.supportsPing);
                  }
                  connect() {
                    if (this.socket || "initialized" !== this.state) return !1;
                    var t = this.hooks.urls.getInitial(this.key, this.options);
                    try {
                      this.socket = this.hooks.getSocket(t, this.options);
                    } catch (t) {
                      return (
                        tt.defer(() => {
                          this.onError(t), this.changeState("closed");
                        }),
                        !1
                      );
                    }
                    return (
                      this.bindListeners(),
                      ht.debug("Connecting", { transport: this.name, url: t }),
                      this.changeState("connecting"),
                      !0
                    );
                  }
                  close() {
                    return !!this.socket && (this.socket.close(), !0);
                  }
                  send(t) {
                    return (
                      "open" === this.state &&
                      (tt.defer(() => {
                        this.socket && this.socket.send(t);
                      }),
                      !0)
                    );
                  }
                  ping() {
                    "open" === this.state &&
                      this.supportsPing() &&
                      this.socket.ping();
                  }
                  onOpen() {
                    this.hooks.beforeOpen &&
                      this.hooks.beforeOpen(
                        this.socket,
                        this.hooks.urls.getPath(this.key, this.options)
                      ),
                      this.changeState("open"),
                      (this.socket.onopen = void 0);
                  }
                  onError(t) {
                    this.emit("error", { type: "WebSocketError", error: t }),
                      this.timeline.error(
                        this.buildTimelineMessage({ error: t.toString() })
                      );
                  }
                  onClose(t) {
                    t
                      ? this.changeState("closed", {
                          code: t.code,
                          reason: t.reason,
                          wasClean: t.wasClean,
                        })
                      : this.changeState("closed"),
                      this.unbindListeners(),
                      (this.socket = void 0);
                  }
                  onMessage(t) {
                    this.emit("message", t);
                  }
                  onActivity() {
                    this.emit("activity");
                  }
                  bindListeners() {
                    (this.socket.onopen = () => {
                      this.onOpen();
                    }),
                      (this.socket.onerror = (t) => {
                        this.onError(t);
                      }),
                      (this.socket.onclose = (t) => {
                        this.onClose(t);
                      }),
                      (this.socket.onmessage = (t) => {
                        this.onMessage(t);
                      }),
                      this.supportsPing() &&
                        (this.socket.onactivity = () => {
                          this.onActivity();
                        });
                  }
                  unbindListeners() {
                    this.socket &&
                      ((this.socket.onopen = void 0),
                      (this.socket.onerror = void 0),
                      (this.socket.onclose = void 0),
                      (this.socket.onmessage = void 0),
                      this.supportsPing() && (this.socket.onactivity = void 0));
                  }
                  changeState(t, e) {
                    (this.state = t),
                      this.timeline.info(
                        this.buildTimelineMessage({ state: t, params: e })
                      ),
                      this.emit(t, e);
                  }
                  buildTimelineMessage(t) {
                    return et({ cid: this.id }, t);
                  }
                }
                class Ct {
                  constructor(t) {
                    this.hooks = t;
                  }
                  isSupported(t) {
                    return this.hooks.isSupported(t);
                  }
                  createConnection(t, e, n, r) {
                    return new $t(this.hooks, t, e, n, r);
                  }
                }
                var Mt = new Ct({
                    urls: yt,
                    handlesActivityChecks: !1,
                    supportsPing: !1,
                    isInitialized: function () {
                      return Boolean(Pe.getWebSocketAPI());
                    },
                    isSupported: function () {
                      return Boolean(Pe.getWebSocketAPI());
                    },
                    getSocket: function (t) {
                      return Pe.createWebSocket(t);
                    },
                  }),
                  Lt = {
                    urls: _t,
                    handlesActivityChecks: !1,
                    supportsPing: !0,
                    isInitialized: function () {
                      return !0;
                    },
                  },
                  Tt = et(
                    {
                      getSocket: function (t) {
                        return Pe.HTTPFactory.createStreamingSocket(t);
                      },
                    },
                    Lt
                  ),
                  Et = et(
                    {
                      getSocket: function (t) {
                        return Pe.HTTPFactory.createPollingSocket(t);
                      },
                    },
                    Lt
                  ),
                  At = {
                    isSupported: function () {
                      return Pe.isXHRSupported();
                    },
                  },
                  It = {
                    ws: Mt,
                    xhr_streaming: new Ct(et({}, Tt, At)),
                    xhr_polling: new Ct(et({}, Et, At)),
                  },
                  Ot = new Ct({
                    file: "sockjs",
                    urls: kt,
                    handlesActivityChecks: !0,
                    supportsPing: !1,
                    isSupported: function () {
                      return !0;
                    },
                    isInitialized: function () {
                      return void 0 !== window.SockJS;
                    },
                    getSocket: function (t, e) {
                      return new window.SockJS(t, null, {
                        js_path: $.getPath("sockjs", { useTLS: e.useTLS }),
                        ignore_null_origin: e.ignoreNullOrigin,
                      });
                    },
                    beforeOpen: function (t, e) {
                      t.send(JSON.stringify({ path: e }));
                    },
                  }),
                  Rt = {
                    isSupported: function (t) {
                      return Pe.isXDRSupported(t.useTLS);
                    },
                  },
                  Dt = new Ct(et({}, Tt, Rt)),
                  qt = new Ct(et({}, Et, Rt));
                (It.xdr_streaming = Dt),
                  (It.xdr_polling = qt),
                  (It.sockjs = Ot);
                var Bt = It,
                  jt = new (class extends Pt {
                    constructor() {
                      super();
                      var t = this;
                      void 0 !== window.addEventListener &&
                        (window.addEventListener(
                          "online",
                          function () {
                            t.emit("online");
                          },
                          !1
                        ),
                        window.addEventListener(
                          "offline",
                          function () {
                            t.emit("offline");
                          },
                          !1
                        ));
                    }
                    isOnline() {
                      return (
                        void 0 === window.navigator.onLine ||
                        window.navigator.onLine
                      );
                    }
                  })();
                class Nt {
                  constructor(t, e, n) {
                    (this.manager = t),
                      (this.transport = e),
                      (this.minPingDelay = n.minPingDelay),
                      (this.maxPingDelay = n.maxPingDelay),
                      (this.pingDelay = void 0);
                  }
                  createConnection(t, e, n, r) {
                    r = et({}, r, { activityTimeout: this.pingDelay });
                    var o = this.transport.createConnection(t, e, n, r),
                      i = null,
                      s = function () {
                        o.unbind("open", s),
                          o.bind("closed", a),
                          (i = tt.now());
                      },
                      a = (t) => {
                        if (
                          (o.unbind("closed", a),
                          1002 === t.code || 1003 === t.code)
                        )
                          this.manager.reportDeath();
                        else if (!t.wasClean && i) {
                          var e = tt.now() - i;
                          e < 2 * this.maxPingDelay &&
                            (this.manager.reportDeath(),
                            (this.pingDelay = Math.max(
                              e / 2,
                              this.minPingDelay
                            )));
                        }
                      };
                    return o.bind("open", s), o;
                  }
                  isSupported(t) {
                    return (
                      this.manager.isAlive() && this.transport.isSupported(t)
                    );
                  }
                }
                const Ht = {
                  decodeMessage: function (t) {
                    try {
                      var e = JSON.parse(t.data),
                        n = e.data;
                      if ("string" == typeof n)
                        try {
                          n = JSON.parse(e.data);
                        } catch (t) {}
                      var r = { event: e.event, channel: e.channel, data: n };
                      return e.user_id && (r.user_id = e.user_id), r;
                    } catch (e) {
                      throw {
                        type: "MessageParseError",
                        error: e,
                        data: t.data,
                      };
                    }
                  },
                  encodeMessage: function (t) {
                    return JSON.stringify(t);
                  },
                  processHandshake: function (t) {
                    var e = Ht.decodeMessage(t);
                    if ("pusher:connection_established" === e.event) {
                      if (!e.data.activity_timeout)
                        throw "No activity timeout specified in handshake";
                      return {
                        action: "connected",
                        id: e.data.socket_id,
                        activityTimeout: 1e3 * e.data.activity_timeout,
                      };
                    }
                    if ("pusher:error" === e.event)
                      return {
                        action: this.getCloseAction(e.data),
                        error: this.getCloseError(e.data),
                      };
                    throw "Invalid handshake";
                  },
                  getCloseAction: function (t) {
                    return t.code < 4e3
                      ? t.code >= 1002 && t.code <= 1004
                        ? "backoff"
                        : null
                      : 4e3 === t.code
                      ? "tls_only"
                      : t.code < 4100
                      ? "refused"
                      : t.code < 4200
                      ? "backoff"
                      : t.code < 4300
                      ? "retry"
                      : "refused";
                  },
                  getCloseError: function (t) {
                    return 1e3 !== t.code && 1001 !== t.code
                      ? {
                          type: "PusherError",
                          data: {
                            code: t.code,
                            message: t.reason || t.message,
                          },
                        }
                      : null;
                  },
                };
                var Ft = Ht;
                class Ut extends Pt {
                  constructor(t, e) {
                    super(),
                      (this.id = t),
                      (this.transport = e),
                      (this.activityTimeout = e.activityTimeout),
                      this.bindListeners();
                  }
                  handlesActivityChecks() {
                    return this.transport.handlesActivityChecks();
                  }
                  send(t) {
                    return this.transport.send(t);
                  }
                  send_event(t, e, n) {
                    var r = { event: t, data: e };
                    return (
                      n && (r.channel = n),
                      ht.debug("Event sent", r),
                      this.send(Ft.encodeMessage(r))
                    );
                  }
                  ping() {
                    this.transport.supportsPing()
                      ? this.transport.ping()
                      : this.send_event("pusher:ping", {});
                  }
                  close() {
                    this.transport.close();
                  }
                  bindListeners() {
                    var t = {
                        message: (t) => {
                          var e;
                          try {
                            e = Ft.decodeMessage(t);
                          } catch (e) {
                            this.emit("error", {
                              type: "MessageParseError",
                              error: e,
                              data: t.data,
                            });
                          }
                          if (void 0 !== e) {
                            switch ((ht.debug("Event recd", e), e.event)) {
                              case "pusher:error":
                                this.emit("error", {
                                  type: "PusherError",
                                  data: e.data,
                                });
                                break;
                              case "pusher:ping":
                                this.emit("ping");
                                break;
                              case "pusher:pong":
                                this.emit("pong");
                            }
                            this.emit("message", e);
                          }
                        },
                        activity: () => {
                          this.emit("activity");
                        },
                        error: (t) => {
                          this.emit("error", t);
                        },
                        closed: (t) => {
                          e(),
                            t && t.code && this.handleCloseEvent(t),
                            (this.transport = null),
                            this.emit("closed");
                        },
                      },
                      e = () => {
                        ot(t, (t, e) => {
                          this.transport.unbind(e, t);
                        });
                      };
                    ot(t, (t, e) => {
                      this.transport.bind(e, t);
                    });
                  }
                  handleCloseEvent(t) {
                    var e = Ft.getCloseAction(t),
                      n = Ft.getCloseError(t);
                    n && this.emit("error", n),
                      e && this.emit(e, { action: e, error: n });
                  }
                }
                class Vt {
                  constructor(t, e) {
                    (this.transport = t),
                      (this.callback = e),
                      this.bindListeners();
                  }
                  close() {
                    this.unbindListeners(), this.transport.close();
                  }
                  bindListeners() {
                    (this.onMessage = (t) => {
                      var e;
                      this.unbindListeners();
                      try {
                        e = Ft.processHandshake(t);
                      } catch (t) {
                        return (
                          this.finish("error", { error: t }),
                          void this.transport.close()
                        );
                      }
                      "connected" === e.action
                        ? this.finish("connected", {
                            connection: new Ut(e.id, this.transport),
                            activityTimeout: e.activityTimeout,
                          })
                        : (this.finish(e.action, { error: e.error }),
                          this.transport.close());
                    }),
                      (this.onClosed = (t) => {
                        this.unbindListeners();
                        var e = Ft.getCloseAction(t) || "backoff",
                          n = Ft.getCloseError(t);
                        this.finish(e, { error: n });
                      }),
                      this.transport.bind("message", this.onMessage),
                      this.transport.bind("closed", this.onClosed);
                  }
                  unbindListeners() {
                    this.transport.unbind("message", this.onMessage),
                      this.transport.unbind("closed", this.onClosed);
                  }
                  finish(t, e) {
                    this.callback(
                      et({ transport: this.transport, action: t }, e)
                    );
                  }
                }
                class zt {
                  constructor(t, e) {
                    (this.timeline = t), (this.options = e || {});
                  }
                  send(t, e) {
                    this.timeline.isEmpty() ||
                      this.timeline.send(
                        Pe.TimelineTransport.getAgent(this, t),
                        e
                      );
                  }
                }
                class Gt extends Pt {
                  constructor(t, e) {
                    super(function (e, n) {
                      ht.debug("No callbacks on " + t + " for " + e);
                    }),
                      (this.name = t),
                      (this.pusher = e),
                      (this.subscribed = !1),
                      (this.subscriptionPending = !1),
                      (this.subscriptionCancelled = !1);
                  }
                  authorize(t, e) {
                    return e(null, { auth: "" });
                  }
                  trigger(t, e) {
                    if (0 !== t.indexOf("client-"))
                      throw new T(
                        "Event '" + t + "' does not start with 'client-'"
                      );
                    if (!this.subscribed) {
                      var n = L("triggeringClientEvents");
                      ht.warn(
                        `Client event triggered before channel 'subscription_succeeded' event . ${n}`
                      );
                    }
                    return this.pusher.send_event(t, e, this.name);
                  }
                  disconnect() {
                    (this.subscribed = !1), (this.subscriptionPending = !1);
                  }
                  handleEvent(t) {
                    var e = t.event,
                      n = t.data;
                    "pusher_internal:subscription_succeeded" === e
                      ? this.handleSubscriptionSucceededEvent(t)
                      : "pusher_internal:subscription_count" === e
                      ? this.handleSubscriptionCountEvent(t)
                      : 0 !== e.indexOf("pusher_internal:") &&
                        this.emit(e, n, {});
                  }
                  handleSubscriptionSucceededEvent(t) {
                    (this.subscriptionPending = !1),
                      (this.subscribed = !0),
                      this.subscriptionCancelled
                        ? this.pusher.unsubscribe(this.name)
                        : this.emit("pusher:subscription_succeeded", t.data);
                  }
                  handleSubscriptionCountEvent(t) {
                    t.data.subscription_count &&
                      (this.subscriptionCount = t.data.subscription_count),
                      this.emit("pusher:subscription_count", t.data);
                  }
                  subscribe() {
                    this.subscribed ||
                      ((this.subscriptionPending = !0),
                      (this.subscriptionCancelled = !1),
                      this.authorize(
                        this.pusher.connection.socket_id,
                        (t, e) => {
                          t
                            ? ((this.subscriptionPending = !1),
                              ht.error(t.toString()),
                              this.emit(
                                "pusher:subscription_error",
                                Object.assign(
                                  {},
                                  { type: "AuthError", error: t.message },
                                  t instanceof B ? { status: t.status } : {}
                                )
                              ))
                            : this.pusher.send_event("pusher:subscribe", {
                                auth: e.auth,
                                channel_data: e.channel_data,
                                channel: this.name,
                              });
                        }
                      ));
                  }
                  unsubscribe() {
                    (this.subscribed = !1),
                      this.pusher.send_event("pusher:unsubscribe", {
                        channel: this.name,
                      });
                  }
                  cancelSubscription() {
                    this.subscriptionCancelled = !0;
                  }
                  reinstateSubscription() {
                    this.subscriptionCancelled = !1;
                  }
                }
                class Jt extends Gt {
                  authorize(t, e) {
                    return this.pusher.config.channelAuthorizer(
                      { channelName: this.name, socketId: t },
                      e
                    );
                  }
                }
                class Wt {
                  constructor() {
                    this.reset();
                  }
                  get(t) {
                    return Object.prototype.hasOwnProperty.call(this.members, t)
                      ? { id: t, info: this.members[t] }
                      : null;
                  }
                  each(t) {
                    ot(this.members, (e, n) => {
                      t(this.get(n));
                    });
                  }
                  setMyID(t) {
                    this.myID = t;
                  }
                  onSubscription(t) {
                    (this.members = t.presence.hash),
                      (this.count = t.presence.count),
                      (this.me = this.get(this.myID));
                  }
                  addMember(t) {
                    return (
                      null === this.get(t.user_id) && this.count++,
                      (this.members[t.user_id] = t.user_info),
                      this.get(t.user_id)
                    );
                  }
                  removeMember(t) {
                    var e = this.get(t.user_id);
                    return (
                      e && (delete this.members[t.user_id], this.count--), e
                    );
                  }
                  reset() {
                    (this.members = {}),
                      (this.count = 0),
                      (this.myID = null),
                      (this.me = null);
                  }
                }
                class Kt extends Jt {
                  constructor(t, e) {
                    super(t, e), (this.members = new Wt());
                  }
                  authorize(t, e) {
                    super.authorize(t, (t, n) => {
                      return (
                        (r = this),
                        (o = void 0),
                        (s = function* () {
                          if (!t)
                            if (null != n.channel_data) {
                              var r = JSON.parse(n.channel_data);
                              this.members.setMyID(r.user_id);
                            } else {
                              if (
                                (yield this.pusher.user.signinDonePromise,
                                null == this.pusher.user.user_data)
                              ) {
                                let t = L("authorizationEndpoint");
                                return (
                                  ht.error(
                                    `Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${t}, or the user should be signed in.`
                                  ),
                                  void e("Invalid auth response")
                                );
                              }
                              this.members.setMyID(
                                this.pusher.user.user_data.id
                              );
                            }
                          e(t, n);
                        }),
                        new ((i = void 0) || (i = Promise))(function (t, e) {
                          function n(t) {
                            try {
                              c(s.next(t));
                            } catch (t) {
                              e(t);
                            }
                          }
                          function a(t) {
                            try {
                              c(s.throw(t));
                            } catch (t) {
                              e(t);
                            }
                          }
                          function c(e) {
                            var r;
                            e.done
                              ? t(e.value)
                              : ((r = e.value),
                                r instanceof i
                                  ? r
                                  : new i(function (t) {
                                      t(r);
                                    })).then(n, a);
                          }
                          c((s = s.apply(r, o || [])).next());
                        })
                      );
                      var r, o, i, s;
                    });
                  }
                  handleEvent(t) {
                    var e = t.event;
                    if (0 === e.indexOf("pusher_internal:"))
                      this.handleInternalEvent(t);
                    else {
                      var n = t.data,
                        r = {};
                      t.user_id && (r.user_id = t.user_id), this.emit(e, n, r);
                    }
                  }
                  handleInternalEvent(t) {
                    var e = t.event,
                      n = t.data;
                    switch (e) {
                      case "pusher_internal:subscription_succeeded":
                        this.handleSubscriptionSucceededEvent(t);
                        break;
                      case "pusher_internal:subscription_count":
                        this.handleSubscriptionCountEvent(t);
                        break;
                      case "pusher_internal:member_added":
                        var r = this.members.addMember(n);
                        this.emit("pusher:member_added", r);
                        break;
                      case "pusher_internal:member_removed":
                        var o = this.members.removeMember(n);
                        o && this.emit("pusher:member_removed", o);
                    }
                  }
                  handleSubscriptionSucceededEvent(t) {
                    (this.subscriptionPending = !1),
                      (this.subscribed = !0),
                      this.subscriptionCancelled
                        ? this.pusher.unsubscribe(this.name)
                        : (this.members.onSubscription(t.data),
                          this.emit(
                            "pusher:subscription_succeeded",
                            this.members
                          ));
                  }
                  disconnect() {
                    this.members.reset(), super.disconnect();
                  }
                }
                var Xt = n(1),
                  Zt = n(0);
                class Yt extends Jt {
                  constructor(t, e, n) {
                    super(t, e), (this.key = null), (this.nacl = n);
                  }
                  authorize(t, e) {
                    super.authorize(t, (t, n) => {
                      if (t) return void e(t, n);
                      let r = n.shared_secret;
                      r
                        ? ((this.key = Object(Zt.decode)(r)),
                          delete n.shared_secret,
                          e(null, n))
                        : e(
                            new Error(
                              `No shared_secret key in auth payload for encrypted channel: ${this.name}`
                            ),
                            null
                          );
                    });
                  }
                  trigger(t, e) {
                    throw new R(
                      "Client events are not currently supported for encrypted channels"
                    );
                  }
                  handleEvent(t) {
                    var e = t.event,
                      n = t.data;
                    0 !== e.indexOf("pusher_internal:") &&
                    0 !== e.indexOf("pusher:")
                      ? this.handleEncryptedEvent(e, n)
                      : super.handleEvent(t);
                  }
                  handleEncryptedEvent(t, e) {
                    if (!this.key)
                      return void ht.debug(
                        "Received encrypted event before key has been retrieved from the authEndpoint"
                      );
                    if (!e.ciphertext || !e.nonce)
                      return void ht.error(
                        "Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " +
                          e
                      );
                    let n = Object(Zt.decode)(e.ciphertext);
                    if (n.length < this.nacl.secretbox.overheadLength)
                      return void ht.error(
                        `Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${n.length}`
                      );
                    let r = Object(Zt.decode)(e.nonce);
                    if (r.length < this.nacl.secretbox.nonceLength)
                      return void ht.error(
                        `Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${r.length}`
                      );
                    let o = this.nacl.secretbox.open(n, r, this.key);
                    if (null === o)
                      return (
                        ht.debug(
                          "Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."
                        ),
                        void this.authorize(
                          this.pusher.connection.socket_id,
                          (e, i) => {
                            e
                              ? ht.error(
                                  `Failed to make a request to the authEndpoint: ${i}. Unable to fetch new key, so dropping encrypted event`
                                )
                              : ((o = this.nacl.secretbox.open(n, r, this.key)),
                                null !== o
                                  ? this.emit(t, this.getDataToEmit(o))
                                  : ht.error(
                                      "Failed to decrypt event with new key. Dropping encrypted event"
                                    ));
                          }
                        )
                      );
                    this.emit(t, this.getDataToEmit(o));
                  }
                  getDataToEmit(t) {
                    let e = Object(Xt.decode)(t);
                    try {
                      return JSON.parse(e);
                    } catch (t) {
                      return e;
                    }
                  }
                }
                class Qt extends Pt {
                  constructor(t, e) {
                    super(),
                      (this.state = "initialized"),
                      (this.connection = null),
                      (this.key = t),
                      (this.options = e),
                      (this.timeline = this.options.timeline),
                      (this.usingTLS = this.options.useTLS),
                      (this.errorCallbacks = this.buildErrorCallbacks()),
                      (this.connectionCallbacks = this.buildConnectionCallbacks(
                        this.errorCallbacks
                      )),
                      (this.handshakeCallbacks = this.buildHandshakeCallbacks(
                        this.errorCallbacks
                      ));
                    var n = Pe.getNetwork();
                    n.bind("online", () => {
                      this.timeline.info({ netinfo: "online" }),
                        ("connecting" !== this.state &&
                          "unavailable" !== this.state) ||
                          this.retryIn(0);
                    }),
                      n.bind("offline", () => {
                        this.timeline.info({ netinfo: "offline" }),
                          this.connection && this.sendActivityCheck();
                      }),
                      this.updateStrategy();
                  }
                  connect() {
                    this.connection ||
                      this.runner ||
                      (this.strategy.isSupported()
                        ? (this.updateState("connecting"),
                          this.startConnecting(),
                          this.setUnavailableTimer())
                        : this.updateState("failed"));
                  }
                  send(t) {
                    return !!this.connection && this.connection.send(t);
                  }
                  send_event(t, e, n) {
                    return (
                      !!this.connection && this.connection.send_event(t, e, n)
                    );
                  }
                  disconnect() {
                    this.disconnectInternally(),
                      this.updateState("disconnected");
                  }
                  isUsingTLS() {
                    return this.usingTLS;
                  }
                  startConnecting() {
                    var t = (e, n) => {
                      e
                        ? (this.runner = this.strategy.connect(0, t))
                        : "error" === n.action
                        ? (this.emit("error", {
                            type: "HandshakeError",
                            error: n.error,
                          }),
                          this.timeline.error({ handshakeError: n.error }))
                        : (this.abortConnecting(),
                          this.handshakeCallbacks[n.action](n));
                    };
                    this.runner = this.strategy.connect(0, t);
                  }
                  abortConnecting() {
                    this.runner && (this.runner.abort(), (this.runner = null));
                  }
                  disconnectInternally() {
                    this.abortConnecting(),
                      this.clearRetryTimer(),
                      this.clearUnavailableTimer(),
                      this.connection && this.abandonConnection().close();
                  }
                  updateStrategy() {
                    this.strategy = this.options.getStrategy({
                      key: this.key,
                      timeline: this.timeline,
                      useTLS: this.usingTLS,
                    });
                  }
                  retryIn(t) {
                    this.timeline.info({ action: "retry", delay: t }),
                      t > 0 && this.emit("connecting_in", Math.round(t / 1e3)),
                      (this.retryTimer = new Z(t || 0, () => {
                        this.disconnectInternally(), this.connect();
                      }));
                  }
                  clearRetryTimer() {
                    this.retryTimer &&
                      (this.retryTimer.ensureAborted(),
                      (this.retryTimer = null));
                  }
                  setUnavailableTimer() {
                    this.unavailableTimer = new Z(
                      this.options.unavailableTimeout,
                      () => {
                        this.updateState("unavailable");
                      }
                    );
                  }
                  clearUnavailableTimer() {
                    this.unavailableTimer &&
                      this.unavailableTimer.ensureAborted();
                  }
                  sendActivityCheck() {
                    this.stopActivityCheck(),
                      this.connection.ping(),
                      (this.activityTimer = new Z(
                        this.options.pongTimeout,
                        () => {
                          this.timeline.error({
                            pong_timed_out: this.options.pongTimeout,
                          }),
                            this.retryIn(0);
                        }
                      ));
                  }
                  resetActivityCheck() {
                    this.stopActivityCheck(),
                      this.connection &&
                        !this.connection.handlesActivityChecks() &&
                        (this.activityTimer = new Z(
                          this.activityTimeout,
                          () => {
                            this.sendActivityCheck();
                          }
                        ));
                  }
                  stopActivityCheck() {
                    this.activityTimer && this.activityTimer.ensureAborted();
                  }
                  buildConnectionCallbacks(t) {
                    return et({}, t, {
                      message: (t) => {
                        this.resetActivityCheck(), this.emit("message", t);
                      },
                      ping: () => {
                        this.send_event("pusher:pong", {});
                      },
                      activity: () => {
                        this.resetActivityCheck();
                      },
                      error: (t) => {
                        this.emit("error", t);
                      },
                      closed: () => {
                        this.abandonConnection(),
                          this.shouldRetry() && this.retryIn(1e3);
                      },
                    });
                  }
                  buildHandshakeCallbacks(t) {
                    return et({}, t, {
                      connected: (t) => {
                        (this.activityTimeout = Math.min(
                          this.options.activityTimeout,
                          t.activityTimeout,
                          t.connection.activityTimeout || 1 / 0
                        )),
                          this.clearUnavailableTimer(),
                          this.setConnection(t.connection),
                          (this.socket_id = this.connection.id),
                          this.updateState("connected", {
                            socket_id: this.socket_id,
                          });
                      },
                    });
                  }
                  buildErrorCallbacks() {
                    let t = (t) => (e) => {
                      e.error &&
                        this.emit("error", {
                          type: "WebSocketError",
                          error: e.error,
                        }),
                        t(e);
                    };
                    return {
                      tls_only: t(() => {
                        (this.usingTLS = !0),
                          this.updateStrategy(),
                          this.retryIn(0);
                      }),
                      refused: t(() => {
                        this.disconnect();
                      }),
                      backoff: t(() => {
                        this.retryIn(1e3);
                      }),
                      retry: t(() => {
                        this.retryIn(0);
                      }),
                    };
                  }
                  setConnection(t) {
                    for (var e in ((this.connection = t),
                    this.connectionCallbacks))
                      this.connection.bind(e, this.connectionCallbacks[e]);
                    this.resetActivityCheck();
                  }
                  abandonConnection() {
                    if (this.connection) {
                      for (var t in (this.stopActivityCheck(),
                      this.connectionCallbacks))
                        this.connection.unbind(t, this.connectionCallbacks[t]);
                      var e = this.connection;
                      return (this.connection = null), e;
                    }
                  }
                  updateState(t, e) {
                    var n = this.state;
                    if (((this.state = t), n !== t)) {
                      var r = t;
                      "connected" === r &&
                        (r += " with new socket ID " + e.socket_id),
                        ht.debug("State changed", n + " -> " + r),
                        this.timeline.info({ state: t, params: e }),
                        this.emit("state_change", { previous: n, current: t }),
                        this.emit(t, e);
                    }
                  }
                  shouldRetry() {
                    return (
                      "connecting" === this.state || "connected" === this.state
                    );
                  }
                }
                class te {
                  constructor() {
                    this.channels = {};
                  }
                  add(t, e) {
                    return (
                      this.channels[t] ||
                        (this.channels[t] = (function (t, e) {
                          if (0 === t.indexOf("private-encrypted-")) {
                            if (e.config.nacl)
                              return ee.createEncryptedChannel(
                                t,
                                e,
                                e.config.nacl
                              );
                            let n =
                                "Tried to subscribe to a private-encrypted- channel but no nacl implementation available",
                              r = L("encryptedChannelSupport");
                            throw new R(`${n}. ${r}`);
                          }
                          if (0 === t.indexOf("private-"))
                            return ee.createPrivateChannel(t, e);
                          if (0 === t.indexOf("presence-"))
                            return ee.createPresenceChannel(t, e);
                          if (0 === t.indexOf("#"))
                            throw new E(
                              'Cannot create a channel with name "' + t + '".'
                            );
                          return ee.createChannel(t, e);
                        })(t, e)),
                      this.channels[t]
                    );
                  }
                  all() {
                    return (
                      (t = this.channels),
                      (e = []),
                      ot(t, function (t) {
                        e.push(t);
                      }),
                      e
                    );
                    var t, e;
                  }
                  find(t) {
                    return this.channels[t];
                  }
                  remove(t) {
                    var e = this.channels[t];
                    return delete this.channels[t], e;
                  }
                  disconnect() {
                    ot(this.channels, function (t) {
                      t.disconnect();
                    });
                  }
                }
                var ee = {
                  createChannels: () => new te(),
                  createConnectionManager: (t, e) => new Qt(t, e),
                  createChannel: (t, e) => new Gt(t, e),
                  createPrivateChannel: (t, e) => new Jt(t, e),
                  createPresenceChannel: (t, e) => new Kt(t, e),
                  createEncryptedChannel: (t, e, n) => new Yt(t, e, n),
                  createTimelineSender: (t, e) => new zt(t, e),
                  createHandshake: (t, e) => new Vt(t, e),
                  createAssistantToTheTransportManager: (t, e, n) =>
                    new Nt(t, e, n),
                };
                class ne {
                  constructor(t) {
                    (this.options = t || {}),
                      (this.livesLeft = this.options.lives || 1 / 0);
                  }
                  getAssistant(t) {
                    return ee.createAssistantToTheTransportManager(this, t, {
                      minPingDelay: this.options.minPingDelay,
                      maxPingDelay: this.options.maxPingDelay,
                    });
                  }
                  isAlive() {
                    return this.livesLeft > 0;
                  }
                  reportDeath() {
                    this.livesLeft -= 1;
                  }
                }
                class re {
                  constructor(t, e) {
                    (this.strategies = t),
                      (this.loop = Boolean(e.loop)),
                      (this.failFast = Boolean(e.failFast)),
                      (this.timeout = e.timeout),
                      (this.timeoutLimit = e.timeoutLimit);
                  }
                  isSupported() {
                    return lt(this.strategies, tt.method("isSupported"));
                  }
                  connect(t, e) {
                    var n = this.strategies,
                      r = 0,
                      o = this.timeout,
                      i = null,
                      s = (a, c) => {
                        c
                          ? e(null, c)
                          : ((r += 1),
                            this.loop && (r %= n.length),
                            r < n.length
                              ? (o &&
                                  ((o *= 2),
                                  this.timeoutLimit &&
                                    (o = Math.min(o, this.timeoutLimit))),
                                (i = this.tryStrategy(
                                  n[r],
                                  t,
                                  { timeout: o, failFast: this.failFast },
                                  s
                                )))
                              : e(!0));
                      };
                    return (
                      (i = this.tryStrategy(
                        n[r],
                        t,
                        { timeout: o, failFast: this.failFast },
                        s
                      )),
                      {
                        abort: function () {
                          i.abort();
                        },
                        forceMinPriority: function (e) {
                          (t = e), i && i.forceMinPriority(e);
                        },
                      }
                    );
                  }
                  tryStrategy(t, e, n, r) {
                    var o = null,
                      i = null;
                    return (
                      n.timeout > 0 &&
                        (o = new Z(n.timeout, function () {
                          i.abort(), r(!0);
                        })),
                      (i = t.connect(e, function (t, e) {
                        (t && o && o.isRunning() && !n.failFast) ||
                          (o && o.ensureAborted(), r(t, e));
                      })),
                      {
                        abort: function () {
                          o && o.ensureAborted(), i.abort();
                        },
                        forceMinPriority: function (t) {
                          i.forceMinPriority(t);
                        },
                      }
                    );
                  }
                }
                class oe {
                  constructor(t) {
                    this.strategies = t;
                  }
                  isSupported() {
                    return lt(this.strategies, tt.method("isSupported"));
                  }
                  connect(t, e) {
                    return (function (t, n, r) {
                      var o = at(t, function (t, r, o, i) {
                        return t.connect(
                          n,
                          (function (t, n) {
                            return function (r, o) {
                              (n[t].error = r),
                                r
                                  ? (function (t) {
                                      return (function (t, e) {
                                        for (var n = 0; n < t.length; n++)
                                          if (!e(t[n], n, t)) return !1;
                                        return !0;
                                      })(t, function (t) {
                                        return Boolean(t.error);
                                      });
                                    })(n) && e(!0)
                                  : (st(n, function (t) {
                                      t.forceMinPriority(o.transport.priority);
                                    }),
                                    e(null, o));
                            };
                          })(r, i)
                        );
                      });
                      return {
                        abort: function () {
                          st(o, ie);
                        },
                        forceMinPriority: function (t) {
                          st(o, function (e) {
                            e.forceMinPriority(t);
                          });
                        },
                      };
                    })(this.strategies, t);
                  }
                }
                function ie(t) {
                  t.error || t.aborted || (t.abort(), (t.aborted = !0));
                }
                class se {
                  constructor(t, e, n) {
                    (this.strategy = t),
                      (this.transports = e),
                      (this.ttl = n.ttl || 18e5),
                      (this.usingTLS = n.useTLS),
                      (this.timeline = n.timeline);
                  }
                  isSupported() {
                    return this.strategy.isSupported();
                  }
                  connect(t, e) {
                    var n = this.usingTLS,
                      r = (function (t) {
                        var e = Pe.getLocalStorage();
                        if (e)
                          try {
                            var n = e[ae(t)];
                            if (n) return JSON.parse(n);
                          } catch (e) {
                            ce(t);
                          }
                        return null;
                      })(n),
                      o = r && r.cacheSkipCount ? r.cacheSkipCount : 0,
                      i = [this.strategy];
                    if (r && r.timestamp + this.ttl >= tt.now()) {
                      var s = this.transports[r.transport];
                      s &&
                        (["ws", "wss"].includes(r.transport) || o > 3
                          ? (this.timeline.info({
                              cached: !0,
                              transport: r.transport,
                              latency: r.latency,
                            }),
                            i.push(
                              new re([s], {
                                timeout: 2 * r.latency + 1e3,
                                failFast: !0,
                              })
                            ))
                          : o++);
                    }
                    var a = tt.now(),
                      c = i.pop().connect(t, function r(s, u) {
                        s
                          ? (ce(n),
                            i.length > 0
                              ? ((a = tt.now()), (c = i.pop().connect(t, r)))
                              : e(s))
                          : ((function (t, e, n, r) {
                              var o = Pe.getLocalStorage();
                              if (o)
                                try {
                                  o[ae(t)] = ft({
                                    timestamp: tt.now(),
                                    transport: e,
                                    latency: n,
                                    cacheSkipCount: r,
                                  });
                                } catch (t) {}
                            })(n, u.transport.name, tt.now() - a, o),
                            e(null, u));
                      });
                    return {
                      abort: function () {
                        c.abort();
                      },
                      forceMinPriority: function (e) {
                        (t = e), c && c.forceMinPriority(e);
                      },
                    };
                  }
                }
                function ae(t) {
                  return "pusherTransport" + (t ? "TLS" : "NonTLS");
                }
                function ce(t) {
                  var e = Pe.getLocalStorage();
                  if (e)
                    try {
                      delete e[ae(t)];
                    } catch (t) {}
                }
                class ue {
                  constructor(t, { delay: e }) {
                    (this.strategy = t), (this.options = { delay: e });
                  }
                  isSupported() {
                    return this.strategy.isSupported();
                  }
                  connect(t, e) {
                    var n,
                      r = this.strategy,
                      o = new Z(this.options.delay, function () {
                        n = r.connect(t, e);
                      });
                    return {
                      abort: function () {
                        o.ensureAborted(), n && n.abort();
                      },
                      forceMinPriority: function (e) {
                        (t = e), n && n.forceMinPriority(e);
                      },
                    };
                  }
                }
                class le {
                  constructor(t, e, n) {
                    (this.test = t),
                      (this.trueBranch = e),
                      (this.falseBranch = n);
                  }
                  isSupported() {
                    return (
                      this.test() ? this.trueBranch : this.falseBranch
                    ).isSupported();
                  }
                  connect(t, e) {
                    return (
                      this.test() ? this.trueBranch : this.falseBranch
                    ).connect(t, e);
                  }
                }
                class de {
                  constructor(t) {
                    this.strategy = t;
                  }
                  isSupported() {
                    return this.strategy.isSupported();
                  }
                  connect(t, e) {
                    var n = this.strategy.connect(t, function (t, r) {
                      r && n.abort(), e(t, r);
                    });
                    return n;
                  }
                }
                function fe(t) {
                  return function () {
                    return t.isSupported();
                  };
                }
                var he,
                  pe = {
                    getRequest: function (t) {
                      var e = new window.XDomainRequest();
                      return (
                        (e.ontimeout = function () {
                          t.emit("error", new A()), t.close();
                        }),
                        (e.onerror = function (e) {
                          t.emit("error", e), t.close();
                        }),
                        (e.onprogress = function () {
                          e.responseText &&
                            e.responseText.length > 0 &&
                            t.onChunk(200, e.responseText);
                        }),
                        (e.onload = function () {
                          e.responseText &&
                            e.responseText.length > 0 &&
                            t.onChunk(200, e.responseText),
                            t.emit("finished", 200),
                            t.close();
                        }),
                        e
                      );
                    },
                    abortRequest: function (t) {
                      (t.ontimeout =
                        t.onerror =
                        t.onprogress =
                        t.onload =
                          null),
                        t.abort();
                    },
                  };
                class me extends Pt {
                  constructor(t, e, n) {
                    super(),
                      (this.hooks = t),
                      (this.method = e),
                      (this.url = n);
                  }
                  start(t) {
                    (this.position = 0),
                      (this.xhr = this.hooks.getRequest(this)),
                      (this.unloader = () => {
                        this.close();
                      }),
                      Pe.addUnloadListener(this.unloader),
                      this.xhr.open(this.method, this.url, !0),
                      this.xhr.setRequestHeader &&
                        this.xhr.setRequestHeader(
                          "Content-Type",
                          "application/json"
                        ),
                      this.xhr.send(t);
                  }
                  close() {
                    this.unloader &&
                      (Pe.removeUnloadListener(this.unloader),
                      (this.unloader = null)),
                      this.xhr &&
                        (this.hooks.abortRequest(this.xhr), (this.xhr = null));
                  }
                  onChunk(t, e) {
                    for (;;) {
                      var n = this.advanceBuffer(e);
                      if (!n) break;
                      this.emit("chunk", { status: t, data: n });
                    }
                    this.isBufferTooLong(e) && this.emit("buffer_too_long");
                  }
                  advanceBuffer(t) {
                    var e = t.slice(this.position),
                      n = e.indexOf("\n");
                    return -1 !== n
                      ? ((this.position += n + 1), e.slice(0, n))
                      : null;
                  }
                  isBufferTooLong(t) {
                    return this.position === t.length && t.length > 262144;
                  }
                }
                !(function (t) {
                  (t[(t.CONNECTING = 0)] = "CONNECTING"),
                    (t[(t.OPEN = 1)] = "OPEN"),
                    (t[(t.CLOSED = 3)] = "CLOSED");
                })(he || (he = {}));
                var ve = he,
                  ge = 1;
                function be(t) {
                  var e = -1 === t.indexOf("?") ? "?" : "&";
                  return t + e + "t=" + +new Date() + "&n=" + ge++;
                }
                function we(t) {
                  return Pe.randomInt(t);
                }
                var ye,
                  _e = class {
                    constructor(t, e) {
                      (this.hooks = t),
                        (this.session =
                          we(1e3) +
                          "/" +
                          (function (t) {
                            for (var e = [], n = 0; n < 8; n++)
                              e.push(we(32).toString(32));
                            return e.join("");
                          })()),
                        (this.location = (function (t) {
                          var e = /([^\?]*)\/*(\??.*)/.exec(t);
                          return { base: e[1], queryString: e[2] };
                        })(e)),
                        (this.readyState = ve.CONNECTING),
                        this.openStream();
                    }
                    send(t) {
                      return this.sendRaw(JSON.stringify([t]));
                    }
                    ping() {
                      this.hooks.sendHeartbeat(this);
                    }
                    close(t, e) {
                      this.onClose(t, e, !0);
                    }
                    sendRaw(t) {
                      if (this.readyState !== ve.OPEN) return !1;
                      try {
                        return (
                          Pe.createSocketRequest(
                            "POST",
                            be(
                              ((e = this.location),
                              (n = this.session),
                              e.base + "/" + n + "/xhr_send")
                            )
                          ).start(t),
                          !0
                        );
                      } catch (t) {
                        return !1;
                      }
                      var e, n;
                    }
                    reconnect() {
                      this.closeStream(), this.openStream();
                    }
                    onClose(t, e, n) {
                      this.closeStream(),
                        (this.readyState = ve.CLOSED),
                        this.onclose &&
                          this.onclose({ code: t, reason: e, wasClean: n });
                    }
                    onChunk(t) {
                      var e;
                      if (200 === t.status)
                        switch (
                          (this.readyState === ve.OPEN && this.onActivity(),
                          t.data.slice(0, 1))
                        ) {
                          case "o":
                            (e = JSON.parse(t.data.slice(1) || "{}")),
                              this.onOpen(e);
                            break;
                          case "a":
                            e = JSON.parse(t.data.slice(1) || "[]");
                            for (var n = 0; n < e.length; n++)
                              this.onEvent(e[n]);
                            break;
                          case "m":
                            (e = JSON.parse(t.data.slice(1) || "null")),
                              this.onEvent(e);
                            break;
                          case "h":
                            this.hooks.onHeartbeat(this);
                            break;
                          case "c":
                            (e = JSON.parse(t.data.slice(1) || "[]")),
                              this.onClose(e[0], e[1], !0);
                        }
                    }
                    onOpen(t) {
                      var e, n, r;
                      this.readyState === ve.CONNECTING
                        ? (t &&
                            t.hostname &&
                            (this.location.base =
                              ((e = this.location.base),
                              (n = t.hostname),
                              (r = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(
                                e
                              ))[1] +
                                n +
                                r[3])),
                          (this.readyState = ve.OPEN),
                          this.onopen && this.onopen())
                        : this.onClose(1006, "Server lost session", !0);
                    }
                    onEvent(t) {
                      this.readyState === ve.OPEN &&
                        this.onmessage &&
                        this.onmessage({ data: t });
                    }
                    onActivity() {
                      this.onactivity && this.onactivity();
                    }
                    onError(t) {
                      this.onerror && this.onerror(t);
                    }
                    openStream() {
                      (this.stream = Pe.createSocketRequest(
                        "POST",
                        be(
                          this.hooks.getReceiveURL(this.location, this.session)
                        )
                      )),
                        this.stream.bind("chunk", (t) => {
                          this.onChunk(t);
                        }),
                        this.stream.bind("finished", (t) => {
                          this.hooks.onFinished(this, t);
                        }),
                        this.stream.bind("buffer_too_long", () => {
                          this.reconnect();
                        });
                      try {
                        this.stream.start();
                      } catch (t) {
                        tt.defer(() => {
                          this.onError(t),
                            this.onClose(1006, "Could not start streaming", !1);
                        });
                      }
                    }
                    closeStream() {
                      this.stream &&
                        (this.stream.unbind_all(),
                        this.stream.close(),
                        (this.stream = null));
                    }
                  },
                  ke = {
                    getReceiveURL: function (t, e) {
                      return (
                        t.base + "/" + e + "/xhr_streaming" + t.queryString
                      );
                    },
                    onHeartbeat: function (t) {
                      t.sendRaw("[]");
                    },
                    sendHeartbeat: function (t) {
                      t.sendRaw("[]");
                    },
                    onFinished: function (t, e) {
                      t.onClose(1006, "Connection interrupted (" + e + ")", !1);
                    },
                  },
                  xe = {
                    getReceiveURL: function (t, e) {
                      return t.base + "/" + e + "/xhr" + t.queryString;
                    },
                    onHeartbeat: function () {},
                    sendHeartbeat: function (t) {
                      t.sendRaw("[]");
                    },
                    onFinished: function (t, e) {
                      200 === e
                        ? t.reconnect()
                        : t.onClose(
                            1006,
                            "Connection interrupted (" + e + ")",
                            !1
                          );
                    },
                  },
                  Se = {
                    getRequest: function (t) {
                      var e = new (Pe.getXHRAPI())();
                      return (
                        (e.onreadystatechange = e.onprogress =
                          function () {
                            switch (e.readyState) {
                              case 3:
                                e.responseText &&
                                  e.responseText.length > 0 &&
                                  t.onChunk(e.status, e.responseText);
                                break;
                              case 4:
                                e.responseText &&
                                  e.responseText.length > 0 &&
                                  t.onChunk(e.status, e.responseText),
                                  t.emit("finished", e.status),
                                  t.close();
                            }
                          }),
                        e
                      );
                    },
                    abortRequest: function (t) {
                      (t.onreadystatechange = null), t.abort();
                    },
                  },
                  Pe = {
                    nextAuthCallbackID: 1,
                    auth_callbacks: {},
                    ScriptReceivers: o,
                    DependenciesReceivers: P,
                    getDefaultStrategy: function (t, e, n) {
                      var r = {};
                      function o(e, o, i, s, a) {
                        var c = n(t, e, o, i, s, a);
                        return (r[e] = c), c;
                      }
                      var i,
                        s = Object.assign({}, e, {
                          hostNonTLS: t.wsHost + ":" + t.wsPort,
                          hostTLS: t.wsHost + ":" + t.wssPort,
                          httpPath: t.wsPath,
                        }),
                        a = Object.assign({}, s, { useTLS: !0 }),
                        c = Object.assign({}, e, {
                          hostNonTLS: t.httpHost + ":" + t.httpPort,
                          hostTLS: t.httpHost + ":" + t.httpsPort,
                          httpPath: t.httpPath,
                        }),
                        u = { loop: !0, timeout: 15e3, timeoutLimit: 6e4 },
                        l = new ne({
                          minPingDelay: 1e4,
                          maxPingDelay: t.activityTimeout,
                        }),
                        d = new ne({
                          lives: 2,
                          minPingDelay: 1e4,
                          maxPingDelay: t.activityTimeout,
                        }),
                        f = o("ws", "ws", 3, s, l),
                        h = o("wss", "ws", 3, a, l),
                        p = o("sockjs", "sockjs", 1, c),
                        m = o("xhr_streaming", "xhr_streaming", 1, c, d),
                        v = o("xdr_streaming", "xdr_streaming", 1, c, d),
                        g = o("xhr_polling", "xhr_polling", 1, c),
                        b = o("xdr_polling", "xdr_polling", 1, c),
                        w = new re([f], u),
                        y = new re([h], u),
                        _ = new re([p], u),
                        k = new re([new le(fe(m), m, v)], u),
                        x = new re([new le(fe(g), g, b)], u),
                        S = new re(
                          [
                            new le(
                              fe(k),
                              new oe([k, new ue(x, { delay: 4e3 })]),
                              x
                            ),
                          ],
                          u
                        ),
                        P = new le(fe(S), S, _);
                      return (
                        (i = e.useTLS
                          ? new oe([w, new ue(P, { delay: 2e3 })])
                          : new oe([
                              w,
                              new ue(y, { delay: 2e3 }),
                              new ue(P, { delay: 5e3 }),
                            ])),
                        new se(new de(new le(fe(f), i, P)), r, {
                          ttl: 18e5,
                          timeline: e.timeline,
                          useTLS: e.useTLS,
                        })
                      );
                    },
                    Transports: Bt,
                    transportConnectionInitializer: function () {
                      var t = this;
                      t.timeline.info(
                        t.buildTimelineMessage({
                          transport: t.name + (t.options.useTLS ? "s" : ""),
                        })
                      ),
                        t.hooks.isInitialized()
                          ? t.changeState("initialized")
                          : t.hooks.file
                          ? (t.changeState("initializing"),
                            $.load(
                              t.hooks.file,
                              { useTLS: t.options.useTLS },
                              function (e, n) {
                                t.hooks.isInitialized()
                                  ? (t.changeState("initialized"), n(!0))
                                  : (e && t.onError(e), t.onClose(), n(!1));
                              }
                            ))
                          : t.onClose();
                    },
                    HTTPFactory: {
                      createStreamingSocket(t) {
                        return this.createSocket(ke, t);
                      },
                      createPollingSocket(t) {
                        return this.createSocket(xe, t);
                      },
                      createSocket: (t, e) => new _e(t, e),
                      createXHR(t, e) {
                        return this.createRequest(Se, t, e);
                      },
                      createRequest: (t, e, n) => new me(t, e, n),
                      createXDR: function (t, e) {
                        return this.createRequest(pe, t, e);
                      },
                    },
                    TimelineTransport: gt,
                    getXHRAPI: () => window.XMLHttpRequest,
                    getWebSocketAPI: () =>
                      window.WebSocket || window.MozWebSocket,
                    setup(t) {
                      window.Pusher = t;
                      var e = () => {
                        this.onDocumentBody(t.ready);
                      };
                      window.JSON ? e() : $.load("json2", {}, e);
                    },
                    getDocument: () => document,
                    getProtocol() {
                      return this.getDocument().location.protocol;
                    },
                    getAuthorizers: () => ({ ajax: j, jsonp: pt }),
                    onDocumentBody(t) {
                      document.body
                        ? t()
                        : setTimeout(() => {
                            this.onDocumentBody(t);
                          }, 0);
                    },
                    createJSONPRequest: (t, e) => new vt(t, e),
                    createScriptRequest: (t) => new mt(t),
                    getLocalStorage() {
                      try {
                        return window.localStorage;
                      } catch (t) {
                        return;
                      }
                    },
                    createXHR() {
                      return this.getXHRAPI()
                        ? this.createXMLHttpRequest()
                        : this.createMicrosoftXHR();
                    },
                    createXMLHttpRequest() {
                      return new (this.getXHRAPI())();
                    },
                    createMicrosoftXHR: () =>
                      new ActiveXObject("Microsoft.XMLHTTP"),
                    getNetwork: () => jt,
                    createWebSocket(t) {
                      return new (this.getWebSocketAPI())(t);
                    },
                    createSocketRequest(t, e) {
                      if (this.isXHRSupported())
                        return this.HTTPFactory.createXHR(t, e);
                      if (this.isXDRSupported(0 === e.indexOf("https:")))
                        return this.HTTPFactory.createXDR(t, e);
                      throw "Cross-origin HTTP requests are not supported";
                    },
                    isXHRSupported() {
                      var t = this.getXHRAPI();
                      return Boolean(t) && void 0 !== new t().withCredentials;
                    },
                    isXDRSupported(t) {
                      var e = t ? "https:" : "http:",
                        n = this.getProtocol();
                      return Boolean(window.XDomainRequest) && n === e;
                    },
                    addUnloadListener(t) {
                      void 0 !== window.addEventListener
                        ? window.addEventListener("unload", t, !1)
                        : void 0 !== window.attachEvent &&
                          window.attachEvent("onunload", t);
                    },
                    removeUnloadListener(t) {
                      void 0 !== window.addEventListener
                        ? window.removeEventListener("unload", t, !1)
                        : void 0 !== window.detachEvent &&
                          window.detachEvent("onunload", t);
                    },
                    randomInt: (t) =>
                      Math.floor(
                        ((window.crypto || window.msCrypto).getRandomValues(
                          new Uint32Array(1)
                        )[0] /
                          Math.pow(2, 32)) *
                          t
                      ),
                  };
                !(function (t) {
                  (t[(t.ERROR = 3)] = "ERROR"),
                    (t[(t.INFO = 6)] = "INFO"),
                    (t[(t.DEBUG = 7)] = "DEBUG");
                })(ye || (ye = {}));
                var $e = ye;
                class Ce {
                  constructor(t, e, n) {
                    (this.key = t),
                      (this.session = e),
                      (this.events = []),
                      (this.options = n || {}),
                      (this.sent = 0),
                      (this.uniqueID = 0);
                  }
                  log(t, e) {
                    t <= this.options.level &&
                      (this.events.push(et({}, e, { timestamp: tt.now() })),
                      this.options.limit &&
                        this.events.length > this.options.limit &&
                        this.events.shift());
                  }
                  error(t) {
                    this.log($e.ERROR, t);
                  }
                  info(t) {
                    this.log($e.INFO, t);
                  }
                  debug(t) {
                    this.log($e.DEBUG, t);
                  }
                  isEmpty() {
                    return 0 === this.events.length;
                  }
                  send(t, e) {
                    var n = et(
                      {
                        session: this.session,
                        bundle: this.sent + 1,
                        key: this.key,
                        lib: "js",
                        version: this.options.version,
                        cluster: this.options.cluster,
                        features: this.options.features,
                        timeline: this.events,
                      },
                      this.options.params
                    );
                    return (
                      (this.events = []),
                      t(n, (t, n) => {
                        t || this.sent++, e && e(t, n);
                      }),
                      !0
                    );
                  }
                  generateUniqueID() {
                    return this.uniqueID++, this.uniqueID;
                  }
                }
                class Me {
                  constructor(t, e, n, r) {
                    (this.name = t),
                      (this.priority = e),
                      (this.transport = n),
                      (this.options = r || {});
                  }
                  isSupported() {
                    return this.transport.isSupported({
                      useTLS: this.options.useTLS,
                    });
                  }
                  connect(t, e) {
                    if (!this.isSupported()) return Le(new q(), e);
                    if (this.priority < t) return Le(new I(), e);
                    var n = !1,
                      r = this.transport.createConnection(
                        this.name,
                        this.priority,
                        this.options.key,
                        this.options
                      ),
                      o = null,
                      i = function () {
                        r.unbind("initialized", i), r.connect();
                      },
                      s = function () {
                        o = ee.createHandshake(r, function (t) {
                          (n = !0), u(), e(null, t);
                        });
                      },
                      a = function (t) {
                        u(), e(t);
                      },
                      c = function () {
                        var t;
                        u(), (t = ft(r)), e(new O(t));
                      },
                      u = function () {
                        r.unbind("initialized", i),
                          r.unbind("open", s),
                          r.unbind("error", a),
                          r.unbind("closed", c);
                      };
                    return (
                      r.bind("initialized", i),
                      r.bind("open", s),
                      r.bind("error", a),
                      r.bind("closed", c),
                      r.initialize(),
                      {
                        abort: () => {
                          n || (u(), o ? o.close() : r.close());
                        },
                        forceMinPriority: (t) => {
                          n ||
                            (this.priority < t && (o ? o.close() : r.close()));
                        },
                      }
                    );
                  }
                }
                function Le(t, e) {
                  return (
                    tt.defer(function () {
                      e(t);
                    }),
                    { abort: function () {}, forceMinPriority: function () {} }
                  );
                }
                const { Transports: Te } = Pe;
                var Ee = function (t, e, n, r, o, i) {
                    var s,
                      a = Te[n];
                    if (!a) throw new D(n);
                    return (
                      (t.enabledTransports &&
                        -1 === rt(t.enabledTransports, e)) ||
                      (t.disabledTransports &&
                        -1 !== rt(t.disabledTransports, e))
                        ? (s = Ae)
                        : ((o = Object.assign(
                            { ignoreNullOrigin: t.ignoreNullOrigin },
                            o
                          )),
                          (s = new Me(e, r, i ? i.getAssistant(a) : a, o))),
                      s
                    );
                  },
                  Ae = {
                    isSupported: function () {
                      return !1;
                    },
                    connect: function (t, e) {
                      var n = tt.defer(function () {
                        e(new q());
                      });
                      return {
                        abort: function () {
                          n.ensureAborted();
                        },
                        forceMinPriority: function () {},
                      };
                    },
                  };
                function Ie(t) {
                  return t.httpHost
                    ? t.httpHost
                    : t.cluster
                    ? `sockjs-${t.cluster}.pusher.com`
                    : l;
                }
                function Oe(t) {
                  return t.wsHost ? t.wsHost : `ws-${t.cluster}.pusher.com`;
                }
                function Re(t) {
                  return "https:" === Pe.getProtocol() || !1 !== t.forceTLS;
                }
                function De(t) {
                  return "enableStats" in t
                    ? t.enableStats
                    : "disableStats" in t && !t.disableStats;
                }
                function qe(t) {
                  const e = Object.assign(
                    Object.assign({}, y),
                    t.userAuthentication
                  );
                  return "customHandler" in e && null != e.customHandler
                    ? e.customHandler
                    : ((t) => {
                        if (void 0 === Pe.getAuthorizers()[t.transport])
                          throw `'${t.transport}' is not a recognized auth transport`;
                        return (e, n) => {
                          const r = ((t, e) => {
                            var n =
                              "socket_id=" + encodeURIComponent(t.socketId);
                            for (var r in e.params)
                              n +=
                                "&" +
                                encodeURIComponent(r) +
                                "=" +
                                encodeURIComponent(e.params[r]);
                            if (null != e.paramsProvider) {
                              let t = e.paramsProvider();
                              for (var r in t)
                                n +=
                                  "&" +
                                  encodeURIComponent(r) +
                                  "=" +
                                  encodeURIComponent(t[r]);
                            }
                            return n;
                          })(e, t);
                          Pe.getAuthorizers()[t.transport](
                            Pe,
                            r,
                            t,
                            M.UserAuthentication,
                            n
                          );
                        };
                      })(e);
                }
                function Be(t, e) {
                  const n = (function (t, e) {
                    let n;
                    return (
                      "channelAuthorization" in t
                        ? (n = Object.assign(
                            Object.assign({}, _),
                            t.channelAuthorization
                          ))
                        : ((n = {
                            transport: t.authTransport || v,
                            endpoint: t.authEndpoint || m,
                          }),
                          "auth" in t &&
                            ("params" in t.auth && (n.params = t.auth.params),
                            "headers" in t.auth &&
                              (n.headers = t.auth.headers)),
                          "authorizer" in t &&
                            (n.customHandler = ((t, e, n) => {
                              const r = {
                                authTransport: e.transport,
                                authEndpoint: e.endpoint,
                                auth: { params: e.params, headers: e.headers },
                              };
                              return (e, o) => {
                                const i = t.channel(e.channelName);
                                n(i, r).authorize(e.socketId, o);
                              };
                            })(e, n, t.authorizer))),
                      n
                    );
                  })(t, e);
                  return "customHandler" in n && null != n.customHandler
                    ? n.customHandler
                    : ((t) => {
                        if (void 0 === Pe.getAuthorizers()[t.transport])
                          throw `'${t.transport}' is not a recognized auth transport`;
                        return (e, n) => {
                          const r = ((t, e) => {
                            var n =
                              "socket_id=" + encodeURIComponent(t.socketId);
                            for (var r in ((n +=
                              "&channel_name=" +
                              encodeURIComponent(t.channelName)),
                            e.params))
                              n +=
                                "&" +
                                encodeURIComponent(r) +
                                "=" +
                                encodeURIComponent(e.params[r]);
                            if (null != e.paramsProvider) {
                              let t = e.paramsProvider();
                              for (var r in t)
                                n +=
                                  "&" +
                                  encodeURIComponent(r) +
                                  "=" +
                                  encodeURIComponent(t[r]);
                            }
                            return n;
                          })(e, t);
                          Pe.getAuthorizers()[t.transport](
                            Pe,
                            r,
                            t,
                            M.ChannelAuthorization,
                            n
                          );
                        };
                      })(n);
                }
                class je extends Pt {
                  constructor(t) {
                    super(function (t, e) {
                      ht.debug(`No callbacks on watchlist events for ${t}`);
                    }),
                      (this.pusher = t),
                      this.bindWatchlistInternalEvent();
                  }
                  handleEvent(t) {
                    t.data.events.forEach((t) => {
                      this.emit(t.name, t);
                    });
                  }
                  bindWatchlistInternalEvent() {
                    this.pusher.connection.bind("message", (t) => {
                      "pusher_internal:watchlist_events" === t.event &&
                        this.handleEvent(t);
                    });
                  }
                }
                class Ne extends Pt {
                  constructor(t) {
                    super(function (t, e) {
                      ht.debug("No callbacks on user for " + t);
                    }),
                      (this.signin_requested = !1),
                      (this.user_data = null),
                      (this.serverToUserChannel = null),
                      (this.signinDonePromise = null),
                      (this._signinDoneResolve = null),
                      (this._onAuthorize = (t, e) => {
                        if (t)
                          return (
                            ht.warn(`Error during signin: ${t}`),
                            void this._cleanup()
                          );
                        this.pusher.send_event("pusher:signin", {
                          auth: e.auth,
                          user_data: e.user_data,
                        });
                      }),
                      (this.pusher = t),
                      this.pusher.connection.bind(
                        "state_change",
                        ({ previous: t, current: e }) => {
                          "connected" !== t &&
                            "connected" === e &&
                            this._signin(),
                            "connected" === t &&
                              "connected" !== e &&
                              (this._cleanup(),
                              this._newSigninPromiseIfNeeded());
                        }
                      ),
                      (this.watchlist = new je(t)),
                      this.pusher.connection.bind("message", (t) => {
                        "pusher:signin_success" === t.event &&
                          this._onSigninSuccess(t.data),
                          this.serverToUserChannel &&
                            this.serverToUserChannel.name === t.channel &&
                            this.serverToUserChannel.handleEvent(t);
                      });
                  }
                  signin() {
                    this.signin_requested ||
                      ((this.signin_requested = !0), this._signin());
                  }
                  _signin() {
                    this.signin_requested &&
                      (this._newSigninPromiseIfNeeded(),
                      "connected" === this.pusher.connection.state &&
                        this.pusher.config.userAuthenticator(
                          { socketId: this.pusher.connection.socket_id },
                          this._onAuthorize
                        ));
                  }
                  _onSigninSuccess(t) {
                    try {
                      this.user_data = JSON.parse(t.user_data);
                    } catch (e) {
                      return (
                        ht.error(
                          `Failed parsing user data after signin: ${t.user_data}`
                        ),
                        void this._cleanup()
                      );
                    }
                    if (
                      "string" != typeof this.user_data.id ||
                      "" === this.user_data.id
                    )
                      return (
                        ht.error(
                          `user_data doesn't contain an id. user_data: ${this.user_data}`
                        ),
                        void this._cleanup()
                      );
                    this._signinDoneResolve(), this._subscribeChannels();
                  }
                  _subscribeChannels() {
                    (this.serverToUserChannel = new Gt(
                      `#server-to-user-${this.user_data.id}`,
                      this.pusher
                    )),
                      this.serverToUserChannel.bind_global((t, e) => {
                        0 !== t.indexOf("pusher_internal:") &&
                          0 !== t.indexOf("pusher:") &&
                          this.emit(t, e);
                      }),
                      ((t) => {
                        t.subscriptionPending && t.subscriptionCancelled
                          ? t.reinstateSubscription()
                          : t.subscriptionPending ||
                            "connected" !== this.pusher.connection.state ||
                            t.subscribe();
                      })(this.serverToUserChannel);
                  }
                  _cleanup() {
                    (this.user_data = null),
                      this.serverToUserChannel &&
                        (this.serverToUserChannel.unbind_all(),
                        this.serverToUserChannel.disconnect(),
                        (this.serverToUserChannel = null)),
                      this.signin_requested && this._signinDoneResolve();
                  }
                  _newSigninPromiseIfNeeded() {
                    if (!this.signin_requested) return;
                    if (this.signinDonePromise && !this.signinDonePromise.done)
                      return;
                    const {
                      promise: t,
                      resolve: e,
                      reject: n,
                    } = (function () {
                      let t, e;
                      return {
                        promise: new Promise((n, r) => {
                          (t = n), (e = r);
                        }),
                        resolve: t,
                        reject: e,
                      };
                    })();
                    t.done = !1;
                    const r = () => {
                      t.done = !0;
                    };
                    t.then(r).catch(r),
                      (this.signinDonePromise = t),
                      (this._signinDoneResolve = e);
                  }
                }
                class He {
                  static ready() {
                    He.isReady = !0;
                    for (var t = 0, e = He.instances.length; t < e; t++)
                      He.instances[t].connect();
                  }
                  static getClientFeatures() {
                    return it(
                      ut({ ws: Pe.Transports.ws }, function (t) {
                        return t.isSupported({});
                      })
                    );
                  }
                  constructor(t, e) {
                    !(function (t) {
                      if (null == t)
                        throw "You must pass your app key when you instantiate Pusher.";
                    })(t),
                      (function (t) {
                        if (null == t) throw "You must pass an options object";
                        if (null == t.cluster)
                          throw "Options object must provide a cluster";
                        "disableStats" in t &&
                          ht.warn(
                            "The disableStats option is deprecated in favor of enableStats"
                          );
                      })(e),
                      (this.key = t),
                      (this.config = (function (t, e) {
                        let n = {
                          activityTimeout: t.activityTimeout || g,
                          cluster: t.cluster,
                          httpPath: t.httpPath || h,
                          httpPort: t.httpPort || d,
                          httpsPort: t.httpsPort || f,
                          pongTimeout: t.pongTimeout || b,
                          statsHost: t.statsHost || p,
                          unavailableTimeout: t.unavailableTimeout || w,
                          wsPath: t.wsPath || u,
                          wsPort: t.wsPort || a,
                          wssPort: t.wssPort || c,
                          enableStats: De(t),
                          httpHost: Ie(t),
                          useTLS: Re(t),
                          wsHost: Oe(t),
                          userAuthenticator: qe(t),
                          channelAuthorizer: Be(t, e),
                        };
                        return (
                          "disabledTransports" in t &&
                            (n.disabledTransports = t.disabledTransports),
                          "enabledTransports" in t &&
                            (n.enabledTransports = t.enabledTransports),
                          "ignoreNullOrigin" in t &&
                            (n.ignoreNullOrigin = t.ignoreNullOrigin),
                          "timelineParams" in t &&
                            (n.timelineParams = t.timelineParams),
                          "nacl" in t && (n.nacl = t.nacl),
                          n
                        );
                      })(e, this)),
                      (this.channels = ee.createChannels()),
                      (this.global_emitter = new Pt()),
                      (this.sessionID = Pe.randomInt(1e9)),
                      (this.timeline = new Ce(this.key, this.sessionID, {
                        cluster: this.config.cluster,
                        features: He.getClientFeatures(),
                        params: this.config.timelineParams || {},
                        limit: 50,
                        level: $e.INFO,
                        version: i,
                      })),
                      this.config.enableStats &&
                        (this.timelineSender = ee.createTimelineSender(
                          this.timeline,
                          {
                            host: this.config.statsHost,
                            path: "/timeline/v2/" + Pe.TimelineTransport.name,
                          }
                        )),
                      (this.connection = ee.createConnectionManager(this.key, {
                        getStrategy: (t) =>
                          Pe.getDefaultStrategy(this.config, t, Ee),
                        timeline: this.timeline,
                        activityTimeout: this.config.activityTimeout,
                        pongTimeout: this.config.pongTimeout,
                        unavailableTimeout: this.config.unavailableTimeout,
                        useTLS: Boolean(this.config.useTLS),
                      })),
                      this.connection.bind("connected", () => {
                        this.subscribeAll(),
                          this.timelineSender &&
                            this.timelineSender.send(
                              this.connection.isUsingTLS()
                            );
                      }),
                      this.connection.bind("message", (t) => {
                        var e = 0 === t.event.indexOf("pusher_internal:");
                        if (t.channel) {
                          var n = this.channel(t.channel);
                          n && n.handleEvent(t);
                        }
                        e || this.global_emitter.emit(t.event, t.data);
                      }),
                      this.connection.bind("connecting", () => {
                        this.channels.disconnect();
                      }),
                      this.connection.bind("disconnected", () => {
                        this.channels.disconnect();
                      }),
                      this.connection.bind("error", (t) => {
                        ht.warn(t);
                      }),
                      He.instances.push(this),
                      this.timeline.info({ instances: He.instances.length }),
                      (this.user = new Ne(this)),
                      He.isReady && this.connect();
                  }
                  channel(t) {
                    return this.channels.find(t);
                  }
                  allChannels() {
                    return this.channels.all();
                  }
                  connect() {
                    if (
                      (this.connection.connect(),
                      this.timelineSender && !this.timelineSenderTimer)
                    ) {
                      var t = this.connection.isUsingTLS(),
                        e = this.timelineSender;
                      this.timelineSenderTimer = new Y(6e4, function () {
                        e.send(t);
                      });
                    }
                  }
                  disconnect() {
                    this.connection.disconnect(),
                      this.timelineSenderTimer &&
                        (this.timelineSenderTimer.ensureAborted(),
                        (this.timelineSenderTimer = null));
                  }
                  bind(t, e, n) {
                    return this.global_emitter.bind(t, e, n), this;
                  }
                  unbind(t, e, n) {
                    return this.global_emitter.unbind(t, e, n), this;
                  }
                  bind_global(t) {
                    return this.global_emitter.bind_global(t), this;
                  }
                  unbind_global(t) {
                    return this.global_emitter.unbind_global(t), this;
                  }
                  unbind_all(t) {
                    return this.global_emitter.unbind_all(), this;
                  }
                  subscribeAll() {
                    var t;
                    for (t in this.channels.channels)
                      this.channels.channels.hasOwnProperty(t) &&
                        this.subscribe(t);
                  }
                  subscribe(t) {
                    var e = this.channels.add(t, this);
                    return (
                      e.subscriptionPending && e.subscriptionCancelled
                        ? e.reinstateSubscription()
                        : e.subscriptionPending ||
                          "connected" !== this.connection.state ||
                          e.subscribe(),
                      e
                    );
                  }
                  unsubscribe(t) {
                    var e = this.channels.find(t);
                    e && e.subscriptionPending
                      ? e.cancelSubscription()
                      : (e = this.channels.remove(t)) &&
                        e.subscribed &&
                        e.unsubscribe();
                  }
                  send_event(t, e, n) {
                    return this.connection.send_event(t, e, n);
                  }
                  shouldUseTLS() {
                    return this.config.useTLS;
                  }
                  signin() {
                    this.user.signin();
                  }
                }
                (He.instances = []),
                  (He.isReady = !1),
                  (He.logToConsole = !1),
                  (He.Runtime = Pe),
                  (He.ScriptReceivers = Pe.ScriptReceivers),
                  (He.DependenciesReceivers = Pe.DependenciesReceivers),
                  (He.auth_callbacks = Pe.auth_callbacks);
                var Fe = (e.default = He);
                Pe.setup(He);
              },
            ]);
          }),
          (t.exports = e());
      },
      4771: (t, e, n) => {
        "use strict";
        n.r(e),
          n.d(e, {
            cancel: () => b,
            format: () => f,
            register: () => s,
            render: () => w,
          });
        var r = ["second", "minute", "hour", "day", "week", "month", "year"],
          o = ["秒", "分钟", "小时", "天", "周", "个月", "年"],
          i = {},
          s = function (t, e) {
            i[t] = e;
          },
          a = function (t) {
            return i[t] || i.en_US;
          },
          c = [60, 60, 24, 7, 365 / 7 / 12, 12];
        function u(t) {
          return t instanceof Date
            ? t
            : !isNaN(t) || /^\d+$/.test(t)
            ? new Date(parseInt(t))
            : ((t = (t || "")
                .trim()
                .replace(/\.\d+/, "")
                .replace(/-/, "/")
                .replace(/-/, "/")
                .replace(/(\d)T(\d)/, "$1 $2")
                .replace(/Z/, " UTC")
                .replace(/([+-]\d\d):?(\d\d)/, " $1$2")),
              new Date(t));
        }
        function l(t, e) {
          for (
            var n = t < 0 ? 1 : 0, r = (t = Math.abs(t)), o = 0;
            t >= c[o] && o < c.length;
            o++
          )
            t /= c[o];
          return (
            (t = Math.floor(t)) > (0 == (o *= 2) ? 9 : 1) && (o += 1),
            e(t, o, r)[n].replace("%s", t.toString())
          );
        }
        function d(t, e) {
          return (+(e ? u(e) : new Date()) - +u(t)) / 1e3;
        }
        var f = function (t, e, n) {
            return l(d(t, n && n.relativeDate), a(e));
          },
          h = "timeago-id";
        function p(t) {
          return parseInt(t.getAttribute(h));
        }
        var m = {},
          v = function (t) {
            clearTimeout(t), delete m[t];
          };
        function g(t, e, n, r) {
          v(p(t));
          var o = r.relativeDate,
            i = r.minInterval,
            s = d(e, o);
          t.innerText = l(s, n);
          var a = setTimeout(
            function () {
              g(t, e, n, r);
            },
            Math.min(
              1e3 *
                Math.max(
                  (function (t) {
                    for (
                      var e = 1, n = 0, r = Math.abs(t);
                      t >= c[n] && n < c.length;
                      n++
                    )
                      (t /= c[n]), (e *= c[n]);
                    return (r = (r %= e) ? e - r : e), Math.ceil(r);
                  })(s),
                  i || 1
                ),
              2147483647
            )
          );
          (m[a] = 0),
            (function (t, e) {
              t.setAttribute(h, e);
            })(t, a);
        }
        function b(t) {
          t ? v(p(t)) : Object.keys(m).forEach(v);
        }
        function w(t, e, n) {
          var r = t.length ? t : [t];
          return (
            r.forEach(function (t) {
              g(
                t,
                (function (t) {
                  return t.getAttribute("datetime");
                })(t),
                a(e),
                n || {}
              );
            }),
            r
          );
        }
        s("en_US", function (t, e) {
          if (0 === e) return ["just now", "right now"];
          var n = r[Math.floor(e / 2)];
          return (
            t > 1 && (n += "s"), [t + " " + n + " ago", "in " + t + " " + n]
          );
        }),
          s("zh_CN", function (t, e) {
            if (0 === e) return ["刚刚", "片刻后"];
            var n = o[~~(e / 2)];
            return [t + " " + n + "前", t + " " + n + "后"];
          });
      },
      34: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initLogoutButtons =
            e.initSignupButtons =
            e.initLaunchCheckoutButtons =
            e.initRemoveSelectedPriceButtons =
            e.initPlanRemoveButtons =
            e.initUpdatePlanButtons =
            e.initForgotPasswordModalButtons =
            e.initProfileModalButtons =
            e.initSignupModalButtons =
            e.initLoginModalButtons =
            e.initOpenCustomerPortalButtons =
            e.initLoginRedirectButtons =
            e.initReturnToCheckoutButtons =
            e.resendVerificationEmail =
            e.initProfileImageButtons =
              void 0);
        var a = n(7723),
          c = s(n(2286)),
          u = s(n(123)),
          l = n(6797);
        (e.initProfileImageButtons = function () {
          Array.from(
            document.querySelectorAll(a.buttons.updateProfileImage)
          ).map(function (t) {
            var e, n;
            (e = t),
              (n = (0, l.createFileInputElement)()),
              e.parentNode.insertBefore(n, e.nextSibling),
              e.addEventListener("click", function (t) {
                t.preventDefault(), t.stopPropagation(), n.click();
              }),
              n.addEventListener("change", function (t) {
                return o(void 0, void 0, void 0, function () {
                  var e, n, r, o, s, a, d;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if (
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (e = t.target.files[0]),
                          (n = e.size),
                          !1 === e.type.includes("image"))
                        )
                          return [
                            2,
                            c.default.methods._showMessage(
                              "File is not an image.",
                              !0
                            ),
                          ];
                        if (n > 4e6)
                          return [
                            2,
                            c.default.methods._showMessage(
                              "Image must be less than 2MB.",
                              !0
                            ),
                          ];
                        i.label = 1;
                      case 1:
                        return (
                          i.trys.push([1, 3, , 4]),
                          (0, l.showLoader)(),
                          [
                            4,
                            (0, c.default.methods.updateMemberProfileImage)({
                              profileImage: e,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (r = i.sent()),
                          (o = r.data),
                          (s = r._internalUseOnly.message),
                          u.default.mergeMember({
                            profileImage: o.profileImage,
                          }),
                          (a = u.default.getCachedMember()),
                          (0, l.personalizeText)(a),
                          s && c.default.methods._showMessage(s, !1),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (d = i.sent()),
                          console.log(d),
                          d.message &&
                            c.default.methods._showMessage(d.message, !0),
                          [3, 4]
                        );
                      case 4:
                        return (0, l.hideLoader)(), [2];
                    }
                  });
                });
              });
          });
        }),
          (e.resendVerificationEmail = function () {
            var t = Array.from(
              document.querySelectorAll(a.buttons.sendVerificationEmail)
            );
            u.default.getCachedMember() &&
              t.map(function (t) {
                t.addEventListener("click", function (t) {
                  return o(void 0, void 0, void 0, function () {
                    var e, n;
                    return i(this, function (r) {
                      switch (r.label) {
                        case 0:
                          t.preventDefault(),
                            t.stopPropagation(),
                            (0, l.showLoader)(),
                            (r.label = 1);
                        case 1:
                          return (
                            r.trys.push([1, 3, 4, 5]),
                            [
                              4,
                              (0,
                              c.default.methods.sendMemberVerificationEmail)(),
                            ]
                          );
                        case 2:
                          return (
                            (e = r.sent()._internalUseOnly.message),
                            c.default.methods._showMessage(e, !1),
                            [3, 5]
                          );
                        case 3:
                          return (n = r.sent()), console.log(n), [3, 5];
                        case 4:
                          return (0, l.hideLoader)(), [7];
                        case 5:
                          return [2];
                      }
                    });
                  });
                });
              });
          }),
          (e.initReturnToCheckoutButtons = function () {
            Array.from(
              document.querySelectorAll(a.buttons.returnToCheckout)
            ).map(function (t) {
              t.addEventListener("click", function (t) {
                return o(void 0, void 0, void 0, function () {
                  var e, n;
                  return i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        t.preventDefault(),
                          t.stopPropagation(),
                          (0, l.showLoader)(),
                          (e = c.default.selectedPrice),
                          (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [4, (0, l.launchCheckout)({ priceId: e })]
                        );
                      case 2:
                        return r.sent(), [3, 4];
                      case 3:
                        return (
                          (n = r.sent()),
                          c.default.methods._hideLoader(),
                          c.default.methods._showMessage(n, !0),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              });
            });
          }),
          (e.initLoginRedirectButtons = function () {
            var t = Array.from(
              document.querySelectorAll(a.buttons.loginRedirect)
            );
            u.default.getCachedMember() &&
              t.map(function (t) {
                t.addEventListener("click", function (t) {
                  return o(void 0, void 0, void 0, function () {
                    var e;
                    return i(this, function (n) {
                      return (
                        t.preventDefault(),
                        t.stopPropagation(),
                        (e = u.default.getCachedMember().loginRedirect),
                        (window.location.href = e),
                        [2]
                      );
                    });
                  });
                });
              });
          }),
          (e.initOpenCustomerPortalButtons = function () {
            Array.from(document.querySelectorAll(a.buttons.customerPortal)).map(
              function (t) {
                t.addEventListener("click", function (t) {
                  return o(void 0, void 0, void 0, function () {
                    var e;
                    return i(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            t.preventDefault(),
                            t.stopPropagation(),
                            (0, l.showLoader)(),
                            (e = window._memberstackPortalConfig),
                            [
                              4,
                              c.default.methods.launchStripeCustomerPortal({
                                configuration: e || void 0,
                              }),
                            ]
                          );
                        case 1:
                          return n.sent(), [2];
                      }
                    });
                  });
                });
              }
            );
          }),
          (e.initLoginModalButtons = function () {
            Array.from(document.querySelectorAll(a.buttons.login)).map(
              function (t) {
                t.addEventListener("click", function () {
                  return o(void 0, void 0, void 0, function () {
                    var t, e, n, r, o, s, a;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = (e = c.default.methods).openModal),
                            (r = ["LOGIN"]),
                            (a = {}),
                            [4, c.default.getApp()]
                          );
                        case 1:
                          return [
                            4,
                            n.apply(e, r.concat([((a.app = i.sent()), a)])),
                          ];
                        case 2:
                          if (
                            "LOGIN" !== (t = i.sent()).type &&
                            "SIGNUP" !== t.type
                          )
                            return [3, 8];
                          if (
                            (u.default.setMember(t.data.member),
                            c.default.mergeApp({
                              contentGroups: t.data.contentGroups,
                            }),
                            (o = c.default.selectedPrice),
                            "SIGNUP" !== t.type || !o)
                          )
                            return [3, 7];
                          i.label = 3;
                        case 3:
                          return (
                            i.trys.push([3, 5, , 6]),
                            (0, l.showLoader)(),
                            [4, (0, l.launchCheckout)({ priceId: o })]
                          );
                        case 4:
                          return i.sent(), [3, 6];
                        case 5:
                          return (
                            (s = i.sent()),
                            c.default.methods._hideLoader(),
                            c.default.methods._showMessage(s, !0),
                            [3, 6]
                          );
                        case 6:
                          return [2];
                        case 7:
                          (0, l.handleRedirect)(
                            t.data.redirect || t.data.member.loginRedirect,
                            null
                          ),
                            c.default.methods.hideModal(),
                            (i.label = 8);
                        case 8:
                          return [2];
                      }
                    });
                  });
                });
              }
            );
          }),
          (e.initSignupModalButtons = function () {
            Array.from(document.querySelectorAll(a.buttons.signup)).map(
              function (t) {
                t.addEventListener("click", function () {
                  return o(void 0, void 0, void 0, function () {
                    var e, n, o, s, a, d, f, h;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return u.default.getCachedMember() &&
                            c.default.selectedPrice
                            ? [
                                4,
                                (0, l.launchCheckout)({
                                  priceId: c.default.selectedPrice,
                                }),
                              ]
                            : [3, 2];
                        case 1:
                          return [2, i.sent()];
                        case 2:
                          return (
                            (e =
                              c.default.selectedPlan ||
                              t.getAttribute("data-ms-plan:add")),
                            (s = (o = c.default.methods).openModal),
                            (a = ["SIGNUP"]),
                            (h = {}),
                            [4, c.default.getApp()]
                          );
                        case 3:
                          return [
                            4,
                            s.apply(
                              o,
                              a.concat([
                                r.apply(void 0, [
                                  ((h.app = i.sent()), h),
                                  e && { signup: { plans: [e] } },
                                ]),
                              ])
                            ),
                          ];
                        case 4:
                          return (
                            ("LOGIN" !== (n = i.sent()).type &&
                              "SIGNUP" !== n.type) ||
                              (u.default.setMember(n.data.member),
                              c.default.mergeApp({
                                contentGroups: n.data.contentGroups,
                              })),
                            "LOGIN" !== n.type
                              ? [3, 5]
                              : ((0, l.handleRedirect)(n.data.redirect, null),
                                [3, 11])
                          );
                        case 5:
                          if ("SIGNUP" !== n.type) return [3, 11];
                          if (!(d = c.default.selectedPrice)) return [3, 10];
                          i.label = 6;
                        case 6:
                          return (
                            i.trys.push([6, 8, , 9]),
                            (0, l.showLoader)(),
                            [4, (0, l.launchCheckout)({ priceId: d })]
                          );
                        case 7:
                          return i.sent(), [3, 9];
                        case 8:
                          return (
                            (f = i.sent()),
                            c.default.methods._hideLoader(),
                            c.default.methods._showMessage(f, !0),
                            [3, 9]
                          );
                        case 9:
                          return [3, 11];
                        case 10:
                          (0, l.handleRedirect)(n.data.redirect, null),
                            (i.label = 11);
                        case 11:
                          return c.default.methods.hideModal(), [2];
                      }
                    });
                  });
                });
              }
            );
          }),
          (e.initProfileModalButtons = function () {
            Array.from(document.querySelectorAll(a.buttons.profile)).map(
              function (t) {
                t.addEventListener("click", function () {
                  return o(void 0, void 0, void 0, function () {
                    var t, e, n, r, o;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = (e = c.default.methods).openModal),
                            (r = ["PROFILE"]),
                            (o = {}),
                            [4, c.default.getApp()]
                          );
                        case 1:
                          return [
                            4,
                            n.apply(e, r.concat([((o.app = i.sent()), o)])),
                          ];
                        case 2:
                          if ("LOGOUT" === (t = i.sent()).type) {
                            if (
                              (u.default.purgeCache(),
                              t.data.redirect &&
                                window.location.pathname !== t.data.redirect)
                            )
                              return [
                                2,
                                (window.location.href = t.data.redirect),
                              ];
                            setTimeout(function () {
                              window.location.reload();
                            }, 2e3);
                          }
                          return [2];
                      }
                    });
                  });
                });
              }
            );
          }),
          (e.initForgotPasswordModalButtons = function () {
            Array.from(document.querySelectorAll(a.buttons.forgotPassword)).map(
              function (t) {
                t.addEventListener("click", function () {
                  return o(void 0, void 0, void 0, function () {
                    var t, e, n, r;
                    return i(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (e = (t = c.default.methods).openModal),
                            (n = ["FORGOT_PASSWORD"]),
                            (r = {}),
                            [4, c.default.getApp()]
                          );
                        case 1:
                          return (
                            e.apply(t, n.concat([((r.app = o.sent()), r)])), [2]
                          );
                      }
                    });
                  });
                });
              }
            );
          }),
          (e.initUpdatePlanButtons = function () {
            Array.from(
              document.querySelectorAll("[data-ms-price\\:update]")
            ).map(function (t) {
              "FORM" !== t.tagName &&
                t.addEventListener("click", function (e) {
                  return o(void 0, void 0, void 0, function () {
                    var n, r, o, s, a, d;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = t
                              .getAttribute("data-ms-price:update")
                              .split(",")
                              .filter(Boolean)),
                            (r = n[0]),
                            (o = t.getAttribute("data-ms-coupon")),
                            c.default.setCouponViaBtn(o),
                            (s = u.default.getCachedMember())
                              ? (e.preventDefault(),
                                e.stopPropagation(),
                                (a = s.planConnections.some(function (t) {
                                  return (
                                    "SUBSCRIPTION" === t.type &&
                                    "CANCELED" !== t.status
                                  );
                                })),
                                (0, l.showLoader)(),
                                a
                                  ? [3, 2]
                                  : [4, (0, l.launchCheckout)({ priceId: r })])
                              : [2, c.default.setPrice(r)]
                          );
                        case 1:
                          return [2, i.sent()];
                        case 2:
                          return (
                            i.trys.push([2, 4, , 5]),
                            [
                              4,
                              c.default.methods.launchStripeCustomerPortal({
                                priceIds: n,
                              }),
                            ]
                          );
                        case 3:
                          return i.sent(), [3, 5];
                        case 4:
                          return (
                            (d = i.sent()),
                            (0, l.hideLoader)(),
                            c.default.methods._showMessage(d, !0),
                            [3, 5]
                          );
                        case 5:
                          return [2];
                      }
                    });
                  });
                });
            });
          }),
          (e.initPlanRemoveButtons = function () {
            Array.from(
              document.querySelectorAll("[data-ms-plan\\:remove]")
            ).map(function (t) {
              t.addEventListener("click", function (e) {
                return o(void 0, void 0, void 0, function () {
                  var n, r, o;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        e.preventDefault(),
                          e.stopPropagation(),
                          (0, l.showLoader)(),
                          (n = t.getAttribute("data-ms-plan:remove")),
                          (i.label = 1);
                      case 1:
                        return (
                          i.trys.push([1, 3, , 4]),
                          [4, (0, c.default.methods.removePlan)({ planId: n })]
                        );
                      case 2:
                        return (
                          (r = i.sent()._internalUseOnly.message),
                          (0, l.hideLoader)(),
                          c.default.methods._showMessage(r, !1),
                          setTimeout(function () {
                            window.location.reload();
                          }, 2e3),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (o = i.sent()),
                          (0, l.hideLoader)(),
                          c.default.methods._showMessage(o.message, !0),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              });
            });
          }),
          (e.initRemoveSelectedPriceButtons = function () {
            return o(void 0, void 0, void 0, function () {
              return i(this, function (t) {
                return (
                  Array.from(
                    document.querySelectorAll("[data-ms-price\\:remove='all']")
                  ).map(function (t) {
                    t.addEventListener("click", function (t) {
                      c.default.clearPrice();
                    });
                  }),
                  [2]
                );
              });
            });
          }),
          (e.initLaunchCheckoutButtons = function () {
            Array.from(document.querySelectorAll("[data-ms-price\\:add]")).map(
              function (t) {
                "FORM" !== t.tagName &&
                  t.addEventListener("click", function (e) {
                    return o(void 0, void 0, void 0, function () {
                      var n, r;
                      return i(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return (
                              (n = t.getAttribute("data-ms-price:add")),
                              (r = t.getAttribute("data-ms-coupon")),
                              c.default.setCouponViaBtn(r),
                              u.default.getCachedMember()
                                ? (e.preventDefault(),
                                  e.stopPropagation(),
                                  (0, l.showLoader)(),
                                  [4, (0, l.launchCheckout)({ priceId: n })])
                                : [2, c.default.setPrice(n)]
                            );
                          case 1:
                            return o.sent(), (0, l.hideLoader)(), [2];
                        }
                      });
                    });
                  });
              }
            );
          }),
          (e.initSignupButtons = function () {
            Array.from(document.querySelectorAll("[data-ms-plan\\:add]")).map(
              function (t) {
                t.addEventListener("click", function (e) {
                  return o(void 0, void 0, void 0, function () {
                    var n, o, s, a, d, f;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (
                            ((n = t.getAttribute("data-ms-plan:add")),
                            (o = t.getAttribute("data-ms-success-message")),
                            !u.default.getCachedMember())
                          )
                            return [2, c.default.setPlan(n)];
                          e.preventDefault(),
                            e.stopPropagation(),
                            (0, l.showLoader)(),
                            (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]),
                            [4, (0, c.default.methods.addPlan)({ planId: n })]
                          );
                        case 2:
                          return (
                            (s = i.sent()),
                            (a = s.data),
                            (d = s._internalUseOnly.message),
                            c.default.mergeApp(r({}, a.app)),
                            u.default.mergeMember(r({}, a.member)),
                            (0, l.hideLoader)(),
                            a.redirect &&
                            window.location.pathname !== a.redirect
                              ? [2, (window.location.href = a.redirect)]
                              : (c.default.methods._showMessage(o || d, !1),
                                setTimeout(function () {
                                  window.location.reload();
                                }, 2e3),
                                [3, 4])
                          );
                        case 3:
                          return (
                            (f = i.sent()),
                            (0, l.hideLoader)(),
                            c.default.methods._showMessage(f.message, !0),
                            [3, 4]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                });
              }
            );
          }),
          (e.initLogoutButtons = function () {
            document.querySelectorAll(a.buttons.logout).forEach(function (t) {
              t.addEventListener("click", function (t) {
                return o(void 0, void 0, void 0, function () {
                  var e, n, r;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          (0, l.showLoader)(),
                          [4, (0, c.default.methods.logout)()]
                        );
                      case 1:
                        return (
                          (e = o.sent()),
                          (n = e.data),
                          (r = e._internalUseOnly.message),
                          u.default.purgeCache(),
                          [4, c.default.refetchAppMember()]
                        );
                      case 2:
                        return (
                          o.sent(),
                          (0, l.hideLoader)(),
                          n.redirect && window.location.pathname !== n.redirect
                            ? [2, (window.location.href = n.redirect)]
                            : (c.default.methods._showMessage(r, !1),
                              setTimeout(function () {
                                window.location.reload();
                              }, 2e3),
                              [2])
                        );
                    }
                  });
                });
              });
            });
          });
      },
      1801: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ChannelSection = void 0);
        var a = s(n(2286)),
          c = s(n(123)),
          u = n(5315),
          l = n(2574),
          d = (function () {
            function t(t) {
              (this.totalPostCount = 0),
                (this.posts = []),
                (this.typingUsers = []),
                (this.totalPostsLoaded = 0),
                (this.canPublishIsTypingEvent = !0),
                (this.channelElement = t),
                (this.channelKey =
                  t.getAttribute("data-ms-channel") ||
                  window.location.pathname),
                (this.sortOrder =
                  t.getAttribute("data-ms-channel-sort") || "oldest"),
                (this.postContainer = t.querySelector(
                  "[data-ms-post='container']"
                )),
                (this.uiTemplate = this.postContainer.querySelector(
                  "[data-ms-post='item']"
                )),
                this.uiTemplate.remove(),
                (this.postLoader = this.channelElement.querySelector(
                  "[data-ms-post='loading']"
                )),
                (this.postLoader.style.display = "none"),
                (this.channelLoader = this.channelElement.querySelector(
                  "[data-ms-channel-content='loading']"
                )),
                (this.channelLoader.style.display = "none"),
                (this.isTypingSection = this.channelElement.querySelector(
                  "[data-ms-post-content='is-typing-section']"
                )),
                this.isTypingSection &&
                  (this.isTypingSection.style.display = "none"),
                this.toggleDisplay("[data-ms-post='loadMore']", "none"),
                (this.member = c.default.getCachedMember()),
                this.member && (this.activeMemberId = this.member.id),
                this.initializePosts(),
                this.initListeners(),
                this.getChannelInfo();
            }
            return (
              (t.prototype.updateTypingDisplay = function () {
                this.isTypingSection &&
                  (this.typingUsers.length > 0
                    ? ((this.isTypingSection.style.display = "block"),
                      (this.isTypingSection.querySelector(
                        "[data-ms-post='is-typing']"
                      ).innerHTML = this.getTypingMessage()))
                    : (this.isTypingSection.style.display = "none"));
              }),
              (t.prototype.getTypingMessage = function () {
                return "A user is typing...";
              }),
              (t.prototype.getChannelInfo = function () {
                return o(this, void 0, void 0, function () {
                  var t, e;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          a.default.methods.getChannelInfo({
                            channelKey: this.channelKey,
                          }),
                        ];
                      case 1:
                        return (t = n.sent().data)
                          ? ((e = t.internalOrder),
                            (this.realtimeKey = "chl-".concat(e)),
                            this.activeMemberId &&
                              (this.realtime = new l.Realtime(this)),
                            [2])
                          : [2];
                    }
                  });
                });
              }),
              (t.prototype.handlePostLoaderVisibility = function (t) {
                this.postLoader.style.display = t ? "block" : "none";
              }),
              (t.prototype.handleChannelLoaderVisibility = function (t) {
                this.channelLoader.style.display = t ? "block" : "none";
              }),
              (t.prototype.initializePosts = function () {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.fetchPosts()];
                      case 1:
                        return (
                          (t = e.sent().data),
                          this.displayPosts(t),
                          this.handleHasPostsVisibility(),
                          this.setTotalPostCount(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.handleHasPostsVisibility = function () {
                this.posts.length
                  ? (this.toggleDisplay(
                      "[data-ms-channel-content='!has-posts']",
                      "none"
                    ),
                    this.toggleDisplay(
                      "[data-ms-channel-content='has-posts']",
                      "block"
                    ))
                  : (this.toggleDisplay(
                      "[data-ms-channel-content='has-posts']",
                      "block"
                    ),
                    this.toggleDisplay(
                      "[data-ms-channel-content='has-posts']",
                      "none"
                    ));
              }),
              (t.prototype.toggleDisplay = function (t, e) {
                var n = this.channelElement.querySelector(t);
                n && (n.style.display = e);
              }),
              (t.prototype.handleLoadMoreVisibility = function () {
                this.totalPostCount > this.totalPostsLoaded
                  ? this.toggleDisplay("[data-ms-post='loadMore']", "block")
                  : this.toggleDisplay("[data-ms-post='loadMore']", "none");
              }),
              (t.prototype.initListeners = function () {
                return o(this, void 0, void 0, function () {
                  var t,
                    e = this;
                  return i(this, function (n) {
                    return (
                      this.channelElement
                        .querySelector("[data-ms-post='loadMore']")
                        .addEventListener("click", function () {
                          return o(e, void 0, void 0, function () {
                            return i(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [4, this.loadMorePosts()];
                                case 1:
                                  return t.sent(), [2];
                              }
                            });
                          });
                        }),
                      this.channelElement
                        .querySelector("[data-ms-form='post']")
                        .addEventListener("submit", function (t) {
                          return o(e, void 0, void 0, function () {
                            return i(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    t.preventDefault(),
                                    t.stopPropagation(),
                                    [4, this.createAndDisplayPost(t.target)]
                                  );
                                case 1:
                                  return e.sent(), [2];
                              }
                            });
                          });
                        }),
                      (t = this.channelElement.querySelector(
                        "[data-ms-form='post']"
                      ))
                        .querySelector("[data-ms-post='content']")
                        .addEventListener("keydown", function (n) {
                          return o(e, void 0, void 0, function () {
                            var e;
                            return i(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return "Enter" !== (e = n).key || e.shiftKey
                                    ? [3, 2]
                                    : (n.preventDefault(),
                                      n.stopPropagation(),
                                      [4, this.createAndDisplayPost(t)]);
                                case 1:
                                  return r.sent(), [3, 3];
                                case 2:
                                  this.handleIsTypingEvent(), (r.label = 3);
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        }),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.handleIsTypingEvent = function () {
                var t = this;
                this.activeMemberId &&
                  this.canPublishIsTypingEvent &&
                  this.realtimeKey &&
                  (a.default.methods.postIsTyping({
                    channelKey: this.realtimeKey,
                  }),
                  (this.canPublishIsTypingEvent = !1),
                  setTimeout(function () {
                    t.canPublishIsTypingEvent = !0;
                  }, 3e3));
              }),
              (t.prototype.loadMorePosts = function () {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.fetchPosts()];
                      case 1:
                        return (t = e.sent().data), this.displayPosts(t), [2];
                    }
                  });
                });
              }),
              (t.prototype.addPost = function (t) {
                var e = new u.PostItem(this, t);
                this.posts.push(e);
                var n = e.postElement;
                (this.totalPostCount += 1),
                  this.setTotalPostCount(),
                  this.handleHasPostsVisibility(),
                  "newest" === this.sortOrder
                    ? this.postContainer.insertBefore(
                        n,
                        this.postContainer.firstChild
                      )
                    : this.postContainer.appendChild(n);
              }),
              (t.prototype.createAndDisplayPost = function (t) {
                return o(this, void 0, void 0, function () {
                  var e, n, r;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (e = t.querySelector("[data-ms-post='content']"))
                          ? (n = e.value)
                            ? (this.handlePostLoaderVisibility(!0),
                              [
                                4,
                                a.default.methods.createPost({
                                  channelKey: this.channelKey,
                                  content: n,
                                }),
                              ])
                            : [2]
                          : [3, 2];
                      case 1:
                        (r = o.sent().data),
                          this.handlePostLoaderVisibility(!1),
                          (e.value = ""),
                          this.addPost(r),
                          (o.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.fetchPosts = function () {
                var t;
                return o(this, void 0, void 0, function () {
                  var e, n;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          this.handleChannelLoaderVisibility(!0),
                          (e =
                            this.postContainer.getAttribute(
                              "data-ms-post-load"
                            ) || 50),
                          [
                            4,
                            a.default.methods.getPosts(
                              r(
                                {
                                  channelKey: this.channelKey,
                                  order: this.sortOrder,
                                  limit: Number(e),
                                },
                                this.lastPostId && { after: this.lastPostId }
                              )
                            ),
                          ]
                        );
                      case 1:
                        return (
                          (n = o.sent().data),
                          this.handleChannelLoaderVisibility(!1),
                          (this.lastPostId =
                            null === (t = n.posts[n.posts.length - 1]) ||
                            void 0 === t
                              ? void 0
                              : t.internalOrder),
                          (this.totalPostCount = n.totalCount),
                          (this.totalPostsLoaded += n.posts.length),
                          this.handleLoadMoreVisibility(),
                          [2, { data: n }]
                        );
                    }
                  });
                });
              }),
              (t.prototype.displayPosts = function (t) {
                var e = this;
                t.posts.forEach(function (t) {
                  var n = new u.PostItem(e, t);
                  e.posts.push(n);
                  var r = n.postElement;
                  e.postContainer.appendChild(r);
                });
              }),
              (t.prototype.setTotalPostCount = function () {
                var t = this.channelElement.querySelector(
                  "[data-ms-post='count']"
                );
                t && (t.innerHTML = this.totalPostCount.toString());
              }),
              t
            );
          })();
        e.ChannelSection = d;
      },
      5315: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.PostItem = void 0);
        var s = i(n(2286)),
          a = n(2246),
          c = n(4771),
          u = n(4076),
          l = n(1646),
          d = (function () {
            function t(t, e) {
              (this.replyCount = 0),
                (this.inEditMode = !1),
                (this.deleteSectionVisible = !1),
                (this.Channel = t),
                (this.post = e),
                (this.replyCount = e._count.Threads),
                (this.postElement = this.createPostElement()),
                (this.reaction = new l.ReactionItem(
                  e,
                  this.postElement,
                  t,
                  "post"
                )),
                this.handleFunctionVisibility(),
                this.handleHasThreadsVisibility(),
                this.initListeners(),
                (this.boundHandleHideDelete = this.handleHideDelete.bind(this)),
                this.updateCreatedAtEveryMinute();
            }
            return (
              (t.prototype.createPostElement = function () {
                var t = this,
                  e = this.Channel.uiTemplate.cloneNode(!0);
                f(e, this.post);
                var n = e.querySelector("[data-ms-thread='section']");
                return (
                  (this.threadSection = new u.ThreadSection(
                    n,
                    this.post.id,
                    this
                  )),
                  e
                    .querySelectorAll("[data-ms-post='showThreads']")
                    .forEach(function (e) {
                      e.addEventListener("click", function () {
                        return r(t, void 0, void 0, function () {
                          return o(this, function (t) {
                            return (
                              this.threadSection.isOpen
                                ? this.threadSection.hide()
                                : this.threadSection.show(),
                              [2]
                            );
                          });
                        });
                      });
                    }),
                  (this.deleteSection = e.querySelector(
                    "[data-ms-post-delete='section']"
                  )),
                  e
                );
              }),
              (t.prototype.initListeners = function () {
                this.postElement
                  .querySelector("[data-ms-post='edit']")
                  .addEventListener("click", this.handleEditClick.bind(this)),
                  this.postElement
                    .querySelector("[data-ms-post='delete']")
                    .addEventListener(
                      "click",
                      this.handleDeleteClick.bind(this)
                    ),
                  this.postElement
                    .querySelector("[data-ms-post-delete='show']")
                    .addEventListener(
                      "click",
                      this.handleShowDelete.bind(this)
                    ),
                  this.editSection
                    .querySelector("[data-ms-post-edit='form']")
                    .addEventListener(
                      "submit",
                      this.handleEditFormSubmit.bind(this)
                    ),
                  this.editSection
                    .querySelector("[data-ms-post-edit='cancel']")
                    .addEventListener(
                      "click",
                      this.handleEditCancel.bind(this)
                    );
              }),
              (t.prototype.handleShowDelete = function (t) {
                document
                  .querySelectorAll("[data-ms-post-delete='section']")
                  .forEach(function (t) {
                    t.style.display = "none";
                  }),
                  (this.deleteSectionVisible = !this.deleteSectionVisible),
                  (this.deleteSection.style.display = this.deleteSectionVisible
                    ? "block"
                    : "none"),
                  this.deleteSectionVisible &&
                    (t && t.stopPropagation(),
                    document.addEventListener(
                      "click",
                      this.boundHandleHideDelete
                    ));
              }),
              (t.prototype.handleHideDelete = function () {
                (this.deleteSectionVisible = !1),
                  (this.deleteSection.style.display = "none"),
                  document.removeEventListener(
                    "click",
                    this.boundHandleHideDelete
                  );
              }),
              (t.prototype.handleEditClick = function () {
                if (!this.inEditMode) {
                  var t = this.postElement.querySelector(
                    "[data-ms-post='content']"
                  );
                  (t.style.display = "none"),
                    (this.editSection.querySelector(
                      "[data-ms-post-edit='content']"
                    ).value = t.innerHTML),
                    (this.inEditMode = !0),
                    (this.editSection.style.display = "block");
                }
              }),
              (t.prototype.handleEditFormSubmit = function (t) {
                return r(this, void 0, void 0, function () {
                  var e, n;
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          (e = t.target.querySelector(
                            "[data-ms-post-edit='content']"
                          )),
                          this.Channel.handlePostLoaderVisibility(!0),
                          [
                            4,
                            s.default.methods.updatePost({
                              postId: this.post.id,
                              content: e.value,
                            }),
                          ]
                        );
                      case 1:
                        return (
                          (n = r.sent().data),
                          this.Channel.handlePostLoaderVisibility(!1),
                          (this.postElement.querySelector(
                            "[data-ms-post='content']"
                          ).innerHTML = n.content),
                          this.handleEditCancel(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.handleEditCancel = function () {
                (this.inEditMode = !1),
                  (this.editSection.style.display = "none"),
                  (this.postElement.querySelector(
                    "[data-ms-post='content']"
                  ).style.display = "block");
              }),
              (t.prototype.updateCreatedAtEveryMinute = function () {
                var t = this;
                this.updateDateIntervalId = setInterval(function () {
                  (0,
                  a.setInnerHTML)(t.postElement, "[data-ms-post='date']", (0, c.format)(t.post.createdAt, "en_US"));
                }, 6e4);
              }),
              (t.prototype.remove = function () {
                this.postElement.remove(),
                  (this.Channel.totalPostCount -= 1),
                  this.Channel.setTotalPostCount(),
                  clearInterval(this.updateDateIntervalId);
              }),
              (t.prototype.decrementReplyCount = function () {
                (this.replyCount -= 1),
                  this.updateReplyCount(),
                  this.handleHasThreadsVisibility();
              }),
              (t.prototype.handleDeleteClick = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          this.Channel.handlePostLoaderVisibility(!0),
                          [
                            4,
                            s.default.methods.deletePost({
                              postId: this.post.id,
                            }),
                          ]
                        );
                      case 1:
                        return (
                          t.sent(),
                          this.remove(),
                          this.Channel.handlePostLoaderVisibility(!1),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.handleFunctionVisibility = function () {
                var t = this.memberHasPermissionToEditPost(),
                  e = this.postElement.querySelector("[data-ms-post='edit']"),
                  n = this.postElement.querySelector(
                    "[data-ms-post-delete='show']"
                  );
                (this.editSection = this.postElement.querySelector(
                  "[data-ms-post-edit='section']"
                )),
                  (this.editSection.style.display = "none"),
                  (this.postElement.querySelector(
                    "[data-ms-post='isModerator']"
                  ).style.display = this.post.member.isModerator
                    ? "block"
                    : "none"),
                  (this.postElement.querySelector(
                    "[data-ms-post-delete='section']"
                  ).style.display = "none"),
                  t
                    ? ((e.style.display = "block"), (n.style.display = "block"))
                    : ((e.style.display = "none"), (n.style.display = "none"));
              }),
              (t.prototype.handleVote = function (t) {
                this.reaction && this.reaction.handleVote(t.vote, t.memberId);
              }),
              (t.prototype.handleHasThreadsVisibility = function () {
                var t = this,
                  e = this.postElement.querySelectorAll(
                    "[data-ms-post-content='has-threads']"
                  ),
                  n = this.postElement.querySelectorAll(
                    "[data-ms-post-content='!has-threads']"
                  );
                e.forEach(function (e) {
                  t.replyCount > 0
                    ? (e.style.display = "block")
                    : (e.style.display = "none");
                }),
                  n.forEach(function (e) {
                    t.replyCount > 0
                      ? (e.style.display = "none")
                      : (e.style.display = "block");
                  });
              }),
              (t.prototype.memberHasPermissionToEditPost = function () {
                var t,
                  e,
                  n = Boolean(
                    null ===
                      (e =
                        null === (t = this.Channel.member) || void 0 === t
                          ? void 0
                          : t._comments) || void 0 === e
                      ? void 0
                      : e.isModerator
                  );
                return this.post.member.id === this.Channel.activeMemberId || n;
              }),
              (t.prototype.incrementReplyCount = function () {
                (this.replyCount += 1),
                  this.updateReplyCount(),
                  this.handleHasThreadsVisibility();
              }),
              (t.prototype.updateReplyCount = function () {
                this.postElement.querySelector(
                  "[data-ms-post='threadCount']"
                ) &&
                  (0, a.setInnerHTML)(
                    this.postElement,
                    "[data-ms-post='threadCount']",
                    this.replyCount.toString()
                  );
              }),
              t
            );
          })();
        e.PostItem = d;
        var f = function (t, e) {
          var n = e.member,
            r = e.content,
            o = e._count,
            i = e.createdAt;
          (0, a.setInnerHTML)(t, "[data-ms-post='content']", r),
            (0, a.setInnerHTML)(t, "[data-ms-post='likeCount']", o.likedBy),
            (0, a.setInnerHTML)(
              t,
              "[data-ms-post='dislikeCount']",
              o.dislikedBy
            ),
            (0, a.setInnerHTML)(t, "[data-ms-post='threadCount']", o.Threads),
            (0, a.setInnerHTML)(
              t,
              "[data-ms-post='date']",
              (0, c.format)(i, "en_US")
            ),
            t.setAttribute("data-ms-post-id", e.id);
          var s = n.customFields || {};
          t.querySelectorAll("[data-ms-post-creator]").forEach(function (t) {
            var e = t.getAttribute("data-ms-post-creator");
            s[e] && (t.innerHTML = s[e]);
          }),
            n.profileImage &&
              t
                .querySelector("[data-ms-post='ownerProfileImage']")
                .setAttribute("src", n.profileImage),
            t.removeAttribute("data-ms-post");
        };
      },
      1646: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ReactionItem = void 0);
        var s = i(n(2286)),
          a = n(2246),
          c = (function () {
            function t(t, e, n, r) {
              (this.postOrThread = t),
                (this.postElement = e),
                (this.Channel = n),
                (this.type = r),
                this.initReactionListeners(),
                this.handleReactionVisibility();
            }
            return (
              (t.prototype.initReactionListeners = function () {
                this.postElement
                  .querySelector("[data-ms-".concat(this.type, "='like']"))
                  .addEventListener("click", this.handleLikeClick.bind(this)),
                  this.postElement
                    .querySelector("[data-ms-".concat(this.type, "='dislike']"))
                    .addEventListener(
                      "click",
                      this.handleDislikeClick.bind(this)
                    );
              }),
              (t.prototype.handleLikeClick = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.handleReactionClick("like")];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (t.prototype.handleDislikeClick = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.handleReactionClick("dislike")];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (t.prototype.handleReactionClick = function (t) {
                return r(this, void 0, void 0, function () {
                  var e, n, r, i;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (e = this.memberLikedPost()),
                          (n = this.memberDislikedPost()),
                          (r = "NONE"),
                          (i = this.Channel.activeMemberId),
                          "like" === t
                            ? e
                              ? this.removeReactionFromPost("likedBy", i)
                              : (this.addReactionToPost("likedBy", i),
                                n &&
                                  this.removeReactionFromPost("dislikedBy", i),
                                (r = "UP"))
                            : "dislike" === t &&
                              (n
                                ? this.removeReactionFromPost("dislikedBy", i)
                                : (this.addReactionToPost("dislikedBy", i),
                                  e &&
                                    this.removeReactionFromPost("likedBy", i),
                                  (r = "DOWN"))),
                          this.updatePostReactionCounts(),
                          this.handleReactionVisibility(),
                          [4, this.sendVote(r)]
                        );
                      case 1:
                        return o.sent(), [2];
                    }
                  });
                });
              }),
              (t.prototype.addReactionToPost = function (t, e) {
                this.postOrThread[t].includes(e) ||
                  (this.postOrThread[t].push(e),
                  (this.postOrThread._count[t] = this.postOrThread[t].length));
              }),
              (t.prototype.removeReactionFromPost = function (t, e) {
                var n = this.postOrThread[t].indexOf(e);
                n > -1 &&
                  (this.postOrThread[t].splice(n, 1),
                  (this.postOrThread._count[t] = this.postOrThread[t].length));
              }),
              (t.prototype.handleVote = function (t, e) {
                switch (t) {
                  case "UP":
                    this.handleUpVote(e);
                    break;
                  case "DOWN":
                    this.handleDownVote(e);
                    break;
                  case "NONE":
                    this.handleNeutralVote(e);
                }
                this.updatePostReactionCounts();
              }),
              (t.prototype.handleUpVote = function (t) {
                this.addReactionToPost("likedBy", t),
                  this.removeReactionFromPost("dislikedBy", t);
              }),
              (t.prototype.handleDownVote = function (t) {
                this.addReactionToPost("dislikedBy", t),
                  this.removeReactionFromPost("likedBy", t);
              }),
              (t.prototype.handleNeutralVote = function (t) {
                this.removeReactionFromPost("likedBy", t),
                  this.removeReactionFromPost("dislikedBy", t);
              }),
              (t.prototype.updatePostReactionCounts = function () {
                (0, a.setInnerHTML)(
                  this.postElement,
                  "[data-ms-".concat(this.type, "='likeCount']"),
                  this.postOrThread._count.likedBy.toString()
                ),
                  (0, a.setInnerHTML)(
                    this.postElement,
                    "[data-ms-".concat(this.type, "='dislikeCount']"),
                    this.postOrThread._count.dislikedBy.toString()
                  );
              }),
              (t.prototype.sendVote = function (t) {
                return r(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return "thread" !== this.type
                          ? [3, 2]
                          : [
                              4,
                              s.default.methods.threadVote({
                                threadId: this.postOrThread.id,
                                vote: t,
                              }),
                            ];
                      case 1:
                      case 3:
                        return e.sent(), [2];
                      case 2:
                        return [
                          4,
                          s.default.methods.postVote({
                            postId: this.postOrThread.id,
                            vote: t,
                          }),
                        ];
                    }
                  });
                });
              }),
              (t.prototype.handleReactionVisibility = function () {
                var t = this.postElement.querySelector(
                  "[data-ms-".concat(this.type, "='like']")
                );
                this.memberLikedPost()
                  ? t.classList.add("is-active")
                  : t.classList.remove("is-active");
                var e = this.postElement.querySelector(
                  "[data-ms-".concat(this.type, "='dislike']")
                );
                this.memberDislikedPost()
                  ? e.classList.add("is-active")
                  : e.classList.remove("is-active");
              }),
              (t.prototype.memberLikedPost = function () {
                return this.postOrThread.likedBy.includes(
                  this.Channel.activeMemberId
                );
              }),
              (t.prototype.memberDislikedPost = function () {
                return this.postOrThread.dislikedBy.includes(
                  this.Channel.activeMemberId
                );
              }),
              t
            );
          })();
        e.ReactionItem = c;
      },
      1079: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ThreadItem = void 0);
        var s = i(n(2286)),
          a = n(2246),
          c = n(4771),
          u = n(1646),
          l = (function () {
            function t(t, e) {
              (this.inEditMode = !1),
                (this.deleteSectionVisible = !1),
                (this.threadSection = t),
                (this.Post = t.Post),
                (this.thread = e),
                (this.threadElement = this.createThreadElement()),
                (this.reaction = new u.ReactionItem(
                  e,
                  this.threadElement,
                  t.Post.Channel,
                  "thread"
                )),
                this.handleFunctionVisibility(),
                this.initListeners(),
                this.updateCreatedAtEveryMinute();
            }
            return (
              (t.prototype.updateCreatedAtEveryMinute = function () {
                var t = this;
                this.updateDateIntervalId = setInterval(function () {
                  (0,
                  a.setInnerHTML)(t.threadElement, "[data-ms-thread='date']", (0, c.format)(t.thread.createdAt, "en_US"));
                }, 6e4);
              }),
              (t.prototype.handleVote = function (t) {
                this.reaction && this.reaction.handleVote(t.vote, t.memberId);
              }),
              (t.prototype.createThreadElement = function () {
                var t = this.threadSection.threadItemTemplate.cloneNode(!0);
                return d(t, this.thread), t;
              }),
              (t.prototype.initListeners = function () {
                this.threadElement
                  .querySelector("[data-ms-thread='edit']")
                  .addEventListener("click", this.handleEditClick.bind(this)),
                  this.threadElement
                    .querySelector("[data-ms-thread='delete']")
                    .addEventListener(
                      "click",
                      this.handleDeleteClick.bind(this)
                    ),
                  this.editSection
                    .querySelector("[data-ms-thread-edit='form']")
                    .addEventListener(
                      "submit",
                      this.handleEditFormSubmit.bind(this)
                    ),
                  this.editSection
                    .querySelector("[data-ms-thread-edit='cancel']")
                    .addEventListener(
                      "click",
                      this.handleEditCancel.bind(this)
                    ),
                  this.threadElement
                    .querySelector("[data-ms-thread-delete='show']")
                    .addEventListener(
                      "click",
                      this.handleShowDelete.bind(this)
                    );
              }),
              (t.prototype.handleShowDelete = function () {
                (this.deleteSectionVisible = !this.deleteSectionVisible),
                  (this.deleteSection.style.display = this.deleteSectionVisible
                    ? "block"
                    : "none");
              }),
              (t.prototype.remove = function () {
                var t = this;
                this.threadElement.remove(),
                  (this.threadSection.threads =
                    this.threadSection.threads.filter(function (e) {
                      return e.thread.id !== t.thread.id;
                    })),
                  this.Post.decrementReplyCount(),
                  clearInterval(this.updateDateIntervalId);
              }),
              (t.prototype.handleDeleteClick = function () {
                return r(this, void 0, void 0, function () {
                  return o(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          this.Post.Channel.handlePostLoaderVisibility(!0),
                          [
                            4,
                            s.default.methods.deleteThread({
                              threadId: this.thread.id,
                            }),
                          ]
                        );
                      case 1:
                        return (
                          t.sent(),
                          this.Post.Channel.handlePostLoaderVisibility(!1),
                          this.remove(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.handleFunctionVisibility = function () {
                var t = this.memberHasPermissionToEditThread(),
                  e = this.threadElement.querySelector(
                    "[data-ms-thread='edit']"
                  ),
                  n = this.threadElement.querySelector(
                    "[data-ms-thread-delete='show']"
                  );
                (this.threadElement.querySelector(
                  "[data-ms-thread='isModerator']"
                ).style.display = this.thread.member.isModerator
                  ? "block"
                  : "none"),
                  (this.editSection = this.threadElement.querySelector(
                    "[data-ms-thread-edit='section']"
                  )),
                  (this.editSection.style.display = "none"),
                  (this.deleteSection = this.threadElement.querySelector(
                    "[data-ms-thread-delete='section']"
                  )),
                  (this.deleteSection.style.display = "none"),
                  t
                    ? ((e.style.display = "block"), (n.style.display = "block"))
                    : ((e.style.display = "none"), (n.style.display = "none"));
              }),
              (t.prototype.memberHasPermissionToEditThread = function () {
                var t,
                  e,
                  n = Boolean(
                    null ===
                      (e =
                        null === (t = this.Post.Channel.member) || void 0 === t
                          ? void 0
                          : t._comments) || void 0 === e
                      ? void 0
                      : e.isModerator
                  );
                return (
                  this.thread.member.id === this.Post.Channel.activeMemberId ||
                  n
                );
              }),
              (t.prototype.handleEditClick = function () {
                if (!this.inEditMode) {
                  var t = this.threadElement.querySelector(
                    "[data-ms-thread='content']"
                  );
                  (t.style.display = "none"),
                    (this.editSection.querySelector(
                      "[data-ms-thread-edit='content']"
                    ).value = t.innerHTML),
                    (this.inEditMode = !0),
                    (this.editSection.style.display = "block");
                }
              }),
              (t.prototype.handleEditFormSubmit = function (t) {
                return r(this, void 0, void 0, function () {
                  var e, n;
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          (e = t.target.querySelector(
                            "[data-ms-thread-edit='content']"
                          )),
                          this.Post.Channel.handlePostLoaderVisibility(!0),
                          [
                            4,
                            s.default.methods.updateThread({
                              threadId: this.thread.id,
                              content: e.value,
                            }),
                          ]
                        );
                      case 1:
                        return (
                          (n = r.sent().data),
                          this.Post.Channel.handlePostLoaderVisibility(!1),
                          (this.threadElement.querySelector(
                            "[data-ms-thread='content']"
                          ).innerHTML = n.content),
                          this.handleEditCancel(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.handleEditCancel = function () {
                (this.inEditMode = !1),
                  (this.editSection.style.display = "none"),
                  (this.threadElement.querySelector(
                    "[data-ms-thread='content']"
                  ).style.display = "block");
              }),
              t
            );
          })();
        e.ThreadItem = l;
        var d = function (t, e) {
          var n = e.member,
            r = e.content,
            o = e._count,
            i = e.createdAt;
          (0, a.setInnerHTML)(t, "[data-ms-thread='content']", r),
            (0, a.setInnerHTML)(t, "[data-ms-thread='likeCount']", o.likedBy),
            (0, a.setInnerHTML)(
              t,
              "[data-ms-thread='dislikeCount']",
              o.dislikedBy
            ),
            (0, a.setInnerHTML)(
              t,
              "[data-ms-thread='date']",
              (0, c.format)(i, "en_US")
            ),
            t.setAttribute("data-ms-thread-id", e.id);
          var s = n.customFields || {};
          t.querySelectorAll("[data-ms-thread-creator]").forEach(function (t) {
            var e = t.getAttribute("data-ms-thread-creator");
            s[e] && (t.innerHTML = s[e]);
          }),
            n.profileImage &&
              t
                .querySelector("[data-ms-thread='ownerProfileImage']")
                .setAttribute("src", n.profileImage),
            t.removeAttribute("data-ms-thread");
        };
      },
      4076: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ThreadSection = void 0);
        var a = s(n(2286)),
          c = n(1079),
          u = (function () {
            function t(t, e, n) {
              (this.isOpen = !1),
                (this.threads = []),
                (this.totalThreadsLoaded = 0),
                (this.Post = n),
                (this.section = t),
                (this.postId = e),
                (this.threadSortOrder =
                  this.section.getAttribute("data-ms-thread-sort") ||
                  this.Post.Channel.sortOrder),
                this.initDOMElements(),
                this.initEventListeners(),
                this.hide();
            }
            return (
              (t.prototype.initDOMElements = function () {
                (this.threadContainer = this.section.querySelector(
                  "[data-ms-thread='container']"
                )),
                  (this.threadItemTemplate = this.section.querySelector(
                    "[data-ms-thread='item']"
                  )),
                  (this.loadMoreButton = this.section.querySelector(
                    "[data-ms-thread='loadMore']"
                  )),
                  (this.loadMoreButton.style.display = "none"),
                  this.threadItemTemplate.remove();
              }),
              (t.prototype.handleLoadMoreVisibility = function () {
                this.Post.replyCount > this.totalThreadsLoaded
                  ? this.toggleDisplay("[data-ms-thread='loadMore']", "block")
                  : this.toggleDisplay("[data-ms-thread='loadMore']", "none");
              }),
              (t.prototype.initEventListeners = function () {
                var t = this;
                this.loadMoreButton.addEventListener("click", function () {
                  return o(t, void 0, void 0, function () {
                    return i(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.loadMoreThreads()];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                }),
                  this.section
                    .querySelector("[data-ms-form='thread']")
                    .addEventListener("submit", function (e) {
                      return o(t, void 0, void 0, function () {
                        return i(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                e.preventDefault(),
                                e.stopPropagation(),
                                [4, this.createAndDisplayThread(e.target)]
                              );
                            case 1:
                              return t.sent(), [2];
                          }
                        });
                      });
                    });
                var e = this.section.querySelector("[data-ms-form='thread']");
                e.querySelector("[data-ms-thread='content']").addEventListener(
                  "keydown",
                  function (n) {
                    return o(t, void 0, void 0, function () {
                      var t;
                      return i(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return "Enter" !== (t = n).key || t.shiftKey
                              ? [3, 2]
                              : (n.preventDefault(),
                                n.stopPropagation(),
                                [4, this.createAndDisplayThread(e)]);
                          case 1:
                            r.sent(), (r.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    });
                  }
                );
              }),
              (t.prototype.loadMoreThreads = function () {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.fetchThreads()];
                      case 1:
                        return (t = e.sent()), this.displayThreads(t), [2];
                    }
                  });
                });
              }),
              (t.prototype.fetchThreads = function () {
                var t;
                return o(this, void 0, void 0, function () {
                  var e, n;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          this.Post.Channel.handlePostLoaderVisibility(!0),
                          (e =
                            this.threadContainer.getAttribute(
                              "data-ms-thread-load"
                            ) || 20),
                          [
                            4,
                            a.default.methods.getThreads(
                              r(
                                {
                                  postId: this.postId,
                                  order: this.threadSortOrder,
                                  limit: Number(e),
                                },
                                this.lastThreadId && {
                                  after: this.lastThreadId,
                                }
                              )
                            ),
                          ]
                        );
                      case 1:
                        return (
                          (n = o.sent().data),
                          this.Post.Channel.handlePostLoaderVisibility(!1),
                          (this.totalThreadsLoaded += n.threads.length),
                          this.handleLoadMoreVisibility(),
                          (this.lastThreadId =
                            null === (t = n.threads[n.threads.length - 1]) ||
                            void 0 === t
                              ? void 0
                              : t.internalOrder),
                          [2, n.threads]
                        );
                    }
                  });
                });
              }),
              (t.prototype.toggleDisplay = function (t, e) {
                var n = this.section.querySelector(t);
                n && (n.style.display = e);
              }),
              (t.prototype.displayThreads = function (t) {
                var e = this;
                t.forEach(function (t) {
                  var n = new c.ThreadItem(e, t);
                  e.threads.push(n);
                  var r = n.threadElement;
                  e.threadContainer.appendChild(r);
                });
              }),
              (t.prototype.addThread = function (t) {
                var e = new c.ThreadItem(this, t);
                this.threads.push(e);
                var n = e.threadElement;
                (this.totalThreadsLoaded += 1),
                  this.Post.incrementReplyCount(),
                  "newest" === this.threadSortOrder
                    ? this.threadContainer.insertBefore(
                        n,
                        this.threadContainer.firstChild
                      )
                    : this.threadContainer.appendChild(n);
              }),
              (t.prototype.createAndDisplayThread = function (t) {
                return o(this, void 0, void 0, function () {
                  var e, n, r;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (e = t.querySelector(
                          "[data-ms-thread='content']"
                        ))
                          ? (n = e.value)
                            ? (this.Post.Channel.handlePostLoaderVisibility(!0),
                              [
                                4,
                                a.default.methods.createThread({
                                  postId: this.postId,
                                  content: n,
                                }),
                              ])
                            : [2]
                          : [3, 2];
                      case 1:
                        (r = o.sent().data),
                          (e.value = ""),
                          this.Post.Channel.handlePostLoaderVisibility(!1),
                          this.addThread(r),
                          (o.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.hide = function () {
                (this.section.style.display = "none"), (this.isOpen = !1);
              }),
              (t.prototype.show = function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          (this.section.style.display = "block"),
                          (this.isOpen = !0),
                          0 !== this.totalThreadsLoaded
                            ? [3, 2]
                            : [4, this.loadMoreThreads()]
                        );
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              t
            );
          })();
        e.ThreadSection = u;
      },
      2517: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initChannels = void 0);
        var r = n(1801);
        e.initChannels = function () {
          document.querySelectorAll("[data-ms-channel]").forEach(function (t) {
            return new r.ChannelSection(t);
          });
        };
      },
      2574: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Realtime = void 0);
        var r = n(7110),
          o = n(2246),
          i = (function () {
            function t(t) {
              (this.channel = t),
                (this.pusher = (0, r.getPusherClient)()),
                this.initRealtime(),
                console.log(
                  "Realtime initialized for channel key: ".concat(
                    this.channel.channelKey
                  )
                );
            }
            return (
              (t.prototype.initRealtime = function () {
                (this.pusherChannel = this.pusher.subscribe(
                  this.channel.realtimeKey
                )),
                  this.bindEvents();
              }),
              (t.prototype.bindEvents = function () {
                this.pusherChannel.bind(
                  "post:new",
                  this.handleNewPost.bind(this)
                ),
                  this.pusherChannel.bind(
                    "post:deleted",
                    this.handlePostDeleted.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "post:updated",
                    this.handlePostUpdated.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "post:vote",
                    this.handlePostVote.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "post:typing",
                    this.handlePostTyping.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "thread:new",
                    this.handleNewThread.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "thread:deleted",
                    this.handleThreadDeleted.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "thread:updated",
                    this.handleThreadUpdated.bind(this)
                  ),
                  this.pusherChannel.bind(
                    "thread:vote",
                    this.handleThreadVote.bind(this)
                  );
              }),
              (t.prototype.handlePostTyping = function (t) {
                var e = this;
                console.log("post-is-typing", t),
                  t.memberId !== this.channel.activeMemberId &&
                    (this.channel.typingUsers.some(function (e) {
                      return e.memberId === t.memberId;
                    }) ||
                      (this.channel.typingUsers.push(t),
                      setTimeout(function () {
                        (e.channel.typingUsers = e.channel.typingUsers.filter(
                          function (e) {
                            return e.memberId !== t.memberId;
                          }
                        )),
                          e.channel.updateTypingDisplay();
                      }, 5e3)),
                    this.channel.updateTypingDisplay());
              }),
              (t.prototype.handleNewPost = function (t) {
                t.member.id !== this.channel.activeMemberId &&
                  this.channel.addPost(t);
              }),
              (t.prototype.handlePostDeleted = function (t) {
                if (t.memberId !== this.channel.activeMemberId) {
                  var e = this.channel.posts.find(function (e) {
                    return e.post.id === t.postId;
                  });
                  e
                    ? e.remove()
                    : ((this.channel.totalPostCount -= 1),
                      this.channel.setTotalPostCount());
                }
              }),
              (t.prototype.handlePostUpdated = function (t) {
                if (t.memberId !== this.channel.activeMemberId) {
                  var e = this.channel.channelElement.querySelector(
                    "[data-ms-post-id='".concat(t.id, "']")
                  );
                  e &&
                    (0, o.setInnerHTML)(
                      e,
                      "[data-ms-post='content']",
                      t.content
                    );
                }
              }),
              (t.prototype.handlePostVote = function (t) {
                if (t.memberId !== this.channel.activeMemberId) {
                  var e = this.channel.posts.find(function (e) {
                    return e.post.id === t.postId;
                  });
                  e && e.handleVote(t);
                }
              }),
              (t.prototype.handleNewThread = function (t) {
                if (t.member.id !== this.channel.activeMemberId) {
                  var e = this.channel.posts.find(function (e) {
                    return e.post.id === t.parentPostId;
                  });
                  e &&
                    (0 === e.threadSection.threads.length &&
                    !1 === e.threadSection.isOpen
                      ? e.incrementReplyCount()
                      : e.threadSection.addThread(t));
                }
              }),
              (t.prototype.handleThreadDeleted = function (t) {
                if (t.memberId !== this.channel.activeMemberId) {
                  var e = this.channel.posts.find(function (e) {
                    return e.post.id === t.postId;
                  });
                  if (e) {
                    var n = e.threadSection.threads.find(function (e) {
                      return e.thread.id === t.threadId;
                    });
                    n ? n.remove() : e.decrementReplyCount();
                  }
                }
              }),
              (t.prototype.handleThreadUpdated = function (t) {
                if (t.memberId !== this.channel.activeMemberId) {
                  var e = this.channel.channelElement.querySelector(
                    "[data-ms-thread-id='".concat(t.id, "']")
                  );
                  e &&
                    (0, o.setInnerHTML)(
                      e,
                      "[data-ms-thread='content']",
                      t.content
                    );
                }
              }),
              (t.prototype.handleThreadVote = function (t) {
                if (t.memberId !== this.channel.activeMemberId) {
                  var e = this.channel.posts.find(function (e) {
                    return e.post.id === t.postId;
                  });
                  if (e) {
                    var n = e.threadSection.threads.find(function (e) {
                      return e.thread.id === t.threadId;
                    });
                    n && n.handleVote(t);
                  }
                }
              }),
              t
            );
          })();
        e.Realtime = i;
      },
      7110: function (t, e, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getPusherClient = void 0);
        var o = r(n(9672)),
          i = null;
        e.getPusherClient = function () {
          return (
            i ||
              (i = new o.default("nsMtuOjwbnzZ9kz9OofTGw3A1NMmcO3nOo9iQJAw", {
                wsHost: "s8740.nyc1.piesocket.com",
                forceTLS: !0,
                cluster: "piesocket",
                enabledTransports: ["ws", "wss"],
              })),
            i
          );
        };
      },
      2246: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setInnerHTML = void 0),
          (e.setInnerHTML = function (t, e, n) {
            t.querySelector(e).innerHTML = n;
          });
      },
      7723: function (t, e) {
        "use strict";
        var n =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  s.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return s;
            },
          r =
            (this && this.__spreadArray) ||
            function (t, e, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                  (!r && o in e) ||
                    (r || (r = Array.prototype.slice.call(e, 0, o)),
                    (r[o] = e[o]));
              return t.concat(r || Array.prototype.slice.call(e));
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.MemberAttrs =
            e.NonMemberAttrs =
            e.content =
            e.forms =
            e.buttons =
              void 0);
        var o = {
          logout: ["[data-ms-action='logout']"],
          login: ["[data-ms-modal='login']"],
          signup: ["[data-ms-modal='signup']"],
          forgotPassword: ["[data-ms-modal='forgot-password']"],
          profile: ["[data-ms-modal='profile']"],
          loginRedirect: ["[data-ms-action='login-redirect']"],
          customerPortal: ["[data-ms-action='customer-portal']"],
          sendVerificationEmail: [
            "[data-ms-action='resend-verification-email']",
          ],
          returnToCheckout: ["[data-ms-action='return-to-checkout']"],
          updateProfileImage: ["[data-ms-action='profile-image']"],
        };
        (e.buttons = {
          logout: o.logout.join(","),
          login: o.login.join(","),
          signup: o.signup.join(","),
          forgotPassword: o.forgotPassword.join(","),
          profile: o.profile.join(","),
          loginRedirect: o.loginRedirect.join(","),
          customerPortal: o.customerPortal.join(","),
          sendVerificationEmail: o.sendVerificationEmail.join(","),
          returnToCheckout: o.returnToCheckout.join(","),
          updateProfileImage: o.updateProfileImage.join(","),
        }),
          (e.forms = {
            profile: ["[data-ms-form='profile']"],
            email: ["[data-ms-form='email']"],
            password: ["[data-ms-form='password']"],
          }),
          (e.content = {
            members: ["[data-ms-content='!members']"],
            nonMembers: [
              "[data-ms-content='has-failed-payment']",
              "[data-ms-content='!has-failed-payment']",
              "[data-ms-content='verified']",
              "[data-ms-content='!verified']",
              "[data-ms-content='is-trialing']",
              "[data-ms-content='members']",
              "[data-ms-content='free-plans']",
              "[data-ms-content='paid-plans']",
              "[data-ms-content='no-plans']",
              "[data-ms-plan\\:remove]",
              "[data-ms-action=customer-portal]",
            ],
          }),
          (e.NonMemberAttrs = r(
            r(
              r(
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r([], n(e.content.nonMembers), !1),
                            n(e.forms.profile),
                            !1
                          ),
                          n(e.forms.email),
                          !1
                        ),
                        n(e.forms.password),
                        !1
                      ),
                      n(o.logout),
                      !1
                    ),
                    n(o.loginRedirect),
                    !1
                  ),
                  n(o.profile),
                  !1
                ),
                n(o.sendVerificationEmail),
                !1
              ),
              n(o.customerPortal),
              !1
            ),
            n(o.returnToCheckout),
            !1
          )),
          (e.MemberAttrs = r([], n(e.content.members), !1));
      },
      3726: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initChangePasswordForms =
            e.initUpdateEmailForms =
            e.initProfileForms =
            e.initResetPasswordForm =
            e.initForgotPasswordForm =
            e.initLoginForms =
            e.initPasswordlessLoginForms =
            e.initPasswordlessSingupForms =
            e.initConnectAuthProviderForms =
            e.initSignupForms =
            e.initCaptcha =
            e.initLoginAuthProviderButtons =
            e.initSignupAuthProviderButtons =
              void 0);
        var a = s(n(2286)),
          c = s(n(123)),
          u = n(6797);
        function l(t) {
          return (0, u.getElements)('[data-ms-form="'.concat(t, '"]'));
        }
        function d(t) {
          (t.querySelector("[data-ms-passwordless='step-2']").style.display =
            "none"),
            (t.querySelector("[data-ms-member='token']").required = !1);
        }
        function f(t) {
          (t.querySelector("[data-ms-passwordless='step-2']").style.display =
            "block"),
            (t.querySelector("[data-ms-member='token']").required = !0);
          var e = t.querySelector("[data-ms-passwordless-button]"),
            n = e.getAttribute("data-ms-passwordless-button");
          n && ((e.value = n), (e.innerHTML = n));
        }
        function h(t, e, n) {
          c.default.setMember(t.member),
            a.default.mergeApp({ contentGroups: t.contentGroups });
          var r = e.getAttribute("redirect");
          (0, u.handleRedirect)(t.member.loginRedirect, r) ||
            ((0, u.hideLoader)(),
            a.default.methods._showMessage(n, !1),
            setTimeout(function () {
              window.location.reload();
            }, 2e3));
        }
        function p(t, e, n, r) {
          return o(this, void 0, void 0, function () {
            var o, s;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    c.default.setMember(t.member),
                    a.default.mergeApp({ contentGroups: t.contentGroups }),
                    (o = e.getAttribute("data-ms-coupon")) &&
                      a.default.setCouponViaBtn(o),
                    (s =
                      e.getAttribute("data-ms-price:add") ||
                      e.getAttribute("data-ms-price:update") ||
                      a.default.selectedPrice)
                      ? [4, (0, u.launchCheckout)({ priceId: s })]
                      : [3, 2]
                  );
                case 1:
                  return [2, i.sent()];
                case 2:
                  return (
                    (0, u.handleRedirect)(t.redirect, r) ||
                      ((0, u.hideLoader)(),
                      a.default.methods._showMessage(n, !1),
                      setTimeout(function () {
                        window.location.reload();
                      }, 2e3)),
                    [2]
                  );
              }
            });
          });
        }
        (e.initSignupAuthProviderButtons = function (t, e) {
          var n = Array.from(t.querySelectorAll("[data-ms-auth-provider]"));
          n &&
            n.map(function (n) {
              (0, u.hideAuthDisconnectButtons)(n),
                n.addEventListener("click", function (r) {
                  return o(void 0, void 0, void 0, function () {
                    var o, s, c, l, d, f;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          r.preventDefault(),
                            (o = n.getAttribute("data-ms-auth-provider")),
                            (s = (0, u.getSignupFormPlans)(t)),
                            (c = (0, u.getFormCustomFields)(t)),
                            (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 5, , 6]),
                            [
                              4,
                              a.default.methods.signupWithProvider({
                                provider: o,
                                customFields: c,
                                plans: s,
                              }),
                            ]
                          );
                        case 2:
                          return (
                            (l = i.sent().data),
                            a.default.mergeApp({
                              contentGroups: l.contentGroups,
                            }),
                            (d =
                              t.getAttribute("data-ms-price:add") ||
                              t.getAttribute("data-ms-price:update") ||
                              a.default.selectedPrice)
                              ? ((0, u.showLoader)(),
                                [4, (0, u.launchCheckout)({ priceId: d })])
                              : [3, 4]
                          );
                        case 3:
                          return [2, i.sent()];
                        case 4:
                          return (
                            (0, u.handleRedirect)(l.redirect, e) ||
                              (a.default.methods._showMessage(l.message, !1),
                              setTimeout(function () {
                                window.location.reload();
                              }, 2e3)),
                            [3, 6]
                          );
                        case 5:
                          return (
                            (f = i.sent()),
                            console.log(f),
                            f.message &&
                              a.default.methods._showMessage(f.message, !0),
                            [3, 6]
                          );
                        case 6:
                          return [2];
                      }
                    });
                  });
                });
            });
        }),
          (e.initLoginAuthProviderButtons = function (t) {
            var e = Array.from(t.querySelectorAll("[data-ms-auth-provider]"));
            e &&
              e.map(function (t) {
                (0, u.hideAuthDisconnectButtons)(t),
                  t.addEventListener("click", function (e) {
                    return o(void 0, void 0, void 0, function () {
                      var n, r, o;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            e.preventDefault(),
                              (n = t.getAttribute("data-ms-auth-provider")),
                              (i.label = 1);
                          case 1:
                            return (
                              i.trys.push([1, 3, , 4]),
                              [
                                4,
                                a.default.methods.loginWithProvider({
                                  provider: n,
                                }),
                              ]
                            );
                          case 2:
                            return (
                              (r = i.sent().data),
                              a.default.mergeApp({
                                contentGroups: r.contentGroups,
                              }),
                              (0, u.handleRedirect)(
                                r.member.loginRedirect,
                                void 0
                              ) ||
                                (a.default.methods._showMessage(r.message, !1),
                                setTimeout(function () {
                                  window.location.reload();
                                }, 2e3)),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (o = i.sent()),
                              console.log(o),
                              o.message &&
                                a.default.methods._showMessage(o.message, !0),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  });
              });
          }),
          (e.initCaptcha = function (t) {
            return o(void 0, void 0, void 0, function () {
              var e, n;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (e = t.querySelector("[data-ms-hcaptcha]"))
                      ? [4, a.default.methods._captchaReady]
                      : [3, 2];
                  case 1:
                    return (
                      r.sent(),
                      (n = e.getAttribute("data-ms-hcaptcha")),
                      e.setAttribute("id", "ms-captcha"),
                      [
                        2,
                        window.hcaptcha.render("ms-captcha", {
                          sitekey: "838711f9-0e30-48e9-89e6-8f1ec4b79705",
                          theme: n,
                        }),
                      ]
                    );
                  case 2:
                    return [2, !1];
                }
              });
            });
          }),
          (e.initSignupForms = function () {
            var t = l("signup");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var n = this,
                    r = t.getAttribute("redirect");
                  (0, e.initSignupAuthProviderButtons)(t, r);
                  var s = (0, e.initCaptcha)(t),
                    l = t.querySelector("[data-ms-member='email']"),
                    d = t.querySelector("[data-ms-member='password']");
                  function f() {
                    return o(this, void 0, void 0, function () {
                      return i(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, window.hcaptcha.execute({ async: !0 })];
                          case 1:
                            return [2, t.sent().response];
                        }
                      });
                    });
                  }
                  (l.type = "email"),
                    (d.type = "password"),
                    t.addEventListener("submit", function (e) {
                      return o(n, void 0, void 0, function () {
                        var n, o, h, m, v, g, b, w, y;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                e.preventDefault(),
                                e.stopPropagation(),
                                (0, u.showLoader)(),
                                (n = c.default.getCachedMember()),
                                (null === (y = null == n ? void 0 : n.auth) ||
                                void 0 === y
                                  ? void 0
                                  : y.email) === l.value &&
                                a.default.selectedPrice
                                  ? [
                                      4,
                                      (0, u.launchCheckout)({
                                        priceId: a.default.selectedPrice,
                                      }),
                                    ]
                                  : [3, 2]
                              );
                            case 1:
                              return [2, i.sent()];
                            case 2:
                              return (
                                (o = (0, u.getSignupFormPlans)(t)),
                                (h = (0, u.getFormCustomFields)(t)),
                                [4, s]
                              );
                            case 3:
                              if (!i.sent()) return [3, 7];
                              if ((m = window.hcaptcha.getResponse()))
                                return [3, 7];
                              i.label = 4;
                            case 4:
                              return i.trys.push([4, 6, , 7]), [4, f()];
                            case 5:
                              return (m = i.sent()), [3, 7];
                            case 6:
                              return i.sent(), (0, u.hideLoader)(), [2];
                            case 7:
                              return (
                                i.trys.push([7, 10, , 11]),
                                [
                                  4,
                                  (0,
                                  a.default.methods.signupMemberEmailPassword)(
                                    {
                                      email: l.value,
                                      password: d.value,
                                      customFields: h,
                                      plans: o,
                                      captchaToken: m,
                                    },
                                    { includeContentGroups: !0 }
                                  ),
                                ]
                              );
                            case 8:
                              return (
                                (v = i.sent()),
                                (g = v.data),
                                (b = v._internalUseOnly.message),
                                [4, p(g, t, b, r)]
                              );
                            case 9:
                              return i.sent(), [3, 11];
                            case 10:
                              return (
                                (w = i.sent()),
                                console.log(w),
                                (0, u.hideLoader)(),
                                (function () {
                                  if (window.hcaptcha)
                                    try {
                                      window.hcaptcha.reset();
                                    } catch (t) {}
                                })(),
                                w.message &&
                                  a.default.methods._showMessage(w.message, !0),
                                [3, 11]
                              );
                            case 11:
                              return [2];
                          }
                        });
                      });
                    });
                })(t);
              });
          }),
          (e.initConnectAuthProviderForms = function () {
            var t = Array.from(
              document.querySelectorAll("[data-ms-auth='manage-providers']")
            );
            t &&
              t.map(function (t) {
                !(function (t) {
                  var e = this;
                  Array.from(t.querySelectorAll("[data-ms-auth-provider]")).map(
                    function (t) {
                      function n(e) {
                        var n,
                          r =
                            (null === (n = e.auth) || void 0 === n
                              ? void 0
                              : n.providers) || [],
                          o = t.querySelector("[data-ms-auth-connected-text]");
                        if (o) {
                          var i = o.getAttribute("data-ms-original-text"),
                            s = o.getAttribute("data-ms-auth-connected-text");
                          s &&
                          r.some(function (e) {
                            return (
                              e.provider ===
                              t.getAttribute("data-ms-auth-provider")
                            );
                          })
                            ? (i ||
                                o.setAttribute(
                                  "data-ms-original-text",
                                  o.innerHTML
                                ),
                              (o.innerHTML = s))
                            : i && (o.innerHTML = i);
                        }
                      }
                      function s(t, e) {
                        var n = t.auth;
                        c.default.mergeMember({
                          auth: r(r({}, n), { providers: e.providers }),
                        });
                      }
                      var l = c.default.getCachedMember(),
                        d = (function (e) {
                          var n, r;
                          return null ===
                            (r =
                              null === (n = null == e ? void 0 : e.auth) ||
                              void 0 === n
                                ? void 0
                                : n.providers) || void 0 === r
                            ? void 0
                            : r.some(function (e) {
                                return (
                                  e.provider ===
                                  t.getAttribute("data-ms-auth-provider")
                                );
                              });
                        })(l),
                        f = Boolean(
                          t.querySelector("[data-ms-auth-disconnect]")
                        );
                      d || (0, u.hideAuthDisconnectButtons)(t),
                        l && n(l),
                        t.addEventListener("click", function (r) {
                          return o(e, void 0, void 0, function () {
                            var e, o, l, h, p, m;
                            return i(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return (
                                    r.preventDefault(),
                                    r.stopPropagation(),
                                    (e = t.getAttribute(
                                      "data-ms-auth-provider"
                                    )),
                                    (o = c.default.getCachedMember()),
                                    f && d
                                      ? [
                                          4,
                                          (0,
                                          a.default.methods.disconnectProvider)(
                                            { provider: e }
                                          ),
                                        ]
                                      : [3, 2]
                                  );
                                case 1:
                                  return (
                                    (l = i.sent()),
                                    (p = l.data),
                                    (h = l._internalUseOnly.message),
                                    s(o, p),
                                    n(c.default.getCachedMember()),
                                    (d = !1),
                                    (0, u.hideAuthDisconnectButtons)(t),
                                    [2, a.default.methods._showMessage(h, !1)]
                                  );
                                case 2:
                                  return (
                                    i.trys.push([2, 4, , 5]),
                                    [
                                      4,
                                      a.default.methods.connectProvider({
                                        provider: e,
                                      }),
                                    ]
                                  );
                                case 3:
                                  return (
                                    (p = i.sent().data),
                                    s(o, p),
                                    n(c.default.getCachedMember()),
                                    (d = !0),
                                    (0, u.showAuthDisconnectButtons)(t),
                                    [
                                      2,
                                      a.default.methods._showMessage(
                                        p.message,
                                        !1
                                      ),
                                    ]
                                  );
                                case 4:
                                  return (
                                    (m = i.sent()).message &&
                                      a.default.methods._showMessage(
                                        m.message,
                                        !0
                                      ),
                                    [3, 5]
                                  );
                                case 5:
                                  return [2];
                              }
                            });
                          });
                        });
                    }
                  );
                })(t);
              });
          }),
          (e.initPasswordlessSingupForms = function () {
            var t = l("passwordless-signup");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var n = this,
                    r = t.getAttribute("redirect");
                  (0, e.initSignupAuthProviderButtons)(t, r), d(t);
                  var s = t.querySelector("[data-ms-member='email']"),
                    c = t.querySelector("[data-ms-member='token']");
                  (s.type = "email"), (c.type = "text");
                  var l = !1;
                  function h(t) {
                    return o(this, void 0, void 0, function () {
                      var e;
                      return i(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [
                              4,
                              (0,
                              a.default.methods
                                .sendMemberSignupPasswordlessEmail)({
                                email: s.value,
                              }),
                            ];
                          case 1:
                            return (
                              (e = n.sent()._internalUseOnly.message),
                              (0, u.hideLoader)(),
                              a.default.methods._showMessage(e, !1),
                              f(t),
                              (l = !0),
                              [2]
                            );
                        }
                      });
                    });
                  }
                  function m(t) {
                    return o(this, void 0, void 0, function () {
                      var e, n, o, l, d;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return (
                              (e = (0, u.getSignupFormPlans)(t)),
                              (n = (0, u.getFormCustomFields)(t)),
                              [
                                4,
                                (0, a.default.methods.signupMemberPasswordless)(
                                  {
                                    email: s.value,
                                    passwordlessToken: c.value,
                                    customFields: n,
                                    plans: e,
                                  },
                                  { includeContentGroups: !0 }
                                ),
                              ]
                            );
                          case 1:
                            return (
                              (o = i.sent()),
                              (l = o.data),
                              (d = o._internalUseOnly.message),
                              p(l, t, d, r),
                              [2]
                            );
                        }
                      });
                    });
                  }
                  t.addEventListener("submit", function (e) {
                    return o(n, void 0, void 0, function () {
                      var n;
                      return i(this, function (r) {
                        switch (r.label) {
                          case 0:
                            e.preventDefault(),
                              e.stopPropagation(),
                              (0, u.showLoader)(),
                              (r.label = 1);
                          case 1:
                            return (
                              r.trys.push([1, 6, , 7]),
                              !1 !== l ? [3, 3] : [4, h(t)]
                            );
                          case 2:
                            return r.sent(), [3, 5];
                          case 3:
                            return [4, m(t)];
                          case 4:
                            r.sent(), (r.label = 5);
                          case 5:
                            return [3, 7];
                          case 6:
                            return (
                              (n = r.sent()),
                              console.log(n),
                              (0, u.hideLoader)(),
                              n.message &&
                                a.default.methods._showMessage(n.message, !0),
                              [3, 7]
                            );
                          case 7:
                            return [2];
                        }
                      });
                    });
                  });
                })(t);
              });
          }),
          (e.initPasswordlessLoginForms = function () {
            var t = l("passwordless-login");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var n = this;
                  d(t), (0, e.initLoginAuthProviderButtons)(t);
                  var r = t.querySelector("[data-ms-member='email']"),
                    s = t.querySelector("[data-ms-member='token']");
                  (r.type = "email"), (s.type = "text");
                  var c = !1;
                  function l(t) {
                    return o(this, void 0, void 0, function () {
                      var e;
                      return i(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [
                              4,
                              (0,
                              a.default.methods
                                .sendMemberLoginPasswordlessEmail)({
                                email: r.value,
                              }),
                            ];
                          case 1:
                            return (
                              (e = n.sent()._internalUseOnly.message),
                              (0, u.hideLoader)(),
                              a.default.methods._showMessage(e, !1),
                              f(t),
                              (c = !0),
                              [2]
                            );
                        }
                      });
                    });
                  }
                  function p(t) {
                    return o(this, void 0, void 0, function () {
                      var e, n, o;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return [
                              4,
                              (0, a.default.methods.loginMemberPasswordless)(
                                { email: r.value, passwordlessToken: s.value },
                                { includeContentGroups: !0 }
                              ),
                            ];
                          case 1:
                            return (
                              (e = i.sent()),
                              (n = e.data),
                              (o = e._internalUseOnly.message),
                              h(n, t, o),
                              [2]
                            );
                        }
                      });
                    });
                  }
                  t.addEventListener("submit", function (e) {
                    return o(n, void 0, void 0, function () {
                      var n;
                      return i(this, function (r) {
                        switch (r.label) {
                          case 0:
                            e.preventDefault(),
                              e.stopPropagation(),
                              (0, u.showLoader)(),
                              (r.label = 1);
                          case 1:
                            return (
                              r.trys.push([1, 6, , 7]),
                              !1 !== c ? [3, 3] : [4, l(t)]
                            );
                          case 2:
                            return r.sent(), [3, 5];
                          case 3:
                            return [4, p(t)];
                          case 4:
                            r.sent(), (r.label = 5);
                          case 5:
                            return [3, 7];
                          case 6:
                            return (
                              (n = r.sent()),
                              console.log(n),
                              (0, u.hideLoader)(),
                              n.message &&
                                a.default.methods._showMessage(n.message, !0),
                              [3, 7]
                            );
                          case 7:
                            return [2];
                        }
                      });
                    });
                  });
                })(t);
              });
          }),
          (e.initLoginForms = function () {
            var t = l("login");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var n = this;
                  (0, e.initLoginAuthProviderButtons)(t);
                  var r = t.querySelector("[data-ms-member='email']"),
                    s = t.querySelector("[data-ms-member='password']");
                  (r.type = "email"),
                    (s.type = "password"),
                    t.addEventListener("submit", function (e) {
                      return o(n, void 0, void 0, function () {
                        var n, o, c, l;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              e.preventDefault(),
                                e.stopPropagation(),
                                (0, u.showLoader)(),
                                (i.label = 1);
                            case 1:
                              return (
                                i.trys.push([1, 3, , 4]),
                                [
                                  4,
                                  (0,
                                  a.default.methods.loginMemberEmailPassword)(
                                    { email: r.value, password: s.value },
                                    { includeContentGroups: !0, isWebflow: !0 }
                                  ),
                                ]
                              );
                            case 2:
                              return (
                                (n = i.sent()),
                                (o = n.data),
                                (c = n._internalUseOnly.message),
                                h(o, t, c),
                                [3, 4]
                              );
                            case 3:
                              return (
                                (l = i.sent()),
                                console.log(l),
                                (0, u.hideLoader)(),
                                l.message &&
                                  a.default.methods._showMessage(l.message, !0),
                                [3, 4]
                              );
                            case 4:
                              return [2];
                          }
                        });
                      });
                    });
                })(t);
              });
          }),
          (e.initForgotPasswordForm = function () {
            var t = l("forgot-password");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var e = this,
                    n = t.querySelector("[data-ms-member='email']");
                  t.addEventListener("submit", function (r) {
                    return o(e, void 0, void 0, function () {
                      var e;
                      return i(this, function (o) {
                        switch (o.label) {
                          case 0:
                            r.preventDefault(),
                              r.stopPropagation(),
                              (0, u.showLoader)(),
                              (o.label = 1);
                          case 1:
                            return (
                              o.trys.push([1, 3, , 4]),
                              [
                                4,
                                (0,
                                a.default.methods.sendMemberResetPasswordEmail)(
                                  { email: n.value }
                                ),
                              ]
                            );
                          case 2:
                            return (
                              o.sent(),
                              (window.location.href =
                                t.getAttribute("redirect")),
                              (0, u.hideLoader)(),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (e = o.sent()),
                              console.log(e),
                              (0, u.hideLoader)(),
                              e.message &&
                                a.default.methods._showMessage(e.message, !1),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  });
                })(t);
              });
          }),
          (e.initResetPasswordForm = function () {
            var t = l("reset-password");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var e = this,
                    n = t.querySelector("[data-ms-member='token']"),
                    r = t.querySelector("[data-ms-member='password']");
                  t.addEventListener("submit", function (s) {
                    return o(e, void 0, void 0, function () {
                      var e;
                      return i(this, function (o) {
                        switch (o.label) {
                          case 0:
                            s.preventDefault(),
                              s.stopPropagation(),
                              (0, u.showLoader)(),
                              (o.label = 1);
                          case 1:
                            return (
                              o.trys.push([1, 3, , 4]),
                              [
                                4,
                                a.default.methods.resetMemberPassword({
                                  token: n.value,
                                  newPassword: r.value,
                                }),
                              ]
                            );
                          case 2:
                            return (
                              o.sent(),
                              (window.location.href =
                                t.getAttribute("redirect")),
                              (0, u.hideLoader)(),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (e = o.sent()),
                              console.log(e),
                              (0, u.hideLoader)(),
                              e.message &&
                                a.default.methods._showMessage(e.message, !0),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  });
                })(t);
              });
          }),
          (e.initProfileForms = function () {
            var t = l("profile");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var e = this;
                  t.addEventListener("submit", function (n) {
                    return o(e, void 0, void 0, function () {
                      var e, r, o, s, l, d;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            n.preventDefault(),
                              n.stopPropagation(),
                              (0, u.showLoader)(),
                              (e = (0, u.getFormCustomFields)(t)),
                              (i.label = 1);
                          case 1:
                            return (
                              i.trys.push([1, 3, , 4]),
                              [
                                4,
                                (0, a.default.methods.updateMember)({
                                  customFields: e,
                                }),
                              ]
                            );
                          case 2:
                            return (
                              (r = i.sent()),
                              (o = r.data),
                              (s = r._internalUseOnly.message),
                              c.default.setMember(o),
                              (0, u.personalizeText)(o),
                              (0, u.hideLoader)(),
                              (l = t.getAttribute("redirect"))
                                ? (window.location.href = l)
                                : a.default.methods._showMessage(s, !1),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (d = i.sent()),
                              console.log(d),
                              (0, u.hideLoader)(),
                              d.message &&
                                a.default.methods._showMessage(d.message, !0),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  });
                })(t);
              });
          }),
          (e.initUpdateEmailForms = function () {
            var t = l("email");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var e = this,
                    n = t.querySelector("input[data-ms-member='email']");
                  t.addEventListener("submit", function (t) {
                    return o(e, void 0, void 0, function () {
                      var e, r, o, s;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            t.preventDefault(),
                              t.stopPropagation(),
                              (0, u.showLoader)(),
                              (i.label = 1);
                          case 1:
                            return (
                              i.trys.push([1, 3, , 4]),
                              [
                                4,
                                (0, a.default.methods.updateMemberAuth)({
                                  email: n.value,
                                }),
                              ]
                            );
                          case 2:
                            return (
                              (e = i.sent()),
                              (r = e.data),
                              (o = e._internalUseOnly.message),
                              c.default.setMember(r),
                              (0, u.personalizeText)(r),
                              (0, u.hideLoader)(),
                              a.default.methods._showMessage(o, !1),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (s = i.sent()),
                              console.log(s),
                              (0, u.hideLoader)(),
                              s.message &&
                                a.default.methods._showMessage(s.message, !0),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  });
                })(t);
              });
          }),
          (e.initChangePasswordForms = function () {
            var t = l("password");
            t &&
              t.map(function (t) {
                !(function (t) {
                  var e = this,
                    n = t.querySelector("[data-ms-member='current-password']"),
                    s = t.querySelector("[data-ms-member='new-password']");
                  n && (n.type = "password"),
                    s && (s.type = "password"),
                    t.addEventListener("submit", function (l) {
                      return o(e, void 0, void 0, function () {
                        var e, o, d, f, h;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              l.preventDefault(),
                                l.stopPropagation(),
                                (0, u.showLoader)(),
                                (i.label = 1);
                            case 1:
                              return (
                                i.trys.push([1, 6, , 7]),
                                (e = void 0),
                                (o = c.default.getCachedMember()).auth
                                  .hasPassword
                                  ? [
                                      4,
                                      (0, a.default.methods.updateMemberAuth)({
                                        oldPassword: n.value,
                                        newPassword: s.value,
                                      }),
                                    ]
                                  : [3, 3]
                              );
                            case 2:
                              return (
                                (d = i.sent()._internalUseOnly.message),
                                (e = d),
                                [3, 5]
                              );
                            case 3:
                              return [
                                4,
                                (0, a.default.methods.setPassword)({
                                  password: s.value,
                                }),
                              ];
                            case 4:
                              (d = i.sent()._internalUseOnly.message),
                                (e = d),
                                (f = o.auth),
                                c.default.mergeMember({
                                  auth: r(r({}, f), { hasPassword: !0 }),
                                }),
                                (i.label = 5);
                            case 5:
                              return (
                                (0, u.hideLoader)(),
                                a.default.methods._showMessage(e, !1),
                                setTimeout(function () {
                                  var e = t.getAttribute("redirect");
                                  e && (window.location.href = e);
                                }, 1500),
                                n && (n.value = ""),
                                s && (s.value = ""),
                                [3, 7]
                              );
                            case 6:
                              return (
                                (h = i.sent()),
                                console.log(h),
                                (0, u.hideLoader)(),
                                h.message &&
                                  a.default.methods._showMessage(h.message, !0),
                                [3, 7]
                              );
                            case 7:
                              return [2];
                          }
                        });
                      });
                    });
                })(t);
              });
          });
      },
      6842: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          i =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  s.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return s;
            },
          s =
            (this && this.__spreadArray) ||
            function (t, e, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                  (!r && o in e) ||
                    (r || (r = Array.prototype.slice.call(e, 0, o)),
                    (r[o] = e[o]));
              return t.concat(r || Array.prototype.slice.call(e));
            },
          a =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.protectPages =
            e.removeContent =
            e.initCSS =
            e.getHiddenElements =
              void 0);
        var c = n(7723),
          u = n(6135),
          l = a(n(2286)),
          d = a(n(123)),
          f = n(6797);
        (e.getHiddenElements = function () {
          var t = l.default.getRestrictedGroupsCache(),
            e = d.default.getCachedMember(),
            n = [],
            r = e ? c.MemberAttrs : c.NonMemberAttrs;
          n.push.apply(n, s([], i(r), !1));
          var o = (0, f.getDynamicContent)(e);
          if ((n.push.apply(n, s([], i(o), !1)), t)) {
            var a = t.map(function (t) {
              var e = t.key,
                n = t.activeMemberHasAccess;
              return Boolean(n)
                ? "[data-ms-content='!".concat(e, "']")
                : "[data-ms-content='".concat(e, "']");
            });
            n = n.concat.apply(n, s([], i(a), !1));
          }
          return n;
        }),
          (e.initCSS = function () {
            return r(void 0, void 0, void 0, function () {
              function t() {
                var t = (0, e.getHiddenElements)();
                return "".concat(t, " {display: none !important;}");
              }
              var n, r, i, s, a, c, u;
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (n = t()),
                      (r = "".concat(n)),
                      ((i = document.createElement("style")).id =
                        "dynamic-css"),
                      i.appendChild(document.createTextNode(r)),
                      document.head.appendChild(i),
                      !0 !== l.default.forceRefetch
                        ? [3, 2]
                        : [4, l.default.getApp()]
                    );
                  case 1:
                    e.sent(),
                      (s = document.getElementById("dynamic-css")),
                      (a = t()),
                      (c = "".concat(a)),
                      ((u = document.createElement("style")).id =
                        "dynamic-css"),
                      u.appendChild(document.createTextNode(c)),
                      s.parentNode.replaceChild(u, s),
                      (e.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (e.removeContent = function () {
            return r(void 0, void 0, void 0, function () {
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return l.default.getRestrictedGroupsCache() &&
                      !0 !== l.default.forceRefetch
                      ? [3, 2]
                      : [4, l.default.getApp()];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return (
                      (0, e.getHiddenElements)()
                        .map(function (t) {
                          return (0, f.getElements)(t);
                        })
                        .flat()
                        .map(function (t) {
                          (0, f.removeElement)(t);
                        }),
                      (0, f.getElements)("[data-ms-bind\\:style]").map(
                        function (t) {
                          try {
                            var e = t.getAttribute("data-ms-bind:style"),
                              n = i(e.split(":"), 2),
                              r = n[0],
                              o = n[1];
                            t.style[r] = o;
                          } catch (t) {}
                        }
                      ),
                      (0, f.getElements)("[data-ms-bind\\:class]").map(
                        function (t) {
                          try {
                            var e = t.getAttribute("data-ms-bind:class");
                            t.classList.add(e);
                          } catch (t) {}
                        }
                      ),
                      [2]
                    );
                }
              });
            });
          }),
          (e.protectPages = function () {
            return r(void 0, void 0, void 0, function () {
              function t(t) {
                return r(this, void 0, void 0, function () {
                  var e, r;
                  return o(this, function (o) {
                    return (
                      (0, u.loggerEnabled)() && console.time("checkPageAccess"),
                      (e = t.find(function (t) {
                        return t.urls.find(function (t) {
                          var e = t.filter,
                            r = t.url;
                          return "STARTS" === e ? n.startsWith(r) : n === r;
                        });
                      })),
                      (0, u.loggerEnabled)() &&
                        console.timeEnd("checkPageAccess"),
                      e &&
                        (e.activeMemberHasAccess ||
                          ((r = e.redirect.startsWith("/")
                            ? e.redirect
                            : "/".concat(e.redirect)),
                          (0, u.logger)("redirecting to", r),
                          window.location.replace(r))),
                      [2]
                    );
                  });
                });
              }
              var e, n, i, s;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (0, u.logger)("protectPages"),
                      (e = new URL(window.location.href)),
                      (n = e.pathname.replace(/^\/+/g, "")),
                      (i = l.default.getRestrictedGroupsCache()),
                      (0, u.logger)("protected pages groupsCached", i),
                      i && !l.default.forceRefetch && t(i),
                      [4, l.default.getApp()]
                    );
                  case 1:
                    return (
                      (s = r.sent()),
                      (0, u.logger)("protected pages awaited app", s),
                      (null == s ? void 0 : s.contentGroups) &&
                        t(s.contentGroups),
                      [2]
                    );
                }
              });
            });
          });
      },
      6135: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.loggerEnabled = e.logger = void 0),
          (e.logger = function (t, e) {
            window.localStorage.getItem("ms_debug") &&
              (e ? console.log(t, e) : console.log(t));
          }),
          (e.loggerEnabled = function () {
            return !!window.localStorage.getItem("ms_debug");
          });
      },
      2286: function (t, e, n) {
        "use strict";
        var r,
          o,
          i,
          s =
            (this && this.__assign) ||
            function () {
              return (
                (s =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                s.apply(this, arguments)
              );
            },
          a =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          c =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          u =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l,
          d = u(n(345)),
          f = n(1701),
          h = n(6135),
          p = "undefined" != typeof memberstackConfig ? memberstackConfig : {},
          m =
            (null === (r = document.querySelector("[data-memberstack-key]")) ||
            void 0 === r
              ? void 0
              : r.getAttribute("data-memberstack-key")) ||
            (null == p ? void 0 : p.publicKey),
          v =
            (null === (o = document.querySelector("[data-memberstack-app]")) ||
            void 0 === o
              ? void 0
              : o.getAttribute("data-memberstack-app")) ||
            (null == p ? void 0 : p.appId),
          g =
            Boolean(document.querySelector("[data-memberstack-use-cookies]")) ||
            (null == p ? void 0 : p.useCookies),
          b =
            Boolean(
              document.querySelector("[data-memberstack-set-cookie-on-root]")
            ) || (null == p ? void 0 : p.setCookieOnRootDomain),
          w =
            (null ===
              (i = document.querySelector("[data-memberstack-domain]")) ||
            void 0 === i
              ? void 0
              : i.getAttribute("data-memberstack-domain")) ||
            (null == p ? void 0 : p.domain),
          y =
            ((null === window || void 0 === window
              ? void 0
              : window.ms_session_duration_days) ||
              null == p ||
              p.sessionDurationDays,
            d.default.init(
              s(
                s(
                  s({ publicKey: m, appId: v }, g && { useCookies: g }),
                  b && { setCookieOnRootDomain: b }
                ),
                w && { domain: w }
              )
            )),
          _ = (function () {
            function t() {
              var t = window.localStorage.getItem("ms_groups");
              this.restrictedGroups = t ? JSON.parse(t) : null;
              var e = new URLSearchParams(window.location.search);
              (this.forceRefetch = Boolean(e.get("forceRefetch"))),
                (this.methods = y),
                (this._selectedPlan = window.sessionStorage.getItem("ms_plan")),
                (this._couponIdViaBtn =
                  window.sessionStorage.getItem("ms_coupon_btn")),
                (this._couponIdViaLink =
                  window.localStorage.getItem("ms_coupon_link")),
                Boolean(e.get("couponId")) &&
                  this.setCouponViaLink(e.get("couponId")),
                Boolean(e.get("fromCheckout"))
                  ? (this.clearPrice(), this.clearCoupon())
                  : (this._selectedPrice =
                      window.sessionStorage.getItem("ms_price")),
                this.initialAppMemberRefetch();
            }
            return (
              (t.prototype.setPlan = function (t) {
                (this._selectedPlan = t),
                  window.sessionStorage.setItem("ms_plan", t),
                  this.clearPrice();
              }),
              (t.prototype.setPrice = function (t) {
                (this._selectedPrice = t),
                  window.sessionStorage.setItem("ms_price", t),
                  this.clearPlan();
              }),
              (t.prototype.setCouponViaLink = function (t) {
                (this._couponIdViaLink = t),
                  window.localStorage.setItem("ms_coupon_link", t);
              }),
              (t.prototype.setCouponViaBtn = function (t) {
                if (!t)
                  return (
                    (this._couponIdViaBtn = null),
                    void window.sessionStorage.removeItem("ms_coupon_btn")
                  );
                (this._couponIdViaBtn = t),
                  window.sessionStorage.setItem("ms_coupon_btn", t);
              }),
              (t.prototype.clearCoupon = function () {
                (this._couponIdViaBtn = null),
                  (this._couponIdViaLink = null),
                  window.sessionStorage.removeItem("ms_coupon_btn"),
                  window.localStorage.removeItem("ms_coupon_link");
              }),
              (t.prototype.clearPrice = function () {
                window.sessionStorage.removeItem("ms_price");
              }),
              (t.prototype.clearPlan = function () {
                window.sessionStorage.removeItem("ms_plan");
              }),
              Object.defineProperty(t.prototype, "selectedPlan", {
                get: function () {
                  return this._selectedPlan;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "selectedPrice", {
                get: function () {
                  return this._selectedPrice;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "couponId", {
                get: function () {
                  return this._couponIdViaBtn || this._couponIdViaLink;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.getApp = function () {
                return a(this, void 0, void 0, function () {
                  return c(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.initialAppMemberRefetch()];
                      case 1:
                        return [2, t.sent().app];
                    }
                  });
                });
              }),
              (t.prototype.handleTestModeLabel = function () {
                this.displayedTestModeLabel ||
                  "sandbox" !== this.mode ||
                  ((this.displayedTestModeLabel = !0),
                  (0, f.showTestModeLabel)());
              }),
              (t.prototype.refetchAppMember = function () {
                return a(this, void 0, void 0, function () {
                  var t;
                  return c(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (0, h.logger)("refetchAppMember"),
                          [4, this.methods.getAppAndMember()]
                        );
                      case 1:
                        return (
                          (t = e.sent().data),
                          (this.restrictedGroups = t.app.contentGroups),
                          (this.app = t.app),
                          (this.mode = t.app.mode),
                          window.localStorage.setItem(
                            "ms_groups",
                            JSON.stringify(this.restrictedGroups)
                          ),
                          (0, h.logger)("refetchAppMember DONE"),
                          "sandbox" === this.mode && this.handleTestModeLabel(),
                          [2, t]
                        );
                    }
                  });
                });
              }),
              (t.prototype.mergeApp = function (t) {
                return a(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return (
                      (this.app = s(s({}, this.app), t)),
                      (this.restrictedGroups = this.app.contentGroups),
                      window.localStorage.setItem(
                        "ms_groups",
                        JSON.stringify(this.restrictedGroups)
                      ),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.initialAppMemberRefetch = function () {
                return (
                  (0, h.logger)("initialAppMemberRefetch"),
                  l || (l = this.refetchAppMember()),
                  l
                );
              }),
              (t.prototype.getRestrictedGroupsCache = function () {
                return this.restrictedGroups;
              }),
              t
            );
          })(),
          k = new _();
        e.default = k;
      },
      123: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = s(n(2286)),
          c = new ((function () {
            function t() {
              var t = new URLSearchParams(window.location.search),
                e = t.get("member");
              this.memberTokenOverride = Boolean(t.get("memberToken"));
              var n = window.localStorage.getItem("_ms-mem");
              (this.member = n ? JSON.parse(n) : null),
                (this.persistedMemberExistsOnInit = Boolean(this.member)),
                e && this.mergeMember(JSON.parse(e)),
                e || a.default.forceRefetch;
              try {
                window.$memberstackDom.refetch = this.forceRefetch.bind(this);
              } catch (t) {
                console.error(t);
              }
              this.initialRefetch(), this.checkForCrossDomainMember();
            }
            return (
              (t.prototype.checkForCrossDomainMember = function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.initialRefetch()];
                      case 1:
                        return (
                          t.sent(),
                          !1 === this.persistedMemberExistsOnInit &&
                            this.member &&
                            window.location.reload(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.forceRefetch = function () {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, a.default.refetchAppMember()];
                      case 1:
                        return (
                          (t = e.sent()),
                          (this.member = t.member),
                          this.member ? this.saveCache() : this.purgeCache(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.initialRefetch = function () {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, a.default.initialAppMemberRefetch()];
                      case 1:
                        return (
                          (t = e.sent()),
                          (this.member = t.member),
                          this.member ? this.saveCache() : this.purgeCache(),
                          this.memberTokenOverride &&
                            (window.location.href =
                              window.location.href.split("?")[0]),
                          [2, this.member]
                        );
                    }
                  });
                });
              }),
              (t.prototype.getMember = function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.member && !a.default.forceRefetch
                          ? [2, this.member]
                          : [4, this.initialRefetch()];
                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }),
              (t.prototype.getCachedMember = function () {
                return this.member;
              }),
              (t.prototype.setMember = function (t) {
                (this.member = t), this.saveCache();
              }),
              (t.prototype.mergeMember = function (t) {
                (this.member = r(r({}, this.member), t)), this.saveCache();
              }),
              (t.prototype.saveCache = function () {
                var t = JSON.stringify(this.member);
                t && window.localStorage.setItem("_ms-mem", t);
              }),
              (t.prototype.purgeCache = function () {
                window.localStorage.removeItem("login_redirect"),
                  window.localStorage.removeItem("_ms-mem");
              }),
              t
            );
          })())();
        e.default = c;
      },
      2331: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.secureContent = void 0);
        var s = i(n(2286)),
          a = n(6797);
        e.secureContent = function () {
          document
            .querySelectorAll("[data-ms-secure-html]")
            .forEach(function (t) {
              return r(void 0, void 0, void 0, function () {
                var e;
                return o(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        [
                          4,
                          s.default.methods.getSecureContent({
                            contentId: t.getAttribute("data-ms-secure-html"),
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (e = n.sent().data),
                        (t.outerHTML = e.content),
                        (0, a.initMemberText)(),
                        [3, 3]
                      );
                    case 2:
                      return n.sent(), t.remove(), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            document
              .querySelectorAll("[data-ms-secure-link]")
              .forEach(function (t) {
                return r(void 0, void 0, void 0, function () {
                  var e;
                  return o(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            s.default.methods.getSecureContent({
                              contentId: t.getAttribute("data-ms-secure-link"),
                            }),
                          ]
                        );
                      case 1:
                        return (
                          (e = n.sent().data),
                          t.setAttribute("href", e.content),
                          t.classList.remove("ms-skeleton"),
                          [3, 3]
                        );
                      case 2:
                        return n.sent(), t.remove(), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              });
        };
      },
      6797: function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __assign =
            (this && this.__assign) ||
            function () {
              return (
                (__assign =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                __assign.apply(this, arguments)
              );
            },
          __awaiter =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          __generator =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          __read =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  s.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return s;
            },
          __spreadArray =
            (this && this.__spreadArray) ||
            function (t, e, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                  (!r && o in e) ||
                    (r || (r = Array.prototype.slice.call(e, 0, o)),
                    (r[o] = e[o]));
              return t.concat(r || Array.prototype.slice.call(e));
            },
          __importDefault =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.createFileInputElement =
            exports.showAuthDisconnectButtons =
            exports.hideAuthDisconnectButtons =
            exports.getSignupFormPlans =
            exports.getFormCustomFields =
            exports.handleRedirect =
            exports.getRemovePlansToHide =
            exports.getDynamicContent =
            exports.getElements =
            exports.removeElement =
            exports.initMemberText =
            exports.personalizeText =
            exports.hideLoader =
            exports.showLoader =
            exports.launchCheckout =
            exports.initMessageBoxes =
            exports.initLoader =
            exports.getRestrictedUrlGroups =
              void 0);
        var constants_1 = __webpack_require__(7723),
          memberstack_1 = __importDefault(__webpack_require__(2286)),
          member_1 = __importDefault(__webpack_require__(123)),
          urlGroups,
          getRestrictedUrlGroups = function () {
            return __awaiter(void 0, void 0, void 0, function () {
              var t;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return urlGroups
                      ? [3, 2]
                      : [
                          4,
                          memberstack_1.default.methods.getRestrictedUrlGroups(),
                        ];
                  case 1:
                    (t = e.sent().data), (urlGroups = t), (e.label = 2);
                  case 2:
                    return [2, urlGroups];
                }
              });
            });
          },
          loader;
        exports.getRestrictedUrlGroups = getRestrictedUrlGroups;
        var initLoader = function () {
          loader = document.querySelector("[data-ms-loader]");
        };
        exports.initLoader = initLoader;
        var initMessageBoxes = function () {
          document.querySelector("[data-ms-message='success']") &&
            (document.querySelector(
              "[data-ms-message='success']"
            ).style.display = "none"),
            document.querySelector("[data-ms-message='error']") &&
              (document.querySelector(
                "[data-ms-message='error']"
              ).style.display = "none");
        };
        exports.initMessageBoxes = initMessageBoxes;
        var launchCheckout = function (t) {
          var e = t.priceId;
          return __awaiter(void 0, void 0, void 0, function () {
            var t, n;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    r.trys.push([0, 2, , 3]),
                    (t = memberstack_1.default.couponId),
                    [
                      4,
                      memberstack_1.default.methods.purchasePlansWithCheckout(
                        __assign({ priceId: e }, t && { couponId: t })
                      ),
                    ]
                  );
                case 1:
                  return r.sent(), [3, 3];
                case 2:
                  return (
                    (n = r.sent()),
                    (0, exports.hideLoader)(),
                    memberstack_1.default.clearCoupon(),
                    memberstack_1.default.methods._showMessage(n.message, !0),
                    [3, 3]
                  );
                case 3:
                  return [2];
              }
            });
          });
        };
        exports.launchCheckout = launchCheckout;
        var showLoader = function () {
          memberstack_1.default.methods._showLoader(loader);
        };
        exports.showLoader = showLoader;
        var hideLoader = function () {
          memberstack_1.default.methods._hideLoader(loader);
        };
        exports.hideLoader = hideLoader;
        var personalizeText = function (data) {
          data.customFields || (data.customFields = {}),
            (data.customFields.id = data.id),
            (data.customFields["profile-image"] =
              data.profileImage || data.customFields["profile-image"]);
          var memberText = Array.from(
            document.querySelectorAll("[data-ms-member]")
          );
          memberText.map(function (t) {
            var e,
              n,
              r = t.getAttribute("data-ms-member"),
              o = data.customFields[r];
            if (!["signup-date"].includes(r))
              if (
                t.children.length > 0 &&
                t.querySelectorAll("[type=checkbox][data-ms-value]").length > 0
              )
                Array.from(
                  t.querySelectorAll("[type=checkbox][data-ms-value]")
                ).map(function (t) {
                  var e,
                    n = t.getAttribute("data-ms-value"),
                    r = (null == o ? void 0 : o.split(",")) || [];
                  t.checked = !!r.includes(n);
                  var i = (
                    null === (e = t.previousElementSibling) || void 0 === e
                      ? void 0
                      : e.classList.contains(
                          "w-checkbox-input--inputType-custom"
                        )
                  )
                    ? t.previousElementSibling
                    : null;
                  i &&
                    (r.includes(n)
                      ? i.classList.add("w--redirected-checked")
                      : i.classList.remove("w--redirected-checked"));
                });
              else {
                if ("IMG" === t.tagName) {
                  if (!o) return;
                  var i = t;
                  return (i.src = o), void (i.srcset = o);
                }
                if ("SELECT" !== t.tagName)
                  if (
                    "INPUT" !== t.tagName ||
                    ("checkbox" !== t.type && "radio" !== t.type)
                  ) {
                    var s =
                      "email" === r ? data.auth.email : data.customFields[r];
                    s && ((t.innerHTML = s), (t.value = s), (t.src = s));
                  } else {
                    var a = t;
                    switch (a.type) {
                      case "checkbox":
                        var c = !0 === o || "true" === o;
                        a.checked = !!c;
                        var u = (
                          null === (e = a.previousElementSibling) ||
                          void 0 === e
                            ? void 0
                            : e.classList.contains(
                                "w-checkbox-input--inputType-custom"
                              )
                        )
                          ? a.previousElementSibling
                          : null;
                        u &&
                          (c
                            ? u.classList.add("w--redirected-checked")
                            : u.classList.remove("w--redirected-checked"));
                        break;
                      case "radio":
                        if (o && o === a.value) {
                          a.checked = !0;
                          var l = (
                            null === (n = a.previousElementSibling) ||
                            void 0 === n
                              ? void 0
                              : n.classList.contains(
                                  "w-form-formradioinput--inputType-custom"
                                )
                          )
                            ? a.previousElementSibling
                            : null;
                          l &&
                            (a.checked
                              ? l.classList.add("w--redirected-checked")
                              : l.classList.remove("w--redirected-checked"));
                        }
                    }
                  }
                else t.value = o;
              }
          });
          var signupDateText = Array.from(
            document.querySelectorAll("[data-ms-member^='signup-date']")
          );
          signupDateText.map(function (el) {
            var dateSelector = el.getAttribute("data-ms-member"),
              dateFunction = dateSelector.split(".")[1],
              date = dateFunction
                ? eval("new Date(data.createdAt).".concat(dateFunction))
                : new Date(data.createdAt).toDateString();
            el.innerHTML = date;
          });
        };
        exports.personalizeText = personalizeText;
        var initMemberText = function () {
          return __awaiter(void 0, void 0, void 0, function () {
            var t, e;
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, member_1.default.getMember()];
                case 1:
                  return (
                    (t = n.sent()) && (0, exports.personalizeText)(t),
                    [4, member_1.default.initialRefetch()]
                  );
                case 2:
                  return (e = n.sent())
                    ? ((0, exports.personalizeText)(e), [2])
                    : [2];
              }
            });
          });
        };
        exports.initMemberText = initMemberText;
        var removeElement = function (t) {
          var e;
          try {
            null == t || t.remove();
          } catch (n) {
            null === (e = t.parentNode) || void 0 === e || e.removeChild(t);
          }
        };
        exports.removeElement = removeElement;
        var getElements = function (t) {
          return Array.from(document.querySelectorAll(t));
        };
        exports.getElements = getElements;
        var getDynamicContent = function (t) {
          var e,
            n = [];
          return (
            t &&
              (t.planConnections.some(function (t) {
                return "FREE" === t.type;
              })
                ? n.push("[data-ms-content='!free-plans']")
                : n.push("[data-ms-content='free-plans']"),
              t.planConnections.some(function (t) {
                return "FREE" !== t.type && "CANCELED" !== t.status;
              })
                ? n.push("[data-ms-content='!paid-plans']")
                : n.push("[data-ms-content='paid-plans']"),
              t.planConnections.filter(function (t) {
                return "CANCELED" !== t.status;
              }).length > 0
                ? n.push("[data-ms-content='no-plans']")
                : n.push("[data-ms-content='!no-plans']"),
              t.planConnections.some(function (t) {
                return "TRIALING" === t.status;
              })
                ? n.push("[data-ms-content='!is-trialing']")
                : n.push("[data-ms-content='is-trialing']"),
              t.planConnections.some(function (t) {
                return (
                  "REQUIRES_PAYMENT" === t.status ||
                  "REQUIRES_AUTHENTICATION" === t.status
                );
              })
                ? n.push("[data-ms-content='!has-failed-payment']")
                : n.push("[data-ms-content='has-failed-payment']"),
              t.verified
                ? n.push(
                    "[data-ms-content='!verified']",
                    "[data-ms-action='resend-verification-email']"
                  )
                : n.push("[data-ms-content='verified']"),
              (null === (e = t.auth) || void 0 === e ? void 0 : e.hasPassword)
                ? n.push("[data-ms-content='!has-password']")
                : n.push("[data-ms-content='has-password']"),
              t.stripeCustomerId ||
                n.push("[data-ms-action='customer-portal']"),
              memberstack_1.default.selectedPrice ||
                n.push(constants_1.buttons.returnToCheckout),
              n.push.apply(
                n,
                __spreadArray(
                  [],
                  __read((0, exports.getRemovePlansToHide)()),
                  !1
                )
              )),
            n
          );
        };
        exports.getDynamicContent = getDynamicContent;
        var getRemovePlansToHide = function () {
          var t = Array.from(
            document.querySelectorAll("[data-ms-plan\\:remove]")
          );
          if (t)
            return t.map(function (t) {
              var e,
                n = t.getAttribute("data-ms-plan:remove");
              return (
                null === (e = member_1.default.getCachedMember()) ||
                void 0 === e
                  ? void 0
                  : e.planConnections.some(function (t) {
                      return t.planId === n && "CANCELED" !== t.status;
                    })
              )
                ? void 0
                : "[data-ms-plan\\:remove=".concat(n, "]");
            });
        };
        exports.getRemovePlansToHide = getRemovePlansToHide;
        var handleRedirect = function (t, e) {
          return "/" === window.location.pathname && "/" === t
            ? window.location.reload()
            : e
            ? (window.location.href = e)
            : t && window.location.pathname !== t
            ? (window.location.href = t)
            : void 0;
        };
        exports.handleRedirect = handleRedirect;
        var getFormCustomFields = function (t) {
          var e = {},
            n = Array.from(t.querySelectorAll("[data-ms-member]")).filter(
              function (t) {
                var e = t.getAttribute("data-ms-member");
                return "email" !== e && "password" !== e;
              }
            ),
            r = n.filter(function (t) {
              return (
                ("INPUT" === t.tagName ||
                  "TEXTAREA" === t.tagName ||
                  "SELECT" === t.tagName) &&
                "checkbox" !== t.type &&
                "radio" !== t.type
              );
            }),
            o = n.filter(function (t) {
              return "INPUT" === t.tagName && "checkbox" === t.type;
            }),
            i = n.filter(function (t) {
              return "INPUT" === t.tagName && "radio" === t.type;
            }),
            s = n.filter(function (t) {
              return "DIV" === t.tagName;
            });
          r.map(function (t) {
            var n = t.getAttribute("data-ms-member");
            e[n] = t.value;
          }),
            o.map(function (t) {
              var n = t.getAttribute("data-ms-member");
              e[n] = t.checked.toString();
            });
          var a = i.reduce(function (t, e) {
            return (
              (t[e.getAttribute("data-ms-member")] =
                t[e.getAttribute("data-ms-member")] || []).push(e),
              t
            );
          }, {});
          return (
            Object.keys(a).map(function (t) {
              var n = (a[t] || []).find(function (t) {
                return !0 === t.checked;
              });
              n && (e[t] = n.value);
            }),
            s.map(function (t) {
              var n = t.getAttribute("data-ms-member"),
                r = Array.from(t.querySelectorAll("[data-ms-value]"))
                  .filter(function (t) {
                    return !0 === t.checked;
                  })
                  .map(function (t) {
                    return t.getAttribute("data-ms-value");
                  });
              e[n] = r.join(",");
            }),
            e
          );
        };
        exports.getFormCustomFields = getFormCustomFields;
        var getSignupFormPlans = function (t) {
          var e = [],
            n =
              t.getAttribute("data-ms-plan") ||
              t.getAttribute("data-ms-plan:add") ||
              t.getAttribute("data-ms-plan:update");
          return (
            n
              ? "no-plan" !== n &&
                (e =
                  null == n
                    ? void 0
                    : n.split(",").map(function (t) {
                        return { planId: t };
                      }))
              : memberstack_1.default.selectedPlan &&
                (e = [{ planId: memberstack_1.default.selectedPlan }]),
            e
          );
        };
        exports.getSignupFormPlans = getSignupFormPlans;
        var hideAuthDisconnectButtons = function (t) {
          var e = Array.from(
            t.querySelectorAll("[data-ms-auth-disconnect]")
          ).map(function (t) {
            t.style.display = "none";
          });
          return Boolean(e.length > 0);
        };
        exports.hideAuthDisconnectButtons = hideAuthDisconnectButtons;
        var showAuthDisconnectButtons = function (t) {
          Array.from(t.querySelectorAll("[data-ms-auth-disconnect]")).map(
            function (t) {
              t.style.removeProperty("display");
            }
          );
        };
        exports.showAuthDisconnectButtons = showAuthDisconnectButtons;
        var createFileInputElement = function () {
          var t = document.createElement("input");
          return (
            t.setAttribute("required", ""),
            t.setAttribute("type", "file"),
            t.setAttribute("accept", "image/*"),
            t.setAttribute("profile-image", "true"),
            t.setAttribute("name", "profile-image"),
            t.setAttribute("data-name", "File"),
            t.setAttribute("hidden", ""),
            t.setAttribute("tabindex", "-1"),
            t
          );
        };
        exports.createFileInputElement = createFileInputElement;
      },
      1701: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.showTestModeLabel = void 0),
          (e.showTestModeLabel = function () {
            var t =
                "ms-" +
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15),
              e = 0,
              n = function () {
                var e = ".ms-test-label, .".concat(
                    t,
                    " { z-index: 2000000; position: fixed; left: 0%; top: auto; right: 0%; bottom: 10px; width: 89px; margin-right: auto; margin-left: auto; padding: 4px 6px; -webkit-box-flex: 0; -webkit-flex: 0 0 auto; -ms-flex: 0 0 auto; flex: 0 0 auto; border: 1px solid #e4d2fd; border-radius: 4px; background-color: #f6f0fd; color: #6200ea; font-size: 14px; font-weight: 500; text-align: center; letter-spacing: -0.01em; }"
                  ),
                  n = document.createElement("style");
                n.appendChild(document.createTextNode(e)),
                  document.head.appendChild(n);
                var r = '<div class="ms-test-label '.concat(
                    t,
                    '" data-ms-test-mode-label style="display: block !important; pointer-events: none !important;"></div>'
                  ),
                  o = document.createElement("div");
                (o.innerHTML = r), document.body.appendChild(o);
              };
            n(),
              setInterval(function () {
                var r = document.querySelector(".".concat(t)),
                  o = document.querySelectorAll(".ms-test-label");
                (r.innerHTML = " "),
                  (!r || o.length >= 3) &&
                    (++e >= 3 &&
                      (window.location.href =
                        "https://www.memberstack.com/pricing"),
                    (t =
                      "ms-" +
                      Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15)),
                    n());
              }, 5e3);
          });
      },
      906: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  s.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return s;
            },
          o =
            (this && this.__spreadArray) ||
            function (t, e, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                  (!r && o in e) ||
                    (r || (r = Array.prototype.slice.call(e, 0, o)),
                    (r[o] = e[o]));
              return t.concat(r || Array.prototype.slice.call(e));
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.onAuthChange =
            e.unsetPersistedMember =
            e.updatePersistedMember =
            e.setPersistedMember =
            e.getPersistedMember =
              void 0);
        var i,
          s = n(521),
          a =
            ((i = new Map()),
            {
              subscribe: function (t, e) {
                if ("function" == typeof e) return i.set(t, e);
              },
              unsubscribe: function (t) {
                return i.delete(t);
              },
              notify: function (t) {
                return o([], r(i.values()), !1).forEach(function (e) {
                  return e(t);
                });
              },
            });
        (e.getPersistedMember = function () {
          return JSON.parse(
            null === localStorage || void 0 === localStorage
              ? void 0
              : localStorage.getItem("_ms-mem")
          );
        }),
          (e.setPersistedMember = function (t) {
            if (t) {
              var e = JSON.stringify(t);
              e &&
                (null === localStorage ||
                  void 0 === localStorage ||
                  localStorage.setItem("_ms-mem", e)),
                a.notify(t);
            }
          }),
          (e.updatePersistedMember = function (t) {
            if (t) {
              var e = JSON.stringify(t);
              e &&
                (null === localStorage ||
                  void 0 === localStorage ||
                  localStorage.setItem("_ms-mem", e));
            } else
              null === localStorage ||
                void 0 === localStorage ||
                localStorage.removeItem("_ms-mem"),
                (0, s.removeMemberToken)();
          }),
          (e.unsetPersistedMember = function () {
            null === localStorage ||
              void 0 === localStorage ||
              localStorage.removeItem("_ms-mem"),
              (0, s.removeMemberToken)(),
              a.notify(null);
          }),
          (e.onAuthChange = function (t) {
            var e = Math.floor(1e3 * Math.random());
            return (
              a.subscribe(e, t),
              {
                unsubscribe: function () {
                  return a.unsubscribe(e);
                },
              }
            );
          });
      },
      8081: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.endpoints = void 0),
          (e.endpoints = { API: "https://client.memberstack.com" });
      },
      345: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(e, n);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    }),
                    Object.defineProperty(t, r, o);
                }
              : function (t, e, n, r) {
                  void 0 === r && (r = n), (t[r] = e[n]);
                }),
          o =
            (this && this.__exportStar) ||
            function (t, e) {
              for (var n in t)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(e, n) ||
                  r(e, t, n);
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = i(n(4839));
        o(n(6351), e), (e.default = { init: s.default.init });
      },
      6362: function (t, e) {
        "use strict";
        var n,
          r =
            (this && this.__extends) ||
            ((n = function (t, e) {
              return (
                (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  }),
                n(t, e)
              );
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Class extends value " +
                    String(e) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              n(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            }),
          o =
            (this && this.__assign) ||
            function () {
              return (
                (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                o.apply(this, arguments)
              );
            },
          i =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          a =
            (this && this.__read) ||
            function (t, e) {
              var n = "function" == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                o,
                i = n.call(t),
                s = [];
              try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                  s.push(r.value);
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return s;
            },
          c =
            (this && this.__spreadArray) ||
            function (t, e, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++)
                  (!r && o in e) ||
                    (r || (r = Array.prototype.slice.call(e, 0, o)),
                    (r[o] = e[o]));
              return t.concat(r || Array.prototype.slice.call(e));
            },
          u =
            (this && this.__values) ||
            function (t) {
              var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
              if (n) return n.call(t);
              if (t && "number" == typeof t.length)
                return {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            };
        function l() {}
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var d,
          f = function (t) {
            return t;
          };
        function h(t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        }
        function p(t) {
          return t();
        }
        function m() {
          return Object.create(null);
        }
        function v(t) {
          t.forEach(p);
        }
        function g(t) {
          return "function" == typeof t;
        }
        function b(t, e) {
          return t != t
            ? e == e
            : t !== e || (t && "object" == typeof t) || "function" == typeof t;
        }
        function w(t, e) {
          return (
            d || (d = document.createElement("a")), (d.href = e), t === d.href
          );
        }
        function y(t, e, n) {
          t.$$.on_destroy.push(
            (function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              if (null == t) return l;
              var r = t.subscribe.apply(t, c([], a(e), !1));
              return r.unsubscribe
                ? function () {
                    return r.unsubscribe();
                  }
                : r;
            })(e, n)
          );
        }
        function _(t, e, n, r) {
          return t[1] && r ? h(n.ctx.slice(), t[1](r(e))) : n.ctx;
        }
        function k(t) {
          var e = {};
          for (var n in t) "$" !== n[0] && (e[n] = t[n]);
          return e;
        }
        function x(t, e) {
          var n = {};
          for (var r in ((e = new Set(e)), t))
            e.has(r) || "$" === r[0] || (n[r] = t[r]);
          return n;
        }
        var S = "undefined" != typeof window,
          P = S
            ? function () {
                return window.performance.now();
              }
            : function () {
                return Date.now();
              },
          $ = S
            ? function (t) {
                return requestAnimationFrame(t);
              }
            : l,
          C = new Set();
        function M(t) {
          C.forEach(function (e) {
            e.c(t) || (C.delete(e), e.f());
          }),
            0 !== C.size && $(M);
        }
        function L(t, e) {
          t.appendChild(e);
        }
        function T(t, e, n) {
          var r = E(t);
          if (!r.getElementById(e)) {
            var o = q("style");
            (o.id = e), (o.textContent = n), I(r, o);
          }
        }
        function E(t) {
          if (!t) return document;
          var e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
          return e && e.host ? e : t.ownerDocument;
        }
        function A(t) {
          var e = q("style");
          return I(E(t), e), e.sheet;
        }
        function I(t, e) {
          return L(t.head || t, e), e.sheet;
        }
        function O(t, e, n) {
          t.insertBefore(e, n || null);
        }
        function R(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
        function D(t, e) {
          for (var n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
        }
        function q(t) {
          return document.createElement(t);
        }
        function B(t) {
          return document.createElementNS("http://www.w3.org/2000/svg", t);
        }
        function j(t) {
          return document.createTextNode(t);
        }
        function N() {
          return j(" ");
        }
        function H() {
          return j("");
        }
        function F(t, e, n, r) {
          return (
            t.addEventListener(e, n, r),
            function () {
              return t.removeEventListener(e, n, r);
            }
          );
        }
        function U(t) {
          return function (e) {
            return e.preventDefault(), t.call(this, e);
          };
        }
        function V(t) {
          return function (e) {
            return e.stopPropagation(), t.call(this, e);
          };
        }
        function z(t, e, n) {
          null == n
            ? t.removeAttribute(e)
            : t.getAttribute(e) !== n && t.setAttribute(e, n);
        }
        function G(t, e) {
          (e = "" + e), t.data !== e && (t.data = e);
        }
        function J(t, e) {
          t.value = null == e ? "" : e;
        }
        function W(t, e, n, r) {
          null == n
            ? t.style.removeProperty(e)
            : t.style.setProperty(e, n, r ? "important" : "");
        }
        function K(t, e, n) {
          t.classList[n ? "add" : "remove"](e);
        }
        function X(t, e) {
          return new t(e);
        }
        var Z,
          Y = new Map(),
          Q = 0;
        function tt(t, e, n, r, o, i, s, a) {
          void 0 === a && (a = 0);
          for (var c = 16.666 / r, u = "{\n", l = 0; l <= 1; l += c) {
            var d = e + (n - e) * i(l);
            u += 100 * l + "%{".concat(s(d, 1 - d), "}\n");
          }
          var f = u + "100% {".concat(s(n, 1 - n), "}\n}"),
            h = "__svelte_"
              .concat(
                (function (t) {
                  for (var e = 5381, n = t.length; n--; )
                    e = ((e << 5) - e) ^ t.charCodeAt(n);
                  return e >>> 0;
                })(f),
                "_"
              )
              .concat(a),
            p = E(t),
            m =
              Y.get(p) ||
              (function (t, e) {
                var n = { stylesheet: A(e), rules: {} };
                return Y.set(t, n), n;
              })(p, t),
            v = m.stylesheet,
            g = m.rules;
          g[h] ||
            ((g[h] = !0),
            v.insertRule(
              "@keyframes ".concat(h, " ").concat(f),
              v.cssRules.length
            ));
          var b = t.style.animation || "";
          return (
            (t.style.animation = ""
              .concat(b ? "".concat(b, ", ") : "")
              .concat(h, " ")
              .concat(r, "ms linear ")
              .concat(o, "ms 1 both")),
            (Q += 1),
            h
          );
        }
        function et(t) {
          Z = t;
        }
        function nt() {
          if (!Z)
            throw new Error("Function called outside component initialization");
          return Z;
        }
        function rt(t) {
          nt().$$.on_mount.push(t);
        }
        function ot(t) {
          nt().$$.on_destroy.push(t);
        }
        var it = [],
          st = [],
          at = [],
          ct = [],
          ut = Promise.resolve(),
          lt = !1;
        function dt(t) {
          at.push(t);
        }
        function ft(t) {
          ct.push(t);
        }
        var ht,
          pt = new Set(),
          mt = 0;
        function vt() {
          if (0 === mt) {
            var t = Z;
            do {
              try {
                for (; mt < it.length; ) {
                  var e = it[mt];
                  mt++, et(e), gt(e.$$);
                }
              } catch (t) {
                throw ((it.length = 0), (mt = 0), t);
              }
              for (et(null), it.length = 0, mt = 0; st.length; ) st.pop()();
              for (var n = 0; n < at.length; n += 1) {
                var r = at[n];
                pt.has(r) || (pt.add(r), r());
              }
              at.length = 0;
            } while (it.length);
            for (; ct.length; ) ct.pop()();
            (lt = !1), pt.clear(), et(t);
          }
        }
        function gt(t) {
          if (null !== t.fragment) {
            t.update(), v(t.before_update);
            var e = t.dirty;
            (t.dirty = [-1]),
              t.fragment && t.fragment.p(t.ctx, e),
              t.after_update.forEach(dt);
          }
        }
        function bt(t, e, n) {
          var r, o, i, s, a, c, u;
          t.dispatchEvent(
            ((r = "".concat(e ? "intro" : "outro").concat(n)),
            (s = void 0 !== (i = (o = {}).bubbles) && i),
            (c = void 0 !== (a = o.cancelable) && a),
            (u = document.createEvent("CustomEvent")).initCustomEvent(
              r,
              s,
              c,
              undefined
            ),
            u)
          );
        }
        var wt,
          yt = new Set();
        function _t() {
          wt = { r: 0, c: [], p: wt };
        }
        function kt() {
          wt.r || v(wt.c), (wt = wt.p);
        }
        function xt(t, e) {
          t && t.i && (yt.delete(t), t.i(e));
        }
        function St(t, e, n, r) {
          if (t && t.o) {
            if (yt.has(t)) return;
            yt.add(t),
              wt.c.push(function () {
                yt.delete(t), r && (n && t.d(1), r());
              }),
              t.o(e);
          } else r && r();
        }
        var Pt = { duration: 0 };
        function $t(t, e, n, r) {
          var o = { direction: "both" },
            i = e(t, n, o),
            s = r ? 0 : 1,
            a = null,
            c = null,
            u = null;
          function d() {
            u &&
              (function (t, e) {
                var n = (t.style.animation || "").split(", "),
                  r = n.filter(
                    e
                      ? function (t) {
                          return t.indexOf(e) < 0;
                        }
                      : function (t) {
                          return -1 === t.indexOf("__svelte");
                        }
                  ),
                  o = n.length - r.length;
                o &&
                  ((t.style.animation = r.join(", ")),
                  (Q -= o) ||
                    $(function () {
                      Q ||
                        (Y.forEach(function (t) {
                          var e = t.stylesheet.ownerNode;
                          e && R(e);
                        }),
                        Y.clear());
                    }));
              })(t, u);
          }
          function h(t, e) {
            var n = t.b - s;
            return (
              (e *= Math.abs(n)),
              {
                a: s,
                b: t.b,
                d: n,
                duration: e,
                start: t.start,
                end: t.start + e,
                group: t.group,
              }
            );
          }
          function p(e) {
            var n,
              r = i || Pt,
              o = r.delay,
              p = void 0 === o ? 0 : o,
              m = r.duration,
              g = void 0 === m ? 300 : m,
              b = r.easing,
              w = void 0 === b ? f : b,
              y = r.tick,
              _ = void 0 === y ? l : y,
              k = r.css,
              x = { start: P() + p, b: e };
            e || ((x.group = wt), (wt.r += 1)),
              a || c
                ? (c = x)
                : (k && (d(), (u = tt(t, s, e, g, p, w, k))),
                  e && _(0, 1),
                  (a = h(x, g)),
                  dt(function () {
                    return bt(t, e, "start");
                  }),
                  (n = function (e) {
                    if (
                      (c &&
                        e > c.start &&
                        ((a = h(c, g)),
                        (c = null),
                        bt(t, a.b, "start"),
                        k &&
                          (d(), (u = tt(t, s, a.b, a.duration, 0, w, i.css)))),
                      a)
                    )
                      if (e >= a.end)
                        _((s = a.b), 1 - s),
                          bt(t, a.b, "end"),
                          c || (a.b ? d() : --a.group.r || v(a.group.c)),
                          (a = null);
                      else if (e >= a.start) {
                        var n = e - a.start;
                        (s = a.a + a.d * w(n / a.duration)), _(s, 1 - s);
                      }
                    return !(!a && !c);
                  }),
                  0 === C.size && $(M),
                  new Promise(function (t) {
                    C.add({ c: n, f: t });
                  }));
          }
          return {
            run: function (t) {
              g(i)
                ? (ht ||
                    (ht = Promise.resolve()).then(function () {
                      ht = null;
                    }),
                  ht).then(function () {
                    (i = i(o)), p(t);
                  })
                : p(t);
            },
            end: function () {
              d(), (a = c = null);
            },
          };
        }
        function Ct(t, e) {
          t.d(1), e.delete(t.key);
        }
        function Mt(t, e, n, r, o, i, s, a, c, u, l, d) {
          for (var f = t.length, h = i.length, p = f, m = {}; p--; )
            m[t[p].key] = p;
          var g = [],
            b = new Map(),
            w = new Map(),
            y = [];
          p = h;
          for (
            var _ = function () {
              var t = d(o, i, p),
                a = n(t),
                c = s.get(a);
              c
                ? r &&
                  y.push(function () {
                    return c.p(t, e);
                  })
                : (c = u(a, t)).c(),
                b.set(a, (g[p] = c)),
                (a in m) && w.set(a, Math.abs(p - m[a]));
            };
            p--;

          )
            _();
          var k = new Set(),
            x = new Set();
          function S(t) {
            xt(t, 1), t.m(a, l), s.set(t.key, t), (l = t.first), h--;
          }
          for (; f && h; ) {
            var P = g[h - 1],
              $ = t[f - 1],
              C = P.key,
              M = $.key;
            P === $
              ? ((l = P.first), f--, h--)
              : b.has(M)
              ? !s.has(C) || k.has(C)
                ? S(P)
                : x.has(M)
                ? f--
                : w.get(C) > w.get(M)
                ? (x.add(C), S(P))
                : (k.add(M), f--)
              : (c($, s), f--);
          }
          for (; f--; ) ($ = t[f]), b.has($.key) || c($, s);
          for (; h; ) S(g[h - 1]);
          return v(y), g;
        }
        function Lt(t, e, n) {
          var r = t.$$.props[e];
          void 0 !== r && ((t.$$.bound[r] = n), n(t.$$.ctx[r]));
        }
        function Tt(t) {
          t && t.c();
        }
        function Et(t, e, n, r) {
          var o = t.$$,
            i = o.fragment,
            s = o.after_update;
          i && i.m(e, n),
            r ||
              dt(function () {
                var e,
                  n = t.$$.on_mount.map(p).filter(g);
                t.$$.on_destroy
                  ? (e = t.$$.on_destroy).push.apply(e, c([], a(n), !1))
                  : v(n),
                  (t.$$.on_mount = []);
              }),
            s.forEach(dt);
        }
        function At(t, e) {
          var n,
            r,
            o,
            i = t.$$;
          null !== i.fragment &&
            ((n = i.after_update),
            (r = []),
            (o = []),
            at.forEach(function (t) {
              return -1 === n.indexOf(t) ? r.push(t) : o.push(t);
            }),
            o.forEach(function (t) {
              return t();
            }),
            (at = r),
            v(i.on_destroy),
            i.fragment && i.fragment.d(e),
            (i.on_destroy = i.fragment = null),
            (i.ctx = []));
        }
        function It(t, e, n, r, o, i, s, a) {
          void 0 === a && (a = [-1]);
          var c = Z;
          et(t);
          var u = (t.$$ = {
            fragment: null,
            ctx: [],
            props: i,
            update: l,
            not_equal: o,
            bound: m(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(e.context || (c ? c.$$.context : [])),
            callbacks: m(),
            dirty: a,
            skip_bound: !1,
            root: e.target || c.$$.root,
          });
          s && s(u.root);
          var d = !1;
          if (
            ((u.ctx = n
              ? n(t, e.props || {}, function (e, n) {
                  for (var r = [], i = 2; i < arguments.length; i++)
                    r[i - 2] = arguments[i];
                  var s = r.length ? r[0] : n;
                  return (
                    u.ctx &&
                      o(u.ctx[e], (u.ctx[e] = s)) &&
                      (!u.skip_bound && u.bound[e] && u.bound[e](s),
                      d &&
                        (function (t, e) {
                          -1 === t.$$.dirty[0] &&
                            (it.push(t),
                            lt || ((lt = !0), ut.then(vt)),
                            t.$$.dirty.fill(0)),
                            (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                        })(t, e)),
                    n
                  );
                })
              : []),
            u.update(),
            (d = !0),
            v(u.before_update),
            (u.fragment = !!r && r(u.ctx)),
            e.target)
          ) {
            if (e.hydrate) {
              var f = (function (t) {
                return Array.from(t.childNodes);
              })(e.target);
              u.fragment && u.fragment.l(f), f.forEach(R);
            } else u.fragment && u.fragment.c();
            e.intro && xt(t.$$.fragment),
              Et(t, e.target, e.anchor, e.customElement),
              vt();
          }
          et(c);
        }
        var Ot = (function () {
            function t() {}
            return (
              (t.prototype.$destroy = function () {
                At(this, 1), (this.$destroy = l);
              }),
              (t.prototype.$on = function (t, e) {
                if (!g(e)) return l;
                var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                return (
                  n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                  }
                );
              }),
              (t.prototype.$set = function (t) {
                var e;
                this.$$set &&
                  ((e = t), 0 !== Object.keys(e).length) &&
                  ((this.$$.skip_bound = !0),
                  this.$$set(t),
                  (this.$$.skip_bound = !1));
              }),
              t
            );
          })(),
          Rt = [];
        function Dt(t, e) {
          var n;
          void 0 === e && (e = l);
          var r = new Set();
          function o(e) {
            var o, i;
            if (b(t, e) && ((t = e), n)) {
              var s = !Rt.length;
              try {
                for (var a = u(r), c = a.next(); !c.done; c = a.next()) {
                  var l = c.value;
                  l[1](), Rt.push(l, t);
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  c && !c.done && (i = a.return) && i.call(a);
                } finally {
                  if (o) throw o.error;
                }
              }
              if (s) {
                for (var d = 0; d < Rt.length; d += 2) Rt[d][0](Rt[d + 1]);
                Rt.length = 0;
              }
            }
          }
          return {
            set: o,
            update: function (e) {
              o(e(t));
            },
            subscribe: function (i, s) {
              void 0 === s && (s = l);
              var a = [i, s];
              return (
                r.add(a),
                1 === r.size && (n = e(o) || l),
                i(t),
                function () {
                  r.delete(a), 0 === r.size && n && (n(), (n = null));
                }
              );
            },
          };
        }
        var qt = Dt({
            initialValue: !0,
            customFields: [],
            isPaid: !1,
            branding: { logo: "", colors: { lightMode: {} } },
            authProviders: [],
            additionalAuthMethods: {
              passwordless: { enabled: !1, isDefault: !1 },
            },
          }),
          Bt = Dt({ text: {} }),
          jt = function (t) {
            return { matches: 1 & t };
          },
          Nt = function (t) {
            return { matches: t[0] };
          };
        function Ht(t) {
          var e,
            n = t[4].default,
            r = (function (t, e, n, r) {
              if (t) {
                var o = _(t, e, n, r);
                return t[0](o);
              }
            })(n, t, t[3], Nt);
          return {
            c: function () {
              r && r.c();
            },
            m: function (t, n) {
              r && r.m(t, n), (e = !0);
            },
            p: function (t, o) {
              var i = a(o, 1)[0];
              r &&
                r.p &&
                (!e || 9 & i) &&
                (function (t, e, n, r, o, i) {
                  if (o) {
                    var s = _(e, n, r, i);
                    t.p(s, o);
                  }
                })(
                  r,
                  n,
                  t,
                  t[3],
                  e
                    ? (function (t, e, n, r) {
                        if (t[2] && r) {
                          var o = t[2](r(n));
                          if (void 0 === e.dirty) return o;
                          if ("object" == typeof o) {
                            for (
                              var i = [],
                                s = Math.max(e.dirty.length, o.length),
                                a = 0;
                              a < s;
                              a += 1
                            )
                              i[a] = e.dirty[a] | o[a];
                            return i;
                          }
                          return e.dirty | o;
                        }
                        return e.dirty;
                      })(n, t[3], i, jt)
                    : (function (t) {
                        if (t.ctx.length > 32) {
                          for (
                            var e = [], n = t.ctx.length / 32, r = 0;
                            r < n;
                            r++
                          )
                            e[r] = -1;
                          return e;
                        }
                        return -1;
                      })(t[3]),
                  Nt
                );
            },
            i: function (t) {
              e || (xt(r, t), (e = !0));
            },
            o: function (t) {
              St(r, t), (e = !1);
            },
            d: function (t) {
              r && r.d(t);
            },
          };
        }
        function Ft(t, e, n) {
          var r,
            o,
            i = e.$$slots,
            s = void 0 === i ? {} : i,
            a = e.$$scope,
            c = e.query,
            u = !1,
            l = !1;
          function d() {
            r && o && r.removeListener(o);
          }
          return (
            rt(function () {
              return (
                n(2, (u = !0)),
                function () {
                  d();
                }
              );
            }),
            (t.$$set = function (t) {
              "query" in t && n(1, (c = t.query)),
                "$$scope" in t && n(3, (a = t.$$scope));
            }),
            (t.$$.update = function () {
              6 & t.$$.dirty &&
                u &&
                (d(),
                (function (t) {
                  (r = window.matchMedia(t)),
                    (o = function (t) {
                      return n(0, (l = t.matches));
                    }),
                    r.addListener(o),
                    n(0, (l = r.matches));
                })(c));
            }),
            [l, c, u, a, s]
          );
        }
        var Ut = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Ft, Ht, b, { query: 1 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function Vt(t) {
          var e, n, r;
          return {
            c: function () {
              (e = B("svg")),
                (n = B("path")),
                z((r = B("animateTransform")), "attributeName", "transform"),
                z(r, "attributeType", "xml"),
                z(r, "dur", "0.6s"),
                z(r, "from", "0 25 25"),
                z(r, "repeatCount", "indefinite"),
                z(r, "to", "360 25 25"),
                z(r, "type", "rotate"),
                z(n, "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "m43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"
                ),
                z(e, "width", "40px"),
                z(e, "height", "40px"),
                z(e, "enable-background", "new 0 0 50 50"),
                W(e, "z-index", "1000000"),
                z(e, "version", "1.1"),
                z(e, "viewBox", "0 0 50 50"),
                z(e, "xml:space", "preserve"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, o) {
              O(t, e, o), L(e, n), L(n, r);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var zt = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Vt, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Gt(t) {
          var e, n, r;
          return (
            (n = new zt({})),
            {
              c: function () {
                (e = q("div")), Tt(n.$$.fragment), z(e, "class", "ms__loader");
              },
              m: function (t, o) {
                O(t, e, o), Et(n, e, null), (r = !0);
              },
              p: l,
              i: function (t) {
                r || (xt(n.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        var Jt = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Gt, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Wt(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(n, "shape-rendering", "geometricPrecision"),
                z(
                  n,
                  "d",
                  "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                ),
                z(e, "fill", "none"),
                W(e, "width", "100%"),
                z(e, "viewBox", "0 0 14 14"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Kt = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Wt, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Xt(t) {
          var e, n, r, o, i, s;
          return (
            (r = new Kt({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("button")),
                  Tt(r.$$.fragment),
                  z(e, "class", "ms-modal__close");
              },
              m: function (a, c) {
                O(a, e, c),
                  L(e, n),
                  Et(r, n, null),
                  (o = !0),
                  i ||
                    ((s = F(n, "click", function () {
                      g(t[0]) && t[0].apply(this, arguments);
                    })),
                    (i = !0));
              },
              p: function (e, n) {
                a(n, 1)[0], (t = e);
              },
              i: function (t) {
                o || (xt(r.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(r.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                t && R(e), At(r), (i = !1), s();
              },
            }
          );
        }
        function Zt(t, e, n) {
          var r = e.closeModal;
          return (
            (t.$$set = function (t) {
              "closeModal" in t && n(0, (r = t.closeModal));
            }),
            [r]
          );
        }
        var Yt = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Zt, Xt, b, { closeModal: 0 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function Qt(t) {
          var e, n, r, o, i, s, a;
          return {
            c: function () {
              (e = B("svg")),
                (n = B("path")),
                (r = B("path")),
                (o = B("path")),
                (i = B("path")),
                (s = B("path")),
                (a = B("path")),
                z(
                  n,
                  "d",
                  "m259.078 190.582 16.797-39.611c7.315-20.421 26.982-34.665 49.897-34.665 13.187 0 25.344 4.817 34.6 12.818l32.818 73.118c9.656 21.709-.097 47.144-21.786 56.809-21.688 9.666-47.097-.098-56.753-21.807l-38.573-86.723-17 40.088v-.027Z"
                ),
                z(n, "fill", "#2AA8FF"),
                z(
                  r,
                  "d",
                  "m111.31 169.64 8.002-18.679c-7.22-20.585-26.82-35.345-49.866-35.345-12.678 0-24.901 4.865-34.007 12.314 6.6063-2.796 14.34-3.575 21.988-3.575 26.999 0 49.435 19.445 53.884 45.285z"
                ),
                z(
                  o,
                  "d",
                  "m111.31 169.64-28.66 68.126c-9.2762 21.875-34.511 32.081-56.365 22.795-21.853-9.285-32.049-34.545-22.773-56.42l31.925-76.211c6.7448-2.988 14.142-3.575 21.988-3.575 27.086 0 49.537 19.321 53.884 45.285z"
                ),
                z(o, "fill", "#393939"),
                z(
                  i,
                  "d",
                  "m197.57 115.46-39.756-89.506c-7.148-16.07-22.929-25.595-39.443-25.537-16.786-0.058576-32.766 9.7896-39.736 26.227l-43.199 101.28c9.1064-7.45 21.329-12.314 34.008-12.314 23.046 0 42.646 14.76 49.866 35.345l0.093 0.337c5.784 1.658 11.893 2.546 18.21 2.546 26.578 0 49.487-15.722 59.958-38.382z"
                ),
                z(i, "fill", "#017ACE"),
                z(
                  s,
                  "d",
                  "m197.57 115.46c-10.071 21.796-31.651 37.172-56.934 38.314-1.052 0.05-2.11 0.075-3.175 0.075-6.316 0-12.425-0.888-18.21-2.546l38.425 86.387c3.996 8.986 10.692 15.926 18.706 20.288 1.908 1.196 3.935 2.257 6.073 3.165 21.853 9.286 47.088-0.92 56.364-22.795l37.055-87.381c7.315-20.421 26.982-34.665 49.896-34.665 13.188 0 25.345 4.817 34.601 12.818l-45.994-103.17c-7.148-16.07-22.929-25.595-39.442-25.537-16.786-0.058576-32.767 9.7896-39.737 26.227l-37.628 88.816z"
                ),
                z(s, "fill", "#AEDEFF"),
                z(
                  a,
                  "d",
                  "m325.77 116.31c-22.915 0-42.379 13.795-49.694 34.216l8.919 20.052c5.873-25.763 28.931-44.989 56.481-44.989 6.67 0 12.931 1.465 18.894 3.539-9.256-8-21.413-12.818-34.6-12.818z"
                ),
                z(a, "fill", "#2D91D7"),
                W(e, "width", "100%"),
                z(e, "viewBox", "0 0 397 265"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, c) {
              O(t, e, c), L(e, n), L(e, r), L(e, o), L(e, i), L(e, s), L(e, a);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var te = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Qt, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function ee(t) {
          var e, n;
          return (
            (e = new te({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: l,
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function ne(t) {
          var e, n, r;
          return {
            c: function () {
              w((e = q("img")).src, (n = t[0].branding.logo)) || z(e, "src", n),
                z(e, "alt", (r = t[0].name)),
                z(e, "data-cy", "logo");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            p: function (t, o) {
              1 & o && !w(e.src, (n = t[0].branding.logo)) && z(e, "src", n),
                1 & o && r !== (r = t[0].name) && z(e, "alt", r);
            },
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        function re(t) {
          var e,
            n,
            r,
            o,
            i = [ne, ee],
            s = [];
          function c(t, e) {
            return t[0].branding.logo ? 0 : 1;
          }
          return (
            (n = c(t)),
            (r = s[n] = i[n](t)),
            {
              c: function () {
                (e = q("figure")), r.c(), z(e, "class", "ms-modal__figure");
              },
              m: function (t, r) {
                O(t, e, r), s[n].m(e, null), (o = !0);
              },
              p: function (t, o) {
                var u = a(o, 1)[0],
                  l = n;
                (n = c(t)) === l
                  ? s[n].p(t, u)
                  : (_t(),
                    St(s[l], 1, 1, function () {
                      s[l] = null;
                    }),
                    kt(),
                    (r = s[n]) ? r.p(t, u) : (r = s[n] = i[n](t)).c(),
                    xt(r, 1),
                    r.m(e, null));
              },
              i: function (t) {
                o || (xt(r), (o = !0));
              },
              o: function (t) {
                St(r), (o = !1);
              },
              d: function (t) {
                t && R(e), s[n].d();
              },
            }
          );
        }
        function oe(t, e, n) {
          var r = {};
          return (
            qt.subscribe(function (t) {
              n(0, (r = t));
            }),
            [r]
          );
        }
        var ie = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, oe, re, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function se(t) {
          var e, n, r;
          return (
            (n = new zt({})),
            {
              c: function () {
                (e = q("button")),
                  Tt(n.$$.fragment),
                  z(e, "class", "ms-form__button"),
                  z(e, "type", "button"),
                  W(e, "background-color", t[2]),
                  (e.disabled = !0);
              },
              m: function (t, o) {
                O(t, e, o), Et(n, e, null), (r = !0);
              },
              p: function (t, n) {
                (!r || 4 & n) && W(e, "background-color", t[2]);
              },
              i: function (t) {
                r || (xt(n.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        function ae(t) {
          var e, n;
          return {
            c: function () {
              (e = q("button")),
                (n = j(t[0])),
                z(e, "class", "ms-form__button"),
                z(e, "type", "submit"),
                W(e, "background-color", t[2]);
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: function (t, r) {
              1 & r && G(n, t[0]), 4 & r && W(e, "background-color", t[2]);
            },
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        function ce(t) {
          var e,
            n,
            r,
            o,
            i = [ae, se],
            s = [];
          function c(t, e) {
            return t[1] ? 1 : 0;
          }
          return (
            (n = c(t)),
            (r = s[n] = i[n](t)),
            {
              c: function () {
                (e = q("div")), r.c();
              },
              m: function (t, r) {
                O(t, e, r), s[n].m(e, null), (o = !0);
              },
              p: function (t, o) {
                var u = a(o, 1)[0],
                  l = n;
                (n = c(t)) === l
                  ? s[n].p(t, u)
                  : (_t(),
                    St(s[l], 1, 1, function () {
                      s[l] = null;
                    }),
                    kt(),
                    (r = s[n]) ? r.p(t, u) : (r = s[n] = i[n](t)).c(),
                    xt(r, 1),
                    r.m(e, null));
              },
              i: function (t) {
                o || (xt(r), (o = !0));
              },
              o: function (t) {
                St(r), (o = !1);
              },
              d: function (t) {
                t && R(e), s[n].d();
              },
            }
          );
        }
        function ue(t, e, n) {
          var r;
          y(t, qt, function (t) {
            return n(3, (r = t));
          });
          var o = e.buttonText,
            i = void 0 === o ? "Submit" : o,
            s = e.isLoading,
            a = void 0 !== s && s,
            c = "rgb(41, 98, 255)";
          return (
            r.branding.colors.lightMode.primaryButton &&
              (c = r.branding.colors.lightMode.primaryButton),
            (t.$$set = function (t) {
              "buttonText" in t && n(0, (i = t.buttonText)),
                "isLoading" in t && n(1, (a = t.isLoading));
            }),
            [i, a, c]
          );
        }
        var le = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, ue, ce, b, { buttonText: 0, isLoading: 1 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function de(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z"
                ),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 20 20"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var fe = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, de, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function he(t) {
          var e, n, r, o, i;
          return (
            (n = new fe({})),
            {
              c: function () {
                (e = q("div")),
                  Tt(n.$$.fragment),
                  (r = N()),
                  (o = j(t[4])),
                  z(e, "class", "ms-form__error");
              },
              m: function (t, s) {
                O(t, e, s), Et(n, e, null), L(e, r), L(e, o), (i = !0);
              },
              p: l,
              i: function (t) {
                i || (xt(n.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        function pe(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d = t[2] && he(t);
          return {
            c: function () {
              (e = q("div")),
                (n = q("label")),
                (r = j(t[3])),
                (o = N()),
                (i = q("input")),
                (s = N()),
                d && d.c(),
                z(n, "class", "ms-form__label"),
                z(n, "for", "eml-" + t[5]),
                z(i, "class", "ms-form__input"),
                z(i, "id", "eml-" + t[5]),
                z(i, "type", "email"),
                z(i, "placeholder", t[1]),
                z(i, "name", "eml"),
                (i.required = !0),
                z(e, "class", "ms-form__group");
            },
            m: function (a, f) {
              O(a, e, f),
                L(e, n),
                L(n, r),
                L(e, o),
                L(e, i),
                J(i, t[0]),
                L(e, s),
                d && d.m(e, null),
                (c = !0),
                u ||
                  ((l = [F(i, "input", t[6]), F(i, "input", t[8])]), (u = !0));
            },
            p: function (t, n) {
              var r = a(n, 1)[0];
              (!c || 2 & r) && z(i, "placeholder", t[1]),
                1 & r && i.value !== t[0] && J(i, t[0]),
                t[2]
                  ? d
                    ? (d.p(t, r), 4 & r && xt(d, 1))
                    : ((d = he(t)).c(), xt(d, 1), d.m(e, null))
                  : d &&
                    (_t(),
                    St(d, 1, 1, function () {
                      d = null;
                    }),
                    kt());
            },
            i: function (t) {
              c || (xt(d), (c = !0));
            },
            o: function (t) {
              St(d), (c = !1);
            },
            d: function (t) {
              t && R(e), d && d.d(), (u = !1), v(l);
            },
          };
        }
        function me(t, e, n) {
          var r;
          y(t, Bt, function (t) {
            return n(9, (r = t));
          });
          var o = e.emailInputValid,
            i = void 0 !== o && o,
            s = e.emailValue,
            a = e.placeholder,
            c = void 0 === a ? "example@domain.com" : a,
            u = r.text,
            l = u.email_address || "Email Address",
            d = !1,
            f = u.email_error_message || "Please enter a valid email address",
            h = Math.random().toString(36).substring(2, 10);
          return (
            (t.$$set = function (t) {
              "emailInputValid" in t && n(7, (i = t.emailInputValid)),
                "emailValue" in t && n(0, (s = t.emailValue)),
                "placeholder" in t && n(1, (c = t.placeholder));
            }),
            [
              s,
              c,
              d,
              l,
              f,
              h,
              function (t) {
                !t.target.value.match(/.+@.+\..{2,}/) &&
                t.target.value.length > 0
                  ? (n(7, (i = !1)), n(2, (d = !0)))
                  : (n(7, (i = !0)), n(2, (d = !1)));
              },
              i,
              function () {
                (s = this.value), n(0, s);
              },
            ]
          );
        }
        var ve = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, me, pe, b, {
                emailInputValid: 7,
                emailValue: 0,
                placeholder: 1,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function ge(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "m11 0.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                ),
                z(e, "class", "ms-form__eye"),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 22 16"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var be = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, ge, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function we(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "m11 4c2.76 0 5 2.24 5 5 0 0.65-0.13 1.26-0.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74 0.25-3.98 0.7l2.16 2.16c0.57-0.23 1.18-0.36 1.83-0.36zm-10-2.73 2.74 2.74c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-0.3 4.38-0.84l0.42 0.42 2.93 2.92 1.27-1.27-17.73-17.73-1.27 1.27zm5.53 5.53 1.55 1.55c-0.05 0.21-0.08 0.43-0.08 0.65 0 1.66 1.34 3 3 3 0.22 0 0.44-0.03 0.65-0.08l1.55 1.55c-0.67 0.33-1.41 0.53-2.2 0.53-2.76 0-5-2.24-5-5 0-0.79 0.2-1.53 0.53-2.2zm4.31-0.78 3.15 3.15 0.02-0.16c0-1.66-1.34-3-3-3l-0.17 0.01z"
                ),
                z(e, "class", "ms-form__eye-slash"),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 22 19"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var ye = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, we, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function _e(t) {
          var e, n, r, o;
          return {
            c: function () {
              (e = q("div")),
                ((n = q("button")).textContent = "".concat(
                  t[8].forgot_password || "Forgot Password?"
                )),
                z(n, "data-cy", "forgot-password-btn"),
                z(n, "class", "ms-form__button ms-form__button--text"),
                z(n, "tabindex", "-1"),
                z(n, "type", "button"),
                z(e, "class", "ms-form__label ms-form__label--right");
            },
            m: function (i, s) {
              O(i, e, s), L(e, n), r || ((o = F(n, "click", t[14])), (r = !0));
            },
            p: l,
            d: function (t) {
              t && R(e), (r = !1), o();
            },
          };
        }
        function ke(t) {
          var e, n;
          return (
            (e = new ye({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function xe(t) {
          var e, n;
          return (
            (e = new be({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Se(t) {
          var e, n, r, o, i;
          return (
            (n = new fe({})),
            {
              c: function () {
                (e = q("div")),
                  Tt(n.$$.fragment),
                  (r = N()),
                  (o = j(t[9])),
                  z(e, "class", "ms-form__error");
              },
              m: function (t, s) {
                O(t, e, s), Et(n, e, null), L(e, r), L(e, o), (i = !0);
              },
              p: l,
              i: function (t) {
                i || (xt(n.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        function Pe(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y = t[2] && _e(t),
            _ = [xe, ke],
            k = [];
          function x(t, e) {
            return t[5] ? 1 : 0;
          }
          (h = x(t)), (p = k[h] = _[h](t));
          var S = t[6] && Se(t);
          return {
            c: function () {
              (e = q("div")),
                (n = q("div")),
                (r = q("label")),
                (o = j(t[3])),
                (i = N()),
                y && y.c(),
                (s = N()),
                (c = q("div")),
                (u = q("input")),
                (d = N()),
                (f = q("div")),
                p.c(),
                (m = N()),
                S && S.c(),
                z(r, "class", "ms-form__label"),
                z(r, "for", "psw-" + t[10]),
                z(n, "class", "ms-form__flex"),
                z(u, "data-ms-internal-password", ""),
                z(u, "class", "ms-form__input ms-form__input--password"),
                z(u, "id", "psw-" + t[10]),
                z(u, "type", t[7]),
                z(u, "placeholder", t[4]),
                (u.value = l = t[0] || ""),
                z(u, "name", "psw"),
                (u.required = !0),
                z(f, "class", "ms-form__show-toggle"),
                z(f, "id", "togglePassword"),
                z(c, "class", "ms-form__password-container"),
                z(e, "class", "ms-form__group");
            },
            m: function (a, l) {
              O(a, e, l),
                L(e, n),
                L(n, r),
                L(r, o),
                L(n, i),
                y && y.m(n, null),
                L(e, s),
                L(e, c),
                L(c, u),
                L(c, d),
                L(c, f),
                k[h].m(f, null),
                L(e, m),
                S && S.m(e, null),
                (g = !0),
                b ||
                  ((w = [F(u, "input", t[12]), F(f, "click", t[11])]),
                  (b = !0));
            },
            p: function (t, r) {
              var i = a(r, 1)[0];
              (!g || 8 & i) && G(o, t[3]),
                t[2]
                  ? y
                    ? y.p(t, i)
                    : ((y = _e(t)).c(), y.m(n, null))
                  : y && (y.d(1), (y = null)),
                (!g || 128 & i) && z(u, "type", t[7]),
                (!g || 16 & i) && z(u, "placeholder", t[4]),
                (!g || (1 & i && l !== (l = t[0] || "") && u.value !== l)) &&
                  (u.value = l);
              var s = h;
              (h = x(t)) !== s &&
                (_t(),
                St(k[s], 1, 1, function () {
                  k[s] = null;
                }),
                kt(),
                (p = k[h]) || (p = k[h] = _[h](t)).c(),
                xt(p, 1),
                p.m(f, null)),
                t[6]
                  ? S
                    ? (S.p(t, i), 64 & i && xt(S, 1))
                    : ((S = Se(t)).c(), xt(S, 1), S.m(e, null))
                  : S &&
                    (_t(),
                    St(S, 1, 1, function () {
                      S = null;
                    }),
                    kt());
            },
            i: function (t) {
              g || (xt(p), xt(S), (g = !0));
            },
            o: function (t) {
              St(p), St(S), (g = !1);
            },
            d: function (t) {
              t && R(e), y && y.d(), k[h].d(), S && S.d(), (b = !1), v(w);
            },
          };
        }
        function $e(t, e, n) {
          var r, o;
          y(t, Bt, function (t) {
            return n(15, (o = t));
          });
          var i = o.text,
            s = e.showForgotPasswordLabel,
            a = void 0 !== s && s,
            c = e.passwordInputValid,
            u = void 0 !== c && c,
            l = e.passwordLabel,
            d = void 0 === l ? i.password || "Password" : l,
            f = e.passwordPlaceholder,
            h = void 0 === f ? "Enter Password" : f,
            p = e.passwordValue,
            m = e.display,
            v = !1,
            g = i.password_error_message || "Minimum 8 characters required",
            b = !1,
            w = Math.random().toString(36).substring(2, 10);
          return (
            (t.$$set = function (t) {
              "showForgotPasswordLabel" in t &&
                n(2, (a = t.showForgotPasswordLabel)),
                "passwordInputValid" in t && n(13, (u = t.passwordInputValid)),
                "passwordLabel" in t && n(3, (d = t.passwordLabel)),
                "passwordPlaceholder" in t && n(4, (h = t.passwordPlaceholder)),
                "passwordValue" in t && n(0, (p = t.passwordValue)),
                "display" in t && n(1, (m = t.display));
            }),
            (t.$$.update = function () {
              32 & t.$$.dirty && n(7, (r = b ? "text" : "password"));
            }),
            [
              p,
              m,
              a,
              d,
              h,
              b,
              v,
              r,
              i,
              g,
              w,
              function () {
                n(5, (b = !b));
              },
              function (t) {
                n(0, (p = t.target.value)),
                  (function (t) {
                    t.target.value.length >= 8
                      ? (n(13, (u = !0)), n(6, (v = !1)))
                      : (n(13, (u = !1)), n(6, (v = !0)));
                  })(t);
              },
              u,
              function () {
                return n(1, (m = "forgot_password"));
              },
            ]
          );
        }
        var Ce = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, $e, Pe, b, {
                showForgotPasswordLabel: 2,
                passwordInputValid: 13,
                passwordLabel: 3,
                passwordPlaceholder: 4,
                passwordValue: 0,
                display: 1,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Me(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(n, "shape-rendering", "geometricPrecision"),
                z(
                  n,
                  "d",
                  "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm-2 16-4-4 1.41-1.41 2.59 2.58 6.59-6.59 1.41 1.42-8 8z"
                ),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 18 22"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Le = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Me, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Te(t) {
          var e, n, r, o, i;
          return (
            (r = new Le({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("a")),
                  Tt(r.$$.fragment),
                  (o = j(" Secured by Memberstack")),
                  z(n, "href", "https://www.memberstack.com"),
                  z(n, "target", "_blank"),
                  z(e, "class", "ms-modal__footer");
              },
              m: function (t, s) {
                O(t, e, s), L(e, n), Et(r, n, null), L(n, o), (i = !0);
              },
              i: function (t) {
                i || (xt(r.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(r.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                t && R(e), At(r);
              },
            }
          );
        }
        function Ee(t) {
          var e,
            n,
            r = !t[0].isPaid && Te();
          return {
            c: function () {
              r && r.c(), (e = H());
            },
            m: function (t, o) {
              r && r.m(t, o), O(t, e, o), (n = !0);
            },
            p: function (t, n) {
              var o = a(n, 1)[0];
              t[0].isPaid
                ? r &&
                  (_t(),
                  St(r, 1, 1, function () {
                    r = null;
                  }),
                  kt())
                : r
                ? 1 & o && xt(r, 1)
                : ((r = Te()).c(), xt(r, 1), r.m(e.parentNode, e));
            },
            i: function (t) {
              n || (xt(r), (n = !0));
            },
            o: function (t) {
              St(r), (n = !1);
            },
            d: function (t) {
              r && r.d(t), t && R(e);
            },
          };
        }
        function Ae(t, e, n) {
          var r;
          return (
            y(t, qt, function (t) {
              return n(0, (r = t));
            }),
            [r]
          );
        }
        var Ie = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Ae, Ee, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Oe(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z(
                  (n = B("path")),
                  "d",
                  "M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"
                ),
                z(e, "class", "ms-email"),
                z(e, "xmlns", "http://www.w3.org/2000/svg"),
                z(e, "viewBox", "0 0 24 24"),
                z(e, "fill", "currentColor");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Re = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return It(n, e, null, Oe, b, {}), n;
            }
            return r(e, t), e;
          })(Ot),
          De = Dt({
            passwordlessModalType: "",
            passwordlessEmail: "",
            passwordlessMode: !1,
            passwordlessCustomFields: [],
            passwordlessPlans: [],
          }),
          qe = function (t) {
            De.update(function (e) {
              return (e.passwordlessModalType = t), e;
            });
          },
          Be = function (t) {
            De.update(function (e) {
              return (e.passwordlessEmail = t), e;
            });
          },
          je = function (t) {
            De.update(function (e) {
              return (e.passwordlessMode = t), e;
            });
          };
        function Ne(t, e, n) {
          var r = t.slice();
          return (r[22] = e[n]), r;
        }
        function He(t) {
          var e, n;
          return (
            (e = new Yt({ props: { closeModal: t[1] } })),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: function (t, n) {
                var r = {};
                2 & n && (r.closeModal = t[1]), e.$set(r);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Fe(t) {
          var e, n;
          return (
            (e = new le({
              props: {
                buttonText: t[8].login_with_email || "Continue with Email",
                isLoading: t[3],
              },
            })),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: function (t, n) {
                var r = {};
                8 & n && (r.isLoading = t[3]), e.$set(r);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Ue(t) {
          var e, n, r, o, i, s;
          function a(e) {
            t[14](e);
          }
          function c(e) {
            t[15](e);
          }
          var u = {
            passwordPlaceholder: t[8].login_password_placeholder,
            "||": !0,
            showForgotPasswordLabel: !0,
          };
          return (
            void 0 !== t[5] && (u.passwordInputValid = t[5]),
            void 0 !== t[0] && (u.display = t[0]),
            (e = new Ce({ props: u })),
            st.push(function () {
              return Lt(e, "passwordInputValid", a);
            }),
            st.push(function () {
              return Lt(e, "display", c);
            }),
            (i = new le({
              props: {
                buttonText: t[8].login || "Log in",
                isLoading: t[3],
                "data-cy": "submit-button",
              },
            })),
            {
              c: function () {
                Tt(e.$$.fragment), (o = N()), Tt(i.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), O(t, o, n), Et(i, t, n), (s = !0);
              },
              p: function (t, o) {
                var s = {};
                !n &&
                  32 & o &&
                  ((n = !0),
                  (s.passwordInputValid = t[5]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    1 & o &&
                    ((r = !0),
                    (s.display = t[0]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(s);
                var a = {};
                8 & o && (a.isLoading = t[3]), i.$set(a);
              },
              i: function (t) {
                s || (xt(e.$$.fragment, t), xt(i.$$.fragment, t), (s = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), St(i.$$.fragment, t), (s = !1);
              },
              d: function (t) {
                At(e, t), t && R(o), At(i, t);
              },
            }
          );
        }
        function Ve(t) {
          var e, n, r, o;
          return {
            c: function () {
              (e = q("div")),
                ((n = q("button")).textContent = "".concat(
                  t[8].dont_have_an_account || "Don't have an account?"
                )),
                z(n, "class", "ms-form__button ms-form__button--text"),
                z(n, "type", "button"),
                z(e, "class", "ms-form__flex ms-form__flex--centered");
            },
            m: function (i, s) {
              O(i, e, s), L(e, n), r || ((o = F(n, "click", t[17])), (r = !0));
            },
            p: l,
            d: function (t) {
              t && R(e), (r = !1), o();
            },
          };
        }
        function ze(t) {
          var e, n, r, o;
          return {
            c: function () {
              (e = q("div")),
                ((n = q("button")).textContent = "".concat(
                  t[8].dont_have_an_account || "Don't have an account?"
                )),
                z(n, "class", "ms-form__button ms-form__button--text"),
                z(n, "type", "button"),
                z(e, "class", "ms-form__flex ms-form__flex--centered");
            },
            m: function (i, s) {
              O(i, e, s), L(e, n), r || ((o = F(n, "click", t[16])), (r = !0));
            },
            p: l,
            d: function (t) {
              t && R(e), (r = !1), o();
            },
          };
        }
        function Ge(t) {
          for (
            var e,
              n,
              r,
              o,
              i,
              s,
              a,
              c,
              u,
              l,
              d =
                !0 === t[7].additionalAuthMethods.passwordless.enabled && Je(t),
              f = t[7].authProviders,
              h = [],
              p = 0;
            p < f.length;
            p += 1
          )
            h[p] = Xe(Ne(t, f, p));
          return {
            c: function () {
              (e = q("div")),
                (n = q("div")),
                (r = q("div")),
                (o = N()),
                ((i = q("div")).textContent = "".concat(t[8].or || "or")),
                (s = N()),
                (a = q("div")),
                (c = N()),
                d && d.c(),
                (u = N());
              for (var l = 0; l < h.length; l += 1) h[l].c();
              z(r, "class", "ms-modal__divider-line"),
                z(i, "class", "ms-modal__divider-text"),
                z(a, "class", "ms-modal__divider-line"),
                z(n, "class", "ms-modal__social-divider"),
                z(e, "class", "ms-modal__social");
            },
            m: function (t, f) {
              O(t, e, f),
                L(e, n),
                L(n, r),
                L(n, o),
                L(n, i),
                L(n, s),
                L(n, a),
                L(e, c),
                d && d.m(e, null),
                L(e, u);
              for (var p = 0; p < h.length; p += 1) h[p] && h[p].m(e, null);
              l = !0;
            },
            p: function (t, n) {
              if (
                (!0 === t[7].additionalAuthMethods.passwordless.enabled
                  ? d
                    ? (d.p(t, n), 128 & n && xt(d, 1))
                    : ((d = Je(t)).c(), xt(d, 1), d.m(e, u))
                  : d &&
                    (_t(),
                    St(d, 1, 1, function () {
                      d = null;
                    }),
                    kt()),
                2432 & n)
              ) {
                f = t[7].authProviders;
                var r = void 0;
                for (r = 0; r < f.length; r += 1) {
                  var o = Ne(t, f, r);
                  h[r]
                    ? h[r].p(o, n)
                    : ((h[r] = Xe(o)), h[r].c(), h[r].m(e, null));
                }
                for (; r < h.length; r += 1) h[r].d(1);
                h.length = f.length;
              }
            },
            i: function (t) {
              l || (xt(d), (l = !0));
            },
            o: function (t) {
              St(d), (l = !1);
            },
            d: function (t) {
              t && R(e), d && d.d(), D(h, t);
            },
          };
        }
        function Je(t) {
          var e,
            n,
            r,
            o,
            i = [Ke, We],
            s = [];
          function a(t, e) {
            return !1 === t[6].passwordlessMode ? 0 : 1;
          }
          return (
            (n = a(t)),
            (r = s[n] = i[n](t)),
            {
              c: function () {
                (e = q("div")),
                  r.c(),
                  z(e, "class", "ms-modal__social-buttons");
              },
              m: function (t, r) {
                O(t, e, r), s[n].m(e, null), (o = !0);
              },
              p: function (t, o) {
                var c = n;
                (n = a(t)) === c
                  ? s[n].p(t, o)
                  : (_t(),
                    St(s[c], 1, 1, function () {
                      s[c] = null;
                    }),
                    kt(),
                    (r = s[n]) ? r.p(t, o) : (r = s[n] = i[n](t)).c(),
                    xt(r, 1),
                    r.m(e, null));
              },
              i: function (t) {
                o || (xt(r), (o = !0));
              },
              o: function (t) {
                St(r), (o = !1);
              },
              d: function (t) {
                t && R(e), s[n].d();
              },
            }
          );
        }
        function We(t) {
          var e, n, r, o;
          return {
            c: function () {
              (e = q("button")),
                ((n = q("span")).textContent = "".concat(
                  t[8].login_with_password || "Log in with Password"
                )),
                z(e, "class", "ms-modal__social-button"),
                z(e, "data-cy", "continue-with-password"),
                z(e, "type", "button");
            },
            m: function (i, s) {
              O(i, e, s), L(e, n), r || ((o = F(e, "click", t[19])), (r = !0));
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e), (r = !1), o();
            },
          };
        }
        function Ke(t) {
          var e, n, r, o, i, s, a;
          return (
            (n = new Re({})),
            {
              c: function () {
                (e = q("button")),
                  Tt(n.$$.fragment),
                  (r = N()),
                  ((o = q("span")).textContent = "".concat(
                    t[8].login_with_email || "Continue with Email"
                  )),
                  z(e, "class", "ms-modal__social-button"),
                  z(e, "data-cy", "continue-with-email"),
                  z(e, "type", "button");
              },
              m: function (c, u) {
                O(c, e, u),
                  Et(n, e, null),
                  L(e, r),
                  L(e, o),
                  (i = !0),
                  s || ((a = F(e, "click", t[18])), (s = !0));
              },
              p: l,
              i: function (t) {
                i || (xt(n.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                t && R(e), At(n), (s = !1), a();
              },
            }
          );
        }
        function Xe(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d,
            f,
            h,
            p = (t[8].continue_with || "Continue with") + "",
            m = t[22].name + "";
          function v() {
            return t[20](t[22]);
          }
          return {
            c: function () {
              (e = q("div")),
                (n = q("button")),
                (r = q("img")),
                (s = N()),
                (a = q("span")),
                (c = j(p)),
                (u = N()),
                (l = j(m)),
                (d = N()),
                w(r.src, (o = t[22].icon)) || z(r, "src", o),
                z(r, "alt", (i = t[22].name)),
                z(n, "class", "ms-modal__social-button"),
                z(n, "type", "button"),
                z(e, "class", "ms-modal__social-buttons");
            },
            m: function (t, o) {
              O(t, e, o),
                L(e, n),
                L(n, r),
                L(n, s),
                L(n, a),
                L(a, c),
                L(a, u),
                L(a, l),
                L(e, d),
                f || ((h = F(n, "click", v)), (f = !0));
            },
            p: function (e, n) {
              (t = e),
                128 & n && !w(r.src, (o = t[22].icon)) && z(r, "src", o),
                128 & n && i !== (i = t[22].name) && z(r, "alt", i),
                128 & n && m !== (m = t[22].name + "") && G(l, m);
            },
            d: function (t) {
              t && R(e), (f = !1), h();
            },
          };
        }
        function Ze(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            v,
            g,
            b,
            w,
            y,
            _,
            k = (!t[2] || !t[2].hideCloseButton) && He(t);
          function x(e) {
            t[13](e);
          }
          o = new ie({});
          var S = { placeholder: t[8].login_email_placeholder };
          void 0 !== t[4] && (S.emailInputValid = t[4]),
            (l = new ve({ props: S })),
            st.push(function () {
              return Lt(l, "emailInputValid", x);
            });
          var P = [Ue, Fe],
            $ = [];
          function C(t, e) {
            return t[6].passwordlessMode ? 1 : 0;
          }
          function M(t, e) {
            return t[2] && t[2].signup && t[2].signup.plans
              ? ze
              : t[9]
              ? Ve
              : void 0;
          }
          (h = C(t)), (p = $[h] = P[h](t));
          var T = M(t),
            E = T && T(t),
            A =
              (t[7].authProviders.length > 0 ||
                !0 === t[7].additionalAuthMethods.passwordless.enabled) &&
              Ge(t);
          return (
            (b = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  k && k.c(),
                  (n = N()),
                  (r = q("div")),
                  Tt(o.$$.fragment),
                  (i = N()),
                  ((s = q("h2")).textContent = "".concat(
                    t[8].login_to_your_account || "Login to your account"
                  )),
                  (c = N()),
                  (u = q("form")),
                  Tt(l.$$.fragment),
                  (f = N()),
                  p.c(),
                  (m = N()),
                  E && E.c(),
                  (v = N()),
                  A && A.c(),
                  (g = N()),
                  Tt(b.$$.fragment),
                  z(s, "class", "ms-modal__title"),
                  z(u, "class", "ms-form"),
                  z(u, "action", ""),
                  z(u, "method", "post"),
                  z(r, "class", "ms-modal__content"),
                  z(e, "class", "ms-modal"),
                  z(e, "id", "LoginModal");
              },
              m: function (a, d) {
                O(a, e, d),
                  k && k.m(e, null),
                  L(e, n),
                  L(e, r),
                  Et(o, r, null),
                  L(r, i),
                  L(r, s),
                  L(r, c),
                  L(r, u),
                  Et(l, u, null),
                  L(u, f),
                  $[h].m(u, null),
                  L(u, m),
                  E && E.m(u, null),
                  L(r, v),
                  A && A.m(r, null),
                  L(e, g),
                  Et(b, e, null),
                  (w = !0),
                  y || ((_ = F(u, "submit", V(U(t[10])))), (y = !0));
              },
              p: function (t, o) {
                var i = a(o, 1)[0];
                t[2] && t[2].hideCloseButton
                  ? k &&
                    (_t(),
                    St(k, 1, 1, function () {
                      k = null;
                    }),
                    kt())
                  : k
                  ? (k.p(t, i), 4 & i && xt(k, 1))
                  : ((k = He(t)).c(), xt(k, 1), k.m(e, n));
                var s = {};
                !d &&
                  16 & i &&
                  ((d = !0),
                  (s.emailInputValid = t[4]),
                  ft(function () {
                    return (d = !1);
                  })),
                  l.$set(s);
                var c = h;
                (h = C(t)) === c
                  ? $[h].p(t, i)
                  : (_t(),
                    St($[c], 1, 1, function () {
                      $[c] = null;
                    }),
                    kt(),
                    (p = $[h]) ? p.p(t, i) : (p = $[h] = P[h](t)).c(),
                    xt(p, 1),
                    p.m(u, m)),
                  T === (T = M(t)) && E
                    ? E.p(t, i)
                    : (E && E.d(1), (E = T && T(t)) && (E.c(), E.m(u, null))),
                  t[7].authProviders.length > 0 ||
                  !0 === t[7].additionalAuthMethods.passwordless.enabled
                    ? A
                      ? (A.p(t, i), 128 & i && xt(A, 1))
                      : ((A = Ge(t)).c(), xt(A, 1), A.m(r, null))
                    : A &&
                      (_t(),
                      St(A, 1, 1, function () {
                        A = null;
                      }),
                      kt());
              },
              i: function (t) {
                w ||
                  (xt(k),
                  xt(o.$$.fragment, t),
                  xt(l.$$.fragment, t),
                  xt(p),
                  xt(A),
                  xt(b.$$.fragment, t),
                  (w = !0));
              },
              o: function (t) {
                St(k),
                  St(o.$$.fragment, t),
                  St(l.$$.fragment, t),
                  St(p),
                  St(A),
                  St(b.$$.fragment, t),
                  (w = !1);
              },
              d: function (t) {
                t && R(e),
                  k && k.d(),
                  At(o),
                  At(l),
                  $[h].d(),
                  E && E.d(),
                  A && A.d(),
                  At(b),
                  (y = !1),
                  _();
              },
            }
          );
        }
        function Ye(t, e, n) {
          var r, o, a;
          y(t, De, function (t) {
            return n(6, (r = t));
          }),
            y(t, qt, function (t) {
              return n(7, (o = t));
            }),
            y(t, Bt, function (t) {
              return n(21, (a = t));
            });
          var c = e.closeModal,
            u = e.display,
            l = e.onSuccessLogin,
            d = e.params,
            f = a.text,
            h = !1,
            p = !1,
            m = !1;
          !0 === o.additionalAuthMethods.passwordless.isDefault && je(!0);
          var v = Boolean(window.ssoUI) && o.ssoSignupButtonURL;
          function g(t) {
            return i(this, void 0, void 0, function () {
              var e, r;
              return s(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      [
                        4,
                        window.$memberstackDom.loginWithProvider({
                          provider: t,
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (e = o.sent().data), l({ type: "LOGIN", data: e }), [3, 3]
                    );
                  case 2:
                    return (
                      (r = o.sent()),
                      n(3, (h = !1)),
                      window.$memberstackDom._showMessage(r.message, !0),
                      [3, 3]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }
          return (
            (t.$$set = function (t) {
              "closeModal" in t && n(1, (c = t.closeModal)),
                "display" in t && n(0, (u = t.display)),
                "onSuccessLogin" in t && n(12, (l = t.onSuccessLogin)),
                "params" in t && n(2, (d = t.params));
            }),
            [
              u,
              c,
              d,
              h,
              p,
              m,
              r,
              o,
              f,
              v,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var e, o, i, a, c;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          ((e = t.target.querySelector("[name=eml]")),
                          (o = t.target.querySelector("[name=psw]")),
                          !0 === r.passwordlessMode)
                        )
                          return [3, 5];
                        if (!p || !m) return [2];
                        n(3, (h = !0)), (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          [
                            4,
                            window.$memberstackDom.loginMemberEmailPassword(
                              { email: e.value, password: o.value },
                              { includeContentGroups: !0 }
                            ),
                          ]
                        );
                      case 2:
                        return (
                          (i = s.sent().data),
                          l({ type: "LOGIN", data: i }),
                          n(3, (h = !1)),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (a = s.sent()),
                          n(3, (h = !1)),
                          window.$memberstackDom._showMessage(a.message, !0),
                          [3, 4]
                        );
                      case 4:
                        return [3, 9];
                      case 5:
                        if (!p) return [2];
                        n(3, (h = !0)), (s.label = 6);
                      case 6:
                        return (
                          s.trys.push([6, 8, , 9]),
                          [
                            4,
                            window.$memberstackDom.sendMemberLoginPasswordlessEmail(
                              { email: e.value }
                            ),
                          ]
                        );
                      case 7:
                        return (
                          s.sent(),
                          qe("login"),
                          Be(e.value),
                          n(0, (u = "passwordless_token")),
                          n(3, (h = !1)),
                          [3, 9]
                        );
                      case 8:
                        return (
                          (c = s.sent()),
                          n(3, (h = !1)),
                          window.$memberstackDom._showMessage(c.message, !0),
                          [3, 9]
                        );
                      case 9:
                        return [2];
                    }
                  });
                });
              },
              g,
              l,
              function (t) {
                n(4, (p = t));
              },
              function (t) {
                n(5, (m = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function () {
                return n(0, (u = "signup"));
              },
              function () {
                return (window.location.href = v);
              },
              function () {
                return je(!0);
              },
              function () {
                return je(!1);
              },
              function (t) {
                return g(t.provider);
              },
            ]
          );
        }
        var Qe = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, Ye, Ze, b, {
                closeModal: 1,
                display: 0,
                onSuccessLogin: 12,
                params: 2,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function tn(t) {
          T(
            t,
            "svelte-1w8lbd8",
            ".rey-was-here.svelte-1w8lbd8{display:none !important}"
          );
        }
        function en(t, e, n) {
          var r = t.slice();
          return (r[24] = e[n]), r;
        }
        function nn(t, e, n) {
          var r = t.slice();
          return (r[27] = e[n]), (r[29] = n), r;
        }
        function rn(t) {
          var e, n;
          return (
            (e = new Yt({ props: { closeModal: t[1] } })),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: function (t, n) {
                var r = {};
                2 & n && (r.closeModal = t[1]), e.$set(r);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function on(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l = t[27].label + "";
          return {
            c: function () {
              (e = q("div")),
                (n = q("div")),
                (r = q("label")),
                (o = j(l)),
                (s = N()),
                (a = q("input")),
                z(r, "class", "ms-form__label"),
                z(r, "for", (i = t[27].key)),
                z(a, "class", "ms-form__input"),
                z(a, "data-ms-custom-field", ""),
                z(a, "type", "text"),
                z(a, "placeholder", (c = t[27].label)),
                z(a, "name", (u = t[27].key)),
                z(n, "class", "ms-form__group"),
                z(e, "class", "ms-modal__custom-field-container");
            },
            m: function (t, i) {
              O(t, e, i), L(e, n), L(n, r), L(r, o), L(n, s), L(n, a);
            },
            p: function (t, e) {
              128 & e && l !== (l = t[27].label + "") && G(o, l),
                128 & e && i !== (i = t[27].key) && z(r, "for", i),
                128 & e && c !== (c = t[27].label) && z(a, "placeholder", c),
                128 & e && u !== (u = t[27].key) && z(a, "name", u);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function sn(t) {
          var e,
            n = !0 !== t[27].hidden && on(t);
          return {
            c: function () {
              n && n.c(), (e = H());
            },
            m: function (t, r) {
              n && n.m(t, r), O(t, e, r);
            },
            p: function (t, r) {
              !0 !== t[27].hidden
                ? n
                  ? n.p(t, r)
                  : ((n = on(t)).c(), n.m(e.parentNode, e))
                : n && (n.d(1), (n = null));
            },
            d: function (t) {
              n && n.d(t), t && R(e);
            },
          };
        }
        function an(t) {
          var e, n, r;
          function o(e) {
            t[13](e);
          }
          var i = {};
          return (
            void 0 !== t[5] && (i.passwordInputValid = t[5]),
            (e = new Ce({ props: i })),
            st.push(function () {
              return Lt(e, "passwordInputValid", o);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (r = !0);
              },
              p: function (t, r) {
                var o = {};
                !n &&
                  32 & r &&
                  ((n = !0),
                  (o.passwordInputValid = t[5]),
                  ft(function () {
                    return (n = !1);
                  })),
                  e.$set(o);
              },
              i: function (t) {
                r || (xt(e.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function cn(t) {
          var e, n;
          return (
            (e = new le({
              props: { buttonText: "Continue with Email", isLoading: t[3] },
            })),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: function (t, n) {
                var r = {};
                8 & n && (r.isLoading = t[3]), e.$set(r);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function un(t) {
          var e, n;
          return (
            (e = new le({ props: { buttonText: "Sign up", isLoading: t[3] } })),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: function (t, n) {
                var r = {};
                8 & n && (r.isLoading = t[3]), e.$set(r);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function ln(t) {
          for (
            var e,
              n,
              r,
              o,
              i,
              s =
                !0 === t[7].additionalAuthMethods.passwordless.enabled && dn(t),
              a = t[7].authProviders,
              c = [],
              u = 0;
            u < a.length;
            u += 1
          )
            c[u] = pn(en(t, a, u));
          return {
            c: function () {
              (e = q("div")),
                ((n = q("div")).innerHTML =
                  '<div class="ms-modal__divider-line"></div> \n          <div class="ms-modal__divider-text">or</div> \n          <div class="ms-modal__divider-line"></div>'),
                (r = N()),
                s && s.c(),
                (o = N());
              for (var t = 0; t < c.length; t += 1) c[t].c();
              z(n, "class", "ms-modal__social-divider"),
                z(e, "class", "ms-modal__social");
            },
            m: function (t, a) {
              O(t, e, a), L(e, n), L(e, r), s && s.m(e, null), L(e, o);
              for (var u = 0; u < c.length; u += 1) c[u] && c[u].m(e, null);
              i = !0;
            },
            p: function (t, n) {
              if (
                (!0 === t[7].additionalAuthMethods.passwordless.enabled
                  ? s
                    ? (s.p(t, n), 128 & n && xt(s, 1))
                    : ((s = dn(t)).c(), xt(s, 1), s.m(e, o))
                  : s &&
                    (_t(),
                    St(s, 1, 1, function () {
                      s = null;
                    }),
                    kt()),
                1152 & n)
              ) {
                a = t[7].authProviders;
                var r = void 0;
                for (r = 0; r < a.length; r += 1) {
                  var i = en(t, a, r);
                  c[r]
                    ? c[r].p(i, n)
                    : ((c[r] = pn(i)), c[r].c(), c[r].m(e, null));
                }
                for (; r < c.length; r += 1) c[r].d(1);
                c.length = a.length;
              }
            },
            i: function (t) {
              i || (xt(s), (i = !0));
            },
            o: function (t) {
              St(s), (i = !1);
            },
            d: function (t) {
              t && R(e), s && s.d(), D(c, t);
            },
          };
        }
        function dn(t) {
          var e,
            n,
            r,
            o,
            i = [hn, fn],
            s = [];
          function a(t, e) {
            return !1 === t[6].passwordlessMode ? 0 : 1;
          }
          return (
            (n = a(t)),
            (r = s[n] = i[n](t)),
            {
              c: function () {
                (e = q("div")),
                  r.c(),
                  z(e, "class", "ms-modal__social-buttons");
              },
              m: function (t, r) {
                O(t, e, r), s[n].m(e, null), (o = !0);
              },
              p: function (t, o) {
                var c = n;
                (n = a(t)) === c
                  ? s[n].p(t, o)
                  : (_t(),
                    St(s[c], 1, 1, function () {
                      s[c] = null;
                    }),
                    kt(),
                    (r = s[n]) ? r.p(t, o) : (r = s[n] = i[n](t)).c(),
                    xt(r, 1),
                    r.m(e, null));
              },
              i: function (t) {
                o || (xt(r), (o = !0));
              },
              o: function (t) {
                St(r), (o = !1);
              },
              d: function (t) {
                t && R(e), s[n].d();
              },
            }
          );
        }
        function fn(t) {
          var e, n, r, o;
          return {
            c: function () {
              (e = q("button")),
                ((n = q("span")).textContent = "".concat(
                  t[8].signup_with_password || "Signup with Password"
                )),
                z(e, "class", "ms-modal__social-button"),
                z(e, "data-cy", "continue-with-password"),
                z(e, "type", "button");
            },
            m: function (i, s) {
              O(i, e, s), L(e, n), r || ((o = F(e, "click", t[16])), (r = !0));
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e), (r = !1), o();
            },
          };
        }
        function hn(t) {
          var e, n, r, o, i, s, a;
          return (
            (n = new Re({})),
            {
              c: function () {
                (e = q("button")),
                  Tt(n.$$.fragment),
                  (r = N()),
                  ((o = q("span")).textContent = "".concat(
                    t[8].continue_with_email || "Continue with Email"
                  )),
                  z(e, "class", "ms-modal__social-button"),
                  z(e, "data-cy", "continue-with-email"),
                  z(e, "type", "button");
              },
              m: function (c, u) {
                O(c, e, u),
                  Et(n, e, null),
                  L(e, r),
                  L(e, o),
                  (i = !0),
                  s || ((a = F(e, "click", t[15])), (s = !0));
              },
              p: l,
              i: function (t) {
                i || (xt(n.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                t && R(e), At(n), (s = !1), a();
              },
            }
          );
        }
        function pn(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d,
            f,
            h = t[24].name + "";
          function p() {
            return t[17](t[24]);
          }
          return {
            c: function () {
              (e = q("div")),
                (n = q("button")),
                (r = q("img")),
                (s = N()),
                (a = q("span")),
                (c = j("Continue with ")),
                (u = j(h)),
                (l = N()),
                w(r.src, (o = t[24].icon)) || z(r, "src", o),
                z(r, "alt", (i = t[24].name)),
                z(n, "class", "ms-modal__social-button"),
                z(n, "type", "button"),
                z(e, "class", "ms-modal__social-buttons");
            },
            m: function (t, o) {
              O(t, e, o),
                L(e, n),
                L(n, r),
                L(n, s),
                L(n, a),
                L(a, c),
                L(a, u),
                L(e, l),
                d || ((f = F(n, "click", p)), (d = !0));
            },
            p: function (e, n) {
              (t = e),
                128 & n && !w(r.src, (o = t[24].icon)) && z(r, "src", o),
                128 & n && i !== (i = t[24].name) && z(r, "alt", i),
                128 & n && h !== (h = t[24].name + "") && G(u, h);
            },
            d: function (t) {
              t && R(e), (d = !1), f();
            },
          };
        }
        function mn(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S,
            P,
            $,
            C,
            M,
            T,
            E,
            A = (!t[2] || !t[2].hideCloseButton) && rn(t);
          o = new ie({});
          for (var I = t[7].customFields, B = [], j = 0; j < I.length; j += 1)
            B[j] = sn(nn(t, I, j));
          function H(e) {
            t[12](e);
          }
          var G = {};
          void 0 !== t[4] && (G.emailInputValid = t[4]),
            (d = new ve({ props: G })),
            st.push(function () {
              return Lt(d, "emailInputValid", H);
            });
          var J = !1 === t[6].passwordlessMode && an(t),
            W = [un, cn],
            K = [];
          function X(t, e) {
            return !1 === t[6].passwordlessMode ? 0 : 1;
          }
          (y = X(t)), (_ = K[y] = W[y](t));
          var Z =
            (t[7].authProviders.length > 0 ||
              !0 === t[7].additionalAuthMethods.passwordless.enabled) &&
            ln(t);
          return (
            (C = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  A && A.c(),
                  (n = N()),
                  (r = q("div")),
                  Tt(o.$$.fragment),
                  (i = N()),
                  ((s = q("h2")).textContent = "Create an account"),
                  (c = N()),
                  (u = q("form"));
                for (var t = 0; t < B.length; t += 1) B[t].c();
                (l = N()),
                  Tt(d.$$.fragment),
                  (h = N()),
                  ((p = q("div")).innerHTML =
                    '<label class="ms-form__label" for="Rey">Rey was here</label> \n        <input class="ms-form__input" type="text" placeholder="Rey&#39;s Favorite Color" name="Rey"/>'),
                  (m = N()),
                  J && J.c(),
                  (g = N()),
                  (b = q("div")),
                  (w = N()),
                  _.c(),
                  (k = N()),
                  (x = q("div")),
                  ((S = q("button")).textContent = "Already have an account?"),
                  (P = N()),
                  Z && Z.c(),
                  ($ = N()),
                  Tt(C.$$.fragment),
                  z(s, "class", "ms-modal__title"),
                  z(p, "class", "ms-form__group rey-was-here svelte-1w8lbd8"),
                  z(b, "id", "hcaptcha"),
                  z(b, "class", "h-captcha"),
                  z(
                    S,
                    "class",
                    "ms-form__button ms-form__button--text ms-form__button--top-spacing"
                  ),
                  z(x, "class", "ms-form__flex ms-form__flex--centered"),
                  z(u, "class", "ms-form"),
                  z(u, "action", ""),
                  z(u, "method", "post"),
                  z(r, "class", "ms-modal__content"),
                  z(e, "class", "ms-modal"),
                  z(e, "id", "SignupModal");
              },
              m: function (a, f) {
                O(a, e, f),
                  A && A.m(e, null),
                  L(e, n),
                  L(e, r),
                  Et(o, r, null),
                  L(r, i),
                  L(r, s),
                  L(r, c),
                  L(r, u);
                for (var v = 0; v < B.length; v += 1) B[v] && B[v].m(u, null);
                L(u, l),
                  Et(d, u, null),
                  L(u, h),
                  L(u, p),
                  L(u, m),
                  J && J.m(u, null),
                  L(u, g),
                  L(u, b),
                  L(u, w),
                  K[y].m(u, null),
                  L(u, k),
                  L(u, x),
                  L(x, S),
                  L(r, P),
                  Z && Z.m(r, null),
                  L(e, $),
                  Et(C, e, null),
                  (M = !0),
                  T ||
                    ((E = [F(S, "click", t[14]), F(u, "submit", V(U(t[9])))]),
                    (T = !0));
              },
              p: function (t, o) {
                var i = a(o, 1)[0];
                if (
                  (t[2] && t[2].hideCloseButton
                    ? A &&
                      (_t(),
                      St(A, 1, 1, function () {
                        A = null;
                      }),
                      kt())
                    : A
                    ? (A.p(t, i), 4 & i && xt(A, 1))
                    : ((A = rn(t)).c(), xt(A, 1), A.m(e, n)),
                  128 & i)
                ) {
                  I = t[7].customFields;
                  var s = void 0;
                  for (s = 0; s < I.length; s += 1) {
                    var c = nn(t, I, s);
                    B[s]
                      ? B[s].p(c, i)
                      : ((B[s] = sn(c)), B[s].c(), B[s].m(u, l));
                  }
                  for (; s < B.length; s += 1) B[s].d(1);
                  B.length = I.length;
                }
                var h = {};
                !f &&
                  16 & i &&
                  ((f = !0),
                  (h.emailInputValid = t[4]),
                  ft(function () {
                    return (f = !1);
                  })),
                  d.$set(h),
                  !1 === t[6].passwordlessMode
                    ? J
                      ? (J.p(t, i), 64 & i && xt(J, 1))
                      : ((J = an(t)).c(), xt(J, 1), J.m(u, g))
                    : J &&
                      (_t(),
                      St(J, 1, 1, function () {
                        J = null;
                      }),
                      kt());
                var p = y;
                (y = X(t)) === p
                  ? K[y].p(t, i)
                  : (_t(),
                    St(K[p], 1, 1, function () {
                      K[p] = null;
                    }),
                    kt(),
                    (_ = K[y]) ? _.p(t, i) : (_ = K[y] = W[y](t)).c(),
                    xt(_, 1),
                    _.m(u, k)),
                  t[7].authProviders.length > 0 ||
                  !0 === t[7].additionalAuthMethods.passwordless.enabled
                    ? Z
                      ? (Z.p(t, i), 128 & i && xt(Z, 1))
                      : ((Z = ln(t)).c(), xt(Z, 1), Z.m(r, null))
                    : Z &&
                      (_t(),
                      St(Z, 1, 1, function () {
                        Z = null;
                      }),
                      kt());
              },
              i: function (t) {
                M ||
                  (xt(A),
                  xt(o.$$.fragment, t),
                  xt(d.$$.fragment, t),
                  xt(J),
                  xt(_),
                  xt(Z),
                  xt(C.$$.fragment, t),
                  (M = !0));
              },
              o: function (t) {
                St(A),
                  St(o.$$.fragment, t),
                  St(d.$$.fragment, t),
                  St(J),
                  St(_),
                  St(Z),
                  St(C.$$.fragment, t),
                  (M = !1);
              },
              d: function (t) {
                t && R(e),
                  A && A.d(),
                  At(o),
                  D(B, t),
                  At(d),
                  J && J.d(),
                  K[y].d(),
                  Z && Z.d(),
                  At(C),
                  (T = !1),
                  v(E);
              },
            }
          );
        }
        function vn() {
          return i(this, void 0, void 0, function () {
            return s(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, window.hcaptcha.execute({ async: !0 })];
                case 1:
                  return [2, t.sent().response];
              }
            });
          });
        }
        function gn(t, e, n) {
          var r, o, a;
          y(t, De, function (t) {
            return n(6, (r = t));
          }),
            y(t, qt, function (t) {
              return n(7, (o = t));
            }),
            y(t, Bt, function (t) {
              return n(19, (a = t));
            });
          var c = e.closeModal,
            u = e.display,
            l = e.onSuccessSignup,
            d = e.params;
          !0 === o.additionalAuthMethods.passwordless.isDefault && je(!0);
          var f,
            h = a.text,
            p = !1,
            m = !1,
            v = !1,
            g = o.captchaRequired;
          function b() {
            g && window.hcaptcha && window.hcaptcha.reset(f);
          }
          function w(t) {
            return i(this, void 0, void 0, function () {
              var e, r;
              return s(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      [
                        4,
                        window.$memberstackDom.signupWithProvider({
                          provider: t,
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (e = o.sent().data),
                      l({ type: "SIGNUP", data: e }),
                      [3, 3]
                    );
                  case 2:
                    return (
                      (r = o.sent()),
                      n(3, (p = !1)),
                      window.$memberstackDom._showMessage(r.message, !0),
                      [3, 3]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }
          return (
            (function () {
              i(this, void 0, void 0, function () {
                return s(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return g
                        ? [4, window.$memberstackDom._captchaReady]
                        : [3, 2];
                    case 1:
                      t.sent(),
                        (f = window.hcaptcha.render("hcaptcha", {
                          sitekey: "838711f9-0e30-48e9-89e6-8f1ec4b79705",
                          theme: "light",
                        })),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            })(),
            (t.$$set = function (t) {
              "closeModal" in t && n(1, (c = t.closeModal)),
                "display" in t && n(0, (u = t.display)),
                "onSuccessSignup" in t && n(11, (l = t.onSuccessSignup)),
                "params" in t && n(2, (d = t.params));
            }),
            [
              u,
              c,
              d,
              p,
              m,
              v,
              r,
              o,
              h,
              function (t) {
                var e, o;
                return i(this, void 0, void 0, function () {
                  var i, a, c, h, w, y, _, k;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          ((i = t.target.querySelector("[type=email]")),
                          (a = t.target.querySelector(
                            "[data-ms-internal-password]"
                          )),
                          (c = {}),
                          Array.from(
                            t.target.querySelectorAll("[data-ms-custom-field]")
                          ).map(function (t) {
                            c[t.getAttribute("name")] = t.value;
                          }).length,
                          !0 !== r.passwordlessMode)
                        ) {
                          if (!m || !v) return [2];
                        } else if (!m) return [2];
                        return (
                          n(3, (p = !0)),
                          t.target.querySelector("[name=Rey]").value
                            ? (t.target.reset(), n(3, (p = !1)), [2])
                            : g
                            ? [4, window.$memberstackDom._captchaReady]
                            : [3, 5]
                        );
                      case 1:
                        if ((s.sent(), (h = window.hcaptcha.getResponse(f))))
                          return [3, 5];
                        s.label = 2;
                      case 2:
                        return s.trys.push([2, 4, , 5]), [4, vn()];
                      case 3:
                        return (h = s.sent()), [3, 5];
                      case 4:
                        return s.sent(), n(3, (p = !1)), [2];
                      case 5:
                        if (!0 === r.passwordlessMode) return [3, 10];
                        s.label = 6;
                      case 6:
                        return (
                          s.trys.push([6, 8, , 9]),
                          (w = (
                            (null === (e = null == d ? void 0 : d.signup) ||
                            void 0 === e
                              ? void 0
                              : e.plans) || []
                          ).map(function (t) {
                            return { planId: t };
                          })),
                          [
                            4,
                            window.$memberstackDom.signupMemberEmailPassword(
                              {
                                email: i.value,
                                password: a.value,
                                plans: w,
                                customFields: c,
                                captchaToken: h,
                              },
                              { includeContentGroups: !0 }
                            ),
                          ]
                        );
                      case 7:
                        return (
                          (y = s.sent().data),
                          l({ type: "SIGNUP", data: y }),
                          n(3, (p = !1)),
                          [3, 9]
                        );
                      case 8:
                        return (
                          (_ = s.sent()),
                          n(3, (p = !1)),
                          window.$memberstackDom._showMessage(_.message, !0),
                          b(),
                          [3, 9]
                        );
                      case 9:
                        return [3, 13];
                      case 10:
                        return (
                          s.trys.push([10, 12, , 13]),
                          [
                            4,
                            window.$memberstackDom.sendMemberSignupPasswordlessEmail(
                              { email: i.value }
                            ),
                          ]
                        );
                      case 11:
                        return (
                          s.sent(),
                          qe("signup"),
                          Be(i.value),
                          (function (t) {
                            De.update(function (e) {
                              return (e.passwordlessPlans = t), e;
                            });
                          })(
                            (null === (o = null == d ? void 0 : d.signup) ||
                            void 0 === o
                              ? void 0
                              : o.plans) || []
                          ),
                          (function (t) {
                            De.update(function (e) {
                              return (e.passwordlessCustomFields = t), e;
                            });
                          })(c),
                          n(0, (u = "passwordless_token")),
                          n(3, (p = !1)),
                          [3, 13]
                        );
                      case 12:
                        return (
                          (k = s.sent()),
                          n(3, (p = !1)),
                          window.$memberstackDom._showMessage(k.message, !0),
                          b(),
                          [3, 13]
                        );
                      case 13:
                        return [2];
                    }
                  });
                });
              },
              w,
              l,
              function (t) {
                n(4, (m = t));
              },
              function (t) {
                n(5, (v = t));
              },
              function () {
                return n(0, (u = "login"));
              },
              function () {
                return je(!0);
              },
              function () {
                return je(!1);
              },
              function (t) {
                return w(t.provider);
              },
            ]
          );
        }
        var bn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(
                n,
                e,
                gn,
                mn,
                b,
                { closeModal: 1, display: 0, onSuccessSignup: 11, params: 2 },
                tn
              ),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function wn(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
                ),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 8 12"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var yn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, wn, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function _n(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S,
            P,
            $,
            C;
          function M(e) {
            t[7](e);
          }
          (o = new yn({})), (c = new ie({}));
          var T = { placeholder: t[3].reset_email_placeholder };
          return (
            void 0 !== t[1] && (T.emailInputValid = t[1]),
            (m = new ve({ props: T })),
            st.push(function () {
              return Lt(m, "emailInputValid", M);
            }),
            (w = new le({
              props: { buttonText: t[3].reset || "Send Link", isLoading: t[2] },
            })),
            (S = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  (r = q("button")),
                  Tt(o.$$.fragment),
                  (i = N()),
                  (s = q("div")),
                  Tt(c.$$.fragment),
                  (u = N()),
                  ((l = q("h2")).textContent = "".concat(
                    t[3].reset_your_password || "Reset your password"
                  )),
                  (d = N()),
                  ((f = q("p")).textContent = "".concat(
                    t[3].reset_instructions ||
                      "We’ll email you a secure link to reset the password for your account."
                  )),
                  (h = N()),
                  (p = q("form")),
                  Tt(m.$$.fragment),
                  (b = N()),
                  Tt(w.$$.fragment),
                  (y = N()),
                  (_ = q("div")),
                  ((k = q("div")).textContent = "".concat(
                    t[3].reset_already_have_code || "I already have a code"
                  )),
                  (x = N()),
                  Tt(S.$$.fragment),
                  z(n, "data-cy", "back-btn"),
                  z(n, "class", "ms-modal__back"),
                  z(l, "class", "ms-modal__title ms-modal__title--sub-text"),
                  z(f, "class", "ms-modal__text"),
                  z(k, "class", "ms-form__link"),
                  z(_, "class", "ms-form__flex ms-form__flex--centered"),
                  z(p, "class", "ms-form"),
                  z(p, "action", ""),
                  z(p, "method", "post"),
                  z(p, "autocomplete", "off"),
                  z(s, "class", "ms-modal__content"),
                  z(e, "class", "ms-modal"),
                  z(e, "id", "PasswordResetModal");
              },
              m: function (a, v) {
                O(a, e, v),
                  L(e, n),
                  L(n, r),
                  Et(o, r, null),
                  L(e, i),
                  L(e, s),
                  Et(c, s, null),
                  L(s, u),
                  L(s, l),
                  L(s, d),
                  L(s, f),
                  L(s, h),
                  L(s, p),
                  Et(m, p, null),
                  L(p, b),
                  Et(w, p, null),
                  L(p, y),
                  L(p, _),
                  L(_, k),
                  L(e, x),
                  Et(S, e, null),
                  (P = !0),
                  $ ||
                    ((C = [
                      F(r, "click", t[6]),
                      F(k, "click", t[8]),
                      F(p, "submit", V(U(t[4]))),
                    ]),
                    ($ = !0));
              },
              p: function (t, e) {
                var n = a(e, 1)[0],
                  r = {};
                !g &&
                  2 & n &&
                  ((g = !0),
                  (r.emailInputValid = t[1]),
                  ft(function () {
                    return (g = !1);
                  })),
                  m.$set(r);
                var o = {};
                4 & n && (o.isLoading = t[2]), w.$set(o);
              },
              i: function (t) {
                P ||
                  (xt(o.$$.fragment, t),
                  xt(c.$$.fragment, t),
                  xt(m.$$.fragment, t),
                  xt(w.$$.fragment, t),
                  xt(S.$$.fragment, t),
                  (P = !0));
              },
              o: function (t) {
                St(o.$$.fragment, t),
                  St(c.$$.fragment, t),
                  St(m.$$.fragment, t),
                  St(w.$$.fragment, t),
                  St(S.$$.fragment, t),
                  (P = !1);
              },
              d: function (t) {
                t && R(e), At(o), At(c), At(m), At(w), At(S), ($ = !1), v(C);
              },
            }
          );
        }
        function kn(t, e, n) {
          var r;
          y(t, Bt, function (t) {
            return n(9, (r = t));
          });
          var o = r.text,
            a = e.closeModal,
            c = e.display,
            u = !1,
            l = !1;
          return (
            (t.$$set = function (t) {
              "closeModal" in t && n(5, (a = t.closeModal)),
                "display" in t && n(0, (c = t.display));
            }),
            [
              c,
              u,
              l,
              o,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var e, r;
                  return s(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (((e = t.target[0]), !u)) return [2];
                        n(2, (l = !0)), (o.label = 1);
                      case 1:
                        return (
                          o.trys.push([1, 3, , 4]),
                          [
                            4,
                            window.$memberstackDom.sendMemberResetPasswordEmail(
                              { email: e.value }
                            ),
                          ]
                        );
                      case 2:
                        return o.sent(), n(0, (c = "reset_password")), [3, 4];
                      case 3:
                        return (
                          (r = o.sent()),
                          console.log(r),
                          n(2, (l = !1)),
                          r.message &&
                            window.$memberstackDom._showMessage(r.message, !1),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              },
              a,
              function () {
                return n(0, (c = "login"));
              },
              function (t) {
                n(1, (u = t));
              },
              function () {
                return n(0, (c = "reset_password"));
              },
            ]
          );
        }
        var xn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, kn, _n, b, { closeModal: 5, display: 0 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function Sn(t) {
          var e, n, r, o;
          return (
            (n = new fe({})),
            {
              c: function () {
                (e = q("div")),
                  Tt(n.$$.fragment),
                  (r = j(" Please enter a valid code")),
                  z(e, "class", "ms-form__error");
              },
              m: function (t, i) {
                O(t, e, i), Et(n, e, null), L(e, r), (o = !0);
              },
              i: function (t) {
                o || (xt(n.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        function Pn(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S,
            P,
            $,
            C,
            M,
            T,
            E;
          (o = new yn({})),
            (s = new Yt({ props: { closeModal: t[1] } })),
            (l = new ie({}));
          var A = !t[3] && Sn();
          function I(e) {
            t[9](e);
          }
          var D = {
            passwordPlaceholder: t[5].reset_password_placeholder,
            passwordLabel: t[5].password || "Password",
          };
          return (
            void 0 !== t[4] && (D.passwordInputValid = t[4]),
            (k = new Ce({ props: D })),
            st.push(function () {
              return Lt(k, "passwordInputValid", I);
            }),
            (P = new le({
              props: {
                buttonText: t[5].reset_confirm_reset || "Confirm & Reset",
                isLoading: t[2],
              },
            })),
            (C = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  (r = q("button")),
                  Tt(o.$$.fragment),
                  (i = N()),
                  Tt(s.$$.fragment),
                  (c = N()),
                  (u = q("div")),
                  Tt(l.$$.fragment),
                  (d = N()),
                  ((f = q("h2")).textContent = "".concat(
                    t[5].reset_your_password || "Reset your password"
                  )),
                  (h = N()),
                  (p = q("form")),
                  (m = q("div")),
                  ((g = q("label")).textContent = "".concat(
                    t[5].reset_enter_code || "Enter your 6-digit code"
                  )),
                  (b = N()),
                  ((w = q("fieldset")).innerHTML =
                    '<input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input type="tel" name="token" class="ms-form__input ms-form__input--token"/>'),
                  (y = N()),
                  A && A.c(),
                  (_ = N()),
                  Tt(k.$$.fragment),
                  (S = N()),
                  Tt(P.$$.fragment),
                  ($ = N()),
                  Tt(C.$$.fragment),
                  z(n, "class", "ms-modal__back"),
                  z(f, "class", "ms-modal__title"),
                  z(g, "class", "ms-form__label"),
                  z(g, "for", "token-fieldset"),
                  z(w, "class", "ms-form__fieldset"),
                  z(w, "name", "token-fieldset"),
                  z(m, "class", "ms-form__group"),
                  z(p, "class", "ms-form"),
                  z(p, "action", ""),
                  z(p, "method", "post"),
                  z(p, "autocomplete", "off"),
                  z(u, "class", "ms-modal__content"),
                  z(e, "class", "ms-modal"),
                  z(e, "id", "PasswordTokenModal");
              },
              m: function (a, v) {
                O(a, e, v),
                  L(e, n),
                  L(n, r),
                  Et(o, r, null),
                  L(e, i),
                  Et(s, e, null),
                  L(e, c),
                  L(e, u),
                  Et(l, u, null),
                  L(u, d),
                  L(u, f),
                  L(u, h),
                  L(u, p),
                  L(p, m),
                  L(m, g),
                  L(m, b),
                  L(m, w),
                  L(m, y),
                  A && A.m(m, null),
                  L(p, _),
                  Et(k, p, null),
                  L(p, S),
                  Et(P, p, null),
                  L(e, $),
                  Et(C, e, null),
                  (M = !0),
                  T ||
                    ((E = [F(r, "click", t[8]), F(p, "submit", V(U(t[6])))]),
                    (T = !0));
              },
              p: function (t, e) {
                var n = a(e, 1)[0],
                  r = {};
                2 & n && (r.closeModal = t[1]),
                  s.$set(r),
                  t[3]
                    ? A &&
                      (_t(),
                      St(A, 1, 1, function () {
                        A = null;
                      }),
                      kt())
                    : A
                    ? 8 & n && xt(A, 1)
                    : ((A = Sn()).c(), xt(A, 1), A.m(m, null));
                var o = {};
                !x &&
                  16 & n &&
                  ((x = !0),
                  (o.passwordInputValid = t[4]),
                  ft(function () {
                    return (x = !1);
                  })),
                  k.$set(o);
                var i = {};
                4 & n && (i.isLoading = t[2]), P.$set(i);
              },
              i: function (t) {
                M ||
                  (xt(o.$$.fragment, t),
                  xt(s.$$.fragment, t),
                  xt(l.$$.fragment, t),
                  xt(A),
                  xt(k.$$.fragment, t),
                  xt(P.$$.fragment, t),
                  xt(C.$$.fragment, t),
                  (M = !0));
              },
              o: function (t) {
                St(o.$$.fragment, t),
                  St(s.$$.fragment, t),
                  St(l.$$.fragment, t),
                  St(A),
                  St(k.$$.fragment, t),
                  St(P.$$.fragment, t),
                  St(C.$$.fragment, t),
                  (M = !1);
              },
              d: function (t) {
                t && R(e),
                  At(o),
                  At(s),
                  At(l),
                  A && A.d(),
                  At(k),
                  At(P),
                  At(C),
                  (T = !1),
                  v(E);
              },
            }
          );
        }
        function $n(t, e, n) {
          var r;
          y(t, Bt, function (t) {
            return n(10, (r = t));
          });
          var o = r.text,
            u = e.closeModal,
            l = e.display,
            d = e.onSuccessPasswordReset,
            f = !1,
            h = !0,
            p = !0;
          return (
            rt(function () {
              var t = c(
                [],
                a(document.querySelectorAll("input.ms-form__input--token")),
                !1
              );
              t.forEach(function (e, n) {
                e.addEventListener("keydown", function (e) {
                  8 === e.keyCode &&
                    "" === e.target.value &&
                    t[Math.max(0, n - 1)].focus();
                }),
                  e.addEventListener("input", function (e) {
                    var r = a(e.target.value),
                      o = r[0],
                      i = r.slice(1);
                    e.target.value = null != o ? o : "";
                    var s = n === t.length - 1;
                    void 0 !== o &&
                      !s &&
                      (t[n + 1].focus(),
                      (t[n + 1].value = i.join("")),
                      t[n + 1].dispatchEvent(new Event("input")));
                  });
              });
            }),
            (t.$$set = function (t) {
              "closeModal" in t && n(1, (u = t.closeModal)),
                "display" in t && n(0, (l = t.display)),
                "onSuccessPasswordReset" in t &&
                  n(7, (d = t.onSuccessPasswordReset));
            }),
            [
              l,
              u,
              f,
              h,
              p,
              o,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var e, r, o, i;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          ((e = t.target[7]),
                          (u = c(
                            [],
                            a(
                              document.querySelectorAll(
                                "input.ms-form__input--token"
                              )
                            ),
                            !1
                          ).some(function (t) {
                            return !t.value;
                          })),
                          n(3, (h = !u)),
                          u)
                        )
                          return [2];
                        (r = c([], a(document.getElementsByName("token")), !1)
                          .filter(function (t) {
                            return t.name;
                          })
                          .map(function (t) {
                            return t.value;
                          })
                          .join("")),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          n(2, (f = !0)),
                          [
                            4,
                            window.$memberstackDom.resetMemberPassword({
                              token: r,
                              newPassword: e.value,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (o = s.sent()._internalUseOnly.message),
                          window.$memberstackDom._showMessage(o, !1),
                          d({ type: "PASSWORD_RESET", data: {} }),
                          n(2, (f = !1)),
                          n(0, (l = "reset_password_success")),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (i = s.sent()),
                          n(2, (f = !1)),
                          console.log(i),
                          i.message &&
                            window.$memberstackDom._showMessage(i.message, !0),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                    var u;
                  });
                });
              },
              d,
              function () {
                return n(0, (l = "forgot_password"));
              },
              function (t) {
                n(4, (p = t));
              },
            ]
          );
        }
        var Cn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, $n, Pn, b, {
                closeModal: 1,
                display: 0,
                onSuccessPasswordReset: 7,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Mn(t) {
          var e, n, r, o, i, s, c, u, l, d, f, h, p, m;
          return (
            (o = new Yt({ props: { closeModal: t[0] } })),
            (c = new ie({})),
            (p = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  (r = N()),
                  Tt(o.$$.fragment),
                  (i = N()),
                  (s = q("div")),
                  Tt(c.$$.fragment),
                  (u = N()),
                  ((l = q("h2")).textContent = "Success!"),
                  (d = N()),
                  ((f = q("p")).innerHTML =
                    "Your password has been reset. <br/>\n      Please login with your new credentials."),
                  (h = N()),
                  Tt(p.$$.fragment),
                  z(n, "data-cy", "back-btn"),
                  z(n, "class", "ms-modal__back"),
                  z(l, "class", "ms-modal__title ms-modal__title--sub-text"),
                  z(f, "class", "ms-modal__text"),
                  z(s, "class", "ms-modal__content"),
                  z(e, "class", "ms-modal"),
                  z(e, "id", "PasswordSuccessModal");
              },
              m: function (t, a) {
                O(t, e, a),
                  L(e, n),
                  L(e, r),
                  Et(o, e, null),
                  L(e, i),
                  L(e, s),
                  Et(c, s, null),
                  L(s, u),
                  L(s, l),
                  L(s, d),
                  L(s, f),
                  L(e, h),
                  Et(p, e, null),
                  (m = !0);
              },
              p: function (t, e) {
                var n = {};
                1 & a(e, 1)[0] && (n.closeModal = t[0]), o.$set(n);
              },
              i: function (t) {
                m ||
                  (xt(o.$$.fragment, t),
                  xt(c.$$.fragment, t),
                  xt(p.$$.fragment, t),
                  (m = !0));
              },
              o: function (t) {
                St(o.$$.fragment, t),
                  St(c.$$.fragment, t),
                  St(p.$$.fragment, t),
                  (m = !1);
              },
              d: function (t) {
                t && R(e), At(o), At(c), At(p);
              },
            }
          );
        }
        function Ln(t, e, n) {
          var r = e.closeModal;
          return (
            (t.$$set = function (t) {
              "closeModal" in t && n(0, (r = t.closeModal));
            }),
            [r]
          );
        }
        var Tn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Ln, Mn, b, { closeModal: 0 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function En(t) {
          var e, n, r, o, i;
          return (
            (n = new yn({})),
            {
              c: function () {
                (e = q("button")), Tt(n.$$.fragment);
              },
              m: function (s, a) {
                O(s, e, a),
                  Et(n, e, null),
                  (r = !0),
                  o || ((i = F(e, "click", t[10])), (o = !0));
              },
              p: l,
              i: function (t) {
                r || (xt(n.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                t && R(e), At(n), (o = !1), i();
              },
            }
          );
        }
        function An(t) {
          var e, n, r, o, i;
          return (
            (n = new yn({})),
            {
              c: function () {
                (e = q("button")), Tt(n.$$.fragment);
              },
              m: function (s, a) {
                O(s, e, a),
                  Et(n, e, null),
                  (r = !0),
                  o || ((i = F(e, "click", t[9])), (o = !0));
              },
              p: l,
              i: function (t) {
                r || (xt(n.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                t && R(e), At(n), (o = !1), i();
              },
            }
          );
        }
        function In(t) {
          var e;
          return {
            c: function () {
              ((e = q("h2")).textContent = "".concat(
                t[5].passwordless_token_heading || "Create an account"
              )),
                z(e, "class", "ms-modal__title ms-modal__title--sub-text");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            p: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        function On(t) {
          var e;
          return {
            c: function () {
              ((e = q("h2")).textContent = "".concat(
                t[5].login_to_your_account || "Login to your account"
              )),
                z(e, "class", "ms-modal__title ms-modal__title--sub-text");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            p: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        function Rn(t) {
          var e, n, r, o;
          return (
            (n = new fe({})),
            {
              c: function () {
                (e = q("div")),
                  Tt(n.$$.fragment),
                  (r = j(" Please enter a valid code")),
                  z(e, "class", "ms-form__error");
              },
              m: function (t, i) {
                O(t, e, i), Et(n, e, null), L(e, r), (o = !0);
              },
              i: function (t) {
                o || (xt(n.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        function Dn(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            v,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S,
            P,
            $,
            C,
            M = [An, En],
            T = [];
          function E(t, e) {
            return "login" === t[4].passwordlessModalType ? 0 : 1;
          }
          function A(t, e) {
            return "login" === t[4].passwordlessModalType ? On : In;
          }
          (r = E(t)),
            (o = T[r] = M[r](t)),
            (s = new Yt({ props: { closeModal: t[1] } })),
            (l = new ie({}));
          var I = A(t),
            D = I(t),
            B = !t[3] && Rn();
          return (
            (k = new le({
              props: {
                buttonText: t[5].login_verify_email || "Verify Email",
                isLoading: t[2],
              },
            })),
            (S = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  o.c(),
                  (i = N()),
                  Tt(s.$$.fragment),
                  (c = N()),
                  (u = q("div")),
                  Tt(l.$$.fragment),
                  (d = N()),
                  D.c(),
                  (f = N()),
                  ((h = q("p")).textContent = "".concat(
                    t[5].login_passwordless_instructions ||
                      "Enter the verification code sent to your email address"
                  )),
                  (p = N()),
                  (m = q("form")),
                  (v = q("div")),
                  ((g = q("label")).textContent = "".concat(
                    t[5].login_verification_code || "Verification Code"
                  )),
                  (b = N()),
                  ((w = q("fieldset")).innerHTML =
                    '<input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" required="" type="tel"/> \n          <input name="token" class="ms-form__input ms-form__input--token" type="tel"/>'),
                  (y = N()),
                  B && B.c(),
                  (_ = N()),
                  Tt(k.$$.fragment),
                  (x = N()),
                  Tt(S.$$.fragment),
                  z(n, "class", "ms-modal__back"),
                  z(h, "class", "ms-modal__text"),
                  z(g, "class", "ms-form__label"),
                  z(g, "for", "token-fieldset"),
                  z(w, "class", "ms-form__fieldset"),
                  z(w, "name", "token-fieldset"),
                  z(v, "class", "ms-form__group"),
                  z(m, "class", "ms-form"),
                  z(m, "action", ""),
                  z(m, "method", "post"),
                  z(m, "autocomplete", "off"),
                  z(u, "class", "ms-modal__content"),
                  z(e, "class", "ms-modal"),
                  z(e, "id", "PasswordlessTokenModal");
              },
              m: function (o, a) {
                O(o, e, a),
                  L(e, n),
                  T[r].m(n, null),
                  L(e, i),
                  Et(s, e, null),
                  L(e, c),
                  L(e, u),
                  Et(l, u, null),
                  L(u, d),
                  D.m(u, null),
                  L(u, f),
                  L(u, h),
                  L(u, p),
                  L(u, m),
                  L(m, v),
                  L(v, g),
                  L(v, b),
                  L(v, w),
                  L(v, y),
                  B && B.m(v, null),
                  L(m, _),
                  Et(k, m, null),
                  L(e, x),
                  Et(S, e, null),
                  (P = !0),
                  $ || ((C = F(m, "submit", V(U(t[6])))), ($ = !0));
              },
              p: function (t, e) {
                var i = a(e, 1)[0],
                  c = r;
                (r = E(t)) === c
                  ? T[r].p(t, i)
                  : (_t(),
                    St(T[c], 1, 1, function () {
                      T[c] = null;
                    }),
                    kt(),
                    (o = T[r]) ? o.p(t, i) : (o = T[r] = M[r](t)).c(),
                    xt(o, 1),
                    o.m(n, null));
                var l = {};
                2 & i && (l.closeModal = t[1]),
                  s.$set(l),
                  I === (I = A(t)) && D
                    ? D.p(t, i)
                    : (D.d(1), (D = I(t)) && (D.c(), D.m(u, f))),
                  t[3]
                    ? B &&
                      (_t(),
                      St(B, 1, 1, function () {
                        B = null;
                      }),
                      kt())
                    : B
                    ? 8 & i && xt(B, 1)
                    : ((B = Rn()).c(), xt(B, 1), B.m(v, null));
                var d = {};
                4 & i && (d.isLoading = t[2]), k.$set(d);
              },
              i: function (t) {
                P ||
                  (xt(o),
                  xt(s.$$.fragment, t),
                  xt(l.$$.fragment, t),
                  xt(B),
                  xt(k.$$.fragment, t),
                  xt(S.$$.fragment, t),
                  (P = !0));
              },
              o: function (t) {
                St(o),
                  St(s.$$.fragment, t),
                  St(l.$$.fragment, t),
                  St(B),
                  St(k.$$.fragment, t),
                  St(S.$$.fragment, t),
                  (P = !1);
              },
              d: function (t) {
                t && R(e),
                  T[r].d(),
                  At(s),
                  At(l),
                  D.d(),
                  B && B.d(),
                  At(k),
                  At(S),
                  ($ = !1),
                  C();
              },
            }
          );
        }
        function qn(t, e, n) {
          var r, o;
          y(t, De, function (t) {
            return n(4, (r = t));
          }),
            y(t, Bt, function (t) {
              return n(11, (o = t));
            });
          var u = o.text,
            l = e.closeModal,
            d = e.display,
            f = e.onSuccessPasswordlessToken,
            h = e.onSuccess,
            p = !1,
            m = !0;
          return (
            rt(function () {
              var t = c(
                [],
                a(document.querySelectorAll("input.ms-form__input--token")),
                !1
              );
              t.forEach(function (e, n) {
                e.addEventListener("keydown", function (e) {
                  8 === e.keyCode &&
                    "" === e.target.value &&
                    t[Math.max(0, n - 1)].focus();
                }),
                  e.addEventListener("input", function (e) {
                    var r = a(e.target.value),
                      o = r[0],
                      i = r.slice(1);
                    e.target.value = null != o ? o : "";
                    var s = n === t.length - 1;
                    void 0 !== o &&
                      !s &&
                      (t[n + 1].focus(),
                      (t[n + 1].value = i.join("")),
                      t[n + 1].dispatchEvent(new Event("input")));
                  });
              });
            }),
            (t.$$set = function (t) {
              "closeModal" in t && n(1, (l = t.closeModal)),
                "display" in t && n(0, (d = t.display)),
                "onSuccessPasswordlessToken" in t &&
                  n(7, (f = t.onSuccessPasswordlessToken)),
                "onSuccess" in t && n(8, (h = t.onSuccess));
            }),
            [
              d,
              l,
              p,
              m,
              r,
              u,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var e, o, i, u;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          (t.target[7],
                          (l = c(
                            [],
                            a(
                              document.querySelectorAll(
                                "input.ms-form__input--token"
                              )
                            ),
                            !1
                          ).some(function (t) {
                            return !t.value;
                          })),
                          n(3, (m = !l)),
                          l)
                        )
                          return [2];
                        (e = c([], a(document.getElementsByName("token")), !1)
                          .filter(function (t) {
                            return t.name;
                          })
                          .map(function (t) {
                            return t.value;
                          })
                          .join("")),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 6, , 7]),
                          n(2, (p = !0)),
                          "login" !== r.passwordlessModalType
                            ? [3, 3]
                            : [
                                4,
                                window.$memberstackDom.loginMemberPasswordless(
                                  {
                                    passwordlessToken: e,
                                    email: r.passwordlessEmail,
                                  },
                                  { includeContentGroups: !0 }
                                ),
                              ]
                        );
                      case 2:
                        return (
                          (i = s.sent().data),
                          h({ type: "LOGIN", data: i }),
                          n(2, (p = !1)),
                          [3, 5]
                        );
                      case 3:
                        return (
                          (o = (r.passwordlessPlans || []).map(function (t) {
                            return { planId: t };
                          })),
                          [
                            4,
                            window.$memberstackDom.signupMemberPasswordless(
                              {
                                passwordlessToken: e,
                                email: r.passwordlessEmail,
                                plans: o,
                                customFields: r.passwordlessCustomFields,
                              },
                              { includeContentGroups: !0 }
                            ),
                          ]
                        );
                      case 4:
                        (i = s.sent().data),
                          h({ type: "SIGNUP", data: i }),
                          n(2, (p = !1)),
                          (s.label = 5);
                      case 5:
                        return [3, 7];
                      case 6:
                        return (
                          (u = s.sent()),
                          n(2, (p = !1)),
                          console.log(u),
                          u.message &&
                            window.$memberstackDom._showMessage(u.message, !0),
                          [3, 7]
                        );
                      case 7:
                        return [2];
                    }
                    var l;
                  });
                });
              },
              f,
              h,
              function () {
                return n(0, (d = "login"));
              },
              function () {
                return n(0, (d = "signup"));
              },
            ]
          );
        }
        var Bn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, qn, Dn, b, {
                closeModal: 1,
                display: 0,
                onSuccessPasswordlessToken: 7,
                onSuccess: 8,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function jn(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z(
                  (n = B("path")),
                  "d",
                  "m8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ),
                z(n, "fill", "currentColor"),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 16 16"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Nn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, jn, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Hn(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z(
                  (n = B("path")),
                  "d",
                  "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm0 10.99h7c-0.53 4.12-3.28 7.79-7 8.94v-8.93h-7v-5.7l7-3.11v8.8z"
                ),
                z(n, "fill", "currentColor"),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 18 22"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Fn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Hn, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Un(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
                ),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 18 18"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Vn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Un, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function zn(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z(
                  (n = B("path")),
                  "d",
                  "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                ),
                z(n, "fill", "currentColor"),
                z(e, "width", "16"),
                z(e, "height", "16"),
                z(e, "viewBox", "0 0 16 16"),
                z(e, "fill", "none"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Gn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, zn, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Jn(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"
                ),
                z(e, "fill", "none"),
                z(e, "xmlns", "http://www.w3.org/2000/svg"),
                z(e, "viewBox", "3 2 19 20");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var Wn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Jn, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Kn(t) {
          var e, n, r, o, i, s;
          return (
            (n = new Nn({})),
            {
              c: function () {
                (e = q("button")),
                  Tt(n.$$.fragment),
                  (r = j(" Profile")),
                  z(e, "data-cy", "profile-btn"),
                  z(e, "class", "ms-modal__profile-option"),
                  K(e, "ms-modal__profile-option--active", "profile" === t[0]);
              },
              m: function (a, c) {
                O(a, e, c),
                  Et(n, e, null),
                  L(e, r),
                  (o = !0),
                  i || ((s = F(e, "click", t[7])), (i = !0));
              },
              p: function (t, n) {
                (!o || 1 & n) &&
                  K(e, "ms-modal__profile-option--active", "profile" === t[0]);
              },
              i: function (t) {
                o || (xt(n.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                t && R(e), At(n), (i = !1), s();
              },
            }
          );
        }
        function Xn(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p = t[3](),
            m = !t[1] && Kn(t);
          r = new Fn({});
          var g =
            p &&
            (function (t) {
              var e, n, r, o, i, s;
              return (
                (n = new Wn({})),
                {
                  c: function () {
                    (e = q("button")),
                      Tt(n.$$.fragment),
                      (r = j(" Plans")),
                      z(e, "data-cy", "plans-btn"),
                      z(e, "class", "ms-modal__profile-option"),
                      K(
                        e,
                        "ms-modal__profile-option--active",
                        "plans" === t[0]
                      );
                  },
                  m: function (a, c) {
                    O(a, e, c),
                      Et(n, e, null),
                      L(e, r),
                      (o = !0),
                      i || ((s = F(e, "click", t[9])), (i = !0));
                  },
                  p: function (t, n) {
                    (!o || 1 & n) &&
                      K(
                        e,
                        "ms-modal__profile-option--active",
                        "plans" === t[0]
                      );
                  },
                  i: function (t) {
                    o || (xt(n.$$.fragment, t), (o = !0));
                  },
                  o: function (t) {
                    St(n.$$.fragment, t), (o = !1);
                  },
                  d: function (t) {
                    t && R(e), At(n), (i = !1), s();
                  },
                }
              );
            })(t);
          return (
            (u = new Gn({})),
            {
              c: function () {
                m && m.c(),
                  (e = N()),
                  (n = q("button")),
                  Tt(r.$$.fragment),
                  (o = j(" Security")),
                  (i = N()),
                  g && g.c(),
                  (s = N()),
                  (c = q("button")),
                  Tt(u.$$.fragment),
                  (l = j(" Logout")),
                  z(n, "data-cy", "security-btn"),
                  z(n, "class", "ms-modal__profile-option"),
                  K(
                    n,
                    "ms-modal__profile-option--active",
                    "security" === t[0] || "changePassword" === t[0]
                  ),
                  z(c, "data-cy", "logout-btn"),
                  z(c, "class", "ms-modal__profile-option");
              },
              m: function (a, p) {
                m && m.m(a, p),
                  O(a, e, p),
                  O(a, n, p),
                  Et(r, n, null),
                  L(n, o),
                  O(a, i, p),
                  g && g.m(a, p),
                  O(a, s, p),
                  O(a, c, p),
                  Et(u, c, null),
                  L(c, l),
                  (d = !0),
                  f ||
                    ((h = [F(n, "click", t[8]), F(c, "click", t[2])]),
                    (f = !0));
              },
              p: function (t, r) {
                var o = a(r, 1)[0];
                t[1]
                  ? m &&
                    (_t(),
                    St(m, 1, 1, function () {
                      m = null;
                    }),
                    kt())
                  : m
                  ? (m.p(t, o), 2 & o && xt(m, 1))
                  : ((m = Kn(t)).c(), xt(m, 1), m.m(e.parentNode, e)),
                  (!d || 1 & o) &&
                    K(
                      n,
                      "ms-modal__profile-option--active",
                      "security" === t[0] || "changePassword" === t[0]
                    ),
                  p && g.p(t, o);
              },
              i: function (t) {
                d ||
                  (xt(m),
                  xt(r.$$.fragment, t),
                  xt(g),
                  xt(u.$$.fragment, t),
                  (d = !0));
              },
              o: function (t) {
                St(m),
                  St(r.$$.fragment, t),
                  St(g),
                  St(u.$$.fragment, t),
                  (d = !1);
              },
              d: function (t) {
                m && m.d(t),
                  t && R(e),
                  t && R(n),
                  At(r),
                  t && R(i),
                  g && g.d(t),
                  t && R(s),
                  t && R(c),
                  At(u),
                  (f = !1),
                  v(h);
              },
            }
          );
        }
        function Zn(t, e, n) {
          var r = e.member,
            o = e.onSuccessLogout,
            a = e.displayProfile,
            c = e.profileLoader,
            u = e.hideProfileSection,
            l = qt.subscribe(function (t) {
              if (!t.initialValue) {
                var e = document.getElementById("msOverlay"),
                  n = document.createElement("style"),
                  r = t.branding.colors.lightMode.primaryButton,
                  o = ".ms-modal__profile-option:hover { color: "
                    .concat(r, ";} .ms-modal__profile-option--active { color: ")
                    .concat(r, ";} .ms-modal__save-button { background: ")
                    .concat(
                      r,
                      ";} .ms-modal__save-button:disabled { background: "
                    )
                    .concat(r, ";}");
                n.appendChild(document.createTextNode(o)), e.appendChild(n);
              }
            });
          return (
            ot(function () {
              l();
            }),
            (t.$$set = function (t) {
              "member" in t && n(4, (r = t.member)),
                "onSuccessLogout" in t && n(5, (o = t.onSuccessLogout)),
                "displayProfile" in t && n(0, (a = t.displayProfile)),
                "profileLoader" in t && n(6, (c = t.profileLoader)),
                "hideProfileSection" in t && n(1, (u = t.hideProfileSection));
            }),
            [
              a,
              u,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e, n, r;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 2, , 3]),
                          [4, window.$memberstackDom.logout()]
                        );
                      case 1:
                        return (
                          (t = i.sent()),
                          (e = t.data),
                          (n = t._internalUseOnly.message),
                          window.$memberstackDom._showMessage(n, !1),
                          o({ type: "LOGOUT", data: e }),
                          [3, 3]
                        );
                      case 2:
                        return (
                          (r = i.sent()),
                          window.$memberstackDom._showMessage(r.message, !0),
                          [3, 3]
                        );
                      case 3:
                        return [2];
                    }
                  });
                });
              },
              function () {
                return (
                  r.stripeCustomerId ||
                  r.planConnections.some(function (t) {
                    return "FREE" === t.type;
                  })
                );
              },
              r,
              o,
              c,
              function () {
                return n(0, (a = "profile"));
              },
              function () {
                return n(0, (a = "security"));
              },
              function () {
                return n(0, (a = "plans"));
              },
            ]
          );
        }
        var Yn = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, Zn, Xn, b, {
                member: 4,
                onSuccessLogout: 5,
                displayProfile: 0,
                profileLoader: 6,
                hideProfileSection: 1,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Qn(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "white"),
                z(
                  n,
                  "d",
                  "M21 21C24.315 21 27 18.315 27 15C27 11.685 24.315 9 21 9C17.685 9 15 11.685 15 15C15 18.315 17.685 21 21 21ZM21 24C16.995 24 9 26.01 9 30V31.5C9 32.325 9.675 33 10.5 33H31.5C32.325 33 33 32.325 33 31.5V30C33 26.01 25.005 24 21 24Z"
                ),
                z(e, "xmlns", "http://www.w3.org/2000/svg"),
                z(e, "width", "42"),
                z(e, "height", "42"),
                z(e, "viewBox", "0 0 42 42"),
                z(e, "fill", "none");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var tr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Qn, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function er(t) {
          var e, n, r, o, i, s;
          return {
            c: function () {
              (e = B("svg")),
                (n = B("g")),
                (r = B("path")),
                (o = B("defs")),
                (i = B("clipPath")),
                (s = B("path")),
                z(r, "fill", "#494949"),
                z(
                  r,
                  "d",
                  "M6.667 10.667h2.666c.367 0 .667-.3.667-.667V6.667h1.06c.593 0 .893-.72.473-1.14l-3.06-3.06a.664.664 0 0 0-.94 0l-3.06 3.06c-.42.42-.126 1.14.467 1.14H6V10c0 .367.3.667.667.667zM4 12h8c.367 0 .667.3.667.667 0 .367-.3.667-.667.667H4a.669.669 0 0 1-.667-.667c0-.367.3-.667.667-.667z"
                ),
                z(n, "clip-path", "url(#a)"),
                z(s, "fill", "#fff"),
                z(s, "d", "M0 0h16v16H0z"),
                z(i, "id", "a"),
                z(e, "xmlns", "http://www.w3.org/2000/svg"),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 16 16");
            },
            m: function (t, a) {
              O(t, e, a), L(e, n), L(n, r), L(e, o), L(o, i), L(i, s);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var nr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, er, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function rr(t, e, n) {
          var r = t.slice();
          return (r[10] = e[n]), (r[11] = e), (r[12] = n), r;
        }
        function or(t) {
          var e, n;
          return (
            (e = new tr({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: l,
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function ir(t) {
          var e, n;
          return {
            c: function () {
              w((e = q("img")).src, (n = t[0].profileImage)) || z(e, "src", n),
                z(e, "alt", "profile image");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            p: function (t, r) {
              1 & r && !w(e.src, (n = t[0].profileImage)) && z(e, "src", n);
            },
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        function sr(t) {
          var e;
          return {
            c: function () {
              e = j("Replace Image");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function ar(t) {
          var e;
          return {
            c: function () {
              e = j("Upload Profile Image");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function cr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d,
            f,
            h = t[10].label + "";
          function p() {
            t[6].call(a, t[10]);
          }
          return {
            c: function () {
              (e = q("div")),
                (n = q("div")),
                (r = q("label")),
                (o = j(h)),
                (s = N()),
                (a = q("input")),
                (l = N()),
                z(r, "class", "ms-form__label"),
                z(r, "for", (i = t[10].key)),
                z(a, "class", "ms-form__input"),
                z(a, "type", "text"),
                z(a, "placeholder", (c = t[10].label)),
                z(a, "name", (u = t[10].key)),
                z(n, "class", "ms-form__group"),
                z(e, "class", "ms-modal__custom-field-container");
            },
            m: function (i, c) {
              O(i, e, c),
                L(e, n),
                L(n, r),
                L(r, o),
                L(n, s),
                L(n, a),
                J(a, t[0].customFields[t[10].key]),
                L(e, l),
                d ||
                  ((f = [
                    F(a, "input", p),
                    F(a, "keyup", t[4]),
                    F(a, "paste", t[4]),
                  ]),
                  (d = !0));
            },
            p: function (e, n) {
              (t = e),
                2 & n && h !== (h = t[10].label + "") && G(o, h),
                2 & n && i !== (i = t[10].key) && z(r, "for", i),
                2 & n && c !== (c = t[10].label) && z(a, "placeholder", c),
                2 & n && u !== (u = t[10].key) && z(a, "name", u),
                3 & n &&
                  a.value !== t[0].customFields[t[10].key] &&
                  J(a, t[0].customFields[t[10].key]);
            },
            d: function (t) {
              t && R(e), (d = !1), v(f);
            },
          };
        }
        function ur(t) {
          var e,
            n = !0 !== t[10].hidden && cr(t);
          return {
            c: function () {
              n && n.c(), (e = H());
            },
            m: function (t, r) {
              n && n.m(t, r), O(t, e, r);
            },
            p: function (t, r) {
              !0 !== t[10].hidden
                ? n
                  ? n.p(t, r)
                  : ((n = cr(t)).c(), n.m(e.parentNode, e))
                : n && (n.d(1), (n = null));
            },
            d: function (t) {
              n && n.d(t), t && R(e);
            },
          };
        }
        function lr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k,
            x = [ir, or],
            S = [];
          function P(t, e) {
            return t[0].profileImage ? 0 : 1;
          }
          function $(t, e) {
            return t[0].profileImage ? sr : ar;
          }
          (d = P(t)), (f = S[d] = x[d](t)), (g = new nr({}));
          for (
            var C = $(t), M = C(t), T = t[1], E = [], A = 0;
            A < T.length;
            A += 1
          )
            E[A] = ur(rr(t, T, A));
          return {
            c: function () {
              (e = q("div")),
                ((n = q("h2")).textContent = "Profile Information"),
                (r = N()),
                (o = q("div")),
                (i = q("button")),
                (s = j("Save")),
                (c = N()),
                (u = q("div")),
                (l = q("div")),
                f.c(),
                (h = N()),
                (p = q("div")),
                (m = q("button")),
                Tt(g.$$.fragment),
                M.c(),
                (b = N()),
                (w = q("form"));
              for (var a = 0; a < E.length; a += 1) E[a].c();
              z(n, "class", "ms-modal__title ms-modal__title--profile"),
                z(i, "class", "ms-modal__save-button"),
                (i.disabled = t[2]),
                z(o, "class", "ms-modal__action-container"),
                z(e, "class", "ms-modal__title-container"),
                z(l, "class", "ms-modal__profile-image"),
                z(m, "data-cy", "change-profile-image"),
                z(m, "type", "submit"),
                z(m, "class", "ms-modal__outline-button"),
                z(m, "data-image-btn", ""),
                z(p, "class", "ms-modal__profile-image-button-container"),
                z(u, "class", "ms-modal__profile-image-container"),
                z(w, "class", "ms-form"),
                z(w, "action", ""),
                z(w, "method", "post"),
                z(w, "autocomplete", "off");
            },
            m: function (a, f) {
              O(a, e, f),
                L(e, n),
                L(e, r),
                L(e, o),
                L(o, i),
                L(i, s),
                O(a, c, f),
                O(a, u, f),
                L(u, l),
                S[d].m(l, null),
                L(u, h),
                L(u, p),
                L(p, m),
                Et(g, m, null),
                M.m(m, null),
                O(a, b, f),
                O(a, w, f);
              for (var v = 0; v < E.length; v += 1) E[v] && E[v].m(w, null);
              (y = !0),
                _ ||
                  ((k = [F(i, "click", t[3]), F(w, "submit", V(U(t[3])))]),
                  (_ = !0));
            },
            p: function (t, e) {
              var n = a(e, 1)[0];
              (!y || 4 & n) && (i.disabled = t[2]);
              var r = d;
              if (
                ((d = P(t)) === r
                  ? S[d].p(t, n)
                  : (_t(),
                    St(S[r], 1, 1, function () {
                      S[r] = null;
                    }),
                    kt(),
                    (f = S[d]) ? f.p(t, n) : (f = S[d] = x[d](t)).c(),
                    xt(f, 1),
                    f.m(l, null)),
                C !== (C = $(t)) &&
                  (M.d(1), (M = C(t)) && (M.c(), M.m(m, null))),
                19 & n)
              ) {
                T = t[1];
                var o = void 0;
                for (o = 0; o < T.length; o += 1) {
                  var s = rr(t, T, o);
                  E[o]
                    ? E[o].p(s, n)
                    : ((E[o] = ur(s)), E[o].c(), E[o].m(w, null));
                }
                for (; o < E.length; o += 1) E[o].d(1);
                E.length = T.length;
              }
            },
            i: function (t) {
              y || (xt(f), xt(g.$$.fragment, t), (y = !0));
            },
            o: function (t) {
              St(f), St(g.$$.fragment, t), (y = !1);
            },
            d: function (t) {
              t && R(e),
                t && R(c),
                t && R(u),
                S[d].d(),
                At(g),
                M.d(),
                t && R(b),
                t && R(w),
                D(E, t),
                (_ = !1),
                v(k);
            },
          };
        }
        function dr(t, e, n) {
          var r = this,
            o = e.customFields,
            a = e.member,
            c = e.profileLoader;
          rt(function () {
            var t,
              e,
              o = document.querySelector("[data-image-btn]");
            (t = o),
              (e = (function () {
                var t = document.createElement("input");
                return (
                  t.setAttribute("required", ""),
                  t.setAttribute("type", "file"),
                  t.setAttribute("accept", "image/*"),
                  t.setAttribute("profile-image", "true"),
                  t.setAttribute("name", "profile-image"),
                  t.setAttribute("DATA-name", "File"),
                  t.setAttribute("hidden", ""),
                  t.setAttribute("tabindex", "-1"),
                  t
                );
              })()),
              t.parentNode.insertBefore(e, t.nextSibling),
              t.addEventListener("click", function (t) {
                t.preventDefault(), t.stopPropagation(), e.click();
              }),
              e.addEventListener("change", function (t) {
                return i(r, void 0, void 0, function () {
                  var e, r, o, i, u, l;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (e = t.target.files[0]),
                          (r = e.size),
                          !1 === e.type.includes("image"))
                        )
                          return [
                            2,
                            window.$memberstackDom._showMessage(
                              "File is not an image.",
                              !0
                            ),
                          ];
                        if (r > 4e6)
                          return [
                            2,
                            window.$memberstackDom._showMessage(
                              "Image must be less than 2MB.",
                              !0
                            ),
                          ];
                        s.label = 1;
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          n(5, (c = !0)),
                          [
                            4,
                            (0,
                            window.$memberstackDom.updateMemberProfileImage)({
                              profileImage: e,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (o = s.sent()),
                          (i = o.data),
                          (u = o._internalUseOnly.message),
                          n(0, (a.profileImage = i.profileImage), a),
                          u && window.$memberstackDom._showMessage(u, !1),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (l = s.sent()),
                          console.log(l),
                          l.message &&
                            window.$memberstackDom._showMessage(l.message, !0),
                          [3, 4]
                        );
                      case 4:
                        return n(5, (c = !1)), [2];
                    }
                  });
                });
              });
          });
          var u = JSON.parse(JSON.stringify(a.customFields)),
            l = !0;
          return (
            (t.$$set = function (t) {
              "customFields" in t && n(1, (o = t.customFields)),
                "member" in t && n(0, (a = t.member)),
                "profileLoader" in t && n(5, (c = t.profileLoader));
            }),
            [
              a,
              o,
              l,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e;
                  return s(this, function (r) {
                    switch (r.label) {
                      case 0:
                        n(5, (c = !0)), (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [
                            4,
                            window.$memberstackDom.updateMember({
                              customFields: a.customFields,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (t = r.sent()._internalUseOnly.message),
                          n(5, (c = !1)),
                          n(2, (l = !0)),
                          (u = JSON.parse(JSON.stringify(a.customFields))),
                          window.$memberstackDom._showMessage(t, !1),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (e = r.sent()),
                          n(5, (c = !1)),
                          window.$memberstackDom._showMessage(e.message, !0),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              },
              function (t) {
                t.target.value === u[t.target.name]
                  ? n(2, (l = !0))
                  : n(2, (l = !1));
              },
              c,
              function (t) {
                (a.customFields[t.key] = this.value), n(0, a);
              },
            ]
          );
        }
        var fr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, dr, lr, b, {
                customFields: 1,
                member: 0,
                profileLoader: 5,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function hr(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "m14 7h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zm-9-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6v-2zm9 14h-12v-10h12v10zm-6-3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z"
                ),
                z(e, "fill", "none"),
                z(e, "viewBox", "0 0 16 21"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var pr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, hr, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function mr(t, e, n) {
          var r = t.slice();
          return (r[16] = e[n]), r;
        }
        function vr(t) {
          var e;
          return {
            c: function () {
              e = j("Change Password");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function gr(t) {
          var e;
          return {
            c: function () {
              e = j("Set Password");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function br(t) {
          for (
            var e,
              n,
              r,
              o = [],
              i = new Map(),
              s = t[4].authProviders,
              a = function (t) {
                return t[16].provider;
              },
              c = 0;
            c < s.length;
            c += 1
          ) {
            var u = mr(t, s, c),
              l = a(u);
            i.set(l, (o[c] = _r(l, u)));
          }
          return {
            c: function () {
              ((e = q("p")).textContent = "Connect Additional Accounts"),
                (n = N()),
                (r = q("div"));
              for (var t = 0; t < o.length; t += 1) o[t].c();
              z(e, "class", "ms-form__label"),
                z(r, "class", "ms-modal__social");
            },
            m: function (t, i) {
              O(t, e, i), O(t, n, i), O(t, r, i);
              for (var s = 0; s < o.length; s += 1) o[s] && o[s].m(r, null);
            },
            p: function (t, e) {
              210 & e &&
                ((s = t[4].authProviders),
                (o = Mt(o, e, a, 1, t, s, i, r, Ct, _r, null, mr)));
            },
            d: function (t) {
              t && R(e), t && R(n), t && R(r);
              for (var i = 0; i < o.length; i += 1) o[i].d();
            },
          };
        }
        function wr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d = t[16].name + "";
          function f() {
            return t[14](t[16]);
          }
          return {
            c: function () {
              (e = q("button")),
                (n = q("img")),
                (i = N()),
                (s = q("span")),
                (a = j("Connect with ")),
                (c = j(d)),
                w(n.src, (r = t[16].icon)) || z(n, "src", r),
                z(n, "alt", (o = t[16].name)),
                z(e, "class", "ms-modal__social-button"),
                z(e, "type", "button");
            },
            m: function (t, r) {
              O(t, e, r),
                L(e, n),
                L(e, i),
                L(e, s),
                L(s, a),
                L(s, c),
                u || ((l = F(e, "click", f)), (u = !0));
            },
            p: function (e, i) {
              (t = e),
                16 & i && !w(n.src, (r = t[16].icon)) && z(n, "src", r),
                16 & i && o !== (o = t[16].name) && z(n, "alt", o),
                16 & i && d !== (d = t[16].name + "") && G(c, d);
            },
            d: function (t) {
              t && R(e), (u = !1), l();
            },
          };
        }
        function yr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d = t[16].name + "";
          function f() {
            return t[13](t[16]);
          }
          return {
            c: function () {
              (e = q("button")),
                (n = q("img")),
                (i = N()),
                (s = q("span")),
                (a = j("Disconnect ")),
                (c = j(d)),
                w(n.src, (r = t[16].icon)) || z(n, "src", r),
                z(n, "alt", (o = t[16].name)),
                z(e, "class", "ms-modal__social-button"),
                W(e, "background-color", "#F6F6F6"),
                z(e, "type", "button");
            },
            m: function (t, r) {
              O(t, e, r),
                L(e, n),
                L(e, i),
                L(e, s),
                L(s, a),
                L(s, c),
                u || ((l = F(e, "click", f)), (u = !0));
            },
            p: function (e, i) {
              (t = e),
                16 & i && !w(n.src, (r = t[16].icon)) && z(n, "src", r),
                16 & i && o !== (o = t[16].name) && z(n, "alt", o),
                16 & i && d !== (d = t[16].name + "") && G(c, d);
            },
            d: function (t) {
              t && R(e), (u = !1), l();
            },
          };
        }
        function _r(t, e) {
          var n, r, o;
          function i() {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e[9].apply(e, c([e[16]], a(t), !1));
          }
          function s(t, e) {
            return (
              18 & e && (r = null),
              null == r && (r = !!t[1].auth.providers.some(i)),
              r ? yr : wr
            );
          }
          var u = s(e, -1),
            l = u(e);
          return {
            key: t,
            first: null,
            c: function () {
              (n = q("div")),
                l.c(),
                (o = N()),
                z(n, "class", "ms-modal__social-buttons"),
                (this.first = n);
            },
            m: function (t, e) {
              O(t, n, e), l.m(n, null), L(n, o);
            },
            p: function (t, r) {
              u === (u = s((e = t), r)) && l
                ? l.p(e, r)
                : (l.d(1), (l = u(e)) && (l.c(), l.m(n, o)));
            },
            d: function (t) {
              t && R(n), l.d();
            },
          };
        }
        function kr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S,
            P,
            $;
          function C(e) {
            t[10](e);
          }
          function M(e) {
            t[11](e);
          }
          var T = {};
          function E(t, e) {
            return t[1].auth.hasPassword ? vr : gr;
          }
          void 0 !== t[3] && (T.emailInputValid = t[3]),
            void 0 !== t[2] && (T.emailValue = t[2]),
            (d = new ve({ props: T })),
            st.push(function () {
              return Lt(d, "emailInputValid", C);
            }),
            st.push(function () {
              return Lt(d, "emailValue", M);
            }),
            (y = new pr({}));
          var A = E(t),
            I = A(t),
            D = t[4].authProviders.length > 0 && br(t);
          return {
            c: function () {
              (e = q("div")),
                ((n = q("h2")).textContent = "Security"),
                (r = N()),
                (o = q("div")),
                (i = q("button")),
                (s = j("Save")),
                (u = N()),
                (l = q("form")),
                Tt(d.$$.fragment),
                (p = N()),
                (m = q("div")),
                ((g = q("label")).textContent = "Password"),
                (b = N()),
                (w = q("button")),
                Tt(y.$$.fragment),
                (_ = N()),
                I.c(),
                (k = N()),
                D && D.c(),
                (x = H()),
                z(n, "class", "ms-modal__title ms-modal__title--profile"),
                z(i, "class", "ms-modal__save-button"),
                (i.disabled = c = !t[3]),
                z(o, "class", "ms-modal__action-container"),
                z(e, "class", "ms-modal__title-container"),
                z(l, "class", "ms-form"),
                z(l, "action", ""),
                z(l, "method", "post"),
                z(l, "autocomplete", "off"),
                z(g, "class", "ms-form__label"),
                z(g, "for", "setPassword"),
                z(w, "data-cy", "change-password-btn"),
                z(w, "class", "ms-modal__outline-button"),
                z(w, "name", "setPassword"),
                z(m, "class", "ms-form__group");
            },
            m: function (a, c) {
              O(a, e, c),
                L(e, n),
                L(e, r),
                L(e, o),
                L(o, i),
                L(i, s),
                O(a, u, c),
                O(a, l, c),
                Et(d, l, null),
                O(a, p, c),
                O(a, m, c),
                L(m, g),
                L(m, b),
                L(m, w),
                Et(y, w, null),
                L(w, _),
                I.m(w, null),
                O(a, k, c),
                D && D.m(a, c),
                O(a, x, c),
                (S = !0),
                P ||
                  (($ = [
                    F(i, "click", t[5]),
                    F(l, "submit", V(U(t[5]))),
                    F(w, "click", t[12]),
                  ]),
                  (P = !0));
            },
            p: function (t, e) {
              var n = a(e, 1)[0];
              (!S || (8 & n && c !== (c = !t[3]))) && (i.disabled = c);
              var r = {};
              !f &&
                8 & n &&
                ((f = !0),
                (r.emailInputValid = t[3]),
                ft(function () {
                  return (f = !1);
                })),
                !h &&
                  4 & n &&
                  ((h = !0),
                  (r.emailValue = t[2]),
                  ft(function () {
                    return (h = !1);
                  })),
                d.$set(r),
                A !== (A = E(t)) &&
                  (I.d(1), (I = A(t)) && (I.c(), I.m(w, null))),
                t[4].authProviders.length > 0
                  ? D
                    ? D.p(t, n)
                    : ((D = br(t)).c(), D.m(x.parentNode, x))
                  : D && (D.d(1), (D = null));
            },
            i: function (t) {
              S || (xt(d.$$.fragment, t), xt(y.$$.fragment, t), (S = !0));
            },
            o: function (t) {
              St(d.$$.fragment, t), St(y.$$.fragment, t), (S = !1);
            },
            d: function (t) {
              t && R(e),
                t && R(u),
                t && R(l),
                At(d),
                t && R(p),
                t && R(m),
                At(y),
                I.d(),
                t && R(k),
                D && D.d(t),
                t && R(x),
                (P = !1),
                v($);
            },
          };
        }
        function xr(t, e, n) {
          var r;
          y(t, qt, function (t) {
            return n(4, (r = t));
          });
          var a = e.displayProfile,
            c = e.member,
            u = e.emailValue,
            l = e.profileLoader;
          r.authProviders.sort(function (t, e) {
            return p(t) === p(e) ? t.order - e.order : p(t) ? -1 : 1;
          });
          var d = !1;
          function f(t) {
            return i(this, void 0, void 0, function () {
              var e, r, i, a;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    n(8, (l = !0)), (s.label = 1);
                  case 1:
                    return (
                      s.trys.push([1, 3, , 4]),
                      [
                        4,
                        window.$memberstackDom.disconnectProvider({
                          provider: t,
                        }),
                      ]
                    );
                  case 2:
                    return (
                      (e = s.sent()),
                      (r = e.data),
                      (i = e._internalUseOnly.message),
                      n(
                        1,
                        (c = o(o({}, c), {
                          auth: o(o({}, c.auth), { providers: r.providers }),
                        }))
                      ),
                      window.$memberstackDom._showMessage(i, !1),
                      n(8, (l = !1)),
                      [3, 4]
                    );
                  case 3:
                    return (
                      (a = s.sent()),
                      window.$memberstackDom._showMessage(a.message, !0),
                      n(8, (l = !1)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }
          function h(t) {
            return i(this, void 0, void 0, function () {
              var e, r;
              return s(this, function (i) {
                switch (i.label) {
                  case 0:
                    console.log("connect", t), (i.label = 1);
                  case 1:
                    return (
                      i.trys.push([1, 3, , 4]),
                      [
                        4,
                        window.$memberstackDom.connectProvider({ provider: t }),
                      ]
                    );
                  case 2:
                    return (
                      (e = i.sent().data),
                      n(
                        1,
                        (c = o(o({}, c), {
                          auth: o(o({}, c.auth), { providers: e.providers }),
                        }))
                      ),
                      window.$memberstackDom._showMessage(e.message, !1),
                      [3, 4]
                    );
                  case 3:
                    return (
                      (r = i.sent()),
                      window.$memberstackDom._showMessage(r.message, !0),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }
          function p(t) {
            return c.auth.providers.some(function (e) {
              return e.provider === t.provider;
            });
          }
          return (
            (t.$$set = function (t) {
              "displayProfile" in t && n(0, (a = t.displayProfile)),
                "member" in t && n(1, (c = t.member)),
                "emailValue" in t && n(2, (u = t.emailValue)),
                "profileLoader" in t && n(8, (l = t.profileLoader));
            }),
            [
              a,
              c,
              u,
              d,
              r,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e;
                  return s(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!d || !u) return [2];
                        n(8, (l = !0)), (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [
                            4,
                            window.$memberstackDom.updateMemberAuth({
                              email: u,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (t = r.sent()._internalUseOnly.message),
                          window.$memberstackDom._showMessage(t, !1),
                          n(8, (l = !1)),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (e = r.sent()),
                          window.$memberstackDom._showMessage(e.message, !0),
                          n(8, (l = !1)),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              },
              f,
              h,
              l,
              function (t, e) {
                return e.provider === t.provider;
              },
              function (t) {
                n(3, (d = t));
              },
              function (t) {
                n(2, (u = t));
              },
              function () {
                return n(0, (a = "changePassword"));
              },
              function (t) {
                return f(t.provider);
              },
              function (t) {
                return h(t.provider);
              },
            ]
          );
        }
        var Sr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, xr, kr, b, {
                displayProfile: 0,
                member: 1,
                emailValue: 2,
                profileLoader: 8,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Pr(t) {
          var e;
          return {
            c: function () {
              e = j("Change Password");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function $r(t) {
          var e;
          return {
            c: function () {
              e = j("Set Password");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function Cr(t) {
          var e, n, r, o;
          function i(e) {
            t[11](e);
          }
          function s(e) {
            t[12](e);
          }
          var a = {
            passwordLabel: "Current Password",
            passwordPlaceholder: "Enter current password",
          };
          return (
            void 0 !== t[2] && (a.passwordValue = t[2]),
            void 0 !== t[5] && (a.passwordInputValid = t[5]),
            (e = new Ce({ props: a })),
            st.push(function () {
              return Lt(e, "passwordValue", i);
            }),
            st.push(function () {
              return Lt(e, "passwordInputValid", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                !n &&
                  4 & o &&
                  ((n = !0),
                  (i.passwordValue = t[2]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    32 & o &&
                    ((r = !0),
                    (i.passwordInputValid = t[5]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Mr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S,
            P,
            $,
            C;
          function M(t, e) {
            return t[1].auth.hasPassword ? Pr : $r;
          }
          i = new yn({});
          var T = M(t),
            E = T(t),
            A = t[1].auth.hasPassword && Cr(t);
          function I(e) {
            t[13](e);
          }
          function D(e) {
            t[14](e);
          }
          var B = {
            passwordLabel: "New Password",
            passwordPlaceholder: "Enter a strong password",
          };
          function H(e) {
            t[15](e);
          }
          function G(e) {
            t[16](e);
          }
          void 0 !== t[3] && (B.passwordValue = t[3]),
            void 0 !== t[6] && (B.passwordInputValid = t[6]),
            (b = new Ce({ props: B })),
            st.push(function () {
              return Lt(b, "passwordValue", I);
            }),
            st.push(function () {
              return Lt(b, "passwordInputValid", D);
            });
          var J = {
            passwordLabel: "Confirm New Password",
            passwordPlaceholder: "Enter a strong password",
          };
          return (
            void 0 !== t[4] && (J.passwordValue = t[4]),
            void 0 !== t[7] && (J.passwordInputValid = t[7]),
            (k = new Ce({ props: J })),
            st.push(function () {
              return Lt(k, "passwordValue", H);
            }),
            st.push(function () {
              return Lt(k, "passwordInputValid", G);
            }),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  (r = q("div")),
                  (o = q("button")),
                  Tt(i.$$.fragment),
                  (s = N()),
                  (c = q("h2")),
                  E.c(),
                  (u = N()),
                  (l = q("div")),
                  (d = q("button")),
                  (f = j("Save")),
                  (p = N()),
                  (m = q("form")),
                  A && A.c(),
                  (g = N()),
                  Tt(b.$$.fragment),
                  (_ = N()),
                  Tt(k.$$.fragment),
                  z(r, "class", "ms-modal__profile-back"),
                  z(c, "class", "ms-modal__title ms-modal__title--profile"),
                  z(n, "class", "ms-modal__title-group"),
                  z(d, "class", "ms-modal__save-button"),
                  (d.disabled = h =
                    (t[1].auth.hasPassword && !t[5]) || !t[6] || !t[7]),
                  z(l, "class", "ms-modal__action-container"),
                  z(e, "class", "ms-modal__title-container"),
                  z(m, "class", "ms-form"),
                  z(m, "action", ""),
                  z(m, "method", "post"),
                  z(m, "autocomplete", "off");
              },
              m: function (a, h) {
                O(a, e, h),
                  L(e, n),
                  L(n, r),
                  L(r, o),
                  Et(i, o, null),
                  L(n, s),
                  L(n, c),
                  E.m(c, null),
                  L(e, u),
                  L(e, l),
                  L(l, d),
                  L(d, f),
                  O(a, p, h),
                  O(a, m, h),
                  A && A.m(m, null),
                  L(m, g),
                  Et(b, m, null),
                  L(m, _),
                  Et(k, m, null),
                  (P = !0),
                  $ ||
                    ((C = [
                      F(o, "click", t[10]),
                      F(d, "click", t[8]),
                      F(m, "submit", V(U(t[8]))),
                    ]),
                    ($ = !0));
              },
              p: function (t, e) {
                var n = a(e, 1)[0];
                T !== (T = M(t)) &&
                  (E.d(1), (E = T(t)) && (E.c(), E.m(c, null))),
                  (!P ||
                    (226 & n &&
                      h !==
                        (h =
                          (t[1].auth.hasPassword && !t[5]) ||
                          !t[6] ||
                          !t[7]))) &&
                    (d.disabled = h),
                  t[1].auth.hasPassword
                    ? A
                      ? (A.p(t, n), 2 & n && xt(A, 1))
                      : ((A = Cr(t)).c(), xt(A, 1), A.m(m, g))
                    : A &&
                      (_t(),
                      St(A, 1, 1, function () {
                        A = null;
                      }),
                      kt());
                var r = {};
                !w &&
                  8 & n &&
                  ((w = !0),
                  (r.passwordValue = t[3]),
                  ft(function () {
                    return (w = !1);
                  })),
                  !y &&
                    64 & n &&
                    ((y = !0),
                    (r.passwordInputValid = t[6]),
                    ft(function () {
                      return (y = !1);
                    })),
                  b.$set(r);
                var o = {};
                !x &&
                  16 & n &&
                  ((x = !0),
                  (o.passwordValue = t[4]),
                  ft(function () {
                    return (x = !1);
                  })),
                  !S &&
                    128 & n &&
                    ((S = !0),
                    (o.passwordInputValid = t[7]),
                    ft(function () {
                      return (S = !1);
                    })),
                  k.$set(o);
              },
              i: function (t) {
                P ||
                  (xt(i.$$.fragment, t),
                  xt(A),
                  xt(b.$$.fragment, t),
                  xt(k.$$.fragment, t),
                  (P = !0));
              },
              o: function (t) {
                St(i.$$.fragment, t),
                  St(A),
                  St(b.$$.fragment, t),
                  St(k.$$.fragment, t),
                  (P = !1);
              },
              d: function (t) {
                t && R(e),
                  At(i),
                  E.d(),
                  t && R(p),
                  t && R(m),
                  A && A.d(),
                  At(b),
                  At(k),
                  ($ = !1),
                  v(C);
              },
            }
          );
        }
        function Lr(t, e, n) {
          var r = e.displayProfile,
            o = e.profileLoader,
            a = e.member,
            c = "",
            u = "",
            l = "",
            d = !1,
            f = !1,
            h = !1;
          return (
            (t.$$set = function (t) {
              "displayProfile" in t && n(0, (r = t.displayProfile)),
                "profileLoader" in t && n(9, (o = t.profileLoader)),
                "member" in t && n(1, (a = t.member));
            }),
            [
              r,
              a,
              c,
              u,
              l,
              d,
              f,
              h,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e, r;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if (a.auth.hasPassword && !d && !f && !h) return [2];
                        if (!a.auth.hasPassword && !f && !h) return [2];
                        n(9, (o = !0)), (i.label = 1);
                      case 1:
                        return (
                          i.trys.push([1, 6, , 7]),
                          (t = void 0),
                          a.auth.hasPassword
                            ? [
                                4,
                                window.$memberstackDom.updateMemberAuth({
                                  oldPassword: c,
                                  newPassword: u,
                                }),
                              ]
                            : [3, 3]
                        );
                      case 2:
                        return (
                          (e = i.sent()._internalUseOnly.message),
                          (t = e),
                          [3, 5]
                        );
                      case 3:
                        return [
                          4,
                          window.$memberstackDom.setPassword({ password: u }),
                        ];
                      case 4:
                        (e = i.sent()._internalUseOnly.message),
                          n(1, (a.auth.hasPassword = !0), a),
                          (t = e),
                          (i.label = 5);
                      case 5:
                        return (
                          window.$memberstackDom._showMessage(t, !1),
                          n(2, (c = "")),
                          n(3, (u = "")),
                          n(4, (l = "")),
                          n(9, (o = !1)),
                          [3, 7]
                        );
                      case 6:
                        return (
                          (r = i.sent()),
                          window.$memberstackDom._showMessage(r.message, !0),
                          n(9, (o = !1)),
                          [3, 7]
                        );
                      case 7:
                        return [2];
                    }
                  });
                });
              },
              o,
              function () {
                return n(0, (r = "security"));
              },
              function (t) {
                n(2, (c = t));
              },
              function (t) {
                n(5, (d = t));
              },
              function (t) {
                n(3, (u = t));
              },
              function (t) {
                n(6, (f = t));
              },
              function (t) {
                n(4, (l = t));
              },
              function (t) {
                n(7, (h = t));
              },
            ]
          );
        }
        var Tr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, Lr, Mr, b, {
                displayProfile: 0,
                profileLoader: 9,
                member: 1,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Er(t, e) {
          var n = void 0 === e ? {} : e,
            r = n.delay,
            o = void 0 === r ? 0 : r,
            i = n.duration,
            s = void 0 === i ? 400 : i,
            a = n.easing,
            c = void 0 === a ? f : a,
            u = +getComputedStyle(t).opacity;
          return {
            delay: o,
            duration: s,
            easing: c,
            css: function (t) {
              return "opacity: ".concat(t * u);
            },
          };
        }
        function Ar(t) {
          var e, n, r, o;
          return (
            (n = new zt({})),
            {
              c: function () {
                (e = q("div")),
                  Tt(n.$$.fragment),
                  z(e, "class", "ms__profile__loader");
              },
              m: function (t, r) {
                O(t, e, r), Et(n, e, null), (o = !0);
              },
              p: l,
              i: function (t) {
                o ||
                  (xt(n.$$.fragment, t),
                  dt(function () {
                    o && (r || (r = $t(e, Er, {}, !0)), r.run(1));
                  }),
                  (o = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t),
                  r || (r = $t(e, Er, {}, !1)),
                  r.run(0),
                  (o = !1);
              },
              d: function (t) {
                t && R(e), At(n), t && r && r.end();
              },
            }
          );
        }
        var Ir = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, Ar, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function Or(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f = t[2];
          f && (n = X(f, {}));
          var h = t[1];
          return (
            h && (s = X(h, {})),
            {
              c: function () {
                (e = q("button")),
                  n && Tt(n.$$.fragment),
                  (r = N()),
                  (o = j(t[0])),
                  (i = N()),
                  s && Tt(s.$$.fragment),
                  z(
                    e,
                    "class",
                    (c = "ms-modal__regular-button " + (t[5].class || ""))
                  ),
                  W(e, "background", t[4]);
              },
              m: function (a, c) {
                O(a, e, c),
                  n && Et(n, e, null),
                  L(e, r),
                  L(e, o),
                  L(e, i),
                  s && Et(s, e, null),
                  (u = !0),
                  l ||
                    ((d = F(e, "click", function () {
                      g(t[3]) && t[3].apply(this, arguments);
                    })),
                    (l = !0));
              },
              p: function (i, l) {
                var d = a(l, 1)[0];
                if (((t = i), 4 & d && f !== (f = t[2]))) {
                  if (n) {
                    _t();
                    var p = n;
                    St(p.$$.fragment, 1, 0, function () {
                      At(p, 1);
                    }),
                      kt();
                  }
                  f
                    ? (Tt((n = X(f, {})).$$.fragment),
                      xt(n.$$.fragment, 1),
                      Et(n, e, r))
                    : (n = null);
                }
                if (((!u || 1 & d) && G(o, t[0]), 2 & d && h !== (h = t[1]))) {
                  if (s) {
                    _t();
                    var m = s;
                    St(m.$$.fragment, 1, 0, function () {
                      At(m, 1);
                    }),
                      kt();
                  }
                  h
                    ? (Tt((s = X(h, {})).$$.fragment),
                      xt(s.$$.fragment, 1),
                      Et(s, e, null))
                    : (s = null);
                }
                (!u ||
                  (32 & d &&
                    c !==
                      (c =
                        "ms-modal__regular-button " + (t[5].class || "")))) &&
                  z(e, "class", c),
                  (!u || 16 & d) && W(e, "background", t[4]);
              },
              i: function (t) {
                u ||
                  (n && xt(n.$$.fragment, t),
                  s && xt(s.$$.fragment, t),
                  (u = !0));
              },
              o: function (t) {
                n && St(n.$$.fragment, t), s && St(s.$$.fragment, t), (u = !1);
              },
              d: function (t) {
                t && R(e), n && At(n), s && At(s), (l = !1), d();
              },
            }
          );
        }
        function Rr(t, e, n) {
          var r,
            o = ["buttonText", "buttonRightIcon", "buttonLeftIcon", "onClick"],
            i = x(e, o);
          y(t, qt, function (t) {
            return n(6, (r = t));
          });
          var s = e.buttonText,
            a = void 0 === s ? "Submit" : s,
            c = e.buttonRightIcon,
            u = void 0 === c ? null : c,
            l = e.buttonLeftIcon,
            d = void 0 === l ? null : l,
            f = e.onClick,
            p = void 0 === f ? function () {} : f,
            m = "rgb(41, 98, 255)";
          return (
            r.branding.colors.lightMode.primaryButton &&
              (m = r.branding.colors.lightMode.primaryButton),
            (t.$$set = function (t) {
              (e = h(h({}, e), k(t))),
                n(5, (i = x(e, o))),
                "buttonText" in t && n(0, (a = t.buttonText)),
                "buttonRightIcon" in t && n(1, (u = t.buttonRightIcon)),
                "buttonLeftIcon" in t && n(2, (d = t.buttonLeftIcon)),
                "onClick" in t && n(3, (p = t.onClick));
            }),
            [a, u, d, p, m, i]
          );
        }
        var Dr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, Rr, Or, b, {
                buttonText: 0,
                buttonRightIcon: 1,
                buttonLeftIcon: 2,
                onClick: 3,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function qr(t) {
          var e, n, r, o, i;
          return {
            c: function () {
              (e = q("button")),
                (n = j(t[0])),
                z(e, "class", (r = "ms-modal__text-button " + t[3].class)),
                W(e, "color", t[2]);
            },
            m: function (r, s) {
              O(r, e, s),
                L(e, n),
                o ||
                  ((i = F(e, "click", function () {
                    g(t[1]) && t[1].apply(this, arguments);
                  })),
                  (o = !0));
            },
            p: function (o, i) {
              var s = a(i, 1)[0];
              (t = o),
                1 & s && G(n, t[0]),
                8 & s &&
                  r !== (r = "ms-modal__text-button " + t[3].class) &&
                  z(e, "class", r),
                4 & s && W(e, "color", t[2]);
            },
            i: l,
            o: l,
            d: function (t) {
              t && R(e), (o = !1), i();
            },
          };
        }
        function Br(t, e, n) {
          var r,
            o = ["buttonText", "onClick"],
            i = x(e, o);
          y(t, qt, function (t) {
            return n(4, (r = t));
          });
          var s = e.buttonText,
            a = void 0 === s ? "Submit" : s,
            c = e.onClick,
            u = void 0 === c ? function () {} : c,
            l = "rgb(41, 98, 255)";
          return (
            r.branding.colors.lightMode.primaryButton &&
              (l = r.branding.colors.lightMode.primaryButton),
            (t.$$set = function (t) {
              (e = h(h({}, e), k(t))),
                n(3, (i = x(e, o))),
                "buttonText" in t && n(0, (a = t.buttonText)),
                "onClick" in t && n(1, (u = t.onClick));
            }),
            [a, u, l, i]
          );
        }
        var jr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Br, qr, b, { buttonText: 0, onClick: 1 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function Nr(t, e, n) {
          var r = t.slice();
          return (r[8] = e[n]), (r[10] = n), r;
        }
        function Hr(t) {
          var e, n, r;
          return (
            (n = new Dr({
              props: {
                onClick: t[3],
                class:
                  "ms-modal__regular-button--margin-right ms-modal__regular-button--left-icon",
                buttonText: "Manage Subscriptions",
                buttonLeftIcon: Vn,
              },
            })),
            {
              c: function () {
                (e = q("div")),
                  Tt(n.$$.fragment),
                  W(e, "display", "flex"),
                  W(e, "flex-wrap", "wrap");
              },
              m: function (t, o) {
                O(t, e, o), Et(n, e, null), (r = !0);
              },
              p: l,
              i: function (t) {
                r || (xt(n.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(n.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                t && R(e), At(n);
              },
            }
          );
        }
        function Fr(t) {
          for (var e, n, r, o, i = t[1], s = [], a = 0; a < i.length; a += 1)
            s[a] = Ur(Nr(t, i, a));
          var c = function (t) {
            return St(s[t], 1, 1, function () {
              s[t] = null;
            });
          };
          return {
            c: function () {
              ((e = q("h3")).textContent = "Free Plans"), (n = N());
              for (var t = 0; t < s.length; t += 1) s[t].c();
              r = H();
            },
            m: function (t, i) {
              O(t, e, i), O(t, n, i);
              for (var a = 0; a < s.length; a += 1) s[a] && s[a].m(t, i);
              O(t, r, i), (o = !0);
            },
            p: function (t, e) {
              if (22 & e) {
                i = t[1];
                var n = void 0;
                for (n = 0; n < i.length; n += 1) {
                  var o = Nr(t, i, n);
                  s[n]
                    ? (s[n].p(o, e), xt(s[n], 1))
                    : ((s[n] = Ur(o)),
                      s[n].c(),
                      xt(s[n], 1),
                      s[n].m(r.parentNode, r));
                }
                for (_t(), n = i.length; n < s.length; n += 1) c(n);
                kt();
              }
            },
            i: function (t) {
              if (!o) {
                for (var e = 0; e < i.length; e += 1) xt(s[e]);
                o = !0;
              }
            },
            o: function (t) {
              s = s.filter(Boolean);
              for (var e = 0; e < s.length; e += 1) St(s[e]);
              o = !1;
            },
            d: function (t) {
              t && R(e), t && R(n), D(s, t), t && R(r);
            },
          };
        }
        function Ur(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            u,
            l,
            d = t[2].plans.find(f).name + "";
          function f() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return t[6].apply(t, c([t[8]], a(e), !1));
          }
          function h() {
            return t[7](t[8]);
          }
          return (
            (s = new jr({ props: { buttonText: "Remove", onClick: h } })),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  (r = q("b")),
                  (o = j(d)),
                  (i = N()),
                  Tt(s.$$.fragment),
                  (u = N()),
                  z(e, "class", "ms-modal__card");
              },
              m: function (t, a) {
                O(t, e, a),
                  L(e, n),
                  L(n, r),
                  L(r, o),
                  L(e, i),
                  Et(s, e, null),
                  L(e, u),
                  (l = !0);
              },
              p: function (e, n) {
                (t = e),
                  (!l || 6 & n) &&
                    d !== (d = t[2].plans.find(f).name + "") &&
                    G(o, d);
                var r = {};
                2 & n && (r.onClick = h), s.$set(r);
              },
              i: function (t) {
                l || (xt(s.$$.fragment, t), (l = !0));
              },
              o: function (t) {
                St(s.$$.fragment, t), (l = !1);
              },
              d: function (t) {
                t && R(e), At(s);
              },
            }
          );
        }
        function Vr(t) {
          var e;
          return {
            c: function () {
              (e = q("div")).textContent = "You currently have no plans.";
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function zr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c = t[0].stripeCustomerId && Hr(t),
            u = t[1].length > 0 && Fr(t),
            l = !t[0].stripeCustomerId && 0 === t[1].length && Vr();
          return {
            c: function () {
              ((e = q("div")).innerHTML =
                '<h2 class="ms-modal__title ms-modal__title--profile">Plans</h2>'),
                (n = N()),
                c && c.c(),
                (r = N()),
                u && u.c(),
                (o = N()),
                l && l.c(),
                (i = H()),
                z(e, "class", "ms-modal__title-container");
            },
            m: function (t, a) {
              O(t, e, a),
                O(t, n, a),
                c && c.m(t, a),
                O(t, r, a),
                u && u.m(t, a),
                O(t, o, a),
                l && l.m(t, a),
                O(t, i, a),
                (s = !0);
            },
            p: function (t, e) {
              var n = a(e, 1)[0];
              t[0].stripeCustomerId
                ? c
                  ? (c.p(t, n), 1 & n && xt(c, 1))
                  : ((c = Hr(t)).c(), xt(c, 1), c.m(r.parentNode, r))
                : c &&
                  (_t(),
                  St(c, 1, 1, function () {
                    c = null;
                  }),
                  kt()),
                t[1].length > 0
                  ? u
                    ? (u.p(t, n), 2 & n && xt(u, 1))
                    : ((u = Fr(t)).c(), xt(u, 1), u.m(o.parentNode, o))
                  : u &&
                    (_t(),
                    St(u, 1, 1, function () {
                      u = null;
                    }),
                    kt()),
                t[0].stripeCustomerId || 0 !== t[1].length
                  ? l && (l.d(1), (l = null))
                  : l || ((l = Vr()).c(), l.m(i.parentNode, i));
            },
            i: function (t) {
              s || (xt(c), xt(u), (s = !0));
            },
            o: function (t) {
              St(c), St(u), (s = !1);
            },
            d: function (t) {
              t && R(e),
                t && R(n),
                c && c.d(t),
                t && R(r),
                u && u.d(t),
                t && R(o),
                l && l.d(t),
                t && R(i);
            },
          };
        }
        function Gr(t, e, n) {
          var r, o;
          y(t, qt, function (t) {
            return n(2, (o = t));
          });
          var a = e.profileLoader,
            c = e.member;
          function u(t) {
            return i(this, void 0, void 0, function () {
              var e;
              return s(this, function (r) {
                switch (r.label) {
                  case 0:
                    n(5, (a = !0)), (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 3, 4, 5]),
                      [4, window.$memberstackDom.removePlan({ planId: t })]
                    );
                  case 2:
                    return (
                      r.sent(),
                      n(
                        0,
                        (c.planConnections = c.planConnections.filter(function (
                          e
                        ) {
                          return e.planId !== t;
                        })),
                        c
                      ),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (e = r.sent()),
                      console.log(e),
                      window.$memberstackDom._showMessage(e.message, !0),
                      [3, 5]
                    );
                  case 4:
                    return n(5, (a = !1)), [7];
                  case 5:
                    return [2];
                }
              });
            });
          }
          return (
            (t.$$set = function (t) {
              "profileLoader" in t && n(5, (a = t.profileLoader)),
                "member" in t && n(0, (c = t.member));
            }),
            (t.$$.update = function () {
              1 & t.$$.dirty &&
                n(
                  1,
                  (r = c.planConnections.filter(function (t) {
                    return "FREE" === t.type;
                  }))
                );
            }),
            [
              c,
              r,
              o,
              function (t) {
                return i(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          n(5, (a = !0)),
                          [
                            4,
                            window.$memberstackDom.launchStripeCustomerPortal({
                              priceIds: [],
                              autoRedirect: !0,
                            }),
                          ]
                        );
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              },
              u,
              a,
              function (t, e) {
                return e.id === t.planId;
              },
              function (t) {
                return u(t.planId);
              },
            ]
          );
        }
        var Jr = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Gr, zr, b, { profileLoader: 5, member: 0 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function Wr(t) {
          var e, n;
          return (
            (e = new Ir({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Kr(t) {
          var e, n, r, o;
          function i(e) {
            t[17](e);
          }
          function s(e) {
            t[18](e);
          }
          var a = {};
          return (
            void 0 !== t[1] && (a.member = t[1]),
            void 0 !== t[4] && (a.profileLoader = t[4]),
            (e = new Jr({ props: a })),
            st.push(function () {
              return Lt(e, "member", i);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                !n &&
                  2 & o &&
                  ((n = !0),
                  (i.member = t[1]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    16 & o &&
                    ((r = !0),
                    (i.profileLoader = t[4]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Xr(t) {
          var e, n, r, o, i;
          function s(e) {
            t[14](e);
          }
          function a(e) {
            t[15](e);
          }
          function c(e) {
            t[16](e);
          }
          var u = {};
          return (
            void 0 !== t[0] && (u.displayProfile = t[0]),
            void 0 !== t[4] && (u.profileLoader = t[4]),
            void 0 !== t[1] && (u.member = t[1]),
            (e = new Tr({ props: u })),
            st.push(function () {
              return Lt(e, "displayProfile", s);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", a);
            }),
            st.push(function () {
              return Lt(e, "member", c);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (i = !0);
              },
              p: function (t, i) {
                var s = {};
                !n &&
                  1 & i &&
                  ((n = !0),
                  (s.displayProfile = t[0]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    16 & i &&
                    ((r = !0),
                    (s.profileLoader = t[4]),
                    ft(function () {
                      return (r = !1);
                    })),
                  !o &&
                    2 & i &&
                    ((o = !0),
                    (s.member = t[1]),
                    ft(function () {
                      return (o = !1);
                    })),
                  e.$set(s);
              },
              i: function (t) {
                i || (xt(e.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Zr(t) {
          var e, n, r, o, i;
          function s(e) {
            t[11](e);
          }
          function a(e) {
            t[12](e);
          }
          function c(e) {
            t[13](e);
          }
          var u = {};
          return (
            void 0 !== t[0] && (u.displayProfile = t[0]),
            void 0 !== t[4] && (u.profileLoader = t[4]),
            void 0 !== t[1] && (u.member = t[1]),
            (e = new Sr({ props: u })),
            st.push(function () {
              return Lt(e, "displayProfile", s);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", a);
            }),
            st.push(function () {
              return Lt(e, "member", c);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (i = !0);
              },
              p: function (t, i) {
                var s = {};
                !n &&
                  1 & i &&
                  ((n = !0),
                  (s.displayProfile = t[0]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    16 & i &&
                    ((r = !0),
                    (s.profileLoader = t[4]),
                    ft(function () {
                      return (r = !1);
                    })),
                  !o &&
                    2 & i &&
                    ((o = !0),
                    (s.member = t[1]),
                    ft(function () {
                      return (o = !1);
                    })),
                  e.$set(s);
              },
              i: function (t) {
                i || (xt(e.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Yr(t) {
          var e, n, r, o;
          function i(e) {
            t[9](e);
          }
          function s(e) {
            t[10](e);
          }
          var a = { customFields: t[5].customFields };
          return (
            void 0 !== t[1] && (a.member = t[1]),
            void 0 !== t[4] && (a.profileLoader = t[4]),
            (e = new fr({ props: a })),
            st.push(function () {
              return Lt(e, "member", i);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                32 & o && (i.customFields = t[5].customFields),
                  !n &&
                    2 & o &&
                    ((n = !0),
                    (i.member = t[1]),
                    ft(function () {
                      return (n = !1);
                    })),
                  !r &&
                    16 & o &&
                    ((r = !0),
                    (i.profileLoader = t[4]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Qr(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            v,
            g,
            b,
            w,
            y,
            _,
            k,
            x = t[1].auth.email + "";
          function S(e) {
            t[6](e);
          }
          function P(e) {
            t[7](e);
          }
          function $(e) {
            t[8](e);
          }
          s = new Yt({ props: { closeModal: t[3] } });
          var C = { onSuccessLogout: t[2], hideProfileSection: to };
          void 0 !== t[1] && (C.member = t[1]),
            void 0 !== t[0] && (C.displayProfile = t[0]),
            void 0 !== t[4] && (C.profileLoader = t[4]),
            (d = new Yn({ props: C })),
            st.push(function () {
              return Lt(d, "member", S);
            }),
            st.push(function () {
              return Lt(d, "displayProfile", P);
            }),
            st.push(function () {
              return Lt(d, "profileLoader", $);
            });
          var M = t[4] && Wr(),
            T = [Yr, Zr, Xr, Kr],
            E = [];
          function A(t, e) {
            return "profile" === t[0]
              ? 0
              : "security" === t[0]
              ? 1
              : "changePassword" === t[0]
              ? 2
              : "plans" === t[0]
              ? 3
              : -1;
          }
          return (
            ~(b = A(t)) && (w = E[b] = T[b](t)),
            (_ = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  (r = q("div")),
                  (o = j(x)),
                  (i = N()),
                  Tt(s.$$.fragment),
                  (c = N()),
                  (u = q("div")),
                  (l = q("div")),
                  Tt(d.$$.fragment),
                  (m = N()),
                  (v = q("div")),
                  M && M.c(),
                  (g = N()),
                  w && w.c(),
                  (y = N()),
                  Tt(_.$$.fragment),
                  z(n, "class", "ms-modal__header"),
                  z(l, "class", "ms-modal__content-left"),
                  z(v, "class", "ms-modal__content-right"),
                  z(u, "class", "ms-modal__content ms-modal__content--profile"),
                  z(e, "class", "ms-modal ms-modal--profile"),
                  z(e, "id", "ProfileModal");
              },
              m: function (t, a) {
                O(t, e, a),
                  L(e, n),
                  L(n, r),
                  L(r, o),
                  L(n, i),
                  Et(s, n, null),
                  L(e, c),
                  L(e, u),
                  L(u, l),
                  Et(d, l, null),
                  L(u, m),
                  L(u, v),
                  M && M.m(v, null),
                  L(v, g),
                  ~b && E[b].m(v, null),
                  L(e, y),
                  Et(_, e, null),
                  (k = !0);
              },
              p: function (t, e) {
                var n = a(e, 1)[0];
                (!k || 2 & n) && x !== (x = t[1].auth.email + "") && G(o, x);
                var r = {};
                8 & n && (r.closeModal = t[3]), s.$set(r);
                var i = {};
                4 & n && (i.onSuccessLogout = t[2]),
                  !f &&
                    2 & n &&
                    ((f = !0),
                    (i.member = t[1]),
                    ft(function () {
                      return (f = !1);
                    })),
                  !h &&
                    1 & n &&
                    ((h = !0),
                    (i.displayProfile = t[0]),
                    ft(function () {
                      return (h = !1);
                    })),
                  !p &&
                    16 & n &&
                    ((p = !0),
                    (i.profileLoader = t[4]),
                    ft(function () {
                      return (p = !1);
                    })),
                  d.$set(i),
                  t[4]
                    ? M
                      ? 16 & n && xt(M, 1)
                      : ((M = Wr()).c(), xt(M, 1), M.m(v, g))
                    : M &&
                      (_t(),
                      St(M, 1, 1, function () {
                        M = null;
                      }),
                      kt());
                var c = b;
                (b = A(t)) === c
                  ? ~b && E[b].p(t, n)
                  : (w &&
                      (_t(),
                      St(E[c], 1, 1, function () {
                        E[c] = null;
                      }),
                      kt()),
                    ~b
                      ? ((w = E[b]) ? w.p(t, n) : (w = E[b] = T[b](t)).c(),
                        xt(w, 1),
                        w.m(v, null))
                      : (w = null));
              },
              i: function (t) {
                k ||
                  (xt(s.$$.fragment, t),
                  xt(d.$$.fragment, t),
                  xt(M),
                  xt(w),
                  xt(_.$$.fragment, t),
                  (k = !0));
              },
              o: function (t) {
                St(s.$$.fragment, t),
                  St(d.$$.fragment, t),
                  St(M),
                  St(w),
                  St(_.$$.fragment, t),
                  (k = !1);
              },
              d: function (t) {
                t && R(e), At(s), At(d), M && M.d(), ~b && E[b].d(), At(_);
              },
            }
          );
        }
        var to = !1;
        function eo(t, e, n) {
          var r;
          y(t, qt, function (t) {
            return n(5, (r = t));
          });
          var o = e.onSuccessLogout,
            i = e.closeModal,
            s = e.displayProfile,
            a = void 0 === s ? "profile" : s,
            c = e.member,
            u = !1;
          return (
            (t.$$set = function (t) {
              "onSuccessLogout" in t && n(2, (o = t.onSuccessLogout)),
                "closeModal" in t && n(3, (i = t.closeModal)),
                "displayProfile" in t && n(0, (a = t.displayProfile)),
                "member" in t && n(1, (c = t.member));
            }),
            [
              a,
              c,
              o,
              i,
              u,
              r,
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(0, (a = t));
              },
              function (t) {
                n(4, (u = t));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(4, (u = t));
              },
              function (t) {
                n(0, (a = t));
              },
              function (t) {
                n(4, (u = t));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(0, (a = t));
              },
              function (t) {
                n(4, (u = t));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(4, (u = t));
              },
            ]
          );
        }
        var no = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, eo, Qr, b, {
                onSuccessLogout: 2,
                closeModal: 3,
                displayProfile: 0,
                member: 1,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function ro(t) {
          var e, n;
          return {
            c: function () {
              (e = B("svg")),
                z((n = B("path")), "fill", "currentColor"),
                z(
                  n,
                  "d",
                  "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
                ),
                z(e, "fill", "none"),
                z(e, "transform", "rotate(180)"),
                z(e, "viewBox", "0 0 8 12"),
                z(e, "xmlns", "http://www.w3.org/2000/svg");
            },
            m: function (t, r) {
              O(t, e, r), L(e, n);
            },
            p: l,
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        var oo = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, null, ro, b, {}), n;
          }
          return r(e, t), e;
        })(Ot);
        function io(t) {
          var e, n, r, o, i, s, a, c, u;
          return (
            (r = new Nn({})),
            (s = new oo({})),
            {
              c: function () {
                (e = q("button")),
                  (n = q("div")),
                  Tt(r.$$.fragment),
                  (o = j(" Profile")),
                  (i = N()),
                  Tt(s.$$.fragment),
                  z(e, "class", "ms-modal__profile-option"),
                  K(e, "ms-modal__profile-option--active", "profile" === t[0]);
              },
              m: function (l, d) {
                O(l, e, d),
                  L(e, n),
                  Et(r, n, null),
                  L(n, o),
                  L(e, i),
                  Et(s, e, null),
                  (a = !0),
                  c || ((u = F(e, "click", t[7])), (c = !0));
              },
              p: function (t, n) {
                (!a || 1 & n) &&
                  K(e, "ms-modal__profile-option--active", "profile" === t[0]);
              },
              i: function (t) {
                a || (xt(r.$$.fragment, t), xt(s.$$.fragment, t), (a = !0));
              },
              o: function (t) {
                St(r.$$.fragment, t), St(s.$$.fragment, t), (a = !1);
              },
              d: function (t) {
                t && R(e), At(r), At(s), (c = !1), u();
              },
            }
          );
        }
        function so(t) {
          var e, n, r, o, i, s, a, c, u;
          return (
            (r = new Vn({})),
            (s = new oo({})),
            {
              c: function () {
                (e = q("button")),
                  (n = q("div")),
                  Tt(r.$$.fragment),
                  (o = j(" Billing Portal")),
                  (i = N()),
                  Tt(s.$$.fragment),
                  z(e, "class", "ms-modal__profile-option");
              },
              m: function (l, d) {
                O(l, e, d),
                  L(e, n),
                  Et(r, n, null),
                  L(n, o),
                  L(e, i),
                  Et(s, e, null),
                  (a = !0),
                  c || ((u = F(e, "click", t[4])), (c = !0));
              },
              p: l,
              i: function (t) {
                a || (xt(r.$$.fragment, t), xt(s.$$.fragment, t), (a = !0));
              },
              o: function (t) {
                St(r.$$.fragment, t), St(s.$$.fragment, t), (a = !1);
              },
              d: function (t) {
                t && R(e), At(r), At(s), (c = !1), u();
              },
            }
          );
        }
        function ao(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y,
            _,
            k = !t[2] && io(t);
          (i = new Fn({})), (u = new oo({}));
          var x = t[1].stripeCustomerId && so(t);
          return (
            (p = new Gn({})),
            (b = new oo({})),
            {
              c: function () {
                (e = q("div")),
                  k && k.c(),
                  (n = N()),
                  (r = q("button")),
                  (o = q("div")),
                  Tt(i.$$.fragment),
                  (s = j(" Security")),
                  (c = N()),
                  Tt(u.$$.fragment),
                  (l = N()),
                  x && x.c(),
                  (d = N()),
                  (f = q("button")),
                  (h = q("div")),
                  Tt(p.$$.fragment),
                  (m = j(" Logout")),
                  (g = N()),
                  Tt(b.$$.fragment),
                  z(r, "class", "ms-modal__profile-option"),
                  K(
                    r,
                    "ms-modal__profile-option--active",
                    "security" === t[0] || "changePassword" === t[0]
                  ),
                  z(f, "class", "ms-modal__profile-option"),
                  z(e, "class", "ms-modal__mobile-profile-nav");
              },
              m: function (a, v) {
                O(a, e, v),
                  k && k.m(e, null),
                  L(e, n),
                  L(e, r),
                  L(r, o),
                  Et(i, o, null),
                  L(o, s),
                  L(r, c),
                  Et(u, r, null),
                  L(e, l),
                  x && x.m(e, null),
                  L(e, d),
                  L(e, f),
                  L(f, h),
                  Et(p, h, null),
                  L(h, m),
                  L(f, g),
                  Et(b, f, null),
                  (w = !0),
                  y ||
                    ((_ = [F(r, "click", t[8]), F(f, "click", t[3])]),
                    (y = !0));
              },
              p: function (t, o) {
                var i = a(o, 1)[0];
                t[2]
                  ? k &&
                    (_t(),
                    St(k, 1, 1, function () {
                      k = null;
                    }),
                    kt())
                  : k
                  ? (k.p(t, i), 4 & i && xt(k, 1))
                  : ((k = io(t)).c(), xt(k, 1), k.m(e, n)),
                  (!w || 1 & i) &&
                    K(
                      r,
                      "ms-modal__profile-option--active",
                      "security" === t[0] || "changePassword" === t[0]
                    ),
                  t[1].stripeCustomerId
                    ? x
                      ? (x.p(t, i), 2 & i && xt(x, 1))
                      : ((x = so(t)).c(), xt(x, 1), x.m(e, d))
                    : x &&
                      (_t(),
                      St(x, 1, 1, function () {
                        x = null;
                      }),
                      kt());
              },
              i: function (t) {
                w ||
                  (xt(k),
                  xt(i.$$.fragment, t),
                  xt(u.$$.fragment, t),
                  xt(x),
                  xt(p.$$.fragment, t),
                  xt(b.$$.fragment, t),
                  (w = !0));
              },
              o: function (t) {
                St(k),
                  St(i.$$.fragment, t),
                  St(u.$$.fragment, t),
                  St(x),
                  St(p.$$.fragment, t),
                  St(b.$$.fragment, t),
                  (w = !1);
              },
              d: function (t) {
                t && R(e),
                  k && k.d(),
                  At(i),
                  At(u),
                  x && x.d(),
                  At(p),
                  At(b),
                  (y = !1),
                  v(_);
              },
            }
          );
        }
        function co(t, e, n) {
          var r = e.member,
            o = e.onSuccessLogout,
            a = e.displayProfile,
            c = e.profileLoader,
            u = e.hideProfileSection,
            l = qt.subscribe(function (t) {
              if (!t.initialValue) {
                var e = document.getElementById("msOverlay"),
                  n = document.createElement("style"),
                  r = t.branding.colors.lightMode.primaryButton,
                  o = ".ms-modal__profile-option:hover { color: "
                    .concat(r, ";} .ms-modal__profile-option--active { color: ")
                    .concat(r, ";} .ms-modal__save-button { background: ")
                    .concat(
                      r,
                      ";} .ms-modal__save-button:disabled { background: "
                    )
                    .concat(r, ";}");
                n.appendChild(document.createTextNode(o)), e.appendChild(n);
              }
            });
          return (
            ot(function () {
              l();
            }),
            (t.$$set = function (t) {
              "member" in t && n(1, (r = t.member)),
                "onSuccessLogout" in t && n(6, (o = t.onSuccessLogout)),
                "displayProfile" in t && n(0, (a = t.displayProfile)),
                "profileLoader" in t && n(5, (c = t.profileLoader)),
                "hideProfileSection" in t && n(2, (u = t.hideProfileSection));
            }),
            [
              a,
              r,
              u,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e, n, r;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 2, , 3]),
                          [4, window.$memberstackDom.logout()]
                        );
                      case 1:
                        return (
                          (t = i.sent()),
                          (e = t.data),
                          (n = t._internalUseOnly.message),
                          window.$memberstackDom._showMessage(n, !1),
                          o({ type: "LOGOUT", data: e }),
                          [3, 3]
                        );
                      case 2:
                        return (
                          (r = i.sent()),
                          window.$memberstackDom._showMessage(r.message, !0),
                          [3, 3]
                        );
                      case 3:
                        return [2];
                    }
                  });
                });
              },
              function (t) {
                return i(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          n(5, (c = !0)),
                          [
                            4,
                            window.$memberstackDom.launchStripeCustomerPortal({
                              priceIds: [],
                              autoRedirect: !0,
                            }),
                          ]
                        );
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              },
              c,
              o,
              function () {
                return n(0, (a = "profile"));
              },
              function () {
                return n(0, (a = "security"));
              },
            ]
          );
        }
        var uo = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, co, ao, b, {
                member: 1,
                onSuccessLogout: 6,
                displayProfile: 0,
                profileLoader: 5,
                hideProfileSection: 2,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function lo(t, e, n) {
          var r = t.slice();
          return (r[5] = e[n]), (r[6] = e), (r[7] = n), r;
        }
        function fo(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d,
            f,
            h = t[5].label + "";
          function p() {
            t[4].call(a, t[5]);
          }
          return {
            c: function () {
              (e = q("div")),
                (n = q("div")),
                (r = q("label")),
                (o = j(h)),
                (s = N()),
                (a = q("input")),
                (l = N()),
                z(r, "class", "ms-form__label"),
                z(r, "for", (i = t[5].key)),
                z(a, "class", "ms-form__input"),
                z(a, "type", "text"),
                z(a, "placeholder", (c = t[5].label)),
                z(a, "name", (u = t[5].key)),
                z(n, "class", "ms-form__group"),
                z(e, "class", "ms-modal__custom-field-container");
            },
            m: function (i, c) {
              O(i, e, c),
                L(e, n),
                L(n, r),
                L(r, o),
                L(n, s),
                L(n, a),
                J(a, t[0].customFields[t[5].key]),
                L(e, l),
                d || ((f = F(a, "input", p)), (d = !0));
            },
            p: function (e, n) {
              (t = e),
                2 & n && h !== (h = t[5].label + "") && G(o, h),
                2 & n && i !== (i = t[5].key) && z(r, "for", i),
                2 & n && c !== (c = t[5].label) && z(a, "placeholder", c),
                2 & n && u !== (u = t[5].key) && z(a, "name", u),
                3 & n &&
                  a.value !== t[0].customFields[t[5].key] &&
                  J(a, t[0].customFields[t[5].key]);
            },
            d: function (t) {
              t && R(e), (d = !1), f();
            },
          };
        }
        function ho(t) {
          var e,
            n = !0 !== t[5].hidden && fo(t);
          return {
            c: function () {
              n && n.c(), (e = H());
            },
            m: function (t, r) {
              n && n.m(t, r), O(t, e, r);
            },
            p: function (t, r) {
              !0 !== t[5].hidden
                ? n
                  ? n.p(t, r)
                  : ((n = fo(t)).c(), n.m(e.parentNode, e))
                : n && (n.d(1), (n = null));
            },
            d: function (t) {
              n && n.d(t), t && R(e);
            },
          };
        }
        function po(t) {
          for (
            var e, n, r, o, i, s, c = t[1], u = [], d = 0;
            d < c.length;
            d += 1
          )
            u[d] = ho(lo(t, c, d));
          return {
            c: function () {
              e = q("form");
              for (var t = 0; t < u.length; t += 1) u[t].c();
              (n = N()),
                (r = q("div")),
                ((o = q("button")).textContent = "Save"),
                z(e, "class", "ms-form"),
                z(e, "action", ""),
                z(e, "method", "post"),
                z(e, "autocomplete", "off"),
                z(
                  o,
                  "class",
                  "ms-modal__save-button ms-modal__save-button--large"
                ),
                z(r, "class", "ms-modal__action-container");
            },
            m: function (a, c) {
              O(a, e, c);
              for (var l = 0; l < u.length; l += 1) u[l] && u[l].m(e, null);
              O(a, n, c),
                O(a, r, c),
                L(r, o),
                i ||
                  ((s = [F(e, "submit", V(U(t[2]))), F(o, "click", t[2])]),
                  (i = !0));
            },
            p: function (t, n) {
              var r = a(n, 1)[0];
              if (3 & r) {
                c = t[1];
                var o = void 0;
                for (o = 0; o < c.length; o += 1) {
                  var i = lo(t, c, o);
                  u[o]
                    ? u[o].p(i, r)
                    : ((u[o] = ho(i)), u[o].c(), u[o].m(e, null));
                }
                for (; o < u.length; o += 1) u[o].d(1);
                u.length = c.length;
              }
            },
            i: l,
            o: l,
            d: function (t) {
              t && R(e), D(u, t), t && R(n), t && R(r), (i = !1), v(s);
            },
          };
        }
        function mo(t, e, n) {
          var r = e.customFields,
            o = e.member,
            a = e.profileLoader;
          return (
            (t.$$set = function (t) {
              "customFields" in t && n(1, (r = t.customFields)),
                "member" in t && n(0, (o = t.member)),
                "profileLoader" in t && n(3, (a = t.profileLoader));
            }),
            [
              o,
              r,
              function (t) {
                return i(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          n(3, (a = !0)),
                          [
                            4,
                            window.$memberstackDom.updateMember({
                              customFields: o.customFields,
                            }),
                          ]
                        );
                      case 1:
                        return t.sent(), n(3, (a = !1)), [2];
                    }
                  });
                });
              },
              a,
              function (t) {
                (o.customFields[t.key] = this.value), n(0, o);
              },
            ]
          );
        }
        var vo = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, mo, po, b, {
                customFields: 1,
                member: 0,
                profileLoader: 3,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function go(t, e, n) {
          var r = t.slice();
          return (r[16] = e[n]), r;
        }
        function bo(t) {
          var e;
          return {
            c: function () {
              e = j("Change Password");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function wo(t) {
          var e;
          return {
            c: function () {
              e = j("Set Password");
            },
            m: function (t, n) {
              O(t, e, n);
            },
            d: function (t) {
              t && R(e);
            },
          };
        }
        function yo(t) {
          for (
            var e,
              n,
              r,
              o = [],
              i = new Map(),
              s = t[4].authProviders,
              a = function (t) {
                return t[16].provider;
              },
              c = 0;
            c < s.length;
            c += 1
          ) {
            var u = go(t, s, c),
              l = a(u);
            i.set(l, (o[c] = xo(l, u)));
          }
          return {
            c: function () {
              ((e = q("p")).textContent = "Connect Additional Accounts"),
                (n = N()),
                (r = q("div"));
              for (var t = 0; t < o.length; t += 1) o[t].c();
              z(e, "class", "ms-form__label"),
                z(r, "class", "ms-modal__social");
            },
            m: function (t, i) {
              O(t, e, i), O(t, n, i), O(t, r, i);
              for (var s = 0; s < o.length; s += 1) o[s] && o[s].m(r, null);
            },
            p: function (t, e) {
              210 & e &&
                ((s = t[4].authProviders),
                (o = Mt(o, e, a, 1, t, s, i, r, Ct, xo, null, go)));
            },
            d: function (t) {
              t && R(e), t && R(n), t && R(r);
              for (var i = 0; i < o.length; i += 1) o[i].d();
            },
          };
        }
        function _o(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d = t[16].name + "";
          function f() {
            return t[14](t[16]);
          }
          return {
            c: function () {
              (e = q("button")),
                (n = q("img")),
                (i = N()),
                (s = q("span")),
                (a = j("Connect with ")),
                (c = j(d)),
                w(n.src, (r = t[16].icon)) || z(n, "src", r),
                z(n, "alt", (o = t[16].name)),
                z(e, "class", "ms-modal__social-button"),
                z(e, "type", "button");
            },
            m: function (t, r) {
              O(t, e, r),
                L(e, n),
                L(e, i),
                L(e, s),
                L(s, a),
                L(s, c),
                u || ((l = F(e, "click", f)), (u = !0));
            },
            p: function (e, i) {
              (t = e),
                16 & i && !w(n.src, (r = t[16].icon)) && z(n, "src", r),
                16 & i && o !== (o = t[16].name) && z(n, "alt", o),
                16 & i && d !== (d = t[16].name + "") && G(c, d);
            },
            d: function (t) {
              t && R(e), (u = !1), l();
            },
          };
        }
        function ko(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            u,
            l,
            d = t[16].name + "";
          function f() {
            return t[13](t[16]);
          }
          return {
            c: function () {
              (e = q("button")),
                (n = q("img")),
                (i = N()),
                (s = q("span")),
                (a = j("Disconnect ")),
                (c = j(d)),
                w(n.src, (r = t[16].icon)) || z(n, "src", r),
                z(n, "alt", (o = t[16].name)),
                z(e, "class", "ms-modal__social-button"),
                W(e, "background-color", "#F6F6F6"),
                z(e, "type", "button");
            },
            m: function (t, r) {
              O(t, e, r),
                L(e, n),
                L(e, i),
                L(e, s),
                L(s, a),
                L(s, c),
                u || ((l = F(e, "click", f)), (u = !0));
            },
            p: function (e, i) {
              (t = e),
                16 & i && !w(n.src, (r = t[16].icon)) && z(n, "src", r),
                16 & i && o !== (o = t[16].name) && z(n, "alt", o),
                16 & i && d !== (d = t[16].name + "") && G(c, d);
            },
            d: function (t) {
              t && R(e), (u = !1), l();
            },
          };
        }
        function xo(t, e) {
          var n, r, o;
          function i() {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e[9].apply(e, c([e[16]], a(t), !1));
          }
          function s(t, e) {
            return (
              18 & e && (r = null),
              null == r && (r = !!t[1].auth.providers.some(i)),
              r ? ko : _o
            );
          }
          var u = s(e, -1),
            l = u(e);
          return {
            key: t,
            first: null,
            c: function () {
              (n = q("div")),
                l.c(),
                (o = N()),
                z(n, "class", "ms-modal__social-buttons"),
                (this.first = n);
            },
            m: function (t, e) {
              O(t, n, e), l.m(n, null), L(n, o);
            },
            p: function (t, r) {
              u === (u = s((e = t), r)) && l
                ? l.p(e, r)
                : (l.d(1), (l = u(e)) && (l.c(), l.m(n, o)));
            },
            d: function (t) {
              t && R(n), l.d();
            },
          };
        }
        function So(t) {
          var e, n, r, o, i, s, c, u, l, d, f, h, p, m, g, b, w, y, _, k;
          function x(e) {
            t[10](e);
          }
          function S(e) {
            t[11](e);
          }
          var P = {};
          function $(t, e) {
            return t[1].auth.hasPassword ? bo : wo;
          }
          void 0 !== t[3] && (P.emailInputValid = t[3]),
            void 0 !== t[2] && (P.emailValue = t[2]),
            (n = new ve({ props: P })),
            st.push(function () {
              return Lt(n, "emailInputValid", x);
            }),
            st.push(function () {
              return Lt(n, "emailValue", S);
            }),
            (d = new pr({}));
          var C = $(t),
            M = C(t),
            T = t[4].authProviders.length > 0 && yo(t);
          return {
            c: function () {
              (e = q("form")),
                Tt(n.$$.fragment),
                (i = N()),
                (s = q("div")),
                ((c = q("label")).textContent = "Password"),
                (u = N()),
                (l = q("button")),
                Tt(d.$$.fragment),
                (f = N()),
                M.c(),
                (h = N()),
                T && T.c(),
                (p = N()),
                (m = q("div")),
                (g = q("button")),
                (b = j("Save")),
                z(e, "class", "ms-form"),
                z(e, "action", ""),
                z(e, "method", "post"),
                z(e, "autocomplete", "off"),
                z(c, "class", "ms-form__label"),
                z(c, "for", "setPassword"),
                z(
                  l,
                  "class",
                  "ms-modal__outline-button ms-modal__outline-button--mobile"
                ),
                z(l, "name", "setPassword"),
                z(s, "class", "ms-form__group"),
                z(
                  g,
                  "class",
                  "ms-modal__save-button ms-modal__save-button--large"
                ),
                (g.disabled = w = !t[3]),
                z(m, "class", "ms-modal__action-container");
            },
            m: function (r, o) {
              O(r, e, o),
                Et(n, e, null),
                O(r, i, o),
                O(r, s, o),
                L(s, c),
                L(s, u),
                L(s, l),
                Et(d, l, null),
                L(l, f),
                M.m(l, null),
                O(r, h, o),
                T && T.m(r, o),
                O(r, p, o),
                O(r, m, o),
                L(m, g),
                L(g, b),
                (y = !0),
                _ ||
                  ((k = [
                    F(e, "submit", V(U(t[5]))),
                    F(l, "click", t[12]),
                    F(g, "click", t[5]),
                  ]),
                  (_ = !0));
            },
            p: function (t, e) {
              var i = a(e, 1)[0],
                s = {};
              !r &&
                8 & i &&
                ((r = !0),
                (s.emailInputValid = t[3]),
                ft(function () {
                  return (r = !1);
                })),
                !o &&
                  4 & i &&
                  ((o = !0),
                  (s.emailValue = t[2]),
                  ft(function () {
                    return (o = !1);
                  })),
                n.$set(s),
                C !== (C = $(t)) &&
                  (M.d(1), (M = C(t)) && (M.c(), M.m(l, null))),
                t[4].authProviders.length > 0
                  ? T
                    ? T.p(t, i)
                    : ((T = yo(t)).c(), T.m(p.parentNode, p))
                  : T && (T.d(1), (T = null)),
                (!y || (8 & i && w !== (w = !t[3]))) && (g.disabled = w);
            },
            i: function (t) {
              y || (xt(n.$$.fragment, t), xt(d.$$.fragment, t), (y = !0));
            },
            o: function (t) {
              St(n.$$.fragment, t), St(d.$$.fragment, t), (y = !1);
            },
            d: function (t) {
              t && R(e),
                At(n),
                t && R(i),
                t && R(s),
                At(d),
                M.d(),
                t && R(h),
                T && T.d(t),
                t && R(p),
                t && R(m),
                (_ = !1),
                v(k);
            },
          };
        }
        function Po(t, e, n) {
          var r;
          y(t, qt, function (t) {
            return n(4, (r = t));
          });
          var a = e.displayProfile,
            c = e.member,
            u = e.emailValue,
            l = e.profileLoader;
          r.authProviders.sort(function (t, e) {
            return p(t) === p(e) ? t.order - e.order : p(t) ? -1 : 1;
          });
          var d = !1;
          function f(t) {
            return i(this, void 0, void 0, function () {
              var e, r, i, a;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    n(8, (l = !0)), (s.label = 1);
                  case 1:
                    return (
                      s.trys.push([1, 3, , 4]),
                      [
                        4,
                        window.$memberstackDom.disconnectProvider({
                          provider: t,
                        }),
                      ]
                    );
                  case 2:
                    return (
                      (e = s.sent()),
                      (r = e.data),
                      (i = e._internalUseOnly.message),
                      n(
                        1,
                        (c = o(o({}, c), {
                          auth: o(o({}, c.auth), { providers: r.providers }),
                        }))
                      ),
                      window.$memberstackDom._showMessage(i, !1),
                      n(8, (l = !1)),
                      [3, 4]
                    );
                  case 3:
                    return (
                      (a = s.sent()),
                      window.$memberstackDom._showMessage(a.message, !0),
                      n(8, (l = !1)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }
          function h(t) {
            return i(this, void 0, void 0, function () {
              var e, r;
              return s(this, function (i) {
                switch (i.label) {
                  case 0:
                    console.log("connect", t), (i.label = 1);
                  case 1:
                    return (
                      i.trys.push([1, 3, , 4]),
                      [
                        4,
                        window.$memberstackDom.connectProvider({ provider: t }),
                      ]
                    );
                  case 2:
                    return (
                      (e = i.sent().data),
                      n(
                        1,
                        (c = o(o({}, c), {
                          auth: o(o({}, c.auth), { providers: e.providers }),
                        }))
                      ),
                      window.$memberstackDom._showMessage(e.message, !1),
                      [3, 4]
                    );
                  case 3:
                    return (
                      (r = i.sent()),
                      window.$memberstackDom._showMessage(r.message, !0),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }
          function p(t) {
            return c.auth.providers.some(function (e) {
              return e.provider === t.provider;
            });
          }
          return (
            (t.$$set = function (t) {
              "displayProfile" in t && n(0, (a = t.displayProfile)),
                "member" in t && n(1, (c = t.member)),
                "emailValue" in t && n(2, (u = t.emailValue)),
                "profileLoader" in t && n(8, (l = t.profileLoader));
            }),
            [
              a,
              c,
              u,
              d,
              r,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e;
                  return s(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!d || !u) return [2];
                        n(8, (l = !0)), (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [
                            4,
                            window.$memberstackDom.updateMemberAuth({
                              email: u,
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (t = r.sent()._internalUseOnly.message),
                          window.$memberstackDom._showMessage(t, !1),
                          n(8, (l = !1)),
                          [3, 4]
                        );
                      case 3:
                        return (
                          (e = r.sent()),
                          window.$memberstackDom._showMessage(e.message, !0),
                          n(8, (l = !1)),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              },
              f,
              h,
              l,
              function (t, e) {
                return e.provider === t.provider;
              },
              function (t) {
                n(3, (d = t));
              },
              function (t) {
                n(2, (u = t));
              },
              function () {
                return n(0, (a = "changePassword"));
              },
              function (t) {
                return f(t.provider);
              },
              function (t) {
                return h(t.provider);
              },
            ]
          );
        }
        var $o = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, Po, So, b, {
                displayProfile: 0,
                member: 1,
                emailValue: 2,
                profileLoader: 8,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Co(t) {
          var e, n, r, o;
          function i(e) {
            t[9](e);
          }
          function s(e) {
            t[10](e);
          }
          var a = {
            passwordLabel: "Current Password",
            passwordPlaceholder: "Enter a strong password",
          };
          return (
            void 0 !== t[1] && (a.passwordValue = t[1]),
            void 0 !== t[4] && (a.passwordInputValid = t[4]),
            (e = new Ce({ props: a })),
            st.push(function () {
              return Lt(e, "passwordValue", i);
            }),
            st.push(function () {
              return Lt(e, "passwordInputValid", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                !n &&
                  2 & o &&
                  ((n = !0),
                  (i.passwordValue = t[1]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    16 & o &&
                    ((r = !0),
                    (i.passwordInputValid = t[4]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Mo(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            b,
            w,
            y = t[0].auth.hasPassword && Co(t);
          function _(e) {
            t[11](e);
          }
          function k(e) {
            t[12](e);
          }
          var x = {
            passwordLabel: "New Password",
            passwordPlaceholder: "Enter a strong password",
          };
          function S(e) {
            t[13](e);
          }
          function P(e) {
            t[14](e);
          }
          void 0 !== t[2] && (x.passwordValue = t[2]),
            void 0 !== t[5] && (x.passwordInputValid = t[5]),
            (r = new Ce({ props: x })),
            st.push(function () {
              return Lt(r, "passwordValue", _);
            }),
            st.push(function () {
              return Lt(r, "passwordInputValid", k);
            });
          var $ = {
            passwordLabel: "Confirm New Password",
            passwordPlaceholder: "Enter a strong password",
          };
          return (
            void 0 !== t[3] && ($.passwordValue = t[3]),
            void 0 !== t[6] && ($.passwordInputValid = t[6]),
            (c = new Ce({ props: $ })),
            st.push(function () {
              return Lt(c, "passwordValue", S);
            }),
            st.push(function () {
              return Lt(c, "passwordInputValid", P);
            }),
            {
              c: function () {
                (e = q("form")),
                  y && y.c(),
                  (n = N()),
                  Tt(r.$$.fragment),
                  (s = N()),
                  Tt(c.$$.fragment),
                  (d = N()),
                  (f = q("div")),
                  (h = q("button")),
                  (p = j("Save")),
                  z(e, "class", "ms-form"),
                  z(e, "action", ""),
                  z(e, "method", "post"),
                  z(e, "autocomplete", "off"),
                  z(
                    h,
                    "class",
                    "ms-modal__save-button ms-modal__save-button--large"
                  ),
                  (h.disabled = m =
                    (t[0].auth.hasPassword && !t[4]) || !t[5] || !t[6]),
                  z(f, "class", "ms-modal__action-container");
              },
              m: function (o, i) {
                O(o, e, i),
                  y && y.m(e, null),
                  L(e, n),
                  Et(r, e, null),
                  L(e, s),
                  Et(c, e, null),
                  O(o, d, i),
                  O(o, f, i),
                  L(f, h),
                  L(h, p),
                  (g = !0),
                  b ||
                    ((w = [F(e, "submit", V(U(t[7]))), F(h, "click", t[7])]),
                    (b = !0));
              },
              p: function (t, s) {
                var d = a(s, 1)[0];
                t[0].auth.hasPassword
                  ? y
                    ? (y.p(t, d), 1 & d && xt(y, 1))
                    : ((y = Co(t)).c(), xt(y, 1), y.m(e, n))
                  : y &&
                    (_t(),
                    St(y, 1, 1, function () {
                      y = null;
                    }),
                    kt());
                var f = {};
                !o &&
                  4 & d &&
                  ((o = !0),
                  (f.passwordValue = t[2]),
                  ft(function () {
                    return (o = !1);
                  })),
                  !i &&
                    32 & d &&
                    ((i = !0),
                    (f.passwordInputValid = t[5]),
                    ft(function () {
                      return (i = !1);
                    })),
                  r.$set(f);
                var p = {};
                !u &&
                  8 & d &&
                  ((u = !0),
                  (p.passwordValue = t[3]),
                  ft(function () {
                    return (u = !1);
                  })),
                  !l &&
                    64 & d &&
                    ((l = !0),
                    (p.passwordInputValid = t[6]),
                    ft(function () {
                      return (l = !1);
                    })),
                  c.$set(p),
                  (!g ||
                    (113 & d &&
                      m !==
                        (m =
                          (t[0].auth.hasPassword && !t[4]) ||
                          !t[5] ||
                          !t[6]))) &&
                    (h.disabled = m);
              },
              i: function (t) {
                g ||
                  (xt(y), xt(r.$$.fragment, t), xt(c.$$.fragment, t), (g = !0));
              },
              o: function (t) {
                St(y), St(r.$$.fragment, t), St(c.$$.fragment, t), (g = !1);
              },
              d: function (t) {
                t && R(e),
                  y && y.d(),
                  At(r),
                  At(c),
                  t && R(d),
                  t && R(f),
                  (b = !1),
                  v(w);
              },
            }
          );
        }
        function Lo(t, e, n) {
          var r = e.profileLoader,
            o = e.member,
            a = "",
            c = "",
            u = "",
            l = !1,
            d = !1,
            f = !1;
          return (
            (t.$$set = function (t) {
              "profileLoader" in t && n(8, (r = t.profileLoader)),
                "member" in t && n(0, (o = t.member));
            }),
            [
              o,
              a,
              c,
              u,
              l,
              d,
              f,
              function (t) {
                return i(this, void 0, void 0, function () {
                  var t, e, i;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (o.auth.hasPassword && !l && !d && !f) return [2];
                        if (!o.auth.hasPassword && !d && !f) return [2];
                        n(8, (r = !0)), (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 6, , 7]),
                          (t = void 0),
                          o.auth.hasPassword
                            ? [
                                4,
                                window.$memberstackDom.updateMemberAuth({
                                  oldPassword: a,
                                  newPassword: c,
                                }),
                              ]
                            : [3, 3]
                        );
                      case 2:
                        return (
                          (e = s.sent()._internalUseOnly.message),
                          (t = e),
                          [3, 5]
                        );
                      case 3:
                        return [
                          4,
                          window.$memberstackDom.setPassword({ password: c }),
                        ];
                      case 4:
                        (e = s.sent()._internalUseOnly.message),
                          n(0, (o.auth.hasPassword = !0), o),
                          (t = e),
                          (s.label = 5);
                      case 5:
                        return (
                          window.$memberstackDom._showMessage(t, !1),
                          n(1, (a = "")),
                          n(2, (c = "")),
                          n(3, (u = "")),
                          n(8, (r = !1)),
                          [3, 7]
                        );
                      case 6:
                        return (
                          (i = s.sent()),
                          window.$memberstackDom._showMessage(i.message, !0),
                          n(8, (r = !1)),
                          [3, 7]
                        );
                      case 7:
                        return [2];
                    }
                  });
                });
              },
              r,
              function (t) {
                n(1, (a = t));
              },
              function (t) {
                n(4, (l = t));
              },
              function (t) {
                n(2, (c = t));
              },
              function (t) {
                n(5, (d = t));
              },
              function (t) {
                n(3, (u = t));
              },
              function (t) {
                n(6, (f = t));
              },
            ]
          );
        }
        var To = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return It(n, e, Lo, Mo, b, { profileLoader: 8, member: 0 }), n;
          }
          return r(e, t), e;
        })(Ot);
        function Eo(t) {
          var e, n, r, o, i, s;
          return (
            (r = new yn({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("button")),
                  Tt(r.$$.fragment),
                  z(e, "class", "ms-modal__profile-back--mobile");
              },
              m: function (a, c) {
                O(a, e, c),
                  L(e, n),
                  Et(r, n, null),
                  (o = !0),
                  i || ((s = F(n, "click", t[8])), (i = !0));
              },
              p: l,
              i: function (t) {
                o || (xt(r.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(r.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                t && R(e), At(r), (i = !1), s();
              },
            }
          );
        }
        function Ao(t) {
          var e, n;
          return (
            (e = new te({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: l,
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Io(t) {
          var e, n, r;
          return {
            c: function () {
              w((e = q("img")).src, (n = t[7].branding.logo)) || z(e, "src", n),
                z(e, "alt", (r = t[7].name));
            },
            m: function (t, n) {
              O(t, e, n);
            },
            p: function (t, o) {
              128 & o && !w(e.src, (n = t[7].branding.logo)) && z(e, "src", n),
                128 & o && r !== (r = t[7].name) && z(e, "alt", r);
            },
            i: l,
            o: l,
            d: function (t) {
              t && R(e);
            },
          };
        }
        function Oo(t) {
          var e, n;
          return (
            (e = new Ir({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Ro(t) {
          var e, n, r, o, i;
          function s(e) {
            t[17](e);
          }
          function a(e) {
            t[18](e);
          }
          function c(e) {
            t[19](e);
          }
          var u = {};
          return (
            void 0 !== t[0] && (u.displayProfile = t[0]),
            void 0 !== t[6] && (u.profileLoader = t[6]),
            void 0 !== t[1] && (u.member = t[1]),
            (e = new To({ props: u })),
            st.push(function () {
              return Lt(e, "displayProfile", s);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", a);
            }),
            st.push(function () {
              return Lt(e, "member", c);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (i = !0);
              },
              p: function (t, i) {
                var s = {};
                !n &&
                  1 & i &&
                  ((n = !0),
                  (s.displayProfile = t[0]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    64 & i &&
                    ((r = !0),
                    (s.profileLoader = t[6]),
                    ft(function () {
                      return (r = !1);
                    })),
                  !o &&
                    2 & i &&
                    ((o = !0),
                    (s.member = t[1]),
                    ft(function () {
                      return (o = !1);
                    })),
                  e.$set(s);
              },
              i: function (t) {
                i || (xt(e.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Do(t) {
          var e, n, r, o, i;
          function s(e) {
            t[14](e);
          }
          function a(e) {
            t[15](e);
          }
          function c(e) {
            t[16](e);
          }
          var u = {};
          return (
            void 0 !== t[0] && (u.displayProfile = t[0]),
            void 0 !== t[6] && (u.profileLoader = t[6]),
            void 0 !== t[1] && (u.member = t[1]),
            (e = new $o({ props: u })),
            st.push(function () {
              return Lt(e, "displayProfile", s);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", a);
            }),
            st.push(function () {
              return Lt(e, "member", c);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (i = !0);
              },
              p: function (t, i) {
                var s = {};
                !n &&
                  1 & i &&
                  ((n = !0),
                  (s.displayProfile = t[0]),
                  ft(function () {
                    return (n = !1);
                  })),
                  !r &&
                    64 & i &&
                    ((r = !0),
                    (s.profileLoader = t[6]),
                    ft(function () {
                      return (r = !1);
                    })),
                  !o &&
                    2 & i &&
                    ((o = !0),
                    (s.member = t[1]),
                    ft(function () {
                      return (o = !1);
                    })),
                  e.$set(s);
              },
              i: function (t) {
                i || (xt(e.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function qo(t) {
          var e, n, r, o;
          function i(e) {
            t[12](e);
          }
          function s(e) {
            t[13](e);
          }
          var a = { customFields: t[7].customFields };
          return (
            void 0 !== t[1] && (a.member = t[1]),
            void 0 !== t[6] && (a.profileLoader = t[6]),
            (e = new vo({ props: a })),
            st.push(function () {
              return Lt(e, "member", i);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                128 & o && (i.customFields = t[7].customFields),
                  !n &&
                    2 & o &&
                    ((n = !0),
                    (i.member = t[1]),
                    ft(function () {
                      return (n = !1);
                    })),
                  !r &&
                    64 & o &&
                    ((r = !0),
                    (i.profileLoader = t[6]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Bo(t) {
          var e, n, r, o, i;
          function s(e) {
            t[9](e);
          }
          function a(e) {
            t[10](e);
          }
          function c(e) {
            t[11](e);
          }
          var u = { onSuccessLogout: t[3], hideProfileSection: t[5] };
          return (
            void 0 !== t[1] && (u.member = t[1]),
            void 0 !== t[0] && (u.displayProfile = t[0]),
            void 0 !== t[6] && (u.profileLoader = t[6]),
            (e = new uo({ props: u })),
            st.push(function () {
              return Lt(e, "member", s);
            }),
            st.push(function () {
              return Lt(e, "displayProfile", a);
            }),
            st.push(function () {
              return Lt(e, "profileLoader", c);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (i = !0);
              },
              p: function (t, i) {
                var s = {};
                8 & i && (s.onSuccessLogout = t[3]),
                  32 & i && (s.hideProfileSection = t[5]),
                  !n &&
                    2 & i &&
                    ((n = !0),
                    (s.member = t[1]),
                    ft(function () {
                      return (n = !1);
                    })),
                  !r &&
                    1 & i &&
                    ((r = !0),
                    (s.displayProfile = t[0]),
                    ft(function () {
                      return (r = !1);
                    })),
                  !o &&
                    64 & i &&
                    ((o = !0),
                    (s.profileLoader = t[6]),
                    ft(function () {
                      return (o = !1);
                    })),
                  e.$set(s);
              },
              i: function (t) {
                i || (xt(e.$$.fragment, t), (i = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (i = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function jo(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c,
            u,
            l,
            d,
            f,
            h,
            p,
            m,
            v,
            g,
            b,
            w,
            y,
            _,
            k,
            x,
            S =
              ("profile" === t[0] ||
                "changePassword" === t[0] ||
                "security" === t[0]) &&
              Eo(t),
            P = [Io, Ao],
            $ = [];
          function C(t, e) {
            return t[7].branding.logo ? 0 : 1;
          }
          (s = C(t)),
            (c = $[s] = P[s](t)),
            (p = new Yt({ props: { closeModal: t[4] } }));
          var M = t[6] && Oo(),
            T = [Bo, qo, Do, Ro],
            E = [];
          function A(t, e) {
            return "profile-nav" === t[0]
              ? 0
              : "profile" === t[0]
              ? 1
              : "security" === t[0]
              ? 2
              : "changePassword" === t[0]
              ? 3
              : -1;
          }
          return (
            ~(w = A(t)) && (y = E[w] = T[w](t)),
            (k = new Ie({})),
            {
              c: function () {
                (e = q("div")),
                  (n = q("div")),
                  S && S.c(),
                  (r = N()),
                  (o = q("div")),
                  (i = q("figure")),
                  c.c(),
                  (u = N()),
                  (l = q("div")),
                  (d = q("b")),
                  (f = j(t[2])),
                  (h = N()),
                  Tt(p.$$.fragment),
                  (m = N()),
                  (v = q("div")),
                  (g = q("div")),
                  M && M.c(),
                  (b = N()),
                  y && y.c(),
                  (_ = N()),
                  Tt(k.$$.fragment),
                  z(i, "class", "ms-modal__figure ms-modal__figure--mobile"),
                  z(o, "class", "ms-modal__header--center"),
                  z(n, "class", "ms-modal__header--mobile"),
                  z(g, "class", "ms-modal__content--mobile"),
                  z(v, "class", "ms-modal__content ms-modal__content--profile"),
                  z(e, "class", "ms-modal ms-modal--profile"),
                  z(e, "id", "MobileProfileModal");
              },
              m: function (t, a) {
                O(t, e, a),
                  L(e, n),
                  S && S.m(n, null),
                  L(n, r),
                  L(n, o),
                  L(o, i),
                  $[s].m(i, null),
                  L(o, u),
                  L(o, l),
                  L(l, d),
                  L(d, f),
                  L(n, h),
                  Et(p, n, null),
                  L(e, m),
                  L(e, v),
                  L(v, g),
                  M && M.m(g, null),
                  L(g, b),
                  ~w && E[w].m(g, null),
                  L(e, _),
                  Et(k, e, null),
                  (x = !0);
              },
              p: function (t, e) {
                var o = a(e, 1)[0];
                "profile" === t[0] ||
                "changePassword" === t[0] ||
                "security" === t[0]
                  ? S
                    ? (S.p(t, o), 1 & o && xt(S, 1))
                    : ((S = Eo(t)).c(), xt(S, 1), S.m(n, r))
                  : S &&
                    (_t(),
                    St(S, 1, 1, function () {
                      S = null;
                    }),
                    kt());
                var u = s;
                (s = C(t)) === u
                  ? $[s].p(t, o)
                  : (_t(),
                    St($[u], 1, 1, function () {
                      $[u] = null;
                    }),
                    kt(),
                    (c = $[s]) ? c.p(t, o) : (c = $[s] = P[s](t)).c(),
                    xt(c, 1),
                    c.m(i, null)),
                  (!x || 4 & o) && G(f, t[2]);
                var l = {};
                16 & o && (l.closeModal = t[4]),
                  p.$set(l),
                  t[6]
                    ? M
                      ? 64 & o && xt(M, 1)
                      : ((M = Oo()).c(), xt(M, 1), M.m(g, b))
                    : M &&
                      (_t(),
                      St(M, 1, 1, function () {
                        M = null;
                      }),
                      kt());
                var d = w;
                (w = A(t)) === d
                  ? ~w && E[w].p(t, o)
                  : (y &&
                      (_t(),
                      St(E[d], 1, 1, function () {
                        E[d] = null;
                      }),
                      kt()),
                    ~w
                      ? ((y = E[w]) ? y.p(t, o) : (y = E[w] = T[w](t)).c(),
                        xt(y, 1),
                        y.m(g, null))
                      : (y = null));
              },
              i: function (t) {
                x ||
                  (xt(S),
                  xt(c),
                  xt(p.$$.fragment, t),
                  xt(M),
                  xt(y),
                  xt(k.$$.fragment, t),
                  (x = !0));
              },
              o: function (t) {
                St(S),
                  St(c),
                  St(p.$$.fragment, t),
                  St(M),
                  St(y),
                  St(k.$$.fragment, t),
                  (x = !1);
              },
              d: function (t) {
                t && R(e),
                  S && S.d(),
                  $[s].d(),
                  At(p),
                  M && M.d(),
                  ~w && E[w].d(),
                  At(k);
              },
            }
          );
        }
        function No(t, e, n) {
          var r;
          y(t, qt, function (t) {
            return n(7, (r = t));
          });
          var o = e.onSuccessLogout,
            i = e.closeModal,
            s = e.displayProfile,
            a = void 0 === s ? "profile-nav" : s,
            c = e.member,
            u = e.profileTitle,
            l = void 0 === u ? c.auth.email : u,
            d = !1,
            f = !1;
          return (
            r.customFields.filter(function (t) {
              return !t.hidden;
            }).length || ((a = "security"), (d = !0)),
            (t.$$set = function (t) {
              "onSuccessLogout" in t && n(3, (o = t.onSuccessLogout)),
                "closeModal" in t && n(4, (i = t.closeModal)),
                "displayProfile" in t && n(0, (a = t.displayProfile)),
                "member" in t && n(1, (c = t.member)),
                "profileTitle" in t && n(2, (l = t.profileTitle));
            }),
            (t.$$.update = function () {
              3 & t.$$.dirty &&
                ("profile-nav" === a
                  ? n(2, (l = c.auth.email))
                  : "profile" === a
                  ? n(2, (l = "My Profile"))
                  : "security" === a
                  ? n(2, (l = "Security"))
                  : "changePassword" === a &&
                    (c.auth.hasPassword
                      ? n(2, (l = "Change Password"))
                      : n(2, (l = "Set Password"))));
            }),
            [
              a,
              c,
              l,
              o,
              i,
              d,
              f,
              r,
              function () {
                return n(0, (a = "profile-nav"));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(0, (a = t));
              },
              function (t) {
                n(6, (f = t));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(6, (f = t));
              },
              function (t) {
                n(0, (a = t));
              },
              function (t) {
                n(6, (f = t));
              },
              function (t) {
                n(1, (c = t));
              },
              function (t) {
                n(0, (a = t));
              },
              function (t) {
                n(6, (f = t));
              },
              function (t) {
                n(1, (c = t));
              },
            ]
          );
        }
        var Ho = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, No, jo, b, {
                onSuccessLogout: 3,
                closeModal: 4,
                displayProfile: 0,
                member: 1,
                profileTitle: 2,
              }),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        function Fo(t) {
          T(
            t,
            "svelte-15qvroz",
            '@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");.svelte-15qvroz{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#msOverlay.svelte-15qvroz{position:fixed;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:99999;overflow:scroll;font-family:"Plus Jakarta Sans", sans-serif;padding:5vh 5vw}.--hide{display:none}.--flex-h-center{display:flex;align-items:center}.ms__loader{position:relative;z-index:10000000}#msLoader path{fill:#007ace}.ms__profile__loader{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgb(255 255 255 / 75%)}.ms-modal{box-sizing:border-box;margin:auto;min-width:0;position:relative;outline:none;background:white;border-radius:16px;box-shadow:2px 2px 12px rgb(0 0 0 / 10%);width:360px;color:rgb(10, 10, 10)}.ms-modal--profile{width:700px}.ms-modal__close{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;right:16px;z-index:10;line-height:0}.ms-modal__close button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__close button:hover{color:#0a0a0a}.ms-modal__back{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__back button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__back button:hover, .ms-modal__profile-back\n      button:hover{color:#0a0a0a}.ms-modal__back svg{height:12px}.ms-modal__profile-back button{appearance:none;padding:5px;margin-right:6px;outline:none;width:25px;height:25px;border:0;background:transparent;cursor:pointer;color:#5c5c5c;display:flex;align-items:stretch;justify-content:center}.ms-modal__profile-back--mobile{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__profile-back--mobile button{appearance:none;padding:0;outline:none;height:11px;width:7px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__profile-back--mobile button:hover{color:#0a0a0a}.ms-modal__header{display:flex;align-items:center;padding:12px}.ms-modal__header--mobile{display:flex;padding:42px 42px 16px 42px;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__header--center{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__content{padding:28px 28px 20px;width:100%;box-sizing:border-box;margin:0 auto}.ms-modal__content--profile{padding:0;display:flex;flex-wrap:wrap;align-content:stretch;align-items:stretch;border-top:1px solid #dddddd}.ms-modal__content-left{display:flex;flex-direction:column;align-items:flex-start;padding:20px;border-right:1px solid #dddddd;min-width:160px}.ms-modal__content-right{padding:20px;flex-grow:1;height:55vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__content-right h3{margin-top:40px !important;margin-bottom:10px !important;font-size:18px !important;line-height:1em !important;font-weight:700 !important}.ms-modal__content--mobile{padding:12px;flex-grow:1;height:42vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__mobile-profile-nav{display:flex;flex-direction:column;align-content:center;align-items:stretch;flex-wrap:nowrap}.ms-modal__mobile-profile-nav button{display:flex;flex-direction:row;align-content:center;align-items:center;flex-wrap:nowrap;justify-content:space-between;padding:12px;width:100%;margin-bottom:10px}.ms-modal__figure{margin:8px auto;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-shrink:0;line-height:1}.ms-modal__figure--profile{width:24px;height:24px;padding:0px;margin:0px 8px 0px 0px}.ms-modal__figure--mobile{margin:0px 0px 8px 0px}.ms-modal__figure img, .ms-modal__figure svg{width:auto;height:100%;max-height:42px;text-align:center;object-fit:cover;color:transparent}.ms-modal__title-container{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.ms-modal__title{margin-bottom:36px;margin-top:0;text-align:center;font-size:24px;line-height:32px;font-weight:700}.ms-modal__title--profile{margin-bottom:0px}.ms-modal__title-group{display:flex;align-items:center}.ms-modal__title--sub-text{margin-bottom:8px}.ms-modal__text{font-weight:500;font-size:16px;line-height:28px;text-align:center;margin:0 0 20px 0}.ms-modal__regular-button{color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__regular-button svg{height:16px;margin-left:6px}.ms-modal__regular-button--left-icon svg{margin-right:6px;margin-left:0px}.ms-modal__regular-button--right-icon svg{margin-left:6px;margin-right:0px}.ms-modal__regular-button--margin-right{margin-right:12px}.ms-modal__text-button{color:#fff;background-color:transparent;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__card{box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,\n      0px 2px 2px rgba(0, 0, 0, 0.04);padding:12px;display:flex;flex-direction:row;margin-bottom:12px;border:1px solid rgb(221, 221, 221);border-radius:10px;box-sizing:border-box;width:100%;cursor:default;background:rgb(255, 255, 255);align-items:center;justify-content:space-between}.ms-form{width:100% !important;min-width:0 !important;padding:0 !important}.ms-form__group{margin-bottom:20px}.ms-form__flex{display:flex;justify-content:space-between;align-content:center}.ms-form__flex--centered{justify-content:center}.ms-form__label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:24px;font-weight:700;text-align:left}.ms-form__fieldset{display:flex;justify-content:space-between;padding:0;border:none}.ms-form__input{box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;font-size:16px;font-weight:400;padding:15px;width:100%}.ms-form__password-container{display:flex;justify-content:space-between;align-content:center;box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;width:100%}.ms-form__password-container:focus-within{border:1px solid rgb(0, 68, 252);outline:rgb(0, 68, 252) solid 1px}.ms-form__password-container:focus-within input{outline:none;border-color:rgb(201, 201, 201);box-shadow:none}.ms-form__input--password{border:none}.ms-form__input--token{font-weight:500;font-size:24.19px;line-height:32px;text-align:center;color:#000000;padding:9px;max-width:42px}.ms-form__show-toggle{cursor:pointer;background:transparent;border-radius:0px 6px 6px 0px;padding:0px 8px;display:flex;align-items:center}.ms-form__eye{display:block;width:22px}.ms-form__eye-slash{display:block;width:22px}.ms-form__error{font-weight:500;font-size:12px;line-height:16px;color:#e40023;margin-top:4px;display:flex;align-items:baseline}.ms-form__error svg{width:10px;height:10px;margin-right:5px}.ms-form__label--right a{color:rgb(10, 10, 10) !important;text-decoration:none;font-weight:400}.ms-form__button{border-radius:6px;font-weight:700;font-size:16px;padding-left:22px;padding-right:22px;height:52px;border:none;display:block;width:100%;background-color:rgb(41, 98, 255);color:#fff;transition:background-color 0.5s ease;cursor:pointer}.ms-form__button:hover{background-color:#0745ff}.ms-form__button:disabled{background-color:#96c0fe;color:#fff;pointer-events:none;display:flex;justify-content:center;align-items:center}.ms-form__button--text{background-color:transparent;padding:0px;height:auto;margin-bottom:0px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500;color:#0a0a0a;opacity:0.8}.ms-form__button--text:hover{background-color:transparent}.ms-form__button--top-spacing{margin-top:10px}#msFormLoader path{fill:#fff}a.ms-form__link, div.ms-form__link{margin-top:8px;font-weight:500;font-size:14px;line-height:24px;color:rgb(10, 10, 10) !important;text-decoration:none;opacity:0.8;cursor:pointer}.ms-modal__cancel-button{background:#f6f6f6;color:#828282;padding:8px;margin-right:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button{background:#2962ff;color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button:disabled{background:#80a1fc;color:#fff;cursor:default;opacity:0.4}.ms-modal__save-button--large{padding:12px;font-weight:700;font-size:14px;line-height:16px;width:100%}.ms-modal__outline-button{display:block !important;background:#fff;color:#0a0a0a;font-weight:700;font-size:14px;line-height:16px;padding:8px;margin-right:8px;border-radius:4px;border:1px solid #dddddd;cursor:pointer}.ms-modal__outline-button svg{display:inline !important;height:15px;margin-right:6px}.ms-modal__outline-button--mobile{width:100%}.ms-modal__button-label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500}.ms-modal__profile-option{cursor:pointer;margin-bottom:20px;font-weight:500;font-size:16px;line-height:28px;background:transparent;border:none;padding:0px}.ms-modal__profile-option svg{display:inline !important;height:14px;margin-right:8px}.ms-modal__profile-option:hover{color:#2962ff}.ms-modal__profile-option--active{color:#2962ff}.ms-modal__profile-image-container{display:flex;justify-content:flex-start;width:100%;margin-bottom:21px;align-items:center;flex-direction:row;gap:12px}.ms-modal__profile-image{width:42px;height:42px;border-radius:50%;object-fit:cover;overflow:hidden;background:#ddd;border:1px solid #c9c9c9;display:flex;justify-content:center;align-items:center}.ms-modal__profile-image img{width:100%;height:100%;object-fit:cover}.ms-modal__social-button{display:flex;align-items:center;justify-content:center;width:100%;height:52px;border-radius:6px;font-weight:700;font-size:16px;line-height:28px;color:#0a0a0a;background:none;border:1px solid #c9c9c9;cursor:pointer;margin-bottom:8px}.ms-modal__social-button img, .ms-modal__social-button\n      svg{height:16px;margin-right:8px}.ms-modal__social-button[disabled]{background:#f6f6f6}.ms-modal__social-divider{display:flex;align-items:center;margin:20px 0px}.ms-modal__divider-line{text-align:center;background:#dddddd;height:1px;width:100%}.ms-modal__divider-text{padding:0px 4px}.ms-modal__footer{text-align:center;width:100%;box-sizing:border-box;margin:0;min-width:0;background:#f6f6f6;padding-top:10px;padding-bottom:10px;border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top:1px solid;border-top-color:#dddddd;font-size:12px;line-height:16px;font-weight:500}.ms-modal__footer a{color:rgb(10, 10, 10);text-decoration:none;display:flex;justify-content:center;align-items:center}.ms-modal__footer svg{height:12px;width:12px;margin-right:5.5px}'
          );
        }
        function Uo(t) {
          var e, n;
          return (
            (e = new Ut({
              props: {
                query: "(max-width: 520px)",
                $$slots: {
                  default: [
                    Qo,
                    function (t) {
                      return { 24: t.matches };
                    },
                    function (t) {
                      return t.matches ? 16777216 : 0;
                    },
                  ],
                },
                $$scope: { ctx: t },
              },
            })),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: function (t, n) {
                var r = {};
                50331661 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
              },
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Vo(t) {
          var e, n, r, o;
          function i(e) {
            t[16](e);
          }
          function s(e) {
            t[17](e);
          }
          var a = { closeModal: t[5], onSuccess: t[2] };
          return (
            void 0 !== t[0] && (a.display = t[0]),
            void 0 !== t[1] && (a.params = t[1]),
            (e = new Bn({ props: a })),
            st.push(function () {
              return Lt(e, "display", i);
            }),
            st.push(function () {
              return Lt(e, "params", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                4 & o && (i.onSuccess = t[2]),
                  !n &&
                    1 & o &&
                    ((n = !0),
                    (i.display = t[0]),
                    ft(function () {
                      return (n = !1);
                    })),
                  !r &&
                    2 & o &&
                    ((r = !0),
                    (i.params = t[1]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function zo(t) {
          var e, n, r;
          function o(e) {
            t[15](e);
          }
          var i = { closeModal: t[5] };
          return (
            void 0 !== t[0] && (i.display = t[0]),
            (e = new Tn({ props: i })),
            st.push(function () {
              return Lt(e, "display", o);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (r = !0);
              },
              p: function (t, r) {
                var o = {};
                !n &&
                  1 & r &&
                  ((n = !0),
                  (o.display = t[0]),
                  ft(function () {
                    return (n = !1);
                  })),
                  e.$set(o);
              },
              i: function (t) {
                r || (xt(e.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Go(t) {
          var e, n, r;
          function o(e) {
            t[14](e);
          }
          var i = { closeModal: t[5], onSuccessPasswordReset: t[2] };
          return (
            void 0 !== t[0] && (i.display = t[0]),
            (e = new Cn({ props: i })),
            st.push(function () {
              return Lt(e, "display", o);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (r = !0);
              },
              p: function (t, r) {
                var o = {};
                4 & r && (o.onSuccessPasswordReset = t[2]),
                  !n &&
                    1 & r &&
                    ((n = !0),
                    (o.display = t[0]),
                    ft(function () {
                      return (n = !1);
                    })),
                  e.$set(o);
              },
              i: function (t) {
                r || (xt(e.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Jo(t) {
          var e, n, r;
          function o(e) {
            t[13](e);
          }
          var i = { closeModal: t[5] };
          return (
            void 0 !== t[0] && (i.display = t[0]),
            (e = new xn({ props: i })),
            st.push(function () {
              return Lt(e, "display", o);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (r = !0);
              },
              p: function (t, r) {
                var o = {};
                !n &&
                  1 & r &&
                  ((n = !0),
                  (o.display = t[0]),
                  ft(function () {
                    return (n = !1);
                  })),
                  e.$set(o);
              },
              i: function (t) {
                r || (xt(e.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Wo(t) {
          var e, n, r, o;
          function i(e) {
            t[11](e);
          }
          function s(e) {
            t[12](e);
          }
          var a = { closeModal: t[5], onSuccessSignup: t[2] };
          return (
            void 0 !== t[0] && (a.display = t[0]),
            void 0 !== t[1] && (a.params = t[1]),
            (e = new bn({ props: a })),
            st.push(function () {
              return Lt(e, "display", i);
            }),
            st.push(function () {
              return Lt(e, "params", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                4 & o && (i.onSuccessSignup = t[2]),
                  !n &&
                    1 & o &&
                    ((n = !0),
                    (i.display = t[0]),
                    ft(function () {
                      return (n = !1);
                    })),
                  !r &&
                    2 & o &&
                    ((r = !0),
                    (i.params = t[1]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Ko(t) {
          var e, n, r, o;
          function i(e) {
            t[9](e);
          }
          function s(e) {
            t[10](e);
          }
          var a = { closeModal: t[5], onSuccessLogin: t[2] };
          return (
            void 0 !== t[0] && (a.display = t[0]),
            void 0 !== t[1] && (a.params = t[1]),
            (e = new Qe({ props: a })),
            st.push(function () {
              return Lt(e, "display", i);
            }),
            st.push(function () {
              return Lt(e, "params", s);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (o = !0);
              },
              p: function (t, o) {
                var i = {};
                4 & o && (i.onSuccessLogin = t[2]),
                  !n &&
                    1 & o &&
                    ((n = !0),
                    (i.display = t[0]),
                    ft(function () {
                      return (n = !1);
                    })),
                  !r &&
                    2 & o &&
                    ((r = !0),
                    (i.params = t[1]),
                    ft(function () {
                      return (r = !1);
                    })),
                  e.$set(i);
              },
              i: function (t) {
                o || (xt(e.$$.fragment, t), (o = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (o = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Xo(t) {
          var e, n;
          return (
            (e = new Jt({})),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, r) {
                Et(e, t, r), (n = !0);
              },
              p: l,
              i: function (t) {
                n || (xt(e.$$.fragment, t), (n = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (n = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Zo(t) {
          var e, n, r;
          function o(e) {
            t[19](e);
          }
          var i = { closeModal: t[5], onSuccessLogout: t[2], member: t[3] };
          return (
            void 0 !== t[0] && (i.display = t[0]),
            (e = new no({ props: i })),
            st.push(function () {
              return Lt(e, "display", o);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (r = !0);
              },
              p: function (t, r) {
                var o = {};
                4 & r && (o.onSuccessLogout = t[2]),
                  8 & r && (o.member = t[3]),
                  !n &&
                    1 & r &&
                    ((n = !0),
                    (o.display = t[0]),
                    ft(function () {
                      return (n = !1);
                    })),
                  e.$set(o);
              },
              i: function (t) {
                r || (xt(e.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Yo(t) {
          var e, n, r;
          function o(e) {
            t[18](e);
          }
          var i = { closeModal: t[5], onSuccessLogout: t[2], member: t[3] };
          return (
            void 0 !== t[0] && (i.display = t[0]),
            (e = new Ho({ props: i })),
            st.push(function () {
              return Lt(e, "display", o);
            }),
            {
              c: function () {
                Tt(e.$$.fragment);
              },
              m: function (t, n) {
                Et(e, t, n), (r = !0);
              },
              p: function (t, r) {
                var o = {};
                4 & r && (o.onSuccessLogout = t[2]),
                  8 & r && (o.member = t[3]),
                  !n &&
                    1 & r &&
                    ((n = !0),
                    (o.display = t[0]),
                    ft(function () {
                      return (n = !1);
                    })),
                  e.$set(o);
              },
              i: function (t) {
                r || (xt(e.$$.fragment, t), (r = !0));
              },
              o: function (t) {
                St(e.$$.fragment, t), (r = !1);
              },
              d: function (t) {
                At(e, t);
              },
            }
          );
        }
        function Qo(t) {
          var e,
            n,
            r,
            o,
            i = [Yo, Zo],
            s = [];
          function a(t, e) {
            return t[24] ? 0 : 1;
          }
          return (
            (e = a(t)),
            (n = s[e] = i[e](t)),
            {
              c: function () {
                n.c(), (r = H());
              },
              m: function (t, n) {
                s[e].m(t, n), O(t, r, n), (o = !0);
              },
              p: function (t, o) {
                var c = e;
                (e = a(t)) === c
                  ? s[e].p(t, o)
                  : (_t(),
                    St(s[c], 1, 1, function () {
                      s[c] = null;
                    }),
                    kt(),
                    (n = s[e]) ? n.p(t, o) : (n = s[e] = i[e](t)).c(),
                    xt(n, 1),
                    n.m(r.parentNode, r));
              },
              i: function (t) {
                o || (xt(n), (o = !0));
              },
              o: function (t) {
                St(n), (o = !1);
              },
              d: function (t) {
                s[e].d(t), t && R(r);
              },
            }
          );
        }
        function ti(t) {
          var e,
            n,
            r,
            o,
            i,
            s,
            c = [Xo, Ko, Wo, Jo, Go, zo, Vo, Uo],
            u = [];
          function l(t, e) {
            return t[4]
              ? 0
              : "login" === t[0]
              ? 1
              : "signup" === t[0]
              ? 2
              : "forgot_password" === t[0]
              ? 3
              : "reset_password" === t[0]
              ? 4
              : "reset_password_success" === t[0]
              ? 5
              : "passwordless_token" === t[0]
              ? 6
              : "profile" === t[0]
              ? 7
              : -1;
          }
          return (
            ~(n = l(t)) && (r = u[n] = c[n](t)),
            {
              c: function () {
                (e = q("main")),
                  r && r.c(),
                  z(e, "id", "msOverlay"),
                  z(e, "class", "svelte-15qvroz");
              },
              m: function (r, a) {
                O(r, e, a),
                  ~n && u[n].m(e, null),
                  (o = !0),
                  i || ((s = F(e, "mousedown", t[6])), (i = !0));
              },
              p: function (t, o) {
                var i = a(o, 1)[0],
                  s = n;
                (n = l(t)) === s
                  ? ~n && u[n].p(t, i)
                  : (r &&
                      (_t(),
                      St(u[s], 1, 1, function () {
                        u[s] = null;
                      }),
                      kt()),
                    ~n
                      ? ((r = u[n]) ? r.p(t, i) : (r = u[n] = c[n](t)).c(),
                        xt(r, 1),
                        r.m(e, null))
                      : (r = null));
              },
              i: function (t) {
                o || (xt(r), (o = !0));
              },
              o: function (t) {
                St(r), (o = !1);
              },
              d: function (t) {
                t && R(e), ~n && u[n].d(), (i = !1), s();
              },
            }
          );
        }
        function ei(t, e, n) {
          var r,
            o,
            a = this,
            c = e.display,
            u = void 0 === c ? "login" : c,
            l = e.onSuccess,
            d = e.params,
            f = !0,
            h = "profile" === u;
          function p(t) {
            qt.update(function () {
              return t;
            }),
              Bt.set({ text: t.ssoText || {} });
          }
          function m() {
            n(7, (f = !0)), l({ type: "CLOSED" });
            var t = document.querySelector("#msOverlay");
            t && t.remove();
          }
          return (
            rt(function () {
              !(function () {
                i(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return d && d.app ? (p(d.app), [3, 3]) : [3, 1];
                      case 1:
                        return (
                          console.log("No app specified - request it"),
                          [
                            4,
                            i(a, void 0, void 0, function () {
                              return s(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    return [4, window.$memberstackDom.getApp()];
                                  case 1:
                                    return p(t.sent().data), [2];
                                }
                              });
                            }),
                          ]
                        );
                      case 2:
                        t.sent(), (t.label = 3);
                      case 3:
                        return n(7, (f = !1)), n(4, (r = !1)), [2];
                    }
                  });
                });
              })(),
                "profile" === u &&
                  i(a, void 0, void 0, function () {
                    var t;
                    return s(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, window.$memberstackDom.getCurrentMember()];
                        case 1:
                          if (
                            ((t = e.sent().data),
                            n(8, (h = !1)),
                            n(3, (o = t)),
                            "profile" === u && !t)
                          )
                            throw (m(), new Error("Member not logged in"));
                          return [2];
                      }
                    });
                  });
            }),
            (t.$$set = function (t) {
              "display" in t && n(0, (u = t.display)),
                "onSuccess" in t && n(2, (l = t.onSuccess)),
                "params" in t && n(1, (d = t.params));
            }),
            (t.$$.update = function () {
              384 & t.$$.dirty && n(4, (r = f || h));
            }),
            [
              u,
              d,
              l,
              o,
              r,
              m,
              function (t) {
                "msOverlay" === t.target.id && m();
              },
              f,
              h,
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(1, (d = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(1, (d = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(1, (d = t));
              },
              function (t) {
                n(0, (u = t));
              },
              function (t) {
                n(0, (u = t));
              },
            ]
          );
        }
        var ni = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              It(n, e, ei, ti, b, { display: 0, onSuccess: 2, params: 1 }, Fo),
              n
            );
          }
          return r(e, t), e;
        })(Ot);
        e.default = ni;
      },
      76: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.hideModal =
            e.openModal =
            e.handleRedirect =
            e.hideLoader =
            e.showLoader =
            e.showMessage =
            e.initDefaultMessageBox =
              void 0);
        var s,
          a = n(8810),
          c = i(n(6362));
        (e.initDefaultMessageBox = function () {
          function t() {
            (0, a.initCSS)(), (0, a.addSuccessBox)(), (0, a.addErrorBox)();
          }
          "loading" !== document.readyState
            ? t()
            : document.addEventListener("DOMContentLoaded", function (e) {
                t();
              });
        }),
          (e.showMessage = function (t, n) {
            if (t) {
              var r;
              document.querySelector("[data-ms-message='success']") ||
                (0, e.initDefaultMessageBox)();
              var o = (r = n
                ? document.querySelector("[data-ms-message='error']")
                : document.querySelector(
                    "[data-ms-message='success']"
                  )).querySelector("[data-ms-message-text]");
              o && (o.innerHTML = t), (r.style.display = "block");
              var i = r.querySelector("[data-ms-message-close]");
              null == i ||
                i.addEventListener("click", function () {
                  r.style.display = "none";
                }),
                setTimeout(function () {
                  r.style.display = "none";
                }, 7e3);
            }
          }),
          (e.showLoader = function (t) {
            if (t) t.style.display = "block";
            else {
              var e = document.createElement("style");
              e.appendChild(
                document.createTextNode(
                  ".ms__loader { width: 100%; height: 100%; overflow: hidden; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 10000000; } #msLoader path { fill: #007ace; }"
                )
              ),
                document.head.appendChild(e);
              var n = document.createElement("div");
              n.setAttribute("data-ms-loader", "true"),
                (n.innerHTML =
                  '<?xml version="1.0"?><div class="ms__loader"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="msLoader" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background: new 0 0 50 50; z-index:1000000" xml:space="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg></div>'),
                "loading" !== document.readyState
                  ? document.body.appendChild(n)
                  : document.addEventListener("DOMContentLoaded", function (t) {
                      document.body.appendChild(n);
                    });
            }
          }),
          (e.hideLoader = function (t) {
            var e;
            t
              ? (t.style.display = "none")
              : null === (e = document.querySelector("[data-ms-loader]")) ||
                void 0 === e ||
                e.remove();
          }),
          (e.handleRedirect = function (t, e) {
            return e
              ? (window.location.href = e)
              : t && window.location.pathname !== t
              ? (window.location.href = t)
              : void 0;
          }),
          (e.openModal = function (t, e) {
            return (
              void 0 === e && (e = {}),
              r(void 0, void 0, void 0, function () {
                var n, r;
                return o(this, function (o) {
                  return (
                    (r = new Promise(function (t) {
                      n = t;
                    })),
                    (s = new c.default({
                      target: document.body,
                      props: {
                        display: t.toLowerCase(),
                        params: e,
                        onSuccess: n,
                      },
                    })),
                    [2, r]
                  );
                });
              })
            );
          }),
          (e.hideModal = function () {
            try {
              null == s || s.$destroy();
            } catch (t) {}
            (0, e.hideLoader)();
          });
      },
      4839: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(76),
          s = n(521),
          a = n(6638),
          c = n(906),
          u = n(8081),
          l = new Promise(function (t) {
            "undefined" != typeof window && (window._hcaptchaReady = t);
          }),
          d = {
            openModal: i.openModal,
            hideModal: i.hideModal,
            _hideLoader: i.hideLoader,
            _showLoader: i.showLoader,
            _showMessage: i.showMessage,
            getMemberCookie: s.getMemberToken,
            onAuthChange: c.onAuthChange,
            _captchaReady: l,
          };
        e.default = {
          init: function (t) {
            return (function (t) {
              t.useCookies && (0, s.setUseCookies)(t.setCookieOnRootDomain),
                (0, s.setMemberTokenIfAvailable)();
              var e = (0, a.initRequest)({
                  publicKey: t.publicKey,
                  appId: t.appId,
                  token: (0, s.getMemberToken)(),
                  domain: t.domain || u.endpoints.API,
                }),
                n = Object.assign(d, e);
              return (
                "undefined" != typeof window && (window.$memberstackDom = n),
                (function () {
                  r(this, void 0, void 0, function () {
                    var t;
                    return o(this, function (e) {
                      return (
                        "undefined" == typeof window ||
                          (((t = document.createElement("script")).src =
                            "https://js.hcaptcha.com/1/api.js?render=explicit&onload=_hcaptchaReady"),
                          (t.async = !0),
                          (t.defer = !0),
                          document.head.appendChild(t)),
                        [2]
                      );
                    });
                  });
                })(),
                n
              );
            })(t);
          },
        };
      },
      6638: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initRequest = e.getSessionDurationDays = void 0);
        var s = n(2087),
          a = n(2087),
          c = n(906),
          u = n(521);
        function l(t) {
          var e = t - Date.now();
          return Math.ceil(e / 864e5);
        }
        e.getSessionDurationDays = l;
        var d,
          f,
          h,
          p = function (t) {
            return r(
              {},
              (null == t ? void 0 : t.token) && {
                Authorization: "Bearer ".concat(t.token),
              }
            );
          },
          m = function (t) {
            var e,
              n = t.data,
              r = t.origin;
            if (h === r) {
              if (
                null === (e = null == n ? void 0 : n.data) || void 0 === e
                  ? void 0
                  : e.member
              ) {
                var o = l(n.data.tokens.expires);
                (0, c.setPersistedMember)(n.data.member),
                  (0, u.setMemberToken)(n.data.tokens.accessToken, o);
              }
              (null == n ? void 0 : n.error) && f(n.error), d(n);
            }
          },
          v = null,
          g = null,
          b = function (t, e) {
            return o(void 0, void 0, void 0, function () {
              var n, r, o, s, a, c, u, l;
              return i(this, function (i) {
                return (
                  window.removeEventListener("message", m),
                  (n =
                    void 0 !== window.screenLeft
                      ? window.screenLeft
                      : window.screenX),
                  (r =
                    void 0 !== window.screenTop
                      ? window.screenTop
                      : window.screenY),
                  (o = window.innerWidth
                    ? window.innerWidth
                    : document.documentElement.clientWidth
                    ? document.documentElement.clientWidth
                    : screen.width),
                  (s = window.innerHeight
                    ? window.innerHeight
                    : document.documentElement.clientHeight
                    ? document.documentElement.clientHeight
                    : screen.height),
                  (a = o / window.screen.availWidth),
                  (c = (o - 600) / 2 / a + n),
                  (u = (s - 700) / 2 / a + r),
                  (l = "toolbar=no, menubar=no, width="
                    .concat(600 / a, ", height=")
                    .concat(700 / a, ", top=")
                    .concat(u, ", left=")
                    .concat(c)),
                  null === v || v.closed
                    ? (v = window.open(t, e, l))
                    : g !== t
                    ? (v = window.open(t, e, l)).focus()
                    : v.focus(),
                  window.addEventListener(
                    "message",
                    function (t) {
                      return m(t);
                    },
                    !1
                  ),
                  (g = t),
                  window.addEventListener("beforeunload", function () {
                    null == v || v.close();
                  }),
                  [
                    2,
                    new Promise(function (t, e) {
                      (d = t), (f = e);
                    }),
                  ]
                );
              });
            });
          };
        e.initRequest = function (t) {
          var e = t.publicKey,
            n = t.appId,
            d = t.token,
            f = t.domain,
            m = (0, s.createRequestHandler)({
              publicKey: e,
              token: d,
              customEndpoint: f,
              appId: n,
            }).sendRequest;
          return (
            (h = f),
            {
              postIsTyping: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/comments/posts/typing",
                        data: { channelKey: t.channelKey },
                      }),
                    ];
                  });
                });
              },
              getChannelInfo: function (t) {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    return (
                      (e = new URLSearchParams({ channelKey: t.channelKey })),
                      [
                        2,
                        m({
                          method: a.HttpMethod.GET,
                          url: "/comments/channels/info?".concat(e),
                        }),
                      ]
                    );
                  });
                });
              },
              getPosts: function (t) {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    return (
                      (e = new URLSearchParams(
                        r(
                          r(
                            r(
                              { channelKey: t.channelKey },
                              t.after && { after: t.after }
                            ),
                            t.order && { order: t.order }
                          ),
                          t.limit && { limit: t.limit.toString() }
                        )
                      )),
                      [
                        2,
                        m({
                          method: a.HttpMethod.GET,
                          url: "/comments/posts?".concat(e),
                        }),
                      ]
                    );
                  });
                });
              },
              getThreads: function (t) {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    return (
                      (e = new URLSearchParams(
                        r(
                          r(
                            r(
                              { postId: t.postId },
                              t.after && { after: t.after }
                            ),
                            t.order && { order: t.order }
                          ),
                          t.limit && { limit: t.limit.toString() }
                        )
                      )),
                      [
                        2,
                        m({
                          method: a.HttpMethod.GET,
                          url: "/comments/threads?".concat(e),
                        }),
                      ]
                    );
                  });
                });
              },
              createPost: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/comments/posts",
                        data: { channelKey: t.channelKey, content: t.content },
                      }),
                    ];
                  });
                });
              },
              updatePost: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.PATCH,
                        url: "/comments/posts/".concat(t.postId, "/update"),
                        data: { content: t.content },
                      }),
                    ];
                  });
                });
              },
              postVote: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/comments/posts/".concat(t.postId, "/vote"),
                        data: { vote: t.vote },
                      }),
                    ];
                  });
                });
              },
              deletePost: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.DELETE,
                        url: "/comments/posts/".concat(t.postId),
                      }),
                    ];
                  });
                });
              },
              createThread: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/comments/threads",
                        data: { postId: t.postId, content: t.content },
                      }),
                    ];
                  });
                });
              },
              updateThread: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.PATCH,
                        url: "/comments/threads/".concat(t.threadId, "/update"),
                        data: { content: t.content },
                      }),
                    ];
                  });
                });
              },
              threadVote: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/comments/threads/".concat(t.threadId, "/vote"),
                        data: { vote: t.vote },
                      }),
                    ];
                  });
                });
              },
              deleteThread: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.DELETE,
                        url: "/comments/threads/".concat(t.threadId),
                      }),
                    ];
                  });
                });
              },
              getSecureContent: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/secure-content",
                            data: { contentId: t.contentId },
                          }),
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              signupWithProvider: function (t) {
                return o(this, void 0, void 0, function () {
                  var o, s, a;
                  return i(this, function (i) {
                    return (
                      (o = encodeURIComponent(
                        t.customFields ? JSON.stringify(t.customFields) : "{}"
                      )),
                      (s = encodeURIComponent(
                        t.plans ? JSON.stringify(t.plans) : "[]"
                      )),
                      (a = new URLSearchParams(
                        r(
                          r(
                            {
                              provider: t.provider,
                              customFields: o,
                              plans: s,
                              appId: n,
                            },
                            e && { publicKey: e }
                          ),
                          { origin: window.location.hostname }
                        )
                      )),
                      [
                        2,
                        b(
                          "".concat(f, "/auth-provider/signup?").concat(a),
                          "signup"
                        ),
                      ]
                    );
                  });
                });
              },
              loginWithProvider: function (t) {
                return o(this, void 0, void 0, function () {
                  var o;
                  return i(this, function (i) {
                    return (
                      (o = new URLSearchParams(
                        r(
                          r(
                            { provider: t.provider, appId: n },
                            e && { publicKey: e }
                          ),
                          { origin: window.location.hostname }
                        )
                      )),
                      [
                        2,
                        b(
                          "".concat(f, "/auth-provider/login?").concat(o),
                          "login"
                        ),
                      ]
                    );
                  });
                });
              },
              connectProvider: function (t) {
                return o(this, void 0, void 0, function () {
                  var o;
                  return i(this, function (i) {
                    return (
                      (o = new URLSearchParams(
                        r(
                          r(
                            { provider: t.provider, appId: n },
                            e && { publicKey: e }
                          ),
                          {
                            member: (0, u.getMemberToken)(),
                            origin: window.location.hostname,
                          }
                        )
                      )),
                      [
                        2,
                        b(
                          "".concat(f, "/auth-provider/connect?").concat(o),
                          "connect"
                        ),
                      ]
                    );
                  });
                });
              },
              disconnectProvider: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member/disconnect-provider",
                        data: { provider: t.provider },
                      }),
                    ];
                  });
                });
              },
              getAppAndMember: function (t) {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    return (
                      (t = new URLSearchParams({
                        includeSSOText:
                          null === window || void 0 === window
                            ? void 0
                            : window.ssoUI,
                      })),
                      [
                        2,
                        m({
                          method: a.HttpMethod.GET,
                          url: "/app-member?".concat(t),
                        }),
                      ]
                    );
                  });
                });
              },
              getApp: function () {
                return o(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (e) {
                    return (
                      (t = new URLSearchParams({
                        includeSSOText:
                          null === window || void 0 === window
                            ? void 0
                            : window.ssoUI,
                      })),
                      [
                        2,
                        m({ method: a.HttpMethod.GET, url: "/app?".concat(t) }),
                      ]
                    );
                  });
                });
              },
              loginMemberEmailPassword: function (t, e) {
                return o(this, void 0, void 0, function () {
                  var n, r;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/auth/login",
                            data: {
                              email: t.email,
                              password: t.password,
                              options: e,
                            },
                          }),
                        ];
                      case 1:
                        return (
                          (n = o.sent()),
                          (r = l(n.data.tokens.expires)),
                          (0, c.setPersistedMember)(n.data.member),
                          (0, u.setMemberToken)(n.data.tokens.accessToken, r),
                          [2, n]
                        );
                    }
                  });
                });
              },
              sendMemberLoginPasswordlessEmail: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/auth/passwordless/login/send",
                            data: { email: t.email },
                          }),
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              sendMemberSignupPasswordlessEmail: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/auth/passwordless/signup/send",
                            data: { email: t.email },
                          }),
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              loginMemberPasswordless: function (t, e) {
                return o(this, void 0, void 0, function () {
                  var n, r;
                  return i(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/auth/passwordless/login",
                            data: {
                              passwordlessToken: t.passwordlessToken,
                              email: t.email,
                              options: e,
                            },
                          }),
                        ];
                      case 1:
                        return (
                          (n = o.sent()),
                          (r = l(n.data.tokens.expires)),
                          (0, c.setPersistedMember)(n.data.member),
                          (0, u.setMemberToken)(n.data.tokens.accessToken, r),
                          [2, n]
                        );
                    }
                  });
                });
              },
              getPlan: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.GET,
                        url: "/app/plans/".concat(t.planId),
                      }),
                    ];
                  });
                });
              },
              getPlans: function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          m({ method: a.HttpMethod.GET, url: "/app" }),
                        ];
                      case 1:
                        return [2, { data: t.sent().data.plans }];
                    }
                  });
                });
              },
              getRestrictedUrlGroups: function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          m({ method: a.HttpMethod.GET, url: "/app" }),
                        ];
                      case 1:
                        return [2, { data: t.sent().data.contentGroups }];
                    }
                  });
                });
              },
              getCurrentMember: function (t) {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    return (
                      (e = m({
                        method: a.HttpMethod.GET,
                        url: "/member?".concat(
                          Math.floor(1e3 + 9e3 * Math.random())
                        ),
                        headers: p(t),
                      })),
                      (function () {
                        o(this, void 0, void 0, function () {
                          var t;
                          return i(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, e];
                              case 1:
                                return (
                                  (t = n.sent()),
                                  (0, c.updatePersistedMember)(t.data),
                                  [2]
                                );
                            }
                          });
                        });
                      })(),
                      !0 === (null == t ? void 0 : t.useCache)
                        ? [2, { data: (0, c.getPersistedMember)() }]
                        : [2, e]
                    );
                  });
                });
              },
              getMemberJSON: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.GET,
                        url: "/member/json",
                        headers: p(t),
                      }),
                    ];
                  });
                });
              },
              updateMemberJSON: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member/json",
                        data: { json: t.json },
                        headers: p(e),
                      }),
                    ];
                  });
                });
              },
              addPlan: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member/plans/add",
                        data: { planId: t.planId },
                        headers: p(e),
                      }),
                    ];
                  });
                });
              },
              purchasePlansWithCheckout: function (t, e) {
                return o(this, void 0, void 0, function () {
                  function n(t) {
                    var e = window.location.href,
                      n = t;
                    return (
                      n &&
                        (e =
                          0 === n.indexOf("http://") ||
                          0 === n.indexOf("https://")
                            ? n
                            : window.location.origin + n),
                      e
                    );
                  }
                  var r, o, s;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (r = t.successUrl ? n(t.successUrl) : void 0),
                          (o = n(t.cancelUrl)),
                          [
                            4,
                            m({
                              method: a.HttpMethod.POST,
                              url: "/member/plans/create-checkout-session",
                              data: {
                                priceId: t.priceId,
                                couponId: t.couponId,
                                success_url: r,
                                cancel_url: o,
                                origin_url: window.location.href,
                              },
                              headers: p(e),
                            }),
                          ]
                        );
                      case 1:
                        return (
                          (s = i.sent()),
                          !1 === t.autoRedirect
                            ? [2, s]
                            : ((window.location.href = s.data.url), [2])
                        );
                    }
                  });
                });
              },
              launchStripeCustomerPortal: function (t, e) {
                return o(this, void 0, void 0, function () {
                  var n, o;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (n = (null == t ? void 0 : t.returnUrl)
                            ? (function (t) {
                                var e = window.location.href,
                                  n = t;
                                return (
                                  n &&
                                    (e =
                                      0 === n.indexOf("http://") ||
                                      0 === n.indexOf("https://")
                                        ? n
                                        : window.location.origin + n),
                                  e
                                );
                              })(t.returnUrl)
                            : void 0),
                          [
                            4,
                            m({
                              method: a.HttpMethod.POST,
                              url: "/member/create-billing-portal-session",
                              data: r(
                                {
                                  return_url: n,
                                  origin_url: window.location.href,
                                },
                                t && {
                                  priceIds: t.priceIds,
                                  configuration: t.configuration,
                                }
                              ),
                              headers: p(e),
                            }),
                          ]
                        );
                      case 1:
                        return (
                          (o = i.sent()),
                          !1 === (null == t ? void 0 : t.autoRedirect)
                            ? [2, o]
                            : ((window.location.href = o.data.url), [2])
                        );
                    }
                  });
                });
              },
              removePlan: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member/plans/remove",
                        data: { planId: t.planId },
                        headers: p(e),
                      }),
                    ];
                  });
                });
              },
              updateMember: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member",
                        data: r(
                          {},
                          t.customFields && { customFields: t.customFields }
                        ),
                        headers: p(e),
                      }),
                    ];
                  });
                });
              },
              updateMemberAuth: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member-auth",
                        data: r(
                          r(
                            r({}, t.email && { email: t.email }),
                            t.oldPassword && { oldPassword: t.oldPassword }
                          ),
                          t.newPassword && { newPassword: t.newPassword }
                        ),
                        headers: p(e),
                      }),
                    ];
                  });
                });
              },
              setPassword: function (t, e) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/member/set-password",
                        data: { password: t.password },
                        headers: p(e),
                      }),
                    ];
                  });
                });
              },
              signupMemberPasswordless: function (t, e) {
                var n, s;
                return o(this, void 0, void 0, function () {
                  var o, d;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/auth/signup?isPasswordless=true",
                            data: r(
                              r(
                                r(
                                  {
                                    email: t.email,
                                    customFields: t.customFields,
                                    passwordlessToken: t.passwordlessToken,
                                    metaData: t.metaData,
                                  },
                                  t.plans && { plans: t.plans }
                                ),
                                {
                                  origin_domain: window.location.origin,
                                  options: e,
                                }
                              ),
                              (null === (n = window.Rewardful) || void 0 === n
                                ? void 0
                                : n.referral) && {
                                rewardfulData: {
                                  referral: window.Rewardful.referral,
                                  coupon:
                                    null === (s = window.Rewardful.coupon) ||
                                    void 0 === s
                                      ? void 0
                                      : s.id,
                                },
                              }
                            ),
                          }),
                        ];
                      case 1:
                        return (
                          (o = i.sent()),
                          (d = l(o.data.tokens.expires)),
                          (0, c.setPersistedMember)(o.data.member),
                          (0, u.setMemberToken)(o.data.tokens.accessToken, d),
                          [2, o]
                        );
                    }
                  });
                });
              },
              signupMemberEmailPassword: function (t, e) {
                var n, s;
                return o(this, void 0, void 0, function () {
                  var o, d;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/auth/signup",
                            data: r(
                              r(
                                r(
                                  {
                                    email: t.email,
                                    password: t.password,
                                    customFields: t.customFields,
                                    metaData: t.metaData,
                                    captchaToken: t.captchaToken,
                                  },
                                  t.plans && { plans: t.plans }
                                ),
                                {
                                  origin_domain: window.location.origin,
                                  options: e,
                                }
                              ),
                              (null === (n = window.Rewardful) || void 0 === n
                                ? void 0
                                : n.referral) && {
                                rewardfulData: {
                                  referral: window.Rewardful.referral,
                                  coupon:
                                    null === (s = window.Rewardful.coupon) ||
                                    void 0 === s
                                      ? void 0
                                      : s.id,
                                },
                              }
                            ),
                          }),
                        ];
                      case 1:
                        return (
                          (o = i.sent()),
                          (d = l(o.data.tokens.expires)),
                          (0, c.setPersistedMember)(o.data.member),
                          (0, u.setMemberToken)(o.data.tokens.accessToken, d),
                          [2, o]
                        );
                    }
                  });
                });
              },
              updateMemberProfileImage: function (t) {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    return t.profileImage
                      ? ((e = new FormData()).append(
                          "profileImage",
                          t.profileImage
                        ),
                        [
                          2,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/member/profile-image",
                            data: e,
                            contentType: "multipart/form-data",
                          }),
                        ])
                      : [2];
                  });
                });
              },
              sendMemberVerificationEmail: function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/auth/send-email-verification",
                        data: { origin_domain: window.location.origin },
                      }),
                    ];
                  });
                });
              },
              sendMemberResetPasswordEmail: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/auth/send-reset-password-email",
                        data: { email: t.email },
                      }),
                    ];
                  });
                });
              },
              resetMemberPassword: function (t) {
                return o(this, void 0, void 0, function () {
                  return i(this, function (e) {
                    return [
                      2,
                      m({
                        method: a.HttpMethod.POST,
                        url: "/auth/reset-password",
                        data: { token: t.token, newPassword: t.newPassword },
                      }),
                    ];
                  });
                });
              },
              logout: function (t) {
                return o(this, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          m({
                            method: a.HttpMethod.POST,
                            url: "/member/logout",
                            headers: p(t),
                          }),
                        ];
                      case 1:
                        return (
                          (e = n.sent()), (0, c.unsetPersistedMember)(), [2, e]
                        );
                    }
                  });
                });
              },
            }
          );
        };
      },
      2087: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function s(t) {
                  try {
                    c(r.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(t) {
                  try {
                    c(r.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function c(t) {
                  var e;
                  t.done
                    ? o(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(s, a);
                }
                c((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                o,
                i,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(a) {
                return function (c) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), a[0] && (s = 0)), s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, a[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (a = [2 & a[0], o.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            o = a;
                            break;
                          case 4:
                            return s.label++, { value: a[1], done: !1 };
                          case 5:
                            s.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = s.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              s = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!o || (a[1] > o[0] && a[1] < o[3]))
                            ) {
                              s.label = a[1];
                              break;
                            }
                            if (6 === a[0] && s.label < o[1]) {
                              (s.label = o[1]), (o = a);
                              break;
                            }
                            if (o && s.label < o[2]) {
                              (s.label = o[2]), s.ops.push(a);
                              break;
                            }
                            o[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        a = e.call(t, s);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, c]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createRequestHandler = e.HttpHeaders = e.HttpMethod = void 0);
        var a,
          c,
          u = s(n(9644)),
          l = n(8081),
          d = n(521);
        ((c = e.HttpMethod || (e.HttpMethod = {})).POST = "POST"),
          (c.GET = "GET"),
          (c.PATCH = "PATCH"),
          (c.DELETE = "DELETE"),
          (function (t) {
            (t.AUTHORIZATION = "Authorization"),
              (t.API_KEY = "X-API-Key"),
              (t.APP_ID = "X-APP-ID"),
              (t.API_VERSION = "X-API-Version"),
              (t.USER_AGENT = "X-User-Agent");
          })((a = e.HttpHeaders || (e.HttpHeaders = {}))),
          (e.createRequestHandler = function (t) {
            var e = t.publicKey,
              n = t.appId,
              s = (t.token, t.customEndpoint);
            return {
              sendRequest: function (t, c) {
                return o(void 0, void 0, void 0, function () {
                  var o, f, h, p, m, v, g, b, w, y, _, k, x, S, P, $, C;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 2, , 3]),
                          (o = t.url),
                          (f = (0, d.getMemberToken)()),
                          (h = [
                            null ===
                              (_ =
                                null === (y = t.headers) || void 0 === y
                                  ? void 0
                                  : y.Authorization) || void 0 === _
                              ? void 0
                              : _.replace("Bearer ", ""),
                            f,
                            null == c ? void 0 : c.token,
                          ].find(function (t) {
                            return t;
                          })),
                          (p = "".concat(s || l.endpoints.API).concat(o)),
                          [
                            4,
                            (0, u.default)({
                              method: t.method,
                              data: t.data,
                              url: p,
                              headers: r(
                                r(
                                  r(
                                    r(
                                      r(
                                        {},
                                        h && {
                                          authorization: "Bearer ".concat(h),
                                        }
                                      ),
                                      e && ((g = {}), (g[a.API_KEY] = e), g)
                                    ),
                                    n && ((b = {}), (b[a.APP_ID] = n), b)
                                  ),
                                  ((w = {}),
                                  (w[a.USER_AGENT] =
                                    "@memberstack/client@1.2.0"),
                                  w)
                                ),
                                t.contentType && {
                                  "Content-Type": t.contentType,
                                }
                              ),
                              withCredentials: !0,
                            }),
                          ]
                        );
                      case 1:
                        if (
                          ((m = i.sent()),
                          (null === (k = null == m ? void 0 : m.headers) ||
                          void 0 === k
                            ? void 0
                            : k["ms-mid"]) && m.headers["ms-mid"],
                          null === (x = null == m ? void 0 : m.data) ||
                          void 0 === x
                            ? void 0
                            : x.error)
                        ) {
                          if ("JsonWebTokenError" === m.data.error.name)
                            throw {
                              code: "client/invalid-token",
                              message:
                                "An invalid token has been provided. Please make sure the token is valid.",
                            };
                          throw null === (S = m.data) || void 0 === S
                            ? void 0
                            : S.error;
                        }
                        return [2, null == m ? void 0 : m.data];
                      case 2:
                        if (!(v = i.sent()).response) throw v;
                        throw (
                          (null ===
                            ($ =
                              null === (P = v.response) || void 0 === P
                                ? void 0
                                : P.data) || void 0 === $
                            ? void 0
                            : $.error) ||
                          (null === (C = v.response) || void 0 === C
                            ? void 0
                            : C.data)
                        );
                      case 3:
                        return [2];
                    }
                  });
                });
              },
            };
          });
      },
      6351: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(e, n);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    }),
                    Object.defineProperty(t, r, o);
                }
              : function (t, e, n, r) {
                  void 0 === r && (r = n), (t[r] = e[n]);
                }),
          o =
            (this && this.__exportStar) ||
            function (t, e) {
              for (var n in t)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(e, n) ||
                  r(e, t, n);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          o(n(3806), e),
          o(n(9769), e);
      },
      3806: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
      },
      9769: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
      },
      521: function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setMemberTokenIfAvailable =
            e.getMemberToken =
            e.removeMemberToken =
            e.setMemberToken =
            e.setUseCookies =
              void 0);
        var i = o(n(602)),
          s = "_ms-mid",
          a = (function () {
            try {
              return (
                localStorage.setItem("test", "test"),
                localStorage.removeItem("test"),
                !0
              );
            } catch (t) {
              return !1;
            }
          })(),
          c = !1,
          u = !1;
        (e.setUseCookies = function (t) {
          (c = !0), t && (u = !0);
        }),
          (e.setMemberToken = function (t, e) {
            if (a && !c) localStorage.setItem(s, t);
            else {
              var n = window.location.hostname.split(".").slice(-2).join(".");
              i.default.set(
                s,
                t,
                r(
                  { expires: (e && Number(e)) || 14, sameSite: "strict" },
                  u && { domain: n }
                )
              );
            }
          }),
          (e.removeMemberToken = function () {
            a && localStorage.removeItem(s);
            var t = window.location.hostname.split(".").slice(-2).join(".");
            i.default.set(
              s,
              "",
              r({ expires: -1, sameSite: "strict" }, u && { domain: t })
            ),
              i.default.set(s, "", { expires: -1, sameSite: "strict" });
          }),
          (e.getMemberToken = function () {
            if (a && !c) {
              var t = localStorage.getItem(s);
              if (t) return t;
            }
            return i.default.get(s);
          }),
          (e.setMemberTokenIfAvailable = function () {
            if ("undefined" != typeof window) {
              var t = new URLSearchParams(window.location.search).get(
                "memberToken"
              );
              t && (0, e.setMemberToken)(t);
            }
          });
      },
      8810: (t, e) => {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initCSS = e.addErrorBox = e.addSuccessBox = void 0),
          "undefined" != typeof window &&
            ((n = document.createElement("div")).setAttribute(
              "id",
              "ms-status-close"
            ),
            n.setAttribute("data-ms-message-close", ""),
            (n.innerHTML =
              '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/></svg>')),
          (e.addSuccessBox = function () {
            var t = document.createElement("div");
            t.setAttribute("id", "ms-status-icon"),
              (t.innerHTML =
                '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#62d37f"/><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z" fill="#fff"/></svg>');
            var e = '<div data-ms-message class="ms-error-message">\n\t\t'
                .concat(
                  t.outerHTML,
                  '\n\t\t<div id="ms-message" data-ms-message-text></div>\n\t\t'
                )
                .concat(n.outerHTML, "\n\t\t</div>"),
              r = document.createElement("div");
            r.setAttribute("data-ms-message", "success"),
              (r.innerHTML = e),
              (r.style.display = "none"),
              document.body.appendChild(r);
          }),
          (e.addErrorBox = function () {
            var t = document.createElement("div");
            t.setAttribute("id", "ms-status-icon"),
              (t.innerHTML =
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#E40023"/></svg>');
            var e = '<div data-ms-message class="ms-error-message">\n\t\t'
                .concat(
                  t.outerHTML,
                  '\n\t\t<div id="ms-message" data-ms-message-text></div>\n\t\t'
                )
                .concat(n.outerHTML, "\n\t\t</div>"),
              r = document.createElement("div");
            r.setAttribute("data-ms-message", "error"),
              (r.innerHTML = e),
              (r.style.display = "none"),
              document.body.appendChild(r);
          }),
          (e.initCSS = function () {
            var t = document.createElement("style");
            t.setAttribute("data-ms-style", ""),
              t.appendChild(
                document.createTextNode(
                  "\n\t\t@keyframes fadeIn {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t\t.ms-error-message { \n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 3%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tz-index: 10000000; \n\t\t\t\tdisplay: flex; \n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 12px 16px;\n\t\t\t\tborder-radius: 8px; \n\t\t\t\tbackground-color: #0A0A0A; \n\t\t\t\tcolor: #fff; \n\t\t\t\tfont-size: 16.8px; \n\t\t\t\tline-height: 28px; \n\t\t\t\tfont-weight: 500; \n\t\t\t\ttransform-origin: center;\n\t\t\t\tanimation: fadeIn 0.2s ease-in;\n\t\t\t\t-webkit-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-moz-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-o-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-ms-animation: fadeIn 0.2s ease-in;\n\t\t\t}\n\t\t\t#ms-status-icon {\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tmargin-right: 12px;\n\t\t\t\t}\n\t\t\t\t#ms-status-close {\n\t\t\t\t\tmargin-left: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t\t#ms-status-close svg {\n\t\t\t\t\t\theight: 12px;\n\t\t\t\t\t}"
                )
              ),
              document.head.appendChild(t);
          });
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = (__webpack_module_cache__[t] = { exports: {} });
    return (
      __webpack_modules__[t].call(n.exports, n, n.exports, __webpack_require__),
      n.exports
    );
  }
  (__webpack_require__.d = (t, e) => {
    for (var n in e)
      __webpack_require__.o(e, n) &&
        !__webpack_require__.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (__webpack_require__.o = (t, e) =>
      Object.prototype.hasOwnProperty.call(t, e)),
    (__webpack_require__.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__(2286), __webpack_require__(123);
    var t = __webpack_require__(3726),
      e = __webpack_require__(34),
      n = __webpack_require__(6797),
      r = __webpack_require__(6842),
      o = __webpack_require__(2331),
      i = __webpack_require__(2517);
    function s() {
      (0, o.secureContent)(),
        (0, i.initChannels)(),
        (0, r.removeContent)(),
        (0, n.initMemberText)(),
        (0, n.initLoader)(),
        (0, n.initMessageBoxes)(),
        (0, t.initLoginForms)(),
        (0, t.initPasswordlessLoginForms)(),
        (0, t.initPasswordlessSingupForms)(),
        (0, t.initSignupForms)(),
        (0, t.initForgotPasswordForm)(),
        (0, t.initResetPasswordForm)(),
        (0, t.initProfileForms)(),
        (0, t.initUpdateEmailForms)(),
        (0, t.initChangePasswordForms)(),
        (0, t.initConnectAuthProviderForms)(),
        (0, e.initProfileImageButtons)(),
        (0, e.initOpenCustomerPortalButtons)(),
        (0, e.initLoginRedirectButtons)(),
        (0, e.initLoginModalButtons)(),
        (0, e.initSignupModalButtons)(),
        (0, e.initForgotPasswordModalButtons)(),
        (0, e.initProfileModalButtons)(),
        (0, e.initSignupButtons)(),
        (0, e.initLogoutButtons)(),
        (0, e.initLaunchCheckoutButtons)(),
        (0, e.initUpdatePlanButtons)(),
        (0, e.initPlanRemoveButtons)(),
        (0, e.initRemoveSelectedPriceButtons)(),
        (0, e.resendVerificationEmail)(),
        (0, e.initReturnToCheckoutButtons)();
    }
    (0, r.protectPages)(),
      (0, r.initCSS)(),
      "loading" !== document.readyState
        ? s()
        : document.addEventListener("DOMContentLoaded", function (t) {
            s();
          });
  })();
})();