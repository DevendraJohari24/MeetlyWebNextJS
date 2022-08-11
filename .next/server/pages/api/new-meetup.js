"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958,744];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2999);

async function handler(req, res) {
    if (req.method === "POST") {
        const client = await (0,_utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const db = client.db("meetups");
        const meetup = {
            meetID: req.body["meetID"],
            title: req.body["title"],
            subtitle: req.body["subtitle"],
            image: req.body["image"],
            description: req.body["description"],
            userID: "1",
            createdAt: new Date().toLocaleString()
        };
        const result = await db.collection("meetups").insertOne(meetup);
        res.status(200).json({
            result: result
        });
    } else {
        res.status(201).json({
            message: "Working"
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 2999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const connectToDatabase = async ()=>{
    try {
        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://devendra:devendra@cluster0.aq7umfb.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected Successfully");
        return client;
    } catch (err) {
        console.log("Connection Error");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3553));
module.exports = __webpack_exports__;

})();