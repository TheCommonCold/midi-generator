(this["webpackJsonpmidi-generator"]=this["webpackJsonpmidi-generator"]||[]).push([[0],{123:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(0),a=n.n(o),c=n(15),i=n.n(c),s=n(10),h=n(11),u=n(159),l=n(158),d=n(21),m=n(79),j=n.n(m),f=n(85),b=n.n(f),p=n(83),O=n.n(p),g=n(84),v=n.n(g);function x(e){var t=e.progression,n=Object(o.useState)([]),a=Object(h.a)(n,2),c=a[0],i=a[1];return Object(o.useEffect)((function(){for(var e=Math.max.apply(Math,Object(s.a)(t.notes.map((function(e){return Math.max.apply(Math,Object(s.a)(e.chord.map((function(e){return e.hight}))).concat([e.root.hight]))})))),n=Math.min.apply(Math,Object(s.a)(t.notes.map((function(e){return Math.min.apply(Math,Object(s.a)(e.chord.map((function(e){return e.hight}))).concat([e.root.hight]))})))),o=[],a=0,c=0;c<t.rythm.length;c++)a+=t.rythm[c];for(var h=0;h<t.notes.length;h++){for(var u=[].concat(Object(s.a)(t.notes[h].chord),[t.notes[h].root]).map((function(e){return e.hight})),l=[],d=n;d<=e;d++)u.includes(d)?l.push(Object(r.jsx)("div",{style:{height:(1/(e-n+1)*100).toString()+"%",width:"100%",backgroundColor:"#c62828"}},h.toString()+d.toString())):l.push(Object(r.jsx)("div",{style:{height:(1/(e-n+1)*100).toString()+"%",width:"100%"}},h.toString()+d.toString()));o.push(Object(r.jsx)("div",{style:{height:"100%",width:(t.rythm[h]/a*100).toString()+"%"},children:l.reverse()},h))}i(o)}),[t]),Object(r.jsx)(l.a,{className:"w-100 m-0 h-100",children:c})}var y=a.a.memo(x),w="ADD_SPECIMAN",M="SET_SPECIMAN_SCORE",N="DELETE_POPULATION",S=function(e){return{type:w,payload:{speciman:e}}},k=function(e){var t=e.index,n=e.score;return{type:M,payload:{index:t,score:n}}},C=function(){return{type:N}};function E(e){for(var t=e.progression,n=e.index,o=Object(d.b)(),a=[],c=t.score,i=0;i<10;i++)c>0?(a.push(Object(r.jsx)("div",{className:"w-100 score-bar score-bar-color"})),c--):a.push(Object(r.jsx)("div",{className:"w-100 score-bar"}));return a.reverse(),Object(r.jsx)(u.a,{className:"p-0 h-100",children:Object(r.jsxs)(l.a,{className:"w-100 m-0 h-100",children:[Object(r.jsx)(y,{color:"#c62828",progression:t}),Object(r.jsx)("div",{className:"overlay play border-color",onClick:function(){t.play()},children:Object(r.jsx)(j.a,{style:{fontSize:80},className:"overlay-text"})}),Object(r.jsx)("div",{className:"overlay up-vote border-color",onClick:function(){t.score<10&&o(k({index:n,score:t.score+1}))},children:Object(r.jsx)(O.a,{style:{fontSize:60},className:"overlay-text"})}),Object(r.jsx)("div",{className:"overlay down-vote border-color",onClick:function(){t.score>0&&o(k({index:n,score:t.score-1}))},children:Object(r.jsx)(v.a,{style:{fontSize:60},className:"overlay-text"})}),Object(r.jsx)("div",{className:"download border-color",onClick:function(){t.download()},children:Object(r.jsx)(b.a,{style:{fontSize:20},className:"overlay-text"})}),Object(r.jsx)("div",{className:"score",children:a}),Object(r.jsx)("div",{className:"score",children:Object(r.jsxs)("small",{className:"score-text",children:["score: ",t.score]})})]})})}var z=a.a.memo(E),A=n(163),I=n(164);var L=function(){var e=Object(d.c)((function(e){return e.population})),t=Object(o.useState)([]),n=Object(h.a)(t,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){for(var t=Object(s.a)(e),n=[];t.length;)n.push(t.splice(0,4));c(n)}),[e]),Object(r.jsx)(A.a,{children:Object(r.jsx)(u.a,{children:a.map((function(e,t){return Object(r.jsx)(l.a,{children:e.map((function(e,n){return Object(r.jsx)(I.a,{className:"m-1 midi-field p-2 pb-3",style:{height:"150px"},children:Object(r.jsx)(z,{progression:e,index:4*t+n})},n)}))},t)}))})})},P=n(26),D=n(4),F=n(170),T=n(172),R=n(169),W=n(173),G=n(165),J=n(1),B=n(2),_=function e(t,n,r){Object(J.a)(this,e);var o=t.map((function(e){return e.chord}));o.flat()||(o=t.map((function(e){return e.root})));var a=n.reduce((function(e,t){return e+t}));this.scale=r,this.length=a,this.switches=n.length},q=[1/8,1/4,.5,3/4,1,2,3,4];function Q(e){for(var t=[],n=e;0!==n;)for(var r=U.length-1;r>=0;r--){var o=1/parseInt(U[r]);if(n>=o){t.push(U[r]),n-=o;break}}return t}var U=["64","32","16","8","4","2","1"];function Y(e,t){for(var n=0,r=[],o=0,a=t.max,c=t.min;n<e;){var i=0,s=Math.floor(Math.random()*(a-c))+c;if(Math.random()<.4&&0!==o?s=o:o=s,n+q[s]-i>e)return i=e-n,r.push({rythm:i,beginning:n}),n+=i,r;r.push({rythm:q[s]-i,beginning:n}),n+=q[s]-i}return r}var H=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],K=function(){function e(t,n,r){Object(J.a)(this,e),this.hight=t,this.start=n,this.end=n+r,this.duration=r;var o=Math.floor(t/12),a=H[t%12];this.note=a+o.toString()}return Object(B.a)(e,[{key:"existsInWindow",value:function(e){return e[0]>this.start&&e[0]<this.end||e[1]>this.start&&e[1]<=this.end}}]),e}(),V="major",X="minor",Z={major:{notes:[0,2,4,5,7,9,11],mode:[V,X,X,V,V,X,X]}},$={major:[0,4,7,2,11,6,9,1,8,3,10,5],minor:[0,3,7,2,10,5,9,4,11,6,8,1]};function ee(e,t,n,r){var o=Z[t],a=Math.floor(Math.random()*o.notes.length),c=o.mode[a],i=o.notes[a];if(0===n)return{root:i+=36,chord:[]};var s=function(e,t,n,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,a=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,i=[],s=0,h=0;h<n;h++){var u=Math.floor(Math.random()*o+Math.floor(s/(2*o))),l=$[t][u];l+=e,Math.random()<u/(1+a)/12-c&&(l+=12),Math.random()<l/2*(1+a)/12-c&&0!==u&&(l-=12),!i.includes(l)&&r.includes(l%12)?(s=0,i.push(l)):(s++,h--)}return i}(i,c,n,o.notes,r,e).map((function(t){return t+12*(3+e)}));return Math.random()-1/4>i/12&&(i+=12),{chord:s,root:i+12}}var te=n(43),ne=new te.b(.2).toDestination(),re=new te.a({frequency:1e3,type:"lowpass",rolloff:-12,Q:0}).connect(ne),oe=0,ae=120;function ce(e){oe=e}function ie(){return ae}var se=new te.c(te.d,{oscillator:{count:2,spread:5,type:"sawtooth"},envelope:{attack:.002,decay:0,sustain:1,release:.1}}).connect(re),he=n(70),ue=n.n(he),le=n(86),de=n.n(le);function me(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,o=0,a=[],c=Y(r,n),i=Math.floor(12*Math.random()),s=function(n){var r=ee(o,"major",t-1,e);a.push({chord:r.chord.map((function(e){return new K(e+i,c[n].beginning,c[n].rythm)})),root:new K(r.root+i,c[n].beginning,c[n].rythm)})},h=0;h<c.length;h++)s(h);var u=new _(a,c,i);return new je({notes:a,rythm:c.map((function(e){return e.rythm})),genome:u})}var je=function(){function e(t){var n=t.rythm,r=t.genome,o=t.score,a=void 0===o?1:o,c=t.notes;Object(J.a)(this,e),this.notes=c,this.rythm=n,this.genome=r,this.score=a}return Object(B.a)(e,[{key:"getAllNotes",value:function(){return this.notes.map((function(e){return[].concat(Object(s.a)(e.chord),[e.root])})).flat()}},{key:"play",value:function(){if(!oe){ce(1);for(var e=0,t=this.getAllNotes(),n=te.e(),r=0;r<t.length;r++)se.triggerAttack(t[r].note,n+2*t[r].start*120/ie()),se.triggerRelease([t[r].note],n+2*t[r].end*120/ie()),t[r].end>e&&(e=t[r].end);setTimeout((function(){ce(0)}),2*e*1e3*120/ie())}}},{key:"compare",value:function(e){for(var t=e.getAllNotes().map((function(e){return JSON.stringify(e)})),n=this.getAllNotes().map((function(e){return JSON.stringify(e)})),r=0,o=0;o<t.length;o++)n.includes(t[o])&&r++;return r===t.length}},{key:"download",value:function(){for(var e=new ue.a.Track,t=0;t<this.notes.length;t++)e.addEvent([new ue.a.NoteEvent({pitch:[].concat(Object(s.a)(this.notes[t].chord.map((function(e){return e.note}))),[this.notes[t].root.note]),duration:Q(this.rythm[t])})],(function(e,t){return{sequential:!1}}));var n,r=new ue.a.Writer(e);n=new Blob([r.buildFile()],{type:"audio/midi"}),de.a.saveAs(n,"midi")}},{key:"transpose",value:function(t){var n=t-this.genome.scale,r=this.notes.map((function(e){return{chord:e.chord.map((function(e){return new K(e.hight+n,e.start,e.duration)})),root:new K(e.root.hight+n,e.root.start,e.root.duration)}})),o=new _(r,this.rythm,this.genome.scale+n);return new e(Object(D.a)(Object(D.a)({},this),{},{genome:o,notes:r}))}},{key:"mutate",value:function(e,t,n){this.mutateScale();return this.mutateRythm(n,e,t),this.mutateMelody(n,e)}},{key:"mutateMelody",value:function(t,n){for(var r=this,o=[],a=[],c=0,i=function(e){if(Math.random()<t&&e<r.rythm.length-1){var i=ee(0,"major",r.notes[0].chord.length,n),s=new K(i.root+r.genome.scale,c,r.rythm[e]),h=i.chord.map((function(e){return e+r.genome.scale}));return a.push({chord:h.map((function(t){return new K(t,c,r.rythm[e])})),root:new K(s.hight,c,r.rythm[e])}),o.push(r.rythm[e]),c+=r.rythm[e],"continue"}o.push(r.rythm[e]),c+=r.rythm[e],a.push(r.notes[e])},s=0;s<this.rythm.length;s++)i(s);var h=new _(a,o,this.genome.scale);return new e(Object(D.a)(Object(D.a)({},this),{},{genome:h,notes:a,rythm:o}))}},{key:"mutateScale",value:function(){var e=Math.floor(3*Math.random())-1+this.genome.scale;return this.transpose(e)}},{key:"mutateRythm",value:function(t,n,r){var o=this.joinChord(t,n),a=Object(h.a)(o,2),c=a[0],i=a[1],s=new e(Object(D.a)(Object(D.a)({},this),{},{notes:i,rythm:c})).breakChord(t,n,r),u=Object(h.a)(s,2),l=u[0],d=u[1],m=new _(d,l,this.genome.scale);return new e(Object(D.a)(Object(D.a)({},this),{},{genome:m,notes:d,rythm:l}))}},{key:"breakChord",value:function(e,t,n){for(var r=this,o=[],a=[],c=0,i=n.max,s=n.min,h=function(n){var h=[];if(q.forEach((function(e,t){e<r.rythm[n]&&t<i&&t>=s&&h.push(e)})),Math.random()<e&&h.length>0){var u=h[Math.floor(Math.random()*h.length)],l=ee(0,"major",r.notes[0].chord.length,t),d=new K(l.root+r.genome.scale,c,r.rythm[n]),m=l.chord.map((function(e){return e+r.genome.scale}));return Math.round(Math.random())<=2?(a.push({chord:r.notes[n].chord.map((function(e){return new K(e.hight,c,u)})),root:new K(r.notes[n].root.hight,c,u)}),a.push({chord:m.map((function(e){return new K(e,c+u,r.rythm[n]-u)})),root:new K(d.hight,c+u,r.rythm[n]-u)}),o.push(r.rythm[n]-u),o.push(u)):(a.push({chord:m.map((function(e){return new K(e,c,u)})),root:new K(d.hight,c,u)}),a.push({chord:r.notes[n].chord.map((function(e){return new K(e.hight,c+u,r.rythm[n]-u)})),root:new K(r.notes[n].root.hight,c+u,r.rythm[n]-u)}),o.push(u),o.push(r.rythm[n]-u)),c+=r.rythm[n],"continue"}o.push(r.rythm[n]),c+=r.rythm[n],a.push(r.notes[n])},u=0;u<this.rythm.length;u++)h(u);return[o,a]}},{key:"joinChord",value:function(e,t){for(var n=this,r=[],o=[],a=0,c=function(c){if(Math.random()<e&&c<n.rythm.length-1){var h=[].concat(Object(s.a)(n.notes[c].chord),Object(s.a)(n.notes[c+1].chord)),u=n.notes[c+Math.round(Math.random())].root,l=Oe(h,u,n.genome.scale,t,n.notes[c].chord.length);return o.push({chord:l.map((function(e){return new K(e,a,n.rythm[c]+n.rythm[c+1])})),root:new K(u.hight,a,n.rythm[c]+n.rythm[c+1])}),r.push(n.rythm[c]+n.rythm[c+1]),a+=n.rythm[c]+n.rythm[c+1],c++,i=c,"continue"}r.push(n.rythm[c]),a+=n.rythm[c],o.push(n.notes[c]),i=c},i=0;i<this.rythm.length;i++)c(i);return[r,o]}}]),e}();function fe(e){var t=e.reduce((function(e,t){return e+t}));return e.map((function(e){return e/t}))}function be(e){for(var t=Math.random(),n=0,r=0;n<t;)n+=e[r],r++;return r-1}function pe(e,t,n,r){var o=Math.max(e.genome.scale,t.genome.scale),a=Math.min(e.genome.scale,t.genome.scale),c=Math.floor(Math.random()*(o-a))+a,i=e.transpose(c),h=t.transpose(c),u=function(e,t,n){var r=[],o=0,a=[e.map((function(e){return e.end})).sort(),t.map((function(e){return e.end})).sort()];for(;o<n;)for(var c=Math.round(Math.random()),i=0;i<a[c].length;i++){if(a[c][i]>o){r.push(a[c][i]-o),o=a[c][i];break}i===a[c].length-1&&(r.push(a[c][i]-o),o=a[c][i])}return r}(i.getAllNotes(),h.getAllNotes(),r),l=function(e,t){for(var n=[],r=0,o=function(o){var a=t[o];n.push({chord:a.chord.map((function(t){return new K(t,r,e[o])})),root:new K(a.root,r,e[o])}),r+=e[o]},a=0;a<e.length;a++)o(a);return n}(u,function(e,t,n,r,o,a){for(var c=0,i=[],h=function(h){var u=[c,c+n[h]],l=[];e.notes.forEach((function(e){return e.root.existsInWindow(u)?l.push(e.root):null})),t.notes.forEach((function(e){return e.root.existsInWindow(u)?l.push(e.root):null})),l=Object(s.a)(new Set(l));var d=Math.floor(Math.random()*l.length),m=l[d];l=[],t.notes.forEach((function(e){e.chord.forEach((function(e){return e.existsInWindow(u)?l.push(e):null}))})),e.notes.forEach((function(e){e.chord.forEach((function(e){return e.existsInWindow(u)?l.push(e):null}))}));var j=Oe(l=Object(s.a)(new Set(l)),m,r,a,o);i.push({chord:j,root:m.hight}),c+=n[h]},u=0;u<n.length;u++)h(u);return i}(i,h,u,c,e.notes[0].chord.length,n)),d=new _(l,u,c);return new je({notes:l,rythm:u,genome:d})}function Oe(e,t,n,r,o){for(var a=Z.major,c=(t.hight-n)%12,i=a.mode[a.notes.indexOf(c)],s=[],h=0,u=0;u<o;u++){var l=e[Math.floor(Math.random()*e.length)].hight;!s.includes(l)&&$[i].slice(0,r+Math.floor(h/(2*r))).includes((l-t.hight)%12)?(h=0,s.push(l)):(h++,u--)}return s}var ge=function(e){var t=e.updateGeneration,n=e.params,o=Object(d.b)(),a=Object(d.c)((function(e){return e.population}));return Object(r.jsx)(G.a,{variant:"contained",color:"primary",onClick:function(){o(C()),function(e,t,n,r,o){for(var a=[],c=0;c<e.length;c++){for(var i=fe(e.map((function(e){return e.score}))),s=be(i),h=be(i),u=pe(e[s],e[h],t,r).mutate(t,n,o),l=1,d=0;d<a.length;d++)if(a[d].compare(u)){c--,l=0;break}1===l&&a.push(u)}return a}(a,n.jazziness,{min:n.windowmin,max:n.windowmax},n.progressionLength,n.mutationChance).map((function(e){return o(S(e))})),t()},children:"Evolve"})};var ve=function(){var e=Object(o.useState)(0),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)({populationSize:8,mutationChance:.1,jazziness:5,numberOfNotes:4,progressionLength:4,windowmin:q[4],windowmax:q[6]}),i=Object(h.a)(c,2),s=i[0],m=i[1],j=Object(o.useState)(120),f=Object(h.a)(j,2),b=f[0],p=f[1],O=Object(d.b)(),g=0;n>0&&(g=1);var v=function(e){var t=parseFloat(e.target.value);"tempo"===e.target.name?(p(t),ae=t):m(Object(D.a)(Object(D.a)({},s),{},Object(P.a)({},e.target.name,t)))},x=function(){a(0),O(C()),function(e,t,n,r,o){for(var a=[],c=0;c<e;c++)a.push(me(t,n,r,o));return a}(s.populationSize,s.jazziness,s.numberOfNotes,{min:q.indexOf(s.windowmin),max:q.indexOf(s.windowmax)},s.progressionLength).map((function(e){return O(S(e))}))};return Object(o.useEffect)((function(){x()}),[s]),Object(r.jsx)(A.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)("h2",{children:["Generation: ",n]})}),Object(r.jsxs)(l.a,{className:"p-5",children:[Object(r.jsx)(I.a,{children:Object(r.jsx)(F.a,{name:"tempo",label:"Tempo",type:"number",onChange:v,value:b})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(F.a,{disabled:g,name:"progressionLength",label:"Progression Length",type:"number",onChange:v,value:s.progressionLength})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(F.a,{disabled:g,name:"populationSize",label:"Population size",type:"number",onChange:v,value:s.populationSize})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(F.a,{disabled:g,name:"mutationChance",label:"Mutation chance",type:"number",onChange:v,value:s.mutationChance})})]}),Object(r.jsxs)(l.a,{className:"p-5",children:[Object(r.jsxs)(I.a,{children:[Object(r.jsx)(T.a,{shrink:!0,children:"Min Note length"}),Object(r.jsx)(R.a,{name:"windowmin",disabled:g,value:s.windowmin,onChange:v,children:q.map((function(e,t){return e<s.windowmax?Object(r.jsx)(W.a,{value:e,children:e},t):null}))})]}),Object(r.jsxs)(I.a,{children:[Object(r.jsx)(T.a,{shrink:!0,children:"Min Note length"}),Object(r.jsx)(R.a,{name:"windowmax",disabled:g,value:s.windowmax,onChange:v,children:q.map((function(e,t){return e>s.windowmin?Object(r.jsx)(W.a,{value:e,children:e},t):null}))})]}),Object(r.jsx)(I.a,{children:Object(r.jsx)(F.a,{disabled:g,name:"jazziness",label:"Jazziness",type:"number",onChange:v,value:s.jazziness})}),Object(r.jsx)(I.a,{children:Object(r.jsx)(F.a,{disabled:g,name:"numberOfNotes",label:"Number of notes",type:"number",onChange:v,value:s.numberOfNotes})})]}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(G.a,{variant:"contained",color:"primary",onClick:x,children:"Restart"}),Object(r.jsx)(ge,{updateGeneration:function(){a(n+1)},params:Object(D.a)(Object(D.a)({},s),{},{windowmin:q.indexOf(s.windowmin),windowmax:q.indexOf(s.windowmax)})})]})]})})};var xe=function(){var e=Object(o.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(d.c)((function(e){return e.population}));return Object(o.useEffect)((function(){c.length>1&&a(pe(c[0],c[1]))}),[c]),n?Object(r.jsx)(A.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)(I.a,{children:Object(r.jsx)("h2",{children:"Debug"})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Parent 1:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(I.a,{style:{height:"300px"},children:Object(r.jsx)(z,{progression:c[0],index:0})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Parent 2:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(I.a,{style:{height:"300px"},children:Object(r.jsx)(z,{progression:c[1],index:1})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Child:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(I.a,{style:{height:"300px"},children:Object(r.jsx)(z,{progression:n})})})]})}):null},ye=(n(123),n(87)),we=n(18),Me=n(88),Ne=n(168),Se=Object(Me.a)({palette:{type:"dark",primary:{main:"#c62828"},secondary:{main:"#181a1b"}}});function ke(){return Object(r.jsxs)(Ne.a,{theme:Se,children:[Object(r.jsx)(ve,{}),Object(r.jsx)(ye.a,{children:Object(r.jsxs)(we.c,{children:[Object(r.jsx)(we.a,{path:"/test",children:Object(r.jsx)(xe,{})}),Object(r.jsx)(we.a,{path:"/",children:Object(r.jsx)(L,{})})]})})]})}ke.whyDidYouRender=!0;var Ce=ke,Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))},ze=(n(125),n(126),n(47)),Ae=[],Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return[].concat(Object(s.a)(e),[t.payload.speciman]);case N:return[];case M:return e.map((function(e,n){return n!==t.payload.index?e:new je(Object(D.a)(Object(D.a)({},e),{},{score:t.payload.score}))}));default:return e}},Le=Object(ze.b)({population:Ie}),Pe=Object(ze.c)(Le);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d.a,{store:Pe,children:Object(r.jsx)(Ce,{})})}),document.getElementById("root")),Ee()}},[[127,1,2]]]);
//# sourceMappingURL=main.57dcf503.chunk.js.map