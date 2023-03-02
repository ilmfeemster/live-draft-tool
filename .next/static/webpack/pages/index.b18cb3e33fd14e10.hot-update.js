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

/***/ "./src/components/DraftBoard.js":
/*!**************************************!*\
  !*** ./src/components/DraftBoard.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar DraftBoard = function(param) {\n    var draftBoard = param.draftBoard;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    //set state for mouse hover\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHover = ref1[0], setIsHover = ref1[1];\n    var handleMouseEnter = function() {\n        setIsHover(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHover(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: onOpen,\n                style: {\n                    backgroundColor: isHover ? \"#9fb2dd\" : \"#7584a4\",\n                    color: \"#f2f6ff\",\n                    marginTop: \"10px\"\n                },\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: handleMouseLeave,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgMenuGridR, {\n                        style: {\n                            fontSize: \"16px\",\n                            marginRight: \"4px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    \"Draft Board\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        style: {\n                            backgroundColor: \"#162132\",\n                            color: \"#b9c4d4\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                    children: \"Draft Board\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: draftBoard.map(function(draftTile) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: draftTile.pickNumber\n                                    }, draftTile.pick, false, {\n                                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DraftBoard, \"2DX611ogG6LfeY/DFCN+K/LbQxo=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = DraftBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraftBoard);\nvar _c;\n$RefreshReg$(_c, \"DraftBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EcmFmdEJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFVMEI7QUFDbUI7QUFDTDs7QUFFeEMsSUFBTVksVUFBVSxHQUFHLGdCQUFvQjtRQUFqQkMsVUFBVSxTQUFWQSxVQUFVOztJQUM5QixJQUFvQ2IsR0FBZSxHQUFmQSwrREFBYSxFQUFFLEVBQTNDYyxNQUFNLEdBQXNCZCxHQUFlLENBQTNDYyxNQUFNLEVBQUVDLE1BQU0sR0FBY2YsR0FBZSxDQUFuQ2UsTUFBTSxFQUFFQyxPQUFPLEdBQUtoQixHQUFlLENBQTNCZ0IsT0FBTztJQUMvQiwyQkFBMkI7SUFDM0IsSUFBOEJMLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENNLE9BQU8sR0FBZ0JOLElBQWUsR0FBL0IsRUFBRU8sVUFBVSxHQUFJUCxJQUFlLEdBQW5CO0lBRTFCLElBQU1RLGdCQUFnQixHQUFHLFdBQU07UUFDN0JELFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQjtJQUNELElBQU1FLGdCQUFnQixHQUFHLFdBQU07UUFDN0JGLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUNELHFCQUNFOzswQkFDRSw4REFBQ2pCLG9EQUFNO2dCQUNMb0IsT0FBTyxFQUFFTixNQUFNO2dCQUNmTyxLQUFLLEVBQUU7b0JBQ0xDLGVBQWUsRUFBRU4sT0FBTyxHQUFHLFNBQVMsR0FBRyxTQUFTO29CQUNoRE8sS0FBSyxFQUFFLFNBQVM7b0JBQ2hCQyxTQUFTLEVBQUUsTUFBTTtpQkFDbEI7Z0JBQ0RDLFlBQVksRUFBRVAsZ0JBQWdCO2dCQUM5QlEsWUFBWSxFQUFFUCxnQkFBZ0I7O2tDQUU5Qiw4REFBQ1gsdURBQVc7d0JBQ1ZhLEtBQUssRUFBRTs0QkFDTE0sUUFBUSxFQUFFLE1BQU07NEJBQ2hCQyxXQUFXLEVBQUUsS0FBSzt5QkFDbkI7Ozs7OzZCQUNEO29CQUFBLGFBRUo7Ozs7OztxQkFBUzswQkFFVCw4REFBQzNCLG1EQUFLO2dCQUFDWSxNQUFNLEVBQUVBLE1BQU07Z0JBQUVFLE9BQU8sRUFBRUEsT0FBTzs7a0NBQ3JDLDhEQUFDYiwwREFBWTs7Ozs2QkFBRztrQ0FDaEIsOERBQUNDLDBEQUFZO3dCQUFDa0IsS0FBSyxFQUFFOzRCQUFFQyxlQUFlLEVBQUUsU0FBUzs0QkFBRUMsS0FBSyxFQUFFLFNBQVM7eUJBQUU7OzBDQUNuRSw4REFBQ2xCLHlEQUFXOzBDQUNWLDRFQUFDRSxvREFBTTs4Q0FBQyxhQUFXOzs7Ozt5Q0FBUzs7Ozs7cUNBQ2hCOzBDQUNkLDhEQUFDc0IsSUFBRTswQ0FDQWpCLFVBQVUsQ0FBQ2tCLEdBQUcsQ0FBQ0MsU0FBQUEsU0FBUzt5REFDdkIsOERBQUNDLElBQUU7a0RBQXVCRCxTQUFTLENBQUNFLFVBQVU7dUNBQXJDRixTQUFTLENBQUNHLElBQUk7Ozs7NkNBQTZCO2lDQUNyRCxDQUFDOzs7OztxQ0FDQzswQ0FDTCw4REFBQzlCLDhEQUFnQjs7OztxQ0FBRzswQ0FDcEIsOERBQUNFLHVEQUFTOzs7O3FDQUFhOzs7Ozs7NkJBQ1Y7Ozs7OztxQkFDVDs7b0JBQ1AsQ0FDSDtDQUNIO0dBakRLSyxVQUFVOztRQUNzQlosMkRBQWE7OztBQUQ3Q1ksS0FBQUEsVUFBVTtBQW1EaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EcmFmdEJvYXJkLmpzP2FlZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIENlbnRlcixcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgQ2dNZW51R3JpZFIgfSBmcm9tICdyZWFjdC1pY29ucy9jZyc7XHJcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERyYWZ0Qm9hcmQgPSAoeyBkcmFmdEJvYXJkIH0pID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgLy9zZXQgc3RhdGUgZm9yIG1vdXNlIGhvdmVyXHJcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNIb3Zlcih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hvdmVyKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17b25PcGVufVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzSG92ZXIgPyAnIzlmYjJkZCcgOiAnIzc1ODRhNCcsXHJcbiAgICAgICAgICBjb2xvcjogJyNmMmY2ZmYnLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENnTWVudUdyaWRSXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzRweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgRHJhZnQgQm9hcmRcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICA8TW9kYWxDb250ZW50IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxNjIxMzInLCBjb2xvcjogJyNiOWM0ZDQnIH19PlxyXG4gICAgICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2VudGVyPkRyYWZ0IEJvYXJkPC9DZW50ZXI+XHJcbiAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7ZHJhZnRCb2FyZC5tYXAoZHJhZnRUaWxlID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtkcmFmdFRpbGUucGlja30+e2RyYWZ0VGlsZS5waWNrTnVtYmVyfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxCb2R5PjwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWZ0Qm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxIZWFkZXIiLCJNb2RhbEJvZHkiLCJDZW50ZXIiLCJDZ01lbnVHcmlkUiIsIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFmdEJvYXJkIiwiZHJhZnRCb2FyZCIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwidWwiLCJtYXAiLCJkcmFmdFRpbGUiLCJsaSIsInBpY2tOdW1iZXIiLCJwaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DraftBoard.js\n"));

/***/ })

});