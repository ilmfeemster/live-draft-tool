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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_YourTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/YourTeam */ \"./src/components/YourTeam.js\");\n/* harmony import */ var _components_FullPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FullPlayer */ \"./src/components/FullPlayer.js\");\n/* harmony import */ var _components_RoleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RoleList */ \"./src/components/RoleList.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var url = \"http://localhost:3000/api/players\";\n    //keep log of available players\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), players = ref[0], setPlayers = ref[1];\n    //keep log of removed players\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), loggedPlayers = ref1[0], setLoggedPlayers = ref1[1];\n    //keep log of players drafted to your team\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), teamPlayers = ref2[0], setTeamPlayers = ref2[1];\n    //get players from db\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6___default().get(url).then(function(res) {\n            //sort by value descending and load to state\n            res.data.sort(function(a, b) {\n                return b.Average - a.Average;\n            });\n            setPlayers(res.data);\n        });\n    }, []);\n    //removes player from main store, updating player lists and draftlog\n    var removePlayer = function(id) {\n        //removes player from list\n        setPlayers(players.filter(function(player) {\n            return player._id !== id;\n        }));\n        //adds player to draft log\n        setLoggedPlayers(function(loggedPlayers) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(loggedPlayers).concat([\n                players.filter(function(player) {\n                    return player._id == id;\n                }), \n            ]);\n        });\n    };\n    //adds player to your team\n    var draftPlayer = function(id) {\n        //assign filter to variable for ease of use in switch case\n        var selection = players.filter(function(player) {\n            return player._id == id;\n        });\n        //filter returns an array so use [0] to access the properties\n        switch(selection[0].Pos){\n            case \"QB\":\n                if (qbs.length > 1) {\n                    setQbs(function(qbs) {\n                        return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(qbs).concat([\n                            players.filter(function(player) {\n                                return player._id == id;\n                            })\n                        ]);\n                    });\n                } else {\n                    console.log(\"benched\");\n                }\n                break;\n            case \"RB\":\n                setRbs(function(rbs) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(rbs).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"WR\":\n                setWrs(function(wrs) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(wrs).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"TE\":\n                setTes(function(tes) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(tes).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"DST\":\n                setDsts(function(dsts) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(dsts).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"K\":\n                setKickers(function(kickers) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(kickers).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        }), \n                    ]);\n                });\n                break;\n            default:\n                console.log(selection[0].Pos);\n        }\n        removePlayer(id);\n    };\n    // set state for each of the positions\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), qbs = ref3[0], setQbs = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rbs = ref4[0], setRbs = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), wrs = ref5[0], setWrs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tes = ref6[0], setTes = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), flexes = ref7[0], setflexes = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dsts = ref8[0], setDsts = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), kickers = ref9[0], setKickers = ref9[1];\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), benches = ref10[0], setBenches = ref10[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n        theme: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                direction: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        height: \"5vh\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        height: \"60vh\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FullPlayer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                players: players,\n                                onDraft: draftPlayer,\n                                onRemove: removePlayer\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_YourTeam__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                qbs: qbs\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            height: \"30vh\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"RB\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"WR\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"TE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"QB\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"dnnSd7h/wJVl7J+yGlT4pqElcAw=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFaUQsSUFBSSxFQUFFLElBQUk7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ3JDOzs7Ozs0QkFDSDs7Ozs7O29CQUNEOzs7OztnQkFDSDs7Ozs7WUFDUyxDQUNqQjtDQUNIO0dBekdRbkQsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBMkdaLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5qcz9lM2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQ2hha3JhUHJvdmlkZXIsXG4gIEJveCxcbiAgVGV4dCxcbiAgTGluayxcbiAgVlN0YWNrLFxuICBDb2RlLFxuICBHcmlkLFxuICB0aGVtZSxcbiAgRmxleCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFlvdXJUZWFtIGZyb20gJy4vY29tcG9uZW50cy9Zb3VyVGVhbSc7XG5pbXBvcnQgRnVsbFBsYXllciBmcm9tICcuL2NvbXBvbmVudHMvRnVsbFBsYXllcic7XG5pbXBvcnQgUm9sZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1JvbGVMaXN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGxheWVycyc7XG4gIC8va2VlcCBsb2cgb2YgYXZhaWxhYmxlIHBsYXllcnNcbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8va2VlcCBsb2cgb2YgcmVtb3ZlZCBwbGF5ZXJzXG4gIGNvbnN0IFtsb2dnZWRQbGF5ZXJzLCBzZXRMb2dnZWRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL2tlZXAgbG9nIG9mIHBsYXllcnMgZHJhZnRlZCB0byB5b3VyIHRlYW1cbiAgY29uc3QgW3RlYW1QbGF5ZXJzLCBzZXRUZWFtUGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9nZXQgcGxheWVycyBmcm9tIGRiXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbihyZXMgPT4ge1xuICAgICAgLy9zb3J0IGJ5IHZhbHVlIGRlc2NlbmRpbmcgYW5kIGxvYWQgdG8gc3RhdGVcbiAgICAgIHJlcy5kYXRhLnNvcnQoKGEsIGIpID0+IGIuQXZlcmFnZSAtIGEuQXZlcmFnZSk7XG4gICAgICBzZXRQbGF5ZXJzKHJlcy5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vcmVtb3ZlcyBwbGF5ZXIgZnJvbSBtYWluIHN0b3JlLCB1cGRhdGluZyBwbGF5ZXIgbGlzdHMgYW5kIGRyYWZ0bG9nXG4gIGNvbnN0IHJlbW92ZVBsYXllciA9IGlkID0+IHtcbiAgICAvL3JlbW92ZXMgcGxheWVyIGZyb20gbGlzdFxuICAgIHNldFBsYXllcnMocGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgIT09IGlkKSk7XG4gICAgLy9hZGRzIHBsYXllciB0byBkcmFmdCBsb2dcbiAgICBzZXRMb2dnZWRQbGF5ZXJzKGxvZ2dlZFBsYXllcnMgPT4gW1xuICAgICAgLi4ubG9nZ2VkUGxheWVycyxcbiAgICAgIHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuX2lkID09IGlkKSxcbiAgICBdKTtcbiAgfTtcblxuICAvL2FkZHMgcGxheWVyIHRvIHlvdXIgdGVhbVxuICBjb25zdCBkcmFmdFBsYXllciA9IGlkID0+IHtcbiAgICAvL2Fzc2lnbiBmaWx0ZXIgdG8gdmFyaWFibGUgZm9yIGVhc2Ugb2YgdXNlIGluIHN3aXRjaCBjYXNlXG4gICAgbGV0IHNlbGVjdGlvbiA9IHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuX2lkID09IGlkKTtcbiAgICAvL2ZpbHRlciByZXR1cm5zIGFuIGFycmF5IHNvIHVzZSBbMF0gdG8gYWNjZXNzIHRoZSBwcm9wZXJ0aWVzXG4gICAgc3dpdGNoIChzZWxlY3Rpb25bMF0uUG9zKSB7XG4gICAgICBjYXNlICdRQic6XG4gICAgICAgIGlmIChxYnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNldFFicyhxYnMgPT4gWy4uLnFicywgcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JlbmNoZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JCJzpcbiAgICAgICAgc2V0UmJzKHJicyA9PiBbLi4ucmJzLCBwbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLl9pZCA9PSBpZCldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdXUic6XG4gICAgICAgIHNldFdycyh3cnMgPT4gWy4uLndycywgcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVEUnOlxuICAgICAgICBzZXRUZXModGVzID0+IFsuLi50ZXMsIHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuX2lkID09IGlkKV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0RTVCc6XG4gICAgICAgIHNldERzdHMoZHN0cyA9PiBbLi4uZHN0cywgcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSyc6XG4gICAgICAgIHNldEtpY2tlcnMoa2lja2VycyA9PiBbXG4gICAgICAgICAgLi4ua2lja2VycyxcbiAgICAgICAgICBwbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLl9pZCA9PSBpZCksXG4gICAgICAgIF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvblswXS5Qb3MpO1xuICAgIH1cbiAgICByZW1vdmVQbGF5ZXIoaWQpO1xuICB9O1xuXG4gIC8vIHNldCBzdGF0ZSBmb3IgZWFjaCBvZiB0aGUgcG9zaXRpb25zXG4gIGNvbnN0IFtxYnMsIHNldFFic10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyYnMsIHNldFJic10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3cnMsIHNldFdyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0ZXMsIHNldFRlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmbGV4ZXMsIHNldGZsZXhlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkc3RzLCBzZXREc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tpY2tlcnMsIHNldEtpY2tlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYmVuY2hlcywgc2V0QmVuY2hlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiNXZoXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGhlaWdodD1cIjYwdmhcIj5cbiAgICAgICAgICAgIDxGdWxsUGxheWVyXG4gICAgICAgICAgICAgIHBsYXllcnM9e3BsYXllcnN9XG4gICAgICAgICAgICAgIG9uRHJhZnQ9e2RyYWZ0UGxheWVyfVxuICAgICAgICAgICAgICBvblJlbW92ZT17cmVtb3ZlUGxheWVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxZb3VyVGVhbSBxYnM9e3Fic30gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEZsZXggaGVpZ2h0PVwiMzB2aFwiPlxuICAgICAgICAgICAgICA8Um9sZUxpc3QgcGxheWVycz17cGxheWVyc30gcm9sZT17J1JCJ30gLz5cbiAgICAgICAgICAgICAgPFJvbGVMaXN0IHBsYXllcnM9e3BsYXllcnN9IHJvbGU9eydXUid9IC8+XG4gICAgICAgICAgICAgIDxSb2xlTGlzdCBwbGF5ZXJzPXtwbGF5ZXJzfSByb2xlPXsnVEUnfSAvPlxuICAgICAgICAgICAgICA8Um9sZUxpc3QgcGxheWVycz17cGxheWVyc30gcm9sZT17J1FCJ30gLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9kaXY+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFrcmFQcm92aWRlciIsIkJveCIsIlRleHQiLCJMaW5rIiwiVlN0YWNrIiwiQ29kZSIsIkdyaWQiLCJ0aGVtZSIsIkZsZXgiLCJIZWFkZXIiLCJZb3VyVGVhbSIsIkZ1bGxQbGF5ZXIiLCJSb2xlTGlzdCIsImF4aW9zIiwiQXBwIiwidXJsIiwicGxheWVycyIsInNldFBsYXllcnMiLCJsb2dnZWRQbGF5ZXJzIiwic2V0TG9nZ2VkUGxheWVycyIsInRlYW1QbGF5ZXJzIiwic2V0VGVhbVBsYXllcnMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNvcnQiLCJhIiwiYiIsIkF2ZXJhZ2UiLCJyZW1vdmVQbGF5ZXIiLCJpZCIsImZpbHRlciIsInBsYXllciIsIl9pZCIsImRyYWZ0UGxheWVyIiwic2VsZWN0aW9uIiwiUG9zIiwicWJzIiwibGVuZ3RoIiwic2V0UWJzIiwiY29uc29sZSIsImxvZyIsInNldFJicyIsInJicyIsInNldFdycyIsIndycyIsInNldFRlcyIsInRlcyIsInNldERzdHMiLCJkc3RzIiwic2V0S2lja2VycyIsImtpY2tlcnMiLCJmbGV4ZXMiLCJzZXRmbGV4ZXMiLCJiZW5jaGVzIiwic2V0QmVuY2hlcyIsImRpdiIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm9uRHJhZnQiLCJvblJlbW92ZSIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n"));

/***/ })

});