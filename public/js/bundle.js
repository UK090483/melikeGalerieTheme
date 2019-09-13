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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./js/nav.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewonscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewonscroll */ "./js/viewonscroll.js");
/* harmony import */ var _viewonscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_viewonscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paralax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paralax */ "./js/paralax.js");
/* harmony import */ var _paralax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_paralax__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./js/nav.js":
/*!*******************!*\
  !*** ./js/nav.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

var no_mobile_from = 840;
var add_scrolled_from = 50;
var nav_mob = document.querySelector(".nav--mobile-nav");
var body = document.querySelector("body");
var nav = document.querySelector("nav");

if (nav) {
  var nav_btn = nav.querySelector(".nav--mobile-btn");
  var nav_links = nav.querySelectorAll("a");

  bindEvents();

  function bindEvents() {
    nav_links.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });
    if (nav_btn) {
      nav_btn.addEventListener("click", e => {
        toggleNav();
      });
    }

    window.addEventListener("scroll", () => {
      add_scroled_class();
    });
    window.addEventListener("resize", () => {
      close_menu_if_wp_to_big();
    });
  }

  function toggleNav() {
    if (nav_mob.classList.contains("nav--open")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function openMobileNav() {
    nav.classList.remove("scrolled");
    nav_mob.classList.add("nav--open");
    nav_btn.classList.add("nav--mobile-btn-open");
    body.style.overflow = "hidden";
    stopBodyScrolling(true);
  }

  function closeMobileNav() {
    body.style.overflow = "scroll";
    stopBodyScrolling(false);
    nav_mob.classList.remove("nav--open");
    nav_btn.classList.remove("nav--mobile-btn-open");
    add_scroled_class();
  }

  function close_menu_if_wp_to_big() {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (w > no_mobile_from && nav.classList.contains("nav--open")) {
      closeMobileNav();
    }
  }

  var oldY = 0;
  var scrollLenght = 0;
  var hidden = false;
  function add_scroled_class() {
    var y = window.scrollY;
    var navClasslist = nav.classList;

    if (y > oldY && !navClasslist.contains("nav--scrolled")) {
      scrollLenght++;
      if (scrollLenght > 50) {
        navClasslist.add("nav--scrolled");
        scrollLenght = 0;
      }
    } else if (y < oldY && navClasslist.contains("nav--scrolled")) {
      navClasslist.remove("nav--scrolled");
    }

    if (
      y > add_scrolled_from &&
      !navClasslist.contains("nav--scrolled-small")
    ) {
      navClasslist.add("nav--scrolled-small");
    } else if (
      y < add_scrolled_from &&
      navClasslist.contains("nav--scrolled-small")
    ) {
      navClasslist.remove("nav--scrolled-small");
    }
    oldY = y;
  }

  function stopBodyScrolling(bool) {
    if (bool === true) {
      document.body.addEventListener("touchmove", freezeVp, false);
    } else {
      document.body.removeEventListener("touchmove", freezeVp, false);
    }
  }
  var freezeVp = function(e) {
    e.preventDefault();
  };
}


/***/ }),

/***/ "./js/paralax.js":
/*!***********************!*\
  !*** ./js/paralax.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (document.querySelector(".hero-image")) {
  const para = __webpack_require__(/*! ./rellax */ "./js/rellax.js");
  const paralax = new para(".hero-image", {
    speed: -10,
    center: true,

    round: true,
    vertical: true,
    horizontal: false
  });
  // module.exports = paralax;
}
//


/***/ }),

