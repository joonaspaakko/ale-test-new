(self.webpackChunk=self.webpackChunk||[]).push([["gallery"],{730:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i}),r(2759),r(2077),r(895),r(2482),r(911),r(3238);const i={methods:{slugify:function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",r=new RegExp(t.split("").join("|"),"g");return encodeURIComponent(e.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},2759:(e,t,r)=>{var i=r(5283),o=r(2086),n=r(7189),a=r(5070),s=r(2585),l=r(7826).f,c=r(62).f,u=r(7994),d=r(4059),p=r(4276),h=r(4930),f=r(1007),g=r(3677),y=r(9606),v=r(3278).enforce,b=r(7420),m=r(211),k=r(2582),x=r(2910),$=m("match"),_=o.RegExp,w=_.prototype,S=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,E=/a/g,C=/a/g,T=new _(E)!==E,M=h.UNSUPPORTED_Y;if(n("RegExp",i&&(!T||M||k||x||g((function(){return C[$]=!1,_(E)!=E||_(C)==C||"/a/i"!=_(E,"i")}))))){for(var F=function(e,t){var r,i,o,n,l,c,h=this instanceof F,f=u(e),g=void 0===t,b=[],m=e;if(!h&&f&&g&&e.constructor===F)return e;if((f||e instanceof F)&&(e=e.source,g&&(t="flags"in m?m.flags:p.call(m))),e=void 0===e?"":d(e),t=void 0===t?"":d(t),m=e,k&&"dotAll"in E&&(i=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),r=t,M&&"sticky"in E&&(o=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),x&&(n=function(e){for(var t,r=e.length,i=0,o="",n=[],a={},s=!1,l=!1,c=0,u="";i<=r;i++){if("\\"===(t=e.charAt(i)))t+=e.charAt(++i);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:S.test(e.slice(i+1))&&(i+=2,l=!0),o+=t,c++;continue;case">"===t&&l:if(""===u||y(a,u))throw new SyntaxError("Invalid capture group name");a[u]=!0,n.push([u,c]),l=!1,u="";continue}l?u+=t:o+=t}return[o,n]}(e),e=n[0],b=n[1]),l=a(_(e,t),h?this:w,F),(i||o||b.length)&&(c=v(l),i&&(c.dotAll=!0,c.raw=F(function(e){for(var t,r=e.length,i=0,o="",n=!1;i<=r;i++)"\\"!==(t=e.charAt(i))?n||"."!==t?("["===t?n=!0:"]"===t&&(n=!1),o+=t):o+="[\\s\\S]":o+=t+e.charAt(++i);return o}(e),r)),o&&(c.sticky=!0),b.length&&(c.groups=b)),e!==m)try{s(l,"source",""===m?"(?:)":m)}catch(e){}return l},D=function(e){e in F||l(F,e,{configurable:!0,get:function(){return _[e]},set:function(t){_[e]=t}})},P=c(_),B=0;P.length>B;)D(P[B++]);w.constructor=F,F.prototype=w,f(o,"RegExp",F)}b("RegExp")},411:e=>{!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,i=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:i.prototype.scroll||s,scrollIntoView:i.prototype.scrollIntoView},n=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var r=p(this),i=r.getBoundingClientRect(),n=this.getBoundingClientRect();r!==t.body?(f.call(this,r,r.scrollLeft+n.left-i.left,r.scrollTop+n.top-i.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,r){var i=e.getComputedStyle(t,null)["overflow"+r];return"auto"===i||"scroll"===i}function d(e){var t=c(e,"Y")&&u(e,"Y"),r=c(e,"X")&&u(e,"X");return t||r}function p(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}function h(t){var r,i,o,a,s=(n()-t.startTime)/468;a=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*a)),i=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,i,o),i===t.x&&o===t.y||e.requestAnimationFrame(h.bind(e,t))}function f(r,i,a){var l,c,u,d,p=n();r===t.body?(l=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,d=o.scroll):(l=r,c=r.scrollLeft,u=r.scrollTop,d=s),h({scrollable:l,method:d,startTime:p,startX:c,startY:u,x:i,y:a})}}}}()},2120:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b}),r(5769),r(3238),r(1418),r(7460),r(4078),r(3512),r(5699),r(8010);var i=r(730);const o={mixins:[i.Z],methods:{prepCategoriesSubPage:function(e){if("category"===this.$route.name){var t=this,r={parent:this.$route.params.parent,child:this.$route.params.child,book:this.$route.params.query},i=_.filter(this.subPageSource.collection,(function(e){if(e.categories){var i=!!e.categories[0]&&t.slugify(e.categories[0].name),o=!!e.categories[1]&&t.slugify(e.categories[1].name);if(i&&o&&r.parent===i&&r.child===o)return!0;if(i&&r.parent===i&&!r.child)return!0}}));if(i&&(r.parent||r.child)){var o=i[0].categories[0]?i[0].categories[0].name:null,n=i[0].categories[1]?i[0].categories[1].name:null;o&&(this.pageTitle=o),n&&r.child&&(this.pageSubTitle=n)}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}};r(2327),r(5623),r(1514),r(5901),r(2189);const n={mixins:[i.Z],methods:{prepCollectionsSubPage:function(e){if("collection"===this.$route.name){var t=this.$route.params.collection,r=_.find(this.$store.state.library.collections,{id:t});if(r){var i=_.filter(this.$store.state.library.books,(function(e){return _.includes(r.books,e.asin)}));(r.title||r.description)&&(r.title&&(this.pageTitle=r.title),r.description&&(this.pageSubTitle=r.description)),this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}}};r(9217);const a={methods:{prepSeriesSubPage:function(){if("series"===this.$route.name){var e=this.$route.params.series,t=_.find(this.$store.state.library.series,{asin:e}),r=t&&t.books&&t.books.length>0&&"books"==this.subPageSource.name;r?this.$store.commit("addListRenderingOpts",{listName:"sort",option:{active:!1,current:!1,key:"seriesOrder",label:"Series order",type:"sort",tippy:"The infinite symbol (∞) means the book doesn't have a number"},activate:!this.$route.query.sort||"seriesOrder"===this.$route.query.sort,sortValues:!0,splice:3}):this.$store.commit("updateListRenderingOpts",{listName:"sort",key:"bookNumbers",active:!1,sortValues:!0});var i=_.filter(this.subPageSource.collection,(function(i){return r?_.includes(t.books,i.asin):_.find(i.series,{asin:e})}));if(i.length>0){var o=_.find(i[0].series,{asin:e});o&&(this.pageTitle=o.name),r||(this.pageSubTitle="Couldn't find series order: using number sort")}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}},s={mixins:[i.Z],methods:{prepNarratorsSubPage:function(){var e=this;if("narrator"===this.$route.name){var t=this.$route.params.narrator,r=_.filter(this.subPageSource.collection,(function(r){if(r.narrators)return _.find(r.narrators,(function(r){return e.slugify(r.name)===t}))}));if(r.length>0){var i=_.find(r[0].narrators,(function(r){return e.slugify(r.name)===t}));i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},l={methods:{prepAuthorsSubPage:function(){if("author"===this.$route.name){var e=this.$route.params.author,t=_.filter(this.subPageSource.collection,(function(t){if(t.authors)return _.find(t.authors,(function(t){return t.url===e}))}));if(t.length>0){var r=_.find(t[0].authors,(function(t){return t.url===e}));r&&(this.pageTitle=r.name)}this.$store.commit("prop",{key:"pageCollection",value:t}),this.collectionSource="pageCollection"}}}},c={mixins:[i.Z],methods:{prepPublishersSubPage:function(){var e=this;if("publisher"===this.$route.name){var t=this.$route.params.publisher,r=_.filter(this.subPageSource.collection,(function(r){if(r.publishers)return _.find(r.publishers,(function(r){return e.slugify(r.name)===t}))}));if(r.length>0){var i=_.find(r[0].publishers,(function(r){return e.slugify(r.name)===t}));i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},u={mixins:[i.Z],methods:{prepWishlist:function(e){"wishlist"===this.$route.name&&(this.$store.commit("prop",{key:"pageCollection",value:this.$store.state.library.wishlist}),this.collectionSource="pageCollection")}}};var d=r(5619);r(2077),r(1203),r(1013);const p={methods:{updateListRenderingOptions:function(){var e=this,t={scope:[{active:!0,key:"title"},{active:!0,key:"authors.name"},{active:!0,key:"narrators.name"},{active:!0,key:"series.name"},{active:!1,key:"categories.name"},{active:!1,key:"tags.name"},{active:!1,key:"publishers.name"},{active:!0,key:"blurb"}],filter:[{active:!0,type:"filter",label:"Not started",key:"notStarted",condition:function(e){return!e.progress}},{active:!0,type:"filter",label:"Started",key:"started",condition:function(e){return!(!e.progress||e.progress.toLowerCase().match("finished"))},excludeFromWishlist:!0},{active:!0,type:"filter",label:"Finished",key:"finished",condition:function(e){return!(!e.progress||!e.progress.toLowerCase().match("finished"))},excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"In series",key:"inseries",group:"filterExtras",condition:function(e){return e.series}},{active:!1,type:"filterExtras",label:"Not in series",key:"not-inseries",group:"filterExtras",condition:function(e){return!e.series}},{type:"divider",key:"divider1.1"},{active:!1,type:"filterExtras",label:"Not from plus catalog",key:"not-from-plus-catalog",group:"filterExtras",condition:function(e){return!e.fromPlusCatalog}},{active:!1,type:"filterExtras",label:"Plus catalog: Available",key:"plus-catalog-available",group:"filterExtras",condition:function(e){return e.fromPlusCatalog&&!e.unavailable},tippy:"It is possible for this status to change after last gallery update..."},{active:!1,type:"filterExtras",label:"Plus catalog: Unavailable",excludeFromWishlist:!0,key:"plus-catalog-unavailable",group:"filterExtras",condition:function(e){return e.fromPlusCatalog&&e.unavailable},tippy:"Books that are from the plus catalog, but they are locked. Conditions: a book left the plus catalog or inactive membership."},{type:"divider",key:"divider1.3"},{active:!1,type:"filterExtras",label:"Store page available",key:"store-page-available",group:"filterExtras",condition:function(e){return!(e.storePageChanged||e.storePageMissing)}},{active:!1,type:"filterExtras",label:"Store page unavailable",key:"store-page-unavailable",group:"filterExtras",condition:function(e){return e.storePageChanged||e.storePageMissing},tippy:"Store page has been removed or changed after it was added."},{type:"divider",key:"divider1.4",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"Favorites: include",key:"favorites",excludeFromWishlist:!0,group:"filterExtras",condition:function(e){return e.favorite}},{active:!1,type:"filterExtras",label:"Favorites: exclude",key:"favorites-not",excludeFromWishlist:!0,group:"filterExtras",condition:function(e){return!e.favorite}},{type:"divider",key:"divider1.4.1",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"Books I have rated",excludeFromWishlist:!0,key:"rated-by-me",group:"filterExtras",condition:function(e){return e.myRating}},{active:!1,type:"filterExtras",label:"Books I haven't rated",excludeFromWishlist:!0,key:"not-rated-by-me",group:"filterExtras",condition:function(e){return!e.myRating}},{type:"divider",key:"divider1.4.2",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"New books",excludeFromWishlist:!0,key:"new-books",group:"filterExtras",condition:function(e){return e.isNew},tippy:"Most recent additions."},{type:"divider",key:"divider2.0"},{active:!1,type:"filterExtras",label:"Full cast: include",key:"full-cast-include",group:"filterExtras",condition:function(e){return _.find(e.narrators,(function(e){return e.name.match("full cast")}))}},{active:!1,type:"filterExtras",label:"Full cast: exclude",key:"full-cast-exclude",group:"filterExtras",condition:function(e){return!_.find(e.narrators,(function(e){return e.name.match("full cast")}))}},{type:"divider",key:"divider1.9"},{active:!1,type:"filterExtras",label:"Whisperync: owned",key:"whispersync-owned",group:"filterExtras",condition:function(e){return"owned"===e.whispersync}},{active:!1,type:"filterExtras",label:"Whispersync: available",key:"whispersync-available",group:"filterExtras",condition:function(e){return"available"===e.whispersync}},{active:!1,type:"filterExtras",label:"Whispersync: unavailable",key:"whispersync-false",group:"filterExtras",tippy:"Either unavailable or unkown...",condition:function(e){return!e.whispersync}},{type:"divider",key:"divider-archived"},{active:!1,type:"filterExtras",label:"Archived",key:"archived",group:"filterExtras",condition:function(e){return e.archived}},{active:!1,type:"filterExtras",label:"Not archived",key:"not-archived",group:"filterExtras",condition:function(e){return!e.archived}},{type:"divider",key:"divider2.2"},{active:!1,type:"filterExtras",label:"Length",key:"length",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"h",rangeMin:function(){return 0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(t){return e.timeStringToSeconds(t.length)}));return r?Math.ceil(e.timeStringToSeconds(r.length)/3600):0},condition:function(t){if(t.length){var r=this.range[0],i=this.range[1],o=e.timeStringToSeconds(t.length)/3600;return o>=r&&o<=i}}},{type:"divider",key:"divider2.1"},{active:!1,type:"filterExtras",label:"Narrators",key:"narrators",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){var t=_.filter(e.narrators,(function(e){return e.name&&!e.name.match("full cast")}));return!t.length&&e.narrators&&e.narrators.length&&(t=e.narrators),e.narrators?e.narrators.length:0}));return r?r.narrators.length:0},condition:function(e){if(e.narrators){var t=_.find(e.narrators,(function(e){return e.name.match("full cast")})),r=this.range[0],i=this.range[1],o=e.narrators.length;return t&&1===o?(o=i)>=r&&o<=i:o>=r&&o<=i}}},{type:"divider",key:"divider3",excludeFromWishlist:!0},{active:!1,type:"filterExtras",excludeFromWishlist:!0,label:"books in series",key:"booksinseries",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",tippy:"Number of owned books in series",rangeMin:function(){return 1},rangeMax:function(){var t=_.filter(e.$store.getters.collectionSource,"series"),r=1;return _.each(t,(function(t){var i=_.maxBy(t.series,(function(t){var r=_.find(e.$store.state.library.series,{asin:t.asin});if(r&&r.books)return r.books.length}));if(i){var o=_.find(e.$store.state.library.series,{asin:i.asin}).books.length;r<o&&(r=o)}})),r},condition:function(t){if(t.series){var r=this.range[0],i=this.range[1],o=!1;return _.each(t.series,(function(t){var n=_.find(e.$store.state.library.series,{asin:t.asin});if(n&&n.books.length>=r&&n.books.length<=i)return o=!0,!1})),o}}},{type:"divider",key:"divider4"},{active:!1,type:"filterExtras",label:"Average rating",key:"rating",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.rating)return parseFloat(e.rating)}));return r?parseFloat(r.rating):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.rating)return parseFloat(e.rating)}));return r?parseFloat(r.rating):0},condition:function(e){if(e.rating){var t=this.range[0],r=this.range[1],i=parseFloat(e.rating);return i>=t&&i<=r}},rangeInterval:.1},{type:"divider",key:"divider5.2"},{active:!1,type:"filterExtras",label:"Ratings",key:"number-of-ratings",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.ratings)return parseFloat(e.ratings)}));return r?r.ratings:0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.ratings)return parseFloat(e.ratings)}));return r?r.ratings:0},condition:function(e){if(e.ratings){var t=this.range[0],r=this.range[1],i=parseFloat(e.ratings);return i>=t&&i<=r}}},{type:"divider",key:"divider5",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"My rating",excludeFromWishlist:!0,key:"myrating",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.myRating)return parseFloat(e.myRating)}));return r?parseFloat(r.myRating):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.myRating)return parseFloat(e.myRating)}));return r?parseFloat(r.myRating):0},condition:function(e){if(e.myRating){var t=this.range[0],r=this.range[1],i=parseFloat(e.myRating);return i>=t&&i<=r}},tooltipFormatter:function(e){switch(e){case 1:return e+" (Not for me)";case 2:return e+" (It’s okay)";case 3:return e+" (Pretty good)";case 4:return e+" (It’s great)";case 5:return e+" (I love it)"}}},{type:"divider",key:"divider5.1"},{active:!1,type:"filterExtras",label:"Added",key:"added",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.added)return parseFloat(e.added)}));return r?parseFloat(r.added):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.added)return parseFloat(e.added)}));return r?parseFloat(r.added):0},condition:function(e){if(e.added){var t=this.range[0],r=this.range[1],i=parseFloat(e.added);return i>=t&&i<=r}},rangeInterval:1,tippy:"Low number = old book <br> High number = new book <br><br> For example: if you pick the range 1-10 you get 10 of the oldest books based on when they were added."},{type:"divider",key:"divider8.8"},{active:!1,type:"filterExtras",label:"Authors",key:"authors-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.authors&&r.push(_.map(e.authors,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.authors){var t=_.map(e.authors,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider8.9"},{active:!1,type:"filterExtras",label:"Narrators",key:"narrators-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.narrators&&r.push(_.map(e.narrators,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.narrators){var t=_.map(e.narrators,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.0"},{active:!1,type:"filterExtras",label:"Tags",key:"tags",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.tags&&r.push(_.map(e.tags,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.tags){var t=_.map(e.tags,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.1"},{active:!1,type:"filterExtras",label:"Language",key:"language",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.language&&r.push(e.language)})),r=_.union(r).sort()},value:[],condition:function(e){if(e.language){var t=this.value;return _.includes(t,e.language)}}},{type:"divider",key:"divider9.4"},{active:!1,type:"filterExtras",label:"Series by name",key:"series-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.series&&r.push(_.map(e.series,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.series){var t=_.map(e.series,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.5"},{active:!1,type:"filterExtras",label:"Format",key:"format",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.format&&r.push(e.format)})),r=_.union(r).sort()},value:[],condition:function(e){if(e.format)return!!e.format&&_.includes(this.value,e.format)}},{type:"divider",key:"divider9.6"},{active:!1,type:"filterExtras",label:"Publishers",key:"publishers-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.publishers&&r.push(_.map(e.publishers,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.publishers){var t=_.map(e.publishers,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.7"},{active:!1,type:"filterExtras",label:"Collections",key:"collections",group:"filterExtras",excludeFromWishlist:!0,dropdownOpts:function(t){if(e.$store.state.library.collections){var r=_.map(e.$store.state.library.collections,(function(e){return e.title}));return _.each(e.$store.state.library.collections,(function(e){e.publishers&&r.push(_.map(e.publishers,"name"))})),r.sort()}return[]},value:[],condition:function(t){var r=this.value;if(r.length&&e.$store.state.library.collections){var i=!1;if(_.each(e.$store.state.library.collections,(function(e){if(_.includes(e.books,t.asin))return i=e.title,!1})),i)return _.includes(r,i)}}}],sort:[{active:!1,sticky:!0,key:"sortValues",label:"Show sort values",type:"sortExtras",tippy:"Shows the active sorter's value on top of the cover in the grid view."},{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Sorting is ignored and the order is randomized."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top'},{active:!0,current:!1,key:"title",label:"Title",type:"sort"},{active:!0,current:!1,key:"authors.name",label:"Author",type:"sort"},{active:!0,current:!1,key:"narrators.name",label:"Narrator",type:"sort"},{active:!0,current:!1,key:"narratorsNumber",label:"Number of narrators",type:"sort"},{active:!1,current:!1,key:"length",label:"Length",type:"sort"},{active:!0,current:!1,key:"series",label:"Series",type:"sort",tippy:"Sorts books by the series name alphabetically."},{type:"divider",key:"divider2"},{active:!1,current:!1,key:"releaseDate",label:"Release date",type:"sort"},{active:!1,current:!1,key:"rating",label:"Average rating",type:"sort"},{active:!1,current:!1,key:"ratings",label:"Number of ratings",type:"sort"},{active:!1,current:!1,key:"myRating",label:"My rating",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"publishers.name",label:"Publishers",type:"sort"},{type:"divider",key:"divider3"},{active:!1,current:!1,key:"progress",label:"Progress",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"favorite",label:"Favorite",type:"sort"},{active:!0,current:!1,key:"categories",label:"Categories",type:"sort"},{active:!0,current:!1,key:"tags",label:"Tags",type:"sort"},{active:!1,current:!1,key:"isNew",label:"New books",type:"sort",excludeFromWishlist:!0},{type:"divider",key:"divider4"},{active:!0,current:!1,key:"language",label:"Language",type:"sort"},{active:!0,current:!1,key:"format",label:"Format",type:"sort"},{active:!1,current:!1,key:"fromPlusCatalog",label:"From plus catalog",type:"sort"},{active:!1,current:!1,key:"unavailable",label:"Plus catalog: Unavailable",type:"sort"},{active:!1,current:!1,key:"downloaded",label:"Downloaded",type:"sort",excludeFromWishlist:!0},{type:"divider",key:"divider5"},{active:!1,current:!1,key:"storePageMissing",label:"Store page missing",type:"sort",tippy:"The original store page could not be found. There may be a new store page that replaced it."},{active:!1,current:!1,key:"storePageChanged",label:"Store page changed",type:"sort",tippy:"There is a store page that exists, but it is for a different version of the book."},{active:!1,current:!1,key:"isbn10",label:"Isbn 10",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"isbn13",label:"Isbn 13",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"bookNumbers",label:"Book Numbers",type:"sort",tippy:'<strong>This is only a simple number sort.</strong> <br> If you want the correct series order, as listed in Audible, check the series page in the top menu or the "my books in the series" button in book details. <br><br>Click any book cover (or row) to reveal book details. <br><br> The infinite symbol (∞) means the book is in a series but does not have a number.'},{active:!1,current:!1,key:"whispersync",label:"Whispersync",type:"sort"}]};this.removeArchived(t),this.$setListRenderingOpts(t)},removeArchived:function(e){var t=this.$store.state.library.collections,r=t?_.find(t,{id:"__ARCHIVE"}):null;if(!r||r.books.length>0){var i=["archived","not-archived"];_.remove(e.filter,(function(e){return"divider-archived"===e.key||_.includes(i,e.key)}))}}}};var h=r(411),f=r.n(h),g=r(3486),y=r(4840);f().polyfill();const v={name:"aleGallery",components:{aleSearch:y.Z,aleGridView:function(){return r.e("grid-view").then(r.bind(r,2103))},aleListView:function(){return r.e("spreadsheet-view").then(r.bind(r,6008))}},mixins:[o,n,a,s,l,c,u,d.Z,p,g.Z],data:function(){return{collectionSource:"library.books",pageTitle:null,pageSubTitle:null,scrollContainer:null,collapseView:null,realLength:0,prepsCompleted:!1,errorMessage:!1}},beforeCreate:function(){this.$route.query.view&&this.$store.commit("stickyProp",{key:"viewMode",value:this.$route.query.view})},computed:{galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight+"px"}}},created:function(){(this.$store.state.bookDetails.book&&!this.$route.query.book||this.$route.query.closeBookDetails)&&(this.$updateQuery({query:"closeBookDetails",value:!1}),this.$store.commit("prop",[{key:"bookDetails.book",value:null},{key:"bookDetails.index",value:-1}])),"gallery"===this.$route.name?(this.pageTitle="Library",this.pageSubTitle=null):"wishlist"===this.$route.name&&(this.pageTitle="Wishlist",this.pageSubTitle=null),this.updateListRenderingOptions(),this.prepCategoriesSubPage(),this.prepCollectionsSubPage(),this.prepSeriesSubPage(),this.prepNarratorsSubPage(),this.prepAuthorsSubPage(),this.prepPublishersSubPage(),this.prepWishlist(),this.prepsCompleted=!0,this.$root.$on("book-clicked",this.toggleBookDetails)},beforeDestroy:function(){this.$root.$off("book-clicked",this.toggleBookDetails)},watch:{"$store.getters.collection":function(){this.$store.commit("chunkCollectionReset"),this.$store.commit("chunkCollectionAdd")}},methods:{childrenMounted:function(){this.$nextTick((function(){var e=this.$route.query.y?parseFloat(this.$route.query.y):0;if(this.$route.query.book){var t=document.querySelector(".ale-books"),r=(t.offsetTop,"grid"===this.$store.state.sticky.viewMode),i=r?t.querySelector(".ale-book").getBoundingClientRect().height:t.querySelector("table tbody .ale-row").getBoundingClientRect().height,o=r?t.getBoundingClientRect().width:t.getBoundingClientRect().height,n=Math.floor(o/i)||1,a=_.findIndex(this.$store.getters.collection,{asin:this.$route.query.book}),s=(Math.ceil((a+1)/n),(Math.floor(a/n)+1)*n);this.$store.commit("chunkCollectionAdd",{chunkDistance:s+this.$store.state.chunkDistance}),this.$nextTick((function(){this.$root.$emit("book-clicked",{book:this.$store.state.chunkCollection[a],index:a,force:!0})}))}else if(e){var l=document.querySelector(".ale-books"),c=l.offsetTop,u="grid"===this.$store.state.sticky.viewMode,d=u?l.querySelector(".ale-book").getBoundingClientRect().height:l.querySelector("table tbody .ale-row").getBoundingClientRect().height,p=e+window.innerHeight-c,h=Math.ceil(p/d)||1,f=u?l.getBoundingClientRect().width:l.getBoundingClientRect().height,g=Math.floor(f/d)||1,y=u?h*g:g,v=Math.ceil(y/this.$store.state.chunkDistance)||1;v>1&&this.$store.commit("chunkCollectionAdd",{chunkDistance:this.$store.state.chunkDistance*v}),this.$nextTick((function(){"grid"===this.$store.state.sticky.viewMode?scroll({top:e}):document.querySelector(".list-view-inner-wrap").scroll({top:e})}))}this.errorMessage=!0}))},expandView:function(){this.$updateQuery({query:"book",value:!1,history:!0}),this.$root.$emit("refresh-page")},gridViewMounted:function(){this.scrollContainer=window,this.scrollContainer.removeEventListener("scroll",this.addDomItems),this.scrollContainer.addEventListener("scroll",this.addDomItems,{passive:!0}),this.childrenMounted()},listViewMounted:function(){this.scrollContainer=document.querySelector(".list-view-inner-wrap"),this.scrollContainer.removeEventListener("scroll",this.addDomItems),this.scrollContainer.addEventListener("scroll",this.addDomItems,{passive:!0}),this.childrenMounted()},viewsBeforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.addDomItems)},addDomItems:_.throttle((function(e){var t="grid"===this.$store.state.sticky.viewMode?550+window.innerHeight/2:this.scrollContainer.clientHeight/3,r="grid"===this.$store.state.sticky.viewMode?document.documentElement:this.scrollContainer;r.scrollTop+(r.innerHeight||r.clientHeight)+t>=r.scrollHeight&&this.$store.commit("chunkCollectionAdd"),this.updateScrollDistance(r.scrollTop)}),500,{leading:!1,trailing:!0}),updateScrollDistance:_.debounce((function(e){this.$updateQuery({query:"y",value:e})}),600,{leading:!1,trailing:!0}),toggleBookDetails:function(e){if(e.book){e.index||(e.index=_.findIndex(this.$store.state.chunkCollection,{asin:e.book.asin}));var t=_.get(this.$store.state.bookDetails.book,"asin")===e.book.asin;this.$store.commit("prop",[{key:"bookDetails.book",value:null},{key:"bookDetails.index",value:-1}]),!t||e.force?this.$nextTick((function(){this.$store.commit("prop",[{key:"bookDetails.book",value:e.book},{key:"bookDetails.index",value:e.index}])})):this.$updateQuery({query:"book",value:null})}else this.$store.commit("prop",[{key:"bookDetails.book",value:null},{key:"bookDetails.index",value:-1}]),void 0!==_.get(this.$route,"query.book")&&this.$updateQuery({query:"book",value:null})}}},b=(0,r(810).Z)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"ale-gallery","data-audio-player-visible":e.$store.state.audioPlayerVisible}},[e.prepsCompleted?r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}):e._e(),e._v(" "),e.collapseView?r("div",{staticClass:"collection-expanded-btn",on:{click:e.expandView}},[r("div",[r("span",[e._v("Expand view")]),e._v(" "),e.realLength?r("span",[e._v("( "+e._s(e.realLength)+" )")]):e._e(),e._v(" "),r("font-awesome",{attrs:{icon:["fas","unlock-alt"]}})],1)]):e._e(),e._v(" "),e.$store.getters.collection&&e.$store.getters.collection.length>0?r("div",{style:e.galleryStyle},["grid"===e.$store.state.sticky.viewMode?r("ale-grid-view",{on:{"hook:mounted":e.gridViewMounted,"hook-beforeDestroy":e.viewsBeforeDestroy}}):"spreadsheet"===e.$store.state.sticky.viewMode?r("ale-list-view",{on:{"hook:mounted":e.listViewMounted,"hook-beforeDestroy":e.viewsBeforeDestroy}}):e._e()],1):e.errorMessage?r("div",{attrs:{id:"nothing-here-404"}},[e.$store.getters.searchIsActive&&!e.$store.state.searchCollection.length?r("h3",[e._v("Search: no results")]):r("h3",[e._v("404: There's nothing here")])]):e._e()],1)}),[],!1,null,"75d44144",null).exports}}]);