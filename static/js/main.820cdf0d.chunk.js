(this["webpackJsonpmidi-generator"]=this["webpackJsonpmidi-generator"]||[]).push([[0],{100:function(t,e,n){},122:function(t,e,n){},125:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(0),a=n.n(o),c=n(16),i=n.n(c),s=(n(100),n(10)),h=n(11),u=n(158),l=n(157),d=n(162),m=n(23),j=n(170),f=n(79),b=n.n(f),p=n(83),g=n.n(p);function O(t){var e=t.progression,n=Object(o.useState)([]),a=Object(h.a)(n,2),c=a[0],i=a[1];return Object(o.useEffect)((function(){for(var t=Math.max.apply(Math,Object(s.a)(e.notes.map((function(t){return Math.max.apply(Math,Object(s.a)(t.chord.map((function(t){return t.hight}))).concat([t.root.hight]))})))),n=Math.min.apply(Math,Object(s.a)(e.notes.map((function(t){return Math.min.apply(Math,Object(s.a)(t.chord.map((function(t){return t.hight}))).concat([t.root.hight]))})))),o=[],a=0,c=0;c<e.rythm.length;c++)a+=e.rythm[c];for(var h=0;h<e.notes.length;h++){for(var u=[].concat(Object(s.a)(e.notes[h].chord),[e.notes[h].root]).map((function(t){return t.hight})),l=[],d=n;d<=t;d++)u.includes(d)?l.push(Object(r.jsx)("div",{style:{height:(1/(t-n+1)*100).toString()+"%",width:"100%",backgroundColor:"#c62828"}},h.toString()+d.toString())):l.push(Object(r.jsx)("div",{style:{height:(1/(t-n+1)*100).toString()+"%",width:"100%"}},h.toString()+d.toString()));o.push(Object(r.jsx)("div",{style:{height:"100%",width:(e.rythm[h]/a*100).toString()+"%"},children:l.reverse()},h))}i(o)}),[e]),Object(r.jsx)(l.a,{className:"w-100 m-0 h-100",children:c})}var v=a.a.memo(O),x="ADD_SPECIMAN",y="SET_SPECIMAN_SCORE",w="DELETE_POPULATION",M=function(t){return{type:x,payload:{speciman:t}}},N=function(){return{type:w}};function S(t){var e=t.progression,n=t.index,o=Object(m.b)();return Object(r.jsxs)(u.a,{className:"p-0 h-100",children:[Object(r.jsxs)(l.a,{className:"w-100 m-0 h-75",children:[Object(r.jsx)(v,{color:"#c62828",progression:e}),Object(r.jsx)("div",{className:"vote",onClick:function(){e.play()},children:Object(r.jsx)(b.a,{style:{fontSize:80},className:"vote-text"})}),Object(r.jsx)("div",{className:"download",onClick:function(){e.download()},children:Object(r.jsx)(g.a,{style:{fontSize:20},className:"vote-text"})})]}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d.a,{sm:3,children:Object(r.jsx)("small",{children:"Score"})}),Object(r.jsx)(d.a,{sm:1,className:"pl-2",children:Object(r.jsx)("small",{children:e.score})}),Object(r.jsx)(d.a,{className:"pl-2",children:Object(r.jsx)(j.a,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,onChange:function(t,e){o(function(t){var e=t.index,n=t.score;return{type:y,payload:{index:e,score:n}}}({index:n,score:e}))},value:e.score})})]})]})}var C=a.a.memo(S),k=n(163);var E=function(){var t=Object(m.c)((function(t){return t.population})),e=Object(o.useState)([]),n=Object(h.a)(e,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){for(var e=Object(s.a)(t),n=[];e.length;)n.push(e.splice(0,4));c(n)}),[t]),Object(r.jsx)(k.a,{children:Object(r.jsx)(u.a,{children:a.map((function(t,e){return Object(r.jsx)(l.a,{children:t.map((function(t,n){return Object(r.jsx)(d.a,{style:{height:"200px"},children:Object(r.jsx)(C,{progression:t,index:4*e+n})},n)}))},e)}))})})},z=n(27),A=n(4),I=n(169),L=n(172),D=n(168),P=n(173),F=n(164),T=n(1),R=n(2),W=function t(e,n,r){Object(T.a)(this,t);var o=e.map((function(t){return t.chord}));o.flat()||(o=e.map((function(t){return t.root})));var a=n.reduce((function(t,e){return t+e}));this.scale=r,this.length=a,this.switches=n.length},G=[1/8,1/4,.5,3/4,1,2,3,4];function J(t){for(var e=[],n=t;0!==n;)for(var r=B.length-1;r>=0;r--){var o=1/parseInt(B[r]);if(n>=o){e.push(B[r]),n-=o;break}}return e}var B=["64","32","16","8","4","2","1"];function _(t,e){for(var n=0,r=[],o=0,a=e.max,c=e.min;n<t;){var i=0,s=Math.floor(Math.random()*(a-c))+c;if(Math.random()<.4&&0!==o?s=o:o=s,n+G[s]-i>t)return i=t-n,r.push({rythm:i,beginning:n}),n+=i,r;r.push({rythm:G[s]-i,beginning:n}),n+=G[s]-i}return r}var q=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Q=function(){function t(e,n,r){Object(T.a)(this,t),this.hight=e,this.start=n,this.end=n+r,this.duration=r;var o=Math.floor(e/12),a=q[e%12];this.note=a+o.toString()}return Object(R.a)(t,[{key:"existsInWindow",value:function(t){return t[0]>this.start&&t[0]<this.end||t[1]>this.start&&t[1]<=this.end}}]),t}(),U="major",Y="minor",H={major:{notes:[0,2,4,5,7,9,11],mode:[U,Y,Y,U,U,Y,Y]}},K={major:[0,4,7,2,11,6,9,1,8,3,10,5],minor:[0,3,7,2,10,5,9,4,11,6,8,1]};function V(t,e,n,r){var o=H[e],a=Math.floor(Math.random()*o.notes.length),c=o.mode[a],i=o.notes[a];if(0===n)return{root:i+=36,chord:[]};var s=function(t,e,n,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,a=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,i=[],s=0,h=0;h<n;h++){var u=Math.floor(Math.random()*o+Math.floor(s/(2*o))),l=K[e][u];l+=t,Math.random()<u/(1+a)/12-c&&(l+=12),Math.random()<l/2*(1+a)/12-c&&0!==u&&(l-=12),!i.includes(l)&&r.includes(l%12)?(s=0,i.push(l)):(s++,h--)}return i}(i,c,n,o.notes,r,t).map((function(e){return e+12*(3+t)}));return Math.random()-1/4>i/12&&(i+=12),{chord:s,root:i+12}}var X=n(45),Z=new X.b(.2).toDestination(),$=new X.a({frequency:1e3,type:"lowpass",rolloff:-12,Q:0}).connect(Z),tt=0,et=120;function nt(t){tt=t}function rt(){return et}var ot=new X.c(X.d,{oscillator:{count:2,spread:5,type:"sawtooth"},envelope:{attack:.002,decay:0,sustain:1,release:.1}}).connect($),at=n(67),ct=n.n(at),it=n(84),st=n.n(it);function ht(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,o=0,a=[],c=_(r,n),i=Math.floor(12*Math.random()),s=function(n){var r=V(o,"major",e-1,t);a.push({chord:r.chord.map((function(t){return new Q(t+i,c[n].beginning,c[n].rythm)})),root:new Q(r.root+i,c[n].beginning,c[n].rythm)})},h=0;h<c.length;h++)s(h);var u=new W(a,c,i);return new ut({notes:a,rythm:c.map((function(t){return t.rythm})),genome:u})}var ut=function(){function t(e){var n=e.rythm,r=e.genome,o=e.score,a=void 0===o?10:o,c=e.notes;Object(T.a)(this,t),this.notes=c,this.rythm=n,this.genome=r,this.score=a}return Object(R.a)(t,[{key:"getAllNotes",value:function(){return this.notes.map((function(t){return[].concat(Object(s.a)(t.chord),[t.root])})).flat()}},{key:"play",value:function(){if(!tt){nt(1);for(var t=0,e=this.getAllNotes(),n=X.e(),r=0;r<e.length;r++)ot.triggerAttack(e[r].note,n+2*e[r].start*120/rt()),ot.triggerRelease([e[r].note],n+2*e[r].end*120/rt()),e[r].end>t&&(t=e[r].end);setTimeout((function(){nt(0)}),2*t*1e3*120/rt())}}},{key:"compare",value:function(t){for(var e=t.getAllNotes().map((function(t){return JSON.stringify(t)})),n=this.getAllNotes().map((function(t){return JSON.stringify(t)})),r=0,o=0;o<e.length;o++)n.includes(e[o])&&r++;return r===e.length}},{key:"download",value:function(){for(var t=new ct.a.Track,e=0;e<this.notes.length;e++)t.addEvent([new ct.a.NoteEvent({pitch:[].concat(Object(s.a)(this.notes[e].chord.map((function(t){return t.note}))),[this.notes[e].root.note]),duration:J(this.rythm[e])})],(function(t,e){return{sequential:!1}}));var n,r=new ct.a.Writer(t);n=new Blob([r.buildFile()],{type:"audio/midi"}),st.a.saveAs(n,"midi")}},{key:"transpose",value:function(e){var n=e-this.genome.scale,r=this.notes.map((function(t){return{chord:t.chord.map((function(t){return new Q(t.hight+n,t.start,t.duration)})),root:new Q(t.root.hight+n,t.root.start,t.root.duration)}})),o=new W(r,this.rythm,this.genome.scale+n);return new t(Object(A.a)(Object(A.a)({},this),{},{genome:o,notes:r}))}},{key:"mutate",value:function(t,e,n){this.mutateScale();return this.mutateRythm(n,t,e),this.mutateMelody(n,t)}},{key:"mutateMelody",value:function(e,n){for(var r=this,o=[],a=[],c=0,i=function(t){if(Math.random()<e&&t<r.rythm.length-1){var i=V(0,"major",r.notes[0].chord.length,n),s=new Q(i.root+r.genome.scale,c,r.rythm[t]),h=i.chord.map((function(t){return t+r.genome.scale}));return a.push({chord:h.map((function(e){return new Q(e,c,r.rythm[t])})),root:new Q(s.hight,c,r.rythm[t])}),o.push(r.rythm[t]),c+=r.rythm[t],"continue"}o.push(r.rythm[t]),c+=r.rythm[t],a.push(r.notes[t])},s=0;s<this.rythm.length;s++)i(s);var h=new W(a,o,this.genome.scale);return new t(Object(A.a)(Object(A.a)({},this),{},{genome:h,notes:a,rythm:o}))}},{key:"mutateScale",value:function(){var t=Math.floor(3*Math.random())-1+this.genome.scale;return this.transpose(t)}},{key:"mutateRythm",value:function(e,n,r){var o=this.joinChord(e,n),a=Object(h.a)(o,2),c=a[0],i=a[1],s=new t(Object(A.a)(Object(A.a)({},this),{},{notes:i,rythm:c})).breakChord(e,n,r),u=Object(h.a)(s,2),l=u[0],d=u[1],m=new W(d,l,this.genome.scale);return new t(Object(A.a)(Object(A.a)({},this),{},{genome:m,notes:d,rythm:l}))}},{key:"breakChord",value:function(t,e,n){for(var r=this,o=[],a=[],c=0,i=n.max,s=n.min,h=function(n){var h=[];if(G.forEach((function(t,e){t<r.rythm[n]&&e<i&&e>=s&&h.push(t)})),Math.random()<t&&h.length>0){var u=h[Math.floor(Math.random()*h.length)],l=V(0,"major",r.notes[0].chord.length,e),d=new Q(l.root+r.genome.scale,c,r.rythm[n]),m=l.chord.map((function(t){return t+r.genome.scale}));return Math.round(Math.random())<=2?(a.push({chord:r.notes[n].chord.map((function(t){return new Q(t.hight,c,u)})),root:new Q(r.notes[n].root.hight,c,u)}),a.push({chord:m.map((function(t){return new Q(t,c+u,r.rythm[n]-u)})),root:new Q(d.hight,c+u,r.rythm[n]-u)}),o.push(r.rythm[n]-u),o.push(u)):(a.push({chord:m.map((function(t){return new Q(t,c,u)})),root:new Q(d.hight,c,u)}),a.push({chord:r.notes[n].chord.map((function(t){return new Q(t.hight,c+u,r.rythm[n]-u)})),root:new Q(r.notes[n].root.hight,c+u,r.rythm[n]-u)}),o.push(u),o.push(r.rythm[n]-u)),c+=r.rythm[n],"continue"}o.push(r.rythm[n]),c+=r.rythm[n],a.push(r.notes[n])},u=0;u<this.rythm.length;u++)h(u);return[o,a]}},{key:"joinChord",value:function(t,e){for(var n=this,r=[],o=[],a=0,c=function(c){if(Math.random()<t&&c<n.rythm.length-1){var h=[].concat(Object(s.a)(n.notes[c].chord),Object(s.a)(n.notes[c+1].chord)),u=n.notes[c+Math.round(Math.random())].root,l=jt(h,u,n.genome.scale,e,n.notes[c].chord.length);return o.push({chord:l.map((function(t){return new Q(t,a,n.rythm[c]+n.rythm[c+1])})),root:new Q(u.hight,a,n.rythm[c]+n.rythm[c+1])}),r.push(n.rythm[c]+n.rythm[c+1]),a+=n.rythm[c]+n.rythm[c+1],c++,i=c,"continue"}r.push(n.rythm[c]),a+=n.rythm[c],o.push(n.notes[c]),i=c},i=0;i<this.rythm.length;i++)c(i);return[r,o]}}]),t}();function lt(t){var e=t.reduce((function(t,e){return t+e}));return t.map((function(t){return t/e}))}function dt(t){for(var e=Math.random(),n=0,r=0;n<e;)n+=t[r],r++;return r-1}function mt(t,e,n,r){var o=Math.max(t.genome.scale,e.genome.scale),a=Math.min(t.genome.scale,e.genome.scale),c=Math.floor(Math.random()*(o-a))+a,i=t.transpose(c),h=e.transpose(c),u=function(t,e,n){var r=[],o=0,a=[t.map((function(t){return t.end})).sort(),e.map((function(t){return t.end})).sort()];for(;o<n;)for(var c=Math.round(Math.random()),i=0;i<a[c].length;i++){if(a[c][i]>o){r.push(a[c][i]-o),o=a[c][i];break}i===a[c].length-1&&(r.push(a[c][i]-o),o=a[c][i])}return r}(i.getAllNotes(),h.getAllNotes(),r),l=function(t,e){for(var n=[],r=0,o=function(o){var a=e[o];n.push({chord:a.chord.map((function(e){return new Q(e,r,t[o])})),root:new Q(a.root,r,t[o])}),r+=t[o]},a=0;a<t.length;a++)o(a);return n}(u,function(t,e,n,r,o,a){for(var c=0,i=[],h=function(h){var u=[c,c+n[h]],l=[];t.notes.forEach((function(t){return t.root.existsInWindow(u)?l.push(t.root):null})),e.notes.forEach((function(t){return t.root.existsInWindow(u)?l.push(t.root):null})),l=Object(s.a)(new Set(l));var d=Math.floor(Math.random()*l.length),m=l[d];l=[],e.notes.forEach((function(t){t.chord.forEach((function(t){return t.existsInWindow(u)?l.push(t):null}))})),t.notes.forEach((function(t){t.chord.forEach((function(t){return t.existsInWindow(u)?l.push(t):null}))}));var j=jt(l=Object(s.a)(new Set(l)),m,r,a,o);i.push({chord:j,root:m.hight}),c+=n[h]},u=0;u<n.length;u++)h(u);return i}(i,h,u,c,t.notes[0].chord.length,n)),d=new W(l,u,c);return new ut({notes:l,rythm:u,genome:d})}function jt(t,e,n,r,o){for(var a=H.major,c=(e.hight-n)%12,i=a.mode[a.notes.indexOf(c)],s=[],h=0,u=0;u<o;u++){var l=t[Math.floor(Math.random()*t.length)].hight;!s.includes(l)&&K[i].slice(0,r+Math.floor(h/(2*r))).includes((l-e.hight)%12)?(h=0,s.push(l)):(h++,u--)}return s}var ft=function(t){var e=t.updateGeneration,n=t.params,o=Object(m.b)(),a=Object(m.c)((function(t){return t.population}));return Object(r.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){o(N()),function(t,e,n,r,o){for(var a=[],c=0;c<t.length;c++){for(var i=lt(t.map((function(t){return t.score}))),s=dt(i),h=dt(i),u=mt(t[s],t[h],e,r).mutate(e,n,o),l=1,d=0;d<a.length;d++)if(a[d].compare(u)){c--,l=0;break}1===l&&a.push(u)}return a}(a,n.jazziness,{min:n.windowmin,max:n.windowmax},n.progressionLength,n.mutationChance).map((function(t){return o(M(t))})),e()},children:"Evolve"})};var bt=function(){var t=Object(o.useState)(0),e=Object(h.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)({populationSize:8,mutationChance:.1,jazziness:5,numberOfNotes:4,progressionLength:4,windowmin:G[4],windowmax:G[6]}),i=Object(h.a)(c,2),s=i[0],j=i[1],f=Object(o.useState)(120),b=Object(h.a)(f,2),p=b[0],g=b[1],O=Object(m.b)(),v=0;n>0&&(v=1);var x=function(t){var e=parseFloat(t.target.value);"tempo"===t.target.name?(g(e),et=e):j(Object(A.a)(Object(A.a)({},s),{},Object(z.a)({},t.target.name,e)))},y=function(){a(0),O(N()),function(t,e,n,r,o){for(var a=[],c=0;c<t;c++)a.push(ht(e,n,r,o));return a}(s.populationSize,s.jazziness,s.numberOfNotes,{min:G.indexOf(s.windowmin),max:G.indexOf(s.windowmax)},s.progressionLength).map((function(t){return O(M(t))}))};return Object(o.useEffect)((function(){y()}),[s]),Object(r.jsx)(k.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{children:Object(r.jsxs)("h2",{children:["Generation: ",n]})}),Object(r.jsxs)(l.a,{className:"p-5",children:[Object(r.jsx)(d.a,{children:Object(r.jsx)(I.a,{name:"tempo",label:"Tempo",type:"number",onChange:x,value:p})}),Object(r.jsx)(d.a,{children:Object(r.jsx)(I.a,{disabled:v,name:"progressionLength",label:"Progression Length",type:"number",onChange:x,value:s.progressionLength})}),Object(r.jsx)(d.a,{children:Object(r.jsx)(I.a,{disabled:v,name:"populationSize",label:"Population size",type:"number",onChange:x,value:s.populationSize})}),Object(r.jsx)(d.a,{children:Object(r.jsx)(I.a,{disabled:v,name:"mutationChance",label:"Mutation chance",type:"number",onChange:x,value:s.mutationChance})})]}),Object(r.jsxs)(l.a,{className:"p-5",children:[Object(r.jsxs)(d.a,{children:[Object(r.jsx)(L.a,{shrink:!0,children:"Min Note length"}),Object(r.jsx)(D.a,{name:"windowmin",disabled:v,value:s.windowmin,onChange:x,children:G.map((function(t,e){return t<s.windowmax?Object(r.jsx)(P.a,{value:t,children:t},e):null}))})]}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(L.a,{shrink:!0,children:"Min Note length"}),Object(r.jsx)(D.a,{name:"windowmax",disabled:v,value:s.windowmax,onChange:x,children:G.map((function(t,e){return t>s.windowmin?Object(r.jsx)(P.a,{value:t,children:t},e):null}))})]}),Object(r.jsx)(d.a,{children:Object(r.jsx)(I.a,{disabled:v,name:"jazziness",label:"Jazziness",type:"number",onChange:x,value:s.jazziness})}),Object(r.jsx)(d.a,{children:Object(r.jsx)(I.a,{disabled:v,name:"numberOfNotes",label:"Number of notes",type:"number",onChange:x,value:s.numberOfNotes})})]}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(F.a,{variant:"contained",color:"primary",onClick:y,children:"Restart"}),Object(r.jsx)(ft,{updateGeneration:function(){a(n+1)},params:Object(A.a)(Object(A.a)({},s),{},{windowmin:G.indexOf(s.windowmin),windowmax:G.indexOf(s.windowmax)})})]})]})})};var pt=function(){var t=Object(o.useState)(null),e=Object(h.a)(t,2),n=e[0],a=e[1],c=Object(m.c)((function(t){return t.population}));return Object(o.useEffect)((function(){c.length>1&&a(mt(c[0],c[1]))}),[c]),n?Object(r.jsx)(k.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)(d.a,{children:Object(r.jsx)("h2",{children:"Debug"})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Parent 1:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(d.a,{style:{height:"300px"},children:Object(r.jsx)(C,{progression:c[0],index:0})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Parent 2:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(d.a,{style:{height:"300px"},children:Object(r.jsx)(C,{progression:c[1],index:1})})}),Object(r.jsx)(l.a,{className:"p-3",children:Object(r.jsx)("h4",{children:"Child:"})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(d.a,{style:{height:"300px"},children:Object(r.jsx)(C,{progression:n})})})]})}):null},gt=(n(122),n(85)),Ot=n(20),vt=n(86),xt=n(167),yt=Object(vt.a)({palette:{type:"dark",primary:{main:"#c62828"},secondary:{main:"#181a1b"}}});function wt(){return Object(r.jsxs)(xt.a,{theme:yt,children:[Object(r.jsx)(bt,{}),Object(r.jsx)(gt.a,{children:Object(r.jsxs)(Ot.c,{children:[Object(r.jsx)(Ot.a,{path:"/test",children:Object(r.jsx)(pt,{})}),Object(r.jsx)(Ot.a,{path:"/",children:Object(r.jsx)(E,{})})]})})]})}wt.whyDidYouRender=!0;var Mt=wt,Nt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))},St=(n(124),n(51)),Ct=[],kt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return[].concat(Object(s.a)(t),[e.payload.speciman]);case w:return[];case y:return t.map((function(t,n){return n!==e.payload.index?t:new ut(Object(A.a)(Object(A.a)({},t),{},{score:e.payload.score}))}));default:return t}},Et=Object(St.b)({population:kt}),zt=Object(St.c)(Et);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m.a,{store:zt,children:Object(r.jsx)(Mt,{})})}),document.getElementById("root")),Nt()}},[[125,1,2]]]);
//# sourceMappingURL=main.820cdf0d.chunk.js.map