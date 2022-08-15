(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{260:function(t,e,n){t.exports={wrapperInput:"Input_wrapperInput__1IQKf",labelTitle:"Input_labelTitle__1kSvN",input:"Input_input__2lBHS"}},261:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",btnAdd:"ContactForm_btnAdd__1TJSN"}},262:function(t,e,n){t.exports={item:"ItemContact_item__13Q_8",text:"ItemContact_text__17uh3",textContainer:"ItemContact_textContainer__1XZg2",btnDel:"ItemContact_btnDel__2IseJ"}},266:function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},267:function(t,e,n){t.exports={backdrop:"Modal_backdrop__3v0tS",appear:"Modal_appear__1mmsb",modal:"Modal_modal__3q2YW",animatetop:"Modal_animatetop__2L83F","slide-in":"Modal_slide-in__1o3r5",btnClose:"Modal_btnClose__3_HdB"}},269:function(t,e,n){t.exports={common:"EditCard_common__1FLeA",container:"EditCard_container__3i2V7 EditCard_common__1FLeA",label:"EditCard_label__2QmLq EditCard_common__1FLeA",input:"EditCard_input__1nRs3",btn:"EditCard_btn__200iQ",disabled:"EditCard_disabled__1ai0G EditCard_btn__200iQ"}},283:function(t,e,n){t.exports={container:"Contacts_container__2L0E8"}},295:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return Y}));var a=n(13),c=n(0),o=n(10),r=n(22),s=n(125),i=n(288),u=n(260),l=n.n(u),b=n(1),j=["label"],d=function(t){var e=t.label,n=Object(s.a)(t,j),a=Object(c.useRef)(Object(i.a)()).current;return Object(b.jsxs)("div",{className:l.a.wrapperInput,children:[Object(b.jsxs)("label",{className:l.a.labelTitle,htmlFor:a,children:[e,":"]}),Object(b.jsx)("input",Object(r.a)({className:l.a.input,id:a},n))]})},m=n(261),O=n.n(m),f=function(t){var e=t.confirmContact,n=Object(c.useState)(""),o=Object(a.a)(n,2),r=o[0],s=o[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),l=u[0],j=u[1],m=function(t){return t.split(" ").map((function(t){var e=t.charAt(0).toUpperCase(),n=t.substring(1);return"".concat(e).concat(n)})).join(" ")},f=function(){s(""),j("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={name:m(r),number:l};e(n),f()},className:O.a.form,children:[Object(b.jsx)(d,{label:"Name",type:"text",name:"name",onChange:function(t){return s(t.target.value)},value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(b.jsx)(d,{label:"Number",type:"tel",name:"number",onChange:function(t){return j(t.target.value)},value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(b.jsxs)("button",{type:"submit",className:O.a.btnAdd,children:[" ","Add contact"]})]}),Object(b.jsx)("h2",{children:"Contacts"})]})},p=n(264),_=n.n(p),x=n(263),h=n.n(x),C=n(265),v=n.n(C),g=n(262),E=n.n(g),N=function(t){var e=t.onDeleteContact,n=t.onEditContact,a=t.name,c=t.number,o=t.id;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("li",{className:E.a.item,id:o,children:[Object(b.jsxs)("div",{className:E.a.textContainer,children:[Object(b.jsx)(h.a,{}),Object(b.jsxs)("strong",{className:E.a.text,children:[a,": ",c]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:E.a.btnDel,onClick:n,type:"button",children:Object(b.jsx)(_.a,{})}),Object(b.jsx)("button",{className:E.a.btnDel,onClick:e,type:"button",children:Object(b.jsx)(v.a,{})})]})]}),Object(b.jsx)("hr",{})]})},S=n(266),k=n.n(S),w=function(t){var e=t.onDeleteContact,n=t.onEditContact,a=t.openEditModal,c=t.filterContacts;return Object(b.jsx)("ul",{className:k.a.list,children:c&&c.map((function(t){var c=t.id,o=t.name,r=t.number;return Object(b.jsx)(N,{id:c,name:o,number:r,onDeleteContact:function(){return e(c)},onEditContact:function(){return n({id:c,name:o,number:r})},openEditModal:a},c)}))})};var y=function(t){var e=t.filterChangeInput,n=t.value;return Object(b.jsx)(d,{label:"Find contacts by name",type:"text",onChange:function(t){return e(t.target.value)},name:"filter",value:n})},I=n(32),A=n(300),F=n(27),M=n(268),L=n.n(M),D=n(267),T=n.n(D),q=document.querySelector("#modal-root"),J=function(t){var e=t.closeModal,n=t.children;Object(A.a)(!0),Object(c.useEffect)((function(){var t=function(t){"Escape"===t.code&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e]);return Object(F.createPortal)(Object(b.jsx)("div",{onClick:function(t){t.target===t.currentTarget&&e()},className:T.a.backdrop,children:Object(b.jsxs)("div",{className:T.a.modal,children:[Object(b.jsx)("button",{onClick:function(){e()},className:T.a.btnClose,children:Object(b.jsx)(L.a,{})}),n]})}),q)},Q=n(269),z=n.n(Q),P=function(t){var e=t.onSubmit,n=t.activeContact,o=Object(c.useState)(n.id),r=Object(a.a)(o,2),s=r[0],i=(r[1],Object(c.useState)(n.name)),u=Object(a.a)(i,2),l=u[0],j=u[1],d=Object(c.useState)(n.number),m=Object(a.a)(d,2),O=m[0],f=m[1],p=Object(c.useRef)(null);Object(c.useEffect)((function(){p.current.focus()}),[]);var _=function(){j(""),f("")},x=!l||!O;return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({id:s,name:l,number:O}),_()},className:z.a.container,children:[Object(b.jsx)("label",{className:z.a.label,children:Object(b.jsx)("input",{ref:p,className:z.a.input,onChange:function(t){return j(t.target.value)},value:l,type:"text"})}),Object(b.jsx)("label",{className:z.a.label,children:Object(b.jsx)("input",{ref:p,className:z.a.input,onChange:function(t){return f(t.target.value)},value:O,type:"text"})}),Object(b.jsx)("button",{className:x?z.a.disabled:z.a.btn,type:"submit",children:"Save"})]})},Z=n(6),B=n(48),R=n(16),U=n(61),G=n(270),H=(n(282),n(283)),K=n.n(H),V="none",W="edit",X=function(){var t=Object(o.c)(R.b.getToken),e=Object(o.c)(U.c),n=Object(o.c)(U.a),r=Object(o.c)(U.b),s=Object(o.b)(),i=Object(c.useState)(null),u=Object(a.a)(i,2),l=u[0],j=u[1],d=Object(c.useState)(null),m=Object(a.a)(d,2),O=m[0],p=m[1],_=Object(c.useState)(null),x=Object(a.a)(_,2),h=x[0],C=x[1],v=Object(c.useState)(V),g=Object(a.a)(v,2),E=g[0],N=g[1],S=Object(c.useState)(V),k=Object(a.a)(S,2),A=k[0],F=k[1],M=Object(c.useState)(!1),L=Object(a.a)(M,2),D=(L[0],L[1]),T=function(){D(!1),N(V)};Object(c.useEffect)((function(){t&&s(Object(Z.d)(t))}),[s,t]);Object(c.useEffect)((function(){if(l){var e=n.some((function(t){return t.name===l.name}));e&&(G.toast.error("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0437 ".concat(l.name," \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454 :(("),{icon:"\u274c"}),j(null)),e&&t||(s(Object(Z.a)(l)),G.toast.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442  ".concat(l.name," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 :))"),{icon:"\u2705"}),j(null))}}),[n,s,l,t]);Object(c.useEffect)((function(){if(A===W&&O){s(Object(Z.c)(O)),G.toast.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(O.name.toUpperCase()," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d !!")),F(V),p(null),N(V),T()}}),[A,O,s]);var q=Object(c.useMemo)((function(){var t=r.toLowerCase(),e=n&&n.filter((function(e){return e.name.toLowerCase().includes(t)}));return 0===e.length&&""!==r&&(G.toast.info('\u0423\u0441\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u043f\u043e \u0437\u0430\u043f\u0438\u0442\u0443 "'.concat(r.toUpperCase(),'" \u0431\u0443\u043b\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0456 ...\u270b!!')),G.toast.warning("\u041e\u0447\u0438\u0441\u0442\u0456\u0442\u044c \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0442\u0443, \u0449\u043e\u0431 \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u0438 \u0443\u0441\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 :)))")),e}),[n,r]);return Object(c.useEffect)((function(){h&&(console.log(h),s(Object(Z.b)(h)),G.toast.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 :))",{icon:"\u274e"}),C(null))}),[h,s]),Object(b.jsxs)(b.Fragment,{children:[e&&Object(b.jsx)(I.a,{loading:e}),Object(b.jsxs)("div",{className:K.a.container,children:[Object(b.jsx)(f,{confirmContact:function(t){return j(t)}}),n.length>0&&Object(b.jsx)(y,{filterChangeInput:function(t){return s(Object(B.a)(t))},value:r}),!n.length&&!e&&Object(b.jsx)("p",{children:"Please, add contact!"}),n.length?Object(b.jsx)(w,{openEditModal:function(){return D(!0)},onEditContact:function(t){p(t),N(W)},filterContacts:q,onDeleteContact:function(t){return C(t)}}):"",E===W&&Object(b.jsx)(J,{closeModal:T,children:Object(b.jsx)(P,{activeContact:O,onSubmit:function(t){if(t.name===O.name&&t.number===O.number)return N(V),void p(null);F(W),p(t)}})}),Object(b.jsx)(G.ToastContainer,{theme:"dark"})]})]})},Y=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(X,{})})}}}]);
//# sourceMappingURL=5.37289aa2.chunk.js.map