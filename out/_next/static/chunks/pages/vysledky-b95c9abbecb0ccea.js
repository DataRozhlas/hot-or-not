(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{6136:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vysledky",function(){return e(9533)}])},292:function(t,n,e){"use strict";var a=e(5893),r=(e(7294),e(3695)),i=e.n(r);n.Z=function(t){return(0,a.jsx)("header",{className:i().container,children:(0,a.jsx)("h1",{className:i().small,children:t.text})})}},2665:function(t,n,e){"use strict";e.d(n,{Z:function(){return h}});var a=e(5893),r=(e(7294),e(5615)),i=e.n(r),c=e(5675),s=e.n(c),o=e(1664),u=e.n(o),d=function(t){var n=t.src;t.width,t.quality;return"https://data.irozhlas.cz/hot-or-not/out".concat(n)},l=function(t){return(0,a.jsx)(u(),{href:"/".concat(t.candidate.key),children:(0,a.jsxs)("div",{className:i().container,children:[(0,a.jsx)(s(),{loader:d,className:i().image,src:"/img/".concat(t.candidate.key,".jpg"),alt:t.candidate.name,width:75,height:75}),(0,a.jsxs)("div",{className:i().textbox,children:[(0,a.jsx)("p",{className:i().note,children:(0,a.jsxs)("strong",{children:["".concat(t.index,". ").concat(t.dativ?t.candidate.dativ:t.candidate.name)," "]})}),(0,a.jsx)("p",{className:i().note,children:"".concat(t.dativ?100-t.candidateResults.pct:t.candidateResults.pct," % v\xedt\u011bzstv\xed z  ").concat(t.candidateResults.w+t.candidateResults.l," duel\u016f")})]})]})})},_=e(9757),f=e.n(_);function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=function(t){var n=t.results.map((function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),a.forEach((function(n){m(t,n,e[n])}))}return t}({},t,{pct:Math.round(t.w/(t.w+t.l)*100)})})).sort((function(n,e){return t.dativ?n.pct-e.pct:e.pct-n.pct}));return(0,a.jsxs)("div",{className:f().container,children:[!t.dativ&&(0,a.jsx)("p",{children:"Kliknut\xedm na kandid\xe1ta zobraz\xedte detaily"}),n.map((function(n,e){var r=t.data.filter((function(t){return t.id===n.id}))[0];return(0,a.jsx)(l,{index:e+1,candidateResults:n,candidate:r,dativ:t.dativ},n.id)}))]})}},9533:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return l},default:function(){return _}});var a=e(5893),r=e(7294),i=e(7160),c=e.n(i),s=e(292),o=e(2665),u=e(1664),d=e.n(u),l=!0;function _(t){var n=(0,r.useState)([]),e=n[0],i=n[1];return(0,r.useEffect)((function(){fetch("https://data.irozhlas.cz/hot-or-not-results/prez-stats.json").then((function(t){return t.json()})).then((function(t){i(t)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{text:"Nej\xfasp\u011b\u0161n\u011bj\u0161\xed kandid\xe1ti"}),(0,a.jsx)(o.Z,{results:e,dativ:!1,data:t.data}),(0,a.jsx)("div",{className:c().buttonContainer,children:(0,a.jsx)(d(),{href:"/",children:(0,a.jsx)("button",{className:c().button,children:"Zp\u011bt"})})})]})}},3695:function(t){t.exports={container:"Header_container__B90GU",small:"Header_small__qdcg2"}},7160:function(t){t.exports={button:"Home_button__Zs7A2",buttonContainer:"Home_buttonContainer__IqHjU",candidateProfileContainer:"Home_candidateProfileContainer__Hxuue",image:"Home_image__yn5pu",candidateInfo:"Home_candidateInfo__Fc_Tj",resultsContainer:"Home_resultsContainer___mOqn",subtitle:"Home_subtitle__j4GMd"}},5615:function(t){t.exports={container:"ResultsItem_container__yO8Dt",image:"ResultsItem_image__En_PV",textbox:"ResultsItem_textbox__0cK3b",note:"ResultsItem_note__3yePV"}},9757:function(t){t.exports={container:"ResultsPanel_container__FznZn"}}},function(t){t.O(0,[61,774,888,179],(function(){return n=6136,t(t.s=n);var n}));var n=t.O();_N_E=n}]);