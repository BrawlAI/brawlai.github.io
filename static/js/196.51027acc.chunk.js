(this.webpackJsonppages=this.webpackJsonppages||[]).push([[196],{465:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n(12),r=n(15),i=n(16),c=n(63),s=n(1),l=n(0),u=n.n(l),f=n(13),d=n(79),p=n(54),m=n(7),h=n(62),j=Object(l.lazy)((function(){return n.e(2).then(n.bind(null,179))}));function g(e){var t=e.name,n=e.renameProject,a=e.newProjectName,o=e.renamingProject,r=e.unSelectEditProjectName;return t===o?Object(s.jsx)("input",{ref:function(e){null!==e&&e.focus()},className:"manager-project-title-editing",onChange:function(e){a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&n(t)},value:a(),onBlur:function(){r()},size:a().length}):Object(s.jsx)("span",{className:"manager-project-title-not-editing",children:t})}function v(e){var t=e.param1,n=e.action,a=e.icon,o=e.rotation,r=e.param2,i=e.title,c=e.hide;function l(e){e.preventDefault(),r?n(t,r):n(t)}return void 0!==c&&null!==c&&!0===c?null:null!==o?Object(s.jsx)("button",{className:"manager-icon-button",title:i,onClick:l,children:Object(s.jsx)(p.a,{icon:a,rotation:o})},t+n.toString()+a):Object(s.jsx)("button",{className:"manager-icon-button",title:i,onClick:l,children:Object(s.jsx)(p.a,{icon:a})},t+n.toString()+a)}function y(e){var t=e.to,n=e.icon,a=e.rotation,o=e.title;return null!==a?Object(s.jsx)(f.b,{className:"manager-icon-button",title:o,to:t,children:Object(s.jsx)(p.a,{icon:n,rotation:a})}):Object(s.jsx)(f.b,{className:"manager-icon-button",title:o,to:t,children:Object(s.jsx)(p.a,{icon:n})})}function b(e){var t=e.projects,n=e.deleteProject,a=e.launchProject,o=e.duplicateProject,r=e.renameProject,i=e.newProjectName,l=e.renamingProject,u=e.unSelectEditProjectName,f=e.editProjectName,p=e.username,m=[];if(t){var h,j=Object(c.a)(t);try{for(j.s();!(h=j.n()).done;){var b=h.value;if(null!==b.launchTime){var O="manager-project ";switch(b.status){case"testing":O+="manager-project-testing";break;case"brawling":O+="manager-project-brawl";break;case"failed":O+="manager-project-failed";break;case"ranking":O+="manager-project-ranking"}var S=null!==b.rankTime?"Brawling since "+d.a.timeSince(b.rankTime)+" ago":"Waiting for ranking...";"failed"===b.status&&(S="Not qualified for ranking.");var P=null!==b.testTime?"Tested "+d.a.timeSince(b.testTime)+" ago":"Waiting for testing...";0!==b.rank&&(P=S,S="Ranked: "+b.rank,1===b.rank&&(S+=" (i.e. the best!)")),m.push(Object(s.jsxs)("div",{className:O,children:[Object(s.jsx)("h4",{className:"manager-project-title",children:b.name}),Object(s.jsxs)("div",{className:"manager-timestamp",children:["Status: ",b.status,"."]}),Object(s.jsxs)("div",{className:"manager-timestamp",children:["Launched ",d.a.timeSince(b.launchTime)," ago"]}),Object(s.jsx)("div",{className:"manager-timestamp",children:P}),Object(s.jsx)("div",{className:"manager-timestamp",children:S}),Object(s.jsx)(y,{icon:"keyboard",title:"View source-code.",to:"/project/"+b.name}),Object(s.jsx)(y,{icon:"users",title:"View squad units.",to:"/units/"+b.name}),Object(s.jsx)(v,{icon:"trash-alt",title:"Delete this project permanently.",action:n,param1:b.name,hide:"failed"!==b.status||null}),Object(s.jsx)(v,{icon:"copy",title:"Duplicate project.",action:o,param1:b.name}),Object(s.jsx)(y,{icon:"balance-scale",title:"Check progress.",to:"/progress?project="+b.name+"&author="+p})]},b.name))}else m.push(Object(s.jsxs)("div",{className:"manager-project manager-project-plain",children:[Object(s.jsxs)("h4",{className:"manager-project-title",children:[Object(s.jsx)("div",{className:"manager-title-menu",children:Object(s.jsx)(v,{icon:"pencil-alt",param1:b.name,action:f,title:"Rename project."})}),Object(s.jsx)(g,{name:b.name,renameProject:r,newProjectName:i,renamingProject:l,unSelectEditProjectName:u})]}),Object(s.jsxs)("div",{className:"manager-timestamp",children:["Status: ",b.status,"."]}),Object(s.jsx)("div",{className:"manager-timestamp",children:"Not yet launched."}),Object(s.jsxs)("div",{className:"manager-timestamp",children:["Modified ",d.a.timeSince(b.modificationTime)," ago"]}),Object(s.jsxs)("div",{className:"manager-timestamp",children:["Created ",d.a.timeSince(b.creationTime)," ago"]}),Object(s.jsx)(y,{icon:"keyboard",title:"Edit source-code.",to:"/project/"+b.name}),Object(s.jsx)(y,{icon:"users",title:"Edit squad units.",to:"/units/"+b.name}),Object(s.jsx)(v,{icon:"trash-alt",title:"Delete this project permanently.",action:n,param1:b.name}),Object(s.jsx)(v,{icon:"copy",title:"Duplicate project.",action:o,param1:b.name}),Object(s.jsx)(v,{icon:"play",title:"Is it ready?\nLaunch this project into the brawl!",action:a,param1:b.name})]},b.name))}}catch(N){j.e(N)}finally{j.f()}}return m}function O(e){var t=e.project,n=e.createProject,a="Start";return null!==t&&t.length>0?Object(s.jsx)("button",{className:"manager-new-button active-button",onClick:function(e){e.preventDefault(),n()},children:a}):Object(s.jsx)("span",{className:"manager-new-button inactive-button",children:a})}var S=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).refreshProjects=function(){d.a.listProjects(o.updateProjects)},o.updateProjects=function(e){o.setState({projects:e.projects})},o.deleteProject=function(e){window.confirm("You are about to delete "+e)&&d.a.deleteProject(e,o.refreshProjects)},o.duplicateProject=function(e){var t=prompt("New name for the duplicate",e);if(null!==t&&void 0!==t&&""!==t){var n,a=Object(c.a)(o.state.projects);try{for(a.s();!(n=a.n()).done;){if(n.value.name===t)return void m.c.error("Project with this name already exists. Please provide a different name.",{autoClose:1e4})}}catch(r){a.e(r)}finally{a.f()}d.a.duplicateProject(e,t,o.refreshProjects)}},o.launchProject=function(e){d.a.launchProject(e,o.launchedCallback)},o.launchedCallback=function(e){void 0!==e&&void 0!==e.success&&e.success?o.refreshProjects():void 0!==e&&void 0!==e.reason?m.c.error(e.reason,{autoClose:1e4}):m.c.error("Unknown error when launching.",{autoClose:1e4})},o.editProjectName=function(e){o.setState({renamingProject:e,newProjectName:e})},o.unSelectEditProjectName=function(){o.setState({renamingProject:null})},o.renameCallback=function(){o.refreshProjects(),o.setState({newProjectName:null,renamingProject:null})},o.renameProject=function(e){if(null!==o.state.renamingProject&&null!==o.state.newProjectName&&0<o.state.newProjectName.length){var t=o.state.newProjectName;d.a.renameProject(e,t,o.renameCallback)}},o.newProjectName=function(e){if(void 0===e)return o.state.newProjectName;o.setState({newProjectName:e})},o.setProjectName=function(e){o.setState({newProjectName:e})},o.createProject=function(){var e=o.state.newProjectName;if(null!==e&&void 0!==e&&""!==e)if(/^[a-zA-Z0-9]+([_\\-]?[a-zA-Z0-9])*$/.test(e)){var t,n=Object(c.a)(o.state.projects);try{for(n.s();!(t=n.n()).done;){if(t.value.name===e)return void m.c.error("Project with this name already exists. Please provide a different name.",{autoClose:1e4})}}catch(a){n.e(a)}finally{n.f()}d.a.createProject(e,o.refreshProjects)}else m.c.error("Invalid name. Please use a-z, A-Z, 0-9 and -, _ characters. The name cannot start on end with - or _ and cannot have more than two of them in sequence.",{autoClose:15e3})},o.state={projects:null,newProjectName:null,renamingProject:null},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){void 0!==this.props.title&&(document.title=this.props.title),h.a.isLoggedIn()?(this.refreshProjects(),this.setState({loggedIn:!0,username:h.a.getUsername()})):this.setState({loggedIn:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.newProjectName,a=t.projects,o=t.loggedIn,r=t.renamingProject,i=t.username;if(!o)return Object(s.jsx)(l.Suspense,{fallback:Object(s.jsx)("div",{children:"Loading..."}),children:Object(s.jsx)(j,{})});var c="";return a||(c="There are no projects. Start by creating a new project."),Object(s.jsxs)("div",{className:"manager-project-container",children:[Object(s.jsxs)("div",{className:"manager-project manager-project-plain",title:c,children:[Object(s.jsx)("h4",{className:"manager-project-title",children:"Start a new project"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{className:"manager-name-field",type:"text",pattern:"^[a-zA-Z0-9]+([_\\\\-]?[a-zA-Z0-9])*$",placeholder:"Project Name",onChange:function(t){return e.setProjectName(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&e.createProject()}})}),Object(s.jsx)("div",{children:Object(s.jsx)(O,{project:n,createProject:this.createProject})})]}),Object(s.jsx)(b,{projects:a,deleteProject:this.deleteProject,launchProject:this.launchProject,duplicateProject:this.duplicateProject,renameProject:this.renameProject,newProjectName:this.newProjectName,renamingProject:r,unSelectEditProjectName:this.unSelectEditProjectName,editProjectName:this.editProjectName,username:i})]})}}]),n}(u.a.Component);t.default=S},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(14),o=n(6),r=n.n(o),i=n(0),c=n.n(i);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),o=m(t.slice(0,a)),r=t.slice(a+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=r:e[o]=r,e}),{})}var j=!1;try{j=!0}catch(O){}function g(e){return null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function y(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),o=n.icon,r=n.mask,i=n.symbol,c=n.className,s=n.title,u=g(o),m=v("classes",[].concat(p(function(e){var t,n=e.spin,a=e.pulse,o=e.fixedWidth,r=e.inverse,i=e.border,c=e.listItem,s=e.flip,u=e.size,f=e.rotation,d=e.pull,p=(l(t={"fa-spin":n,"fa-pulse":a,"fa-fw":o,"fa-inverse":r,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),"undefined"!==typeof u&&null!==u),l(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),l(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(n)),p(c.split(" ")))),h=v("transform","string"===typeof n.transform?a.c.transform(n.transform):n.transform),O=v("mask",g(r)),S=Object(a.a)(u,f({},m,{},h,{},O,{symbol:i,title:s}));if(!S)return function(){var e;!j&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var P=S.abstract,N={ref:t};return Object.keys(n).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(N[e]=n[e])})),b(P[0],N)}y.displayName="FontAwesomeIcon",y.propTypes={border:r.a.bool,className:r.a.string,mask:r.a.oneOfType([r.a.object,r.a.array,r.a.string]),fixedWidth:r.a.bool,inverse:r.a.bool,flip:r.a.oneOf(["horizontal","vertical","both"]),icon:r.a.oneOfType([r.a.object,r.a.array,r.a.string]),listItem:r.a.bool,pull:r.a.oneOf(["right","left"]),pulse:r.a.bool,rotation:r.a.oneOf([0,90,180,270]),size:r.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:r.a.bool,symbol:r.a.oneOfType([r.a.bool,r.a.string]),title:r.a.string,transform:r.a.oneOfType([r.a.string,r.a.object]),swapOpacity:r.a.bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var b=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),r=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=h(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[m(t)]=a}return e}),{attrs:{}}),i=a.style,c=void 0===i?{}:i,s=d(a,["style"]);return r.attrs.style=f({},r.attrs.style,{},c),t.apply(void 0,[n.tag,f({},r.attrs,{},s)].concat(p(o)))}.bind(null,c.a.createElement)},62:function(e,t,n){"use strict";var a=n(11),o=n(12),r=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"loginUrl",value:function(e,t){fetch(this.ADDRESS+"/login/").then((function(e){return e.json()})).then((function(t){e(t)}),(function(e){t(e)}))}},{key:"authorize",value:function(e,t,n){var a=this;return fetch(this.ADDRESS+"/login/authorize",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({code:e})}).then((function(e){return e.json()})).then((function(e){a.parseJWT(e),t()}),(function(e){n(e)})),!0}},{key:"authenticate",value:function(e,t,n,a){var o=this;return fetch(this.ADDRESS+"/login/authenticate",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){o.parseJWT(e),n(e)}),(function(e){a(e)})),!0}},{key:"register",value:function(e,t,n,a,o,r){var i=JSON.stringify({username:e,password:t,email:n,agree:a});return(null===n||void 0===n||n.length<1)&&(i=JSON.stringify({username:e,password:t,agree:a})),fetch(this.ADDRESS+"/login/register",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:i}).then((function(e){return e.json()})).then((function(e){o(e)}),(function(e){r(e)})),!0}},{key:"updateLoginButton",value:function(){e.loginButton&&e.loginButton.updateLoginState()}},{key:"refresh",value:function(t,n){var a=this,o=localStorage.getItem(this.REFRESH_TOKEN);return void 0===o?(n("Not logged in."),!1):(fetch(this.ADDRESS+"/login/refresh",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:o})}).then((function(e){return e.json()})).then((function(o){void 0!==o.success?o.success?a.parseJWT(o)?t():n("Didn't undertand the response from the server."):(e.logout(),void 0!==o.reason?n(o.reason):n("Unsuccessful refresh of access token.")):n("Unknown error on refreshing access token.")}),(function(e){n(e)})),!0)}},{key:"fetchSecureGET",value:function(e,t,n){var a=this,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===r||this.isAccessTokenExpired()?o?(this.refresh((function(){a.fetchSecureGET(e,t,n,o=!1)}),n),!0):(n("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r},method:"GET"}).then((function(e){return e.json()})).then((function(e){t(e)}),(function(r){o?a.refresh((function(){a.fetchSecureGET(e,t,n,o=!1)}),n):n(r)})),!0)}},{key:"fetchSecurePOST",value:function(e,t,n,a){var o=this,r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=sessionStorage.getItem(this.ACCESS_TOKEN);return void 0===i?r?(this.refresh((function(){o.fetchSecurePOST(e,n,a,r=!1)}),a),!0):(a("Not logged in."),!1):(fetch(this.ADDRESS+"/secure/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+i},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){n(e)}),(function(i){r?o.refresh((function(){o.fetchSecurePOST(e,t,n,a,r=!1)}),a):a(i)})),!0)}},{key:"getUsername",value:function(){return localStorage.getItem(this.USERNAME)}},{key:"logout",value:function(){sessionStorage.removeItem(this.ACCESS_TOKEN),sessionStorage.removeItem(this.ACCESS_TOKEN_EXPIRY),localStorage.removeItem(this.REFRESH_TOKEN),localStorage.removeItem(this.REFRESH_TOKEN_EXPIRY),localStorage.removeItem(this.USERNAME),this.updateLoginButton()}},{key:"isLoggedIn",value:function(){var t=void 0!==this.getUsername()&&null!==this.getUsername();return t&&e.isRefreshTokenExpired()&&(e.logout(),t=!1),t}},{key:"parseJWT",value:function(e){if(void 0===e.access_token)return this.logout(),!1;sessionStorage.setItem(this.ACCESS_TOKEN,e.access_token),localStorage.setItem(this.REFRESH_TOKEN,e.refresh_token);var t=e.access_token.split(".");if(null!==t&&3===t.length){var n=atob(t[1]);n=JSON.parse(n),sessionStorage.setItem(this.ACCESS_TOKEN_EXPIRY,n.exp)}localStorage.setItem(this.USERNAME,e.username);var a=JSON.parse(atob(e.refresh_token.split(".")[1]));return localStorage.setItem(this.REFRESH_TOKEN_EXPIRY,a.exp),this.updateLoginButton(),!0}},{key:"isAccessTokenExpired",value:function(){var e=sessionStorage.getItem(this.ACCESS_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"isRefreshTokenExpired",value:function(){var e=localStorage.getItem(this.REFRESH_TOKEN_EXPIRY);return void 0===e||null===e||new Date(1e3*parseInt(e))-new Date<0}},{key:"ACCESS_TOKEN",get:function(){return"access_token"}},{key:"ACCESS_TOKEN_EXPIRY",get:function(){return"access_token_expiry"}},{key:"REFRESH_TOKEN",get:function(){return"refresh_token"}},{key:"REFRESH_TOKEN_EXPIRY",get:function(){return"refresh_token_expiry"}},{key:"USERNAME",get:function(){return"username"}},{key:"ADDRESS",get:function(){return"https://api.brawl.ai"}}]),e}();r.loginButton=null,t.a=r},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(70);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(77);function o(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},77:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},79:function(e,t,n){"use strict";var a=n(63),o=n(11),r=n(12),i=n(62),c=n(7),s=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"defaultFiles",value:function(){return[{name:"New Folder",open:!0,data:[{name:"Hello World.py",data:"# This is example code!\n\nimport json\n\nmessage = json.loads(input())\n\nheight_map = message['heightMap']\n#print(\"map:\", height_map)\n\nunits = message['units']\nprint(\"Got the following units:\")\nfor unit in units:\n    print(unit)\nprint(\"cost of units:\", message['cost']) # Total cost of the squad\n\nmessage = json.loads(input())\nif message['action'] == 'startTurn':\n    print(f\"First turn has started! Got {message['timeLeft']} seconds left and the time is ticking.\")\n\nprint(\"Hello world!\")\n\nprint(\"Lets finish this turn!\")\nprint(json.dumps({\n    'action': 'endTurn'\n}))\n",start:!0}]}]}},{key:"renameProject",value:function(t,n,a){var o=c.c.warning("Renaming "+t+"...",{autoClose:!1});i.a.fetchSecurePOST("rename_project",{oldName:t,newName:n},(function(r){e.finishToast(r,o,"Failed to rename "," renamed to "+n+".",t,a)}),(function(a){e.finishToast(a,o,"Failed to rename "," renamed to "+n+".",t,void 0)}))}},{key:"loadFiles",value:function(t,n){e.postWithToast("get_project_files",t,"Loading files for ","Failed to load files for "," files loaded.",n)}},{key:"loadUnits",value:function(t,n){e.postWithToast("get_project_units",t,"Loading units for ","Failed to load units for "," units loaded.",n)}},{key:"deleteProject",value:function(t,n){e.postWithToast("delete_project",t,"Deleting ","Failed to delete "," deleted.",n)}},{key:"launchProject",value:function(t,n){e.postWithToast("launch_project",t,"Launching ","Failed to launch "," launched.",n)}},{key:"listProjects",value:function(t){e.get("list_projects",t)}},{key:"createProject",value:function(t,n){e.postWithToast("create_project",t,"Creating ","Failed to create "," created.",n)}},{key:"getProgress",value:function(t,n){e.postWithToast("get_project_progress",t,"Loading ","Failed to load "," loaded.",n)}},{key:"getIdleTestResults",value:function(t,n){e.postWithToast("get_project_idle_test",t,"Loading ","Failed to load "," loaded.",n)}},{key:"getDefenderResults",value:function(t,n,a,o){e.postWithToastPayload("get_project_defense",t,{projectName:t,opponentUsername:n,opponentProjectName:a},"Loading ","Failed to load "," loaded.",o)}},{key:"getAttackerResults",value:function(t,n,a,o){e.postWithToastPayload("get_project_attack",t,{projectName:t,opponentUsername:n,opponentProjectName:a},"Loading ","Failed to load "," loaded.",o)}},{key:"getAttackerAndDefenderResults",value:function(t,n,a){e.postWithToastPayload("get_project_attack_and_defense",t,{projectName1:t,projectName2:n},"Loading ","Failed to load "," loaded.",a)}},{key:"post",value:function(e,t,n){i.a.fetchSecurePOST(e,{name:t},(function(e){n&&n(e)}),(function(t){console.log("POST ERROR: "+e),console.log(t),void 0!==t&&null!==t&&t.toString().length<100&&c.c.error(t.toString(),{autoClose:1e4})}))}},{key:"get",value:function(e,t){i.a.fetchSecureGET(e,(function(e){t&&t(e)}),(function(t){console.log("GET ERROR: "+e),console.log(t),void 0!==t&&null!==t&&t.toString().length<100&&c.c.error(t.toString(),{autoClose:1e4})}))}},{key:"duplicateProject",value:function(t,n,a){var o=c.c.warning("Duplicating "+t+"...",{autoClose:!1});i.a.fetchSecurePOST("duplicate_project",{name:t,duplicateName:n},(function(n){e.finishToast(n,o,"Failed to duplicate "," duplicated.",t,a)}),(function(n){e.finishToast(n,o,"Failed to duplicate "," duplicated.",t,void 0)}))}},{key:"postWithToast",value:function(t,n,a,o,r,s){var l=c.c.warning(a+n+"...",{autoClose:!1});i.a.fetchSecurePOST(t,{name:n},(function(t){e.finishToast(t,l,o,r,n,s(t))}),(function(t){e.finishToast(t,l,o,r,n,void 0)}))}},{key:"postWithToastPayload",value:function(t,n,a,o,r,s,l){var u=c.c.warning(o+n+"...",{autoClose:!1});i.a.fetchSecurePOST(t,a,(function(t){e.finishToast(t,u,r,s,n,l(t))}),(function(t){e.finishToast(t,u,r,s,n,void 0)}))}},{key:"saveFiles",value:function(t,n,a){var o=c.c.warning("Saving "+t+"...",{autoClose:!1});i.a.fetchSecurePOST("save_project_files",{name:t,files:JSON.stringify(n)},(function(n){e.finishToast(n,o,"Failed to save "," saved.",t,a)}),(function(n){e.finishToast(n,o,"Failed to save "," saved.",t,void 0)}))}},{key:"saveUnits",value:function(t,n,a){var o=c.c.warning("Saving "+t+"...",{autoClose:!1});i.a.fetchSecurePOST("save_project_units",{name:t,units:JSON.stringify(n)},(function(n){e.finishToast(n,o,"Failed to save "," saved.",t,a)}),(function(n){e.finishToast(n,o,"Failed to save "," saved.",t,void 0)}))}},{key:"finishToast",value:function(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;if(void 0!==e)if(void 0!==e.success)if(e.success)c.c.update(t,{render:r+o,type:c.c.TYPE.SUCCESS,autoClose:500}),void 0!==i&&i();else if(void 0!==e.reason)if("field"===e.reason){var s,l="",u=Object(a.a)(e.field);try{for(u.s();!(s=u.n()).done;){var f=s.value;l.length>0&&(l+=" "),l+=f.reason}}catch(d){u.e(d)}finally{u.f()}c.c.update(t,{render:n+r+": "+l,type:c.c.TYPE.ERROR,autoClose:1e4})}else c.c.update(t,{render:n+r+": "+e.reason,type:c.c.TYPE.ERROR,autoClose:1e4});else c.c.update(t,{render:n+r+".",type:c.c.TYPE.ERROR,autoClose:1e4});else void 0!==e.reason?c.c.update(t,{render:n+r+": "+e.reason,type:c.c.TYPE.ERROR,autoClose:1e4}):(c.c.update(t,{render:n+r+": "+e,type:c.c.TYPE.ERROR,autoClose:1e4}),console.log(e));else c.c.update(t,{render:n+r+".",type:c.c.TYPE.ERROR,autoClose:1e4}),console.log("results is undefined!")}},{key:"timeSince",value:function(e){if(null===e||void 0===e||""===e)return"not yet";var t=Math.floor((Date.now()-Date.parse(e))/1e3),n=Math.floor(t/31536e3);return n>=1?n+(1===n?" year":" years"):(n=Math.floor(t/2592e3))>=1?n+(1===n?" month":" months"):(n=Math.floor(t/86400))>=1?n+(1===n?" day":" days"):(n=Math.floor(t/3600))>=1?n+(1===n?" hour":" hours"):(n=Math.floor(t/60))>=1?n+(1===n?" minute":" minutes"):Math.floor(t)+(1===n?" second":" seconds")}}]),e}();t.a=s}}]);