(this["webpackJsonpmidi-generator"]=this["webpackJsonpmidi-generator"]||[]).push([[0],{105:function(t,e,n){},108:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(0),a=n.n(o),c=n(17),h=n.n(c),s=(n(87),n(10)),i=n(11),u=n(139),l=n(138),j=n(143),m=n(23),d=n(148),f=n(70),p=n.n(f);function b(t){var e=t.progression,n=Object(o.useState)([]),a=Object(i.a)(n,2),c=a[0],h=a[1];return Object(o.useEffect)((function(){for(var t=Math.max.apply(Math,Object(s.a)(e.notes.map((function(t){return Math.max.apply(Math,Object(s.a)(t.chord.map((function(t){return t.hight}))).concat([t.root.hight]))})))),n=Math.min.apply(Math,Object(s.a)(e.notes.map((function(t){return Math.min.apply(Math,Object(s.a)(t.chord.map((function(t){return t.hight}))).concat([t.root.hight]))})))),o=[],a=0,c=0;c<e.rythm.length;c++)a+=e.rythm[c];for(var i=0;i<e.notes.length;i++){for(var u=[].concat(Object(s.a)(e.notes[i].chord),[e.notes[i].root]).map((function(t){return t.hight})),l=[],j=n;j<=t;j++)u.includes(j)?l.push(Object(r.jsx)("div",{style:{height:(1/(t-n+1)*100).toString()+"%",width:"100%",backgroundColor:"#c62828"}},i.toString()+j.toString())):l.push(Object(r.jsx)("div",{style:{height:(1/(t-n+1)*100).toString()+"%",width:"100%"}},i.toString()+j.toString()));o.push(Object(r.jsx)("div",{style:{height:"100%",width:(e.rythm[i]/a*100).toString()+"%"},children:l.reverse()},i))}h(o)}),[e]),Object(r.jsx)(l.a,{className:"w-100 m-0 h-100",children:c})}var g=a.a.memo(b),O="ADD_SPECIMAN",v="SET_SPECIMAN_SCORE",y="DELETE_POPULATION",x=function(t){return{type:O,payload:{speciman:t}}},w=function(){return{type:y}};function M(t){var e=t.progression,n=t.index,o=Object(m.b)();return Object(r.jsxs)(u.a,{className:"p-0 h-100",children:[Object(r.jsxs)(l.a,{className:"w-100 m-0 h-75",children:[Object(r.jsx)(g,{color:"#c62828",progression:e}),Object(r.jsx)("div",{className:"vote",onClick:function(){e.play()},children:Object(r.jsx)(p.a,{style:{fontSize:80},className:"vote-text"})})]}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(j.a,{sm:3,children:Object(r.jsx)("small",{children:"Score"})}),Object(r.jsx)(j.a,{sm:1,className:"pl-2",children:Object(r.jsx)("small",{children:e.score})}),Object(r.jsx)(j.a,{className:"pl-2",children:Object(r.jsx)(d.a,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,onChange:function(t,e){o(function(t){var e=t.index,n=t.score;return{type:v,payload:{index:e,score:n}}}({index:n,score:e}))},value:e.score})})]})]})}var S=a.a.memo(M),N=n(144);var C=function(){var t=Object(m.c)((function(t){return t.population})),e=Object(o.useState)([]),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){for(var e=Object(s.a)(t),n=[];e.length;)n.push(e.splice(0,4));c(n)}),[t]),Object(r.jsx)(N.a,{children:Object(r.jsx)(u.a,{children:a.map((function(t,e){return Object(r.jsx)(l.a,{children:t.map((function(t,n){return Object(r.jsx)(j.a,{style:{height:"200px"},children:Object(r.jsx)(S,{progression:t,index:4*e+n})},n)}))},e)}))})})},k=n(26),E=n(4),z=n(146),L=n(147),A=n(1),D=n(2),I=function t(e,n,r){Object(A.a)(this,t);var o=e.map((function(t){return t.chord}));o.flat()||(o=e.map((function(t){return t.root})));var a=n.reduce((function(t,e){return t+e}));this.scale=r,this.length=a,this.switches=n.length},P=[1/8,1/4,.5,3/4,1,1.5,2,3,4];function T(t,e){e=e-P.length+1;for(var n=0,r=[],o=0,a=Math.min(P.length-1+e,P.length-1),c=Math.max(e,0);n<t;){var h=0,s=Math.floor(Math.random()*(a-c))+c;if(Math.random()<.4&&0!==o?s=o:o=s,n+P[s]-h>t)return h=t-n,r.push({rythm:h,beginning:n}),n+=h,r;r.push({rythm:P[s]-h,beginning:n}),n+=P[s]-h}return r}var F=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],R=function(){function t(e,n,r){Object(A.a)(this,t),this.hight=e,this.start=n,this.end=n+r,this.duration=r;var o=Math.floor(e/12),a=F[e%12];this.note=a+o.toString()}return Object(D.a)(t,[{key:"existsInWindow",value:function(t){return t[0]>this.start&&t[0]<this.end||t[1]>this.start&&t[1]<=this.end}}]),t}(),G="major",W="minor",_={major:{notes:[0,2,4,5,7,9,11],mode:[G,W,W,G,G,W,W]}},B={major:[0,4,7,2,11,6,9,1,8,3,10,5],minor:[0,3,7,2,10,5,9,4,11,6,8,1]};function J(t,e,n,r){var o=_[e],a=Math.floor(Math.random()*o.notes.length),c=o.mode[a],h=o.notes[a];if(0===n)return{root:h+=36,chord:[]};var s=function(t,e,n,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,a=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,h=[],s=0,i=0;i<n;i++){var u=Math.floor(Math.random()*o+Math.floor(s/(2*o))),l=B[e][u];l+=t,Math.random()<u/(1+a)/12-c&&(l+=12),Math.random()<l/2*(1+a)/12-c&&0!==u&&(l-=12),!h.includes(l)&&r.includes(l%12)?(s=0,h.push(l)):(s++,i--)}return h}(h,c,n,o.notes,r,t).map((function(e){return e+12*(3+t)}));return Math.random()-1/4>h/12&&(h+=12),{chord:s,root:h+12}}var q=n(40),Q=new q.b(.2).toDestination(),U=new q.a({frequency:1e3,type:"lowpass",rolloff:-12,Q:0}).connect(Q),Y=0;function H(t){Y=t}var K=new q.c(q.d,{oscillator:{count:2,spread:5,type:"sawtooth"},envelope:{attack:.002,decay:0,sustain:1,release:.1}}).connect(U);function V(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,o=0,a=[],c=T(r,n),h=Math.floor(12*Math.random()),s=function(n){var r=J(o,"major",e-1,t);a.push({chord:r.chord.map((function(t){return new R(t+h,c[n].beginning,c[n].rythm)})),root:new R(r.root+h,c[n].beginning,c[n].rythm)})},i=0;i<c.length;i++)s(i);var u=new I(a,c,h);return new X({notes:a,rythm:c.map((function(t){return t.rythm})),genome:u})}var X=function(){function t(e){var n=e.rythm,r=e.genome,o=e.score,a=void 0===o?10:o,c=e.notes;Object(A.a)(this,t),this.notes=c,this.rythm=n,this.genome=r,this.score=a}return Object(D.a)(t,[{key:"getAllNotes",value:function(){return this.notes.map((function(t){return[].concat(Object(s.a)(t.chord),[t.root])})).flat()}},{key:"play",value:function(){if(!Y){H(1);for(var t=0,e=this.getAllNotes(),n=q.e(),r=0;r<e.length;r++)K.triggerAttack(e[r].note,n+e[r].start),K.triggerRelease([e[r].note],n+e[r].end),e[r].end>t&&(t=e[r].end);setTimeout((function(){H(0)}),1e3*t)}}},{key:"transpose",value:function(e){var n=e-this.genome.scale,r=this.notes.map((function(t){return{chord:t.chord.map((function(t){return new R(t.hight+n,t.start,t.duration)})),root:new R(t.root.hight+n,t.root.start,t.root.duration)}})),o=new I(r,this.rythm,this.genome.scale+n);return new t(Object(E.a)(Object(E.a)({},this),{},{genome:o,notes:r}))}},{key:"mutate",value:function(t,e){this.mutateScale();return this.mutateRythm(.1,t,e),this.mutateMelody(.1,t)}},{key:"mutateMelody",value:function(e,n){for(var r=this,o=[],a=[],c=0,h=function(t){if(Math.random()<e&&t<r.rythm.length-1){var h=J(0,"major",r.notes[0].chord.length,n),s=new R(h.root+r.genome.scale,c,r.rythm[t]),i=h.chord.map((function(t){return t+r.genome.scale}));return a.push({chord:i.map((function(e){return new R(e,c,r.rythm[t])})),root:new R(s.hight,c,r.rythm[t])}),o.push(r.rythm[t]),c+=r.rythm[t],"continue"}o.push(r.rythm[t]),c+=r.rythm[t],a.push(r.notes[t])},s=0;s<this.rythm.length;s++)h(s);var i=new I(a,o,this.genome.scale);return new t(Object(E.a)(Object(E.a)({},this),{},{genome:i,notes:a,rythm:o}))}},{key:"mutateScale",value:function(){var t=Math.floor(3*Math.random())-1+this.genome.scale;return this.transpose(t)}},{key:"mutateRythm",value:function(e,n,r){r=r-P.length+1;var o=this.joinChord(e,n),a=Object(i.a)(o,2),c=a[0],h=a[1],s=new t(Object(E.a)(Object(E.a)({},this),{},{notes:h,rythm:c})).breakChord(e,n,r),u=Object(i.a)(s,2),l=u[0],j=u[1],m=new I(j,l,this.genome.scale);return new t(Object(E.a)(Object(E.a)({},this),{},{genome:m,notes:j,rythm:l}))}},{key:"breakChord",value:function(t,e,n){for(var r=this,o=[],a=[],c=0,h=Math.min(P.length-1+n,P.length-1),s=Math.max(n,0),i=function(n){var i=[];if(P.forEach((function(t,e){t<r.rythm[n]&&e<h&&e>=s&&i.push(t)})),Math.random()<t&&i.length>0){var u=i[Math.floor(Math.random()*i.length)],l=J(0,"major",r.notes[0].chord.length,e),j=new R(l.root+r.genome.scale,c,r.rythm[n]),m=l.chord.map((function(t){return t+r.genome.scale}));return Math.round(Math.random())<=2?(a.push({chord:r.notes[n].chord.map((function(t){return new R(t.hight,c,u)})),root:new R(r.notes[n].root.hight,c,u)}),a.push({chord:m.map((function(t){return new R(t,c+u,r.rythm[n]-u)})),root:new R(j.hight,c+u,r.rythm[n]-u)}),o.push(r.rythm[n]-u),o.push(u)):(a.push({chord:m.map((function(t){return new R(t,c,u)})),root:new R(j.hight,c,u)}),a.push({chord:r.notes[n].chord.map((function(t){return new R(t.hight,c+u,r.rythm[n]-u)})),root:new R(r.notes[n].root.hight,c+u,r.rythm[n]-u)}),o.push(u),o.push(r.rythm[n]-u)),c+=r.rythm[n],"continue"}o.push(r.rythm[n]),c+=r.rythm[n],a.push(r.notes[n])},u=0;u<this.rythm.length;u++)i(u);return[o,a]}},{key:"joinChord",value:function(t,e){for(var n=this,r=[],o=[],a=0,c=function(c){if(Math.random()<t&&c<n.rythm.length-1){var i=[].concat(Object(s.a)(n.notes[c].chord),Object(s.a)(n.notes[c+1].chord)),u=n.notes[c+Math.round(Math.random())].root,l=et(i,u,n.genome.scale,e,n.notes[c].chord.length);return o.push({chord:l.map((function(t){return new R(t,a,n.rythm[c]+n.rythm[c+1])})),root:new R(u.hight,a,n.rythm[c]+n.rythm[c+1])}),r.push(n.rythm[c]+n.rythm[c+1]),a+=n.rythm[c]+n.rythm[c+1],c++,h=c,"continue"}r.push(n.rythm[c]),a+=n.rythm[c],o.push(n.notes[c]),h=c},h=0;h<this.rythm.length;h++)c(h);return[r,o]}}]),t}();function Z(t){var e=t.reduce((function(t,e){return t+e}));return t.map((function(t){return t/e}))}function $(t){for(var e=Math.random(),n=0,r=0;n<e;)n+=t[r],r++;return r-1}function tt(t,e,n){var r=Math.max(t.genome.scale,e.genome.scale),o=Math.min(t.genome.scale,e.genome.scale),a=Math.floor(Math.random()*(r-o))+o,c=t.transpose(a),h=e.transpose(a),i=function(t,e,n){var r=[],o=0,a=[t.map((function(t){return t.end})).sort(),e.map((function(t){return t.end})).sort()];for(;o<n;)for(var c=Math.round(Math.random()),h=0;h<a[c].length;h++){if(a[c][h]>o){r.push(a[c][h]-o),o=a[c][h];break}h===a[c].length-1&&(r.push(a[c][h]-o),o=a[c][h])}return r}(c.getAllNotes(),h.getAllNotes(),8),u=function(t,e){for(var n=[],r=0,o=function(o){var a=e[o];n.push({chord:a.chord.map((function(e){return new R(e,r,t[o])})),root:new R(a.root,r,t[o])}),r+=t[o]},a=0;a<t.length;a++)o(a);return n}(i,function(t,e,n,r,o,a){for(var c=0,h=[],i=function(i){var u=[c,c+n[i]],l=[];t.notes.forEach((function(t){return t.root.existsInWindow(u)?l.push(t.root):null})),e.notes.forEach((function(t){return t.root.existsInWindow(u)?l.push(t.root):null})),l=Object(s.a)(new Set(l));var j=Math.floor(Math.random()*l.length),m=l[j];l=[],e.notes.forEach((function(t){t.chord.forEach((function(t){return t.existsInWindow(u)?l.push(t):null}))})),t.notes.forEach((function(t){t.chord.forEach((function(t){return t.existsInWindow(u)?l.push(t):null}))}));var d=et(l=Object(s.a)(new Set(l)),m,r,a,o);h.push({chord:d,root:m.hight}),c+=n[i]},u=0;u<n.length;u++)i(u);return h}(c,h,i,a,t.notes[0].chord.length,n)),l=new I(u,i,a);return new X({notes:u,rythm:i,genome:l})}function et(t,e,n,r,o){for(var a=_.major,c=(e.hight-n)%12,h=a.mode[a.notes.indexOf(c)],s=[],i=0,u=0;u<o;u++){var l=t[Math.floor(Math.random()*t.length)].hight;!s.includes(l)&&B[h].slice(0,r+Math.floor(i/(2*r))).includes((l-e.hight)%12)?(i=0,s.push(l)):(i++,u--)}return s}var nt=function(t){var e=t.updateGeneration,n=t.params,o=Object(m.b)(),a=Object(m.c)((function(t){return t.population}));return Object(r.jsx)(L.a,{variant:"contained",color:"primary",onClick:function(){o(w()),function(t,e,n){for(var r=[],o=0;o<t.length;o++){var a=Z(t.map((function(t){return t.score}))),c=$(a),h=$(a),s=tt(t[c],t[h],e).mutate(e,n);r.push(s)}return r}(a,n.jazziness,n.noteLengths).map((function(t){return o(x(t))})),e()},children:"Evolve"})};var rt=function(){var t=Object(o.useState)(0),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)({populationSize:8,jazziness:4,numberOfNotes:3,noteLengths:12,tempo:120,progressionLength:8}),h=Object(i.a)(c,2),s=h[0],d=h[1],f=Object(m.b)(),p=function(t){d(Object(E.a)(Object(E.a)({},s),{},Object(k.a)({},t.target.name,t.target.value)))},b=function(){a(0),f(w()),function(t,e,n,r,o){for(var a=[],c=0;c<t;c++)a.push(V(e,n,r,o));return a}(s.populationSize,s.jazziness,s.numberOfNotes,s.noteLengths,s.progressionLength).map((function(t){return f(x(t))}))};return Object(o.useEffect)((function(){b()}),[s]),Object(r.jsx)(N.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)("h2",{children:["Generation: ",n]})}),Object(r.jsxs)(l.a,{className:"p-5",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)(z.a,{name:"tempo",label:"Tempo",type:"number",onChange:p,value:s.tempo})}),Object(r.jsx)(j.a,{children:Object(r.jsx)(z.a,{name:"progressionLength",label:"Progression Length",type:"number",onChange:p,value:s.progressionLength})}),Object(r.jsx)(j.a,{children:Object(r.jsx)(z.a,{name:"populationSize",label:"Population size",type:"number",onChange:p,value:s.populationSize})}),Object(r.jsx)(j.a,{children:Object(r.jsx)(z.a,{name:"jazziness",label:"Jazziness",type:"number",onChange:p,value:s.jazziness})}),Object(r.jsx)(j.a,{children:Object(r.jsx)(z.a,{name:"numberOfNotes",label:"Number of notes",type:"number",onChange:p,value:s.numberOfNotes})}),Object(r.jsx)(j.a,{children:Object(r.jsx)(z.a,{name:"noteLengths",label:"Note lengths",type:"number",onChange:p,value:s.noteLengths})})]}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(L.a,{variant:"contained",color:"primary",onClick:b,children:"Restart"}),Object(r.jsx)(nt,{updateGeneration:function(){a(n+1)},params:s})]})]})})};var ot=function(){var t=Object(o.useState)(null),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(m.c)((function(t){return t.population}));return Object(o.useEffect)((function(){c.length>1&&a(tt(c[0],c[1]))}),[c]),n?Object(r.jsx)(N.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)(j.a,{children:Object(r.jsx)("h2",{children:"Debug"})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Parent 1:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(j.a,{style:{height:"300px"},children:Object(r.jsx)(S,{progression:c[0],index:0})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Parent 2:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(j.a,{style:{height:"300px"},children:Object(r.jsx)(S,{progression:c[1],index:1})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Child:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(j.a,{style:{height:"300px"},children:Object(r.jsx)(S,{progression:n})})})]})}):null},at=(n(105),n(74)),ct=n(20),ht=n(75),st=n(145),it=Object(ht.a)({palette:{type:"dark",primary:{main:"#c62828"},secondary:{main:"#181a1b"}}});function ut(){return Object(r.jsxs)(st.a,{theme:it,children:[Object(r.jsx)(rt,{}),Object(r.jsx)(at.a,{children:Object(r.jsxs)(ct.c,{children:[Object(r.jsx)(ct.a,{path:"/test",children:Object(r.jsx)(ot,{})}),Object(r.jsx)(ct.a,{path:"/",children:Object(r.jsx)(C,{})})]})})]})}ut.whyDidYouRender=!0;var lt=ut,jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))},mt=(n(107),n(46)),dt=[],ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return[].concat(Object(s.a)(t),[e.payload.speciman]);case y:return[];case v:return t.map((function(t,n){return n!==e.payload.index?t:new X(Object(E.a)(Object(E.a)({},t),{},{score:e.payload.score}))}));default:return t}},pt=Object(mt.b)({population:ft}),bt=Object(mt.c)(pt);h.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m.a,{store:bt,children:Object(r.jsx)(lt,{})})}),document.getElementById("root")),jt()},87:function(t,e,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.40c0094a.chunk.js.map