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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar DraftBoard = function(param) {\n    var draftBoard = param.draftBoard;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    //set state for mouse hover\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHover = ref1[0], setIsHover = ref1[1];\n    var handleMouseEnter = function() {\n        setIsHover(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHover(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: onOpen,\n                style: {\n                    backgroundColor: isHover ? \"#9fb2dd\" : \"#7584a4\",\n                    color: \"#f2f6ff\",\n                    marginTop: \"10px\"\n                },\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: handleMouseLeave,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgMenuGridR, {\n                        style: {\n                            fontSize: \"16px\",\n                            marginRight: \"4px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    \"Draft Board\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        maxW: \"90rem\",\n                        style: {\n                            backgroundColor: \"#162132\",\n                            color: \"#b9c4d4\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                    children: \"Draft Board\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                    direction: \"column\",\n                                    children: draftBoard.map(function(draftRow) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                            justify: \"space-between\",\n                                            align: \"center\",\n                                            children: draftRow.map(function(draftCell) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: draftCell.pickNumber\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, _this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DraftBoard, \"2DX611ogG6LfeY/DFCN+K/LbQxo=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = DraftBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraftBoard);\nvar _c;\n$RefreshReg$(_c, \"DraftBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EcmFmdEJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFXMEI7QUFDbUI7QUFDTDs7QUFFeEMsSUFBTWEsVUFBVSxHQUFHLGdCQUFvQjtRQUFqQkMsVUFBVSxTQUFWQSxVQUFVOztJQUM5QixJQUFvQ2QsR0FBZSxHQUFmQSwrREFBYSxFQUFFLEVBQTNDZSxNQUFNLEdBQXNCZixHQUFlLENBQTNDZSxNQUFNLEVBQUVDLE1BQU0sR0FBY2hCLEdBQWUsQ0FBbkNnQixNQUFNLEVBQUVDLE9BQU8sR0FBS2pCLEdBQWUsQ0FBM0JpQixPQUFPO0lBQy9CLDJCQUEyQjtJQUMzQixJQUE4QkwsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q00sT0FBTyxHQUFnQk4sSUFBZSxHQUEvQixFQUFFTyxVQUFVLEdBQUlQLElBQWUsR0FBbkI7SUFFMUIsSUFBTVEsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsSUFBTUUsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkYsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CO0lBQ0QscUJBQ0U7OzBCQUNFLDhEQUFDbEIsb0RBQU07Z0JBQ0xxQixPQUFPLEVBQUVOLE1BQU07Z0JBQ2ZPLEtBQUssRUFBRTtvQkFDTEMsZUFBZSxFQUFFTixPQUFPLEdBQUcsU0FBUyxHQUFHLFNBQVM7b0JBQ2hETyxLQUFLLEVBQUUsU0FBUztvQkFDaEJDLFNBQVMsRUFBRSxNQUFNO2lCQUNsQjtnQkFDREMsWUFBWSxFQUFFUCxnQkFBZ0I7Z0JBQzlCUSxZQUFZLEVBQUVQLGdCQUFnQjs7a0NBRTlCLDhEQUFDWCx1REFBVzt3QkFDVmEsS0FBSyxFQUFFOzRCQUNMTSxRQUFRLEVBQUUsTUFBTTs0QkFDaEJDLFdBQVcsRUFBRSxLQUFLO3lCQUNuQjs7Ozs7NkJBQ0Q7b0JBQUEsYUFFSjs7Ozs7O3FCQUFTOzBCQUVULDhEQUFDNUIsbURBQUs7Z0JBQUNhLE1BQU0sRUFBRUEsTUFBTTtnQkFBRUUsT0FBTyxFQUFFQSxPQUFPOztrQ0FDckMsOERBQUNkLDBEQUFZOzs7OzZCQUFHO2tDQUNoQiw4REFBQ0MsMERBQVk7d0JBQ1gyQixJQUFJLEVBQUMsT0FBTzt3QkFDWlIsS0FBSyxFQUFFOzRCQUFFQyxlQUFlLEVBQUUsU0FBUzs0QkFBRUMsS0FBSyxFQUFFLFNBQVM7eUJBQUU7OzBDQUV2RCw4REFBQ25CLHlEQUFXOzBDQUNWLDRFQUFDRSxvREFBTTs4Q0FBQyxhQUFXOzs7Ozt5Q0FBUzs7Ozs7cUNBQ2hCOzBDQUNkLDhEQUFDSCw4REFBZ0I7Ozs7cUNBQUc7MENBQ3BCLDhEQUFDRSx1REFBUzswQ0FDUiw0RUFBQ0Usa0RBQUk7b0NBQUN1QixTQUFTLEVBQUUsUUFBUTs4Q0FDdEJsQixVQUFVLENBQUNtQixHQUFHLENBQUNDLFNBQUFBLFFBQVE7NkRBQ3RCLDhEQUFDekIsa0RBQUk7NENBQUMwQixPQUFPLEVBQUUsZUFBZTs0Q0FBRUMsS0FBSyxFQUFFLFFBQVE7c0RBQzVDRixRQUFRLENBQUNELEdBQUcsQ0FBQ0ksU0FBQUEsU0FBUztxRUFDckIsOERBQUNDLEtBQUc7OERBQUVELFNBQVMsQ0FBQ0UsVUFBVTs7Ozs7eURBQU87NkNBQ2xDLENBQUM7Ozs7O2lEQUNHO3FDQUNSLENBQUM7Ozs7O3lDQUNHOzs7OztxQ0FDRzs7Ozs7OzZCQUNDOzs7Ozs7cUJBQ1Q7O29CQUNQLENBQ0g7Q0FDSDtHQXpESzFCLFVBQVU7O1FBQ3NCYiwyREFBYTs7O0FBRDdDYSxLQUFBQSxVQUFVO0FBMkRoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWZ0Qm9hcmQuanM/YWVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEJvZHksXHJcbiAgQ2VudGVyLFxyXG4gIEZsZXgsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IENnTWVudUdyaWRSIH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnO1xyXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEcmFmdEJvYXJkID0gKHsgZHJhZnRCb2FyZCB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIC8vc2V0IHN0YXRlIGZvciBtb3VzZSBob3ZlclxyXG4gIGNvbnN0IFtpc0hvdmVyLCBzZXRJc0hvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNIb3ZlcihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0hvdmVyID8gJyM5ZmIyZGQnIDogJyM3NTg0YTQnLFxyXG4gICAgICAgICAgY29sb3I6ICcjZjJmNmZmJyxcclxuICAgICAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDZ01lbnVHcmlkUlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIERyYWZ0IEJvYXJkXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XHJcbiAgICAgICAgPE1vZGFsQ29udGVudFxyXG4gICAgICAgICAgbWF4Vz1cIjkwcmVtXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxNjIxMzInLCBjb2xvcjogJyNiOWM0ZDQnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2VudGVyPkRyYWZ0IEJvYXJkPC9DZW50ZXI+XHJcbiAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj17J2NvbHVtbid9PlxyXG4gICAgICAgICAgICAgIHtkcmFmdEJvYXJkLm1hcChkcmFmdFJvdyA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9IGFsaWduPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgIHtkcmFmdFJvdy5tYXAoZHJhZnRDZWxsID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntkcmFmdENlbGwucGlja051bWJlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWZ0Qm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxIZWFkZXIiLCJNb2RhbEJvZHkiLCJDZW50ZXIiLCJGbGV4IiwiQ2dNZW51R3JpZFIiLCJSZWFjdCIsInVzZVN0YXRlIiwiRHJhZnRCb2FyZCIsImRyYWZ0Qm9hcmQiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luVG9wIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsIm1heFciLCJkaXJlY3Rpb24iLCJtYXAiLCJkcmFmdFJvdyIsImp1c3RpZnkiLCJhbGlnbiIsImRyYWZ0Q2VsbCIsImRpdiIsInBpY2tOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DraftBoard.js\n"));

/***/ })

});