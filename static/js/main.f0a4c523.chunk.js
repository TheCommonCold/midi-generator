(this["webpackJsonpmidi-generator"]=this["webpackJsonpmidi-generator"]||[]).push([[0],{18:function(r,n,t){},30:function(r,n,t){},32:function(r,n,t){"use strict";t.r(n);var e=t(2),o=t(3),s=t.n(o),a=t(12),i=t.n(a),c=(t(18),t(33)),h=t(34),u=t(35),l=t(37),d=t(9),f=new d.b(.2).toDestination(),j=new d.a({frequency:1e3,type:"lowpass",rolloff:-12,Q:0}).connect(f),p=new d.c(d.d,{oscillator:{count:2,spread:5,type:"sawtooth"},envelope:{attack:.002,decay:0,sustain:1,release:.1}}).connect(j),g=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function m(r,n){for(var t=n,e=0,o=function(n){setTimeout((function(){!function(r,n){var t=d.e(),e=(o=r,o.map((function(r){var n=Math.floor(r/12);return g[r%12]+n.toString()})));var o;p.triggerAttack(e,t),p.releaseAll(t+n)}(r[n],t[n])}),1e3*e),e+=t[n]},s=0;s<t.length;s++)o(s)}var v=function(r){for(var n=[],t=0,o=0;o<r.progression.rythm.length;o++)t+=r.progression.rythm[o];for(var s=0;s<r.progression.chords.length;s++){for(var a=r.progression.chords[s],i=[],d=12;d<72;d++)a.includes(d)?i.push(Object(e.jsx)("div",{style:{height:(1/60*100).toString()+"%",width:"100%","background-color":"red"}})):i.push(Object(e.jsx)("div",{style:{height:(1/60*100).toString()+"%",width:"100%"}}));n.push(Object(e.jsx)("div",{style:{height:"100%",width:(r.progression.rythm[s]/t*100).toString()+"%"},children:i.reverse()}))}return Object(e.jsx)(c.a,{children:Object(e.jsxs)(h.a,{children:[Object(e.jsx)(h.a,{className:"w-100",style:{height:"200px"},children:n}),Object(e.jsx)(u.a,{children:Object(e.jsx)(l.a,{className:"w-100",onClick:function(){m(r.progression.chords,r.progression.rythm)},children:"Play progression"})})]})})},b=[.5,3/4,1,1.5,2,3,4];var x="major",O="minor",y={major:{notes:[0,2,4,5,7,9,11],mode:[x,O,O,x,x,O,O]}},w={major:[0,4,7,2,11,6,9,1,8,3,10,5],minor:[0,3,7,2,10,5,9,4,11,6,8,1]};function M(){for(var r=[],n=function(r){for(var n=0,t=[];n<r;){var e=0,o=Math.floor(Math.random()*b.length);if(n+b[o]-e>r)return n+=e=r-n,t.push(e),t;n+=b[o]-e,t.push(b[o]-e)}return t}(8),t=0;t<n.length;t++)r.push(k(0,"major",2,5));var e=Math.floor(12*Math.random());return{chords:r=r.map((function(r){return r.map((function(r){return r+e}))})),rythm:n}}function k(r,n,t,e){var o=y[n],s=Math.floor(Math.random()*o.notes.length),a=o.mode[s],i=o.notes[s],c=function(r,n,t){for(var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,o=[],s=0;s<n;s++){var a=Math.floor(Math.random()*e),i=w[r][a];!o.includes(i)&&t.includes(i)?(Math.random()<a/24&&(i+=12),o.push(i)):s--}return o}(a,t,o.notes,e).map((function(n){return n+i+36+12*r}));return Math.random()-1/4>i/12&&(i+=12),c.push(i+12),c}var C=function(r){var n=function(r){for(var n=[];r.length;)n.push(r.splice(0,4));return n}(function(r){for(var n=[],t=0;t<r;t++)n.push(M());return n}(16));return Object(e.jsxs)(c.a,{children:[n.map((function(r){return Object(e.jsx)(h.a,{children:r.map((function(r){return Object(e.jsx)(u.a,{children:Object(e.jsx)(v,{progression:r})})}))})})),Object(e.jsx)(h.a,{})]})},F=(t(30),t(36));var S=function(){return Object(e.jsx)(F.a,{children:Object(e.jsx)(C,{})})},A=function(r){r&&r instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,e=n.getFID,o=n.getFCP,s=n.getLCP,a=n.getTTFB;t(r),e(r),o(r),s(r),a(r)}))};t(31);i.a.render(Object(e.jsx)(s.a.StrictMode,{children:Object(e.jsx)(S,{})}),document.getElementById("root")),A()}},[[32,1,2]]]);
//# sourceMappingURL=main.f0a4c523.chunk.js.map