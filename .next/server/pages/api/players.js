"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/players";
exports.ids = ["pages/api/players"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/players.js":
/*!******************************!*\
  !*** ./pages/api/players.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"(api)/./util/mongodb.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    const players = await db.collection(\"players\").find({}).toArray();\n    res.json(players);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RDtBQUV2RCxpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxNQUFNLEVBQUVDLEVBQUUsR0FBRSxHQUFHLE1BQU1ILGdFQUFpQixFQUFFO0lBRXhDLE1BQU1JLE9BQU8sR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7SUFFakVMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDSixPQUFPLENBQUMsQ0FBQztDQUNuQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZS1kcmFmdC10b29sLy4vcGFnZXMvYXBpL3BsYXllcnMuanM/ZGUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uL3V0aWwvbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigncGxheWVycycpLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuXHJcbiAgcmVzLmpzb24ocGxheWVycyk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsInJlcSIsInJlcyIsImRiIiwicGxheWVycyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/players.js\n");

/***/ }),

/***/ "(api)/./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\n// check the MongoDB URI\nif (!MONGODB_URI) {\n    throw new Error(\"Define the MONGODB_URI environmental variable\");\n}\n// check the MongoDB DB\nif (!MONGODB_DB) {\n    throw new Error(\"Define the MONGODB_DB environmental variable\");\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    // check the cached.\n    if (cachedClient && cachedDb) {\n        // load from cache\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    // set the connection options\n    const opts = {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    };\n    // Connect to cluster\n    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);\n    await client.connect();\n    let db = client.db(MONGODB_DB);\n    // set cache\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client: cachedClient,\n        db: cachedDb\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVc7QUFDM0MsTUFBTUcsVUFBVSxHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTztBQUV0Qyx3QkFBd0I7QUFDeEIsSUFBSSxDQUFDSixXQUFXLEVBQUU7SUFDaEIsTUFBTSxJQUFJSyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztDQUNsRTtBQUVELHVCQUF1QjtBQUN2QixJQUFJLENBQUNGLFVBQVUsRUFBRTtJQUNmLE1BQU0sSUFBSUUsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Q0FDakU7QUFFRCxJQUFJQyxZQUFZLEdBQUcsSUFBSTtBQUN2QixJQUFJQyxRQUFRLEdBQUcsSUFBSTtBQUVaLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLG9CQUFvQjtJQUNwQixJQUFJRixZQUFZLElBQUlDLFFBQVEsRUFBRTtRQUM1QixrQkFBa0I7UUFDbEIsT0FBTztZQUNMRSxNQUFNLEVBQUVILFlBQVk7WUFDcEJJLEVBQUUsRUFBRUgsUUFBUTtTQUNiLENBQUM7S0FDSDtJQUVELDZCQUE2QjtJQUM3QixNQUFNSSxJQUFJLEdBQUc7UUFDWEMsZUFBZSxFQUFFLElBQUk7UUFDckJDLGtCQUFrQixFQUFFLElBQUk7S0FDekI7SUFFRCxxQkFBcUI7SUFDckIsSUFBSUosTUFBTSxHQUFHLElBQUlWLGdEQUFXLENBQUNDLFdBQVcsRUFBRVcsSUFBSSxDQUFDO0lBQy9DLE1BQU1GLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLENBQUM7SUFDdkIsSUFBSUosRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQ1AsVUFBVSxDQUFDO0lBRTlCLFlBQVk7SUFDWkcsWUFBWSxHQUFHRyxNQUFNLENBQUM7SUFDdEJGLFFBQVEsR0FBR0csRUFBRSxDQUFDO0lBRWQsT0FBTztRQUNMRCxNQUFNLEVBQUVILFlBQVk7UUFDcEJJLEVBQUUsRUFBRUgsUUFBUTtLQUNiLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmUtZHJhZnQtdG9vbC8uL3V0aWwvbW9uZ29kYi5qcz80NTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuREJfTkFNRTtcclxuXHJcbi8vIGNoZWNrIHRoZSBNb25nb0RCIFVSSVxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcclxufVxyXG5cclxuLy8gY2hlY2sgdGhlIE1vbmdvREIgREJcclxuaWYgKCFNT05HT0RCX0RCKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnRhbCB2YXJpYWJsZScpO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcclxubGV0IGNhY2hlZERiID0gbnVsbDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAvLyBjaGVjayB0aGUgY2FjaGVkLlxyXG4gIGlmIChjYWNoZWRDbGllbnQgJiYgY2FjaGVkRGIpIHtcclxuICAgIC8vIGxvYWQgZnJvbSBjYWNoZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXHJcbiAgICAgIGRiOiBjYWNoZWREYixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBzZXQgdGhlIGNvbm5lY3Rpb24gb3B0aW9uc1xyXG4gIGNvbnN0IG9wdHMgPSB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29ubmVjdCB0byBjbHVzdGVyXHJcbiAgbGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwgb3B0cyk7XHJcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuICBsZXQgZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XHJcblxyXG4gIC8vIHNldCBjYWNoZVxyXG4gIGNhY2hlZENsaWVudCA9IGNsaWVudDtcclxuICBjYWNoZWREYiA9IGRiO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXHJcbiAgICBkYjogY2FjaGVkRGIsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RCIiwiREJfTkFNRSIsIkVycm9yIiwiY2FjaGVkQ2xpZW50IiwiY2FjaGVkRGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImRiIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./util/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/players.js"));
module.exports = __webpack_exports__;

})();