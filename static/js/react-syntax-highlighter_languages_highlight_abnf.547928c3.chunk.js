(this.webpackJsonppages=this.webpackJsonppages||[]).push([[6],{580:function(e,n){function a(e){return e?"string"===typeof e?e:e.source:null}function s(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];var r=n.map((function(e){return a(e)})).join("");return r}e.exports=function(e){var n={ruleDeclaration:/^[a-zA-Z][a-zA-Z0-9-]*/,unexpectedChars:/[!@#$^&',?+~`|:]/},a=e.COMMENT(/;/,/$/),r={className:"attribute",begin:s(n.ruleDeclaration,/(?=\s*=)/)};return{name:"Augmented Backus-Naur Form",illegal:n.unexpectedChars,keywords:["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],contains:[r,a,{className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},{className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},{className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},{className:"symbol",begin:/%[si]/},e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}}}]);