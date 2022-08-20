"use strict";
(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ players)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./util/mongodb.js

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;
// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error("Define the MONGODB_URI environmental variable");
}
// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error("Define the MONGODB_DB environmental variable");
}
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    // Connect to cluster
    let client = new external_mongodb_namespaceObject.MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);
    // set cache
    cachedClient = client;
    cachedDb = db;
    return {
        client: cachedClient,
        db: cachedDb
    };
}

;// CONCATENATED MODULE: ./pages/api/players.js

/* harmony default export */ const players = (async (req, res)=>{
    const { db  } = await connectToDatabase();
    const players = await db.collection("players").find({}).toArray();
    res.json(players);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(881));
module.exports = __webpack_exports__;

})();