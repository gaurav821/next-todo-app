"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

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

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
// EXTERNAL MODULE: ./lib/hygraph.js
var hygraph = __webpack_require__(332);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js





const GetNextAuthUserByEmail = external_graphql_request_.gql`
  query GetNextAuthUserByEmail($email: String!) {
    user: nextAuthUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;
const CreateNextAuthUserByEmail = external_graphql_request_.gql`
  mutation CreateNextAuthUserByEmail($email: String!, $password: String!) {
    newUser: createNextAuthUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    session: {
        strategy: 'jwt'
    },
    debug: true,
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/login',
        newUser: '/signup'
    },
    providers: [
        credentials_default()({
            name: 'Email and Password',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'support@hygraph.com'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            authorize: async ({ email , password  })=>{
                const { user  } = await hygraph/* hygraphClient.request */.n.request(GetNextAuthUserByEmail, {
                    email
                });
                if (!user) {
                    const { newUser  } = await hygraph/* hygraphClient.request */.n.request(CreateNextAuthUserByEmail, {
                        email,
                        password: await (0,external_bcrypt_namespaceObject.hash)(password, 12)
                    });
                    return {
                        id: newUser.id,
                        username: email,
                        email
                    };
                }
                const isValid = await (0,external_bcrypt_namespaceObject.compare)(password, user.password);
                if (!isValid) {
                    throw new Error('Wrong credentials. Try again.');
                }
                return {
                    id: user.id,
                    username: email,
                    email
                };
            }
        }), 
    ],
    callbacks: {
        async redirect ({ url , baseUrl  }) {
            if (url.includes('/signup')) {
                return `${baseUrl}`;
            }
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
        async session ({ session , token  }) {
            session.userId = token.sub;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(346));
module.exports = __webpack_exports__;

})();