(this["webpackJsonpmidi-generator"]=this["webpackJsonpmidi-generator"]||[]).push([[0],{12:function(t,e,n){},21:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(4),o=n.n(a),i=n(13),c=n.n(i),s=(n(21),n(0)),h=n.n(s),u=n(2),d=(n(12),n.p+"static/media/midi.9923a118.mid"),l=n(14),f=n.n(l),j=n(35),g=n(36),m=n(37),v=n(39),p=[.5,3/4,1,1.5,2,3,4];var b="major",x="minor",O={major:{notes:[0,2,4,5,7,9,11],mode:[b,x,x,b,b,x,x]}},y={major:[0,4,7,2,11,18,21,13,20,15,22,17],minor:[0,3,7,2,10,17,21,16,23,18,20,13]};function w(){for(var t=[],e=function(t){for(var e=0,n=[];e<t;){var r=0,a=Math.floor(Math.random()*p.length);if(e+p[a]-r>t)return e+=r=t-e,n.push(r),n;e+=p[a]-r,n.push(p[a]-r)}return n}(8),n=0;n<e.length;n++)t.push(k(1,"major",2,5));return{chords:t,rythm:e}}function k(t,e,n,r){var a=O[e],o=Math.floor(Math.random()*a.notes.length),i=a.mode[o],c=a.notes[o],s=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[],a=0;a<e;a++){var o=y[t][Math.floor(Math.random()*n)];r.includes(o)?a--:r.push(o)}return r}(i,n,r).map((function(e){return e+c+36+12*t}));return Math.random()-1/4>c/12&&(c+=12),s.push(c+24),s}var M=n(10),T=new M.a(M.b).toDestination();function S(t,e){for(var n=e,r=0,a=function(e){setTimeout((function(){!function(t,e){var n=M.c();T.triggerAttack(t,n),T.triggerRelease(t,n+e)}(t[e],1e3*n[e])}),1e3*r),r+=n[e]},o=0;o<n.length;o++)a(o)}function C(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,e=arguments.length>1?arguments[1]:void 0,n=function(){S(e.chords,e.rythm)},a=24,o=[],i=0,c=0;c<e.rythm.length;c++)i+=e.rythm[c];for(var s=0;s<e.chords.length;s++){for(var h=e.chords[s],u=[],d=a;d<t+a;d++)h.includes(d)?u.push(Object(r.jsx)("div",{style:{height:(1/t*100).toString()+"%",width:"100%","background-color":"red"}})):u.push(Object(r.jsx)("div",{style:{height:(1/t*100).toString()+"%",width:"100%"}}));o.push(Object(r.jsx)("div",{style:{height:"100%",width:(e.rythm[s]/i*100).toString()+"%"},children:u.reverse()}))}return Object(r.jsx)(j.a,{children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(g.a,{className:"w-100",style:{height:"200px"},children:o}),Object(r.jsx)(m.a,{children:Object(r.jsx)(v.a,{className:"w-100",onClick:n,children:"Play progression"})})]})})}var F=function(){var t=[w(),w(),w(),w()];return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(h.a.mark((function t(){var e,n,r,a,o,i,c,s,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:return e=t.sent,n=e.body.getReader(),t.next=6,n.read();case 6:for(r=t.sent,a=f.a.parse(r.value),console.log(a),o=a.track[0].event.filter((function(t){return 9===t.type})),i=a.track[0].event.filter((function(t){return 8===t.type})),c=[],s=0;s<o.length;s++)for(u=0;u<o.length;u++)o[s].data[0]===i[u].data[0]&&c.push({note:o[s].data[0],startTime:o[s].deltaTime,endTime:i[u].deltaTime});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(r.jsx)(j.a,{children:Object(r.jsx)(g.a,{children:t.map((function(t){return Object(r.jsx)(m.a,{children:C(48,t)})}))})})},P=n(38);var B=function(){return Object(r.jsx)(P.a,{children:Object(r.jsx)(F,{})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)}))};n(33);c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.70a188a5.chunk.js.map