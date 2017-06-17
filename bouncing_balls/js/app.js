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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
  function Circle(posX, posY, diameter, speedX, speedY) {
    _classCallCheck(this, Circle);

    this.diameter = diameter || Math.random() * (canvas1.h / 2 / 2);
    this.newX = posX || Math.round(Math.random() * (canvas1.w + this.diameter));
    this.newY = posY || Math.round(Math.random() * (canvas1.h + this.diameter));
    this.speedX = speedX || 8;
    this.speedY = speedY || 8;
    this.r = (arguments.length <= 5 ? undefined : arguments[5]) || Math.random() * 255;
    this.g = (arguments.length <= 6 ? undefined : arguments[6]) || Math.random() * 255;
    this.b = (arguments.length <= 7 ? undefined : arguments[7]) || Math.random() * 255;
    this.stop = false;
    this.spin = 1;
    this.bouncedPositive = false;
    this.bouncedNegative = false;
  }

  _createClass(Circle, [{
    key: 'draw',
    value: function draw() {
      var ctx = canvas1.ctx,

      // evt = event,
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
      // ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update(updateSpeedX, updateSpeedY) {
      var w = canvas1.w,
          h = canvas1.h,
          posX = this.newX,
          posY = this.newY,
          diam = this.diameter,
          spdX = this.speedX,
          spdY = this.speedY,
          uSpeedX = updateSpeedX,
          uSpeedY = updateSpeedY;
      // DETECT COLLISION WITH AREA BORDER HORIZONTAL
      if (posX >= canvas1.w - diam || posX <= 0 + diam) {
        if (posX > canvas1.w - diam) {
          this.newX = canvas1.w - diam;
        } else if (posX < canvas1.w + diam) {
          this.newX = diam;
        }
        if (posX >= canvas1.w - diam) {
          this.bouncedPositive = true;
          this.bouncedNegative = false;
        } else if (posX <= diam) {
          this.bouncedNegative = true;
          this.bouncedPositive = false;
        }
        this.speedX = -this.speedX;
      }
      // DETECT COLLISION WITH AREA BORDER VERTICAL
      if (this.newY >= canvas1.h - diam || this.newY <= diam) {
        if (this.newY >= canvas1.h - diam) {
          this.newY = canvas1.h - diam;
        } else if (this.newY < diam) {
          this.newY = diam;
        }
        this.speedY = -this.speedY;
      }
      if (this.bouncedPositive && this.speedX != 0) {
        var _w = parseFloat(this.speedX.toFixed(1));
        this.speedX = _w;
        this.speedX += 0.1;
      } else if (this.bouncedNegative && this.speedX != 0) {
        var _w2 = parseFloat(this.speedX.toFixed(1));
        this.speedX = _w2;
        this.speedX -= 0.1;
        console.log(spdX);
      }
      if (spdX === 0 || spdY === 0) {
        this.stop = true;
      }
      this.speedY++;
      this.newX += this.speedX;
      this.newY += this.speedY;
      this.draw();
    }
  }]);

  return Circle;
}();

