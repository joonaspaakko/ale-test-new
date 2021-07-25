(self.webpackChunk=self.webpackChunk||[]).push([[898],{91369:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l}),o(52327);var r=o(65611),n=o(11431),s=o(74662),a=o(79928);const i={name:"aleAuthors",components:{aleSearch:n.Z,lazy:r.Z},mixins:[s.Z,a.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Authors",pageSubTitle:null}},methods:{makeCollection:function(){var e=[],t=1;_.eachRight(this.subPageSource.collection,(function(o){o.authors&&_.each(o.authors,(function(r){var n=_.find(e,{url:r.url});if(n)return n.books.push(o.title||o.shortTitle),!1;var s={name:r.name,url:r.url,added:t,books:[o.title||o.shortTitle]};e.push(s),++t}))})),_.reverse(e),this.$store.commit("prop",{key:"pageCollection",value:e}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,o=this,r={scope:[{active:!0,key:"name",tippy:"Search authors by name"},{active:!0,key:"books",tippy:"Search authors by book titles"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(o.$store.state,o.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(o.$store.state,o.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],o=this.range[1];return e.books.length>=t&&e.books.length<=o}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by author's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(r)}}},l=(0,o(40810).Z)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?o("div",{staticClass:"box-layout-wrapper",attrs:{id:"ale-authors"}},[o("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),e._l(e.$store.getters.collection,(function(t,r){return t.name?o("lazy",{key:"authors:"+t.url,staticClass:"single-box",attrs:{"data-name":t.name}},[o("router-link",{attrs:{to:{name:"author",params:{author:t.url},query:{subPageSource:e.subPageSource.name}}}},[o("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books with this author."}},[e._v("\n        "+e._s(t.books.length)+"\n      ")]):e._e()])],1):e._e()}))],2):e._e()}),[],!1,null,"7f20e252",null).exports},65611:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const r={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},n=(0,o(40810).Z)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.tag?"td"===e.tag?o("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():o("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);