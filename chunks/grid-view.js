"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["grid-view"],{2103:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n}),s(5769),s(3238),s(1418),s(7460),s(4078);var o=s(730);const r={name:"aleBooks",components:{bookDetails:function(){return s.e("book-Details").then(s.bind(s,2353))},book:function(){return s.e("book").then(s.bind(s,8249))},lazy:s(7758).Z},mixins:[o.Z],data:function(){return{}}},n=(0,s(810).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"booksWrapper",staticClass:"ale-books grid-view",class:{"sort-values-on":e.$store.getters.sortValues&&"bookNumbers"!==e.$store.getters.sortBy&&"seriesOrder"!==e.$store.getters.sortBy}},[e.$store.state.bookDetails.book&&e.$store.state.bookDetails.index>-1?s("book-details",{attrs:{booksWrapper:e.$refs.booksWrapper}}):e._e(),e._v(" "),e._l(e.$store.state.chunkCollection,(function(t,o){return t.asin?s("lazy",{key:"book:"+t.asin,staticClass:"ale-book",class:{"details-open":e.$store.state.bookDetails.book&&e.$store.state.bookDetails.book.asin===t.asin},attrs:{"data-asin":t.asin}},[s("book",{attrs:{book:t,index:o,sortValuesEnabled:e.$store.getters.sortValues}})],1):e._e()}))],2)}),[],!1,null,null,null).exports},7758:(e,t,s)=>{s.d(t,{Z:()=>r});const o={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},r=(0,s(810).Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);