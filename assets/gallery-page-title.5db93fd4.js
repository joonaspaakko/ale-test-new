import"./content-script-helpers.e49fc91b.js";import{_ as r,q as u,o as a,c as i,b as c,s as p,E as g,x as l,d as o,a as d}from"./lodash.9f572fca.js";const m={name:"pageTitle",props:["pageTitle","pageSubTitle"],data(){return{pageLink:"#"}},mounted:function(){this.pageTitle&&this.$store.commit("prop",{key:"pageTitle",value:this.pageTitle}),this.pageSubTitle&&this.$store.commit("prop",{key:"pageSubTitle",value:this.pageSubTitle});const t=_.cloneDeep(this.$route);t.query={refresh:!0},this.pageLink=t},beforeUnmount:function(){this.$store.commit("prop",{key:"pageTitle",value:null})}},h={key:0,class:"gallery-title-wrapper"},T={key:0,class:"gallery-title"},y=d("div",{class:"divider"},null,-1),k={key:1,class:"gallery-sub-title"};function f(t,v,e,b,s,S){const n=u("router-link");return e.pageTitle||e.pageSubTitle?(a(),i("div",h,[e.pageTitle?(a(),i("h2",T,[c(n,{to:s.pageLink},{default:p(()=>[g(l(e.pageTitle),1)]),_:1},8,["to"])])):o("",!0),y,e.pageSubTitle?(a(),i("h3",k,l(e.pageSubTitle),1)):o("",!0)])):o("",!0)}var V=r(m,[["render",f]]);export{V as _};
