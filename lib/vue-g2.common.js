module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "10ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/scatter-point.vue?vue&type=template&id=9d4bb6a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/scatter-point.vue?vue&type=template&id=9d4bb6a8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/scatter-point.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var scatter_pointvue_type_script_lang_js_ = ({
  name: 'g2-scatterpoint',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          x: 20,
          y: 5
        }, {
          x: 30,
          y: 10
        }, {
          x: 15,
          y: 20
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          x: '数据1',
          y: '数据2',
          type: '类型'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: false
    },
    // 图例位置
    legendPosition: {
      type: String,
      default: 'bottom-center'
    },
    // 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Object,
      default: function _default() {
        return {
          x: false,
          y: false
        };
      }
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 区间范围分色
    intervalRange: {
      type: Object,
      default: function _default() {
        return {
          use: false,
          axis: 'x',
          limit: [18, 24]
        };
      }
    },
    // 分色
    intervalColor: {
      type: Array,
      default: function _default() {
        return ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'];
      }
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      var _this2 = this;

      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 设置数据的显示别名

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (_this.isPercent[key]) {
              // 将数据格式化为百分数
              obj[key]['formatter'] = utils["c" /* percentFormat */];
            } else {
              // 浮点数保留一位小数，整数不做处理
              obj[key]['formatter'] = utils["b" /* floatIntFormat */];
            }
          }
        }

        return obj;
      }(); // 为 chart 装载数据


      this.chart.source(data, scaleConfig);
      var point = this.chart.point().position('x*y').shape('circle'); // 配置图表图例

      if (this.showLegend) {
        this.chart.legend('type', {
          position: this.legendPosition
        });
      } else {
        this.chart.legend('type', false);
      } // 坐标轴配置


      this.chart.axis('x', new utils["a" /* AxisOption */]('x', this.axisColor));
      this.chart.axis('y', new utils["a" /* AxisOption */]('y', this.axisColor, this.showGrid)); // 是否使用tooptip

      if (this.useTooltip) {
        this.chart.tooltip({
          showTitle: false
        });
        point.tooltip('x*y');
      } else {
        this.chart.tooltip(false);
      } // 配置大小


      point.size(5).opacity(0.8); // 配置多类型时的颜色

      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        point.tooltip('type*x*y');

        if (this.intervalRange.use) {
          // 基于区间范围分色
          point.color(this.intervalRange.axis, function (value) {
            var color = '';

            _this2.intervalRange.limit.map(function (item, index) {
              if (value >= item) {
                color = _this2.intervalColor[index + 1];
              } else {
                color = color === '' ? _this2.intervalColor[0] : color;
              }
            });

            return color;
          });
          this.chart.legend(this.intervalRange.axis, false);
        } else {
          // 基于类型分色
          point.color('type');
        }
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/scatter-point.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_scatter_pointvue_type_script_lang_js_ = (scatter_pointvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/scatter-point.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_scatter_pointvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var scatter_point = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1c4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("9b43");
var $export = __webpack_require__("5ca1");
var toObject = __webpack_require__("4bf8");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var toLength = __webpack_require__("9def");
var createProperty = __webpack_require__("f1ae");
var getIterFn = __webpack_require__("27ee");

$export($export.S + $export.F * !__webpack_require__("5cc5")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2366":
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2c3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/sparkline.vue?vue&type=template&id=61dd0c91&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/sparkline.vue?vue&type=template&id=61dd0c91&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/sparkline.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var sparklinevue_type_script_lang_js_ = ({
  name: 'g2-sparkline',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '2018-01',
          value: 86085
        }, {
          name: '2018-02',
          value: 144776
        }, {
          name: '2018-03',
          value: 193868
        }, {
          name: '2018-04',
          value: 9616
        }, {
          name: '2018-05',
          value: 35715
        }, {
          name: '2018-06',
          value: 122503
        }, {
          name: '2018-07',
          value: 44122
        }, {
          name: '2018-08',
          value: 45153
        }, {
          name: '2018-09',
          value: 48675
        }, {
          name: '2018-10',
          value: 22159
        }, {
          name: '2018-11',
          value: 34447
        }, {
          name: '2018-12',
          value: 36865
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: '类型',
          value: '数量'
        };
      }
    },
    // 图表类型 area interval line
    type: {
      type: String,
      default: 'line'
    },
    // 图表颜色
    color: {
      type: String,
      default: '#1890FF'
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    useTooltip: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: 0
      }); // 为 chart 装载数据

      this.chart.source(data); // 进行列定义

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (key === 'value') {
              // 数据格式, 将数据转为百分数或浮点数(保留一位小数), 整数不做处理
              obj[key]['formatter'] = _this.isPercent ? utils["c" /* percentFormat */] : utils["b" /* floatIntFormat */];
            }
          }
        }

        return obj;
      }();

      this.chart.scale(scaleConfig); // 是否使用tooptip

      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true, {
          crosshairs: {
            type: 'line'
          }
        });
      } else {
        this.chart.tooltip(false);
      } // 隐藏图表图例


      this.chart.legend(false); // 隐藏图表坐标轴

      this.chart.axis(false); // 配置图表类别

      if (this.type) {
        this.chart[this.type]().position('name*value').color(this.color);
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/sparkline.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_sparklinevue_type_script_lang_js_ = (sparklinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/sparkline.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_sparklinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sparkline = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "36fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/custom.vue?vue&type=template&id=1eb49d26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/custom.vue?vue&type=template&id=1eb49d26&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/custom.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var customvue_type_script_lang_js_ = ({
  name: 'g2-custom',
  props: {
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    },
    option: {
      Type: Function
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 创建DataSet数据集实例

      var dataset = new this.DataSet(); // 自定义构建

      this.option(this.chart, dataset, data); // 绘制

      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_customvue_type_script_lang_js_ = (customvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/custom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_customvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var custom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "387a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/histogram.vue?vue&type=template&id=da40dd1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/histogram.vue?vue&type=template&id=da40dd1c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/histogram.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var histogramvue_type_script_lang_js_ = ({
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          x: '区间',
          y: '统计'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          titleColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: false
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    },
    // 分组数
    bins: {
      type: Number,
      default: 0
    },
    // 分组长度
    binWidth: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 配置x轴

      this.chart.axis('x', {
        tickLine: null,
        title: {
          autoRotate: false,
          textStyle: {
            fill: this.axisColor.titleColor,
            fontSize: '14',
            textBaseline: 'bottom'
          },
          position: 'end'
        },
        label: {
          autoRotate: false,
          textStyle: {
            fill: this.axisColor.labelColor
          }
        }
      }); // 配置y轴

      this.chart.axis('y', {
        tickLine: null,
        title: {
          autoRotate: false,
          textStyle: {
            fill: this.axisColor.titleColor,
            fontSize: '14',
            textBaseline: 'bottom'
          },
          position: 'end'
        },
        label: {
          textStyle: {
            fill: this.axisColor.labelColor
          }
        },
        grid: !this.showGrid ? null : {}
      });
      data = data.map(function (item) {
        return {
          x: Number(item),
          y: Number(item)
        };
      }); // 为 chart 装载数据

      var ds = new this.DataSet();
      var dv = ds.createView().source(data); // 分箱步长（会覆盖bins选项）

      if (this.binWidth > 0) {
        dv.transform({
          type: 'bin.histogram',
          field: 'y',
          binWidth: this.binWidth,
          // 分箱步长
          offset: 0,
          as: ['x', 'y']
        });
      } else {
        dv.transform({
          type: 'bin.histogram',
          field: 'y',
          bins: this.bins,
          // 分箱个数
          offset: 0,
          as: ['x', 'y']
        });
      }

      if (this.binWidth > 0) {
        this.chart.source(dv, {
          x: {
            sync: true,
            alias: this.axisName.x,
            tickInterval: this.binWidth // 分箱步长

          },
          y: {
            sync: true,
            alias: this.axisName.y
          }
        });
      } else {
        this.chart.source(dv, {
          x: {
            sync: true,
            alias: this.axisName.x
          },
          y: {
            sync: true,
            alias: this.axisName.y
          }
        });
      } // 是否使用tooltip


      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true);
      } else {
        this.chart.tooltip(false);
      } // 配置图形


      this.chart.interval().position('x*y'); // 绘制

      this.chart.render();
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/histogram.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_histogramvue_type_script_lang_js_ = (histogramvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/histogram.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_histogramvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var histogram = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "40ba":
/***/ (function(module, exports) {

module.exports = require("@antv/data-set");

/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "533e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/pie.vue?vue&type=template&id=9f06b5b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/pie.vue?vue&type=template&id=9f06b5b6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/pie.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var pievue_type_script_lang_js_ = ({
  name: 'g2-pie',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '2016',
          value: 2
        }, {
          name: '2017',
          value: 1
        }, {
          name: '2018',
          value: 3
        }];
      }
    },
    height: {
      type: Number,
      default: 300
    },
    colorMap: {
      type: Array,
      default: function _default() {
        return ['#1890FF', '#73C9E6', '#13C2C2', '#6CD9B3', '#2FC25B', '#9DD96C', '#FACC14', '#E6965C', '#F04864', '#D66BCA', '#8543E0', '#8E77ED', '#3436C7', '#737EE6', '#223273', '#7EA2E6'];
      }
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value: 'value'
        };
      }
    },
    // 辅助元素内容
    guide: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 图例配置
    legendOption: {
      type: Object,
      default: function _default() {
        return {
          show: true,
          position: 'bottom-center'
        };
      }
    },
    labelOption: {
      type: Object,
      default: function _default() {
        return {
          show: false,
          offset: 20
        };
      }
    },
    // 图表类型 ring pie nightingale
    type: {
      type: String,
      default: 'ring'
    },
    innerRadius: {
      type: Number,
      default: null
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 如果图形存在则销毁后再创建
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 生成占比数据percent

      var ds = new this.DataSet();
      var dv = ds.createView().source(data).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      }); // 设置数据的显示别名并格式化数据

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];
          }
        }

        return obj;
      }();

      scaleConfig.percent = {};
      scaleConfig.percent = {
        alias: '占比',
        formatter: function formatter(val) {
          return Object(utils["c" /* percentFormat */])(val);
        }
      }; // 为 chart 装载数据

      this.chart.source(dv, scaleConfig); // 配置辅助元素

      if (this.guide.name || this.guide.value) {
        this.chart.guide().html({
          position: ['50%', '50%'],
          html: "<div style=\"text-align: center;width: 10em;\">\n              <span style=\"color:rgba(0,0,0,0.65);font-size:".concat(this.height / 15, "px\">").concat(this.guide.name ? this.guide.name : '', "</span><br>\n              <span style=\"color:#000000;font-size:").concat(this.height / 10, "px\">").concat(this.guide.value ? this.guide.value : '', "</span>\n            </div>"),
          alignX: 'middle',
          alignY: 'middle'
        });
      }

      var interval = ''; // 根据图表类型(ring,pie,nightingale)选择不同的坐标系(theta,polar)以及设置内半径

      if (this.type === 'ring') {
        this.chart.coord('theta', {
          innerRadius: this.innerRadius === null ? 0.75 : this.innerRadius
        });
        interval = this.chart.intervalStack().position('value');
      } else if (this.type === 'pie') {
        this.chart.coord('theta', {
          innerRadius: this.innerRadius === null ? 0 : this.innerRadius
        });
        interval = this.chart.intervalStack().position('value');
      } else if (this.type === 'nightingale') {
        this.chart.coord('polar', {
          innerRadius: this.innerRadius === null ? 0.2 : this.innerRadius
        });
        interval = this.chart.interval().position('name*value');
      } // 关闭坐标轴


      this.chart.axis(false); // 配置颜色

      interval.color('name', this.colorMap); //  是否使用tooltip

      if (this.useTooltip) {
        // 配置 tooltip
        this.chart.tooltip({
          showTitle: false
        });
        interval.tooltip('name*value*percent');
      } else {
        this.chart.tooltip(false);
      } // 配置文本


      if (this.labelOption.show) {
        interval.label('percent', {
          offset: this.labelOption.offset,
          formatter: function formatter(val, item) {
            return item.point.name + ': ' + val;
          }
        });
      } // 配置图例


      if (this.legendOption.show) {
        this.chart.legend('name', {
          position: this.legendOption.position
        });
      } else {
        this.chart.legend(false);
      } // 渲染


      this.chart.render(); // 注册点击事件

      this.chart.on('interval:click', function (ev) {
        var data = ev.data._origin;

        _this.$emit('itemClick', data);
      }); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/pie.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_pievue_type_script_lang_js_ = (pievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/pie.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_pievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pie = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5346":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/mirror-interval.vue?vue&type=template&id=ad7ff6dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/mirror-interval.vue?vue&type=template&id=ad7ff6dc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/mirror-interval.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mirror_intervalvue_type_script_lang_js_ = ({
  name: 'g2-mirrorinterval',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '1997',
          value: 86085,
          type: 'America'
        }, {
          name: '2007',
          value: 144776,
          type: 'America'
        }, {
          name: '2017',
          value: 193868,
          type: 'America'
        }, {
          name: '1997',
          value: 9616,
          type: 'China'
        }, {
          name: '2007',
          value: 35715,
          type: 'China'
        }, {
          name: '2017',
          value: 122503,
          type: 'China'
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
        };
      }
    },
    // 坐标轴颜色 'rgba(0, 0, 0, 0.85)'
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          labelColor: '#999'
        };
      }
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // Canvas 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 设置数据设置别名并且设置为异步数据

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];
            obj[key]['sync'] = true;
          }
        }

        return obj;
      }(); // 为 chart 装载数据


      this.chart.source(data, scaleConfig);
      var labelColor = this.axisColor.labelColor; // 设置 mirror 分面

      this.chart.facet('mirror', {
        fields: ['type'],
        // 配置 transpose 属性为 true，可以将镜像分面翻转。
        transpose: true,
        // 列标题
        colTitle: {
          offsetY: -15,
          style: {
            fontSize: 14,
            textAlign: 'center',
            fill: labelColor
          }
        },
        eachView: function eachView(view) {
          // name 坐标轴配置项
          view.axis('name', {
            position: 'top',
            line: null,
            tickLine: null,
            title: null,
            label: {
              autoRotate: false,
              textStyle: {
                fill: labelColor
              }
            }
          }); // 隐藏 value 坐标轴

          view.axis('value', false); // 配置柱图的颜色、大小等

          view.interval().size(25).position('name*value').color('type');
        }
      }); // 隐藏图例

      this.chart.legend(false); // 是否使用tooltip

      if (this.useTooltip) {
        // 配置tooltip
        this.chart.tooltip(true);
      } else {
        this.chart.tooltip(false);
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/mirror-interval.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_mirror_intervalvue_type_script_lang_js_ = (mirror_intervalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/mirror-interval.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_mirror_intervalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mirror_interval = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "6992":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/area.vue?vue&type=template&id=7093096b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/area.vue?vue&type=template&id=7093096b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/area.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var areavue_type_script_lang_js_ = ({
  name: 'g2-area',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '1997',
          value: 86085,
          type: 'America'
        }, {
          name: '2007',
          value: 144776,
          type: 'America'
        }, {
          name: '2017',
          value: 193868,
          type: 'America'
        }, {
          name: '1997',
          value: 9616,
          type: 'China'
        }, {
          name: '2007',
          value: 35715,
          type: 'China'
        }, {
          name: '2017',
          value: 122503,
          type: 'China'
        }, {
          name: '1997',
          value: 44122,
          type: 'Japan'
        }, {
          name: '2007',
          value: 45153,
          type: 'Japan'
        }, {
          name: '2017',
          value: 48675,
          type: 'Japan'
        }, {
          name: '1997',
          value: 22159,
          type: 'Germany'
        }, {
          name: '2007',
          value: 34447,
          type: 'Germany'
        }, {
          name: '2017',
          value: 36865,
          type: 'Germany'
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示点
    showPoint: {
      type: Boolean,
      default: true
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    // 是否显示曲线
    isSmooth: {
      type: Boolean,
      default: false
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 为 chart 装载数据

      this.chart.source(data); // 进行列定义

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (key === 'value') {
              // 数据格式, 将数据转为百分数或浮点数(保留一位小数), 整数不做处理
              obj[key]['formatter'] = _this.isPercent ? utils["c" /* percentFormat */] : utils["b" /* floatIntFormat */];
            }
          }
        }

        return obj;
      }();

      this.chart.scale(scaleConfig); // 是否使用tooltip

      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true, {
          crosshairs: {
            type: 'line'
          }
        });
      } else {
        this.chart.tooltip(false);
      } // 配置图表图例


      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        });
      } else {
        this.chart.legend('type', false);
      } // 坐标轴配置


      this.chart.axis('name', new utils["a" /* AxisOption */]('name', this.axisColor));
      this.chart.axis('value', new utils["a" /* AxisOption */]('value', this.axisColor, this.showGrid)); // 配置折线和散点的颜色、形状等

      var area = this.chart.area().position('name*value');
      var point;

      if (this.showPoint) {
        point = this.chart.point().position('name*value').size(4).shape('circle').style({
          stroke: '#fff',
          lineWidth: 1
        });
      } // 配置多条折线时的颜色


      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        area.color('type');

        if (this.showPoint) {
          point.color('type');
        }
      } // 折线是否显示为曲线


      if (this.isSmooth) {
        area.shape('smooth');
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/area.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_areavue_type_script_lang_js_ = (areavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/area.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_areavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var g2Components_area = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "72bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/bubble.vue?vue&type=template&id=49fe201d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/bubble.vue?vue&type=template&id=49fe201d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/bubble.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var bubblevue_type_script_lang_js_ = ({
  name: 'g2-bubble',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          x: 20,
          y: 5,
          size: 15,
          type: 'type1'
        }, {
          x: 30,
          y: 10,
          size: 8,
          type: 'type2'
        }, {
          x: 15,
          y: 20,
          size: 15,
          type: 'type3'
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          x: '数据1',
          y: '数据2',
          type: '类型',
          size: '大小'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    // 是否显示网格线
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 图例位置
    legendPosition: {
      type: String,
      default: 'bottom-center'
    },
    // 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Object,
      default: function _default() {
        return {
          x: false,
          y: false
        };
      }
    },
    minSize: {
      type: Number,
      default: 10
    },
    maxSize: {
      type: Number,
      default: 20
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 设置数据的显示别名

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (_this.isPercent[key]) {
              // 将数据格式化为百分数
              obj[key]['formatter'] = utils["c" /* percentFormat */];
            } else {
              // 浮点数保留一位小数，整数不做处理
              obj[key]['formatter'] = utils["b" /* floatIntFormat */];
            }
          }
        }

        return obj;
      }(); // 为 chart 装载数据


      this.chart.source(data, scaleConfig);
      var defaultColorMap = ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'];
      var colorMap = Array.from(new Array(8), function (v, i) {
        return defaultColorMap[i];
      });
      var bullle = this.chart.point().position('x*y').shape('circle'); // 坐标轴配置

      this.chart.axis('x', new utils["a" /* AxisOption */]('x', this.axisColor));
      this.chart.axis('y', new utils["a" /* AxisOption */]('y', this.axisColor, this.showGrid)); // 配置图表图例

      this.chart.legend('size', false);

      if (this.showLegend) {
        this.chart.legend('type', {
          position: this.legendPosition
        });
      } else {
        this.chart.legend('type', false);
      } // 是否使用tooltip


      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip({
          showTitle: false
        });
        bullle.tooltip('type*x*y');
      } else {
        this.chart.tooltip(false);
      } // 配置 颜色 大小


      bullle.color('type', colorMap).size('size', [this.minSize, this.maxSize]).opacity(0.5); // 绘制

      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/bubble.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_bubblevue_type_script_lang_js_ = (bubblevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/bubble.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_bubblevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bubble = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7c93":
/***/ (function(module, exports) {

module.exports = require("@antv/g2");

/***/ }),

/***/ "7d15":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./area.vue": "6992",
	"./bubble.vue": "72bb",
	"./column.vue": "d507",
	"./custom.vue": "36fe",
	"./double-axis-column.vue": "f018",
	"./histogram.vue": "387a",
	"./index.js": "da49",
	"./line.vue": "d339",
	"./liquidfill.vue": "aea5",
	"./mirror-interval.vue": "5346",
	"./pie.vue": "533e",
	"./progress-bar.vue": "c95a",
	"./radar.vue": "fec1",
	"./scatter-point.vue": "10ec",
	"./sparkline.vue": "2c3a",
	"./word-cloud.vue": "8208"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "7d15";

/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8208":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/word-cloud.vue?vue&type=template&id=09dc6b50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/word-cloud.vue?vue&type=template&id=09dc6b50&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/word-cloud.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var word_cloudvue_type_script_lang_js_ = ({
  name: 'g2-pie',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          'value': 9,
          'name': 'AntV'
        }, {
          'value': 8,
          'name': 'F2'
        }, {
          'value': 8,
          'name': 'G2'
        }, {
          'value': 8,
          'name': 'G6'
        }, {
          'value': 8,
          'name': 'DataSet'
        }, {
          'value': 8,
          'name': '墨者学院'
        }, {
          'value': 6,
          'name': 'Analysis'
        }, {
          'value': 6,
          'name': 'Data Mining'
        }, {
          'value': 6,
          'name': 'Data Vis'
        }, {
          'value': 6,
          'name': 'Design'
        }, {
          'value': 6,
          'name': 'Grammar'
        }, {
          'value': 6,
          'name': 'Graphics'
        }, {
          'value': 6,
          'name': 'Graph'
        }, {
          'value': 6,
          'name': 'Hierarchy'
        }, {
          'value': 6,
          'name': 'Labeling'
        }, {
          'value': 6,
          'name': 'Layout'
        }, {
          'value': 6,
          'name': 'Quantitative'
        }, {
          'value': 6,
          'name': 'Relation'
        }, {
          'value': 6,
          'name': 'Statistics'
        }, {
          'value': 6,
          'name': '可视化'
        }, {
          'value': 6,
          'name': '数据'
        }, {
          'value': 6,
          'name': '数据可视化'
        }, {
          'value': 4,
          'name': 'Arc Diagram'
        }, {
          'value': 4,
          'name': 'Bar Chart'
        }, {
          'value': 4,
          'name': 'Canvas'
        }, {
          'value': 4,
          'name': 'Chart'
        }, {
          'value': 4,
          'name': 'DAG'
        }, {
          'value': 4,
          'name': 'DG'
        }, {
          'value': 4,
          'name': 'Facet'
        }, {
          'value': 4,
          'name': 'Geo'
        }, {
          'value': 4,
          'name': 'Line'
        }, {
          'value': 4,
          'name': 'MindMap'
        }, {
          'value': 4,
          'name': 'Pie'
        }, {
          'value': 4,
          'name': 'Pizza Chart'
        }, {
          'value': 4,
          'name': 'Punch Card'
        }, {
          'value': 4,
          'name': 'SVG'
        }, {
          'value': 4,
          'name': 'Sunburst'
        }, {
          'value': 4,
          'name': 'Tree'
        }, {
          'value': 4,
          'name': 'UML'
        }, {
          'value': 3,
          'name': 'Chart'
        }, {
          'value': 3,
          'name': 'View'
        }, {
          'value': 3,
          'name': 'Geom'
        }, {
          'value': 3,
          'name': 'Shape'
        }, {
          'value': 3,
          'name': 'Scale'
        }, {
          'value': 3,
          'name': 'Animate'
        }, {
          'value': 3,
          'name': 'Global'
        }, {
          'value': 3,
          'name': 'Slider'
        }, {
          'value': 3,
          'name': 'Connector'
        }, {
          'value': 3,
          'name': 'Transform'
        }, {
          'value': 3,
          'name': 'Util'
        }, {
          'value': 3,
          'name': 'DomUtil'
        }, {
          'value': 3,
          'name': 'MatrixUtil'
        }, {
          'value': 3,
          'name': 'PathUtil'
        }, {
          'value': 3,
          'name': 'G'
        }, {
          'value': 3,
          'name': '2D'
        }, {
          'value': 3,
          'name': '3D'
        }, {
          'value': 3,
          'name': 'Line'
        }, {
          'value': 3,
          'name': 'Area'
        }, {
          'value': 3,
          'name': 'Interval'
        }, {
          'value': 3,
          'name': 'Schema'
        }, {
          'value': 3,
          'name': 'Edge'
        }, {
          'value': 3,
          'name': 'Polygon'
        }, {
          'value': 3,
          'name': 'Heatmap'
        }, {
          'value': 3,
          'name': 'Render'
        }, {
          'value': 3,
          'name': 'Tooltip'
        }, {
          'value': 3,
          'name': 'Axis'
        }, {
          'value': 3,
          'name': 'Guide'
        }, {
          'value': 3,
          'name': 'Coord'
        }, {
          'value': 3,
          'name': 'Legend'
        }, {
          'value': 3,
          'name': 'Path'
        }, {
          'value': 3,
          'name': 'Helix'
        }, {
          'value': 3,
          'name': 'Theta'
        }, {
          'value': 3,
          'name': 'Rect'
        }, {
          'value': 3,
          'name': 'Polar'
        }, {
          'value': 3,
          'name': 'Dsv'
        }, {
          'value': 3,
          'name': 'Csv'
        }, {
          'value': 3,
          'name': 'Tsv'
        }, {
          'value': 3,
          'name': 'GeoJSON'
        }, {
          'value': 3,
          'name': 'TopoJSON'
        }, {
          'value': 3,
          'name': 'Filter'
        }, {
          'value': 3,
          'name': 'Map'
        }, {
          'value': 3,
          'name': 'Pick'
        }, {
          'value': 3,
          'name': 'Rename'
        }, {
          'value': 3,
          'name': 'Filter'
        }, {
          'value': 3,
          'name': 'Map'
        }, {
          'value': 3,
          'name': 'Pick'
        }, {
          'value': 3,
          'name': 'Rename'
        }, {
          'value': 3,
          'name': 'Reverse'
        }, {
          'value': 3,
          'name': 'sort'
        }, {
          'value': 3,
          'name': 'Subset'
        }, {
          'value': 3,
          'name': 'Partition'
        }, {
          'value': 3,
          'name': 'Imputation'
        }, {
          'value': 3,
          'name': 'Fold'
        }, {
          'value': 3,
          'name': 'Aggregate'
        }, {
          'value': 3,
          'name': 'Proportion'
        }, {
          'value': 3,
          'name': 'Histogram'
        }, {
          'value': 3,
          'name': 'Quantile'
        }, {
          'value': 3,
          'name': 'Treemap'
        }, {
          'value': 3,
          'name': 'Hexagon'
        }, {
          'value': 3,
          'name': 'Binning'
        }, {
          'value': 3,
          'name': 'kernel'
        }, {
          'value': 3,
          'name': 'Regression'
        }, {
          'value': 3,
          'name': 'Density'
        }, {
          'value': 3,
          'name': 'Sankey'
        }, {
          'value': 3,
          'name': 'Voronoi'
        }, {
          'value': 3,
          'name': 'Projection'
        }, {
          'value': 3,
          'name': 'Centroid'
        }, {
          'value': 3,
          'name': 'H5'
        }, {
          'value': 3,
          'name': 'Mobile'
        }, {
          'value': 3,
          'name': 'K线图'
        }, {
          'value': 3,
          'name': '关系图'
        }, {
          'value': 3,
          'name': '烛形图'
        }, {
          'value': 3,
          'name': '股票图'
        }, {
          'value': 3,
          'name': '直方图'
        }, {
          'value': 3,
          'name': '金字塔图'
        }, {
          'value': 3,
          'name': '分面'
        }, {
          'value': 3,
          'name': '南丁格尔玫瑰图'
        }, {
          'value': 3,
          'name': '饼图'
        }, {
          'value': 3,
          'name': '线图'
        }, {
          'value': 3,
          'name': '点图'
        }, {
          'value': 3,
          'name': '散点图'
        }, {
          'value': 3,
          'name': '子弹图'
        }, {
          'value': 3,
          'name': '柱状图'
        }, {
          'value': 3,
          'name': '仪表盘'
        }, {
          'value': 3,
          'name': '气泡图'
        }, {
          'value': 3,
          'name': '漏斗图'
        }, {
          'value': 3,
          'name': '热力图'
        }, {
          'value': 3,
          'name': '玉玦图'
        }, {
          'value': 3,
          'name': '直方图'
        }, {
          'value': 3,
          'name': '矩形树图'
        }, {
          'value': 3,
          'name': '箱形图'
        }, {
          'value': 3,
          'name': '色块图'
        }, {
          'value': 3,
          'name': '螺旋图'
        }, {
          'value': 3,
          'name': '词云'
        }, {
          'value': 3,
          'name': '词云图'
        }, {
          'value': 3,
          'name': '雷达图'
        }, {
          'value': 3,
          'name': '面积图'
        }, {
          'value': 3,
          'name': '马赛克图'
        }, {
          'value': 3,
          'name': '盒须图'
        }, {
          'value': 3,
          'name': '坐标轴'
        }, {
          'value': 3,
          'name': ''
        }, {
          'value': 3,
          'name': 'Jacques Bertin'
        }, {
          'value': 3,
          'name': 'Leland Wilkinson'
        }, {
          'value': 3,
          'name': 'William Playfair'
        }, {
          'value': 3,
          'name': '关联'
        }, {
          'value': 3,
          'name': '分布'
        }, {
          'value': 3,
          'name': '区间'
        }, {
          'value': 3,
          'name': '占比'
        }, {
          'value': 3,
          'name': '地图'
        }, {
          'value': 3,
          'name': '时间'
        }, {
          'value': 3,
          'name': '比较'
        }, {
          'value': 3,
          'name': '流程'
        }, {
          'value': 3,
          'name': '趋势'
        }, {
          'value': 2,
          'name': '亦叶'
        }, {
          'value': 2,
          'name': '再飞'
        }, {
          'value': 2,
          'name': '完白'
        }, {
          'value': 2,
          'name': '巴思'
        }, {
          'value': 2,
          'name': '张初尘'
        }, {
          'value': 2,
          'name': '御术'
        }, {
          'value': 2,
          'name': '有田'
        }, {
          'value': 2,
          'name': '沉鱼'
        }, {
          'value': 2,
          'name': '玉伯'
        }, {
          'value': 2,
          'name': '画康'
        }, {
          'value': 2,
          'name': '祯逸'
        }, {
          'value': 2,
          'name': '绝云'
        }, {
          'value': 2,
          'name': '罗宪'
        }, {
          'value': 2,
          'name': '萧庆'
        }, {
          'value': 2,
          'name': '董珊珊'
        }, {
          'value': 2,
          'name': '陆沉'
        }, {
          'value': 2,
          'name': '顾倾'
        }, {
          'value': 2,
          'name': 'Domo'
        }, {
          'value': 2,
          'name': 'GPL'
        }, {
          'value': 2,
          'name': 'PAI'
        }, {
          'value': 2,
          'name': 'SPSS'
        }, {
          'value': 2,
          'name': 'SYSTAT'
        }, {
          'value': 2,
          'name': 'Tableau'
        }, {
          'value': 2,
          'name': 'D3'
        }, {
          'value': 2,
          'name': 'Vega'
        }, {
          'value': 2,
          'name': '统计图表'
        }];
      }
    },
    useImage: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 图片地址(url/base64)
    imageSrc: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAMAAABlASxnAAAAhFBMVEX///8h3vT1/v/9//8l3/Tw/f4x4fVD4/Y34vX5/v8o3/R77Pk84vWY8PrI9/xc5/fr/P6v9Pul8vuf8fqG7vlW5vdK5fbT+f1w6vjh+/6M7vlq6fgs4PXZ+v3O+P289fy49fyC7fkr4PXm+/6S7/pl6Pd16/hh6Pep8/vC9vze+v3A9vzdw9osAAAESUlEQVR42u3dCZaiMBAG4Co2AREEEcV9t2fm/veb1Z5+M7aiBCyS/ztCHkkqtSgBAAAAAAAAAAAAAAAAAAAAAAAA6M6Ns3w+LnwvZPa8qDj3B+kyIPiHvRocfb7GKfrpnuDCfZsv+KbeNrYJyErPDlfgbydkuK9bjysrMpMPsNWRH+MdXDLTKuHHLWYmLlc55+d4mWlnfTAL+Wm9mEwS97iWvjl7Mci5rsiUj+trwQrMjDi5NgtWIhmS7uwZqxItSW/BlNVZfCOdWQmr5KSkL3fMimWkK2vM3PBqWZM0G8y2eX7I1p3OG1pjbkD6N394SHz+yOmdspI6yT5yE5w1/eCmxx1f1cu7mAfrczPCJU1OO76hGFnULRk3xU/4Hq9biZ2Vwy+1OHTn63J9frVoTR1xZAHm3diLGYvgdyGxs1+wDM6IxDuzGH3pabANC3KU/QgKeizJWfRqDViWqeCdaHksTJ/EOrA4Yu9EeR8Ws7MimUYsUCQzlrdlXYUXc5LoC8u0IYHmLJMvMGPjOizUjMR5Y6l28qr/CYu1JWHk7kLmnbTwQVS+4V4cb7n7vWvRYzpQ/lKioD+CVZafeyH/Ekbj/igOqH0yI9KLCf3wdZCE/J9wPFhSu4Ys2pbcUXGrNjukFq1ZNP8U8k3OdEK36Z2dedT55nKZ8NZ5yOnzzWjQ+V6V92ZTC0LWw3FIVxh1GT7AX1HTVqwN540aVGbTiHUyo4aUh4K1s7VJPXsjOC9TR06q2ake8cI1A1Lri75L9UNKCg21CNk/F05ImVRKz1pjIovUsE6svykp8VXr0+rdmhSYCOz/+EhScfbLjg0xo7rWgkteioV7qifWJRfTQt/gUvuQ4SNnSDW4eqUXGn0j2pq+mz/lBfp0bl8n44m4NOcivDjSk+wxGye06DkpG2hNT7FeP6Fa1ev74Mw73X8qtBmfaIOrzfhEC2J6nG1Y7P5upF//VXP6tqEtRXeo+qVny5iM3zVJrE/jdguSpS6N221wZoFhjX21FKVxvWo1eHG35y7bFa7xLqzOiXG+V7dYdXuWsF3+EJdhdWeb7jEy7/fsw9qo0upt3t2NyPDuhMWqzinpNqNzDo+2ixiaf79uZyF0UFbTN7AWfUNCN00Z/goD3SegVYqRVVY12VMyfHDC47C6McqG1UVd/SWxV/BQsajOIYSllYXd+AMBGTw0O1QX0R1bhouE7tib1wT/qT5qhyqLFiU+rYsJ3ZUz/OLZdJdlag/uv6Zo/6vuC/2GhOl9vo1BVuU/6jMxaZz8E56FMbrKBpgNq6wX0AWiLaWDT/aMTZZjmK6ycUAP2hh7JxYuPWxpaKNItKcnWEbG8r09PWdjXjA/dulZVm5YfisPqIZyatBy9WKqqewbUvPxBgHVZ2UGVF/9gUWKDN/mOvfYeNO1TUqVOoYSiyjpj5aC/1wZAAAAAAAAAAAAAAAAAAAAAAAA4N13ldiNbr8pwIsAAAAASUVORK5CYII='
    },
    // DOM 高度
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: Number,
      default: 600
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      if (data === '' || data === null || data.length === 0) {
        data = [{
          'value': 20,
          'name': '暂无数据'
        }, {
          'value': 0,
          'name': ''
        }];
      }

      function getTextAttrs(cfg) {
        return Object.assign({}, {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        }, cfg.style);
      } // 给point注册一个词云的shape


      this.G2.Shape.registerShape('point', 'cloud', {
        drawShape: function drawShape(cfg, container) {
          var attrs = getTextAttrs(cfg);
          return container.addShape('text', {
            attrs: Object.assign(attrs, {
              x: cfg.x,
              y: cfg.y
            })
          });
        }
      });
      var dv = new this.DataSet.View().source(data);
      var range = dv.range('value');
      var min = range[0];
      var max = range[1];

      var _this = this;

      if (this.useImage) {
        var imageMask = new Image();
        imageMask.src = this.imageSrc;

        imageMask.onload = function (ev) {
          _this.drawCloud(_this, dv, min, max, imageMask);
        };
      } else {
        _this.drawCloud(_this, dv, min, max, imageMask);
      }
    },
    drawCloud: function drawCloud(_this, dv, min, max, imageMask) {
      if (_this.chart) {
        _this.chart.destroy();
      } // 新建实例


      _this.chart = new this.G2.Chart({
        container: _this.id,
        width: _this.width,
        height: _this.height,
        padding: _this.padding
      });
      dv.transform({
        type: 'tag-cloud',
        fields: ['name', 'value'],
        imageMask: imageMask,
        font: 'Verdana',
        size: [_this.width, _this.height],
        // 宽高设置最好根据 imageMask 做调整
        padding: 0,
        timeInterval: 5000,
        rotate: function rotate() {
          var random = ~~(Math.random() * 3) % 3;

          if (random === 2) {
            random = -1;
          }

          return random * 45;
        },
        fontSize: function fontSize(d) {
          return (d.value - min) / (max - min) * (32 - 8) + 8;
        }
      }); // 挂载数据

      _this.chart.source(dv, {
        x: {
          nice: false
        },
        y: {
          nice: false
        }
      }); // 关闭图例


      _this.chart.legend(false); // 关闭坐标轴


      _this.chart.axis(false); // 选择坐标系


      _this.chart.coord().reflect();

      var point = _this.chart.point().position('x*y').color('text').shape('cloud'); // 是否使用tooptip


      if (_this.useTooltip) {
        _this.chart.tooltip({
          showTitle: false
        });

        point.tooltip('name*value');
      } else {
        _this.chart.tooltip(false);
      } // 渲染


      _this.chart.render(); // 注册点击事件


      _this.chart.on('point:click', function (ev) {
        var data = ev.data._origin;

        _this.$emit('itemClick', data);
      }); // 销毁实例


      _this.$once('hook:beforeDestroy', function () {
        _this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/word-cloud.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_word_cloudvue_type_script_lang_js_ = (word_cloudvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/word-cloud.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_word_cloudvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var word_cloud = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aea5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/liquidfill.vue?vue&type=template&id=3005eb22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/liquidfill.vue?vue&type=template&id=3005eb22&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/liquidfill.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var liquidfillvue_type_script_lang_js_ = ({
  name: 'g2-liquidfill',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '中国',
          value: 0.3
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value: 'value'
        };
      }
    },
    // 最大值
    maxValue: {
      type: Number,
      default: 1
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // Canvas 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    },
    // 颜色配置
    color: {
      type: Object,
      default: function _default() {
        return {
          labelColor: 'rgba(0,0,0,0.65)',
          backgroundColor: '#1890FF'
        };
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 设置数据的显示别名以及最大值、最小值

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (key === 'value') {
              obj[key]['max'] = _this.maxValue;
              obj[key]['min'] = 0;
            }
          }
        }

        return obj;
      }(); // 为 chart 装载数据


      this.chart.source(data, scaleConfig); // 隐藏图例

      this.chart.legend(false); // 隐藏坐标轴

      this.chart.axis(false); // 配置液体流动的边框颜色等

      this.chart.interval().position('name*value').color('name', this.color.backgroundColor).shape('liquid-fill-gauge').style({
        lineWidth: 2,
        opacity: 0.65
      }); // 是否使用tooltip

      if (this.useTooltip) {
        // 配置tooltip
        this.chart.tooltip(true);
      } else {
        this.chart.tooltip(false);
      } // 添加文本辅助元素


      var guideContent = this.isPercent ? Object(utils["c" /* percentFormat */])(this.data[0].value) : Object(utils["b" /* floatIntFormat */])(this.data[0].value);
      this.chart.guide().text({
        // 文本辅助元素位置
        top: true,
        position: {
          name: this.data[0].name,
          value: this.maxValue / 2
        },
        // 文本辅助元素内容
        content: guideContent,
        // 文本辅助元素样式
        style: {
          fill: this.color.labelColor,
          fontSize: this.height / 8,
          textAlign: 'center'
        }
      }); // 绘制

      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/liquidfill.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_liquidfillvue_type_script_lang_js_ = (liquidfillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/liquidfill.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_liquidfillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var liquidfill = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c64e":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("e1f4");
var bytesToUuid = __webpack_require__("2366");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c95a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/progress-bar.vue?vue&type=template&id=37874470&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/progress-bar.vue?vue&type=template&id=37874470&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/progress-bar.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var progress_barvue_type_script_lang_js_ = ({
  name: 'g2-progress-bar',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          'name': '中国',
          'value': 0.88
        }, {
          'name': '其他',
          'value': 0.12
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 45
    },
    // 图表颜色
    color: {
      type: Array,
      default: function _default() {
        return ['#1890FF', '#e8e8e8'];
      }
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    // 标记线
    markLine: {
      type: Object,
      default: function _default() {
        return {
          use: false,
          name: '均值',
          value: 0.5,
          lineColor: '#1890FF',
          labelColor: '#000000',
          labelSize: '14'
        };
      }
    },
    // 辅助元素
    guide: {
      type: Object,
      default: function _default() {
        return {
          showName: true,
          showValue: true,
          labelColor: '#000000',
          labelSize: '14'
        };
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // padding top


      var paddingTop = 0;

      if (this.guide.showName || this.guide.showValue) {
        this.guide.labelSize = this.guide.labelSize || '14';
        paddingTop = parseInt(this.guide.labelSize) + 5;
      }

      if (this.markLine.use) {
        this.markLine.labelSize = this.markLine.labelSize || '14';
        paddingTop = parseInt(this.markLine.labelSize) + 5;
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: [paddingTop, 0, 0, 0]
      });
      var ds = new this.DataSet();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent'
      }); // 为 chart 装载数据

      this.chart.source(dv); // x，y 轴交换

      this.chart.coord().transpose(); // 隐藏图表tooltip

      this.chart.tooltip(false); // 隐藏图表图例

      this.chart.legend(false); // 隐藏图表坐标轴

      this.chart.axis(false); // 配置图表

      this.chart.intervalStack().position('1*percent').color('name', this.color);

      if (this.guide.showName) {
        // 配置辅助元素-name
        this.chart.guide().text({
          top: true,
          position: [0, 0],
          content: this.data[0].name,
          style: {
            fill: this.guide.labelColor,
            fontSize: this.guide.labelSize || '14'
          },
          offsetX: 0,
          offsetY: -30
        });
      }

      if (this.guide.showValue) {
        // 辅助元素-value 格式化-整数或百分比
        var value = this.isPercent ? Object(utils["c" /* percentFormat */])(this.data[0].value) : Object(utils["b" /* floatIntFormat */])(this.data[0].value); // 辅助元素-value x轴偏移量

        var valueOffsetX = this.isPercent ? this.chart._attrs.width - String(value).length * Number(this.guide.labelSize) : this.chart._attrs.width - (String(value).length - 1) * Number(this.guide.labelSize); // 配置辅助元素-value

        this.chart.guide().text({
          top: true,
          position: [0, 0],
          content: value,
          style: {
            fill: this.guide.labelColor,
            fontSize: this.guide.labelSize || '14'
          },
          offsetX: valueOffsetX,
          offsetY: -30
        });
      } // 配置标记线 markLine


      if (this.markLine.use) {
        // 根据数值大小动态调整文本的对齐方式
        var percent = this.markLine.value / (this.data[0].value + this.data[1].value);

        var textAlign = function () {
          if (percent >= 0.7) {
            return 'right';
          } else if (percent <= 0.3) {
            return 'left';
          } else {
            return 'center';
          }
        }();

        this.chart.guide().line({
          start: [0, percent],
          end: [1, percent],
          lineStyle: {
            stroke: this.markLine.lineColor
          },
          text: {
            position: 'end',
            autoRotate: false,
            content: "".concat(this.markLine.name, ": ").concat(this.isPercent ? Object(utils["c" /* percentFormat */])(this.markLine.value) : Object(utils["b" /* floatIntFormat */])(this.markLine.value)),
            style: {
              textAlign: textAlign,
              fill: this.markLine.labelColor,
              fontSize: String(Number(this.markLine.labelSize) - 2) || '12'
            }
          }
        });
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/progress-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_progress_barvue_type_script_lang_js_ = (progress_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/progress-bar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_progress_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var progress_bar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d339":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/line.vue?vue&type=template&id=716641f9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/line.vue?vue&type=template&id=716641f9&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/line.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var linevue_type_script_lang_js_ = ({
  name: 'g2-line',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '1997',
          value: 86085,
          type: 'America'
        }, {
          name: '2007',
          value: 144776,
          type: 'America'
        }, {
          name: '2017',
          value: 193868,
          type: 'America'
        }, {
          name: '1997',
          value: 9616,
          type: 'China'
        }, {
          name: '2007',
          value: 35715,
          type: 'China'
        }, {
          name: '2017',
          value: 122503,
          type: 'China'
        }, {
          name: '1997',
          value: 44122,
          type: 'Japan'
        }, {
          name: '2007',
          value: 45153,
          type: 'Japan'
        }, {
          name: '2017',
          value: 48675,
          type: 'Japan'
        }, {
          name: '1997',
          value: 22159,
          type: 'Germany'
        }, {
          name: '2007',
          value: 34447,
          type: 'Germany'
        }, {
          name: '2017',
          value: 36865,
          type: 'Germany'
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示点
    showPoint: {
      type: Boolean,
      default: true
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    // 是否显示曲线
    isSmooth: {
      type: Boolean,
      default: false
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 为 chart 装载数据

      this.chart.source(data); // 进行列定义

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (key === 'value') {
              // 数据格式, 将数据转为百分数或浮点数(保留一位小数), 整数不做处理
              obj[key]['formatter'] = _this.isPercent ? utils["c" /* percentFormat */] : utils["b" /* floatIntFormat */];
            }
          }
        }

        return obj;
      }();

      this.chart.scale(scaleConfig); // 是否使用tooltip

      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true, {
          crosshairs: {
            type: 'line'
          }
        });
      } else {
        this.chart.tooltip(false);
      } // 配置图表图例


      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        });
      } else {
        this.chart.legend('type', false);
      } // 坐标轴配置


      this.chart.axis('name', new utils["a" /* AxisOption */]('name', this.axisColor));
      this.chart.axis('value', new utils["a" /* AxisOption */]('value', this.axisColor, this.showGrid)); // 配置折线和散点的颜色、形状等

      var line = this.chart.line().position('name*value');
      var point;

      if (this.showPoint) {
        point = this.chart.point().position('name*value').size(4).shape('circle').style({
          stroke: '#fff',
          lineWidth: 1
        });
      } // 配置多条折线时的颜色


      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        line.color('type');

        if (this.showPoint) {
          point.color('type');
        }
      } // 折线是否显示为曲线


      if (this.isSmooth) {
        line.shape('smooth');
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/line.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_linevue_type_script_lang_js_ = (linevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/line.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_linevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var g2Components_line = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d507":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/column.vue?vue&type=template&id=9abfd89c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/column.vue?vue&type=template&id=9abfd89c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/column.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var columnvue_type_script_lang_js_ = ({
  name: 'g2-column',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '1997',
          value: 86085,
          type: 'America'
        }, {
          name: '2007',
          value: 144776,
          type: 'America'
        }, {
          name: '2017',
          value: 193868,
          type: 'America'
        }, {
          name: '1997',
          value: 9616,
          type: 'China'
        }, {
          name: '2007',
          value: 35715,
          type: 'China'
        }, {
          name: '2017',
          value: 122503,
          type: 'China'
        }, {
          name: '1997',
          value: 44122,
          type: 'Japan'
        }, {
          name: '2007',
          value: 45153,
          type: 'Japan'
        }, {
          name: '2017',
          value: 48675,
          type: 'Japan'
        }, {
          name: '1997',
          value: 22159,
          type: 'Germany'
        }, {
          name: '2007',
          value: 34447,
          type: 'Germany'
        }, {
          name: '2017',
          value: 36865,
          type: 'Germany'
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 分组或堆叠(dodge、fold)
    type: {
      type: String,
      default: 'fold'
    },
    // 是否是条形图
    isBar: {
      type: Boolean,
      default: true
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 为 chart 装载数据

      this.chart.source(data); // 进行列定义

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {};
            obj[key]['alias'] = _this.axisName[key];

            if (key === 'value') {
              // 数据格式, 将数据转为百分数或浮点数(保留一位小数), 整数不做处理
              obj[key]['formatter'] = _this.isPercent ? utils["c" /* percentFormat */] : utils["b" /* floatIntFormat */];
            }
          }
        }

        return obj;
      }();

      this.chart.scale(scaleConfig); // 是否使用tooltip

      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true);
      } else {
        this.chart.tooltip(false);
      } // 配置图表图例


      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        });
      } else {
        this.chart.legend('type', false);
      } // 坐标轴配置


      this.chart.axis('name', new utils["a" /* AxisOption */]('name', this.axisColor));
      this.chart.axis('value', new utils["a" /* AxisOption */]('value', this.axisColor, this.showGrid));

      if (this.isBar) {
        this.chart.coord().transpose();
      }

      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        // 类型为分组时的配置项
        if (this.type === 'dodge') {
          this.chart.interval().position('name*value').color('type').adjust([{
            type: 'dodge',
            marginRatio: 1 / 32
          }]);
        } // 类型为堆叠时的配置项


        if (this.type === 'fold') {
          this.chart.intervalStack().position('name*value').color('type');
        }
      } else {
        this.chart.interval().position('name*value');
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/column.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_columnvue_type_script_lang_js_ = (columnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/column.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_columnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var column = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "da49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);




/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-17 15:08:38
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-12-31 10:33:54
 * @Description: 图表组件自动化全局注册
 */


var requireComponent = __webpack_require__("7d15");

requireComponent.keys().forEach(function (fileName) {
  // 获取组件配置
  var componentConfig = requireComponent(fileName); // 设置组件的 PascalCase 命名

  var componentName = "g2-".concat(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'));

  if (typeof window !== 'undefined' && window.Vue) {
    // 全局注册组件
    window.Vue.component(componentName, // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig);
  } else {
    vue__WEBPACK_IMPORTED_MODULE_3___default.a.component(componentName, componentConfig.default || componentConfig);
  }
});

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e1f4":
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ed08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/utils/index.js
/* unused harmony export dateFormat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return percentFormat; });
/* unused harmony export numFormat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return floatIntFormat; });
/* unused harmony export color */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils_AxisOption; });







// 时间格式化
var dateFormat = function dateFormat(dateTime, valueFormat) {
  var newDate = new Date(dateTime);
  valueFormat = valueFormat || 'yyyy-MM-dd';
  var date = {
    'yy': newDate.getFullYear(),
    'MM': newDate.getMonth() + 1,
    'dd': newDate.getDate(),
    'hh': newDate.getHours(),
    'mm': newDate.getMinutes(),
    'ss': newDate.getSeconds(),
    'D': ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][newDate.getDay()]
  }; // 输出年 y+:匹配1个到多个y,i:忽略大小写

  if (/(y+)/i.test(valueFormat)) {
    valueFormat = valueFormat.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
  } // 输出月、日、时、分、秒、星期


  Object.keys(date).forEach(function (i) {
    // 只有写成`(${i})`形式，才能在正则表达式中捕获子匹配，进而才能用到RegExp.$1的值
    if (new RegExp("(".concat(i, ")")).test(valueFormat)) {
      // 判断，如果时间为一位数，则在前面加'0'
      if (RegExp.$1.length === 2) {
        if (date[i] < 10) {
          date[i] = "0".concat(date[i]);
        }
      } // 替换初始化函数时候传入yyyy-mm-dd hh:mm:ss D


      valueFormat = valueFormat.replace(RegExp.$1, date[i]);
    }
  });
  return valueFormat;
}; // 处理百分比

var percentFormat = function percentFormat(value) {
  if (!value) return '0%';
  value = value * 100;
  return String(value).indexOf('.') > 0 ? "".concat(value.toFixed(1), "%") : "".concat(parseInt(value), "%");
}; // 处理千位分隔

var numFormat = function numFormat(value) {
  if (!value) return 0;
  var reg = /\d{1,3}(?=(\d{3})+$)/g;

  if (String(value).indexOf('.') > 0) {
    var list = value.toFixed(1).split('.');
    list[0] = String(list[0]).replace(reg, '$&,');
    return list.join('.');
  } else {
    return String(value).replace(reg, '$&,');
  }
}; // 处理浮点数或整数(浮点数取一位/整数不做处理)  问题: floatIntFormat(0.58*100) 返回 58.0

var floatIntFormat = function floatIntFormat(value) {
  if (!value) return 0;

  if (String(value).indexOf('.') > 0) {
    return value.toFixed(1);
  } else {
    return value;
  }
}; // 颜色组

var color = ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864']; // axis配置类

var utils_AxisOption = function AxisOption(type, axisColor, showGrid) {
  _classCallCheck(this, AxisOption);

  var axisOption = {
    label: {
      textStyle: {
        fill: axisColor.labelColor
      }
    },
    line: {}
  };

  if (type === 'x' || type === 'name') {
    axisOption['line']['stroke'] = axisColor.lineColor;
    return axisOption;
  } else {
    if (showGrid === false) {
      axisOption['grid'] = null;
    }

    return axisOption;
  }
};

/***/ }),

