(this["webpackJsonpopen-flags-react-front"]=this["webpackJsonpopen-flags-react-front"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),i=n.n(r),s=(n(53),n(54),n(75)),o=n(12),l=n.n(o),u=n(15),j=n(17),d=n(90),b=n(91),h=n(92),f=n(93),x=n(77),p=n(94),O=n(95),E=n(96),R=n(81),A=n(82),g=n(83),I=n(26),m=n(47),w=n(11),v=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(21),F=n(29),N=n(45),L=n(79),X=n(97),W=n(98),B=n(80),y=n(84),V=n(85),G=n(86),C=n(87),T=n(88),P=n(89),Y=n(76),q=n(78),z=(n(56),n(4)),M=[],Q=function(e){var t,n,a=Object(c.useState)([]),r=Object(j.a)(a,2),i=r[0],o=r[1],d=Object(c.useState)([]),b=Object(j.a)(d,2),h=b[0],f=b[1],p=Object(c.useState)(!1),O=Object(j.a)(p,2),E=O[0],m=O[1],w=Object(c.useState)(!0),Q=Object(j.a)(w,2),U=Q[0],Z=Q[1],K=Object(c.useState)("ninjaVanish"),D=Object(j.a)(K,2),S=D[0],J=D[1];Object(c.useEffect)((function(){v("https://openflags.net/all").then(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.allFlags;case 2:n=e.sent,o(n),c=new Set,n.forEach((function(e){c.add(e.country)})),a=Object(F.a)(c),f(a),J("ninjaVanish");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var H=function(e){var t=e.target.name;if(M.includes(t)){e.target.checked=!1;var n=M.indexOf(t);return M.splice(n,1),console.log(M),void v("https://openflags.net/all").then(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.allFlags;case 2:for(n=e.sent,c=[],a=function(e){var t=M[e],a=n.filter((function(e){return e.country===t}));c.push.apply(c,Object(F.a)(a))},r=0;r<M.length;r++)a(r);console.log(M),o(c),null==M[0]&&v("https://openflags.net/all").then(function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.allFlags;case 2:return n=e.sent,o(n),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}e.target.checked=!0,M.push(e.target.name),console.log(M),v("https://openflags.net/all").then(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.allFlags;case 2:for(n=e.sent,c=[],a=function(e){var t=M[e],a=n.filter((function(e){return e.country===t}));c.push.apply(c,Object(F.a)(a))},r=0;r<M.length;r++)a(r);console.log(M),o(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(z.jsxs)(s.a,{className:"mt-5",fluid:!0,children:[Object(z.jsx)(Y.a,{className:"mt-5",children:"^"}),Object(z.jsx)("br",{}),Object(z.jsx)(Y.a,{className:"pt-2 dropButt",children:Object(z.jsx)(N.a,{size:"lg",onClick:function(){!0===U&&(J("ninja"),console.log("okkkkkkkkkkkkkkkkk"),Z(!1)),!1===U&&(console.log("false okkkkkkkkkkkkkkkkk"),J("ninjaVanish"),Z(!0))},children:"^"})}),Object(z.jsx)(x.a,{className:S,children:Object(z.jsxs)(Y.a,(n={className:S},Object(k.a)(n,"className","mt-5"),Object(k.a)(n,"children",[Object(z.jsx)(q.a,{children:Object(z.jsxs)(L.a,(t={className:S},Object(k.a)(t,"className","ml-5"),Object(k.a)(t,"isOpen",E),Object(k.a)(t,"toggle",(function(){return m((function(e){return!e}))})),Object(k.a)(t,"children",[Object(z.jsx)(X.a,{caret:!0,children:"Sort Flags By"}),Object(z.jsxs)(W.a,{children:[Object(z.jsx)(B.a,{header:!0,children:"Sort By"}),Object(z.jsx)(B.a,{onClick:function(){o(i.reverse())},children:"Reverse A ~ Z"})]})]),t))}),Object(z.jsx)(q.a,{children:Object(z.jsx)(R.a,{children:h.map((function(e){return Object(z.jsxs)(A.a,{check:!0,inline:!0,children:[Object(z.jsx)(g.a,{id:"InlineCheckboxes-checkbox-1",name:e,onChange:H,type:"checkbox"}),Object(z.jsx)(y.a,{for:"InlineCheckboxes-checkbox-1",check:!0,children:e})]})}))})})]),n))}),Object(z.jsx)(Y.a,{xl:"3",lg:"2",md:"1",xs:"1",fluid:!0,children:i.map((function(e){return Object(z.jsx)(q.a,{className:"mt-5",children:Object(z.jsxs)(V.a,{children:[Object(z.jsx)("a",{href:"https://openflags.net/"+e.country+"/region/"+e.region+".svg",children:Object(z.jsx)(I.LazyLoadImage,{id:"pics",placeholderSrc:e.directLink,alt:"",threshold:"1",effect:"blur",delayMethod:"debounce",src:e.directLink,width:"100%",height:"300vm",opacity:"50"})}),Object(z.jsxs)(G.a,{children:[Object(z.jsxs)(C.a,{tag:"h5",children:["Region:"," ",e.region.charAt(0).toUpperCase()+e.region.slice(1)]}),Object(z.jsxs)(T.a,{tag:"h6",className:"mb-2 text-muted",children:["Country:"," ",e.country.charAt(0).toUpperCase()+e.country.slice(1)]}),Object(z.jsxs)(P.a,{children:["ISO 3166 Code(s): ",e.ISO3166]}),Object(z.jsx)(q.a,{children:Object(z.jsx)(N.a,{href:"https://openflags.net/"+e.country+"/region/"+e.region+".svg",className:"button mt-3 mb-3 purple-gradient",color:"other",size:"lg",block:!0,children:"Direct Image Link"})}),Object(z.jsx)(q.a,{children:Object(z.jsx)(N.a,{href:"https://openflags.net/api/json/flagInfo/"+e.country+"/"+e.region,className:"button mt-3 mb-3",color:"dinus",size:"lg",block:!0,children:"JSON Link"})})]})]})})}))})]})},U=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),s=Object(j.a)(i,2),o=s[0],k=s[1];Object(c.useEffect)((function(){v("https://openflags.net/rando").then(function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,console.log(n),k(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(z.jsxs)(m.a,{children:[Object(z.jsx)("div",{children:Object(z.jsxs)(d.a,{light:!0,expand:"md",className:"fixed-top nav",children:[Object(z.jsx)(I.LazyLoadImage,{id:"pics",placeholderSrc:"data:image/jpeg;base64,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REWURERY1a0RERZRERFwroaOl46LNK1oiIixQQ6eLRp9iz3elX5UREXNcUREWfmRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf//Z",placeholder:o,alt:o,effect:"blur",src:o,height:"55px",width:"100px"})," ",Object(z.jsx)("a",{href:"/",children:Object(z.jsx)(b.a,{className:"ml-4 brand",href:"/open-flags-react",children:Object(z.jsx)("p",{children:"Open Flags API"})})}),Object(z.jsx)(h.a,{onClick:function(){return r(!a)}}),Object(z.jsxs)(f.a,{isOpen:a,navbar:!0,children:[Object(z.jsxs)(x.a,{className:"mr-auto",navbar:!0,children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(O.a,{href:"/open-flags-react",children:"Home"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(O.a,{href:"/docs",children:"Docs"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(O.a,{href:"/faqs",children:"FAQs"})})]}),Object(z.jsx)(E.a,{children:Object(z.jsx)(R.a,{children:Object(z.jsx)(A.a,{children:Object(z.jsx)(g.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"Search for flags"})})})})]})]})}),Object(z.jsx)("div",{children:Object(z.jsxs)(w.c,{children:[Object(z.jsx)(w.a,{exact:!0,path:"/open-flags-react",children:Object(z.jsx)(Q,{})}),"s        "]})})]})};var Z=function(){return Object(z.jsx)(s.a,{fluid:!0,children:Object(z.jsx)(U,{})})},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(72),n(73);i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(Z,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/open-flags-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/open-flags-react","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(t,e)}))}}(),S()}},[[74,1,2]]]);
//# sourceMappingURL=main.78cabefd.chunk.js.map