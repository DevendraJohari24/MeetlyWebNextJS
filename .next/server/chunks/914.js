"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getMeetupById": () => (/* binding */ getMeetupById),
/* harmony export */   "getMeetupsData": () => (/* binding */ getMeetupsData)
/* harmony export */ });
/* harmony import */ var _utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2999);

async function getMeetupsData() {
    const client = await (0,_utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const db = client.db("meetups");
    const meetups = await db.collection("meetups").find().toArray();
    return meetups;
}
async function getMeetupById(meetupId) {
    const meetups = await getMeetupsData();
    const selectedMeetup = meetups.find((meetup)=>meetup._id.toString() === meetupId);
    return selectedMeetup;
}
async function handler(req, res) {
    if (req.method === "GET") {
        const meetups = await getMeetupsData();
        res.status(200).json({
            meetups: meetups
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