(self.webpackChunk=self.webpackChunk||[]).push([["narrators"],{730:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(2759),r(2077),r(895),r(2482),r(911),r(3238);const n={methods:{slugify:function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",r=new RegExp(t.split("").join("|"),"g");return encodeURIComponent(e.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},2759:(e,t,r)=>{var n=r(5283),a=r(2086),o=r(7189),s=r(5070),i=r(2585),l=r(7826).f,c=r(62).f,u=r(7994),p=r(4059),h=r(4276),g=r(4930),d=r(1007),f=r(3677),y=r(9606),b=r(3278).enforce,m=r(7420),v=r(211),k=r(2582),_=r(2910),x=v("match"),S=a.RegExp,w=S.prototype,O=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$=/a/g,R=/a/g,C=new S($)!==$,T=g.UNSUPPORTED_Y;if(o("RegExp",n&&(!C||T||k||_||f((function(){return R[x]=!1,S($)!=$||S(R)==R||"/a/i"!=S($,"i")}))))){for(var E=function(e,t){var r,n,a,o,l,c,g=this instanceof E,d=u(e),f=void 0===t,m=[],v=e;if(!g&&d&&f&&e.constructor===E)return e;if((d||e instanceof E)&&(e=e.source,f&&(t="flags"in v?v.flags:h.call(v))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),v=e,k&&"dotAll"in $&&(n=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),r=t,T&&"sticky"in $&&(a=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),_&&(o=function(e){for(var t,r=e.length,n=0,a="",o=[],s={},i=!1,l=!1,c=0,u="";n<=r;n++){if("\\"===(t=e.charAt(n)))t+=e.charAt(++n);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:O.test(e.slice(n+1))&&(n+=2,l=!0),a+=t,c++;continue;case">"===t&&l:if(""===u||y(s,u))throw new SyntaxError("Invalid capture group name");s[u]=!0,o.push([u,c]),l=!1,u="";continue}l?u+=t:a+=t}return[a,o]}(e),e=o[0],m=o[1]),l=s(S(e,t),g?this:w,E),(n||a||m.length)&&(c=b(l),n&&(c.dotAll=!0,c.raw=E(function(e){for(var t,r=e.length,n=0,a="",o=!1;n<=r;n++)"\\"!==(t=e.charAt(n))?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),a+=t):a+="[\\s\\S]":a+=t+e.charAt(++n);return a}(e),r)),a&&(c.sticky=!0),m.length&&(c.groups=m)),e!==v)try{i(l,"source",""===v?"(?:)":v)}catch(e){}return l},z=function(e){e in E||l(E,e,{configurable:!0,get:function(){return S[e]},set:function(t){S[e]=t}})},A=c(S),N=0;A.length>N;)z(A[N++]);w.constructor=E,E.prototype=w,d(a,"RegExp",E)}m("RegExp")},7877:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(2327);var n=r(7758),a=r(6997),o=r(730),s=r(3486);const i={name:"aleNarrators",components:{aleSearch:a.Z,lazy:n.Z},mixins:[o.Z,s.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Narrators",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1;_.eachRight(e.subPageSource.collection,(function(n){n.narrators&&_.each(n.narrators,(function(a){var o=_.find(t,{name:a.name});if(o)return o.books.push(n.title||n.shortTitle),!1;var s={name:a.name,url:e.slugify(a.name),added:r,books:[n.title||n.shortTitle],authors:n.authors,publishers:n.publishers,series:n.series};t.push(s),++r}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search narrators by name"},{active:!0,key:"books",tippy:"Search narrators by book titles"},{active:!0,key:"authors.name",tippy:"Search narrators by authors"},{active:!0,key:"publishers.name",tippy:"Search narrators by publishers"},{active:!0,key:"series.name",tippy:"Search narrators by series"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by narrator's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,r(810).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-narrators"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"narrators:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"narrator",params:{narrator:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books with this narrator."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"455cabd0",null).exports},7758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},a=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tag?"td"===e.tag?r("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():r("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);