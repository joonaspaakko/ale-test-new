(self.webpackChunk=self.webpackChunk||[]).push([["publishers"],{5070:(e,t,r)=>{var n=r(930),s=r(8759),i=r(7530);e.exports=function(e,t,r){var a,o;return i&&n(a=t.constructor)&&a!==r&&s(o=a.prototype)&&o!==r.prototype&&i(e,o),e}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:e=>{var t=1..valueOf;e.exports=function(e){return t.call(e)}},7471:(e,t,r)=>{"use strict";var n=r(1695),s=r(6198).indexOf,i=r(2802),a=[].indexOf,o=!!a&&1/[1].indexOf(1,-0)<0,l=i("indexOf");n({target:"Array",proto:!0,forced:o||!l},{indexOf:function(e){return o?a.apply(this,arguments)||0:s(this,e,arguments.length>1?arguments[1]:void 0)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),s=r(2086),i=r(7189),a=r(1007),o=r(9606),l=r(5070),c=r(2071),u=r(1288),p=r(3677),h=r(62).f,f=r(4399).f,d=r(7826).f,g=r(5773),b=r(4080).trim,v="Number",y=s.Number,m=y.prototype,k=function(e){var t=u(e,"number");return"bigint"==typeof t?t:x(t)},x=function(e){var t,r,n,s,i,a,o,l,p=u(e,"number");if(c(p))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof p&&p.length>2)if(43===(t=(p=b(p)).charCodeAt(0))||45===t){if(88===(r=p.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(p.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+p}for(a=(i=p.slice(2)).length,o=0;o<a;o++)if((l=i.charCodeAt(o))<48||l>s)return NaN;return parseInt(i,n)}return+p};if(i(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var _,S=function(e){var t=arguments.length<1?0:y(k(e)),r=this;return r instanceof S&&p((function(){g(r)}))?l(Object(t),r,S):t},I=n?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;I.length>N;N++)o(y,_=I[N])&&!o(S,_)&&d(S,_,f(y,_));S.prototype=m,m.constructor=S,a(s,v,S)}},2759:(e,t,r)=>{var n=r(5283),s=r(2086),i=r(7189),a=r(5070),o=r(2585),l=r(7826).f,c=r(62).f,u=r(7994),p=r(4059),h=r(4276),f=r(4930),d=r(1007),g=r(3677),b=r(9606),v=r(3278).enforce,y=r(7420),m=r(211),k=r(2582),x=r(2910),_=m("match"),S=s.RegExp,I=S.prototype,N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,E=/a/g,A=new S(O)!==O,T=f.UNSUPPORTED_Y;if(i("RegExp",n&&(!A||T||k||x||g((function(){return E[_]=!1,S(O)!=O||S(E)==E||"/a/i"!=S(O,"i")}))))){for(var w=function(e,t){var r,n,s,i,l,c,f=this instanceof w,d=u(e),g=void 0===t,y=[],m=e;if(!f&&d&&g&&e.constructor===w)return e;if((d||e instanceof w)&&(e=e.source,g&&(t="flags"in m?m.flags:h.call(m))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),m=e,k&&"dotAll"in O&&(n=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),r=t,T&&"sticky"in O&&(s=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),x&&(i=function(e){for(var t,r=e.length,n=0,s="",i=[],a={},o=!1,l=!1,c=0,u="";n<=r;n++){if("\\"===(t=e.charAt(n)))t+=e.charAt(++n);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:N.test(e.slice(n+1))&&(n+=2,l=!0),s+=t,c++;continue;case">"===t&&l:if(""===u||b(a,u))throw new SyntaxError("Invalid capture group name");a[u]=!0,i.push([u,c]),l=!1,u="";continue}l?u+=t:s+=t}return[s,i]}(e),e=i[0],y=i[1]),l=a(S(e,t),f?this:I,w),(n||s||y.length)&&(c=v(l),n&&(c.dotAll=!0,c.raw=w(function(e){for(var t,r=e.length,n=0,s="",i=!1;n<=r;n++)"\\"!==(t=e.charAt(n))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),s+=t):s+="[\\s\\S]":s+=t+e.charAt(++n);return s}(e),r)),s&&(c.sticky=!0),y.length&&(c.groups=y)),e!==m)try{o(l,"source",""===m?"(?:)":m)}catch(e){}return l},R=function(e){e in w||l(w,e,{configurable:!0,get:function(){return S[e]},set:function(t){S[e]=t}})},C=c(S),$=0;C.length>$;)R(C[$++]);I.constructor=w,w.prototype=I,d(s,"RegExp",w)}y("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(2331),s=r(6112),i=r(9586),a=r(2031),o=r(4059),l=r(2964),c=r(1189);n("search",(function(e,t,r){return[function(t){var r=i(this),n=null==t?void 0:l(t,e);return n?n.call(t,r):new RegExp(t)[e](o(r))},function(e){var n=s(this),i=o(e),l=r(t,n,i);if(l.done)return l.value;var u=n.lastIndex;a(u,0)||(n.lastIndex=0);var p=c(n,i);return a(n.lastIndex,u)||(n.lastIndex=u),null===p?-1:p.index}]}))},3364:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(2327);var n=r(7758),s=r(1081),i=r(730),a=r(3486);const o={name:"alePublishers",components:{aleSearch:s.Z,lazy:n.Z},mixins:[i.Z,a.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Publishers",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1;_.eachRight(e.subPageSource.collection,(function(n){n.publishers&&_.each(n.publishers,(function(s){var i=_.find(t,{name:s.name});if(i)return i.books.push(n.title||n.shortTitle),!1;var a={name:s.name,url:e.slugify(s.name),added:r,books:[n.title||n.shortTitle],authors:n.authors,narrators:n.narrators,series:n.series};t.push(a),++r}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search publishers by name"},{active:!0,key:"books",tippy:"Search publishers by book titles"},{active:!0,key:"authors.name",tippy:"Search publishers by authors"},{active:!0,key:"narrators.name",tippy:"Search publishers by narrators"},{active:!0,key:"series.name",tippy:"Search publishers by series"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by publisher's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,r(810).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-publishers"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"publishers:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"publisher",params:{publisher:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books from this publisher."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"3679eebc",null).exports},7758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},s=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tag?"td"===e.tag?r("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():r("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);