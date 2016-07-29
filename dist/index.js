/*!
 * |=======================================|
 * |        React Switch Case 1.0.0        |
 * |=======================================|
 * Switch statement in React components
 * https://github.com/AlexSergey/react-switch-case
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Switch=t(require("react")):e.Switch=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Default=t.Case=void 0;var c,f,a,s,p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===u)n.children=o;else if(u>1){for(var f=Array(u),a=0;a<u;a++)f[a]=arguments[a+3];n.children=f}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),h=(r(d),function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"getChildrens",value:function(){var e=[],t=[];return this.props.children.forEach(function(n){switch(n.type.componentName){case"case":this.props.condition===n.props.value&&e.push(n);break;case"default":t.push(n)}},this),e.length>0?e:t}},{key:"render",value:function(){return p("div",{className:this.props.addClass?this.props.addClass:""},void 0,this.getChildrens().map(function(e,t){return e}))}}]),t}(d.Component)),y=(f=c=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return this.props.children}}]),t}(d.Component),c.componentName="case",f),b=(s=a=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return this.props.children}}]),t}(d.Component),a.componentName="default",s);t.default=h,t.Case=y,t.Default=b},function(t,n){t.exports=e}])});