(this.webpackJsonppages=this.webpackJsonppages||[]).push([[206],{40:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(70);var o=n(58),s=n(71);function r(e,t){return Object(i.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(c){o=!0,s=c}finally{try{i||null==a.return||a.return()}finally{if(o)throw s}}return n}}(e,t)||Object(o.a)(e,t)||Object(s.a)()}},509:function(e,t,n){"use strict";n.r(t);var i=n(40),o=n(0),s=n(14),r=n(2),a=n(61),c=n(1),u=1,l=2,h=3,f=4;function d(e){switch(e.status){case u:return Object(c.jsx)("div",{className:"form-text-area",children:"Checking email status..."});case l:return Object(c.jsx)("div",{className:"form-text-area",children:Object(c.jsx)(s.c,{to:"/add-email",title:"Add email address to this account.",className:"form-link inline",children:"Add email address"})});case h:return Object(c.jsx)("div",{className:"form-text-area",children:Object(c.jsx)(s.c,{to:"/remove-email-without-code",title:"Complete email address removal from this account.",className:"form-link inline email-removal-warning",children:"Complete email address removal"})});case f:return Object(c.jsx)("div",{className:"form-text-area",children:Object(c.jsx)(s.c,{to:"/remove-email-request",title:"Request to remove the email address from this account.",className:"form-link inline",children:"Remove email address"})})}}t.default=function(e){var t=Object(o.useState)(a.a.getUsername()),n=Object(i.a)(t,2),p=n[0],m=n[1],g=Object(o.useState)(u),S=Object(i.a)(g,2),j=S[0],v=S[1];Object(o.useEffect)((function(){null!==e.title&&void 0!==e.title&&(document.title=e.title)}),[e.title]),Object(o.useEffect)((function(){a.a.getRegisteredEmail(E,(function(){}))}),[a.a.getUsername()]);var E=function(e){void 0!==e&&void 0!==e.success&&e.success&&(null!=e.emailExpiry?v(h):null!=e.email?v(f):v(l))};return a.a.isLoggedIn()?Object(c.jsx)("div",{className:"form-container",children:Object(c.jsx)("div",{className:"form-box",children:Object(c.jsxs)("div",{className:"form-presentation",children:[Object(c.jsxs)("h2",{className:"form-title",children:["Hello ",p]}),Object(c.jsxs)("div",{className:"form-text-area",children:[Object(c.jsx)("h3",{children:"Thank you for participating!"}),Object(c.jsxs)("p",{children:["You can get started by selecting ",Object(c.jsx)(s.b,{className:"inline",to:"/participate",children:"participate"})," on the navigation bar at the top. To create a bot:"]}),Object(c.jsxs)("ol",{children:[Object(c.jsxs)("li",{children:["Create a ",Object(c.jsx)(s.b,{className:"inline",to:"/participate",children:"new project"}),"."]}),Object(c.jsx)("li",{children:"Add units and source-code for the bot."}),Object(c.jsx)("li",{children:"Launch the bot."})]}),Object(c.jsxs)("p",{children:["More details to get started can be found in the ",Object(c.jsx)(s.b,{className:"inline",to:"/guide",children:"guide"}),"."]})]}),Object(c.jsx)("div",{className:"form-text-area",children:Object(c.jsx)("h3",{children:"Manage your account:"})}),Object(c.jsx)("div",{className:"form-text-area",children:Object(c.jsx)(s.c,{to:"/change-password",title:"Change to a different password.",className:"form-link inline",children:"Change password"})}),Object(c.jsx)(d,{status:j}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.a.logout(),m(a.a.getUsername())},className:"form-button-padding",children:Object(c.jsx)("input",{className:"active-button form-button-primary",type:"submit",value:"Log Out"})})]})})}):Object(c.jsx)(r.a,{to:"/login?loggedout"})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(67);function o(e,t){if(e){if("string"===typeof e)return Object(i.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i.a)(e,t):void 0}}},61:function(e,t,n){"use strict";var i=n(9),o=n(10),s=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"loginUrl",value:function(e,t){fetch(this.ADDRESS+"/login/").then((function(e){return e.json()})).then((function(t){e(t)}),(function(e){t(e)}))}},{key:"authorize",value:function(e,t,n){var i=this;return fetch(this.ADDRESS+"/login/authorize",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e})}).then((function(e){return e.json()})).then((function(e){i.parseJWT(e),t()}),(function(e){n(e)})),!0}},{key:"changePassword",value:function(e,t,n,i){return fetch(this.ADDRESS+"/login/change_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),oldPassword:e,newPassword:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){i(e)})),!0}},{key:"requestPasswordResetCode",value:function(e,t,n){return fetch(this.ADDRESS+"/login/reset_password_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:e})}).then((function(e){return e.json()})).then((function(e){t(e)}),(function(e){n(e)})),!0}},{key:"usePasswordResetCode",value:function(e,t,n,i){return fetch(this.ADDRESS+"/login/reset_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){i(e)})),!0}},{key:"requestAddEmail",value:function(e,t,n,i){return fetch(this.ADDRESS+"/login/add_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),email:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){i(e)})),!0}},{key:"requestEmailRemovalCode",value:function(t,n,i){return fetch(this.ADDRESS+"/login/remove_email_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!0,e.updateWarning()),n(t)}),(function(e){i(e)})),!0}},{key:"removeEmailWithoutCode",value:function(t,n,i){return fetch(this.ADDRESS+"/login/remove_email_without_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!1,e.updateWarning()),n(t)}),(function(e){i(e)})),!0}},{key:"removeEmailWithCode",value:function(t,n,i){return fetch(this.ADDRESS+"/login/remove_email_with_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&e.getRegisteredEmail((function(){}),(function(){})),n(t)}),(function(e){i(e)})),!0}},{key:"getRegisteredEmail",value:function(t,n){var i=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===s||this.isAccessTokenExpired()?o?(this.refresh((function(){i.getRegisteredEmail(t,n,o=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/get_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:s})}).then((function(e){if(401!==e.status||!o)return e.json();i.refresh((function(){i.getRegisteredEmail(t,n,o=!1)}),n)})).then((function(n){e.emailDeletionWarning=null!=n.emailExpiry,e.updateWarning(),t(n)}),(function(e){n(e)})),!0)}},{key:"authenticate",value:function(e,t,n,i){var o=this;return fetch(this.ADDRESS+"/login/authenticate",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){o.parseJWT(e),n(e)}),(function(e){i(e)})),!0}},{key:"register",value:function(e,t,n,i,o,s){var r=JSON.stringify({username:e,password:t,email:n,agree:i});return(null===n||void 0===n||n.length<1)&&(r=JSON.stringify({username:e,password:t,agree:i})),fetch(this.ADDRESS+"/login/register",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){o(e)}),(function(e){s(e)})),!0}},{key:"updateLoginButton",value:function(){e.loginButton&&e.loginButton.updateLoginState()}},{key:"updateWarning",value:function(){null!=e.loginButton&&e.loginButton.updateWarning()}},{key:"refresh",value:function(t,n){var i=this,o=localStorage.getItem(this.REFRESH_TOKEN);return void 0===o?(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/refresh",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:o})}).then((function(e){return e.json()})).then((function(o){void 0!==o.success?o.success?i.parseJWT(o)?t():n("Didn't undertand the response from the server."):(e.logout(),void 0!==o.reason?n(o.reason):n("Unsuccessful refresh of access token.")):n("Unknown error on refreshing access token.")}),(function(e){n(e)})),!0)}},{key:"fetchSecureGET",value:function(e,t,n){var i=this,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===s||this.isAccessTokenExpired()?o?(this.refresh((function(){i.fetchSecureGET(e,t,n,o=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+s},method:"GET"}).then((function(s){401===s.status&&o?i.refresh((function(){i.fetchSecureGET(e,t,n,o=!1)}),n):s.json().then((function(e){t(e)}),(function(e){n(e)}))})),!0)}},{key:"fetchSecurePOST",value:function(e,t,n,i){var o=this,s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===r?s?(this.refresh((function(){o.fetchSecurePOST(e,n,i,s=!1)}),i),!0):(i("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r},method:"POST",body:JSON.stringify(t)}).then((function(r){401===r.status&&s?o.refresh((function(){o.fetchSecurePOST(e,t,n,i,s=!1)}),i):r.json().then((function(e){n(e)}),(function(e){i(e)}))})),!0)}},{key:"getUsername",value:function(){return localStorage.getItem(this.USERNAME)}},{key:"logout",value:function(){sessionStorage.removeItem(this.ACCESS_TOKEN),sessionStorage.removeItem(this.ACCESS_TOKEN_EXPIRY),localStorage.removeItem(this.REFRESH_TOKEN),localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY),localStorage.removeItem(this.USERNAME),this.updateLoginButton()}},{key:"isLoggedIn",value:function(){var t=void 0!==this.getUsername()&&null!==this.getUsername();return t&&e.isRefreshTokenExpired()&&(e.logout(),t=!1),t}},{key:"parseJWT",value:function(e){if(void 0===e.access_token)return this.logout(),!1;sessionStorage.setItem(this.ACCESS_TOKEN,e.access_token),localStorage.setItem(this.REFRESH_TOKEN,e.refresh_token);var t=e.access_token.split(".");if(null!==t&&3===t.length){var n=atob(t[1]);n=JSON.parse(n),sessionStorage.setItem(this.ACCESS_TOKEN_EXPIRY,n.exp)}localStorage.setItem(this.USERNAME,e.username);var i=JSON.parse(atob(e.refresh_token.split(".")[1]));return localStorage.setItem(this.REFRESH_TOKEN_EXPIRY,i.exp),this.updateLoginButton(),!0}},{key:"isAccessTokenExpired",value:function(){var e=sessionStorage.getItem(this.ACCESS_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"isRefreshTokenExpired",value:function(){var e=localStorage.getItem(this.REFRESH_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"ACCESS_TOKEN",get:function(){return"access_token"}},{key:"ACCESS_TOKEN_EXPIRY",get:function(){return"access_token_expiry"}},{key:"REFRESH_TOKEN",get:function(){return"refresh_token"}},{key:"REFRESH_TOKEN_EXPIRY",get:function(){return"refresh_token_expiry"}},{key:"USERNAME",get:function(){return"username"}},{key:"ADDRESS",get:function(){return"https://api.brawl.ai"}}]),e}();s.emailDeletionWarning=!1,s.loginButton=null,t.a=s},67:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,"a",(function(){return i}))},70:function(e,t,n){"use strict";function i(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return i}))},71:function(e,t,n){"use strict";function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return i}))}}]);