/***/ "./js/rellax.js":
/*!**********************!*\
  !*** ./js/rellax.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function(root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function() {
  var Rellax = function(el, options) {
    "use strict";

    var self = Object.create(Rellax.prototype);

    var posY = 0;
    var screenY = 0;
    var posX = 0;
    var screenX = 0;
    var blocks = [];
    var stopBlocks = [];
    var pause = true;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function(callback) {
        return setTimeout(callback, 1000 / 60);
      };

    // store the id for later use
    var loopId = null;

    // check what cancelAnimation method to use
    var clearLoop =
      window.cancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      clearTimeout;

    // check which transform property to use
    var transformProp =
      window.transformProp ||
      (function() {
        var testEl = document.createElement("div");
        if (testEl.style.transform === null) {
          var vendors = ["Webkit", "Moz", "ms"];
          for (var vendor in vendors) {
            if (testEl.style[vendors[vendor] + "Transform"] !== undefined) {
              return vendors[vendor] + "Transform";
            }
          }
        }
        return "transform";
      })();

    // Default Settings
    self.options = {
      speed: -5,
      center: true,
      wrapper: null,
      relativeToWrapper: false,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function() {}
    };

    // User defined options (might have more in the future)
    if (options) {
      Object.keys(options).forEach(function(key) {
        self.options[key] = options[key];
      });
    }

    // By default, rellax class
    if (!el) {
      el = ".rellax";
    }

    // check if el is a className or a node
    var elements =
      typeof el === "string" ? document.querySelectorAll(el) : [el];

    // Now query selector
    if (elements.length > 0) {
      self.elems = elements;
    }

    // The elements don't exist
    else {
      throw new Error("The elements you're trying to select don't exist.");
    }

    // Has a wrapper and it exists
    if (self.options.wrapper) {
      if (!self.options.wrapper.nodeType) {
        var wrapper = document.querySelector(self.options.wrapper);

        if (wrapper) {
          self.options.wrapper = wrapper;
        } else {
          throw new Error("The wrapper you're trying to use don't exist.");
        }
      }
    }

    // Get and cache initial position of all elements
    var cacheBlocks = function() {
      for (var i = 0; i < self.elems.length; i++) {
        var block = createBlock(self.elems[i]);
        blocks.push(block);
        stopBlocks.push(true);
      }
    };

    // Let's kick this script off
    // Build array for cached element values
    var init = function() {
      for (var i = 0; i < blocks.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }

      blocks = [];
      stopBlocks = [];

      screenY = window.innerHeight;
      screenX = window.innerWidth;
      setPosition();

      cacheBlocks();

      // If paused, unpause and set listener for window resizing events
      if (pause) {
        window.addEventListener("resize", init);
        pause = false;
      }
      animate();
    };

    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function(el) {
      var dataPercentage = el.getAttribute("data-rellax-percentage");
      var dataSpeed = el.getAttribute("data-rellax-speed");
      var dataZindex = el.getAttribute("data-rellax-zindex") || 0;

      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY and posX needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var wrapperPosY = self.options.wrapper
        ? self.options.wrapper.scrollTop
        : window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
      if (self.options.relativeToWrapper) {
        var scrollPosY =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
      }
      var posY = self.options.vertical
        ? dataPercentage || self.options.center
          ? wrapperPosY
          : 0
        : 0;
      var posX = self.options.horizontal
        ? dataPercentage || self.options.center
          ? window.pageXOffset ||
            document.documentElement.scrollLeft ||
            document.body.scrollLeft
          : 0
        : 0;

      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

      var blockLeft = posX + el.getBoundingClientRect().left;
      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

      // apparently parallax equation everyone uses
      var percentageY = dataPercentage
        ? dataPercentage
        : (posY - blockTop + screenY) / (blockHeight + screenY);
      var percentageX = dataPercentage
        ? dataPercentage
        : (posX - blockLeft + screenX) / (blockWidth + screenX);
      if (self.options.center) {
        percentageX = 0.5;
        percentageY = 0.5;
      }

      // Optional individual block speed as data attr, otherwise global speed
      var speed = dataSpeed ? dataSpeed : self.options.speed;

      var bases = updatePosition(percentageX, percentageY, speed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = "";

      // Check if there's an inline styled transform
      if (style.indexOf("transform") >= 0) {
        // Get the index of the transform
        var index = style.indexOf("transform");

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(";");

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform =
            " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
        }
      }

      return {
        baseX: bases.x,
        baseY: bases.y,
        top: blockTop,
        left: blockLeft,
        height: blockHeight,
        width: blockWidth,
        speed: speed,
        style: style,
        transform: transform,
        zindex: dataZindex
      };
    };

    // set scroll position (posY, posX)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function() {
      var oldY = posY;
      var oldX = posX;

      posY = self.options.wrapper
        ? self.options.wrapper.scrollTop
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop || window.pageYOffset;
      posX = self.options.wrapper
        ? self.options.wrapper.scrollLeft
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollLeft || window.pageXOffset;
      // If option relativeToWrapper is true, use relative wrapper value instead.
      if (self.options.relativeToWrapper) {
        var scrollPosY =
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop || window.pageYOffset;
        posY = scrollPosY - self.options.wrapper.offsetTop;
      }

      if (oldY != posY && self.options.vertical) {
        // scroll changed, return true
        return true;
      }

      if (oldX != posX && self.options.horizontal) {
        // scroll changed, return true
        return true;
      }

      // scroll did not change
      return false;
    };

    // Ahh a pure function, gets new transform value
    // based on scrollPosition and speed
    // Allow for decimal pixel values
    var updatePosition = function(percentageX, percentageY, speed) {
      var result = {};
      var valueX = speed * (100 * (1 - percentageX));
      var valueY = speed * (100 * (1 - percentageY));

      result.x = self.options.round
        ? Math.round(valueX)
        : Math.round(valueX * 100) / 100;
      result.y = self.options.round
        ? Math.round(valueY)
        : Math.round(valueY * 100) / 100;

      return result;
    };

    // Loop
    var update = function() {
      if (setPosition() && pause === false) {
        animate();
      }

      // loop again
      loopId = loop(update);
    };

    // Transform3d on parallax element
    var animate = function() {
      var positions;
      for (var i = 0; i < self.elems.length; i++) {
        if (stopBlocks[i]) {
          var percentageY =
            (posY - blocks[i].top + screenY) / (blocks[i].height + screenY);
          var percentageX =
            (posX - blocks[i].left + screenX) / (blocks[i].width + screenX);

          // Subtracting initialize value, so element stays in same spot as HTML
          positions = updatePosition(percentageX, percentageY, blocks[i].speed); // - blocks[i].baseX;
          var positionY = positions.y - blocks[i].baseY;
          var positionX = positions.x - blocks[i].baseX;

          var zindex = blocks[i].zindex;

          // Move that element
          // (Set the new translation and append initial inline transforms.)
          var translate =
            "translate3d(" +
            (self.options.horizontal ? positionX : "0") +
            "px," +
            (self.options.vertical ? positionY : "0") +
            "px," +
            zindex +
            "px) " +
            blocks[i].transform;
          self.elems[i].style[transformProp] = translate;
        }
      }
      self.options.callback(positions);
    };

    self.destroy = function() {
      for (var i = 0; i < self.elems.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }

      // Remove resize event listener if not pause, and pause
      if (!pause) {
        window.removeEventListener("resize", init);
        pause = true;
      }

      // Clear the animation loop to prevent possible memory leak
      clearLoop(loopId);
      loopId = null;
    };

    // Init
    init();

    // Start the loop
    update();

    // Allow to recalculate the initial values whenever we want
    self.refresh = init;

    self.start = function(element) {
      self.elems.forEach((e, index) => {
        if (e === element) {
          stopBlocks[index] = true;
        }
      });
    };
    self.stop = function(element) {
      self.elems.forEach((e, index) => {
        if (e === element) {
          stopBlocks[index] = false;
        }
      });
    };

    return self;
  };
  return Rellax;
});


/***/ }),

