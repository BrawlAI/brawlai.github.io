(this.webpackJsonppages=this.webpackJsonppages||[]).push([[234],{510:function(t,e,r){"use strict";r.r(e);var a=r(37),n=r(43),c=r(0),o=r(491),s=r(119),i=r(493),u=r(327),h=r(445),l=r(447),p=r(446),j=r(1);function m(){var t=Object(c.useRef)(),e=Object(o.d)(),r=e.scene,a=e.gl,n=e.size,s=e.camera;return Object(c.useEffect)((function(){t.current.setSize(n.width,n.height)}),[n]),Object(o.c)((function(){return t.current.render()}),2),Object(j.jsxs)("effectComposer",{ref:t,args:[a],children:[Object(j.jsx)("renderPass",{attachArray:"passes",scene:r,camera:s}),Object(j.jsx)("shaderPass",{attachArray:"passes",args:[l.a],"material-uniforms-resolution-value":[1/n.width,1/n.height],renderToScreen:!0})]})}function d(){var t=Object(o.d)().gl.capabilities.maxTextureSize;return t>4096&&(t=4096),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{intensity:1.2}),Object(j.jsx)("directionalLight",{castShadow:!0,position:[-10,30,-10],intensity:.7,"shadow-mapSize-width":t,"shadow-mapSize-height":t,"shadow-camera-far":100,"shadow-camera-near":10,"shadow-camera-left":-40,"shadow-camera-right":40,"shadow-camera-top":80,"shadow-camera-bottom":0,"shadow-bias":-.001})]})}function f(t){var e=t.position,r=t.height,a=t.color,n=t.time,s=t.mutation,i=Object(c.useRef)();return Object(o.c)((function(){n<0||(n<=s.clock?(i.current.scale.y=.1,i.current.position.y=.05*r):(i.current.scale.y=1,i.current.position.y=e[1]))})),Object(j.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,position:e,ref:i,scale:[1,1,1],children:[Object(j.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,r,1]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:a})]})}function b(t){var e=t.heightMap,r=t.times,a=t.mutation;if(null==e||null==r)return[];for(var n=[],c=0;c<e.length;c++)for(var o=0;o<e[c].length;o++){var i=e[c][o];if(i>0){var u=new s.Color;u.setRGB(.2,.2,.2),2===i&&u.setRGB(.5,.5,.5);var h=r[c][o];n.push(Object(j.jsx)(f,{position:[o,i/2,c],height:i,color:u,time:h,mutation:a},"box-"+o+"-"+c))}}return n}function g(t){var e=t.shots,r=t.mutation,a=Object(c.useState)(!1),i=Object(n.a)(a,2),u=i[0],h=i[1],l=[],p=Object(c.useRef)(),m=0;if(Object(o.c)((function(){if(null!=e&&e.length>0){for(var t=r.clock;e.length>m+1&&e[m+1].time<=t;)m++;for(;e[m].time>t&&0<m;)m--;var a=e[m];if(a.time<=t&&a.time+a.duration>t){u||h(!0);var n=a.target.x-a.source.x,c=a.target.z-a.source.z,o=Math.atan2(c,n)+Math.PI/2,s=(t-a.time)/a.duration,i=Math.sqrt(n*n+c*c),l=n*s,j=c*s;p.current.position.x=a.source.x+l,p.current.position.z=a.source.z+j;var d=Math.sqrt(l*l+j*j);if(d<1||i-d<1){var f=i-d;d<f&&(f=d),p.current.scale.y=f}else p.current.scale.y=1;p.current.position.y=1.2,p.current.rotation.x=Math.PI/2,p.current.rotation.z=o}else u&&h(!1)}})),u){var d=new s.Color;d.setRGB(.7,.7,.4),l.push(Object(j.jsxs)("mesh",{ref:p,castShadow:!0,receiveShadow:!0,scale:[1,1,1],children:[Object(j.jsx)("cylinderBufferGeometry",{attach:"geometry",args:[.05,.05,1,8,1]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:d})]},"weapon-shot"))}return l}function x(t){var e=t.tosses,r=t.mutation,a=Object(c.useState)(!1),i=Object(n.a)(a,2),u=i[0],h=i[1],l=Object(c.useState)(!1),p=Object(n.a)(l,2),m=p[0],d=p[1],f=[],b=Object(c.useRef)(),g=Object(c.useRef)(),x=Object(c.useRef)(),O=0;if(Object(o.c)((function(){if(null!=e&&e.length>0){for(var t=r.clock;e.length>O+1&&e[O+1].time<=t;)O++;for(;e[O].time>t&&0<O;)O--;var a=e[O];if(a.time<=t&&a.time+a.duration>t){u||h(!0);var n=a.target.x-a.source.x,c=a.target.z-a.source.z,o=(t-a.time)/a.duration,s=n*o,i=c*o;b.current.position.x=a.source.x+s,b.current.position.z=a.source.z+i,b.current.position.y=4*Math.sin(o*Math.PI)+1}else u&&h(!1);if(a.time+a.duration<=t&&a.time+a.duration+500>t){m||(d(!0),g.current.position.y=1.5,g.current.position.x=a.target.x,g.current.position.z=a.target.z);var l=(t-(a.time+a.duration))/500,p=1-2*l,j=1;p<0&&(j=1+p,p=0),x.current.color.r=j,x.current.color.g=p,x.current.color.b=p;var f=1-l*l;x.current.opacity=f,x.current.transparent=f<.99;var v=l*l*20;v>1&&(v=1),g.current.scale.x=v,g.current.scale.y=v,g.current.scale.z=v}else m&&d(!1)}})),u){var v=new s.Color;v.setRGB(.8,.2,.2),f.push(Object(j.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,scale:[1,1,1],children:[Object(j.jsx)("sphereBufferGeometry",{attach:"geometry",args:[.1,8,4]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:v})]},"grenade-throw"))}if(m){var y=new s.Color;y.setRGB(.8,.2,.2),f.push(Object(j.jsxs)("mesh",{ref:g,scale:[1,1,1],children:[Object(j.jsx)("boxBufferGeometry",{attach:"geometry",args:[5,3,5]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:y,opacity:.5,ref:x})]},"grenade-explosion"))}return f}function O(t){var e=t.heals,r=t.mutation,a=Object(c.useState)(!1),i=Object(n.a)(a,2),u=i[0],h=i[1],l=Object(c.useState)(!1),p=Object(n.a)(l,2),m=p[0],d=p[1],f=[],b=Object(c.useRef)(),g=Object(c.useRef)(),x=Object(c.useRef)(),O=0;if(Object(o.c)((function(){if(null!=e&&e.length>0){for(var t=r.clock;e.length>O+1&&e[O+1].time<=t;)O++;for(;e[O].time>t&&0<O;)O--;var a=e[O];if(a.time<=t&&a.time+a.duration>t){u||h(!0);var n=a.target.x-a.source.x,c=a.target.z-a.source.z,o=(t-a.time)/a.duration,s=n*o,i=c*o;b.current.position.x=a.source.x+s,b.current.position.z=a.source.z+i,b.current.position.y=2*Math.sin(o*Math.PI)+1}else u&&h(!1);if(a.time+a.duration<=t&&a.time+a.duration+500>t){m||(d(!0),g.current.position.y=1,g.current.position.x=a.target.x,g.current.position.z=a.target.z);var l=(t-(a.time+a.duration))/500,p=1-2*l,j=1;p<0&&(j=1+p,p=0),x.current.color.r=p,x.current.color.g=j,x.current.color.b=p;var f=1-l*l;x.current.opacity=f,x.current.transparent=f<.99;var v=l*l*20;v>1&&(v=1),g.current.scale.x=v,g.current.scale.y=v,g.current.scale.z=v}else m&&d(!1)}})),u){var v=new s.Color;v.setRGB(.2,.8,.2),f.push(Object(j.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,scale:[1,1,1],children:[Object(j.jsx)("sphereBufferGeometry",{attach:"geometry",args:[.1,8,4]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:v})]},"grenade-throw"))}if(m){var y=new s.Color;y.setRGB(.2,.8,.2),f.push(Object(j.jsxs)("mesh",{ref:g,scale:[1,1,1],children:[Object(j.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,2,1]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:y,opacity:.5,ref:x})]},"grenade-explosion"))}return f}function v(t){var e=t.reloads,r=t.mutation,a=Object(c.useState)(!1),i=Object(n.a)(a,2),u=i[0],h=i[1],l=Object(c.useState)(!1),p=Object(n.a)(l,2),m=p[0],d=p[1],f=[],b=Object(c.useRef)(),g=Object(c.useRef)(),x=Object(c.useRef)(),O=0;if(Object(o.c)((function(){if(null!=e&&e.length>0){for(var t=r.clock;e.length>O+1&&e[O+1].time<=t;)O++;for(;e[O].time>t&&0<O;)O--;var a=e[O];if(a.time<=t&&a.time+a.duration>t){u||h(!0);var n=a.target.x-a.source.x,c=a.target.z-a.source.z,o=(t-a.time)/a.duration,s=n*o,i=c*o;b.current.position.x=a.source.x+s,b.current.position.z=a.source.z+i,b.current.position.y=2*Math.sin(o*Math.PI)+1}else u&&h(!1);if(a.time+a.duration<=t&&a.time+a.duration+500>t){m||(d(!0),g.current.position.y=1,g.current.position.x=a.target.x,g.current.position.z=a.target.z);var l=(t-(a.time+a.duration))/500,p=1-2*l,j=1;p<0&&(j=1+p,p=0),x.current.color.r=j,x.current.color.g=j,x.current.color.b=p;var f=1-l*l;x.current.opacity=f,x.current.transparent=f<.99;var v=l*l*20;v>1&&(v=1),g.current.scale.x=v,g.current.scale.y=v,g.current.scale.z=v}else m&&d(!1)}})),u){var v=new s.Color;v.setRGB(.8,.8,.2),f.push(Object(j.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,scale:[1,1,1],children:[Object(j.jsx)("sphereBufferGeometry",{attach:"geometry",args:[.1,8,4]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:v})]},"grenade-throw"))}if(m){var y=new s.Color;y.setRGB(.8,.8,.2),f.push(Object(j.jsxs)("mesh",{ref:g,scale:[1,1,1],children:[Object(j.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,2,1]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",color:y,opacity:.5,ref:x})]},"grenade-explosion"))}return f}function y(t){var e=t.color,r=t.project,a=t.name,i=t.unit,u=t.mutation,h=[],l=Object(c.useRef)(),p=Object(c.useRef)(),m=0,d=Object(c.useState)(!1),f=Object(n.a)(d,2),b=f[0],g=f[1];Object(o.c)((function(){if(null!=i.events&&i.events.length>0){for(var t=u.clock;i.events.length>m+1&&i.events[m+1].time<=t;)m++;for(;i.events[m].time>t&&0<m;)m--;var e=i.events[m],r=e.location.x,a=e.location.y,n=e.location.z;if(i.events.length>m+1){var c=i.events[m].time,o=i.events[m+1],s=o.location.x-r,h=o.location.y-a,j=o.location.z-n,d=o.time-c;if(0!==d&&t>c){var f=(t-c)/d;r+=s*f,a+=h*f,n+=j*f}}if(l.current.position.x=r,l.current.position.y=a+.9,l.current.position.z=n,null!=e.hit&&e.hit){var x=Math.trunc(t/100)%2===1;x!==b&&g(x)}else b&&g(!1);null!=e.dead&&e.dead?(l.current.scale.x=1.1,l.current.scale.y=.1,l.current.scale.z=1.1,l.current.position.y=a+.09):(l.current.scale.x=1,l.current.scale.y=1,l.current.scale.z=1),null!=e.visible&&(e.visible||null!=e.dead&&e.dead?(p.current.opacity=1,p.current.transparent=!1):(p.current.opacity=.7,p.current.transparent=!0))}}));var x=new s.Color;return x.setRGB(.8,.8,.8),h.push(Object(j.jsxs)("mesh",{ref:l,castShadow:!0,receiveShadow:!0,position:[i.location[0],.9,i.location[1]],scale:[1,1,1],onPointerDown:function(){u.selected=i},onPointerMove:function(){u.selected=null},onPointerOut:function(){u.selected=null},onPointerOver:function(){u.selected=null},onPointerUp:function(){u.selected===i&&u.setUnitToDisplay(i)},children:[Object(j.jsx)("cylinderBufferGeometry",{attach:"geometry",args:[.25,.25,1.8,20,1]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",ref:p,color:b?x:e})]},"mesh"+r+"+"+a)),h}function M(t){var e=t.units,r=t.mutation,n=[],c=new s.Color;c.setRGB(.2745,.5412,.2706),2===e.project&&c.setRGB(.5412,.2706,.2706);var o,i=Object(a.a)(e.units);try{for(i.s();!(o=i.n()).done;){var u=o.value;n.push(Object(j.jsx)(y,{color:c,project:e.project,unit:u,mutation:r},"unit"+e.project+"+"+u.name))}}catch(h){i.e(h)}finally{i.f()}return n}function w(t){var e=t.width,r=t.height,a=t.pixels,n=t.position,c=t.rotation,o=document.createElement("canvas").getContext("2d");o.canvas.width=e,o.canvas.height=r,o.putImageData(new ImageData(new Uint8ClampedArray(a),e,r),0,0);var i=new s.CanvasTexture(o.canvas,s.UVMapping,s.ClampToEdgeWrapping,s.ClampToEdgeWrapping,s.NearestFilter,s.NearestFilter);return Object(j.jsxs)("mesh",{rotation:c,position:n,scale:[1,1,1],children:[Object(j.jsx)("planeBufferGeometry",{attach:"geometry",args:[e,r]}),Object(j.jsx)("meshBasicMaterial",{attach:"material",map:i})]})}function S(t){var e=t.heightMap,r=[],a=e[0].length,n=e.length,c=[a/2-.5,0,n/2-.5];r.push(Object(j.jsxs)("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:c,scale:[1,1,1],children:[Object(j.jsx)("planeBufferGeometry",{attach:"geometry",args:[a,n]}),Object(j.jsx)("shadowMaterial",{attach:"material",opacity:.3})]},"ground-shadow"));for(var o=[],s=[],i=[],u=[],h=[],l=130,p=120,m=0;m<e.length;m++){for(var d=0;d<e[m].length;d++)(d+m)%2===1?(o.push(l),o.push(l),o.push(l),o.push(255)):(o.push(p),o.push(p),o.push(p),o.push(255)),0===m&&(d%2===1?(s.push(Math.trunc(104)),s.push(Math.trunc(104)),s.push(Math.trunc(104)),s.push(255),i.push(Math.trunc(96)),i.push(Math.trunc(96)),i.push(Math.trunc(96)),i.push(255)):(s.push(Math.trunc(96)),s.push(Math.trunc(96)),s.push(Math.trunc(96)),s.push(255),i.push(Math.trunc(104)),i.push(Math.trunc(104)),i.push(Math.trunc(104)),i.push(255)));m%2===1?(u.push(Math.trunc(96)),u.push(Math.trunc(96)),u.push(Math.trunc(96)),u.push(255),h.push(Math.trunc(104)),h.push(Math.trunc(104)),h.push(Math.trunc(104)),h.push(255)):(u.push(Math.trunc(104)),u.push(Math.trunc(104)),u.push(Math.trunc(104)),u.push(255),h.push(Math.trunc(96)),h.push(Math.trunc(96)),h.push(Math.trunc(96)),h.push(255))}return r.push(Object(j.jsx)(w,{rotation:[-Math.PI/2,0,0],position:c,width:a,height:n,pixels:o},"ground-colour")),r.push(Object(j.jsx)(w,{rotation:[0,Math.PI,0],position:[a/2-.5,-.5,-.5],width:a,height:1,pixels:s},"ground-colour-front")),r.push(Object(j.jsx)(w,{rotation:[0,0,0],position:[a/2-.5,-.5,n-.5],width:a,height:1,pixels:i},"ground-colour-back")),r.push(Object(j.jsx)(w,{rotation:[0,Math.PI/2,0],position:[a-.5,-.5,n/2-.5],width:n,height:1,pixels:u},"ground-colour-left")),r.push(Object(j.jsx)(w,{rotation:[0,-Math.PI/2,0],position:[-.5,-.5,n/2-.5],width:n,height:1,pixels:h},"ground-colour-right")),r}Object(o.b)({EffectComposer:i.a,ShaderPass:u.a,RenderPass:h.a,OrbitControls:p.a});var z=function(t){var e=t.target,r=Object(o.d)(),a=r.camera,n=r.gl.domElement,s=Object(c.useRef)();return Object(o.c)((function(){return s.current.update()})),a.position.set(e[0],70,0),a.far=200,a.near=.1,Object(j.jsx)("orbitControls",{ref:s,args:[a,n],target:e,enableDamping:!0,maxPolarAngle:Math.PI/2,minPolarAngle:0})};function R(t){var e=t.mutation,r=0;return Object(o.c)((function(){if(e.playing){var t=Date.now();if(null!=e.lastUpdate){var a=e.clock+(t-e.lastUpdate);a>e.maxClock&&(a=e.maxClock,e.clock=a,e.stopPlaying()),e.clock=a}e.lastUpdate=t}else null!=e.lastUpdate&&(e.lastUpdate=null);if(r!==e.clock&&(r=e.clock,e.setTime(r),e.setTimeForLog(r),e.setTimeForUnitPanel(r),0!==e.maxClock)){var n=r/e.maxClock*100;e.setProgressBarPercentage(n)}})),[]}e.default=function(t){var e=t.heightMap,r=t.heightMapTimes,a=t.units1,n=t.units2,c=t.shots,i=t.target,u=t.tosses,h=t.heals,l=t.reloads,p=t.mutation;return Object(j.jsxs)(o.a,{className:"results-canvas",shadowMap:!0,colorManagement:!0,onCreated:function(t){var e=t.gl;e.toneMapping=s.ACESFilmicToneMapping,e.outputEncoding=s.sRGBEncoding},children:[Object(j.jsx)(d,{}),Object(j.jsx)(b,{heightMap:e,times:r,mutation:p}),Object(j.jsx)(S,{heightMap:e}),Object(j.jsx)(M,{units:a,mutation:p}),Object(j.jsx)(M,{units:n,mutation:p}),Object(j.jsx)(g,{shots:c,mutation:p}),Object(j.jsx)(x,{tosses:u,mutation:p}),Object(j.jsx)(O,{heals:h,mutation:p}),Object(j.jsx)(v,{reloads:l,mutation:p}),Object(j.jsx)(z,{target:i}),Object(j.jsx)(m,{}),Object(j.jsx)(R,{mutation:p})]})}}}]);