(self.webpackChunk=self.webpackChunk||[]).push([[8],{3716:(e,t,r)=>{e.exports=r.p+"images/context-menu.png"},9984:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x}),r(5769),r(3238),r(1418),r(7460),r(4078),r(3512),r(5699),r(8010);var i=r(730);const o={mixins:[i.Z],methods:{prepCategoriesSubPage:function(e){if("category"===this.$route.name){var t=this,r={parent:this.$route.params.parent,child:this.$route.params.child,book:this.$route.params.query},i=_.filter(this.subPageSource.collection,(function(e){if(e.categories){var i=!!e.categories[0]&&t.slugify(e.categories[0].name),o=!!e.categories[1]&&t.slugify(e.categories[1].name);if(i&&o&&r.parent===i&&r.child===o)return!0;if(i&&r.parent===i&&!r.child)return!0}}));if(i&&(r.parent||r.child)){var o=i[0].categories[0]?i[0].categories[0].name:null,n=i[0].categories[1]?i[0].categories[1].name:null;o&&(this.pageTitle=o),n&&r.child&&(this.pageSubTitle=n)}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}};r(2327),r(5623),r(1514),r(5901),r(2189);const n={mixins:[i.Z],methods:{prepCollectionsSubPage:function(e){if("collection"===this.$route.name){var t=this.$route.params.collection,r=_.find(this.$store.state.library.collections,{id:t});if(r){var i=_.filter(this.$store.state.library.books,(function(e){return _.includes(r.books,e.asin)}));(r.title||r.description)&&(r.title&&(this.pageTitle=r.title),r.description&&(this.pageSubTitle=r.description)),this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}}};r(9217);const a={methods:{prepSeriesSubPage:function(){if("series"===this.$route.name){var e=this.$route.params.series,t=_.find(this.$store.state.library.series,{asin:e}),r=t&&t.books&&t.books.length>0&&"library"==this.subPageSource.name;r?this.$store.commit("addListRenderingOpts",{listName:"sort",option:{active:!1,current:!1,key:"seriesOrder",label:"Series order",type:"sort",tippy:"The infinite symbol (∞) means the book doesn't have a number"},activate:!this.$route.query.sort||"seriesOrder"===this.$route.query.sort,sortValues:!0,splice:3}):this.$store.commit("updateListRenderingOpts",{listName:"sort",key:"bookNumbers",active:!1,sortValues:!0});var i=_.filter(this.subPageSource.collection,(function(i){return r?_.includes(t.books,i.asin):_.find(i.series,{asin:e})}));if(i.length>0){var o=_.find(i[0].series,{asin:e});o&&(this.pageTitle=o.name),r||(this.pageSubTitle="Couldn't find series order: using number sort")}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}},s={mixins:[i.Z],methods:{prepNarratorsSubPage:function(){var e=this;if("narrator"===this.$route.name){var t=this.$route.params.narrator,r=_.filter(this.subPageSource.collection,(function(r){if(r.narrators)return _.find(r.narrators,(function(r){return e.slugify(r.name)===t}))}));if(r.length>0){var i=_.find(r[0].narrators,(function(r){return e.slugify(r.name)===t}));i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},l={methods:{prepAuthorsSubPage:function(){if("author"===this.$route.name){var e=this.$route.params.author,t=_.filter(this.subPageSource.collection,(function(t){if(t.authors)return _.find(t.authors,(function(t){return t.url===e}))}));if(t.length>0){var r=_.find(t[0].authors,(function(t){return t.url===e}));r&&(this.pageTitle=r.name)}this.$store.commit("prop",{key:"pageCollection",value:t}),this.collectionSource="pageCollection"}}}},c={mixins:[i.Z],methods:{prepPublishersSubPage:function(){var e=this;if("publisher"===this.$route.name){var t=this.$route.params.publisher,r=_.filter(this.subPageSource.collection,(function(r){if(r.publishers)return _.find(r.publishers,(function(r){return e.slugify(r.name)===t}))}));if(r.length>0){var i=_.find(r[0].publishers,(function(r){return e.slugify(r.name)===t}));i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},u={mixins:[i.Z],methods:{prepWishlist:function(e){"wishlist"===this.$route.name&&(this.$store.commit("prop",{key:"pageCollection",value:this.$store.state.library.wishlist}),this.collectionSource="pageCollection")}}};var d=r(5619);r(2077),r(1203),r(1013);const h={methods:{updateListRenderingOptions:function(){var e=this,t={scope:[{active:!0,key:"title",weight:5},{active:!0,key:"authors.name",weight:3},{active:!0,key:"narrators.name",weight:3},{active:!0,key:"series.name",weight:4},{active:!1,key:"categories.name",weight:1},{active:!1,key:"tags.name",weight:1},{active:!1,key:"publishers.name",weight:1},{active:!1,key:"blurb",weight:1},{active:!1,key:"summary",weight:1}],filter:[{active:!0,type:"filter",label:"Not started",key:"notStarted",condition:function(e){return!e.progress}},{active:!0,type:"filter",label:"Started",key:"started",condition:function(e){return!(!e.progress||e.progress.toLowerCase().match("finished"))},excludeFromWishlist:!0},{active:!0,type:"filter",label:"Finished",key:"finished",condition:function(e){return!(!e.progress||!e.progress.toLowerCase().match("finished"))},excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"In series",key:"inseries",group:"filterExtras",condition:function(e){return e.series}},{active:!1,type:"filterExtras",label:"Not in series",key:"not-inseries",group:"filterExtras",condition:function(e){return!e.series}},{type:"divider",key:"divider1.1"},{active:!1,type:"filterExtras",label:"Not from plus catalog",key:"not-from-plus-catalog",group:"filterExtras",condition:function(e){return!e.fromPlusCatalog}},{active:!1,type:"filterExtras",label:"Plus catalog: Available",key:"plus-catalog-available",group:"filterExtras",condition:function(e){return e.fromPlusCatalog&&!e.unavailable},tippy:"It is possible for this status to change after last gallery update..."},{active:!1,type:"filterExtras",label:"Plus catalog: Unavailable",excludeFromWishlist:!0,key:"plus-catalog-unavailable",group:"filterExtras",condition:function(e){return e.fromPlusCatalog&&e.unavailable},tippy:"Books that are from the plus catalog, but they are locked. Conditions: a book left the plus catalog or inactive membership."},{type:"divider",key:"divider1.3"},{active:!1,type:"filterExtras",label:"Store page available",key:"store-page-available",group:"filterExtras",condition:function(e){return!(e.storePageChanged||e.storePageMissing)}},{active:!1,type:"filterExtras",label:"Store page unavailable",key:"store-page-unavailable",group:"filterExtras",condition:function(e){return e.storePageChanged||e.storePageMissing},tippy:"Store page has been removed or changed after it was added."},{type:"divider",key:"divider1.4",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"Favorites: include",key:"favorites",excludeFromWishlist:!0,group:"filterExtras",condition:function(e){return e.favorite}},{active:!1,type:"filterExtras",label:"Favorites: exclude",key:"favorites-not",excludeFromWishlist:!0,group:"filterExtras",condition:function(e){return!e.favorite}},{type:"divider",key:"divider1.4.1",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"Books I have rated",excludeFromWishlist:!0,key:"rated-by-me",group:"filterExtras",condition:function(e){return e.myRating}},{active:!1,type:"filterExtras",label:"Books I haven't rated",excludeFromWishlist:!0,key:"not-rated-by-me",group:"filterExtras",condition:function(e){return!e.myRating}},{type:"divider",key:"divider1.4.2",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"New books",excludeFromWishlist:!0,key:"new-books",group:"filterExtras",condition:function(e){return e.isNew},tippy:"Most recent additions."},{type:"divider",key:"divider2.0"},{active:!1,type:"filterExtras",label:"Full cast: include",key:"full-cast-include",group:"filterExtras",condition:function(e){return _.find(e.narrators,(function(e){return e.name.match("full cast")}))}},{active:!1,type:"filterExtras",label:"Full cast: exclude",key:"full-cast-exclude",group:"filterExtras",condition:function(e){return!_.find(e.narrators,(function(e){return e.name.match("full cast")}))}},{type:"divider",key:"divider1.9"},{active:!1,excludeFromWishlist:!0,type:"filterExtras",label:"Whisperync: owned",key:"whispersync-owned",group:"filterExtras",condition:function(e){return"owned"===e.whispersync}},{active:!1,type:"filterExtras",label:"Whispersync: available",key:"whispersync-available",group:"filterExtras",condition:function(e){return"available"===e.whispersync}},{active:!1,type:"filterExtras",label:"Whispersync: unavailable",key:"whispersync-false",group:"filterExtras",tippy:"Either unavailable or unkown...",condition:function(e){return!e.whispersync}},{excludeFromWishlist:!0,type:"divider",key:"divider-archived"},{active:!1,excludeFromWishlist:!0,type:"filterExtras",label:"Archived",key:"archived",group:"filterExtras",condition:function(e){return e.archived}},{active:!1,excludeFromWishlist:!0,type:"filterExtras",label:"Not archived",key:"not-archived",group:"filterExtras",condition:function(e){return!e.archived}},{type:"divider",key:"divider2.2"},{active:!1,type:"filterExtras",label:"Length",key:"length",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"h",rangeMin:function(){return 0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(t){return e.timeStringToSeconds(t.length)}));return r?Math.ceil(e.timeStringToSeconds(r.length)/3600):0},condition:function(t){if(t.length){var r=this.range[0],i=this.range[1],o=e.timeStringToSeconds(t.length)/3600;return o>=r&&o<=i}}},{type:"divider",key:"divider2.1"},{active:!1,type:"filterExtras",label:"Narrators",key:"narrators",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){var t=_.filter(e.narrators,(function(e){return e.name&&!e.name.match("full cast")}));return!t.length&&e.narrators&&e.narrators.length&&(t=e.narrators),e.narrators?e.narrators.length:0}));return r?r.narrators.length:0},condition:function(e){if(e.narrators){var t=_.find(e.narrators,(function(e){return e.name.match("full cast")})),r=this.range[0],i=this.range[1],o=e.narrators.length;return t&&1===o?(o=i)>=r&&o<=i:o>=r&&o<=i}}},{type:"divider",key:"divider3",excludeFromWishlist:!0},{active:!1,type:"filterExtras",excludeFromWishlist:!0,label:"books in series",key:"booksinseries",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",tippy:"Number of owned books in series",rangeMin:function(){return 1},rangeMax:function(){var t=_.filter(e.$store.getters.collectionSource,"series"),r=1;return _.each(t,(function(t){var i=_.maxBy(t.series,(function(t){var r=_.find(e.$store.state.library.series,{asin:t.asin});if(r&&r.books)return r.books.length}));if(i){var o=_.find(e.$store.state.library.series,{asin:i.asin}).books.length;r<o&&(r=o)}})),r},condition:function(t){if(t.series){var r=this.range[0],i=this.range[1],o=!1;return _.each(t.series,(function(t){var n=_.find(e.$store.state.library.series,{asin:t.asin});if(n&&n.books.length>=r&&n.books.length<=i)return o=!0,!1})),o}}},{type:"divider",key:"divider4"},{active:!1,type:"filterExtras",label:"Average rating",key:"rating",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.rating)return parseFloat(e.rating)}));return r?parseFloat(r.rating):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.rating)return parseFloat(e.rating)}));return r?parseFloat(r.rating):0},condition:function(e){if(e.rating){var t=this.range[0],r=this.range[1],i=parseFloat(e.rating);return i>=t&&i<=r}},rangeInterval:.1},{type:"divider",key:"divider5.2"},{active:!1,type:"filterExtras",label:"Ratings",key:"number-of-ratings",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.ratings)return parseFloat(e.ratings)}));return r?r.ratings:0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.ratings)return parseFloat(e.ratings)}));return r?r.ratings:0},condition:function(e){if(e.ratings){var t=this.range[0],r=this.range[1],i=parseFloat(e.ratings);return i>=t&&i<=r}}},{type:"divider",key:"divider5",excludeFromWishlist:!0},{active:!1,type:"filterExtras",label:"My rating",excludeFromWishlist:!0,key:"myrating",group:"filterExtras",range:!0,rangeMinDist:0,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.myRating)return parseFloat(e.myRating)}));return r?parseFloat(r.myRating):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.myRating)return parseFloat(e.myRating)}));return r?parseFloat(r.myRating):0},condition:function(e){if(e.myRating){var t=this.range[0],r=this.range[1],i=parseFloat(e.myRating);return i>=t&&i<=r}},tooltipFormatter:function(e){switch(e){case 1:return e+" (Not for me)";case 2:return e+" (It’s okay)";case 3:return e+" (Pretty good)";case 4:return e+" (It’s great)";case 5:return e+" (I love it)"}}},{type:"divider",key:"divider5.1"},{active:!1,type:"filterExtras",label:"Added",key:"added",group:"filterExtras",range:!0,rangeMinDist:1,rangeSuffix:"",rangeMin:function(){var t=e.$store.getters.collectionSource,r=_.minBy(t,(function(e){if(e.added)return parseFloat(e.added)}));return r?parseFloat(r.added):0},rangeMax:function(){var t=e.$store.getters.collectionSource,r=_.maxBy(t,(function(e){if(e.added)return parseFloat(e.added)}));return r?parseFloat(r.added):0},condition:function(e){if(e.added){var t=this.range[0],r=this.range[1],i=parseFloat(e.added);return i>=t&&i<=r}},rangeInterval:1,tippy:"Low number = old book <br> High number = new book <br><br> For example: if you pick the range 1-10 you get 10 of the oldest books based on when they were added."},{type:"divider",key:"divider8.8"},{active:!1,type:"filterExtras",label:"Authors",key:"authors-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.authors&&r.push(_.map(e.authors,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.authors){var t=_.map(e.authors,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider8.9"},{active:!1,type:"filterExtras",label:"Narrators",key:"narrators-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.narrators&&r.push(_.map(e.narrators,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.narrators){var t=_.map(e.narrators,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.0"},{active:!1,type:"filterExtras",label:"Tags",key:"tags",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.tags&&r.push(_.map(e.tags,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.tags){var t=_.map(e.tags,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.1"},{active:!1,type:"filterExtras",label:"Language",key:"language",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.language&&r.push(e.language)})),r=_.union(r).sort()},value:[],condition:function(e){if(e.language){var t=this.value;return _.includes(t,e.language)}}},{type:"divider",key:"divider9.4"},{active:!1,type:"filterExtras",label:"Series by name",key:"series-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.series&&r.push(_.map(e.series,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.series){var t=_.map(e.series,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.5"},{active:!1,type:"filterExtras",label:"Format",key:"format",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.format&&r.push(e.format)})),r=_.union(r).sort()},value:[],condition:function(e){if(e.format)return!!e.format&&_.includes(this.value,e.format)}},{type:"divider",key:"divider9.6"},{active:!1,type:"filterExtras",label:"Publishers",key:"publishers-by-name",group:"filterExtras",dropdownOpts:function(t){var r=[];return _.each(e.$store.getters.collectionSource,(function(e){e.publishers&&r.push(_.map(e.publishers,"name"))})),r=_.union(_.flatten(r)).sort()},value:[],condition:function(e){if(e.publishers){var t=_.map(e.publishers,"name"),r=this.value;if(r.length>0){var i=!1;return _.each(r,(function(e){if(_.includes(t,e))return i=!0,!1})),i}}}},{type:"divider",key:"divider9.7"},{active:!1,type:"filterExtras",label:"Collections",key:"collections",group:"filterExtras",excludeFromWishlist:!0,dropdownOpts:function(t){if(e.$store.state.library.collections){var r=_.map(e.$store.state.library.collections,(function(e){return e.title}));return _.each(e.$store.state.library.collections,(function(e){e.publishers&&r.push(_.map(e.publishers,"name"))})),r.sort()}return[]},value:[],condition:function(t){var r=this.value;if(r.length&&e.$store.state.library.collections){var i=!1;if(_.each(e.$store.state.library.collections,(function(e){if(_.includes(e.books,t.asin))return i=e.title,!1})),i)return _.includes(r,i)}}}],sort:[{active:!1,sticky:!0,key:"sortValues",label:"Show sort values",type:"sortExtras",tippy:"Shows the active sorter's value on top of the cover in the grid view."},{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Sorting is ignored and the order is randomized."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top'},{active:!0,current:!1,key:"title",label:"Title",type:"sort"},{active:!0,current:!1,key:"authors.name",label:"Author",type:"sort"},{active:!0,current:!1,key:"narrators.name",label:"Narrator",type:"sort"},{active:!0,current:!1,key:"narratorsNumber",label:"Number of narrators",type:"sort"},{active:!1,current:!1,key:"length",label:"Length",type:"sort"},{active:!0,current:!1,key:"series",label:"Series",type:"sort",tippy:"Sorts books by the series name alphabetically."},{type:"divider",key:"divider2"},{active:!1,current:!1,key:"releaseDate",label:"Release date",type:"sort"},{active:!1,current:!1,key:"rating",label:"Average rating",type:"sort"},{active:!1,current:!1,key:"ratings",label:"Number of ratings",type:"sort"},{active:!1,current:!1,key:"myRating",label:"My rating",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"publishers.name",label:"Publishers",type:"sort"},{type:"divider",key:"divider3"},{active:!1,current:!1,key:"progress",label:"Progress",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"favorite",label:"Favorite",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"categories",label:"Categories",type:"sort"},{active:!0,current:!1,key:"tags.name",label:"Tags",type:"sort"},{active:!1,current:!1,key:"isNew",label:"New books",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"archived",label:"Archived",type:"sort",excludeFromWishlist:!0},{type:"divider",key:"divider4"},{active:!0,current:!1,key:"language",label:"Language",type:"sort"},{active:!0,current:!1,key:"format",label:"Format",type:"sort"},{active:!1,current:!1,key:"whispersync",label:"Whispersync",type:"sort"},{active:!1,current:!1,key:"fromPlusCatalog",label:"From plus catalog",type:"sort"},{active:!1,current:!1,key:"unavailable",label:"Plus catalog: Unavailable",type:"sort"},{active:!1,current:!1,key:"downloaded",label:"Downloaded",type:"sort",excludeFromWishlist:!0},{type:"divider",key:"divider5"},{active:!1,current:!1,key:"storePageMissing",label:"Store page missing",type:"sort",tippy:"The original store page could not be found. There may be a new store page that replaced it."},{active:!1,current:!1,key:"storePageChanged",label:"Store page changed",type:"sort",tippy:"There is a store page that exists, but it is for a different version of the book."},{active:!1,current:!1,key:"isbn10",label:"Isbn 10",type:"sort",excludeFromWishlist:!0},{active:!1,current:!1,key:"isbn13",label:"Isbn 13",type:"sort",excludeFromWishlist:!0},{active:!0,current:!1,key:"bookNumbers",label:"Book Numbers",type:"sort",tippy:'<strong>This is only a simple number sort.</strong> <br> If you want the correct series order, as listed in Audible, check the series page in the top menu or the "my books in the series" button in book details. <br><br>Click any book cover (or row) to reveal book details. <br><br> The infinite symbol (∞) means the book is in a series but does not have a number.'}]};this.removeArchived(t),this.$setListRenderingOpts(t)},removeArchived:function(e){if(this.$store.state.library.collections){var t=this.$store.state.library.collections,r=t?_.find(t,{id:"__ARCHIVE"}):null;if(!r||r.books.length<1){var i=["archived","not-archived"];_.remove(e.filter,(function(e){return"divider-archived"===e.key||_.includes(i,e.key)})),_.remove(e.sort,(function(e){return _.includes(i,e.key)}))}}}}};var p=r(411),g=r.n(p),f=r(3486),y=r(1272),v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v("You can open this gallery page any time from "),r("br"),e._v("the browser context menu (right-click) ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{attrs:{src:r(3716),alt:""}})])}];var m=r(810);const b=(0,m.Z)({name:"contextMenuReminder",methods:{hide:function(){this.$store.commit("stickyProp",{key:"contextMenuReminder",value:!1})}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reminder slide-in-blurred-top"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("font-awesome",{staticClass:"hide",attrs:{icon:["fas","times"]},on:{click:e.hide}})],1)}),v,!1,null,"487ce39b",null).exports;g().polyfill();const k={name:"aleGallery",components:{contextMenuReminder:b,aleSearch:y.Z,bookDetails:function(){return r.e(3).then(r.bind(r,6460))},aleGridView:function(){return r.e(10).then(r.bind(r,8034))},aleListView:function(){return r.e(18).then(r.bind(r,7179))}},mixins:[o,n,a,s,l,c,u,d.Z,h,f.Z],data:function(){return{loading:!0,collectionSource:"library.books",pageTitle:null,pageSubTitle:null,scrollContainer:null,collapseView:null,realLength:0,prepsCompleted:!1,errorMessage:!1,mountedChildren:!1}},beforeCreate:function(){this.$route.query.view&&this.$store.commit("stickyProp",{key:"viewMode",value:this.$route.query.view})},computed:{galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight+"px"}}},created:function(){"library"===this.$route.name?(this.pageTitle="Library",this.pageSubTitle=null):"wishlist"===this.$route.name&&(this.pageTitle="Wishlist",this.pageSubTitle=null),this.updateListRenderingOptions(),this.prepCategoriesSubPage(),this.prepCollectionsSubPage(),this.prepSeriesSubPage(),this.prepNarratorsSubPage(),this.prepAuthorsSubPage(),this.prepPublishersSubPage(),this.prepWishlist(),this.prepsCompleted=!0,this.$root.$on("book-clicked",this.toggleBookDetails)},mounted:function(){console.log("%cGALLERY.vue MOUNTED","background: #f41b1b; color: #fff; padding: 2px 5px; border-radius: 8px;"),this.$nextTick((function(){this.errorMessage=!0}))},beforeDestroy:function(){this.$root.$off("book-clicked",this.toggleBookDetails),console.log("DESTROYED"),this.errorMessage=!1},watch:{"$store.getters.collection":function(){this.$store.commit("chunkCollectionReset"),this.$store.commit("chunkCollectionAdd")},"$route.query.book":function(e){console.log("!this.$store.state.bookClicked",!this.$store.state.bookClicked),this.$store.state.bookClicked?this.$store.commit("prop",{key:"bookClicked",value:!1}):this.$updateQuery({query:"refresh",value:!0})}},methods:{childrenMounted:function(){console.log("%cCHILDREN MOUNTED YO","background: #003191; color: #fff; padding: 2px 5px; border-radius: 8px;"),this.$nextTick((function(){var e=this.$route.query.y?parseFloat(this.$route.query.y):0;if(this.$route.query.book){var t=document.querySelector(".ale-books"),r=(t.offsetTop,"grid"===this.$store.state.sticky.viewMode),i=r?t.querySelector(".ale-book").getBoundingClientRect().height:t.querySelector("table tbody .ale-row").getBoundingClientRect().height,o=r?t.getBoundingClientRect().width:t.getBoundingClientRect().height,n=Math.floor(o/i)||1,a=_.findIndex(this.$store.getters.collection,{asin:this.$route.query.book}),s=(Math.ceil((a+1)/n),(Math.floor(a/n)+1)*n);this.$store.commit("chunkCollectionAdd",{chunkDistance:s+this.$store.state.chunkDistance})}else if(e){var l=document.querySelector(".ale-books"),c=l.offsetTop,u="grid"===this.$store.state.sticky.viewMode,d=u?l.querySelector(".ale-book").getBoundingClientRect().height:l.querySelector("table tbody .ale-row").getBoundingClientRect().height,h=e+window.innerHeight-c,p=Math.ceil(h/d)||1,g=u?l.getBoundingClientRect().width:l.getBoundingClientRect().height,f=Math.floor(g/d)||1,y=u?p*f:f,v=Math.ceil(y/this.$store.state.chunkDistance)||1;v>1&&this.$store.commit("chunkCollectionAdd",{chunkDistance:this.$store.state.chunkDistance*v}),this.$nextTick((function(){"grid"===this.$store.state.sticky.viewMode?scroll({top:e}):document.querySelector(".list-view-inner-wrap").scroll({top:e})}))}this.$nextTick((function(){this.mountedChildren=!0}))}))},expandView:function(){this.$updateQuery({query:"book",value:!1,history:!0}),this.$root.$emit("refresh-page")},gridViewMounted:function(){this.scrollContainer=window,this.scrollContainer.removeEventListener("scroll",this.addDomItems),this.scrollContainer.addEventListener("scroll",this.addDomItems,{passive:!0}),this.childrenMounted()},listViewMounted:function(){this.scrollContainer=document.querySelector(".list-view-inner-wrap"),this.scrollContainer.removeEventListener("scroll",this.addDomItems),this.scrollContainer.addEventListener("scroll",this.addDomItems,{passive:!0}),this.childrenMounted()},viewsBeforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.addDomItems),this.mountedChildren=!1,console.log("DESTROYING VIEWS")},addDomItems:_.throttle((function(e){if(this.$store.state.lazyScroll){var t="grid"===this.$store.state.sticky.viewMode,r=t?550+window.innerHeight/2:this.scrollContainer.clientHeight/3,i=t?document.documentElement:this.scrollContainer;i.scrollTop+(i.innerHeight||i.clientHeight)+r>=i.scrollHeight&&this.$store.commit("chunkCollectionAdd"),this.$updateQuery({query:"y",value:i.scrollTop})}}),450,{leading:!1,trailing:!0}),searchMounted:function(){var e=this;this.$nextTick((function(){setTimeout((function(){e.loading=!1}),10)}))},toggleBookDetails:function(e){this.$store.commit("prop",{key:"bookClicked",value:!0});var t={asin:e},r={asin:_.get(this.$route,"query.book"),newValue:t.asin};t.asin===r.asin&&(r.newValue=null),this.$updateQuery({query:"book",value:r.newValue})}}},x=(0,m.Z)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"ale-gallery","data-audio-player-visible":e.$store.state.audioPlayerVisible}},[!e.$store.state.standalone&&e.$store.state.sticky.contextMenuReminder?r("context-menu-reminder"):e._e(),e._v(" "),e.prepsCompleted?r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle},on:{"hook:mounted":e.searchMounted}}):e._e(),e._v(" "),e.collapseView?r("div",{staticClass:"collection-expanded-btn",on:{click:e.expandView}},[r("div",[r("span",[e._v("Expand view")]),e._v(" "),e.realLength?r("span",[e._v("( "+e._s(e.realLength)+" )")]):e._e(),e._v(" "),r("font-awesome",{attrs:{icon:["fas","unlock-alt"]}})],1)]):e._e(),e._v(" "),!e.loading&&e.$store.getters.collection&&e.$store.getters.collection.length>0?r("div",[r("div",{style:e.galleryStyle},["grid"===e.$store.state.sticky.viewMode?r("ale-grid-view",{on:{"hook:mounted":e.gridViewMounted,"hook:beforeDestroy":e.viewsBeforeDestroy}}):"spreadsheet"===e.$store.state.sticky.viewMode?r("ale-list-view",{on:{"hook:mounted":e.listViewMounted,"hook:beforeDestroy":e.viewsBeforeDestroy}}):e._e(),e._v(" "),e.mountedChildren&&e.$route.query.book?r("book-details",{key:e.$route.query.book,attrs:{asin:e.$route.query.book}}):e._e()],1)]):e.errorMessage?r("div",{attrs:{id:"nothing-here-404"}},[e.$store.getters.searchIsActive&&!e.$store.state.searchCollection.length?r("h3",[e._v("Search: no results")]):r("h3",[e._v("404: There's nothing here")])]):e._e()],1)}),[],!1,null,"db1295ee",null).exports}}]);