/***/ "./js/viewonscroll.js":
/*!****************************!*\
  !*** ./js/viewonscroll.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function InView() {
//   let callbacks = [];
//   let ticking = false;

//   window.addEventListener("scroll", function(e) {
//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         handlescroll();
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });

//   this.subscribe = (selector, fn) => {
//     let elements = document.querySelectorAll(selector);
//     callbacks.push([elements, fn]);
//   };

//   this.initAll = o => {
//     callbacks.forEach(elements => {
//       elements[0].forEach(element => {
//         element.style.opacity = "0";
//       });
//     });
//   };

//   this.init = o => {
//     handlescroll();
//   };

//   function handlescroll() {
//     let result = {};
//     let w = window.innerWidth;
//     let h = window.innerHeight;

//     callbacks.forEach(e => {
//       e[0].forEach(element => {
//         e[1](checkElement(element), element);
//       });

//       function checkElement(element) {
//         let bs = element.getBoundingClientRect();
//         let bottom = h - bs.top;
//         let top = bs.top + bs.height;
//         result.inViewport = bottom > 0 && top > 0;
//         result.visibleComplete = bottom - bs.height > 0 && top - bs.height > 0;
//         result.inViewportProcent = bottom / (h + bs.height);
//         result.visibleCompleteProcent =
//           (bottom - top + (h - bs.height)) / 2 / (h - bs.height);
//         return result;
//       }
//     });
//   }
// }

// let inView = new InView();

// inView.subscribe(".ku-card-pic", hwatch);
// inView.initAll("0");
// inView.init();

// function hwatch(r, e) {
//   console.log(e);
//   // if (r.inViewport) {
//   //   if (r.inViewportProcent > 0.2) {
//   //     e.classList.add("hp-text--wrap-animation");
//   //   }
//   // } else {
//   //   e.classList.remove("hp-text--wrap-animation");
//   // }
// }
// import InView from "./inview";
// let inView = new InView();
// inView.subscribe("p", hwatch);
// function hwatch(r, e) {
//   if (r.inViewportProcent > 0.2) {
//     e.style.opacity = "1";
//   } else {
//     e.style.opacity = "0";
//   }
// }


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map