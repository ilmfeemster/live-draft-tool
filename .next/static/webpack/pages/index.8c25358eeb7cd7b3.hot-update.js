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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar DraftLog = function(param) {\n    var loggedPlayers = param.loggedPlayers;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: onOpen,\n                style: {\n                    backgroundColor: \"#7584a4\",\n                    color: \"#f2f6ff\",\n                    marginTop: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons__WEBPACK_IMPORTED_MODULE_1__.RiBarChartHorizontalFill, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    \"Draft Log\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                                    children: \"Draft Log\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: loggedPlayers.map(function(playerName) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            style: {\n                                                listStyle: \"none\",\n                                                textAlign: \"center\"\n                                            },\n                                            children: playerName[0].Name\n                                        }, playerName[0]._id, false, {\n                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftLog.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DraftLog, \"b6HgRGUKK6FEfELRcVwOTS4RtgI=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure\n    ];\n});\n_c = DraftLog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraftLog);\nvar _c;\n$RefreshReg$(_c, \"DraftLog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EcmFmdExvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBVzBCO0FBQzZCO0FBQzdCOztBQUUxQixJQUFNWSxRQUFRLEdBQUcsZ0JBQXVCO1FBQXBCQyxhQUFhLFNBQWJBLGFBQWE7O0lBQy9CLElBQW9DYixHQUFlLEdBQWZBLCtEQUFhLEVBQUUsRUFBM0NjLE1BQU0sR0FBc0JkLEdBQWUsQ0FBM0NjLE1BQU0sRUFBRUMsTUFBTSxHQUFjZixHQUFlLENBQW5DZSxNQUFNLEVBQUVDLE9BQU8sR0FBS2hCLEdBQWUsQ0FBM0JnQixPQUFPO0lBQy9CLHFCQUNFOzswQkFDRSw4REFBQ2Ysb0RBQU07Z0JBQ0xnQixPQUFPLEVBQUVGLE1BQU07Z0JBQ2ZHLEtBQUssRUFBRTtvQkFDTEMsZUFBZSxFQUFFLFNBQVM7b0JBQzFCQyxLQUFLLEVBQUUsU0FBUztvQkFDaEJDLFNBQVMsRUFBRSxNQUFNO2lCQUNsQjs7a0NBRUQsOERBQUNYLGlFQUF3Qjs7Ozs2QkFBRztvQkFBQSxXQUU5Qjs7Ozs7O3FCQUFTOzBCQUVULDhEQUFDUixtREFBSztnQkFBQ1ksTUFBTSxFQUFFQSxNQUFNO2dCQUFFRSxPQUFPLEVBQUVBLE9BQU87O2tDQUNyQyw4REFBQ2IsMERBQVk7Ozs7NkJBQUc7a0NBQ2hCLDhEQUFDQywwREFBWTs7MENBQ1gsOERBQUNFLHlEQUFXOzBDQUNWLDRFQUFDRyxvREFBTTs4Q0FBQyxXQUFTOzs7Ozt5Q0FBUzs7Ozs7cUNBQ2Q7MENBQ2QsOERBQUNKLDhEQUFnQjs7OztxQ0FBRzswQ0FDcEIsOERBQUNFLHVEQUFTOzBDQUNSLDRFQUFDZSxJQUFFOzhDQUNBVCxhQUFhLENBQUNVLEdBQUcsQ0FBQ0MsU0FBQUEsVUFBVTs2REFDM0IsOERBQUNDLElBQUU7NENBQ0RQLEtBQUssRUFBRTtnREFBRVEsU0FBUyxFQUFFLE1BQU07Z0RBQUVDLFNBQVMsRUFBRSxRQUFROzZDQUFFO3NEQUdoREgsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxJQUFJOzJDQUZkSixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNLLEdBQUc7Ozs7aURBR25CO3FDQUNOLENBQUM7Ozs7O3lDQUNDOzs7OztxQ0FDSzs7Ozs7OzZCQUNDOzs7Ozs7cUJBQ1Q7O29CQUNQLENBQ0g7Q0FDSDtHQXZDS2pCLFFBQVE7O1FBQ3dCWiwyREFBYTs7O0FBRDdDWSxLQUFBQSxRQUFRO0FBeUNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJhZnRMb2cuanM/YzY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEJvZHksXHJcbiAgbGlzdCxcclxuICBDZW50ZXIsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IFJpQmFyQ2hhcnRIb3Jpem9udGFsRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERyYWZ0TG9nID0gKHsgbG9nZ2VkUGxheWVycyB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17b25PcGVufVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNzU4NGE0JyxcclxuICAgICAgICAgIGNvbG9yOiAnI2YyZjZmZicsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFJpQmFyQ2hhcnRIb3Jpem9udGFsRmlsbCAvPlxyXG4gICAgICAgIERyYWZ0IExvZ1xyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDZW50ZXI+RHJhZnQgTG9nPC9DZW50ZXI+XHJcbiAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7bG9nZ2VkUGxheWVycy5tYXAocGxheWVyTmFtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtwbGF5ZXJOYW1lWzBdLl9pZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3BsYXllck5hbWVbMF0uTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICA8L01vZGFsQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFmdExvZztcclxuIl0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJCdXR0b24iLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEhlYWRlciIsIk1vZGFsQm9keSIsImxpc3QiLCJDZW50ZXIiLCJSaUJhckNoYXJ0SG9yaXpvbnRhbEZpbGwiLCJSZWFjdCIsIkRyYWZ0TG9nIiwibG9nZ2VkUGxheWVycyIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpblRvcCIsInVsIiwibWFwIiwicGxheWVyTmFtZSIsImxpIiwibGlzdFN0eWxlIiwidGV4dEFsaWduIiwiTmFtZSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DraftLog.js\n"));

/***/ })

});