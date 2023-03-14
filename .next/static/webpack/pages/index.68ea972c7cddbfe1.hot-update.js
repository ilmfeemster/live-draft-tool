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

/***/ "./src/components/UndoButton.js":
/*!**************************************!*\
  !*** ./src/components/UndoButton.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n//id 1738 is the dummy object's id signifying nothing to undo\nvar UndoButton = function(param) {\n    var undoDraft = param.undoDraft, lastPick = param.lastPick;\n    _s();\n    //set state for mouse hover\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHover = ref[0], setIsHover = ref[1];\n    var handleMouseEnter = function() {\n        setIsHover(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHover(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        onClick: lastPick[0]._id !== 1738 ? function() {\n            return undoDraft(lastPick);\n        } : undefined,\n        size: {\n            base: \"xs\",\n            md: \"md\"\n        },\n        style: {\n            backgroundColor: isHover ? \"#9fb2dd\" : \"#7584a4\",\n            color: \"#f2f6ff\",\n            marginTop: \"10px\"\n        },\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUndo, {\n                style: {\n                    fontSize: \"12px\",\n                    marginRight: \"4px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\UndoButton.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            \"Undo\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\UndoButton.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(UndoButton, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = UndoButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UndoButton);\nvar _c;\n$RefreshReg$(_c, \"UndoButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VbmRvQnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDRTtBQUNGOztBQUV4Qyw2REFBNkQ7QUFDN0QsSUFBTUksVUFBVSxHQUFHLGdCQUE2QjtRQUExQkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDdkMsMkJBQTJCO0lBQzNCLElBQThCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDTSxPQUFPLEdBQWdCTixHQUFlLEdBQS9CLEVBQUVPLFVBQVUsR0FBSVAsR0FBZSxHQUFuQjtJQUUxQixJQUFNUSxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEI7SUFDRCxJQUFNRSxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCRixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7SUFDRCxxQkFDRSw4REFBQ04sb0RBQU07UUFDTFMsT0FBTyxFQUFFTCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNNLEdBQUcsS0FBSyxJQUFJLEdBQUc7bUJBQU1QLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO1NBQUEsR0FBR08sU0FBUztRQUN6RUMsSUFBSSxFQUFFO1lBQUVDLElBQUksRUFBRSxJQUFJO1lBQUVDLEVBQUUsRUFBRSxJQUFJO1NBQUU7UUFDOUJDLEtBQUssRUFBRTtZQUNMQyxlQUFlLEVBQUVYLE9BQU8sR0FBRyxTQUFTLEdBQUcsU0FBUztZQUNoRFksS0FBSyxFQUFFLFNBQVM7WUFDaEJDLFNBQVMsRUFBRSxNQUFNO1NBQ2xCO1FBQ0RDLFlBQVksRUFBRVosZ0JBQWdCO1FBQzlCYSxZQUFZLEVBQUVaLGdCQUFnQjs7MEJBRTlCLDhEQUFDUCxrREFBTTtnQkFDTGMsS0FBSyxFQUFFO29CQUNMTSxRQUFRLEVBQUUsTUFBTTtvQkFDaEJDLFdBQVcsRUFBRSxLQUFLO2lCQUNuQjs7Ozs7cUJBQ0Q7WUFBQSxNQUVKOzs7Ozs7YUFBUyxDQUNUO0NBQ0g7R0EvQktwQixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFpQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVW5kb0J1dHRvbi5qcz84MDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEZhVW5kbyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbi8vaWQgMTczOCBpcyB0aGUgZHVtbXkgb2JqZWN0J3MgaWQgc2lnbmlmeWluZyBub3RoaW5nIHRvIHVuZG9cclxuY29uc3QgVW5kb0J1dHRvbiA9ICh7IHVuZG9EcmFmdCwgbGFzdFBpY2sgfSkgPT4ge1xyXG4gIC8vc2V0IHN0YXRlIGZvciBtb3VzZSBob3ZlclxyXG4gIGNvbnN0IFtpc0hvdmVyLCBzZXRJc0hvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNIb3ZlcihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXtsYXN0UGlja1swXS5faWQgIT09IDE3MzggPyAoKSA9PiB1bmRvRHJhZnQobGFzdFBpY2spIDogdW5kZWZpbmVkfVxyXG4gICAgICBzaXplPXt7IGJhc2U6ICd4cycsIG1kOiAnbWQnIH19XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0hvdmVyID8gJyM5ZmIyZGQnIDogJyM3NTg0YTQnLFxyXG4gICAgICAgIGNvbG9yOiAnI2YyZjZmZicsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgPlxyXG4gICAgICA8RmFVbmRvXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzRweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgVW5kb1xyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuZG9CdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRmFVbmRvIiwiVW5kb0J1dHRvbiIsInVuZG9EcmFmdCIsImxhc3RQaWNrIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJfaWQiLCJ1bmRlZmluZWQiLCJzaXplIiwiYmFzZSIsIm1kIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpblRvcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UndoButton.js\n"));

/***/ })

});