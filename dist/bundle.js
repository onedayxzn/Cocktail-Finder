(()=>{var e={286:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var h=this[s][0];null!=h&&(i[h]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},372:e=>{"use strict";e.exports=function(e){return e[1]}},39:e=>{var t=function(e){"use strict";var t,n=Object.prototype,o=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function h(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var r=t&&t.prototype instanceof g?t:g,a=Object.create(r.prototype),i=new A(o||[]);return a._invoke=function(e,t,n){var o=u;return function(r,a){if(o===p)throw new Error("Generator is already running");if(o===f){if("throw"===r)throw a;return S()}for(n.method=r,n.arg=a;;){var i=n.delegate;if(i){var s=T(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===u)throw o=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var h=c(e,t,n);if("normal"===h.type){if(o=n.done?f:d,h.arg===m)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=f,n.method="throw",n.arg=h.arg)}}}(e,n,i),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u="suspendedStart",d="suspendedYield",p="executing",f="completed",m={};function g(){}function b(){}function y(){}var w={};h(w,a,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(P([])));x&&x!==n&&o.call(x,a)&&(w=x);var E=y.prototype=g.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(r,a,i,s){var h=c(e[r],e,a);if("throw"!==h.type){var l=h.arg,u=l.value;return u&&"object"==typeof u&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(h.arg)}var r;this._invoke=function(e,o){function a(){return new t((function(t,r){n(e,o,t,r)}))}return r=r?r.then(a,a):a()}}function T(e,n){var o=e.iterator[n.method];if(o===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=c(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var a=r.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return b.prototype=y,h(E,"constructor",y),h(y,"constructor",b),b.displayName=h(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,h(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},L(C.prototype),h(C.prototype,i,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var i=new C(l(t,n,o,r),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),h(E,s,"Generator"),h(E,a,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return s.type="throw",s.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var h=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(h&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(h){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;F(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:P(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},705:()=>{class e extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowDOM.innerHTML="\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               background-color: cornflowerblue;\n               color: white;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           h2 {\n               padding: 16px;\n               text-align: center;\n           }\n       </style>\n       <h2>Cocktail Finder</h2>"}}customElements.define("app-bar",e)},231:()=>{class e extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}set cocktail(e){this._cocktail=e,this.render()}render(){this.shadowDOM.innerHTML='\n           <style>\n              * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .fan-art-cocktail {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n              \n               .cocktail-info {\n                   padding: 24px;\n               }\n              \n               .cocktail-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .cocktail-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n\n           </style>\n           <img class="fan-art-cocktail" src="'.concat(this._cocktail.fanArt,'" alt="Fan Art">\n           <div class="cocktail-info">\n               <h2>').concat(this._cocktail.name,"</h2>\n               <p>").concat(this._cocktail.description,"</p>\n           </div>")}}customElements.define("cocktail-item",e)},998:()=>{class e extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}set clickEvent(e){this._clickEvent=e,this.render()}get value(){return this.shadowDOM.querySelector("#searchElement").value}render(){this.shadowDOM.innerHTML='\n       <style>\n       .search-container {\n           max-width: 800px;\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           padding: 16px;\n           border-radius: 5px;\n           display: flex;\n           position: sticky;\n           top: 10px;\n           background-color: white;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid cornflowerblue;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid cornflowerblue;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: cornflowerblue;\n           font-weight: normal;\n       }\n      \n       .search-container > button {\n           width: 23%;\n           cursor: pointer;\n           margin-left: auto;\n           padding: 16px;\n           background-color: cornflowerblue;\n           color: white;\n           border: 0;\n           text-transform: uppercase;\n       }\n      \n       @media screen and (max-width: 550px){\n           .search-container {\n               flex-direction: column;\n               position: static;\n           }\n      \n           .search-container > input {\n               width: 100%;\n               margin-bottom: 12px;\n           }\n      \n           .search-container > button {\n               width: 100%;\n           }\n       }\n       </style>\n       <div id="search-container" class="search-container">\n           <input placeholder="Search cocktail" id="searchElement" type="search">\n           <button id="searchButtonElement" type="submit">Search</button>\n       </div>\n       ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}customElements.define("search-bar",e)},890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(372),r=n.n(o),a=n(286),i=n.n(a)()(r());i.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\ncocktail-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n}",""]);const s=i},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var h=e[s],l=o.base?h[0]+o.base:h[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var d=n(u),p={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=r(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var h=o(e,r),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=h}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(39);var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),h=n.n(s),l=n(216),c=n.n(l),u=n(589),d=n.n(u),p=n(890),f={};f.styleTagTransform=d(),f.setAttributes=h(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,n(705),n(231);class m extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}set cocktails(e){this._cocktails=e,this.render()}render(){this.shadowDOM.innerHTML="",this._cocktails.forEach((e=>{var t=document.createElement("cocktail-item");t.cocktail=e,this.shadowDOM.appendChild(t)}))}renderError(e){this.shadowDOM.innerHTML="\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n           </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(e,"</h2>")}}customElements.define("cocktail-list",m),n(998);const g=[{name:"Arsenal",stadium:"Emirates Stadium",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg",description:"Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football. One of the most successful clubs in English football, they have won 13 First Division and Premier League titles and a joint record 11 FA Cups. Arsenal's success has been particularly consistent: the club has accumulated the second most points in English top-flight football, hold the ongoing record for the longest uninterrupted period in the top flight, and would be placed first in an aggregated league of the entire 20th century. Arsenal is the second side to complete an English top-flight season unbeaten (in the 2003–04 season), playing almost twice as many matches as the previous invincibles Preston North End in the 1888–89 season. Arsenal was founded in 1886 in Woolwich and in 1893 became the first club from the south of England to join the Football League. In 1913, they moved north across the city to Arsenal Stadium in Highbury. In the 1930s, they won five League Championship titles and two FA Cups. After a lean period in the post-war years they won the League and FA Cup Double, in the 1970–71 season, and in the 1990s and first decade of the 21st century, won two more Doubles and reached the 2006 UEFA Champions League Final. Since neighbouring Tottenham Hotspur, the two clubs have had a fierce rivalry, the North London derby. Arsenal have one of the highest incomes and largest fanbases in the world. The club was named the fifth most valuable association football club in the world, valued at £1.3 billion in 2014."},{name:"Aston Villa",stadium:"Villa Park",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/trxryx1421747670.jpg",description:"Aston Villa Football Club (/ˈæstən ˈvɪllə/; also known as Villa, The Villa, The Villans, The Lions) are a professional football club based in Witton, Birmingham, who play in the Premier League, the highest level of English football. Founded in 1874, they have played at their current home ground, Villa Park, since 1897. Aston Villa were founder members of The Football League in 1888. They were also founder members of the Premier League in 1992, and have remained there ever since. The club were floated by the previous owner and chairman Doug Ellis, but in 2006 full control was acquired by American businessman Randy Lerner. Lerner announced on 12 May 2014 that he is selling the club. Aston Villa are among the oldest and the most successful football clubs in the history of English football. Villa won the 1981–82 European Cup, and are thus one of five English clubs to win what is now the UEFA Champions League. They have the fourth highest total of major honours won by an English club, having won the First Division Championship seven times (most recently in the 1980–81 season), the FA Cup seven times (last won in 1957), the Football League Cup five times (last won in 1996) and the UEFA Super Cup in 1982. The club have also produced more England national team players than any other side, currently having produced 72. They have a fierce local rivalry with Birmingham City. The Second City derby between Aston Villa and Birmingham City has been played since 1879. The club's traditional kit colours are claret shirts with sky blue sleeves, white shorts and sky blue socks. Their traditional badge is of a rampant gold lion on a light blue background with the club's motto \"Prepared\" underneath; a modified version of this was adopted in 2007."},{name:"Bournemouth",stadium:"Dean Court",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/wvuypx1469485789.jpg",description:"A.F.C. Bournemouth is a football club playing in the Championship, the second tier in the English football league system. The club plays at Dean Court in Kings Park, Boscombe, Bournemouth, Dorset and have been in existence since 1899. Nicknamed The Cherries, the team traditionally played in red shirts with white sleeves until 1971, when the strip was changed to red and black stripes, similar to that of A.C. Milan. A predominantly red shirt was chosen for the 2004–05 and 2005–06 seasons before announcing a return to the stripes for the 2006–07 season due to fan demand. After narrowly avoiding relegation from the Football League in the 2008–09 season, Bournemouth were promoted to League One at the end of the 2009–10. After making the League One play-off semi-finals in 2010–11 and achieving a mid-table finish in 2011–12, Bournemouth won promotion to the Championship at the end of the 2012–13 season, putting them in the second tier of the league for only the second time in their history. Although the exact date of the club's foundation is not known, there is proof that it was formed in the autumn of 1899 out of the remains of the older Boscombe St. John's Lads’ Institute F.C. The club was originally known as Boscombe F.C.. The first President was Mr. J.C. Nutt. In their first season 1889–90 Boscombe F.C. competed in the Bournemouth and District Junior League. They also played in the Hants Junior Cup. During the first two seasons they played on a football pitch in Castlemain Avenue, Pokesdown. From their third season the team played on a pitch in King's Park. In the season of 1905–06 Boscombe F.C. graduated to senior amateur football. In 1910 the club was granted a long lease upon some wasteland next to Kings Park, as the clubs football ground, by their president Mr. J.E. Cooper-Dean. With their own ground, named Dean Court after the benefactor, the club continued to thrive and dominated the local football scene. Also in 1910 the club signed their first professional football player B. Penton. Around about this time the club obtained their nickname 'The Cherries'. Foremost there are two tales on how the club gained this pet name. First, because of the cherry-red striped shirts that the team played in and, perhaps more plausible, because Dean Court was built adjacent to the Cooper-Dean estate, which encompassed numerous cherry orchards. For the first time during the season of 1913–14 the club competed in the F.A. Cup. The clubs progress was halted in 1914 with the outbreak of the war and Boscombe F.C. returned to the Hampshire league. In 1920 the Third Division was formed and Boscombe were promoted to the Southern League, with moderate success."},{name:"Brighton",stadium:"Falmer Stadium",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/bk2b6j1504211012.jpg",description:'Brighton and Hove Albion Football Club /ˈbraɪtən ən ˈhoʊv/ is an English football club based in the coastal city of Brighton & Hove, East Sussex. It is often referred to just as Brighton. They currently play in the Football League Championship, the second tier of the English football league system. The team is nicknamed the "Seagulls" or "Albion". The team has historically played in blue and white stripes, though this changed to all white briefly in the 1970s and again to plain blue during the club\'s most successful spell in the 1980s. Crystal Palace is considered the club\'s main rival, although the grounds are 40 miles apart. Founded in 1901, Brighton played their early professional football in the Southern League before being elected to the Football League in 1920. The club enjoyed greatest prominence between 1979 and 1983 when they played in the First Division and reached the 1983 FA Cup Final, losing to Manchester United after a replay. They were relegated from the top division in the same season. Mismanagement brought Brighton close to relegation from the Football League to the Conference which they narrowly avoided in 1997 and 1998. A boardroom takeover saved Brighton from liquidation, and following successive promotions they returned to the second tier of English football in 2002 and have played in the second and third tiers ever since.'},{name:"Chelsea",stadium:"Stamford Bridge",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/rppwtt1424447399.jpg",description:"helsea Football Club /ˈtʃɛlsiː/ are a professional football club based in Fulham, London, who play in the Premier League, the highest level of English football. Founded in 1905, the club have spent most of their history in the top tier of English football. The club's home ground is the 41,837-seat Stamford Bridge stadium, where they have played since their establishment.\\r\\n\\r\\nChelsea had their first major success in 1955, winning the league championship, and won various cup competitions during the 1960s, 1970s, 1990s and 2000s. The club have enjoyed their greatest period of success in the past two decades, winning 15 major trophies since 1997. Domestically, Chelsea have won four league titles, seven FA Cups, four League Cups and four FA Community Shields, while in continental competitions they have won two UEFA Cup Winners' Cups, one UEFA Super Cup, one UEFA Europa League and one UEFA Champions League. Chelsea are the only London club to win the UEFA Champions League, and one of four clubs, and the only British club, to have won all three main UEFA club competitions.\\r\\n\\r\\nChelsea's regular kit colours are royal blue shirts and shorts with white socks. The club's crest has been changed several times in attempts to re-brand the club and modernise its image. The current crest, featuring a ceremonial lion rampant regardant holding a staff, is a modification of the one introduced in the early 1950s. The club have sustained the fifth highest average all-time attendance in English football. Their average home gate for the 2012–13 season was 41,462, the sixth highest in the Premier League. Since July 2003, Chelsea have been owned by Russian billionaire Roman Abramovich. In April 2013 they were ranked by Forbes Magazine as the seventh most valuable football club in the world, at £588 million ($901 million), an increase of 18% from the previous year."},{name:"Crystal Palace",staidum:"Selhurst Park",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/svsvqv1424367005.jpg",description:"Crystal Palace Football Club is an English professional football club based in South Norwood, London. They currently play in the highest level in English football, the Premier League. Since 1964, the club have mostly played in the top two leagues of English football. The club was founded in 1905 at the site of the famous Crystal Palace Exhibition building by the owners of the FA Cup Final stadium, who wanted their own team to play at the historic venue. Palace applied to be elected to The Football League, but this was rejected and they instead joined the Southern Football League Second Division, playing home games at The Crystal Palace, inspiration for the club's initial nickname, \\\"The Glaziers\\\". Palace won the Division and promotion in their first season, and played in the Southern League First Division for the next fifteen years.\\r\\n\\r\\nIn 1920 the Southern League Division One formed the Football League Third Division. Palace won the division and gained promotion to the Second Division, where they spent four seasons before suffering relegation to the Third Division South. In 1958 a league re-organisation saw Palace become founder members of Division Four. Over the next eleven years the club moved from the lowest rung of English Football to the highest, reaching the First Division in 1969, and staying in the top division for four seasons before suffering successive relegations. In 1973 the club modernised its image, changing the nickname from The Glaziers to \\\"The Eagles\\\" and ending the 68-year association with claret and blue by introducing the red-and-blue vertical stripes now associated with the club. The club stabilised itself in the top two divisions with promotions in 1977 and 1979, the latter saw the club crowned as Division Two Champions. The period between 1989–91 was a successful time for the club. They reached an FA Cup Final in 1990, won the Full Members Cup in 1991, and achieved third place in the top division in the 1990–1991 season. Palace became founder members of the Premier League in 1992, but were relegated the same season, despite achieving 49 points which is still a Premier League record for a relegated club. The club then achieved promotion back to the Premier League three times in 1994, 1997 and 2004, but each time suffered relegation at the end of the following season. Palace entered administration in both 2000 and 2010, and are now owned by a consortium of four. The club were promoted back to the Premier League with a 1–0 win over Watford in the Football League play-offs in May 2013.\\r\\n\\r\\nCrystal Palace initially played their games in the grounds of The Crystal Palace, but the First World War saw them forced to move out, and they enjoyed a number of seasons at both the Herne Hill Velodrome and The Nest. Since 1924, Palace have played their home games at Selhurst Park. Their home colours are red and blue vertical stripes, though prior to 1973 they wore claret and pale blue after the fashion of Aston Villa. They have a fierce rivalry with M23 neighbours Brighton & Hove Albion, with whom they have contested the M23 derby 98 times and also enjoy a strong rivalry with fellow South London team Millwall. The club's kit is currently made by Macron, and the shirt sponsor is Neteller. The club captain is Mile Jedinak and the current player of the year is Julian Speroni. Edmund Goodman is the club's longest serving manager, and Jim Cannon has made the most appearances for the club. Peter Simpson is the club's top scorer for both one season and overall, netting 54 and 165 respectively. The highest transfer fee received has been for Wilfried Zaha from Manchester United in January 2013."},{name:"Everton",stadium:"Goodison Park",fanArt:"https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg",description:"Everton Football Club /ˈɛvərtən/ are an English professional football club based in Liverpool, and currently playing in the Premier League. The club have competed in the top division for a record 110 seasons (missing only four seasons, in the second tier) and have won the League Championship nine times.\\r\\n\\r\\nFormed in 1878, Everton were founding members of The Football League in 1888 and won their first league championship two seasons later. Following four league titles and two FA Cup wins, Everton experienced a lull in the immediate post World War Two period until a revival in the 1960s which saw the club win two league championships and an FA Cup. The mid-1980s represented their most recent period of sustained success, with two League Championship successes, an FA Cup, and the 1985 European Cup Winners' Cup. The club's most recent major trophy was the 1995 FA Cup. The club's supporters are known as Evertonians.\\r\\n\\r\\nEverton have a rivalry with neighbours Liverpool and the two sides contest the Merseyside derby. The club have been based at Goodison Park since 1892, after moving from Anfield after a row over its rent.\\r\\n\\r\\nThe club's home colours are royal blue shirts and white shorts. Everton player Dixie Dean scored a record 60 league goals in the 1927–28 season."}];function b(e,t,n,o,r,a,i){try{var s=e[a](i),h=s.value}catch(e){return void n(e)}s.done?t(h):Promise.resolve(h).then(o,r)}document.addEventListener("DOMContentLoaded",(()=>{var e=document.querySelector("search-bar"),t=document.querySelector("cocktail-list"),n=function(){var t,n=(t=function*(){try{var t=yield class{static searchCocktail(e){return new Promise(((t,n)=>{var o=g.filter((t=>t.name.toUpperCase().includes(e.toUpperCase())));o.length?t(o):n("".concat(e," is not found"))}))}}.searchCocktail(e.value);o(t)}catch(e){r(e)}},function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function i(e){b(a,o,r,i,s,"next",e)}function s(e){b(a,o,r,i,s,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),o=e=>{t.cocktails=e},r=e=>{t.renderError(e)};e.clickEvent=n}))})()})();