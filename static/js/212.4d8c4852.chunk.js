(this.webpackJsonppages=this.webpackJsonppages||[]).push([[212],{59:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(16),i=n(15),a=n.n(i),r=n(0),s=n.n(r);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,o=t.indexOf(":"),i=h(t.slice(0,o)),a=t.slice(o+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[i]=a,e}),{})}var m=!1;try{m=!0}catch(O){}function y(e){return o.c.icon?o.c.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function S(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function b(e){var t=e.forwardedRef,n=p(e,["forwardedRef"]),i=n.icon,a=n.mask,r=n.symbol,s=n.className,c=n.title,u=n.titleId,h=y(i),d=S("classes",[].concat(g(function(e){var t,n=e.spin,o=e.pulse,i=e.fixedWidth,a=e.inverse,r=e.border,s=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,g=(l(t={"fa-spin":n,"fa-pulse":o,"fa-fw":i,"fa-inverse":a,"fa-border":r,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),"undefined"!==typeof u&&null!==u),l(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),l(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map((function(e){return g[e]?e:null})).filter((function(e){return e}))}(n)),g(s.split(" ")))),O=S("transform","string"===typeof n.transform?o.c.transform(n.transform):n.transform),j=S("mask",y(a)),E=Object(o.a)(h,f({},d,{},O,{},j,{symbol:r,title:c,titleId:u}));if(!E)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var k=E.abstract,A={ref:t};return Object.keys(n).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(A[e]=n[e])})),v(k[0],A)}b.displayName="FontAwesomeIcon",b.propTypes={border:a.a.bool,className:a.a.string,mask:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),fixedWidth:a.a.bool,inverse:a.a.bool,flip:a.a.oneOf(["horizontal","vertical","both"]),icon:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),listItem:a.a.bool,pull:a.a.oneOf(["right","left"]),pulse:a.a.bool,rotation:a.a.oneOf([0,90,180,270]),size:a.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a.a.bool,symbol:a.a.oneOfType([a.a.bool,a.a.string]),title:a.a.string,transform:a.a.oneOfType([a.a.string,a.a.object]),swapOpacity:a.a.bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var o=n.attributes[t];switch(t){case"class":e.attrs.className=o,delete n.attributes.class;break;case"style":e.attrs.style=d(o);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=o:e.attrs[h(t)]=o}return e}),{attrs:{}}),r=o.style,s=void 0===r?{}:r,c=p(o,["style"]);return a.attrs.style=f({},a.attrs.style,{},s),t.apply(void 0,[n.tag,f({},a.attrs,{},c)].concat(g(i)))}.bind(null,s.a.createElement)},61:function(e,t,n){"use strict";var o=n(9),i=n(10),a=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"ACCESS_TOKEN",get:function(){return"access_token"}},{key:"ACCESS_TOKEN_EXPIRY",get:function(){return"access_token_expiry"}},{key:"REFRESH_TOKEN",get:function(){return"refresh_token"}},{key:"REFRESH_TOKEN_EXPIRY",get:function(){return"refresh_token_expiry"}},{key:"USERNAME",get:function(){return"username"}},{key:"ADDRESS",get:function(){return"https://api.brawl.ai"}},{key:"loginUrl",value:function(e,t){fetch(this.ADDRESS+"/login/").then((function(e){return e.json()})).then((function(t){e(t)}),(function(e){t(e)}))}},{key:"authorize",value:function(e,t,n){var o=this;return fetch(this.ADDRESS+"/login/authorize",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e})}).then((function(e){return e.json()})).then((function(e){o.parseJWT(e),t()}),(function(e){n(e)})),!0}},{key:"changePassword",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/change_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),oldPassword:e,newPassword:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestPasswordResetCode",value:function(e,t,n){return fetch(this.ADDRESS+"/login/reset_password_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:e})}).then((function(e){return e.json()})).then((function(e){t(e)}),(function(e){n(e)})),!0}},{key:"consumePasswordResetCode",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/reset_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestAddEmail",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/add_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),email:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestEmailRemovalCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!0,e.updateWarning()),n(t)}),(function(e){o(e)})),!0}},{key:"removeEmailWithoutCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_without_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!1,e.updateWarning()),n(t)}),(function(e){o(e)})),!0}},{key:"removeEmailWithCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_with_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&e.getRegisteredEmail((function(){}),(function(){})),n(t)}),(function(e){o(e)})),!0}},{key:"getRegisteredEmail",value:function(t,n){var o=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===a||this.isAccessTokenExpired()?i?(this.refresh((function(){o.getRegisteredEmail(t,n,i=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/get_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:a})}).then((function(e){if(401!==e.status||!i)return e.json();o.refresh((function(){o.getRegisteredEmail(t,n,i=!1)}),n)})).then((function(n){e.emailDeletionWarning=null!=n.emailExpiry,e.updateWarning(),t(n)}),(function(e){n(e)})),!0)}},{key:"authenticate",value:function(e,t,n,o){var i=this;return fetch(this.ADDRESS+"/login/authenticate",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){i.parseJWT(e),n(e)}),(function(e){o(e)})),!0}},{key:"register",value:function(e,t,n,o,i,a){var r=JSON.stringify({username:e,password:t,email:n,agree:o});return(null===n||void 0===n||n.length<1)&&(r=JSON.stringify({username:e,password:t,agree:o})),fetch(this.ADDRESS+"/login/register",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){i(e)}),(function(e){a(e)})),!0}},{key:"updateLoginButton",value:function(){e.loginButton&&e.loginButton.updateLoginState()}},{key:"updateWarning",value:function(){null!=e.loginButton&&e.loginButton.updateWarning()}},{key:"refresh",value:function(t,n){var o=this,i=localStorage.getItem(this.REFRESH_TOKEN);return void 0===i?(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/refresh",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:i})}).then((function(e){return e.json()})).then((function(i){void 0!==i.success?i.success?o.parseJWT(i)?t():n("Didn't undertand the response from the server."):(e.logout(),void 0!==i.reason?n(i.reason):n("Unsuccessful refresh of access token.")):n("Unknown error on refreshing access token.")}),(function(e){n(e)})),!0)}},{key:"fetchSecureGET",value:function(e,t,n){var o=this,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===a||this.isAccessTokenExpired()?i?(this.refresh((function(){o.fetchSecureGET(e,t,n,i=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+a},method:"GET"}).then((function(a){401===a.status&&i?o.refresh((function(){o.fetchSecureGET(e,t,n,i=!1)}),n):a.json().then((function(e){t(e)}),(function(e){n(e)}))})),!0)}},{key:"fetchSecurePOST",value:function(e,t,n,o){var i=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===r?a?(this.refresh((function(){i.fetchSecurePOST(e,n,o,a=!1)}),o),!0):(o("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r},method:"POST",body:JSON.stringify(t)}).then((function(r){401===r.status&&a?i.refresh((function(){i.fetchSecurePOST(e,t,n,o,a=!1)}),o):r.json().then((function(e){n(e)}),(function(e){o(e)}))})),!0)}},{key:"getUsername",value:function(){return localStorage.getItem(this.USERNAME)}},{key:"logout",value:function(){sessionStorage.removeItem(this.ACCESS_TOKEN),sessionStorage.removeItem(this.ACCESS_TOKEN_EXPIRY),localStorage.removeItem(this.REFRESH_TOKEN),localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY),localStorage.removeItem(this.USERNAME),this.updateLoginButton()}},{key:"isLoggedIn",value:function(){var t=void 0!==this.getUsername()&&null!==this.getUsername();return t&&e.isRefreshTokenExpired()&&(e.logout(),t=!1),t}},{key:"parseJWT",value:function(e){if(void 0===e.access_token)return this.logout(),!1;sessionStorage.setItem(this.ACCESS_TOKEN,e.access_token),localStorage.setItem(this.REFRESH_TOKEN,e.refresh_token);var t=e.access_token.split(".");if(null!==t&&3===t.length){var n=atob(t[1]);n=JSON.parse(n),sessionStorage.setItem(this.ACCESS_TOKEN_EXPIRY,n.exp)}localStorage.setItem(this.USERNAME,e.username);var o=JSON.parse(atob(e.refresh_token.split(".")[1]));return localStorage.setItem(this.REFRESH_TOKEN_EXPIRY,o.exp),this.updateLoginButton(),!0}},{key:"isAccessTokenExpired",value:function(){var e=sessionStorage.getItem(this.ACCESS_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"isRefreshTokenExpired",value:function(){var e=localStorage.getItem(this.REFRESH_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}}]),e}();a.emailDeletionWarning=!1,a.loginButton=null,t.a=a},784:function(e,t,n){"use strict";n.r(t);var o=n(9),i=n(10),a=n(11),r=n(12),s=n(0),c=n.n(s),l=n(14),u=n(61),f=n(59),p=n(1),g=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).logout=function(e){e.preventDefault(),u.a.logout(),i.setState({loggedIn:!1}),i.state.setParentState&&i.state.setParentState(!1),window.location.replace("https://api.brawl.ai/logout")},i.updateWarning=function(){i.setState({emailDeletionWarning:u.a.emailDeletionWarning})},i.updateLoginState=function(){var e=u.a.isLoggedIn();i.setState({loggedIn:e,username:u.a.getUsername()}),i.state.setParentState&&i.state.setParentState(e)},i.state={loggedIn:!1,username:null,onClickAction:e.onClickAction,emailDeletionWarning:!1},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateLoginState(),u.a.loginButton=this,u.a.getRegisteredEmail(this.updateWarning,(function(){}))}},{key:"render",value:function(){var e=this.state,t=e.loggedIn,n=e.username,o=e.onClickAction,i="navigation-item navigation-item-logged-in";if(e.emailDeletionWarning&&(i="navigation-item navigation-item-logged-in-warning"),t){var a="Logged in as "+n+". \nPress here to logout\nor manage account.";return Object(p.jsxs)(l.b,{className:i,to:"account",title:a,onClick:o,children:[Object(p.jsx)(f.a,{icon:"user",className:"navigation-login-button-icon"}),Object(p.jsx)("span",{className:"navigation-login-button-name",children:"Account"})]})}return Object(p.jsxs)(l.b,{className:"navigation-item navigation-item-logging-in",to:"login",title:"Not logged in.\nPress here to login or register.",onClick:o,children:[Object(p.jsx)(f.a,{icon:"user",className:"navigation-login-button-icon"}),Object(p.jsx)("span",{className:"navigation-login-button-name",children:"Account"})]})}}]),n}(c.a.Component),h=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).setLoginState=function(e){i.setState({loggedIn:e})},i.toggleMenu=function(){var e="none";i.menuDisplay===e&&(e="inherit"),i.menuDisplay=e,document.documentElement.style.setProperty("--nav-item-display",e)},i.collapseMenu=function(){var e="none";i.menuDisplay=e,document.documentElement.style.setProperty("--nav-item-display",e)},i.state={loggedIn:!1},i.menuDisplay="none",i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({loggedIn:u.a.isLoggedIn()})}},{key:"render",value:function(){return Object(p.jsxs)("header",{className:"navigation-bar",children:[Object(p.jsxs)("span",{className:"navigation-first",children:[Object(p.jsxs)(l.c,{to:"/",title:"Go to homepage.",children:[Object(p.jsx)("img",{className:"navigation-logo",src:"/logo.svg",alt:"Logo"}),Object(p.jsxs)("span",{className:"navigation-shorttitle",children:["brawl.ai",Object(p.jsx)("sup",{className:"title-superscript",children:"\u03b2"})]}),Object(p.jsxs)("span",{className:"navigation-fulltitle",children:["Brawl Artificial Intelligence",Object(p.jsx)("sup",{className:"title-superscript",children:"Beta"})]})]}),Object(p.jsx)("button",{className:"navigation-menu-button",onClick:this.toggleMenu,children:Object(p.jsx)(f.a,{icon:"bars"})})]}),Object(p.jsx)(l.c,{className:"navigation-item",to:"/guide",onClick:this.collapseMenu,title:"The rule book.\nData formats.\nControl messages.",children:"Guide"}),Object(p.jsx)(l.c,{className:"navigation-item",to:"/participate",onClick:this.collapseMenu,title:"Join the brawl!\nCreate new projects.\nModify old ones.",children:"Participate"}),Object(p.jsx)(l.c,{className:"navigation-item",to:"/observe",onClick:this.collapseMenu,title:"How am I doing?\nHow are others doing?\nWhat is the situation?",children:"Observe"}),Object(p.jsx)(l.c,{className:"navigation-item",to:"/about",onClick:this.collapseMenu,title:"Contact.\nPrivacy statement.\nTerms and conditions.",children:"About"}),Object(p.jsx)(g,{setLoginState:this.setLoginState,onClickAction:this.toggleMenu})]})}}]),n}(c.a.Component);t.default=h}}]);