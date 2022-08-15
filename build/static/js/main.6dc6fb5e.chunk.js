(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),o=n.n(c),u=n(10),i=n(23),s=n(63),d=n(8),l=n(64),j=n(20),f=n(40),b=n.n(f),p=n(18),O=n(17),h=n(6),g=n(48),m=Object(d.d)([],(function(e){e.addCase(h.d.fulfilled,(function(e,t){return t.payload})),e.addCase(h.a.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(p.a)(e),[n])})),e.addCase(h.c.fulfilled,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),e.addCase(h.b.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))}))})),x=Object(d.d)(!1,(function(e){e.addCase(h.d.pending,(function(){return!0})),e.addCase(h.d.fulfilled,(function(){return!1})),e.addCase(h.d.rejected,(function(){return!1})),e.addCase(h.a.pending,(function(){return!0})),e.addCase(h.a.fulfilled,(function(){return!1})),e.addCase(h.a.rejected,(function(){return!1})),e.addCase(h.c.pending,(function(){return!0})),e.addCase(h.c.fulfilled,(function(){return!1})),e.addCase(h.c.rejected,(function(){return!1})),e.addCase(h.b.pending,(function(){return!0})),e.addCase(h.b.fulfilled,(function(){return!1})),e.addCase(h.b.rejected,(function(){return!1}))})),v=Object(d.d)(null,(function(e){e.addCase(h.d.pending,(function(){return null})),e.addCase(h.d.rejected,(function(e,t){return t.payload})),e.addCase(h.a.pending,(function(){return null})),e.addCase(h.a.rejected,(function(e,t){return t.payload})),e.addCase(h.c.pending,(function(){return null})),e.addCase(h.c.rejected,(function(e,t){return t.payload})),e.addCase(h.b.pending,(function(){return null})),e.addCase(h.b.rejected,(function(e,t){return t.payload}))})),_=Object(d.d)("",(function(e){e.addCase(g.a,(function(e,t){return t.payload}))})),k=Object(O.b)({item:m,loading:x,error:v}),C=Object(O.b)({data:k,filter:_}),N=n(14),y=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,fetchLoading:!1,error:null},reducers:{},extraReducers:function(e){e.addCase(N.register.pending,(function(e){e.error=null,e.isLoggedIn=!1})).addCase(N.register.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.error=null})).addCase(N.register.rejected,(function(e,t){var n=t.payload;e.error=n})).addCase(N.logIn.pending,(function(e){e.error=null,e.isLoggedIn=!1})).addCase(N.logIn.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.error=null})).addCase(N.logIn.rejected,(function(e,t){var n=t.payload;e.error=n})).addCase(N.logOut.pending,(function(e){e.error=null,e.isLoggedIn=!1})).addCase(N.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.error=null})).addCase(N.logOut.rejected,(function(e,t){var n=t.payload;e.error=n})).addCase(N.fetchUser.pending,(function(e){e.fetchLoading=!0,e.error=null,e.isLoggedIn=!1})).addCase(N.fetchUser.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.fetchLoading=!1,e.error=null})).addCase(N.fetchUser.rejected,(function(e,t){var n=t.payload;e.fetchLoading=!1,e.error=n}))}}).reducer,I=Object(l.createLogger)({collapsed:function(e,t,n){return!n.error},timestamp:!1,duration:!0}),w={key:"contacts/filter",storage:b.a,whitelist:["filter"]},L={key:"auth",storage:b.a,whitelist:["token"]},S=Object(d.a)({reducer:{auth:Object(j.g)(L,y),contacts:Object(j.g)(w,C)},middleware:function(e){return e({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}}).concat(I)},devTools:!0}),T=Object(j.h)(S),U=n(3),A=n(16),z=n(30),P=n.n(z),B=n(1),W=function(e){var t=e.name,n=e.icon,r=e.link;return Object(B.jsx)("div",{className:P.a.NavItem,children:Object(B.jsx)("span",{className:P.a.iconWrapper,children:Object(B.jsxs)(i.c,{to:r,className:P.a.itemName,activeclassname:P.a.NavItemActive,children:[t,Object(B.jsx)("span",{className:P.a.span,children:n})]})})})},E=n(66),F=n.n(E),M=n(67),J=n.n(M),R=n(65),G=n.n(R),H=function(){return Object(B.jsxs)("nav",{className:G.a.container,children:[Object(B.jsx)(W,{name:"Sing In",icon:Object(B.jsx)(F.a,{sx:{fontSize:22}}),link:"/sing_in"},"Sing In"),Object(B.jsx)(W,{name:"Register",icon:Object(B.jsx)(J.a,{}),link:"/register"},"Register")]})},Z=n(69),q=n.n(Z),V=n(70),Y=n.n(V),D=n(68),K=n.n(D),Q=function(){var e=Object(u.c)(A.b.getIsLoggedIn);return Object(B.jsxs)("nav",{className:K.a.container,children:[Object(B.jsx)(W,{name:"HomePage",icon:Object(B.jsx)(q.a,{}),link:"/"},"HomePage"),e&&Object(B.jsx)(W,{name:"PhoneBook",icon:Object(B.jsx)(Y.a,{}),link:"/phonebook"},"PhoneBook")]})},X=n(71),$=n.n(X),ee=n(72),te=n.n(ee),ne=n(24),re=n.n(ne),ae=function(){var e=Object(u.b)(),t=Object(u.c)(A.b.getUserName);return Object(B.jsxs)("div",{className:re.a.container,children:[Object(B.jsxs)("span",{className:re.a.itemName,children:["Welcome,",t,Object(B.jsx)("span",{className:re.a.span,children:Object(B.jsx)($.a,{})})]}),Object(B.jsxs)("button",{className:re.a.btn,type:"button",onClick:function(){return e(A.a.logOut())},children:[Object(B.jsx)("span",{className:re.a.btnText,children:"Out"}),Object(B.jsxs)("span",{className:re.a.spanOut,children:[" ",Object(B.jsx)(te.a,{})]})]})]})},ce=n(73),oe=n.n(ce),ue=function(){var e=Object(u.c)(A.b.getIsLoggedIn);return Object(B.jsxs)("header",{children:[Object(B.jsxs)("nav",{className:oe.a.container,children:[Object(B.jsx)(Q,{}),e?Object(B.jsx)(ae,{}):Object(B.jsx)(H,{})]}),Object(B.jsx)("hr",{})]})},ie=function(){return Object(B.jsx)("div",{})},se=n(29),de=function(){return Object(u.c)(A.b.getToken)?Object(B.jsx)(U.b,{}):Object(B.jsx)(U.a,{to:"/sing_in"})},le=function(){return Object(u.c)(A.b.getIsLoggedIn)?Object(B.jsx)(U.a,{to:"/phonebook"}):Object(B.jsx)(U.b,{})},je=n(61),fe=n(75),be=n.n(fe),pe=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,299))})),Oe=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,298))})),he=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,297))})),ge=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,300))})),me=function(){var e=Object(u.c)(je.c),t=Object(u.c)(A.b.loadingFetchSelector),n=Object(u.b)();return Object(r.useEffect)((function(){n(A.a.fetchUser())}),[n]),Object(B.jsxs)("div",{className:be.a.app,children:[e&&Object(B.jsx)(se.a,{loading:e}),!t&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ue,{}),Object(B.jsxs)(U.e,{children:[Object(B.jsx)(U.c,{exact:!0,path:"/",element:Object(B.jsx)(ie,{})}),Object(B.jsxs)(U.c,{element:Object(B.jsx)(le,{}),children:[Object(B.jsx)(U.c,{exact:!0,path:"/register",element:Object(B.jsx)(r.Suspense,{fallback:Object(B.jsx)(se.a,{}),children:Object(B.jsx)(Oe,{})})}),Object(B.jsx)(U.c,{exact:!0,path:"/sing_in",element:Object(B.jsx)(r.Suspense,{fallback:Object(B.jsx)(se.a,{}),children:Object(B.jsx)(pe,{})})}),Object(B.jsx)(U.c,{path:"*",element:Object(B.jsx)(r.Suspense,{fallback:Object(B.jsx)(se.a,{}),children:Object(B.jsx)(ge,{})})})]}),Object(B.jsx)(U.c,{element:Object(B.jsx)(de,{}),children:Object(B.jsx)(U.c,{path:"/phonebook",element:Object(B.jsx)(r.Suspense,{fallback:Object(B.jsx)(se.a,{}),children:Object(B.jsx)(he,{})})})})]})]})]})};n(109);o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(u.a,{store:S,children:Object(B.jsx)(s.a,{loading:null,persistor:T,children:Object(B.jsx)(i.a,{children:Object(B.jsx)(me,{})})})})}),document.getElementById("root"))},14:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return s})),n.d(t,"logIn",(function(){return d})),n.d(t,"logOut",(function(){return l})),n.d(t,"fetchUser",(function(){return j})),n.d(t,"token",(function(){return i}));var r=n(11),a=n(19),c=n(8),o=n(21),u=n.n(o);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var i={set:function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},unset:function(){u.a.defaults.headers.common.Authorization=""}},s=Object(c.c)("auth/register",function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:return c=e.sent,o=c.data,i.set(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(c.c)("auth/logIn",function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:return c=e.sent,o=c.data,i.set(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(c.c)("auth/logout",function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/logout");case 4:i.unset(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",a());case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(c.c)("auth/fetchUser",function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c,o,s,d,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState,c=n.rejectWithValue,o=a(),s=o.auth.token){e.next=5;break}return e.abrupt("return",c());case 5:return i.set(s),e.prev=6,e.next=9,u.a.get("/users/current");case 9:return d=e.sent,l=d.data,e.abrupt("return",l);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",c());case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var r={};n.r(r),n.d(r,"getIsLoggedIn",(function(){return c})),n.d(r,"getUserName",(function(){return o})),n.d(r,"getToken",(function(){return u})),n.d(r,"loadingFetchSelector",(function(){return i}));var a=n(14),c=function(e){return e.auth.isLoggedIn},o=function(e){return e.auth.user.name},u=function(e){return e.auth.token},i=function(e){return e.auth.fetchLoading}},24:function(e,t,n){e.exports={container:"UserMenu_container__GgYhE",itemName:"UserMenu_itemName__2Q1OT",span:"UserMenu_span__tkpOe",spanOut:"UserMenu_spanOut__uUXcO",btnText:"UserMenu_btnText__2CrFc",btn:"UserMenu_btn__2H8J6"}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(27),a=n(74),c=n.n(a),o=n(42),u=n.n(o),i=n(1),s=document.querySelector("#loader");var d=function(e){var t=e.loading;return Object(r.createPortal)(Object(i.jsx)("div",{className:u.a.wrapLoader,children:Object(i.jsx)("div",{className:u.a.modal,children:Object(i.jsx)(c.a,{height:15,width:5,radius:2,margin:2,color:"#7814a0",loading:t,size:80})})}),s)}},30:function(e,t,n){e.exports={NavItem:"NavItem_NavItem__-kKZJ",iconWrapper:"NavItem_iconWrapper__3pZEa",itemName:"NavItem_itemName__2FRu6",span:"NavItem_span__2S0GZ",NavItemActive:"NavItem_NavItemActive__1qHpU"}},42:function(e,t,n){e.exports={wrapLoader:"Loader_wrapLoader__S6GqG",modal:"Loader_modal__3WOv5"}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8),a=Object(r.b)("contacts/filter")},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(11),a=n(19),c=n(8),o=n(22),u="https://connections-api.herokuapp.com",i="contacts",s=function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,c=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,fetch("".concat(u,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.ok?a.json():Promise.reject(new Error(a.statusText)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t){var n=e.id,r=e.name,a=e.number,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u={name:r,number:a},d=Object(o.a)({method:"PATCH",body:JSON.stringify(u),headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t)}},c);return s("".concat(i,"/").concat(n),d)},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s("".concat(i,"/").concat(e),Object(o.a)({method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t)}},n))},j=Object(c.c)("contacts/getContactsStatus",(function(e){return function(e){var t={method:"GET",headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(e)}};return s(i,t)}(e)})),f=Object(c.c)("contact/addContactStatus",(function(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(o.a)({method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t)}},n);return s(i,r)}(e,t.getState().auth.token)})),b=Object(c.c)("contact/editContactStatus",function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState(),c=a.auth.token,e.abrupt("return",d(t,c));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(c.c)("contact/deleteContactStatus",function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n){var a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState(),c=a.auth.token,e.next=4,l(t,c);case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){return e.contacts.data.item},a=function(e){return e.contacts.data.loading},c=function(e){return e.contacts.filter}},65:function(e,t,n){e.exports={container:"AuthNav_container__2sSIa"}},68:function(e,t,n){e.exports={container:"Navigation_container___wsPy",navContainer:"Navigation_navContainer__3ZhiP",itemName:"Navigation_itemName__2C2BR"}},73:function(e,t,n){e.exports={container:"AppBar_container__3uZgi",navContainer:"AppBar_navContainer__2O5n4",itemName:"AppBar_itemName__2q6TW"}},75:function(e,t,n){e.exports={app:"App_app__1IksY"}}},[[111,2,3]]]);
//# sourceMappingURL=main.6dc6fb5e.chunk.js.map