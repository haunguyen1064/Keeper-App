(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{35:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),r=n.n(l),u=n(31),o=n(10),i=n(26),m=n.n(i);var f=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(m.a,null),"Keeper"))};var E=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright \u24d2 ",e," by H\u1eadu Nguy\u1ec5n"))},s=n(28),b=n.n(s);var p=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(b.a,null)))},v=n(19),d=n(24),j=n(30),O=n.n(j),h=n(61),g=n(62),k=n(29);var C=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),l=n[0],r=n[1],u=Object(a.useState)(!0),i=Object(o.a)(u,2),m=i[0],f=i[1],E=Object(a.useState)(!1),s=Object(o.a)(E,2),b=s[0],p=s[1],j=Object(a.useState)({title:"",content:""}),C=Object(o.a)(j,2),y=C[0],S=C[1];Object(a.useEffect)((function(){f(!1)}),[]);var w=Object(k.a)((function(){b&&(r(!1),f(!1))}));function D(e){var t=e.target,n=t.name,a=t.value;"content"===n&&(f(!1),p(!1),""===a&&p(!0)),S((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(v.a)({},n,a))}))}return c.a.createElement("div",null,c.a.createElement("form",{className:"create-note",ref:w},l&&c.a.createElement("input",{name:"title",onChange:D,value:y.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onClick:function(){p(!0),r(!0)},onChange:D,value:y.content,placeholder:"Take a note...",rows:l?3:1}),c.a.createElement(g.a,{in:l},c.a.createElement(h.a,{onClick:function(t){y.content?(e.onAdd(y),S({title:"",content:""}),p(!0),t.preventDefault()):f(!0)}},c.a.createElement(O.a,null))),m&&l?c.a.createElement("p",null," Please enter a note "):null))};var y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function r(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(C,{onAdd:function(e){l((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return c.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:r})})),c.a.createElement(E,null))};r.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.489701e6.chunk.js.map