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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_YourTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/YourTeam */ \"./src/components/YourTeam.js\");\n/* harmony import */ var _components_FullPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FullPlayer */ \"./src/components/FullPlayer.js\");\n/* harmony import */ var _components_RoleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RoleList */ \"./src/components/RoleList.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var url = \"http://localhost:3000/api/players\";\n    //keep log of available players\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), players = ref[0], setPlayers = ref[1];\n    //keep log of removed players\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), loggedPlayers = ref1[0], setLoggedPlayers = ref1[1];\n    //keep log of players drafted to your team\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), teamPlayers = ref2[0], setTeamPlayers = ref2[1];\n    //get players from db\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6___default().get(url).then(function(res) {\n            //sort by value descending and load to state\n            res.data.sort(function(a, b) {\n                return b.Average - a.Average;\n            });\n            setPlayers(res.data);\n        });\n    }, []);\n    //removes player from main store, updating player lists and draftlog\n    var removePlayer = function(id) {\n        //removes player from list\n        setPlayers(players.filter(function(player) {\n            return player._id !== id;\n        }));\n        //adds player to draft log\n        setLoggedPlayers(function(loggedPlayers) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(loggedPlayers).concat([\n                players.filter(function(player) {\n                    return player._id == id;\n                }), \n            ]);\n        });\n    };\n    //adds player to your team\n    var draftPlayer = function(id) {\n        //assign filter to variable for ease of use in switch case\n        var selection = players.filter(function(player) {\n            return player._id == id;\n        });\n        //filter returns an array so use [0] to access the properties\n        switch(selection[0].Pos){\n            case \"QB\":\n                setQbs(function(qbs) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(qbs).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"RB\":\n                setRbs(function(rbs) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(rbs).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"WR\":\n                setWrs(function(wrs) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(wrs).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"TE\":\n                setTes(function(tes) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(tes).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"DST\":\n                setDsts(function(dsts) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(dsts).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        })\n                    ]);\n                });\n                break;\n            case \"K\":\n                setKickers(function(kickers) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(kickers).concat([\n                        players.filter(function(player) {\n                            return player._id == id;\n                        }), \n                    ]);\n                });\n                break;\n            default:\n                console.log(selection[0].Pos);\n        }\n        removePlayer(id);\n    };\n    // set state for each of the positions\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), qbs = ref3[0], setQbs = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rbs = ref4[0], setRbs = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), wrs = ref5[0], setWrs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tes = ref6[0], setTes = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), flexes = ref7[0], setflexes = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dsts = ref8[0], setDsts = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), kickers = ref9[0], setKickers = ref9[1];\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), benches = ref10[0], setBenches = ref10[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n        theme: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                direction: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        height: \"5vh\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        height: \"60vh\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FullPlayer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                players: players,\n                                onDraft: draftPlayer,\n                                onRemove: removePlayer\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_YourTeam__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                qbs: qbs\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            height: \"30vh\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"RB\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"WR\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"TE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RoleList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    players: players,\n                                    role: \"QB\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Manny\\\\code\\\\live-draft-tool\\\\src\\\\App.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"dnnSd7h/wJVl7J+yGlT4pqElcAw=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUhBLEtBQUFBLEdBQUc7QUF1R1osK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQXBwLmpzP2UzZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDaGFrcmFQcm92aWRlcixcbiAgQm94LFxuICBUZXh0LFxuICBMaW5rLFxuICBWU3RhY2ssXG4gIENvZGUsXG4gIEdyaWQsXG4gIHRoZW1lLFxuICBGbGV4LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgWW91clRlYW0gZnJvbSAnLi9jb21wb25lbnRzL1lvdXJUZWFtJztcbmltcG9ydCBGdWxsUGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9GdWxsUGxheWVyJztcbmltcG9ydCBSb2xlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUm9sZUxpc3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wbGF5ZXJzJztcbiAgLy9rZWVwIGxvZyBvZiBhdmFpbGFibGUgcGxheWVyc1xuICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9rZWVwIGxvZyBvZiByZW1vdmVkIHBsYXllcnNcbiAgY29uc3QgW2xvZ2dlZFBsYXllcnMsIHNldExvZ2dlZFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8va2VlcCBsb2cgb2YgcGxheWVycyBkcmFmdGVkIHRvIHlvdXIgdGVhbVxuICBjb25zdCBbdGVhbVBsYXllcnMsIHNldFRlYW1QbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL2dldCBwbGF5ZXJzIGZyb20gZGJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQodXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAvL3NvcnQgYnkgdmFsdWUgZGVzY2VuZGluZyBhbmQgbG9hZCB0byBzdGF0ZVxuICAgICAgcmVzLmRhdGEuc29ydCgoYSwgYikgPT4gYi5BdmVyYWdlIC0gYS5BdmVyYWdlKTtcbiAgICAgIHNldFBsYXllcnMocmVzLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy9yZW1vdmVzIHBsYXllciBmcm9tIG1haW4gc3RvcmUsIHVwZGF0aW5nIHBsYXllciBsaXN0cyBhbmQgZHJhZnRsb2dcbiAgY29uc3QgcmVtb3ZlUGxheWVyID0gaWQgPT4ge1xuICAgIC8vcmVtb3ZlcyBwbGF5ZXIgZnJvbSBsaXN0XG4gICAgc2V0UGxheWVycyhwbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLl9pZCAhPT0gaWQpKTtcbiAgICAvL2FkZHMgcGxheWVyIHRvIGRyYWZ0IGxvZ1xuICAgIHNldExvZ2dlZFBsYXllcnMobG9nZ2VkUGxheWVycyA9PiBbXG4gICAgICAuLi5sb2dnZWRQbGF5ZXJzLFxuICAgICAgcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpLFxuICAgIF0pO1xuICB9O1xuXG4gIC8vYWRkcyBwbGF5ZXIgdG8geW91ciB0ZWFtXG4gIGNvbnN0IGRyYWZ0UGxheWVyID0gaWQgPT4ge1xuICAgIC8vYXNzaWduIGZpbHRlciB0byB2YXJpYWJsZSBmb3IgZWFzZSBvZiB1c2UgaW4gc3dpdGNoIGNhc2VcbiAgICBsZXQgc2VsZWN0aW9uID0gcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpO1xuICAgIC8vZmlsdGVyIHJldHVybnMgYW4gYXJyYXkgc28gdXNlIFswXSB0byBhY2Nlc3MgdGhlIHByb3BlcnRpZXNcbiAgICBzd2l0Y2ggKHNlbGVjdGlvblswXS5Qb3MpIHtcbiAgICAgIGNhc2UgJ1FCJzpcbiAgICAgICAgc2V0UWJzKHFicyA9PiBbLi4ucWJzLCBwbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLl9pZCA9PSBpZCldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSQic6XG4gICAgICAgIHNldFJicyhyYnMgPT4gWy4uLnJicywgcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnV1InOlxuICAgICAgICBzZXRXcnMod3JzID0+IFsuLi53cnMsIHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuX2lkID09IGlkKV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1RFJzpcbiAgICAgICAgc2V0VGVzKHRlcyA9PiBbLi4udGVzLCBwbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyLl9pZCA9PSBpZCldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEU1QnOlxuICAgICAgICBzZXREc3RzKGRzdHMgPT4gWy4uLmRzdHMsIHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIuX2lkID09IGlkKV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0snOlxuICAgICAgICBzZXRLaWNrZXJzKGtpY2tlcnMgPT4gW1xuICAgICAgICAgIC4uLmtpY2tlcnMsXG4gICAgICAgICAgcGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllci5faWQgPT0gaWQpLFxuICAgICAgICBdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3Rpb25bMF0uUG9zKTtcbiAgICB9XG4gICAgcmVtb3ZlUGxheWVyKGlkKTtcbiAgfTtcblxuICAvLyBzZXQgc3RhdGUgZm9yIGVhY2ggb2YgdGhlIHBvc2l0aW9uc1xuICBjb25zdCBbcWJzLCBzZXRRYnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmJzLCBzZXRSYnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd3JzLCBzZXRXcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGVzLCBzZXRUZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmxleGVzLCBzZXRmbGV4ZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZHN0cywgc2V0RHN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtraWNrZXJzLCBzZXRLaWNrZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2JlbmNoZXMsIHNldEJlbmNoZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Qm94IGhlaWdodD1cIjV2aFwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBoZWlnaHQ9XCI2MHZoXCI+XG4gICAgICAgICAgICA8RnVsbFBsYXllclxuICAgICAgICAgICAgICBwbGF5ZXJzPXtwbGF5ZXJzfVxuICAgICAgICAgICAgICBvbkRyYWZ0PXtkcmFmdFBsYXllcn1cbiAgICAgICAgICAgICAgb25SZW1vdmU9e3JlbW92ZVBsYXllcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8WW91clRlYW0gcWJzPXtxYnN9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxGbGV4IGhlaWdodD1cIjMwdmhcIj5cbiAgICAgICAgICAgICAgPFJvbGVMaXN0IHBsYXllcnM9e3BsYXllcnN9IHJvbGU9eydSQid9IC8+XG4gICAgICAgICAgICAgIDxSb2xlTGlzdCBwbGF5ZXJzPXtwbGF5ZXJzfSByb2xlPXsnV1InfSAvPlxuICAgICAgICAgICAgICA8Um9sZUxpc3QgcGxheWVycz17cGxheWVyc30gcm9sZT17J1RFJ30gLz5cbiAgICAgICAgICAgICAgPFJvbGVMaXN0IHBsYXllcnM9e3BsYXllcnN9IHJvbGU9eydRQid9IC8+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hha3JhUHJvdmlkZXIiLCJCb3giLCJUZXh0IiwiTGluayIsIlZTdGFjayIsIkNvZGUiLCJHcmlkIiwidGhlbWUiLCJGbGV4IiwiSGVhZGVyIiwiWW91clRlYW0iLCJGdWxsUGxheWVyIiwiUm9sZUxpc3QiLCJheGlvcyIsIkFwcCIsInVybCIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwibG9nZ2VkUGxheWVycyIsInNldExvZ2dlZFBsYXllcnMiLCJ0ZWFtUGxheWVycyIsInNldFRlYW1QbGF5ZXJzIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJBdmVyYWdlIiwicmVtb3ZlUGxheWVyIiwiaWQiLCJmaWx0ZXIiLCJwbGF5ZXIiLCJfaWQiLCJkcmFmdFBsYXllciIsInNlbGVjdGlvbiIsIlBvcyIsInNldFFicyIsInFicyIsInNldFJicyIsInJicyIsInNldFdycyIsIndycyIsInNldFRlcyIsInRlcyIsInNldERzdHMiLCJkc3RzIiwic2V0S2lja2VycyIsImtpY2tlcnMiLCJjb25zb2xlIiwibG9nIiwiZmxleGVzIiwic2V0ZmxleGVzIiwiYmVuY2hlcyIsInNldEJlbmNoZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJvbkRyYWZ0Iiwib25SZW1vdmUiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.js\n"));

/***/ })

});