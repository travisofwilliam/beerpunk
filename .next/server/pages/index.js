module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/beerpunk/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\nconst Index = () => {\n  // State prop for response from axios GET request\n  const {\n    0: beerRes,\n    1: setBeerRes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); // State prop for modified beer list according to ABV\n\n  const {\n    0: beerList,\n    1: setBeerList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const getBeers = e => {\n    e.preventDefault(); // GET all beers\n\n    axios.get('https://api.punkapi.com/v2/beers').then(res => {\n      // Store all beers in State\n      // beerRes persists original API Response\n      setBeerRes(res.data); // beerList will be modified when specific ABV ranges are selected\n\n      setBeerList(res.data);\n    }).catch(err => console.log(err));\n  };\n\n  const selectedAbv = e => {\n    if (e.target.value === 'less than 6') {\n      setBeerList(beerRes.filter(beer => beer.abv < 6));\n    } else if (e.target.value === '6 or more') {\n      setBeerList(beerRes.filter(beer => beer.abv >= 6));\n    } else {\n      setBeerList(beerRes);\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/pulse/bootstrap.min.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  })), __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, \"Beer Punk\"), __jsx(\"button\", {\n    className: \"btn btn-block btn-primary mb-3\",\n    onClick: getBeers,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"Get All Beers\"), // If beerRes is populated \n  beerRes.length >= 1 ? __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"select\", {\n    className: \"btn btn-block btn-secondary mb-3\",\n    onChange: selectedAbv,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, \"--Choose ABV Range--\"), __jsx(\"option\", {\n    value: \"less than 6\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, \"Lower than 6%\"), __jsx(\"option\", {\n    value: \"6 or more\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"6% or higher\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, beerList.map((beer, idx) => {\n    return __jsx(\"div\", {\n      key: idx,\n      className: \"card col-sm-4 mb-3 p-3\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 26\n      }\n    }, __jsx(\"img\", {\n      style: {\n        width: '100%',\n        height: '35vw',\n        objectFit: 'contain'\n      },\n      src: beer.image_url,\n      alt: \"\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }\n    }), __jsx(\"h5\", {\n      className: \"card-header\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 21\n      }\n    }, beer.name), __jsx(\"div\", {\n      className: \"card-body\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }\n    }, __jsx(\"h6\", {\n      className: \"card-title\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 23\n      }\n    }, beer.tagline), __jsx(\"p\", {\n      className: \"card-text\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 23\n      }\n    }, __jsx(\"strong\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 48\n      }\n    }, \"ABV: \"), beer.abv, \"%\")));\n  }))) : '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkluZGV4IiwiYmVlclJlcyIsInNldEJlZXJSZXMiLCJ1c2VTdGF0ZSIsImJlZXJMaXN0Iiwic2V0QmVlckxpc3QiLCJnZXRCZWVycyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRBYnYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsImJlZXIiLCJhYnYiLCJsZW5ndGgiLCJtYXAiLCJpZHgiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlX3VybCIsIm5hbWUiLCJ0YWdsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUVBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBRWxCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEMsQ0FIa0IsQ0FLbEI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7O0FBRUEsUUFBTUcsUUFBUSxHQUFJQyxDQUFELElBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRixHQURzQixDQUd0Qjs7QUFDQVYsU0FBSyxDQUFDVyxHQUFOLENBQVUsa0NBQVYsRUFDR0MsSUFESCxDQUNRQyxHQUFHLElBQUk7QUFDWDtBQUVBO0FBQ0FULGdCQUFVLENBQUNTLEdBQUcsQ0FBQ0MsSUFBTCxDQUFWLENBSlcsQ0FNWDs7QUFDQVAsaUJBQVcsQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQVg7QUFDRCxLQVRILEVBVUdDLEtBVkgsQ0FVU0MsR0FBRyxJ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QTtBQUFBLE9BQTRCVCxJQUFJLENBQUNVLE9BQWpDLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6QixFQUFnRFYsSUFBSSxDQUFDQyxHQUFyRCxNQUZGLENBSEssQ0FBUDtBQVFELEdBVEQsQ0FGSixDQVJGLENBREYsR0F3QkksRUFoQ1IsQ0FERjtBQXFDRCxDQTFFRDs7QUE0RWV0QixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAvLyBTdGF0ZSBwcm9wIGZvciByZXNwb25zZSBmcm9tIGF4aW9zIEdFVCByZXF1ZXN0XG4gIGNvbnN0IFtiZWVyUmVzLCBzZXRCZWVyUmVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8vIFN0YXRlIHByb3AgZm9yIG1vZGlmaWVkIGJlZXIgbGlzdCBhY2NvcmRpbmcgdG8gQUJWXG4gIGNvbnN0IFtiZWVyTGlzdCwgc2V0QmVlckxpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgZ2V0QmVlcnMgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gR0VUIGFsbCBiZWVyc1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy8gU3RvcmUgYWxsIGJlZXJzIGluIFN0YXRlXG5cbiAgICAgICAgLy8gYmVlclJlcyBwZXJzaXN0cyBvcmlnaW5hbCBBUEkgUmVzcG9uc2VcbiAgICAgICAgc2V0QmVlclJlcyhyZXMuZGF0YSlcblxuICAgICAgICAvLyBiZWVyTGlzdCB3aWxsIGJlIG1vZGlmaWVkIHdoZW4gc3BlY2lmaWMgQUJWIHJhbmdlcyBhcmUgc2VsZWN0ZWRcbiAgICAgICAgc2V0QmVlckxpc3QocmVzLmRhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRBYnYgPSAoZSkgPT4ge1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnbGVzcyB0aGFuIDYnKSB7XG4gICAgICBzZXRCZWVyTGlzdChiZWVyUmVzLmZpbHRlcihiZWVyID0+IGJlZXIuYWJ2IDwgNikpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJzYgb3IgbW9yZScpIHtcbiAgICAgIHNldEJlZXJMaXN0KGJlZXJSZXMuZmlsdGVyKGJlZXIgPT4gYmVlci5hYnYgPj0gNikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJlZXJMaXN0KGJlZXJSZXMpXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3B1bHNlL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMz5CZWVyIFB1bms8L2gzPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgbWItMycgb25DbGljaz17Z2V0QmVlcnN9PkdldCBBbGwgQmVlcnM8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgLy8gSWYgYmVlclJlcyBpcyBwb3B1bGF0ZWQgXG4gICAgICAgIGJlZXJSZXMubGVuZ3RoID49IDEgP1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5IG1iLTMnIG9uQ2hhbmdlPXtzZWxlY3RlZEFidn0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLUNob29zZSBBQlYgUmFuZ2UtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVzcyB0aGFuIDZcIj5Mb3dlciB0aGFuIDYlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2IG9yIG1vcmVcIj42JSBvciBoaWdoZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVlckxpc3QubWFwKChiZWVyLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJjYXJkIGNvbC1zbS00IG1iLTMgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMzV2dycsIG9iamVjdEZpdDogJ2NvbnRhaW4nIH19IHNyYz17YmVlci5pbWFnZV91cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntiZWVyLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntiZWVyLnRhZ2xpbmV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c3Ryb25nPkFCVjogPC9zdHJvbmc+e2JlZXIuYWJ2fSU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });