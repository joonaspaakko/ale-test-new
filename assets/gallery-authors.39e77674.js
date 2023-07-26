import{_ as k}from"./gallery-lazy.719d725f.js";import{a as v}from"./gallery-search.313e9dff.js";import{c as S}from"./gallery.c290c06f.js";import{f as x}from"./gallery-findSubPageSource.65b5640c.js";import{_ as w,c,d as u,a as p,F as O,j as $,n as h,e as m,r as C,b as N,o as i,i as R,k as d,t as y,w as B,x as T}from"./lodash.1321b47a.js";import"./gallery-page-title.868399a9.js";import"./content-script-helpers.d9db1ad0.js";import"./jquery.050764e9.js";import"./gallery-timeStringToSeconds.9aa0cb6a.js";import"./gallery-makeCoverUrl.8378190f.js";import"./index.ee874ed1.js";import"./howler.22814ddb.js";import"./tippy.82bfa66a.js";const A={name:"aleAuthors",mixins:[S,x],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Authors",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return this.$store.state.searchOptOpenHeight?{marginBottom:0}:!1},galleryStyle:function(){return this.$store.state.searchOptOpenHeight?{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-this.$refs.wrapper.offsetTop*2+"px"}:!1}},methods:{makeCollection:function(){const r=this;let o=[],s=1;_.eachRight(r.subPageSource.collection,function(e){e.authors&&_.each(e.authors,function(t){if(t.name&&t.url){let n=_.find(o,{name:t.name});if(n)return n.books.push(e.title||e.shortTitle),!1;{const l={name:t.name,url:t.url,added:s,books:[e.title||e.shortTitle],narrators:e.narrators,publishers:e.publishers,series:e.series};o.push(l),++s}}})}),_.reverse(o),this.$store.commit("prop",{key:"pageCollection",value:o}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){let r=this;const o={scope:[{active:!0,key:"name",tippy:"Search authors by name",weight:5},{active:!0,key:"books",tippy:"Search authors by book titles",weight:1},{active:!0,key:"narrators.name",tippy:"Search authors by narrators",weight:1},{active:!0,key:"publishers.name",tippy:"Search authors by publishers",weight:1},{active:!0,key:"series.name",tippy:"Search authors by series",weight:1}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,function(){let s=_.get(r.$store.state,r.collectionSource),e=_.maxBy(s,function(t){if(t.books)return t.books.length});return e?e.books.length:1}()],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){let s=_.get(r.$store.state,r.collectionSource),e=_.maxBy(s,function(t){if(t.books)return t.books.length});return e?e.books.length:1},condition:function(s){if(s.books){let e=this.range[0],t=this.range[1];return s.books.length>=e&&s.books.length<=t}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by author's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(o)}}},z={key:0,class:"books-total",content:"Total number of books with this author."};function M(r,o,s,e,t,n){const l=v,g=C("router-link"),f=k,b=N("tippy");return r.listReady?(i(),c("div",{key:0,id:"ale-authors",class:"box-layout-wrapper",style:h(n.optionsOpenMargin),ref:"wrapper"},[u(l,{collectionSource:r.collectionSource},null,8,["collectionSource"]),p("div",{style:h(n.galleryStyle),class:"page-content"},[(i(!0),c(O,null,$(r.$store.getters.collection,(a,D)=>(i(),R(f,{class:"single-box","data-name":a.name,key:"authors:"+a.name},{default:d(()=>[u(g,{to:{name:"author",params:{author:a.url},query:{subPageSource:r.subPageSource.name}}},{default:d(()=>[p("h2",null,y(a.name),1),a.books&&a.books.length?B((i(),c("div",z,[T(y(a.books.length),1)])),[[b,{placement:"right"}]]):m("",!0)]),_:2},1032,["to"])]),_:2},1032,["data-name"]))),128))],4)],4)):m("",!0)}var U=w(A,[["render",M],["__scopeId","data-v-6e14b82e"]]);export{U as default};
