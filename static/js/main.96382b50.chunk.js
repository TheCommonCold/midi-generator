(this["webpackJsonpmidi-generator"]=this["webpackJsonpmidi-generator"]||[]).push([[0],{21:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(4),s=n.n(o),c=n(15),a=n.n(c),i=(n(21),n(2)),h=n(36),u=n(37),l=n(38),d=n(40),j=n(11),f=new j.b(.2).toDestination(),p=new j.a({frequency:1e3,type:"lowpass",rolloff:-12,Q:0}).connect(f),m=new j.c(j.d,{oscillator:{count:2,spread:5,type:"sawtooth"},envelope:{attack:.002,decay:0,sustain:1,release:.1}}).connect(p),v=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function g(t,e){for(var n=e,r=0,o=function(e){setTimeout((function(){!function(t,e){var n=j.e(),r=(o=t,o.map((function(t){var e=Math.floor(t/12);return v[t%12]+e.toString()})));var o;m.triggerAttack(r,n),m.releaseAll(n+e)}(t[e],n[e])}),1e3*r),r+=n[e]},s=0;s<n.length;s++)o(s)}var b=function(t){for(var e=Object(o.useState)(t.progression.score),n=Object(i.a)(e,2),s=n[0],c=n[1],a=[],j=0,f=0;f<t.progression.notes.rythm.length;f++)j+=t.progression.notes.rythm[f];for(var p=0;p<t.progression.notes.chords.length;p++){for(var m=t.progression.notes.chords[p],v=[],b=12;b<72;b++)m.includes(b)?v.push(Object(r.jsx)("div",{style:{height:(1/60*100).toString()+"%",width:"100%","background-color":"red"}})):v.push(Object(r.jsx)("div",{style:{height:(1/60*100).toString()+"%",width:"100%"}}));a.push(Object(r.jsx)("div",{style:{height:"100%",width:(t.progression.notes.rythm[p]/j*100).toString()+"%"},children:v.reverse()}))}return Object(r.jsxs)(h.a,{className:"p-0",children:[Object(r.jsxs)(u.a,{className:"w-100 m-0",style:{height:"200px"},children:[Object(r.jsx)("div",{className:"vote up",onClick:function(){c(s+1)},children:Object(r.jsx)("div",{className:"vote-text",children:"\ud83e\udc45"})}),Object(r.jsx)("div",{className:"vote down",onClick:function(){c(s-1)},children:Object(r.jsx)("div",{className:"vote-text",children:"\ud83e\udc47"})}),a]}),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{children:Object(r.jsx)(d.a,{className:"w-100 p-0",onClick:function(){g(t.progression.notes.chords,t.progression.notes.rythm)},children:"Play"})}),Object(r.jsx)(l.a,{sm:1,children:s})]})]})},x=[.5,3/4,1,1.5,2,3,4];var O="major",y="minor",w={major:{notes:[0,2,4,5,7,9,11],mode:[O,y,y,O,O,y,y]}},M={major:[0,4,7,2,11,6,9,1,8,3,10,5],minor:[0,3,7,2,10,5,9,4,11,6,8,1]};function k(){for(var t=[],e=function(t){for(var e=0,n=[];e<t;){var r=0,o=Math.floor(Math.random()*x.length);if(e+x[o]-r>t)return e+=r=t-e,n.push(r),n;e+=x[o]-r,n.push(x[o]-r)}return n}(8),n=0;n<e.length;n++)t.push(C(0,"major",3,5));var r=Math.floor(12*Math.random());return{chords:t=t.map((function(t){return t.map((function(t){return t+r}))})),rythm:e}}function C(t,e,n,r){var o=w[e],s=Math.floor(Math.random()*o.notes.length),c=o.mode[s],a=o.notes[s],i=function(t,e,n,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,s=[],c=0;c<n;c++){var a=Math.floor(Math.random()*o),i=M[e][a];i+=t,!s.includes(i)&&r.includes(i%12)?(Math.random()<a/24&&(i+=12),s.push(i)):c--}return s}(a,c,n,o.notes,r).map((function(e){return e+36+12*t}));return Math.random()-1/4>a/12&&(a+=12),i.push(a+12),i}var N=function(t){var e=function(t){for(var e=[];t.length;)e.push(t.splice(0,4));return e}(function(t){for(var e=[],n=0;n<t;n++)e.push({notes:k(),score:0});return e}(16));return Object(r.jsxs)(h.a,{children:[e.map((function(t){return Object(r.jsx)(u.a,{children:t.map((function(t){return Object(r.jsx)(l.a,{children:Object(r.jsx)(b,{progression:t})})}))})})),Object(r.jsx)(u.a,{})]})},S=(n(33),n(39));var F=function(){return Object(r.jsx)(S.a,{children:Object(r.jsx)(N,{})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),s(t),c(t)}))};n(34);a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),A()}},[[35,1,2]]]);
//# sourceMappingURL=main.96382b50.chunk.js.map