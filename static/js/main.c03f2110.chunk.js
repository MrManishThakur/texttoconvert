(this.webpackJsonptexttoconvert=this.webpackJsonptexttoconvert||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),l=(n(9),n(2)),s=(n(10),n(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(s.jsx)("h1",{children:e.heading}),Object(s.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Textarea:"}),Object(s.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"white"===e.mode,Color:"dark"===e.mode?"white":"#042743"},id:"Mytext",rows:"6"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary my-2",onClick:function(){var e=c.toUpperCase();r(e)},children:"ConvertToUpper"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=c.toLowerCase();r(e)},children:"ConvertToLower"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){r("")},children:"ClearText"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=document.getElementById("Mytext");e.select(),navigator.clipboard.writeText(e.value)},children:"CopyText"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(s.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(s.jsx)("h1",{children:"Your Text Summary"}),Object(s.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," ","words and ",c.length," characters"]}),Object(s.jsxs)("p",{children:["Approximate ",.008*c.split(" ").length," minutes will take time to read this texts"]}),Object(s.jsx)("h2",{children:"Text Preview"}),Object(s.jsx)("p",{children:c})]})]})}var d=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextToConvert",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#042743"):(c("light"),document.body.style.backgroundColor="white")}}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(b,{heading:"Enter Your Text Below",mode:n})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.c03f2110.chunk.js.map