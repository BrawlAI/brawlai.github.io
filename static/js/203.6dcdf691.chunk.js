(this.webpackJsonppages=this.webpackJsonppages||[]).push([[203],{301:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=n(13),a=n(54),s=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,92))}));t.default=function(e){var t=e.link,n=e.linkName;return Object(r.jsxs)("div",{className:"info-page",children:[Object(r.jsxs)(i.b,{className:"guide-back-button",to:t,children:[Object(r.jsx)(a.a,{icon:"arrow-left"})," ",n]}),Object(r.jsx)("h2",{children:"Action system and movement"}),Object(r.jsxs)("p",{children:["Units have two action points to use per ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/interaction",children:"turn"}),". There are no special abilities and there is currently only a single type of unit (rookies). Plan is to introduce more unit types and special abilities in later ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/seasons",children:"seasons"})," and also to re-balance costs."]}),Object(r.jsx)("p",{children:"Each activity uses either one or two action points, or uses all remaining action points. Up to a half movement uses a single action point and up to a full movement uses both action points. Shooting with a rifle uses up the remaining action points, which means a unit can either first move and then shoot once with a rifle, or shoot just once."}),Object(r.jsxs)("p",{children:["If a unit does a two action move (i.e. a full move) it will gain 'dashing' attribute/property. ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/overwatch",children:"Overwatch"})," aim penalty is -30% for half moves and -50% for full moves (dashes)."]}),Object(r.jsx)("p",{children:"Different armour types help or restrict movement:"}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Armour"}),Object(r.jsx)("td",{children:"None/Medium"}),Object(r.jsx)("td",{children:"Light"}),Object(r.jsx)("td",{children:"Heavy"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Bonus Move"}),Object(r.jsx)("td",{children:"0"}),Object(r.jsx)("td",{children:"+4"}),Object(r.jsx)("td",{children:"-2"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Full Move"}),Object(r.jsx)("td",{children:"14"}),Object(r.jsx)("td",{children:"18"}),Object(r.jsx)("td",{children:"12"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Half Move"}),Object(r.jsx)("td",{children:"7"}),Object(r.jsx)("td",{children:"9"}),Object(r.jsx)("td",{children:"6"})]})]})}),Object(r.jsx)("p",{children:"The above table indicates the total distance that can be moved in a horizontal or vertical direction. Diagonal moves cost 1.4 movement points per square, but the result is rounded down to the nearest integer. For example: one diagonal square costs 1 (1.4 rounded down), two diagonal square cost 2 (2.8 rounded down) and three diagonal squares cost 4 (4.2 rounded down). However, a unit can only make up to two half moves per turn. A maximum cost for half move without armour is 7 points (7 squares horizontally or vertically, or 5 squares diagonally, or any combination of the two to add up to 7 points)."}),Object(r.jsx)("p",{children:"A move instruction looks like this:"}),Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s,{code:"import json\nx, y = 2, 1\nprint(json.dumps({\n    'action': 'move',\n    'unit': 'MyUnit1',\n    'target': [x, y]\n    'path': [[1,1],[2,1]] # path is optional\n}))"})}),Object(r.jsxs)("p",{children:["The path attribute is optional and if it is not provided then ",Object(r.jsx)("a",{className:"inline",href:"https://en.wikipedia.org/wiki/A*_search_algorithm",children:"A* algorithm"})," is used to figure out the route. However, a bot may wish to avoid a certain route and can specify its own path. The target is reached if the unit is not blocked from moving or from reaching the destination, and if the cost of the move is less or equal to available movement points. If the target is not within reach, the unit will move its full movement amount towards it."]}),Object(r.jsx)("p",{children:"Height map values that affect movement:"}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Height"}),Object(r.jsx)("td",{children:"0"}),Object(r.jsx)("td",{children:"1"}),Object(r.jsx)("td",{children:"2"}),Object(r.jsxs)("td",{children:["The height value of the obstacle as provided in the ",Object(r.jsx)(i.b,{className:"inline",to:"/guide/map",children:"height map."})]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Walkable"}),Object(r.jsx)("td",{children:"Yes"}),Object(r.jsx)("td",{children:"Yes"}),Object(r.jsx)("td",{children:"No"}),Object(r.jsx)("td",{children:"A unit can walk over 0 and 1 height obstacles. It will jump/slide over height 1 obstacles and just move normally over 0 height (ground). A unit cannot walk or jump over height 2 obstacles."})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Stoppable"}),Object(r.jsx)("td",{children:"Yes"}),Object(r.jsx)("td",{children:"No"}),Object(r.jsx)("td",{children:"No"}),Object(r.jsx)("td",{children:"A unit can stop on the ground only (height 0) and cannot stop on any obstacle that has height (1 or 2)."})]})]})}),Object(r.jsx)("p",{children:"A unit cannot walk through a square occupied by another unit. A unit can walk diagonally between neighbouring units as long as the diagonal square is free. Units can also walk diagonally over low obstacles (height 1), but have to go around high (height 2) obstacles. For example consider the following layout"}),Object(r.jsx)(s,{code:"# Obstacles (empty space represents height 0):\n# Unit moves from A to B:\n[ , , , , , , ],\n[ , , ,A, , , ],\n[ , , , , , , ],\n[ , ,1,1,1, , ],\n[ , , , , , , ],\n[ , , ,B, , , ],\n[ , , , , , , ]\n# The path looks like this:\n[ , , , , , , ],\n[ , , ,A, , , ],\n[ , , ,x, , , ],\n[ , ,1,x,1, , ],\n[ , , ,x, , , ],\n[ , , ,B, , , ],\n[ , , , , , , ]\n# Consider additional obstacles:\n[ , , ,A, , , ],\n[ , , , ,1, , ],\n[ , , , , , , ],\n[2,2,2,2,1, , ],\n[ , , , , , , ],\n[ , , , ,2, , ],\n[ , , ,B, , , ]\n# The path looks like this:\n[ , , ,A, , , ],\n[ , , ,x,1, , ],\n[ , , , ,x, , ],\n[2,2,2,2,x, , ],\n[ , , ,x,x, , ],\n[ , , ,x,2, , ],\n[ , , ,B, , , ]"}),Object(r.jsx)("p",{children:"In the last example, the unit was able to move diagonally over the first low obstacle on the left, but it was not able to move diagonally over the last tall obstacle on the left."})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(14),o=n(6),i=n.n(o),a=n(0),s=n.n(a);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=f(t.slice(0,r)),i=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[o]=i,e}),{})}var j=!1;try{j=!0}catch(g){}function m(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function y(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),o=n.icon,i=n.mask,a=n.symbol,s=n.className,l=n.title,h=m(o),f=O("classes",[].concat(b(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,s=e.listItem,l=e.flip,h=e.size,u=e.rotation,d=e.pull,b=(c(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(h),"undefined"!==typeof h&&null!==h),c(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),c(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(n)),b(s.split(" ")))),p=O("transform","string"===typeof n.transform?r.c.transform(n.transform):n.transform),g=O("mask",m(i)),v=Object(r.a)(h,u({},f,{},p,{},g,{symbol:a,title:l}));if(!v)return function(){var e;!j&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var w=v.abstract,k={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(k[e]=n[e])})),x(w[0],k)}y.displayName="FontAwesomeIcon",y.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([0,90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=p(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,l=d(r,["style"]);return i.attrs.style=u({},i.attrs.style,{},s),t.apply(void 0,[n.tag,u({},i.attrs,{},l)].concat(b(o)))}.bind(null,s.a.createElement)}}]);