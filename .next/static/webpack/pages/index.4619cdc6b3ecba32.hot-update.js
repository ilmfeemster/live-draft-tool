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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar DraftBoard = function(param) {\n    var draftBoard = param.draftBoard;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    //set state for mouse hover\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHover = ref1[0], setIsHover = ref1[1];\n    var handleMouseEnter = function() {\n        setIsHover(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHover(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: onOpen,\n                size: {\n                    base: \"xs\",\n                    sm: \"sm\",\n                    md: \"md\"\n                },\n                style: {\n                    backgroundColor: isHover ? \"#9fb2dd\" : \"#7584a4\",\n                    color: \"#f2f6ff\",\n                    marginTop: \"10px\"\n                },\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: handleMouseLeave,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgMenuGridR, {\n                        style: {\n                            fontSize: \"16px\",\n                            marginRight: \"4px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    \"Draft Board\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                scrollBehavior: \"inside\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        maxW: \"100vw\",\n                        style: {\n                            backgroundColor: \"#162132\",\n                            color: \"#b9c4d4\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                    children: \"Draft Board\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                maxW: \"100vw\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                    direction: \"column\",\n                                    gap: \"3px\",\n                                    color: \"#012047\",\n                                    children: draftBoard.map(function(draftRow) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                            justify: \"center\",\n                                            gap: \"3px\",\n                                            children: draftRow.map(function(draftCell) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                                    bg: \"\".concat(draftCell.tileColor),\n                                                    direction: \"column\",\n                                                    justify: \"space-between\",\n                                                    minH: \"48px\",\n                                                    minW: \"120px\",\n                                                    maxW: \"120px\",\n                                                    style: {\n                                                        border: \"1px solid  black\",\n                                                        minWidth: \"120px\",\n                                                        borderRadius: \"4px\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                                            justify: \"space-between\",\n                                                            minW: \"100px\",\n                                                            pl: \"4px\",\n                                                            pr: \"4px\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                                                    fontSize: \"12px\",\n                                                                    children: [\n                                                                        \"(\",\n                                                                        draftCell.pickNumber,\n                                                                        \")\"\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                                    lineNumber: 84,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                \" \",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                                                    children: [\n                                                                        draftCell.team,\n                                                                        draftCell.pos\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                                    lineNumber: 85,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 23\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                                            pl: \"4px\",\n                                                            pr: \"4px\",\n                                                            overflowX: \"hidden\",\n                                                            whiteSpace: \"nowrap\",\n                                                            sx: {\n                                                                textOverflow: \"ellipsis\"\n                                                            },\n                                                            children: draftCell.name\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                }, _this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\DraftBoard.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DraftBoard, \"2DX611ogG6LfeY/DFCN+K/LbQxo=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = DraftBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraftBoard);\nvar _c;\n$RefreshReg$(_c, \"DraftBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0RBQ0xvQixNQUFNLEVBQUUsa0JBQWtCO3dEQUMxQkMsUUFBUSxFQUFFLE9BQU87d0RBQ2pCQyxZQUFZLEVBQUUsS0FBSztxREFDcEI7O3NFQUVELDhEQUFDekMsa0RBQUk7NERBQ0hpQyxPQUFPLEVBQUMsZUFBZTs0REFDdkJLLElBQUksRUFBQyxPQUFPOzREQUNaSSxFQUFFLEVBQUUsS0FBSzs0REFDVEMsRUFBRSxFQUFFLEtBQUs7OzhFQUVULDhEQUFDMUMsaURBQUc7b0VBQUN3QixRQUFRLEVBQUUsTUFBTTs7d0VBQUUsR0FBQzt3RUFBQ1MsU0FBUyxDQUFDVSxVQUFVO3dFQUFDLEdBQUM7Ozs7Ozt5RUFBTTtnRUFBQyxHQUFHOzhFQUN6RCw4REFBQzNDLGlEQUFHOzt3RUFDRGlDLFNBQVMsQ0FBQ1csSUFBSTt3RUFDZFgsU0FBUyxDQUFDWSxHQUFHOzs7Ozs7eUVBQ1Y7Ozs7OztpRUFDRDtzRUFDUCw4REFBQzdDLGlEQUFHOzREQUNGeUMsRUFBRSxFQUFFLEtBQUs7NERBQ1RDLEVBQUUsRUFBRSxLQUFLOzREQUNUSSxTQUFTLEVBQUUsUUFBUTs0REFDbkJDLFVBQVUsRUFBRSxRQUFROzREQUNwQkMsRUFBRSxFQUFFO2dFQUFFQyxZQUFZLEVBQUUsVUFBVTs2REFBRTtzRUFFL0JoQixTQUFTLENBQUNpQixJQUFJOzs7OztpRUFDWDs7Ozs7O3lEQUNEOzZDQUNSLENBQUM7Ozs7O2lEQUNHO3FDQUNSLENBQUM7Ozs7O3lDQUNHOzs7OztxQ0FDRzs7Ozs7OzZCQUNDOzs7Ozs7cUJBQ1Q7O29CQUNQLENBQ0g7Q0FDSDtHQTVGSzlDLFVBQVU7O1FBQ3NCZCwyREFBYTs7O0FBRDdDYyxLQUFBQSxVQUFVO0FBOEZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWZ0Qm9hcmQuanM/YWVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEJvZHksXHJcbiAgQ2VudGVyLFxyXG4gIEZsZXgsXHJcbiAgQm94LFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBDZ01lbnVHcmlkUiB9IGZyb20gJ3JlYWN0LWljb25zL2NnJztcclxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRHJhZnRCb2FyZCA9ICh7IGRyYWZ0Qm9hcmQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICAvL3NldCBzdGF0ZSBmb3IgbW91c2UgaG92ZXJcclxuICBjb25zdCBbaXNIb3Zlciwgc2V0SXNIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hvdmVyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXIoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgc2l6ZT17eyBiYXNlOiAneHMnLCBzbTogJ3NtJywgbWQ6ICdtZCcgfX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0hvdmVyID8gJyM5ZmIyZGQnIDogJyM3NTg0YTQnLFxyXG4gICAgICAgICAgY29sb3I6ICcjZjJmNmZmJyxcclxuICAgICAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDZ01lbnVHcmlkUlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIERyYWZ0IEJvYXJkXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBzY3JvbGxCZWhhdmlvcj1cImluc2lkZVwiPlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICA8TW9kYWxDb250ZW50XHJcbiAgICAgICAgICBtYXhXPVwiMTAwdndcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzE2MjEzMicsIGNvbG9yOiAnI2I5YzRkNCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDZW50ZXI+RHJhZnQgQm9hcmQ8L0NlbnRlcj5cclxuICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsQm9keSBtYXhXPVwiMTAwdndcIj5cclxuICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPXsnY29sdW1uJ30gZ2FwPXsnM3B4J30gY29sb3I9eycjMDEyMDQ3J30+XHJcbiAgICAgICAgICAgICAge2RyYWZ0Qm9hcmQubWFwKGRyYWZ0Um93ID0+IChcclxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9eydjZW50ZXInfSBnYXA9eyczcHgnfT5cclxuICAgICAgICAgICAgICAgICAge2RyYWZ0Um93Lm1hcChkcmFmdENlbGwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZz17YCR7ZHJhZnRDZWxsLnRpbGVDb2xvcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXsnY29sdW1uJ31cclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG1pbkg9eyc0OHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgIG1pblc9eycxMjBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXPXsnMTIwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICBibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnMTIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblc9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsPXsnNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHI9eyc0cHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGZvbnRTaXplPXsnMTJweCd9Pih7ZHJhZnRDZWxsLnBpY2tOdW1iZXJ9KTwvQm94PnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RyYWZ0Q2VsbC50ZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkcmFmdENlbGwucG9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGw9eyc0cHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcj17JzRweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WD17J2hpZGRlbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U9eydub3dyYXAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RyYWZ0Q2VsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZnRCb2FyZDtcclxuIl0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJCdXR0b24iLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEhlYWRlciIsIk1vZGFsQm9keSIsIkNlbnRlciIsIkZsZXgiLCJCb3giLCJDZ01lbnVHcmlkUiIsIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFmdEJvYXJkIiwiZHJhZnRCb2FyZCIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwib25DbGljayIsInNpemUiLCJiYXNlIiwic20iLCJtZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0Iiwic2Nyb2xsQmVoYXZpb3IiLCJtYXhXIiwiZGlyZWN0aW9uIiwiZ2FwIiwibWFwIiwiZHJhZnRSb3ciLCJqdXN0aWZ5IiwiZHJhZnRDZWxsIiwiYmciLCJ0aWxlQ29sb3IiLCJtaW5IIiwibWluVyIsImJvcmRlciIsIm1pbldpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGwiLCJwciIsInBpY2tOdW1iZXIiLCJ0ZWFtIiwicG9zIiwib3ZlcmZsb3dYIiwid2hpdGVTcGFjZSIsInN4IiwidGV4dE92ZXJmbG93IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DraftBoard.js\n"));

/***/ })

});