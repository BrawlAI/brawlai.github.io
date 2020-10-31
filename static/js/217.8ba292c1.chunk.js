(this.webpackJsonppages=this.webpackJsonppages||[]).push([[217],{309:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),i=n(13),r=n(54),s=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,92))}));t.default=function(e){var t=e.link,n=e.linkName;return Object(a.jsxs)("div",{className:"info-page",children:[Object(a.jsxs)(i.b,{className:"guide-back-button",to:t,children:[Object(a.jsx)(r.a,{icon:"arrow-left"})," ",n]}),Object(a.jsx)("h2",{children:"Shooting and reloading"}),Object(a.jsxs)("p",{children:["A unit can shoot with its ",Object(a.jsx)(i.b,{className:"inline",to:"/guide/weapons",children:"weapon"})," if it has enough ammunition loaded. If the weapon has ran out of ammunition then it must be reloaded (see below). If the unit has no spare magazines then it cannot reload the weapon. The success of an attack is determined by the weapon's ",Object(a.jsx)(i.b,{className:"inline",to:"/guide/weapons",children:"hit chance"})," on the target. The damage is determined by the weapon's ",Object(a.jsx)(i.b,{className:"inline",to:"/guide/weapons",children:"damage"})," and whether the hit is a ",Object(a.jsx)(i.b,{className:"inline",to:"/guide/weapons",children:"critical hit"}),"."]}),Object(a.jsx)("h3",{children:"Attacking"}),Object(a.jsx)("p",{children:"Attacking with a weapon or item happens by sending a message to the host and describing the attacking unit, item name and the target location. An example of how to send a message to the host:"}),Object(a.jsx)(o.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(s,{code:"import json\nx, y = 53, 21\nprint(json.dumps({\n    'action': 'attack',\n    'unit': 'SayHelloToMyLittleFriend', # Unit name\n    'target': [x, y], # Shoots at this location\n    'item': 'rifle', # The exact name of the item\n    'ignoreAllies': True, # Throw even if allies are damaged\n}))\n\n# Or another way:\nattack = dict()\nattack['action'] = \"attack\"\nattack['unit'] = 'TheManWithTheGoldenGun'\nattack['item'] = 'pistol'\nattack['target'] = [15, 17]\n# Optional peek / side step \"location\"\n# the shooting unit could be in e.g. [14, 28]\nattack['location'] = [15, 28] # Must be a peek location\nattack['ignoreAllies'] = False\nprint(json.dumps(attack))"})}),Object(a.jsx)("p",{children:"If the optional location is not provided, then the unit's own location is used to determine the shooting location. The unit may side step if it advantageous to do so. There are simple checks in place to figure out if side stepping would improve the accuracy or provide flanking or avoid hitting allies."}),Object(a.jsxs)("p",{children:["If attacking was possible with the specified unit and item then the host will reply with a confirmation message. Depending on what the outcome of the attack was, the host will also send hit, shooting and obstacle destruction ",Object(a.jsx)(i.b,{className:"inline",to:"/guide/notifications",children:"notifications"}),". If the unit's attempt to attack was confirmed and not denied then the unit's current ammunition was reduced by one."]}),Object(a.jsx)("h3",{children:"Reloading weapon"}),Object(a.jsx)("p",{children:"Reloading a weapon consumes 1 magazine and requires at least 1 action point. If the weapon already had some ammunition loaded then the loaded ammunition is discarded when the weapon is reloaded. The weapon can be reloaded with the reload message:"}),Object(a.jsx)(o.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(s,{code:"import json\nx, y = 53, 21\nprint(json.dumps({\n    'action': 'reload',\n    'unit': 'TriggerHappy', # Unit name\n}))"})}),Object(a.jsx)("p",{children:"Reloading restores all the ammunition to the weapon. It also consumes the rest of the unit's action points."})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(14),o=n(6),i=n.n(o),r=n(0),s=n.n(r);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),o=h(t.slice(0,a)),i=t.slice(a+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[o]=i,e}),{})}var m=!1;try{m=!0}catch(w){}function y(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function j(e){var t=e.forwardedRef,n=p(e,["forwardedRef"]),o=n.icon,i=n.mask,r=n.symbol,s=n.className,c=n.title,u=y(o),h=g("classes",[].concat(d(function(e){var t,n=e.spin,a=e.pulse,o=e.fixedWidth,i=e.inverse,r=e.border,s=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,d=(l(t={"fa-spin":n,"fa-pulse":a,"fa-fw":o,"fa-inverse":i,"fa-border":r,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),"undefined"!==typeof u&&null!==u),l(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),l(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),d(s.split(" ")))),b=g("transform","string"===typeof n.transform?a.c.transform(n.transform):n.transform),w=g("mask",y(i)),x=Object(a.a)(u,f({},h,{},b,{},w,{symbol:r,title:c}));if(!x)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var v=x.abstract,k={ref:t};return Object.keys(n).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(k[e]=n[e])})),O(v[0],k)}j.displayName="FontAwesomeIcon",j.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([0,90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=b(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[h(t)]=a}return e}),{attrs:{}}),r=a.style,s=void 0===r?{}:r,c=p(a,["style"]);return i.attrs.style=f({},i.attrs.style,{},s),t.apply(void 0,[n.tag,f({},i.attrs,{},c)].concat(d(o)))}.bind(null,s.a.createElement)}}]);