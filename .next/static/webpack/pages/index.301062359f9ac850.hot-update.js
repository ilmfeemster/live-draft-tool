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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n//id 1738 is the dummy object's id signifying nothing to undo\nvar UndoButton = function(param) {\n    var undoDraft = param.undoDraft, lastPick = param.lastPick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        onClick: lastPick[0]._id !== 1738 ? function() {\n            return undoDraft(lastPick);\n        } : undefined,\n        style: {\n            backgroundColor: \"#7584a4\",\n            color: \"#f2f6ff\",\n            marginTop: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUndo, {\n                style: {\n                    fontSize: \"12px\",\n                    marginRight: \"2px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\UndoButton.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            \"Undo\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\components\\\\UndoButton.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = UndoButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UndoButton);\nvar _c;\n$RefreshReg$(_c, \"UndoButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VbmRvQnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDZ0I7QUFDRjtBQUN4Qyw2REFBNkQ7QUFDN0QsSUFBTUcsVUFBVSxHQUFHLGdCQUE2QjtRQUExQkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUN2QyxxQkFDRSw4REFBQ0osb0RBQU07UUFDTEssT0FBTyxFQUFFRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsS0FBSyxJQUFJLEdBQUc7bUJBQU1ILFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO1NBQUEsR0FBR0csU0FBUztRQUN6RUMsS0FBSyxFQUFFO1lBQ0xDLGVBQWUsRUFBRSxTQUFTO1lBQzFCQyxLQUFLLEVBQUUsU0FBUztZQUNoQkMsU0FBUyxFQUFFLE1BQU07U0FDbEI7OzBCQUVELDhEQUFDVixrREFBTTtnQkFDTE8sS0FBSyxFQUFFO29CQUNMSSxRQUFRLEVBQUUsTUFBTTtvQkFDaEJDLFdBQVcsRUFBRSxLQUFLO2lCQUNuQjs7Ozs7cUJBQ0Q7WUFBQSxNQUVKOzs7Ozs7YUFBUyxDQUNUO0NBQ0g7QUFuQktYLEtBQUFBLFVBQVU7QUFxQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVW5kb0J1dHRvbi5qcz84MDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBGYVVuZG8gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbi8vaWQgMTczOCBpcyB0aGUgZHVtbXkgb2JqZWN0J3MgaWQgc2lnbmlmeWluZyBub3RoaW5nIHRvIHVuZG9cclxuY29uc3QgVW5kb0J1dHRvbiA9ICh7IHVuZG9EcmFmdCwgbGFzdFBpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e2xhc3RQaWNrWzBdLl9pZCAhPT0gMTczOCA/ICgpID0+IHVuZG9EcmFmdChsYXN0UGljaykgOiB1bmRlZmluZWR9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzc1ODRhNCcsXHJcbiAgICAgICAgY29sb3I6ICcjZjJmNmZmJyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEZhVW5kb1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIFVuZG9cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmRvQnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGYVVuZG8iLCJVbmRvQnV0dG9uIiwidW5kb0RyYWZ0IiwibGFzdFBpY2siLCJvbkNsaWNrIiwiX2lkIiwidW5kZWZpbmVkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UndoButton.js\n"));

/***/ })

});