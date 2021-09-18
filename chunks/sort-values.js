(self.webpackChunk=self.webpackChunk||[]).push([[378],{4737:(s,t,r)=>{"use strict";r.d(t,{Z:()=>e}),r(266);const e={mixins:[r(5619).Z],methods:{progressbarWidth:function(s){if(s.progress){if("finished"===s.progress.toLowerCase().trim())return{width:"100%"};if(s.length){var t=this.timeStringToSeconds(s.progress),r=this.timeStringToSeconds(s.length);return{width:(t=r-t)/r*100+"%"}}return{width:0}}return{width:0}}}}},2863:(s,t,r)=>{"use strict";r.d(t,{Z:()=>e}),r(2410),r(3512),r(3238),r(895);const e={methods:{secondsToTimeString:function(s,t){var r=function(s,r){return t?s:("000"+s).slice(-1*r)},e=parseFloat(s).toFixed(3),i=Math.floor(e/60/60),o=Math.floor(e/60)%60,n=(Math.floor(e-60*o),e.slice(-3),(i.toString().length>1?i:r(i,2))+(t?"h ":".")),a=r(o,2)+(t?"m ":"");return t&&!i&&(n=""),n+a}}}},341:(s,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a}),r(2327),r(8010),r(1013),r(2077),r(911),r(1203),r(266);var e=r(5619),i=r(2863),o=r(4737);const n={name:"sortValues",props:["book"],mixins:[e.Z,i.Z,o.Z],data:function(){return{notAvailable:"&nbsp;"}},methods:{sortContents:function(){var s=this.$store.getters.sortBy;switch(s){case"bookNumbers":if(this.$route.params.series&&this.book.series){var t=_.find(this.book.series,{asin:this.$route.params.series});return t&&_.isArray(t.bookNumbers)?t.bookNumbers.join(", "):""}if(this.book.series){var r=_.filter(this.book.series,"bookNumbers");return r=_.map(r,"bookNumbers"),r=_.flatten(r),_.isEmpty(r)?r=null:_.isArray(r)&&(r=r.join(", ")),r||"∞"}return"";case"seriesOrder":if(this.book.series){var e=this.$route.params.series,i=_.find(this.book.series,{asin:e});if(i){var o=i.bookNumbers;return o?_.isArray(o)?o.join(", "):o:"∞"}return this.notAvailable}return this.notAvailable;case"authors.name":case"narrators.name":case"publishers.name":return _.get(this.book,s.replace(".name","[0].name"))||this.notAvailable;case"rating":if(this.book.ratings){var n=this.book.ratings?" <small>("+this.book.ratings+")</small>":"";return this.book[s]+n}return this.notAvailable;case"ratings":if(this.book.rating){var a=this.book.rating?" <small>("+this.book.rating+")</small>":"";return this.book[s]+a}return this.notAvailable;case"progress":var h=this.progressbarWidth(this.book);return this.progress(this.book)+'<div class="progress-bar"><div style="width: '+h.width+';"></div></div>';case"title":return this.book.titleShort||this.book.title||this.notAvailable;case"series":return this.book.series?_.map(this.book.series,"name").join(", "):this.notAvailable;case"categories":return this.book.categories?this.book.categories[0].name:this.notAvailable;case"isbn10":case"isbn13":if(!this.book.isbns)return this.notAvailable;if("isbn10"===s){var l=_.find(this.book.isbns,["type","ISBN_10"]);if(l)return l.identifier}else{if("isbn13"!==s)return this.notAvailable;var b=_.find(this.book.isbns,["type","ISBN_13"]);if(b)return b.identifier}break;case"narratorsNumber":if(this.book.narrators){var u=_.find(this.book.narrators,(function(s){return s.name.match("full cast")}));return u&&1===this.book.narrators.length?"​∞ full cast":this.book.narrators.length-(u?1:0)+(u?" full cast":"")}return this.notAvailable;default:return this.book[s]?this.book[s]:this.notAvailable}},progress:function(s){if(s.progress&&s.length){if("finished"===s.progress.toLowerCase().trim()){var t=this.timeStringToSeconds(s.length);return"<div>Finished ( "+this.secondsToTimeString(t,!0)+" )</div>"}var r=this.timeStringToSeconds(s.progress),e=this.timeStringToSeconds(s.length),i=e-r;return this.secondsToTimeString(i,!0)+" / "+this.secondsToTimeString(e,!0)}return s.progress?"<div>"+s.progress+" ("+this.notAvailable+")</div>":s.length?"<div>Length: "+s.length+"</div>":"<div>"+s.progress+"</div>"}}},a=(0,r(810).Z)(n,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{staticClass:"sort-values-container"},["favorite"!==s.$store.getters.sortBy?r("div",{class:"sort-"+s.$store.getters.sortBy,domProps:{innerHTML:s._s(s.sortContents())}}):r("div",{class:"sort-"+s.$store.getters.sortBy},[s.book.favorite?r("font-awesome",{attrs:{icon:["fas","heart"]}}):r("span",[s._v(" ")])],1)])}),[],!1,null,null,null).exports}}]);