var canvas1 = {
  canvas: document.getElementById('canvas1'),
  w: window.innerWidth,
  h: window.innerHeight,
  pi: Math.PI,
  fullArc: Math.PI * 2,
  spin: 1,
  objects: {},
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
  makeCircles: function makeCircles() {
    this.objects.circles = [];
    for (var i = 0; i < 100; i++) {
      this.objects.circles.push(new Circle());
    }
    this.objects.circles.map(function (circle) {
      circle.draw();
    });
  },
  animate: function animate() {
    this.clear();
    this.objects.circles.map(function (circle) {
      circle.update();
    });
    var anim = requestAnimationFrame(this.animate.bind(this));
    if (this.stop) {
      cancelAnimationFrame(anim);
    }
  },
  clear: function clear() {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
  },
  init: function init() {
    this.width;
    this.height;
    this.makeCircles();
    this.animate();
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
    _com_canvas2.default.init();
    //- ### CANVAS 1 ON MOUSEMOVE
    // cnv1
    //   .addEventListener('mousemove', function (e) {
    //     let evt = e,
    //         ths = this;
    //     canvas1.draw(e);
    //   });

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VkY2UzYmYxNTZlZjhmZDBmNzEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlbXBsYXRlcyBub25yZWN1cnNpdmUgXFwucHVnJCIsIndlYnBhY2s6Ly8vLi9hcHAvanMvY29tcG9uZW50cy9jb21fY2FudmFzMS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC90ZW1wbGF0ZXMvaW5kZXgucHVnIl0sIm5hbWVzIjpbIkNpcmNsZSIsInBvc1giLCJwb3NZIiwiZGlhbWV0ZXIiLCJzcGVlZFgiLCJzcGVlZFkiLCJNYXRoIiwicmFuZG9tIiwiY2FudmFzMSIsImgiLCJuZXdYIiwicm91bmQiLCJ3IiwibmV3WSIsInIiLCJnIiwiYiIsInN0b3AiLCJzcGluIiwiYm91bmNlZFBvc2l0aXZlIiwiYm91bmNlZE5lZ2F0aXZlIiwiY3R4IiwieEhhbGYiLCJ5SGFsZiIsImJlZ2luUGF0aCIsImFyYyIsImZ1bGxBcmMiLCJmaWxsU3R5bGUiLCJmaWxsIiwidXBkYXRlU3BlZWRYIiwidXBkYXRlU3BlZWRZIiwiZGlhbSIsInNwZFgiLCJzcGRZIiwidVNwZWVkWCIsInVTcGVlZFkiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJkcmF3IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBpIiwiUEkiLCJvYmplY3RzIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibWFrZUNpcmNsZXMiLCJjaXJjbGVzIiwiaSIsInB1c2giLCJtYXAiLCJjaXJjbGUiLCJhbmltYXRlIiwiY2xlYXIiLCJ1cGRhdGUiLCJhbmltIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiaW5pdCIsInJlcXVpcmVBbGwiLCJrZXlzIiwiZm9yRWFjaCIsIndpbiIsImFwcCIsImJpbmRlciIsIndpbldpZHRoIiwid2luSGVpZ2h0IiwiaW5pY2lhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJNQSxNO0FBQ0osa0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsRUFBMENDLE1BQTFDLEVBQTZEO0FBQUE7O0FBQzNELFNBQUtGLFFBQUwsR0FBZ0JBLFlBQVlHLEtBQUtDLE1BQUwsTUFBa0JDLFFBQVFDLENBQVIsR0FBWSxDQUFiLEdBQWtCLENBQW5DLENBQTVCO0FBQ0EsU0FBS0MsSUFBTCxHQUFnQlQsUUFBUUssS0FBS0ssS0FBTCxDQUFXTCxLQUFLQyxNQUFMLE1BQWlCQyxRQUFRSSxDQUFSLEdBQVksS0FBS1QsUUFBbEMsQ0FBWCxDQUF4QjtBQUNBLFNBQUtVLElBQUwsR0FBZ0JYLFFBQVFJLEtBQUtLLEtBQUwsQ0FBV0wsS0FBS0MsTUFBTCxNQUFpQkMsUUFBUUMsQ0FBUixHQUFZLEtBQUtOLFFBQWxDLENBQVgsQ0FBeEI7QUFDQSxTQUFLQyxNQUFMLEdBQWdCQSxVQUFVLENBQTFCO0FBQ0EsU0FBS0MsTUFBTCxHQUFnQkEsVUFBVSxDQUExQjtBQUNBLFNBQUtTLENBQUwsR0FBZ0Isc0RBQWFSLEtBQUtDLE1BQUwsS0FBZ0IsR0FBN0M7QUFDQSxTQUFLUSxDQUFMLEdBQWdCLHNEQUFhVCxLQUFLQyxNQUFMLEtBQWdCLEdBQTdDO0FBQ0EsU0FBS1MsQ0FBTCxHQUFnQixzREFBYVYsS0FBS0MsTUFBTCxLQUFnQixHQUE3QztBQUNBLFNBQUtVLElBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0Q7Ozs7MkJBQ007QUFDTCxVQUFJQyxNQUFNYixRQUFRYSxHQUFsQjs7QUFDSTtBQUNBQyxjQUFXZCxRQUFRSSxDQUFSLEdBQVksQ0FGM0I7QUFBQSxVQUdJVyxRQUFXZixRQUFRQyxDQUFSLEdBQVksQ0FIM0I7QUFBQSxVQUlJRixTQUFXRCxLQUFLQyxNQUFMLEVBSmY7QUFBQSxVQUtJSixXQUFXLEtBQUtBLFFBTHBCO0FBQUEsVUFNSUYsT0FBVyxLQUFLUyxJQU5wQjtBQUFBLFVBT0lSLE9BQVcsS0FBS1csSUFQcEI7QUFRQVEsVUFBSUcsU0FBSjtBQUNBSCxVQUFJSSxHQUFKLENBQVF4QixJQUFSLEVBQWNDLElBQWQsRUFBb0JDLFFBQXBCLEVBQThCLENBQTlCLEVBQWlDSyxRQUFRa0IsT0FBekMsRUFBa0QsSUFBbEQ7QUFDQUwsVUFBSU0sU0FBSixhQUF3QixLQUFLYixDQUE3QixVQUFtQyxLQUFLQyxDQUF4QyxVQUE4QyxLQUFLQyxDQUFuRDtBQUNBSyxVQUFJTyxJQUFKO0FBQ0E7QUFDRDs7OzJCQUNNQyxZLEVBQWNDLFksRUFBYztBQUNqQyxVQUFJbEIsSUFBVUosUUFBUUksQ0FBdEI7QUFBQSxVQUNJSCxJQUFVRCxRQUFRQyxDQUR0QjtBQUFBLFVBRUlSLE9BQVUsS0FBS1MsSUFGbkI7QUFBQSxVQUdJUixPQUFVLEtBQUtXLElBSG5CO0FBQUEsVUFJSWtCLE9BQVUsS0FBSzVCLFFBSm5CO0FBQUEsVUFLSTZCLE9BQVUsS0FBSzVCLE1BTG5CO0FBQUEsVUFNSTZCLE9BQVUsS0FBSzVCLE1BTm5CO0FBQUEsVUFPSTZCLFVBQVVMLFlBUGQ7QUFBQSxVQVFJTSxVQUFVTCxZQVJkO0FBU0E7QUFDQSxVQUFJN0IsUUFBUU8sUUFBUUksQ0FBUixHQUFZbUIsSUFBcEIsSUFDRjlCLFFBQVEsSUFBSThCLElBRGQsRUFFRTtBQUNBLFlBQUk5QixPQUFPTyxRQUFRSSxDQUFSLEdBQVltQixJQUF2QixFQUE2QjtBQUMzQixlQUFLckIsSUFBTCxHQUFZRixRQUFRSSxDQUFSLEdBQVltQixJQUF4QjtBQUNELFNBRkQsTUFHSyxJQUFJOUIsT0FBT08sUUFBUUksQ0FBUixHQUFZbUIsSUFBdkIsRUFBNkI7QUFDaEMsZUFBS3JCLElBQUwsR0FBWXFCLElBQVo7QUFDRDtBQUNELFlBQUk5QixRQUFRTyxRQUFRSSxDQUFSLEdBQVltQixJQUF4QixFQUE4QjtBQUM1QixlQUFLWixlQUFMLEdBQXVCLElBQXZCO0FBQ0EsZUFBS0MsZUFBTCxHQUF1QixLQUF2QjtBQUNELFNBSEQsTUFJSyxJQUFJbkIsUUFBUThCLElBQVosRUFBa0I7QUFDckIsZUFBS1gsZUFBTCxHQUF1QixJQUF2QjtBQUNBLGVBQUtELGVBQUwsR0FBdUIsS0FBdkI7QUFDRDtBQUNELGFBQUtmLE1BQUwsR0FBYyxDQUFDLEtBQUtBLE1BQXBCO0FBQ0Q7QUFDRDtBQUNBLFVBQUksS0FBS1MsSUFBTCxJQUFhTCxRQUFRQyxDQUFSLEdBQVlzQixJQUF6QixJQUNGLEtBQUtsQixJQUFMLElBQWFrQixJQURmLEVBRUU7QUFDQSxZQUFJLEtBQUtsQixJQUFMLElBQWFMLFFBQVFDLENBQVIsR0FBWXNCLElBQTdCLEVBQW1DO0FBQ2pDLGVBQUtsQixJQUFMLEdBQVlMLFFBQVFDLENBQVIsR0FBWXNCLElBQXhCO0FBQ0QsU0FGRCxNQUdLLElBQUksS0FBS2xCLElBQUwsR0FBWWtCLElBQWhCLEVBQXNCO0FBQ3pCLGVBQUtsQixJQUFMLEdBQVlrQixJQUFaO0FBQ0Q7QUFDRCxhQUFLMUIsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDRDtBQUNELFVBQUksS0FBS2MsZUFBTCxJQUNGLEtBQUtmLE1BQUwsSUFBZSxDQURqQixFQUVFO0FBQ0EsWUFBSVEsS0FBSXdCLFdBQVcsS0FBS2hDLE1BQUwsQ0FBWWlDLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBWCxDQUFSO0FBQ0EsYUFBS2pDLE1BQUwsR0FBY1EsRUFBZDtBQUNBLGFBQUtSLE1BQUwsSUFBYSxHQUFiO0FBQ0QsT0FORCxNQU9LLElBQUksS0FBS2dCLGVBQUwsSUFDUCxLQUFLaEIsTUFBTCxJQUFlLENBRFosRUFFSDtBQUNBLFlBQUlRLE1BQUl3QixXQUFXLEtBQUtoQyxNQUFMLENBQVlpQyxPQUFaLENBQW9CLENBQXBCLENBQVgsQ0FBUjtBQUNBLGFBQUtqQyxNQUFMLEdBQWNRLEdBQWQ7QUFDQSxhQUFLUixNQUFMLElBQWEsR0FBYjtBQUNBa0MsZ0JBQVFDLEdBQVIsQ0FBWVAsSUFBWjtBQUNEO0FBQ0QsVUFBSUEsU0FBUyxDQUFULElBQWNDLFNBQVMsQ0FBM0IsRUFBOEI7QUFDNUIsYUFBS2hCLElBQUwsR0FBWSxJQUFaO0FBQ0Q7QUFDRCxXQUFLWixNQUFMO0FBQ0EsV0FBS0ssSUFBTCxJQUFhLEtBQUtOLE1BQWxCO0FBQ0EsV0FBS1MsSUFBTCxJQUFhLEtBQUtSLE1BQWxCO0FBQ0EsV0FBS21DLElBQUw7QUFDRDs7Ozs7O0FBR0gsSUFBSWhDLFVBQVU7QUFDWmlDLFVBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FERztBQUVaL0IsS0FBU2dDLE9BQU9DLFVBRko7QUFHWnBDLEtBQVNtQyxPQUFPRSxXQUhKO0FBSVpDLE1BQVN6QyxLQUFLMEMsRUFKRjtBQUtadEIsV0FBU3BCLEtBQUswQyxFQUFMLEdBQVUsQ0FMUDtBQU1aOUIsUUFBTSxDQU5NO0FBT1orQixXQUFTLEVBUEc7QUFRWjtBQUNBLE1BQUk1QixHQUFKLEdBQVU7QUFBQyxXQUFPLEtBQUtvQixNQUFMLENBQVlTLFVBQVosQ0FBdUIsSUFBdkIsQ0FBUDtBQUFvQyxHQVRuQztBQVVaLE1BQUlDLEtBQUosR0FBWTtBQUFDLFdBQU8sS0FBS1YsTUFBTCxDQUFZVSxLQUFaLEdBQW9CLEtBQUt2QyxDQUFoQztBQUFrQyxHQVZuQztBQVdaLE1BQUl3QyxNQUFKLEdBQWE7QUFBQyxXQUFPLEtBQUtYLE1BQUwsQ0FBWVcsTUFBWixHQUFxQixLQUFLM0MsQ0FBakM7QUFBbUMsR0FYckM7QUFZWjtBQUNBNEMsYUFiWSx5QkFhRTtBQUNaLFNBQUtKLE9BQUwsQ0FBYUssT0FBYixHQUF1QixFQUF2QjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEdBQXBCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUM1QixXQUFLTixPQUFMLENBQWFLLE9BQWIsQ0FBcUJFLElBQXJCLENBQTBCLElBQUl4RCxNQUFKLEVBQTFCO0FBQ0Q7QUFDRCxTQUFLaUQsT0FBTCxDQUFhSyxPQUFiLENBQXFCRyxHQUFyQixDQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDbkNBLGFBQU9sQixJQUFQO0FBQ0QsS0FGRDtBQUdELEdBckJXO0FBc0JabUIsU0F0QlkscUJBc0JGO0FBQ1IsU0FBS0MsS0FBTDtBQUNBLFNBQUtYLE9BQUwsQ0FBYUssT0FBYixDQUFxQkcsR0FBckIsQ0FBeUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ25DQSxhQUFPRyxNQUFQO0FBQ0QsS0FGRDtBQUdBLFFBQUlDLE9BQU9DLHNCQUFzQixLQUFLSixPQUFMLENBQWFLLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdEIsQ0FBWDtBQUNBLFFBQUksS0FBSy9DLElBQVQsRUFBZTtBQUNiZ0QsMkJBQXFCSCxJQUFyQjtBQUNEO0FBQ0YsR0EvQlc7QUFnQ1pGLE9BaENZLG1CQWdDSjtBQUNOLFFBQUl2QyxNQUFNLEtBQUtBLEdBQWY7QUFDQUEsUUFBSTZDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUt0RCxDQUF6QixFQUE0QixLQUFLSCxDQUFqQztBQUNELEdBbkNXO0FBb0NaMEQsTUFwQ1ksa0JBb0NMO0FBQ0wsU0FBS2hCLEtBQUw7QUFDQSxTQUFLQyxNQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtNLE9BQUw7QUFDRDtBQXpDVyxDQUFkOztrQkE0Q2VuRCxPOzs7Ozs7QUM5SWYseUM7Ozs7Ozs7OztBQ0tBOzs7O0FBUUE7Ozs7OztBQU5BO0FBQ0EsU0FBUzRELFVBQVQsQ0FBcUJ0RCxDQUFyQixFQUF3QjtBQUFFQSxJQUFFdUQsSUFBRixHQUFTQyxPQUFULENBQWlCeEQsQ0FBakI7QUFBc0IsQyxDQVJoRDtBQUNBO0FBQ0E7O0FBRUE7O0FBS0FzRCxXQUFXLHNCQUFYOztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsTUFBTTNCLE1BQVo7O0FBRUEsSUFBTTRCLE1BQU07QUFDVkMsUUFEVSxvQkFDRDtBQUNQLFFBQUlDLFdBQVlILElBQUkxQixVQUFwQjtBQUFBLFFBQ0k4QixZQUFZSixJQUFJekIsV0FEcEI7O0FBR0E7QUFDQSx5QkFBUXFCLElBQVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVELEdBcEJTO0FBcUJWUyxZQXJCVSx3QkFxQkc7QUFDWDtBQUNBLFNBQUtILE1BQUw7QUFDRDtBQXhCUyxDQUFaOztBQTJCQUQsSUFBSUksVUFBSixHOzs7Ozs7QUNoREEseUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZWRjZTNiZjE1NmVmOGZkMGY3MSIsInZhciBtYXAgPSB7XG5cdFwiLi9pbmRleC5wdWdcIjogNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdGVtcGxhdGVzIG5vbnJlY3Vyc2l2ZSBcXC5wdWckXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5jbGFzcyBDaXJjbGUge1xyXG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIGRpYW1ldGVyLCBzcGVlZFgsIHNwZWVkWSwgLi4uY29sb3JzKSB7XHJcbiAgICB0aGlzLmRpYW1ldGVyID0gZGlhbWV0ZXIgfHwgTWF0aC5yYW5kb20oKSAqICgoY2FudmFzMS5oIC8gMikgLyAyKTtcclxuICAgIHRoaXMubmV3WCA9ICAgICBwb3NYIHx8IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChjYW52YXMxLncgKyB0aGlzLmRpYW1ldGVyKSk7XHJcbiAgICB0aGlzLm5ld1kgPSAgICAgcG9zWSB8fCBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzMS5oICsgdGhpcy5kaWFtZXRlcikpOyAgICBcclxuICAgIHRoaXMuc3BlZWRYID0gICBzcGVlZFggfHwgODtcclxuICAgIHRoaXMuc3BlZWRZID0gICBzcGVlZFkgfHwgODtcclxuICAgIHRoaXMuciA9ICAgICAgICBjb2xvcnNbMF0gfHwgTWF0aC5yYW5kb20oKSAqIDI1NTtcclxuICAgIHRoaXMuZyA9ICAgICAgICBjb2xvcnNbMV0gfHwgTWF0aC5yYW5kb20oKSAqIDI1NTtcclxuICAgIHRoaXMuYiA9ICAgICAgICBjb2xvcnNbMl0gfHwgTWF0aC5yYW5kb20oKSAqIDI1NTtcclxuICAgIHRoaXMuc3RvcCA9ICAgICBmYWxzZTtcclxuICAgIHRoaXMuc3BpbiA9IDE7XHJcbiAgICB0aGlzLmJvdW5jZWRQb3NpdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5ib3VuY2VkTmVnYXRpdmUgPSBmYWxzZTsgICAgXHJcbiAgfVxyXG4gIGRyYXcoKSB7XHJcbiAgICBsZXQgY3R4ID0gY2FudmFzMS5jdHgsXHJcbiAgICAgICAgLy8gZXZ0ID0gZXZlbnQsXHJcbiAgICAgICAgeEhhbGYgPSAgICBjYW52YXMxLncgLyAyLFxyXG4gICAgICAgIHlIYWxmID0gICAgY2FudmFzMS5oIC8gMixcclxuICAgICAgICByYW5kb20gPSAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgZGlhbWV0ZXIgPSB0aGlzLmRpYW1ldGVyLFxyXG4gICAgICAgIHBvc1ggPSAgICAgdGhpcy5uZXdYLFxyXG4gICAgICAgIHBvc1kgPSAgICAgdGhpcy5uZXdZO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhwb3NYLCBwb3NZLCBkaWFtZXRlciwgMCwgY2FudmFzMS5mdWxsQXJjLCB0cnVlKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9LCAxKWA7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgLy8gY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuICB1cGRhdGUodXBkYXRlU3BlZWRYLCB1cGRhdGVTcGVlZFkpIHtcclxuICAgIGxldCB3ID0gICAgICAgY2FudmFzMS53LFxyXG4gICAgICAgIGggPSAgICAgICBjYW52YXMxLmgsXHJcbiAgICAgICAgcG9zWCA9ICAgIHRoaXMubmV3WCxcclxuICAgICAgICBwb3NZID0gICAgdGhpcy5uZXdZLFxyXG4gICAgICAgIGRpYW0gPSAgICB0aGlzLmRpYW1ldGVyLFxyXG4gICAgICAgIHNwZFggPSAgICB0aGlzLnNwZWVkWCxcclxuICAgICAgICBzcGRZID0gICAgdGhpcy5zcGVlZFksXHJcbiAgICAgICAgdVNwZWVkWCA9IHVwZGF0ZVNwZWVkWCxcclxuICAgICAgICB1U3BlZWRZID0gdXBkYXRlU3BlZWRZO1xyXG4gICAgLy8gREVURUNUIENPTExJU0lPTiBXSVRIIEFSRUEgQk9SREVSIEhPUklaT05UQUxcclxuICAgIGlmIChwb3NYID49IGNhbnZhczEudyAtIGRpYW0gfHwgXHJcbiAgICAgIHBvc1ggPD0gMCArIGRpYW1cclxuICAgICkge1xyXG4gICAgICBpZiAocG9zWCA+IGNhbnZhczEudyAtIGRpYW0pIHtcclxuICAgICAgICB0aGlzLm5ld1ggPSBjYW52YXMxLncgLSBkaWFtO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHBvc1ggPCBjYW52YXMxLncgKyBkaWFtKSB7XHJcbiAgICAgICAgdGhpcy5uZXdYID0gZGlhbTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9zWCA+PSBjYW52YXMxLncgLSBkaWFtKSB7XHJcbiAgICAgICAgdGhpcy5ib3VuY2VkUG9zaXRpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm91bmNlZE5lZ2F0aXZlID0gZmFsc2U7XHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgaWYgKHBvc1ggPD0gZGlhbSkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlZE5lZ2F0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdW5jZWRQb3NpdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3BlZWRYID0gLXRoaXMuc3BlZWRYO1xyXG4gICAgfVxyXG4gICAgLy8gREVURUNUIENPTExJU0lPTiBXSVRIIEFSRUEgQk9SREVSIFZFUlRJQ0FMXHJcbiAgICBpZiAodGhpcy5uZXdZID49IGNhbnZhczEuaCAtIGRpYW0gfHwgXHJcbiAgICAgIHRoaXMubmV3WSA8PSBkaWFtXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMubmV3WSA+PSBjYW52YXMxLmggLSBkaWFtKSB7XHJcbiAgICAgICAgdGhpcy5uZXdZID0gY2FudmFzMS5oIC0gZGlhbTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLm5ld1kgPCBkaWFtKSB7XHJcbiAgICAgICAgdGhpcy5uZXdZID0gZGlhbTtcclxuICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMuc3BlZWRZID0gLXRoaXMuc3BlZWRZO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm91bmNlZFBvc2l0aXZlICYmXHJcbiAgICAgIHRoaXMuc3BlZWRYICE9IDBcclxuICAgICkge1xyXG4gICAgICBsZXQgdyA9IHBhcnNlRmxvYXQodGhpcy5zcGVlZFgudG9GaXhlZCgxKSk7XHJcbiAgICAgIHRoaXMuc3BlZWRYID0gdztcclxuICAgICAgdGhpcy5zcGVlZFgrPTAuMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYm91bmNlZE5lZ2F0aXZlICYmIFxyXG4gICAgICB0aGlzLnNwZWVkWCAhPSAwXHJcbiAgICApIHtcclxuICAgICAgbGV0IHcgPSBwYXJzZUZsb2F0KHRoaXMuc3BlZWRYLnRvRml4ZWQoMSkpO1xyXG4gICAgICB0aGlzLnNwZWVkWCA9IHc7XHJcbiAgICAgIHRoaXMuc3BlZWRYLT0wLjE7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwZFgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwZFggPT09IDAgfHwgc3BkWSA9PT0gMCkge1xyXG4gICAgICB0aGlzLnN0b3AgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zcGVlZFkrKztcclxuICAgIHRoaXMubmV3WCArPSB0aGlzLnNwZWVkWDtcclxuICAgIHRoaXMubmV3WSArPSB0aGlzLnNwZWVkWTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGNhbnZhczEgPSB7XHJcbiAgY2FudmFzOiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczEnKSxcclxuICB3OiAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICBoOiAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgcGk6ICAgICAgTWF0aC5QSSxcclxuICBmdWxsQXJjOiBNYXRoLlBJICogMixcclxuICBzcGluOiAxLFxyXG4gIG9iamVjdHM6IHt9LFxyXG4gIC8vIEdFVFRFUlNcclxuICBnZXQgY3R4KCkge3JldHVybiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpfSxcclxuICBnZXQgd2lkdGgoKSB7cmV0dXJuIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53fSxcclxuICBnZXQgaGVpZ2h0KCkge3JldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmh9LFxyXG4gIC8vIE1FVEhPRFMgXHJcbiAgbWFrZUNpcmNsZXMoKSB7XHJcbiAgICB0aGlzLm9iamVjdHMuY2lyY2xlcyA9IFtdOyAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5jaXJjbGVzLnB1c2gobmV3IENpcmNsZSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5jaXJjbGVzLm1hcCgoY2lyY2xlKSA9PiB7XHJcbiAgICAgIGNpcmNsZS5kcmF3KCk7XHJcbiAgICB9KTtcclxuICB9LCAgXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIHRoaXMub2JqZWN0cy5jaXJjbGVzLm1hcCgoY2lyY2xlKSA9PiB7XHJcbiAgICAgIGNpcmNsZS51cGRhdGUoKTtcclxuICAgIH0pOyAgXHJcbiAgICBsZXQgYW5pbSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgICBpZiAodGhpcy5zdG9wKSB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBsZXQgY3R4ID0gdGhpcy5jdHg7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcclxuICB9LFxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLm1ha2VDaXJjbGVzKCk7XHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbnZhczE7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9qcy9jb21wb25lbnRzL2NvbV9jYW52YXMxLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zYXNzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vLSAjIyMgIyMjICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjXG4vLy0gQlVJTERcbi8vLSAjIyMgIyMjICMjIyAjIyMgIyMjICMjIyAjIyNcblxuLy8tICMjIyBDU1MgQlVJTERcbmltcG9ydCBzY3NzIGZyb20gJy4uL3Nhc3Mvc3R5bGVzLnNjc3MnO1xuIFxuLy8tICMjIyBURU1QTEFURVMgQlVJTERcbmZ1bmN0aW9uIHJlcXVpcmVBbGwgKHIpIHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfVxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL3RlbXBsYXRlcy8nLCBmYWxzZSwgL1xcLnB1ZyQvKSk7XG5cblxuLy8tICMjIyAjIyMgIyMjIENPTVBPTkVOVFNcbmltcG9ydCBjYW52YXMxIGZyb20gJy4vY29tcG9uZW50cy9jb21fY2FudmFzMSc7XG5cbi8vLSAjIyMgIyMjICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjIFxuLy8tIEFQUFxuLy8tICMjIyAjIyMgIyMjICMjIyAjIyMgIyMjICMjI1xuXG5jb25zdCB3aW4gPSB3aW5kb3c7XG5cbmNvbnN0IGFwcCA9IHsgIFxuICBiaW5kZXIoKSB7XG4gICAgbGV0IHdpbldpZHRoID0gIHdpbi5pbm5lcldpZHRoLFxuICAgICAgICB3aW5IZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG5cbiAgICAvLy0gIyMjICMjIyAjIyMgQ0FOVkFTIDFcbiAgICBjYW52YXMxLmluaXQoKTtcbiAgICAvLy0gIyMjIENBTlZBUyAxIE9OIE1PVVNFTU9WRVxuICAgIC8vIGNudjFcbiAgICAvLyAgIC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICBsZXQgZXZ0ID0gZSxcbiAgICAvLyAgICAgICAgIHRocyA9IHRoaXM7XG4gICAgLy8gICAgIGNhbnZhczEuZHJhdyhlKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gY252MVxuICAgIC8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgICAgY2FudmFzMS5jbGVhcigpO1xuICAgIC8vICAgfSk7XG5cbiAgfSxcbiAgaW5pY2lhbGl6ZSgpIHtcbiAgICAvLy0gIyMjICMjIyAjIyMgQ0FMTElORyBFVkVOVFNcbiAgICB0aGlzLmJpbmRlcigpO1xuICB9XG59XG5cbmFwcC5pbmljaWFsaXplKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvanMvYXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vaW5kZXguaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3RlbXBsYXRlcy9pbmRleC5wdWdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==