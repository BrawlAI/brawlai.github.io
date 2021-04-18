(this.webpackJsonppages=this.webpackJsonppages||[]).push([[196],{153:function(e,t,n){"use strict";var o=n(9),i=n(10),a=n(61),r=n(85),s=n(6),c=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"fetchGET",value:function(e,t,n){return fetch(this.ADDRESS+"/open/"+e,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){t(e)}),(function(e){n(e)})),!0}},{key:"fetchPOST",value:function(e,t,n,o){return fetch(a.a.ADDRESS+"/open/"+e,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"getRanking",value:function(t,n,o,i){e.fetchPOST("get_ranking",{rank:t,count:n},o,(function(e){s.c.error("Failed to load ranking results.",{autoClose:1e4}),null!=i&&i(e)}))}},{key:"getBrawl",value:function(t,n,o,i,a){e.postWithToastPayload("get_brawl",n,{attackerUsername:t,attackerProjectName:n,defenderUsername:o,defenderProjectName:i},"Loading ","Failed to load "," loaded.",a)}},{key:"getProgress",value:function(t,n,o){e.postWithToastPayload("get_progress",n,{username:t,projectName:n},"Loading ","Failed to load "," loaded.",o)}},{key:"post",value:function(t,n,o){e.fetchPOST(t,{name:n},(function(e){o&&o(e)}),(function(e){console.log("POST ERROR: "+t),console.log(e),void 0!==e&&null!==e&&e.toString().length<100&&s.c.error(e.toString(),{autoClose:1e4})}))}},{key:"get",value:function(t,n){e.fetchGET(t,(function(e){n&&n(e)}),(function(e){console.log("GET ERROR: "+t),console.log(e),void 0!==e&&null!==e&&e.toString().length<100&&s.c.error(e.toString(),{autoClose:1e4})}))}},{key:"postWithToast",value:function(t,n,o,i,a,c){var u=s.c.warning(o+n+"...",{autoClose:!1});e.fetchPOST(t,{name:n},(function(e){r.a.finishToast(e,u,i,a,n,c(e))}),(function(e){r.a.finishToast(e,u,i,a,n,void 0)}))}},{key:"postWithToastPayload",value:function(t,n,o,i,a,c,u){var l=s.c.warning(i+n+"...",{autoClose:!1});e.fetchPOST(t,o,(function(e){r.a.finishToast(e,l,a,c,n,u(e))}),(function(e){r.a.finishToast(e,l,a,c,n,void 0)}))}}]),e}();t.a=c},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(58);function i(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(o.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw r}}}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(70);var i=n(58),a=n(71);function r(e,t){return Object(o.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,i=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}return n}}(e,t)||Object(i.a)(e,t)||Object(a.a)()}},502:function(e,t,n){"use strict";n.r(t);var o=n(40),i=n(37),a=n(0),r=n(153),s=n(85),c=n(14),u=n(1);function l(e){var t,n=e.items,o=[],a=Object(i.a)(n);try{for(a.s();!(t=a.n()).done;){var r=t.value,l="/progress?project="+r.projectName+"&author="+r.username;o.push(Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:r.rank}),Object(u.jsx)("td",{children:Object(u.jsx)(c.b,{className:"inline",to:l,children:r.projectName})}),Object(u.jsx)("td",{children:Object(u.jsx)("span",{title:new Date(r.rankTime).toString(),children:s.a.timeSince(r.rankTime)})}),Object(u.jsxs)("td",{title:r.country,children:[Object(u.jsx)("span",{className:"flag-icon flag-icon-"+r.countryCode.toLowerCase()+" ranking-flag-size"}),r.username]})]},r.rank))}}catch(f){a.e(f)}finally{a.f()}return o}t.default=function(e){var t=e.count;Object(a.useEffect)((function(){document.title=e.title}),[e.title]);var n=Object(a.useState)([]),i=Object(o.a)(n,2),s=i[0],f=i[1],d=Object(a.useState)(!1),h=Object(o.a)(d,2),p=h[0],g=h[1],v=100,S=null!=t?parseInt(t):1;return(!Number.isInteger(S)||S<1)&&(S=1),Object(a.useEffect)((function(){r.a.getRanking(S,v,(function(e){var t=!0;null!=e&&null!=e.success&&(e.success&&null!=e.ranking?(f(e.ranking),t=!1):null!=e.reason&&(g(e.reason),t=!1)),t&&g("Failed to fetch results.")}))}),[t]),p?Object(u.jsxs)("div",{className:"conditional-page-indent",children:[Object(u.jsx)("h2",{children:"Ranking of the best bots"}),Object(u.jsx)("div",{children:p}),Object(u.jsx)(c.b,{to:S-v<=1?"/observe":"/observe/"+(S-v),className:"inline link-space",children:"Previous"})]}):Object(u.jsxs)("div",{className:"conditional-page-indent",children:[Object(u.jsx)("h2",{children:"Ranking of the best bots"}),Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Rank"}),Object(u.jsx)("th",{children:"Bot"}),Object(u.jsx)("th",{children:"Age"}),Object(u.jsx)("th",{children:"Author"})]}),Object(u.jsx)(l,{items:s})]})}),0===s.length?Object(u.jsx)("div",{children:"Loading..."}):"",1!==S?Object(u.jsx)(c.b,{to:S-v<=1?"/observe":"/observe/"+(S-v),className:"inline",children:"Previous"}):"",s.length===v?Object(u.jsx)(c.b,{to:"/observe/"+(S+v),className:"inline",children:"Next"}):""]})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(67);function i(e,t){if(e){if("string"===typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}},61:function(e,t,n){"use strict";var o=n(9),i=n(10),a=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"loginUrl",value:function(e,t){fetch(this.ADDRESS+"/login/").then((function(e){return e.json()})).then((function(t){e(t)}),(function(e){t(e)}))}},{key:"authorize",value:function(e,t,n){var o=this;return fetch(this.ADDRESS+"/login/authorize",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e})}).then((function(e){return e.json()})).then((function(e){o.parseJWT(e),t()}),(function(e){n(e)})),!0}},{key:"changePassword",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/change_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),oldPassword:e,newPassword:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestPasswordResetCode",value:function(e,t,n){return fetch(this.ADDRESS+"/login/reset_password_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:e})}).then((function(e){return e.json()})).then((function(e){t(e)}),(function(e){n(e)})),!0}},{key:"usePasswordResetCode",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/reset_password",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestAddEmail",value:function(e,t,n,o){return fetch(this.ADDRESS+"/login/add_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),email:e,password:t})}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(e){o(e)})),!0}},{key:"requestEmailRemovalCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_request",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!0,e.updateWarning()),n(t)}),(function(e){o(e)})),!0}},{key:"removeEmailWithoutCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_without_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:this.getUsername(),password:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&(e.emailDeletionWarning=!1,e.updateWarning()),n(t)}),(function(e){o(e)})),!0}},{key:"removeEmailWithCode",value:function(t,n,o){return fetch(this.ADDRESS+"/login/remove_email_with_code",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:t})}).then((function(e){return e.json()})).then((function(t){null!=t.success&&t.success&&e.getRegisteredEmail((function(){}),(function(){})),n(t)}),(function(e){o(e)})),!0}},{key:"getRegisteredEmail",value:function(t,n){var o=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===a||this.isAccessTokenExpired()?i?(this.refresh((function(){o.getRegisteredEmail(t,n,i=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/get_email",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:a})}).then((function(e){if(401!==e.status||!i)return e.json();o.refresh((function(){o.getRegisteredEmail(t,n,i=!1)}),n)})).then((function(n){e.emailDeletionWarning=null!=n.emailExpiry,e.updateWarning(),t(n)}),(function(e){n(e)})),!0)}},{key:"authenticate",value:function(e,t,n,o){var i=this;return fetch(this.ADDRESS+"/login/authenticate",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){i.parseJWT(e),n(e)}),(function(e){o(e)})),!0}},{key:"register",value:function(e,t,n,o,i,a){var r=JSON.stringify({username:e,password:t,email:n,agree:o});return(null===n||void 0===n||n.length<1)&&(r=JSON.stringify({username:e,password:t,agree:o})),fetch(this.ADDRESS+"/login/register",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){i(e)}),(function(e){a(e)})),!0}},{key:"updateLoginButton",value:function(){e.loginButton&&e.loginButton.updateLoginState()}},{key:"updateWarning",value:function(){null!=e.loginButton&&e.loginButton.updateWarning()}},{key:"refresh",value:function(t,n){var o=this,i=localStorage.getItem(this.REFRESH_TOKEN);return void 0===i?(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/refresh",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:i})}).then((function(e){return e.json()})).then((function(i){void 0!==i.success?i.success?o.parseJWT(i)?t():n("Didn't undertand the response from the server."):(e.logout(),void 0!==i.reason?n(i.reason):n("Unsuccessful refresh of access token.")):n("Unknown error on refreshing access token.")}),(function(e){n(e)})),!0)}},{key:"fetchSecureGET",value:function(e,t,n){var o=this,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===a||this.isAccessTokenExpired()?i?(this.refresh((function(){o.fetchSecureGET(e,t,n,i=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+a},method:"GET"}).then((function(a){401===a.status&&i?o.refresh((function(){o.fetchSecureGET(e,t,n,i=!1)}),n):a.json().then((function(e){t(e)}),(function(e){n(e)}))})),!0)}},{key:"fetchSecurePOST",value:function(e,t,n,o){var i=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===r?a?(this.refresh((function(){i.fetchSecurePOST(e,n,o,a=!1)}),o),!0):(o("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r},method:"POST",body:JSON.stringify(t)}).then((function(r){401===r.status&&a?i.refresh((function(){i.fetchSecurePOST(e,t,n,o,a=!1)}),o):r.json().then((function(e){n(e)}),(function(e){o(e)}))})),!0)}},{key:"getUsername",value:function(){return localStorage.getItem(this.USERNAME)}},{key:"logout",value:function(){sessionStorage.removeItem(this.ACCESS_TOKEN),sessionStorage.removeItem(this.ACCESS_TOKEN_EXPIRY),localStorage.removeItem(this.REFRESH_TOKEN),localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY),localStorage.removeItem(this.USERNAME),this.updateLoginButton()}},{key:"isLoggedIn",value:function(){var t=void 0!==this.getUsername()&&null!==this.getUsername();return t&&e.isRefreshTokenExpired()&&(e.logout(),t=!1),t}},{key:"parseJWT",value:function(e){if(void 0===e.access_token)return this.logout(),!1;sessionStorage.setItem(this.ACCESS_TOKEN,e.access_token),localStorage.setItem(this.REFRESH_TOKEN,e.refresh_token);var t=e.access_token.split(".");if(null!==t&&3===t.length){var n=atob(t[1]);n=JSON.parse(n),sessionStorage.setItem(this.ACCESS_TOKEN_EXPIRY,n.exp)}localStorage.setItem(this.USERNAME,e.username);var o=JSON.parse(atob(e.refresh_token.split(".")[1]));return localStorage.setItem(this.REFRESH_TOKEN_EXPIRY,o.exp),this.updateLoginButton(),!0}},{key:"isAccessTokenExpired",value:function(){var e=sessionStorage.getItem(this.ACCESS_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"isRefreshTokenExpired",value:function(){var e=localStorage.getItem(this.REFRESH_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"ACCESS_TOKEN",get:function(){return"access_token"}},{key:"ACCESS_TOKEN_EXPIRY",get:function(){return"access_token_expiry"}},{key:"REFRESH_TOKEN",get:function(){return"refresh_token"}},{key:"REFRESH_TOKEN_EXPIRY",get:function(){return"refresh_token_expiry"}},{key:"USERNAME",get:function(){return"username"}},{key:"ADDRESS",get:function(){return"https://api.brawl.ai"}}]),e}();a.emailDeletionWarning=!1,a.loginButton=null,t.a=a},67:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,"a",(function(){return o}))},70:function(e,t,n){"use strict";function o(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return o}))},71:function(e,t,n){"use strict";function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return o}))},85:function(e,t,n){"use strict";var o=n(37),i=n(9),a=n(10),r=n(61),s=n(6),c=function(){function e(){Object(i.a)(this,e)}return Object(a.a)(e,null,[{key:"renameProject",value:function(t,n,o){var i=s.c.warning("Renaming "+t+"...",{autoClose:!1});r.a.fetchSecurePOST("rename_project",{oldName:t,newName:n},(function(a){e.finishToast(a,i,"Failed to rename "," renamed to "+n+".",t,o)}),(function(o){e.finishToast(o,i,"Failed to rename "," renamed to "+n+".",t,void 0)}))}},{key:"loadFiles",value:function(t,n){e.postWithToast("get_project_files",t,"Loading files for ","Failed to load files for "," files loaded.",n)}},{key:"loadUnits",value:function(t,n){e.postWithToast("get_project_units",t,"Loading units for ","Failed to load units for "," units loaded.",n)}},{key:"deleteProject",value:function(t,n){e.postWithToast("delete_project",t,"Deleting ","Failed to delete "," deleted.",n)}},{key:"launchProject",value:function(t,n){e.postWithToast("launch_project",t,"Launching ","Failed to launch "," launched.",n)}},{key:"listProjects",value:function(t){e.get("list_projects",t)}},{key:"createProject",value:function(t,n){e.postWithToast("create_project",t,"Creating ","Failed to create "," created.",n)}},{key:"getProgress",value:function(t,n){e.postWithToast("get_project_progress",t,"Loading ","Failed to load "," loaded.",n)}},{key:"getIdleTestResults",value:function(t,n){e.postWithToast("get_project_idle_test",t,"Loading ","Failed to load "," loaded.",n)}},{key:"getDefenderResults",value:function(t,n,o,i){e.postWithToastPayload("get_project_defense",t,{projectName:t,opponentUsername:n,opponentProjectName:o},"Loading ","Failed to load "," loaded.",i)}},{key:"getAttackerResults",value:function(t,n,o,i){e.postWithToastPayload("get_project_attack",t,{projectName:t,opponentUsername:n,opponentProjectName:o},"Loading ","Failed to load "," loaded.",i)}},{key:"getAttackerAndDefenderResults",value:function(t,n,o){e.postWithToastPayload("get_project_attack_and_defense",t,{projectName1:t,projectName2:n},"Loading ","Failed to load "," loaded.",o)}},{key:"post",value:function(e,t,n){r.a.fetchSecurePOST(e,{name:t},(function(e){n&&n(e)}),(function(t){console.log("POST ERROR: "+e),console.log(t),void 0!==t&&null!==t&&t.toString().length<100&&s.c.error(t.toString(),{autoClose:1e4})}))}},{key:"get",value:function(e,t){r.a.fetchSecureGET(e,(function(e){t&&t(e)}),(function(t){console.log("GET ERROR: "+e),console.log(t),void 0!==t&&null!==t&&t.toString().length<100&&s.c.error(t.toString(),{autoClose:1e4})}))}},{key:"duplicateProject",value:function(t,n,o){var i=s.c.warning("Duplicating "+t+"...",{autoClose:!1});r.a.fetchSecurePOST("duplicate_project",{name:t,duplicateName:n},(function(n){e.finishToast(n,i,"Failed to duplicate "," duplicated.",t,o)}),(function(n){e.finishToast(n,i,"Failed to duplicate "," duplicated.",t,void 0)}))}},{key:"postWithToast",value:function(t,n,o,i,a,c){var u=s.c.warning(o+n+"...",{autoClose:!1});r.a.fetchSecurePOST(t,{name:n},(function(t){e.finishToast(t,u,i,a,n,c(t))}),(function(t){e.finishToast(t,u,i,a,n,void 0)}))}},{key:"postWithToastPayload",value:function(t,n,o,i,a,c,u){var l=s.c.warning(i+n+"...",{autoClose:!1});r.a.fetchSecurePOST(t,o,(function(t){e.finishToast(t,l,a,c,n,u(t))}),(function(t){e.finishToast(t,l,a,c,n,void 0)}))}},{key:"saveFiles",value:function(t,n,o){var i=s.c.warning("Saving "+t+"...",{autoClose:!1});r.a.fetchSecurePOST("save_project_files",{name:t,files:JSON.stringify(n)},(function(n){e.finishToast(n,i,"Failed to save "," saved.",t,o)}),(function(n){e.finishToast(n,i,"Failed to save "," saved.",t,void 0)}))}},{key:"saveUnits",value:function(t,n,o){var i=s.c.warning("Saving "+t+"...",{autoClose:!1});r.a.fetchSecurePOST("save_project_units",{name:t,units:JSON.stringify(n)},(function(n){e.finishToast(n,i,"Failed to save "," saved.",t,o)}),(function(n){e.finishToast(n,i,"Failed to save "," saved.",t,void 0)}))}},{key:"finishToast",value:function(e,t,n,i,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;if(void 0!==e)if(void 0!==e.success)if(e.success)s.c.update(t,{render:a+i,type:s.c.TYPE.SUCCESS,autoClose:500}),void 0!==r&&r();else if(void 0!==e.reason)if("field"===e.reason){var c,u="",l=Object(o.a)(e.field);try{for(l.s();!(c=l.n()).done;){var f=c.value;u.length>0&&(u+=" "),u+=f.reason}}catch(d){l.e(d)}finally{l.f()}s.c.update(t,{render:n+a+": "+u,type:s.c.TYPE.ERROR,autoClose:1e4})}else s.c.update(t,{render:n+a+": "+e.reason,type:s.c.TYPE.ERROR,autoClose:1e4});else s.c.update(t,{render:n+a+".",type:s.c.TYPE.ERROR,autoClose:1e4});else void 0!==e.reason?s.c.update(t,{render:n+a+": "+e.reason,type:s.c.TYPE.ERROR,autoClose:1e4}):(s.c.update(t,{render:n+a+": "+e,type:s.c.TYPE.ERROR,autoClose:1e4}),console.log(e));else s.c.update(t,{render:n+a+".",type:s.c.TYPE.ERROR,autoClose:1e4}),console.log("results is undefined!")}},{key:"timeSince",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null===e||void 0===e||""===e)return"not yet";var n=Math.floor((Date.now()-Date.parse(e))/1e3);t&&(n=Math.floor((Date.parse(e)-Date.now())/1e3));var o=Math.floor(n/31536e3);return o>=1?o+(1===o?" year":" years"):(o=Math.floor(n/2592e3))>=1?o+(1===o?" month":" months"):(o=Math.floor(n/86400))>=1?o+(1===o?" day":" days"):(o=Math.floor(n/3600))>=1?o+(1===o?" hour":" hours"):(o=Math.floor(n/60))>=1?o+(1===o?" minute":" minutes"):Math.floor(n)+(1===o?" second":" seconds")}},{key:"timeUntilAccurate",value:function(e){if(null===e||void 0===e||""===e)return"not yet";var t=Math.floor((Date.parse(e)-Date.now())/1e3),n="",o=Math.floor(t/86400);if(o>=1){n.length>0&&(n+=" ");n+=o+(1===o?" day":" days")}if((o=Math.floor(t/3600))>=1){n.length>0&&(n+=" ");var i=o%24;n+=i+(1===i?" hour":" hours")}if((o=Math.floor(t/60))>=1){n.length>0&&(n+=" ");var a=o%60;n+=a+(1===a?" minute":" minutes")}n.length>0&&(n+=" ");var r=Math.floor(t)%60;return n+r+(1===r?" second":" seconds")}}]),e}();t.a=c}}]);