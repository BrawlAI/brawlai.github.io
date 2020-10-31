(this.webpackJsonppages=this.webpackJsonppages||[]).push([[207],{295:function(e,t,n){"use strict";n.r(t);var r=n(1),i=(n(0),n(13)),a=n(54);t.default=function(e){var t=e.link,n=e.linkName;return Object(r.jsxs)("div",{className:"info-page",children:[Object(r.jsxs)(i.b,{className:"guide-back-button",to:t,children:[Object(r.jsx)(a.a,{icon:"arrow-left"})," ",n]}),Object(r.jsx)("h2",{children:"Getting started"}),Object(r.jsx)("p",{children:"I'm glad you are here! Let's get started."}),Object(r.jsx)("h3",{children:"Introduction"}),Object(r.jsx)("p",{children:"If you're familiar with XCOM, then some aspects should be hopefully quite familiar. Here is a list of some notable similarities and differences:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Map is grid based, but there are no walls. The grid is just a 2-dimensional array with height information for each obstacle. Currently, there is only one layer/level. See the ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/map",children:"map guide"})," for more details.",Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:"I've written wall systems before, but so far I haven't figured out a way to represent them in a data structure that is trivial to understand and use by everyone. If you've got ideas then please let me know. I'd really like to include walls without making the barrier to entry higher than it already is."})})]}),Object(r.jsxs)("li",{children:["There is a ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/actions",children:"two action system"}),"."]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(i.b,{className:"inline",to:"/guide/overwatch",children:"Overwatch"})," capability."]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(i.b,{className:"inline",to:"/guide/cover",children:"Cover system"})," with defence bonuses. Units can peek / side step from behind cover."]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(i.b,{className:"inline",to:"/guide/weapons",children:"Weapons"})," have limited ammunition and can pierce targets."]}),Object(r.jsxs)("li",{children:["There are also a bunch of ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/items",children:"items"}),"."]})]}),Object(r.jsx)("h3",{children:"Key steps in creating and launching a bot"}),Object(r.jsx)("p",{children:"Once you have an account and are logged in, the steps to create a bot are as follows:"}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:["Create a project and give it a name.",Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"This is what the bot will be known as."}),Object(r.jsx)("li",{children:"The name will be public when launched and if it reaches the ranking list. The name cannot be edited afterwards, but the bot can be duplicated with a different name."}),Object(r.jsx)("li",{children:"The name must be made of A-Z upper or lower case characters, or numbers, and - or _ characters (similar rules as with the account name)."})]})]}),Object(r.jsxs)("li",{children:["Add units and source-code for the bot.",Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["To edit source-code, select ",Object(r.jsx)(a.a,{icon:"keyboard"}),"."]}),Object(r.jsxs)("li",{children:["To edit units, select ",Object(r.jsx)(a.a,{icon:"users"}),"."]}),Object(r.jsx)("li",{children:'The bot must have units and source-code to function. And remember to press "Save".'})]})]}),Object(r.jsxs)("li",{children:["With units and source-code in place, it is time to launch the bot by selecting ",Object(r.jsx)(a.a,{icon:"play"}),".",Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"The bot is now added to the queue and will be processed automatically as soon as possible."}),Object(r.jsx)("li",{children:"If there is nothing in the queue, it will take a few seconds or up to two minutes to receive results."}),Object(r.jsxs)("li",{children:["Refresh the page to see if there are any changes to your bot. Progress can be viewed by selecting ",Object(r.jsx)(a.a,{icon:"balance-scale"}),"."]}),Object(r.jsx)("li",{children:"If the bot has failed to pass the initial test, it is marked as failed. It can be duplicated or deleted. Failed bots are not made public and will be deleted automatically after a period of time."}),Object(r.jsx)("li",{children:"If the bot passed the initial test, it can be duplicated but can no longer be deleted. The bot will be ranked against other bots and will be placed on the ranking table once its rank is known."}),Object(r.jsxs)("li",{children:['Debug output for the bot can be seen in the replay page when you select "view" inside ',Object(r.jsx)(a.a,{icon:"balance-scale"}),". The debug output button is marked as ",Object(r.jsx)(a.a,{icon:"bug"}),"."]})]})]})]}),Object(r.jsxs)("p",{children:["Check out the other guides for more details. For example the ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/interaction",children:"interaction"})," guide will explain turns, winning and how to interact with the system."]})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(14),i=n(6),a=n.n(i),s=n(0),o=n.n(s);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),i=h(t.slice(0,r)),a=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[i]=a,e}),{})}var j=!1;try{j=!0}catch(x){}function y(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function m(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function O(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),i=n.icon,a=n.mask,s=n.symbol,o=n.className,l=n.title,u=y(i),h=m("classes",[].concat(f(function(e){var t,n=e.spin,r=e.pulse,i=e.fixedWidth,a=e.inverse,s=e.border,o=e.listItem,l=e.flip,u=e.size,b=e.rotation,d=e.pull,f=(c(t={"fa-spin":n,"fa-pulse":r,"fa-fw":i,"fa-inverse":a,"fa-border":s,"fa-li":o,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(u),"undefined"!==typeof u&&null!==u),c(t,"fa-rotate-".concat(b),"undefined"!==typeof b&&null!==b&&0!==b),c(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),f(o.split(" ")))),p=m("transform","string"===typeof n.transform?r.c.transform(n.transform):n.transform),x=m("mask",y(a)),w=Object(r.a)(u,b({},h,{},p,{},x,{symbol:s,title:l}));if(!w)return function(){var e;!j&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var v=w.abstract,k={ref:t};return Object.keys(n).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(k[e]=n[e])})),g(v[0],k)}O.displayName="FontAwesomeIcon",O.propTypes={border:a.a.bool,className:a.a.string,mask:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),fixedWidth:a.a.bool,inverse:a.a.bool,flip:a.a.oneOf(["horizontal","vertical","both"]),icon:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),listItem:a.a.bool,pull:a.a.oneOf(["right","left"]),pulse:a.a.bool,rotation:a.a.oneOf([0,90,180,270]),size:a.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a.a.bool,symbol:a.a.oneOfType([a.a.bool,a.a.string]),title:a.a.string,transform:a.a.oneOfType([a.a.string,a.a.object]),swapOpacity:a.a.bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[h(t)]=r}return e}),{attrs:{}}),s=r.style,o=void 0===s?{}:s,l=d(r,["style"]);return a.attrs.style=b({},a.attrs.style,{},o),t.apply(void 0,[n.tag,b({},a.attrs,{},l)].concat(f(i)))}.bind(null,o.a.createElement)}}]);