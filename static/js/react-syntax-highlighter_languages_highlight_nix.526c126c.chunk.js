(this.webpackJsonppages=this.webpackJsonppages||[]).push([[118],{696:function(e,n){e.exports=function(e){var n={keyword:"rec with let in inherit assert if else then",literal:"true false or and null",built_in:"import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"},s={className:"subst",begin:/\$\{/,end:/\}/,keywords:n},i={className:"string",contains:[s],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},t=[e.NUMBER_MODE,e.HASH_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,{begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/}]}];return s.contains=t,{name:"Nix",aliases:["nixos"],keywords:n,contains:t}}}}]);