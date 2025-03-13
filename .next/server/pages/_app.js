"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    resources: {
        en: {
            translation: __webpack_require__(3172)
        },
        fr: {
            translation: __webpack_require__(6210)
        },
        es: {
            translation: __webpack_require__(3078)
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

});

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3192);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7987);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4683);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_4__, _i18n__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
([_components_header__WEBPACK_IMPORTED_MODULE_4__, _i18n__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function MyApp({ Component , pageProps: { session , ...pageProps } ,  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__.I18nextProvider, {
        i18n: _i18n__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
            session: session,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col min-h-screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: `flex-1 flex items-center justify-center ${isAuthPage ? "bg-gray-50" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "stylesheet",
                                    href: "https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 3172:
/***/ ((module) => {

module.exports = JSON.parse('{"language":"Language","home":"Home","signIn":"Sign in","signOut":"Sign out","editTodo":"Edit Todo","description":"Description","completed":"Completed","delete":"Delete","saveChanges":"Save Changes","addNewTodo":"Add a new todo","todoList":"Todo List","todoCalendar":"Todo Calendar","fetchingTodos":"Fetching todos from Hygraph...","myTodos":"My Todos","loginToManageTodos":"Login to manage your todos","loginTitle":"Login","loginSubtitle":"Hey, enter your details to sign in to your account","emailPlaceholder":"Enter your email","passwordPlaceholder":"Enter your password","loginButton":"Login","emailRequired":"Email is required","invalidEmail":"Please enter a valid email address","passwordRequired":"Password is required","unexpectedError":"An unexpected error occurred. Please try again.","noAccount":"Don\'t have an account?","signupNow":"Signup Now","signup":{"title":"Sign Up","subtitle":"Create your account to get started","email_placeholder":"Email","password_placeholder":"Password","confirm_password_placeholder":"Confirm Password","submit":"Sign Up","login_prompt":"Already have an account?","login_link":"Log In","error_email_required":"Email is required","error_email_invalid":"Please enter a valid email address","error_password_required":"Password is required","error_password_invalid":"Password must be at least 8 characters long, contain a lowercase letter, an uppercase letter, and a number","error_confirm_password_required":"Please confirm your password","error_password_mismatch":"Passwords do not match","error_form":"An error occurred. Please try again."},"selectDueDate":"Select due date","addTodo":"Add Task","cancel":"Cancel","tasks":"Tasks","dueDate":"Due Date","enterTodoDescription":"What needs to be done?","markCompleted":"Mark as completed","noTodosYet":"No tasks yet","addYourFirstTodo":"Add your first task","todoAdded":"Task added successfully","todoUpdated":"Task updated successfully","todoDeleted":"Task deleted","failedToAddTodo":"Failed to add task","failedToUpdateTodo":"Failed to update task","failedToDeleteTodo":"Failed to delete task","errorFetchingTodos":"Error loading tasks","list":"List","calendar":"Calendar","deleteTodo":"Delete task"}');

/***/ }),

/***/ 3078:
/***/ ((module) => {

module.exports = JSON.parse('{"language":"Idioma","home":"Inicio","signIn":"Iniciar sesión","signOut":"Cerrar sesión","editTodo":"Editar tarea","description":"Descripción","completed":"Completado","delete":"Eliminar","saveChanges":"Guardar cambios","addNewTodo":"Agregar una nueva tarea","todoList":"Lista de tareas","todoCalendar":"Calendario de tareas","fetchingTodos":"Obteniendo tareas desde Hygraph...","myTodos":"Mis tareas","loginToManageTodos":"Inicia sesión para gestionar tus tareas","loginTitle":"Iniciar sesión","loginSubtitle":"Ingrese sus datos para acceder a su cuenta","emailPlaceholder":"Introduce tu correo electrónico","passwordPlaceholder":"Introduce tu contraseña","loginButton":"Iniciar sesión","emailRequired":"Se requiere un correo electrónico","invalidEmail":"Por favor, introduce una dirección de correo electrónico válida","passwordRequired":"Se requiere una contraseña","unexpectedError":"Ocurrió un error inesperado. Inténtalo de nuevo.","noAccount":"¿No tienes una cuenta?","signupNow":"Regístratea hora","signup":{"title":"Regístrate","subtitle":"Crea tu cuenta para empezar","email_placeholder":"Correo electrónico","password_placeholder":"Contraseña","confirm_password_placeholder":"Confirmar contraseña","submit":"Regístrate","login_prompt":"¿Ya tienes una cuenta?","login_link":"Iniciar sesión","error_email_required":"El correo electrónico es obligatorio","error_email_invalid":"Por favor, introduce una dirección de correo electrónico válida","error_password_required":"La contraseña es obligatoria","error_password_invalid":"La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número","error_confirm_password_required":"Por favor, confirma tu contraseña","error_password_mismatch":"Las contraseñas no coinciden","error_form":"Ocurrió un error. Por favor, inténtalo de nuevo."},"selectDueDate":"Seleccionar fecha de vencimiento","addTodo":"Agregar tarea","cancel":"Cancelar","tasks":"Tareas","dueDate":"Fecha de vencimiento","enterTodoDescription":"¿Qué hay que hacer?","markCompleted":"Marcar como completado","noTodosYet":"Aún no hay tareas","addYourFirstTodo":"Agrega tu primera tarea","todoAdded":"Tarea agregada con éxito","todoUpdated":"Tarea actualizada con éxito","todoDeleted":"Tarea eliminada","failedToAddTodo":"Error al agregar la tarea","failedToUpdateTodo":"Error al actualizar la tarea","failedToDeleteTodo":"Error al eliminar la tarea","errorFetchingTodos":"Error al cargar las tareas","list":"Lista","calendar":"Calendario","deleteTodo":"Eliminar tarea"}');

/***/ }),

/***/ 6210:
/***/ ((module) => {

module.exports = JSON.parse('{"language":"Langue","home":"Accueil","signIn":"Se connecter","signOut":"Se déconnecter","editTodo":"Modifier la tâche","description":"Description","completed":"Terminé","delete":"Supprimer","saveChanges":"Enregistrer les modifications","addNewTodo":"Ajouter une nouvelle tâche","todoList":"Liste de tâches","todoCalendar":"Calendrier des tâches","fetchingTodos":"Récupération des tâches depuis Hygraph...","myTodos":"Mes tâches","loginToManageTodos":"Connectez-vous pour gérer vos tâches","loginTitle":"Connexion","loginSubtitle":"Entrez vos informations pour vous connecter","emailPlaceholder":"Entrez votre e-mail","passwordPlaceholder":"Entrez votre mot de passe","loginButton":"Se connecter","emailRequired":"L\'e-mail est requis","invalidEmail":"Veuillez entrer une adresse e-mail valide","passwordRequired":"Le mot de passe est requis","unexpectedError":"Une erreur inattendue s\'est produite. Veuillez réessayer.","noAccount":"Vous n\'avez pas de compte?","signupNow":"S\'inscrire maintenant","signup":{"title":"S\'inscrire","subtitle":"Créez votre compte pour commencer","email_placeholder":"Email","password_placeholder":"Mot de passe","confirm_password_placeholder":"Confirmez le mot de passe","submit":"S\'inscrire","login_prompt":"Vous avez déjà un compte ?","login_link":"Se connecter","error_email_required":"L\'e-mail est requis","error_email_invalid":"Veuillez entrer une adresse e-mail valide","error_password_required":"Le mot de passe est requis","error_password_invalid":"Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule et un chiffre","error_confirm_password_required":"Veuillez confirmer votre mot de passe","error_password_mismatch":"Les mots de passe ne correspondent pas","error_form":"Une erreur est survenue. Veuillez réessayer."},"selectDueDate":"Sélectionner une date d\'échéance","addTodo":"Ajouter une tâche","cancel":"Annuler","tasks":"Tâches","dueDate":"Date d\'échéance","enterTodoDescription":"Que faut-il faire ?","markCompleted":"Marquer comme terminé","noTodosYet":"Aucune tâche pour le moment","addYourFirstTodo":"Ajoutez votre première tâche","todoAdded":"Tâche ajoutée avec succès","todoUpdated":"Tâche mise à jour avec succès","todoDeleted":"Tâche supprimée","failedToAddTodo":"Échec de l\'ajout de la tâche","failedToUpdateTodo":"Échec de la mise à jour de la tâche","failedToDeleteTodo":"Échec de la suppression de la tâche","errorFetchingTodos":"Erreur lors du chargement des tâches","list":"Liste","calendar":"Calendrier","deleteTodo":"Supprimer la tâche"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,683], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();