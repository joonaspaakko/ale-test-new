(self.webpackChunk=self.webpackChunk||[]).push([[241],{34291:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a={methods:{makeGoodReadsUrl:function(e){var t=(e=e||this.book).authors?e.authors[0].name+" - ":"",s=t+(e.titleShort||e.title);if(t&&s||s)return"https://www.goodreads.com/search?q="+encodeURIComponent(t&&s)}}}},46796:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a}),s(63238),s(40895);const a={methods:{makeFullUrl:function(e){var t=new Url(this.$store.state.urlOrigin+e);return t.query.ipRedirectOverride=!0,t.query.overrideBaseCountry=!0,t.toString()},makeUrl:function(e,t){var s=this.$store.state.urlOrigin,a="";switch(e){case"store":case"book":a=s+"/pd/"+encodeURIComponent(t);break;case"author":t.url&&(a=s+"/author/"+t.url);break;case"narrator":t.name&&(a=s+"/search?searchNarrator="+encodeURIComponent(t.name));break;case"series":t.asin&&(a=s+"/series/"+t.asin);break;case"publisher":t.name&&(a=s+"/search?searchProvider="+encodeURIComponent(t.name));break;case"categories":case"tags":t.url&&(a=s+"/cat/"+t.url)}if(a){var r=new Url(a);return r.query.ipRedirectOverride=!0,r.query.overrideBaseCountry=!0,r.toString()}return""}}}},59966:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a}),s(61013),s(5769),s(63238),s(14078),s(23938),s(95623),s(61514);const a={methods:{prepareKeys:function(e){var t=(e=e||{}).collection||_.get(this.$store.state,this.$store.state.collectionSource),s=_.union(_.flatten(_.map(t,(function(e){return _.keys(e)}))));s=s.concat(["isbn10","isbn13"]);var a=["added","title","series","bookNumbers","authors","narrators","categories","length","progress","releaseDate","publishers","myRating","rating","ratings","fromPlusCatalog","unavailable"];e.priorityKeys&&(a=e.priorityKeys);var r=_.remove(s,(function(e){return!_.includes(a,e)}));s=a.concat(r),a=null,r=null;var i=["titleShort","sample","blurb","url","summary","moreLikeThis","peopleAlsoBought","asin","cover","sample","cover","isbns"];return _.remove(s,(function(t){return!_.includes(e.removeKeys||i,t)}))}}}},74662:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a}),s(82759),s(40895),s(72482),s(911),s(63238);const a={methods:{slugify:function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s=new RegExp(t.split("").join("|"),"g");return encodeURIComponent(e.toString().toLowerCase().replace(/\s+/g,"-").replace(s,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},28233:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a}),s(61013);const a={methods:{stringifyArray:function(e,t,s){return t?_.map(e,t).join(s||", "):e.join(", ")}}}},99133:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u}),s(61013),s(98010),s(52327),s(911),s(72482),s(1203),s(95623),s(61514),s(23938);var a=s(28233),r=s(26495),i=s(46796),o=s(59966),n=s(74662),l=s(34291);const c={name:"saveCsv",mixins:[a.Z,r.Z,i.Z,o.Z,n.Z,l.Z],mounted:function(){this.$store.state.sticky.exportSettingsCSVdataSources&&(this.settings.dataSourcesChecked=this.$store.state.sticky.exportSettingsCSVdataSources),this.$store.state.sticky.exportSettingsCSVcompatibility&&(this.settings.compatibilityChecked=this.$store.state.sticky.exportSettingsCSVcompatibility)},data:function(){return{settings:{dataSourcesChecked:"Library",dataSources:[{key:"Library"},{key:"Wishlist"},{key:"Current list",tippy:"What you see is what you get. For example, in a series sub page this option would export the entire series as listed, unless you modify it by adding filters or by searching. Will be exported with the active sorting. <strong>This data source only works on gallery pages with books.</strong>"}],compatibilityChecked:"Google Sheets",compatibility:[{key:"Google Sheets",tippy:"<strong>Google Sheets compatible formulas:</strong> <ul><li>Cover image + link to the store page in Audible</li><li>Sample audio icon + link</li><li>Web player icon + link</li><li>Goodreads search icon + link</li><li>Title has a link to store page in Audible</li></ul>"},{key:"Raw data",tippy:"Basically the same as the Google Sheets output but without the formulas. If you don't like formulas, this would also work just as well in Google Sheets."},{key:"Goodreads",tippy:"Removes any books that don't have ISBNs because Goodreads won't import without it. Each book is imported in bookshelves as per their status: not started (to-read), started(currently-reading), finished (read). The categories are divided into shelves as well."}]},bundling:!1}},computed:{googleSheets:function(){return"Google Sheets"===this.settings.compatibilityChecked},filename:function(){var e="";if("Library"===this.settings.dataSourcesChecked)e="library";else if("Wishlist"===this.settings.dataSourcesChecked)e="wishlist";else if("Current list"===this.settings.dataSourcesChecked){var t=this.$store.state.pageTitle?this.slugify(this.$store.state.pageTitle):null,s=this.$route.name;"gallery"===s&&(s="library"),e=t||s}return""!==e&&(e="-"+e),"ALE-spreadsheet"+e+".csv"},dataSource:function(){switch(this.settings.dataSourcesChecked){case"Library":return this.$store.state.library.books;case"Wishlist":return this.$store.state.library.wishlist;case"Current list":return this.$store.getters.collection}},saveBtnEnabled:function(){return"Current list"!==this.settings.dataSourcesChecked?("Wishlist"!==this.settings.dataSourcesChecked||"Goodreads"!==this.settings.compatibilityChecked)&&this.dataSource&&this.dataSource.length>0:!!this.$route.meta.gallery||void 0}},methods:{saveButtonClicked:function(){if(!this.bundling){var e=this;e.bundling=!0;var t=JSON.parse(JSON.stringify(this.dataSource)),s=this.prepKeys(t),a=Papa.unparse({fields:_.map(s,(function(e){return"isbn10"===e&&"isbn13"===e?e.toUpperCase():_.startCase(e)})),data:this.processData(s,t),quotes:!1,quoteChar:'"',escapeChar:'"',delimiter:",",header:!0,newline:"\r\n",skipEmptyLines:!1,columns:null});saveAs(new File([a],{type:"text/csv;charset=utf-8"}),this.filename),setTimeout((function(){e.bundling=!1}),1e3)}},inputChanged:function(e){this.$store.state.sticky.exportSettingsCSVdataSources!==this.settings.dataSourcesChecked&&this.$store.commit("stickyProp",{key:"exportSettingsCSVdataSources",value:this.settings.dataSourcesChecked}),this.$store.state.sticky.exportSettingsCSVcompatibility!==this.settings.compatibilityChecked&&this.$store.commit("stickyProp",{key:"exportSettingsCSVcompatibility",value:this.settings.compatibilityChecked})},processData:function(e,t){var s=this;return"Goodreads"===this.$store.state.sticky.exportSettingsCSVcompatibility?this.processDataGoodreads(e,t):_.map(t,(function(t){return _.map(e,(function(e){switch(e){case"authors":case"narrators":case"categories":case"publishers":case"tags":return s.stringifyArray(t[e],"name","categories"===e?" > ":null)||"";case"series":var a=t.series;return a&&(a=_.map(a,(function(e){var t=e.bookNumbers?" (book "+e.bookNumbers.join(", ")+")":"";return e.name+t})).join(", ")),a;case"bookNumbers":var r=_.filter(t.series,"bookNumbers");return r=_.map(r,"bookNumbers"),r=_.flatten(r),_.isEmpty(r)?r=null:_.isArray(r)&&(r=r.join(", ")),r=r||"∞",s.googleSheets&&(r="'"+r),t.series?r:"";case"isbn10":var i=_.find(t.isbns,{type:"ISBN_10"});return i?i.identifier:"";case"isbn13":var o=_.find(t.isbns,{type:"ISBN_13"});return o?o.identifier:"";case"peopleAlsoBought":return t.peopleAlsoBought?s.stringifyArray(t.peopleAlsoBought,"title"):"";case"summary":return t.summary?t.summary.replace(/(\n|\r)/g):"";case"cover":var n=t.cover?s.makeCoverUrl(t.cover):"";return t.cover&&n&&t.asin&&s.googleSheets&&(n=s.googleSheetsLinkifyImage(s.makeUrl("book",t.asin),s.makeCoverUrl(t.cover,75),0)),n;case"title":var l=t[e]||t.titleShort||"";return l&&t.asin&&s.googleSheets&&(l=s.googleSheetsLinkify(l,s.makeUrl("book",t.asin))),l;case"titleShort":var c=t[e]||t.title||"";return c&&t.asin&&s.googleSheets&&(c=s.googleSheetsLinkify(c,s.makeUrl("book",t.asin))),c;case"sample":var u=t[e]||"";return u&&s.googleSheets&&(u=s.googleSheetsLinkifyImage(u,"https://i.imgur.com/R2N6OTy.png",20)),u;case"searchInGoodreads":var d=s.makeGoodReadsUrl(t);return d&&s.googleSheets&&(d=s.googleSheetsLinkifyImage(d,"https://i.imgur.com/RPJRqNX.png",20)),d||"";case"webPlayer":var h=t.asin?"https://www.audible.com/webplayer?asin="+t.asin:"";return h&&s.googleSheets&&(h=s.googleSheetsLinkifyImage(h,"https://i.imgur.com/PdFLCdl.png",20)),h||"";case"parentCategory":return t.categories&&t.categories[0]?t.categories[0].name:"";case"childCategory":return t.categories&&t.categories[1]?t.categories[1].name:"";case"storePage":return t.asin?s.makeUrl("book",t.asin):"";case"asin":case"length":case"progress":case"myRating":case"rating":case"ratings":case"isbn":case"isbn10":case"isbn13":return"'"+(t[e]||"");default:return t[e]||""}}))}))},googleSheetsLinkify:function(e,t){return'=HYPERLINK("'+t+'";"'+e.replace(/\"/g,'""')+'")'},googleSheetsLinkifyImage:function(e,t,s){return'=HYPERLINK("'+e+'"; IMAGE("'+t+'"'+((s=s||0)?"; 4; "+s+"; "+s:"")+"))"},googleSheetsImagefy:function(e,t){return'=IMAGE("'+e+'"'+((t=t||0)?"; 4; "+t+"; "+t:"")+")"},processDataGoodreads:function(e,t){var s=this;return t=_.filter(t,(function(e){var t=_.find(e.isbns,{type:"ISBN_10"}),s=_.find(e.isbns,{type:"ISBN_13"});return t||s})),_.map(t,(function(t){return _.map(e,(function(e){switch(e){case"title":return t.title||t.titleShort||"";case"author":case"publisher":return t[e+"s"]&&s.stringifyArray([t[e+"s"][0]],"name")||"";case"myRating":return t.myRating||"";case"binding":return"Audible Audio";case"yearPublished":return t.releaseDate||"";case"dateAdded":var a=new Date,r=a.getTimezoneOffset();return(a=new Date(a.getTime()-60*r*1e3)).toISOString().split("T")[0];case"bookshelves":var i=[],o=!t.progress,n=!(!t.progress||t.progress.toLowerCase().match("finished")),l=!(!t.progress||!t.progress.toLowerCase().match("finished")),c=o?"to-read":n?"currently-reading":l?"read":"to-read";i.push(c),i.push("audible"),i.push("audiobook"),t.fromPlusCatalog&&i.push("audible-plus");var u=t.categories&&t.categories[0]?t.categories[0].name:null;u&&i.push(s.slugify(u));var d=t.categories&&t.categories[1]?t.categories[1].name:null;return d&&i.push(s.slugify(d)),i.join(" ");case"isbn":var h=_.find(t.isbns,{type:"ISBN_10"});return h?h.identifier:"";case"isbn13":var g=_.find(t.isbns,{type:"ISBN_13"});return g?g.identifier:"";default:return""}}))}))},prepKeys:function(e){var t=[];switch(this.settings.compatibilityChecked){case"Google Sheets":case"Raw data":var s=["added","cover","sample","webPlayer","searchInGoodreads","title","titleShort","series","bookNumbers","blurb","authors","narrators","tags","categories","parentCategory","childCategory","length","progress","releaseDate","publishers","myRating","rating","ratings","favorite","format","language","fromPlusCatalog","unavailable","downloaded","storePage"];if("Raw data"===this.settings.compatibilityChecked){var a=["sample","webPlayer","cover","searchInGoodreads"];s=(s=_.remove(s,(function(e){return!_.includes(a,e)}))).concat(a)}t=this.prepareKeys({collection:e||[],removeKeys:["isbns"],priorityKeys:s});break;case"Goodreads":t=["dateRead","myReview","title","bookshelves","author","publisher","myRating","binding","yearPublished","dateAdded","isbn","isbn13"]}return t}}},u=(0,s(40810).Z)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"export-group"},[s("h2",[s("font-awesome",{attrs:{icon:["fas","file-csv"]}}),e._v(" CSV (Spreadsheet)")],1),e._v(" "),s("div",{staticClass:"description"},[e._v("\n    CSV is a generic file format for tabular data that is supported by any proper spreadsheet application. \n  ")]),e._v(" "),s("h3",[e._v("Data source:")]),e._v(" "),s("div",{staticClass:"options"},e._l(e.settings.dataSources,(function(t){return s("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{allowHTML:!0,maxWidth:500},expression:"{ allowHTML: true, maxWidth: 500 }"}],key:t.key,attrs:{content:t.tippy}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.dataSourcesChecked,expression:"settings.dataSourcesChecked"}],attrs:{type:"radio",name:"dataSources"},domProps:{value:t.key,checked:e._q(e.settings.dataSourcesChecked,t.key)},on:{change:[function(s){return e.$set(e.settings,"dataSourcesChecked",t.key)},e.inputChanged]}}),e._v(" "+e._s(t.key)+"\n    ")])})),0),e._v(" "),s("h3",[e._v("Compatibility:")]),e._v(" "),s("div",{staticClass:"options"},e._l(e.settings.compatibility,(function(t){return s("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{allowHTML:!0,maxWidth:500},expression:"{ allowHTML: true, maxWidth: 500 }"}],key:t.key,attrs:{content:t.tippy}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.compatibilityChecked,expression:"settings.compatibilityChecked"}],attrs:{type:"radio",name:"compatibility"},domProps:{value:t.key,checked:e._q(e.settings.compatibilityChecked,t.key)},on:{change:[function(s){return e.$set(e.settings,"compatibilityChecked",t.key)},e.inputChanged]}}),e._v(" "+e._s(t.key)+"\n    ")])})),0),e._v(" "),s("div",{staticClass:"buttons-footer"},[s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"save-btn",class:{saving:e.bundling},staticStyle:{"background-color":"#0e9d59","border-color":"#0e9d59 !important"},attrs:{disabled:e.bundling||!e.saveBtnEnabled},on:{click:e.saveButtonClicked}},[s("span",[e._v(e._s(e.filename))]),e._v(" "),s("font-awesome",{attrs:{icon:["fas","download"]}})],1),e._v(" "),s("div",[s("a",{staticClass:"github-btn",attrs:{target:"_blank",href:"https://joonaspaakko.gitbook.io/audible-library-extractor/gallery/csv-export#import-to-google-sheets"}},[s("span",[e._v("Google Sheets import")]),e._v(" "),s("font-awesome",{attrs:{icon:["fas","share-square"]}})],1),e._v(" "),s("a",{staticClass:"github-btn",attrs:{target:"_blank",href:"https://joonaspaakko.gitbook.io/audible-library-extractor/gallery/csv-export#import-to-goodreads"}},[s("span",[e._v("Goodreads import")]),e._v(" "),s("font-awesome",{attrs:{icon:["fab","goodreads"]}})],1)])])])])}),[],!1,null,null,null).exports}}]);