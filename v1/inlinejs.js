"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MerchantPortalAuthenticator = /*#__PURE__*/function () {
  function MerchantPortalAuthenticator() {
    _classCallCheck(this, MerchantPortalAuthenticator);
  }
  return _createClass(MerchantPortalAuthenticator, null, [{
    key: "closeIframe",
    value: function closeIframe() {
      if (MerchantPortalAuthenticator.iframeElement) {
        MerchantPortalAuthenticator.iframeElement.remove();
        MerchantPortalAuthenticator.iframeElement = null;
      }
    }
  }, {
    key: "showSpinner",
    value: function showSpinner() {
      var spinner = document.createElement("div");
      spinner.className = "loader--spinner";
      spinner.innerHTML = "<div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>";
      MerchantPortalAuthenticator.spinnerElement = spinner;
      document.body.appendChild(spinner);
    }
  }, {
    key: "hideSpinner",
    value: function hideSpinner() {
      if (MerchantPortalAuthenticator.spinnerElement) {
        MerchantPortalAuthenticator.spinnerElement.remove();
        MerchantPortalAuthenticator.spinnerElement = null;
      }
    }
  }, {
    key: "handleIframeError",
    value: function handleIframeError(iframe, onError) {
      // Event listener for iframe load error
      iframe.onerror = function () {
        MerchantPortalAuthenticator.hideSpinner();
        if (onError) {
          onError({
            message: "Failed to load Xpress Merchant authenticator."
          });
        }
      };
    }
  }, {
    key: "setMerchantKYC",
    value: function setMerchantKYC(appKey, token, containerSelector) {
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "100vh";
      var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "100%";
      if (typeof appKey !== "string" || !appKey.startsWith("http")) {
        console.error("Invalid URL provided to setMerchantKYC");
        return;
      }
      appKey = appKey.replace(/\/$/, "");
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", "".concat(appKey, "/oauth/compliance?xps=").concat(token));
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("width", width);
      iframe.setAttribute("height", height);
      iframe.style.border = "none";
      iframe.style.zIndex = "999999";
      iframe.style.position = "relative";
      MerchantPortalAuthenticator.closeIframe(); // Remove previous iframe
      MerchantPortalAuthenticator.iframeElement = iframe;
      var container = null;
      if (containerSelector) {
        // Try querySelector first
        container = document.querySelector(containerSelector);
        console.log("first", container);
        // If that fails and it's a plain ID, try getElementById
        if (!container && !containerSelector.includes("#") && !containerSelector.includes(".")) {
          container = document.getElementById(containerSelector);
          console.log("second", container);
        }
      }
      console.log("third", container);
      if (container) {
        container.appendChild(iframe);
      } else {
        console.warn("Container not found. Falling back to body.");
        document.body.appendChild(iframe);
      }
    }
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var _appKey;
        var appKey, windowWidth, windowHeight, width, height, left, top;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              appKey = _ref.appKey, windowWidth = _ref.windowWidth, windowHeight = _ref.windowHeight;
              width = windowWidth !== null && windowWidth !== void 0 ? windowWidth : 800;
              height = windowHeight !== null && windowHeight !== void 0 ? windowHeight : 600;
              left = (window.screen.width - width) / 2;
              top = (window.screen.height - height) / 2;
              appKey = (_appKey = appKey) === null || _appKey === void 0 ? void 0 : _appKey.replace(/\/$/, "");
              window.open("".concat(appKey, "/login?rdt=true"), "_blank", "width=".concat(width, ",height=").concat(height, ",top=").concat(top, ",left=").concat(left, ",resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no"));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function login(_x) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "getToken",
    value: function () {
      var _getToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref2) {
        var appKey, onSuccess, onError, iframe, connectionTimeout;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              appKey = _ref2.appKey, onSuccess = _ref2.onSuccess, onError = _ref2.onError;
              MerchantPortalAuthenticator.showSpinner();
              iframe = document.createElement("iframe");
              iframe.setAttribute("src", appKey);

              // Add sandbox attributes to allow scripts, storage, and messaging
              iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-forms allow-modals");
              // Event listener for when the iframe successfully loads
              iframe.onload = function () {
                MerchantPortalAuthenticator.hideSpinner();
                MerchantPortalAuthenticator.closeIframe();
                clearTimeout(connectionTimeout); // Clear the timeout if loaded successfully
              };
              connectionTimeout = setTimeout(function () {
                MerchantPortalAuthenticator.hideSpinner();
                if (onError) onError({
                  message: "Connection refused. The server may be down."
                });
              }, 10000); // 10 seconds timeout

              MerchantPortalAuthenticator.handleIframeError(iframe, onError);
              MerchantPortalAuthenticator.iframeElement = iframe;
              document.body.appendChild(iframe);
              window.addEventListener("message", /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
                  var _event$data;
                  var _event$data2, _event$data4, _event$data3;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.type) === "token") {
                          if (onSuccess && (_event$data2 = event.data) !== null && _event$data2 !== void 0 && _event$data2.token) {
                            onSuccess((_event$data3 = event.data) === null || _event$data3 === void 0 ? void 0 : _event$data3.token);
                          } else if (onError && !((_event$data4 = event.data) !== null && _event$data4 !== void 0 && _event$data4.token)) {
                            onError({
                              message: "Sorry, it seems merchant has logged out"
                            });
                          }
                          MerchantPortalAuthenticator.hideSpinner();
                        }
                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function getToken(_x2) {
        return _getToken.apply(this, arguments);
      }
      return getToken;
    }()
  }, {
    key: "logOut",
    value: function () {
      var _logOut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref4) {
        var appKey, onError, iframe, connectionTimeout;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              appKey = _ref4.appKey, onError = _ref4.onError;
              iframe = document.createElement("iframe");
              iframe.setAttribute("src", "".concat(appKey, "logOut"));
              iframe.onload = function () {
                clearTimeout(connectionTimeout);
                MerchantPortalAuthenticator.closeIframe();
              };
              connectionTimeout = setTimeout(function () {
                MerchantPortalAuthenticator.hideSpinner();
                if (onError) {
                  onError({
                    message: "Connection refused. The server may be down."
                  });
                }
              }, 10000); // 10 seconds timeout
              MerchantPortalAuthenticator.handleIframeError(iframe, onError);
              document.body.appendChild(iframe);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function logOut(_x4) {
        return _logOut.apply(this, arguments);
      }
      return logOut;
    }()
  }]);
}(); // Add CSS for error message
_defineProperty(MerchantPortalAuthenticator, "iframeElement", null);
_defineProperty(MerchantPortalAuthenticator, "spinnerElement", null);
_defineProperty(MerchantPortalAuthenticator, "errorMessageElement", null);
var style = document.createElement("style");
style.textContent = "\n.loader--spinner, .iframe {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999999;\n  background-color: rgba(0,0,0,0.2);\n  width: 100%;\n  height: 100svh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loader--spinner div {\n  animation: loader--spinner 1.2s linear infinite;\n  transform-origin: 30px 30px;\n  color:white;\n}\n\n.loader--spinner div:after {\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 27px;\n  border-radius: 20%;\n  content: \" \";\n  height: 10px;\n  width: 5px;\n  background: white;\n}\n\n.loader--spinner div:nth-child(1) {\n  animation-delay: -1.1s;\n  transform: rotate(0deg);\n}\n\n.loader--spinner div:nth-child(2) {\n  animation-delay: -1s;\n  transform: rotate(30deg);\n}\n\n.loader--spinner div:nth-child(3) {\n  animation-delay: -0.9s;\n  transform: rotate(60deg);\n}\n\n.loader--spinner div:nth-child(4) {\n  animation-delay: -0.8s;\n  transform: rotate(90deg);\n}\n\n.loader--spinner div:nth-child(5) {\n  animation-delay: -0.7s;\n  transform: rotate(120deg);\n}\n\n.loader--spinner div:nth-child(6) {\n  animation-delay: -0.6s;\n  transform: rotate(150deg);\n}\n\n.loader--spinner div:nth-child(7) {\n  animation-delay: -0.5s;\n  transform: rotate(180deg);\n}\n\n.loader--spinner div:nth-child(8) {\n  animation-delay: -0.4s;\n  transform: rotate(210deg);\n}\n\n.loader--spinner div:nth-child(9) {\n  animation-delay: -0.3s;\n  transform: rotate(240deg);\n}\n\n.loader--spinner div:nth-child(10) {\n  animation-delay: -0.2s;\n  transform: rotate(270deg);\n}\n\n.loader--spinner div:nth-child(11) {\n  animation-delay: -0.1s;\n  transform: rotate(300deg);\n}\n\n.loader--spinner div:nth-child(12) {\n  animation-delay: 0s;\n  transform: rotate(330deg);\n}\n\n@keyframes loader--spinner {\n  0% {\n      opacity: 1;\n  }\n\n  100% {\n      opacity: -10;\n  }\n}\n\n.error-message {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000000;\n  background-color: #ff4d4d;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  text-align: center;\n}\n\n";
document.head.appendChild(style);
window.addEventListener("message", function (event) {
  var _event$data5;
  if (((_event$data5 = event.data) === null || _event$data5 === void 0 ? void 0 : _event$data5.type) === "closeIframe") {
    MerchantPortalAuthenticator.closeIframe();
  }
});
var _default = exports["default"] = MerchantPortalAuthenticator;