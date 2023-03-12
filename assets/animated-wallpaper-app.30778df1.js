import{f as l,_ as C,o as v,c as m,g as w,d as y,e as A,l as P,s as $,t as u,p as b,a as p,F as k,k as R,n as L}from"./vendor.e7714c30.js";import{m as D}from"./makeCoverUrl.f6649fcf.js";var S={methods:{loadImage:function(e,t){var a=new Image;a.onload=function(){t(this)},a.src=e},getRandomCovers:function(e,t){var a=new Array(t),i=e.length,s=new Array(i);if(t>i)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var o=Math.floor(Math.random()*i);a[t]=e[o in s?s[o]:o],s[o]=--i in s?s[i]:i}return a},splitUnevenly:function(e,t,a){for(var i=e-a*t,s=[],o=0;o<t;o++)s.push(Math.random());var n=i/s.reduce(function(c,d){return c+d});return s.map(function(c){return c*n+a})},random:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},toMS:function(e){return e*1e3},toSec:function(e){return e/1e3},imageLoader:function(e,t){let a=this;for(var i=0,s={success:[],error:[]},o=function(){i++,i==e.length&&t.apply(a,s)},n=0;n<e.length;n++)(function(c){var d=e[c],r=new Image;r.addEventListener("load",function(){s.success.push(d),o(),r=null},{passive:!0,once:!0}),r.addEventListener("error",function(){s.error.push(d),o(),r=null},{passive:!0,once:!0}),r.src=d})(n)}}},z={data:function(){return{presets:[{name:"all-animations-random",description:"...",onLoad:!0,use:!1,cycleDelay:10,covers:3,randomCovers:!1,animationZone:50,randomDelay:!0,sequential:!1},{name:"sliding-around-randomly",description:"Animates one cover at a time sequentially.",onLoad:!1,use:["push-left","push-right","push-up","push-down","squish-left","squish-right","squish-up","squish-down"],covers:3,randomCovers:!1,cycleDelay:7,animationZone:60,randomDelay:!0,sequential:!1},{name:"piano-key-swipe",description:"Animates one row at a time time.",onLoad:!0,use:["fade-in"],covers:"one-row",randomCovers:!1,cycleDelay:11,animationZone:8,randomDelay:!1,sequential:!0},{name:"row-switcheroo",description:"Animates one row at a time time.",onLoad:!1,use:["fade-in"],covers:"one-row",randomCovers:!1,cycleDelay:11,animationZone:0,randomDelay:!1,sequential:!0},{name:"random-simple-flips",description:"Randomly animates 1-6 covers every 5 seconds.",onLoad:!1,use:["flip-2-hor-top-2","flip-2-ver-right-2","flip-2-hor-bottom-2","flip-2-ver-left-2"],cycleDelay:10,covers:3,randomCovers:!1,animationZone:50,randomDelay:!0,sequential:!1},{name:"raindrops",description:"...",onLoad:!0,use:["fade-in-top"],cycleDelay:20,covers:"all",randomCovers:!1,animationZone:30,randomDelay:!0,sequential:!1},{name:"clear-all",description:'Animates all covers every 15 seconds using "fade-in" animation.',onLoad:!1,use:["fade-in"],cycleDelay:15,covers:"all",randomCovers:!1,animationZone:20,randomDelay:!1,sequential:!0}]}}},q={methods:{fitCoversToViewport:function(){let e={};this.editorCovers?(e.width=this.canvas.width-this.canvas.padding.left-this.canvas.padding.right,e.height=this.canvas.height-this.canvas.padding.top-this.canvas.padding.bottom):(e.width=window.innerWidth-this.canvas.padding.left-this.canvas.padding.right,e.height=window.innerHeight-this.canvas.padding.top-this.canvas.padding.bottom);const t=this.covers.padding*2;!this.editorCovers&&!this.prioritizeCoversPerRow?(this.covers.perRow=Math.round(e.width/(this.covers.sizeOriginal+t)),this.covers.size=e.width/this.covers.perRow-t):this.covers.size=e.width/this.covers.perRow-t;const a=this.covers.dropOverflowingRow?"floor":"ceil";this.covers.rows=Math[a](e.height/(this.covers.size+t)),this.covers.total=this.covers.rows*this.covers.perRow,this.editorCovers&&this.$store.commit("update",{key:"visibleAnimatedCovers",value:this.covers.total}),this.covers.total>this.covers.allOriginal.length&&this.addMoreCovers(),this.covers.all=l.shuffle(this.covers.all),this.covers.visible=this.getRandomCovers(this.covers.all,this.covers.total)},addMoreCovers:function(){let e=this;this.covers.total;const t=Math.ceil(this.covers.total/e.covers.allOriginal.length),a=l.range(0,t);let i=[];l.each(a,function(){i=i.concat(e.covers.allOriginal)});let s=Math.abs(this.covers.total-i.length);s&&(i=l.dropRight(i,s)),this.covers.all=i}}},O={methods:{getAnimations:function(){let e=this,a=(this.animation.use?this.animations.filter(function(s){let o=!1;return e.animation.use.forEach(function(n){if(n===s.class)return o=!0,!1}),o}):this.animations).filter(function(s){return s.in}),i=this.random(0,a.length-1);return a[i]}}},M={methods:{pickCoversToAnimate:function(e,t){let a=this.getCoverAmount(),i=this.animation.randomCovers?this.random(1,a):a;this.editorCovers&&this.$store.commit("update",{key:"awpAnimatedCoversLength",value:i});let s;if(this.animation.sequential){s=[];for(var o=0;o<i;o++)s.push(e[this.sequentialCounter]),this.sequentialCounter>=this.covers.total-1?this.sequentialCounter=0:++this.sequentialCounter}else s=this.getRandomCovers(e,i);return s},getCoverAmount:function(){if(l.isNumber(this.animation.covers))return this.animation.covers;switch(this.animation.covers){case"one-row":return this.covers.perRow;case"all":return this.covers.total}}}},I={mixins:[D],props:["editorCoverSize","editorCoverPadding","editorCanvasWidth","editorCanvasHeight","editorCovers","editorCoversPerRow","editorCanvasPaddingLeft","editorCanvasPaddingTop","editorCanvasPaddingRight","editorCanvasPaddingBottom"],created:function(){this.editorCovers&&this.$emitter.on("get-animation",this.sendAnimation)},beforeUnmount:function(){this.editorCovers&&this.$emitter.off("get-animation",this.sendAnimation)},watch:{editorCoversPerRow:function(e){this.covers.perRow=e,this.startAutoPlay()},editorCoverPadding:function(e){this.covers.padding=e,this.startAutoPlay()},editorCanvasPaddingLeft:function(e){this.canvas.padding.left=e,this.startAutoPlay()},editorCanvasPaddingTop:function(e){this.canvas.padding.top=e,this.startAutoPlay()},editorCanvasPaddingRight:function(e){this.canvas.padding.right=e,this.startAutoPlay()},editorCanvasPaddingBottom:function(e){this.canvas.padding.bottom=e,this.startAutoPlay()},editorCanvasWidth:function(e){this.canvas.width=e,this.startAutoPlay()},editorCanvasHeight:function(e){this.canvas.height=e,this.startAutoPlay()},"$store.state.awpGrayscale":function(e){this.canvas.grayscale=e,this.startAutoPlay()},"$store.state.awpGrayscaleContrast":function(e){this.canvas.grayscaleContrast=e,this.startAutoPlay()},"$store.state.excludeArchived":function(e){this.covers.allOriginal=e?l.filter(this.editorCovers,function(t){return!t.inArchive}):this.editorCovers,this.covers.allOriginal=l.map(this.covers.allOriginal,"cover"),this.covers.all=this.covers.allOriginal,this.startAutoPlay()},"$store.state.animationPreset":function(e){this.loadAnimationPreset(this.$store.state.animationPreset),this.updateStoreAnimation(),this.startAutoPlay()},"$store.state.background":function(e){this.canvas.background=e,this.startAutoPlay()},"$store.state.awpDropOverflowingRow":function(e){this.covers.dropOverflowingRow=e,this.startAutoPlay()},"$store.state.canvas.alignmentVertical":function(e){this.canvas.alignmentVertical=e},"$store.state.awpCycleDelay":function(e){this.animation.cycleDelay=e,this.startAutoPlay()},"$store.state.awpAnimationZone":function(e){this.animation.animationZone=e,this.startAutoPlay()},"$store.state.awpAnimateOnLoad":function(e){this.animation.onLoad=e,this.startAutoPlay()},"$store.state.awpAnimation":function(e){this.animation.use=e,this.startAutoPlay()},"$store.state.awpCoversPerCycle":function(e){this.$store.commit("update",{key:"awpAnimatedCoversLength",value:null}),this.animation.covers=e,this.startAutoPlay()},"$store.state.awpRandomCovers":function(e){this.animation.randomCovers=e,this.startAutoPlay()},"$store.state.awpRandomDelay":function(e){this.animation.randomDelay=e,this.startAutoPlay()},"$store.state.awpSequential":function(e){this.animation.sequential=e,this.startAutoPlay()}},methods:{sendAnimation:function(){this.$store.commit("update",{key:"animation",value:this.animation})},prepareData:function(e){if(this.editorCovers){let t=l.map(this.presets,function(i){return{label:l.lowerCase(i.name),value:i.name,description:i.description}});this.$store.state.animationPresets&&this.$store.state.animationPreset?l.find(this.presets,{name:this.$store.state.animationPreset})||this.$store.commit("update",{key:"animationPreset",value:t[0].value}):this.$store.commit("update",{key:"animationPreset",value:t[0].value}),this.$store.commit("update",{key:"animationPresets",value:t}),this.loadAnimationPreset(this.$store.state.animationPreset),this.editorCoverSize>0&&(this.covers.size=parseFloat(this.editorCoverSize)),this.editorCoverSize>0&&(this.covers.sizeOriginal=parseFloat(this.editorCoverSize)),this.covers.perRow=this.editorCoversPerRow,this.covers.padding=this.editorCoverPadding>-1?parseFloat(this.editorCoverPadding):0,this.canvas.width=this.editorCanvasWidth,this.canvas.height=this.editorCanvasHeight,this.canvas.padding.left=this.editorCanvasPaddingLeft,this.canvas.padding.top=this.editorCanvasPaddingTop,this.canvas.padding.right=this.editorCanvasPaddingRight,this.canvas.padding.bottom=this.editorCanvasPaddingBottom;let a=this.editorCovers;if(this.$store.state.excludeArchived&&(a=l.filter(a,function(i){return!i.inArchive})),this.covers.all=this.mappy(a),this.covers.allOriginal=JSON.parse(JSON.stringify(this.covers.all)),this.canvas.overlayColor=this.$store.state.awpOverlayColor,this.prioritizeCoversPerRow=this.$store.state.prioritizeCoversPerRow,this.canvas.grayscale=this.$store.state.awpGrayscale,this.canvas.grayscaleContrast=this.$store.state.awpGrayscaleContrast,this.canvas.background=this.$store.state.canvas.background,this.canvas.alignmentVertical=this.$store.state.canvas.alignmentVertical,this.covers.dropOverflowingRow=this.$store.state.awpDropOverflowingRow,!localStorage.getItem("aleImageEditorSettings"))this.updateStoreAnimation();else{this.animation.animationZone=this.$store.state.awpAnimationZone,this.animation.cycleDelay=this.$store.state.awpCycleDelay,this.animation.use=this.$store.state.awpAnimation,this.animation.onLoad=this.$store.state.awpAnimateOnLoad,this.animation.covers=this.$store.state.awpCoversPerCycle,this.$store.commit("update",{key:"awpAnimatedCoversLength",value:null}),this.animation.randomCovers=this.$store.state.awpRandomCovers,this.animation.randomDelay=this.$store.state.awpRandomDelay,this.animation.sequential=this.$store.state.awpSequential;let i=l.map(this.animations,"class");this.$store.commit("update",{key:"awpAnimations",value:i})}e()}else this.loadJSON(t=>{this.covers.size=t.covers.size,this.covers.sizeOriginal=t.covers.size,this.covers.perRow=t.covers.perRow,this.covers.padding=t.covers.padding,this.covers.dropOverflowingRow=t.covers.dropOverflowingRow,this.canvas.width=t.canvas.width,this.canvas.height=t.canvas.width,this.canvas.padding.left=t.canvas.padding.left,this.canvas.padding.top=t.canvas.padding.top,this.canvas.padding.right=t.canvas.padding.right,this.canvas.padding.bottom=t.canvas.padding.bottom,this.covers.all=t.covers.all,this.covers.allOriginal=JSON.parse(JSON.stringify(this.covers.all)),this.canvas.overlayColor=t.canvas.overlayColor,this.canvas.grayscale=t.canvas.grayscale,this.canvas.grayscaleContrast=t.canvas.grayscaleContrast,this.canvas.background=t.canvas.background,this.canvas.alignmentVertical=t.canvas.alignmentVertical,this.prioritizeCoversPerRow=t.prioritizeCoversPerRow,this.awpOverlayColorEnabled=t.awpOverlayColorEnabled,this.awpBlendMode=t.awpBlendMode,this.awpOverlayColor=t.awpOverlayColor,this.animation=t.animation,e&&e()})},loadAnimationPreset:function(e){this.animation=JSON.parse(JSON.stringify(l.find(this.presets,{name:e})))},mappy:function(e){let t=this;return e&&e.length>0?l.map(e,function(a){return a.cover.match("https://")?a.cover:t.makeCoverUrl(a.cover)}):[]},updateStoreAnimation:function(){let e=l.map(this.animations,"class");this.$store.commit("update",[{key:"awpAnimationZone",value:this.animation.animationZone},{key:"awpCycleDelay",value:this.animation.cycleDelay},{key:"awpAnimation",value:this.animation.use||e},{key:"awpAnimations",value:e},{key:"awpAnimateOnLoad",value:this.animation.onLoad},{key:"awpCoversPerCycle",value:this.animation.covers},{key:"awpRandomCovers",value:this.animation.randomCovers},{key:"awpRandomDelay",value:this.animation.randomDelay},{key:"awpSequential",value:this.animation.sequential}])},loadJSON:function(e,t){let a=document.createElement("script");a.src="options.js",a.type="text/javascript",a.onload=()=>{const i=window.wallpaperOptions;window.wallpaperOptions=null;try{a.remove()}catch{}a=null,e&&e(i)},a.onerror=()=>{a=null,setTimeout(()=>{if(!t)this.loadJSON(e,"afterError");else try{a.remove()}catch{}},1e3)},document.head.appendChild(a)}}};let f=400;const T={name:"awp",mixins:[S,z,q,O,M,I],data:function(){return{loadPreset:"random-simple-flips",animation:null,sequentialCounter:0,canvas:{background:null,grayscale:null,grayscaleContrast:null,overlayColor:null,style:null,padding:{left:0,top:0,right:0,bottom:0},width:0,height:0,alignmentVertical:null},covers:{style:null,all:[],allOriginal:[],total:0,perRow:10,rows:null,size:160,sizeOriginal:160,padding:0,paddingStyle:null,visible:null,dropOverflowingRow:!1},animationCounter:0,mounted:!1,afterMounted:!1,showLoadInClass:!1,cycleInterval:null,animations:[{in:!0,class:"bounce-in-fwd"},{in:!0,class:"fade-in"},{in:!0,class:"fade-in-top"},{in:!0,class:"fade-in-br"},{in:!0,class:"fade-in-right"},{in:!0,class:"fade-in-tr"},{in:!0,class:"fade-in-bottom"},{in:!0,class:"fade-in-tl"},{in:!0,class:"fade-in-left"},{in:!0,class:"fade-in-bl"},{in:!0,class:"push-left"},{in:!0,class:"push-right"},{in:!0,class:"push-up"},{in:!0,class:"push-down"},{in:!0,class:"squish-left"},{in:!0,class:"squish-right"},{in:!0,class:"squish-up"},{in:!0,class:"squish-down"},{in:!0,out:!0,swap:!0,class:"flip-horizontal-bottom"},{in:!0,out:!0,swap:!0,class:"flip-horizontal-top"},{in:!0,out:!0,swap:!0,class:"flip-vertical-right"},{in:!0,out:!0,swap:!0,class:"flip-vertical-left"},{in:!0,out:!0,swap:!0,class:"flip-diagonal-2-tl"},{in:!0,out:!0,swap:!0,class:"flip-diagonal-2-br"},{in:!0,out:!0,swap:!0,class:"flip-diagonal-1-bl"},{in:!0,out:!0,swap:!0,class:"flip-diagonal-1-tr"},{in:!0,out:!0,swap:!0,class:"flip-2-hor-top-2"},{in:!0,out:!0,swap:!0,class:"flip-2-ver-right-2"},{in:!0,out:!0,swap:!0,class:"flip-2-hor-bottom-2"},{in:!0,out:!0,swap:!0,class:"flip-2-ver-left-2"},{in:!0,out:!0,swap:!0,class:"flip-scale-down-hor"},{in:!0,out:!0,swap:!0,class:"flip-scale-down-ver"},{in:!0,out:!0,swap:!0,class:"flip-scale-down-diag-1"},{in:!0,out:!0,swap:!0,class:"flip-scale-down-diag-2"}],cycleCounter:0,cycleCounterTimer:null,shuffleCounter:0,coverTimer:null,awpOverlayColorEnabled:!1,awpBlendMode:"",awpOverlayColor:""}},computed:{canvasStyle:function(){var e={};return e.paddingLeft=this.canvas.padding.left>-1?this.canvas.padding.left+"px":0+"px",e.paddingTop=this.canvas.padding.top>-1?this.canvas.padding.top+"px":0+"px",e.paddingRight=this.canvas.padding.right>-1?this.canvas.padding.right+"px":0+"px",e.paddingBottom=this.canvas.padding.bottom>-1?this.canvas.padding.bottom+"px":0+"px",e}},created:function(){this.prepareData(()=>{f=0,this.startAutoPlay()}),window.addEventListener("resize",this.windowResized)},beforeUnmount:function(){window.removeEventListener("resize",this.windowResized),clearInterval(this.cycleInterval),clearInterval(this.cycleCounterTimer),clearInterval(this.coverTimer)},methods:{windowResized:function(){this.startAutoPlay()},startAutoPlay:l.debounce(function(){f=400;var e=this;this.showLoadInClass=!1,this.afterMounted=!1,clearInterval(this.cycleInterval),clearInterval(this.cycleCounterTimer),clearInterval(this.coverTimer),this.sequentialCounter=0,this.cycleCounter=0,this.shuffleCounter=0,e.editorCovers&&e.$store.commit("update",[{key:"awpAnimationStarted",value:!1},{key:"awpShowAnimationZone",value:!1}]),this.$nextTick(function(){this.fitCoversToViewport();let t=e.toMS(e.animation.cycleDelay),a=e.animation.animationZone/100*t;this.imageLoader(this.covers.visible,function(){e.showLoadInClass=!0,e.afterMounted=!0,e.$nextTick(function(){let i=e.$refs.cover;if(i=l.filter(i,function(s){return!s.classList.contains("animating-cover")}),i[0]){let s=function(o){e.editorCovers&&e.$store.commit("update",[{key:"awpAnimationStarted",value:!0},{key:"awpShowAnimationZone",value:!0}]);let n=e.pickCoversToAnimate(i,t),c;if(n[0]){let d=e.splitUnevenly(a,n.length,0),r=0,h=function(){e.coverTimer=setTimeout(function(){c=e.animation.randomDelay?d[r]:a/n.length,n[r]&&e.animateCover(n[r]),++r,r<n.length&&h()},c)};h()}};e.animation.onLoad?s():e.editorCovers&&e.$store.commit("update",{key:"awpAnimationStarted",value:!0}),e.cycleInterval=setInterval(function(){s()},t)}})})})},f,{leading:!1,trailing:!0}),animateCover:function(e){++this.animationCounter;let t=this,a=e;a.className="cover";let i=a.querySelector(".cover-one"),s=a.querySelector(".cover-two");if(i&&s){this.shuffleCounter>this.covers.all.length-1&&(this.shuffleCounter=0);let n=this.covers.all[this.shuffleCounter];++this.shuffleCounter;var o=this.covers.all.splice(0,1);this.covers.all.push(o[0]),this.loadImage(n,function(c){let d=i,r=s;a.classList.add("animating-cover"),a.style.zIndex=t.animationCounter,r.classList.remove("hide"),r.src=c.src,c=null;let h=t.getAnimations();if(h){let g=function(){d.src=r.src,a.style.zIndex=null,a.removeAttribute("data-animation-class"),r.classList.remove(h.class),a.className="cover"};h.swap?(d.classList.add("out"),r.classList.add("in"),a.classList.add(h.class)):(d.classList.add("out"),r.classList.add("in",h.class),a.setAttribute("data-animation-class",h.class)),a.addEventListener("animationend",g,{passive:!0,once:!0})}})}}}},E={key:1,id:"awp-inner-wrap"},Z=["src"],B=["src"];function N(e,t,a,i,s,o){return v(),m("div",{id:"awp",class:L({"loader-bg":!e.afterMounted,"reveal-covers":e.showLoadInClass,"dropped-overflowing-row":e.covers.dropOverflowingRow,"in-editor":e.editorCovers,"not-in-editor":!e.editorCovers}),style:w(e.editorCovers?null:o.canvasStyle)},[e.awpOverlayColorEnabled&&!e.editorCovers?(v(),m("div",{key:0,id:"color-overlay",style:w({background:e.awpOverlayColor,mixBlendMode:e.awpBlendMode!=="normal"?e.awpBlendMode:null})},null,4)):y("",!0),e.afterMounted?(v(),m("div",E,[(v(),A(b("style"),null,{default:P(()=>[$(u(e.editorCovers?"#awp":"#awp-inner-wrap")+" { "+u(e.editorCovers?"":"display: flex;")+" align-items: "+u(e.canvas.alignmentVertical)+" !important; } #awp .cover { margin: "+u(e.covers.padding)+"px; width: "+u(e.covers.size)+"px; height: "+u(e.covers.size)+"px; } #awp .cover > img { background-color: "+u(e.canvas.background)+"; "+u(e.canvas.grayscale?"filter: grayscale(1) contrast("+e.canvas.grayscaleContrast+");":"")+" } html, body, #awp { overscroll-behavior: "+u(e.editorCovers?"auto":"none")+"; background-color: "+u(e.editorCovers?"transparent":e.canvas.background)+"; } ",1)]),_:1})),p("div",null,[(v(!0),m(k,null,R(e.covers.visible,(n,c)=>(v(),m("div",{class:"cover",ref_for:!0,ref:"cover",key:c},[p("img",{src:n,alt:"",draggable:"false",class:"cover-one"},null,8,Z),p("img",{src:n,alt:"",draggable:"false",class:"cover-two hide"},null,8,B)]))),128))])])):y("",!0)],6)}var W=C(T,[["render",N]]);export{W as A};
