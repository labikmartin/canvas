var utils =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.pug": 4
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 0;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //- ### ### ### ### ### ### ### ### 
//- CONTENT
//- 
/* 
+ CIRCLE
  - draw
  - update
+ CANVAS 1
  - makeCircles
  - makeYoloText
  - animate
  - clear
  - init
*/

var _util_global = __webpack_require__(9);

var _util_global2 = _interopRequireDefault(_util_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
  function Circle(posX, posY, diameter, speedX, speedY) {
    _classCallCheck(this, Circle);

    this.diameter = diameter || _util_global2.default.randomBetween(10, 5);
    this.newX = posX || _util_global2.default.randomBetween(canvas1.w, 0, this.diameter);
    this.newY = posY || _util_global2.default.randomBetween(canvas1.h, 0, this.diameter);
    this.speedX = speedX || _util_global2.default.randomBetween(3, 2, 0, true);
    this.speedY = speedY || 2;
    this.r = (arguments.length <= 5 ? undefined : arguments[5]) || _util_global2.default.randomBetween(255);
    this.g = (arguments.length <= 6 ? undefined : arguments[6]) || _util_global2.default.randomBetween(255);
    this.b = (arguments.length <= 7 ? undefined : arguments[7]) || _util_global2.default.randomBetween(255);
    this.stop = false;
    this.spin = 1;
    this.bouncedPositive = false;
    this.bouncedNegative = false;
  }

  _createClass(Circle, [{
    key: 'draw',
    value: function draw(stroke, event) {
      var ctx = canvas1.ctx,
          evt = event,
          xHalf = canvas1.w / 2,
          yHalf = canvas1.h / 2,
          random = Math.random(),
          diameter = this.diameter,
          posX = this.newX,
          posY = this.newY;
      ctx.beginPath();
      ctx.arc(posX, posY, diameter, 0, canvas1.fullArc, true);
      ctx.fillStyle = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', 1)';
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.stroke();
      }
    }
  }, {
    key: 'update',
    value: function update(gravity, frictionY, frictionX, event) {
      var w = canvas1.w,
          h = canvas1.h,
          posX = this.newX,
          posY = this.newY,
          diam = this.diameter,
          spdX = this.speedX,
          spdY = this.speedY,
          fX = frictionX || 1,
          fY = frictionY || 1,
          g = gravity || 0;
      // DETECT COLLISION WITH AREA BORDER HORIZONTAL
      if (posX >= w - diam || posX <= 0 + diam) {
        // prevent right overflow
        if (posX > w - diam) {
          this.newX = w - diam;
        }
        // prevent left overflow
        else if (posX < diam) {
            this.newX = diam;
          }
        // detect collision right side
        if (posX >= w - diam) {
          this.bouncedPositive = true;
          this.bouncedNegative = false;
        }
        // detect collision left side
        else if (posX <= diam) {
            this.bouncedNegative = true;
            this.bouncedPositive = false;
          }
        this.speedX = -this.speedX * fX; // FRICTION - X
      }
      // DETECT COLLISION WITH AREA BORDER VERTICAL
      if (posY >= h - diam - spdY || posY <= diam) {
        // prevent bottom overflow
        if (this.newY < diam) {
          this.newY = diam;
        }
        this.speedY = -this.speedY * fY; // FRICTION - Y
      } else {
        this.speedY += g; // GRAVITY
      }
      // X AXIS DIRECTION -> FRICTION
      // direction is left
      if (spdX < 0 && parseInt(posY + diam) == h) {
        var floatSpd = parseFloat(spdX.toFixed(1));
        this.speedX = floatSpd;
        this.speedX += 0.1;
      }
      // direction is right
      else if (this.speedX > 0 && parseInt(this.newY + diam) == h) {
          var _floatSpd = parseFloat(spdX.toFixed(1));
          this.speedX = _floatSpd;
          this.speedX -= 0.1;
        }
      // STOP ANIMATION
      if (spdX === 0) {
        this.stop = true;
      }
      // UPDATE POSISION
      this.newX += this.speedX;
      this.newY += this.speedY;
      this.draw('', event);
    }
  }]);

  return Circle;
}();

