(self.webpackChunk=self.webpackChunk||[]).push([["gallery__mixins_findSubPageSource_js-gallery__components_alePages_aleGallery_aleSearch_vue"],{3486:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const r={data:function(){return{subPageSource:{collection:null,name:null,wishlist:!1,library:!1,books:!1}}},methods:{findSubPageSource:function(){var t=this.$route.query.subPageSource||this.$store.state.sticky.subPageSource;return{collection:this.$store.state.library[t],name:t,wishlist:"wishlist"===t,library:"books"===t,books:"books"===t}}},watch:{"$route.query.subPageSource":function(t){!this.$route.meta.gallery&&this.$route.meta.subPage&&(this.listReady=!1,this.$nextTick((function(){this.subPageSource=this.findSubPageSource(),this.makeCollection()})))}},beforeCreate:function(){this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]})},created:function(){this.$route.meta.subPage&&(this.subPageSource=this.findSubPageSource()),!this.$route.meta.gallery&&this.$route.meta.subPage&&this.makeCollection()}}},5619:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r}),s(2077),s(1203);const r={methods:{timeStringToSeconds:function(t){if(t&&t.match(/\d/)){var e=t.match(/[0-9]( ?)+(m|min|分)/),s=t.match(/\d+/g),r={},i=function(t){return 60*+t*60},o=function(t){return 60*+t};return 2===s.length?(r.h=s[0],r.m=s[1],r.numbers=i(r.h)+o(r.m)):e?(r.m=s[0],r.numbers=o(r.m)):(r.h=s[0],r.numbers=i(r.h)),r.numbers}return 0}}}},5070:(t,e,s)=>{var r=s(930),i=s(8759),o=s(7530);t.exports=function(t,e,s){var n,a;return o&&r(n=e.constructor)&&n!==s&&i(a=n.prototype)&&a!==s.prototype&&o(t,a),t}},2031:t=>{t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},5773:t=>{var e=1..valueOf;t.exports=function(t){return e.call(t)}},7471:(t,e,s)=>{"use strict";var r=s(1695),i=s(6198).indexOf,o=s(2802),n=[].indexOf,a=!!n&&1/[1].indexOf(1,-0)<0,l=o("indexOf");r({target:"Array",proto:!0,forced:a||!l},{indexOf:function(t){return a?n.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},5163:(t,e,s)=>{"use strict";var r=s(5283),i=s(2086),o=s(7189),n=s(1007),a=s(9606),l=s(5070),c=s(2071),u=s(1288),h=s(3677),f=s(62).f,p=s(4399).f,d=s(7826).f,m=s(5773),g=s(4080).trim,y="Number",v=i.Number,b=v.prototype,$=function(t){var e=u(t,"number");return"bigint"==typeof e?e:k(e)},k=function(t){var e,s,r,i,o,n,a,l,h=u(t,"number");if(c(h))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(43===(e=(h=g(h)).charCodeAt(0))||45===e){if(88===(s=h.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+h}for(n=(o=h.slice(2)).length,a=0;a<n;a++)if((l=o.charCodeAt(a))<48||l>i)return NaN;return parseInt(o,r)}return+h};if(o(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:v($(t)),s=this;return s instanceof S&&h((function(){m(s)}))?l(Object(e),s,S):e},w=r?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),N=0;w.length>N;N++)a(v,_=w[N])&&!a(S,_)&&d(S,_,p(v,_));S.prototype=b,b.constructor=S,n(i,y,S)}},9254:(t,e,s)=>{"use strict";var r=s(2331),i=s(6112),o=s(9586),n=s(2031),a=s(4059),l=s(2964),c=s(1189);r("search",(function(t,e,s){return[function(e){var s=o(this),r=null==e?void 0:l(e,t);return r?r.call(e,s):new RegExp(e)[t](a(s))},function(t){var r=i(this),o=a(t),l=s(e,r,o);if(l.done)return l.value;var u=r.lastIndex;n(u,0)||(r.lastIndex=0);var h=c(r,o);return n(r.lastIndex,u)||(r.lastIndex=u),null===h?-1:h.index}]}))},2888:(t,e,s)=>{"use strict";s.d(e,{Z:()=>N}),s(5769),s(3238),s(1418),s(7460),s(4078),s(2077),s(9254),s(9217),s(8010),s(266),s(2327),s(1013),s(1203),s(911),s(5623),s(1514);const r={methods:{sortName:function(t){return _.orderBy(t.books,(function(t){if(t.name)return t.name}),t.direction)}}},i={methods:{sortIsbns:function(t){return _.orderBy(t.books,(function(e){if(!e.isbns)return null;if("isbn10"===t.sortKey){var s=_.find(e.isbns,["type","ISBN_10"]);return s?""+s.identifier:null}if("isbn13"===t.sortKey){var r=_.find(e.isbns,["type","ISBN_13"]);return r?""+r.identifier:null}}),t.direction)}}},o={methods:{sortTitle:function(t){return _.orderBy(t.books,(function(e){var s=e[t.sortKey];return s?"title"===t.sortKey?e.title||e.titleShort:_.isArray(s)&&_.find(s,"name")?_.map(s,"name").join(", "):s:null}),t.direction)}}},n={methods:{sortAmount:function(t){return _.orderBy(t.books,(function(e){if("amountTotal"===t.sortKey){if(e.allBooksMinusDupes)return e.allBooksMinusDupes.length;if(e.allBooks)return e.allBooks.length}else if(e.books)return e.books.length}),t.direction)}}};var a=s(5619);const l={mixins:[a.Z],methods:{sortLength:function(t){var e=this;return _.orderBy(t.books,(function(t){return t.length?e.timeStringToSeconds(t.length):0}),t.direction)}}};s(5163);const c={methods:{sortRatings:function(t){return _.orderBy(t.books,(function(e){if(e[t.sortKey]){var s=e[t.sortKey];return Number(s)}return 0}),t.direction)}}},u={methods:{sortByLength:function(t){return _.orderBy(t.books,(function(e){if("narratorsNumber"===t.sortKey){if(e.narrators){var s=_.find(e.narrators,(function(t){return t.name.match("full cast")}));return s&&1===e.narrators.length?99999999:e.narrators.length-(s?1:0)}return 0}return e[t.sortKey].length||0}),t.direction)}}},h={mixins:[a.Z],methods:{sortProgress:function(t){var e=this;return _.orderBy(t.books,[function(t){if(t.progress){if("finished"===t.progress.toLowerCase().trim())return 100;if(t.length){var s=e.timeStringToSeconds(t.progress),r=e.timeStringToSeconds(t.length);return(s=r-s)/r*100}return 0}return 0},function(t){return t.length?!e.timeStringToSeconds(t.length):0}],t.direction)}}},f={methods:{sortDateAdded:function(t){return _.orderBy(t.books,(function(t){return t.added}),t.direction)}}},p={methods:{sortFavorites:function(t){return _.orderBy(t.books,(function(t){return t.favorite}),t.direction)}}},d={methods:{sortWhispersync:function(t){return _.orderBy(t.books,(function(e){var s=e[t.sortKey];return s?"owned"===s?2:"available"===s?1:void 0:0}),t.direction)}}};s(7471),s(2482),s(3512);const m={mixins:[r,i,o,n,l,c,h,u,f,p,d,{methods:{sortBookNumbers:function(t){var e=this.$route.params.series,s=_.find(this.$store.state.library.series,{asin:e});return _.orderBy(t.books,(function(t){return s.books.indexOf(t.asin)}),t.direction)},sortBookNumbersOriginal:function(t){var e=this.$route.params.series;return _.orderBy(t.books,(function(t){var s=function(t){!_.isEmpty(t)&&t||(t=void 0);var e=_.isArray(t)?t[0]:t,s="string"==typeof e?e.split("-"):[e];return s[0]?parseFloat(s[0]):s[0]};if(e&&t.series)return s(_.find(t.series,{asin:e}).bookNumbers);if(_.find(t.series,"bookNumbers")){var r=_.filter(t.series,"bookNumbers");return r=_.map(r,"bookNumbers"),s(r=_.flatten(r))}return _.find(t.series)?-1:-2}),t.direction)}}},{methods:{sortReleaseDate:function(t){return _.orderBy(t.books,(function(t){return t.releaseDate?new Date(t.releaseDate.split("-").join("/")):0}),t.direction)}}},{methods:{sortStringNameProp:function(t){var e=t.sortKey.replace(".name","");return _.orderBy(t.books,(function(t){return t[e]?t[e][0].name.toLowerCase():null}),t.direction)}}},{methods:{sortMissing:function(t){return _.orderBy(t.books,[function(t){return t.allBooksMinusDupes?t.allBooksMinusDupes.length-t.books.length:t.allBooks?t.allBooks.length-t.books.length:0},function(t){return t.myRating}],[t.direction,"desc"])}}}],methods:{filterBooks:function(t){var e=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filter",active:!0}),s=_.find(this.$store.state.listRenderingOpts.filter,{type:"filter"}),r=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filterExtras",active:!0});return e||r?_.filter(t,(function(t){return function(t){var i=_.map(e,(function(e){return!!e.condition(t)})),o=_.map(r,(function(e){return!!e.condition(t)}));return(!s||_.includes(i,!0))&&!_.includes(o,!1)}(t)})):t},sortBooks:function(t){var e=_.find(this.$store.state.listRenderingOpts.sort,(function(t){return!("randomize"!==t.key||!t.active)||!!t.current||void 0}));if(e){var s={books:t,direction:e.active?"desc":"asc",sortKey:e.key};switch(s.sortKey){case"randomize":t=_.shuffle(t);break;case"bookNumbers":s.missingNumber=0,t=this.sortBookNumbersOriginal(s);break;case"seriesOrder":s.missingNumber=0,t=this.sortBookNumbers(s);break;case"added":t=this.sortDateAdded(s);break;case"releaseDate":t=this.sortReleaseDate(s);break;case"authors.name":case"narrators.name":case"publishers.name":case"categories":case"tags.name":t=this.sortStringNameProp(s);break;case"narratorsNumber":t=this.sortByLength(s);break;case"title":case"series":case"format":case"isNew":case"language":case"fromPlusCatalog":case"unavailable":case"favorite":case"downloaded":case"storePageMissing":case"storePageChanged":t=this.sortTitle(s);break;case"whispersync":t=this.sortWhispersync(s);break;case"length":t=this.sortLength(s);break;case"myRating":case"rating":case"ratings":t=this.sortRatings(s);break;case"progress":t=this.sortProgress(s);break;case"favorite":t=this.sortFavorites(s);break;case"name":t=this.sortName(s);break;case"amount":case"amountTotal":t=this.sortAmount(s);break;case"isbn10":case"isbn13":t=this.sortIsbns(s);break;case"missing":t=this.sortMissing(s)}}return t}}},g={name:"searchIcons",props:["listName"],data:function(){return{items:[{name:"scope",on:!0,active:!1,icon:"microscope",tooltip:"Change the search scope for more accurate results"},{name:"filter",on:!0,active:!1,icon:"filter",tooltip:"Filter books"},{name:"sort",on:!0,active:!1,icon:"sort",tooltip:"Sort books"}]}},computed:{filtersActive:function(){return this.$store.getters.filterExtrasKeys||"notStarted,started,finished"!==this.$store.getters.filterKeys&&this.$store.getters.filterKeysLength}},methods:{openSearchOptions:function(t,e){var s=this.listName;this.$emit("update:listName",!1),s!==t.name&&this.$nextTick((function(){this.$emit("update:listName",t.name)}))},showIcon:function(t){switch(t.name){case"scope":return this.$store.state.listRenderingOpts[t.name].length>0;case"filter":var e=!this.$store.getters.regularFilters;return _.filter(this.$store.state.listRenderingOpts[t.name],(function(s){var r="divider"===s.type,i=!!e||s.type===t.name;return!r&&i})).length>0;case"sort":return _.filter(this.$store.state.listRenderingOpts[t.name],(function(e){var s="divider"===e.type,r=e.type===t.name;return!s&&r})).length>0}}}};var y=s(810);const v=(0,y.Z)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icons"},[s("div",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-wrap",attrs:{content:"Items in current selection: <strong>"+t.$store.getters.collection.length+"</strong> / <strong>"+t.$store.getters.collectionTotal+"</strong>"}},[s("div",{staticClass:"book-in-selection"},[s("div",{staticClass:"inner-wrap"},[t._v("\n        "+t._s(t.$store.getters.collection.length)+"\n      ")])])]),t._v(" "),t._l(t.items,(function(e){return t.showIcon(e)?s("div",{directives:[{name:"tippy",rawName:"v-tippy"}],key:e.name,staticClass:"icon-wrap",class:{disabled:!e.on},attrs:{content:e.tooltip},on:{click:function(s){return t.openSearchOptions(e,s)}}},[s("div",{staticClass:"search-opt-btn",class:{active:t.listName===e.name,"active-filters":"filter"===e.name&&t.filtersActive},attrs:{"data-option":e.name}},[s("font-awesome",{attrs:{fas:"",icon:e.icon}})],1)]):t._e()}))],2)}),[],!1,null,"b579a0e6",null).exports,b={name:"searchOptions",props:["listName"],components:{sorter:function(){return s.e("sorter").then(s.bind(s,8111))}},data:function(){return{css:{arrow:{left:"0px"},options:{right:"0px"},filter:{top:"40px"}}}},created:function(){if(this.$store.commit("prop",{key:"lazyScroll",value:!1}),this.$updateQuery({query:"y",value:null}),this.optionsList=this.$store.state.listRenderingOpts[this.listName],"filter"===this.listName){var t=document.querySelector("#nav-outer-wrapper.regular .inner-wrap");this.css.filter={top:t?t.offsetHeight+"px":0}}},mounted:function(){this.repositionSearchOptions(),this.$root.$on("repositionSearchOpts",this.repositionSearchOptions),this.$root.$on("afterWindowResize",this.repositionSearchOptions)},beforeDestroy:function(){this.$root.$off("repositionSearchOpts",this.repositionSearchOptions),this.$root.$off("afterWindowResize",this.repositionSearchOptions),scroll({top:0,behavior:"smooth"}),this.$store.commit("prop",{key:"searchOptOpenHeight",value:null}),this.$store.commit("prop",{key:"lazyScroll",value:!0})},methods:{resetFilters:function(){this.$updateQuery({query:"filter",value:null}),this.$updateQuery({query:"filterExtras",value:null}),this.$store.commit("resetFilters"),this.$root.$emit("start-filter")},repositionSearchOptions:_.debounce((function(){this.$nextTick((function(){if("filter"===this.listName){var t=document.querySelector("#nav-outer-wrapper.regular .inner-wrap");this.css.filter={top:t?t.offsetHeight+"px":0}}var e={};e.el=this.$refs.options,e.width=e.el.offsetWidth,e.left=e.el.offsetLeft;var s={};s.el=document.querySelector("#ale-search > .icons"),s.width=s.el.offsetWidth;var r={};r.el=document.querySelector(".search-opt-btn.active").parentNode,r.width=r.el.offsetWidth,r.left=r.el.offsetLeft,r.middle=s.width-(r.left+r.width/2),e.position=r.middle-e.width/2;var i=r.el.getBoundingClientRect().left+r.width/2+e.width/2-window.innerWidth,o=i>0?i+20:0;this.css.options.right=e.position+o+"px",this.css.arrow.left=e.width/2-10+o+"px"}))}),150,{leading:!0,trailing:!1}),sortersMounted:_.debounce((function(){if(this.$refs.options){var t=this.$refs.options.offsetHeight+this.$refs.options.offsetTop;window.innerHeight>t?t=window.innerHeight:t+=100,this.$store.commit("prop",{key:"searchOptOpenHeight",value:t})}}),250,{leading:!1,trailing:!0})}},$=(0,y.Z)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"options",class:t.listName+"-options",style:t.css.options,attrs:{id:"search-options"}},[s("div",{staticClass:"search-options-inner-wrap"},[s("div",{staticClass:"search-opts-arrow",style:t.css.arrow}),t._v(" "),"filter"===t.listName&&t.$store.getters.regularFilters?s("ul",{staticClass:"regular-filters",style:t.css.filter},[s("li",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top",flipBehavior:["top","right","bottom","left"]},expression:"{ placement: 'top', flipBehavior: ['top', 'right', 'bottom', 'left'] }"}],staticClass:"reset-filters",attrs:{content:"Reset filters"},on:{click:t.resetFilters}},[s("font-awesome",{attrs:{fas:"",icon:"redo-alt"}})],1),t._v(" "),s("li",{staticClass:"total"},[s("span",{class:{difference:t.$store.getters.collection.length!==t.$store.getters.collectionTotal}},[t._v(t._s(t.$store.getters.collection.length))]),t._v(" / "+t._s(t.$store.getters.collectionTotal))]),t._v(" "),t._l(t.optionsList,(function(e,r){return("wishlist"===t.$route.name?"filter"!==e.type||e.excludeFromWishlist:"filter"!==e.type)?t._e():s("li",{key:e.key,staticClass:"search-option"},[s("sorter",{attrs:{label:e.label,item:e,index:r,currentList:t.optionsList,listName:t.listName},on:{"hook:mounted":t.sortersMounted}})],1)}))],2):t._e(),t._v(" "),s("ul",t._l(t.optionsList,(function(e,r){return("wishlist"===t.$route.name?e.excludeFromWishlist||"grid"!==t.$store.state.sticky.viewMode&&"sortValues"===e.key||"filter"===e.type:"grid"!==t.$store.state.sticky.viewMode&&"sortValues"===e.key||"filter"===e.type)?t._e():s("li",{key:e.key,staticClass:"search-option",class:{extras:e.type&&e.type.match(/extra/i),divider:"divider"===e.type}},["divider"!==e.type?s("sorter",{attrs:{label:e.label,item:e,index:r,currentList:t.optionsList,listName:t.listName},on:{"hook:mounted":t.sortersMounted}}):t._e()],1)})),0)])])}),[],!1,null,null,null).exports;var k=s(9846),S=s(9977);const w={name:"aleSearch",components:{searchIcons:v,searchOptions:$,viewModeSwitcher:function(){return s.e("view-mode-switcher").then(s.bind(s,2054))},pageTitle:k.Z,libraryWishlistSwitcher:S.Z},mixins:[m],props:["collectionSource","pageTitle","pageSubTitle"],data:function(){return{enableZoomTimer:null,fuse:null,fuseOptions:{keys:["title"],location:0,distance:150,threshold:.25,shouldSort:!0,includeScore:!1,includeMatches:!1,useExtendedSearch:!0},listName:"scope",waypointOpts:{rootMargin:"-37px"},fixedSearch:!1,highlightSearch:!1,readyToCloseOpts:!1}},mounted:function(){if(this.$nextTick((function(){this.listName=!1})),this.$route.query.search){var t=decodeURIComponent(this.$route.query.search);this.$store.commit("prop",{key:"searchQuery",value:t})}this.$store.commit("prop",{key:"collectionSource",value:this.collectionSource});var e=this.$route.query.sort||this.$route.query.filter||this.$route.query.filterExtras,s=_.get(this.$store.state,this.collectionSource);e?((this.$route.query.filter||this.$route.query.filterExtras)&&(s=this.filterBooks(s)),this.$route.query.sort&&(s=this.sortBooks(s)),this.$store.commit("prop",{key:"mutatingCollection",value:s})):this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(s))}),this.$route.query.search&&(this.$route.query.sort&&(this.fuseOptions.shouldSort=!1),this.search(this.$event,"on-load")),this.$refs.aleSearch.addEventListener("touchstart",this.iosAutozoomDisable,{passive:!0}),this.$root.$on("ios-auto-zoom-disable",this.iosAutozoomDisable),this.$root.$on("start-scope",this.scope),this.$root.$on("start-sort",this.sort),this.$root.$on("start-filter",this.filter),this.$root.$on("search-focus",this.focusOnSearch),this.$store.commit("prop",{key:"searchMounted",value:!0})},beforeDestroy:function(){this.$store.commit("prop",{key:"searchQuery",value:""}),this.$refs.aleSearch.removeEventListener("touchstart",this.iosAutozoomDisable),this.$root.$off("ios-auto-zoom-disable",this.iosAutozoomDisable),this.$root.$off("start-scope",this.scope),this.$root.$off("start-sort",this.sort),this.$root.$off("start-filter",this.filter),this.$root.$off("search-focus",this.focusOnSearch),this.$store.commit("prop",{key:"searchMounted",value:!1})},methods:{dontCloseOpts:_.throttle((function(){this.readyToCloseOpts&&(this.readyToCloseOpts=!1)}),50,{leading:!1,trailing:!0}),closeOpts:function(){this.readyToCloseOpts&&(this.readyToCloseOpts=!1,this.$nextTick((function(){var t=this;setTimeout((function(){t.listName=!1}),30)})))},scope:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.getters.searchIsActive&&(this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(_.get(this.$store.state,this.collectionSource)))}),this.$store.getters.searchIsActive||(this.fuseOptions.shouldSort=!1),this.search())},filter:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(_.get(this.$store.state,this.collectionSource)))}),this.$store.getters.searchIsActive&&(this.$store.getters.searchIsActive||(this.fuseOptions.shouldSort=!1),this.search())},sort:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.commit("prop",{key:this.$store.getters.searchIsActive?"searchCollection":"mutatingCollection",value:this.sortBooks(this.$store.getters.collection)})},search:_.debounce((function(t,e){if(decodeURIComponent(this.$route.query.search),e||this.$root.$emit("book-clicked",{book:null}),t)if(this.fuseOptions.shouldSort=!0,this.$store.commit("prop",{key:"searchQuery",value:t.target.value}),this.$updateQuery({query:"search",value:encodeURIComponent(t.target.value)}),""!==t.target.value.trim())this.$route.query.sort&&(this.$updateQuery({query:"sort",value:null}),this.$updateQuery({query:"sortDir",value:null}));else{var r=_.find(this.$store.state.listRenderingOpts.sort,"current");this.$updateQuery({query:"sort",value:r.key}),this.$updateQuery({query:"sortDir",value:r.active?"desc":"asc"})}if(this.$store.getters.searchIsActive){var i=this.modifyQuery(this.$store.state.searchQuery);this.fuseOptions.keys=this.aliciaKeys;var o=this;s.e("fuse-search").then(s.bind(s,2631)).then((function(t){o.fuse=new t.default(o.$store.state.mutatingCollection,o.fuseOptions);var e=o.fuse.search(i);e.length>0&&(e=_.map(e,(function(t){return t.item}))),o.$store.commit("prop",{key:"searchCollection",value:e})}))}else this.$store.commit("prop",{key:"searchCollection",value:[]})}),270,{leading:!1,trailing:!0}),searchEnterBlur:_.debounce((function(t){this.$refs.searchInput.blur()}),100,{leading:!1,trailing:!0}),restoreOptions:function(){updateListRenderingOpts()},focusOnSearch:function(){var t=this;scroll({top:0}),this.highlightSearch=!0,setTimeout((function(){t.highlightSearch=!1}),1200),this.$refs.searchInput.focus()},modifyQuery:function(t){var e=t.match(/&/),s=t.match(/ ?and ?/);return e?t+"|"+t.replace("&","and"):s?t+"|"+t.replace("and","&"):t},iosAutozoomDisable:function(){if(document.querySelector(".is-ios")){var t=document.querySelector("head").querySelector("meta[name=viewport]");t.content="width=device-width, initial-scale=1.0, user-scalable=0",clearTimeout(this.enableZoomTimer),this.enableZoomTimer=setTimeout((function(){t.content="width=device-width, initial-scale=1.0, user-scalable=1"}),700)}}},computed:{aliciaKeys:function(){var t=_.filter(this.$store.state.listRenderingOpts.scope,["active",!0]);return _.map(t,(function(t){if(t.active)return t.key}))},placeholder:function(){var t;return"Search: "+(t=this.aliciaKeys,_.map(t,(function(t){return t.replace(".name","")})).join(", "))}}},N=(0,y.Z)(w,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.pageTitle||t.pageSubTitle?s("page-title",{attrs:{pageTitle:t.pageTitle,pageSubTitle:t.pageSubTitle}}):t._e(),t._v(" "),t.$route.meta.subPage?s("library-wishlist-switcher",{attrs:{aboveSearch:!0}}):t._e(),t._v(" "),s("div",{ref:"searchWrap",class:{"search-fixed":t.fixedSearch,"highlight-search":t.highlightSearch},attrs:{id:"ale-search-wrap"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.listName,expression:"listName"}],attrs:{id:"search-dropdown-overlay"},on:{mousedown:function(e){t.readyToCloseOpts=!0},touchstart:function(e){t.readyToCloseOpts=!0},touchmove:t.dontCloseOpts,click:t.closeOpts}}),t._v(" "),s("div",{ref:"aleSearch",attrs:{id:"ale-search"}},[s("div",{staticClass:"search-wrapper",on:{click:function(e){return t.$refs.searchInput.focus()}}},[s("input",{ref:"searchInput",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.$store.state.searchQuery},on:{input:t.search,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchEnterBlur.apply(null,arguments)},focus:function(e){t.listName=!1}}})]),t._v(" "),s("search-icons",{attrs:{"list-name":t.listName},on:{"update:listName":function(e){t.listName=e},"update:list-name":function(e){t.listName=e}}}),t._v(" "),t.listName?s("search-options",{attrs:{"list-name":t.listName},on:{"update:listName":function(e){t.listName=e},"update:list-name":function(e){t.listName=e}}}):t._e()],1),t._v(" "),t.$route.meta.gallery&&t.$store.state.windowWidth>=450?s("view-mode-switcher"):t._e()],1)],1)}),[],!1,null,null,null).exports},9977:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const r=(0,s(810).Z)({name:"libraryWishlistSwitcher",props:["aboveSearch"],created:function(){},methods:{switcher:function(t){this.$updateQuery({query:"subPageSource",value:t}),this.$updateQuery({query:"filterExtras",value:null}),this.$updateQuery({query:"sort",value:null}),this.$updateQuery({query:"sortDir",value:null}),this.$store.commit("stickyProp",{key:"subPageSource",value:t}),this.$root.$emit("refresh-page")}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$route.meta.subPage&&!t.$route.meta.gallery&&(t.$store.state.library.books||t.$store.state.library.extras.pages.books)&&(t.$store.state.library.wishlist||t.$store.state.library.extras.pages.wishlist)?s("div",{class:{"above-search":t.aboveSearch},attrs:{id:"library-wishlist-switcher"}},[s("button",{class:{active:"books"===(t.$route.query.subPageSource||t.$store.state.sticky.subPageSource)},on:{click:function(e){return t.switcher("books")}}},[t._v("\n    Library\n  ")]),t._v(" "),s("button",{class:{active:"wishlist"===(t.$route.query.subPageSource||t.$store.state.sticky.subPageSource)},on:{click:function(e){return t.switcher("wishlist")}}},[t._v("\n    Wishlist\n  ")])]):t._e()}),[],!1,null,"14281d6c",null).exports},9846:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const r=(0,s(810).Z)({name:"pageTitle",props:["pageTitle","pageSubTitle"],mounted:function(){this.pageTitle&&this.$store.commit("prop",{key:"pageTitle",value:this.pageTitle}),this.pageSubTitle&&this.$store.commit("prop",{key:"pageSubTitle",value:this.pageSubTitle})},beforeDestroy:function(){this.$store.commit("prop",{key:"pageTitle",value:null})}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.pageTitle||t.pageSubTitle?s("div",{staticClass:"gallery-title-wrapper"},[t.pageTitle?s("h2",{staticClass:"gallery-title"},[t._v("\n    "+t._s(t.pageTitle)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),t.pageSubTitle?s("h3",{staticClass:"gallery-sub-title"},[t._v("\n    "+t._s(t.pageSubTitle)+"\n  ")]):t._e()]):t._e()}),[],!1,null,null,null).exports}}]);