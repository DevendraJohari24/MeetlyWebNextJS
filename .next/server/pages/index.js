"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,744];
exports.modules = {

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/meetups/About.js



function About() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "about",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative container flex flex-col max-w-6xl mx-auto md:my-36 mt-5 px-6 text-gray-900 md:flex-row md:px-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/image/aboutImage.jpg",
                        alt: "",
                        width: "750w",
                        priority: true,
                        height: "600w"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left",
                                children: "The Quad of Pshyco Geeks"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "max-w-md text-center md:text-left",
                                children: "We are a group of four friends in which all four have different skills and vibes. Our Team contains: Priya, Doman, Kushagra, Devendra. Each have different powers: Priya - great at designing skills also a Fashion ICON, Doman - our hardware guy , speciallised in IOT, Kushagra - our bag of awesome Ideas also speciallised in Cloud, Devendra - developer , good in React and React Native"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const meetups_About = (About);

;// CONCATENATED MODULE: ./components/meetups/Title.js


function Title() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "title",
            className: "",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container md:max-w-6xl mx-auto px-6 md:py-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:max-w-lg md:mt-32 md:mb-32 p-4 font-sans text-2xl text-white uppercase border-2 md:m-32 md:mx-0 md:text-6xl",
                    children: "Meetly That Keep You Connected"
                })
            })
        })
    });
}
/* harmony default export */ const meetups_Title = (Title);

// EXTERNAL MODULE: ./pages/api/meetups/index.js + 1 modules
var api_meetups = __webpack_require__(5795);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/index.js







function HomePage({ meetups  }) {
    const router = (0,router_.useRouter)();
    function onLoadImage({ src , width , quality  }) {
        return `${src}?w=${width}&q=${quality || 75}`;
    }
    const onSeeAllHandler = ()=>{
        router.push("/meetups");
    };
    function onLoadDescription(id) {
        router.push("/meetup/" + id);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(meetups_Title, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(meetups_About, {}),
                meetups.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    id: "meetups",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container max-w-6xl mx-auto my-20 md:my-32 px-6 text-gray-900 md:px-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-center mb-20 md:justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-4xl text-center uppercase md:text-left md:text-5xl",
                                        children: "Top Meetups"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "hidden btn md:block",
                                        onClick: onSeeAllHandler,
                                        children: "See All"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item-container",
                                children: meetups.map((meetup, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "group item",
                                        onClick: onLoadDescription.bind(null, meetup.id),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hidden md:block",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: meetup.image,
                                                    loader: onLoadImage,
                                                    alt: "",
                                                    width: "700",
                                                    height: "1200",
                                                    className: "object-cover duration-200 md:block group-hover:scale-110"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "md:hidden",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: meetup.image,
                                                    loader: onLoadImage,
                                                    alt: "",
                                                    width: "750",
                                                    height: "500",
                                                    className: "object-cover duration-200 md:block group-hover:scale-110"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item-gradient"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: meetup.title
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    })
                }) : null
            ]
        })
    });
}
const getStaticProps = async ()=>{
    const meetups = await (0,api_meetups/* getMeetupsData */.RS)();
    const featuredMeetups = meetups.slice(-8);
    return {
        props: {
            meetups: featuredMeetups.map((meetup)=>{
                return {
                    id: meetup._id.toString(),
                    title: meetup.title,
                    image: meetup.image
                };
            })
        },
        revalidate: 10
    };
};
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [311,675,795], () => (__webpack_exec__(510)));
module.exports = __webpack_exports__;

})();