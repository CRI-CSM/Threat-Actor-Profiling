"use strict";

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e) {
  function t(t) {
    for (var a, s, r = t[0], l = t[1], c = t[2], p = 0, d = []; p < r.length; p++) {
      s = r[p], Object.prototype.hasOwnProperty.call(n, s) && n[s] && d.push(n[s][0]), n[s] = 0;
    }

    for (a in l) {
      Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    }

    u && u(t);

    while (d.length) {
      d.shift()();
    }

    return o.push.apply(o, c || []), i();
  }

  function i() {
    for (var e, t = 0; t < o.length; t++) {
      for (var i = o[t], a = !0, r = 1; r < i.length; r++) {
        var l = i[r];
        0 !== n[l] && (a = !1);
      }

      a && (o.splice(t--, 1), e = s(s.s = i[0]));
    }

    return e;
  }

  var a = {},
      n = {
    app: 0
  },
      o = [];

  function s(t) {
    if (a[t]) return a[t].exports;
    var i = a[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
  }

  s.m = e, s.c = a, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      s.d(i, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return i;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "";
  var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
      l = r.push.bind(r);
  r.push = t, r = r.slice();

  for (var c = 0; c < r.length; c++) {
    t(r[c]);
  }

  var u = l;
  o.push([0, "chunk-vendors"]), i();
})({
  0: function _(e, t, i) {
    e.exports = i("cd49");
  },
  "00d9": function d9(e, t, i) {
    e.exports = i.p + "img/organization.ad0f077d.png";
  },
  "031a": function a(e, t, i) {},
  "04d3": function d3(e, t, i) {
    e.exports = i.p + "img/product.c7858dc2.png";
  },
  "0b94": function b94(e, t, i) {
    "use strict";

    var a;
    i.d(t, "a", function () {
      return a;
    }), function (e) {
      e[e["Section"] = 0] = "Section", e[e["StringProperty"] = 1] = "StringProperty", e[e["FloatProperty"] = 2] = "FloatProperty", e[e["IntegerProperty"] = 3] = "IntegerProperty", e[e["EnumProperty"] = 4] = "EnumProperty", e[e["DateProperty"] = 5] = "DateProperty", e[e["TimeProperty"] = 6] = "TimeProperty", e[e["DateTimeProperty"] = 7] = "DateTimeProperty", e[e["BasicTableProperty"] = 8] = "BasicTableProperty", e[e["ComplexTableProperty"] = 9] = "ComplexTableProperty";
    }(a || (a = {}));
  },
  "0ca7": function ca7(e, t, i) {
    "use strict";

    i("6325");
  },
  "0da8": function da8(e, t, i) {},
  "0e2b": function e2b(e, t, i) {},
  "0f97": function f97(e, t, i) {},
  "13be": function be(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return o;
    });
    var a = i("f139");

    var n =
    /*#__PURE__*/
    function () {
      function n() {
        _classCallCheck(this, n);

        this._listeners = new Map();
      }

      _createClass(n, [{
        key: "emit",
        value: function emit(e) {
          if (this._listeners.has(e)) {
            var _i = this._listeners.get(e);

            for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              t[_key - 1] = arguments[_key];
            }

            for (var _e2 = _i.length - 1; 0 <= _e2; _e2--) {
              _i[_e2].apply(_i, t);
            }
          }
        }
      }, {
        key: "on",
        value: function on(e, t) {
          this._listeners.has(e) || this._listeners.set(e, []), this._listeners.get(e).unshift(t);
        }
      }, {
        key: "once",
        value: function once(e, t) {
          var _this = this;

          this._listeners.has(e) || this._listeners.set(e, []);

          var i = function i() {
            var n = _this._listeners.get(e);

            n.splice(n.indexOf(i), 1), t.apply(void 0, arguments);
          };

          this._listeners.get(e).unshift(i);
        }
      }, {
        key: "off",
        value: function off(e, t) {
          if (this._listeners.has(e)) {
            var _i2 = this._listeners.get(e);

            _i2.splice(_i2.indexOf(t), 1);
          }
        }
      }]);

      return n;
    }();

    var o =
    /*#__PURE__*/
    function (_n) {
      _inherits(o, _n);

      function o() {
        var _this2;

        _classCallCheck(this, o);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this)), _this2.instance = a["c"](), _this2._parent = null;
        return _this2;
      }

      _createClass(o, [{
        key: "emitUpward",
        value: function emitUpward(e) {
          var _i3;

          var i;

          for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            t[_key2 - 1] = arguments[_key2];
          }

          this.emit.apply(this, [e].concat(t)), null === (i = this._parent) || void 0 === i || (_i3 = i).emitUpward.apply(_i3, [e].concat(t));
        }
      }, {
        key: "rootInstance",
        get: function get() {
          return this.root.instance;
        }
      }, {
        key: "root",
        get: function get() {
          var e = this;

          while (null !== e._parent) {
            e = e._parent;
          }

          return e;
        }
      }]);

      return o;
    }(n);
  },
  "14d9": function d9(e) {
    e.exports = JSON.parse('{"hotkeys":{"file":{"new_file":"Control+N","open_file":"Control+O","save_file":"Control+S"},"edit":{"undo":"Control+Z","redo":"Control+Y"},"layout":{},"view":{"fullscreen":""}}}');
  },
  "174a": function a(e, t, i) {
    "use strict";

    i.d(t, "k", function () {
      return r;
    }), i.d(t, "l", function () {
      return s;
    }), i.d(t, "a", function () {
      return a;
    }), i.d(t, "b", function () {
      return l;
    }), i.d(t, "e", function () {
      return p;
    }), i.d(t, "r", function () {
      return d;
    }), i.d(t, "f", function () {
      return u;
    }), i.d(t, "n", function () {
      return h;
    }), i.d(t, "h", function () {
      return g;
    }), i.d(t, "i", function () {
      return x;
    }), i.d(t, "j", function () {
      return m;
    }), i.d(t, "g", function () {
      return b;
    }), i.d(t, "m", function () {
      return v;
    }), i.d(t, "p", function () {
      return y;
    }), i.d(t, "q", function () {
      return f;
    }), i.d(t, "c", function () {
      return O;
    }), i.d(t, "d", function () {
      return S;
    }), i.d(t, "o", function () {
      return w;
    });
    var a,
        n = i("13be"),
        o = i("b4d3");

    var s =
    /*#__PURE__*/
    function () {
      function s() {
        _classCallCheck(this, s);

        this._accessor = null, this._parentAssembler = null;
      }

      _createClass(s, [{
        key: "__injectAccessor",
        value: function __injectAccessor(e) {
          this._accessor = e;
        }
      }, {
        key: "attachToSection",
        value: function attachToSection(e) {
          this.belongsToParent(e) || (this.belongsToParent() && this.detachFromParent(), this.accessor.setParent(e.section), this._parentAssembler = e, e.attachProperty(this));
        }
      }, {
        key: "attachToTabularProperty",
        value: function attachToTabularProperty(e) {
          this.belongsToParent(e) || (this.belongsToParent() && this.detachFromParent(), this.accessor.setParent(e.property), this._parentAssembler = e);
        }
      }, {
        key: "detachFromParent",
        value: function detachFromParent() {
          if (!this.belongsToParent()) return;
          var e = this._parentAssembler;
          this.accessor.setParent(null), this._parentAssembler = null, e instanceof o["a"] && e.detachProperty(this);
        }
      }, {
        key: "belongsToParent",
        value: function belongsToParent(e) {
          var t,
              i = this.accessor.getParent();
          return null !== i && (void 0 === e || (e instanceof o["a"] ? t = e.section.instance : e.property.instance, i.instance === t));
        }
      }, {
        key: "property",
        get: function get() {
          return this.accessor.property;
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parentAssembler;
        }
      }, {
        key: "accessor",
        get: function get() {
          if (null === this._accessor) throw new Error("Assembler is not configured with a property.");
          return this._accessor;
        }
      }]);

      return s;
    }();

    var r =
    /*#__PURE__*/
    function (_n$a) {
      _inherits(r, _n$a);

      function r(e, t) {
        var _this3;

        _classCallCheck(this, r);

        var i, a;
        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this)), _this3.id = e.id, _this3.path = null !== (i = e.path) && void 0 !== i ? i : e.id, _this3.name = e.name, _this3.link = null !== (a = e.link) && void 0 !== a ? a : null, _this3.row = e.row, _this3.col = e.col, _this3._parent = null, _this3._actions = null, t && _this3.__prepareAssembler(t);
        return _this3;
      }

      _createClass(r, [{
        key: "registerAction",
        value: function registerAction(e, t, i) {
          null === this._actions && (this._actions = new Map()), this._actions.set(e, {
            text: t,
            "function": i
          });
        }
      }, {
        key: "invokeAction",
        value: function invokeAction(e) {
          if (null === this._actions || !this._actions.has(e)) throw new Error("'".concat(e, "' is not a registered action."));

          this._actions.get(e)["function"]();
        }
      }, {
        key: "__prepareAssembler",
        value: function __prepareAssembler() {
          var _this4 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new s();
          return e.__injectAccessor({
            property: this,
            getParent: function getParent() {
              return _this4._parent;
            },
            setParent: function setParent(e) {
              return _this4._parent = e;
            }
          }), e;
        }
      }, {
        key: "actions",
        get: function get() {
          return this._actions;
        }
      }]);

      return r;
    }(n["a"]);

    (function (e) {
      e[e["TopLeft"] = 0] = "TopLeft", e[e["TopCenter"] = 1] = "TopCenter", e[e["TopRight"] = 2] = "TopRight", e[e["MiddleLeft"] = 3] = "MiddleLeft", e[e["MiddleCenter"] = 4] = "MiddleCenter", e[e["MiddleRight"] = 5] = "MiddleRight", e[e["BottomLeft"] = 6] = "BottomLeft", e[e["BottomCenter"] = 7] = "BottomCenter", e[e["BottomRight"] = 8] = "BottomRight";
    })(a || (a = {}));

    var l =
    /*#__PURE__*/
    function (_r) {
      _inherits(l, _r);

      function l(e, t) {
        var _this5;

        _classCallCheck(this, l);

        var i, n;
        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this, e, t)), _this5.required = null !== (i = e.required) && void 0 !== i && i, _this5.alignment = null !== (n = e.alignment) && void 0 !== n ? n : a.TopLeft, _this5._metrics = new Map();
        return _this5;
      }

      _createClass(l, [{
        key: "registerMetric",
        value: function registerMetric(e, t, i) {
          this._metrics.set(e, {
            text: t,
            value: i
          });
        }
      }, {
        key: "updateMetric",
        value: function updateMetric(e, t) {
          if (!this._metrics.has(e)) throw new Error("'".concat(e, "' is not a registered metric."));
          this._metrics.get(e).value = t;
        }
      }, {
        key: "metrics",
        get: function get() {
          return this._metrics;
        }
      }]);

      return l;
    }(r);

    var c = i("a966");

    var u =
    /*#__PURE__*/
    function (_l) {
      _inherits(u, _l);

      function u(e, t) {
        var _this6;

        _classCallCheck(this, u);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(u).call(this, e, t)), _this6._value = null, _this6._plugins = null;
        return _this6;
      }

      _createClass(u, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new u({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment
          }, e);
          return t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref) {
            var e = _ref.plugin;
            return a.tryInstallPlugin(e);
          }), a.value = this._value, a;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _i4 = _step.value;
              t && (t = this.tryInstallPlugin(_i4));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return t;
        }
      }, {
        key: "toString",
        value: function toString() {
          return null !== this._value ? "" + this._value : "";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(e) {
          var t = this._value;
          this._value = null === e ? null : "string" === typeof e ? new Date(e) : e;
          var i = null === t ? null : new Date(t);
          this.emit("update", this, i);
        }
      }]);

      return u;
    }(l);

    var p =
    /*#__PURE__*/
    function (_u) {
      _inherits(p, _u);

      function p(e, t) {
        _classCallCheck(this, p);

        return _possibleConstructorReturn(this, _getPrototypeOf(p).call(this, e, t));
      }

      _createClass(p, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new p({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment
          }, e);
          return t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref2) {
            var e = _ref2.plugin;
            return a.tryInstallPlugin(e);
          }), a.value = this.value, a;
        }
      }]);

      return p;
    }(u);

    var d =
    /*#__PURE__*/
    function (_u2) {
      _inherits(d, _u2);

      function d(e, t) {
        _classCallCheck(this, d);

        return _possibleConstructorReturn(this, _getPrototypeOf(d).call(this, e, t));
      }

      _createClass(d, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new d({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment
          }, e);
          return t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref3) {
            var e = _ref3.plugin;
            return a.tryInstallPlugin(e);
          }), a.value = this.value, a;
        }
      }]);

      return d;
    }(u);

    var h =
    /*#__PURE__*/
    function (_l2) {
      _inherits(h, _l2);

      function h(e, t) {
        var _this7;

        _classCallCheck(this, h);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, e, t)), _this7.suggestions = [], _this7._value = null, _this7._plugins = null;
        return _this7;
      }

      _createClass(h, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new h({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment
          }, e);
          return a.suggestions = _toConsumableArray(this.suggestions), t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref4) {
            var e = _ref4.plugin;
            return a.tryInstallPlugin(e);
          }), a.value = this._value, a;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _i5 = _step2.value;
              t && (t = this.tryInstallPlugin(_i5));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return t;
        }
      }, {
        key: "toString",
        value: function toString() {
          var e;
          return null !== (e = this._value) && void 0 !== e ? e : "";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(e) {
          var t = this._value;
          this._value = e, this.emit("update", this, t);
        }
      }]);

      return h;
    }(l);

    var v,
        T = i("f139");

    var m =
    /*#__PURE__*/
    function (_l3) {
      _inherits(m, _l3);

      function m(e, t) {
        var _this8;

        _classCallCheck(this, m);

        var i, a;
        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this, e, t)), _this8.min = null !== (i = e.min) && void 0 !== i ? i : -1 / 0, _this8.max = null !== (a = e.max) && void 0 !== a ? a : 1 / 0, _this8._value = null;
        return _this8;
      }

      _createClass(m, [{
        key: "toString",
        value: function toString() {
          return null !== this.value ? "" + this.value : void 0;
        }
      }]);

      return m;
    }(l);

    var g =
    /*#__PURE__*/
    function (_m) {
      _inherits(g, _m);

      function g(e, t) {
        var _this9;

        _classCallCheck(this, g);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(g).call(this, e, t)), _this9._plugins = null;
        return _this9;
      }

      _createClass(g, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new g({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
            min: this.min,
            max: this.max
          }, e);
          return t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref5) {
            var e = _ref5.plugin;
            return a.tryInstallPlugin(e);
          }), a.value = this._value, a;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _i6 = _step3.value;
              t && (t = this.tryInstallPlugin(_i6));
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return t;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(e) {
          var t = this._value;
          this._value = null === e ? e : Object(T["b"])(e, this.min, this.max), this.emit("update", this, t);
        }
      }]);

      return g;
    }(m);

    var x =
    /*#__PURE__*/
    function (_m2) {
      _inherits(x, _m2);

      function x(e, t) {
        var _this10;

        _classCallCheck(this, x);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(x).call(this, e, t)), _this10._plugins = null;
        return _this10;
      }

      _createClass(x, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new x({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
            min: this.min,
            max: this.max
          }, e);
          return t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref6) {
            var e = _ref6.plugin;
            return a.tryInstallPlugin(e);
          }), a.value = this.value, a;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = e[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _i7 = _step4.value;
              t && (t = this.tryInstallPlugin(_i7));
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          return t;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(e) {
          var t = this.value;
          this._value = null === e ? e : Math.round(Object(T["b"])(e, this.min, this.max)), this.emit("update", this, t);
        }
      }]);

      return x;
    }(m);

    var b =
    /*#__PURE__*/
    function (_l4) {
      _inherits(b, _l4);

      function b(e, t) {
        var _this11;

        _classCallCheck(this, b);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(b).call(this, e, t));
        var i = new Map();
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = e.options[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _a = _step5.value;
            var _e3 = _a.value,
                _t2 = _a.text;
            if (i.has(_e3)) throw new Error("All enum values must be unique.");
            i.set(_e3, _t2);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        _this11.options = i, _this11._value = null, _this11._plugins = null, _this11._validOptions = null;
        return _this11;
      }

      _createClass(b, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;

          var a = _toConsumableArray(this.options.entries()).map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                e = _ref8[0],
                t = _ref8[1];

            return {
              value: e,
              text: t
            };
          }),
              n = new b({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
            options: a
          }, e);

          return t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref9) {
            var e = _ref9.plugin;
            return n.tryInstallPlugin(e);
          }), n.value = this._value, n;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = e[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _i8 = _step6.value;
              t && (t = this.tryInstallPlugin(_i8));
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          return t;
        }
      }, {
        key: "toString",
        value: function toString() {
          return null !== this._value ? this.options.get(this._value) : "";
        }
      }, {
        key: "restrictOptions",
        value: function restrictOptions(e) {
          this._validOptions = new Map();
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = e[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _t3 = _step7.value;

              var _e4 = this.options.get(_t3);

              _e4 && this._validOptions.set(_t3, _e4);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          this._value && !this._validOptions.has(this._value) && (this.value = null);
        }
      }, {
        key: "unrestrictOptions",
        value: function unrestrictOptions() {
          this._validOptions = null;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(e) {
          var t = this._value;
          if (null === e) this._value = null;else {
            if (!this.validOptions.has(e)) throw new Error("Enum value '".concat(e, "' is not a valid option."));
            this._value = e;
          }
          this.emit("update", this, t);
        }
      }, {
        key: "validOptions",
        get: function get() {
          return null === this._validOptions ? this.options : this._validOptions;
        }
      }]);

      return b;
    }(l);

    (function (e) {
      e[e["Descending"] = 0] = "Descending", e[e["None"] = 1] = "None", e[e["Ascending"] = 2] = "Ascending";
    })(v || (v = {}));

    var f =
    /*#__PURE__*/
    function (_s2) {
      _inherits(f, _s2);

      function f() {
        var _this12;

        _classCallCheck(this, f);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this)), _this12._tabularAccessor = null;
        return _this12;
      }

      _createClass(f, [{
        key: "__injectTabularAccessor",
        value: function __injectTabularAccessor(e) {
          this._tabularAccessor = e;
        }
      }, {
        key: "setDefaultRow",
        value: function setDefaultRow(e) {
          this.tabularAccessor.setDefaultRow(e);
        }
      }, {
        key: "property",
        get: function get() {
          return this.tabularAccessor.property;
        }
      }, {
        key: "tabularAccessor",
        get: function get() {
          if (null === this._tabularAccessor) throw new Error("Assembler is not configured with a tabular property.");
          return this._tabularAccessor;
        }
      }]);

      return f;
    }(s);

    var y =
    /*#__PURE__*/
    function (_r2) {
      _inherits(y, _r2);

      function y(e, t) {
        var _this13;

        _classCallCheck(this, y);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(y).call(this, e, t)), _this13._value = new Map(), _this13._defaultRow = [], _this13._columnState = [], t && _this13.__prepareAssembler(t);
        return _this13;
      }

      _createClass(y, [{
        key: "getRowId",
        value: function getRowId(e) {
          return _toConsumableArray(this._value.keys())[e];
        }
      }, {
        key: "getRowIndex",
        value: function getRowIndex(e) {
          return _toConsumableArray(this._value.keys()).findIndex(function (t) {
            return t === e;
          });
        }
      }, {
        key: "getRow",
        value: function getRow(e) {
          var t;
          return this._value.has(e) && (t = [e, this._value.get(e)]), t;
        }
      }, {
        key: "createRow",
        value: function createRow(e) {
          var t = [];
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this._defaultRow[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _i9 = _step8.value;

              var _a2 = new s(),
                  _n2 = _i9.clone(_a2);

              e && _i9.id in e && (_n2.value = e[_i9.id]), t.push(_n2);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          return [T["c"](), t];
        }
      }, {
        key: "insertRow",
        value: function insertRow(e, t) {
          var i = this.__prepareAssembler(),
              a = [];

          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            var _loop = function _loop() {
              var n = _step9.value;
              var t = e[1].find(function (e) {
                return e.id === n.id && e.constructor.name === n.constructor.name;
              });
              if (!t) throw Error("Row does not match the table's structure.");
              a.push(t);
            };

            for (var _iterator9 = this._defaultRow[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                _iterator9["return"]();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          for (var _i10 = 0, _a3 = a; _i10 < _a3.length; _i10++) {
            var _n3 = _a3[_i10];

            _n3.__prepareAssembler().attachToTabularProperty(i);
          }

          if (void 0 === t) this._value.set(e[0], a);else {
            var _i11 = _toConsumableArray(this._value.entries());

            _i11.splice(t, 0, [e[0], a]), this._value = new Map(_i11);
          }
          this.emit("insert-row", this, [].concat(a), e[0]);
        }
      }, {
        key: "moveRow",
        value: function moveRow(e, t) {
          var i = _toConsumableArray(this._value.entries());

          i.splice(t, 0, i.splice(e, 1)[0]), this._value = new Map(i), this.emit("move-row", this, e, t);
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(e) {
          if ("number" === typeof e && (e = _toConsumableArray(this._value.keys())[e]), void 0 === e || !this._value.has(e)) return !1;

          var t = this._value.get(e);

          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = t[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _i12 = _step10.value;

              _i12.__prepareAssembler().detachFromParent();
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          return this._value["delete"](e), this.emit("delete-row", this, t, e), !0;
        }
      }, {
        key: "captureColumnSnapshot",
        value: function captureColumnSnapshot(e, t) {
          var _this14 = this;

          var i,
              a,
              n = this._columnState.findIndex(function (t) {
            return t.id === e;
          });

          if (-1 === n) throw new Error("Column '".concat(e, "' does not exist."));
          if (void 0 === t) return {
            id: this._columnState[n].id,
            sort: this._columnState[n].sort,
            ids: _toConsumableArray(this._value.keys())
          };

          switch (t) {
            case v.Descending:
              a = 1;
              break;

            case v.Ascending:
              a = -1;
              break;

            case v.None:
              a = 0;
              break;
          }

          switch (this._defaultRow[n].constructor.name) {
            case h.name:
              i = _toConsumableArray(this._value.keys()).sort(function (e, t) {
                var i, o;

                var s = _this14._value.get(e)[n],
                    r = _this14._value.get(t)[n];

                if (s instanceof h && r instanceof h) {
                  var _e5 = null !== (i = s.value) && void 0 !== i ? i : "",
                      _t4 = null !== (o = r.value) && void 0 !== o ? o : "";

                  return _e5.localeCompare(_t4) * a;
                }

                throw new Error("Properties mismatch column type.");
              });
              break;

            case g.name:
            case x.name:
              i = _toConsumableArray(this._value.keys()).sort(function (e, t) {
                var i, o;

                var s = _this14._value.get(e)[n],
                    r = _this14._value.get(t)[n];

                if (s instanceof m && r instanceof m) {
                  var _e6 = null !== (i = s.value) && void 0 !== i ? i : 0,
                      _t5 = null !== (o = r.value) && void 0 !== o ? o : 0;

                  return (_e6 - _t5) * a;
                }

                throw new Error("Properties mismatch column type.");
              });
              break;

            case p.name:
            case d.name:
            case u.name:
              i = _toConsumableArray(this._value.keys()).sort(function (e, t) {
                var i, o;

                var s = _this14._value.get(e)[n],
                    r = _this14._value.get(t)[n];

                if (s instanceof u && r instanceof u) {
                  var _e7 = null !== (i = s.value) && void 0 !== i ? i : new Date(0),
                      _t6 = null !== (o = r.value) && void 0 !== o ? o : new Date(0);

                  return (_e7.getTime() - _t6.getTime()) * a;
                }

                throw new Error("Properties mismatch column type.");
              });
              break;

            case b.name:
              i = _toConsumableArray(this._value.keys()).sort(function (e, t) {
                var i, o, s, r;

                var l = _this14._value.get(e)[n],
                    c = _this14._value.get(t)[n];

                if (l instanceof b && c instanceof b) {
                  var _e8 = null !== (o = null === (i = l.value) || void 0 === i ? void 0 : i.toString()) && void 0 !== o ? o : "",
                      _t7 = null !== (r = null === (s = c.value) || void 0 === s ? void 0 : s.toString()) && void 0 !== r ? r : "";

                  return _e8.localeCompare(_t7) * a;
                }

                throw new Error("Properties mismatch column type.");
              });
              break;

            default:
              throw new Error("Cannot sort non-atomic property type.");
          }

          return {
            id: this._defaultRow[n].id,
            sort: t,
            ids: i
          };
        }
      }, {
        key: "applyColumnSnapshot",
        value: function applyColumnSnapshot(e) {
          var t = this._value.size === e.ids.length;
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = e.ids[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _o = _step11.value;
              t && (t = this._value.has(_o));
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          if (!t) throw new Error("Invalid snapshot.");

          var i = e.id,
              a = this._columnState.find(function (e) {
            return e.id === i;
          });

          if (!a) throw new Error("Column '".concat(i, "' does not exist."));
          a.sort = e.sort;
          var n = [];
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = e.ids[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _o2 = _step12.value;
              n.push([_o2, this._value.get(_o2)]);
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                _iterator12["return"]();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          this._value = new Map(n), this.emit("reorder-row", this);
        }
      }, {
        key: "toString",
        value: function toString() {
          return "[ Not Supported ]";
        }
      }, {
        key: "__prepareAssembler",
        value: function __prepareAssembler() {
          var _this15 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new f();
          return _get(_getPrototypeOf(y.prototype), "__prepareAssembler", this).call(this, e), e.__injectTabularAccessor({
            property: this,
            setDefaultRow: function setDefaultRow(e) {
              _this15._value = new Map(), _this15._defaultRow = e;
              var _iteratorNormalCompletion13 = true;
              var _didIteratorError13 = false;
              var _iteratorError13 = undefined;

              try {
                for (var _iterator13 = _this15._defaultRow[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  var _t8 = _step13.value;

                  _this15._columnState.push({
                    id: _t8.id,
                    name: _t8.name,
                    sort: v.None,
                    col: Array.isArray(_t8.col) ? _toConsumableArray(_t8.col) : _t8.col,
                    row: Array.isArray(_t8.row) ? _toConsumableArray(_t8.row) : _t8.row
                  });
                }
              } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                    _iterator13["return"]();
                  }
                } finally {
                  if (_didIteratorError13) {
                    throw _iteratorError13;
                  }
                }
              }
            }
          }), e;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
      }, {
        key: "defaultRow",
        get: function get() {
          return this._defaultRow;
        }
      }, {
        key: "columnState",
        get: function get() {
          return this._columnState;
        }
      }]);

      return y;
    }(r);

    var O =
    /*#__PURE__*/
    function (_y) {
      _inherits(O, _y);

      function O(e, t) {
        var _this16;

        _classCallCheck(this, O);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(O).call(this, e, t)), _this16.layout = {
          cols: e.layout.cols
        }, _this16._plugins = null;
        return _this16;
      }

      _createClass(O, [{
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new O({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            layout: {
              cols: this.layout.cols
            }
          }, e);
          t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref10) {
            var e = _ref10.plugin;
            return a.tryInstallPlugin(e);
          });
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = this._value[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var _step14$value = _slicedToArray(_step14.value, 2),
                  _n4 = _step14$value[0],
                  _o3 = _step14$value[1];

              a.insertRow([_n4, _o3.map(function (e) {
                return e.clone();
              })]);
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                _iterator14["return"]();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }

          return a;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = e[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var _i13 = _step15.value;
              t && (t = this.tryInstallPlugin(_i13));
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                _iterator15["return"]();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }

          return t;
        }
      }]);

      return O;
    }(y);

    var S =
    /*#__PURE__*/
    function (_y2) {
      _inherits(S, _y2);

      function S(e, t) {
        var _this17;

        _classCallCheck(this, S);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(S).call(this, e, t)), _this17.layout = {
          summary: e.layout.summary,
          rows: e.layout.rows,
          cols: e.layout.cols
        }, _this17._collapsed = new Map(), _this17._plugins = null;
        return _this17;
      }

      _createClass(S, [{
        key: "insertRow",
        value: function insertRow(e, t) {
          this._collapsed.set(e[0], !0), _get(_getPrototypeOf(S.prototype), "insertRow", this).call(this, e, t);
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(e) {
          return "number" === typeof e && (e = _toConsumableArray(this._value.keys())[e]), void 0 !== e && this._collapsed["delete"](e), _get(_getPrototypeOf(S.prototype), "deleteRow", this).call(this, e);
        }
      }, {
        key: "setRowCollapse",
        value: function setRowCollapse(e, t) {
          this._collapsed.has(e) && this._collapsed.set(e, t);
        }
      }, {
        key: "clone",
        value: function clone(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          var a = new S({
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            layout: {
              cols: this.layout.cols,
              rows: this.layout.rows,
              summary: this.layout.summary
            }
          }, e);
          t || null === (i = this._plugins) || void 0 === i || i.forEach(function (_ref11) {
            var e = _ref11.plugin;
            return a.tryInstallPlugin(e);
          });
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = this._value[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var _step16$value = _slicedToArray(_step16.value, 2),
                  _n5 = _step16$value[0],
                  _o4 = _step16$value[1];

              a.insertRow([_n5, _o4.map(function (e) {
                return e.clone();
              })]), a.setRowCollapse(_n5, this._collapsed.get(_n5));
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                _iterator16["return"]();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          return a;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new c["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = e[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var _i14 = _step17.value;
              t && (t = this.tryInstallPlugin(_i14));
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                _iterator17["return"]();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          return t;
        }
      }, {
        key: "collapsed",
        get: function get() {
          return this._collapsed;
        }
      }]);

      return S;
    }(y);

    var w =
    /*#__PURE__*/
    function () {
      function w() {
        _classCallCheck(this, w);
      }

      _createClass(w, null, [{
        key: "parse",
        value: function parse(e, t) {
          var i = [];
          return this.parseExpression(t, e.split(this.RESERVED).filter(Boolean), i), i;
        }
      }, {
        key: "parseExpression",
        value: function parseExpression(e, t, i) {
          this.SYMBOLS.BOLD.test(t[0]) ? (i.push({
            text: "",
            format: "bold"
          }), this.parseBold(e, t, i), this.parseExpression(e, t, i)) : 0 < t.length && (i.push({
            text: "",
            format: "normal"
          }), this.parseText(e, t, i), this.parseExpression(e, t, i));
        }
      }, {
        key: "parseBold",
        value: function parseBold(e, t, i) {
          this.accept(t, this.SYMBOLS.BOLD), this.parseText(e, t, i), this.accept(t, this.SYMBOLS.BOLD);
        }
      }, {
        key: "parseText",
        value: function parseText(e, t, i) {
          this.SYMBOLS.BEG_ID.test(t[0]) ? (this.parseIdentifier(e, t, i), this.parseText(e, t, i)) : this.RESERVED.test(t[0]) || (i.at(-1).text += t[0], t.shift(), this.parseText(e, t, i));
        }
      }, {
        key: "parseIdentifier",
        value: function parseIdentifier(e, t, i) {
          if (!this.accept(t, this.SYMBOLS.BEG_ID)) throw new Error("Unexpected token: '".concat(t[0], "'"));
          var a = t[0].trim(),
              n = e.find(function (e) {
            return e.id === a;
          });
          if (void 0 === n) i.at(-1).text += "[Error: Unknown property '".concat(a, "']");else {
            var _e9 = n.toString() || n.name;

            i.at(-1).text += _e9.replace(/\n/g, "");
          }
          if (t.shift(), !this.accept(t, this.SYMBOLS.END_ID)) throw new Error("Unexpected token: '".concat(t[0], "'"));
        }
      }, {
        key: "accept",
        value: function accept(e, t) {
          return !!t.test(e[0]) && (e.shift(), !0);
        }
      }]);

      return w;
    }();

    w.SYMBOLS = {
      BEG_ID: /(?<!\\)\{\{/,
      END_ID: /(?<!\\)\}\}/,
      BOLD: /(?<!\\)\*\*/
    }, w.RESERVED = new RegExp("(".concat(Object.values(w.SYMBOLS).map(function (e) {
      return e.source;
    }).join("|"), ")"));
  },
  "1afa": function afa(e, t, i) {},
  "1c81": function c81(e, t, i) {
    "use strict";

    i.d(t, "m", function () {
      return a["l"];
    }), i.d(t, "a", function () {
      return a["a"];
    }), i.d(t, "b", function () {
      return a["b"];
    }), i.d(t, "e", function () {
      return a["e"];
    }), i.d(t, "u", function () {
      return a["r"];
    }), i.d(t, "f", function () {
      return a["f"];
    }), i.d(t, "q", function () {
      return a["n"];
    }), i.d(t, "h", function () {
      return a["h"];
    }), i.d(t, "i", function () {
      return a["i"];
    }), i.d(t, "j", function () {
      return a["j"];
    }), i.d(t, "g", function () {
      return a["g"];
    }), i.d(t, "s", function () {
      return a["p"];
    }), i.d(t, "t", function () {
      return a["q"];
    }), i.d(t, "c", function () {
      return a["c"];
    }), i.d(t, "d", function () {
      return a["d"];
    }), i.d(t, "r", function () {
      return a["o"];
    }), i.d(t, "o", function () {
      return n["a"];
    }), i.d(t, "p", function () {
      return n["b"];
    }), i.d(t, "k", function () {
      return l;
    }), i.d(t, "l", function () {
      return s;
    }), i.d(t, "n", function () {
      return c["a"];
    });
    var a = i("174a"),
        n = i("8096"),
        o = i("13be");

    var s =
    /*#__PURE__*/
    function () {
      function s() {
        _classCallCheck(this, s);

        this._accessor = null, this._sectionAssemblers = new Map();
      }

      _createClass(s, [{
        key: "__injectAccessor",
        value: function __injectAccessor(e) {
          this._accessor = e, this._sectionAssemblers = new Map();
        }
      }, {
        key: "attachSection",
        value: function attachSection(e) {
          if (this.includesSection(e)) return;
          var t = e.section.id;
          this.includesSection(t) && this.detachSection(t), this.accessor.sections.set(t, e.section), this._sectionAssemblers.set(t, e), e.attachToPage(this);
        }
      }, {
        key: "detachSection",
        value: function detachSection(e) {
          if (!this.includesSection(e)) return;
          "string" === typeof e && (e = this.sections.get(e));
          var t = e.section.id;
          this.accessor.sections["delete"](t), this._sectionAssemblers["delete"](t), e.detachFromPage();
        }
      }, {
        key: "includesSection",
        value: function includesSection(e) {
          var t = this.accessor.sections;
          if ("string" === typeof e) return t.has(e);
          var i = e.section.id;
          if (!t.has(i)) return !1;
          var a = t.get(i);
          return a.instance === e.section.instance;
        }
      }, {
        key: "page",
        get: function get() {
          return this.accessor.page;
        }
      }, {
        key: "sections",
        get: function get() {
          return this._sectionAssemblers;
        }
      }, {
        key: "accessor",
        get: function get() {
          if (null === this._accessor) throw new Error("Assembler is not configured with a page.");
          return this._accessor;
        }
      }]);

      return s;
    }();

    var r = i("a966");

    var l =
    /*#__PURE__*/
    function (_o$a) {
      _inherits(l, _o$a);

      function l(e, t) {
        var _this18;

        _classCallCheck(this, l);

        var i;
        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(l).call(this));
        var a = new Map();
        _this18.id = e.id, _this18.path = null !== (i = e.path) && void 0 !== i ? i : e.id, _this18.sections = a, _this18._plugins = null, t && _this18.__prepareAssembler(t);
        return _this18;
      }

      _createClass(l, [{
        key: "clone",
        value: function clone(e) {
          null !== e && void 0 !== e || (e = new s());
          var t = new l({
            id: this.id,
            path: this.path
          }, e);
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = this.sections.values()[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var _i15 = _step18.value;

              var _t9 = new n["b"]();

              _i15.clone(_t9), e.attachSection(_t9);
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                _iterator18["return"]();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          return t;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new r["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = e[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var _i16 = _step19.value;
              t && (t = this.tryInstallPlugin(_i16));
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                _iterator19["return"]();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          return t;
        }
      }, {
        key: "__prepareAssembler",
        value: function __prepareAssembler() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new s();
          return e.__injectAccessor({
            page: this,
            sections: this.sections
          }), e;
        }
      }]);

      return l;
    }(o["a"]);

    i("f112");
    var c = i("2576");
  },
  "1dc6": function dc6(e, t, i) {},
  2137: function _(e, t, i) {
    "use strict";

    var a = i("991e");
    i.d(t, "a", function () {
      return a["a"];
    });
    var n = i("7770");
    i.d(t, "b", function () {
      return n["a"];
    }), i.d(t, "c", function () {
      return n["b"];
    });
  },
  2337: function _(e, t, i) {
    "use strict";

    i("fa88");
  },
  2576: function _(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });

    var a = function a() {
      _classCallCheck(this, a);
    };
  },
  "28d3": function d3(e, t, i) {},
  2975: function _(e, t, i) {},
  "34aa": function aa(e, t, i) {},
  "39d4": function d4(e, t, i) {
    "use strict";

    i("880a");
  },
  "3bd1": function bd1(e, t, i) {
    "use strict";

    i("5aff");
  },
  "3c3e": function c3e(e, t, i) {},
  "3cef": function cef(e, t, i) {
    "use strict";

    i("1afa");
  },
  4771: function _(e, t, i) {},
  "50e3": function e3(e, t, i) {},
  5475: function _(e, t, i) {
    "use strict";

    i("031a");
  },
  5800: function _(e, t, i) {
    "use strict";

    i.r(t);
    var a = i("7a23");
    var n = {
      "class": "field-name"
    },
        o = ["href"];

    function s(e, t, i, s, r, l) {
      return Object(a["p"])(), Object(a["f"])("div", {
        "class": "field-grid-control",
        style: Object(a["o"])(e.grid)
      }, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.properties, function (i) {
        return Object(a["p"])(), Object(a["f"])(a["a"], {
          key: i.id
        }, [Object(a["g"])("div", {
          "class": "field-info",
          style: Object(a["o"])(e.propTitleGridStyle(i))
        }, [Object(a["g"])("p", n, Object(a["y"])(i.name), 1), i.help ? (Object(a["p"])(), Object(a["f"])("a", {
          key: 0,
          "class": "field-help",
          href: i.help,
          target: "”_blank”"
        }, "", 8, o)) : Object(a["e"])("", !0)], 4), (Object(a["p"])(), Object(a["d"])(Object(a["x"])(e.getField(i)), {
          "class": "field-value",
          style: Object(a["o"])(e.propFieldGridStyle(i)),
          property: i,
          onExecute: t[0] || (t[0] = function (t) {
            return e.$emit("execute", t);
          })
        }, null, 40, ["style", "property"]))], 64);
      }), 128))], 4);
    }

    var r = {
      "class": "options-container"
    },
        l = {
      "class": "value"
    };

    function c(e, t, i, n, o, s) {
      var c = Object(a["w"])("OptionsList"),
          u = Object(a["w"])("FocusBox");
      return Object(a["p"])(), Object(a["d"])(u, {
        "class": Object(a["n"])(["text-field-control", e.alignment]),
        tabindex: "0",
        pointerEvent: "click",
        onFocusin: e.onFocusIn,
        onFocusout: e.onFocusOut
      }, {
        "default": Object(a["C"])(function () {
          return [Object(a["g"])("div", r, [null !== e.select ? (Object(a["p"])(), Object(a["d"])(c, {
            key: 0,
            "class": "options-list",
            align: e.property.alignment,
            select: e.select,
            options: e.suggestions,
            maxHeight: e.maxHeight,
            onSelect: e.updatePropertyFromSuggestion
          }, null, 8, ["align", "select", "options", "maxHeight", "onSelect"])) : Object(a["e"])("", !0)]), Object(a["g"])("div", l, [Object(a["D"])(Object(a["g"])("textarea", {
            "onUpdate:modelValue": t[0] || (t[0] = function (t) {
              return e.value = t;
            }),
            ref: "field",
            placeholder: "None",
            onInput: t[1] || (t[1] = function () {
              return e.onInput && e.onInput.apply(e, arguments);
            }),
            onKeyup: t[2] || (t[2] = Object(a["E"])(function () {}, ["stop"])),
            onKeydown: t[3] || (t[3] = Object(a["E"])(function () {
              return e.onKeyDown && e.onKeyDown.apply(e, arguments);
            }, ["stop"]))
          }, null, 544), [[a["z"], e.value]])])];
        }),
        _: 1
      }, 8, ["class", "onFocusin", "onFocusout"]);
    }

    var u = i("7aa9"),
        p = i("9ae2"),
        d = i("f139"),
        h = i("1c81"),
        v = i("e0ac");
    var T = {
      key: 0,
      "class": "options"
    },
        m = ["list-id", "onClick", "onMouseenter"],
        g = {
      key: 1,
      "class": "no-options"
    };

    function x(e, t, i, n, o, s) {
      var r = Object(a["w"])("ScrollBox");
      return Object(a["p"])(), Object(a["f"])("div", {
        "class": Object(a["n"])(["options-list-field-control", e.alignment, {
          flip: e.flip
        }])
      }, [Object(a["i"])(r, {
        top: e.scrollTop,
        style: Object(a["o"])(e.style),
        propagateScroll: !1
      }, {
        "default": Object(a["C"])(function () {
          return [e.hasOptions ? (Object(a["p"])(), Object(a["f"])("ul", T, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.options, function (t) {
            return Object(a["p"])(), Object(a["f"])("li", {
              ref_for: !0,
              ref: "items",
              key: t.value,
              "list-id": t.value,
              "class": Object(a["n"])({
                active: e.isActive(t),
                "null": e.isNull(t)
              }),
              onClick: function onClick(i) {
                return e.$emit("select", t.value);
              },
              onMouseenter: function onMouseenter(i) {
                return e.active = t.value;
              },
              "exit-focus-box": ""
            }, Object(a["y"])(t.text), 43, m);
          }), 128))])) : Object(a["e"])("", !0), e.hasOptions ? Object(a["e"])("", !0) : (Object(a["p"])(), Object(a["f"])("div", g, " No matches "))];
        }),
        _: 1
      }, 8, ["top", "style"])], 2);
    }

    var b = i("6f01"),
        f = Object(a["j"])({
      name: "EnumField",
      props: {
        maxHeight: {
          type: Number,
          required: !0
        },
        options: {
          type: Array,
          required: !0
        },
        select: {
          type: String
        },
        align: {
          type: Number
        }
      },
      data: function data() {
        return {
          flip: !1,
          active: this.select,
          scrollTop: 0
        };
      },
      computed: {
        alignment: function alignment() {
          switch (this.align) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
            default:
              return "align-left";

            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";

            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        },
        style: function style() {
          return {
            maxHeight: this.maxHeight + "px"
          };
        },
        hasOptions: function hasOptions() {
          return 0 < this.options.length;
        }
      },
      emits: ["select"],
      methods: {
        isNull: function isNull(e) {
          return null === e.value;
        },
        isActive: function isActive(e) {
          return this.active === e.value;
        },
        focusActive: function focusActive() {
          var e;
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = this.$refs.items[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var _t10 = _step20.value;

              if (this.select === _t10.getAttribute("list-id")) {
                e = _t10;
                break;
              }
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                _iterator20["return"]();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }

          e && (this.scrollTop = e.offsetTop - 6);
        }
      },
      watch: {
        select: function select() {
          this.active = this.select, this.focusActive();
        },
        options: function options() {
          var _this19 = this;

          this.$nextTick(function () {
            _this19.focusActive();
          });
        }
      },
      mounted: function mounted() {
        var e = "scroll-content",
            t = this.$el,
            i = this.$el.parentElement,
            a = document.body;

        while (i !== a && !i.classList.contains(e)) {
          i = i.parentElement;
        }

        var _i$getBoundingClientR = i.getBoundingClientRect(),
            n = _i$getBoundingClientR.bottom,
            _t$getBoundingClientR = t.getBoundingClientRect(),
            o = _t$getBoundingClientR.bottom;

        this.flip = n < o, this.focusActive();
      },
      components: {
        ScrollBox: b["a"]
      }
    }),
        y = (i("655e"), i("6b0d")),
        O = i.n(y);
    var S = O()(f, [["render", x], ["__scopeId", "data-v-7ebe2dc2"]]);
    var w = S,
        j = Object(a["j"])({
      name: "TextField",
      setup: function setup() {
        return {
          field: Object(a["t"])(null)
        };
      },
      props: {
        property: {
          type: Object,
          required: !0
        },
        maxHeight: {
          type: Number,
          "default": 200
        }
      },
      data: function data() {
        return {
          value: "",
          select: null,
          onResizeObserver: null
        };
      },
      computed: {
        alignment: function alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
              return "align-top align-left";

            case h["a"].TopCenter:
              return "align-top align-center";

            case h["a"].TopRight:
              return "align-top align-right";

            case h["a"].MiddleLeft:
              return "align-middle align-left";

            case h["a"].MiddleCenter:
              return "align-middle align-center";

            case h["a"].MiddleRight:
              return "align-middle align-right";

            case h["a"].BottomLeft:
              return "align-bottom align-left";

            case h["a"].BottomCenter:
              return "align-bottom align-center";

            case h["a"].BottomRight:
              return "align-bottom align-right";
          }
        },
        suggestions: function suggestions() {
          var e = [],
              t = this.value.toLocaleLowerCase();

          for (var _i17 = 0; _i17 < this.property.suggestions.length; _i17++) {
            var _a4 = this.property.suggestions[_i17];
            _a4.toLocaleLowerCase().includes(t) && e.push({
              id: Object(d["a"])(_a4),
              text: _a4
            });
          }

          return e;
        }
      },
      emits: ["execute"],
      methods: {
        onFocusIn: function onFocusIn() {
          this.field.focus(), "" === this.value && this.promptSuggestions();
          var e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onFocusOut: function onFocusOut() {
          this.stopSuggestions();
          var e = p["f"](this.property);
          this.$emit("execute", e);
        },
        onInput: function onInput() {
          this.updateProperty(this.value), this.promptSuggestions();
        },
        onKeyDown: function onKeyDown(e) {
          var _this20 = this;

          var t = e.target;
          if (t.selectionStart !== t.selectionEnd) return;
          var i,
              a = this.suggestions,
              n = a.findIndex(function (e) {
            return e.id === _this20.select;
          });

          switch (e.key) {
            case "ArrowUp":
              0 < n && (this.select = a[n - 1].id), null !== this.select && e.preventDefault();
              break;

            case "ArrowDown":
              n < a.length - 1 && (this.select = a[n + 1].id), null !== this.select && e.preventDefault();
              break;

            case "Tab":
              i = -1 !== n, i && (i = "" !== this.value), i && (i = this.value !== a[n].text), i && (this.updatePropertyFromSuggestion(a[n].id), this.stopSuggestions(), e.preventDefault());
              break;

            case "Enter":
              i = -1 !== n, i && (i = this.value !== a[n].text), i && (this.updatePropertyFromSuggestion(a[n].id), this.stopSuggestions(), e.preventDefault());
              break;
          }
        },
        promptSuggestions: function promptSuggestions() {
          var e;
          var t = this.value === (null === (e = this.suggestions[0]) || void 0 === e ? void 0 : e.text),
              i = 1 === this.suggestions.length;
          if (t && i) return void (this.select = null);
          this.select = null;
          var a = this.value.toLocaleLowerCase();
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = this.suggestions[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _n6 = _step21.value;
              if (_n6.text.toLocaleLowerCase().includes(a)) return void (this.select = _n6.id);
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                _iterator21["return"]();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        },
        stopSuggestions: function stopSuggestions() {
          this.select = null;
        },
        updatePropertyFromSuggestion: function updatePropertyFromSuggestion(e) {
          var t = this.suggestions.find(function (t) {
            return t.id === e;
          });
          t && this.updateProperty(t.text);
        },
        updateProperty: function updateProperty(e) {
          if (this.property.value !== e) {
            var _t11 = e || null,
                _i18 = p["n"](this.property, _t11);

            this.$emit("execute", _i18);
          }

          this.refreshValue();
        },
        refreshValue: function refreshValue() {
          var _this21 = this;

          var e;
          this.value = null !== (e = this.property.value) && void 0 !== e ? e : "", this.$nextTick(function () {
            _this21.refreshHeight();
          });
        },
        refreshHeight: function refreshHeight() {
          null !== this.field && (this.field.style.height = "0px", this.field.style.height = this.field.scrollHeight + "px");
        }
      },
      watch: {
        property: function property() {
          this.refreshValue();
        },
        "property.value": function propertyValue() {
          this.refreshValue();
        }
      },
      mounted: function mounted() {
        var _this22 = this;

        this.onResizeObserver = new ResizeObserver(function () {
          _this22.refreshHeight();
        }), this.onResizeObserver.observe(this.field), this.refreshValue();
        var e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted: function unmounted() {
        this.onResizeObserver.disconnect();
        var e = u["a"](this.property);
        this.$emit("execute", e);
      },
      components: {
        FocusBox: v["a"],
        OptionsList: w
      }
    });
    i("821d");
    var A = O()(j, [["render", c], ["__scopeId", "data-v-5a7fd553"]]);
    var _ = A;

    var C = function C(e) {
      return Object(a["r"])("data-v-337bd2bd"), e = e(), Object(a["q"])(), e;
    },
        I = {
      "class": "options-container"
    },
        P = {
      "class": "value-container"
    },
        k = C(function () {
      return Object(a["g"])("div", {
        "class": "dropdown-arrow"
      }, "▼", -1);
    });

    function M(e, t, i, n, o, s) {
      var r = Object(a["w"])("OptionsList"),
          l = Object(a["w"])("FocusBox");
      return Object(a["p"])(), Object(a["d"])(l, {
        "class": Object(a["n"])(["enum-field-control", e.alignment]),
        tabindex: "0",
        pointerEvent: "click",
        onFocusin: e.onFocusIn,
        onFocusout: e.onFocusOut
      }, {
        "default": Object(a["C"])(function () {
          return [Object(a["g"])("div", I, [e.showMenu ? (Object(a["p"])(), Object(a["d"])(r, {
            key: 0,
            "class": "options-list",
            align: e.property.alignment,
            select: e.select,
            options: e.options,
            maxHeight: e.maxHeight,
            onSelect: e.updateProperty
          }, null, 8, ["align", "select", "options", "maxHeight", "onSelect"])) : Object(a["e"])("", !0)]), Object(a["g"])("div", P, [Object(a["D"])(Object(a["g"])("div", {
            "class": Object(a["n"])(["value-text", {
              "is-null": e.isNull
            }])
          }, Object(a["y"])(e.selectText), 3), [[a["A"], !e.showSearch]]), Object(a["D"])(Object(a["g"])("input", {
            type: "text",
            ref: "search",
            "class": "value-search",
            placeholder: "Search",
            onInput: t[0] || (t[0] = function () {
              return e.onSearchInput && e.onSearchInput.apply(e, arguments);
            }),
            onKeyup: t[1] || (t[1] = Object(a["E"])(function () {}, ["stop"])),
            onKeydown: t[2] || (t[2] = Object(a["E"])(function () {
              return e.onSearchKeyDown && e.onSearchKeyDown.apply(e, arguments);
            }, ["stop"])),
            "onUpdate:modelValue": t[3] || (t[3] = function (t) {
              return e.searchTerm = t;
            })
          }, null, 544), [[a["z"], e.searchTerm], [a["A"], e.showSearch]]), k])];
        }),
        _: 1
      }, 8, ["class", "onFocusin", "onFocusout"]);
    }

    var E = Object(a["j"])({
      name: "EnumField",
      setup: function setup() {
        return {
          search: Object(a["t"])(null)
        };
      },
      props: {
        property: {
          type: Object,
          required: !0
        },
        maxHeight: {
          type: Number,
          "default": 200
        }
      },
      data: function data() {
        return {
          select: this.property.value,
          showMenu: !1,
          showSearch: !1,
          searchTerm: ""
        };
      },
      computed: {
        alignment: function alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
              return "align-left";

            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";

            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        },
        isNull: function isNull() {
          return null === this.property.value;
        },
        options: function options() {
          var e = [];
          "" === this.searchTerm && e.push({
            value: null,
            text: "None"
          });
          var t = this.searchTerm.toLocaleLowerCase();
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = this.property.validOptions[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _step22$value = _slicedToArray(_step22.value, 2),
                  _i19 = _step22$value[0],
                  _a5 = _step22$value[1];

              ("" === t || _a5.toLocaleLowerCase().includes(t)) && e.push({
                value: _i19,
                text: _a5
              });
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                _iterator22["return"]();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          return e;
        },
        selectText: function selectText() {
          return null !== this.select ? this.property.options.get(this.select) : "None";
        },
        style: function style() {
          return {
            maxHeight: this.maxHeight + "px"
          };
        }
      },
      emits: ["execute"],
      methods: {
        onFocusIn: function onFocusIn() {
          var _this23 = this;

          this.showMenu = !0, this.showSearch = !0, setTimeout(function () {
            var e;
            null === (e = _this23.search) || void 0 === e || e.focus();
          }, 0);
          var e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onFocusOut: function onFocusOut() {
          this.showMenu = !1, this.showSearch = !1, this.searchTerm = "", this.refreshValue();
          var e = p["f"](this.property);
          this.$emit("execute", e);
        },
        onSearchInput: function onSearchInput() {
          if (this.select = null, "" === this.searchTerm) return void (this.select = this.property.value);
          var e = this.searchTerm.toLocaleLowerCase();
          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = this.property.validOptions[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var _step23$value = _slicedToArray(_step23.value, 2),
                  _t12 = _step23$value[0],
                  _i20 = _step23$value[1];

              if (_i20.toLocaleLowerCase().includes(e)) return void (this.select = _t12);
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
                _iterator23["return"]();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }
        },
        onSearchKeyDown: function onSearchKeyDown(e) {
          var _this24 = this;

          var t,
              i = e.target;
          if (i.selectionStart !== i.selectionEnd) return;
          var a = this.options;

          switch (e.key) {
            case "ArrowUp":
              t = a.findIndex(function (e) {
                return e.value === _this24.select;
              }), 0 < t && (this.select = a[t - 1].value);
              break;

            case "ArrowDown":
              t = a.findIndex(function (e) {
                return e.value === _this24.select;
              }), t < a.length - 1 && (this.select = a[t + 1].value);
              break;

            case "Tab":
            case "Enter":
              this.updateProperty(this.select), this.search.blur();
              break;
          }
        },
        updateProperty: function updateProperty(e) {
          if (this.property.value !== e) {
            var _t13 = p["l"](this.property, e);

            this.$emit("execute", _t13);
          }
        },
        refreshValue: function refreshValue() {
          this.select = this.property.value;
        }
      },
      watch: {
        property: function property() {
          this.refreshValue();
        },
        "property.value": function propertyValue() {
          this.refreshValue();
        }
      },
      mounted: function mounted() {
        this.refreshValue();
        var e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted: function unmounted() {
        var e = u["a"](this.property);
        this.$emit("execute", e);
      },
      components: {
        FocusBox: v["a"],
        OptionsList: w
      }
    });
    i("fc86");
    var D = O()(E, [["render", M], ["__scopeId", "data-v-337bd2bd"]]);
    var R = D;
    var N = {
      "class": "increment-arrows"
    };

    function F(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("div", {
        "class": Object(a["n"])(["number-field-control", e.alignment]),
        tabindex: "0",
        onFocus: t[8] || (t[8] = function (t) {
          return e.onFocus();
        })
      }, [Object(a["D"])(Object(a["g"])("input", {
        "onUpdate:modelValue": t[0] || (t[0] = function (t) {
          return e.value = t;
        }),
        type: "text",
        ref: "field",
        placeholder: "None",
        onFocus: t[1] || (t[1] = function () {
          return e.onSelect && e.onSelect.apply(e, arguments);
        }),
        onInput: t[2] || (t[2] = function () {
          return e.onInput && e.onInput.apply(e, arguments);
        }),
        onKeyup: t[3] || (t[3] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[4] || (t[4] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        onBlur: t[5] || (t[5] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        })
      }, null, 544), [[a["z"], e.value]]), Object(a["g"])("div", N, [Object(a["g"])("div", {
        "class": "up-arrow",
        onClick: t[6] || (t[6] = function (t) {
          return e.updateProperty(1);
        })
      }, "▲"), Object(a["g"])("div", {
        "class": "down-arrow",
        onClick: t[7] || (t[7] = function (t) {
          return e.updateProperty(-1);
        })
      }, "▼")])], 34);
    }

    var L = Object(a["j"])({
      name: "NumberField",
      setup: function setup() {
        return {
          field: Object(a["t"])(null)
        };
      },
      props: {
        property: {
          type: Object,
          required: !0
        }
      },
      data: function data() {
        return {
          value: ""
        };
      },
      computed: {
        alignment: function alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
              return "align-left";

            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";

            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        }
      },
      emits: ["execute"],
      methods: {
        onFocus: function onFocus() {
          this.field.focus();
        },
        onInput: function onInput() {
          "" === this.value && this.updateProperty(0);
        },
        onSelect: function onSelect() {
          var e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onDeselect: function onDeselect() {
          this.updateProperty(0);
          var e = p["f"](this.property);
          this.$emit("execute", e);
        },
        onKeyDown: function onKeyDown(e) {
          switch (e.key) {
            case "ArrowUp":
              e.preventDefault(), this.updateProperty(1);
              break;

            case "ArrowDown":
              e.preventDefault(), this.updateProperty(-1);
              break;
          }
        },
        updateProperty: function updateProperty() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var t;
          if ("" === this.value && 0 === e) t = null;else {
            t = parseFloat(this.value), Number.isNaN(t) ? t = 0 : t += e;
            var _this$property = this.property,
                _i21 = _this$property.min,
                _a6 = _this$property.max;
            t = Object(d["b"])(t, _i21, _a6), this.property instanceof h["i"] && (t = Math.round(t));
          }

          if (this.property.value !== t) {
            var _e10 = p["m"](this.property, t);

            this.$emit("execute", _e10);
          }

          this.refreshValue();
        },
        refreshValue: function refreshValue() {
          null === this.property.value ? this.value = "" : this.value = "" + this.property.value;
        }
      },
      watch: {
        property: function property() {
          this.refreshValue();
        },
        "property.value": function propertyValue() {
          this.refreshValue();
        }
      },
      mounted: function mounted() {
        this.refreshValue();
        var e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted: function unmounted() {
        var e = u["a"](this.property);
        this.$emit("execute", e);
      }
    });
    i("995e");
    var B = O()(L, [["render", F], ["__scopeId", "data-v-7b9638de"]]);
    var H = B;

    var G = function G(e) {
      return Object(a["r"])("data-v-2ec8e16a"), e = e(), Object(a["q"])(), e;
    },
        U = {
      "class": "grid-container"
    },
        V = {
      "class": "value"
    },
        z = {
      key: 0,
      "class": "null-value"
    },
        $ = {
      key: 1,
      "class": "date-value"
    },
        Y = {
      "class": "editor"
    },
        W = G(function () {
      return Object(a["g"])("span", null, "/", -1);
    }),
        q = G(function () {
      return Object(a["g"])("span", null, "/", -1);
    }),
        K = {
      key: 1,
      "class": "space"
    },
        Z = G(function () {
      return Object(a["g"])("span", null, ":", -1);
    }),
        J = G(function () {
      return Object(a["g"])("span", null, ":", -1);
    }),
        X = G(function () {
      return Object(a["g"])("span", {
        "class": "timezone"
      }, "Z", -1);
    });

    function Q(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("div", {
        "class": Object(a["n"])(["datetime-field-control", e.alignment]),
        tabindex: "0",
        onFocus: t[24] || (t[24] = function (t) {
          return e.onFocus();
        })
      }, [Object(a["g"])("div", U, [Object(a["D"])(Object(a["g"])("div", V, [null === e.property.value ? (Object(a["p"])(), Object(a["f"])("p", z, " None ")) : (Object(a["p"])(), Object(a["f"])("p", $, [e.includeDate ? (Object(a["p"])(), Object(a["f"])(a["a"], {
        key: 0
      }, [Object(a["h"])(Object(a["y"])(e.prop_M) + " " + Object(a["y"])(e.prop_D) + ", " + Object(a["y"])(e.prop_Y), 1)], 64)) : Object(a["e"])("", !0), e.includeDate && e.includeTime ? (Object(a["p"])(), Object(a["f"])(a["a"], {
        key: 1
      }, [Object(a["h"])(" - ")], 64)) : Object(a["e"])("", !0), e.includeTime ? (Object(a["p"])(), Object(a["f"])(a["a"], {
        key: 2
      }, [Object(a["h"])(Object(a["y"])(e.prop_H) + ":" + Object(a["y"])(e.prop_m) + ":" + Object(a["y"])(e.prop_s), 1)], 64)) : Object(a["e"])("", !0)]))], 512), [[a["A"], !e.showEditor]]), Object(a["D"])(Object(a["g"])("div", Y, [e.includeDate ? (Object(a["p"])(), Object(a["f"])(a["a"], {
        key: 0
      }, [Object(a["D"])(Object(a["g"])("input", {
        type: "text",
        maxlength: "2",
        segment: "M",
        ref: "M",
        "class": "M",
        placeholder: "MM",
        onBlur: t[0] || (t[0] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        }),
        onKeyup: t[1] || (t[1] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[2] || (t[2] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        "onUpdate:modelValue": t[3] || (t[3] = function (t) {
          return e.value_M = t;
        })
      }, null, 544), [[a["z"], e.value_M]]), W, Object(a["D"])(Object(a["g"])("input", {
        type: "text",
        maxlength: "2",
        segment: "D",
        ref: "D",
        "class": "D",
        placeholder: "DD",
        onBlur: t[4] || (t[4] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        }),
        onKeyup: t[5] || (t[5] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[6] || (t[6] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        "onUpdate:modelValue": t[7] || (t[7] = function (t) {
          return e.value_D = t;
        })
      }, null, 544), [[a["z"], e.value_D]]), q, Object(a["D"])(Object(a["g"])("input", {
        type: "text",
        maxlength: "4",
        segment: "Y",
        ref: "Y",
        "class": "Y",
        placeholder: "YYYY",
        onBlur: t[8] || (t[8] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        }),
        onKeyup: t[9] || (t[9] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[10] || (t[10] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        "onUpdate:modelValue": t[11] || (t[11] = function (t) {
          return e.value_Y = t;
        })
      }, null, 544), [[a["z"], e.value_Y]])], 64)) : Object(a["e"])("", !0), e.includeDate && e.includeTime ? (Object(a["p"])(), Object(a["f"])("span", K)) : Object(a["e"])("", !0), e.includeTime ? (Object(a["p"])(), Object(a["f"])(a["a"], {
        key: 2
      }, [Object(a["D"])(Object(a["g"])("input", {
        type: "text",
        maxlength: "2",
        segment: "H",
        ref: "H",
        "class": "H",
        placeholder: "HH",
        onBlur: t[12] || (t[12] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        }),
        onKeyup: t[13] || (t[13] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[14] || (t[14] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        "onUpdate:modelValue": t[15] || (t[15] = function (t) {
          return e.value_H = t;
        })
      }, null, 544), [[a["z"], e.value_H]]), Z, Object(a["D"])(Object(a["g"])("input", {
        type: "text",
        maxlength: "2",
        segment: "m",
        ref: "m",
        "class": "m",
        placeholder: "mm",
        onBlur: t[16] || (t[16] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        }),
        onKeyup: t[17] || (t[17] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[18] || (t[18] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        "onUpdate:modelValue": t[19] || (t[19] = function (t) {
          return e.value_m = t;
        })
      }, null, 544), [[a["z"], e.value_m]]), J, Object(a["D"])(Object(a["g"])("input", {
        type: "text",
        maxlength: "2",
        segment: "s",
        ref: "s",
        "class": "s",
        placeholder: "ss",
        onBlur: t[20] || (t[20] = function () {
          return e.onDeselect && e.onDeselect.apply(e, arguments);
        }),
        onKeyup: t[21] || (t[21] = Object(a["E"])(function () {}, ["stop"])),
        onKeydown: t[22] || (t[22] = Object(a["E"])(function () {
          return e.onKeyDown && e.onKeyDown.apply(e, arguments);
        }, ["stop"])),
        "onUpdate:modelValue": t[23] || (t[23] = function (t) {
          return e.value_s = t;
        })
      }, null, 544), [[a["z"], e.value_s]]), X], 64)) : Object(a["e"])("", !0)], 512), [[a["A"], e.showEditor]])])], 34);
    }

    var ee = ["M", "D", "Y", "H", "m", "s"],
        te = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var ie = Object(a["j"])({
      name: "DateTimeField",
      setup: function setup() {
        return {
          M: Object(a["t"])(null),
          D: Object(a["t"])(null),
          Y: Object(a["t"])(null),
          H: Object(a["t"])(null),
          m: Object(a["t"])(null),
          s: Object(a["t"])(null)
        };
      },
      props: {
        property: {
          type: Object,
          required: !0
        }
      },
      data: function data() {
        return {
          value_M: "",
          value_D: "",
          value_Y: "",
          value_H: "",
          value_m: "",
          value_s: "",
          showEditor: !1
        };
      },
      computed: {
        alignment: function alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
              return "align-left";

            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";

            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        },
        prop_M: function prop_M() {
          var e = this.property.value;
          return e ? te[e.getUTCMonth()] : "?";
        },
        prop_D: function prop_D() {
          var e;
          var t = this.property.value;
          return "" + (null !== (e = null === t || void 0 === t ? void 0 : t.getUTCDate()) && void 0 !== e ? e : "?");
        },
        prop_Y: function prop_Y() {
          var e;
          var t = this.property.value;
          return "" + (null !== (e = null === t || void 0 === t ? void 0 : t.getUTCFullYear()) && void 0 !== e ? e : "?");
        },
        prop_H: function prop_H() {
          var e = this.property.value;
          return e ? ("" + e.getUTCHours()).padStart(2, "0") : "?";
        },
        prop_m: function prop_m() {
          var e = this.property.value;
          return e ? ("" + e.getUTCMinutes()).padStart(2, "0") : "?";
        },
        prop_s: function prop_s() {
          var e = this.property.value;
          return e ? ("" + e.getUTCSeconds()).padStart(2, "0") : "?";
        },
        includeTime: function includeTime() {
          switch (this.property.constructor.name) {
            case h["u"].name:
            case h["f"].name:
              return !0;

            case h["e"].name:
            default:
              return !1;
          }
        },
        includeDate: function includeDate() {
          switch (this.property.constructor.name) {
            case h["e"].name:
            case h["f"].name:
              return !0;

            case h["u"].name:
            default:
              return !1;
          }
        },
        segments: function segments() {
          var _this25 = this;

          return ee.filter(function (e) {
            return null !== _this25[e];
          });
        }
      },
      emits: ["execute"],
      methods: {
        onFocus: function onFocus() {
          this.enterEditMode();
          var e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onDeselect: function onDeselect(e) {
          this.$el.contains(e.relatedTarget) || this.exitEditMode();
          var t = p["f"](this.property);
          this.$emit("execute", t);
        },
        onKeyDown: function onKeyDown(e) {
          var t = e.target;
          if (t.selectionStart === t.selectionEnd) switch (e.key) {
            case "Backspace":
              0 === t.selectionEnd && this.shiftFocus(-1, !1);
              break;

            case "ArrowLeft":
              0 === t.selectionEnd && (this.shiftFocus(-1, !1), e.preventDefault());
              break;

            case "ArrowRight":
              t.selectionEnd === t.maxLength && (this.shiftFocus(1, !0), e.preventDefault());
              break;

            case "Tab":
              break;

            default:
              t.selectionEnd === t.maxLength && this.shiftFocus(1, !0);
          }
        },
        enterEditMode: function enterEditMode() {
          var _this26 = this;

          this.showEditor = !0, this.$nextTick(function () {
            var e;
            var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
              for (var _iterator24 = _this26.segments[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                var _t14 = _step24.value;
                if (e = _this26[_t14], !e.value) break;
              }
            } catch (err) {
              _didIteratorError24 = true;
              _iteratorError24 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                  _iterator24["return"]();
                }
              } finally {
                if (_didIteratorError24) {
                  throw _iteratorError24;
                }
              }
            }

            e.focus(), e.selectionEnd = e.value.length;
          });
        },
        exitEditMode: function exitEditMode() {
          this.updateProperty(), this.showEditor = !1;
        },
        shiftFocus: function shiftFocus(e) {
          var _this27 = this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var i = document.activeElement,
              a = this.segments.indexOf(i.getAttribute("segment")) + e;
          0 <= a && a < this.segments.length && this.$nextTick(function () {
            var e = _this27[_this27.segments[a]];
            e.focus(), e.selectionEnd = t ? 0 : e.value.length;
          });
        },
        updateProperty: function updateProperty() {
          var e;
          var t = "".concat(this.value_Y.padStart(4, "0"), "-").concat(this.value_M.padStart(2, "0"), "-").concat(this.value_D.padStart(2, "0")),
              i = "".concat(this.value_H.padStart(2, "0"), ":").concat(this.value_m.padStart(2, "0"), ":").concat(this.value_s.padStart(2, "0"), ".000Z");
          this.property instanceof h["e"] ? i = "00:00:00.000Z" : this.property instanceof h["u"] && (t = "00:00:00.000Z" === i ? "0000-00-00" : "1970-01-01");
          var a,
              n = "".concat(t, "T").concat(i),
              o = new Date(n);

          if (a = "0000-00-00T00:00:00.000Z" === n || Number.isNaN(o.getTime()) ? null : o, (null === (e = this.property.value) || void 0 === e ? void 0 : e.getTime()) !== (null === a || void 0 === a ? void 0 : a.getTime())) {
            var _e11 = p["k"](this.property, a);

            this.$emit("execute", _e11);
          }

          this.refreshValue();
        },
        refreshValue: function refreshValue() {
          var e, t;

          var i = null !== (t = null === (e = this.property.value) || void 0 === e ? void 0 : e.toISOString()) && void 0 !== t ? t : "--T::",
              _i$split = i.split(/[-T:\.]/),
              _i$split2 = _slicedToArray(_i$split, 6),
              a = _i$split2[0],
              n = _i$split2[1],
              o = _i$split2[2],
              s = _i$split2[3],
              r = _i$split2[4],
              l = _i$split2[5];

          this.value_Y = a, this.value_M = n, this.value_D = o, this.value_H = s, this.value_m = r, this.value_s = l;
        }
      },
      watch: {
        property: function property() {
          this.refreshValue();
        },
        "property.value": function propertyValue() {
          this.refreshValue();
        }
      },
      mounted: function mounted() {
        this.refreshValue();
        var e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted: function unmounted() {
        var e = u["a"](this.property);
        this.$emit("execute", e);
      }
    });
    i("5475");
    var ae = O()(ie, [["render", Q], ["__scopeId", "data-v-2ec8e16a"]]);
    var ne = ae;
    var oe = ["colspan", "onClick"],
        se = {
      "class": "text"
    },
        re = {
      "class": "arrow"
    },
        le = ["colspan"];

    function ce(e, t, i, n, o, s) {
      var r = Object(a["w"])("TabularField");
      return Object(a["p"])(), Object(a["d"])(r, {
        "class": "basic-table-field-control",
        property: e.property,
        onExecute: t[1] || (t[1] = function (t) {
          return e.$emit("execute", t);
        })
      }, {
        "table-header": Object(a["C"])(function (_ref12) {
          var t = _ref12.columns;
          return [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(t, function (t) {
            return Object(a["p"])(), Object(a["f"])("th", {
              key: t.id,
              "class": "head-cell data-column",
              colspan: e.getColspan(t),
              onClick: function onClick(i) {
                return e.onSort(t);
              }
            }, [Object(a["g"])("span", se, [Object(a["g"])("span", re, Object(a["y"])(e.getSortArrow(t)), 1), Object(a["g"])("span", null, Object(a["y"])(t.name), 1)])], 8, oe);
          }), 128))];
        }),
        "table-row": Object(a["C"])(function (_ref13) {
          var i = _ref13.row;
          return [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(i, function (i) {
            return Object(a["p"])(), Object(a["f"])("td", {
              key: i.id,
              "class": "data-column",
              colspan: e.getColspan(i)
            }, [(Object(a["p"])(), Object(a["d"])(Object(a["x"])(e.getField(i)), {
              "class": "data-field",
              property: i,
              onExecute: t[0] || (t[0] = function (t) {
                return e.$emit("execute", t);
              })
            }, null, 40, ["property"]))], 8, le);
          }), 128))];
        }),
        _: 1
      }, 8, ["property"]);
    }

    var ue = i("174a");

    var pe = function pe(e) {
      return Object(a["r"])("data-v-11cc5b88"), e = e(), Object(a["q"])(), e;
    },
        de = {
      "class": "tabular-field-control"
    },
        he = {
      "class": "head-row"
    },
        ve = {
      "class": "head-cell move-column"
    },
        Te = {
      "class": "icon"
    },
        me = pe(function () {
      return Object(a["g"])("th", {
        "class": "head-cell"
      }, "[Table-Header]", -1);
    }),
        ge = {
      "class": "head-cell duplicate-column"
    },
        xe = {
      "class": "icon"
    },
        be = {
      "class": "head-cell delete-column"
    },
        fe = {
      "class": "icon"
    },
        ye = {
      ref: "table"
    },
        Oe = ["onPointerdown"],
        Se = {
      "class": "icon"
    },
        we = pe(function () {
      return Object(a["g"])("td", {
        "class": "data-column"
      }, "[Table-Row]", -1);
    }),
        je = ["onClick"],
        Ae = {
      "class": "icon"
    },
        _e = ["onClick"],
        Ce = pe(function () {
      return Object(a["g"])("span", {
        "class": "icon"
      }, "✗", -1);
    }),
        Ie = [Ce],
        Pe = {
      "class": "actions"
    },
        ke = {
      "class": "builtin"
    },
        Me = pe(function () {
      return Object(a["g"])("span", null, null, -1);
    }),
        Ee = {
      "class": "registered"
    },
        De = ["onClick"];

    function Re(e, t, i, n, o, s) {
      var r = Object(a["w"])("MoveArrow"),
          l = Object(a["w"])("Duplicate"),
          c = Object(a["w"])("Trash"),
          u = Object(a["w"])("MoveDots");
      return Object(a["p"])(), Object(a["f"])("div", de, [Object(a["g"])("table", null, [Object(a["g"])("thead", he, [Object(a["g"])("th", ve, [Object(a["g"])("span", Te, [Object(a["i"])(r)])]), Object(a["v"])(e.$slots, "table-header", {
        columns: e.columns
      }, function () {
        return [me];
      }, !0), Object(a["g"])("th", ge, [Object(a["g"])("span", xe, [Object(a["i"])(l)])]), Object(a["g"])("th", be, [Object(a["g"])("span", fe, [Object(a["i"])(c)])])]), Object(a["g"])("tbody", ye, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.property.value, function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
            t = _ref15[0],
            i = _ref15[1];

        return Object(a["p"])(), Object(a["f"])("tr", {
          "class": "body-row",
          key: t
        }, [Object(a["g"])("td", {
          "class": "move-column",
          onPointerdown: function onPointerdown(i) {
            return e.onStartDrag(t, i);
          }
        }, [Object(a["g"])("span", Se, [Object(a["i"])(u)])], 40, Oe), Object(a["v"])(e.$slots, "table-row", {
          key: t,
          row: i
        }, function () {
          return [we];
        }, !0), Object(a["g"])("td", {
          "class": "duplicate-column",
          onClick: function onClick(i) {
            return e.onDuplicate(t);
          }
        }, [Object(a["g"])("span", Ae, [Object(a["i"])(l)])], 8, je), Object(a["g"])("td", {
          "class": "delete-column",
          onClick: function onClick(i) {
            return e.onDelete(t);
          }
        }, Ie, 8, _e)]);
      }), 128))], 512)]), Object(a["g"])("div", Pe, [Object(a["g"])("div", ke, [Object(a["g"])("button", {
        onClick: t[0] || (t[0] = function () {
          return e.onCreate && e.onCreate.apply(e, arguments);
        })
      }, "+ Add")]), null !== e.property.actions && 0 !== e.property.actions.size ? (Object(a["p"])(), Object(a["f"])(a["a"], {
        key: 0
      }, [Me, Object(a["g"])("div", Ee, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.property.actions, function (_ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
            t = _ref17[0],
            i = _ref17[1];

        return Object(a["p"])(), Object(a["f"])("button", {
          key: t,
          onClick: function onClick(i) {
            return e.onAction(t);
          }
        }, Object(a["y"])(i.text), 9, De);
      }), 128))])], 64)) : Object(a["e"])("", !0)])]);
    }

    var Ne = i("ce8b");
    var Fe = ["fill"],
        Le = Object(a["g"])("path", {
      d: "m1.0583 0v0.26458h0.79375v-0.26458zm-1.0583 0.52917v0.52917h2.9104v-0.52917zm0.26458 0.79375v2.6458h2.3812v-2.6458zm0.52917 0.52917h0.26458v1.5875h-0.26458zm0.52917 0h0.26458v1.5875h-0.26458zm0.52917 0h0.26458v1.5875h-0.26458z"
    }, null, -1),
        Be = [Le];

    function He(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("svg", {
        width: "11",
        height: "15",
        version: "1.1",
        viewBox: "0 0 2.9104 3.9688",
        xmlns: "http://www.w3.org/2000/svg",
        fill: e.color
      }, Be, 8, Fe);
    }

    var Ge = Object(a["j"])({
      name: "Trash",
      props: {
        color: {
          type: String,
          "default": "#808080"
        }
      }
    });
    var Ue = O()(Ge, [["render", He]]);
    var Ve = Ue;
    var ze = ["fill"],
        $e = Object(a["g"])("path", {
      d: "m0 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm-2.3812 1.0583v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917z",
      "stroke-width": ".26458"
    }, null, -1),
        Ye = [$e];

    function We(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("svg", {
        width: "11",
        height: "6",
        version: "1.1",
        viewBox: "0 0 2.9104 1.5875",
        xmlns: "http://www.w3.org/2000/svg",
        fill: e.color
      }, Ye, 8, ze);
    }

    var qe = Object(a["j"])({
      name: "MoveDots",
      props: {
        color: {
          type: String,
          "default": "#808080"
        }
      }
    });
    var Ke = O()(qe, [["render", We]]);
    var Ze = Ke;
    var Je = ["fill"],
        Xe = Object(a["g"])("path", {
      transform: "matrix(.30441 0 0 .19528 -4.0986 -9.6401)",
      d: "m17.375 49.366-3.9113 6.7745h2.6075v6.7745h-2.6075l3.9113 6.7745 3.9113-6.7745h-2.6075v-6.7745h2.6075z",
      "stroke-width": "1.0852"
    }, null, -1),
        Qe = [Xe];

    function et(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("svg", {
        width: "9",
        height: "15",
        version: "1.1",
        viewBox: "0 0 2.3812 3.9688",
        xmlns: "http://www.w3.org/2000/svg",
        fill: e.color
      }, Qe, 8, Je);
    }

    var tt = Object(a["j"])({
      name: "MoveArrow",
      props: {
        color: {
          type: String,
          "default": "#808080"
        }
      }
    });
    var it = O()(tt, [["render", et]]);
    var at = it;
    var nt = ["fill"],
        ot = Object(a["g"])("path", {
      d: "m0 0v2.6458h0.52917v-2.1167h2.1167v-0.52917h-2.1167zm0.79272 0.79272v2.6469h2.6469v-2.6469zm0.52968 0.52968h1.5875v1.5875h-1.5875z"
    }, null, -1),
        st = [ot];

    function rt(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("svg", {
        width: "13",
        height: "13",
        version: "1.1",
        viewBox: "0 0 3.4396 3.4396",
        xmlns: "http://www.w3.org/2000/svg",
        fill: e.color
      }, st, 8, nt);
    }

    var lt = Object(a["j"])({
      name: "Duplicate",
      props: {
        color: {
          type: String,
          "default": "#808080"
        }
      }
    });
    var ct = O()(lt, [["render", rt]]);
    var ut = ct,
        pt = Object(a["j"])({
      name: "TabularField",
      setup: function setup() {
        return {
          table: Object(a["t"])(null)
        };
      },
      props: {
        property: {
          type: Object,
          required: !0
        }
      },
      data: function data() {
        return {
          pointer: Object(a["m"])(new Ne["a"]()),
          onResizeObserver: null
        };
      },
      computed: {
        columns: function columns() {
          return this.property.columnState;
        }
      },
      emits: ["execute"],
      methods: {
        onCreate: function onCreate() {
          var e = p["d"](this.property);
          this.$emit("execute", e);
        },
        onDuplicate: function onDuplicate(e) {
          var t = p["g"](this.property, e);
          this.$emit("execute", t);
        },
        onDelete: function onDelete(e) {
          var t = p["e"](this.property, e);
          this.$emit("execute", t);
        },
        onAction: function onAction(e) {
          var t = u["c"](this.property, e);
          this.$emit("execute", t);
        },
        onStartDrag: function onStartDrag(e, t) {
          var _this28 = this;

          var i = t.target.closest("tr");
          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = this.table.children[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _l5 = _step25.value;
              _l5 === i ? _l5.classList.add("grabbed") : _l5.classList.add("not-grabbed");
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                _iterator25["return"]();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }

          var a = [];
          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = this.table.children[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var _l6 = _step26.value;

              var _e12 = _l6.getBoundingClientRect();

              a.push({
                el: _l6,
                minY: _e12.y,
                maxY: _e12.y + _e12.height
              });
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
                _iterator26["return"]();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }

          var n = _toConsumableArray(this.table.children).indexOf(i),
              o = a.at(0).minY - a[n].minY,
              s = a.at(-1).maxY - a[n].maxY,
              r = {
            id: e,
            src: n,
            dst: n,
            min: o,
            max: s,
            rows: a
          };

          this.pointer.capture(t, function (e, t) {
            _this28.onDrag(t, r);
          }, function (e, t) {
            _this28.onStopDrag(r);
          });
        },
        onDrag: function onDrag(e, t) {
          var i = t.src,
              a = t.min,
              n = t.max,
              o = t.rows,
              s = o[i].el,
              r = Object(d["b"])(e.deltaY, a, n);
          s.style.transform = "translate(0px, ".concat(r, "px)");
          var l = s.getBoundingClientRect(),
              c = l.y,
              u = c + l.height,
              p = u - c + 8;
          t.dst = t.src;

          for (var _d2 = 0, _h = !1; _d2 < i; _d2++) {
            var _e13 = o[_d2];
            !_h && c <= _e13.maxY && u >= _e13.minY && (t.dst = _d2, _h = !0);

            var _i22 = _h ? "translate(0px, ".concat(p, "px)") : "";

            _e13.el.style.transform = _i22;
          }

          for (var _d3 = o.length - 1, _h2 = !1; _d3 > i; _d3--) {
            var _e14 = o[_d3];
            !_h2 && c <= _e14.maxY && u >= _e14.minY && (t.dst = _d3, _h2 = !0);

            var _i23 = _h2 ? "translate(0px, -".concat(p, "px)") : "";

            _e14.el.style.transform = _i23;
          }
        },
        onStopDrag: function onStopDrag(e) {
          var t = e.id,
              i = e.src,
              a = e.dst,
              n = e.rows;
          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = n[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _s3 = _step27.value;
              _s3.el.classList.remove("grabbed", "not-grabbed"), _s3.el.style.transform = "";
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
                _iterator27["return"]();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }

          if (i === a) return;
          var o = p["h"](this.property, t, a);
          this.$emit("execute", o);
        }
      },
      mounted: function mounted() {
        var e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted: function unmounted() {
        var e = u["a"](this.property);
        this.$emit("execute", e);
      },
      components: {
        Trash: Ve,
        MoveDots: Ze,
        MoveArrow: at,
        Duplicate: ut
      }
    });
    i("9a27");
    var dt = O()(pt, [["render", Re], ["__scopeId", "data-v-11cc5b88"]]);
    var ht = dt,
        vt = Object(a["j"])({
      name: "BasicTableField",
      props: {
        property: {
          type: Object,
          required: !0
        }
      },
      emits: ["execute"],
      methods: {
        getColspan: function getColspan(e) {
          return Array.isArray(e.col) ? e.col[1] + 1 - e.col[0] : 1;
        },
        getSortArrow: function getSortArrow(e) {
          switch (e.sort) {
            case ue["m"].Descending:
            case ue["m"].None:
              return "▼";

            case ue["m"].Ascending:
              return "▲";

            default:
              return "?";
          }
        },
        getField: function getField(e) {
          switch (e.constructor.name) {
            case ue["n"].name:
              return "TextField";

            case ue["h"].name:
            case ue["i"].name:
              return "NumberField";

            case ue["e"].name:
            case ue["r"].name:
            case ue["f"].name:
              return "DateTimeField";

            case ue["g"].name:
              return "EnumField";
          }
        },
        onSort: function onSort(e) {
          var t;

          switch (e.sort) {
            case ue["m"].Descending:
              t = ue["m"].Ascending;
              break;

            case ue["m"].Ascending:
            case ue["m"].None:
            default:
              t = ue["m"].Descending;
              break;
          }

          var i = p["i"](this.property, e.id, t);
          this.$emit("execute", i);
        }
      },
      components: {
        TabularField: ht,
        TextField: _,
        EnumField: R,
        NumberField: H,
        DateTimeField: ne
      }
    });
    i("39d4");
    var Tt = O()(vt, [["render", ce], ["__scopeId", "data-v-f7ac7554"]]);
    var mt = Tt;

    var gt = function gt(e) {
      return Object(a["r"])("data-v-cd76efc0"), e = e(), Object(a["q"])(), e;
    },
        xt = {
      "class": "head-cell data-column"
    },
        bt = {
      "class": "text"
    },
        ft = ["onClick"],
        yt = gt(function () {
      return Object(a["g"])("p", {
        "class": "arrow"
      }, null, -1);
    }),
        Ot = {
      "class": "text"
    };

    function St(e, t, i, n, o, s) {
      var r = Object(a["w"])("FieldGrid"),
          l = Object(a["w"])("TabularField");
      return Object(a["p"])(), Object(a["d"])(l, {
        "class": "complex-table-field-control",
        property: e.property,
        onExecute: t[1] || (t[1] = function (t) {
          return e.$emit("execute", t);
        })
      }, {
        "table-header": Object(a["C"])(function () {
          return [Object(a["g"])("th", xt, [Object(a["g"])("span", bt, [Object(a["g"])("span", null, Object(a["y"])(e.property.name), 1)])])];
        }),
        "table-row": Object(a["C"])(function (_ref18) {
          var i = _ref18.key,
              n = _ref18.row;
          return [Object(a["g"])("td", {
            "class": Object(a["n"])(["data-column", {
              collapsed: e.property.collapsed.get(i)
            }])
          }, [Object(a["g"])("div", {
            "class": "data-region-header",
            onClick: function onClick(t) {
              return e.onCollapse(i);
            }
          }, [yt, Object(a["g"])("p", Ot, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.summarize(e.property.layout.summary, n), function (e, t) {
            return Object(a["p"])(), Object(a["f"])("span", {
              key: t,
              "class": Object(a["n"])(e.format)
            }, Object(a["y"])(e.text), 3);
          }), 128))])], 8, ft), e.property.collapsed.get(i) ? Object(a["e"])("", !0) : (Object(a["p"])(), Object(a["d"])(r, {
            key: 0,
            "class": "data-region-body",
            rows: e.property.layout.rows,
            cols: e.property.layout.cols,
            properties: n,
            onExecute: t[0] || (t[0] = function (t) {
              return e.$emit("execute", t);
            })
          }, null, 8, ["rows", "cols", "properties"]))], 2)];
        }),
        _: 1
      }, 8, ["property"]);
    }

    var wt = Object(a["j"])({
      name: "ComplexTableField",
      props: {
        property: {
          type: Object,
          required: !0
        }
      },
      emits: ["execute"],
      methods: {
        summarize: function summarize(e, t) {
          return h["r"].parse(e, t);
        },
        onCollapse: function onCollapse(e) {
          var t = !this.property.collapsed.get(e),
              i = p["c"](this.property, e, t);
          this.$emit("execute", i);
        }
      },
      beforeCreate: function beforeCreate() {
        this.$options.components.FieldGrid = i("5800")["default"];
      },
      components: {
        TabularField: ht
      }
    });
    i("3cef");
    var jt = O()(wt, [["render", St], ["__scopeId", "data-v-cd76efc0"]]);

    var At = jt,
        _t = Object(a["j"])({
      name: "FieldGrid",
      props: {
        rows: {
          type: Number,
          required: !0
        },
        cols: {
          type: Number,
          required: !0
        },
        properties: {
          type: Array,
          required: !0
        }
      },
      computed: {
        grid: function grid() {
          return {
            gridTemplateRows: new Array(this.rows).fill("22px auto").join(" 18px "),
            gridTemplateColumns: "repeat(".concat(this.cols, ", minmax(0, 1fr))")
          };
        }
      },
      emits: ["execute"],
      methods: {
        propTitleGridStyle: function propTitleGridStyle(e) {
          var t = e.row,
              i = e.col,
              a = Array.isArray(t) ? {
            gridRowStart: 3 * t[0] - 2
          } : {
            gridRowStart: 3 * t - 2
          },
              n = Array.isArray(i) ? {
            gridColumnStart: i[0],
            gridColumnEnd: i[1] + 1
          } : {
            gridColumnStart: i
          };
          return Object.assign(Object.assign({}, a), n);
        },
        propFieldGridStyle: function propFieldGridStyle(e) {
          var t = e.row,
              i = e.col,
              a = Array.isArray(t) ? {
            gridRowStart: 3 * t[0] - 1,
            gridRowEnd: 3 * t[1]
          } : {
            gridRowStart: 3 * t - 1
          },
              n = Array.isArray(i) ? {
            gridColumnStart: i[0],
            gridColumnEnd: i[1] + 1
          } : {
            gridColumnStart: i
          };
          return Object.assign(Object.assign({}, a), n);
        },
        getField: function getField(e) {
          switch (e.constructor.name) {
            case h["q"].name:
              return "TextField";

            case h["h"].name:
            case h["i"].name:
              return "NumberField";

            case h["e"].name:
            case h["u"].name:
            case h["f"].name:
              return "DateTimeField";

            case h["g"].name:
              return "EnumField";

            case h["c"].name:
              return "BasicTableField";

            case h["d"].name:
              return "ComplexTableField";
          }
        }
      },
      components: {
        TextField: _,
        EnumField: R,
        NumberField: H,
        DateTimeField: ne,
        BasicTableField: mt,
        ComplexTableField: At
      }
    });

    i("fbc8");
    var Ct = O()(_t, [["render", s], ["__scopeId", "data-v-46004f45"]]);
    t["default"] = Ct;
  },
  "5aff": function aff(e, t, i) {},
  "5b62": function b62(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAKCAYAAACwoK7bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0xOFQxNTowMzowNi0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDYtMTBUMTY6MTY6MzQtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDYtMTBUMTY6MTY6MzQtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFlM2Y5MWFiLTc0Y2ItMGY0MS04YjFmLTBlZDFlMWI3MmMyNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmMxZDA5ODUyLTQ2NjctNzA0YS05ZDcxLTljMGNmZWJjNmFjNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc2ZDc3MWYxLTc1ODAtNGY0Yi04MmNmLTIyNDA2ZjgyNmU2OCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzZkNzcxZjEtNzU4MC00ZjRiLTgyY2YtMjI0MDZmODI2ZTY4IiBzdEV2dDp3aGVuPSIyMDIzLTAxLTE4VDE1OjAzOjA2LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuNSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZjQ5MGQ2LThkMmYtZGY0Yy1hZTM1LTA0MTc1YzU3OGJkZiIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0xMFQxNjowMjowMi0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjUgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZTNmOTFhYi03NGNiLTBmNDEtOGIxZi0wZWQxZTFiNzJjMjciIHN0RXZ0OndoZW49IjIwMjMtMDYtMTBUMTY6MTY6MzQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DYt1sAAAALElEQVQokWPM95n3nwECGKE0sXy8gIkYReQAFjL0MBJWMshcPBrGpIGhF8YAt+EHdB8FpVIAAAAASUVORK5CYII=";
  },
  "5d84": function d84(e, t, i) {
    "use strict";

    i("0f97");
  },
  6325: function _(e, t, i) {},
  "647e": function e(_e15, t, i) {},
  "655e": function e(_e16, t, i) {
    "use strict";

    i("cea5");
  },
  "6f01": function f01(e, t, i) {
    "use strict";

    var a = i("7a23");
    var n = {
      "class": "scrollbox-container"
    };

    function o(e, t, i, o, s, r) {
      return Object(a["p"])(), Object(a["f"])("div", n, [Object(a["g"])("div", {
        ref: "content",
        "class": "scroll-content",
        onWheelPassive: t[0] || (t[0] = function () {
          return e.onScrollWheel && e.onScrollWheel.apply(e, arguments);
        }),
        onScroll: t[1] || (t[1] = function () {
          return e.onScrollContent && e.onScrollContent.apply(e, arguments);
        })
      }, [Object(a["v"])(e.$slots, "default", {}, void 0, !0)], 544), Object(a["D"])(Object(a["g"])("div", {
        "class": "scroll-bar",
        style: Object(a["o"])(e.scroll.sty),
        onWheelPassive: t[4] || (t[4] = function () {
          return e.onScrollWheel && e.onScrollWheel.apply(e, arguments);
        })
      }, [Object(a["D"])(Object(a["g"])("div", {
        "class": "scroll-handle",
        style: Object(a["o"])(e.handle.sty),
        onPointerdown: t[2] || (t[2] = function () {
          return e.startDrag && e.startDrag.apply(e, arguments);
        }),
        onPointerup: t[3] || (t[3] = function () {
          return e.stopDrag && e.stopDrag.apply(e, arguments);
        })
      }, null, 36), [[a["A"], e.showScrollbar]])], 36), [[a["A"], e.alwaysShowScrollBar || e.showScrollbar]])]);
    }

    var s = i("f139"),
        r = i("ce8b"),
        l = Object(a["j"])({
      name: "ScrollBox",
      setup: function setup() {
        return {
          content: Object(a["t"])(null)
        };
      },
      props: {
        resetScrollOnChange: {
          type: Boolean,
          "default": !1
        },
        alwaysShowScrollBar: {
          type: Boolean,
          "default": !1
        },
        propagateScroll: {
          type: Boolean,
          "default": !0
        },
        handleColor: {
          type: String,
          "default": "#d9d9d9"
        },
        scrollColor: {
          type: String,
          "default": "#ffffff"
        },
        borderColor: {
          type: String,
          "default": "#bfbfbf"
        },
        width: {
          type: Number,
          "default": 17
        },
        top: {
          type: Number,
          "default": 0
        }
      },
      data: function data() {
        return {
          scrollTop: 0,
          windowMax: 0,
          scroll: {
            sty: {
              width: this.width + "px",
              background: this.scrollColor
            }
          },
          handle: {
            trk: Object(a["m"])(new r["a"]()),
            hei: 0,
            max: 0,
            pos: 0,
            sty: {
              height: "0px",
              transform: "translateY(0px)",
              background: this.handleColor,
              borderColor: this.borderColor
            }
          },
          showScrollbar: !1,
          onResizeObserver: null,
          onMutateObserver: null
        };
      },
      emits: ["scroll"],
      methods: {
        onScrollWheel: function onScrollWheel(e) {
          this.moveScrollPosition(this.scrollTop + e.deltaY, e);
        },
        startDrag: function startDrag(e) {
          this.handle.trk.capture(e, this.onDrag);
        },
        onDrag: function onDrag(e, t) {
          this.moveScrollPosition(this.handleTopToTop(this.handle.pos + t.movementY));
        },
        onScrollContent: function onScrollContent() {
          this.content && (this.content.scrollTop != this.scrollTop && (this.scrollTop = this.content.scrollTop, this.handle.pos = this.topToHandleTop(this.scrollTop), this.handle.sty.transform = "translateY(".concat(this.handle.pos, "px)")), this.$emit("scroll", this.scrollTop));
        },
        recalculateScrollState: function recalculateScrollState() {
          var _this29 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var t = this.showScrollbar,
              i = this.content;
          if (!i || 0 === i.clientHeight) return void (this.showScrollbar = !1);
          var a = i.clientHeight / i.scrollHeight;
          this.handle.hei = Math.max(15, Math.round((i.clientHeight - 4) * a)), this.handle.max = i.clientHeight - this.handle.hei - 4, this.windowMax = i.scrollHeight - i.clientHeight, this.showScrollbar = 1 !== a, this.handle.sty.height = this.handle.hei + "px", this.moveScrollPosition(e ? 0 : i.scrollTop), !t && this.showScrollbar && setTimeout(function () {
            return _this29.recalculateScrollState(e);
          }, 0);
        },
        moveScrollPosition: function moveScrollPosition(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (!this.content) return;
          var i = this.scrollTop;
          this.scrollTop = Object(s["b"])(Math.round(e), 0, this.windowMax), this.handle.pos = this.topToHandleTop(this.scrollTop), this.handle.sty.transform = "translateY(".concat(this.handle.pos, "px)"), this.content.scrollTop = this.scrollTop;
          var a = 0 < this.scrollTop && this.scrollTop < this.windowMax,
              n = i - this.scrollTop !== 0;
          (!this.propagateScroll || n || a) && (null === t || void 0 === t || t.stopPropagation());
        },
        topToHandleTop: function topToHandleTop(e) {
          return e / this.windowMax * this.handle.max;
        },
        handleTopToTop: function handleTopToTop(e) {
          return e / this.handle.max * this.windowMax;
        }
      },
      watch: {
        top: function top() {
          this.moveScrollPosition(this.top);
        }
      },
      mounted: function mounted() {
        var _this30 = this;

        var e = {
          childList: !0,
          characterData: !0,
          subtree: !0
        };
        this.onMutateObserver = new MutationObserver(function () {
          return _this30.recalculateScrollState(_this30.resetScrollOnChange);
        }), this.onResizeObserver = new ResizeObserver(function () {
          return _this30.recalculateScrollState(!1);
        }), this.onResizeObserver.observe(this.$el), this.onMutateObserver.observe(this.content, e), this.recalculateScrollState(!1), this.moveScrollPosition(this.top);
      },
      unmounted: function unmounted() {
        this.onResizeObserver.disconnect(), this.onMutateObserver.disconnect();
      }
    }),
        c = (i("c049"), i("6b0d")),
        u = i.n(c);
    var p = u()(l, [["render", o], ["__scopeId", "data-v-77cb89ca"]]);
    t["a"] = p;
  },
  7028: function _(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });

    var a = function a(e) {
      _classCallCheck(this, a);

      this.page = e;
    };

    a.NullPage = "$__null_page";
  },
  "73a2": function a2(e, t, i) {
    "use strict";

    var _global, _global2, _global3, _global4;

    i.r(t);
    var a = i("2137");
    var n = {
      id: "cve_number",
      name: "CVE Number",
      type: a["c"].String
    },
        o = {
      id: "attribution",
      name: "Attribution",
      type: a["c"].String
    },
        s = {
      id: "cve_cvss_score",
      name: "CVSS Score",
      type: a["c"].Float,
      min: 0,
      max: 10
    },
        r = {
      id: "date_reported",
      name: "Date Reported",
      type: a["c"].Date
    },
        l = {
      id: "cve_remediation",
      name: "Other Remediation",
      type: a["c"].String
    },
        c = {
      id: "cve_patch_applied",
      name: "Patch Applied",
      type: a["c"].Enum,
      options: [{
        value: "Yes",
        text: "Yes"
      }, {
        value: "No",
        text: "No"
      }, {
        value: "UNK",
        text: "Unknown"
      }, {
        value: "NA",
        text: "Not Applicable"
      }]
    },
        u = {
      id: "cve_patch_available",
      name: "Patch Available",
      type: a["c"].Enum,
      options: [{
        value: "Yes",
        text: "Yes"
      }, {
        value: "No",
        text: "No"
      }]
    },
        p = {
      id: "cves",
      name: "asdsa",
      path: "*.iocs.cves",
      type: a["c"].String,
      layout: {
        summary: "{{ attribution }}\n**{{ cve_number }}**",
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, n), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, u), {
        row: 2,
        col: 1
      }), Object.assign(Object.assign({}, s), {
        row: 2,
        col: 2
      }), Object.assign(Object.assign({}, c), {
        row: 3,
        col: 1
      }), Object.assign(Object.assign({}, r), {
        row: 4,
        col: 1
      }), Object.assign(Object.assign({}, l), {
        row: [3, 4],
        col: 2
      })]
    },
        d = {
      id: "last_reported",
      name: "Last Reported",
      type: a["c"].DateTime
    },
        h = {
      id: "first_reported",
      name: "First Reported",
      type: a["c"].DateTime
    },
        v = {
      id: "ioc_malware_hash",
      name: "File Hash",
      type: a["c"].String
    },
        T = {
      id: "ioc_malware_name",
      name: "Malicious Tool Name",
      type: a["c"].String
    },
        m = {
      id: "ioc_malware_sandbox",
      name: "Malware Analysis Report",
      type: a["c"].String
    },
        g = {
      id: "ioc_malware_hash_type",
      name: "Hash Type",
      type: a["c"].Enum,
      options: [{
        value: "MD5",
        text: "MD5"
      }, {
        value: "SHA1",
        text: "SHA1"
      }, {
        value: "SHA256",
        text: "SHA256"
      }]
    },
        x = {
      id: "ioc_associated_file_hash",
      name: "Associated File Hash",
      type: a["c"].String
    },
        b = {
      id: "ioc_malware_description",
      name: "Brief Description",
      type: a["c"].String
    },
        f = {
      id: "ioc_malware",
      name: "sdasds",
      path: "*.iocs.malware",
      type: a["c"].String,
      layout: {
        summary: "{{ attribution }}\n**{{ ioc_malware_name }}**",
        rows: 6,
        cols: 10
      },
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: [1, 5]
      }), Object.assign(Object.assign({}, T), {
        row: 1,
        col: [6, 10]
      }), Object.assign(Object.assign({}, m), {
        row: 2,
        col: [1, 8]
      }), Object.assign(Object.assign({}, g), {
        row: 2,
        col: [9, 10]
      }), Object.assign(Object.assign({}, v), {
        row: 3,
        col: [1, 10]
      }), Object.assign(Object.assign({}, x), {
        row: 4,
        col: [1, 10]
      }), Object.assign(Object.assign({}, b), {
        row: 5,
        col: [1, 10]
      }), Object.assign(Object.assign({}, h), {
        row: 6,
        col: [1, 5]
      }), Object.assign(Object.assign({}, d), {
        row: 6,
        col: [6, 10]
      })]
    },
        y = {
      id: "artifact",
      name: "Artifact",
      type: a["c"].String
    },
        O = {
      id: "network_intrusion_phase",
      name: "Intrusion Phase",
      type: a["c"].Enum,
      options: [{
        value: "TA0001",
        text: "Initial Access"
      }, {
        value: "TA0011",
        text: "Command and Control"
      }, {
        value: "TA0010",
        text: "Exfiltration"
      }]
    },
        S = {
      id: "details",
      name: "Details",
      type: a["c"].String
    },
        w = {
      id: "ioc_network",
      name: "EMPTY",
      path: "*.iocs.network",
      type: a["c"].String,
      layout: {
        summary: "{{ attribution }}\n**{{ artifact }}**",
        cols: 2,
        rows: 4
      },
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, O), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, y), {
        name: "Network Artifact",
        row: 2,
        col: [1, 2]
      }), Object.assign(Object.assign({}, S), {
        row: 3,
        col: [1, 2]
      }), Object.assign(Object.assign({}, h), {
        row: 4,
        col: 1
      }), Object.assign(Object.assign({}, d), {
        row: 4,
        col: 2
      })]
    },
        j = {
      id: "tactic",
      name: "Tactic",
      type: a["c"].Enum,
      options: [{
        value: "TA0001",
        text: "TA0001 - Initial Access"
      }, {
        value: "TA0002",
        text: "TA0002 - Execution"
      }, {
        value: "TA0003",
        text: "TA0003 - Persistence"
      }, {
        value: "TA0004",
        text: "TA0004 - Privilege Escalation"
      }, {
        value: "TA0005",
        text: "TA0005 - Defense Evasion"
      }, {
        value: "TA0006",
        text: "TA0006 - Credential Access"
      }, {
        value: "TA0007",
        text: "TA0007 - Discovery"
      }, {
        value: "TA0008",
        text: "TA0008 - Lateral Movement"
      }, {
        value: "TA0009",
        text: "TA0009 - Collection"
      }, {
        value: "TA0010",
        text: "TA0010 - Exfiltration"
      }, {
        value: "TA0011",
        text: "TA0011 - Command and Control"
      }, {
        value: "TA0040",
        text: "TA0040 - Impact"
      }, {
        value: "TA0042",
        text: "TA0042 - Resource Development"
      }, {
        value: "TA0043",
        text: "TA0043 - Reconnaissance"
      }]
    },
        A = {
      id: "type",
      name: "Type",
      type: a["c"].String
    },
        _ = {
      id: "system_artifacts",
      name: "EMPTY",
      path: "*.iocs.system_artifacts",
      type: a["c"].String,
      layout: {
        summary: "{{ attribution }}\n**{{ artifact }}**",
        rows: 4,
        cols: 2
      },
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, j), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, y), {
        name: "Host Artifact",
        row: 2,
        col: 1
      }), Object.assign(Object.assign({}, A), {
        row: 2,
        col: 2
      }), Object.assign(Object.assign({}, S), {
        row: 3,
        col: [1, 2]
      }), Object.assign(Object.assign({}, h), {
        row: 4,
        col: 1
      }), Object.assign(Object.assign({}, d), {
        row: 4,
        col: 2
      })]
    },
        C = {
      id: "iocs",
      name: "EMPTY",
      layout: {
        rows: 4,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, f), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, w), {
        row: 2,
        col: 1
      }), Object.assign(Object.assign({}, _), {
        row: 3,
        col: 1
      }), Object.assign(Object.assign({}, p), {
        row: 4,
        col: 1
      })]
    },
        I = {
      id: "criticality",
      name: "Criticality",
      path: "*.criticality",
      type: a["c"].Enum,
      options: [{
        value: "fysa",
        text: "FYSA"
      }, {
        value: "low",
        text: "Low"
      }, {
        value: "medium",
        text: "Medium"
      }, {
        value: "high",
        text: "High"
      }, {
        value: "critical",
        text: "Critical"
      }]
    },
        P = {
      id: "report_title",
      name: "Report Title",
      path: "*.report_title",
      type: a["c"].String,
      is_primary: !0
    },
        k = {
      id: "sensitivity",
      name: "Sensitivity",
      path: "*.sensitivity",
      type: a["c"].String
    },
        M = {
      id: "report_number",
      name: "Report Number",
      path: "*.report_number",
      type: a["c"].String
    },
        E = {
      id: "traffic_light_protocol",
      name: "Traffic Light Protocol",
      path: "*.traffic_light_protocol",
      type: a["c"].Enum,
      options: [{
        value: "red",
        text: "Red"
      }, {
        value: "amber_strict",
        text: "Amber+Strict"
      }, {
        value: "amber",
        text: "Amber"
      }, {
        value: "green",
        text: "Green"
      }, {
        value: "clear",
        text: "Clear"
      }]
    },
        D = {
      id: "general",
      layout: {
        rows: 2,
        cols: 3
      },
      properties: [Object.assign(Object.assign({}, P), {
        row: 1,
        col: [1, 2]
      }), Object.assign(Object.assign({}, M), {
        row: 1,
        col: 3
      }), Object.assign(Object.assign({}, k), {
        row: 2,
        col: 2
      }), Object.assign(Object.assign({}, E), {
        row: 2,
        col: 3
      }), Object.assign(Object.assign({}, I), {
        row: 2,
        col: 1
      })],
      is_name_displayed: !1,
      is_primary: !0
    },
        R = {
      id: "sector",
      name: "Sector",
      type: a["c"].Enum,
      options: [{
        value: "NAICS 721",
        text: "Government "
      }, {
        value: "NAICS 72",
        text: "National Defence and Security "
      }, {
        value: "NAICS 561",
        text: "Banking and Finance "
      }, {
        value: "NAICS 56",
        text: "Information and Communications "
      }, {
        value: "NAICS 11",
        text: "Energy "
      }, {
        value: "NAICS 481",
        text: "Transportation "
      }, {
        value: "NAICS 621",
        text: "Emergency Services "
      }, {
        value: "NAICS 713",
        text: "Waters "
      }, {
        value: "NAICS 112",
        text: "Health Services "
      }, {
        value: "NAICS 315",
        text: "Agriculture and Plantation "
      }, {
        value: "NAICS 71",
        text: "Trade, Industry and Economy "
      }, {
        value: "NAICS 723",
        text: "Education "
      }]
    },
        N = {
      id: "activity",
      name: "Activity",
      type: a["c"].String
    },
        F = {
      id: "location",
      name: "Location",
      type: a["c"].String,
      options: [{
        value: "ALB",
        text: "Albania"
      }, {
        value: "DZA",
        text: "Algeria"
      }, {
        value: "ASM",
        text: "American Samoa"
      }, {
        value: "AND",
        text: "Andorra"
      }, {
        value: "AGO",
        text: "Angola"
      }, {
        value: "AIA",
        text: "Anguila"
      }, {
        value: "ATG",
        text: "Antigua and Barbuda"
      }, {
        value: "ARG",
        text: "Argentina"
      }, {
        value: "ARM",
        text: "Armenia"
      }, {
        value: "ABW",
        text: "Aruba"
      }, {
        value: "AUS",
        text: "Australia"
      }, {
        value: "AUT",
        text: "Austria"
      }, {
        value: "AZE",
        text: "Azerbaijan"
      }, {
        value: "BHS",
        text: "Bahamas, The"
      }, {
        value: "BHR",
        text: "Bahrain"
      }, {
        value: "BGD",
        text: "Bangladesh"
      }, {
        value: "BRB",
        text: "Barbados"
      }, {
        value: "BLR",
        text: "Belarus"
      }, {
        value: "BEL",
        text: "Belgium"
      }, {
        value: "BLX",
        text: "Belgium-Luxembourg"
      }, {
        value: "BLZ",
        text: "Belize"
      }, {
        value: "BEN",
        text: "Benin"
      }, {
        value: "BMU",
        text: "Bermuda"
      }, {
        value: "BTN",
        text: "Bhutan"
      }, {
        value: "BOL",
        text: "Bolivia"
      }, {
        value: "BIH",
        text: "Bosnia and Herzegovina"
      }, {
        value: "BWA",
        text: "Botswana"
      }, {
        value: "BAT",
        text: "Br. Antr. Terr"
      }, {
        value: "BRA",
        text: "Brazil"
      }, {
        value: "IOT",
        text: "British Indian Ocean Ter."
      }, {
        value: "VGB",
        text: "British Virgin Islands"
      }, {
        value: "BRN",
        text: "Brunei"
      }, {
        value: "BGR",
        text: "Bulgaria"
      }, {
        value: "BFA",
        text: "Burkina Faso"
      }, {
        value: "BDI",
        text: "Burundi"
      }, {
        value: "KHM",
        text: "Cambodia"
      }, {
        value: "CMR",
        text: "Cameroon"
      }, {
        value: "CAN",
        text: "Canada"
      }, {
        value: "CPV",
        text: "Cape Verde"
      }, {
        value: "CYM",
        text: "Cayman Islands"
      }, {
        value: "CAF",
        text: "Central African Republic"
      }, {
        value: "TCD",
        text: "Chad"
      }, {
        value: "CHL",
        text: "Chile"
      }, {
        value: "CHN",
        text: "China"
      }, {
        value: "CXR",
        text: "Christmas Island"
      }, {
        value: "CCK",
        text: "Cocos (Keeling) Islands"
      }, {
        value: "COL",
        text: "Colombia"
      }, {
        value: "COM",
        text: "Comoros"
      }, {
        value: "ZAR",
        text: "Congo, Dem. Rep."
      }, {
        value: "COG",
        text: "Congo, Rep."
      }, {
        value: "COK",
        text: "Cook Islands"
      }, {
        value: "CRI",
        text: "Costa Rica"
      }, {
        value: "CIV",
        text: "Cote d'Ivoire"
      }, {
        value: "HRV",
        text: "Croatia"
      }, {
        value: "CUB",
        text: "Cuba"
      }, {
        value: "CYP",
        text: "Cyprus"
      }, {
        value: "CZE",
        text: "Czech Republic"
      }, {
        value: "CSK",
        text: "Czechoslovakia"
      }, {
        value: "DNK",
        text: "Denmark"
      }, {
        value: "DJI",
        text: "Djibouti"
      }, {
        value: "DMA",
        text: "Dominica"
      }, {
        value: "DOM",
        text: "Dominican Republic"
      }, {
        value: "TMP",
        text: "East Timor"
      }, {
        value: "ECU",
        text: "Ecuador"
      }, {
        value: "EGY",
        text: "Egypt, Arab Rep."
      }, {
        value: "SLV",
        text: "El Salvador"
      }, {
        value: "GNQ",
        text: "Equatorial Guinea"
      }, {
        value: "ERI",
        text: "Eritrea"
      }, {
        value: "EST",
        text: "Estonia"
      }, {
        value: "ETH",
        text: "Ethiopia (excludes Eritrea)"
      }, {
        value: "ETF",
        text: "Ethiopia (includes Eritrea)"
      }, {
        value: "EUN",
        text: "European Union"
      }, {
        value: "FRO",
        text: "Faeroe Islands"
      }, {
        value: "FLK",
        text: "Falkland Island"
      }, {
        value: "FJI",
        text: "Fiji"
      }, {
        value: "FIN",
        text: "Finland"
      }, {
        value: "PCZ",
        text: "Fm Panama Cz"
      }, {
        value: "ZW1",
        text: "Fm Rhod Nyas"
      }, {
        value: "TAN",
        text: "Fm Tanganyik"
      }, {
        value: "VDR",
        text: "Fm Vietnam Dr"
      }, {
        value: "SVR",
        text: "Fm Vietnam Rp"
      }, {
        value: "ZPM",
        text: "Fm Zanz-Pemb"
      }, {
        value: "ATF",
        text: "Fr. So. Ant. Tr"
      }, {
        value: "FRA",
        text: "France"
      }, {
        value: "FRE",
        text: "Free Zones"
      }, {
        value: "GUF",
        text: "French Guiana"
      }, {
        value: "PYF",
        text: "French Polynesia"
      }, {
        value: "GAB",
        text: "Gabon"
      }, {
        value: "GMB",
        text: "Gambia, The"
      }, {
        value: "GAZ",
        text: "Gaza Strip"
      }, {
        value: "GEO",
        text: "Georgia"
      }, {
        value: "DDR",
        text: "German Democratic Republic"
      }, {
        value: "DEU",
        text: "Germany"
      }, {
        value: "GHA",
        text: "Ghana"
      }, {
        value: "GIB",
        text: "Gibraltar"
      }, {
        value: "GRC",
        text: "Greece"
      }, {
        value: "GRL",
        text: "Greenland"
      }, {
        value: "GRD",
        text: "Grenada"
      }, {
        value: "GLP",
        text: "Guadeloupe"
      }, {
        value: "GUM",
        text: "Guam"
      }, {
        value: "GTM",
        text: "Guatemala"
      }, {
        value: "GIN",
        text: "Guinea"
      }, {
        value: "GNB",
        text: "Guinea-Bissau"
      }, {
        value: "GUY",
        text: "Guyana"
      }, {
        value: "HTI",
        text: "Haiti"
      }, {
        value: "VAT",
        text: "Holy See"
      }, {
        value: "HND",
        text: "Honduras"
      }, {
        value: "HKG",
        text: "Hong Kong, China"
      }, {
        value: "HUN",
        text: "Hungary"
      }, {
        value: "ISL",
        text: "Iceland"
      }, {
        value: "IND",
        text: "India"
      }, {
        value: "valueN",
        text: "Indonesia"
      }, {
        value: "IRN",
        text: "Iran, Islamic Rep."
      }, {
        value: "IRQ",
        text: "Iraq"
      }, {
        value: "IRL",
        text: "Ireland"
      }, {
        value: "ISR",
        text: "Israel"
      }, {
        value: "ITA",
        text: "Italy"
      }, {
        value: "JAM",
        text: "Jamaica"
      }, {
        value: "JPN",
        text: "Japan"
      }, {
        value: "JTN",
        text: "Jhonston Island"
      }, {
        value: "JOR",
        text: "Jordan"
      }, {
        value: "KAZ",
        text: "Kazakhstan"
      }, {
        value: "KEN",
        text: "Kenya"
      }, {
        value: "KIR",
        text: "Kiribati"
      }, {
        value: "PRK",
        text: "Korea, Dem. Rep."
      }, {
        value: "KOR",
        text: "Korea, Rep."
      }, {
        value: "KWT",
        text: "Kuwait"
      }, {
        value: "KGZ",
        text: "Kyrgyz Republic"
      }, {
        value: "LAO",
        text: "Lao PDR"
      }, {
        value: "LVA",
        text: "Latvia"
      }, {
        value: "LBN",
        text: "Lebanon"
      }, {
        value: "LSO",
        text: "Lesotho"
      }, {
        value: "LBR",
        text: "Liberia"
      }, {
        value: "LBY",
        text: "Libya"
      }, {
        value: "LIE",
        text: "Liechtenstein"
      }, {
        value: "LTU",
        text: "Lithuania"
      }, {
        value: "LUX",
        text: "Luxembourg"
      }, {
        value: "MAC",
        text: "Macao"
      }, {
        value: "MKD",
        text: "Macedonia, FYR"
      }, {
        value: "MDG",
        text: "Madagascar"
      }, {
        value: "MWI",
        text: "Malawi"
      }, {
        value: "MYS",
        text: "Malaysia"
      }, {
        value: "MDV",
        text: "Maldives"
      }, {
        value: "MLI",
        text: "Mali"
      }, {
        value: "MLT",
        text: "Malta"
      }, {
        value: "MHL",
        text: "Marshall Islands"
      }, {
        value: "MTQ",
        text: "Martinique"
      }, {
        value: "MRT",
        text: "Mauritania"
      }, {
        value: "MUS",
        text: "Mauritius"
      }, {
        value: "MEX",
        text: "Mexico"
      }, {
        value: "FSM",
        text: "Micronesia, Fed. Sts."
      }, {
        value: "Mvalue",
        text: "Mvalueway Islands"
      }, {
        value: "MDA",
        text: "Moldova"
      }, {
        value: "MCO",
        text: "Monaco"
      }, {
        value: "MNG",
        text: "Mongolia"
      }, {
        value: "MSR",
        text: "Montserrat"
      }, {
        value: "MAR",
        text: "Morocco"
      }, {
        value: "MOZ",
        text: "Mozambique"
      }, {
        value: "MMR",
        text: "Myanmar"
      }, {
        value: "NAM",
        text: "Namibia"
      }, {
        value: "NRU",
        text: "Nauru"
      }, {
        value: "NPL",
        text: "Nepal"
      }, {
        value: "NLD",
        text: "Netherlands"
      }, {
        value: "ANT",
        text: "Netherlands Antilles"
      }, {
        value: "NZE",
        text: "Neutral Zone"
      }, {
        value: "NCL",
        text: "New Caledonia"
      }, {
        value: "NZL",
        text: "New Zealand"
      }, {
        value: "NIC",
        text: "Nicaragua"
      }, {
        value: "NER",
        text: "Niger"
      }, {
        value: "NGA",
        text: "Nigeria"
      }, {
        value: "NIU",
        text: "Niue"
      }, {
        value: "NFK",
        text: "Norfolk Island"
      }, {
        value: "MNP",
        text: "Northern Mariana Islands"
      }, {
        value: "NOR",
        text: "Norway"
      }, {
        value: "OMN",
        text: "Oman"
      }, {
        value: "PCE",
        text: "Pacific Islands"
      }, {
        value: "PAK",
        text: "Pakistan"
      }, {
        value: "PLW",
        text: "Palau"
      }, {
        value: "PAN",
        text: "Panama"
      }, {
        value: "PNG",
        text: "Papua New Guinea"
      }, {
        value: "PRY",
        text: "Paraguay"
      }, {
        value: "PMY",
        text: "Pen Malaysia"
      }, {
        value: "PER",
        text: "Peru"
      }, {
        value: "PHL",
        text: "Philippines"
      }, {
        value: "PCN",
        text: "Pitcairn"
      }, {
        value: "POL",
        text: "Poland"
      }, {
        value: "PRT",
        text: "Portugal"
      }, {
        value: "PRI",
        text: "Puerto Rico"
      }, {
        value: "QAT",
        text: "Qatar"
      }, {
        value: "REU",
        text: "Reunion"
      }, {
        value: "ROM",
        text: "Romania"
      }, {
        value: "RUS",
        text: "Russian Federation"
      }, {
        value: "RWA",
        text: "Rwanda"
      }, {
        value: "RYU",
        text: "Ryukyu Is"
      }, {
        value: "SBH",
        text: "Sabah"
      }, {
        value: "SHN",
        text: "Saint Helena"
      }, {
        value: "KN1",
        text: "Saint Kitts-Nevis-Anguilla-Aru"
      }, {
        value: "SPM",
        text: "Saint Pierre and Miquelon"
      }, {
        value: "WSM",
        text: "Samoa"
      }, {
        value: "SMR",
        text: "San Marino"
      }, {
        value: "STP",
        text: "Sao Tome and Principe"
      }, {
        value: "SWK",
        text: "Sarawak"
      }, {
        value: "SAU",
        text: "Saudi Arabia"
      }, {
        value: "SEN",
        text: "Senegal"
      }, {
        value: "SYC",
        text: "Seychelles"
      }, {
        value: "SLE",
        text: "Sierra Leone"
      }, {
        value: "SIK",
        text: "SIKKIM"
      }, {
        value: "SGP",
        text: "Singapore"
      }, {
        value: "SVK",
        text: "Slovak Republic"
      }, {
        value: "SVN",
        text: "Slovenia"
      }, {
        value: "SLB",
        text: "Solomon Islands"
      }, {
        value: "SOM",
        text: "Somalia"
      }, {
        value: "ZAF",
        text: "South Africa"
      }, {
        value: "SVU",
        text: "Soviet Union"
      }, {
        value: "ESP",
        text: "Spain"
      }, {
        value: "SPE",
        text: "Special Categories"
      }, {
        value: "LKA",
        text: "Sri Lanka"
      }, {
        value: "KNA",
        text: "St. Kitts and Nevis"
      }, {
        value: "LCA",
        text: "St. Lucia"
      }, {
        value: "VCT",
        text: "St. Vincent and the Grenadines"
      }, {
        value: "SDN",
        text: "Sudan"
      }, {
        value: "SUR",
        text: "Suriname"
      }, {
        value: "SJM",
        text: "Svalbard and Jan Mayen Is"
      }, {
        value: "SWZ",
        text: "Swaziland"
      }, {
        value: "SWE",
        text: "Sweden"
      }, {
        value: "CHE",
        text: "Switzerland"
      }, {
        value: "SYR",
        text: "Syrian Arab Republic"
      }, {
        value: "TWN",
        text: "Taiwan"
      }, {
        value: "TJK",
        text: "Tajikistan"
      }, {
        value: "TZA",
        text: "Tanzania"
      }, {
        value: "THA",
        text: "Thailand"
      }, {
        value: "TGO",
        text: "Togo"
      }, {
        value: "TKL",
        text: "Tokelau"
      }, {
        value: "TON",
        text: "Tonga"
      }, {
        value: "TTO",
        text: "Trinvaluead and Tobago"
      }, {
        value: "TUN",
        text: "Tunisia"
      }, {
        value: "TUR",
        text: "Turkey"
      }, {
        value: "TKM",
        text: "Turkmenistan"
      }, {
        value: "TCA",
        text: "Turks and Caicos Isl."
      }, {
        value: "TUV",
        text: "Tuvalu"
      }, {
        value: "UGA",
        text: "Uganda"
      }, {
        value: "UKR",
        text: "Ukraine"
      }, {
        value: "ARE",
        text: "United Arab Emirates"
      }, {
        value: "GBR",
        text: "United Kingdom"
      }, {
        value: "USA",
        text: "United States"
      }, {
        value: "UNS",
        text: "Unspecified"
      }, {
        value: "URY",
        text: "Uruguay"
      }, {
        value: "USP",
        text: "Us Msc.Pac.I"
      }, {
        value: "UZB",
        text: "Uzbekistan"
      }, {
        value: "VUT",
        text: "Vanuatu"
      }, {
        value: "VEN",
        text: "Venezuela"
      }, {
        value: "VNM",
        text: "Vietnam"
      }, {
        value: "VIR",
        text: "Virgin Islands (U.S.)"
      }, {
        value: "WAK",
        text: "Wake Island"
      }, {
        value: "WLF",
        text: "Wallis and Futura Isl."
      }, {
        value: "ESH",
        text: "Western Sahara"
      }, {
        value: "WLD",
        text: "World"
      }, {
        value: "YDR",
        text: "Yemen Democratic"
      }, {
        value: "YEM",
        text: "Yemen, Rep."
      }, {
        value: "SER",
        text: "Yugoslavia"
      }, {
        value: "YUG",
        text: "Yugoslavia, FR (Serbia/Montenegro)"
      }, {
        value: "ZMB",
        text: "Zambia"
      }, {
        value: "ZWE",
        text: "Zimbabwe"
      }, {
        value: "APAC",
        text: "Asia Pacific"
      }, {
        value: "Europe",
        text: "Europe"
      }, {
        value: "Africa",
        text: "Africa"
      }, {
        value: "MENA",
        text: "Mvaluedle East North Africa"
      }, {
        value: "SouthA",
        text: "South America"
      }, {
        value: "NorthA",
        text: "North America"
      }]
    },
        L = {
      id: "end_date",
      name: "End Date",
      type: a["c"].DateTime
    },
        B = {
      id: "start_date",
      name: "Start Date",
      type: a["c"].DateTime
    },
        H = {
      id: "timeline",
      name: "Timeline of Activity",
      path: "*.timeline",
      type: a["c"].ComplexTable,
      layout: {
        summary: "{{ attribution }}\n**{{ location }} :: {{ sector }}**",
        rows: 4,
        cols: 3
      },
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, B), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, L), {
        row: 1,
        col: 3
      }), Object.assign(Object.assign({}, F), {
        row: 2,
        col: [1, 3]
      }), Object.assign(Object.assign({}, R), {
        row: 3,
        col: [1, 3]
      }), Object.assign(Object.assign({}, N), {
        row: 4,
        col: [1, 3]
      })]
    },
        G = {
      id: "timeline_of_activity",
      name: "Timeline of Activity",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, H), {
        row: 1,
        col: 1
      })]
    };
    var U = i("9ae2"),
        V = i("8c0f"),
        z = i("1c81");

    var $ =
    /*#__PURE__*/
    function () {
      function $(e, t) {
        var _this31 = this;

        _classCallCheck(this, $);

        this.property = e, e.registerAction("import-csv", "Import from CSV", function () {
          V["a"].openTextFileDialog().then(function (i) {
            var a = i.contents;
            null !== a && void 0 !== a || console.error("Error: could not contents of file: '".concat(i.filename, "'."));

            var n = _this31.parseCsv(a),
                o = [];

            var _iteratorNormalCompletion28 = true;
            var _didIteratorError28 = false;
            var _iteratorError28 = undefined;

            try {
              for (var _iterator28 = n[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                var _t15 = _step28.value;
                _t15 = _this31.tryParseRow(_t15), o.push(U["d"](e, _t15));
              }
            } catch (err) {
              _didIteratorError28 = true;
              _iteratorError28 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
                  _iterator28["return"]();
                }
              } finally {
                if (_didIteratorError28) {
                  throw _iteratorError28;
                }
              }
            }

            t.emit.apply(t, ["execute"].concat(o));
          });
        });
      }

      _createClass($, [{
        key: "parseCsv",
        value: function parseCsv(e) {
          var t;
          var i = [],
              a = e.split(/\r?\n/g),
              n = this.segmentCsvLine(a[0]);

          for (var _o5 = 1; _o5 < a.length; _o5++) {
            if (/^\s*$/.test(a[_o5])) continue;

            var _e17 = [],
                _s4 = this.segmentCsvLine(a[_o5]);

            for (var _i24 = 0; _i24 < n.length; _i24++) {
              _e17.push([n[_i24], null !== (t = _s4[_i24]) && void 0 !== t ? t : ""]);
            }

            i.push(Object.fromEntries(_e17));
          }

          return i;
        }
      }, {
        key: "segmentCsvLine",
        value: function segmentCsvLine(e) {
          e = e.trim();
          var t = [],
              i = 0,
              a = -1,
              n = 0;

          while (i < e.length) {
            a = -1, n = 0, '"' === e[i] && (a = this.indexOf(e, /"\s*,|"$/, i)), -1 === a ? a = this.indexOf(e, /,/g, i) : (i += 1, n += 1), -1 === a ? a = e.length : n += 1, t.push(e.slice(i, a)), i = a + n;
          }

          return "," === e[e.length - 1] && t.push(""), t;
        }
      }, {
        key: "indexOf",
        value: function indexOf(e, t) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var a = e.slice(i).search(t);
          return (a < 0 ? 0 : i) + a;
        }
      }, {
        key: "tryParseRow",
        value: function tryParseRow(e) {
          var _this32 = this;

          var t = {};

          var _loop2 = function _loop2(_i25) {
            var a = _this32.normalize(_i25),
                n = _this32.property.defaultRow.find(function (e) {
              var t = _this32.normalize(e.name);

              return e.id === _i25.trim() || t === a;
            });

            n && (t[n.id] = _this32.tryParseValue(e[_i25], n));
          };

          for (var _i25 in e) {
            _loop2(_i25);
          }

          return t;
        }
      }, {
        key: "tryParseValue",
        value: function tryParseValue(e, t) {
          if (void 0 === e) return null;
          if (e = e.trim(), "" === e) return null;
          if (t instanceof z["q"]) return e;
          if (t instanceof z["j"]) return parseFloat(e);
          if (t instanceof z["f"]) return new Date(e);

          if (t instanceof z["g"]) {
            if (t.options.has(e)) return e;
            var _iteratorNormalCompletion29 = true;
            var _didIteratorError29 = false;
            var _iteratorError29 = undefined;

            try {
              for (var _iterator29 = t.options[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                var _step29$value = _slicedToArray(_step29.value, 2),
                    _i26 = _step29$value[0],
                    _a7 = _step29$value[1];

                if (this.normalize(_a7) === this.normalize(e)) return _i26;
              }
            } catch (err) {
              _didIteratorError29 = true;
              _iteratorError29 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
                  _iterator29["return"]();
                }
              } finally {
                if (_didIteratorError29) {
                  throw _iteratorError29;
                }
              }
            }

            return null;
          }
        }
      }, {
        key: "normalize",
        value: function normalize(e) {
          return e.trim().toLocaleLowerCase().normalize("NFKD").replace(/[^a-z0-9\s]/g, "").replace(/\s+/, " ");
        }
      }]);

      return $;
    }();

    var Y = {
      id: "key_points",
      name: "Key Findings",
      path: "*.key_points",
      type: a["c"].String
    },
        W = {
      id: "key_points",
      name: "Key Findings",
      layout: {
        rows: 4,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, Y), {
        row: [1, 4],
        col: 1
      })]
    };

    var q =
    /*#__PURE__*/
    function () {
      function q(e) {
        var _this33 = this;

        _classCallCheck(this, q);

        e.registerMetric("word-count", "Words", 0), e.on("update", function () {
          e.updateMetric("word-count", _this33.getWordCount(e.value));
        });
      }

      _createClass(q, [{
        key: "getWordCount",
        value: function getWordCount(e) {
          var t, i;
          var a = (null !== (i = null === (t = null === e || void 0 === e ? void 0 : e.match(/\s+\S/g)) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : -1) + 1;
          return !a && e ? 1 : a;
        }
      }]);

      return q;
    }();

    var K = {
      id: "assessment",
      name: "Assessment",
      path: "*.assessment",
      type: a["c"].String
    },
        Z = {
      id: "assessment",
      name: "Assessment",
      layout: {
        rows: 7,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, K), {
        row: [1, 7],
        col: 1
      })]
    },
        J = {
      id: "signature_description",
      name: "EMPTY",
      type: a["c"].String
    },
        X = {
      id: "signatures",
      name: "EMPTY",
      path: "*.signatures",
      type: a["c"].String,
      layout: {
        summary: "{{ attribution }}\n**{{ ioc_malware_name }}**",
        rows: 2,
        cols: 2
      },
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, T), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, J), {
        row: 2,
        col: [1, 2]
      })]
    },
        Q = {
      id: "signatures",
      name: "Empty",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, X), {
        row: 1,
        col: 1
      })]
    },
        ee = {
      id: "report_citations",
      name: "Report References",
      path: "*.data_sources.report_citations",
      type: a["c"].BasicTable,
      layout: {
        cols: 3
      },
      properties: [{
        id: "description",
        name: "Description",
        type: a["c"].String,
        row: 0,
        col: [1, 2]
      }, {
        id: "hyperlink",
        name: "Hyperlink",
        type: a["c"].String,
        row: 0,
        col: 3
      }]
    },
        te = {
      id: "internal_telemetry",
      name: "Remarks",
      type: a["c"].String
    },
        ie = {
      id: "internal_telemetry",
      name: "Remarks",
      path: "*.data_sources.internal_telemetry",
      type: a["c"].String,
      layout: {
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, te), {
        row: 0,
        col: 1
      })]
    },
        ae = {
      id: "data_sources",
      name: "Resources ",
      layout: {
        rows: 2,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, ee), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, ie), {
        row: 2,
        col: 1
      })]
    },
        ne = {
      id: "defend",
      name: "D3FEND",
      type: a["c"].String
    },
        oe = {
      id: "control",
      name: "Deployed Control",
      type: a["c"].String
    },
        se = {
      id: "procedure",
      name: "Procedure",
      type: a["c"].String
    },
        re = {
      id: "technique",
      name: "Technique",
      type: a["c"].Enum,
      options: [{
        value: "T1001",
        text: "T1001 - Data Obfuscation"
      }, {
        value: "T1003",
        text: "T1003 - OS Credential Dumping"
      }, {
        value: "T1005",
        text: "T1005 - Data from Local System"
      }, {
        value: "T1006",
        text: "T1006 - Direct Volume Access"
      }, {
        value: "T1007",
        text: "T1007 - System Service Discovery"
      }, {
        value: "T1008",
        text: "T1008 - Fallback Channels"
      }, {
        value: "T1010",
        text: "T1010 - Application Window Discovery"
      }, {
        value: "T1011",
        text: "T1011 - Exfiltration Over Other Network Medium"
      }, {
        value: "T1012",
        text: "T1012 - Query Registry"
      }, {
        value: "T1014",
        text: "T1014 - Rootkit"
      }, {
        value: "T1016",
        text: "T1016 - System Network Configuration Discovery"
      }, {
        value: "T1018",
        text: "T1018 - Remote System Discovery"
      }, {
        value: "T1020",
        text: "T1020 - Automated Exfiltration"
      }, {
        value: "T1021",
        text: "T1021 - Remote Services"
      }, {
        value: "T1025",
        text: "T1025 - Data from Removable Media"
      }, {
        value: "T1027",
        text: "T1027 - Obfuscated Files or Information"
      }, {
        value: "T1029",
        text: "T1029 - Scheduled Transfer"
      }, {
        value: "T1030",
        text: "T1030 - Data Transfer Size Limits"
      }, {
        value: "T1033",
        text: "T1033 - System Owner/User Discovery"
      }, {
        value: "T1036",
        text: "T1036 - Masquerading"
      }, {
        value: "T1037",
        text: "T1037 - Boot or Logon Initialization Scripts"
      }, {
        value: "T1039",
        text: "T1039 - Data from Network Shared Drive"
      }, {
        value: "T1040",
        text: "T1040 - Network Sniffing"
      }, {
        value: "T1041",
        text: "T1041 - Exfiltration Over C2 Channel"
      }, {
        value: "T1046",
        text: "T1046 - Network Service Discovery"
      }, {
        value: "T1047",
        text: "T1047 - Windows Management Instrumentation"
      }, {
        value: "T1048",
        text: "T1048 - Exfiltration Over Alternative Protocol"
      }, {
        value: "T1049",
        text: "T1049 - System Network Connections Discovery"
      }, {
        value: "T1052",
        text: "T1052 - Exfiltration Over Physical Medium"
      }, {
        value: "T1053",
        text: "T1053 - Scheduled Task/Job"
      }, {
        value: "T1055",
        text: "T1055 - Process Injection"
      }, {
        value: "T1056",
        text: "T1056 - Input Capture"
      }, {
        value: "T1057",
        text: "T1057 - Process Discovery"
      }, {
        value: "T1059",
        text: "T1059 - Command and Scripting Interpreter"
      }, {
        value: "T1068",
        text: "T1068 - Exploitation for Privilege Escalation"
      }, {
        value: "T1069",
        text: "T1069 - Permission Groups Discovery"
      }, {
        value: "T1070",
        text: "T1070 - Indicator Removal"
      }, {
        value: "T1071",
        text: "T1071 - Application Layer Protocol"
      }, {
        value: "T1072",
        text: "T1072 - Software Deployment Tools"
      }, {
        value: "T1074",
        text: "T1074 - Data Staged"
      }, {
        value: "T1078",
        text: "T1078 - Valid Accounts"
      }, {
        value: "T1080",
        text: "T1080 - Taint Shared Content"
      }, {
        value: "T1082",
        text: "T1082 - System Information Discovery"
      }, {
        value: "T1083",
        text: "T1083 - File and Directory Discovery"
      }, {
        value: "T1087",
        text: "T1087 - Account Discovery"
      }, {
        value: "T1090",
        text: "T1090 - Proxy"
      }, {
        value: "T1091",
        text: "T1091 - Replication Through Removable Media"
      }, {
        value: "T1092",
        text: "T1092 - Communication Through Removable Media"
      }, {
        value: "T1095",
        text: "T1095 - Non-Application Layer Protocol"
      }, {
        value: "T1098",
        text: "T1098 - Account Manipulation"
      }, {
        value: "T1102",
        text: "T1102 - Web Service"
      }, {
        value: "T1104",
        text: "T1104 - Multi-Stage Channels"
      }, {
        value: "T1105",
        text: "T1105 - Ingress Tool Transfer"
      }, {
        value: "T1106",
        text: "T1106 - Native API"
      }, {
        value: "T1110",
        text: "T1110 - Brute Force"
      }, {
        value: "T1111",
        text: "T1111 - Multi-Factor Authentication Interception"
      }, {
        value: "T1112",
        text: "T1112 - Modify Registry"
      }, {
        value: "T1113",
        text: "T1113 - Screen Capture"
      }, {
        value: "T1114",
        text: "T1114 - Email Collection"
      }, {
        value: "T1115",
        text: "T1115 - Clipboard Data"
      }, {
        value: "T1119",
        text: "T1119 - Automated Collection"
      }, {
        value: "T1120",
        text: "T1120 - Peripheral Device Discovery"
      }, {
        value: "T1123",
        text: "T1123 - Audio Capture"
      }, {
        value: "T1124",
        text: "T1124 - System Time Discovery"
      }, {
        value: "T1125",
        text: "T1125 - Video Capture"
      }, {
        value: "T1127",
        text: "T1127 - Trusted Developer Utilities Proxy Execution"
      }, {
        value: "T1129",
        text: "T1129 - Shared Modules"
      }, {
        value: "T1132",
        text: "T1132 - Data Encoding"
      }, {
        value: "T1133",
        text: "T1133 - External Remote Services"
      }, {
        value: "T1134",
        text: "T1134 - Access Token Manipulation"
      }, {
        value: "T1135",
        text: "T1135 - Network Share Discovery"
      }, {
        value: "T1136",
        text: "T1136 - Create Account"
      }, {
        value: "T1137",
        text: "T1137 - Office Application Startup"
      }, {
        value: "T1140",
        text: "T1140 - Deobfuscate/Decode Files or Information"
      }, {
        value: "T1176",
        text: "T1176 - Browser Extensions"
      }, {
        value: "T1185",
        text: "T1185 - Browser Session Hijacking"
      }, {
        value: "T1187",
        text: "T1187 - Forced Authentication"
      }, {
        value: "T1189",
        text: "T1189 - Drive-by Compromise"
      }, {
        value: "T1190",
        text: "T1190 - Exploit Public-Facing Application"
      }, {
        value: "T1195",
        text: "T1195 - Supply Chain Compromise"
      }, {
        value: "T1197",
        text: "T1197 - BITS Jobs"
      }, {
        value: "T1199",
        text: "T1199 - Trusted Relationship"
      }, {
        value: "T1200",
        text: "T1200 - Hardware Additions"
      }, {
        value: "T1201",
        text: "T1201 - Password Policy Discovery"
      }, {
        value: "T1202",
        text: "T1202 - Indirect Command Execution"
      }, {
        value: "T1203",
        text: "T1203 - Exploitation for Client Execution"
      }, {
        value: "T1204",
        text: "T1204 - User Execution"
      }, {
        value: "T1205",
        text: "T1205 - Traffic Signaling"
      }, {
        value: "T1207",
        text: "T1207 - Rogue Domain Controller"
      }, {
        value: "T1210",
        text: "T1210 - Exploitation of Remote Services"
      }, {
        value: "T1211",
        text: "T1211 - Exploitation for Defense Evasion"
      }, {
        value: "T1212",
        text: "T1212 - Exploitation for Credential Access"
      }, {
        value: "T1213",
        text: "T1213 - Data from Information Repositories"
      }, {
        value: "T1216",
        text: "T1216 - System Script Proxy Execution"
      }, {
        value: "T1217",
        text: "T1217 - Browser Bookmark Discovery"
      }, {
        value: "T1218",
        text: "T1218 - System Binary Proxy Execution"
      }, {
        value: "T1219",
        text: "T1219 - Remote Access Software"
      }, {
        value: "T1220",
        text: "T1220 - XSL Script Processing"
      }, {
        value: "T1221",
        text: "T1221 - Template Injection"
      }, {
        value: "T1222",
        text: "T1222 - File and Directory Permissions Modification"
      }, {
        value: "T1480",
        text: "T1480 - Execution Guardrails"
      }, {
        value: "T1482",
        text: "T1482 - Domain Trust Discovery"
      }, {
        value: "T1484",
        text: "T1484 - Domain Policy Modification"
      }, {
        value: "T1485",
        text: "T1485 - Data Destruction"
      }, {
        value: "T1486",
        text: "T1486 - Data Encrypted for Impact"
      }, {
        value: "T1489",
        text: "T1489 - Service Stop"
      }, {
        value: "T1490",
        text: "T1490 - Inhibit System Recovery"
      }, {
        value: "T1491",
        text: "T1491 - Defacement"
      }, {
        value: "T1495",
        text: "T1495 - Firmware Corruption"
      }, {
        value: "T1496",
        text: "T1496 - Resource Hijacking"
      }, {
        value: "T1497",
        text: "T1497 - Virtualization/Sandbox Evasion"
      }, {
        value: "T1498",
        text: "T1498 - Network Denial of Service"
      }, {
        value: "T1499",
        text: "T1499 - Endpoint Denial of Service"
      }, {
        value: "T1505",
        text: "T1505 - Server Software Component"
      }, {
        value: "T1518",
        text: "T1518 - Software Discovery"
      }, {
        value: "T1525",
        text: "T1525 - Implant Internal Image"
      }, {
        value: "T1526",
        text: "T1526 - Cloud Service Discovery"
      }, {
        value: "T1528",
        text: "T1528 - Steal Application Access Token"
      }, {
        value: "T1529",
        text: "T1529 - System Shutdown/Reboot"
      }, {
        value: "T1530",
        text: "T1530 - Data from Cloud Storage"
      }, {
        value: "T1531",
        text: "T1531 - Account Access Removal"
      }, {
        value: "T1534",
        text: "T1534 - Internal Spearphishing"
      }, {
        value: "T1535",
        text: "T1535 - Unused/Unsupported Cloud Regions"
      }, {
        value: "T1537",
        text: "T1537 - Transfer Data to Cloud Account"
      }, {
        value: "T1538",
        text: "T1538 - Cloud Service Dashboard"
      }, {
        value: "T1539",
        text: "T1539 - Steal Web Session Cookie"
      }, {
        value: "T1542",
        text: "T1542 - Pre-OS Boot"
      }, {
        value: "T1543",
        text: "T1543 - Create or Modify System Process"
      }, {
        value: "T1546",
        text: "T1546 - Event Triggered Execution"
      }, {
        value: "T1547",
        text: "T1547 - Boot or Logon Autostart Execution"
      }, {
        value: "T1548",
        text: "T1548 - Abuse Elevation Control Mechanism"
      }, {
        value: "T1550",
        text: "T1550 - Use Alternate Authentication Material"
      }, {
        value: "T1552",
        text: "T1552 - Unsecured Credentials"
      }, {
        value: "T1553",
        text: "T1553 - Subvert Trust Controls"
      }, {
        value: "T1554",
        text: "T1554 - Compromise Client Software Binary"
      }, {
        value: "T1555",
        text: "T1555 - Credentials from Password Stores"
      }, {
        value: "T1556",
        text: "T1556 - Modify Authentication Process"
      }, {
        value: "T1557",
        text: "T1557 - Adversary-in-the-Middle"
      }, {
        value: "T1558",
        text: "T1558 - Steal or Forge Kerberos Tickets"
      }, {
        value: "T1559",
        text: "T1559 - Inter-Process Communication"
      }, {
        value: "T1560",
        text: "T1560 - Archive Collected Data"
      }, {
        value: "T1561",
        text: "T1561 - Disk Wipe"
      }, {
        value: "T1562",
        text: "T1562 - Impair Defenses"
      }, {
        value: "T1563",
        text: "T1563 - Remote Service Session Hijacking"
      }, {
        value: "T1564",
        text: "T1564 - Hide Artifacts"
      }, {
        value: "T1565",
        text: "T1565 - Data Manipulation"
      }, {
        value: "T1566",
        text: "T1566 - Phishing"
      }, {
        value: "T1567",
        text: "T1567 - Exfiltration Over Web Service"
      }, {
        value: "T1568",
        text: "T1568 - Dynamic Resolution"
      }, {
        value: "T1569",
        text: "T1569 - System Services"
      }, {
        value: "T1570",
        text: "T1570 - Lateral Tool Transfer"
      }, {
        value: "T1571",
        text: "T1571 - Non-Standard Port"
      }, {
        value: "T1572",
        text: "T1572 - Protocol Tunneling"
      }, {
        value: "T1573",
        text: "T1573 - Encrypted Channel"
      }, {
        value: "T1574",
        text: "T1574 - Hijack Execution Flow"
      }, {
        value: "T1578",
        text: "T1578 - Modify Cloud Compute Infrastructure"
      }, {
        value: "T1580",
        text: "T1580 - Cloud Infrastructure Discovery"
      }, {
        value: "T1583",
        text: "T1583 - Acquire Infrastructure"
      }, {
        value: "T1584",
        text: "T1584 - Compromise Infrastructure"
      }, {
        value: "T1585",
        text: "T1585 - Establish Accounts"
      }, {
        value: "T1586",
        text: "T1586 - Compromise Accounts"
      }, {
        value: "T1587",
        text: "T1587 - Develop Capabilities"
      }, {
        value: "T1588",
        text: "T1588 - Obtain Capabilities"
      }, {
        value: "T1589",
        text: "T1589 - Gather Victim Identity Information"
      }, {
        value: "T1590",
        text: "T1590 - Gather Victim Network Information"
      }, {
        value: "T1591",
        text: "T1591 - Gather Victim Org Information"
      }, {
        value: "T1592",
        text: "T1592 - Gather Victim Host Information"
      }, {
        value: "T1593",
        text: "T1593 - Search Open Websites/Domains"
      }, {
        value: "T1594",
        text: "T1594 - Search Victim-Owned Websites"
      }, {
        value: "T1595",
        text: "T1595 - Active Scanning"
      }, {
        value: "T1596",
        text: "T1596 - Search Open Technical Databases"
      }, {
        value: "T1597",
        text: "T1597 - Search Closed Sources"
      }, {
        value: "T1598",
        text: "T1598 - Phishing for Information"
      }, {
        value: "T1599",
        text: "T1599 - Network Boundary Bridging"
      }, {
        value: "T1600",
        text: "T1600 - Weaken Encryption"
      }, {
        value: "T1601",
        text: "T1601 - Modify System Image"
      }, {
        value: "T1602",
        text: "T1602 - Data from Configuration Repository"
      }, {
        value: "T1606",
        text: "T1606 - Forge Web Credentials"
      }, {
        value: "T1608",
        text: "T1608 - Stage Capabilities"
      }, {
        value: "T1609",
        text: "T1609 - Container Administration Command"
      }, {
        value: "T1610",
        text: "T1610 - Deploy Container"
      }, {
        value: "T1611",
        text: "T1611 - Escape to Host"
      }, {
        value: "T1612",
        text: "T1612 - Build Image on Host"
      }, {
        value: "T1613",
        text: "T1613 - Container and Resource Discovery"
      }, {
        value: "T1614",
        text: "T1614 - System Location Discovery"
      }, {
        value: "T1615",
        text: "T1615 - Group Policy Discovery"
      }, {
        value: "T1619",
        text: "T1619 - Cloud Storage Object Discovery"
      }, {
        value: "T1620",
        text: "T1620 - Reflective Code Loading"
      }, {
        value: "T1621",
        text: "T1621 - Multi-Factor Authentication Request Generation"
      }, {
        value: "T1622",
        text: "T1622 - Debugger Evasion"
      }, {
        value: "T1647",
        text: "T1647 - Plist File Modification"
      }, {
        value: "T1648",
        text: "T1648 - Serverless Execution"
      }, {
        value: "T1649",
        text: "T1649 - Steal or Forge Authentication Certificates"
      }]
    },
        le = {
      id: "sub_technique",
      name: "Sub-technique",
      type: a["c"].Enum,
      options: [{
        value: "T1001.001",
        text: "T1001.001 - Data Obfuscation: Junk Data"
      }, {
        value: "T1001.002",
        text: "T1001.002 - Data Obfuscation: Steganography"
      }, {
        value: "T1001.003",
        text: "T1001.003 - Data Obfuscation: Protocol Impersonation"
      }, {
        value: "T1003.001",
        text: "T1003.001 - OS Credential Dumping: LSASS Memory"
      }, {
        value: "T1003.002",
        text: "T1003.002 - OS Credential Dumping: Security Account Manager"
      }, {
        value: "T1003.003",
        text: "T1003.003 - OS Credential Dumping: NTDS"
      }, {
        value: "T1003.004",
        text: "T1003.004 - OS Credential Dumping: LSA Secrets"
      }, {
        value: "T1003.005",
        text: "T1003.005 - OS Credential Dumping: Cached Domain Credentials"
      }, {
        value: "T1003.006",
        text: "T1003.006 - OS Credential Dumping: DCSync"
      }, {
        value: "T1003.007",
        text: "T1003.007 - OS Credential Dumping: Proc Filesystem"
      }, {
        value: "T1003.008",
        text: "T1003.008 - OS Credential Dumping: /etc/passwd and /etc/shadow"
      }, {
        value: "T1011.001",
        text: "T1011.001 - Exfiltration Over Other Network Medium: Exfiltration Over Bluetooth"
      }, {
        value: "T1016.001",
        text: "T1016.001 - System Network Configuration Discovery: Internet Connection Discovery"
      }, {
        value: "T1020.001",
        text: "T1020.001 - Automated Exfiltration: Traffic Duplication"
      }, {
        value: "T1021.001",
        text: "T1021.001 - Remote Services: Remote Desktop Protocol"
      }, {
        value: "T1021.002",
        text: "T1021.002 - Remote Services: SMB/Windows Admin Shares"
      }, {
        value: "T1021.003",
        text: "T1021.003 - Remote Services: Distributed Component Object Model"
      }, {
        value: "T1021.004",
        text: "T1021.004 - Remote Services: SSH"
      }, {
        value: "T1021.005",
        text: "T1021.005 - Remote Services: VNC"
      }, {
        value: "T1021.006",
        text: "T1021.006 - Remote Services: Windows Remote Management"
      }, {
        value: "T1027.001",
        text: "T1027.001 - Obfuscated Files or Information: Binary Padding"
      }, {
        value: "T1027.002",
        text: "T1027.002 - Obfuscated Files or Information: Software Packing"
      }, {
        value: "T1027.003",
        text: "T1027.003 - Obfuscated Files or Information: Steganography"
      }, {
        value: "T1027.004",
        text: "T1027.004 - Obfuscated Files or Information: Compile After Delivery"
      }, {
        value: "T1027.005",
        text: "T1027.005 - Obfuscated Files or Information: Indicator Removal from Tools"
      }, {
        value: "T1027.006",
        text: "T1027.006 - Obfuscated Files or Information: HTML Smuggling"
      }, {
        value: "T1027.007",
        text: "T1027.007 - Obfuscated Files or Information: Dynamic API Resolution"
      }, {
        value: "T1027.008",
        text: "T1027.008 - Obfuscated Files or Information: Stripped Payloads"
      }, {
        value: "T1027.009",
        text: "T1027.009 - Obfuscated Files or Information: Embedded Payloads"
      }, {
        value: "T1036.001",
        text: "T1036.001 - Masquerading: Invalid Code Signature"
      }, {
        value: "T1036.002",
        text: "T1036.002 - Masquerading: Right-to-Left Override"
      }, {
        value: "T1036.003",
        text: "T1036.003 - Masquerading: Rename System Utilities"
      }, {
        value: "T1036.004",
        text: "T1036.004 - Masquerading: Masquerade Task or Service"
      }, {
        value: "T1036.005",
        text: "T1036.005 - Masquerading: Match Legitimate Name or Location"
      }, {
        value: "T1036.006",
        text: "T1036.006 - Masquerading: Space after Filename"
      }, {
        value: "T1036.007",
        text: "T1036.007 - Masquerading: Double File Extension"
      }, {
        value: "T1037.001",
        text: "T1037.001 - Boot or Logon Initialization Scripts: Logon Script (Windows)"
      }, {
        value: "T1037.002",
        text: "T1037.002 - Boot or Logon Initialization Scripts: Login Hook"
      }, {
        value: "T1037.003",
        text: "T1037.003 - Boot or Logon Initialization Scripts: Network Logon Script"
      }, {
        value: "T1037.004",
        text: "T1037.004 - Boot or Logon Initialization Scripts: RC Scripts"
      }, {
        value: "T1037.005",
        text: "T1037.005 - Boot or Logon Initialization Scripts: Startup Items"
      }, {
        value: "T1048.001",
        text: "T1048.001 - Exfiltration Over Alternative Protocol: Exfiltration Over Symmetric Encrypted Non-C2 Protocol"
      }, {
        value: "T1048.002",
        text: "T1048.002 - Exfiltration Over Alternative Protocol: Exfiltration Over Asymmetric Encrypted Non-C2 Protocol"
      }, {
        value: "T1048.003",
        text: "T1048.003 - Exfiltration Over Alternative Protocol: Exfiltration Over Unencrypted Non-C2 Protocol"
      }, {
        value: "T1052.001",
        text: "T1052.001 - Exfiltration Over Physical Medium: Exfiltration over USB"
      }, {
        value: "T1053.002",
        text: "T1053.002 - Scheduled Task/Job: At"
      }, {
        value: "T1053.003",
        text: "T1053.003 - Scheduled Task/Job: Cron"
      }, {
        value: "T1053.005",
        text: "T1053.005 - Scheduled Task/Job: Scheduled Task"
      }, {
        value: "T1053.006",
        text: "T1053.006 - Scheduled Task/Job: Systemd Timers"
      }, {
        value: "T1053.007",
        text: "T1053.007 - Scheduled Task/Job: Container Orchestration Job"
      }, {
        value: "T1055.001",
        text: "T1055.001 - Process Injection: Dynamic-link Library Injection"
      }, {
        value: "T1055.002",
        text: "T1055.002 - Process Injection: Portable Executable Injection"
      }, {
        value: "T1055.003",
        text: "T1055.003 - Process Injection: Thread Execution Hijacking"
      }, {
        value: "T1055.004",
        text: "T1055.004 - Process Injection: Asynchronous Procedure Call"
      }, {
        value: "T1055.005",
        text: "T1055.005 - Process Injection: Thread Local Storage"
      }, {
        value: "T1055.008",
        text: "T1055.008 - Process Injection: Ptrace System Calls"
      }, {
        value: "T1055.009",
        text: "T1055.009 - Process Injection: Proc Memory"
      }, {
        value: "T1055.011",
        text: "T1055.011 - Process Injection: Extra Window Memory Injection"
      }, {
        value: "T1055.012",
        text: "T1055.012 - Process Injection: Process Hollowing"
      }, {
        value: "T1055.013",
        text: "T1055.013 - Process Injection: Process Doppelgänging"
      }, {
        value: "T1055.014",
        text: "T1055.014 - Process Injection: VDSO Hijacking"
      }, {
        value: "T1055.015",
        text: "T1055.015 - Process Injection: ListPlanting"
      }, {
        value: "T1056.001",
        text: "T1056.001 - Input Capture: Keylogging"
      }, {
        value: "T1056.002",
        text: "T1056.002 - Input Capture: GUI Input Capture"
      }, {
        value: "T1056.003",
        text: "T1056.003 - Input Capture: Web Portal Capture"
      }, {
        value: "T1056.004",
        text: "T1056.004 - Input Capture: Credential API Hooking"
      }, {
        value: "T1059.001",
        text: "T1059.001 - Command and Scripting Interpreter: PowerShell"
      }, {
        value: "T1059.002",
        text: "T1059.002 - Command and Scripting Interpreter: AppleScript"
      }, {
        value: "T1059.003",
        text: "T1059.003 - Command and Scripting Interpreter: Windows Command Shell"
      }, {
        value: "T1059.004",
        text: "T1059.004 - Command and Scripting Interpreter: Unix Shell"
      }, {
        value: "T1059.005",
        text: "T1059.005 - Command and Scripting Interpreter: Visual Basic"
      }, {
        value: "T1059.006",
        text: "T1059.006 - Command and Scripting Interpreter: Python"
      }, {
        value: "T1059.007",
        text: "T1059.007 - Command and Scripting Interpreter: JavaScript"
      }, {
        value: "T1059.008",
        text: "T1059.008 - Command and Scripting Interpreter: Network Device CLI"
      }, {
        value: "T1069.001",
        text: "T1069.001 - Permission Groups Discovery: Local Groups"
      }, {
        value: "T1069.002",
        text: "T1069.002 - Permission Groups Discovery: Domain Groups"
      }, {
        value: "T1069.003",
        text: "T1069.003 - Permission Groups Discovery: Cloud Groups"
      }, {
        value: "T1070.001",
        text: "T1070.001 - Indicator Removal: Clear Windows Event Logs"
      }, {
        value: "T1070.002",
        text: "T1070.002 - Indicator Removal: Clear Linux or Mac System Logs"
      }, {
        value: "T1070.003",
        text: "T1070.003 - Indicator Removal: Clear Command History"
      }, {
        value: "T1070.004",
        text: "T1070.004 - Indicator Removal: File Deletion"
      }, {
        value: "T1070.005",
        text: "T1070.005 - Indicator Removal: Network Share Connection Removal"
      }, {
        value: "T1070.006",
        text: "T1070.006 - Indicator Removal: Timestomp"
      }, {
        value: "T1070.007",
        text: "T1070.007 - Indicator Removal: Clear Network Connection History and Configurations"
      }, {
        value: "T1070.008",
        text: "T1070.008 - Indicator Removal: Clear Mailbox Data"
      }, {
        value: "T1070.009",
        text: "T1070.009 - Indicator Removal: Clear Persistence"
      }, {
        value: "T1071.001",
        text: "T1071.001 - Application Layer Protocol: Web Protocols"
      }, {
        value: "T1071.002",
        text: "T1071.002 - Application Layer Protocol: File Transfer Protocols"
      }, {
        value: "T1071.003",
        text: "T1071.003 - Application Layer Protocol: Mail Protocols"
      }, {
        value: "T1071.004",
        text: "T1071.004 - Application Layer Protocol: DNS"
      }, {
        value: "T1074.001",
        text: "T1074.001 - Data Staged: Local Data Staging"
      }, {
        value: "T1074.002",
        text: "T1074.002 - Data Staged: Remote Data Staging"
      }, {
        value: "T1078.001",
        text: "T1078.001 - Valid Accounts: Default Accounts"
      }, {
        value: "T1078.002",
        text: "T1078.002 - Valid Accounts: Domain Accounts"
      }, {
        value: "T1078.003",
        text: "T1078.003 - Valid Accounts: Local Accounts"
      }, {
        value: "T1078.004",
        text: "T1078.004 - Valid Accounts: Cloud Accounts"
      }, {
        value: "T1087.001",
        text: "T1087.001 - Account Discovery: Local Account"
      }, {
        value: "T1087.002",
        text: "T1087.002 - Account Discovery: Domain Account"
      }, {
        value: "T1087.003",
        text: "T1087.003 - Account Discovery: Email Account"
      }, {
        value: "T1087.004",
        text: "T1087.004 - Account Discovery: Cloud Account"
      }, {
        value: "T1090.001",
        text: "T1090.001 - Proxy: Internal Proxy"
      }, {
        value: "T1090.002",
        text: "T1090.002 - Proxy: External Proxy"
      }, {
        value: "T1090.003",
        text: "T1090.003 - Proxy: Multi-hop Proxy"
      }, {
        value: "T1090.004",
        text: "T1090.004 - Proxy: Domain Fronting"
      }, {
        value: "T1098.001",
        text: "T1098.001 - Account Manipulation: Additional Cloud Credentials"
      }, {
        value: "T1098.002",
        text: "T1098.002 - Account Manipulation: Additional Email Delegate Permissions"
      }, {
        value: "T1098.003",
        text: "T1098.003 - Account Manipulation: Additional Cloud Roles"
      }, {
        value: "T1098.004",
        text: "T1098.004 - Account Manipulation: SSH Authorized Keys"
      }, {
        value: "T1098.005",
        text: "T1098.005 - Account Manipulation: Device Registration"
      }, {
        value: "T1102.001",
        text: "T1102.001 - Web Service: Dead Drop Resolver"
      }, {
        value: "T1102.002",
        text: "T1102.002 - Web Service: Bidirectional Communication"
      }, {
        value: "T1102.003",
        text: "T1102.003 - Web Service: One-Way Communication"
      }, {
        value: "T1110.001",
        text: "T1110.001 - Brute Force: Password Guessing"
      }, {
        value: "T1110.002",
        text: "T1110.002 - Brute Force: Password Cracking"
      }, {
        value: "T1110.003",
        text: "T1110.003 - Brute Force: Password Spraying"
      }, {
        value: "T1110.004",
        text: "T1110.004 - Brute Force: Credential Stuffing"
      }, {
        value: "T1114.001",
        text: "T1114.001 - Email Collection: Local Email Collection"
      }, {
        value: "T1114.002",
        text: "T1114.002 - Email Collection: Remote Email Collection"
      }, {
        value: "T1114.003",
        text: "T1114.003 - Email Collection: Email Forwarding Rule"
      }, {
        value: "T1127.001",
        text: "T1127.001 - Trusted Developer Utilities Proxy Execution: MSBuild"
      }, {
        value: "T1132.001",
        text: "T1132.001 - Data Encoding: Standard Encoding"
      }, {
        value: "T1132.002",
        text: "T1132.002 - Data Encoding: Non-Standard Encoding"
      }, {
        value: "T1134.001",
        text: "T1134.001 - Access Token Manipulation: Token Impersonation/Theft"
      }, {
        value: "T1134.002",
        text: "T1134.002 - Access Token Manipulation: Create Process with Token"
      }, {
        value: "T1134.003",
        text: "T1134.003 - Access Token Manipulation: Make and Impersonate Token"
      }, {
        value: "T1134.004",
        text: "T1134.004 - Access Token Manipulation: Parent PID Spoofing"
      }, {
        value: "T1134.005",
        text: "T1134.005 - Access Token Manipulation: SID-History Injection"
      }, {
        value: "T1136.001",
        text: "T1136.001 - Create Account: Local Account"
      }, {
        value: "T1136.002",
        text: "T1136.002 - Create Account: Domain Account"
      }, {
        value: "T1136.003",
        text: "T1136.003 - Create Account: Cloud Account"
      }, {
        value: "T1137.001",
        text: "T1137.001 - Office Application Startup: Office Template Macros"
      }, {
        value: "T1137.002",
        text: "T1137.002 - Office Application Startup: Office Test"
      }, {
        value: "T1137.003",
        text: "T1137.003 - Office Application Startup: Outlook Forms"
      }, {
        value: "T1137.004",
        text: "T1137.004 - Office Application Startup: Outlook Home Page"
      }, {
        value: "T1137.005",
        text: "T1137.005 - Office Application Startup: Outlook Rules"
      }, {
        value: "T1137.006",
        text: "T1137.006 - Office Application Startup: Add-ins"
      }, {
        value: "T1195.001",
        text: "T1195.001 - Supply Chain Compromise: Compromise Software Dependencies and Development Tools"
      }, {
        value: "T1195.002",
        text: "T1195.002 - Supply Chain Compromise: Compromise Software Supply Chain"
      }, {
        value: "T1195.003",
        text: "T1195.003 - Supply Chain Compromise: Compromise Hardware Supply Chain"
      }, {
        value: "T1204.001",
        text: "T1204.001 - User Execution: Malicious Link"
      }, {
        value: "T1204.002",
        text: "T1204.002 - User Execution: Malicious File"
      }, {
        value: "T1204.003",
        text: "T1204.003 - User Execution: Malicious Image"
      }, {
        value: "T1205.001",
        text: "T1205.001 - Traffic Signaling: Port Knocking"
      }, {
        value: "T1205.002",
        text: "T1205.002 - Traffic Signaling: Socket Filters"
      }, {
        value: "T1213.001",
        text: "T1213.001 - Data from Information Repositories: Confluence"
      }, {
        value: "T1213.002",
        text: "T1213.002 - Data from Information Repositories: Sharepoint"
      }, {
        value: "T1213.003",
        text: "T1213.003 - Data from Information Repositories: Code Repositories"
      }, {
        value: "T1216.001",
        text: "T1216.001 - System Script Proxy Execution: PubPrn"
      }, {
        value: "T1218.001",
        text: "T1218.001 - System Binary Proxy Execution: Compiled HTML File"
      }, {
        value: "T1218.002",
        text: "T1218.002 - System Binary Proxy Execution: Control Panel"
      }, {
        value: "T1218.003",
        text: "T1218.003 - System Binary Proxy Execution: CMSTP"
      }, {
        value: "T1218.004",
        text: "T1218.004 - System Binary Proxy Execution: InstallUtil"
      }, {
        value: "T1218.005",
        text: "T1218.005 - System Binary Proxy Execution: Mshta"
      }, {
        value: "T1218.007",
        text: "T1218.007 - System Binary Proxy Execution: Msiexec"
      }, {
        value: "T1218.008",
        text: "T1218.008 - System Binary Proxy Execution: Odbcconf"
      }, {
        value: "T1218.009",
        text: "T1218.009 - System Binary Proxy Execution: Regsvcs/Regasm"
      }, {
        value: "T1218.010",
        text: "T1218.010 - System Binary Proxy Execution: Regsvr32"
      }, {
        value: "T1218.011",
        text: "T1218.011 - System Binary Proxy Execution: Rundll32"
      }, {
        value: "T1218.012",
        text: "T1218.012 - System Binary Proxy Execution: Verclsid"
      }, {
        value: "T1218.013",
        text: "T1218.013 - System Binary Proxy Execution: Mavinject"
      }, {
        value: "T1218.014",
        text: "T1218.014 - System Binary Proxy Execution: MMC"
      }, {
        value: "T1222.001",
        text: "T1222.001 - File and Directory Permissions Modification: Windows File and Directory Permissions Modification"
      }, {
        value: "T1222.002",
        text: "T1222.002 - File and Directory Permissions Modification: Linux and Mac File and Directory Permissions Modification"
      }, {
        value: "T1480.001",
        text: "T1480.001 - Execution Guardrails: Environmental Keying"
      }, {
        value: "T1484.001",
        text: "T1484.001 - Domain Policy Modification: Group Policy Modification"
      }, {
        value: "T1484.002",
        text: "T1484.002 - Domain Policy Modification: Domain Trust Modification"
      }, {
        value: "T1491.001",
        text: "T1491.001 - Defacement: Internal Defacement"
      }, {
        value: "T1491.002",
        text: "T1491.002 - Defacement: External Defacement"
      }, {
        value: "T1497.001",
        text: "T1497.001 - Virtualization/Sandbox Evasion: System Checks"
      }, {
        value: "T1497.002",
        text: "T1497.002 - Virtualization/Sandbox Evasion: User Activity Based Checks"
      }, {
        value: "T1497.003",
        text: "T1497.003 - Virtualization/Sandbox Evasion: Time Based Evasion"
      }, {
        value: "T1498.001",
        text: "T1498.001 - Network Denial of Service: Direct Network Flood"
      }, {
        value: "T1498.002",
        text: "T1498.002 - Network Denial of Service: Reflection Amplification"
      }, {
        value: "T1499.001",
        text: "T1499.001 - Endpoint Denial of Service: OS Exhaustion Flood"
      }, {
        value: "T1499.002",
        text: "T1499.002 - Endpoint Denial of Service: Service Exhaustion Flood"
      }, {
        value: "T1499.003",
        text: "T1499.003 - Endpoint Denial of Service: Application Exhaustion Flood"
      }, {
        value: "T1499.004",
        text: "T1499.004 - Endpoint Denial of Service: Application or System Exploitation"
      }, {
        value: "T1505.001",
        text: "T1505.001 - Server Software Component: SQL Stored Procedures"
      }, {
        value: "T1505.002",
        text: "T1505.002 - Server Software Component: Transport Agent"
      }, {
        value: "T1505.003",
        text: "T1505.003 - Server Software Component: Web Shell"
      }, {
        value: "T1505.004",
        text: "T1505.004 - Server Software Component: IIS Components"
      }, {
        value: "T1505.005",
        text: "T1505.005 - Server Software Component: Terminal Services DLL"
      }, {
        value: "T1518.001",
        text: "T1518.001 - Software Discovery: Security Software Discovery"
      }, {
        value: "T1542.001",
        text: "T1542.001 - Pre-OS Boot: System Firmware"
      }, {
        value: "T1542.002",
        text: "T1542.002 - Pre-OS Boot: Component Firmware"
      }, {
        value: "T1542.003",
        text: "T1542.003 - Pre-OS Boot: Bootkit"
      }, {
        value: "T1542.004",
        text: "T1542.004 - Pre-OS Boot: ROMMONkit"
      }, {
        value: "T1542.005",
        text: "T1542.005 - Pre-OS Boot: TFTP Boot"
      }, {
        value: "T1543.001",
        text: "T1543.001 - Create or Modify System Process: Launch Agent"
      }, {
        value: "T1543.002",
        text: "T1543.002 - Create or Modify System Process: Systemd Service"
      }, {
        value: "T1543.003",
        text: "T1543.003 - Create or Modify System Process: Windows Service"
      }, {
        value: "T1543.004",
        text: "T1543.004 - Create or Modify System Process: Launch Daemon"
      }, {
        value: "T1546.001",
        text: "T1546.001 - Event Triggered Execution: Change Default File Association"
      }, {
        value: "T1546.002",
        text: "T1546.002 - Event Triggered Execution: Screensaver"
      }, {
        value: "T1546.003",
        text: "T1546.003 - Event Triggered Execution: Windows Management Instrumentation Event Subscription"
      }, {
        value: "T1546.004",
        text: "T1546.004 - Event Triggered Execution: Unix Shell Configuration Modification"
      }, {
        value: "T1546.005",
        text: "T1546.005 - Event Triggered Execution: Trap"
      }, {
        value: "T1546.006",
        text: "T1546.006 - Event Triggered Execution: LC_LOAD_DYLIB Addition"
      }, {
        value: "T1546.007",
        text: "T1546.007 - Event Triggered Execution: Netsh Helper DLL"
      }, {
        value: "T1546.008",
        text: "T1546.008 - Event Triggered Execution: Accessibility Features"
      }, {
        value: "T1546.009",
        text: "T1546.009 - Event Triggered Execution: AppCert DLLs"
      }, {
        value: "T1546.010",
        text: "T1546.010 - Event Triggered Execution: AppInit DLLs"
      }, {
        value: "T1546.011",
        text: "T1546.011 - Event Triggered Execution: Application Shimming"
      }, {
        value: "T1546.012",
        text: "T1546.012 - Event Triggered Execution: Image File Execution Options Injection"
      }, {
        value: "T1546.013",
        text: "T1546.013 - Event Triggered Execution: PowerShell Profile"
      }, {
        value: "T1546.014",
        text: "T1546.014 - Event Triggered Execution: Emond"
      }, {
        value: "T1546.015",
        text: "T1546.015 - Event Triggered Execution: Component Object Model Hijacking"
      }, {
        value: "T1546.016",
        text: "T1546.016 - Event Triggered Execution: Installer Packages"
      }, {
        value: "T1547.001",
        text: "T1547.001 - Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder"
      }, {
        value: "T1547.002",
        text: "T1547.002 - Boot or Logon Autostart Execution: Authentication Package"
      }, {
        value: "T1547.003",
        text: "T1547.003 - Boot or Logon Autostart Execution: Time Providers"
      }, {
        value: "T1547.004",
        text: "T1547.004 - Boot or Logon Autostart Execution: Winlogon Helper DLL"
      }, {
        value: "T1547.005",
        text: "T1547.005 - Boot or Logon Autostart Execution: Security Support Provider"
      }, {
        value: "T1547.006",
        text: "T1547.006 - Boot or Logon Autostart Execution: Kernel Modules and Extensions"
      }, {
        value: "T1547.007",
        text: "T1547.007 - Boot or Logon Autostart Execution: Re-opened Applications"
      }, {
        value: "T1547.008",
        text: "T1547.008 - Boot or Logon Autostart Execution: LSASS Driver"
      }, {
        value: "T1547.009",
        text: "T1547.009 - Boot or Logon Autostart Execution: Shortcut Modification"
      }, {
        value: "T1547.010",
        text: "T1547.010 - Boot or Logon Autostart Execution: Port Monitors"
      }, {
        value: "T1547.012",
        text: "T1547.012 - Boot or Logon Autostart Execution: Print Processors"
      }, {
        value: "T1547.013",
        text: "T1547.013 - Boot or Logon Autostart Execution: XDG Autostart Entries"
      }, {
        value: "T1547.014",
        text: "T1547.014 - Boot or Logon Autostart Execution: Active Setup"
      }, {
        value: "T1547.015",
        text: "T1547.015 - Boot or Logon Autostart Execution: Login Items"
      }, {
        value: "T1548.001",
        text: "T1548.001 - Abuse Elevation Control Mechanism: Setuid and Setgid"
      }, {
        value: "T1548.002",
        text: "T1548.002 - Abuse Elevation Control Mechanism: Bypass User Account Control"
      }, {
        value: "T1548.003",
        text: "T1548.003 - Abuse Elevation Control Mechanism: Sudo and Sudo Caching"
      }, {
        value: "T1548.004",
        text: "T1548.004 - Abuse Elevation Control Mechanism: Elevated Execution with Prompt"
      }, {
        value: "T1550.001",
        text: "T1550.001 - Use Alternate Authentication Material: Application Access Token"
      }, {
        value: "T1550.002",
        text: "T1550.002 - Use Alternate Authentication Material: Pass the Hash"
      }, {
        value: "T1550.003",
        text: "T1550.003 - Use Alternate Authentication Material: Pass the Ticket"
      }, {
        value: "T1550.004",
        text: "T1550.004 - Use Alternate Authentication Material: Web Session Cookie"
      }, {
        value: "T1552.001",
        text: "T1552.001 - Unsecured Credentials: Credentials In Files"
      }, {
        value: "T1552.002",
        text: "T1552.002 - Unsecured Credentials: Credentials in Registry"
      }, {
        value: "T1552.003",
        text: "T1552.003 - Unsecured Credentials: Bash History"
      }, {
        value: "T1552.004",
        text: "T1552.004 - Unsecured Credentials: Private Keys"
      }, {
        value: "T1552.005",
        text: "T1552.005 - Unsecured Credentials: Cloud Instance Metadata API"
      }, {
        value: "T1552.006",
        text: "T1552.006 - Unsecured Credentials: Group Policy Preferences"
      }, {
        value: "T1552.007",
        text: "T1552.007 - Unsecured Credentials: Container API"
      }, {
        value: "T1553.001",
        text: "T1553.001 - Subvert Trust Controls: Gatekeeper Bypass"
      }, {
        value: "T1553.002",
        text: "T1553.002 - Subvert Trust Controls: Code Signing"
      }, {
        value: "T1553.003",
        text: "T1553.003 - Subvert Trust Controls: SIP and Trust Provider Hijacking"
      }, {
        value: "T1553.004",
        text: "T1553.004 - Subvert Trust Controls: Install Root Certificate"
      }, {
        value: "T1553.005",
        text: "T1553.005 - Subvert Trust Controls: Mark-of-the-Web Bypass"
      }, {
        value: "T1553.006",
        text: "T1553.006 - Subvert Trust Controls: Code Signing Policy Modification"
      }, {
        value: "T1555.001",
        text: "T1555.001 - Credentials from Password Stores: Keychain"
      }, {
        value: "T1555.002",
        text: "T1555.002 - Credentials from Password Stores: Securityd Memory"
      }, {
        value: "T1555.003",
        text: "T1555.003 - Credentials from Password Stores: Credentials from Web Browsers"
      }, {
        value: "T1555.004",
        text: "T1555.004 - Credentials from Password Stores: Windows Credential Manager"
      }, {
        value: "T1555.005",
        text: "T1555.005 - Credentials from Password Stores: Password Managers"
      }, {
        value: "T1556.001",
        text: "T1556.001 - Modify Authentication Process: Domain Controller Authentication"
      }, {
        value: "T1556.002",
        text: "T1556.002 - Modify Authentication Process: Password Filter DLL"
      }, {
        value: "T1556.003",
        text: "T1556.003 - Modify Authentication Process: Pluggable Authentication Modules"
      }, {
        value: "T1556.004",
        text: "T1556.004 - Modify Authentication Process: Network Device Authentication"
      }, {
        value: "T1556.005",
        text: "T1556.005 - Modify Authentication Process: Reversible Encryption"
      }, {
        value: "T1556.006",
        text: "T1556.006 - Modify Authentication Process: Multi-Factor Authentication"
      }, {
        value: "T1556.007",
        text: "T1556.007 - Modify Authentication Process: Hybrid Identity"
      }, {
        value: "T1557.001",
        text: "T1557.001 - Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay"
      }, {
        value: "T1557.002",
        text: "T1557.002 - Adversary-in-the-Middle: ARP Cache Poisoning"
      }, {
        value: "T1557.003",
        text: "T1557.003 - Adversary-in-the-Middle: DHCP Spoofing"
      }, {
        value: "T1558.001",
        text: "T1558.001 - Steal or Forge Kerberos Tickets: Golden Ticket"
      }, {
        value: "T1558.002",
        text: "T1558.002 - Steal or Forge Kerberos Tickets: Silver Ticket"
      }, {
        value: "T1558.003",
        text: "T1558.003 - Steal or Forge Kerberos Tickets: Kerberoasting"
      }, {
        value: "T1558.004",
        text: "T1558.004 - Steal or Forge Kerberos Tickets: AS-REP Roasting"
      }, {
        value: "T1559.001",
        text: "T1559.001 - Inter-Process Communication: Component Object Model"
      }, {
        value: "T1559.002",
        text: "T1559.002 - Inter-Process Communication: Dynamic Data Exchange"
      }, {
        value: "T1559.003",
        text: "T1559.003 - Inter-Process Communication: XPC Services"
      }, {
        value: "T1560.001",
        text: "T1560.001 - Archive Collected Data: Archive via Utility"
      }, {
        value: "T1560.002",
        text: "T1560.002 - Archive Collected Data: Archive via Library"
      }, {
        value: "T1560.003",
        text: "T1560.003 - Archive Collected Data: Archive via Custom Method"
      }, {
        value: "T1561.001",
        text: "T1561.001 - Disk Wipe: Disk Content Wipe"
      }, {
        value: "T1561.002",
        text: "T1561.002 - Disk Wipe: Disk Structure Wipe"
      }, {
        value: "T1562.001",
        text: "T1562.001 - Impair Defenses: Disable or Modify Tools"
      }, {
        value: "T1562.002",
        text: "T1562.002 - Impair Defenses: Disable Windows Event Logging"
      }, {
        value: "T1562.003",
        text: "T1562.003 - Impair Defenses: Impair Command History Logging"
      }, {
        value: "T1562.004",
        text: "T1562.004 - Impair Defenses: Disable or Modify System Firewall"
      }, {
        value: "T1562.006",
        text: "T1562.006 - Impair Defenses: Indicator Blocking"
      }, {
        value: "T1562.007",
        text: "T1562.007 - Impair Defenses: Disable or Modify Cloud Firewall"
      }, {
        value: "T1562.008",
        text: "T1562.008 - Impair Defenses: Disable Cloud Logs"
      }, {
        value: "T1562.009",
        text: "T1562.009 - Impair Defenses: Safe Mode Boot"
      }, {
        value: "T1562.010",
        text: "T1562.010 - Impair Defenses: Downgrade Attack"
      }, {
        value: "T1563.001",
        text: "T1563.001 - Remote Service Session Hijacking: SSH Hijacking"
      }, {
        value: "T1563.002",
        text: "T1563.002 - Remote Service Session Hijacking: RDP Hijacking"
      }, {
        value: "T1564.001",
        text: "T1564.001 - Hide Artifacts: Hidden Files and Directories"
      }, {
        value: "T1564.002",
        text: "T1564.002 - Hide Artifacts: Hidden Users"
      }, {
        value: "T1564.003",
        text: "T1564.003 - Hide Artifacts: Hidden Window"
      }, {
        value: "T1564.004",
        text: "T1564.004 - Hide Artifacts: NTFS File Attributes"
      }, {
        value: "T1564.005",
        text: "T1564.005 - Hide Artifacts: Hidden File System"
      }, {
        value: "T1564.006",
        text: "T1564.006 - Hide Artifacts: Run Virtual Instance"
      }, {
        value: "T1564.007",
        text: "T1564.007 - Hide Artifacts: VBA Stomping"
      }, {
        value: "T1564.008",
        text: "T1564.008 - Hide Artifacts: Email Hiding Rules"
      }, {
        value: "T1564.009",
        text: "T1564.009 - Hide Artifacts: Resource Forking"
      }, {
        value: "T1564.010",
        text: "T1564.010 - Hide Artifacts: Process Argument Spoofing"
      }, {
        value: "T1565.001",
        text: "T1565.001 - Data Manipulation: Stored Data Manipulation"
      }, {
        value: "T1565.002",
        text: "T1565.002 - Data Manipulation: Transmitted Data Manipulation"
      }, {
        value: "T1565.003",
        text: "T1565.003 - Data Manipulation: Runtime Data Manipulation"
      }, {
        value: "T1566.001",
        text: "T1566.001 - Phishing: Spearphishing Attachment"
      }, {
        value: "T1566.002",
        text: "T1566.002 - Phishing: Spearphishing Link"
      }, {
        value: "T1566.003",
        text: "T1566.003 - Phishing: Spearphishing via Service"
      }, {
        value: "T1567.001",
        text: "T1567.001 - Exfiltration Over Web Service: Exfiltration to Code Repository"
      }, {
        value: "T1567.002",
        text: "T1567.002 - Exfiltration Over Web Service: Exfiltration to Cloud Storage"
      }, {
        value: "T1568.001",
        text: "T1568.001 - Dynamic Resolution: Fast Flux DNS"
      }, {
        value: "T1568.002",
        text: "T1568.002 - Dynamic Resolution: Domain Generation Algorithms"
      }, {
        value: "T1568.003",
        text: "T1568.003 - Dynamic Resolution: DNS Calculation"
      }, {
        value: "T1569.001",
        text: "T1569.001 - System Services: Launchctl"
      }, {
        value: "T1569.002",
        text: "T1569.002 - System Services: Service Execution"
      }, {
        value: "T1573.001",
        text: "T1573.001 - Encrypted Channel: Symmetric Cryptography"
      }, {
        value: "T1573.002",
        text: "T1573.002 - Encrypted Channel: Asymmetric Cryptography"
      }, {
        value: "T1574.001",
        text: "T1574.001 - Hijack Execution Flow: DLL Search Order Hijacking"
      }, {
        value: "T1574.002",
        text: "T1574.002 - Hijack Execution Flow: DLL Side-Loading"
      }, {
        value: "T1574.004",
        text: "T1574.004 - Hijack Execution Flow: Dylib Hijacking"
      }, {
        value: "T1574.005",
        text: "T1574.005 - Hijack Execution Flow: Executable Installer File Permissions Weakness"
      }, {
        value: "T1574.006",
        text: "T1574.006 - Hijack Execution Flow: Dynamic Linker Hijacking"
      }, {
        value: "T1574.007",
        text: "T1574.007 - Hijack Execution Flow: Path Interception by PATH Environment Variable"
      }, {
        value: "T1574.008",
        text: "T1574.008 - Hijack Execution Flow: Path Interception by Search Order Hijacking"
      }, {
        value: "T1574.009",
        text: "T1574.009 - Hijack Execution Flow: Path Interception by Unquoted Path"
      }, {
        value: "T1574.010",
        text: "T1574.010 - Hijack Execution Flow: Services File Permissions Weakness"
      }, {
        value: "T1574.011",
        text: "T1574.011 - Hijack Execution Flow: Services Registry Permissions Weakness"
      }, {
        value: "T1574.012",
        text: "T1574.012 - Hijack Execution Flow: COR_PROFILER"
      }, {
        value: "T1574.013",
        text: "T1574.013 - Hijack Execution Flow: KernelCallbackTable"
      }, {
        value: "T1578.001",
        text: "T1578.001 - Modify Cloud Compute Infrastructure: Create Snapshot"
      }, {
        value: "T1578.002",
        text: "T1578.002 - Modify Cloud Compute Infrastructure: Create Cloud Instance"
      }, {
        value: "T1578.003",
        text: "T1578.003 - Modify Cloud Compute Infrastructure: Delete Cloud Instance"
      }, {
        value: "T1578.004",
        text: "T1578.004 - Modify Cloud Compute Infrastructure: Revert Cloud Instance"
      }, {
        value: "T1583.001",
        text: "T1583.001 - Acquire Infrastructure: Domains"
      }, {
        value: "T1583.002",
        text: "T1583.002 - Acquire Infrastructure: DNS Server"
      }, {
        value: "T1583.003",
        text: "T1583.003 - Acquire Infrastructure: Virtual Private Server"
      }, {
        value: "T1583.004",
        text: "T1583.004 - Acquire Infrastructure: Server"
      }, {
        value: "T1583.005",
        text: "T1583.005 - Acquire Infrastructure: Botnet"
      }, {
        value: "T1583.006",
        text: "T1583.006 - Acquire Infrastructure: Web Services"
      }, {
        value: "T1583.007",
        text: "T1583.007 - Acquire Infrastructure: Serverless"
      }, {
        value: "T1584.001",
        text: "T1584.001 - Compromise Infrastructure: Domains"
      }, {
        value: "T1584.002",
        text: "T1584.002 - Compromise Infrastructure: DNS Server"
      }, {
        value: "T1584.003",
        text: "T1584.003 - Compromise Infrastructure: Virtual Private Server"
      }, {
        value: "T1584.004",
        text: "T1584.004 - Compromise Infrastructure: Server"
      }, {
        value: "T1584.005",
        text: "T1584.005 - Compromise Infrastructure: Botnet"
      }, {
        value: "T1584.006",
        text: "T1584.006 - Compromise Infrastructure: Web Services"
      }, {
        value: "T1584.007",
        text: "T1584.007 - Compromise Infrastructure: Serverless"
      }, {
        value: "T1585.001",
        text: "T1585.001 - Establish Accounts: Social Media Accounts"
      }, {
        value: "T1585.002",
        text: "T1585.002 - Establish Accounts: Email Accounts"
      }, {
        value: "T1585.003",
        text: "T1585.003 - Establish Accounts: Cloud Accounts"
      }, {
        value: "T1586.001",
        text: "T1586.001 - Compromise Accounts: Social Media Accounts"
      }, {
        value: "T1586.002",
        text: "T1586.002 - Compromise Accounts: Email Accounts"
      }, {
        value: "T1586.003",
        text: "T1586.003 - Compromise Accounts: Cloud Accounts"
      }, {
        value: "T1587.001",
        text: "T1587.001 - Develop Capabilities: Malware"
      }, {
        value: "T1587.002",
        text: "T1587.002 - Develop Capabilities: Code Signing Certificates"
      }, {
        value: "T1587.003",
        text: "T1587.003 - Develop Capabilities: Digital Certificates"
      }, {
        value: "T1587.004",
        text: "T1587.004 - Develop Capabilities: Exploits"
      }, {
        value: "T1588.001",
        text: "T1588.001 - Obtain Capabilities: Malware"
      }, {
        value: "T1588.002",
        text: "T1588.002 - Obtain Capabilities: Tool"
      }, {
        value: "T1588.003",
        text: "T1588.003 - Obtain Capabilities: Code Signing Certificates"
      }, {
        value: "T1588.004",
        text: "T1588.004 - Obtain Capabilities: Digital Certificates"
      }, {
        value: "T1588.005",
        text: "T1588.005 - Obtain Capabilities: Exploits"
      }, {
        value: "T1588.006",
        text: "T1588.006 - Obtain Capabilities: Vulnerabilities"
      }, {
        value: "T1589.001",
        text: "T1589.001 - Gather Victim Identity Information: Credentials"
      }, {
        value: "T1589.002",
        text: "T1589.002 - Gather Victim Identity Information: Email Addresses"
      }, {
        value: "T1589.003",
        text: "T1589.003 - Gather Victim Identity Information: Employee Names"
      }, {
        value: "T1590.001",
        text: "T1590.001 - Gather Victim Network Information: Domain Properties"
      }, {
        value: "T1590.002",
        text: "T1590.002 - Gather Victim Network Information: DNS"
      }, {
        value: "T1590.003",
        text: "T1590.003 - Gather Victim Network Information: Network Trust Dependencies"
      }, {
        value: "T1590.004",
        text: "T1590.004 - Gather Victim Network Information: Network Topology"
      }, {
        value: "T1590.005",
        text: "T1590.005 - Gather Victim Network Information: IP Addresses"
      }, {
        value: "T1590.006",
        text: "T1590.006 - Gather Victim Network Information: Network Security Appliances"
      }, {
        value: "T1591.001",
        text: "T1591.001 - Gather Victim Org Information: Determine Physical Locations"
      }, {
        value: "T1591.002",
        text: "T1591.002 - Gather Victim Org Information: Business Relationships"
      }, {
        value: "T1591.003",
        text: "T1591.003 - Gather Victim Org Information: Identify Business Tempo"
      }, {
        value: "T1591.004",
        text: "T1591.004 - Gather Victim Org Information: Identify Roles"
      }, {
        value: "T1592.001",
        text: "T1592.001 - Gather Victim Host Information: Hardware"
      }, {
        value: "T1592.002",
        text: "T1592.002 - Gather Victim Host Information: Software"
      }, {
        value: "T1592.003",
        text: "T1592.003 - Gather Victim Host Information: Firmware"
      }, {
        value: "T1592.004",
        text: "T1592.004 - Gather Victim Host Information: Client Configurations"
      }, {
        value: "T1593.001",
        text: "T1593.001 - Search Open Websites/Domains: Social Media"
      }, {
        value: "T1593.002",
        text: "T1593.002 - Search Open Websites/Domains: Search Engines"
      }, {
        value: "T1593.003",
        text: "T1593.003 - Search Open Websites/Domains: Code Repositories"
      }, {
        value: "T1595.001",
        text: "T1595.001 - Active Scanning: Scanning IP Blocks"
      }, {
        value: "T1595.002",
        text: "T1595.002 - Active Scanning: Vulnerability Scanning"
      }, {
        value: "T1595.003",
        text: "T1595.003 - Active Scanning: Wordlist Scanning"
      }, {
        value: "T1596.001",
        text: "T1596.001 - Search Open Technical Databases: DNS/Passive DNS"
      }, {
        value: "T1596.002",
        text: "T1596.002 - Search Open Technical Databases: WHOIS"
      }, {
        value: "T1596.003",
        text: "T1596.003 - Search Open Technical Databases: Digital Certificates"
      }, {
        value: "T1596.004",
        text: "T1596.004 - Search Open Technical Databases: CDNs"
      }, {
        value: "T1596.005",
        text: "T1596.005 - Search Open Technical Databases: Scan Databases"
      }, {
        value: "T1597.001",
        text: "T1597.001 - Search Closed Sources: Threat Intel Vendors"
      }, {
        value: "T1597.002",
        text: "T1597.002 - Search Closed Sources: Purchase Technical Data"
      }, {
        value: "T1598.001",
        text: "T1598.001 - Phishing for Information: Spearphishing Service"
      }, {
        value: "T1598.002",
        text: "T1598.002 - Phishing for Information: Spearphishing Attachment"
      }, {
        value: "T1598.003",
        text: "T1598.003 - Phishing for Information: Spearphishing Link"
      }, {
        value: "T1599.001",
        text: "T1599.001 - Network Boundary Bridging: Network Address Translation Traversal"
      }, {
        value: "T1600.001",
        text: "T1600.001 - Weaken Encryption: Reduce Key Space"
      }, {
        value: "T1600.002",
        text: "T1600.002 - Weaken Encryption: Disable Crypto Hardware"
      }, {
        value: "T1601.001",
        text: "T1601.001 - Modify System Image: Patch System Image"
      }, {
        value: "T1601.002",
        text: "T1601.002 - Modify System Image: Downgrade System Image"
      }, {
        value: "T1602.001",
        text: "T1602.001 - Data from Configuration Repository: SNMP (MIB Dump)"
      }, {
        value: "T1602.002",
        text: "T1602.002 - Data from Configuration Repository: Network Device Configuration Dump"
      }, {
        value: "T1606.001",
        text: "T1606.001 - Forge Web Credentials: Web Cookies"
      }, {
        value: "T1606.002",
        text: "T1606.002 - Forge Web Credentials: SAML Tokens"
      }, {
        value: "T1608.001",
        text: "T1608.001 - Stage Capabilities: Upload Malware"
      }, {
        value: "T1608.002",
        text: "T1608.002 - Stage Capabilities: Upload Tool"
      }, {
        value: "T1608.003",
        text: "T1608.003 - Stage Capabilities: Install Digital Certificate"
      }, {
        value: "T1608.004",
        text: "T1608.004 - Stage Capabilities: Drive-by Target"
      }, {
        value: "T1608.005",
        text: "T1608.005 - Stage Capabilities: Link Target"
      }, {
        value: "T1608.006",
        text: "T1608.006 - Stage Capabilities: SEO Poisoning"
      }, {
        value: "T1614.001",
        text: "T1614.001 - System Location Discovery: System Language Discovery"
      }]
    };

    var ce =
    /*#__PURE__*/
    function () {
      function ce(e) {
        var _this34 = this;

        _classCallCheck(this, ce);

        this.property = e, this.onTechniqueUpdate = this._onTechniqueUpdate.bind(this), e.on("insert-row", function (e, t) {
          return _this34.subscribeRow(t);
        }), e.on("delete-row", function (e, t) {
          return _this34.unsubscribeRow(t);
        });
      }

      _createClass(ce, [{
        key: "subscribeRow",
        value: function subscribeRow(e) {
          var _this$getAttackFields = this.getAttackFieldsFromRow(e),
              _this$getAttackFields2 = _slicedToArray(_this$getAttackFields, 2),
              t = _this$getAttackFields2[0],
              i = _this$getAttackFields2[1];

          t.on("update", this.onTechniqueUpdate), i.on("update", this.onTechniqueUpdate), this._onTechniqueUpdate(e[0]);
        }
      }, {
        key: "unsubscribeRow",
        value: function unsubscribeRow(e) {
          var _this$getAttackFields3 = this.getAttackFieldsFromRow(e),
              _this$getAttackFields4 = _slicedToArray(_this$getAttackFields3, 2),
              t = _this$getAttackFields4[0],
              i = _this$getAttackFields4[1];

          t.off("update", this.onTechniqueUpdate), i.off("update", this.onTechniqueUpdate);
        }
      }, {
        key: "_onTechniqueUpdate",
        value: function _onTechniqueUpdate(e) {
          var _this$lookupAttackFie = this.lookupAttackFields(e),
              _this$lookupAttackFie2 = _slicedToArray(_this$lookupAttackFie, 3),
              t = _this$lookupAttackFie2[0],
              i = _this$lookupAttackFie2[1],
              a = _this$lookupAttackFie2[2];

          i.value ? a.value = "https://d3fend.mitre.org/offensive-technique/attack/".concat(i.value, "/") : t.value ? a.value = "https://d3fend.mitre.org/offensive-technique/attack/".concat(t.value, "/") : a.value = "";
        }
      }, {
        key: "lookupAttackFields",
        value: function lookupAttackFields(e) {
          var t;
          var _iteratorNormalCompletion30 = true;
          var _didIteratorError30 = false;
          var _iteratorError30 = undefined;

          try {
            for (var _iterator30 = this.property.value.values()[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
              var _i27 = _step30.value;

              if (_i27.includes(e)) {
                t = _i27;
                break;
              }
            }
          } catch (err) {
            _didIteratorError30 = true;
            _iteratorError30 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
                _iterator30["return"]();
              }
            } finally {
              if (_didIteratorError30) {
                throw _iteratorError30;
              }
            }
          }

          return this.getAttackFieldsFromRow(t);
        }
      }, {
        key: "getAttackFieldsFromRow",
        value: function getAttackFieldsFromRow(e) {
          return [e.find(function (e) {
            return "technique" === e.id;
          }), e.find(function (e) {
            return "sub_technique" === e.id;
          }), e.find(function (e) {
            return "defend" === e.id;
          })];
        }
      }]);

      return ce;
    }();

    var ue = {
      TA0001: ["T1078", "T1091", "T1133", "T1189", "T1190", "T1195", "T1199", "T1200", "T1566"],
      TA0002: ["T1047", "T1053", "T1059", "T1072", "T1106", "T1129", "T1203", "T1204", "T1559", "T1569", "T1609", "T1610", "T1648"],
      TA0003: ["T1037", "T1053", "T1078", "T1098", "T1133", "T1136", "T1137", "T1176", "T1197", "T1205", "T1505", "T1525", "T1542", "T1543", "T1546", "T1547", "T1554", "T1556", "T1574"],
      TA0004: ["T1037", "T1053", "T1055", "T1068", "T1078", "T1134", "T1484", "T1543", "T1546", "T1547", "T1548", "T1574", "T1611"],
      TA0005: ["T1006", "T1014", "T1027", "T1036", "T1055", "T1070", "T1078", "T1112", "T1127", "T1134", "T1140", "T1197", "T1202", "T1205", "T1207", "T1211", "T1216", "T1218", "T1220", "T1221", "T1222", "T1480", "T1484", "T1497", "T1535", "T1542", "T1548", "T1550", "T1553", "T1556", "T1562", "T1564", "T1574", "T1578", "T1599", "T1600", "T1601", "T1610", "T1612", "T1620", "T1622", "T1647"],
      TA0006: ["T1003", "T1040", "T1056", "T1110", "T1111", "T1187", "T1212", "T1528", "T1539", "T1552", "T1555", "T1556", "T1557", "T1558", "T1606", "T1621", "T1649"],
      TA0007: ["T1007", "T1010", "T1012", "T1016", "T1018", "T1033", "T1040", "T1046", "T1049", "T1057", "T1069", "T1082", "T1083", "T1087", "T1120", "T1124", "T1135", "T1201", "T1217", "T1482", "T1497", "T1518", "T1526", "T1538", "T1580", "T1613", "T1614", "T1615", "T1619", "T1622"],
      TA0008: ["T1021", "T1072", "T1080", "T1091", "T1210", "T1534", "T1550", "T1563", "T1570"],
      TA0009: ["T1005", "T1025", "T1039", "T1056", "T1074", "T1113", "T1114", "T1115", "T1119", "T1123", "T1125", "T1185", "T1213", "T1530", "T1557", "T1560", "T1602"],
      TA0010: ["T1011", "T1020", "T1029", "T1030", "T1041", "T1048", "T1052", "T1537", "T1567"],
      TA0011: ["T1001", "T1008", "T1071", "T1090", "T1092", "T1095", "T1102", "T1104", "T1105", "T1132", "T1205", "T1219", "T1568", "T1571", "T1572", "T1573"],
      TA0040: ["T1485", "T1486", "T1489", "T1490", "T1491", "T1495", "T1496", "T1498", "T1499", "T1529", "T1531", "T1561", "T1565"],
      TA0042: ["T1583", "T1584", "T1585", "T1586", "T1587", "T1588", "T1608"],
      TA0043: ["T1589", "T1590", "T1591", "T1592", "T1593", "T1594", "T1595", "T1596", "T1597", "T1598"]
    },
        pe = {
      T1595: ["001", "002", "003"],
      T1592: ["001", "002", "003", "004"],
      T1589: ["001", "002", "003"],
      T1590: ["001", "002", "003", "004", "005", "006"],
      T1591: ["001", "002", "003", "004"],
      T1598: ["001", "002", "003"],
      T1597: ["001", "002"],
      T1596: ["001", "002", "003", "004", "005"],
      T1593: ["001", "002", "003"],
      T1583: ["001", "002", "003", "004", "005", "006", "007"],
      T1586: ["001", "002", "003"],
      T1584: ["001", "002", "003", "004", "005", "006", "007"],
      T1587: ["001", "002", "003", "004"],
      T1585: ["001", "002", "003"],
      T1588: ["001", "002", "003", "004", "005", "006"],
      T1608: ["001", "002", "003", "004", "005", "006"],
      T1566: ["001", "002", "003"],
      T1195: ["001", "002", "003"],
      T1078: ["001", "002", "003", "004"],
      T1059: ["001", "002", "003", "004", "005", "006", "007", "008"],
      T1559: ["001", "002", "003"],
      T1053: ["002", "003", "005", "006", "007"],
      T1569: ["001", "002"],
      T1204: ["001", "002", "003"],
      T1098: ["001", "002", "003", "004", "005"],
      T1547: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "01", "010", "012", "013", "014", "015"],
      T1037: ["001", "002", "003", "004", "005"],
      T1136: ["001", "002", "003"],
      T1543: ["001", "002", "003", "004"],
      T1546: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "01", "011", "012", "013", "014", "015", "016"],
      T1574: ["001", "002", "004", "005", "006", "007", "008", "009", "01", "011", "012", "013"],
      T1556: ["001", "002", "003", "004", "005", "006", "007"],
      T1137: ["001", "002", "003", "004", "005", "006"],
      T1542: ["001", "002", "003", "004", "005"],
      T1505: ["001", "002", "003", "004", "005"],
      T1205: ["001", "002"],
      T1548: ["001", "002", "003", "004"],
      T1134: ["001", "002", "003", "004", "005"],
      T1484: ["001", "002"],
      T1055: ["001", "002", "003", "004", "005", "008", "009", "011", "012", "013", "014", "015"],
      T1480: ["001"],
      T1222: ["001", "002"],
      T1564: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "01"],
      T1562: ["001", "002", "003", "004", "006", "007", "008", "009", "01"],
      T1070: ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
      T1036: ["001", "002", "003", "004", "005", "006", "007"],
      T1578: ["001", "002", "003", "004"],
      T1601: ["001", "002"],
      T1599: ["001"],
      T1027: ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
      T1553: ["001", "002", "003", "004", "005", "006"],
      T1218: ["001", "002", "003", "004", "005", "007", "008", "009", "01", "011", "012", "013", "014"],
      T1216: ["001"],
      T1127: ["001"],
      T1550: ["001", "002", "003", "004"],
      T1497: ["001", "002", "003"],
      T1600: ["001", "002"],
      T1557: ["001", "002", "003"],
      T1110: ["001", "002", "003", "004"],
      T1555: ["001", "002", "003", "004", "005"],
      T1606: ["001", "002"],
      T1056: ["001", "002", "003", "004"],
      T1003: ["001", "002", "003", "004", "005", "006", "007", "008"],
      T1558: ["001", "002", "003", "004"],
      T1552: ["001", "002", "003", "004", "005", "006", "007"],
      T1087: ["001", "002", "003", "004"],
      T1069: ["001", "002", "003"],
      T1518: ["001"],
      T1614: ["001"],
      T1016: ["001"],
      T1563: ["001", "002"],
      T1021: ["001", "002", "003", "004", "005", "006"],
      T1560: ["001", "002", "003"],
      T1602: ["001", "002"],
      T1213: ["001", "002", "003"],
      T1074: ["001", "002"],
      T1114: ["001", "002", "003"],
      T1071: ["001", "002", "003", "004"],
      T1132: ["001", "002"],
      T1001: ["001", "002", "003"],
      T1568: ["001", "002", "003"],
      T1573: ["001", "002"],
      T1090: ["001", "002", "003", "004"],
      T1102: ["001", "002", "003"],
      T1020: ["001"],
      T1048: ["001", "002", "003"],
      T1011: ["001"],
      T1052: ["001"],
      T1567: ["001", "002"],
      T1565: ["001", "002", "003"],
      T1491: ["001", "002"],
      T1561: ["001", "002"],
      T1499: ["001", "002", "003", "004"],
      T1498: ["001", "002"]
    };

    function de(e) {
      for (var _t16 in ue) {
        if (ue[_t16].includes(e)) return _t16;
      }
    }

    function he(e) {
      var t;
      return (t = /(T[0-9]{4})\.[0-9]{3}/i.exec(e)) ? t[1] : void 0;
    }

    var ve =
    /*#__PURE__*/
    function () {
      function ve(e, t) {
        var _this35 = this;

        _classCallCheck(this, ve);

        e.registerAction("import-attack-flow", "Import from Attack Flow", function () {
          V["a"].openTextFileDialog().then(function (i) {
            var a = i.contents;
            null !== a && void 0 !== a || console.error("Error: could not contents of file: '".concat(i.filename, "'."));

            var n = JSON.parse(a),
                o = _this35.extractMitreAttackData(n),
                s = [];

            var _iteratorNormalCompletion31 = true;
            var _didIteratorError31 = false;
            var _iteratorError31 = undefined;

            try {
              for (var _iterator31 = o[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                var _t17 = _step31.value;
                s.push(U["d"](e, _t17));
              }
            } catch (err) {
              _didIteratorError31 = true;
              _iteratorError31 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
                  _iterator31["return"]();
                }
              } finally {
                if (_didIteratorError31) {
                  throw _iteratorError31;
                }
              }
            }

            t.emit.apply(t, ["execute"].concat(s));
          });
        });
      }

      _createClass(ve, [{
        key: "extractMitreAttackData",
        value: function extractMitreAttackData(e) {
          var t;
          var i,
              a = ve.TACTIC_REGEX,
              n = ve.TECHNIQUE_REGEX,
              o = [];
          var _iteratorNormalCompletion32 = true;
          var _didIteratorError32 = false;
          var _iteratorError32 = undefined;

          try {
            for (var _iterator32 = (null !== (t = e.objects) && void 0 !== t ? t : [])[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
              var _s5 = _step32.value;

              if ("attack-action" === _s5.type) {
                if (_s5.technique_id && (i = n.exec(_s5.technique_id))) {
                  if (i[1]) {
                    var _e18 = i[1].toLocaleUpperCase(),
                        _t18 = he(_e18),
                        _a8 = de(_t18);

                    o.push({
                      tactic: _a8,
                      technique: _t18,
                      sub_technique: _e18
                    });
                    continue;
                  }

                  if (i[2]) {
                    var _e19 = i[2].toLocaleUpperCase(),
                        _t19 = de(_e19);

                    o.push({
                      tactic: _t19,
                      technique: _e19
                    });
                    continue;
                  }
                }

                _s5.tactic_id && (i = a.exec(_s5.tactic_id)) && o.push({
                  tactic: i[0].toLocaleUpperCase()
                });
              }
            }
          } catch (err) {
            _didIteratorError32 = true;
            _iteratorError32 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
                _iterator32["return"]();
              }
            } finally {
              if (_didIteratorError32) {
                throw _iteratorError32;
              }
            }
          }

          return o;
        }
      }]);

      return ve;
    }();

    ve.TACTIC_REGEX = /TA[0-9]{4}/i, ve.TECHNIQUE_REGEX = /(T[0-9]{4}\.[0-9]{3})|(T[0-9]{4})/i;

    var Te =
    /*#__PURE__*/
    function () {
      function Te(e) {
        var _this36 = this;

        _classCallCheck(this, Te);

        this.property = e, this.onTacticUpdate = this._onTacticUpdate.bind(this), this.onTechniqueUpdate = this._onTechniqueUpdate.bind(this), e.on("insert-row", function (e, t) {
          return _this36.subscribeRow(t);
        }), e.on("delete-row", function (e, t) {
          return _this36.unsubscribeRow(t);
        });
      }

      _createClass(Te, [{
        key: "subscribeRow",
        value: function subscribeRow(e) {
          var _this$getAttackFields5 = this.getAttackFieldsFromRow(e),
              _this$getAttackFields6 = _slicedToArray(_this$getAttackFields5, 2),
              t = _this$getAttackFields6[0],
              i = _this$getAttackFields6[1];

          t.on("update", this.onTacticUpdate), i.on("update", this.onTechniqueUpdate), this._onTacticUpdate(e[0]), this._onTechniqueUpdate(e[0]);
        }
      }, {
        key: "unsubscribeRow",
        value: function unsubscribeRow(e) {
          var _this$getAttackFields7 = this.getAttackFieldsFromRow(e),
              _this$getAttackFields8 = _slicedToArray(_this$getAttackFields7, 2),
              t = _this$getAttackFields8[0],
              i = _this$getAttackFields8[1];

          t.off("update", this.onTacticUpdate), i.off("update", this.onTechniqueUpdate);
        }
      }, {
        key: "_onTacticUpdate",
        value: function _onTacticUpdate(e) {
          var _this$lookupAttackFie3 = this.lookupAttackFields(e),
              _this$lookupAttackFie4 = _slicedToArray(_this$lookupAttackFie3, 3),
              t = _this$lookupAttackFie4[0],
              i = _this$lookupAttackFie4[1],
              a = _this$lookupAttackFie4[2];

          this.updateTechniqueRestrictions(t, i), this.updateSubTechniqueRestrictions(t, i, a);
        }
      }, {
        key: "_onTechniqueUpdate",
        value: function _onTechniqueUpdate(e) {
          var _this$lookupAttackFie5 = this.lookupAttackFields(e),
              _this$lookupAttackFie6 = _slicedToArray(_this$lookupAttackFie5, 3),
              t = _this$lookupAttackFie6[0],
              i = _this$lookupAttackFie6[1],
              a = _this$lookupAttackFie6[2];

          this.updateSubTechniqueRestrictions(t, i, a);
        }
      }, {
        key: "updateTechniqueRestrictions",
        value: function updateTechniqueRestrictions(e, t) {
          if (null !== e.value) {
            var _i28 = ue[e.value];
            t.restrictOptions(_i28);
          } else t.unrestrictOptions();
        }
      }, {
        key: "updateSubTechniqueRestrictions",
        value: function updateSubTechniqueRestrictions(e, t, i) {
          if (null !== t.value) {
            var _e20 = pe[t.value];
            _e20 ? (_e20 = _e20.map(function (e) {
              return "".concat(t.value, ".").concat(e);
            }), i.restrictOptions(_e20)) : i.restrictOptions([]);
          } else if (null !== e.value) {
            var _a9 = ue[e.value];
            t.restrictOptions(_a9);
            var _n7 = [];
            var _iteratorNormalCompletion33 = true;
            var _didIteratorError33 = false;
            var _iteratorError33 = undefined;

            try {
              var _loop3 = function _loop3() {
                var e = _step33.value;
                e in pe && (_n7 = _n7.concat(pe[e].map(function (t) {
                  return "".concat(e, ".").concat(t);
                })));
              };

              for (var _iterator33 = _a9[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                _loop3();
              }
            } catch (err) {
              _didIteratorError33 = true;
              _iteratorError33 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
                  _iterator33["return"]();
                }
              } finally {
                if (_didIteratorError33) {
                  throw _iteratorError33;
                }
              }
            }

            i.restrictOptions(_n7);
          } else i.unrestrictOptions();
        }
      }, {
        key: "lookupAttackFields",
        value: function lookupAttackFields(e) {
          var t;
          var _iteratorNormalCompletion34 = true;
          var _didIteratorError34 = false;
          var _iteratorError34 = undefined;

          try {
            for (var _iterator34 = this.property.value.values()[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
              var _i29 = _step34.value;

              if (_i29.includes(e)) {
                t = _i29;
                break;
              }
            }
          } catch (err) {
            _didIteratorError34 = true;
            _iteratorError34 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) {
                _iterator34["return"]();
              }
            } finally {
              if (_didIteratorError34) {
                throw _iteratorError34;
              }
            }
          }

          return this.getAttackFieldsFromRow(t);
        }
      }, {
        key: "getAttackFieldsFromRow",
        value: function getAttackFieldsFromRow(e) {
          return [e.find(function (e) {
            return "tactic" === e.id;
          }), e.find(function (e) {
            return "technique" === e.id;
          }), e.find(function (e) {
            return "sub_technique" === e.id;
          })];
        }
      }]);

      return Te;
    }();

    var me = {
      id: "mitre_attack_table",
      name: "EMPTY",
      path: "*.mitre_attack_table",
      type: a["c"].String,
      layout: {
        summary: "{{ attribution }}\n**{{ tactic }} :: {{ technique }}**",
        rows: 5,
        cols: 2
      },
      plugins: [{
        module: Te
      }, {
        module: ve
      }, {
        module: ce
      }],
      properties: [Object.assign(Object.assign({}, o), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, j), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, re), {
        row: 2,
        col: [1, 2]
      }), Object.assign(Object.assign({}, le), {
        row: 3,
        col: [1, 2]
      }), Object.assign(Object.assign({}, se), {
        row: [4, 5],
        col: 1
      }), Object.assign(Object.assign({}, oe), {
        row: 4,
        col: 2
      }), Object.assign(Object.assign({}, ne), {
        row: 5,
        col: 2
      })]
    },
        ge = {
      id: "mitre_attack",
      name: "EMPTY",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, me), {
        row: 1,
        col: 1
      })]
    },
        xe = {
      id: "executive_summary",
      name: "Executive Summary",
      path: "*.executive_summary",
      type: a["c"].String
    },
        be = {
      id: "executive_summary",
      name: "Executive Summary",
      layout: {
        rows: 4,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, xe), {
        row: [1, 4],
        col: 1
      })]
    },
        fe = {
      id: "infrastructure",
      name: "Infrastructure",
      type: a["c"].String
    },
        ye = {
      id: "threat_actor_motivation",
      name: "Motivation",
      type: a["c"].Enum,
      options: [{
        value: "Espionage",
        text: "Cyber Espionage"
      }, {
        value: "Data Theft",
        text: "Data Theft"
      }, {
        value: "Cyber Crime",
        text: "Cyber Crime"
      }, {
        value: "Ransomware",
        text: "Ransomware"
      }, {
        value: "Destructive Attack",
        text: "Destructive Attack"
      }, {
        value: "Hacktivism",
        text: "Hacktivism"
      }, {
        value: "Unknown",
        text: "Unknown"
      }]
    },
        Oe = {
      id: "threat_actor_name",
      name: "Threat Actor Name",
      type: a["c"].String
    },
        Se = {
      id: "threat_actor_aliases",
      name: "Threat Actor Aliases",
      type: a["c"].String
    },
        we = {
      id: "threat_actors",
      name: "Threat Actors",
      type: a["c"].BasicTable,
      layout: {
        cols: 3
      },
      properties: [Object.assign(Object.assign({}, Oe), {
        row: 0,
        col: 1
      }), Object.assign(Object.assign({}, Se), {
        row: 0,
        col: [2, 3]
      })]
    },
        je = {
      id: "metadata",
      name: "Metadata",
      path: "*.metadata",
      layout: {
        rows: 5,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, we), {
        row: 1,
        col: 1
      }), {
        id: "victim_location",
        name: "Victim Location",
        type: a["c"].String
      }, {
        id: "sectors",
        name: "Sectors",
        type: a["c"].BasicTable,
        row: 3,
        col: 1,
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, R), {
          row: 0,
          col: 1
        })]
      }, {
        id: "infrastructure_used",
        name: "Infrastructure Used",
        type: a["c"].BasicTable,
        row: 4,
        col: 1,
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, fe), {
          row: 0,
          col: 1
        })]
      }, {
        id: "threat_actor_motivation",
        name: "Threat Actor Motivation",
        type: a["c"].BasicTable,
        row: 5,
        col: 1,
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, ye), {
          row: 0,
          col: 1
        })]
      }]
    },
        Ae = {
      id: "intelligence_gaps",
      name: "Key Intelligence Gaps",
      path: "*.intelligence_gaps",
      type: a["c"].String
    },
        _e = {
      id: "key_intelligence_gaps",
      name: "Key Intelligence Gaps",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, Ae), {
        row: 1,
        col: 1
      })]
    },
        Ce = {
      id: "intelligence_requirement",
      name: "Intelligence Requirement",
      type: a["c"].String,
      options: [{
        value: "S-TA-1",
        text: "S-TA-1 Nation state activity related to China"
      }, {
        value: "S-TA-2",
        text: "S-TA-2 Nation state activity related to Russia"
      }, {
        value: "S-TA-3",
        text: "S-TA-2 Nation state activity related to Iran"
      }, {
        value: "S-TA-4",
        text: "S-TA-2 Nation state activity related to DPRK"
      }, {
        value: "OP-1",
        text: "OP-1 Operational Activity related to Ransomware"
      }, {
        value: "OP-2",
        text: "OP-2 Operational Activity related to Banking Trojans"
      }, {
        value: "OP-3",
        text: "OP-3 Operational Activity related to Initial Access Brokers"
      }, {
        value: "TAC-1",
        text: "TAC-1 New technical developments related to initial access"
      }, {
        value: "TAC-2",
        text: "TAC-2 New technical developments related to 0day vulnerabilities"
      }, {
        value: "TAC-3",
        text: "TAC-3 New technical developments related to MFA bypass"
      }]
    },
        Ie = {
      id: "intelligence_requirements",
      name: "Intelligence Requirements",
      path: "*.intelligence_requirements",
      type: a["c"].BasicTable,
      layout: {
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, Ce), {
        row: 0,
        col: 1
      })]
    },
        Pe = {
      id: "intelligence_requirements",
      name: "Intelligence Requirements",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign({
        row: 1,
        col: 1
      }, Ie)]
    },
        ke = {
      id: "a2d30a3c-49b5-42e5-a4cb-649009fa4c9d",
      name: "Campaign Report",
      keys: ["general.report_title"],
      plugins: {
        global: (_global = {}, _defineProperty(_global, a["b"].StringProperty, [{
          module: q
        }]), _defineProperty(_global, a["b"].BasicTableProperty, [{
          module: $
        }]), _defineProperty(_global, a["b"].ComplexTableProperty, [{
          module: $
        }]), _global)
      },
      sections: [Object.assign({
        name: "Campaign Report"
      }, D), be, W, Z, _e, ge, G, C, Q, Pe, ae, je],
      description: "Change: The Campaign Report is designed to highlight new information related to a threat actor or capabilities. This should focus on new information and highlight how it poses a changed risk to your organization."
    },
        Me = {
      id: "outlook",
      name: "Outlook",
      path: "*.outlook",
      type: a["c"].String
    },
        Ee = {
      id: "outlook",
      name: "Outlook",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, Me), {
        row: 1,
        col: 1
      })]
    },
        De = {
      id: "790fc5be-f24c-4fd7-a7e1-20a761c37812",
      name: "Executive Report",
      keys: ["general.report_title"],
      plugins: {
        global: (_global2 = {}, _defineProperty(_global2, a["b"].StringProperty, [{
          module: q
        }]), _defineProperty(_global2, a["b"].BasicTableProperty, [{
          module: $
        }]), _defineProperty(_global2, a["b"].ComplexTableProperty, [{
          module: $
        }]), _global2)
      },
      sections: [Object.assign({
        name: "Executive Report"
      }, D), be, W, Z, Ee, _e, Pe, ae],
      description: "Inform: The Executive Report is designed to inform senior decision makers about a particular risk. This should be focused on executive audiences and in support of strategic problems. It will focus on why and how, rather than what and when."
    },
        Re = {
      id: "indicator_analysis",
      path: "*.indicator_analysis",
      name: "Indicator Analysis",
      type: a["c"].String
    },
        Ne = {
      id: "indicator_analysis",
      name: "Indicator Analysis",
      layout: {
        rows: 7,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, Re), {
        row: [1, 7],
        col: 1
      })]
    },
        Fe = {
      id: "mitre_attack_table",
      name: "MITRE ATT&CK Table",
      type: a["c"].ComplexTable,
      layout: {
        summary: "{{ tactic }}\n**{{ technique }}**",
        rows: 4,
        cols: 2
      },
      plugins: [{
        module: Te
      }, {
        module: ve
      }, {
        module: ce
      }],
      properties: [Object.assign(Object.assign({}, j), {
        row: 1,
        col: [1, 2]
      }), Object.assign(Object.assign({}, re), {
        row: 2,
        col: [1, 2]
      }), Object.assign(Object.assign({}, le), {
        row: 3,
        col: [1, 2]
      }), Object.assign(Object.assign({}, se), {
        row: 4,
        col: 1
      }), Object.assign(Object.assign({}, ne), {
        row: 4,
        col: 2
      })]
    },
        Le = {
      id: "mitre_attack",
      name: "MITRE ATT&CK",
      layout: {
        rows: 2,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, me), {
        id: "mitre_attack_table_likely_in_network",
        path: "*.mitre_attack_table.likely_in_network",
        name: "TTPs Likely to Be in the Network",
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, Fe), {
        id: "mitre_attack_table_observed",
        path: "*.mitre_attack_table.observed",
        name: "TTPs Observed in the Intrusion",
        row: 2,
        col: 1
      })]
    },
        Be = {
      id: "metadata",
      name: "Metadata",
      path: "*.metadata",
      layout: {
        rows: 2,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, we), {
        row: 1,
        col: 1
      }), {
        id: "threat_actor_motivation",
        name: "Threat Actor Motivation",
        type: a["c"].BasicTable,
        row: 2,
        col: 1,
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, ye), {
          row: 0,
          col: 1
        })]
      }]
    },
        He = {
      id: "99664720-25a7-474f-b4ea-a6db68039203",
      name: "Intrusion Analysis Report",
      keys: ["general.report_title"],
      plugins: {
        global: (_global3 = {}, _defineProperty(_global3, a["b"].StringProperty, [{
          module: q
        }]), _defineProperty(_global3, a["b"].BasicTableProperty, [{
          module: $
        }]), _defineProperty(_global3, a["b"].ComplexTableProperty, [{
          module: $
        }]), _global3)
      },
      sections: [Object.assign({
        name: "Intrusion Analysis Report"
      }, D), be, W, Ne, Le, C, Q, Pe, ae, Be],
      description: "Find: The Intrusion Analysis Report is designed to be used in support of active hunting and incident response operations. This report should be treated as an iterative document that focuses more on speed to publication than completeness of information."
    },
        Ge = {
      id: "victim_name",
      name: "Victim Name",
      type: a["c"].String
    },
        Ue = {
      id: "location",
      name: "Location",
      type: a["c"].String
    },
        Ve = {
      id: "victims",
      name: "EMPTY",
      path: "*.victims",
      type: a["c"].ComplexTable,
      layout: {
        summary: "{{ victim_name }}\n**{{ location_region }} :: {{ sector }}**",
        rows: 3,
        cols: 2
      },
      properties: [Object.assign(Object.assign({}, Ge), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, r), {
        row: 1,
        col: 2
      }), Object.assign(Object.assign({}, R), {
        row: 2,
        col: [1, 2]
      }), Object.assign(Object.assign({}, Ue), {
        id: "location_granular",
        name: "City / State / Province / etc.",
        row: 3,
        col: 1
      }), Object.assign(Object.assign({}, F), {
        id: "location_region",
        name: "Country / Region",
        row: 3,
        col: 2
      })]
    },
        ze = {
      id: "victims",
      name: "EMPTY",
      layout: {
        rows: 1,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, Ve), {
        row: 1,
        col: 1
      })]
    },
        $e = {
      id: "threat_actor_ttp",
      name: "Tactics, Techniques, & Procedures",
      path: "*.threat_actor.ttp",
      type: a["c"].String
    },
        Ye = {
      id: "threat_actor_victims",
      name: "Victims",
      path: "*.threat_actor.victims",
      type: a["c"].String
    },
        We = {
      id: "threat_actor_summary",
      name: "Threat Actor Summary",
      path: "*.threat_actor.summary",
      type: a["c"].String
    },
        qe = {
      id: "threat_actor_attribution",
      name: "Attribution",
      path: "*.threat_actor.attribution",
      type: a["c"].String
    },
        Ke = {
      id: "threat_actor_infrastructure",
      name: "Infrastructure",
      path: "*.threat_actor.infrastructure",
      type: a["c"].String
    },
        Ze = {
      id: "threat_actor_summary",
      name: "Threat Actor Summary",
      layout: {
        rows: 5,
        cols: 1
      },
      properties: [Object.assign(Object.assign({}, We), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, $e), {
        row: 2,
        col: 1
      }), Object.assign(Object.assign({}, Ke), {
        row: 3,
        col: 1
      }), Object.assign(Object.assign({}, Ye), {
        row: 4,
        col: 1
      }), Object.assign(Object.assign({}, qe), {
        row: 5,
        col: 1
      })]
    },
        Je = {
      id: "metadata",
      name: "Threat Actor Profile",
      path: "*.metadata",
      layout: {
        rows: 5,
        cols: 3
      },
      properties: [Object.assign(Object.assign({}, Oe), {
        row: 1,
        col: 1
      }), Object.assign(Object.assign({}, Se), {
        row: 1,
        col: [2, 3]
      }), {
        id: "victim_location",
        name: "Victim Location",
        type: a["c"].String,
        row: 2,
        col: [1, 3],
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, F), {
          row: 0,
          col: 1
        })]
      }, {
        id: "sectors",
        name: "Sectors",
        type: a["c"].BasicTable,
        row: 3,
        col: [1, 3],
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, R), {
          row: 0,
          col: 1
        })]
      }, {
        id: "threat_actor_motivation",
        name: "Threat Actor Motivation",
        type: a["c"].String,
        row: 4,
        col: [1, 3],
        layout: {
          cols: 1
        },
        properties: [Object.assign(Object.assign({}, fe), {
          row: 0,
          col: 1
        })]
      }]
    },
        Xe = {
      id: "e4e907ac-f845-4b51-a73f-ab511456ce74",
      name: "Threat Actor Profile",
      keys: ["general.report_title"],
      plugins: {
        global: (_global4 = {}, _defineProperty(_global4, a["b"].StringProperty, [{
          module: q
        }]), _defineProperty(_global4, a["b"].BasicTableProperty, [{
          module: $
        }]), _defineProperty(_global4, a["b"].ComplexTableProperty, [{
          module: $
        }]), _global4)
      },
      sections: [Object.assign({
        name: "Threat Actor Profile"
      }, D), be, W, Z, Ze, G, _e, ge, ze, C, Q, Pe, ae, Je],
      description: "Know: The Threat Actor Report is designed to be an encyclopedia for the organization for a given threat actor or category of activity. This report should be treated as a living document that should be maintained on a periodic basis by the intelligence team."
    },
        Qe = {
      is_web_hosted: !1,
      file_type_name: "CTI Template",
      file_type_extension: "json",
      branding: {
        product: "./product.png",
        organization: "./organization.png"
      },
      templates: [Xe, ke, He, De],
      menus: {
        help_menu: {
          help_links: [{
            text: "GitHub Repository",
            url: "https://github.com/center-for-threat-informed-defense/cti-blueprints"
          }, {
            text: "Change Log",
            url: "https://github.com/center-for-threat-informed-defense/cti-blueprints/blob/main/src/cti_authoring_tool/CHANGELOG.md"
          }]
        }
      }
    };
    t["default"] = Qe;
  },
  7770: function _(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n["a"];
    }), i.d(t, "b", function () {
      return a;
    });
    var a,
        n = i("0b94");

    (function (e) {
      e[e["String"] = 0] = "String", e[e["Integer"] = 1] = "Integer", e[e["Float"] = 2] = "Float", e[e["Time"] = 3] = "Time", e[e["Date"] = 4] = "Date", e[e["DateTime"] = 5] = "DateTime", e[e["Enum"] = 6] = "Enum", e[e["BasicTable"] = 7] = "BasicTable", e[e["ComplexTable"] = 8] = "ComplexTable";
    })(a || (a = {}));
  },
  "7aa9": function aa9(e, t, i) {
    "use strict";

    i.d(t, "f", function () {
      return o;
    }), i.d(t, "d", function () {
      return v;
    }), i.d(t, "e", function () {
      return m;
    }), i.d(t, "o", function () {
      return g;
    }), i.d(t, "l", function () {
      return x;
    }), i.d(t, "k", function () {
      return b;
    }), i.d(t, "n", function () {
      return O;
    }), i.d(t, "j", function () {
      return S;
    }), i.d(t, "g", function () {
      return _;
    }), i.d(t, "a", function () {
      return C;
    }), i.d(t, "c", function () {
      return I;
    }), i.d(t, "h", function () {
      return M;
    }), i.d(t, "b", function () {
      return E;
    }), i.d(t, "i", function () {
      return N;
    }), i.d(t, "m", function () {
      return F;
    });

    var a = function a() {
      _classCallCheck(this, a);
    };

    var n =
    /*#__PURE__*/
    function (_a10) {
      _inherits(n, _a10);

      function n(e, t) {
        var _this37;

        _classCallCheck(this, n);

        _this37 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this)), _this37._context = e, _this37._settings = t;
        return _this37;
      }

      _createClass(n, [{
        key: "execute",
        value: function execute() {
          this._context.settings = this._settings;
        }
      }]);

      return n;
    }(a);

    function o(e, t) {
      return new n(e, t);
    }

    var s = i("9ab4"),
        r = i("73a2"),
        l = i("8c0f");

    var c =
    /*#__PURE__*/
    function (_a11) {
      _inherits(c, _a11);

      function c(e, t) {
        var _this38;

        _classCallCheck(this, c);

        _this38 = _possibleConstructorReturn(this, _getPrototypeOf(c).call(this)), _this38._context = e, _this38._editor = t;
        return _this38;
      }

      _createClass(c, [{
        key: "execute",
        value: function execute() {
          this._context.editors.set(this._editor.id, this._editor), this._context.activeEditor = this._editor;
        }
      }]);

      return c;
    }(a);

    var u = i("2137");

    var p =
    /*#__PURE__*/
    function (_a12) {
      _inherits(p, _a12);

      function p(e, t) {
        var _this39;

        _classCallCheck(this, p);

        _this39 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this)), _this39._context = e;
        var i = e.editors.get(t);
        if (!i) throw new Error("Editor '".concat(t, "' not found."));
        if (i.id === u["a"].Phantom.id) throw new Error("The phantom editor cannot be unloaded.");
        _this39._editor = i;
        return _this39;
      }

      _createClass(p, [{
        key: "execute",
        value: function execute() {
          var e = this._context.editors,
              t = _toConsumableArray(e.keys()),
              i = t.indexOf(this._editor.id);

          i === e.size - 1 ? i -= 1 : i += 1;
          var a = e.get(t[i]);
          this._context.activeEditor = a, e["delete"](this._editor.id);
        }
      }]);

      return p;
    }(a);

    var d =
    /*#__PURE__*/
    function (_a13) {
      _inherits(d, _a13);

      function d(e, t) {
        var _this40;

        _classCallCheck(this, d);

        _this40 = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this)), _this40._context = e;
        var i = e.editors.get(t);
        if (!i) throw new Error("Editor '".concat(t, "' not found."));
        _this40._editor = i;
        return _this40;
      }

      _createClass(d, [{
        key: "execute",
        value: function execute() {
          this._context.activeEditor = this._editor;
        }
      }]);

      return d;
    }(a);

    var h =
    /*#__PURE__*/
    function (_a14) {
      _inherits(h, _a14);

      function h(e, t) {
        var _this41;

        _classCallCheck(this, h);

        _this41 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this));
        var i = e.editors.get(t);
        if (!i) throw new Error("Page '".concat(t, "' not found."));
        _this41._editor = i;
        return _this41;
      }

      _createClass(h, [{
        key: "execute",
        value: function execute() {
          l["a"].downloadTextFile(this._editor.name, this._editor.toFile(), r["default"].file_type_extension);
        }
      }]);

      return h;
    }(a);

    function v(e, t) {
      var i = u["a"].createNew(t);
      return new c(e, i);
    }

    function T(e, t) {
      var i = JSON.parse(t),
          a = i.__document.template_identifier;
      if (void 0 === a) throw new Error("Malformed export file.");
      var n = r["default"].templates.find(function (e) {
        return e.id === a;
      });
      if (!n) throw new Error("Application does not support file template '".concat(a, "'."));
      var o = u["a"].fromFile(n, i);
      return new c(e, o);
    }

    function m(e) {
      return Object(s["a"])(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = T;
                _context.t1 = e;
                _context.next = 4;
                return l["a"].openTextFileDialog();

              case 4:
                _context.t2 = _context.sent.contents;
                return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }

    function g(e, t) {
      return new p(e, t);
    }

    function x(e, t) {
      return new d(e, t);
    }

    function b(e, t) {
      return new h(e, t);
    }

    var f =
    /*#__PURE__*/
    function (_a15) {
      _inherits(f, _a15);

      function f(e, t) {
        var _this42;

        _classCallCheck(this, f);

        _this42 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this));
        var i = e.editors.get(t);
        if (!i) throw new Error("Editor '".concat(t, "' not found."));
        _this42._editor = i;
        return _this42;
      }

      _createClass(f, [{
        key: "execute",
        value: function execute() {
          this._editor.undo();
        }
      }]);

      return f;
    }(a);

    var y =
    /*#__PURE__*/
    function (_a16) {
      _inherits(y, _a16);

      function y(e, t) {
        var _this43;

        _classCallCheck(this, y);

        _this43 = _possibleConstructorReturn(this, _getPrototypeOf(y).call(this));
        var i = e.editors.get(t);
        if (!i) throw new Error("Editor '".concat(t, "' not found."));
        _this43._editor = i;
        return _this43;
      }

      _createClass(y, [{
        key: "execute",
        value: function execute() {
          this._editor.redo();
        }
      }]);

      return y;
    }(a);

    function O(e, t) {
      return new f(e, t);
    }

    function S(e, t) {
      return new y(e, t);
    }

    var w =
    /*#__PURE__*/
    function (_a17) {
      _inherits(w, _a17);

      function w(e, t) {
        var _this44;

        _classCallCheck(this, w);

        _this44 = _possibleConstructorReturn(this, _getPrototypeOf(w).call(this)), _this44._property = e, _this44._el = t;
        return _this44;
      }

      _createClass(w, [{
        key: "execute",
        value: function execute() {
          this._property.emit("mount", this._property, this._el);
        }
      }]);

      return w;
    }(a);

    var j =
    /*#__PURE__*/
    function (_a18) {
      _inherits(j, _a18);

      function j(e) {
        var _this45;

        _classCallCheck(this, j);

        _this45 = _possibleConstructorReturn(this, _getPrototypeOf(j).call(this)), _this45._property = e;
        return _this45;
      }

      _createClass(j, [{
        key: "execute",
        value: function execute() {
          this._property.emit("destroy", this._property);
        }
      }]);

      return j;
    }(a);

    var A =
    /*#__PURE__*/
    function (_a19) {
      _inherits(A, _a19);

      function A(e, t) {
        var _this46;

        _classCallCheck(this, A);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(A).call(this)), _this46._property = e, _this46._id = t;
        return _this46;
      }

      _createClass(A, [{
        key: "execute",
        value: function execute() {
          this._property.invokeAction(this._id);
        }
      }]);

      return A;
    }(a);

    function _(e, t) {
      return new w(e, t);
    }

    function C(e) {
      return new j(e);
    }

    function I(e, t) {
      return new A(e, t);
    }

    var P =
    /*#__PURE__*/
    function (_a20) {
      _inherits(P, _a20);

      function P(e, t) {
        var _this47;

        _classCallCheck(this, P);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this)), _this47._section = e, _this47._el = t;
        return _this47;
      }

      _createClass(P, [{
        key: "execute",
        value: function execute() {
          this._section.emit("mount", this._section, this._el);
        }
      }]);

      return P;
    }(a);

    var k =
    /*#__PURE__*/
    function (_a21) {
      _inherits(k, _a21);

      function k(e) {
        var _this48;

        _classCallCheck(this, k);

        _this48 = _possibleConstructorReturn(this, _getPrototypeOf(k).call(this)), _this48._section = e;
        return _this48;
      }

      _createClass(k, [{
        key: "execute",
        value: function execute() {
          this._section.emit("destroy", this._section);
        }
      }]);

      return k;
    }(a);

    function M(e, t) {
      return new P(e, t);
    }

    function E(e) {
      return new k(e);
    }

    var D =
    /*#__PURE__*/
    function (_a22) {
      _inherits(D, _a22);

      function D(e) {
        var _this49;

        _classCallCheck(this, D);

        _this49 = _possibleConstructorReturn(this, _getPrototypeOf(D).call(this)), _this49._url = e;
        return _this49;
      }

      _createClass(D, [{
        key: "execute",
        value: function execute() {
          window.open(this._url, "_blank");
        }
      }]);

      return D;
    }(a);

    var R =
    /*#__PURE__*/
    function (_a23) {
      _inherits(R, _a23);

      function R() {
        _classCallCheck(this, R);

        return _possibleConstructorReturn(this, _getPrototypeOf(R).call(this));
      }

      _createClass(R, [{
        key: "execute",
        value: function execute() {
          var e = document.body;
          e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }
      }]);

      return R;
    }(a);

    function N(e) {
      return new D(e);
    }

    function F() {
      return new R();
    }
  },
  8096: function _(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return r;
    }), i.d(t, "b", function () {
      return n["a"];
    });
    var a = i("13be"),
        n = i("b4d3"),
        o = i("a966"),
        s = i("174a");

    var r =
    /*#__PURE__*/
    function (_a$a) {
      _inherits(r, _a$a);

      function r(e, t) {
        var _this50;

        _classCallCheck(this, r);

        var i, a;
        _this50 = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this)), _this50.id = e.id, _this50.name = null !== (i = e.name) && void 0 !== i ? i : null, _this50.path = null !== (a = e.path) && void 0 !== a ? a : e.id, _this50.layout = {
          rows: e.layout.rows,
          cols: e.layout.cols
        }, _this50.properties = new Map(), _this50._parent = null, _this50._plugins = null, t && _this50.__prepareAssembler(t);
        return _this50;
      }

      _createClass(r, [{
        key: "clone",
        value: function clone(e) {
          var t;
          null !== e && void 0 !== e || (e = new n["a"]());
          var i = new r({
            id: this.id,
            name: this.name,
            path: this.path,
            layout: {
              rows: this.layout.rows,
              cols: this.layout.cols
            }
          }, e);
          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = this.properties.values()[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var _a24 = _step35.value;

              var _t20 = new s["l"]();

              _a24.clone(_t20), e.attachProperty(_t20);
            }
          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) {
                _iterator35["return"]();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }

          return null === (t = this._plugins) || void 0 === t || t.forEach(function (_ref19) {
            var e = _ref19.plugin;
            i.tryInstallPlugin(e);
          }), i;
        }
      }, {
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t;
          return null === this._plugins && (this._plugins = new o["a"](this, this.root)), t = this._plugins.tryInstallPlugin(e), 0 === this._plugins.length && (this._plugins = null), t;
        }
      }, {
        key: "tryInstallPlugins",
        value: function tryInstallPlugins(e) {
          var t = !0;
          var _iteratorNormalCompletion36 = true;
          var _didIteratorError36 = false;
          var _iteratorError36 = undefined;

          try {
            for (var _iterator36 = e[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
              var _i30 = _step36.value;
              t && (t = this.tryInstallPlugin(_i30));
            }
          } catch (err) {
            _didIteratorError36 = true;
            _iteratorError36 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) {
                _iterator36["return"]();
              }
            } finally {
              if (_didIteratorError36) {
                throw _iteratorError36;
              }
            }
          }

          return t;
        }
      }, {
        key: "__prepareAssembler",
        value: function __prepareAssembler() {
          var _this51 = this;

          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new n["a"]();
          return e.__injectAccessor({
            section: this,
            getParent: function getParent() {
              return _this51._parent;
            },
            setParent: function setParent(e) {
              return _this51._parent = e;
            },
            properties: this.properties
          }), e;
        }
      }]);

      return r;
    }(a["a"]);
  },
  "821d": function d(e, t, i) {
    "use strict";

    i("1dc6");
  },
  "880a": function a(e, t, i) {},
  "8c0f": function c0f(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);
      }

      _createClass(a, null, [{
        key: "downloadTextFile",
        value: function downloadTextFile(e, t) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "txt";
          var a = new Blob([t], {
            type: "octet/stream"
          }),
              n = window.URL.createObjectURL(a);
          this._aLink.href = n, this._aLink.download = "".concat(e, ".").concat(i), this._aLink.click(), window.URL.revokeObjectURL(n);
        }
      }, {
        key: "downloadImageFile",
        value: function downloadImageFile(e, t) {
          var _this52 = this;

          t.toBlob(function (t) {
            if (!t) return;
            var i = window.URL.createObjectURL(t);
            _this52._aLink.href = i, _this52._aLink.download = e + ".png", _this52._aLink.click(), window.URL.revokeObjectURL(i);
          }, "image/octet-stream");
        }
      }, {
        key: "openTextFileDialog",
        value: function openTextFileDialog() {
          var e = document.createElement("input");
          e.type = "file";
          var t = new Promise(function (t) {
            e.addEventListener("change", function (e) {
              var i = e.target.files[0],
                  a = new FileReader();
              a.onload = function (e) {
                var a;
                t({
                  filename: i.name,
                  contents: null === (a = e.target) || void 0 === a ? void 0 : a.result
                });
              }, a.readAsText(i);
            });
          });
          return e.click(), t;
        }
      }, {
        key: "fullscreen",
        value: function fullscreen() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
          var t = e;
          t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
        }
      }]);

      return a;
    }();

    a._aLink = document.createElement("a");
  },
  "8c7f": function c7f(e, t, i) {},
  9224: function _(e) {
    e.exports = JSON.parse('{"a":"1.0.0"}');
  },
  "991e": function e(_e21, t, i) {
    "use strict";

    var _f;

    i.d(t, "a", function () {
      return S;
    });

    var a =
    /*#__PURE__*/
    function (_Map) {
      _inherits(a, _Map);

      function a() {
        _classCallCheck(this, a);

        return _possibleConstructorReturn(this, _getPrototypeOf(a).call(this));
      }

      return a;
    }(_wrapNativeSuper(Map));

    var n =
    /*#__PURE__*/
    function (_a25) {
      _inherits(n, _a25);

      function n(e) {
        var _this53;

        _classCallCheck(this, n);

        _this53 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this)), _this53.value = e;
        return _this53;
      }

      _createClass(n, [{
        key: "toObject",
        value: function toObject() {
          return this.value;
        }
      }]);

      return n;
    }(a);

    var o =
    /*#__PURE__*/
    function (_a26) {
      _inherits(o, _a26);

      function o() {
        _classCallCheck(this, o);

        return _possibleConstructorReturn(this, _getPrototypeOf(o).call(this));
      }

      _createClass(o, [{
        key: "toObject",
        value: function toObject() {
          var e = [];
          var _iteratorNormalCompletion37 = true;
          var _didIteratorError37 = false;
          var _iteratorError37 = undefined;

          try {
            for (var _iterator37 = this[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
              var _step37$value = _slicedToArray(_step37.value, 2),
                  _t21 = _step37$value[0],
                  _i31 = _step37$value[1];

              e.push([_t21, _i31.toObject()]);
            }
          } catch (err) {
            _didIteratorError37 = true;
            _iteratorError37 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion37 && _iterator37["return"] != null) {
                _iterator37["return"]();
              }
            } finally {
              if (_didIteratorError37) {
                throw _iteratorError37;
              }
            }
          }

          return Object.fromEntries(e);
        }
      }]);

      return o;
    }(a);

    var s = i("f139");

    var r =
    /*#__PURE__*/
    function (_a27) {
      _inherits(r, _a27);

      function r() {
        _classCallCheck(this, r);

        return _possibleConstructorReturn(this, _getPrototypeOf(r).call(this));
      }

      _createClass(r, [{
        key: "push",
        value: function push(e) {
          var t;

          do {
            t = s["c"]();
          } while (this.has(t));

          return this.set(t, e), t;
        }
      }, {
        key: "toObject",
        value: function toObject() {
          var e = [];
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = this.values()[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var _t22 = _step38.value;
              e.push(_t22.toObject());
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38["return"] != null) {
                _iterator38["return"]();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }

          return e;
        }
      }]);

      return r;
    }(a);

    var l = i("1c81");
    var c = "*";

    function u(e) {
      var t = new o();
      return p(t, c, e), t;
    }

    function p(e, t, i) {
      var a, s;

      if (t = i.path.startsWith(c) ? i.path : "".concat(t, ".").concat(i.path), i instanceof l["k"]) {
        var _iteratorNormalCompletion39 = true;
        var _didIteratorError39 = false;
        var _iteratorError39 = undefined;

        try {
          for (var _iterator39 = i.sections.values()[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
            var _n8 = _step39.value;
            p(e, t, _n8);
          }
        } catch (err) {
          _didIteratorError39 = true;
          _iteratorError39 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion39 && _iterator39["return"] != null) {
              _iterator39["return"]();
            }
          } finally {
            if (_didIteratorError39) {
              throw _iteratorError39;
            }
          }
        }
      } else if (i instanceof l["o"]) {
        var _iteratorNormalCompletion40 = true;
        var _didIteratorError40 = false;
        var _iteratorError40 = undefined;

        try {
          for (var _iterator40 = i.properties.values()[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
            var _n9 = _step40.value;
            p(e, t, _n9);
          }
        } catch (err) {
          _didIteratorError40 = true;
          _iteratorError40 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion40 && _iterator40["return"] != null) {
              _iterator40["return"]();
            }
          } finally {
            if (_didIteratorError40) {
              throw _iteratorError40;
            }
          }
        }
      } else if (i instanceof l["s"]) {
        var _a28 = new r();

        var _iteratorNormalCompletion41 = true;
        var _didIteratorError41 = false;
        var _iteratorError41 = undefined;

        try {
          for (var _iterator41 = i.value.values()[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
            var _e22 = _step41.value;

            var _t23 = new o();

            var _iteratorNormalCompletion42 = true;
            var _didIteratorError42 = false;
            var _iteratorError42 = undefined;

            try {
              for (var _iterator42 = _e22[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
                var _i32 = _step42.value;
                p(_t23, "*", _i32);
              }
            } catch (err) {
              _didIteratorError42 = true;
              _iteratorError42 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion42 && _iterator42["return"] != null) {
                  _iterator42["return"]();
                }
              } finally {
                if (_didIteratorError42) {
                  throw _iteratorError42;
                }
              }
            }

            _a28.push(_t23);
          }
        } catch (err) {
          _didIteratorError41 = true;
          _iteratorError41 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion41 && _iterator41["return"] != null) {
              _iterator41["return"]();
            }
          } finally {
            if (_didIteratorError41) {
              throw _iteratorError41;
            }
          }
        }

        d(e, _a28, t);
      } else if (i instanceof l["b"]) {
        var _o6;

        if (i instanceof l["q"]) _o6 = new n(i.value);else if (i instanceof l["f"]) _o6 = new n(null !== (s = null === (a = i.value) || void 0 === a ? void 0 : a.toISOString()) && void 0 !== s ? s : null);else if (i instanceof l["j"]) _o6 = new n(i.value);else {
          if (!(i instanceof l["g"])) throw new Error("Unexpected property type: '".concat(i.constructor.name, "'"));
          _o6 = new n(i.value);
        }
        d(e, _o6, t);
      }
    }

    function d(e, t, i) {
      var a = i.split(/\./g);
      if (a.length < 2) throw new Error("'".concat(i, "' is invalid."));
      if (a.shift() !== c) throw new Error("'".concat(i, "' is not absolute."));
      var n = e;

      for (var _r3 = 0; _r3 < a.length - 1; _r3++) {
        if (n.has(a[_r3]) || n.set(a[_r3], new o()), n = n.get(a[_r3]), !(n instanceof o)) {
          var _e23 = n.constructor.name,
              _t24 = "".concat(c, ".").concat(a.slice(0, _r3 + 1).join("."));

          throw new Error("'".concat(_t24, "' (").concat(_e23, ") is not an object map."));
        }
      }

      var s = a.at(-1);
      if (n.has(s)) throw new Error("'".concat(i, "' is already assigned."));
      n.set(s, t);
    }

    var h = i("9224"),
        v = i("7028"),
        T = i("9ae2"),
        m = i("7770"),
        g = i("a742"),
        x = i("8096"),
        b = i("0b94");
    var f = (_f = {}, _defineProperty(_f, b["a"].Section, x["a"]), _defineProperty(_f, b["a"].StringProperty, l["q"]), _defineProperty(_f, b["a"].FloatProperty, l["h"]), _defineProperty(_f, b["a"].IntegerProperty, l["i"]), _defineProperty(_f, b["a"].EnumProperty, l["g"]), _defineProperty(_f, b["a"].DateProperty, l["e"]), _defineProperty(_f, b["a"].TimeProperty, l["u"]), _defineProperty(_f, b["a"].DateTimeProperty, l["f"]), _defineProperty(_f, b["a"].BasicTableProperty, l["c"]), _defineProperty(_f, b["a"].ComplexTableProperty, l["d"]), _f);

    var y =
    /*#__PURE__*/
    function () {
      function y(e, t) {
        _classCallCheck(this, y);

        this._values = null !== t && void 0 !== t ? t : {}, this._pageTemplate = e, this._sectionIndex = new Map(), this._propertyIndex = new Map(), this._pageAssembler = this.createPage(e);
      }

      _createClass(y, [{
        key: "createPage",
        value: function createPage(e) {
          var t = new l["l"]();
          new l["k"](e, t);
          var _iteratorNormalCompletion43 = true;
          var _didIteratorError43 = false;
          var _iteratorError43 = undefined;

          try {
            for (var _iterator43 = e.sections.values()[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
              var _i33 = _step43.value;

              var _e24 = this.createSection(_i33);

              t.attachSection(_e24);
            }
          } catch (err) {
            _didIteratorError43 = true;
            _iteratorError43 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion43 && _iterator43["return"] != null) {
                _iterator43["return"]();
              }
            } finally {
              if (_didIteratorError43) {
                throw _iteratorError43;
              }
            }
          }

          return this._pageTemplate = e, t;
        }
      }, {
        key: "createSection",
        value: function createSection(e) {
          var t = new l["p"]();
          new l["o"](e, t);
          var _iteratorNormalCompletion44 = true;
          var _didIteratorError44 = false;
          var _iteratorError44 = undefined;

          try {
            for (var _iterator44 = e.properties[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
              var _i34 = _step44.value;

              var _e25 = this.createProperty(_i34);

              t.attachProperty(_e25);
            }
          } catch (err) {
            _didIteratorError44 = true;
            _iteratorError44 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion44 && _iterator44["return"] != null) {
                _iterator44["return"]();
              }
            } finally {
              if (_didIteratorError44) {
                throw _iteratorError44;
              }
            }
          }

          return this._sectionIndex.set(t.section.instance, e), t;
        }
      }, {
        key: "createProperty",
        value: function createProperty(e) {
          var t;

          switch (e.type) {
            case m["b"].String:
              t = new l["m"]();

              var _i35 = new l["q"](e, t);

              e.suggestions && (_i35.suggestions = e.suggestions);
              break;

            case m["b"].Float:
              t = new l["m"](), new l["h"](e, t);
              break;

            case m["b"].Integer:
              t = new l["m"](), new l["i"](e, t);
              break;

            case m["b"].Date:
              t = new l["m"](), new l["e"](e, t);
              break;

            case m["b"].Time:
              t = new l["m"](), new l["u"](e, t);
              break;

            case m["b"].DateTime:
              t = new l["m"](), new l["f"](e, t);
              break;

            case m["b"].Enum:
              t = new l["m"](), new l["g"](e, t);
              break;

            case m["b"].BasicTable:
              t = new l["t"](), new l["c"](e, t), t.setDefaultRow(this.createTabularPropertyDefaultRow(e.properties));
              break;

            case m["b"].ComplexTable:
              t = new l["t"](), new l["d"](e, t), t.setDefaultRow(this.createTabularPropertyDefaultRow(e.properties));
              break;
          }

          return this._propertyIndex.set(t.property.instance, e), t;
        }
      }, {
        key: "createTabularPropertyDefaultRow",
        value: function createTabularPropertyDefaultRow(e) {
          var t = [];
          var _iteratorNormalCompletion45 = true;
          var _didIteratorError45 = false;
          var _iteratorError45 = undefined;

          try {
            for (var _iterator45 = e[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
              var _i36 = _step45.value;

              var _e26 = this.createProperty(_i36);

              if (!(_e26.property instanceof l["b"])) {
                var _t25 = _e26.property.id;
                throw new Error("Tabular subproperty '".concat(_t25, "' is non-atomic."));
              }

              t.push(_e26.property);
            }
          } catch (err) {
            _didIteratorError45 = true;
            _iteratorError45 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion45 && _iterator45["return"] != null) {
                _iterator45["return"]();
              }
            } finally {
              if (_didIteratorError45) {
                throw _iteratorError45;
              }
            }
          }

          return t;
        }
      }, {
        key: "initialize",
        value: function initialize() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          return e && this.initializePlugins(this._pageAssembler.page), this.initializeValues(this._pageAssembler.page), this;
        }
      }, {
        key: "initializePlugins",
        value: function initializePlugins(e) {
          if (e instanceof l["k"]) {
            var _t26 = this._pageTemplate.plugins;
            _t26 && this.installElementPlugins(e, _t26);
            var _iteratorNormalCompletion46 = true;
            var _didIteratorError46 = false;
            var _iteratorError46 = undefined;

            try {
              for (var _iterator46 = e.sections.values()[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
                var _i37 = _step46.value;
                this.initializePlugins(_i37);
              }
            } catch (err) {
              _didIteratorError46 = true;
              _iteratorError46 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion46 && _iterator46["return"] != null) {
                  _iterator46["return"]();
                }
              } finally {
                if (_didIteratorError46) {
                  throw _iteratorError46;
                }
              }
            }

            return;
          }

          if (e instanceof l["o"]) {
            var _t27 = this._sectionIndex.get(e.instance),
                _i38 = _t27.plugins;

            _i38 && this.installElementPlugins(e, _i38);
            var _iteratorNormalCompletion47 = true;
            var _didIteratorError47 = false;
            var _iteratorError47 = undefined;

            try {
              for (var _iterator47 = e.properties.values()[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
                var _a29 = _step47.value;
                this.initializePlugins(_a29);
              }
            } catch (err) {
              _didIteratorError47 = true;
              _iteratorError47 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion47 && _iterator47["return"] != null) {
                  _iterator47["return"]();
                }
              } finally {
                if (_didIteratorError47) {
                  throw _iteratorError47;
                }
              }
            }

            return;
          }

          var t = this._propertyIndex.get(e.instance),
              i = t.plugins;

          if (i && this.installElementPlugins(e, i), e instanceof l["s"]) {
            var _iteratorNormalCompletion48 = true;
            var _didIteratorError48 = false;
            var _iteratorError48 = undefined;

            try {
              for (var _iterator48 = e.defaultRow[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
                var _t28 = _step48.value;
                this.initializePlugins(_t28);
              }
            } catch (err) {
              _didIteratorError48 = true;
              _iteratorError48 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion48 && _iterator48["return"] != null) {
                  _iterator48["return"]();
                }
              } finally {
                if (_didIteratorError48) {
                  throw _iteratorError48;
                }
              }
            }

            var _iteratorNormalCompletion49 = true;
            var _didIteratorError49 = false;
            var _iteratorError49 = undefined;

            try {
              for (var _iterator49 = e.value.values()[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
                var _t29 = _step49.value;
                var _iteratorNormalCompletion50 = true;
                var _didIteratorError50 = false;
                var _iteratorError50 = undefined;

                try {
                  for (var _iterator50 = _t29[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
                    var _e27 = _step50.value;
                    this.initializePlugins(_e27);
                  }
                } catch (err) {
                  _didIteratorError50 = true;
                  _iteratorError50 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion50 && _iterator50["return"] != null) {
                      _iterator50["return"]();
                    }
                  } finally {
                    if (_didIteratorError50) {
                      throw _iteratorError50;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError49 = true;
              _iteratorError49 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion49 && _iterator49["return"] != null) {
                  _iterator49["return"]();
                }
              } finally {
                if (_didIteratorError49) {
                  throw _iteratorError49;
                }
              }
            }
          }
        }
      }, {
        key: "installElementPlugins",
        value: function installElementPlugins(e, t) {
          if (Array.isArray(t)) return void e.tryInstallPlugins(t);
          if (t.local && e.tryInstallPlugins(t.local), !t.global) return;
          var i = t.global;

          for (var _a30 in i) {
            var _t30 = parseInt(_a30);

            if (_t30 in f) {
              var _a31 = f[_t30];
              this.installGlobalPlugins(e, i[_t30], _a31);
            }
          }
        }
      }, {
        key: "installGlobalPlugins",
        value: function installGlobalPlugins(e, t, i) {
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

          if (a && e.constructor === i && e.tryInstallPlugins(t), e instanceof l["k"]) {
            var _iteratorNormalCompletion51 = true;
            var _didIteratorError51 = false;
            var _iteratorError51 = undefined;

            try {
              for (var _iterator51 = e.sections.values()[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
                var _n10 = _step51.value;
                this.installGlobalPlugins(_n10, t, i, !0);
              }
            } catch (err) {
              _didIteratorError51 = true;
              _iteratorError51 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion51 && _iterator51["return"] != null) {
                  _iterator51["return"]();
                }
              } finally {
                if (_didIteratorError51) {
                  throw _iteratorError51;
                }
              }
            }
          }

          if (e instanceof l["o"]) {
            var _iteratorNormalCompletion52 = true;
            var _didIteratorError52 = false;
            var _iteratorError52 = undefined;

            try {
              for (var _iterator52 = e.properties.values()[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
                var _n11 = _step52.value;
                this.installGlobalPlugins(_n11, t, i, !0);
              }
            } catch (err) {
              _didIteratorError52 = true;
              _iteratorError52 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion52 && _iterator52["return"] != null) {
                  _iterator52["return"]();
                }
              } finally {
                if (_didIteratorError52) {
                  throw _iteratorError52;
                }
              }
            }
          }

          if (e instanceof l["s"]) {
            var _iteratorNormalCompletion53 = true;
            var _didIteratorError53 = false;
            var _iteratorError53 = undefined;

            try {
              for (var _iterator53 = e.defaultRow[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
                var _a32 = _step53.value;
                this.installGlobalPlugins(_a32, t, i, !0);
              }
            } catch (err) {
              _didIteratorError53 = true;
              _iteratorError53 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion53 && _iterator53["return"] != null) {
                  _iterator53["return"]();
                }
              } finally {
                if (_didIteratorError53) {
                  throw _iteratorError53;
                }
              }
            }

            var _iteratorNormalCompletion54 = true;
            var _didIteratorError54 = false;
            var _iteratorError54 = undefined;

            try {
              for (var _iterator54 = e.value.values()[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
                var _a33 = _step54.value;
                var _iteratorNormalCompletion55 = true;
                var _didIteratorError55 = false;
                var _iteratorError55 = undefined;

                try {
                  for (var _iterator55 = _a33[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
                    var _e28 = _step55.value;
                    this.installGlobalPlugins(_e28, t, i, !0);
                  }
                } catch (err) {
                  _didIteratorError55 = true;
                  _iteratorError55 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion55 && _iterator55["return"] != null) {
                      _iterator55["return"]();
                    }
                  } finally {
                    if (_didIteratorError55) {
                      throw _iteratorError55;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError54 = true;
              _iteratorError54 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion54 && _iterator54["return"] != null) {
                  _iterator54["return"]();
                }
              } finally {
                if (_didIteratorError54) {
                  throw _iteratorError54;
                }
              }
            }
          }
        }
      }, {
        key: "initializeValues",
        value: function initializeValues(e, t) {
          if (t = this.resolveLookupPath(t, e.path), e instanceof l["k"]) {
            var _iteratorNormalCompletion56 = true;
            var _didIteratorError56 = false;
            var _iteratorError56 = undefined;

            try {
              for (var _iterator56 = e.sections.values()[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
                var _i39 = _step56.value;
                this.initializeValues(_i39, t);
              }
            } catch (err) {
              _didIteratorError56 = true;
              _iteratorError56 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion56 && _iterator56["return"] != null) {
                  _iterator56["return"]();
                }
              } finally {
                if (_didIteratorError56) {
                  throw _iteratorError56;
                }
              }
            }

            return;
          }

          if (e instanceof l["o"]) {
            var _iteratorNormalCompletion57 = true;
            var _didIteratorError57 = false;
            var _iteratorError57 = undefined;

            try {
              for (var _iterator57 = e.properties.values()[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
                var _i40 = _step57.value;
                this.initializeValues(_i40, t);
              }
            } catch (err) {
              _didIteratorError57 = true;
              _iteratorError57 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion57 && _iterator57["return"] != null) {
                  _iterator57["return"]();
                }
              } finally {
                if (_didIteratorError57) {
                  throw _iteratorError57;
                }
              }
            }

            return;
          }

          var i = g["a"](t, this._values),
              a = this._propertyIndex.get(e.instance);

          if (e instanceof l["s"]) {
            var _iteratorNormalCompletion58 = true;
            var _didIteratorError58 = false;
            var _iteratorError58 = undefined;

            try {
              for (var _iterator58 = e.defaultRow[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
                var _i42 = _step58.value;
                this.initializeValues(_i42, t);
              }
            } catch (err) {
              _didIteratorError58 = true;
              _iteratorError58 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion58 && _iterator58["return"] != null) {
                  _iterator58["return"]();
                }
              } finally {
                if (_didIteratorError58) {
                  throw _iteratorError58;
                }
              }
            }

            if (void 0 !== i) {
              var _t31;

              var _iteratorNormalCompletion59 = true;
              var _didIteratorError59 = false;
              var _iteratorError59 = undefined;

              try {
                for (var _iterator59 = i[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
                  var _a34 = _step59.value;
                  _t31 = {};
                  var _iteratorNormalCompletion60 = true;
                  var _didIteratorError60 = false;
                  var _iteratorError60 = undefined;

                  try {
                    for (var _iterator60 = e.defaultRow[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
                      var _i41 = _step60.value;

                      var _e29 = this.resolveLookupPath(void 0, _i41.path);

                      _t31[_i41.id] = g["a"](_e29, _a34);
                    }
                  } catch (err) {
                    _didIteratorError60 = true;
                    _iteratorError60 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion60 && _iterator60["return"] != null) {
                        _iterator60["return"]();
                      }
                    } finally {
                      if (_didIteratorError60) {
                        throw _iteratorError60;
                      }
                    }
                  }

                  e.insertRow(e.createRow(_t31));
                }
              } catch (err) {
                _didIteratorError59 = true;
                _iteratorError59 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion59 && _iterator59["return"] != null) {
                    _iterator59["return"]();
                  }
                } finally {
                  if (_didIteratorError59) {
                    throw _iteratorError59;
                  }
                }
              }
            } else if (void 0 !== a["default"]) {
              var _iteratorNormalCompletion61 = true;
              var _didIteratorError61 = false;
              var _iteratorError61 = undefined;

              try {
                for (var _iterator61 = a["default"][Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
                  var _t32 = _step61.value;
                  e.insertRow(e.createRow(_t32));
                }
              } catch (err) {
                _didIteratorError61 = true;
                _iteratorError61 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion61 && _iterator61["return"] != null) {
                    _iterator61["return"]();
                  }
                } finally {
                  if (_didIteratorError61) {
                    throw _iteratorError61;
                  }
                }
              }
            }
          } else e instanceof l["b"] && (void 0 !== i ? e.value = i : void 0 !== a["default"] && (e.value = a["default"]));
        }
      }, {
        key: "resolveLookupPath",
        value: function resolveLookupPath(e, t) {
          var i;
          return (i = t.startsWith(c)) && (t = t.substring((c + ".").length)), void 0 === e || i ? t : "".concat(e, ".").concat(t);
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return this._pageAssembler.page;
        }
      }]);

      return y;
    }();

    var O;

    var S =
    /*#__PURE__*/
    function () {
      function S(e, t, i) {
        _classCallCheck(this, S);

        this.id = i.instance, this.page = i, this.template = e, this._undoStack = [], this._redoStack = [], this._selected = null;
        var a = [];
        var _iteratorNormalCompletion62 = true;
        var _didIteratorError62 = false;
        var _iteratorError62 = undefined;

        try {
          for (var _iterator62 = t[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
            var _o7 = _step62.value;

            var _e30 = void 0,
                _t33 = void 0,
                _o7$split = _o7.split(/\./g),
                _o7$split2 = _slicedToArray(_o7$split, 2),
                _n13 = _o7$split2[0],
                _s6 = _o7$split2[1];

            (_t33 = i.sections.get(_n13)) && (_e30 = _t33.properties.get(_s6)), _e30 && a.push(_e30);
          }
        } catch (err) {
          _didIteratorError62 = true;
          _iteratorError62 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion62 && _iterator62["return"] != null) {
              _iterator62["return"]();
            }
          } finally {
            if (_didIteratorError62) {
              throw _iteratorError62;
            }
          }
        }

        this.keys = a;
        var n = this;
        l["n"].makeReactive && (n = l["n"].makeReactive(this)), this.page.on("select", function (e) {
          n._selected = e;
        }), this.page.on("deselect", function () {
          n._selected = null;
        }), this.page.on("execute", function () {
          var _n12;

          (_n12 = n).execute.apply(_n12, arguments);
        });
      }

      _createClass(S, [{
        key: "execute",
        value: function execute() {
          var t;

          for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
          }

          if (0 !== e.length) {
            if (1 === e.length) t = e[0];else {
              var _i43 = new T["a"]();

              var _iteratorNormalCompletion63 = true;
              var _didIteratorError63 = false;
              var _iteratorError63 = undefined;

              try {
                for (var _iterator63 = e[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
                  var _t34 = _step63.value;

                  _i43.add(_t34);
                }
              } catch (err) {
                _didIteratorError63 = true;
                _iteratorError63 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion63 && _iterator63["return"] != null) {
                    _iterator63["return"]();
                  }
                } finally {
                  if (_didIteratorError63) {
                    throw _iteratorError63;
                  }
                }
              }

              t = _i43;
            }

            if (t.page !== v["a"].NullPage) {
              if (t.page !== this.page.instance) throw new Error("Command is not configured to operate on this page.");
              t.execute() && (this._redoStack = [], this._undoStack.push(t));
            }
          }
        }
      }, {
        key: "undo",
        value: function undo() {
          this._undoStack.length && (this._undoStack.at(-1).undo(), this._redoStack.push(this._undoStack.pop()));
        }
      }, {
        key: "canUndo",
        value: function canUndo() {
          return 0 < this._undoStack.length;
        }
      }, {
        key: "redo",
        value: function redo() {
          this._redoStack.length && (this._redoStack.at(-1).execute(), this._undoStack.push(this._redoStack.pop()));
        }
      }, {
        key: "canRedo",
        value: function canRedo() {
          return 0 < this._redoStack.length;
        }
      }, {
        key: "toFile",
        value: function toFile() {
          return JSON.stringify(Object.assign(Object.assign({}, u(this.page).toObject()), {
            report_date: new Date().toISOString(),
            __document: {
              authoring_tool_version: h["a"],
              template_name: this.template,
              template_version: "0.1.0",
              template_identifier: this.page.id
            }
          }), null, 4);
        }
      }, {
        key: "isPhantom",
        value: function isPhantom() {
          return this.id === S.Phantom.id;
        }
      }, {
        key: "name",
        get: function get() {
          var e = this.keys.map(function (e) {
            return e.toString();
          }).filter(function (e) {
            return "" !== e;
          }).join(" - ");
          return e || "Untitled " + this.template;
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
      }], [{
        key: "createNew",
        value: function createNew(e) {
          var t = new y(e).initialize().getPage();
          return new this(e.name, e.keys, t);
        }
      }, {
        key: "fromFile",
        value: function fromFile(e, t) {
          var i = new y(e, t).initialize().getPage();
          return new this(e.name, e.keys, i);
        }
      }]);

      return S;
    }();

    O = S, S.Phantom = new O("", [], new l["k"]({
      id: "phantom_template"
    }));
  },
  "995e": function e(_e31, t, i) {
    "use strict";

    i("34aa");
  },
  "9a27": function a27(e, t, i) {
    "use strict";

    i("4771");
  },
  "9ae2": function ae2(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    }), i.d(t, "j", function () {
      return r;
    }), i.d(t, "f", function () {
      return l;
    }), i.d(t, "c", function () {
      return u;
    }), i.d(t, "k", function () {
      return d;
    }), i.d(t, "l", function () {
      return v;
    }), i.d(t, "m", function () {
      return m;
    }), i.d(t, "n", function () {
      return x;
    }), i.d(t, "d", function () {
      return S;
    }), i.d(t, "g", function () {
      return w;
    }), i.d(t, "e", function () {
      return j;
    }), i.d(t, "h", function () {
      return A;
    }), i.d(t, "i", function () {
      return _;
    }), i.d(t, "b", function () {
      return a["a"];
    });
    var a = i("7028");

    var n =
    /*#__PURE__*/
    function (_a$a2) {
      _inherits(n, _a$a2);

      function n() {
        var _this54;

        _classCallCheck(this, n);

        _this54 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, a["a"].NullPage)), _this54._commands = [];
        return _this54;
      }

      _createClass(n, [{
        key: "add",
        value: function add(e) {
          if (this.page !== a["a"].NullPage && this.page !== e.page) throw new Error("Commands must operate on the same page.");
          this.page = e.page, this._commands.push(e);
        }
      }, {
        key: "execute",
        value: function execute() {
          var e = 0,
              t = this._commands.length,
              i = !1;

          try {
            for (; e < t; e++) {
              var _t35 = this._commands[e].execute();

              i || (i = _t35);
            }
          } catch (a) {
            for (e--; 0 <= e; e--) {
              this._commands[e].undo();
            }

            throw a;
          }

          return i;
        }
      }, {
        key: "undo",
        value: function undo() {
          var e = this._commands.length - 1;

          for (var _t36 = e; 0 <= _t36; _t36--) {
            this._commands[_t36].undo();
          }
        }
      }]);

      return n;
    }(a["a"]);

    var o =
    /*#__PURE__*/
    function (_a$a3) {
      _inherits(o, _a$a3);

      function o(e) {
        var _this55;

        _classCallCheck(this, o);

        _this55 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, e.rootInstance)), _this55._property = e;
        return _this55;
      }

      _createClass(o, [{
        key: "execute",
        value: function execute() {
          return this._property.emitUpward("select", this._property), !1;
        }
      }, {
        key: "undo",
        value: function undo() {}
      }]);

      return o;
    }(a["a"]);

    var s =
    /*#__PURE__*/
    function (_a$a4) {
      _inherits(s, _a$a4);

      function s(e) {
        var _this56;

        _classCallCheck(this, s);

        _this56 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e.rootInstance)), _this56._property = e;
        return _this56;
      }

      _createClass(s, [{
        key: "execute",
        value: function execute() {
          return this._property.emitUpward("deselect", this._property), !1;
        }
      }, {
        key: "undo",
        value: function undo() {}
      }]);

      return s;
    }(a["a"]);

    function r(e) {
      return new o(e);
    }

    function l(e) {
      return new s(e);
    }

    var c =
    /*#__PURE__*/
    function (_a$a5) {
      _inherits(c, _a$a5);

      function c(e, t, i) {
        var _this57;

        _classCallCheck(this, c);

        if (_this57 = _possibleConstructorReturn(this, _getPrototypeOf(c).call(this, e.rootInstance)), !e.value.has(t)) throw new Error("Row '".concat(t, "' does not exist in '").concat(e.id, "'."));
        _this57._property = e, _this57._id = t, _this57._lastValue = e.collapsed.get(t), _this57._nextValue = i;
        return _possibleConstructorReturn(_this57);
      }

      _createClass(c, [{
        key: "execute",
        value: function execute() {
          return this._property.setRowCollapse(this._id, this._nextValue), !1;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.setRowCollapse(this._id, this._lastValue);
        }
      }]);

      return c;
    }(a["a"]);

    function u(e, t, i) {
      return new c(e, t, i);
    }

    var p =
    /*#__PURE__*/
    function (_a$a6) {
      _inherits(p, _a$a6);

      function p(e, t) {
        var _this58;

        _classCallCheck(this, p);

        _this58 = _possibleConstructorReturn(this, _getPrototypeOf(p).call(this, e.rootInstance)), _this58._property = e, _this58._lastValue = e.value, _this58._nextValue = t;
        return _this58;
      }

      _createClass(p, [{
        key: "execute",
        value: function execute() {
          return this._property.value = this._nextValue, !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.value = this._lastValue;
        }
      }]);

      return p;
    }(a["a"]);

    function d(e, t) {
      return new p(e, t);
    }

    var h =
    /*#__PURE__*/
    function (_a$a7) {
      _inherits(h, _a$a7);

      function h(e, t) {
        var _this59;

        _classCallCheck(this, h);

        _this59 = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this, e.rootInstance)), _this59._property = e, _this59._lastValue = e.value, _this59._nextValue = t;
        return _this59;
      }

      _createClass(h, [{
        key: "execute",
        value: function execute() {
          return this._property.value = this._nextValue, !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.value = this._lastValue;
        }
      }]);

      return h;
    }(a["a"]);

    function v(e, t) {
      return new h(e, t);
    }

    var T =
    /*#__PURE__*/
    function (_a$a8) {
      _inherits(T, _a$a8);

      function T(e, t) {
        var _this60;

        _classCallCheck(this, T);

        _this60 = _possibleConstructorReturn(this, _getPrototypeOf(T).call(this, e.rootInstance)), _this60._property = e, _this60._lastValue = e.value, _this60._nextValue = t;
        return _this60;
      }

      _createClass(T, [{
        key: "execute",
        value: function execute() {
          return this._property.value = this._nextValue, !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.value = this._lastValue;
        }
      }]);

      return T;
    }(a["a"]);

    function m(e, t) {
      return new T(e, t);
    }

    var g =
    /*#__PURE__*/
    function (_a$a9) {
      _inherits(g, _a$a9);

      function g(e, t) {
        var _this61;

        _classCallCheck(this, g);

        _this61 = _possibleConstructorReturn(this, _getPrototypeOf(g).call(this, e.rootInstance)), _this61._property = e, _this61._lastValue = e.value, _this61._nextValue = t;
        return _this61;
      }

      _createClass(g, [{
        key: "execute",
        value: function execute() {
          return this._property.value = this._nextValue, !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.value = this._lastValue;
        }
      }]);

      return g;
    }(a["a"]);

    function x(e, t) {
      return new g(e, t);
    }

    var b =
    /*#__PURE__*/
    function (_a$a10) {
      _inherits(b, _a$a10);

      function b(e, t, i) {
        var _this62;

        _classCallCheck(this, b);

        if (_this62 = _possibleConstructorReturn(this, _getPrototypeOf(b).call(this, e.rootInstance)), -1 === e.getRowIndex(t)) throw new Error("Table row '".concat(t, "' does not exist in '").concat(e.id, "'."));
        _this62._property = e, _this62._src = _this62._property.getRowIndex(t), _this62._dst = i;
        return _possibleConstructorReturn(_this62);
      }

      _createClass(b, [{
        key: "execute",
        value: function execute() {
          return this._property.moveRow(this._src, this._dst), !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.moveRow(this._dst, this._src);
        }
      }]);

      return b;
    }(a["a"]);

    var f =
    /*#__PURE__*/
    function (_a$a11) {
      _inherits(f, _a$a11);

      function f(e, t, i) {
        var _this63;

        _classCallCheck(this, f);

        if (_this63 = _possibleConstructorReturn(this, _getPrototypeOf(f).call(this, e.rootInstance)), !e.columnState.find(function (e) {
          return e.id === t;
        })) throw new Error("Table column '".concat(t, "' does not exist in '").concat(e.id, "'."));
        _this63._property = e, _this63._prevSnapshot = _this63._property.captureColumnSnapshot(t), _this63._nextSnapshot = _this63._property.captureColumnSnapshot(t, i);
        return _possibleConstructorReturn(_this63);
      }

      _createClass(f, [{
        key: "execute",
        value: function execute() {
          return this._property.applyColumnSnapshot(this._nextSnapshot), !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.applyColumnSnapshot(this._prevSnapshot);
        }
      }]);

      return f;
    }(a["a"]);

    var y =
    /*#__PURE__*/
    function (_a$a12) {
      _inherits(y, _a$a12);

      function y(e, t, i) {
        var _this64;

        _classCallCheck(this, y);

        _this64 = _possibleConstructorReturn(this, _getPrototypeOf(y).call(this, e.rootInstance)), _this64._property = e, _this64._row = e.createRow(t), _this64._index = i;
        return _this64;
      }

      _createClass(y, [{
        key: "execute",
        value: function execute() {
          return this._property.insertRow(this._row, this._index), !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.deleteRow(this._row[0]);
        }
      }]);

      return y;
    }(a["a"]);

    var O =
    /*#__PURE__*/
    function (_a$a13) {
      _inherits(O, _a$a13);

      function O(e, t) {
        var _this65;

        _classCallCheck(this, O);

        if (_this65 = _possibleConstructorReturn(this, _getPrototypeOf(O).call(this, e.rootInstance)), -1 === e.getRowIndex(t)) throw new Error("Table row '".concat(t, "' does not exist in '").concat(e.id, "'."));
        _this65._property = e, _this65._row = e.getRow(t), _this65._index = e.getRowIndex(t);
        return _possibleConstructorReturn(_this65);
      }

      _createClass(O, [{
        key: "execute",
        value: function execute() {
          return this._property.deleteRow(this._index), !0;
        }
      }, {
        key: "undo",
        value: function undo() {
          this._property.insertRow(this._row, this._index);
        }
      }]);

      return O;
    }(a["a"]);

    function S(e, t, i) {
      return new y(e, t, i);
    }

    function w(e, t) {
      var i = e.getRowIndex(t);
      if (-1 === i) throw new Error("Table row '".concat(t, "' does not exist in '").concat(e.id, "'."));
      var a = {};
      var _iteratorNormalCompletion64 = true;
      var _didIteratorError64 = false;
      var _iteratorError64 = undefined;

      try {
        for (var _iterator64 = e.getRow(t)[1][Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
          var _n14 = _step64.value;
          a[_n14.id] = _n14.value;
        }
      } catch (err) {
        _didIteratorError64 = true;
        _iteratorError64 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion64 && _iterator64["return"] != null) {
            _iterator64["return"]();
          }
        } finally {
          if (_didIteratorError64) {
            throw _iteratorError64;
          }
        }
      }

      return new y(e, a, i + 1);
    }

    function j(e, t) {
      return new O(e, t);
    }

    function A(e, t, i) {
      return new b(e, t, i);
    }

    function _(e, t, i) {
      return new f(e, t, i);
    }
  },
  a017: function a017(e, t, i) {},
  a742: function a742(e, t, i) {
    "use strict";

    function a(e, t) {
      var i = e.split(/\./g),
          a = t;
      var _iteratorNormalCompletion65 = true;
      var _didIteratorError65 = false;
      var _iteratorError65 = undefined;

      try {
        for (var _iterator65 = i[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
          var n = _step65.value;
          if (!(a instanceof Object && n in a)) return;
          a = a[n];
        }
      } catch (err) {
        _didIteratorError65 = true;
        _iteratorError65 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion65 && _iterator65["return"] != null) {
            _iterator65["return"]();
          }
        } finally {
          if (_didIteratorError65) {
            throw _iteratorError65;
          }
        }
      }

      return a;
    }

    i.d(t, "a", function () {
      return a;
    });
  },
  a966: function a966(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    });
    i("f112");
    var a = i("2576");

    var n =
    /*#__PURE__*/
    function (_Array) {
      _inherits(n, _Array);

      function n(e, t) {
        var _this66;

        _classCallCheck(this, n);

        _this66 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this)), _this66._root = t, _this66.element = e, a["a"].makeReactive && (_this66._root = a["a"].makeReactive(_this66._root), _this66.element = a["a"].makeReactive(_this66.element));
        return _this66;
      }

      _createClass(n, [{
        key: "tryInstallPlugin",
        value: function tryInstallPlugin(e) {
          var t,
              i = e.module.name;
          if (this.find(function (e) {
            return e.plugin.module.name === i;
          })) throw new Error("Plugin '".concat(i, "' is already installed."));

          try {
            t = e.options ? new e.module(this.element, this._root, e.options()) : new e.module(this.element, this._root);
          } catch (a) {
            var _t37 = e.module.name;
            return console.error("Failed to install plugin '".concat(_t37, "':")), console.error(a), !1;
          }

          return this.push({
            plugin: e,
            instance: t
          }), !0;
        }
      }]);

      return n;
    }(_wrapNativeSuper(Array));
  },
  b4d3: function b4d3(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);

        this._accessor = null, this._parentAssembler = null, this._propertyAssemblers = new Map();
      }

      _createClass(a, [{
        key: "__injectAccessor",
        value: function __injectAccessor(e) {
          this._accessor = e, this._parentAssembler = null, this._propertyAssemblers = new Map();
        }
      }, {
        key: "attachToPage",
        value: function attachToPage(e) {
          this.belongsToPage(e) || (this.belongsToPage() && this.detachFromPage(), this.accessor.setParent(e.page), this._parentAssembler = e, e.attachSection(this));
        }
      }, {
        key: "detachFromPage",
        value: function detachFromPage() {
          if (!this.belongsToPage()) return;
          var e = this._parentAssembler;
          this.accessor.setParent(null), this._parentAssembler = null, e.detachSection(this);
        }
      }, {
        key: "belongsToPage",
        value: function belongsToPage(e) {
          var t = this.accessor.getParent();
          return null !== t && (void 0 === e || t.instance === e.page.instance);
        }
      }, {
        key: "attachProperty",
        value: function attachProperty(e) {
          if (this.includesProperty(e)) return;
          var t = e.property.id;
          this.includesProperty(t) && this.detachProperty(t), this.accessor.properties.set(t, e.property), this._propertyAssemblers.set(t, e), e.attachToSection(this);
        }
      }, {
        key: "detachProperty",
        value: function detachProperty(e) {
          if (!this.includesProperty(e)) return;
          "string" === typeof e && (e = this.properties.get(e));
          var t = e.property.id;
          this.accessor.properties["delete"](t), this._propertyAssemblers["delete"](t), e.detachFromParent();
        }
      }, {
        key: "includesProperty",
        value: function includesProperty(e) {
          var t = this.accessor.properties;
          if ("string" === typeof e) return t.has(e);
          var i = e.property.id;
          if (!t.has(i)) return !1;
          var a = t.get(i);
          return a.instance === e.property.instance;
        }
      }, {
        key: "section",
        get: function get() {
          return this.accessor.section;
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parentAssembler;
        }
      }, {
        key: "properties",
        get: function get() {
          return this._propertyAssemblers;
        }
      }, {
        key: "accessor",
        get: function get() {
          if (null === this._accessor) throw new Error("Assembler is not configured with a section.");
          return this._accessor;
        }
      }]);

      return a;
    }();
  },
  b550: function b550(e, t, i) {
    "use strict";

    i("3c3e");
  },
  b7b5: function b7b5(e, t, i) {
    var a = {
      "./app.config": "73a2",
      "./app.config.ts": "73a2",
      "./organization.png": "00d9",
      "./product.png": "04d3"
    };

    function n(e) {
      var t = o(e);
      return i(t);
    }

    function o(e) {
      if (!i.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t;
      }

      return a[e];
    }

    n.keys = function () {
      return Object.keys(a);
    }, n.resolve = o, e.exports = n, n.id = "b7b5";
  },
  bac6: function bac6(e, t, i) {
    "use strict";

    i("50e3");
  },
  bdb4: function bdb4(e, t, i) {},
  c049: function c049(e, t, i) {
    "use strict";

    i("e681");
  },
  c881: function c881(e, t, i) {
    "use strict";

    i("a017");
  },
  caac: function caac(e, t, i) {},
  cd49: function cd49(e, t, i) {
    "use strict";

    i.r(t);
    var a = i("7a23");
    var n = {
      id: "app-body"
    };

    function o(e, t, i, o, s, r) {
      var l = Object(a["w"])("AppTitleBar"),
          c = Object(a["w"])("SplashMenu"),
          u = Object(a["w"])("PageEditorControl"),
          p = Object(a["w"])("ScrollBox"),
          d = Object(a["w"])("FileSelect"),
          h = Object(a["w"])("AppMetricsBar"),
          v = Object(a["w"])("AppHotkeyBox");
      return Object(a["p"])(), Object(a["d"])(v, {
        id: "main"
      }, {
        "default": Object(a["C"])(function () {
          return [Object(a["i"])(l, {
            id: "app-title-bar"
          }), Object(a["g"])("div", n, [Object(a["i"])(p, {
            id: "page-container",
            alwaysShowScrollBar: !0
          }, {
            "default": Object(a["C"])(function () {
              return [e.editor.isPhantom() ? (Object(a["p"])(), Object(a["d"])(c, {
                key: 0,
                id: "splash-menu",
                templates: e.templates,
                onNew: e.onNewDocument,
                onOpen: e.onOpenDocument
              }, null, 8, ["templates", "onNew", "onOpen"])) : (Object(a["p"])(), Object(a["d"])(u, {
                key: 1,
                id: "page",
                page: e.editor.page,
                onExecute: e.onExecute
              }, null, 8, ["page", "onExecute"]))];
            }),
            _: 1
          })]), Object(a["D"])(Object(a["i"])(d, {
            id: "file-select",
            active: e.editor.id,
            editors: e.editors,
            onClose: e.onEditorClose,
            onSwitch: e.onEditorSwitch
          }, null, 8, ["active", "editors", "onClose", "onSwitch"]), [[a["A"], 0 < e.editors.size]]), Object(a["i"])(h, {
            id: "metrics-bar"
          })];
        }),
        _: 1
      });
    }

    var s = i("9ab4"),
        r = i("7aa9"),
        l = i("73a2"),
        c = i("5502"),
        u = i("6f01");

    var p = function p(e) {
      return Object(a["r"])("data-v-774cd2ef"), e = e(), Object(a["q"])(), e;
    },
        d = {
      "class": "splash-menu-control"
    },
        h = {
      "class": "splash-menu-container"
    },
        v = {
      "class": "header"
    },
        T = ["src"],
        m = ["src"],
        g = {
      "class": "sections"
    },
        x = {
      "class": "section new-file"
    },
        b = p(function () {
      return Object(a["g"])("p", {
        "class": "section-title"
      }, " Create a new file... ", -1);
    }),
        f = {
      "class": "section-grid"
    },
        y = ["onClick"],
        O = {
      "class": "name"
    },
        S = {
      "class": "description"
    },
        w = {
      "class": "section open-file"
    },
        j = p(function () {
      return Object(a["g"])("p", {
        "class": "section-title"
      }, " Open an existing file... ", -1);
    }),
        A = {
      "class": "section-grid"
    },
        _ = p(function () {
      return Object(a["g"])("h1", {
        "class": "name"
      }, "+ Open a File", -1);
    }),
        C = p(function () {
      return Object(a["g"])("p", {
        "class": "description"
      }, "Open an existing file.", -1);
    }),
        I = [_, C];

    function P(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("div", d, [Object(a["g"])("div", h, [Object(a["g"])("div", v, [Object(a["g"])("img", {
        "class": "product",
        src: e.product
      }, null, 8, T), e.organization ? (Object(a["p"])(), Object(a["f"])("img", {
        key: 0,
        "class": "organization",
        src: e.organization
      }, null, 8, m)) : Object(a["e"])("", !0)]), Object(a["g"])("div", g, [Object(a["g"])("div", x, [b, Object(a["g"])("div", f, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.templates, function (t) {
        return Object(a["p"])(), Object(a["f"])("div", {
          "class": "template",
          key: t.id,
          onClick: function onClick(i) {
            return e.$emit("new", t);
          }
        }, [Object(a["g"])("h1", O, "+ " + Object(a["y"])(t.name), 1), Object(a["g"])("p", S, Object(a["y"])(t.description), 1)], 8, y);
      }), 128))])]), Object(a["g"])("div", w, [j, Object(a["g"])("div", A, [Object(a["g"])("div", {
        "class": "template",
        onClick: t[0] || (t[0] = function (t) {
          return e.$emit("open");
        })
      }, I)])])])])]);
    }

    var k = i("b7b5");
    var M = Object(a["j"])({
      name: "SplashMenu",
      props: {
        templates: {
          type: Array,
          required: !0
        }
      },
      data: function data() {
        var e;
        return l["default"].branding.organization && (e = k(l["default"].branding.organization)), {
          product: k(l["default"].branding.product),
          organization: e
        };
      },
      emits: ["new", "open"]
    }),
        E = (i("0ca7"), i("6b0d")),
        D = i.n(E);
    var R = D()(M, [["render", P], ["__scopeId", "data-v-774cd2ef"]]);
    var N = R;
    var F = {
      "class": "app-file-select-element"
    },
        L = ["onClick"],
        B = {
      "class": "file-title"
    },
        H = ["onClick"];

    function G(e, t, i, n, o, s) {
      var _this67 = this;

      var r = Object(a["w"])("File");
      return Object(a["p"])(), Object(a["f"])("div", F, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.editors, function (_ref20) {
        var _ref21 = _slicedToArray(_ref20, 2),
            t = _ref21[0],
            i = _ref21[1];

        return Object(a["p"])(), Object(a["f"])("div", {
          key: t,
          "class": Object(a["n"])(["file", {
            active: t === _this67.active
          }]),
          onClick: function onClick(i) {
            return e.$emit("switch", t);
          }
        }, [Object(a["i"])(r, {
          "class": "file-icon"
        }), Object(a["g"])("p", B, Object(a["y"])(i.name), 1), Object(a["g"])("p", {
          "class": "file-close",
          onClick: Object(a["E"])(function (i) {
            return e.$emit("close", t);
          }, ["stop"])
        }, "✗", 8, H)], 10, L);
      }), 128))]);
    }

    var U = ["fill"],
        V = Object(a["g"])("path", {
      d: "m0 0v3.176h2.6464v-2.1193l-1.0563-1.0568zm0.26355 0.26355h1.0594v1.0594h1.0578v1.587h-2.1172zm1.324 0.10697 0.68626 0.68781h-0.68626z"
    }, null, -1),
        z = [V];

    function $(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("svg", {
        width: "10",
        height: "12",
        version: "1.1",
        viewBox: "0 0 2.6458 3.175",
        xmlns: "http://www.w3.org/2000/svg",
        fill: e.color
      }, z, 8, U);
    }

    var Y = Object(a["j"])({
      name: "File",
      props: {
        color: {
          type: String,
          "default": "#666666"
        }
      }
    });
    var W = D()(Y, [["render", $]]);
    var q = W,
        K = Object(a["j"])({
      name: "FileSelect",
      props: {
        active: {
          type: String,
          required: !0
        },
        editors: {
          type: Object,
          required: !0
        }
      },
      emits: ["switch", "close"],
      components: {
        File: q
      }
    });
    i("fed5");
    var Z = D()(K, [["render", G], ["__scopeId", "data-v-11dfc9fa"]]);
    var J = Z;
    var X = {
      "class": "logo"
    },
        Q = ["src"];

    function ee(e, t, n, o, s, r) {
      var l = Object(a["w"])("TitleBar");
      return Object(a["p"])(), Object(a["d"])(l, {
        "class": "app-title-bar-element",
        menus: e.menus,
        onSelect: e.onItemSelect
      }, {
        icon: Object(a["C"])(function () {
          return [Object(a["g"])("span", X, [Object(a["g"])("img", {
            src: i("5b62")
          }, null, 8, Q)])];
        }),
        _: 1
      }, 8, ["menus", "onSelect"]);
    }

    var te = {
      "class": "icon"
    },
        ie = ["onClick", "onMouseenter"];

    function ae(e, t, i, n, o, s) {
      var r = Object(a["w"])("ContextMenuListing"),
          l = Object(a["w"])("FocusBox");
      return Object(a["p"])(), Object(a["d"])(l, {
        "class": "title-bar-control",
        pointerEvent: "click",
        onFocusout: e.menuClose
      }, {
        "default": Object(a["C"])(function () {
          return [Object(a["g"])("li", te, [Object(a["v"])(e.$slots, "icon", {}, void 0, !0)]), (Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.menus, function (t) {
            return Object(a["p"])(), Object(a["f"])("li", {
              key: t.text,
              "class": Object(a["n"])({
                active: e.isActive(t)
              }),
              onClick: function onClick(i) {
                return e.menuOpen(t.text);
              },
              onMouseenter: function onMouseenter(i) {
                return e.menuEnter(t.text);
              }
            }, [Object(a["g"])("p", null, Object(a["y"])(t.text), 1), e.isActive(t) ? (Object(a["p"])(), Object(a["d"])(r, {
              key: 0,
              "class": "menu-listing",
              sections: t.sections,
              onSelect: e.menuSelect
            }, null, 8, ["sections", "onSelect"])) : Object(a["e"])("", !0)], 42, ie);
          }), 128))];
        }),
        _: 3
      }, 8, ["onFocusout"]);
    }

    var ne = i("e0ac");

    var oe = function oe(e) {
      return Object(a["r"])("data-v-5475d14e"), e = e(), Object(a["q"])(), e;
    },
        se = ["onMouseenter", "onMouseleave"],
        re = {
      "class": "item"
    },
        le = {
      "class": "text"
    },
        ce = oe(function () {
      return Object(a["g"])("span", {
        "class": "more-arrow"
      }, null, -1);
    }),
        ue = {
      key: 0,
      "class": "submenu"
    },
        pe = ["exit-focus-box", "onClick"],
        de = ["href"],
        he = {
      "class": "check"
    },
        ve = {
      "class": "text"
    },
        Te = {
      key: 0,
      "class": "shortcut"
    },
        me = {
      key: 0,
      "class": "section-divider"
    };

    function ge(e, t, i, n, o, s) {
      var r = Object(a["w"])("ContextMenuListing", !0);
      return Object(a["p"])(), Object(a["f"])("div", {
        "class": "context-menu-listing-control",
        style: Object(a["o"])(e.offset),
        onContextmenu: t[0] || (t[0] = Object(a["E"])(function () {}, ["prevent"]))
      }, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.sections, function (t, i) {
        return Object(a["p"])(), Object(a["f"])("div", {
          "class": "section",
          key: t.id
        }, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(t.items, function (t) {
          return Object(a["p"])(), Object(a["f"])(a["a"], {
            key: t.text
          }, [t.type === e.MenuType.Submenu ? (Object(a["p"])(), Object(a["f"])("li", {
            key: 0,
            "class": Object(a["n"])({
              disabled: t.disabled
            }),
            onMouseenter: function onMouseenter(i) {
              return e.submenuEnter(t);
            },
            onMouseleave: function onMouseleave(i) {
              return e.submenuLeave(t);
            }
          }, [Object(a["g"])("a", re, [Object(a["g"])("span", le, Object(a["y"])(t.text), 1), ce]), e.isActive(t) ? (Object(a["p"])(), Object(a["f"])("div", ue, [Object(a["i"])(r, {
            root: !1,
            sections: t.sections,
            on_select: e.onChildItemSelect
          }, null, 8, ["sections", "on_select"])])) : Object(a["e"])("", !0)], 42, se)) : (Object(a["p"])(), Object(a["f"])("li", {
            key: 1,
            "class": Object(a["n"])({
              disabled: t.disabled
            }),
            "exit-focus-box": !t.keepMenuOpenOnSelect,
            onClick: function onClick(i) {
              return e.onItemClick(t);
            }
          }, [Object(a["g"])("a", {
            "class": "item",
            href: t.disabled ? null : t.link,
            target: "_blank"
          }, [Object(a["D"])(Object(a["g"])("span", he, " ✓ ", 512), [[a["A"], t.value]]), Object(a["g"])("span", ve, Object(a["y"])(t.text), 1), t.shortcut ? (Object(a["p"])(), Object(a["f"])("span", Te, Object(a["y"])(e.formatShortcut(t.shortcut)), 1)) : Object(a["e"])("", !0)], 8, de)], 10, pe))], 64);
        }), 128)), i < e.sections.length - 1 ? (Object(a["p"])(), Object(a["f"])("a", me)) : Object(a["e"])("", !0)]);
      }), 128))], 36);
    }

    var xe;

    (function (e) {
      e[e["Item"] = 0] = "Item", e[e["Toggle"] = 1] = "Toggle", e[e["Submenu"] = 2] = "Submenu";
    })(xe || (xe = {}));

    var be = {
      Control: "Ctrl",
      Escape: "Esc",
      ArrowLeft: "←",
      ArrowUp: "↑",
      ArrowRight: "→",
      ArrowDown: "↓",
      Delete: "Del"
    };
    var fe = Object(a["j"])({
      name: "ContextMenuListing",
      props: {
        root: {
          type: Boolean,
          "default": !0
        },
        sections: {
          type: Array,
          required: !0
        },
        forceInsideWindow: {
          type: Boolean,
          "default": !0
        }
      },
      data: function data() {
        return {
          xOffset: 0,
          yOffset: 0,
          activeSubMenu: null,
          leaveTimeout: 500,
          leaveTimeoutId: 0,
          MenuType: xe
        };
      },
      computed: {
        offset: function offset() {
          return {
            marginTop: this.yOffset + "px",
            marginLeft: this.xOffset + "px"
          };
        }
      },
      emits: ["select", "_select"],
      methods: {
        isActive: function isActive(e) {
          return e.text === this.activeSubMenu;
        },
        submenuEnter: function submenuEnter(e) {
          e.disabled || (clearTimeout(this.leaveTimeoutId), this.activeSubMenu = e.text);
        },
        submenuLeave: function submenuLeave(e) {
          var _this68 = this;

          e.disabled || (this.leaveTimeoutId = setTimeout(function () {
            _this68.activeSubMenu = null;
          }, this.leaveTimeout));
        },
        onItemClick: function onItemClick(e) {
          e.disabled || (this.root ? this.$emit("select", e.data) : this.$emit("_select", e));
        },
        onChildItemSelect: function onChildItemSelect(e) {
          this.root ? this.$emit("select", e.data) : this.$emit("_select", e), e.keepMenuOpenOnSelect || (this.activeSubMenu = null);
        },
        formatShortcut: function formatShortcut(e) {
          return e ? e.split("+").map(function (e) {
            return e in be ? be[e] : e;
          }).join("+") : e;
        }
      },
      mounted: function mounted() {
        if (!this.forceInsideWindow) return;

        var e = window.innerWidth,
            t = window.innerHeight,
            _this$$el$getBounding = this.$el.getBoundingClientRect(),
            i = _this$$el$getBounding.top,
            a = _this$$el$getBounding.left,
            n = _this$$el$getBounding.bottom,
            o = _this$$el$getBounding.right;

        this.xOffset = o > e ? -Math.min(a, o - e) : 0, this.yOffset = n > t ? -Math.min(i, n - t) : 0;
      }
    });
    i("3bd1");
    var ye = D()(fe, [["render", ge], ["__scopeId", "data-v-5475d14e"]]);
    var Oe = ye,
        Se = Object(a["j"])({
      name: "TitleBar",
      props: {
        menus: {
          type: Array,
          "default": []
        }
      },
      data: function data() {
        return {
          activeMenu: null
        };
      },
      emits: ["select"],
      methods: {
        isActive: function isActive(e) {
          return e.text === this.activeMenu;
        },
        menuOpen: function menuOpen(e) {
          this.activeMenu = e;
        },
        menuEnter: function menuEnter(e) {
          null !== this.activeMenu && (this.activeMenu = e);
        },
        menuClose: function menuClose() {
          this.activeMenu = null;
        },
        menuSelect: function menuSelect(e) {
          this.$emit("select", e);
        }
      },
      components: {
        FocusBox: ne["a"],
        ContextMenuListing: Oe
      }
    });
    i("bac6");
    var we = D()(Se, [["render", ae], ["__scopeId", "data-v-54d0bff4"]]);
    var je = we,
        Ae = Object(a["j"])({
      name: "AppTitleBar",
      computed: Object.assign(Object.assign({}, Object(c["b"])("ContextMenuStore", ["fileMenu", "editMenu", "layoutMenu", "viewMenu", "helpMenu"])), {
        menus: function menus() {
          return [this.fileMenu, this.editMenu, this.viewMenu, this.helpMenu];
        }
      }),
      methods: Object.assign(Object.assign({}, Object(c["c"])("ApplicationStore", ["execute"])), {
        onItemSelect: function onItemSelect(e) {
          return Object(s["a"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _t38;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _t38 = e();

                    if (!(_t38 instanceof Promise)) {
                      _context2.next = 10;
                      break;
                    }

                    _context2.t0 = this;
                    _context2.next = 6;
                    return _t38;

                  case 6:
                    _context2.t1 = _context2.sent;

                    _context2.t0.execute.call(_context2.t0, _context2.t1);

                    _context2.next = 11;
                    break;

                  case 10:
                    this.execute(_t38);

                  case 11:
                    _context2.next = 16;
                    break;

                  case 13:
                    _context2.prev = 13;
                    _context2.t2 = _context2["catch"](0);
                    console.error(_context2.t2);

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 13]]);
          }));
        }
      }),
      components: {
        TitleBar: je
      }
    });
    i("d974");

    var _e = D()(Ae, [["render", ee], ["__scopeId", "data-v-7bf9ab7d"]]);

    var Ce = _e;

    function Ie(e, t, i, n, o, s) {
      var r = Object(a["w"])("HotkeyBox");
      return Object(a["p"])(), Object(a["d"])(r, {
        "class": "app-hotkey-box-element",
        hotkeys: e.hotkeys,
        global: !0,
        onFire: e.onHotkeyFired
      }, {
        "default": Object(a["C"])(function () {
          return [Object(a["v"])(e.$slots, "default")];
        }),
        _: 3
      }, 8, ["hotkeys", "onFire"]);
    }

    var Pe = {
      "class": "hotkey-box-container",
      tabindex: "0"
    };

    function ke(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("div", Pe, [Object(a["v"])(e.$slots, "default", {}, void 0, !0)]);
    }

    var Me =
    /*#__PURE__*/
    function () {
      function Me(e, t) {
        _classCallCheck(this, Me);

        this._boundAdvanceKeyState = this.advanceKeyState.bind(this), this._boundReverseKeyState = this.reverseKeyState.bind(this), this._callback = e, this._container = null, this._hotkeyIdMap = new Map(), this._keyState = ".";
      }

      _createClass(Me, [{
        key: "observe",
        value: function observe(e) {
          this._container = e, this._container.addEventListener("keydown", this._boundAdvanceKeyState), this._container.addEventListener("keyup", this._boundReverseKeyState);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          var e, t;
          null === (e = this._container) || void 0 === e || e.removeEventListener("keydown", this._boundAdvanceKeyState), null === (t = this._container) || void 0 === t || t.removeEventListener("keyup", this._boundReverseKeyState);
        }
      }, {
        key: "setHotkeys",
        value: function setHotkeys(e) {
          this._hotkeyIdMap = new Map();
          var _iteratorNormalCompletion66 = true;
          var _didIteratorError66 = false;
          var _iteratorError66 = undefined;

          try {
            for (var _iterator66 = e[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
              var _t39 = _step66.value;
              if ("" === _t39.shortcut) continue;

              var _e32 = this.keySequenceToHotKeyId(_t39.shortcut);

              var _iteratorNormalCompletion67 = true;
              var _didIteratorError67 = false;
              var _iteratorError67 = undefined;

              try {
                for (var _iterator67 = this._hotkeyIdMap.keys()[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
                  var _t40 = _step67.value;
                  if (_t40.startsWith(_e32) || _e32.startsWith(_t40)) throw new Ee("Overlapping key sequences ('".concat(_t40, "' and '").concat(_e32, "') are not allowed."));
                }
              } catch (err) {
                _didIteratorError67 = true;
                _iteratorError67 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion67 && _iterator67["return"] != null) {
                    _iterator67["return"]();
                  }
                } finally {
                  if (_didIteratorError67) {
                    throw _iteratorError67;
                  }
                }
              }

              this._hotkeyIdMap.set(_e32, _t39);
            }
          } catch (err) {
            _didIteratorError66 = true;
            _iteratorError66 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion66 && _iterator66["return"] != null) {
                _iterator66["return"]();
              }
            } finally {
              if (_didIteratorError66) {
                throw _iteratorError66;
              }
            }
          }
        }
      }, {
        key: "isHotkeyActive",
        value: function isHotkeyActive(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var i = this.keySequenceToHotKeyId(e);
          return t ? this._keyState === i : this._keyState.includes(i);
        }
      }, {
        key: "advanceKeyState",
        value: function advanceKeyState(e) {
          var t = e.key.toLocaleLowerCase();
          if ("INPUT" === e.target.tagName) return;

          var i = this._keyState.endsWith(".".concat(t, "."));

          if (i || (this._keyState += t + "."), this._hotkeyIdMap.has(this._keyState)) {
            var _t41 = this._hotkeyIdMap.get(this._keyState);

            if (_t41.disabled || i && !_t41.repeatable) return void e.preventDefault();
            _t41.allowBrowserBehavior || e.preventDefault(), this._callback(_t41.data);
          } else e.preventDefault();
        }
      }, {
        key: "reverseKeyState",
        value: function reverseKeyState(e) {
          var t = e.key.toLocaleLowerCase();
          this._keyState = this._keyState.replace(".".concat(t, "."), ".");
        }
      }, {
        key: "keySequenceToHotKeyId",
        value: function keySequenceToHotKeyId(e) {
          var t = e.toLocaleLowerCase().replace(/\s+/g, "").split("+").join(".");
          return ".".concat(t, ".");
        }
      }]);

      return Me;
    }();

    var Ee =
    /*#__PURE__*/
    function (_Error) {
      _inherits(Ee, _Error);

      function Ee(e) {
        _classCallCheck(this, Ee);

        return _possibleConstructorReturn(this, _getPrototypeOf(Ee).call(this, e));
      }

      return Ee;
    }(_wrapNativeSuper(Error));

    var De = Object(a["j"])({
      name: "HotkeyBox",
      provide: function provide() {
        var _this69 = this;

        return {
          isHotkeyActive: function isHotkeyActive(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return _this69.observer.isHotkeyActive(e, t);
          }
        };
      },
      props: {
        hotkeys: {
          type: Array,
          "default": []
        },
        global: {
          type: Boolean,
          "default": !1
        }
      },
      data: function data() {
        var _this70 = this;

        return {
          observer: Object(a["m"])(new Me(function (e, t) {
            return _this70.$emit("fire", e, t);
          }, 0))
        };
      },
      emits: ["fire"],
      watch: {
        hotkeys: function hotkeys() {
          this.observer.setHotkeys(this.hotkeys);
        }
      },
      mounted: function mounted() {
        this.observer.observe(this.global ? document.body : this.$el), this.observer.setHotkeys(this.hotkeys);
      },
      unmounted: function unmounted() {
        this.observer.disconnect();
      }
    });
    i("e2cf");
    var Re = D()(De, [["render", ke], ["__scopeId", "data-v-09ff9750"]]);
    var Ne = Re,
        Fe = Object(a["j"])({
      name: "AppHotkeyBox",
      computed: Object.assign(Object.assign({}, Object(c["b"])("HotkeyStore", ["nativeHotkeys", "fileHotkeys", "editHotKeys", "layoutHotkeys", "viewHotkeys"])), {
        hotkeys: function hotkeys() {
          return [].concat(_toConsumableArray(this.nativeHotkeys), _toConsumableArray(this.fileHotkeys), _toConsumableArray(this.editHotKeys), _toConsumableArray(this.layoutHotkeys), _toConsumableArray(this.viewHotkeys));
        }
      }),
      methods: Object.assign(Object.assign({}, Object(c["c"])("ApplicationStore", ["execute"])), {
        onHotkeyFired: function onHotkeyFired(e) {
          return Object(s["a"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _t42, _e33;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _t42 = e();

                    if (!(_t42 instanceof Promise)) {
                      _context3.next = 9;
                      break;
                    }

                    _context3.next = 5;
                    return _t42;

                  case 5:
                    _e33 = _context3.sent;
                    this.execute(_e33);
                    _context3.next = 10;
                    break;

                  case 9:
                    this.execute(_t42);

                  case 10:
                    _context3.next = 15;
                    break;

                  case 12:
                    _context3.prev = 12;
                    _context3.t0 = _context3["catch"](0);
                    console.error(_context3.t0);

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 12]]);
          }));
        }
      }),
      components: {
        HotkeyBox: Ne
      }
    });
    var Le = D()(Fe, [["render", Ie]]);
    var Be = Le;
    var He = {
      "class": "app-metrics-bar-element"
    };

    function Ge(e, t, i, n, o, s) {
      return Object(a["p"])(), Object(a["f"])("div", He, [e.propertyMetrics ? (Object(a["p"])(!0), Object(a["f"])(a["a"], {
        key: 0
      }, Object(a["u"])(e.propertyMetrics, function (_ref22) {
        var _ref23 = _slicedToArray(_ref22, 2),
            e = _ref23[0],
            t = _ref23[1];

        return Object(a["p"])(), Object(a["f"])("p", {
          "class": "property-metric",
          key: e
        }, Object(a["y"])(t.text) + ": " + Object(a["y"])(t.value), 1);
      }), 128)) : Object(a["e"])("", !0)]);
    }

    var Ue = Object(a["j"])({
      name: "AppMetricsBar",
      computed: Object.assign(Object.assign({}, Object(c["d"])("ApplicationStore", {
        editor: function editor(e) {
          return e.activeEditor;
        }
      })), {
        propertyMetrics: function propertyMetrics() {
          var e, t;
          return null !== (t = null === (e = this.editor.selected) || void 0 === e ? void 0 : e.metrics) && void 0 !== t ? t : null;
        }
      })
    });
    i("c881");
    var Ve = D()(Ue, [["render", Ge], ["__scopeId", "data-v-a24a6250"]]);
    var ze = Ve;
    var $e = {
      "class": "page-editor-element"
    };

    function Ye(e, t, i, n, o, s) {
      var r = Object(a["w"])("PageEditorSection");
      return Object(a["p"])(), Object(a["f"])("div", $e, [(Object(a["p"])(!0), Object(a["f"])(a["a"], null, Object(a["u"])(e.page.sections, function (_ref24) {
        var _ref25 = _slicedToArray(_ref24, 2),
            i = _ref25[0],
            n = _ref25[1];

        return Object(a["p"])(), Object(a["d"])(r, {
          "class": "page-section",
          key: i,
          section: n,
          onExecute: t[0] || (t[0] = function (t) {
            return e.$emit("execute", t);
          })
        }, null, 8, ["section"]);
      }), 128))]);
    }

    var We = {
      "class": "page-editor-section-control"
    },
        qe = {
      key: 0,
      "class": "section-name"
    };

    function Ke(e, t, i, n, o, s) {
      var r = Object(a["w"])("FieldGrid");
      return Object(a["p"])(), Object(a["f"])("div", We, [null !== e.section.name ? (Object(a["p"])(), Object(a["f"])("div", qe, Object(a["y"])(e.section.name), 1)) : Object(a["e"])("", !0), Object(a["i"])(r, {
        "class": "fields",
        rows: e.section.layout.rows,
        cols: e.section.layout.cols,
        properties: e.properties,
        onExecute: t[0] || (t[0] = function (t) {
          return e.$emit("execute", t);
        })
      }, null, 8, ["rows", "cols", "properties"])]);
    }

    var Ze = i("5800"),
        Je = Object(a["j"])({
      name: "PageSection",
      props: {
        section: {
          type: Object,
          required: !0
        }
      },
      computed: {
        properties: function properties() {
          return _toConsumableArray(this.section.properties.values());
        }
      },
      emits: ["execute"],
      mounted: function mounted() {
        var e = r["h"](this.section, this.$el);
        this.$emit("execute", e);
      },
      unmounted: function unmounted() {
        var e = r["b"](this.section);
        this.$emit("execute", e);
      },
      components: {
        FieldGrid: Ze["default"]
      }
    });
    i("f6b1");
    var Xe = D()(Je, [["render", Ke], ["__scopeId", "data-v-5ad23cba"]]);
    var Qe = Xe,
        et = Object(a["j"])({
      name: "PageEditor",
      props: {
        page: {
          type: Object,
          required: !0
        }
      },
      emits: ["execute"],
      components: {
        PageEditorSection: Qe
      }
    });
    i("b550");
    var tt = D()(et, [["render", Ye], ["__scopeId", "data-v-005b2b18"]]);
    var it = tt,
        at = Object(a["j"])({
      name: "App",
      computed: Object.assign(Object.assign({}, Object(c["d"])("ApplicationStore", {
        ctx: function ctx(e) {
          return e;
        },
        editor: function editor(e) {
          return e.activeEditor;
        },
        editors: function editors(e) {
          var t = _toConsumableArray(e.editors.entries()).filter(function (e) {
            return !e[1].isPhantom();
          });

          return new Map(t);
        }
      })), {
        templates: function templates() {
          return l["default"].templates;
        }
      }),
      methods: Object.assign(Object.assign({}, Object(c["c"])("ApplicationStore", ["execute"])), {
        onExecute: function onExecute(e) {
          return Object(s["a"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;

                    if (!(e instanceof Promise)) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.t0 = this;
                    _context4.next = 5;
                    return e;

                  case 5:
                    _context4.t1 = _context4.sent;

                    _context4.t0.execute.call(_context4.t0, _context4.t1);

                    _context4.next = 10;
                    break;

                  case 9:
                    this.execute(e);

                  case 10:
                    _context4.next = 15;
                    break;

                  case 12:
                    _context4.prev = 12;
                    _context4.t2 = _context4["catch"](0);
                    console.error(_context4.t2);

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 12]]);
          }));
        },
        onEditorSwitch: function onEditorSwitch(e) {
          this.execute(r["l"](this.ctx, e));
        },
        onEditorClose: function onEditorClose(e) {
          this.execute(r["o"](this.ctx, e));
        },
        onNewDocument: function onNewDocument(e) {
          this.execute(r["d"](this.ctx, e));
        },
        onOpenDocument: function onOpenDocument() {
          return Object(s["a"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.t0 = this;
                    _context5.next = 3;
                    return r["e"](this.ctx);

                  case 3:
                    _context5.t1 = _context5.sent;

                    _context5.t0.execute.call(_context5.t0, _context5.t1);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }),
      created: function created() {
        return Object(s["a"])(this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var e;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!l["default"].is_web_hosted) {
                    _context6.next = 8;
                    break;
                  }

                  _context6.next = 3;
                  return fetch("./settings.json");

                case 3:
                  _context6.next = 5;
                  return _context6.sent.json();

                case 5:
                  _context6.t0 = _context6.sent;
                  _context6.next = 9;
                  break;

                case 8:
                  _context6.t0 = i("14d9");

                case 9:
                  e = _context6.t0;
                  this.execute(r["f"](this.ctx, e));

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));
      },
      components: {
        ScrollBox: u["a"],
        AppTitleBar: Ce,
        AppHotkeyBox: Be,
        AppMetricsBar: ze,
        FileSelect: J,
        PageEditorControl: it,
        SplashMenu: N
      }
    });
    i("2337");
    var nt = D()(at, [["render", o]]);
    var ot = nt,
        st = i("991e"),
        rt = i("9ae2");
    var lt = {
      hotkeys: {
        file: {
          new_file: "",
          open_file: "",
          save_file: ""
        },
        edit: {
          undo: "",
          redo: ""
        },
        layout: {},
        view: {
          fullscreen: ""
        }
      }
    };
    var ct = {
      namespaced: !0,
      state: {
        editors: new Map([[st["a"].Phantom.id, st["a"].Phantom]]),
        activeEditor: st["a"].Phantom,
        activeProperty: null,
        settings: lt
      },
      getters: {
        canUndo: function canUndo(e) {
          return e.activeEditor.canUndo();
        },
        canRedo: function canRedo(e) {
          return e.activeEditor.canRedo();
        }
      },
      mutations: {
        execute: function execute(e, t) {
          if (t instanceof rt["b"]) {
            var _i44 = e.editors.get(t.page);

            if (!_i44) throw new Error("'".concat(t.page, "' is not a page."));

            _i44.execute(t);
          } else t.execute();
        }
      }
    },
        ut = {
      namespaced: !0,
      getters: {
        fileMenu: function fileMenu(e, t, i) {
          var a = [t.openFileMenu, t.saveFileMenu].filter(Boolean);
          return {
            text: "File",
            type: xe.Submenu,
            sections: a
          };
        },
        openFileMenu: function openFileMenu(e, t, i) {
          var a = i.ApplicationStore,
              n = a.settings.hotkeys.file,
              o = l["default"].templates.map(function (e) {
            return {
              text: e.name,
              type: xe.Item,
              data: function data() {
                return r["d"](a, e);
              }
            };
          });
          return {
            id: "open_file_options",
            items: [{
              text: "New File",
              type: xe.Submenu,
              sections: [{
                id: "new_file_options",
                items: o
              }]
            }, {
              text: "Open File...",
              type: xe.Item,
              data: function data() {
                return r["e"](a);
              },
              shortcut: n.open_file
            }]
          };
        },
        saveFileMenu: function saveFileMenu(e, t, i) {
          var a = i.ApplicationStore,
              n = a.settings.hotkeys.file,
              o = a.activeEditor;
          return {
            id: "save_file_options",
            items: [{
              text: "Save",
              type: xe.Item,
              data: function data() {
                return r["k"](a, o.id);
              },
              shortcut: n.save_file,
              disabled: o.id === st["a"].Phantom.id
            }]
          };
        },
        editMenu: function editMenu(e, t) {
          return {
            text: "Edit",
            type: xe.Submenu,
            sections: [t.undoRedoMenu]
          };
        },
        undoRedoMenu: function undoRedoMenu(e, t, i, a) {
          var n = i.ApplicationStore,
              o = n.activeEditor.page,
              s = n.settings.hotkeys.edit,
              l = a["ApplicationStore/canUndo"],
              c = a["ApplicationStore/canRedo"];
          return {
            id: "undo_redo_options",
            items: [{
              text: "Undo",
              type: xe.Item,
              data: function data() {
                return r["n"](n, o.instance);
              },
              shortcut: s.undo,
              disabled: !l
            }, {
              text: "Redo",
              type: xe.Item,
              data: function data() {
                return r["j"](n, o.instance);
              },
              shortcut: s.redo,
              disabled: !c
            }]
          };
        },
        layoutMenu: function layoutMenu(e, t) {
          return {
            text: "Layout",
            type: xe.Submenu,
            sections: []
          };
        },
        viewMenu: function viewMenu(e, t) {
          return {
            text: "View",
            type: xe.Submenu,
            sections: [t.fullscreenMenu]
          };
        },
        fullscreenMenu: function fullscreenMenu(e, t, i) {
          var a = i.ApplicationStore,
              n = a.settings.hotkeys.view;
          return {
            id: "fullscreen_options",
            items: [{
              text: "Fullscreen",
              type: xe.Item,
              data: function data() {
                return r["m"]();
              },
              shortcut: n.fullscreen
            }]
          };
        },
        helpMenu: function helpMenu(e, t, i) {
          i.ApplicationStore;
          var a = l["default"].menus.help_menu.help_links,
              n = a.map(function (e) {
            return {
              text: e.text,
              type: xe.Item,
              data: function data() {
                return r["i"](e.url);
              }
            };
          });
          return {
            text: "",
            type: xe.Submenu,
            sections: [{
              id: "help_links",
              items: n
            }]
          };
        }
      }
    },
        pt = {
      namespaced: !0,
      getters: {
        nativeHotkeys: function nativeHotkeys() {
          return [{
            shortcut: "Control+C",
            repeatable: !0,
            allowBrowserBehavior: !0
          }, {
            shortcut: "Control+V",
            repeatable: !0,
            allowBrowserBehavior: !0
          }, {
            shortcut: "Control+X",
            repeatable: !0,
            allowBrowserBehavior: !0
          }, {
            shortcut: "Control+R",
            repeatable: !0,
            allowBrowserBehavior: !0
          }, {
            shortcut: "Control+Shift+R",
            repeatable: !0,
            allowBrowserBehavior: !0
          }];
        },
        fileHotkeys: function fileHotkeys(e, t, i, a) {
          var n = i.ApplicationStore,
              o = n.activeEditor,
              s = n.settings.hotkeys.file;
          return [{
            data: function data() {
              return r["e"](n);
            },
            shortcut: s.open_file,
            repeatable: !1
          }, {
            data: function data() {
              return r["k"](n, o.id);
            },
            shortcut: s.save_file,
            repeatable: !1,
            disabled: o.id === st["a"].Phantom.id
          }];
        },
        editHotKeys: function editHotKeys(e, t, i) {
          var a = i.ApplicationStore,
              n = a.activeEditor.page,
              o = a.settings.hotkeys.edit;
          return [{
            data: function data() {
              return r["n"](a, n.instance);
            },
            shortcut: o.undo,
            repeatable: !0
          }, {
            data: function data() {
              return r["j"](a, n.instance);
            },
            shortcut: o.redo,
            repeatable: !0
          }];
        },
        layoutHotkeys: function layoutHotkeys(e, t, i) {
          i.ApplicationStore;
          return [];
        },
        viewHotkeys: function viewHotkeys(e, t, i) {
          var a = i.ApplicationStore,
              n = a.settings.hotkeys.view;
          return [{
            data: function data() {
              return r["m"]();
            },
            shortcut: n.fullscreen,
            repeatable: !1
          }];
        }
      }
    },
        dt = Object(c["a"])({
      modules: {
        ApplicationStore: ct,
        ContextMenuStore: ut,
        HotkeyStore: pt
      }
    }),
        ht = (i("0da8"), i("2975"), i("1c81"));
    ht["n"].makeReactive = function (e) {
      return Object(a["t"])(e).value;
    }, Object(a["c"])(ot).use(dt).mount("#app");
  },
  ce8b: function ce8b(e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);

        this.deltaX = 0, this.deltaY = 0, this.movementX = 0, this.movementY = 0, this.target = null, this._originX = 0, this._originY = 0, this._lastX = 0, this._lastY = 0;
      }

      _createClass(a, [{
        key: "capture",
        value: function capture(e, t, i) {
          var _this71 = this;

          this._originX = e.clientX, this._originY = e.clientY, this._lastX = this._originX, this._lastY = this._originY, this.target = e.target, this.target.setPointerCapture(e.pointerId), this.target.onpointermove = function (e) {
            _this71.update(e), t(e, _this71);
          }, document.addEventListener("pointerup", function (e) {
            _this71.release(e), i && i(e, _this71);
          }, {
            once: !0
          });
        }
      }, {
        key: "update",
        value: function update(e) {
          this.deltaX = e.clientX - this._originX, this.deltaY = e.clientY - this._originY, this.movementX = e.clientX - this._lastX, this.movementY = e.clientY - this._lastY, this._lastX = e.clientX, this._lastY = e.clientY;
        }
      }, {
        key: "release",
        value: function release(e) {
          null !== this.target && (this.target.releasePointerCapture(e.pointerId), this.target.onpointermove = null, this.target = null);
        }
      }]);

      return a;
    }();
  },
  cea5: function cea5(e, t, i) {},
  d974: function d974(e, t, i) {
    "use strict";

    i("caac");
  },
  e0ac: function e0ac(e, t, i) {
    "use strict";

    var a = i("7a23");
    var n = ["tabindex"];

    function o(e, t, i, o, s, r) {
      return Object(a["p"])(), Object(a["f"])("div", {
        "class": "focus-box-container",
        tabindex: e.tabindex,
        onFocusin: t[0] || (t[0] = function () {
          return e.onFocusIn && e.onFocusIn.apply(e, arguments);
        }),
        onFocusout: t[1] || (t[1] = function () {
          return e.onFocusOut && e.onFocusOut.apply(e, arguments);
        })
      }, [Object(a["v"])(e.$slots, "default", {}, void 0, !0)], 40, n);
    }

    var s = Object(a["j"])({
      name: "FocusBox",
      props: {
        tabindex: {
          type: String,
          "default": "-1"
        },
        pointerEvent: {
          type: String,
          "default": null
        }
      },
      data: function data() {
        return {
          focus: !1
        };
      },
      emits: ["focusin", "focusout"],
      methods: {
        onFocusIn: function onFocusIn() {
          this.focus = !0, this.$emit("focusin");
        },
        onFocusOut: function onFocusOut(e) {
          this.focus && !this.$el.contains(e.relatedTarget) && (this.focus = !1, this.$emit("focusout"));
        },
        onPointerEvent: function onPointerEvent(e) {
          var t = e.target;

          while (this.$el !== t) {
            if (t.hasAttribute("exit-focus-box")) return this.focus = !1, this.$emit("focusout"), void this.$el.blur();
            t = t.parentElement;
          }
        }
      },
      mounted: function mounted() {
        this.pointerEvent && this.$el.addEventListener(this.pointerEvent, this.onPointerEvent);
      },
      unmounted: function unmounted() {
        this.$el.removeEventListener(this.pointerEvent, this.onPointerEvent);
      }
    }),
        r = (i("5d84"), i("6b0d")),
        l = i.n(r);
    var c = l()(s, [["render", o], ["__scopeId", "data-v-8472a79c"]]);
    t["a"] = c;
  },
  e2cf: function e2cf(e, t, i) {
    "use strict";

    i("bdb4");
  },
  e681: function e681(e, t, i) {},
  f112: function f112(e, t, i) {},
  f139: function f139(e, t, i) {
    "use strict";

    function a() {
      return crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (e) {
        return (parseInt(e) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(e) / 4).toString(16);
      });
    }

    i.d(t, "c", function () {
      return a;
    }), i.d(t, "a", function () {
      return v;
    }), i.d(t, "b", function () {
      return m;
    });
    var n = "0123456789abcdef";

    function o(e) {
      var t = "";

      for (var _i45 = 0; _i45 <= 3; _i45++) {
        t += n.charAt(e >> 8 * _i45 + 4 & 15) + n.charAt(e >> 8 * _i45 & 15);
      }

      return t;
    }

    function s(e) {
      var t,
          i = 1 + (e.length + 8 >> 6),
          a = new Array(16 * i).fill(0);

      for (t = 0; t < e.length; t++) {
        a[t >> 2] |= e.charCodeAt(t) << t % 4 * 8;
      }

      return a[t >> 2] |= 128 << t % 4 * 8, a[16 * i - 2] = 8 * e.length, a;
    }

    function r(e, t) {
      var i = (65535 & e) + (65535 & t),
          a = (e >> 16) + (t >> 16) + (i >> 16);
      return a << 16 | 65535 & i;
    }

    function l(e, t) {
      return e << t | e >>> 32 - t;
    }

    function c(e, t, i, a, n, o) {
      return r(l(r(r(t, e), r(a, o)), n), i);
    }

    function u(e, t, i, a, n, o, s) {
      return c(t & i | ~t & a, e, t, n, o, s);
    }

    function p(e, t, i, a, n, o, s) {
      return c(t & a | i & ~a, e, t, n, o, s);
    }

    function d(e, t, i, a, n, o, s) {
      return c(t ^ i ^ a, e, t, n, o, s);
    }

    function h(e, t, i, a, n, o, s) {
      return c(i ^ (t | ~a), e, t, n, o, s);
    }

    function v(e) {
      var t = s(e),
          i = 1732584193,
          a = -271733879,
          n = -1732584194,
          l = 271733878;

      for (var _o8 = 0; _o8 < t.length; _o8 += 16) {
        var _e34 = i,
            _s7 = a,
            _c = n,
            _v = l;
        i = u(i, a, n, l, t[_o8 + 0], 7, -680876936), l = u(l, i, a, n, t[_o8 + 1], 12, -389564586), n = u(n, l, i, a, t[_o8 + 2], 17, 606105819), a = u(a, n, l, i, t[_o8 + 3], 22, -1044525330), i = u(i, a, n, l, t[_o8 + 4], 7, -176418897), l = u(l, i, a, n, t[_o8 + 5], 12, 1200080426), n = u(n, l, i, a, t[_o8 + 6], 17, -1473231341), a = u(a, n, l, i, t[_o8 + 7], 22, -45705983), i = u(i, a, n, l, t[_o8 + 8], 7, 1770035416), l = u(l, i, a, n, t[_o8 + 9], 12, -1958414417), n = u(n, l, i, a, t[_o8 + 10], 17, -42063), a = u(a, n, l, i, t[_o8 + 11], 22, -1990404162), i = u(i, a, n, l, t[_o8 + 12], 7, 1804603682), l = u(l, i, a, n, t[_o8 + 13], 12, -40341101), n = u(n, l, i, a, t[_o8 + 14], 17, -1502002290), a = u(a, n, l, i, t[_o8 + 15], 22, 1236535329), i = p(i, a, n, l, t[_o8 + 1], 5, -165796510), l = p(l, i, a, n, t[_o8 + 6], 9, -1069501632), n = p(n, l, i, a, t[_o8 + 11], 14, 643717713), a = p(a, n, l, i, t[_o8 + 0], 20, -373897302), i = p(i, a, n, l, t[_o8 + 5], 5, -701558691), l = p(l, i, a, n, t[_o8 + 10], 9, 38016083), n = p(n, l, i, a, t[_o8 + 15], 14, -660478335), a = p(a, n, l, i, t[_o8 + 4], 20, -405537848), i = p(i, a, n, l, t[_o8 + 9], 5, 568446438), l = p(l, i, a, n, t[_o8 + 14], 9, -1019803690), n = p(n, l, i, a, t[_o8 + 3], 14, -187363961), a = p(a, n, l, i, t[_o8 + 8], 20, 1163531501), i = p(i, a, n, l, t[_o8 + 13], 5, -1444681467), l = p(l, i, a, n, t[_o8 + 2], 9, -51403784), n = p(n, l, i, a, t[_o8 + 7], 14, 1735328473), a = p(a, n, l, i, t[_o8 + 12], 20, -1926607734), i = d(i, a, n, l, t[_o8 + 5], 4, -378558), l = d(l, i, a, n, t[_o8 + 8], 11, -2022574463), n = d(n, l, i, a, t[_o8 + 11], 16, 1839030562), a = d(a, n, l, i, t[_o8 + 14], 23, -35309556), i = d(i, a, n, l, t[_o8 + 1], 4, -1530992060), l = d(l, i, a, n, t[_o8 + 4], 11, 1272893353), n = d(n, l, i, a, t[_o8 + 7], 16, -155497632), a = d(a, n, l, i, t[_o8 + 10], 23, -1094730640), i = d(i, a, n, l, t[_o8 + 13], 4, 681279174), l = d(l, i, a, n, t[_o8 + 0], 11, -358537222), n = d(n, l, i, a, t[_o8 + 3], 16, -722521979), a = d(a, n, l, i, t[_o8 + 6], 23, 76029189), i = d(i, a, n, l, t[_o8 + 9], 4, -640364487), l = d(l, i, a, n, t[_o8 + 12], 11, -421815835), n = d(n, l, i, a, t[_o8 + 15], 16, 530742520), a = d(a, n, l, i, t[_o8 + 2], 23, -995338651), i = h(i, a, n, l, t[_o8 + 0], 6, -198630844), l = h(l, i, a, n, t[_o8 + 7], 10, 1126891415), n = h(n, l, i, a, t[_o8 + 14], 15, -1416354905), a = h(a, n, l, i, t[_o8 + 5], 21, -57434055), i = h(i, a, n, l, t[_o8 + 12], 6, 1700485571), l = h(l, i, a, n, t[_o8 + 3], 10, -1894986606), n = h(n, l, i, a, t[_o8 + 10], 15, -1051523), a = h(a, n, l, i, t[_o8 + 1], 21, -2054922799), i = h(i, a, n, l, t[_o8 + 8], 6, 1873313359), l = h(l, i, a, n, t[_o8 + 15], 10, -30611744), n = h(n, l, i, a, t[_o8 + 6], 15, -1560198380), a = h(a, n, l, i, t[_o8 + 13], 21, 1309151649), i = h(i, a, n, l, t[_o8 + 4], 6, -145523070), l = h(l, i, a, n, t[_o8 + 11], 10, -1120210379), n = h(n, l, i, a, t[_o8 + 2], 15, 718787259), a = h(a, n, l, i, t[_o8 + 9], 21, -343485551), i = r(i, _e34), a = r(a, _s7), n = r(n, _c), l = r(l, _v);
      }

      return o(i) + o(a) + o(n) + o(l);
    }

    var T;
    i("a742");

    function m(e, t, i) {
      return Math.min(Math.max(e, t), i);
    }

    (function (e) {
      e[e["Left"] = 0] = "Left", e[e["Middle"] = 1] = "Middle", e[e["Right"] = 2] = "Right";
    })(T || (T = {}));
  },
  f6b1: function f6b1(e, t, i) {
    "use strict";

    i("0e2b");
  },
  fa88: function fa88(e, t, i) {},
  fbc8: function fbc8(e, t, i) {
    "use strict";

    i("8c7f");
  },
  fc86: function fc86(e, t, i) {
    "use strict";

    i("647e");
  },
  fed5: function fed5(e, t, i) {
    "use strict";

    i("28d3");
  }
});