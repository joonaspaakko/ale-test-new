(self.webpackChunk=self.webpackChunk||[]).push([[0],{5070:(e,t,r)=>{var n=r(930),o=r(8759),s=r(7530);e.exports=function(e,t,r){var i,a;return s&&n(i=t.constructor)&&i!==r&&o(a=i.prototype)&&a!==r.prototype&&s(e,a),e}},1632:(e,t,r)=>{var n=r(7826).f;e.exports=function(e,t,r){r in e||n(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:(e,t,r)=>{var n=r(8240);e.exports=n(1..valueOf)},7471:(e,t,r)=>{"use strict";var n=r(1695),o=r(8240),s=r(6198).indexOf,i=r(2802),a=o([].indexOf),l=!!a&&1/a([1],1,-0)<0,c=i("indexOf");n({target:"Array",proto:!0,forced:l||!c},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return l?a(this,e,t)||0:s(this,e,t)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),o=r(2086),s=r(8240),i=r(7189),a=r(1007),l=r(9606),c=r(5070),u=r(5516),h=r(2071),p=r(1288),f=r(3677),g=r(62).f,d=r(4399).f,v=r(7826).f,b=r(5773),y=r(4080).trim,m="Number",k=o.Number,x=k.prototype,S=o.TypeError,_=s("".slice),I=s("".charCodeAt),N=function(e){var t=p(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,r,n,o,s,i,a,l,c=p(e,"number");if(h(c))throw S("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=y(c),43===(t=I(c,0))||45===t){if(88===(r=I(c,2))||120===r)return NaN}else if(48===t){switch(I(c,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(i=(s=_(c,2)).length,a=0;a<i;a++)if((l=I(s,a))<48||l>o)return NaN;return parseInt(s,n)}return+c};if(i(m,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var O,w=function(e){var t=arguments.length<1?0:k(N(e)),r=this;return u(x,r)&&f((function(){b(r)}))?c(Object(t),r,w):t},T=n?g(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;T.length>R;R++)l(k,O=T[R])&&!l(w,O)&&v(w,O,d(k,O));w.prototype=x,x.constructor=w,a(o,m,w)}},2759:(e,t,r)=>{var n=r(5283),o=r(2086),s=r(8240),i=r(7189),a=r(5070),l=r(2585),c=r(62).f,u=r(5516),h=r(7994),p=r(4059),f=r(9028),g=r(4930),d=r(1632),v=r(1007),b=r(3677),y=r(9606),m=r(3278).enforce,k=r(7420),x=r(211),S=r(2582),_=r(2910),I=x("match"),N=o.RegExp,E=N.prototype,O=o.SyntaxError,w=s(E.exec),T=s("".charAt),R=s("".replace),A=s("".indexOf),$=s("".slice),C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,P=/a/g,Z=new N(M)!==M,z=g.MISSED_STICKY,F=g.UNSUPPORTED_Y;if(i("RegExp",n&&(!Z||z||S||_||b((function(){return P[I]=!1,N(M)!=M||N(P)==P||"/a/i"!=N(M,"i")}))))){for(var L=function(e,t){var r,n,o,s,i,c,g=u(E,this),d=h(e),v=void 0===t,b=[],k=e;if(!g&&d&&v&&e.constructor===L)return e;if((d||u(E,e))&&(e=e.source,v&&(t=f(k))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),k=e,S&&"dotAll"in M&&(n=!!t&&A(t,"s")>-1)&&(t=R(t,/s/g,"")),r=t,z&&"sticky"in M&&(o=!!t&&A(t,"y")>-1)&&F&&(t=R(t,/y/g,"")),_&&(s=function(e){for(var t,r=e.length,n=0,o="",s=[],i={},a=!1,l=!1,c=0,u="";n<=r;n++){if("\\"===(t=T(e,n)))t+=T(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:w(C,$(e,n+1))&&(n+=2,l=!0),o+=t,c++;continue;case">"===t&&l:if(""===u||y(i,u))throw new O("Invalid capture group name");i[u]=!0,s[s.length]=[u,c],l=!1,u="";continue}l?u+=t:o+=t}return[o,s]}(e),e=s[0],b=s[1]),i=a(N(e,t),g?this:E,L),(n||o||b.length)&&(c=m(i),n&&(c.dotAll=!0,c.raw=L(function(e){for(var t,r=e.length,n=0,o="",s=!1;n<=r;n++)"\\"!==(t=T(e,n))?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),o+=t):o+="[\\s\\S]":o+=t+T(e,++n);return o}(e),r)),o&&(c.sticky=!0),b.length&&(c.groups=b)),e!==k)try{l(i,"source",""===k?"(?:)":k)}catch(e){}return i},U=c(N),V=0;U.length>V;)d(L,N,U[V++]);E.constructor=L,L.prototype=E,v(o,"RegExp",L)}k("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(9413),o=r(2331),s=r(6112),i=r(9586),a=r(2031),l=r(4059),c=r(2964),u=r(1189);o("search",(function(e,t,r){return[function(t){var r=i(this),o=null==t?void 0:c(t,e);return o?n(o,t,r):new RegExp(t)[e](l(r))},function(e){var n=s(this),o=l(e),i=r(t,n,o);if(i.done)return i.value;var c=n.lastIndex;a(c,0)||(n.lastIndex=0);var h=u(n,o);return a(n.lastIndex,c)||(n.lastIndex=c),null===h?-1:h.index}]}))},8039:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(2327),r(3238);var n=r(3462),o=r(2636),s=r(730),i=r(3486);const a={name:"aleAuthors",components:{aleSearch:o.Z,lazy:n.Z},mixins:[s.Z,i.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Authors",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=[],t=1;_.eachRight(this.subPageSource.collection,(function(r){r.authors&&_.each(r.authors,(function(n){if(n.name){var o=_.find(e,{name:n.name});if(o)return o.books.push(r.title||r.shortTitle),!1;var s={name:n.name,url:n.url,added:t,books:[r.title||r.shortTitle],narrators:r.narrators,publishers:r.publishers,series:r.series};e.push(s),++t}}))})),_.reverse(e),this.$store.commit("prop",{key:"pageCollection",value:e}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search authors by name",weight:5},{active:!0,key:"books",tippy:"Search authors by book titles",weight:1},{active:!0,key:"narrators.name",tippy:"Search authors by narrators",weight:1},{active:!0,key:"publishers.name",tippy:"Search authors by publishers",weight:1},{active:!0,key:"series.name",tippy:"Search authors by series",weight:1}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by author's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,r(810).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-authors"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"authors:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"author",params:{author:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books with this author."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"76828319",null).exports},3462:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const n={name:"lazy",props:["tag","offset","delay"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){this.observe()}))},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{observe:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&setTimeout((function(){e.intersected=!0,e.observer.disconnect()}),e.delay||0)}),{threshold:0,rootMargin:(this.offset||100)+"px"}),this.observer.observe(this.$el)}}},o=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag||"div",{tag:"component",class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);