(self.webpackChunk=self.webpackChunk||[]).push([[121],{90411:e=>{!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,i=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:i.prototype.scroll||s,scrollIntoView:i.prototype.scrollIntoView},n=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var r=p(this),i=r.getBoundingClientRect(),n=this.getBoundingClientRect();r!==t.body?(h.call(this,r,r.scrollLeft+n.left-i.left,r.scrollTop+n.top-i.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,r){var i=e.getComputedStyle(t,null)["overflow"+r];return"auto"===i||"scroll"===i}function d(e){var t=c(e,"Y")&&u(e,"Y"),r=c(e,"X")&&u(e,"X");return t||r}function p(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}function f(t){var r,i,o,a,s=(n()-t.startTime)/468;a=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*a)),i=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,i,o),i===t.x&&o===t.y||e.requestAnimationFrame(f.bind(e,t))}function h(r,i,a){var l,c,u,d,p=n();r===t.body?(l=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,d=o.scroll):(l=r,c=r.scrollLeft,u=r.scrollTop,d=s),f({scrollable:l,method:d,startTime:p,startX:c,startY:u,x:i,y:a})}}}}()},81862:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k}),r(5769),r(63238),r(61418),r(17460),r(14078),r(43512),r(95699);var i=r(83965),o=(r(98010),r(74662));const n={mixins:[o.Z],methods:{prepCategoriesSubPage:function(e){if("category"===this.$route.name){var t=this,r={parent:this.$route.params.parent,child:this.$route.params.child,book:this.$route.params.query},i=_.filter(this.findSubPageSource(),(function(e){if(e.categories){var i=!!e.categories[0]&&t.slugify(e.categories[0].name),o=!!e.categories[1]&&t.slugify(e.categories[1].name);if(i&&o&&r.parent===i&&r.child===o)return!0;if(i&&r.parent===i&&!r.child)return!0}}));if(i&&(r.parent||r.child)){var o=i[0].categories[0]?i[0].categories[0].name:null,n=i[0].categories[1]?i[0].categories[1].name:null;o&&(this.pageTitle=o),n&&r.child&&(this.pageSubTitle=n)}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}};r(52327),r(95623),r(61514),r(25901),r(92189);const a={mixins:[o.Z],methods:{prepCollectionsSubPage:function(e){if("collection"===this.$route.name){var t=this.$route.params.collection,r=_.find(this.$store.state.library.collections,{id:t});if(r){var i=_.filter(this.$store.state.library.books,(function(e){return _.includes(r.books,e.asin)}));(r.title||r.description)&&(r.title&&(this.pageTitle=r.title),r.description&&(this.pageSubTitle=r.description)),this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}}};r(69217);var s=r(32020);const l={methods:{prepSeriesSubPage:function(){if("series"===this.$route.name){var e=this.$route.params.series,t=s._.find(this.$store.state.library.series,{asin:e}),r=t&&t.books&&t.books.length>0;r?this.$store.commit("addListRenderingOpts",{listName:"sort",option:{active:!1,current:!1,key:"seriesOrder",label:"Series order",type:"sort",tippy:"The infinite symbol (∞) means the book doesn't have a number"},activate:!this.$route.query.sort||"seriesOrder"===this.$route.query.sort,sortValues:!0,splice:3}):this.$store.commit("updateListRenderingOpts",{listName:"sort",key:"bookNumbers",active:!1,sortValues:!0});var i=s._.filter(this.findSubPageSource(),(function(i){return r?s._.includes(t.books,i.asin):s._.find(i.series,{asin:e})}));if(i.length>0){var o=s._.find(i[0].series,{asin:e});o&&(this.pageTitle=o.name),r||(this.pageSubTitle="Couldn't find series order: Using number sort")}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}},c={mixins:[o.Z],methods:{prepNarratorsSubPage:function(){var e=this;if("narrator"===this.$route.name){var t=this.$route.params.narrator,r=s._.filter(this.findSubPageSource(),(function(r){if(r.narrators)return s._.find(r.narrators,(function(r){return e.slugify(r.name)===t}))}));if(r.length>0){var i=s._.find(r[0].narrators,(function(r){return e.slugify(r.name)===t}));i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},u={methods:{prepAuthorsSubPage:function(){if("author"===this.$route.name){var e=this.$route.params.author,t=s._.filter(this.findSubPageSource(),(function(t){if(t.authors)return s._.find(t.authors,(function(t){return t.url===e}))}));if(t.length>0){var r=s._.find(t[0].authors,(function(t){return t.url===e}));r&&(this.pageTitle=r.name)}this.$store.commit("prop",{key:"pageCollection",value:t}),this.collectionSource="pageCollection"}}}},d={mixins:[o.Z],methods:{prepPublishersSubPage:function(){var e=this;if("publisher"===this.$route.name){var t=this.$route.params.publisher,r=s._.filter(this.findSubPageSource(),(function(r){if(r.publishers)return s._.find(r.publishers,(function(r){return e.slugify(r.name)===t}))}));if(r.length>0){var i=s._.find(r[0].publishers,(function(r){return e.slugify(r.name)===t}));i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},p={mixins:[o.Z],methods:{prepWishlist:function(e){"wishlist"===this.$route.name&&(this.$store.commit("prop",{key:"pageCollection",value:this.$store.state.library.wishlist}),this.collectionSource="pageCollection")}}};var f=r(83223),h=r(34406);r(1203),r(61013);const g={methods:{updateListRenderingOptions:function(){var e=this,t={scope:[{active:!0,key:"title"},{active:!0,key:"authors.name"},{active:!0,key:"narrators.name"},{active:!0,key:"series.name"},{active:!1,key:"categories.name"},{active:!1,key:"publishers.name"},{active:!0,key:"blurb"}],filter:[{active:!0,type:"filter",label:"Not started",key:"notStarted",condition:function(e){return!e.progress}},{active:!0,type:"filter",label:"Started",key:"started",condition:function(e){return!(!e.progress||e.progress.toLowerCase().match("finished"))},excludeFromWishlist:!0},{active:!0,type:"filter",label:"Finished",key:"finished",condition:function(e){return!(!e.progress||!e.progress.toLowerCase().match("finished"))},excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"In series",key:"inseries",group:"filterExtras",condition:function(e){return e.series}},{active:!1,type:"filterExtras",label:"Not in series",key:"not-inseries",group:"filterExtras",condition:function(e){return!e.series}},{type:"divider",key:"divider1.1"},{active:!1,type:"filterExtras",label:"Not from plus catalog",key:"not-from-plus-catalog",group:"filterExtras",condition:function(e){return!e.fromPlusCatalog}},{active:!1,type:"filterExtras",label:"Plus catalog: Available",key:"plus-catalog-available",group:"filterExtras",condition:function(e){return e.fromPlusCatalog&&!e.unavailable},tippy:"It is possible for this status to change after last gallery update..."},{active:!1,type:"filterExtras",label:"Plus catalog: Unavailable",excludeFromWishlist:!0,key:"plus-catalog-unavailable",group:"filterExtras",condition:function(e){return e.fromPlusCatalog&&e.unavailable},tippy:"Books that are from the plus catalog, but they are locked. Conditions: a book left the plus catalog or inactive membership."},{type:"divider",key:"divider1.3"},{active:!1,type:"filterExtras",label:"Store page available",key:"store-page-available",group:"filterExtras",condition:function(e){return!(e.storePageChanged||e.storePageMissing)}},{active:!1,type:"filterExtras",label:"Store page unavailable",key:"store-page-unavailable",group:"filterExtras",condition:function(e){return e.storePageChanged||e.storePageMissing},tippy:"Store page has been removed or changed after it was added."},{type:"divider",key:"divider1.4",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"Favorites: include",key:"favorites",excludeFromWishlist:!0,group:"filterExtras",condition:function(e){return e.favorite}},{active:!1,type:"filterExtras",label:"Favorites: exclude",key:"favorites-not",excludeFromWishlist:!0,group:"filterExtras",condition:function(e){return!e.favorite}},{type:"divider",key:"divider1.4.1",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"My rating: include",excludeFromWishlist:!0,key:"my-rating",group:"filterExtras",condition:function(e){return e.myRating}},{active:!1,type:"filterExtras",label:"My rating: exclude",excludeFromWishlist:!0,key:"my-rating-no",group:"filterExtras",condition:function(e){return!e.myRating}},{type:"divider",key:"divider1.4.1",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"New books",excludeFromWishlist:!0,key:"new-books",group:"filterExtras",condition:function(e){return e.isNew},tippy:"Most recent additions."},{type:"divider",key:"divider2.0"},{active:!1,type:"filterExtras",label:"Full cast: include",key:"full-cast-include",group:"filterExtras",condition:function(e){return s._.find(e.narrators,(function(e){return e.name.match("full cast")}))}},{active:!1,type:"filterExtras",label:"Full cast: exclude",key:"full-cast-exclude",group:"filterExtras",condition:function(e){return!s._.find(e.narrators,(function(e){return e.name.match("full cast")}))}},{type:"divider",key:"divider1.9"},{active:!1,type:"filterExtras",label:"Whisperync: owned",key:"whispersync-owned",group:"filterExtras",condition:function(e){return"owned"===e.whispersync}},{active:!1,type:"filterExtras",label:"Whispersync: available",key:"whispersync-available",group:"filterExtras",condition:function(e){return"available"===e.whispersync}},{active:!1,type:"filterExtras",label:"Whispersync: unavailable",key:"whispersync-false",group:"filterExtras",tippy:"Either unavailable or unkown...",condition:function(e){return!e.whispersync}},{type:"divider",key:"divider2.2"},{active:!1,type:"filterExtras",label:"Length",key:"length",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"h",rangeMin:function(){return 0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=s._.maxBy(t,(function(t){return e.timeStringToSeconds(t.length)}));return r?Math.ceil(e.timeStringToSeconds(r.length)/3600):0},condition:function(t){if(t.length){var r=this.range[0],i=this.range[1],o=e.timeStringToSeconds(t.length)/3600;return o>=r&&o<=i}}},{type:"divider",key:"divider2.1"},{active:!1,type:"filterExtras",label:"Narrators",key:"narrators",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var t=e.$store.getters.collectionSource,r=s._.maxBy(t,(function(e){var t=s._.filter(e.narrators,(function(e){return e.name&&!e.name.match("full cast")}));return!t.length&&e.narrators&&e.narrators.length&&(t=e.narrators),e.narrators?e.narrators.length:0}));return r?r.narrators.length:0},condition:function(e){if(e.narrators){var t=s._.find(e.narrators,(function(e){return e.name.match("full cast")})),r=this.range[0],i=this.range[1],o=e.narrators.length;return t&&1===o?(o=i)>=r&&o<=i:o>=r&&o<=i}}},{type:"divider",key:"divider3",excludeFromWishlist:!0},{active:!1,type:"filterExtras",excludeFromWishlist:!0,label:"books in series",key:"booksinseries",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",tippy:"Number of owned books in series",rangeMin:function(){return 1},rangeMax:function(){var t=s._.filter(e.$store.getters.collectionSource,"series"),r=1;return s._.each(t,(function(t){var i=s._.maxBy(t.series,(function(t){var r=s._.find(e.$store.state.library.series,{asin:t.asin});if(r&&r.books)return r.books.length}));if(i){var o=s._.find(e.$store.state.library.series,{asin:i.asin}).books.length;r<o&&(r=o)}})),r},condition:function(t){if(t.series){var r=this.range[0],i=this.range[1],o=!1;return s._.each(t.series,(function(t){var n=s._.find(e.$store.state.library.series,{asin:t.asin});if(n&&n.books.length>=r&&n.books.length<=i)return o=!0,!1})),o}}},{type:"divider",key:"divider4"},{active:!1,type:"filterExtras",label:"Average rating",key:"rating",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=s._.minBy(t,(function(e){if(e.rating)return parseFloat(e.rating)}));return r?parseFloat(r.rating):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=s._.maxBy(t,(function(e){if(e.rating)return parseFloat(e.rating)}));return r?parseFloat(r.rating):0},condition:function(e){if(e.rating){var t=this.range[0],r=this.range[1],i=parseFloat(e.rating);return i>=t&&i<=r}},rangeInterval:.1},{type:"divider",key:"divider5.2"},{active:!1,type:"filterExtras",label:"Ratings",key:"number-of-ratings",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=s._.minBy(t,(function(e){if(e.ratings)return parseFloat(e.ratings)}));return r?r.ratings:0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=s._.maxBy(t,(function(e){if(e.ratings)return parseFloat(e.ratings)}));return r?r.ratings:0},condition:function(e){if(e.ratings){var t=this.range[0],r=this.range[1],i=parseFloat(e.ratings);return i>=t&&i<=r}}},{type:"divider",key:"divider5",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"My rating",excludeFromWishlist:!0,key:"myrating",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=s._.minBy(t,(function(e){if(e.myRating)return parseFloat(e.myRating)}));return r?parseFloat(r.myRating):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=s._.maxBy(t,(function(e){if(e.myRating)return parseFloat(e.myRating)}));return r?parseFloat(r.myRating):0},condition:function(e){if(e.myRating){var t=this.range[0],r=this.range[1],i=parseFloat(e.myRating);return i>=t&&i<=r}}},{type:"divider",key:"divider5.1"},{active:!1,type:"filterExtras",label:"Added",key:"added",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=s._.minBy(t,(function(e){if(e.added)return parseFloat(e.added)}));return r?parseFloat(r.added):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=s._.maxBy(t,(function(e){if(e.added)return parseFloat(e.added)}));return r?parseFloat(r.added):0},condition:function(e){if(e.added){var t=this.range[0],r=this.range[1],i=parseFloat(e.added);return i>=t&&i<=r}},rangeInterval:1,tippy:"Low number = old book <br> High number = new book <br><br> For example: if you pick the range 1-10 you get 10 of the oldest books based on when they were added."},{type:"divider",key:"divider8.8"},{active:!1,type:"filterExtras",label:"Authors",key:"authors-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.authors&&r.push(s._.map(e.authors,"name"))})),r=s._.union(s._.flatten(r)).sort()},value:[],condition:function(e){if(e.authors){var t=s._.map(e.authors,"name"),r=this.value;if(r.length>0){var i=!1;return s._.each(r,(function(e){if(s._.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider8.9"},{active:!1,type:"filterExtras",label:"Narrators",key:"narrators-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.narrators&&r.push(s._.map(e.narrators,"name"))})),r=s._.union(s._.flatten(r)).sort()},value:[],condition:function(e){if(e.narrators){var t=s._.map(e.narrators,"name"),r=this.value;if(r.length>0){var i=!1;return s._.each(r,(function(e){if(s._.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.0"},{active:!1,type:"filterExtras",label:"Tags",key:"tags",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.tags&&r.push(s._.map(e.tags,"name"))})),r=s._.union(s._.flatten(r)).sort()},value:[],condition:function(e){if(e.tags){var t=s._.map(e.tags,"name"),r=this.value;if(r.length>0){var i=!1;return s._.each(r,(function(e){if(s._.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.1"},{active:!1,type:"filterExtras",label:"Language",key:"language",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.language&&r.push(e.language)})),r=s._.union(r).sort()},value:[],condition:function(e){if(e.language){var t=this.value;return s._.includes(t,e.language)}}},{type:"divider",key:"divider9.4"},{active:!1,type:"filterExtras",label:"Series by name",key:"series-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.series&&r.push(s._.map(e.series,"name"))})),r=s._.union(s._.flatten(r)).sort()},value:[],condition:function(e){if(e.series){var t=s._.map(e.series,"name"),r=this.value;if(r.length>0){var i=!1;return s._.each(r,(function(e){if(s._.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.5"},{active:!1,type:"filterExtras",label:"Format",key:"format",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.format&&r.push(e.format)})),r=s._.union(r).sort()},value:[],condition:function(e){if(e.format)return!!e.format&&s._.includes(this.value,e.format)}},{type:"divider",key:"divider9.6"},{active:!1,type:"filterExtras",label:"Publishers",key:"publishers-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return s._.each(e.$store.getters.collectionSource,(function(e){e.publishers&&r.push(s._.map(e.publishers,"name"))})),r=s._.union(s._.flatten(r)).sort()},value:[],condition:function(e){if(e.publishers){var t=s._.map(e.publishers,"name"),r=this.value;if(r.length>0){var i=!1;return s._.each(r,(function(e){if(s._.includes(t,e))return i=!0,!1})),i}}}}],sort:[{active:!1,sticky:!0,key:"sortValues",label:"Show sort values",type:"sortExtras",tippy:"Shows the active sorter's value on top of the cover in the grid view."},{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Sorting is ignored and the order is randomized."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top'},{active:!0,current:!1,key:"title",label:"Title",type:"sort"},{active:!0,current:!1,key:"authors.name",label:"Author",type:"sort"},{active:!0,current:!1,key:"narrators.name",label:"Narrator",type:"sort"},{active:!0,current:!1,key:"narratorsNumber",label:"Number of narrators",type:"sort"},{active:!1,current:!1,key:"length",label:"Length",type:"sort"},{active:!0,current:!1,key:"series",label:"Series",type:"sort",tippy:"Sorts books by the series name alphabetically."},{type:"divider",key:"divider2"},{active:!1,current:!1,key:"releaseDate",label:"Release date",type:"sort"},{active:!1,current:!1,key:"rating",label:"Average rating",type:"sort"},{active:!1,current:!1,key:"ratings",label:"Number of ratings",type:"sort"},{active:!1,current:!1,key:"myRating",label:"My rating",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"publishers.name",label:"Publishers",type:"sort"},{type:"divider",key:"divider3"},{active:!1,current:!1,key:"progress",label:"Progress",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"favorite",label:"Favorite",type:"sort"},{active:!0,current:!1,key:"categories",label:"Categories",type:"sort"},{active:!0,current:!1,key:"tags",label:"Tags",type:"sort"},{active:!1,current:!1,key:"isNew",label:"New books",type:"sort",excludeFromWishlist:!0},{type:"divider",key:"divider4"},{active:!0,current:!1,key:"language",label:"Language",type:"sort"},{active:!0,current:!1,key:"format",label:"Format",type:"sort"},{active:!1,current:!1,key:"fromPlusCatalog",label:"From plus catalog",type:"sort"},{active:!1,current:!1,key:"unavailable",label:"Plus catalog: Unavailable",type:"sort"},{active:!1,current:!1,key:"downloaded",label:"Downloaded",type:"sort",excludeFromWishlist:!0},{type:"divider",key:"divider5"},{active:!1,current:!1,key:"storePageMissing",label:"Store page missing",type:"sort",tippy:"The original store page could not be found. There may be a new store page that replaced it."},{active:!1,current:!1,key:"storePageChanged",label:"Store page changed",type:"sort",tippy:"There is a store page that exists, but it is for a different version of the book."},{active:!1,current:!1,key:"isbn10",label:"Isbn 10",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"isbn13",label:"Isbn 13",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"bookNumbers",label:"Book Numbers",type:"sort",tippy:'<strong>This is only a simple number sort.</strong> <br> If you want the correct series order, as listed in Audible, check the series page in the top menu or the "my books in the series" button in book details. <br><br>Click any book cover (or row) to reveal book details. <br><br> The infinite symbol (∞) means the book is in a series but does not have a number.'},{active:!1,current:!1,key:"whispersync",label:"Whispersync",type:"sort"}]};this.$setListRenderingOpts(t)}}};var y=r(90411),v=r.n(y),m=r(79928);v().polyfill();const b={name:"aleGallery",components:{aleSearch:i.Z,aleGridView:function(){return r.e(577).then(r.bind(r,20868))},aleListView:function(){return r.e(901).then(r.bind(r,52443))}},mixins:[h.Z,n,a,l,c,u,d,p,f.Z,g,m.Z],data:function(){return{collectionSource:"library.books",pageTitle:null,pageSubTitle:null,scrollContainer:null,collapseView:null,realLength:0,prepsCompleted:!1}},beforeCreate:function(){this.$route.query.view&&this.$store.commit("stickyProp",{key:"viewMode",value:this.$route.query.view})},created:function(){this.updateListRenderingOptions(),this.prepCategoriesSubPage(),this.prepCollectionsSubPage(),this.prepSeriesSubPage(),this.prepNarratorsSubPage(),this.prepAuthorsSubPage(),this.prepPublishersSubPage(),this.prepWishlist(),this.prepsCompleted=!0},watch:{"$store.getters.collection":function(){this.$store.commit("chunkCollectionReset"),this.$store.commit("chunkCollectionAdd")}},methods:{childrenMounted:function(){this.$nextTick((function(){var e=this.$route.query.y?parseFloat(this.$route.query.y):0;if(this.$route.query.book){var t=document.querySelector(".ale-books"),r=(t.offsetTop,"grid"===this.$store.state.sticky.viewMode),i=r?t.querySelector(".ale-book").getBoundingClientRect().height:t.querySelector("table tbody .ale-row").getBoundingClientRect().height,o=r?t.getBoundingClientRect().width:t.getBoundingClientRect().height,n=Math.floor(o/i)||1,a=_.findIndex(this.$store.getters.collection,{asin:this.$route.query.book}),s=(Math.ceil((a+1)/n),(Math.floor(a/n)+1)*n);this.$store.commit("chunkCollectionAdd",{chunkDistance:s+this.$store.state.chunkDistance}),this.$nextTick((function(){this.$root.$emit("book-clicked",{book:this.$store.getters.collection[a]})}))}else if(e){var l=document.querySelector(".ale-books"),c=l.offsetTop,u="grid"===this.$store.state.sticky.viewMode,d=u?l.querySelector(".ale-book").getBoundingClientRect().height:l.querySelector("table tbody .ale-row").getBoundingClientRect().height,p=e+window.innerHeight-c,f=Math.ceil(p/d)||1,h=u?l.getBoundingClientRect().width:l.getBoundingClientRect().height,g=Math.floor(h/d)||1,y=u?f*g:g,v=Math.ceil(y/this.$store.state.chunkDistance)||1;v>1&&this.$store.commit("chunkCollectionAdd",{chunkDistance:this.$store.state.chunkDistance*v}),this.$route.query.book||this.$nextTick((function(){"grid"===this.$store.state.sticky.viewMode?scroll({top:e}):document.querySelector(".list-view-inner-wrap").scroll({top:e})}))}}))},expandView:function(){this.$updateQuery({query:"book",value:!1,history:!0}),this.$root.$emit("refresh-page")},gridViewMounted:function(){this.scrollContainer=window,this.scrollContainer.addEventListener("scroll",this.addDomItems),this.childrenMounted()},listViewMounted:function(){this.scrollContainer=document.querySelector(".list-view-inner-wrap"),this.scrollContainer.addEventListener("scroll",this.addDomItems),this.childrenMounted()},viewsBeforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.addDomItems)},addDomItems:_.throttle((function(e){var t="grid"===this.$store.state.sticky.viewMode?550+window.innerHeight/2:this.scrollContainer.clientHeight/3,r="grid"===this.$store.state.sticky.viewMode?document.documentElement:this.scrollContainer,i=r.scrollTop+(r.innerHeight||r.clientHeight)+t>=r.scrollHeight;this.$updateQuery({query:"y",value:r.scrollTop}),i&&this.$store.commit("chunkCollectionAdd")}),500,{leading:!1,trailing:!0})}},k=(0,r(40810).Z)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"ale-gallery","data-audio-player-visible":e.$store.state.audioPlayerVisible}},[e.prepsCompleted?r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}):e._e(),e._v(" "),e.collapseView?r("div",{staticClass:"collection-expanded-btn",on:{click:e.expandView}},[r("div",[r("span",[e._v("Expand view")]),e._v(" "),e.realLength?r("span",[e._v("( "+e._s(e.realLength)+" )")]):e._e(),e._v(" "),r("font-awesome",{attrs:{icon:["fas","unlock-alt"]}})],1)]):e._e(),e._v(" "),e.$store.getters.collection&&e.$store.getters.collection.length>0?r("div",["grid"===e.$store.state.sticky.viewMode?r("ale-grid-view",{on:{"hook:mounted":e.gridViewMounted,"hook-beforeDestroy":e.viewsBeforeDestroy}}):"spreadsheet"===e.$store.state.sticky.viewMode?r("ale-list-view",{on:{"hook:mounted":e.listViewMounted,"hook-beforeDestroy":e.viewsBeforeDestroy}}):e._e()],1):r("div",{attrs:{id:"nothing-here-404"}},[r("h3",[e._v("404: There's nothing here")])])],1)}),[],!1,null,"12f55642",null).exports}}]);