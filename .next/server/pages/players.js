"use strict";
(() => {
var exports = {};
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Players),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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

;// CONCATENATED MODULE: ./pages/players.js


function Players({ players  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Top 20 Players of This Season"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                    children: "(According to BeerSheets)"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: players.map((player)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: player.Name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: player.Average
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: player.Pos
                            })
                        ]
                    }))
            })
        ]
    });
};
async function getServerSideProps() {
    const { db  } = await connectToDatabase();
    const players = await db.collection("players").find({}).limit(20).toArray();
    return {
        props: {
            players: JSON.parse(JSON.stringify(players))
        }
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(827));
module.exports = __webpack_exports__;

})();