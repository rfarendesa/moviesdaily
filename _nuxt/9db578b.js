(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{343:function(t,e,s){"use strict";s.r(e);s(17),s(62),s(45);var a=s(329),n=s(214),i={props:["type","id"],components:{Carousel:a.Carousel,Slide:a.Slide},data:function(){return{results:[]}},created:function(){this.getCredits()},methods:{slug:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},getCredits:function(){var t=this,e={api_key:n.API_KEY,language:this.$i18n.locale};this.$axios.$get("/".concat(this.type,"/").concat(this.id,"/credits"),{params:e}).then((function(e){t.results=e}))},poster:function(t){return null==t?"/images/no-poster.png":n.IMAGE_POSTER_THUMB+t}}},r=i,l=s(14),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.results?s("div",[s("h2",{staticClass:"h5 mb-3 text-muted"},[t._v(t._s(t.$t("Cast")))]),t._v(" "),s("Carousel",{attrs:{perPage:4,perPageCustom:[[768,6],[1024,7],[1524,8]],paginationEnabled:!1,navigationEnabled:!0}},t._l(t.results.cast,(function(e,a){return s("slide",{key:a,staticClass:"small"},[s("NuxtLink",{staticClass:"cast_name",attrs:{to:t.localePath({name:"person-id",params:{id:e.id}}),title:e.name}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:t.poster(e.profile_path),alt:e.name}}),t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),s("div",{staticClass:"text-muted"},[t._v(t._s(e.character))])],1)})),1)],1):t._e()}),[],!1,null,null,null);e.default=o.exports}}]);