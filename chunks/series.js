(self.webpackChunk=self.webpackChunk||[]).push([[15],{5070:(e,t,r)=>{var n=r(930),s=r(8759),i=r(7530);e.exports=function(e,t,r){var o,a;return i&&n(o=t.constructor)&&o!==r&&s(a=o.prototype)&&a!==r.prototype&&i(e,a),e}},1632:(e,t,r)=>{var n=r(7826).f;e.exports=function(e,t,r){r in e||n(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:(e,t,r)=>{var n=r(8240);e.exports=n(1..valueOf)},7471:(e,t,r)=>{"use strict";var n=r(1695),s=r(8240),i=r(6198).indexOf,o=r(2802),a=s([].indexOf),l=!!a&&1/a([1],1,-0)<0,u=o("indexOf");n({target:"Array",proto:!0,forced:l||!u},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return l?a(this,e,t)||0:i(this,e,t)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),s=r(2086),i=r(8240),o=r(7189),a=r(1007),l=r(9606),u=r(5070),c=r(5516),p=r(2071),f=r(1288),h=r(3677),g=r(62).f,d=r(4399).f,b=r(7826).f,m=r(5773),y=r(4080).trim,v="Number",k=s.Number,_=k.prototype,x=s.TypeError,S=i("".slice),N=i("".charCodeAt),I=function(e){var t=f(e,"number");return"bigint"==typeof t?t:M(t)},M=function(e){var t,r,n,s,i,o,a,l,u=f(e,"number");if(p(u))throw x("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),43===(t=N(u,0))||45===t){if(88===(r=N(u,2))||120===r)return NaN}else if(48===t){switch(N(u,1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(o=(i=S(u,2)).length,a=0;a<o;a++)if((l=N(i,a))<48||l>s)return NaN;return parseInt(i,n)}return+u};if(o(v,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var E,O=function(e){var t=arguments.length<1?0:k(I(e)),r=this;return c(_,r)&&h((function(){m(r)}))?u(Object(t),r,O):t},w=n?g(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;w.length>R;R++)l(k,E=w[R])&&!l(O,E)&&b(O,E,d(k,E));O.prototype=_,_.constructor=O,a(s,v,O)}},2759:(e,t,r)=>{var n=r(5283),s=r(2086),i=r(8240),o=r(7189),a=r(5070),l=r(2585),u=r(62).f,c=r(5516),p=r(7994),f=r(4059),h=r(9028),g=r(4930),d=r(1632),b=r(1007),m=r(3677),y=r(9606),v=r(3278).enforce,k=r(7420),_=r(211),x=r(2582),S=r(2910),N=_("match"),I=s.RegExp,M=I.prototype,E=s.SyntaxError,O=i(M.exec),w=i("".charAt),R=i("".replace),T=i("".indexOf),B=i("".slice),D=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,F=/a/g,$=/a/g,A=new I(F)!==F,P=g.MISSED_STICKY,C=g.UNSUPPORTED_Y;if(o("RegExp",n&&(!A||P||x||S||m((function(){return $[N]=!1,I(F)!=F||I($)==$||"/a/i"!=I(F,"i")}))))){for(var L=function(e,t){var r,n,s,i,o,u,g=c(M,this),d=p(e),b=void 0===t,m=[],k=e;if(!g&&d&&b&&e.constructor===L)return e;if((d||c(M,e))&&(e=e.source,b&&(t=h(k))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),k=e,x&&"dotAll"in F&&(n=!!t&&T(t,"s")>-1)&&(t=R(t,/s/g,"")),r=t,P&&"sticky"in F&&(s=!!t&&T(t,"y")>-1)&&C&&(t=R(t,/y/g,"")),S&&(i=function(e){for(var t,r=e.length,n=0,s="",i=[],o={},a=!1,l=!1,u=0,c="";n<=r;n++){if("\\"===(t=w(e,n)))t+=w(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:O(D,B(e,n+1))&&(n+=2,l=!0),s+=t,u++;continue;case">"===t&&l:if(""===c||y(o,c))throw new E("Invalid capture group name");o[c]=!0,i[i.length]=[c,u],l=!1,c="";continue}l?c+=t:s+=t}return[s,i]}(e),e=i[0],m=i[1]),o=a(I(e,t),g?this:M,L),(n||s||m.length)&&(u=v(o),n&&(u.dotAll=!0,u.raw=L(function(e){for(var t,r=e.length,n=0,s="",i=!1;n<=r;n++)"\\"!==(t=w(e,n))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),s+=t):s+="[\\s\\S]":s+=t+w(e,++n);return s}(e),r)),s&&(u.sticky=!0),m.length&&(u.groups=m)),e!==k)try{l(o,"source",""===k?"(?:)":k)}catch(e){}return o},W=u(I),z=0;W.length>z;)d(L,I,W[z++]);M.constructor=L,L.prototype=M,b(s,"RegExp",L)}k("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(9413),s=r(2331),i=r(6112),o=r(9586),a=r(2031),l=r(4059),u=r(2964),c=r(1189);s("search",(function(e,t,r){return[function(t){var r=o(this),s=null==t?void 0:u(t,e);return s?n(s,t,r):new RegExp(t)[e](l(r))},function(e){var n=i(this),s=l(e),o=r(t,n,s);if(o.done)return o.value;var u=n.lastIndex;a(u,0)||(n.lastIndex=0);var p=c(n,s);return a(n.lastIndex,u)||(n.lastIndex=u),null===p?-1:p.index}]}))},3464:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o}),r(2327),r(3238),r(8010),r(1013),r(9217);var n=r(3486),s=r(5693);const i={name:"aleSeries",components:{aleSearch:r(1683).Z,lazy:s.Z},mixins:[n.Z],data:function(){return{collectionSource:"pageCollection",pageTitle:"Series",pageSubTitle:null,listReady:!1}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1,n=this.$store.state.library.series;_.eachRight(e.subPageSource.collection,(function(s){s.series&&_.each(s.series,(function(i){var o,a,l,u=_.find(t,{asin:i.asin}),c=!!n&&_.find(n,{asin:i.asin});if(u)u.books.push(s.title||s.shortTitle),e.subPageSource.library&&(u.minRating=_.min([u.minRating,s.myRating].map(_.toNumber).filter((function(e){return!_.isNaN(e)}))),u.allBooksMinusDupes=c.allBooksMinusDupes,u.missingLatest=l!==a);else{e.subPageSource.library&&(c.allBooksMinusDupes=e.removeDuplicates(c.allBooks),o=c.allBooksMinusDupes.filter((function(e){return c.books.some((function(t){return t===e.asin}))})),a=_.max(c.allBooksMinusDupes.map((function(e){return _.toNumber(e.bookNumbers)}))),l=_.max(o.map((function(e){return _.toNumber(e.bookNumbers)}))));var p={name:i.name,asin:i.asin,added:r,books:[s.title||s.shortTitle],authors:s.authors,narrators:s.narrators,publishers:s.publishers};e.subPageSource.library&&c?(++r,p.minRating=_.toNumber(s.myRating),p.allBooksMinusDupes=c.allBooksMinusDupes,p.missingLatest=l!==a,t.push(p)):e.subPageSource.wishlist&&(++r,t.push(p))}}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search series by name"},{active:!0,key:"books",tippy:"Search series by book titles"},{active:!0,key:"authors.name",tippy:"Search series by authors"},{active:!0,key:"narrators.name",tippy:"Search series by narrators"},{active:!0,key:"publishers.name",tippy:"Search series by publishers"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"inSeries",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}},{excludeFromWishlist:!0,type:"divider",key:"divider1.0"},{excludeFromWishlist:!0,active:!1,type:"filterExtras",label:"Rating (min)",tippy:"Based on the book you rated lowest in the series",key:"min-rating",condition:function(e){return(e.minRating||0)>=this.range[0]},range:!0,rangeMin:function(){return 1},rangeMax:function(){return 5},rangeMinDist:0,rangeSuffix:"",tooltipFormatter:function(e){switch(e){case 1:return e+" (Not for me)";case 2:return e+" (It’s okay)";case 3:return e+" (Pretty good)";case 4:return e+" (It’s great)";case 5:return e+" (I love it)"}}},{excludeFromWishlist:!0,type:"divider",key:"divider1.1"},{excludeFromWishlist:!0,active:!1,type:"filterExtras",label:"Incomplete series",key:"series-incomplete",tippy:"Series where I don't own all the books",condition:function(e){return e.allBooksMinusDupes.length>e.books.length}},{excludeFromWishlist:!0,type:"divider",key:"divider1.2"},{excludeFromWishlist:!0,active:!1,type:"filterExtras",label:"Missing latest book",key:"missing-latest",condition:function(e){return e.missingLatest&&e.allBooksMinusDupes.length>e.books.length}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by series name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"},{excludeFromWishlist:!0,active:!1,current:!1,key:"amountTotal",label:"Total number of books",type:"sort"},{excludeFromWishlist:!0,active:!1,current:!1,key:"missing",label:"Missing",tippy:"Number of missing books",type:"sort"}]};this.subPageSource.wishlist&&(n.filter=_.filter(n.filter,(function(e){return!e.excludeFromWishlist})),n.sort=_.filter(n.sort,(function(e){return!e.excludeFromWishlist}))),this.$setListRenderingOpts(n)},removeDuplicates:function(e){var t=_.clone(e),r=0;return _.each(t,(function(e){e.order=++r})),t=_.groupBy(t,"bookNumbers"),_.each(t,(function(e,r){if(1===e.length)t[r]=[e[0]];else{var n=_.filter(e,(function(e){return!e.notInLibrary}));n.length>0?t[r]=n:t[r]=[e[0]]}})),t=_.map(t,(function(e){return e})),t=_.flatten(t),t=_.orderBy(t,"order","asc")}}},o=(0,r(810).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-series"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.asin?r("lazy",{key:"series:"+t.asin,staticClass:"single-box",attrs:{"data-asin":t.asin}},[r("router-link",{attrs:{to:{name:"series",params:{series:t.asin},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books I have in this series."}},[r("span",{class:{"my-books":t.allBooksMinusDupes&&t.allBooksMinusDupes.length}},[e._v(e._s(t.books.length))]),t.allBooksMinusDupes&&t.allBooksMinusDupes.length?r("span",[e._v(" of "+e._s(t.allBooksMinusDupes.length))]):e._e()]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"4ea66897",null).exports},5693:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const n={name:"lazy",props:["tag","offset"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){this.observe()}))},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{observe:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:(this.offset||100)+"px"}),this.observer.observe(this.$el)}}},s=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag||"div",{tag:"component",class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);