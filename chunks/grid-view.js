(self.webpackChunk=self.webpackChunk||[]).push([[577],{34291:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const i={methods:{makeGoodReadsUrl:function(e){var t=(e=e||this.book).authors?e.authors[0].name+" - ":"",s=t+(e.titleShort||e.title);if(t&&s||s)return"https://www.goodreads.com/search?q="+encodeURIComponent(t&&s)}}}},46796:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i}),s(63238),s(40895);const i={methods:{makeFullUrl:function(e){var t=new Url(this.$store.state.urlOrigin+e);return t.query.ipRedirectOverride=!0,t.query.overrideBaseCountry=!0,t.toString()},makeUrl:function(e,t){var s=this.$store.state.urlOrigin,i="";switch(e){case"store":case"book":i=s+"/pd/"+encodeURIComponent(t);break;case"author":t.url&&(i=s+"/author/"+t.url);break;case"narrator":t.name&&(i=s+"/search?searchNarrator="+encodeURIComponent(t.name));break;case"series":t.asin&&(i=s+"/series/"+t.asin);break;case"publisher":t.name&&(i=s+"/search?searchProvider="+encodeURIComponent(t.name));break;case"categories":case"tags":t.url&&(i=s+"/cat/"+t.url)}if(i){var a=new Url(i);return a.query.ipRedirectOverride=!0,a.query.overrideBaseCountry=!0,a.toString()}return""}}}},59966:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i}),s(61013),s(5769),s(63238),s(14078),s(23938),s(95623),s(61514);const i={methods:{prepareKeys:function(e){var t=(e=e||{}).collection||_.get(this.$store.state,this.$store.state.collectionSource),s=_.union(_.flatten(_.map(t,(function(e){return _.keys(e)}))));s=s.concat(["isbn10","isbn13"]);var i=["added","title","series","bookNumbers","authors","narrators","categories","length","progress","releaseDate","publishers","myRating","rating","ratings","fromPlusCatalog","unavailable"];e.priorityKeys&&(i=e.priorityKeys);var a=_.remove(s,(function(e){return!_.includes(i,e)}));s=i.concat(a),i=null,a=null;var r=["titleShort","sample","blurb","url","summary","moreLikeThis","peopleAlsoBought","asin","cover","sample","cover","isbns"];return _.remove(s,(function(t){return!_.includes(e.removeKeys||r,t)}))}}}},74662:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i}),s(82759),s(40895),s(72482),s(911),s(63238);const i={methods:{slugify:function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s=new RegExp(t.split("").join("|"),"g");return encodeURIComponent(e.toString().toLowerCase().replace(/\s+/g,"-").replace(s,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},28233:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i}),s(61013);const i={methods:{stringifyArray:function(e,t,s){return t?_.map(e,t).join(s||", "):e.join(", ")}}}},20868:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r}),s(5769),s(63238),s(61418),s(17460),s(14078),s(95699);var i=s(74662);const a={name:"aleBooks",components:{bookDetails:function(){return s.e(661).then(s.bind(s,64477))},book:function(){return s.e(112).then(s.bind(s,31293))},lazy:s(65611).Z},mixins:[i.Z],data:function(){return{detailsBook:null,detailsBookIndex:-1}},created:function(){this.$root.$on("book-clicked",this.toggleBookDetails)},beforeDestroy:function(){this.$root.$off("book-clicked",this.toggleBookDetails)},methods:{toggleBookDetails:function(e){if(e.book){e.index||(e.index=_.findIndex(this.$store.getters.collection,{asin:e.book.asin}));var t=_.get(this.detailsBook,"asin")===e.book.asin;this.detailsBook=null,this.detailsBookIndex=e.index,this.$nextTick((function(){t?void 0!==this.$route.query&&this.$updateQuery({query:"book",value:null}):this.detailsBook=e.book}))}else this.detailsBook=null,this.detailsBookIndex=-1,void 0!==_.get(this.$route,"query.book")&&this.$updateQuery({query:"book",value:null})}}},r=(0,s(40810).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"booksWrapper",staticClass:"ale-books grid-view",class:{"sort-values-on":e.$store.getters.sortValues&&"bookNumbers"!==e.$store.getters.sortBy&&"seriesOrder"!==e.$store.getters.sortBy}},[e.detailsBook?s("book-details",{key:"details:"+e.detailsBook.asin,attrs:{book:e.detailsBook,booksWrapper:e.$refs.booksWrapper,index:e.detailsBookIndex},on:{"update:book":function(t){e.detailsBook=t}}}):e._e(),e._v(" "),e._l(e.$store.state.chunkCollection,(function(t,i){return t.asin?s("lazy",{key:"book:"+t.asin,staticClass:"ale-book",class:{"details-open":e.detailsBook&&e.detailsBook.asin===t.asin},attrs:{"data-asin":t.asin}},[s("book",{attrs:{book:t,index:i,sortValuesEnabled:e.$store.getters.sortValues}})],1):e._e()}))],2)}),[],!1,null,null,null).exports},65611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const i={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},a=(0,s(40810).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports},99133:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u}),s(61013),s(98010),s(52327),s(911),s(72482),s(1203),s(95623),s(61514),s(23938);var i=s(28233),a=s(26495),r=s(46796),o=s(59966),n=s(74662),c=s(34291);const l={name:"saveCsv",mixins:[i.Z,a.Z,r.Z,o.Z,n.Z,c.Z],mounted:function(){this.$store.state.sticky.exportSettingsCSVdataSources&&(this.settings.dataSourcesChecked=this.$store.state.sticky.exportSettingsCSVdataSources),this.$store.state.sticky.exportSettingsCSVcompatibility&&(this.settings.compatibilityChecked=this.$store.state.sticky.exportSettingsCSVcompatibility)},data:function(){return{settings:{dataSourcesChecked:"Library",dataSources:[{key:"Library"},{key:"Wishlist"},{key:"Current list",tippy:"What you see is what you get. For example, in a series sub page this option would export the entire series as listed, unless you modify it by adding filters or by searching. Will be exported with the active sorting. <strong>This data source only works on gallery pages with books.</strong>"}],compatibilityChecked:"Google Sheets",compatibility:[{key:"Google Sheets",tippy:"<strong>Google Sheets compatible formulas:</strong> <ul><li>Cover image + link to the store page in Audible</li><li>Sample audio icon + link</li><li>Web player icon + link</li><li>Goodreads search icon + link</li><li>Title has a link to store page in Audible</li></ul>"},{key:"Raw data",tippy:"Basically the same as the Google Sheets output but without the formulas. If you don't like formulas, this would also work just as well in Google Sheets."},{key:"Goodreads",tippy:"Removes any books that don't have ISBNs because Goodreads won't import without it. Each book is imported in bookshelves as per their status: not started (to-read), started(currently-reading), finished (read). The categories are divided into shelves as well."}]},bundling:!1}},computed:{googleSheets:function(){return"Google Sheets"===this.settings.compatibilityChecked},filename:function(){var e="";if("Library"===this.settings.dataSourcesChecked)e="library";else if("Wishlist"===this.settings.dataSourcesChecked)e="wishlist";else if("Current list"===this.settings.dataSourcesChecked){var t=this.$store.state.pageTitle?this.slugify(this.$store.state.pageTitle):null,s=this.$route.name;"gallery"===s&&(s="library"),e=t||s}return""!==e&&(e="-"+e),"ALE-spreadsheet"+e+".csv"},dataSource:function(){switch(this.settings.dataSourcesChecked){case"Library":return this.$store.state.library.books;case"Wishlist":return this.$store.state.library.wishlist;case"Current list":return this.$store.getters.collection}},saveBtnEnabled:function(){return"Current list"!==this.settings.dataSourcesChecked?("Wishlist"!==this.settings.dataSourcesChecked||"Goodreads"!==this.settings.compatibilityChecked)&&this.dataSource&&this.dataSource.length>0:!!this.$route.meta.gallery||void 0}},methods:{saveButtonClicked:function(){if(!this.bundling){var e=this;e.bundling=!0;var t=JSON.parse(JSON.stringify(this.dataSource)),s=this.prepKeys(t),i=Papa.unparse({fields:_.map(s,(function(e){return"isbn10"===e&&"isbn13"===e?e.toUpperCase():_.startCase(e)})),data:this.processData(s,t),quotes:!1,quoteChar:'"',escapeChar:'"',delimiter:",",header:!0,newline:"\r\n",skipEmptyLines:!1,columns:null});saveAs(new File([i],{type:"text/csv;charset=utf-8"}),this.filename),setTimeout((function(){e.bundling=!1}),1e3)}},inputChanged:function(e){this.$store.state.sticky.exportSettingsCSVdataSources!==this.settings.dataSourcesChecked&&this.$store.commit("stickyProp",{key:"exportSettingsCSVdataSources",value:this.settings.dataSourcesChecked}),this.$store.state.sticky.exportSettingsCSVcompatibility!==this.settings.compatibilityChecked&&this.$store.commit("stickyProp",{key:"exportSettingsCSVcompatibility",value:this.settings.compatibilityChecked})},processData:function(e,t){var s=this;return"Goodreads"===this.$store.state.sticky.exportSettingsCSVcompatibility?this.processDataGoodreads(e,t):_.map(t,(function(t){return _.map(e,(function(e){switch(e){case"authors":case"narrators":case"categories":case"publishers":case"tags":return s.stringifyArray(t[e],"name","categories"===e?" > ":null)||"";case"series":var i=t.series;return i&&(i=_.map(i,(function(e){var t=e.bookNumbers?" (book "+e.bookNumbers.join(", ")+")":"";return e.name+t})).join(", ")),i;case"bookNumbers":var a=_.filter(t.series,"bookNumbers");return a=_.map(a,"bookNumbers"),a=_.flatten(a),_.isEmpty(a)?a=null:_.isArray(a)&&(a=a.join(", ")),a=a||"∞",s.googleSheets&&(a="'"+a),t.series?a:"";case"isbn10":var r=_.find(t.isbns,{type:"ISBN_10"});return r?r.identifier:"";case"isbn13":var o=_.find(t.isbns,{type:"ISBN_13"});return o?o.identifier:"";case"peopleAlsoBought":return t.peopleAlsoBought?s.stringifyArray(t.peopleAlsoBought,"title"):"";case"summary":return t.summary?t.summary.replace(/(\n|\r)/g):"";case"cover":var n=t.cover?s.makeCoverUrl(t.cover):"";return t.cover&&n&&t.asin&&s.googleSheets&&(n=s.googleSheetsLinkifyImage(s.makeUrl("book",t.asin),s.makeCoverUrl(t.cover,75),0)),n;case"title":var c=t[e]||t.titleShort||"";return c&&t.asin&&s.googleSheets&&(c=s.googleSheetsLinkify(c,s.makeUrl("book",t.asin))),c;case"titleShort":var l=t[e]||t.title||"";return l&&t.asin&&s.googleSheets&&(l=s.googleSheetsLinkify(l,s.makeUrl("book",t.asin))),l;case"sample":var u=t[e]||"";return u&&s.googleSheets&&(u=s.googleSheetsLinkifyImage(u,"https://i.imgur.com/R2N6OTy.png",20)),u;case"searchInGoodreads":var d=s.makeGoodReadsUrl(t);return d&&s.googleSheets&&(d=s.googleSheetsLinkifyImage(d,"https://i.imgur.com/RPJRqNX.png",20)),d||"";case"webPlayer":var h=t.asin?"https://www.audible.com/webplayer?asin="+t.asin:"";return h&&s.googleSheets&&(h=s.googleSheetsLinkifyImage(h,"https://i.imgur.com/PdFLCdl.png",20)),h||"";case"parentCategory":return t.categories&&t.categories[0]?t.categories[0].name:"";case"childCategory":return t.categories&&t.categories[1]?t.categories[1].name:"";case"storePage":return t.asin?s.makeUrl("book",t.asin):"";case"asin":case"length":case"progress":case"myRating":case"rating":case"ratings":case"isbn":case"isbn10":case"isbn13":return"'"+(t[e]||"");default:return t[e]||""}}))}))},googleSheetsLinkify:function(e,t){return'=HYPERLINK("'+t+'";"'+e.replace(/\"/g,'""')+'")'},googleSheetsLinkifyImage:function(e,t,s){return'=HYPERLINK("'+e+'"; IMAGE("'+t+'"'+((s=s||0)?"; 4; "+s+"; "+s:"")+"))"},googleSheetsImagefy:function(e,t){return'=IMAGE("'+e+'"'+((t=t||0)?"; 4; "+t+"; "+t:"")+")"},processDataGoodreads:function(e,t){var s=this;return t=_.filter(t,(function(e){var t=_.find(e.isbns,{type:"ISBN_10"}),s=_.find(e.isbns,{type:"ISBN_13"});return t||s})),_.map(t,(function(t){return _.map(e,(function(e){switch(e){case"title":return t.title||t.titleShort||"";case"author":case"publisher":return t[e+"s"]&&s.stringifyArray([t[e+"s"][0]],"name")||"";case"myRating":return t.myRating||"";case"binding":return"Audible Audio";case"yearPublished":return t.releaseDate||"";case"dateAdded":var i=new Date,a=i.getTimezoneOffset();return(i=new Date(i.getTime()-60*a*1e3)).toISOString().split("T")[0];case"bookshelves":var r=[],o=!t.progress,n=!(!t.progress||t.progress.toLowerCase().match("finished")),c=!(!t.progress||!t.progress.toLowerCase().match("finished")),l=o?"to-read":n?"currently-reading":c?"read":"to-read";r.push(l),r.push("audible"),r.push("audiobook"),t.fromPlusCatalog&&r.push("audible-plus");var u=t.categories&&t.categories[0]?t.categories[0].name:null;u&&r.push(s.slugify(u));var d=t.categories&&t.categories[1]?t.categories[1].name:null;return d&&r.push(s.slugify(d)),r.join(" ");case"isbn":var h=_.find(t.isbns,{type:"ISBN_10"});return h?h.identifier:"";case"isbn13":var p=_.find(t.isbns,{type:"ISBN_13"});return p?p.identifier:"";default:return""}}))}))},prepKeys:function(e){var t=[];switch(this.settings.compatibilityChecked){case"Google Sheets":case"Raw data":var s=["added","cover","sample","webPlayer","searchInGoodreads","title","titleShort","series","bookNumbers","blurb","authors","narrators","tags","categories","parentCategory","childCategory","length","progress","releaseDate","publishers","myRating","rating","ratings","favorite","format","language","fromPlusCatalog","unavailable","downloaded","storePage"];if("Raw data"===this.settings.compatibilityChecked){var i=["sample","webPlayer","cover","searchInGoodreads"];s=(s=_.remove(s,(function(e){return!_.includes(i,e)}))).concat(i)}t=this.prepareKeys({collection:e||[],removeKeys:["isbns"],priorityKeys:s});break;case"Goodreads":t=["dateRead","myReview","title","bookshelves","author","publisher","myRating","binding","yearPublished","dateAdded","isbn","isbn13"]}return t}}},u=(0,s(40810).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"export-group"},[s("h2",[s("font-awesome",{attrs:{icon:["fas","file-csv"]}}),e._v(" CSV (Spreadsheet)")],1),e._v(" "),s("div",{staticClass:"description"},[e._v("\n    CSV is a generic file format for tabular data that is supported by any proper spreadsheet application. \n  ")]),e._v(" "),s("h3",[e._v("Data source:")]),e._v(" "),s("div",{staticClass:"options"},e._l(e.settings.dataSources,(function(t){return s("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{allowHTML:!0,maxWidth:500},expression:"{ allowHTML: true, maxWidth: 500 }"}],key:t.key,attrs:{content:t.tippy}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.dataSourcesChecked,expression:"settings.dataSourcesChecked"}],attrs:{type:"radio",name:"dataSources"},domProps:{value:t.key,checked:e._q(e.settings.dataSourcesChecked,t.key)},on:{change:[function(s){return e.$set(e.settings,"dataSourcesChecked",t.key)},e.inputChanged]}}),e._v(" "+e._s(t.key)+"\n    ")])})),0),e._v(" "),s("h3",[e._v("Compatibility:")]),e._v(" "),s("div",{staticClass:"options"},e._l(e.settings.compatibility,(function(t){return s("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{allowHTML:!0,maxWidth:500},expression:"{ allowHTML: true, maxWidth: 500 }"}],key:t.key,attrs:{content:t.tippy}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.compatibilityChecked,expression:"settings.compatibilityChecked"}],attrs:{type:"radio",name:"compatibility"},domProps:{value:t.key,checked:e._q(e.settings.compatibilityChecked,t.key)},on:{change:[function(s){return e.$set(e.settings,"compatibilityChecked",t.key)},e.inputChanged]}}),e._v(" "+e._s(t.key)+"\n    ")])})),0),e._v(" "),s("div",{staticClass:"buttons-footer"},[s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"save-btn",class:{saving:e.bundling},staticStyle:{"background-color":"#0e9d59","border-color":"#0e9d59 !important"},attrs:{disabled:e.bundling||!e.saveBtnEnabled},on:{click:e.saveButtonClicked}},[s("span",[e._v(e._s(e.filename))]),e._v(" "),s("font-awesome",{attrs:{icon:["fas","download"]}})],1),e._v(" "),s("div",[s("a",{staticClass:"github-btn",attrs:{target:"_blank",href:"https://joonaspaakko.gitbook.io/audible-library-extractor/gallery/csv-export#import-to-google-sheets"}},[s("span",[e._v("Google Sheets import")]),e._v(" "),s("font-awesome",{attrs:{icon:["fas","share-square"]}})],1),e._v(" "),s("a",{staticClass:"github-btn",attrs:{target:"_blank",href:"https://joonaspaakko.gitbook.io/audible-library-extractor/gallery/csv-export#import-to-goodreads"}},[s("span",[e._v("Goodreads import")]),e._v(" "),s("font-awesome",{attrs:{icon:["fab","goodreads"]}})],1)])])])])}),[],!1,null,null,null).exports},55458:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a}),s(52327),s(911),s(98010),s(95623),s(61514),s(61013);const i={name:"saveGallery",data:function(){return{files:["output-page.js","output-page.css","chunks/487.css","chunks/487.js","chunks/487.js.LICENSE.txt","chunks/564.js","chunks/564.js.LICENSE.txt","chunks/audio-player.css","chunks/audio-player.js","chunks/authors.css","chunks/authors.js","chunks/book-Details.css","chunks/book-Details.js","chunks/book.css","chunks/book.js","chunks/categories.css","chunks/categories.js","chunks/collections.css","chunks/collections.js","chunks/gallery.css","chunks/gallery.js","chunks/grid-view.css","chunks/grid-view.js","chunks/narrators.css","chunks/narrators.js","chunks/series.css","chunks/series.js","chunks/sort-values.css","chunks/sort-values.js","chunks/splide.js","chunks/splide.js.LICENSE.txt","chunks/spreadsheet-view.css","chunks/spreadsheet-view.js","chunks/view-mode-switcher.css","chunks/view-mode-switcher.js","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/app.webmanifest"],dataSources:[{checked:!0,disabled:!1,key:"Library"},{checked:!0,disabled:!1,key:"Collections",parent:"Library"},{checked:!0,disabled:!1,key:"Categories",parent:["Library","Wishlist"],subPage:!0},{checked:!0,disabled:!1,key:"Series",parent:["Library","Wishlist"],subPage:!0},{checked:!0,disabled:!1,key:"Authors",parent:["Library","Wishlist"],subPage:!0},{checked:!0,disabled:!1,key:"Narrators",parent:["Library","Wishlist"],subPage:!0},{checked:!0,disabled:!1,key:"Publishers",parent:["Library","Wishlist"],subPage:!0},{checked:!0,disabled:!1,key:"Wishlist"}],zip:null,cacheBuster:null,bundling:!1,saveBtnEnabled:!0}},beforeMount:function(){if(this.$store.state.sticky.exportSettingsGallery){var e=this;_.each(this.$store.state.sticky.exportSettingsGallery,(function(t){var s=_.find(e.dataSources,{key:t.key});s.checked=t.checked,s.disabled=t.disabled}))}_.find(this.dataSources,{key:"Library"}).disabled=!this.$store.state.library.books,_.find(this.dataSources,{key:"Wishlist"}).disabled=!this.$store.state.library.wishlist},beforeDestroy:function(){this.zip=null,this.cacheBuster=null},computed:{chunkSource:function(){return _.chunk(this.dataSources,2)}},methods:{peopleAlsoBoughtChunks:function(e,t){var s=this;_.each(t,(function(t){t.peopleAlsoBought&&t.asin&&(e.file("data/people-also-bought/"+t.asin+"."+s.cacheBuster+".js","window.peopleAlsoBoughtJSON = "+JSON.stringify(t.peopleAlsoBought)+";"),delete t.peopleAlsoBought)}))},saveButtonClicked:function(){if(!this.bundling){var e=this;e.bundling=!0,e.cacheBuster=this.runCachebuster();var t=this.excludeData(JSON.parse(JSON.stringify(this.$store.state.library)));e.zip=new JSZip;var s=e.zip;t.extras.cacheID=e.cacheBuster;var i={books:!!t.books,series:!!t.series,collections:!!t.collections,wishlist:!!t.wishlist,extras:t.extras},a='<!DOCTYPE html><html lang="en" class="theme-light standalone-gallery"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png"><link rel="manifest" href="favicons/app.webmanifest"><link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#f29a33"><link rel="shortcut icon" href="favicons/favicon.ico"><meta name="msapplication-TileColor" content="#222222"><meta name="msapplication-config" content="favicons/browserconfig.xml"><meta name="theme-color" content="#f29a33"><title>My Audible Library</title><script id="library-data" type="application/json">'+JSON.stringify(i)+'<\/script><link id="ale-css" rel="stylesheet" href="output-page.'+e.cacheBuster+'.css"></head><body><div id="audible-library-extractor" :data-version="'+this.$store.state.version+'"></div><script id="ale-js" src="output-page.'+e.cacheBuster+'.js"><\/script><noscript>This library requires javascript to work!</noscript></body></html>';s.file("index.html",a),t.books&&this.peopleAlsoBoughtChunks(s,t.books),t.wishlist&&this.peopleAlsoBoughtChunks(s,t.wishlist),t.books&&s.file("data/library."+e.cacheBuster+".js","window.libraryJSON = "+JSON.stringify(t.books)+";"),t.collections&&s.file("data/collections."+e.cacheBuster+".js","window.collectionsJSON = "+JSON.stringify(t.collections)+";"),t.series&&s.file("data/series."+e.cacheBuster+".js","window.seriesJSON = "+JSON.stringify(t.series)+";"),t.wishlist&&s.file("data/wishlist."+e.cacheBuster+".js","window.wishlistJSON = "+JSON.stringify(t.wishlist)+";");var r=this.files,o=0;_.each(r,(function(t){JSZipUtils.getBinaryContent(t,(function(i,a){if(i)throw i;"output-page.js"===t?t=t.replace(".js","."+e.cacheBuster+".js"):"output-page.css"===t&&(t=t.replace(".css","."+e.cacheBuster+".css")),s.file(t,a,{binary:!0}),++o==r.length&&s.generateAsync({type:"blob"}).then((function(t){setTimeout((function(){e.bundling=!1}),1e3),saveAs(t,"ALE-gallery.zip")}))}))}))}},sourceChecked:function(e,t){var s=this,i=_.filter(this.dataSources,(function(e){return _.isArray(e.parent)?_.includes(e.parent,t.key):e.parent===t.key}));_.each(i,(function(t){if(_.isArray(t.parent)){var i=_.map(t.parent,(function(e){return _.find(s.dataSources,{key:e})})),a=_.filter(i,(function(e){return e.checked&&!e.disabled})).length>0;t.disabled=!e.target.checked&&!a}else t.disabled=!e.target.checked}));var a=_.filter(this.dataSources,{checked:!0,disabled:!1});this.saveBtnEnabled=!!a.length,this.$store.commit("stickyProp",{key:"exportSettingsGallery",value:this.dataSources})},excludeData:function(e){return _.each(this.dataSources,(function(t){var s=t.key.toLowerCase(),i=!t.checked||t.disabled;switch(t.key){case"Library":i&&(delete e.books,delete e.series,delete e.collections);break;case"Series":i&&delete e.series;break;case"Collections":i&&delete e.collections;break;case"Wishlist":i&&delete e.wishlist}t.subPage&&(e.extras.subPageStates=e.extras.subPageStates||[],e.extras.subPageStates.push({key:s,enabled:!i}))})),e},runCachebuster:function(){return(new Date).getTime()}}},a=(0,s(40810).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"export-group"},[s("h2",[s("font-awesome",{attrs:{fas:"",icon:"th"}}),e._v(" Stand-alone gallery")],1),e._v(" "),s("div",{staticClass:"description"},[e._v("\n    This saves the gallery as a stand-alone web page that can be uploaded online and shared or viewed as is by unpacking the zip file and opening the index.html file in a web browser.\n  ")]),e._v(" "),s("h3",[e._v("Pages:")]),e._v(" "),s("div",{staticClass:"options opt-groups"},e._l(e.chunkSource,(function(t,i){return s("div",{key:i,staticClass:"opt-group"},e._l(t,(function(t){return s("label",{key:t.key},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(s){var i=t.checked,a=s.target,r=!!a.checked;if(Array.isArray(i)){var o=e._i(i,null);a.checked?o<0&&e.$set(t,"checked",i.concat([null])):o>-1&&e.$set(t,"checked",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(t,"checked",r)},function(s){return e.sourceChecked(s,t)}]}}),e._v(" "+e._s(t.key)+"\n      ")])})),0)})),0),e._v(" "),s("div",{staticClass:"buttons-footer"},[s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"save-btn",class:{saving:e.bundling},attrs:{disabled:e.bundling||!e.saveBtnEnabled},on:{click:e.saveButtonClicked}},[s("span",[e._v("ALE-gallery.zip")]),e._v(" "),e.bundling?s("font-awesome",{attrs:{icon:["fas","spinner"],spin:""}}):s("font-awesome",{attrs:{icon:["fas","download"]}})],1),e._v(" "),s("div",[s("a",{staticClass:"github-btn",attrs:{target:"_blank",href:"https://joonaspaakko.gitbook.io/audible-library-extractor/sharing/uploading-to-github"}},[s("span",[e._v("Upload instructions")]),e._v(" "),s("font-awesome",{attrs:{icon:["fab","github"]}})],1),e._v(" "),s("a",{staticClass:"github-btn",attrs:{target:"_blank",href:"https://joonaspaakko.gitbook.io/audible-library-extractor/sharing/updating-gallery-in-github"}},[s("span",[e._v("Update instructions")]),e._v(" "),s("font-awesome",{attrs:{icon:["fab","github"]}})],1)])])])])}),[],!1,null,null,null).exports}}]);