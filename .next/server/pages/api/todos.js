"use strict";
(() => {
var exports = {};
exports.id = 826;
exports.ids = [826];
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

/***/ 3217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAllTodosByUser": () => (/* binding */ GetAllTodosByUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);



const GetAllTodosByUser = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetAllTodosByUser($userId: ID!) {
    todos(where: { nextAuthUser: { id: $userId } }, orderBy: createdAt_ASC) {
      id
      description
      completed
      dueDate
    }
  }
`;
const CreateNewTodoForUser = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CreateNewTodoForUser(
    $description: String!
    $completed: Boolean
    $userId: ID!
    $dueDate: DateTime!
  ) {
    todo: createTodo(
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (!session) {
        return res.status(401).send({
            error: 'Unauthorized'
        });
    }
    try {
        switch(req.method.toLowerCase()){
            case 'get':
                {
                    const { todos  } = await _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__/* .hygraphClient.request */ .n.request(GetAllTodosByUser, {
                        userId: session.userId
                    });
                    return res.status(200).json(todos);
                }
            case 'post':
                {
                    const { description , completed , dueDate  } = req.body;
                    const todoData = {
                        description,
                        completed: completed || false,
                        userId: session.userId
                    };
                    if (dueDate) {
                        todoData.dueDate = dueDate;
                    }
                    const { todo  } = await _lib_hygraph__WEBPACK_IMPORTED_MODULE_2__/* .hygraphClient.request */ .n.request(CreateNewTodoForUser, todoData);
                    return res.status(201).json(todo);
                }
            default:
                {
                    return res.status(405).send({
                        error: 'Method not allowed'
                    });
                }
        }
    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({
            error: 'Server error',
            details: error.message
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
var __webpack_exports__ = (__webpack_exec__(3217));
module.exports = __webpack_exports__;

})();