(()=>{var e={365:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"body{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f8f9fa}header{background-color:#57a957;color:#fff;padding:15px;text-align:center;font-size:1.5rem}main{padding:20px}main #archive-list{list-style:none;padding:0}main #archive-list .archive-item{display:flex;justify-content:space-between;align-items:center;background-color:#fff;margin-bottom:10px;padding:15px;box-shadow:0px 2px 4px rgba(0,0,0,.1);border-radius:5px}main #archive-list .archive-item .news-content{flex-grow:1}main #archive-list .archive-item .news-content a{text-decoration:none;color:#333;font-weight:bold}main #archive-list .archive-item .news-content a:hover{color:#57a957}main #archive-list .archive-item .delete-button{background-color:#ff4d4d;color:#fff;border:none;padding:5px 10px;font-size:1rem;cursor:pointer;border-radius:5px}main #archive-list .archive-item .delete-button:hover{background-color:#d11a2a}footer{position:fixed;bottom:0;width:393px;height:90px;background-color:#fff;border-top:1px solid #ddd;display:flex;justify-content:space-around;padding:10px 0}footer button{background:none;border:none;font-size:14px;color:#333;cursor:pointer}footer button:hover{color:#007bff}body{font-family:Arial,sans-serif;background-color:#f4f4f4;width:393px;height:852px;margin:0 auto}",""]);const c=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},920:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),d=n(56),l=n.n(d),u=n(540),f=n.n(u),p=n(113),v=n.n(p),m=n(365),h={};h.styleTagTransform=v(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(m.A,h);const g=m.A&&m.A.locals?m.A.locals:void 0},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}function r(){const e=document.getElementById("archive-list"),t=JSON.parse(localStorage.getItem("archivedNews"))||[];0!==t.length?(e.innerHTML="",t.forEach(((t,n)=>{const r=document.createElement("li");r.className="archive-item",r.innerHTML=`\n            <div class="news-content">\n                <a href="${t.url}" target="_blank">${t.title}</a>\n            </div>\n            <button class="delete-button" data-index="${n}">🗑️</button>\n        `,e.appendChild(r)})),document.querySelectorAll(".delete-button").forEach((e=>{e.addEventListener("click",o)}))):e.innerHTML="<p>Ingen arkiverede nyheder endnu.</p>"}function o(e){const t=e.target.getAttribute("data-index"),n=JSON.parse(localStorage.getItem("archivedNews"))||[];n.splice(t,1),localStorage.setItem("archivedNews",JSON.stringify(n)),r()}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(920),r()})();