var canvas1 = {
  canvas: document.getElementById('canvas1'),
  w: window.innerWidth - 30,
  h: window.innerHeight - 5,
  e: '',
  pi: Math.PI,
  fullArc: Math.PI * 2,
  spin: 1,
  objects: {},
  yoloText: '',
  // GETTERS
  get ctx() {
    return this.canvas.getContext('2d');
  },
  get width() {
    return this.canvas.width = this.w;
  },
  get height() {
    return this.canvas.height = this.h;
  },
  // METHODS 
  makeCircles: function makeCircles(amount) {
    this.objects.circles = [];
    for (var i = 0; i < amount; i++) {
      this.objects.circles.push(new Circle());
    }
    this.objects.circles.map(function (circle) {
      circle.draw();
    });
  },
  makeYoloText: function makeYoloText(text) {
    var ctx = this.ctx,
        mX = this.e.clientX,
        mY = this.e.clientY;
    ctx.font = '16px Arial';
    ctx.fillText(text, mX, mY);
  },
  animate: function animate(event) {
    this.clear();
    this.objects.circles.map(function (circle) {
      circle.update(1, 0.5, 0.9);
    });
    this.makeYoloText(this.yoloText);
    requestAnimationFrame(this.animate.bind(this));
  },
  clear: function clear() {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
  },
  init: function init(amount, event) {
    this.width;
    this.height;
    this.makeCircles(amount);
    this.animate(event);
  }
};

exports.default = canvas1;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _com_canvas = __webpack_require__(1);

var _com_canvas2 = _interopRequireDefault(_com_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//- ### TEMPLATES BUILD
function requireAll(r) {
  r.keys().forEach(r);
} //- ### ### ### ### ### ### ### ###
//- BUILD
//- ### ### ### ### ### ### ###

//- ### CSS BUILD

requireAll(__webpack_require__(0));

//- ### ### ### COMPONENTS


//- ### ### ### ### ### ### ### ### 
//- APP
//- ### ### ### ### ### ### ###

var win = window;

var app = {
  binder: function binder() {
    var winWidth = win.innerWidth,
        winHeight = win.innerHeight;

    //- ### ### ### CANVAS 1
    _com_canvas2.default.init(1);
    _com_canvas2.default.canvas.addEventListener('click', function (e) {
      _com_canvas2.default.makeCircles(999);
      _com_canvas2.default.yoloText = "☺";
    });
    //- ### CANVAS 1 ON MOUSEMOVE
    _com_canvas2.default.canvas.addEventListener('mousemove', function (e) {
      _com_canvas2.default.e = e;
      _com_canvas2.default.yoloText = "Can't catch this! Rather click the canvas...";
    });

    // cnv1
    //   .addEventListener('mouseout', function (e) {
    //     canvas1.clear();
    //   });
  },
  inicialize: function inicialize() {
    //- ### ### ### CALLING EVENTS
    this.binder();
  }
};

app.inicialize();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../index.html";

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "randomBetween",
    value: function randomBetween(max, minNr, offsetAmount, negative) {
      var min = minNr || 0,
          offset = offsetAmount || 0,
          random = void 0;
      if (negative) {
        var r = Math.floor(Math.random() * (max - min + 1 - offset) + min);
        random = r *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      } else {
        random = Math.floor(Math.random() * (max - min + 1 - offset) + min);
      }
      return random;
    }
  }]);

  return Utils;
}();

