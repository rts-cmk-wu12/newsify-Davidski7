(()=>{var e={230:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var o=n(601),r=n.n(o),a=n(314),s=n.n(a)()(r());s.push([e.id,"body{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4}header{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:#fff;border-bottom:1px solid #ddd}header .logo{font-size:24px;font-weight:bold;color:#333;display:flex}header .logo img{width:19px;height:26.98px}header .search-bar{width:60%;padding:8px;border:1px solid #ddd;border-radius:4px}img{width:19px;height:26.98px}main{padding:20px}main .category-section{margin-bottom:20px;border-radius:8px}main .category-section .category-header{display:flex;align-items:center;padding:10px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd}main .category-section .category-header h2{font-size:18px;margin:0;color:#333;display:flex;align-items:center}main .category-section .category-header h2 img{width:19px;height:26.98px;margin-right:5px}main .category-section .category-header .toggle-button{margin-left:auto;background:none;border:none;font-size:18px;cursor:pointer;color:#007bff}main .category-section .category-header .toggle-button:hover{color:#0056b3}main .category-section .news-list{list-style:none;margin:0;padding:0}main .category-section .news-list .news-item{padding:10px 0;border-bottom:1px solid #ddd;background:none;color:#333}main .category-section .news-list .news-item a{text-decoration:none;color:#333;font-size:16px}main .category-section .news-list .news-item a:hover{color:#007bff}main .category-section .news-list .news-item:last-child{border-bottom:none}footer{position:fixed;bottom:0;width:393px;height:90px;background-color:#fff;border-top:1px solid #ddd;display:flex;justify-content:space-around;padding:10px 0}footer button{background:none;border:none;font-size:14px;color:#333;cursor:pointer}footer button:hover{color:#007bff}body{font-family:Arial,sans-serif;background-color:#f4f4f4;width:393px;height:852px;margin:0 auto}",""]);const i=s},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},361:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var o=n(72),r=n.n(o),a=n(825),s=n.n(a),i=n(659),c=n.n(i),l=n(56),d=n.n(l),u=n(540),p=n.n(u),f=n(113),g=n.n(f),m=n(230),y={};y.styleTagTransform=g(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=p(),r()(m.A,y);const h=m.A&&m.A.locals?m.A.locals:void 0},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var g=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}async function o(e){try{const t=await fetch(`https://api.nytimes.com/svc/topstories/v2/${e}.json?api-key=BPr1RsV6kGYlgT7Asq5GJodrZtkFbKUV`);return t.ok?(await t.json()).results:(console.error(`Fejl ved API-kald: ${t.status} - ${t.statusText}`),[])}catch(e){return console.error("Fetch fejlede:",e),[]}}function r(e){const t=e.currentTarget.closest(".category-section").querySelector(".news-list");t?"block"===t.style.display?(t.style.display="none",e.currentTarget.textContent="▶"):(t.style.display="block",e.currentTarget.textContent="▼"):console.error("Nyhedslisten blev ikke fundet.")}function a(e,t){const n=document.querySelector("main"),o=document.createElement("section");o.className="category-section",o.innerHTML=`\n        <div class="category-header">\n            <img src="images/newsify_logo1.png" alt="Newsify Logo">\n            <h2>${e}</h2>\n            <button class="toggle-button">▶</button>\n        </div>\n        <ul class="news-list" style="display: none;">\n            ${t.map((e=>`\n                <li class="news-item">\n                    <a href="${e.url}" target="_blank">\n                        ${e.title}\n                    </a>\n                </li>`)).join("")}\n        </ul>\n    `,o.querySelector(".toggle-button").addEventListener("click",r),o.querySelectorAll(".news-item").forEach((e=>function(e){let t=0,n=0,o=!1;e.addEventListener("touchstart",(n=>{t=n.touches[0].clientX,o=!0,e.style.transition="none"})),e.addEventListener("touchmove",(r=>{o&&(n=r.touches[0].clientX-t,e.style.transform=`translateX(${n}px)`)})),e.addEventListener("touchend",(()=>{o=!1,e.style.transition="transform 0.3s ease",n<-100?function(e){const t={title:e.querySelector("a").textContent,url:e.querySelector("a").href};let n=JSON.parse(localStorage.getItem("archivedNews"))||[];n.push(t),localStorage.setItem("archivedNews",JSON.stringify(n)),e.style.transform="translateX(-100%)",setTimeout((()=>{e.remove()}),300)}(e):e.style.transform="translateX(0)"}))}(e))),n.appendChild(o)}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(361),async function(){const e=["arts","movies","sports"],t={arts:"Arts",movies:"Movies",sports:"Sports"};for(const n of e){const e=await o(n);a(t[n],e)}}()})();