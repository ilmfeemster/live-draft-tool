"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/RoleList.js":
/*!************************************!*\
  !*** ./src/components/RoleList.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\nvar RoleList = function(param) {\n    var players = param.players, role = param.role;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: role\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\RoleList.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.UnorderedList, {\n                children: players.filter(function(player) {\n                    return player.Pos == role;\n                }).map(function(filteredName) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                        children: filteredName.Name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\RoleList.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\RoleList.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\RoleList.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = RoleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoleList);\nvar _c;\n$RefreshReg$(_c, \"RoleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb2xlTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFPQTtBQUUxQixJQUFNTSxRQUFRLEdBQUcsZ0JBQXVCO1FBQXBCQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsSUFBSSxTQUFKQSxJQUFJO0lBQy9CLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsR0FBQzswQkFBRUYsSUFBSTs7Ozs7cUJBQUs7MEJBQ2IsOERBQUNILDJEQUFhOzBCQUNYRSxPQUFPLENBQ0xJLE1BQU0sQ0FBQ0MsU0FBQUEsTUFBTTsyQkFBSUEsTUFBTSxDQUFDQyxHQUFHLElBQUlMLElBQUk7aUJBQUEsQ0FBQyxDQUNwQ00sR0FBRyxDQUFDQyxTQUFBQSxZQUFZO3lDQUNmLDhEQUFDYixzREFBUTtrQ0FBRWEsWUFBWSxDQUFDQyxJQUFJOzs7Ozs2QkFBWTtpQkFDekMsQ0FBQzs7Ozs7cUJBQ1U7Ozs7OzthQUNaLENBQ047Q0FDSDtBQWJLVixLQUFBQSxRQUFRO0FBZWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Sb2xlTGlzdC5qcz9lMDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SWNvbixcclxuICBPcmRlcmVkTGlzdCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuY29uc3QgUm9sZUxpc3QgPSAoeyBwbGF5ZXJzLCByb2xlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+e3JvbGV9PC9wPlxyXG4gICAgICA8VW5vcmRlcmVkTGlzdD5cclxuICAgICAgICB7cGxheWVyc1xyXG4gICAgICAgICAgLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLlBvcyA9PSByb2xlKVxyXG4gICAgICAgICAgLm1hcChmaWx0ZXJlZE5hbWUgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0+e2ZpbHRlcmVkTmFtZS5OYW1lfTwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvbGVMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIk9yZGVyZWRMaXN0IiwiVW5vcmRlcmVkTGlzdCIsIlJvbGVMaXN0IiwicGxheWVycyIsInJvbGUiLCJkaXYiLCJwIiwiZmlsdGVyIiwicGxheWVyIiwiUG9zIiwibWFwIiwiZmlsdGVyZWROYW1lIiwiTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RoleList.js\n"));

/***/ })

});