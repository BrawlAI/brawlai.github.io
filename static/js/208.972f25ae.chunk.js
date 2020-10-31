(this.webpackJsonppages=this.webpackJsonppages||[]).push([[208],{296:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),o=n(13),s=n(54),a=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,92))}));t.default=function(e){var t=e.link,n=e.linkName;return Object(i.jsxs)("div",{className:"info-page",children:[Object(i.jsxs)(o.b,{className:"guide-back-button",to:t,children:[Object(i.jsx)(s.a,{icon:"arrow-left"})," ",n]}),Object(i.jsx)("h2",{children:"Interaction, turns and the first test"}),Object(i.jsx)("h3",{children:"Turns"}),Object(i.jsx)("p",{children:"The matches are turn based and time limited. Each bot starts with 15 seconds of available time. Running out of time loses the match, but if the enemy runs out of time that wins the match. Taking down all enemy units (i.e. wiping the enemy squad) will also win the match."}),Object(i.jsx)("p",{children:"The first 45 turns each adds 1 second to the total available time for the bot. This means that there is a total of 60 seconds of available time for each bot. Unused time will carry to the next turn and after 45 turns no more additional time is provided."}),Object(i.jsx)("p",{children:"The turn will always start with a 'startTurn' message:"}),Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(a,{code:"import json\nmessage = json.loads(input())\nif message['action'] == 'startTurn':\n    print('New turn! Time left:', str(message['timeLeft']), 'seconds')"})}),Object(i.jsx)("p",{children:"To end the turn an 'endTurn' message must be sent:"}),Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(a,{code:"import json\nprint(json.dumps({'action': 'endTurn'}))"})}),Object(i.jsx)("p",{children:"All actions with the units must be done between the startTurn and endTurn messages. The host will not read any messages from the bot until its next turn has started. The execution of the bot's code does not stop or halt during the enemy's turn. Any instructions that are sent to the host after the endTurn message will be processed on the following turn after the next startTurn message is provided."}),Object(i.jsx)("h3",{children:"The first test"}),Object(i.jsxs)("p",{children:["To be able to qualify for the brawl, the bot must be able to pass a test. The test involves moving to the opposite end of the map where an idle enemy is waiting. The enemy will not move but will sometimes perform ",Object(i.jsx)(o.b,{className:"inline",to:"/guide/overwatch",children:"overwatches"}),"."]}),Object(i.jsx)("p",{children:"The idle enemy does not run out of time and it must be wiped out to win. The purpose of this test is to make sure the bot will be able to perform the basic functionality: move and attack. Eliminating the test enemy grants access for the bot to be ranked against other qualified bots. The testing and ranking will happen automatically once the bot has been launched."}),Object(i.jsx)("p",{children:"After passing the first test, the bot will attack other bots in the ranking table starting from the bot that is in the middle of the table. Winning all matches will grant the first position, losing all the matches will grant the last position. However, getting ranked is not the end for the bot, the bot will then have to defend its position against any new bots that will get ranked. On a tie the defending bot always wins."}),Object(i.jsx)("h3",{children:"Interacting with the host"}),Object(i.jsx)("p",{children:"Interaction and communication with the host system, the referee that manages the match and determines a winner, is accomplished by writing to STDOUT and reading from STDIN. In python this is really easy, by just calling print() or input() respectively. The bots cannot communicate with each other. They only communicate to the host."}),Object(i.jsx)("p",{children:"An example of receiving a new message and getting its type:"}),Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(a,{code:"import json\nmessage = json.loads(input())\nprint(message['action'])\n# prints the received action type (e.g. startTurn)"})}),Object(i.jsx)("p",{children:"The message is received with input() and converted into a python dictionary with the json tool: json.loads()."}),Object(i.jsxs)("p",{children:["All communication with the host happens in ",Object(i.jsx)("a",{className:"inline",href:"https://en.wikipedia.org/wiki/JSON",children:"JSON"}),". Everything that is printed and can be understood (parsed) as a JSON message will be received by the host. If the print is not in JSON format then it will be considered a debug or error output. The debug and error output will be stored in the debug output log of the project, available only to the author of the project during the current season. All messages from the host are in JSON."]}),Object(i.jsxs)("p",{children:["Note: there are some ",Object(i.jsx)(o.b,{className:"inline",to:"/guide/limits",children:"limits"})," to how much can be printed. A single line cannot exceed 10KB and the maximum amount that can be written to STDOUT and STDERR combined is 10MB. The maximum count includes control (JSON) messages as well as debug or error messages. Each message has to end in a new line character (\\n). Python adds this automatically to print() calls. This also means that pretty printed JSON will not be interpreted by the host. If the 10KB limit or 10MB limit is exceeded, an error is printed into the debug log and the program is terminated. 10KB lines are also difficult to read in a browser, and 10MB of output will increase the page loading time considerably for you, the author."]}),Object(i.jsx)("p",{children:"An example of writing a new message to the host:"}),Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(a,{code:"import json\nmessage = dict()\nmessage['action'] = 'endTurn'\nprint(json.dumps(message))\n# Nothing is printed to the debug as the message is caught by the host.\nprint('Finished turn!')\n# The text 'Finished turn!' is printed into the debug log at the start of next turn,\n# because the last message was to end this turn."})}),Object(i.jsx)("p",{children:"Every message received by the host will also be confirmed or denied. For example:"}),Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(a,{code:"import json\nmessage = json.loads(input())\nif message['action'] == 'startTurn':\n    move = dict()\n    move['action'] = 'move'\n    move['target'] = [33, 31] # x = 33, y = 31\n    move['unit'] = 'MyUnit1'\n    print(json.dumps(move))\n    expected_response = False\n    while not expected_response:\n        message = json.loads(input())\n        if message['action'] == 'confirm' and message['confirm'] == 'move':\n            print(\"move of 'MyUnit1' was confirmed\")\n            expected_response = True\n        else if message['action'] == 'deny' and message['deny'] == 'move':\n            print(\"move of 'MyUnit1' was denied:\", message['reason'])\n            expected_response = True\n        else:\n            print('received other messages such as overwatch shots',\n                'or enemy visibility notifications')\nprint(json.dumps({\n    'action': 'endTurn'\n}))\nmessage = json.loads(input())\nif message['action'] == 'confirm':\n    print('confirmed:', message['confirm'])\n    # prints 'confirmed: endTurn'\n    # at this point it is the enemy's turn"})}),Object(i.jsx)("p",{children:"It is up to you how you want to write to the STDOUT and read from STDIN. The print() and input() functions built into python provide a convenient way to do this, but you don't have to use them and you can use something else. Perhaps you'd like to process something in the background, in another thread, while the input() is blocking to read the next message. Or you could use a non-blocking function and only poll STDIN for messages."})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(14),r=n(6),o=n.n(r),s=n(0),a=n.n(s);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,i=t.indexOf(":"),r=m(t.slice(0,i)),o=t.slice(i+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[r]=o,e}),{})}var b=!1;try{b=!0}catch(w){}function y(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function j(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),r=n.icon,o=n.mask,s=n.symbol,a=n.className,l=n.title,h=y(r),m=g("classes",[].concat(p(function(e){var t,n=e.spin,i=e.pulse,r=e.fixedWidth,o=e.inverse,s=e.border,a=e.listItem,l=e.flip,h=e.size,u=e.rotation,d=e.pull,p=(c(t={"fa-spin":n,"fa-pulse":i,"fa-fw":r,"fa-inverse":o,"fa-border":s,"fa-li":a,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(h),"undefined"!==typeof h&&null!==h),c(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),c(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(n)),p(a.split(" ")))),f=g("transform","string"===typeof n.transform?i.c.transform(n.transform):n.transform),w=g("mask",y(o)),x=Object(i.a)(h,u({},m,{},f,{},w,{symbol:s,title:l}));if(!x)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var v=x.abstract,T={ref:t};return Object.keys(n).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(T[e]=n[e])})),O(v[0],T)}j.displayName="FontAwesomeIcon",j.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var r=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var i=n.attributes[t];switch(t){case"class":e.attrs.className=i,delete n.attributes.class;break;case"style":e.attrs.style=f(i);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=i:e.attrs[m(t)]=i}return e}),{attrs:{}}),s=i.style,a=void 0===s?{}:s,l=d(i,["style"]);return o.attrs.style=u({},o.attrs.style,{},a),t.apply(void 0,[n.tag,u({},o.attrs,{},l)].concat(p(r)))}.bind(null,a.a.createElement)}}]);