exports.default = new Utils();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGYzMjQwYTczZjQ1MDMzMmU1MjMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlbXBsYXRlcyBub25yZWN1cnNpdmUgXFwucHVnJCIsIndlYnBhY2s6Ly8vLi9hcHAvanMvY29tcG9uZW50cy9jb21fY2FudmFzMS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC90ZW1wbGF0ZXMvaW5kZXgucHVnIiwid2VicGFjazovLy8uL2FwcC9qcy91dGlscy91dGlsX2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJwb3NYIiwicG9zWSIsImRpYW1ldGVyIiwic3BlZWRYIiwic3BlZWRZIiwicmFuZG9tQmV0d2VlbiIsIm5ld1giLCJjYW52YXMxIiwidyIsIm5ld1kiLCJoIiwiciIsImciLCJiIiwic3RvcCIsInNwaW4iLCJib3VuY2VkUG9zaXRpdmUiLCJib3VuY2VkTmVnYXRpdmUiLCJzdHJva2UiLCJldmVudCIsImN0eCIsImV2dCIsInhIYWxmIiwieUhhbGYiLCJyYW5kb20iLCJNYXRoIiwiYmVnaW5QYXRoIiwiYXJjIiwiZnVsbEFyYyIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsImdyYXZpdHkiLCJmcmljdGlvblkiLCJmcmljdGlvblgiLCJkaWFtIiwic3BkWCIsInNwZFkiLCJmWCIsImZZIiwicGFyc2VJbnQiLCJmbG9hdFNwZCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZHJhdyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJlIiwicGkiLCJQSSIsIm9iamVjdHMiLCJ5b2xvVGV4dCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsIm1ha2VDaXJjbGVzIiwiYW1vdW50IiwiY2lyY2xlcyIsImkiLCJwdXNoIiwibWFwIiwiY2lyY2xlIiwibWFrZVlvbG9UZXh0IiwidGV4dCIsIm1YIiwiY2xpZW50WCIsIm1ZIiwiY2xpZW50WSIsImZvbnQiLCJmaWxsVGV4dCIsImFuaW1hdGUiLCJjbGVhciIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJjbGVhclJlY3QiLCJpbml0IiwicmVxdWlyZUFsbCIsImtleXMiLCJmb3JFYWNoIiwid2luIiwiYXBwIiwiYmluZGVyIiwid2luV2lkdGgiLCJ3aW5IZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pY2lhbGl6ZSIsIlV0aWxzIiwibWF4IiwibWluTnIiLCJvZmZzZXRBbW91bnQiLCJuZWdhdGl2ZSIsIm1pbiIsIm9mZnNldCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7OztxakJDakJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixF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Ozs7OztJQ0NNQyxLOzs7Ozs7O2tDQUNVQyxHLEVBQUtDLEssRUFBT0MsWSxFQUFjQyxRLEVBQVU7QUFDaEQsVUFBSUMsTUFBTUgsU0FBUyxDQUFuQjtBQUFBLFVBQ0lJLFNBQVNILGdCQUFnQixDQUQ3QjtBQUFBLFVBRUl0RSxlQUZKO0FBR0EsVUFBSXVFLFFBQUosRUFBYztBQUNaLFlBQUlwRixJQUFJYyxLQUFLeUUsS0FBTCxDQUFXekUsS0FBS0QsTUFBTCxNQUFrQm9FLE1BQU1JLEdBQU4sR0FBWSxDQUFiLEdBQWtCQyxNQUFuQyxJQUE2Q0QsR0FBeEQsQ0FBUjtBQUNBeEUsaUJBQVNiLEtBQUtjLEtBQUt5RSxLQUFMLENBQVd6RSxLQUFLRCxNQUFMLEtBQWMsQ0FBekIsS0FBK0IsQ0FBL0IsR0FBbUMsQ0FBbkMsR0FBdUMsQ0FBQyxDQUF0RDtBQUNELE9BSEQsTUFJSztBQUNIQSxpQkFBU0MsS0FBS3lFLEtBQUwsQ0FBV3pFLEtBQUtELE1BQUwsTUFBa0JvRSxNQUFNSSxHQUFOLEdBQVksQ0FBYixHQUFrQkMsTUFBbkMsSUFBNkNELEdBQXhELENBQVQ7QUFDRDtBQUNELGFBQU94RSxNQUFQO0FBQ0Q7Ozs7OztrQkFHWSxJQUFJbUUsS0FBSixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGYzMjQwYTczZjQ1MDMzMmU1MjMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW5kZXgucHVnXCI6IDRcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3RlbXBsYXRlcyBub25yZWN1cnNpdmUgXFwucHVnJFxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLy0gIyMjICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjICMjIyBcclxuLy8tIENPTlRFTlRcclxuLy8tIFxyXG4vKiBcclxuKyBDSVJDTEVcclxuICAtIGRyYXdcclxuICAtIHVwZGF0ZVxyXG4rIENBTlZBUyAxXHJcbiAgLSBtYWtlQ2lyY2xlc1xyXG4gIC0gbWFrZVlvbG9UZXh0XHJcbiAgLSBhbmltYXRlXHJcbiAgLSBjbGVhclxyXG4gIC0gaW5pdFxyXG4qL1xyXG5cclxuaW1wb3J0IHUgZnJvbSAnLi4vdXRpbHMvdXRpbF9nbG9iYWwnXHJcblxyXG5jbGFzcyBDaXJjbGUge1xyXG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIGRpYW1ldGVyLCBzcGVlZFgsIHNwZWVkWSwgLi4uY29sb3JzKSB7XHJcbiAgICB0aGlzLmRpYW1ldGVyID0gZGlhbWV0ZXIgfHwgdS5yYW5kb21CZXR3ZWVuKDEwLCA1KTtcclxuICAgIHRoaXMubmV3WCA9ICAgICBwb3NYIHx8IHUucmFuZG9tQmV0d2VlbihjYW52YXMxLncsIDAsIHRoaXMuZGlhbWV0ZXIpO1xyXG4gICAgdGhpcy5uZXdZID0gICAgIHBvc1kgfHwgdS5yYW5kb21CZXR3ZWVuKGNhbnZhczEuaCwgMCwgdGhpcy5kaWFtZXRlcik7IFxyXG4gICAgdGhpcy5zcGVlZFggPSAgIHNwZWVkWCB8fCB1LnJhbmRvbUJldHdlZW4oMywgMiwgMCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNwZWVkWSA9ICAgc3BlZWRZIHx8IDI7XHJcbiAgICB0aGlzLnIgPSAgICAgICAgY29sb3JzWzBdIHx8IHUucmFuZG9tQmV0d2VlbigyNTUpO1xyXG4gICAgdGhpcy5nID0gICAgICAgIGNvbG9yc1sxXSB8fCB1LnJhbmRvbUJldHdlZW4oMjU1KTtcclxuICAgIHRoaXMuYiA9ICAgICAgICBjb2xvcnNbMl0gfHwgdS5yYW5kb21CZXR3ZWVuKDI1NSk7XHJcbiAgICB0aGlzLnN0b3AgPSAgICAgZmFsc2U7XHJcbiAgICB0aGlzLnNwaW4gPSAgICAgMTtcclxuICAgIHRoaXMuYm91bmNlZFBvc2l0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmJvdW5jZWROZWdhdGl2ZSA9IGZhbHNlOyAgICBcclxuICB9XHJcbiAgZHJhdyhzdHJva2UsIGV2ZW50KSB7XHJcbiAgICBsZXQgY3R4ID0gY2FudmFzMS5jdHgsXHJcbiAgICAgICAgZXZ0ID0gZXZlbnQsXHJcbiAgICAgICAgeEhhbGYgPSAgICBjYW52YXMxLncgLyAyLFxyXG4gICAgICAgIHlIYWxmID0gICAgY2FudmFzMS5oIC8gMixcclxuICAgICAgICByYW5kb20gPSAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgZGlhbWV0ZXIgPSB0aGlzLmRpYW1ldGVyLFxyXG4gICAgICAgIHBvc1ggPSAgICAgdGhpcy5uZXdYLFxyXG4gICAgICAgIHBvc1kgPSAgICAgdGhpcy5uZXdZO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhwb3NYLCBwb3NZLCBkaWFtZXRlciwgMCwgY2FudmFzMS5mdWxsQXJjLCB0cnVlKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9LCAxKWA7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgaWYgKHN0cm9rZSkge1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2U7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXBkYXRlKGdyYXZpdHksIGZyaWN0aW9uWSwgZnJpY3Rpb25YLCBldmVudCkge1xyXG4gICAgbGV0IHcgPSAgICAgICBjYW52YXMxLncsXHJcbiAgICAgICAgaCA9ICAgICAgIGNhbnZhczEuaCxcclxuICAgICAgICBwb3NYID0gICAgdGhpcy5uZXdYLFxyXG4gICAgICAgIHBvc1kgPSAgICB0aGlzLm5ld1ksXHJcbiAgICAgICAgZGlhbSA9ICAgIHRoaXMuZGlhbWV0ZXIsXHJcbiAgICAgICAgc3BkWCA9ICAgIHRoaXMuc3BlZWRYLFxyXG4gICAgICAgIHNwZFkgPSAgICB0aGlzLnNwZWVkWSxcclxuICAgICAgICBmWCA9ICAgICAgZnJpY3Rpb25YIHx8IDEsXHJcbiAgICAgICAgZlkgPSAgICAgIGZyaWN0aW9uWSB8fCAxLFxyXG4gICAgICAgIGcgPSAgICAgICBncmF2aXR5IHx8IDA7XHJcbiAgICAvLyBERVRFQ1QgQ09MTElTSU9OIFdJVEggQVJFQSBCT1JERVIgSE9SSVpPTlRBTFxyXG4gICAgaWYgKHBvc1ggPj0gdyAtIGRpYW0gfHwgXHJcbiAgICAgIHBvc1ggPD0gMCArIGRpYW1cclxuICAgICkge1xyXG4gICAgICAvLyBwcmV2ZW50IHJpZ2h0IG92ZXJmbG93XHJcbiAgICAgIGlmIChwb3NYID4gdyAtIGRpYW0pIHtcclxuICAgICAgICB0aGlzLm5ld1ggPSB3IC0gZGlhbTtcclxuICAgICAgfVxyXG4gICAgICAvLyBwcmV2ZW50IGxlZnQgb3ZlcmZsb3dcclxuICAgICAgZWxzZSBpZiAocG9zWCA8IGRpYW0pIHtcclxuICAgICAgICB0aGlzLm5ld1ggPSBkaWFtO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGRldGVjdCBjb2xsaXNpb24gcmlnaHQgc2lkZVxyXG4gICAgICBpZiAocG9zWCA+PSB3IC0gZGlhbSkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlZFBvc2l0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdW5jZWROZWdhdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGRldGVjdCBjb2xsaXNpb24gbGVmdCBzaWRlXHJcbiAgICAgIGVsc2UgaWYgKHBvc1ggPD0gZGlhbSkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlZE5lZ2F0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdW5jZWRQb3NpdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3BlZWRYID0gLXRoaXMuc3BlZWRYICogZlg7IC8vIEZSSUNUSU9OIC0gWFxyXG4gICAgfVxyXG4gICAgLy8gREVURUNUIENPTExJU0lPTiBXSVRIIEFSRUEgQk9SREVSIFZFUlRJQ0FMXHJcbiAgICBpZiAocG9zWSA+PSBoIC0gZGlhbSAtIHNwZFkgfHwgXHJcbiAgICAgIHBvc1kgPD0gZGlhbVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIHByZXZlbnQgYm90dG9tIG92ZXJmbG93XHJcbiAgICAgIGlmICh0aGlzLm5ld1kgPCBkaWFtKSB7XHJcbiAgICAgICAgdGhpcy5uZXdZID0gZGlhbTtcclxuICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMuc3BlZWRZID0gLXRoaXMuc3BlZWRZICogZlk7IC8vIEZSSUNUSU9OIC0gWVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3BlZWRZICs9ZyAvLyBHUkFWSVRZXHJcbiAgICB9XHJcbiAgICAvLyBYIEFYSVMgRElSRUNUSU9OIC0+IEZSSUNUSU9OXHJcbiAgICAvLyBkaXJlY3Rpb24gaXMgbGVmdFxyXG4gICAgaWYgKHNwZFggPCAwICYmIHBhcnNlSW50KHBvc1kgKyBkaWFtKSA9PSBoKSB7XHJcbiAgICAgIGxldCBmbG9hdFNwZCA9IHBhcnNlRmxvYXQoc3BkWC50b0ZpeGVkKDEpKTtcclxuICAgICAgdGhpcy5zcGVlZFggPSBmbG9hdFNwZDtcclxuICAgICAgdGhpcy5zcGVlZFgrPTAuMTtcclxuICAgIH1cclxuICAgIC8vIGRpcmVjdGlvbiBpcyByaWdodFxyXG4gICAgZWxzZSBpZiAodGhpcy5zcGVlZFggPiAwICYmIHBhcnNlSW50KHRoaXMubmV3WSArIGRpYW0pID09IGgpIHtcclxuICAgICAgbGV0IGZsb2F0U3BkID0gcGFyc2VGbG9hdChzcGRYLnRvRml4ZWQoMSkpO1xyXG4gICAgICB0aGlzLnNwZWVkWCA9IGZsb2F0U3BkO1xyXG4gICAgICB0aGlzLnNwZWVkWC09MC4xO1xyXG4gICAgfVxyXG4gICAgLy8gU1RPUCBBTklNQVRJT05cclxuICAgIGlmIChzcGRYID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc3RvcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBVUERBVEUgUE9TSVNJT05cclxuICAgIHRoaXMubmV3WCArPSB0aGlzLnNwZWVkWDtcclxuICAgIHRoaXMubmV3WSArPSB0aGlzLnNwZWVkWTtcclxuICAgIHRoaXMuZHJhdygnJywgZXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGNhbnZhczEgPSB7XHJcbiAgY2FudmFzOiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJyksXHJcbiAgdzogICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gMzAsXHJcbiAgaDogICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAtIDUsXHJcbiAgZTogICAgICAgICcnLFxyXG4gIHBpOiAgICAgICBNYXRoLlBJLFxyXG4gIGZ1bGxBcmM6ICBNYXRoLlBJICogMixcclxuICBzcGluOiAgICAgMSxcclxuICBvYmplY3RzOiAge30sXHJcbiAgeW9sb1RleHQ6ICcnLFxyXG4gIC8vIEdFVFRFUlNcclxuICBnZXQgY3R4KCkge3JldHVybiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpfSxcclxuICBnZXQgd2lkdGgoKSB7cmV0dXJuIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53fSxcclxuICBnZXQgaGVpZ2h0KCkge3JldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmh9LFxyXG4gIC8vIE1FVEhPRFMgXHJcbiAgbWFrZUNpcmNsZXMoYW1vdW50KSB7XHJcbiAgICB0aGlzLm9iamVjdHMuY2lyY2xlcyA9IFtdOyAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5jaXJjbGVzLnB1c2gobmV3IENpcmNsZSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5jaXJjbGVzLm1hcCgoY2lyY2xlKSA9PiB7XHJcbiAgICAgIGNpcmNsZS5kcmF3KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ha2VZb2xvVGV4dCh0ZXh0KSB7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy5jdHgsXHJcbiAgICAgICAgbVggPSB0aGlzLmUuY2xpZW50WCxcclxuICAgICAgICBtWSA9IHRoaXMuZS5jbGllbnRZO1xyXG4gICAgY3R4LmZvbnQ9JzE2cHggQXJpYWwnO1xyXG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIG1YLCBtWSk7XHJcbiAgfSxcclxuICBhbmltYXRlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLm9iamVjdHMuY2lyY2xlcy5tYXAoKGNpcmNsZSkgPT4ge1xyXG4gICAgICBjaXJjbGUudXBkYXRlKDEsIDAuNSwgMC45KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWtlWW9sb1RleHQodGhpcy55b2xvVGV4dCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpOyAgICBcclxuICB9LFxyXG4gIGNsZWFyKCkge1xyXG4gICAgbGV0IGN0eCA9IHRoaXMuY3R4O1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgfSxcclxuICBpbml0KGFtb3VudCwgZXZlbnQpIHtcclxuICAgIHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMubWFrZUNpcmNsZXMoYW1vdW50KTtcclxuICAgIHRoaXMuYW5pbWF0ZShldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYW52YXMxO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvanMvY29tcG9uZW50cy9jb21fY2FudmFzMS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc2Fzcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLy0gIyMjICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjICMjI1xuLy8tIEJVSUxEXG4vLy0gIyMjICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjXG5cbi8vLSAjIyMgQ1NTIEJVSUxEXG5pbXBvcnQgc2NzcyBmcm9tICcuLi9zYXNzL3N0eWxlcy5zY3NzJztcbiBcbi8vLSAjIyMgVEVNUExBVEVTIEJVSUxEXG5mdW5jdGlvbiByZXF1aXJlQWxsIChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi90ZW1wbGF0ZXMvJywgZmFsc2UsIC9cXC5wdWckLykpO1xuXG5cbi8vLSAjIyMgIyMjICMjIyBDT01QT05FTlRTXG5pbXBvcnQgY2FudmFzMSBmcm9tICcuL2NvbXBvbmVudHMvY29tX2NhbnZhczEnO1xuXG4vLy0gIyMjICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjICMjIyBcbi8vLSBBUFBcbi8vLSAjIyMgIyMjICMjIyAjIyMgIyMjICMjIyAjIyNcblxuY29uc3Qgd2luID0gd2luZG93O1xuXG5jb25zdCBhcHAgPSB7ICBcbiAgYmluZGVyKCkge1xuICAgIGxldCB3aW5XaWR0aCA9ICB3aW4uaW5uZXJXaWR0aCxcbiAgICAgICAgd2luSGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuXG4gICAgLy8tICMjIyAjIyMgIyMjIENBTlZBUyAxXG4gICAgY2FudmFzMS5pbml0KDEpO1xuICAgIGNhbnZhczEuY2FudmFzXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjYW52YXMxLm1ha2VDaXJjbGVzKDk5OSk7XG4gICAgICAgIGNhbnZhczEueW9sb1RleHQgPSBcIuKYulwiO1xuICAgICAgfSk7XG4gICAgLy8tICMjIyBDQU5WQVMgMSBPTiBNT1VTRU1PVkVcbiAgICBjYW52YXMxLmNhbnZhc1xuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNhbnZhczEuZSA9IGU7XG4gICAgICAgIGNhbnZhczEueW9sb1RleHQgPSBcIkNhbid0IGNhdGNoIHRoaXMhIFJhdGhlciBjbGljayB0aGUgY2FudmFzLi4uXCI7XG4gICAgICB9KTtcblxuICAgIC8vIGNudjFcbiAgICAvLyAgIC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICAgIGNhbnZhczEuY2xlYXIoKTtcbiAgICAvLyAgIH0pO1xuXG4gIH0sXG4gIGluaWNpYWxpemUoKSB7XG4gICAgLy8tICMjIyAjIyMgIyMjIENBTExJTkcgRVZFTlRTXG4gICAgdGhpcy5iaW5kZXIoKTtcbiAgfVxufVxuXG5hcHAuaW5pY2lhbGl6ZSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2pzL2FwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4uL2luZGV4Lmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC90ZW1wbGF0ZXMvaW5kZXgucHVnXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5jbGFzcyBVdGlscyB7XHJcbiAgcmFuZG9tQmV0d2VlbihtYXgsIG1pbk5yLCBvZmZzZXRBbW91bnQsIG5lZ2F0aXZlKSB7XHJcbiAgICBsZXQgbWluID0gbWluTnIgfHwgMCxcclxuICAgICAgICBvZmZzZXQgPSBvZmZzZXRBbW91bnQgfHwgMCxcclxuICAgICAgICByYW5kb207XHJcbiAgICBpZiAobmVnYXRpdmUpIHtcclxuICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKG1heCAtIG1pbiArIDEpIC0gb2Zmc2V0KSArIG1pbik7XHJcbiAgICAgIHJhbmRvbSA9IHIgKj0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpID09IDEgPyAxIDogLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKChtYXggLSBtaW4gKyAxKSAtIG9mZnNldCkgKyBtaW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJhbmRvbTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvanMvdXRpbHMvdXRpbF9nbG9iYWwuanMiXSwic291cmNlUm9vdCI6IiJ9