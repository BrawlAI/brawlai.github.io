(this.webpackJsonppages=this.webpackJsonppages||[]).push([[207],{357:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(14),o=n(58),r=n(1),s=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,102))}));t.default=function(e){var t=e.link,n=e.linkName;return Object(r.jsxs)("div",{className:"info-page",children:[Object(r.jsxs)(a.b,{className:"guide-back-button",to:t,children:[Object(r.jsx)(o.a,{icon:"arrow-left"})," ",n]}),Object(r.jsx)("h2",{children:"Commands"}),Object(r.jsx)("p",{children:"All messages not in JSON format are assumed to be debug messages and they will be added to the debug output log. However, if the message is valid JSON, then the host will attempt to interpret it. The end of message is indicated with a new line character '\\n' (i.e. a 0x0A hexadecimal binary value). This page provides a complete list of messages the host will be able to understand. The messages have a key attribute called 'action' which indicates the message type."}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"action"}),Object(r.jsx)("th",{children:"Description"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"endTurn"}),Object(r.jsx)("td",{children:"Tells the host that you have now ended your turn. The enemy will now have its turn."})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"move"}),Object(r.jsx)("td",{children:"A unit should move to a new location."})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"attack"}),Object(r.jsx)("td",{children:"A unit should either attack with a weapon or use an item."})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"overwatch"}),Object(r.jsx)("td",{children:"Start an overwatch with a unit."})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"reload"}),Object(r.jsx)("td",{children:"Reload a unit's weapon using one of its magazines."})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"surrender"}),Object(r.jsx)("td",{children:"Give up. The pacifist's option to lose without incapacitation."})]})]})}),Object(r.jsx)("h3",{children:"Command: endTurn"}),Object(r.jsx)("p",{children:"The matches are turn based. To end your own turn before your time runs out and let the enemy have their turn, the endTurn instruction has to be provided."}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\nprint(json.dumps({'action': 'endTurn'}))"})}),Object(r.jsx)("h3",{children:"Command: move"}),Object(r.jsxs)("p",{children:["The move command ",Object(r.jsx)(a.b,{className:"inline",to:"/guide/actions",children:"moves"})," your units, one at a time. The instruction contains the unit's exact name and the target location. If the path attribute is specified then the unit will attempt to follow the path exactly. The unit will not deviate from the path and thus every step on the path must be a valid movement. If the path attribute is not provided, then the unit will attempt to reach the target using the shortest possible route."]}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\n\nx, y = 48, 27\npath = list()\npath.append([40,26])\npath.append([41,26])\npath.append([42,27])\npath.append([43,27])\npath.append([44,27])\npath.append([45,27])\npath.append([46,27])\n\nmsg = dict()\nmsg['action'] = 'move'\nmsg['unit'] = 'sprinter02' # who is moving\nmsg['target'] = [x, y] # shooting at\nmsg['path'] = path # the exact path to take (optional)\n\nprint(json.dumps(msg))"})}),Object(r.jsx)("p",{children:"The unit's movement is limited by its maximum movement distance and any obstacles including units."}),Object(r.jsx)("h3",{children:"Command: attack"}),Object(r.jsxs)("p",{children:["Attack message is used to interact with an ",Object(r.jsx)(a.b,{className:"inline",to:"/guide/items",children:"item"})," or ",Object(r.jsx)(a.b,{className:"inline",to:"/guide/weapons",children:"weapon"}),". The unit must have the item in question to be able to use it or the weapon and the weapon must have ammunition. The attack message will only consume the action points it takes to use the target item if it is possible to use the target item in the way it is described in the message."]}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\n\ntarget_x, target_y = 3, 15\npeek_x, peek_y = 2, 31\n\nmsg = dict()\nmsg['action'] = 'attack'\nmsg['unit'] = 'medic03' # who is shooting\nmsg['item'] = 'rifle' # or pistol, or grenade, or medikit\nmsg['target'] = [target_x, target_y] # shooting at\nmsg['location'] = [peek_x, peek_y] # shooting from (optional)\nmsg['ignoreAllies'] = True\n\nprint(json.dumps(msg))"})}),Object(r.jsxs)("p",{children:["The location attribute is optional and can be left out. If it is specified and if it is valid for the unit, then the unit will use that location. Otherwise, if the location is not specified, then the unit could use any of the peeking locations to perform the action possibly to avoid allies or get an angle with a lower defence value on the target unit. The target does not have to match any unit's location, friendly or foe, and can be any location on the ",Object(r.jsx)(a.b,{className:"inline",to:"/guide/map",children:"heightMap"}),"."]}),Object(r.jsxs)("p",{children:["The attack message can trigger multiple ",Object(r.jsx)(a.b,{className:"inline",to:"/guide/notifications",children:"notification messages"})," from the host, such as shot, damage, obstacleShot, obstacleUpdate and enemy messages."]}),Object(r.jsx)("h3",{children:"Command: overwatch"}),Object(r.jsxs)("p",{children:[Object(r.jsx)(a.b,{className:"inline",to:"/guide/overwatch",children:"Overwatch"})," allows a unit to delay its shooting until the enemy's turn. The overwatch could allow the pinning down of an enemy unit by shooting at them if they move."]}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\n\nmsg = dict()\nmsg['action'] = 'overwatch'\nmsg['unit'] = 'shooter01' # who is shooting\nmsg['distance'] = 20 # max activation distance\nmsg['ignoreAllies'] = False\n\nprint(json.dumps(msg))"})}),Object(r.jsx)("p",{children:"The overwatch is set to trigger within a specified radius. This allows the named unit to ignore enemy movement that is too far away. The unit can also make sure that no friendly units are caught in the line of fire, or just ignore friendly units."}),Object(r.jsx)("h3",{children:"Command: reload"}),Object(r.jsx)("p",{children:"Reloads the unit's weapon if the unit has spare magazines and the weapon isn't already full. All previous ammunition in the weapon will be discarded if the reload is possible."}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\nprint(json.dumps({'action': 'reload', 'unit': 'myUnit1'}))"})}),Object(r.jsx)("h3",{children:"Command: surrender"}),Object(r.jsx)("p",{children:"This can be useful if you are testing some code and don't want to always just run out of time and wait for up to 15-60 seconds to get results. However, this may not be so useful in the actual ranking competition as there is always a possibility that the enemy will run out of time before you and you will win even if you have no way of dealing damage. Hint: when out of ammo and grenades, run and hide! And next time pack more magazines."}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\nprint(json.dumps({'action': 'surrender'}))"})})]})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i=n(16),a=n(15),o=n.n(a),r=n(0),s=n.n(r);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,i=t.indexOf(":"),a=m(t.slice(0,i)),o=t.slice(i+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e}),{})}var f=!1;try{f=!0}catch(x){}function j(e){return i.c.icon?i.c.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function y(e){var t=e.forwardedRef,n=h(e,["forwardedRef"]),a=n.icon,o=n.mask,r=n.symbol,s=n.className,c=n.title,d=n.titleId,m=j(a),b=g("classes",[].concat(p(function(e){var t,n=e.spin,i=e.pulse,a=e.fixedWidth,o=e.inverse,r=e.border,s=e.listItem,c=e.flip,d=e.size,u=e.rotation,h=e.pull,p=(l(t={"fa-spin":n,"fa-pulse":i,"fa-fw":a,"fa-inverse":o,"fa-border":r,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(d),"undefined"!==typeof d&&null!==d),l(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),l(t,"fa-pull-".concat(h),"undefined"!==typeof h&&null!==h),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(n)),p(s.split(" ")))),x=g("transform","string"===typeof n.transform?i.c.transform(n.transform):n.transform),w=g("mask",j(o)),v=Object(i.a)(m,u({},b,{},x,{},w,{symbol:r,title:c,titleId:d}));if(!v)return function(){var e;!f&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var k=v.abstract,T={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(T[e]=n[e])})),O(k[0],T)}y.displayName="FontAwesomeIcon",y.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var i=n.attributes[t];switch(t){case"class":e.attrs.className=i,delete n.attributes.class;break;case"style":e.attrs.style=b(i);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=i:e.attrs[m(t)]=i}return e}),{attrs:{}}),r=i.style,s=void 0===r?{}:r,c=h(i,["style"]);return o.attrs.style=u({},o.attrs.style,{},s),t.apply(void 0,[n.tag,u({},o.attrs,{},c)].concat(p(a)))}.bind(null,s.a.createElement)}}]);