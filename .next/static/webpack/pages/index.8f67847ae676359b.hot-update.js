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

/***/ "./src/components/MobileHeader.js":
/*!****************************************!*\
  !*** ./src/components/MobileHeader.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DraftLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftLog */ \"./src/components/DraftLog.js\");\n/* harmony import */ var _UndoButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UndoButton */ \"./src/components/UndoButton.js\");\n/* harmony import */ var _TurnStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TurnStats */ \"./src/components/TurnStats.js\");\n/* harmony import */ var _DraftBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DraftBoard */ \"./src/components/DraftBoard.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar MobileHeader = function(param) {\n    var draftedPlayers = param.draftedPlayers, undoDraft = param.undoDraft, lastPick = param.lastPick, draftRound = param.draftRound, draftPick = param.draftPick, turnCountdown = param.turnCountdown, draftBoard = param.draftBoard;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        style: {\n            backgroundColor: \"#131D2C\",\n            width: \"100vw\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                style: {\n                    color: \"#b9c4d4\",\n                    fontSize: \"20px\",\n                    marginLeft: \"8px\"\n                },\n                children: [\n                    \"Live Draft Tool\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"12px\"\n                        },\n                        children: \"6 Points Passing TD, PPR\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaFootballBall, {\n                style: {\n                    color: \"#b9c4d4\",\n                    fontSize: \"20px\",\n                    margin: \"10px 20px 0px 8px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                direction: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                        style: {\n                            marginRight: \"30px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DraftBoard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                draftBoard: draftBoard\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DraftLog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                draftedPlayers: draftedPlayers\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UndoButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                undoDraft: undoDraft,\n                                lastPick: lastPick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TurnStats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        draftRound: draftRound,\n                        draftPick: draftPick,\n                        turnCountdown: turnCountdown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\MobileHeader.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = MobileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileHeader);\nvar _c;\n$RefreshReg$(_c, \"MobileHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVIZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDUTtBQUNJO0FBQ0Y7QUFDRTtBQUM0QjtBQUNsQjtBQUVoRCxJQUFNVSxZQUFZLEdBQUcsZ0JBUWY7UUFQSkMsY0FBYyxTQUFkQSxjQUFjLEVBQ2RDLFNBQVMsU0FBVEEsU0FBUyxFQUNUQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsVUFBVSxTQUFWQSxVQUFVLEVBQ1ZDLFNBQVMsU0FBVEEsU0FBUyxFQUNUQyxhQUFhLFNBQWJBLGFBQWEsRUFDYkMsVUFBVSxTQUFWQSxVQUFVO0lBRVYscUJBQ0UsOERBQUNYLGtEQUFJO1FBQUNZLEtBQUssRUFBRTtZQUFFQyxlQUFlLEVBQUUsU0FBUztZQUFFQyxLQUFLLEVBQUUsT0FBTztTQUFFOzswQkFDekQsOERBQUNaLGlEQUFHO2dCQUNGVSxLQUFLLEVBQUU7b0JBQ0xHLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCQyxVQUFVLEVBQUUsS0FBSztpQkFDbEI7O29CQUNGLGlCQUVDO2tDQUFBLDhEQUFDQyxJQUFFOzs7OzZCQUFNO2tDQUNULDhEQUFDQyxHQUFDO3dCQUFDUCxLQUFLLEVBQUU7NEJBQUVJLFFBQVEsRUFBRSxNQUFNO3lCQUFFO2tDQUFFLDBCQUF3Qjs7Ozs7NkJBQUk7Ozs7OztxQkFDeEQ7MEJBQ04sOERBQUNiLDBEQUFjO2dCQUNiUyxLQUFLLEVBQUU7b0JBQ0xHLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCSSxNQUFNLEVBQUUsbUJBQW1CO2lCQUM1Qjs7Ozs7cUJBQ0Q7MEJBQ0YsOERBQUNuQixvREFBTTs7OztxQkFBRzswQkFDViw4REFBQ0Qsa0RBQUk7Z0JBQUNxQixTQUFTLEVBQUMsUUFBUTs7a0NBQ3RCLDhEQUFDdEIseURBQVc7d0JBQ1ZhLEtBQUssRUFBRTs0QkFDTFUsV0FBVyxFQUFFLE1BQU07eUJBQ3BCOzswQ0FFRCw4REFBQ3hCLG1EQUFVO2dDQUFDYSxVQUFVLEVBQUVBLFVBQVU7Ozs7O3FDQUFJOzBDQUN0Qyw4REFBQ2hCLGlEQUFRO2dDQUFDVSxjQUFjLEVBQUVBLGNBQWM7Ozs7O3FDQUFJOzBDQUM1Qyw4REFBQ1QsbURBQVU7Z0NBQUNVLFNBQVMsRUFBRUEsU0FBUztnQ0FBRUMsUUFBUSxFQUFFQSxRQUFROzs7OztxQ0FBSTs7Ozs7OzZCQUM1QztrQ0FDZCw4REFBQ1Ysa0RBQVM7d0JBQ1JXLFVBQVUsRUFBRUEsVUFBVTt3QkFDdEJDLFNBQVMsRUFBRUEsU0FBUzt3QkFDcEJDLGFBQWEsRUFBRUEsYUFBYTs7Ozs7NkJBQzVCOzs7Ozs7cUJBQ0c7Ozs7OzthQUNGLENBQ1A7Q0FDSDtBQWhES04sS0FBQUEsWUFBWTtBQWtEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVIZWFkZXIuanM/MzNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRHJhZnRMb2cgZnJvbSAnLi9EcmFmdExvZyc7XHJcbmltcG9ydCBVbmRvQnV0dG9uIGZyb20gJy4vVW5kb0J1dHRvbic7XHJcbmltcG9ydCBUdXJuU3RhdHMgZnJvbSAnLi9UdXJuU3RhdHMnO1xyXG5pbXBvcnQgRHJhZnRCb2FyZCBmcm9tICcuL0RyYWZ0Qm9hcmQnO1xyXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgRmxleCwgU3BhY2VyLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgRmFGb290YmFsbEJhbGwgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAoe1xyXG4gIGRyYWZ0ZWRQbGF5ZXJzLFxyXG4gIHVuZG9EcmFmdCxcclxuICBsYXN0UGljayxcclxuICBkcmFmdFJvdW5kLFxyXG4gIGRyYWZ0UGljayxcclxuICB0dXJuQ291bnRkb3duLFxyXG4gIGRyYWZ0Qm9hcmQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzEzMUQyQycsIHdpZHRoOiAnMTAwdncnIH19PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAnI2I5YzRkNCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIExpdmUgRHJhZnQgVG9vbFxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+NiBQb2ludHMgUGFzc2luZyBURCwgUFBSPC9wPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEZhRm9vdGJhbGxCYWxsXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAnI2I5YzRkNCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMTBweCAyMHB4IDBweCA4cHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgPEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzMwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RHJhZnRCb2FyZCBkcmFmdEJvYXJkPXtkcmFmdEJvYXJkfSAvPlxyXG4gICAgICAgICAgPERyYWZ0TG9nIGRyYWZ0ZWRQbGF5ZXJzPXtkcmFmdGVkUGxheWVyc30gLz5cclxuICAgICAgICAgIDxVbmRvQnV0dG9uIHVuZG9EcmFmdD17dW5kb0RyYWZ0fSBsYXN0UGljaz17bGFzdFBpY2t9IC8+XHJcbiAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICA8VHVyblN0YXRzXHJcbiAgICAgICAgICBkcmFmdFJvdW5kPXtkcmFmdFJvdW5kfVxyXG4gICAgICAgICAgZHJhZnRQaWNrPXtkcmFmdFBpY2t9XHJcbiAgICAgICAgICB0dXJuQ291bnRkb3duPXt0dXJuQ291bnRkb3dufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEcmFmdExvZyIsIlVuZG9CdXR0b24iLCJUdXJuU3RhdHMiLCJEcmFmdEJvYXJkIiwiQnV0dG9uR3JvdXAiLCJGbGV4IiwiU3BhY2VyIiwiQm94IiwiRmFGb290YmFsbEJhbGwiLCJNb2JpbGVIZWFkZXIiLCJkcmFmdGVkUGxheWVycyIsInVuZG9EcmFmdCIsImxhc3RQaWNrIiwiZHJhZnRSb3VuZCIsImRyYWZ0UGljayIsInR1cm5Db3VudGRvd24iLCJkcmFmdEJvYXJkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiYnIiLCJwIiwibWFyZ2luIiwiZGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MobileHeader.js\n"));

/***/ })

});