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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar DraftBoard = function(param) {\n    var draftBoard = param.draftBoard;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    //set state for mouse hover\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHover = ref1[0], setIsHover = ref1[1];\n    var handleMouseEnter = function() {\n        setIsHover(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHover(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: onOpen,\n                style: {\n                    backgroundColor: isHover ? \"#9fb2dd\" : \"#7584a4\",\n                    color: \"#f2f6ff\",\n                    marginTop: \"10px\"\n                },\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: handleMouseLeave,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgMenuGridR, {\n                        style: {\n                            fontSize: \"16px\",\n                            marginRight: \"4px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    \"Draft Board\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        maxW: \"100vw\",\n                        style: {\n                            backgroundColor: \"#162132\",\n                            color: \"#b9c4d4\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                    children: \"Draft Board\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                    direction: \"column\",\n                                    children: draftBoard.map(function(draftRow) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                            justify: \"space-between\",\n                                            children: draftRow.map(function(draftCell) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                                    direction: \"column\",\n                                                    style: {\n                                                        border: \"1px solid  black\",\n                                                        minWidth: \"120px\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                                            justify: \"space-between\",\n                                                            minW: \"100px\",\n                                                            children: [\n                                                                \"(\",\n                                                                draftCell.pickNumber,\n                                                                \") \",\n                                                                draftCell.team,\n                                                                \"•\",\n                                                                draftCell.pos\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 23\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                                            children: draftCell.name\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, _this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DraftBoard, \"2DX611ogG6LfeY/DFCN+K/LbQxo=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = DraftBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraftBoard);\nvar _c;\n$RefreshReg$(_c, \"DraftBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs7Ozs7OzZCQUNDOzs7Ozs7cUJBQ1Q7O29CQUNQLENBQ0g7Q0FDSDtHQWxFSzlCLFVBQVU7O1FBQ3NCZCwyREFBYTs7O0FBRDdDYyxLQUFBQSxVQUFVO0FBb0VoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWZ0Qm9hcmQuanM/YWVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEJvZHksXHJcbiAgQ2VudGVyLFxyXG4gIEZsZXgsXHJcbiAgQm94LFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBDZ01lbnVHcmlkUiB9IGZyb20gJ3JlYWN0LWljb25zL2NnJztcclxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRHJhZnRCb2FyZCA9ICh7IGRyYWZ0Qm9hcmQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICAvL3NldCBzdGF0ZSBmb3IgbW91c2UgaG92ZXJcclxuICBjb25zdCBbaXNIb3Zlciwgc2V0SXNIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hvdmVyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXIoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNIb3ZlciA/ICcjOWZiMmRkJyA6ICcjNzU4NGE0JyxcclxuICAgICAgICAgIGNvbG9yOiAnI2YyZjZmZicsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2dNZW51R3JpZFJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnNHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICBEcmFmdCBCb2FyZFxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnRcclxuICAgICAgICAgIG1heFc9XCIxMDB2d1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMTYyMTMyJywgY29sb3I6ICcjYjljNGQ0JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgPENlbnRlcj5EcmFmdCBCb2FyZDwvQ2VudGVyPlxyXG4gICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249eydjb2x1bW4nfT5cclxuICAgICAgICAgICAgICB7ZHJhZnRCb2FyZC5tYXAoZHJhZnRSb3cgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT17J3NwYWNlLWJldHdlZW4nfT5cclxuICAgICAgICAgICAgICAgICAge2RyYWZ0Um93Lm1hcChkcmFmdENlbGwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249eydjb2x1bW4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICBibGFjaycsIG1pbldpZHRoOiAnMTIwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBtaW5XPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHtkcmFmdENlbGwucGlja051bWJlcn0pIHtkcmFmdENlbGwudGVhbX3igKJcclxuICAgICAgICAgICAgICAgICAgICAgICAge2RyYWZ0Q2VsbC5wb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94PntkcmFmdENlbGwubmFtZX08L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICA8L01vZGFsQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFmdEJvYXJkO1xyXG4iXSwibmFtZXMiOlsidXNlRGlzY2xvc3VyZSIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsSGVhZGVyIiwiTW9kYWxCb2R5IiwiQ2VudGVyIiwiRmxleCIsIkJveCIsIkNnTWVudUdyaWRSIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyYWZ0Qm9hcmQiLCJkcmFmdEJvYXJkIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImlzSG92ZXIiLCJzZXRJc0hvdmVyIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpblRvcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXhXIiwiZGlyZWN0aW9uIiwibWFwIiwiZHJhZnRSb3ciLCJqdXN0aWZ5IiwiZHJhZnRDZWxsIiwiYm9yZGVyIiwibWluV2lkdGgiLCJtaW5XIiwicGlja051bWJlciIsInRlYW0iLCJwb3MiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DraftBoard.js\n"));

/***/ })

});