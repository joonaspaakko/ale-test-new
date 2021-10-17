(self.webpackChunk=self.webpackChunk||[]).push([["categories"],{3486:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a={data:function(){return{subPageSource:{collection:null,name:null,wishlist:!1,library:!1,books:!1}}},methods:{findSubPageSource:function(){var e=this.$route.query.subPageSource||this.$store.state.sticky.subPageSource;return{collection:this.$store.state.library[e],name:e,wishlist:"wishlist"===e,library:"books"===e,books:"books"===e}}},watch:{"$route.query.subPageSource":function(e){!this.$route.meta.gallery&&this.$route.meta.subPage&&(this.listReady=!1,this.$nextTick((function(){this.subPageSource=this.findSubPageSource(),this.makeCollection()})))}},beforeCreate:function(){this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]})},created:function(){this.$route.meta.subPage&&(this.subPageSource=this.findSubPageSource()),!this.$route.meta.gallery&&this.$route.meta.subPage&&this.makeCollection()}}},730:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a}),s(2759),s(2077),s(895),s(2482),s(911),s(3238);const a={methods:{slugify:function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s=new RegExp(t.split("").join("|"),"g");return encodeURIComponent(e.toString().toLowerCase().replace(/\s+/g,"-").replace(s,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},5070:(e,t,s)=>{var a=s(930),r=s(8759),i=s(7530);e.exports=function(e,t,s){var o,n;return i&&a(o=t.constructor)&&o!==s&&r(n=o.prototype)&&n!==s.prototype&&i(e,n),e}},2759:(e,t,s)=>{var a=s(5283),r=s(2086),i=s(7189),o=s(5070),n=s(2585),u=s(7826).f,l=s(62).f,c=s(7994),g=s(4059),p=s(4276),h=s(4930),b=s(1007),m=s(3677),y=s(9606),f=s(3278).enforce,v=s(7420),d=s(211),k=s(2582),_=s(2910),S=d("match"),$=r.RegExp,P=$.prototype,w=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,C=/a/g,x=new $(T)!==T,R=h.UNSUPPORTED_Y;if(i("RegExp",a&&(!x||R||k||_||m((function(){return C[S]=!1,$(T)!=T||$(C)==C||"/a/i"!=$(T,"i")}))))){for(var q=function(e,t){var s,a,r,i,u,l,h=this instanceof q,b=c(e),m=void 0===t,v=[],d=e;if(!h&&b&&m&&e.constructor===q)return e;if((b||e instanceof q)&&(e=e.source,m&&(t="flags"in d?d.flags:p.call(d))),e=void 0===e?"":g(e),t=void 0===t?"":g(t),d=e,k&&"dotAll"in T&&(a=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),s=t,R&&"sticky"in T&&(r=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),_&&(i=function(e){for(var t,s=e.length,a=0,r="",i=[],o={},n=!1,u=!1,l=0,c="";a<=s;a++){if("\\"===(t=e.charAt(a)))t+=e.charAt(++a);else if("]"===t)n=!1;else if(!n)switch(!0){case"["===t:n=!0;break;case"("===t:w.test(e.slice(a+1))&&(a+=2,u=!0),r+=t,l++;continue;case">"===t&&u:if(""===c||y(o,c))throw new SyntaxError("Invalid capture group name");o[c]=!0,i.push([c,l]),u=!1,c="";continue}u?c+=t:r+=t}return[r,i]}(e),e=i[0],v=i[1]),u=o($(e,t),h?this:P,q),(a||r||v.length)&&(l=f(u),a&&(l.dotAll=!0,l.raw=q(function(e){for(var t,s=e.length,a=0,r="",i=!1;a<=s;a++)"\\"!==(t=e.charAt(a))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),r+=t):r+="[\\s\\S]":r+=t+e.charAt(++a);return r}(e),s)),r&&(l.sticky=!0),v.length&&(l.groups=v)),e!==d)try{n(u,"source",""===d?"(?:)":d)}catch(e){}return u},Z=function(e){e in q||u(q,e,{configurable:!0,get:function(){return $[e]},set:function(t){$[e]=t}})},E=l($),A=0;E.length>A;)Z(E[A++]);P.constructor=q,q.prototype=P,b(r,"RegExp",q)}v("RegExp")},8385:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l}),s(8010),s(2327);var a=s(730),r=s(3657),i=s(9846),o=s(4481),n=s(3486);const u={name:"aleCategories",mixins:[a.Z,r.Z,n.Z],components:{pageTitle:i.Z,libraryWishlistSwitcher:o.Z},data:function(){return{categories:null,listReady:!1,pageTitle:"Categories",pageSubTitle:null}},methods:{getRandomBooks:function(e,t){var s=_.filter(e,(function(e){return e.categories&&e.categories.length>1&&e.cover}));return _.sampleSize(s,t)},makeCollection:function(){var e=this,t={parent:[]};_.each(e.subPageSource.collection,(function(s,a){if(s.categories){var r=s.categories[0].name,i=_.find(t.parent,["name",r]);if(i||(i=t.parent.push({name:r,slug:e.slugify(r),books:[]})),(i=_.find(t.parent,["name",r])).books.push(s),s.categories[1]){i.sub||(i.sub=[]);var o=s.categories[1].name,n=_.find(i.sub,["name",o]);n||(n=i.sub.push({name:o,slug:e.slugify(o),books:[]})),(n=_.find(i.sub,["name",o])).books.push(s)}}})),t.parent=_.orderBy(t.parent,"name","asc"),_.each(t.parent,(function(e,t){e.sub=_.orderBy(e.sub,"name","asc")})),this.categories=t.parent,this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]}),this.listReady=!0}}},l=(0,s(810).Z)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.listReady?s("div",{staticClass:"box-layout-wrapper",attrs:{id:"ale-categories"}},[e.pageTitle||e.pageSubTitle?s("page-title",{attrs:{pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}):e._e(),e._v(" "),s("library-wishlist-switcher"),e._v(" "),e._l(e.categories,(function(t,a){return t&&t.name?s("div",{key:t.name,staticClass:"single-box",attrs:{"data-category":t.name}},[s("h2",[t.slug?s("router-link",{attrs:{to:{name:"category",params:{parent:t.slug,child:void 0},query:{subPageSource:e.subPageSource.name}}}},[e._v("\n        "+e._s(t.name)+"\n      ")]):s("span",[e._v(e._s(t.name))])],1),e._v(" "),t.slug?s("router-link",{staticClass:"books-total",attrs:{to:{name:"category",params:{parent:t.slug,child:void 0},query:{subPageSource:e.subPageSource.name}}}},[t.books?s("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],attrs:{content:"Total number of books in this category."},domProps:{innerHTML:e._s(t.books.length)}}):e._e()]):t.books?s("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],attrs:{content:"Total number of books in this category."},domProps:{innerHTML:e._s(t.books.length)}}):e._e(),e._v(" "),t.sub?s("div",{staticClass:"child-categories"},e._l(t.sub,(function(a,r){return a&&a.name?s("div",{key:a.name},[t&&t.slug&&a&&a.slug?s("router-link",{attrs:{to:{name:"category",params:{parent:t.slug,child:a.slug},query:{subPageSource:e.subPageSource.name}}}},[e._v("\n          "+e._s(a.name)+"\n        ")]):s("span"),e._v(" "),a.books?s("span",{staticClass:"number-of-books"},[e._v("("+e._s(a.books.length)+")")]):e._e()],1):e._e()})),0):e._e(),e._v(" "),s("div",{staticClass:"sample-covers"},e._l(e.getRandomBooks(t.books,5),(function(a,r){return t&&t.books?s("div",{key:a.asin,staticClass:"sample-cover"},[s("router-link",{attrs:{to:{name:"category",params:{parent:a.categories[0]?e.slugify(a.categories[0].name):null,child:a.categories[1]?e.slugify(a.categories[1].name):null},query:{book:a.asin,subPageSource:e.subPageSource.name}}}},[s("img",{attrs:{crossorigin:"anonymous",src:e.makeCoverUrl(a.cover),alt:""}})])],1):e._e()})),0)],1):e._e()}))],2):e._e()}),[],!1,null,"5a76e91c",null).exports},4481:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=(0,s(810).Z)({name:"libraryWishlistSwitcher",props:["aboveSearch"],created:function(){},methods:{switcher:function(e){this.$updateQuery({query:"subPageSource",value:e}),this.$updateQuery({query:"filterExtras",value:null}),this.$updateQuery({query:"sort",value:null}),this.$updateQuery({query:"sortDir",value:null}),this.$store.commit("stickyProp",{key:"subPageSource",value:e})}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.$route.meta.subPage&&!e.$route.meta.gallery&&(e.$store.state.library.books||e.$store.state.library.extras.pages.books)&&(e.$store.state.library.wishlist||e.$store.state.library.extras.pages.wishlist)?s("div",{class:{"above-search":e.aboveSearch},attrs:{id:"library-wishlist-switcher"}},[s("button",{class:{active:"books"===(e.$route.query.subPageSource||e.$store.state.sticky.subPageSource)},on:{click:function(t){return e.switcher("books")}}},[e._v("\n    Library\n  ")]),e._v(" "),s("button",{class:{active:"wishlist"===(e.$route.query.subPageSource||e.$store.state.sticky.subPageSource)},on:{click:function(t){return e.switcher("wishlist")}}},[e._v("\n    Wishlist\n  ")])]):e._e()}),[],!1,null,"366316bc",null).exports},9846:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=(0,s(810).Z)({name:"pageTitle",props:["pageTitle","pageSubTitle"],mounted:function(){this.pageTitle&&this.$store.commit("prop",{key:"pageTitle",value:this.pageTitle}),this.pageSubTitle&&this.$store.commit("prop",{key:"pageSubTitle",value:this.pageSubTitle})},beforeDestroy:function(){this.$store.commit("prop",{key:"pageTitle",value:null})}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.pageTitle||e.pageSubTitle?s("div",{staticClass:"gallery-title-wrapper"},[e.pageTitle?s("h2",{staticClass:"gallery-title"},[e._v("\n    "+e._s(e.pageTitle)+"\n  ")]):e._e(),e._v(" "),s("div",{staticClass:"divider"}),e._v(" "),e.pageSubTitle?s("h3",{staticClass:"gallery-sub-title"},[e._v("\n    "+e._s(e.pageSubTitle)+"\n  ")]):e._e()]):e._e()}),[],!1,null,null,null).exports}}]);