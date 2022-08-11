"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 5795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QM": () => (/* binding */ getMeetupById),
  "RS": () => (/* binding */ getMeetupsData)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./utils/connectToDatabase.js

const connectToDatabase = async ()=>{
    try {
        const client = await external_mongodb_.MongoClient.connect("mongodb+srv://devendra:devendra@cluster0.aq7umfb.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected Successfully");
        return client;
    } catch (err) {
        console.log("Connection Error");
    }
};
/* harmony default export */ const utils_connectToDatabase = (connectToDatabase);

;// CONCATENATED MODULE: ./pages/api/meetups/index.js

async function getMeetupsData() {
    const client = await utils_connectToDatabase();
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
/* harmony default export */ const meetups = ((/* unused pure expression or super */ null && (handler)));


/***/ })

};
;