(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8660)}])},8660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),o=n(3299),s=(n(4683),n(8520)),i=n.n(s),a=n(7294),c=n(821),d=n(3153),l=n(7421),u=n(5113),f=n(462),m=n(5063);function x(e){var t=e.id,n=e.description,o=e.completed,s=e.dueDate,i=e.onUpdateTodo,a=e.onDeleteTodo,c=e.onEdit,x=(0,l.$G)().t;return(0,r.jsx)("li",{className:"px-4 py-3 group transition hover:bg-gray-50",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:o,disabled:!0,onChange:function(){return i({id:t,completed:!o})}}),(0,r.jsx)("div",{className:"ml-3 flex-1",onClick:c,children:(0,r.jsxs)("div",{className:"cursor-pointer",children:[(0,r.jsx)("p",{className:(0,u.Z)(["text-sm font-medium",{"line-through text-gray-400":o,"text-gray-700":!o}]),children:n}),s&&(0,r.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:function(e){if(!e)return null;try{var t="string"===typeof e?(0,f.D)(e):e;return(0,m.WU)(t,"EEE, MMM d, yyyy hh:mm a")}catch(n){return console.error("Date formatting error:",n),"Invalid date"}}(s)})]})}),(0,r.jsxs)("div",{className:"flex space-x-1",children:[(0,r.jsx)("button",{onClick:c,className:"p-1 text-gray-400 hover:text-gray-600",title:x("editTodo"),children:(0,r.jsx)(d.vdY,{className:"h-4 w-4"})}),(0,r.jsx)("button",{onClick:function(){return a({id:t})},className:"p-1 text-gray-400 hover:text-red-600",title:x("deleteTodo"),children:(0,r.jsx)(d.b0D,{className:"h-4 w-4"})})]})]})})}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=e.items,n=void 0===t?[]:t,o=e.onUpdateTodo,s=e.onDeleteTodo,i=e.onEditTodo,a=(0,l.$G)().t;return(0,r.jsx)("div",{className:"bg-white rounded shadow-lg",children:(0,r.jsx)("div",{className:"h-[500px] overflow-y-auto",children:0===n.length?(0,r.jsx)("div",{className:"flex flex-col items-center justify-center h-64 text-gray-500",children:(0,r.jsx)("p",{children:a("noTodosYet")})}):(0,r.jsx)("ul",{className:"divide-y divide-gray-200",children:n.map((function(e){return(0,r.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},e,{onUpdateTodo:o,onDeleteTodo:s,onEdit:function(){return i(e)}}),e.id)}))})})})}var b=n(6827),y=n(381),g=n.n(y),v=(n(8465),n(1988));function j(e){var t=e.isOpen,n=e.onClose,o=e.onSubmit,s=e.initialTodo,i=void 0===s?null:s,c=(0,l.$G)().t,u=(0,a.useRef)(null),m=(0,a.useState)(""),x=m[0],p=m[1],h=(0,a.useState)(!1),b=h[0],y=h[1],g=(0,a.useState)(null),j=g[0],w=g[1],N=(0,a.useState)(!1),k=N[0],D=N[1],T=(0,a.useRef)(null);(0,a.useEffect)((function(){if(i){if(p(i.description||""),y(i.completed||!1),i.dueDate)try{var e="string"===typeof i.dueDate?(0,f.D)(i.dueDate):i.dueDate;w(e)}catch(t){console.error("Error parsing date:",t),w(null)}else w(null);D(!0)}else p(""),y(!1),w(null),D(!1)}),[i,t]),(0,a.useEffect)((function(){t&&T.current&&setTimeout((function(){T.current.focus()}),100)}),[t]),(0,a.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&n()};return t&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n]),(0,a.useEffect)((function(){var e=function(e){"Escape"===e.key&&n()};return t&&document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,n]);return t?(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,r.jsxs)("div",{ref:u,className:"bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden",children:[(0,r.jsxs)("div",{className:"bg-gray-50 px-6 py-4 flex justify-between items-center border-b",children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:c(k?"editTodo":"addNewTodo")}),(0,r.jsx)("button",{onClick:n,className:"text-gray-400 hover:text-gray-500",children:(0,r.jsx)(d.b0D,{className:"h-5 w-5"})})]}),(0,r.jsx)("div",{className:"px-6 py-4",children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={description:x.trim(),completed:b,dueDate:j};k&&i&&(t.id=i.id),o(t),n()},className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 mb-1",children:c("description")}),(0,r.jsx)("input",{ref:T,id:"description",type:"text",required:!0,value:x,onChange:function(e){return p(e.target.value)},className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",placeholder:c("enterTodoDescription")})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"dueDate",className:"block text-sm font-medium text-gray-700 mb-1",children:c("dueDate")}),(0,r.jsx)(v.ZP,{id:"dueDate",selected:j,onChange:function(e){return w(e)},showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,dateFormat:"MMMM d, yyyy h:mm aa",className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",placeholderText:c("selectDueDate")})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"completed",type:"checkbox",checked:b,onChange:function(e){return y(e.target.checked)},className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),(0,r.jsx)("label",{htmlFor:"completed",className:"ml-2 block text-sm text-gray-900",children:c("markCompleted")})]}),(0,r.jsxs)("div",{className:"flex justify-end space-x-2 pt-4",children:[(0,r.jsx)("button",{type:"button",onClick:n,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500",children:c("cancel")}),(0,r.jsx)("button",{type:"submit",className:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:c(k?"saveChanges":"addTodo")})]})]})})]})}):null}var w=(0,b.Zt)(g());function N(e){var t=e.todos,n=e.handleSubmit,o=(0,a.useState)(null),s=o[0],i=o[1],c=(0,a.useState)(!1),d=c[0],l=c[1],u=t.map((function(e){return{id:e.id,title:e.description,description:e.description,start:new Date(e.createdAt||new Date),end:new Date(e.dueDate||new Date),completed:e.completed,dueDate:e.dueDate}}));return(0,r.jsxs)("div",{className:"h-[500px]",children:[(0,r.jsx)(b.f,{localizer:w,events:u,startAccessor:"start",endAccessor:"end",defaultView:"month",views:["month","week","day"],onSelectEvent:function(e){i(e),l(!0)}}),s&&(0,r.jsx)(j,{isOpen:d,onClose:function(){l(!1),i(null)},onSubmit:n,initialTodo:s})]})}function k(e,t,n,r,o,s,i){try{var a=e[s](i),c=a.value}catch(d){return void n(d)}a.done?t(c):Promise.resolve(c).then(r,o)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){k(s,r,o,i,a,"next",e)}function a(e){k(s,r,o,i,a,"throw",e)}i(void 0)}))}}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function S(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(e){return P.apply(this,arguments)}function P(){return(P=D(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=10;break}return r=new Error("An error occurred while fetching the data."),e.next=7,n.json();case 7:throw r.info=e.sent,r.status=n.status,r;case 10:return e.abrupt("return",n.json());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){var e=(0,l.$G)().t,t=(0,c.ZP)("/api/todos",C),n=t.data,o=t.error,s=(0,a.useState)("list"),u=s[0],f=s[1],m=(0,a.useState)(!1),x=m[0],p=m[1],b=(0,a.useState)(null),y=b[0],g=b[1],v=function(e){g(void 0===e?null:e),p(!0)},w=function(e){e.id?T(e):k(e)};if(o)return(0,r.jsxs)("p",{className:"text-center text-red-500 py-8",children:[e("errorFetchingTodos"),": ",o.message]});if(!n)return(0,r.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,r.jsx)("div",{className:"animate-pulse flex space-x-4",children:(0,r.jsxs)("div",{className:"flex-1 space-y-4 py-1",children:[(0,r.jsx)("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("div",{className:"h-4 bg-gray-200 rounded"}),(0,r.jsx)("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})});var k=D(i().mark((function e(t){var r,o,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:"temp-".concat(Date.now()),description:t.description,completed:t.completed||!1,dueDate:t.dueDate},e.prev=1,(0,c.JG)("/api/todos",S(n).concat([r]),!1),e.next=5,fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:t.description,completed:t.completed||!1,dueDate:t.dueDate})});case 5:if((o=e.sent).ok){e.next=11;break}return e.next=9,o.json();case 9:throw s=e.sent.error,new Error(s);case 11:return e.next=13,o.json();case 13:a=e.sent,(0,c.JG)("/api/todos",(function(e){return e.map((function(e){return e.id===r.id?a:e}))}),!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error("Failed to add todo:",e.t0),(0,c.JG)("/api/todos");case 21:case"end":return e.stop()}}),e,null,[[1,17]])}))),T=D(i().mark((function e(t){var r,o,s,a,d,l,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,o=O(t,["id"]),s=n.find((function(e){return e.id===r})),a=n.map((function(e){return e.id===r?E({},e,o):e})),e.prev=3,(0,c.JG)("/api/todos",a,!1),e.next=7,fetch("/api/todos/".concat(r),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 7:if((d=e.sent).ok){e.next=13;break}return e.next=11,d.json();case 11:throw l=e.sent.error,new Error(l);case 13:return e.next=15,d.json();case 15:u=e.sent,(0,c.JG)("/api/todos",(function(e){return e.map((function(e){return e.id===r?u:e}))}),!1),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),console.error("Failed to update todo:",e.t0),(0,c.JG)("/api/todos",(function(e){return e.map((function(e){return e.id===r?s:e}))}),!1);case 23:case"end":return e.stop()}}),e,null,[[3,19]])}))),P=D(i().mark((function e(t){var r,o,s,a,d,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,o=n.find((function(e){return e.id===r})),s=n.findIndex((function(e){return e.id===r})),a=n.filter((function(e){return e.id!==r})),e.prev=4,(0,c.JG)("/api/todos",a,!1),e.next=8,fetch("/api/todos/".concat(r),{method:"DELETE"});case 8:if((d=e.sent).ok){e.next=14;break}return e.next=12,d.json();case 12:throw l=e.sent.error,new Error(l);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),console.error("Failed to delete todo:",e.t0),(0,c.JG)("/api/todos",(function(e){var t=S(e);return t.splice(s,0,o),t}),!1);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return(0,r.jsxs)("div",{className:"container mx-auto px-4 py-6 max-w-4xl",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-gray-800",children:e("todoList")}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsxs)("div",{className:"flex space-x-2 bg-gray-100 rounded-lg p-1 mr-2",children:[(0,r.jsxs)("button",{onClick:function(){return f("list")},className:"flex items-center px-3 py-2 rounded-md transition-colors ".concat("list"===u?"bg-indigo-600 text-white":"text-gray-700 hover:bg-gray-200"),children:[(0,r.jsx)(d._Dm,{className:"h-5 w-5 mr-1"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:e("list")})]}),(0,r.jsxs)("button",{onClick:function(){return f("calendar")},className:"flex items-center px-3 py-2 rounded-md transition-colors ".concat("calendar"===u?"bg-indigo-600 text-white":"text-gray-700 hover:bg-gray-200"),children:[(0,r.jsx)(d.Que,{className:"h-5 w-5 mr-1"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:e("calendar")})]})]}),(0,r.jsx)("button",{onClick:function(){return v()},className:"p-2 bg-indigo-600 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",title:e("addTodo"),children:(0,r.jsx)(d.pOD,{className:"h-5 w-5"})})]})]}),(0,r.jsx)("div",{className:"bg-white rounded-lg shadow-lg",children:"list"===u?(0,r.jsx)(h,{items:n,onUpdateTodo:T,onDeleteTodo:P,onEditTodo:v}):(0,r.jsx)(N,{todos:n,handleSubmit:w,onEditTodo:v})}),(0,r.jsx)(j,{isOpen:x,onClose:function(){p(!1),g(null)},onSubmit:w,initialTodo:y})]})}function _(){var e=(0,o.useSession)().data,t=(0,l.$G)().t;return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center h-full w-full",children:(0,r.jsxs)("div",{className:"max-w-3xl w-full px-6 flex flex-col items-center justify-center",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-indigo-600 mb-6",children:t("myTodos")}),e?(0,r.jsx)(G,{}):(0,r.jsx)("p",{children:t("loginToManageTodos")})]})})}}},function(e){e.O(0,[342,644,770,885,990,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);