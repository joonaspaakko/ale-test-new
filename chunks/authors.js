(self.webpackChunk=self.webpackChunk||[]).push([[0],{5070:(e,t,r)=>{var n=r(930),o=r(8759),s=r(7530);e.exports=function(e,t,r){var a,i;return s&&n(a=t.constructor)&&a!==r&&o(i=a.prototype)&&i!==r.prototype&&s(e,i),e}},1632:(e,t,r)=>{var n=r(7826).f;e.exports=function(e,t,r){r in e||n(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:(e,t,r)=>{var n=r(8240);e.exports=n(1..valueOf)},7471:(e,t,r)=>{"use strict";var n=r(1695),o=r(8240),s=r(6198).indexOf,a=r(2802),i=o([].indexOf),l=!!i&&1/i([1],1,-0)<0,c=a("indexOf");n({target:"Array",proto:!0,forced:l||!c},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return l?i(this,e,t)||0:s(this,e,t)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),o=r(2086),s=r(8240),a=r(7189),i=r(1007),l=r(9606),c=r(5070),u=r(5516),p=r(2071),h=r(1288),f=r(3677),g=r(62).f,d=r(4399).f,v=r(7826).f,b=r(5773),y=r(4080).trim,m="Number",k=o.Number,x=k.prototype,S=o.TypeError,_=s("".slice),I=s("".charCodeAt),N=function(e){var t=h(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,r,n,o,s,a,i,l,c=h(e,"number");if(p(c))throw S("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=y(c),43===(t=I(c,0))||45===t){if(88===(r=I(c,2))||120===r)return NaN}else if(48===t){switch(I(c,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(a=(s=_(c,2)).length,i=0;i<a;i++)if((l=I(s,i))<48||l>o)return NaN;return parseInt(s,n)}return+c};if(a(m,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var O,T=function(e){var t=arguments.length<1?0:k(N(e)),r=this;return u(x,r)&&f((function(){b(r)}))?c(Object(t),r,T):t},w=n?g(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;w.length>R;R++)l(k,O=w[R])&&!l(T,O)&&v(T,O,d(k,O));T.prototype=x,x.constructor=T,i(o,m,T)}},2759:(e,t,r)=>{var n=r(5283),o=r(2086),s=r(8240),a=r(7189),i=r(5070),l=r(2585),c=r(62).f,u=r(5516),p=r(7994),h=r(4059),f=r(9028),g=r(4930),d=r(1632),v=r(1007),b=r(3677),y=r(9606),m=r(3278).enforce,k=r(7420),x=r(211),S=r(2582),_=r(2910),I=x("match"),N=o.RegExp,E=N.prototype,O=o.SyntaxError,T=s(E.exec),w=s("".charAt),R=s("".replace),A=s("".indexOf),$=s("".slice),C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,P=/a/g,Z=new N(M)!==M,z=g.MISSED_STICKY,F=g.UNSUPPORTED_Y;if(a("RegExp",n&&(!Z||z||S||_||b((function(){return P[I]=!1,N(M)!=M||N(P)==P||"/a/i"!=N(M,"i")}))))){for(var L=function(e,t){var r,n,o,s,a,c,g=u(E,this),d=p(e),v=void 0===t,b=[],k=e;if(!g&&d&&v&&e.constructor===L)return e;if((d||u(E,e))&&(e=e.source,v&&(t=f(k))),e=void 0===e?"":h(e),t=void 0===t?"":h(t),k=e,S&&"dotAll"in M&&(n=!!t&&A(t,"s")>-1)&&(t=R(t,/s/g,"")),r=t,z&&"sticky"in M&&(o=!!t&&A(t,"y")>-1)&&F&&(t=R(t,/y/g,"")),_&&(s=function(e){for(var t,r=e.length,n=0,o="",s=[],a={},i=!1,l=!1,c=0,u="";n<=r;n++){if("\\"===(t=w(e,n)))t+=w(e,++n);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:T(C,$(e,n+1))&&(n+=2,l=!0),o+=t,c++;continue;case">"===t&&l:if(""===u||y(a,u))throw new O("Invalid capture group name");a[u]=!0,s[s.length]=[u,c],l=!1,u="";continue}l?u+=t:o+=t}return[o,s]}(e),e=s[0],b=s[1]),a=i(N(e,t),g?this:E,L),(n||o||b.length)&&(c=m(a),n&&(c.dotAll=!0,c.raw=L(function(e){for(var t,r=e.length,n=0,o="",s=!1;n<=r;n++)"\\"!==(t=w(e,n))?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),o+=t):o+="[\\s\\S]":o+=t+w(e,++n);return o}(e),r)),o&&(c.sticky=!0),b.length&&(c.groups=b)),e!==k)try{l(a,"source",""===k?"(?:)":k)}catch(e){}return a},U=c(N),V=0;U.length>V;)d(L,N,U[V++]);E.constructor=L,L.prototype=E,v(o,"RegExp",L)}k("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(9413),o=r(2331),s=r(6112),a=r(9586),i=r(2031),l=r(4059),c=r(2964),u=r(1189);o("search",(function(e,t,r){return[function(t){var r=a(this),o=null==t?void 0:c(t,e);return o?n(o,t,r):new RegExp(t)[e](l(r))},function(e){var n=s(this),o=l(e),a=r(t,n,o);if(a.done)return a.value;var c=n.lastIndex;i(c,0)||(n.lastIndex=0);var p=u(n,o);return i(n.lastIndex,c)||(n.lastIndex=c),null===p?-1:p.index}]}))},2622:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(2327),r(3238);var n=r(1395),o=r(2897),s=r(730),a=r(3486);const i={name:"aleAuthors",components:{aleSearch:o.Z,lazy:n.Z},mixins:[s.Z,a.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Authors",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=[],t=1;_.eachRight(this.subPageSource.collection,(function(r){r.authors&&_.each(r.authors,(function(n){if(n.name){var o=_.find(e,{name:n.name});if(o)return o.books.push(r.title||r.shortTitle),!1;var s={name:n.name,url:n.url,added:t,books:[r.title||r.shortTitle],narrators:r.narrators,publishers:r.publishers,series:r.series};e.push(s),++t}}))})),_.reverse(e),this.$store.commit("prop",{key:"pageCollection",value:e}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search authors by name"},{active:!0,key:"books",tippy:"Search authors by book titles"},{active:!0,key:"narrators.name",tippy:"Search authors by narrators"},{active:!0,key:"publishers.name",tippy:"Search authors by publishers"},{active:!0,key:"series.name",tippy:"Search authors by series"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by author's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,r(810).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-authors"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"authors:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"author",params:{author:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books with this author."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"1f3b3102",null).exports},1395:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const n={name:"lazy",props:["tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},o=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag||"div",{tag:"component",class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);