(self.webpackChunk=self.webpackChunk||[]).push([[845],{454:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});const i={name:"audioPlayer",props:["showAudioPlayer","sampleData"],data:function(){return{title:null,audioSource:null,route:null}},created:function(){this.startPlaying(),this.$nextTick((function(){var e=document.querySelector("#mobile-menu-floaters");e&&(e.style.bottom=this.$el.clientHeight+"px");var t=this.$refs.audioPlayer.$el.querySelector(".operate"),o=t.querySelectorAll("span"),i=o[o.length-1];i.insertAdjacentElement("beforebegin",this.$refs.closeBtn),i=(o=t.querySelectorAll("span"))[o.length-1];var l=this.$refs.audioPlayer.$el.querySelector(".slider");t.insertBefore(l,t.firstChild),t.insertBefore(i,t.firstChild)})),this.$store.commit("prop",{key:"audioPlayerVisible",value:!0})},beforeDestroy:function(){var e=document.querySelector("#mobile-menu-floaters");e&&(e.style.bottom=null),this.$store.commit("prop",{key:"audioPlayerVisible",value:!1})},methods:{startPlaying:function(){this.audioSource=this.sampleData.book.sample,this.book=this.sampleData.book,this.sampleData.route&&(this.route=this.sampleData.route)},openBook:function(){this.route.fullPath!==this.$route.fullPath&&this.$router.push({path:this.route.path,query:this.route.query,params:this.route.params}),document.querySelector("#ale-bookdetails")?(this.$root.$emit("book-clicked",{book:this.book}),this.$nextTick((function(){this.$root.$emit("book-clicked",{book:this.book})}))):this.$root.$emit("book-clicked",{book:this.book})},samplePlayerClose:function(){this.audioSource=null,this.$emit("update:sampleData",null),this.$emit("update:showAudioPlayer",!1)},beforeDestroyed:function(){this.samplePlayerClose()}}},l=(0,o(810).Z)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.audioSource?o("div",{attrs:{id:"audio-player"}},[e.book.title||e.book.titleShort?o("div",{staticClass:"book",on:{click:e.openBook}},[o("strong",[e._v("Sample:")]),e._v("\n    "+e._s(e.book.title||e.book.titleShort)+"\n  ")]):e._e(),e._v(" "),o("mini-audio",{ref:"audioPlayer",attrs:{"audio-source":e.audioSource,preload:!0,html5:!0,autoplay:!0}}),e._v(" "),o("span",{ref:"closeBtn",staticClass:"close"},[o("font-awesome",{attrs:{fas:"",icon:"times-circle"},on:{click:e.samplePlayerClose}})],1)],1):e._e()}),[],!1,null,null,null).exports}}]);