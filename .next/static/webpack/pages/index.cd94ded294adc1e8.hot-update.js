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

/***/ "./src/components/DraftLog.js":
/*!************************************!*\
  !*** ./src/components/DraftLog.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DraftLog = function(param) {\n    var loggedPlayers = param.loggedPlayers;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: onOpen,\n                style: {\n                    backgroundColor: \"#6591f2\"\n                },\n                children: \"Draft Log\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                    children: \"Draft Log\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: loggedPlayers.map(function(playerName) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            style: {\n                                                listStyle: \"none\",\n                                                textAlign: \"center\"\n                                            },\n                                            children: playerName[0].Name\n                                        }, playerName[0]._id, false, {\n                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DraftLog, \"b6HgRGUKK6FEfELRcVwOTS4RtgI=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = DraftLog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraftLog);\nvar _c;\n$RefreshReg$(_c, \"DraftLog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EcmFmdExvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFXMEI7QUFDQTs7QUFFMUIsSUFBTVcsUUFBUSxHQUFHLGdCQUF1QjtRQUFwQkMsYUFBYSxTQUFiQSxhQUFhOztJQUMvQixJQUFvQ1osR0FBZSxHQUFmQSwrREFBYSxFQUFFLEVBQTNDYSxNQUFNLEdBQXNCYixHQUFlLENBQTNDYSxNQUFNLEVBQUVDLE1BQU0sR0FBY2QsR0FBZSxDQUFuQ2MsTUFBTSxFQUFFQyxPQUFPLEdBQUtmLEdBQWUsQ0FBM0JlLE9BQU87SUFDL0IscUJBQ0U7OzBCQUNFLDhEQUFDZCxvREFBTTtnQkFDTGUsT0FBTyxFQUFFRixNQUFNO2dCQUNmRyxLQUFLLEVBQUU7b0JBQ0xDLGVBQWUsRUFBRSxTQUFTO2lCQUMzQjswQkFDRixXQUVEOzs7OztxQkFBUzswQkFFVCw4REFBQ2hCLG1EQUFLO2dCQUFDVyxNQUFNLEVBQUVBLE1BQU07Z0JBQUVFLE9BQU8sRUFBRUEsT0FBTzs7a0NBQ3JDLDhEQUFDWiwwREFBWTs7Ozs2QkFBRztrQ0FDaEIsOERBQUNDLDBEQUFZOzswQ0FDWCw4REFBQ0UseURBQVc7MENBQ1YsNEVBQUNHLG9EQUFNOzhDQUFDLFdBQVM7Ozs7O3lDQUFTOzs7OztxQ0FDZDswQ0FDZCw4REFBQ0osOERBQWdCOzs7O3FDQUFHOzBDQUNwQiw4REFBQ0UsdURBQVM7MENBQ1IsNEVBQUNZLElBQUU7OENBQ0FQLGFBQWEsQ0FBQ1EsR0FBRyxDQUFDQyxTQUFBQSxVQUFVOzZEQUMzQiw4REFBQ0MsSUFBRTs0Q0FDREwsS0FBSyxFQUFFO2dEQUFFTSxTQUFTLEVBQUUsTUFBTTtnREFBRUMsU0FBUyxFQUFFLFFBQVE7NkNBQUU7c0RBR2hESCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNJLElBQUk7MkNBRmRKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssR0FBRzs7OztpREFHbkI7cUNBQ04sQ0FBQzs7Ozs7eUNBQ0M7Ozs7O3FDQUNLOzs7Ozs7NkJBQ0M7Ozs7OztxQkFDVDs7b0JBQ1AsQ0FDSDtDQUNIO0dBcENLZixRQUFROztRQUN3QlgsMkRBQWE7OztBQUQ3Q1csS0FBQUEsUUFBUTtBQXNDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWZ0TG9nLmpzP2M2NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIGxpc3QsXHJcbiAgQ2VudGVyLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRHJhZnRMb2cgPSAoeyBsb2dnZWRQbGF5ZXJzIH0pID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NTkxZjInLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBEcmFmdCBMb2dcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICA8TW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2VudGVyPkRyYWZ0IExvZzwvQ2VudGVyPlxyXG4gICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge2xvZ2dlZFBsYXllcnMubWFwKHBsYXllck5hbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgIGtleT17cGxheWVyTmFtZVswXS5faWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwbGF5ZXJOYW1lWzBdLk5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZnRMb2c7XHJcbiJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxIZWFkZXIiLCJNb2RhbEJvZHkiLCJsaXN0IiwiQ2VudGVyIiwiUmVhY3QiLCJEcmFmdExvZyIsImxvZ2dlZFBsYXllcnMiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidWwiLCJtYXAiLCJwbGF5ZXJOYW1lIiwibGkiLCJsaXN0U3R5bGUiLCJ0ZXh0QWxpZ24iLCJOYW1lIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DraftLog.js\n"));

/***/ })

});