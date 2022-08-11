"use strict";
(() => {
var exports = {};
exports.id = 512;
exports.ids = [512,744];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2999);
/* harmony import */ var _meetups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5914);



async function handler(req, res) {
    if (req.method === "GET") {
        const { meetupId  } = req.query;
        const meetups = await (0,_meetups__WEBPACK_IMPORTED_MODULE_2__.getMeetupsData)();
        const selectedMeetup = meetups.find((meetup)=>meetup._id.toString() === meetupId);
        res.status(201).json({
            meetup: selectedMeetup
        });
    } else if (req.method === "DELETE") {
        const { meetupId: meetupId1  } = req.query;
        const client = await (0,_utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const db = client.db("meetups");
        const result = await db.collection("meetups").deleteOne({
            _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(meetupId1)
        });
        res.status(201).json({
            message: "Deleted Successfully"
        });
    } else {
        res.status(200).json("Working");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914], () => (__webpack_exec__(585)));
module.exports = __webpack_exports__;

})();