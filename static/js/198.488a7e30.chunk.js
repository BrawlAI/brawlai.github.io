(this.webpackJsonppages=this.webpackJsonppages||[]).push([[198],{37:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(58);function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(o.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw s}}}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(70);var r=n(58),i=n(71);function s(e,t){return Object(o.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(c){r=!0,i=c}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||Object(r.a)(e,t)||Object(i.a)()}},511:function(e,t,n){"use strict";n.r(t);var o=n(40),r=n(37),i=n(0),s=n(14),a=n(61),c=n(1);function u(e){var t,n=e.fields,o=e.targetField,i=[],s=Object(r.a)(n);try{for(s.s();!(t=s.n()).done;){var a=t.value;a.field===o&&i.push(Object(c.jsx)("div",{className:"alert alert-danger small-error",role:"alert",children:a.reason},o))}}catch(u){s.e(u)}finally{s.f()}return i}function l(e){var t=e.message,n=[];return void 0!==t&&null!==t&&n.push(Object(c.jsx)("div",{className:"alert alert-danger small-error",role:"alert",children:t},"messageAlert")),n}function d(e){var t=e.message,n=e.display,o=[];return void 0!==t&&null!==t&&void 0!==n&&null!==n&&n&&o.push(Object(c.jsx)("div",{className:"alert alert-success small-error",role:"alert",children:t},t)),o}t.default=function(e){var t=Object(i.useState)(null),n=Object(o.a)(t,2),r=n[0],f=n[1],h=Object(i.useState)(null),p=Object(o.a)(h,2),m=p[0],g=p[1],S=Object(i.useState)(null),v=Object(o.a)(S,2),y=v[0],j=v[1],E=Object(i.useState)([]),O=Object(o.a)(E,2),b=O[0],T=O[1],A=Object(i.useState)(!1),N=Object(o.a)(A,2),R=N[0],k=N[1];Object(i.useEffect)((function(){null!==e.title&&void 0!==e.title&&(document.title=e.title)}),[e.title]);var _=function(e){void 0!==e&&void 0!==e.success&&(e.success&&(k(!0),T([]),f("")),void 0!==e.reason&&("field"===e.reason?(T(e.field),f("")):(T([]),f(e.reason))))},w=function(e){void 0!==e&&("TypeError"===e.name?f("Sorry! Network problem."):f(e.message))};return Object(c.jsx)("div",{className:"form-container",children:Object(c.jsx)("div",{className:"form-box",children:Object(c.jsxs)("div",{className:"form-presentation",children:[Object(c.jsx)("h2",{className:"form-title",children:"Add email"}),Object(c.jsx)("div",{className:"form-text-area",children:Object(c.jsxs)("p",{children:["Email is used for password / account recovery and it is optional. You do not need to have an email to use your account. You can only add a new address if your account does not already have one. To change email addresses, an old address must be removed first. Note: email address is ",Object(c.jsx)(s.c,{to:"/privacy",className:"inline",children:"case-sensitive"}),"."]})}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.a.requestAddEmail(m,y,_,w),R&&k(!1)},children:[Object(c.jsx)(d,{message:"Email address has been added.",display:R}),Object(c.jsx)(l,{message:r}),Object(c.jsx)(u,{fields:b,targetField:"email"}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",id:"email",name:"email",className:"form-control",placeholder:"Email",value:m,onChange:function(e){g(e.target.value)},required:!0,autoFocus:!0})}),Object(c.jsx)(u,{fields:b,targetField:"password"}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"Current password",value:y,onChange:function(e){j(e.target.value)},required:!0})}),Object(c.jsxs)("div",{className:"form-action-row",children:[Object(c.jsx)("div",{className:"form-login-link-register",children:Object(c.jsx)(s.c,{to:"/remove-email-request",title:"Remove an existing email address from this account?",className:"form-link inline",children:"Remove email address instead?"})}),Object(c.jsx)("div",{className:"btn-signin",children:Object(c.jsx)("button",{className:"active-button form-button-primary",type:"submit",children:"Add email"})})]})]})]})})})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(67);function r(e,t){if(e){if("string"===typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}},61:function(e,t,n){"use strict";var o=n(9),r=n(10),i=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"loginUrl",value:function(e,t){fetch(this.ADDRESS+"/login/").then((function(e){return e.json()})).then((function(t){e(t)}),(function(e){t(e)}))}},{key:"authorize",value:function(e,t,n){var o=this;return fetch(this.ADDRESS+"/login/authorize",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e})}).then((function(e){return e.json()})).then((function(e){o.parseJWT(e),t()}),(function(e){n(e)})),!0}},{key:"changePassword",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/change_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),oldPassword:e,newPassword:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestPasswordResetCode",value:function(e,t,n){return fetch(this.ADDRESS+"/login/reset_password_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:e})}).then((function(e){return e.json()})).then((function(e){t(e)}),(function(e){n(e)})),!0}},{key:"usePasswordResetCode",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/reset_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestAddEmail",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/add_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),email:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestEmailRemovalCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!0,e.updateWarning()),n(t)}),(function(e){o(e)})),!0}},{key:"removeEmailWithoutCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_without_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!1,e.updateWarning()),n(t)}),(function(e){o(e)})),!0}},{key:"removeEmailWithCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_with_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&e.getRegisteredEmail((function(){}),(function(){})),n(t)}),(function(e){o(e)})),!0}},{key:"getRegisteredEmail",value:function(t,n){var o=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===i||this.isAccessTokenExpired()?r?(this.refresh((function(){o.getRegisteredEmail(t,n,r=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/get_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:i})}).then((function(e){if(401!==e.status||!r)return e.json();o.refresh((function(){o.getRegisteredEmail(t,n,r=!1)}),n)})).then((function(n){e.emailDeletionWarning=null!=n.emailExpiry,e.updateWarning(),t(n)}),(function(e){n(e)})),!0)}},{key:"authenticate",value:function(e,t,n,o){var r=this;return fetch(this.ADDRESS+"/login/authenticate",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){r.parseJWT(e),n(e)}),(function(e){o(e)})),!0}},{key:"register",value:function(e,t,n,o,r,i){var s=JSON.stringify({username:e,password:t,email:n,agree:o});return(null===n||void 0===n||n.length<1)&&(s=JSON.stringify({username:e,password:t,agree:o})),fetch(this.ADDRESS+"/login/register",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:s}).then((function(e){return e.json()})).then((function(e){r(e)}),(function(e){i(e)})),!0}},{key:"updateLoginButton",value:function(){e.loginButton&&e.loginButton.updateLoginState()}},{key:"updateWarning",value:function(){null!=e.loginButton&&e.loginButton.updateWarning()}},{key:"refresh",value:function(t,n){var o=this,r=localStorage.getItem(this.REFRESH_TOKEN);return void 0===r?(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/refresh",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:r})}).then((function(e){return e.json()})).then((function(r){void 0!==r.success?r.success?o.parseJWT(r)?t():n("Didn't undertand the response from the server."):(e.logout(),void 0!==r.reason?n(r.reason):n("Unsuccessful refresh of access token.")):n("Unknown error on refreshing access token.")}),(function(e){n(e)})),!0)}},{key:"fetchSecureGET",value:function(e,t,n){var o=this,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===i||this.isAccessTokenExpired()?r?(this.refresh((function(){o.fetchSecureGET(e,t,n,r=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+i},method:"GET"}).then((function(i){401===i.status&&r?o.refresh((function(){o.fetchSecureGET(e,t,n,r=!1)}),n):i.json().then((function(e){t(e)}),(function(e){n(e)}))})),!0)}},{key:"fetchSecurePOST",value:function(e,t,n,o){var r=this,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===s?i?(this.refresh((function(){r.fetchSecurePOST(e,n,o,i=!1)}),o),!0):(o("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+s},method:"POST",body:JSON.stringify(t)}).then((function(s){401===s.status&&i?r.refresh((function(){r.fetchSecurePOST(e,t,n,o,i=!1)}),o):s.json().then((function(e){n(e)}),(function(e){o(e)}))})),!0)}},{key:"getUsername",value:function(){return localStorage.getItem(this.USERNAME)}},{key:"logout",value:function(){sessionStorage.removeItem(this.ACCESS_TOKEN),sessionStorage.removeItem(this.ACCESS_TOKEN_EXPIRY),localStorage.removeItem(this.REFRESH_TOKEN),localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY),localStorage.removeItem(this.USERNAME),this.updateLoginButton()}},{key:"isLoggedIn",value:function(){var t=void 0!==this.getUsername()&&null!==this.getUsername();return t&&e.isRefreshTokenExpired()&&(e.logout(),t=!1),t}},{key:"parseJWT",value:function(e){if(void 0===e.access_token)return this.logout(),!1;sessionStorage.setItem(this.ACCESS_TOKEN,e.access_token),localStorage.setItem(this.REFRESH_TOKEN,e.refresh_token);var t=e.access_token.split(".");if(null!==t&&3===t.length){var n=atob(t[1]);n=JSON.parse(n),sessionStorage.setItem(this.ACCESS_TOKEN_EXPIRY,n.exp)}localStorage.setItem(this.USERNAME,e.username);var o=JSON.parse(atob(e.refresh_token.split(".")[1]));return localStorage.setItem(this.REFRESH_TOKEN_EXPIRY,o.exp),this.updateLoginButton(),!0}},{key:"isAccessTokenExpired",value:function(){var e=sessionStorage.getItem(this.ACCESS_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"isRefreshTokenExpired",value:function(){var e=localStorage.getItem(this.REFRESH_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"ACCESS_TOKEN",get:function(){return"access_token"}},{key:"ACCESS_TOKEN_EXPIRY",get:function(){return"access_token_expiry"}},{key:"REFRESH_TOKEN",get:function(){return"refresh_token"}},{key:"REFRESH_TOKEN_EXPIRY",get:function(){return"refresh_token_expiry"}},{key:"USERNAME",get:function(){return"username"}},{key:"ADDRESS",get:function(){return"https://api.brawl.ai"}}]),e}();i.emailDeletionWarning=!1,i.loginButton=null,t.a=i},67:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,"a",(function(){return o}))},70:function(e,t,n){"use strict";function o(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return o}))},71:function(e,t,n){"use strict";function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return o}))}}]);