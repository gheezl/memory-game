parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gKq4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shuffle=exports.images=void 0;var o=["https://logos-download.com/wp-content/uploads/2018/01/Transformers_Autobot_logo_red.png","https://logos-download.com/wp-content/uploads/2018/01/Transformers_Autobot_logo_red.png","./autobot.png","./decepticon.png"];exports.images=o;var t=function(o){for(var t=o.length;t>0;){var e=Math.floor(Math.random()*t),r=o[--t];o[t]=o[e],o[e]=r}return o};exports.shuffle=t;
},{}],"kWI2":[function(require,module,exports) {
"use strict";var e=require("./images.js");function t(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw a}}}}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(0,e.shuffle)(e.images),alert("The rules of this memory game are very simple, all you have to do is connect as many sets of 2 matching images as possible before the timer hits 60 seconds."),alert("Good luck!!");var o=document.getElementById("game-board"),i=document.getElementById("your-score"),a=document.getElementById("game-time"),l=document.getElementsByClassName("img"),c=[],u=[],s=0,m=0,d=0,f=1,y=0,g=-1,v=0,h=null;a.innerHTML=v.toString();var p=function(){v+=1,a.innerHTML=v.toString(),60===v&&confirm("Time is up! Game over. Your final score is ".concat(s))&&(window.location="/")},b=function(e,t){return e[t]},S=function(){d=0,c=[],u=[];var e,n=t(l);try{for(n.s();!(e=n.n()).done;){e.value.style.opacity="0"}}catch(r){n.e(r)}finally{n.f()}},E=function(){var e=document.getElementById(c[0][1]),t=document.getElementById(c[1][1]);e.remove(),t.remove(),S(),s+=10,c=[],i.innerHTML=s.toString()};i.innerHTML=s.toString();var I=function(t){m+=1,g+=1,11===(y+=1)&&(f+=1,y=1);var n=document.createElement("div");n.id=m,n.classList.add("img-border"),n.style.gridRowStart=f,n.style.gridColumnStart=y;var r=document.createElement("img");r.id=Math.floor(1e6*Math.random()),r.classList.add("img"),r.style.opacity="0",r.src=b(e.images,g);n.onclick=function(){h||(h=setInterval(p,1e3)),d+=1,r.style.opacity="1",c.push([r.src,n.id]),u.push(n.id),c[0][0]===c[1][0]&&(u[0]!==u[1]?setTimeout(E,1e3):S()),3===d&&S()},n.appendChild(r),t.appendChild(n)};e.images.map(function(){I(o)});
},{"./images.js":"gKq4"}]},{},["kWI2"], null)
//# sourceMappingURL=/game-board.b91a6e88.js.map