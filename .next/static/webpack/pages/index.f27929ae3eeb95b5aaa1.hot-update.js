webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/beerpunk/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar Index = function Index() {\n  _s();\n\n  // State prop for response from axios GET request\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      beerRes = _useState[0],\n      setBeerRes = _useState[1]; // State prop for modified beer list according to ABV\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      beerList = _useState2[0],\n      setBeerList = _useState2[1];\n\n  var getBeers = function getBeers(e) {\n    e.preventDefault(); // GET all beers\n\n    axios.get('https://api.punkapi.com/v2/beers').then(function (res) {\n      // Store all beers in State\n      // beerRes persists original API Response\n      setBeerRes(res.data); // beerList will be modified when specific ABV ranges are selected\n\n      setBeerList(res.data);\n      console.log(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var selectedAbv = function selectedAbv(e) {\n    if (e.target.value === 'less than 6') {\n      setBeerList(beerRes.filter(function (beer) {\n        return beer.abv < 6;\n      }));\n    } else if (e.target.value === '6 or more') {\n      setBeerList(beerRes.filter(function (beer) {\n        return beer.abv >= 6;\n      }));\n    } else {\n      setBeerList(beerRes);\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/pulse/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, \"Beer Punk\"), __jsx(\"button\", {\n    className: \"btn btn-block btn-primary mb-3\",\n    onClick: getBeers,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, \"Get All Beers\"), // If beerRes is populated \n  beerRes.length >= 1 ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"select\", {\n    className: \"btn btn-block btn-secondary mb-3\",\n    onChange: selectedAbv,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"--Choose ABV Range--\"), __jsx(\"option\", {\n    value: \"less than 6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, \"Lower than 6%\"), __jsx(\"option\", {\n    value: \"6 or more\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"6% or higher\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, beerList.map(function (beer, idx) {\n    return __jsx(\"div\", {\n      key: idx,\n      className: \"card col-sm-4 mb-3 p-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 26\n      }\n    }, __jsx(\"img\", {\n      style: {\n        width: '100%',\n        height: '15vw'\n      },\n      src: beer.image_url,\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }\n    }), __jsx(\"h5\", {\n      className: \"card-header\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }\n    }, beer.name), __jsx(\"div\", {\n      className: \"card-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 21\n      }\n    }, __jsx(\"h6\", {\n      className: \"card-title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 23\n      }\n    }, beer.tagline), __jsx(\"p\", {\n      className: \"card-text\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 23\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 48\n      }\n    }, \"ABV:\"), beer.abv, \"%\")));\n  }))) : '');\n};\n\n_s(Index, \"q9328UZtFWkLo/qgtPf/eqaURz4=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJJbmRleCIsInVzZVN0YXRlIiwiYmVlclJlcyIsInNldEJlZXJSZXMiLCJiZWVyTGlzdCIsInNldEJlZXJMaXN0IiwiZ2V0QmVlcnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzZWxlY3RlZEFidiIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwiYmVlciIsImFidiIsImxlbmd0aCIsIm1hcCIsImlkeCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VfdXJsIiwibmFtZSIsInRhZ2xpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVsQjtBQUZrQixrQkFHWUMsc0RBQVEsQ0FBQyxFQUFELENBSHBCO0FBQUEsTUFHWEMsT0FIVztBQUFBLE1BR0ZDLFVBSEUsaUJBS2xCOzs7QUFMa0IsbUJBTWNGLHNEQUFRLENBQUMsRUFBRCxDQU50QjtBQUFBLE1BTVhHLFFBTlc7QUFBQSxNQU1EQyxXQU5DOztBQVFsQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRixHQURzQixDQUd0Qjs7QUFDQVYsU0FBSyxDQUFDVyxHQUFOLENBQVUsa0NBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBSTtBQUNYO0FBRUE7QUFDQVIsZ0JBQVUsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFMLENBQVYsQ0FKVyxDQU1YOztBQUNBUCxpQkFBVyxDQUFDTSxHQUFHLENBQUNDLElBQUwsQ0FBWDtBQUVBQyxhQUFPLENBQUNDLEdB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QVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEJSLElBQUksQ0FBQ1MsT0FBakMsQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXpCLEVBQStDVCxJQUFJLENBQUNDLEdBQXBELE1BRkYsQ0FISyxDQUFQO0FBUUQsR0FURCxDQUZKLENBUkYsQ0FERixHQXdCSSxFQWhDUixDQURGO0FBcUNELENBNUVEOztHQUFNckIsSzs7S0FBQUEsSztBQThFU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAvLyBTdGF0ZSBwcm9wIGZvciByZXNwb25zZSBmcm9tIGF4aW9zIEdFVCByZXF1ZXN0XG4gIGNvbnN0IFtiZWVyUmVzLCBzZXRCZWVyUmVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8vIFN0YXRlIHByb3AgZm9yIG1vZGlmaWVkIGJlZXIgbGlzdCBhY2NvcmRpbmcgdG8gQUJWXG4gIGNvbnN0IFtiZWVyTGlzdCwgc2V0QmVlckxpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgZ2V0QmVlcnMgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gR0VUIGFsbCBiZWVyc1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgLy8gU3RvcmUgYWxsIGJlZXJzIGluIFN0YXRlXG5cbiAgICAgICAgLy8gYmVlclJlcyBwZXJzaXN0cyBvcmlnaW5hbCBBUEkgUmVzcG9uc2VcbiAgICAgICAgc2V0QmVlclJlcyhyZXMuZGF0YSlcblxuICAgICAgICAvLyBiZWVyTGlzdCB3aWxsIGJlIG1vZGlmaWVkIHdoZW4gc3BlY2lmaWMgQUJWIHJhbmdlcyBhcmUgc2VsZWN0ZWRcbiAgICAgICAgc2V0QmVlckxpc3QocmVzLmRhdGEpXG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRBYnYgPSAoZSkgPT4ge1xuXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnbGVzcyB0aGFuIDYnKSB7XG4gICAgICBzZXRCZWVyTGlzdChiZWVyUmVzLmZpbHRlcihiZWVyID0+IGJlZXIuYWJ2IDwgNikpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJzYgb3IgbW9yZScpIHtcbiAgICAgIHNldEJlZXJMaXN0KGJlZXJSZXMuZmlsdGVyKGJlZXIgPT4gYmVlci5hYnYgPj0gNikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJlZXJMaXN0KGJlZXJSZXMpXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3B1bHNlL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMz5CZWVyIFB1bms8L2gzPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgbWItMycgb25DbGljaz17Z2V0QmVlcnN9PkdldCBBbGwgQmVlcnM8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgLy8gSWYgYmVlclJlcyBpcyBwb3B1bGF0ZWQgXG4gICAgICAgIGJlZXJSZXMubGVuZ3RoID49IDEgP1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5IG1iLTMnIG9uQ2hhbmdlPXtzZWxlY3RlZEFidn0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLUNob29zZSBBQlYgUmFuZ2UtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVzcyB0aGFuIDZcIj5Mb3dlciB0aGFuIDYlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2IG9yIG1vcmVcIj42JSBvciBoaWdoZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVlckxpc3QubWFwKChiZWVyLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJjYXJkIGNvbC1zbS00IG1iLTMgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTV2dycgfX0gc3JjPXtiZWVyLmltYWdlX3VybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e2JlZXIubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2JlZXIudGFnbGluZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxzdHJvbmc+QUJWOjwvc3Ryb25nPntiZWVyLmFidn0lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})