!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,r,c,i,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},l={},s=a.parcelRequire7642;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},a.parcelRequire7642=s),s.register("iE7OH",(function(t,n){var r,c;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return c}),(function(e){return c=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},c=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var c={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=c[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),c[e]=t),t}})),s.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=s("8NIkP"))&&n.__esModule?n:{default:n}})),s.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),s.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),s.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),s.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=s("8NIkP"))&&n.__esModule?n:{default:n}})),s.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),s("iE7OH").register(JSON.parse('{"03q4W":"read.ad85626f.js","410VS":"icons.c1237735.svg","jGvtw":"no-news-desktop.0f33a02c.png","fAZ51":"no-news-desktop@2x.50482234.png","229vv":"no-news-tablet.7a43ff6f.png","IOMIB":"no-news-tablet@2x.9203222f.png","kQrnE":"no-news-mobile.9c3a8cf3.png","hNzlM":"no-news-mobile@2x.cd1eff34.png"}')),n=document.querySelector("[data-menu-button]"),r=document.querySelector("[data-menu-button2]"),c=document.querySelector("[data-menu]"),i=document.querySelector("[data-thema]"),n.addEventListener("click",(function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!e),r.classList.toggle("is-open"),r.setAttribute("aria-expanded",!e),c.classList.toggle("is-open"),i.classList.toggle("is-open"),document.body.classList.toggle("mobile-body")})),document.querySelectorAll(".site-nav__link").forEach((function(e){e.href===window.location.href&&e.parentNode.classList.add("active")}));var d={input:document.querySelector(".switch__input")};function u(){var e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(d.input.checked=!0,document.querySelector("html").classList.add("dark")))}u(),d.input.addEventListener("click",(function(e){var t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));u()}));var f;f=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("410VS");var h;h=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("jGvtw");var v;v=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("fAZ51");var g;g=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("229vv");var p;p=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("IOMIB");var m;m=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("kQrnE");var _;_=s("aNJCr").getBundleURL("03q4W")+s("iE7OH").resolve("hNzlM");var b=document.querySelector("#art-container"),y=function(e){var t={month:0,day:0,year:e.getFullYear()};return e.getMonth()<=8?t.month="".concat("0").concat(e.getMonth()+1):t.month=e.getMonth()+1,e.getDate()<=9?t.day="".concat("0").concat(e.getDate()):t.day=e.getDate(),t},w=function(e,n){var r=new Date(e),c=function(e){var n=document.createElement("ul");n.classList.add("news");var r=e.reduce((function(e,n){var r=new Date(n.date),c=y(r),i=c.day,a=c.month,o=c.year;return e+'\n                <li class="news__item" id="'.concat(n.id,'">\n                    <div class="news__card">\n                        <div class="news__img">\n                          <div class="news__img-wrap">\n                              <picture>\n                              <source\n                                  srcset="').concat(n.image,'"\n                                  media="(max-width: 767px)"\n                                  width="288"\n                                  height="395"\n                              />\n                              <source\n                                  srcset="').concat(n.image,'"\n                                  media="(max-width: 1279px)"\n                                  width="353"\n                                  height="395"\n                              />\n                              <img\n                                  class="news__image"\n                                  srcset="').concat(n.image,'"\n                                  src="').concat(n.image,'"\n                                  alt=""\n                                  width="395"\n                                  height="395"\n                              />\n                              </picture>\n                          </div>\n                            <p class="news__category">').concat(n.category,'</p>\n\n                            <button type="button" class="button-card">\n                            Add to favorite\n                            <svg class="button-card-icon" width="16" height="16">\n                                <use href="').concat(t(f),'#icons_heart"></use>\n                            </svg>\n                            </button>\n                        </div>\n                        <div class="news__title-wrap">\n                            <h1 class="news__title">').concat(n.title,'</h1>\n                        </div>\n                        <p class="news__text">\n                            ').concat(n.descr,'\n                        </p>\n                    </div>\n                    <div class="news__info">\n                        <time datetime="').concat(n.date,'" class="news__time">').concat(i,"/").concat(a,"/").concat(o,'</time>\n                        <a class="news__link" href="').concat(n.url,'" target="_blank">Read more</a>\n                    </div>\n                </li>')}),"");return n.insertAdjacentHTML("beforeend",r),n}(n),i=y(r),a=i.day,o=i.month,l=i.year,s=document.createElement("div");s.classList.add("read__list-wrapper"),s.innerHTML='<h2 class="read__date">\n                            '.concat(a,"/").concat(o,"/").concat(l,'\n                            <svg class="read__date-icon" width="14" height="9">\n                                <use href="').concat(t(f),'#arrow_up"></use>\n                            </svg>\n                            </h2>\n                            '),s.append(c),b.append(s)};!function(){var e=function(e){c[e].children[0].addEventListener("click",(function(){c[e].children[0].children[0].classList.toggle("read--rotate");var t=c[e].clientHeight,n=c[e].scrollHeight;c[e].style.height=t>33?"33px":"".concat(n,"px")}))},n=JSON.parse(localStorage.getItem("readArticles"));if(null!==n){for(var r in n)w(r,n[r]);for(var c=document.querySelectorAll(".read__list-wrapper"),i=0;i<c.length;i+=1)e(i)}else b.innerHTML=' <picture>\n                <source\n                    srcset="'.concat(t(m)," 1x, ").concat(t(_),' 2x"\n                    media="(max-width: 767px)">\n                <source\n                    srcset="').concat(t(g)," 1x, ").concat(t(p),' 2x"\n                    media="(max-width: 1279px)">\n                <source\n                    srcset="').concat(t(h)," 1x, ").concat(t(v),' 2x"\n                    media="(min-width: 1280px)">\n                <img class="read__no-news" src="').concat(t(m),'"\n                    alt="Зображення не має новин">\n            </picture>')}();var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e){return S.default(e)||O.default(e)||E.default(e)||A.default()};var S=L(s("kMC0W")),O=L(s("7AJDX")),A=L(s("8CtQK")),E=L(s("auk6i"));function L(e){return e&&e.__esModule?e:{default:e}}var H={};Object.defineProperty(H,"__esModule",{value:!0}),H.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M.default(e,t,n[t])}))}return e};var k,M=(k=s("hKHmD"))&&k.__esModule?k:{default:k};var N=function(e,t){return e.some((function(e){return e.title===t}))},j=function(e){e.children[0].children[0].children[2].childNodes[0].textContent="Remove from favorite",e.children[0].children[0].children[2].children[0].classList.add("button-card-icon-remove")},q=function(e,t,n){var r={id:e.attributes[1].value,category:e.children[0].children[0].children[1].textContent,date:e.children[1].children[0].attributes[0].value,descr:e.children[0].children[2].innerText,image:e.children[0].children[0].children[0].children[0].children[2].attributes[1].value,title:e.children[0].children[1].innerText,url:e.children[1].children[1].attributes[1].value};t.push(r),localStorage.setItem("favoriteArticles",JSON.stringify(t)),j(e),e.children[0].children[0].children[2].addEventListener("click",(function(r){I(e,t,n)}),{once:!0})},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=t.findIndex((function(e){return e.id===n}));t.splice(r,1),localStorage.setItem("favoriteArticles",JSON.stringify(t)),e.children[0].children[0].children[2].childNodes[0].textContent="Add to favorite",e.children[0].children[0].children[2].children[0].classList.remove("button-card-icon-remove"),e.children[0].children[0].children[2].addEventListener("click",(function(n){q(e,t)}),{once:!0})};!function(){var e=function(e){var t=n[e];if(N(r,t.children[0].children[1].innerText))return j(t),"continue";t.children[0].children[0].children[2].addEventListener("click",(function(e){q(t,r,t.attributes[1].value)}),{once:!0})};localStorage.getItem("favoriteArticles")||localStorage.setItem("favoriteArticles",JSON.stringify([]));for(var n=document.querySelectorAll(".news__item"),r=t(x)(JSON.parse(localStorage.getItem("favoriteArticles"))),c=0;c<n.length;c+=1)e(c)}(),function(){for(var e=function(e){var t=n[e];r.some((function(e){return e.id===t.attributes[1].value}))&&t.children[0].children[0].children[2].addEventListener("click",(function(e){I(t,r,t.attributes[1].value)}),{once:!0})},n=document.querySelectorAll(".news__item"),r=t(x)(JSON.parse(localStorage.getItem("favoriteArticles"))),c=0;c<n.length;c+=1)e(c)}()}();
//# sourceMappingURL=read.ad85626f.js.map
