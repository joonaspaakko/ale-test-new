import{f as B,_ as w}from"./gallery-findSubPageSource.85dad557.js";import{_ as x}from"./gallery-page-title.baa13a50.js";import{c as L}from"./gallery.8fa62ef3.js";import{m as R}from"./gallery-makeCoverUrl.52ce2441.js";import{_ as $,c as a,d as f,F as b,i as h,e as g,r as q,b as H,o as s,a as k,h as v,j as p,u as S,t as y,w as P}from"./lodash.4793ee9f.js";import"./content-script-helpers.6ab0890a.js";import"./jquery.fca3dd19.js";import"./jszip.f74de32f.js";import"./index.ff69ba6a.js";import"./howler.45f3c8a6.js";import"./tippy.0141f121.js";const M={name:"aleCategories",mixins:[L,R,B],data:function(){return{categories:null,listReady:!1,pageTitle:"Categories",pageSubTitle:null}},methods:{getRandomBooks:function(t,n){let r=_.filter(t,function(l){return l.categories&&l.categories.length>1&&l.cover});return _.sampleSize(r,n)},makeCollection:function(){const t=this;let n={};n.parent=[],_.each(t.subPageSource.collection,function(r,l){if(r.categories){const m=_.get(r,"categories[0].name");let i=_.find(n.parent,["name",m]);i||(i=n.parent.push({name:m,slug:t.slugify(m),books:[]})),i=_.find(n.parent,["name",m]),i.books.push(r);const u=_.get(r,"categories[1].name");if(u){i.sub||(i.sub=[]);let c=_.find(i.sub,["name",u]);c||(c=i.sub.push({name:u,slug:t.slugify(u),books:[]})),c=_.find(i.sub,["name",u]),c.books.push(r)}}}),n.parent=_.orderBy(n.parent,"name","asc"),_.each(n.parent,function(r,l){r.sub=_.orderBy(r.sub,"name","asc")}),this.categories=n.parent,this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]}),this.listReady=!0}}},N={key:0,id:"ale-categories",class:"box-layout-wrapper"},V=["data-category"],j={key:1},D=["innerHTML"],F=["innerHTML"],O={key:2,class:"child-categories"},U={key:1},z={key:2,class:"number-of-books"},E={class:"sample-covers"},I=["src"];function W(t,n,r,l,m,i){const u=x,c=w,d=q("router-link"),C=H("tippy");return t.listReady?(s(),a("div",N,[f(u),f(c),(s(!0),a(b,null,h(t.categories,(e,A)=>(s(),a("div",{class:"single-box","data-category":e.name,key:e.name},[k("h2",null,[e.slug?(s(),v(d,{key:0,to:{name:"category",params:{parent:e.slug,child:void 0},query:{subPageSource:t.subPageSource.name}}},{default:p(()=>[S(y(e.name),1)]),_:2},1032,["to"])):(s(),a("span",j,y(e.name),1))]),e.slug?(s(),v(d,{key:0,class:"books-total",to:{name:"category",params:{parent:e.slug,child:void 0},query:{subPageSource:t.subPageSource.name}}},{default:p(()=>[e.books?P((s(),a("div",{key:0,innerHTML:e.books.length,content:"Total number of books in this category."},null,8,D)),[[C,{placement:"right"}]]):g("",!0)]),_:2},1032,["to"])):e.books?P((s(),a("div",{key:1,innerHTML:e.books.length,content:"Total number of books in this category."},null,8,F)),[[C,{placement:"right"}]]):g("",!0),e.sub?(s(),a("div",O,[(s(!0),a(b,null,h(e.sub,(o,T)=>(s(),a("div",{key:o.name},[e&&e.slug&&o&&o.slug?(s(),v(d,{key:0,to:{name:"category",params:{parent:e.slug,child:o.slug},query:{subPageSource:t.subPageSource.name}}},{default:p(()=>[S(y(o.name),1)]),_:2},1032,["to"])):(s(),a("span",U)),o.books?(s(),a("span",z,"("+y(o.books.length)+")",1)):g("",!0)]))),128))])):g("",!0),k("div",E,[e&&e.books?(s(!0),a(b,{key:0},h(i.getRandomBooks(e.books,5),(o,T)=>(s(),a("div",{class:"sample-cover",key:o.asin},[f(d,{to:{name:"category",params:{parent:o.categories[0]?t.slugify(o.categories[0].name):null,child:o.categories[1]?t.slugify(o.categories[1].name):null},query:{book:o.asin,subPageSource:t.subPageSource.name}}},{default:p(()=>[k("img",{crossorigin:"anonymous",src:t.makeCoverUrl(o.cover),alt:""},null,8,I)]),_:2},1032,["to"])]))),128)):g("",!0)])],8,V))),128))])):g("",!0)}const ae=$(M,[["render",W],["__scopeId","data-v-75be78b8"]]);export{ae as default};