/***/ "f018":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/double-axis-column.vue?vue&type=template&id=1f5dbef0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/double-axis-column.vue?vue&type=template&id=1f5dbef0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__("ed08");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/double-axis-column.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var double_axis_columnvue_type_script_lang_js_ = ({
  name: 'g2-column',
  props: {
    // 数据
    data: {
      type: Array,
      default: function _default() {
        return [{
          name: '1997',
          value1: 86085,
          value2: 0.3
        }, {
          name: '2007',
          value1: 144776,
          value2: 0.2
        }, {
          name: '2017',
          value1: 193868,
          value2: 0.6
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 500
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: function _default() {
        return {
          name: 'name',
          value1: 'value1',
          value2: 'value2'
        };
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: function _default() {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        };
      }
    },
    // 是否是条形图
    isBar: {
      type: Boolean,
      default: false
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: false
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Object,
      default: function _default() {
        return {
          value1: false,
          value2: true
        };
      }
    },
    useTooltip: {
      type: Boolean,
      default: false
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      } // 新建实例


      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 构造数据

      var ds = new this.DataSet(); // 重命名

      var renameData = ds.createView().source(data).transform({
        type: 'rename',
        map: {
          value1: this.axisName.value1,
          value2: this.axisName.value2
        }
      }); // 展开字段this.axisName.value1

      var data1 = ds.createView().source(renameData).transform({
        type: 'fold',
        fields: ["".concat(this.axisName.value1)],
        // 展开字段集
        key: 'type',
        // key字段
        value: 'value',
        // value字段
        retains: ['name', "".concat(this.axisName.value1)] // 保留字段集，默认为除 fields 以外的所有字段

      }).rows; // 展开字段this.axisName.value2

      var data2 = ds.createView().source(renameData).transform({
        type: 'fold',
        fields: ["".concat(this.axisName.value2)],
        // 展开字段集
        key: 'type',
        // key字段
        value: 'value',
        // value字段
        retains: ['name', "".concat(this.axisName.value2)] // 保留字段集，默认为除 fields 以外的所有字段

      }).rows;
      data = data1.concat(data2); // 为 chart 装载数据

      this.chart.source(data); // 为指定的数据字段(value1,value2)进行格式化

      var _this = this;

      var scaleConfig = function () {
        var obj = {};

        for (var key in _this.isPercent) {
          obj[_this.axisName[key]] = {};

          if (_this.isPercent[key]) {
            // 将数据格式化为百分数
            obj[_this.axisName[key]].formatter = utils["c" /* percentFormat */];
          } else {
            // 浮点数保留一位小数，整数不做处理
            obj[_this.axisName[key]].formatter = utils["b" /* floatIntFormat */];
          }
        }

        return obj;
      }();

      this.chart.scale(scaleConfig); // 是否使用tooltip

      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true);
      } else {
        this.chart.tooltip(false);
      } // 配置图表图例


      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        });
      } else {
        this.chart.legend('type', false);
      } // 坐标轴配置


      this.chart.axis('name', new utils["a" /* AxisOption */]('name', this.axisColor));
      this.chart.axis("".concat(this.axisName.value1), new utils["a" /* AxisOption */]("".concat(this.axisName.value1), this.axisColor, this.showGrid));
      this.chart.axis("".concat(this.axisName.value2), new utils["a" /* AxisOption */]("".concat(this.axisName.value2), this.axisColor, this.showGrid)); // 是否是条形图

      if (this.isBar) {
        this.chart.coord().transpose();
      }

      this.chart.interval().position("name*".concat(this.axisName.value1)).color('type').adjust([{
        type: 'dodge',
        marginRatio: 1 / 32
      }]);
      this.chart.interval().position("name*".concat(this.axisName.value2)).color('type').adjust([{
        type: 'dodge',
        marginRatio: 1 / 32
      }]); // 绘制

      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/double-axis-column.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_double_axis_columnvue_type_script_lang_js_ = (double_axis_columnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/double-axis-column.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_double_axis_columnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var double_axis_column = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/components/g2Components/index.js
var g2Components = __webpack_require__("da49");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (g2Components["default"]);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "fec1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4817feee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/radar.vue?vue&type=template&id=0c04748d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/g2Components/radar.vue?vue&type=template&id=0c04748d&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: external "@antv/g2"
var g2_ = __webpack_require__("7c93");
var g2_default = /*#__PURE__*/__webpack_require__.n(g2_);

// EXTERNAL MODULE: external "@antv/data-set"
var data_set_ = __webpack_require__("40ba");
var data_set_default = /*#__PURE__*/__webpack_require__.n(data_set_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/g2Components/radar.vue?vue&type=script&lang=js&

//
//
//
//


/* harmony default export */ var radarvue_type_script_lang_js_ = ({
  name: 'g2-radar',
  props: {
    data: {
      // 数据
      type: Array,
      default: function _default() {
        return [{
          item: 'Design',
          a: 70,
          b: 30,
          c: 11
        }, {
          item: 'Development',
          a: 60,
          b: 70,
          c: 11
        }, {
          item: 'Marketing',
          a: 50,
          b: 60,
          c: 11
        }, {
          item: 'Users',
          a: 40,
          b: 50,
          c: 11
        }, {
          item: 'Test',
          a: 60,
          b: 70,
          c: 11
        }];
      }
    },
    // DOM 高度
    height: {
      type: Number,
      default: 300
    },
    // 别名
    axisName: {
      type: Object,
      default: function _default() {
        return {
          a: 'a'
        };
      }
    },
    // 最大值
    max: {
      type: Number,
      default: 80
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 是否显示面积区域
    isShowArea: {
      type: Boolean,
      default: false
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: false
    },
    // 是否显示tooltip
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 内边距
    padding: {
      type: Array,
      default: function _default() {
        return ['auto', 'auto'];
      }
    }
  },
  data: function data() {
    return {
      chart: null
    };
  },
  computed: {
    G2: function G2() {
      if (typeof window !== 'undefined' && window.G2) {
        return window.G2;
      } else {
        return g2_default.a;
      }
    },
    DataSet: function DataSet() {
      if (typeof window !== 'undefined' && window.DataSet) {
        return window.DataSet;
      } else {
        return data_set_default.a;
      }
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function data(val, oldVal) {
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function drawChart(data) {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy();
      }

      console.log(window);
      console.log(window.G2);
      console.log(this.G2);
      console.log(this.G2.Chart); // 新建实例

      this.chart = new this.G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: this.padding
      }); // 设置数据的显示别名以及将指定字段展开

      var fields = [];

      for (var key in this.axisName) {
        if (this.axisName.hasOwnProperty(key)) {
          fields.push(this.axisName[key]);
        }
      }

      var dv = new this.DataSet.DataView().source(data).transform({
        type: 'rename',
        map: this.axisName
      }).transform({
        type: 'fold',
        fields: fields,
        key: 'user',
        value: 'score'
      }); // 设置score数据的最大值、最小值

      this.chart.source(dv, {
        score: {
          min: this.min,
          max: this.max
        }
      }); // 配置极坐标系

      this.chart.coord('polar', {
        radius: 1
      }); // 配置item轴

      this.chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      }); // 配置score轴

      this.chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          }
        },
        label: null
      }); // 是否显示图例

      if (this.showLegend) {
        // 配置图例
        this.chart.legend('user', {
          marker: 'circle',
          offset: 30
        });
      } else {
        this.chart.legend(false);
      } // 是否使用tooltip


      if (this.useTooltip) {
        // 配置tooltip
        this.chart.tooltip(true);
      } else {
        this.chart.tooltip(false);
      } // 配置折线


      this.chart.line().position('item*score').color('user').size(2); // 配置散点

      this.chart.point().position('item*score').color('user').shape('circle').size(3).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
      }); // 是否显示面积区域

      if (this.isShowArea) {
        // 配置面积区域
        this.chart.area().position('item*score').color('user');
      } // 绘制


      this.chart.render(); // 销毁实例

      this.$once('hook:beforeDestroy', function () {
        this.chart.destroy();
      });
    }
  },
  created: function created() {
    var uuidv4 = __webpack_require__("c64e");

    this.id = uuidv4();
  },
  mounted: function mounted() {
    this.drawChart(this.data);
  }
});
// CONCATENATED MODULE: ./src/components/g2Components/radar.vue?vue&type=script&lang=js&
 /* harmony default export */ var g2Components_radarvue_type_script_lang_js_ = (radarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/g2Components/radar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  g2Components_radarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0c04748d",
  null
  
)

/* harmony default export */ var radar = __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ });
//# sourceMappingURL=vue-g2.common.js.map