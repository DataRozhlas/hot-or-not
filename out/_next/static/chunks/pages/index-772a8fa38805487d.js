(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7487)}])},292:function(t,e,n){"use strict";var r=n(5893),a=(n(7294),n(3695)),i=n.n(a);e.Z=function(t){return(0,r.jsx)("header",{className:i().container,children:(0,r.jsx)("h1",{className:i().small,children:t.text})})}},7487:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return I},default:function(){return C}});var r=n(5893),a=n(7294),i=n(1664),o=n.n(i),s=n(292),c=n(5675),l=n.n(c),u=n(8254),d=n.n(u),_=function(t){var e=t.src;t.width,t.quality;return"https://data.irozhlas.cz/hot-or-not/out".concat(e,"-300.jpg")},m=function(t){return(0,r.jsxs)("button",{className:d().container,value:t.candidate.id,onPointerDown:function(){t.buttonClickHandler(t.candidate)},children:[(0,r.jsx)("div",{className:d()["image-wrapper"],children:(0,r.jsx)(l(),{loader:_,className:d().image,src:"/img/".concat(t.candidate.key),alt:t.candidate.name,width:300,height:300})}),(0,r.jsx)("h2",{children:t.candidate.name})]})},f=n(9655),h=n.n(f);function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(t,e){console.log(e);var n,r,a=e.map((function(t){return t.id}));do{n=t[Math.floor(Math.random()*t.length)]}while(a.includes(n.id));do{r=t[Math.floor(Math.random()*t.length)]}while(n.id===r.id||a.includes(r.id));return[n,r]},j=function(t){var e=(0,a.useState)([t.data[0],t.data[1]]),n=e[0],i=e[1],o=function(e){var r=new XMLHttpRequest;r.open("POST","https://2gaah2e3wd66vqvlgcocgzzb4q0pnbjj.lambda-url.eu-central-1.on.aws/"),r.send(JSON.stringify({appID:"prez",winnerID:e.id,loserID:n.filter((function(t){return t.id!==e.id}))[0].id,url:document.URL,ref:document.referrer})),t.setHistory((function(t){return p(t).concat([[n[0].id,n[1].id,e.id]])})),i((function(e){return g(t.data,e)}))};return(0,a.useEffect)((function(){i((function(e){return g(t.data,e)}))}),[t.data]),(0,r.jsxs)("main",{className:h().container,children:[(0,r.jsx)(m,{candidate:n[0],buttonClickHandler:o}),(0,r.jsx)(m,{candidate:n[1],buttonClickHandler:o})]})},b=n(7744),x=n.n(b),v=function(t){var e=t.item[2],n=t.details.filter((function(t){return t.id===e}))[0],a=t.item[0]===t.item[2]?t.item[1]:t.item[0],i=t.details.filter((function(t){return t.id===a}))[0],o=t.results.filter((function(t){return t.id===e}))[0].c.filter((function(t){return t.id===a}))[0],s=Math.round(o.l/(o.l+o.w)*100);return(0,r.jsxs)("div",{className:x().container,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:n.name}),(0,r.jsxs)("span",{className:x().grey,children:[" \xd7 ",i.name]})]}),!Number.isNaN(s)&&(0,r.jsx)("p",{className:x().note,children:(0,r.jsxs)("small",{children:[s," % \u010dten\xe1\u0159\u016f p\u0159ed v\xe1mi se rozhodlo stejn\u011b"]})})]})},H=n(7275),N=n.n(H),w=function(t){var e=t.history.slice().reverse();return(0,r.jsxs)("div",{className:N().container,children:[(0,r.jsx)("h3",{className:N().subtitle,children:0===t.history.length?"":"U\u017e jste si vybrali:"}),(0,r.jsx)("div",{className:N().historyBox,children:e.map((function(e,n){var a=t.data.filter((function(t){return t.id===e[0]||t.id===e[1]}));return(0,r.jsx)(v,{item:e,details:a,results:t.results},n)}))})]})},S=n(7160),z=n.n(S),I=!0;function C(t){var e=(0,a.useState)([]),n=e[0],i=e[1],c=(0,a.useState)([]),l=c[0],u=c[1];(0,a.useEffect)((function(){fetch("https://datarozhlas.s3.eu-central-1.amazonaws.com/hot-or-not-results/prez-stats.json").then((function(t){return t.json()})).then((function(t){u(t)}))}),[]);var d=n.length<4?"grey".concat(20*(n.length+1)):"grey100";return t.data.length>0&&(0,r.jsxs)("div",{className:z().container,children:[(0,r.jsx)(s.Z,{text:"Kdo by byl podle v\xe1s lep\u0161\xed prezident?"}),(0,r.jsx)("h3",{className:z().subtitle,children:n.length>0?"Vyberte z dal\u0161\xed dvojice":"Vyberte si jednoho z kandid\xe1t\u016f"}),(0,r.jsx)(j,{data:t.data,setHistory:i}),(0,r.jsx)(w,{data:t.data,history:n,results:l}),(0,r.jsx)("div",{className:z().buttonContainer,children:(0,r.jsx)(o(),{href:"/vysledky",children:(0,r.jsxs)("button",{className:"".concat(z().button," ").concat(z()[d]),children:["Zobrazit v\xfdsledky hlasov\xe1n\xed",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:z().buttonSmall,children:"\u010dten\xe1\u0159\u016f iROZHLAS.cz"})]})})})]})}},3695:function(t){t.exports={container:"Header_container__B90GU",small:"Header_small__qdcg2"}},7744:function(t){t.exports={container:"HistoryItem_container__xkDPh",note:"HistoryItem_note__rsAju",grey:"HistoryItem_grey__psdBW"}},7275:function(t){t.exports={container:"HistoryPanel_container__zmd_u",subtitle:"HistoryPanel_subtitle__2R9a_",historyBox:"HistoryPanel_historyBox__0Ala8"}},7160:function(t){t.exports={container:"Home_container__bCOhY",button:"Home_button__Zs7A2",subtitle:"Home_subtitle__j4GMd",subtitleDetail:"Home_subtitleDetail__vN3DH",buttonSmall:"Home_buttonSmall__1ulD9",grey20:"Home_grey20__d_EhO",grey40:"Home_grey40__Yj06o",grey60:"Home_grey60___8Rq9",grey80:"Home_grey80__p3cw6",grey100:"Home_grey100__LKXUv",buttonContainer:"Home_buttonContainer__IqHjU",candidateProfileContainer:"Home_candidateProfileContainer__Hxuue",image:"Home_image__yn5pu",candidateInfo:"Home_candidateInfo__Fc_Tj",resultsContainer:"Home_resultsContainer___mOqn"}},8254:function(t){t.exports={container:"Item_container__M2MwR","image-wrapper":"Item_image-wrapper__QorfQ",image:"Item_image__9cZPy"}},9655:function(t){t.exports={container:"MainPanel_container__udomg"}}},function(t){t.O(0,[774,888,179],(function(){return e=5557,t(t.s=e);var e}));var e=t.O();_N_E=e}]);