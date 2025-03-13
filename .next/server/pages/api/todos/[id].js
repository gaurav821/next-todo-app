"use strict";
(() => {
var exports = {};
exports.id = 427;
exports.ids = [427];
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

/***/ 9181:
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



const UpdateTodoById = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UpdateTodoById(
    $id: ID!
    $description: String
    $completed: Boolean
    $userId: ID!
    $dueDate: DateTime!
  ) {
    todo: updateTodo(
      where: { id: $id }
      data: {
        description: $description
        completed: $completed
        dueDate: $dueDate
        nextAuthUser: { connect: { id: $userId } }
      }
    ) {
      id
      description
      completed
      dueDate
    }
  }
`;
const DeleteTodoById = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DeleteTodoById($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (!session) {
        res.status(401).send({
            error: 'Unauthorized'
        });
    }
    switch(req.method.toLowerCase()){
        case 'patch':
            {
                const { id  } = req.query;
                const { description , completed , dueDate  } = req.body;
                const { todo  } = await _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__/* .hygraphClient.request */ .n.request(UpdateTodoById, {
                    id,
                    description,
                    completed,
                    dueDate,
                    userId: session.userId
                });
                res.status(200).json(todo);
                break;
            }
        case 'delete':
            {
                const { id  } = req.query;
                await _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__/* .hygraphClient.request */ .n.request(DeleteTodoById, {
                    id
                });
                res.status(204).send();
                break;
            }
        default:
            {
                res.status(405).send();
            }
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9181));
module.exports = __webpack_exports__;

})();