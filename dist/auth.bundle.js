!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=712)}({122:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},47:function(n,t){function e(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var r=e(t,n);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},48:function(n,t,e){function r(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=b[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],t));b[r.id]={id:r.id,refs:1,parts:s}}}}function o(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],s=t.base?i[0]+t.base:i[0],a=i[1],c=i[2],l=i[3],u={css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(u):e.push(r[s]={id:s,parts:[u]})}return e}function i(n,t){var e=m(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=v[v.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),v.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,o)}}function s(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=v.indexOf(n);t>=0&&v.splice(t,1)}function a(n){var t=document.createElement("style");return n.attrs.type="text/css",l(t,n.attrs),i(n,t),t}function c(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",l(t,n.attrs),i(n,t),t}function l(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function u(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var l=x++;e=g||(g=a(t)),r=f.bind(null,e,l,!1),o=f.bind(null,e,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=c(t),r=p.bind(null,e,t),o=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(t),r=d.bind(null,e),o=function(){s(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}function f(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}function d(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function p(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var b={},h=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n){var t={};return function(e){if(void 0===t[e]){var r=n.call(this,e);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[e]=r}return t[e]}}(function(n){return document.querySelector(n)}),g=null,x=0,v=[],w=e(122);n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=o(n,t);return r(e,t),function(n){for(var i=[],s=0;s<e.length;s++){var a=e[s],c=b[a.id];c.refs--,i.push(c)}if(n){r(o(n,t),t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete b[c.id]}}}};var y=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},712:function(n,t,e){"use strict";function r(n){document.forms.auth.action="/login",document.getElementById("submit").innerText="LOGIN",document.getElementById("register-switch").classList.remove("button-focused"),n.target.classList.add("button-focused")}function o(n){document.forms.auth.action="/register",document.getElementById("submit").innerText="REGISTER",document.getElementById("login-switch").classList.remove("button-focused"),n.target.classList.add("button-focused")}function i(n){n.preventDefault();var t=n.target,e={method:"POST",headers:new Headers({"Content-type":"application/x-www-form-urlencoded"}),body:"login="+encodeURIComponent(t.elements.login.value)+"&password="+encodeURIComponent(t.elements.password.value),credentials:"include",redirect:"follow"};fetch(t.action,e).then(function(n){if(200===n.status)return n.json();console.log(n.statusText),401===n.status&&(t.elements.login.classList.add("input-incorrect"),t.elements.password.classList.add("input-incorrect"),document.getElementById("login").classList.add("input-incorrect-warning"),document.getElementById("password").classList.add("input-incorrect-warning"))}).then(function(n){n&&window.location.assign(window.location.origin+n.redirect)})}Object.defineProperty(t,"__esModule",{value:!0});var s=e(713);e.n(s);document.getElementById("register-switch").onclick=o,document.getElementById("login-switch").onclick=r,document.forms.auth.onsubmit=i},713:function(n,t,e){var r=e(714);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0;e(48)(r,o);r.locals&&(n.exports=r.locals)},714:function(n,t,e){t=n.exports=e(47)(!1),t.push([n.i,'body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: "Roboto", sans-serif;\r\n  color: #767676;\r\n  height: 100vh;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\nheader {\r\n  background-color: rgb(103, 58, 183);\r\n  color: white;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  padding: 0 20px;\r\n}\r\nh1 {\r\n  font-weight: 400;\r\n  font-size: 28px;\r\n  line-height: 28px;\r\n}\r\n.logo {\r\n  margin: auto 10px;\r\n}\r\nmain {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 100%;\r\n  background-color: #F5F5F5;\r\n}\r\n.button {\r\n  color: initial;\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 50px;\r\n  border: none;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-bottom: 5px white solid;\r\n  font-size: 18px;\r\n}\r\n.button:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n.button:active, .button:focus, .button-focused {\r\n  background-color: #f5f5f5;\r\n  border-bottom: 5px rgb(103, 58, 183) solid;\r\n  outline: none;\r\n}\r\n.form-wrapper {\r\n  background-color: white;\r\n  padding: 10px 20px;\r\n  width: 300px;\r\n  font-size: 20px;\r\n  -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n          box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n  \r\n}\r\n.auth-switcher {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  height: 100%;\r\n}\r\ninput {\r\n  width: 100%;\r\n  font-size: 20px;\r\n  border: 1px #757575 solid;\r\n  border-bottom: 5px #757575 solid;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\ninput:focus {\r\n  border: 1px #757575 solid;\r\n  border-bottom: 5px rgb(103, 58, 183) solid;\r\n  outline: none;\r\n}\r\n.input-incorrect {\r\n  border: 1px red solid;\r\n  border-bottom: 5px red solid;\r\n}\r\n.input-incorrect-warning:after {\r\n  content: "Incorrect login or password";\r\n  font-size: 12px;\r\n  color: red;\r\n}',""])}});
//# sourceMappingURL=auth.bundle.js.map