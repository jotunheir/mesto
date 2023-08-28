(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_invalid",inputErrorClass:"popup__input_state_invalid",errorClass:"popup__input-error"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup__save-button"),r=document.querySelector(".popup__edit-form"),o=document.querySelector(".popup__input_description_name"),i=document.querySelector(".popup__input_description_about"),a=document.querySelector(".profile__add-button"),u=document.querySelector(".popup__create-button"),l=document.querySelector(".popup__add-form"),c=document.querySelector(".popup__input_description_place"),p=document.querySelector(".popup__input_description_link");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function y(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function v(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,b(e,t,"get"))}function d(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,b(e,t,"set"),n),n}function b(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var m=new WeakMap,h=new WeakMap,w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,m,{writable:!0,value:void 0}),y(this,h,{writable:!0,value:void 0}),d(this,m,t),d(this,h,document.querySelector(n))}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){switch(t){case"append":v(this,h).append(e);break;case"prepend":v(this,h).prepend(e)}}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return v(t,m).call(t,{data:e,position:"append"})}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function g(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}function E(e,t){j(e,t),t.add(e)}function k(e,t,n){j(e,t),t.set(e,n)}function j(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function P(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function O(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,C(e,t,"get"))}function T(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,C(e,t,"set"),n),n}function C(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var W=new WeakMap,q=new WeakMap,L=new WeakMap,M=new WeakMap,R=new WeakSet,B=new WeakSet,x=new WeakSet,I=new WeakMap,D=new WeakMap,z=function(){function e(t,n){var r,o,i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,x),E(this,B),E(this,R),k(this,W,{writable:!0,value:void 0}),k(this,q,{writable:!0,value:void 0}),k(this,L,{writable:!0,value:void 0}),k(this,M,{writable:!0,value:void 0}),r=this,i=function(){O(a,M).disabled=!0,O(a,M).classList.add(O(a,q).inactiveButtonClass)},(o=g(o="disableButton"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,k(this,I,{writable:!0,value:function(){O(a,M).disabled=!1,O(a,M).classList.remove(O(a,q).inactiveButtonClass)}}),k(this,D,{writable:!0,value:function(e,t){t?O(a,I).call(a,e):a.disableButton(e)}}),T(this,W,t),T(this,q,n),T(this,L,O(this,W).querySelectorAll(O(this,q).inputSelector)),T(this,M,O(this,W).querySelector(O(this,q).submitButtonSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;O(this,D).call(this,O(this,M),O(this,W).checkValidity()),O(this,L).forEach((function(t){t.addEventListener("input",(function(){O(e,D).call(e,O(e,M),O(e,W).checkValidity()),P(e,x,U).call(e,t,O(e,W))}))})),O(this,W).addEventListener("submit",(function(e){e.preventDefault()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){e.classList.add(O(this,q).inputErrorClass),t.textContent=e.validationMessage}function V(e,t){e.classList.remove(O(this,q).inputErrorClass),t.textContent=e.validationMessage}function U(e,t){var n=t.querySelector("#".concat(e.name,"-error"));e.validity.valid?P(this,B,V).call(this,e,n):P(this,R,A).call(this,e,n)}function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==G(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function N(e,t){H(e,t),t.add(e)}function F(e,t,n){H(e,t),t.set(e,n)}function H(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function K(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function Q(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Y(e,t,"get"))}function X(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Y(e,t,"set"),n),n}function Y(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Z=new WeakMap,$=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,oe=new WeakMap,ie=new WeakMap,ae=new WeakSet,ue=new WeakSet,le=function(){function e(t,n){var r=t.data,o=t.handleClickCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,ue),N(this,ae),F(this,Z,{writable:!0,value:void 0}),F(this,$,{writable:!0,value:void 0}),F(this,ee,{writable:!0,value:void 0}),F(this,te,{writable:!0,value:void 0}),F(this,ne,{writable:!0,value:void 0}),F(this,re,{writable:!0,value:void 0}),F(this,oe,{writable:!0,value:void 0}),F(this,ie,{writable:!0,value:void 0}),X(this,Z,r),X(this,ee,n),X(this,te,o)}var t,n;return t=e,(n=[{key:"likePlace",value:function(){Q(this,oe).classList.toggle("place__like_active")}},{key:"deletePlace",value:function(){Q(this,$).remove()}},{key:"createCardElement",value:function(){return X(this,$,K(this,ae,ce).call(this)),X(this,ne,Q(this,$).querySelector(".place__title")),X(this,re,Q(this,$).querySelector(".place__image")),X(this,oe,Q(this,$).querySelector(".place__like")),X(this,ie,Q(this,$).querySelector(".place__trash")),Q(this,ne).textContent=Q(this,Z).name,Q(this,re).src=Q(this,Z).link,Q(this,re).alt=Q(this,Z).name,K(this,ue,pe).call(this),Q(this,$)}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ce(){return document.querySelector(Q(this,ee)).content.querySelector(".place").cloneNode(!0)}function pe(){var e=this;Q(this,oe).addEventListener("click",(function(){e.likePlace()})),Q(this,ie).addEventListener("click",(function(){e.deletePlace()})),Q(this,re).addEventListener("click",(function(){Q(e,te).call(e,Q(e,Z))}))}function se(e){return se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(e)}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ye(r.key),r)}}function ye(e){var t=function(e,t){if("object"!==se(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==se(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===se(t)?t:String(t)}function ve(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var de=new WeakMap,be=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=void 0,(r=ye(r="_popupElement"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,function(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}(this,de,{writable:!0,value:function(e){"Escape"===e.key&&i.close()}}),this._popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",ve(this,de))}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",ve(this,de))}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&fe(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function he(e,t){return he=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},he(e,t)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(){return Se="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_e(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Se.apply(this,arguments)}function _e(e){return _e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_e(e)}function ge(e){var t=function(e,t){if("object"!==me(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==me(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===me(t)?t:String(t)}function Ee(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function ke(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Pe(e,t,"get"))}function je(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Pe(e,t,"set"),n),n}function Pe(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Oe=new WeakMap,Te=new WeakMap,Ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&he(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_e(n);if(r){var o=_e(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===me(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return we(e)}(this,e)});function i(e){var t,n,r,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Ee(we(n=o.call(this,e)),Oe,{writable:!0,value:void 0}),Ee(we(n),Te,{writable:!0,value:void 0}),r=we(n),u=function(e){ke(we(n),Oe).src=e.link,ke(we(n),Oe).alt=e.name,ke(we(n),Te).textContent=e.name,Se((t=we(n),_e(i.prototype)),"open",t).call(t)},(a=ge(a="open"))in r?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[a]=u,je(we(n),Oe,n._popupElement.querySelector(".popup__image")),je(we(n),Te,n._popupElement.querySelector(".popup__title_card")),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(be);function We(e){return We="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},We(e)}function qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==We(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==We(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===We(o)?o:String(o)),r)}var o}var Le=function(){function e(t){var n=t.nameProfileSelector,r=t.aboutProfileSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nameElement=document.querySelector(n),this.aboutElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.nameElement.textContent,about:this.aboutElement.textContent}}},{key:"setUserInfo",value:function(e){this.nameElement.textContent=e.name,this.aboutElement.textContent=e.about}}])&&qe(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Me(e){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(e)}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Me(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Me(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Me(o)?o:String(o)),r)}var o}function Be(){return Be="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=De(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Be.apply(this,arguments)}function xe(e,t){return xe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xe(e,t)}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function De(e){return De=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},De(e)}function ze(e,t,n){Ae(e,t),t.set(e,n)}function Ae(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ve(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Ge(e,t,"get"))}function Ue(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Ge(e,t,"set"),n),n}function Ge(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Je=new WeakMap,Ne=new WeakMap,Fe=new WeakMap,He=new WeakMap,Ke=new WeakSet,Qe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xe(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=De(r);if(o){var n=De(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===Me(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Ie(e)}(this,e)});function a(e,t){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),Ae(r=Ie(n=i.call(this,e)),o=Ke),o.add(r),ze(Ie(n),Je,{writable:!0,value:void 0}),ze(Ie(n),Ne,{writable:!0,value:void 0}),ze(Ie(n),Fe,{writable:!0,value:void 0}),ze(Ie(n),He,{writable:!0,value:void 0}),Ue(Ie(n),Je,t),Ue(Ie(n),Ne,n._popupElement.querySelector(".popup__form")),Ue(Ie(n),Fe,Array.from(Ve(Ie(n),Ne).querySelectorAll(".popup__input"))),n}return t=a,(n=[{key:"close",value:function(){Be(De(a.prototype),"close",this).call(this),Ve(this,Ne).reset()}},{key:"setEventListeners",value:function(){var e=this;Be(De(a.prototype),"setEventListeners",this).call(this),Ve(this,Ne).addEventListener("submit",(function(t){t.preventDefault(),Ve(e,Je).call(e,function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(e,Ke,Xe).call(e))}))}}])&&Re(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(be);function Xe(){var e={};return Ve(this,Fe).forEach((function(t){e[t.name]=t.value})),e}var Ye=new w(Ze,".places");function Ze(e){var t=e.data,n=e.position,r=void 0===n?"append":n,o=new le({data:t,handleClickCard:it},"#card").createCardElement();Ye.addItem(o,r)}Ye.renderItems([{name:"Дагестан",link:"https://cdn.discordapp.com/attachments/1104763297019986053/1104766162849513513/P1208939.jpg"},{name:"Карелия",link:"https://cdn.discordapp.com/attachments/1104763297019986053/1104793766306533447/A0A6538-R1-11-26.JPG"},{name:"Эльбрус",link:"https://cdn.discordapp.com/attachments/1104763297019986053/1104766160622329886/DSC_0115.jpg"},{name:"Байкал",link:"https://cdn.discordapp.com/attachments/1104763297019986053/1104766162472017951/P1142606.jpg"},{name:"Монголия",link:"https://cdn.discordapp.com/attachments/1104763297019986053/1104766833422258336/000038670037.jpg"},{name:"Подмосковье",link:"https://cdn.discordapp.com/attachments/1104763297019986053/1104769445483790446/00000014.jpg"}]);var $e=new Le({nameProfileSelector:".profile__name",aboutProfileSelector:".profile__about"}),et=new Qe(".popup_edit-profile",(function(e){$e.setUserInfo(e),et.close()}));et.setEventListeners(),t.addEventListener("click",(function(){var e;e=$e.getUserInfo(),o.value=e.name,i.value=e.about,et.open(),tt.disableButton(n)}));var tt=new z(r,e);tt.enableValidation();var nt=new Qe(".popup_add-place",(function(){Ze({data:{name:c.value,link:p.value},position:"prepend"}),nt.close()}));nt.setEventListeners(),a.addEventListener("click",(function(){nt.open(),rt.disableButton(u)}));var rt=new z(l,e);rt.enableValidation();var ot=new Ce(".popup_card");function it(e){ot.open(e)}ot.setEventListeners()})();