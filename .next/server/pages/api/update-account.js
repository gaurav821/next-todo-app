"use strict";
(() => {
var exports = {};
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ hygraphClient)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const hygraphClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    }
});


/***/ }),

/***/ 7941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);



const UpdateNextAuthUser = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UpdateNextAuthUser($userId: ID!, $bio: String) {
    user: updateNextAuthUser(data: { bio: $bio }, where: { id: $userId }) {
      id
      email
      bio
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (session) {
        const { bio  } = JSON.parse(req.body);
        const { user  } = await _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__/* .hygraphClient.request */ .n.request(UpdateNextAuthUser, {
            userId: session.userId,
            bio
        });
        res.json(user);
    } else {
        res.send({
            error: 'You must be sign in to update your account.'
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7941));
module.exports = __webpack_exports__;

})();