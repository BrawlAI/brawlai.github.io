(this.webpackJsonppages=this.webpackJsonppages||[]).push([[190],{143:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},172:function(e,n,t){var r=t(143);e.exports=function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},221:function(e,n,t){var r=t(222),a=t(223),i=t(172),o=t(224);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},222:function(e,n,t){var r=t(143);e.exports=function(e){if(Array.isArray(e))return r(e)}},223:function(e,n){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},224:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},427:function(e,n,t){var r=t(221),a=t(428),i=t(432),o=t(434),s=t(440),u=t(441);function c(e){Object.freeze(e);var n="function"===typeof e;return Object.getOwnPropertyNames(e).forEach((function(t){!Object.hasOwnProperty.call(e,t)||null===e[t]||"object"!==typeof e[t]&&"function"!==typeof e[t]||n&&("caller"===t||"callee"===t||"arguments"===t)||Object.isFrozen(e[t])||c(e[t])})),e}var l=function(){"use strict";function e(n){s(this,e),void 0===n.data&&(n.data={}),this.data=n.data}return u(e,[{key:"ignoreMatch",value:function(){this.ignore=!0}}]),e}();function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function g(e){var n={};for(var t in e)n[t]=e[t];for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return a.forEach((function(e){for(var t in e)n[t]=e[t]})),n}function d(e){return e.nodeName.toLowerCase()}var h=Object.freeze({__proto__:null,escapeHTML:f,inherit:g,nodeStream:function(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),d(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n},mergeStreams:function(e,n,t){var r=0,a="",i=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){a+="<"+d(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+f(e.value)+'"'})).join("")+">"}function u(e){a+="</"+d(e)+">"}function c(e){("start"===e.event?s:u)(e.node)}for(;e.length||n.length;){var l=o();if(a+=f(t.substring(r,l[0].offset)),r=l[0].offset,l===e){i.reverse().forEach(u);do{c(l.splice(0,1)[0]),l=o()}while(l===e&&l.length&&l[0].offset===r);i.reverse().forEach(s)}else"start"===l[0].event?i.push(l[0].node):i.pop(),c(l.splice(0,1)[0])}return a+f(t.substr(r))}}),p=function(e){return!!e.kind},v=function(){"use strict";function e(n,t){s(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return u(e,[{key:"addText",value:function(e){this.buffer+=f(e)}},{key:"openNode",value:function(e){if(p(e)){var n=e.kind;e.sublanguage||(n="".concat(this.classPrefix).concat(n)),this.span(n)}}},{key:"closeNode",value:function(e){p(e)&&(this.buffer+="</span>")}},{key:"value",value:function(){return this.buffer}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}}]),e}(),b=function(e){"use strict";i(t,e);var n=o(t);function t(e){var r;return s(this,t),(r=n.call(this)).options=e,r}return u(t,[{key:"addKeyword",value:function(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}},{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"addSublanguage",value:function(e,n){var t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}},{key:"toHTML",value:function(){return new v(this,this.options).value()}},{key:"finalize",value:function(){return!0}}]),t}(function(){"use strict";function e(){s(this,e),this.rootNode={children:[]},this.stack=[this.rootNode]}return u(e,[{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n={kind:e,children:[]};this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}},{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}}],[{key:"_walk",value:function(e,n){var t=this;return"string"===typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((function(n){return t._walk(e,n)})),e.closeNode(n)),e}},{key:"_collapse",value:function(n){"string"!==typeof n&&n.children&&(n.children.every((function(e){return"string"===typeof e}))?n.children=[n.children.join("")]:n.children.forEach((function(n){e._collapse(n)})))}}]),e}());function m(e){return e?"string"===typeof e?e:e.source:null}function y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.map((function(e){return m(e)})).join("");return r}var x="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",E="\\b\\d+(\\.\\d+)?",k="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_="\\b(0b[01]+)",N={begin:"\\\\[\\s\\S]",relevance:0},R={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[N]},O={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[N]},S={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},M=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=g({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(S),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},j=M("//","$"),A=M("/\\*","\\*/"),I=M("#","$"),L={className:"number",begin:E,relevance:0},T={className:"number",begin:k,relevance:0},B={className:"number",begin:_,relevance:0},P={className:"number",begin:E+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},D={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[N,{begin:/\[/,end:/\]/,relevance:0,contains:[N]}]}]},C={className:"title",begin:x,relevance:0},H={className:"title",begin:w,relevance:0},U={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},z=Object.freeze({__proto__:null,IDENT_RE:x,UNDERSCORE_IDENT_RE:w,NUMBER_RE:E,C_NUMBER_RE:k,BINARY_NUMBER_RE:_,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=/^#![ ]*\//;return e.binary&&(e.begin=y(n,/.*\b/,e.binary,/\b.*/)),g({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":function(e,n){0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:N,APOS_STRING_MODE:R,QUOTE_STRING_MODE:O,PHRASAL_WORDS_MODE:S,COMMENT:M,C_LINE_COMMENT_MODE:j,C_BLOCK_COMMENT_MODE:A,HASH_COMMENT_MODE:I,NUMBER_MODE:L,C_NUMBER_MODE:T,BINARY_NUMBER_MODE:B,CSS_NUMBER_MODE:P,REGEXP_MODE:D,TITLE_MODE:C,UNDERSCORE_TITLE_MODE:H,METHOD_GUARD:U,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":function(e,n){n.data._beginMatch=e[1]},"on:end":function(e,n){n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),$="of and for in not or if then".split(" ");function K(e){function n(n,t){return new RegExp(m(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}var t=function(){"use strict";function e(){s(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return u(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map((function(e){return e[1]}));this.matcherRe=n(function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"|",t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var o=r+=1,s=m(e[i]);for(i>0&&(a+=n),a+="(";s.length>0;){var u=t.exec(s);if(null==u){a+=s;break}a+=s.substring(0,u.index),s=s.substring(u.index+u[0].length),"\\"===u[0][0]&&u[1]?a+="\\"+String(Number(u[1])+o):(a+=u[0],"("===u[0]&&r++)}a+=")"}return a}(e),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex((function(e,n){return n>0&&void 0!==e})),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}]),e}(),i=function(){"use strict";function e(){s(this,e),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return u(e,[{key:"getMatcher",value:function(e){if(this.multiRegexes[e])return this.multiRegexes[e];var n=new t;return this.rules.slice(e).forEach((function(e){var t=a(e,2),r=t[0],i=t[1];return n.addRule(r,i)})),n.compile(),this.multiRegexes[e]=n,n}},{key:"resumingScanAtSamePosition",value:function(){return 0!==this.regexIndex}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{var r=this.getMatcher(0);r.lastIndex=this.lastIndex+1,t=r.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}]),e}();function o(e,n){var t=e.input[e.index-1],r=e.input[e.index+e[0].length];"."!==t&&"."!==r||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(a,s){var u,c=a;if(a.compiled)return c;a.compiled=!0,a.__beforeBegin=null,a.keywords=a.keywords||a.beginKeywords;var l=null;if("object"===typeof a.keywords&&(l=a.keywords.$pattern,delete a.keywords.$pattern),a.keywords&&(a.keywords=function(e,n){var t={};"string"===typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])}));return t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,G(r[0],r[1])]}))}}(a.keywords,e.case_insensitive)),a.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return c.keywordPatternRe=n(a.lexemes||l||/\w+/,!0),s&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",a.__beforeBegin=o),a.begin||(a.begin=/\B|\b/),c.beginRe=n(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(c.endRe=n(a.end)),c.terminator_end=m(a.end)||"",a.endsWithParent&&s.terminator_end&&(c.terminator_end+=(a.end?"|":"")+s.terminator_end)),a.illegal&&(c.illegalRe=n(a.illegal)),void 0===a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=(u=[]).concat.apply(u,r(a.contains.map((function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return g(e,{variants:null},n)})));if(e.cached_variants)return e.cached_variants;if(F(e))return g(e,{starts:e.starts?g(e.starts):null});if(Object.isFrozen(e))return g(e);return e}("self"===e?a:e)})))),a.contains.forEach((function(e){t(e,c)})),a.starts&&t(a.starts,s),c.matcher=function(e){var n=new i;return e.contains.forEach((function(e){return n.addRule(e.begin,{rule:e,type:"begin"})})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(c),c}(e)}function F(e){return!!e&&(e.endsWithParent||F(e.starts))}function G(e,n){return n?Number(n):function(e){return $.includes(e.toLowerCase())}(e)?0:1}var X={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className:function(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted:function(){return this.autoDetect||hljs.getLanguage(this.language)?(this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value):(console.warn('The language "'.concat(this.language,'" you specified could not be found.')),this.unknownLanguage=!0,f(this.code));var e},autoDetect:function(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:function(){return!0}},render:function(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},J={install:function(e){e.component("highlightjs",X)}},W=f,q=g,Z=h.nodeStream,Y=h.mergeStreams,Q=Symbol("nomatch"),V=function(e){var n=[],t=Object.create(null),r=Object.create(null),i=[],o=!0,s=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?",f={disableAutodetect:!0,name:"Plain text",contains:[]},g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:b};function d(e){return g.noHighlightRe.test(e)}function h(e,n,t,r){var a={code:n,language:e};_("before:highlight",a);var i=a.result?a.result:p(a.language,a.code,t,r);return i.code=a.code,_("after:highlight",i),i}function p(e,n,r,i){var s=n;function c(e,n){var t=k.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function f(){null!=R.subLanguage?function(){if(""!==M){var e=null;if("string"===typeof R.subLanguage){if(!t[R.subLanguage])return void S.addText(M);e=p(R.subLanguage,M,!0,O[R.subLanguage]),O[R.subLanguage]=e.top}else e=v(M,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(j+=e.relevance),S.addSublanguage(e.emitter,e.language)}}():function(){if(R.keywords){var e=0;R.keywordPatternRe.lastIndex=0;for(var n=R.keywordPatternRe.exec(M),t="";n;){t+=M.substring(e,n.index);var r=c(R,n);if(r){var i=a(r,2),o=i[0],s=i[1];S.addText(t),t="",j+=s,S.addKeyword(n[0],o)}else t+=n[0];e=R.keywordPatternRe.lastIndex,n=R.keywordPatternRe.exec(M)}t+=M.substr(e),S.addText(t)}else S.addText(M)}(),M=""}function d(e){return e.className&&S.openNode(e.className),R=Object.create(e,{parent:{value:R}})}function h(e,n,t){var r=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(r){if(e["on:end"]){var a=new l(e);e["on:end"](n,a),a.ignore&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function b(e){return 0===R.matcher.regexIndex?(M+=e[0],1):(L=!0,0)}function m(e){for(var n=e[0],t=e.rule,r=new l(t),a=0,i=[t.__beforeBegin,t["on:begin"]];a<i.length;a++){var o=i[a];if(o&&(o(e,r),r.ignore))return b(n)}return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?M+=n:(t.excludeBegin&&(M+=n),f(),t.returnBegin||t.excludeBegin||(M=n)),d(t),t.returnBegin?0:n.length}function y(e){var n=e[0],t=s.substr(e.index),r=h(R,e,t);if(!r)return Q;var a=R;a.skip?M+=n:(a.returnEnd||a.excludeEnd||(M+=n),f(),a.excludeEnd&&(M=n));do{R.className&&S.closeNode(),R.skip||R.subLanguage||(j+=R.relevance),R=R.parent}while(R!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),d(r.starts)),a.returnEnd?0:n.length}var x={};function E(n,t){var a=t&&t[0];if(M+=n,null==a)return f(),0;if("begin"===x.type&&"end"===t.type&&x.index===t.index&&""===a){if(M+=s.slice(t.index,t.index+1),!o){var i=new Error("0 width match regex");throw i.languageName=e,i.badRule=x.rule,i}return 1}if(x=t,"begin"===t.type)return m(t);if("illegal"===t.type&&!r){var u=new Error('Illegal lexeme "'+a+'" for mode "'+(R.className||"<unnamed>")+'"');throw u.mode=R,u}if("end"===t.type){var c=y(t);if(c!==Q)return c}if("illegal"===t.type&&""===a)return 1;if(I>1e5&&I>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=a,a.length}var k=w(e);if(!k)throw console.error(u.replace("{}",e)),new Error('Unknown language: "'+e+'"');var _=K(k),N="",R=i||_,O={},S=new g.__emitter(g);!function(){for(var e=[],n=R;n!==k;n=n.parent)n.className&&e.unshift(n.className);e.forEach((function(e){return S.openNode(e)}))}();var M="",j=0,A=0,I=0,L=!1;try{for(R.matcher.considerAll();;){I++,L?L=!1:R.matcher.considerAll(),R.matcher.lastIndex=A;var T=R.matcher.exec(s);if(!T)break;var B=E(s.substring(A,T.index),T);A=T.index+B}return E(s.substr(A)),S.closeAllNodes(),S.finalize(),N=S.toHTML(),{relevance:j,value:N,language:e,illegal:!1,emitter:S,top:R}}catch(P){if(P.message&&P.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:P.message,context:s.slice(A-100,A+100),mode:P.mode},sofar:N,relevance:0,value:W(s),emitter:S};if(o)return{illegal:!1,relevance:0,value:W(s),emitter:S,language:e,top:R,errorRaised:P};throw P}}function v(e,n){n=n||g.languages||Object.keys(t);var r=function(e){var n={relevance:0,emitter:new g.__emitter(g),value:W(e),illegal:!1,top:f};return n.emitter.addText(e),n}(e),a=r;return n.filter(w).filter(k).forEach((function(n){var t=p(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)})),a.language&&(r.second_best=a),r}function m(e){return g.tabReplace||g.useBR?e.replace(s,(function(e){return"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e})):e}function y(e){var n=null,t=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";var t=g.languageDetectRe.exec(n);if(t){var r=w(t[1]);return r||(console.warn(u.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find((function(e){return d(e)||w(e)}))}(e);if(!d(t)){_("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"):n=e;var a=n.textContent,i=t?h(t,a,!0):v(a),o=Z(n);if(o.length){var s=document.createElement("div");s.innerHTML=i.value,i.value=Y(o,Z(s),a)}i.value=m(i.value),_("after:highlightBlock",{block:e,result:i}),e.innerHTML=i.value,e.className=function(e,n,t){var a=n?r[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),e.includes(a)||i.push(a),i.join(" ").trim()}(e.className,t,i.language),e.result={language:i.language,re:i.relevance,relavance:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance,relavance:i.second_best.relevance})}}var x=function e(){if(!e.called){e.called=!0;var t=document.querySelectorAll("pre code");n.forEach.call(t,y)}};function w(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function E(e,n){var t=n.languageName;"string"===typeof e&&(e=[e]),e.forEach((function(e){r[e]=t}))}function k(e){var n=w(e);return n&&!n.disableAutodetect}function _(e,n){var t=e;i.forEach((function(e){e[t]&&e[t](n)}))}for(var N in Object.assign(e,{highlight:h,highlightAuto:v,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),m(e)},highlightBlock:y,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=q(g,e)},initHighlighting:x,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",x,!1)},registerLanguage:function(n,r){var a=null;try{a=r(e)}catch(i){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw i;console.error(i),a=f}a.name||(a.name=n),t[n]=a,a.rawDefinition=r.bind(null,e),a.aliases&&E(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(t)},getLanguage:w,registerAliases:E,requireLanguage:function(e){var n=w(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:k,inherit:q,addPlugin:function(e){i.push(e)},vuePlugin:J}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.3.2",z)"object"===typeof z[N]&&c(z[N]);return Object.assign(e,z),e}({});e.exports=V},428:function(e,n,t){var r=t(429),a=t(430),i=t(172),o=t(431);e.exports=function(e,n){return r(e)||a(e,n)||i(e,n)||o()}},429:function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},430:function(e,n){e.exports=function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return t}}},431:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},432:function(e,n,t){var r=t(433);e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},433:function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},434:function(e,n,t){var r=t(435),a=t(436),i=t(437);e.exports=function(e){var n=a();return function(){var t,a=r(e);if(n){var o=r(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return i(this,t)}}},435:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},436:function(e,n){e.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},437:function(e,n,t){var r=t(438),a=t(439);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!==typeof n?a(e):n}},438:function(e,n){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},439:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},440:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},441:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},442:function(e,n,t){"use strict";var r=t(443),a=i(Error);function i(e){return n.displayName=e.displayName||e.name,n;function n(n){return n&&(n=r.apply(null,arguments)),new e(n)}}e.exports=a,a.eval=i(EvalError),a.range=i(RangeError),a.reference=i(ReferenceError),a.syntax=i(SyntaxError),a.type=i(TypeError),a.uri=i(URIError),a.create=i},443:function(e,n,t){!function(){var n;function t(e){for(var n,t,r,a,i=1,o=[].slice.call(arguments),s=0,u=e.length,c="",l=!1,f=!1,g=function(){return o[i++]},d=function(){for(var t="";/\d/.test(e[s]);)t+=e[s++],n=e[s];return t.length>0?parseInt(t):null};s<u;++s)if(n=e[s],l)switch(l=!1,"."==n?(f=!1,n=e[++s]):"0"==n&&"."==e[s+1]?(f=!0,n=e[s+=2]):f=!0,a=d(),n){case"b":c+=parseInt(g(),10).toString(2);break;case"c":c+="string"===typeof(t=g())||t instanceof String?t:String.fromCharCode(parseInt(t,10));break;case"d":c+=parseInt(g(),10);break;case"f":r=String(parseFloat(g()).toFixed(a||6)),c+=f?r:r.replace(/^0/,"");break;case"j":c+=JSON.stringify(g());break;case"o":c+="0"+parseInt(g(),10).toString(8);break;case"s":c+=g();break;case"x":c+="0x"+parseInt(g(),10).toString(16);break;case"X":c+="0x"+parseInt(g(),10).toString(16).toUpperCase();break;default:c+=n}else"%"===n?l=!0:c+=n;return c}(n=e.exports=t).format=t,n.vsprintf=function(e,n){return t.apply(null,[e].concat(n))},"undefined"!==typeof console&&"function"===typeof console.log&&(n.printf=function(){console.log(t.apply(null,arguments))})}()},528:function(e,n,t){"use strict";var r=t(427),a=t(442);n.highlight=o,n.highlightAuto=function(e,n){var t,s,u,c,l=n||{},f=l.subset||r.listLanguages(),g=l.prefix,d=f.length,h=-1;null!==g&&void 0!==g||(g=i);if("string"!==typeof e)throw a("Expected `string` for value, got `%s`",e);s={relevance:0,language:null,value:[]},t={relevance:0,language:null,value:[]};for(;++h<d;)c=f[h],r.getLanguage(c)&&((u=o(c,e,n)).language=c,u.relevance>s.relevance&&(s=u),u.relevance>t.relevance&&(s=t,t=u));s.language&&(t.secondBest=s);return t},n.registerLanguage=function(e,n){r.registerLanguage(e,n)},n.listLanguages=function(){return r.listLanguages()},n.registerAlias=function(e,n){var t,a=e;n&&((a={})[e]=n);for(t in a)r.registerAliases(a[t],{languageName:t})},s.prototype.addText=function(e){var n,t,r=this.stack;if(""===e)return;n=r[r.length-1],(t=n.children[n.children.length-1])&&"text"===t.type?t.value+=e:n.children.push({type:"text",value:e})},s.prototype.addKeyword=function(e,n){this.openNode(n),this.addText(e),this.closeNode()},s.prototype.addSublanguage=function(e,n){var t=this.stack,r=t[t.length-1],a=e.rootNode.children,i=n?{type:"element",tagName:"span",properties:{className:[n]},children:a}:a;r.children=r.children.concat(i)},s.prototype.openNode=function(e){var n=this.stack,t=this.options.classPrefix+e,r=n[n.length-1],a={type:"element",tagName:"span",properties:{className:[t]},children:[]};r.children.push(a),n.push(a)},s.prototype.closeNode=function(){this.stack.pop()},s.prototype.closeAllNodes=u,s.prototype.finalize=u,s.prototype.toHTML=function(){return""};var i="hljs-";function o(e,n,t){var o,u=r.configure({}),c=(t||{}).prefix;if("string"!==typeof e)throw a("Expected `string` for name, got `%s`",e);if(!r.getLanguage(e))throw a("Unknown language: `%s` is not registered",e);if("string"!==typeof n)throw a("Expected `string` for value, got `%s`",n);if(null!==c&&void 0!==c||(c=i),r.configure({__emitter:s,classPrefix:c}),o=r.highlight(e,n,!0),r.configure(u||{}),o.errorRaised)throw o.errorRaised;return{relevance:o.relevance,language:o.language,value:o.emitter.rootNode.children}}function s(e){this.options=e,this.rootNode={children:[]},this.stack=[this.rootNode]}function u(){}}}]);