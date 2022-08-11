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
exports.id = "pages/api/meetups";
exports.ids = ["pages/api/meetups"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/meetups/index.js":
/*!************************************!*\
  !*** ./pages/api/meetups/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getMeetupById\": () => (/* binding */ getMeetupById),\n/* harmony export */   \"getMeetupsData\": () => (/* binding */ getMeetupsData)\n/* harmony export */ });\n/* harmony import */ var _utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectToDatabase */ \"(api)/./utils/connectToDatabase.js\");\n\nasync function getMeetupsData() {\n    const client = await (0,_utils_connectToDatabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const db = client.db(\"meetups\");\n    const meetups = await db.collection(\"meetups\").find().toArray();\n    return meetups;\n}\nasync function getMeetupById(meetupId) {\n    const meetups = await getMeetupsData();\n    const selectedMeetup = meetups.find((meetup)=>meetup._id.toString() === meetupId);\n    return selectedMeetup;\n}\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const meetups = await getMeetupsData();\n        res.status(200).json({\n            meetups: meetups\n        });\n    } else {\n        res.status(201).json({\n            message: \"Working\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVldHVwcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlFO0FBQzFELGVBQWVDLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsb0VBQWlCLEVBQUU7SUFDeEMsTUFBTUcsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDL0IsTUFBTUMsT0FBTyxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFO0lBQy9ELE9BQU9ILE9BQU8sQ0FBQztDQUNoQjtBQUVNLGVBQWVJLGFBQWEsQ0FBQ0MsUUFBUSxFQUFFO0lBQzFDLE1BQU1MLE9BQU8sR0FBRyxNQUFNSCxjQUFjLEVBQUU7SUFDdEMsTUFBTVMsY0FBYyxHQUFHTixPQUFPLENBQUNFLElBQUksQ0FBQyxDQUFDSyxNQUFNLEdBQU1BLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUUsS0FBS0osUUFBUSxDQUFFO0lBQ3JGLE9BQU9DLGNBQWMsQ0FBQztDQUN6QjtBQUVELGVBQWVJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE1BQU1iLE9BQU8sR0FBRyxNQUFNSCxjQUFjLEVBQUU7UUFDdENlLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRWYsT0FBTyxFQUFFQSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQzVDLE1BQU07UUFDTFksR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsU0FBUztTQUFFLENBQUMsQ0FBQztLQUM5QztDQUNGO0FBRUQsaUVBQWVOLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRseXdlYm5leHRqcy8uL3BhZ2VzL2FwaS9tZWV0dXBzL2luZGV4LmpzP2E1OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25uZWN0VG9EYXRhYmFzZVwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVldHVwc0RhdGEoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgcmV0dXJuIG1lZXR1cHM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWV0dXBCeUlkKG1lZXR1cElkKSB7XHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgZ2V0TWVldHVwc0RhdGEoKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gbWVldHVwcy5maW5kKChtZWV0dXApID0+IChtZWV0dXAuX2lkLnRvU3RyaW5nKCkgPT09IG1lZXR1cElkKSk7XHJcbiAgICByZXR1cm4gc2VsZWN0ZWRNZWV0dXA7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IGdldE1lZXR1cHNEYXRhKCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lZXR1cHM6IG1lZXR1cHMgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJXb3JraW5nXCIgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJnZXRNZWV0dXBzRGF0YSIsImNsaWVudCIsImRiIiwibWVldHVwcyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImdldE1lZXR1cEJ5SWQiLCJtZWV0dXBJZCIsInNlbGVjdGVkTWVldHVwIiwibWVldHVwIiwiX2lkIiwidG9TdHJpbmciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/meetups/index.js\n");

/***/ }),

/***/ "(api)/./utils/connectToDatabase.js":
/*!************************************!*\
  !*** ./utils/connectToDatabase.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDatabase = async ()=>{\n    try {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://devendra:devendra@cluster0.aq7umfb.mongodb.net/?retryWrites=true&w=majority\");\n        console.log(\"Connected Successfully\");\n        return client;\n    } catch (err) {\n        console.log(\"Connection Error\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0VG9EYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsaUJBQWlCLEdBQUcsVUFBVztJQUNuQyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLHdEQUFtQixDQUFDSSwyRkFBdUIsQ0FBQztRQUNqRUcsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxPQUFPTixNQUFNLENBQUM7S0FDZixDQUFDLE9BQU9PLEdBQUcsRUFBRTtRQUNaRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ2pDO0NBQ0Y7QUFHRCxpRUFBZVAsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0bHl3ZWJuZXh0anMvLi91dGlscy9jb25uZWN0VG9EYXRhYmFzZS5qcz81YTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwpO1xyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgcmV0dXJuIGNsaWVudDtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBFcnJvclwiKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJjb25zb2xlIiwibG9nIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/connectToDatabase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meetups/index.js"));
module.exports = __webpack_exports__;

})();