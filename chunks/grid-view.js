(self.webpackChunk=self.webpackChunk||[]).push([[577],{20868:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i}),o(5769),o(63238),o(61418),o(17460),o(14078),o(95699);var s=o(74662);const n={name:"aleBooks",components:{bookDetails:function(){return o.e(661).then(o.bind(o,28792))},book:function(){return o.e(112).then(o.bind(o,55369))},lazy:o(65611).Z},mixins:[s.Z],data:function(){return{detailsBook:null,detailsBookIndex:-1}},created:function(){this.$root.$on("book-clicked",this.toggleBookDetails)},beforeDestroy:function(){this.$root.$off("book-clicked",this.toggleBookDetails)},methods:{toggleBookDetails:function(e){if(e.book){e.index||(e.index=_.findIndex(this.$store.getters.collection,{asin:e.book.asin}));var t=_.get(this.detailsBook,"asin")===e.book.asin;this.detailsBook=null,this.detailsBookIndex=e.index,this.$nextTick((function(){t?void 0!==this.$route.query&&this.$updateQuery({query:"book",value:null}):this.detailsBook=e.book}))}else this.detailsBook=null,this.detailsBookIndex=-1,void 0!==_.get(this.$route,"query.book")&&this.$updateQuery({query:"book",value:null})}}},i=(0,o(40810).Z)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"booksWrapper",staticClass:"ale-books grid-view",class:{"sort-values-on":e.$store.getters.sortValues&&"bookNumbers"!==e.$store.getters.sortBy&&"seriesOrder"!==e.$store.getters.sortBy}},[e.detailsBook?o("book-details",{key:"details:"+e.detailsBook.asin,attrs:{book:e.detailsBook,booksWrapper:e.$refs.booksWrapper,index:e.detailsBookIndex},on:{"update:book":function(t){e.detailsBook=t}}}):e._e(),e._v(" "),e._l(e.$store.state.chunkCollection,(function(t,s){return t.asin?o("lazy",{key:"book:"+t.asin,staticClass:"ale-book",class:{"details-open":e.detailsBook&&e.detailsBook.asin===t.asin},attrs:{"data-asin":t.asin}},[o("book",{attrs:{book:t,index:s,sortValuesEnabled:e.$store.getters.sortValues}})],1):e._e()}))],2)}),[],!1,null,null,null).exports},65611:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const s={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},n=(0,o(40810).Z)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.tag?"td"===e.tag?o("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():o("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);