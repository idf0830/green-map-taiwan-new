(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{584:function(t,e,o){"use strict";function n(t,e,o){var n,r,c,d=null,l=0;o||(o={});var h=function(){l=!1===o.leading?0:Date.now(),d=null,c=t.apply(n,r),d||(n=r=null)};return function(){var m=Date.now();l||!1!==o.leading||(l=m);var f=e-(m-l);return n=this,r=arguments,f<=0||f>e?(d&&(clearTimeout(d),d=null),l=m,c=t.apply(n,r),d||(n=r=null)):d||!1===o.trailing||(d=setTimeout(h,f)),c}}o.d(e,"a",function(){return n})},594:function(t,e,o){"use strict";var n=o(26),r=(o(625),o(693)),c=o.n(r),d=o(694),l=o.n(d),h=o(695),m=o.n(h),f=o(696),y=o.n(f),x=o(697),v=o.n(x),w=o(698),M=o.n(w),S={data:function(){return{placeholders:[c.a,l.a,m.a,y.a,v.a,M.a],finalSrc:null,style:{}}},props:{src:{type:String,default:""},alt:{type:String,default:""},containerStyle:{type:Object,default:function(){return{width:"100%",height:"100%",overflow:"hidden"}}},onClick:{type:Function,default:null},altPlaceholders:{type:Array,default:[]},index:{type:Number,default:null}},computed:{computedContainerStyle:function(){var t=Object(n.a)({},this.containerStyle);return this.finalSrc&&(t.backgroundImage="url('".concat(this.finalSrc,"')")),this.onClick&&(t.cursor="pointer"),t}},mounted:function(){this.checkImage()},watch:{src:function(t,e){t!==e&&this.checkImage()}},methods:{checkImage:function(){var img=new Image,t=this;img.onload=function(){t.finalSrc=t.src,this.width,this.height,t.style={width:"100%"}},img.onerror=function(){var e=t.altPlaceholders&&t.altPlaceholders.length>0?t.altPlaceholders:t.placeholders;t.finalSrc=e[Math.floor(Math.random()*e.length)],t.style={height:"100%"}},img.src=this.src},clickImg:function(){this.onClick&&this.onClick(this.finalSrc,this.index)}}},I=(o(718),o(10)),component=Object(I.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.computedContainerStyle,on:{click:this.clickImg}},[this.finalSrc?e("img",{style:this.style,attrs:{src:this.finalSrc,alt:this.alt}}):e("span",{staticStyle:{display:"inline-block",margin:"20px"}},[this._v("Loading...")])])},[],!1,null,"1b4d4aac",null);e.a=component.exports},597:function(t,e,o){"use strict";o(49),o(650),o(625);var n=o(608),r=o(598),c={components:{ShopItem:n.a,Sidebar:r.a},props:{typeOptions:{type:Array,default:[]},show:{type:Boolean,default:!1},searchHistory:{type:Array,default:[]},search:{type:Function,default:function(){}},setType:{type:Function,default:function(){}},query:{type:String,default:""},isRight:{type:Boolean,default:!0},sidebarStyle:{type:Object,default:{}}},computed:{searchDisabled:function(){return""===this.query}},methods:{checkIfIsSelected:function(t){return t.value?this.$store.state.type[t.value]:0===this.$store.state.type.filter(function(data){return data}).length}}},d=(o(724),o(10)),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Sidebar",{style:t.sidebarStyle,attrs:{show:t.show,isRight:t.isRight,id:"search-sidebar"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("mq-layout",{attrs:{mq:"lg"}},[n("ul",{staticClass:"history-container"},t._l(t.searchHistory,function(e,r){return n("li",{attrs:{tabindex:"0"},on:{click:function(o){return t.search(e)}}},[n("img",{attrs:{src:o(648),height:"19",width:"19"}}),t._v("\n                    "+t._s(e)+"\n                ")])}),0)]),t._v(" "),n("ul",{staticClass:"types"},[n("mq-layout",{attrs:{mq:"lg"}},[n("hr")]),t._v(" "),t._l(t.typeOptions,function(e,o){return n("li",{class:{"selected-type":t.checkIfIsSelected(e)},attrs:{tabindex:"0"},on:{click:function(o){return t.setType(e.value)}}},[n("img",{attrs:{src:e.typeIcon}}),t._v("\n                "+t._s(e.text)+"\n            ")])}),t._v(" "),n("hr")],2)],1)])},[],!1,null,"67383c3b",null).exports,h={components:{Sidebar:r.a},props:{typeOptions:{type:Array,default:[]},show:{type:Boolean,default:!1},searchHistory:{type:Array,default:[]},search:{type:Function,default:function(){}},setType:{type:Function,default:function(){}},query:{type:String,default:""},isRight:{type:Boolean,default:!0},sidebarStyle:{type:Object,default:{}}},methods:{}},m=(o(726),Object(d.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Sidebar",{style:t.sidebarStyle,attrs:{show:t.show,isRight:t.isRight,id:"about-sidebar"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("ul",{staticClass:"types"},[o("li",[o("nuxt-link",{attrs:{to:"/recommendations"}},[t._v("城市精選綠點")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#typeInfo",exact:"",id:"typeInfo-link"}},[t._v("什麼是綠餐廳")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#aboutUs",exact:"",id:"aboutUs-link"}},[t._v("關於我們")])],1)])])])},[],!1,null,"21dc53a4",null).exports),f=(o(101),{data:function(){return{showSearchSidebar:!1,showAboutSidebar:!1,searchHistory:[]}},props:{setTypeProps:{type:Function,default:null},typeProps:{type:Number,default:null}},mounted:function(){window.addEventListener("click",this.closeSearchSidebar),window.addEventListener("click",this.closeAboutSidebar),this.searchHistory=localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[]},beforeDestroy:function(){window.removeEventListener("scroll",this.closeSearchSidebar),window.removeEventListener("scroll",this.closeAboutSidebar)},components:{SearchSidebar:l,AboutSidebar:m},computed:{typeOptions:function(){return this.$store.state.sourceData.types.filter(function(option){return option.checked})},cities:function(){return this.$store.state.sourceData.cities},query:function(){return this.$store.state.query},city:function(){return this.$store.state.city},typeText:function(){var t;return t=this.typeProps?this.typeProps:(t=this.$store.state.type.findIndex(function(data){return data}))>=0?t:0,this.$store.state.sourceData.types[t].text},typeIcon:function(){var t;return t=this.typeProps?this.typeProps:(t=this.$store.state.type.findIndex(function(data){return data}))>=0?t:0,this.$store.state.sourceData.types[t].typeIcon}},methods:{search:function(t){var e,o=t instanceof Event?t.target.elements.query.value:t;o&&((e=this.searchHistory.indexOf(o)>=0)?(this.searchHistory.unshift(this.searchHistory.splice(e,1)[0]),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory))):this.searchHistory[0]!==o&&(this.searchHistory.unshift(o),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)))),this.$store.commit("setType",{type:0,isSingleSelection:"md"===this.$mq}),this.$store.commit("setQuery",o),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&"map"!==$nuxt.$route.name&&"index-map"!==$nuxt.$route.name&&$nuxt.$router.push("/"),this.showSearchSidebar=!1},setCity:function(t){switch(this.$store.dispatch("setCityAndCenter",t),$nuxt.$route.name){case"recommendations":this.$store.dispatch("getRecommendationShops",t);break;case"shop":$nuxt.$router.push("/");break;case"index":this.$store.dispatch("getShops")}},setType:function(t){this.setTypeProps?this.setTypeProps(t):(this.$store.commit("setType",{type:t,isSingleSelection:"md"===this.$mq}),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&"map"!==$nuxt.$route.name&&"index-map"!==$nuxt.$route.name&&$nuxt.$router.push("/")),this.showSearchSidebar=!1},setShowSearchSidebar:function(t){this.showSearchSidebar=t},setShowAboutSidebar:function(t){this.showAboutSidebar=t},closeSearchSidebar:function(t){"lg"===this.$mq?document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||(this.showSearchSidebar=!1):document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||document.querySelector("#mobile-button").contains(t.target)||document.querySelector("#mobile-type-button").contains(t.target)||(this.showSearchSidebar=!1)},closeAboutSidebar:function(t){"md"!==this.$mq||document.querySelector("#about-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||document.querySelector("#mobile-button").contains(t.target)||document.querySelector("#mobile-type-button").contains(t.target)||(this.showAboutSidebar=!1)},resetSearchParams:function(){this.$store.commit("setType",{type:0,isSingleSelection:"md"===this.$mq}),this.$store.commit("setQuery",""),"index"!==$nuxt.$route.name?$nuxt.$router.push("/"):this.$store.dispatch("getShops")},backToIndex:function(){switch($nuxt.$route.name){case"map":case"index-map":$nuxt.$router.push("/");break;case"shop-map":this.selectedShop.objectID?$nuxt.$router.push("/shop?objectID=".concat(this.selectedShop.objectID)):$nuxt.$router.push("/")}},isMapPage:function(){return"index-map"===$nuxt.$route.name||"shop-map"===$nuxt.$route.name},isAboutPage:function(){return"about"===$nuxt.$route.name}}}),y=(o(728),Object(d.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mq-layout",{attrs:{mq:"lg"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",class:{"show-backdrop":t.showSearchSidebar},attrs:{id:"gt-nav"}},[n("a",{attrs:{href:"javascript:0"},on:{click:t.resetSearchParams}},[n("div",{staticClass:"map-logo"},[n("img",{attrs:{src:o(716),width:"40px"}})])]),t._v(" "),n("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"navbar-middle"},[n("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}})],1)]),t._v(" "),n("b-form",{attrs:{inline:"",id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[n("b-input-group",{staticClass:"search"},[n("b-input-group-prepend",[n("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[n("img",{attrs:{src:o(648),height:"19",width:"19"}})])],1),t._v(" "),n("b-form-input",{attrs:{placeholder:" 搜尋「店家」 ",name:"query","aria-label":"Search",autocomplete:"off",value:t.query},nativeOn:{focus:function(e){return t.setShowSearchSidebar(!0)}}})],1),t._v(" "),"lg"===this.$mq?n("SearchSidebar",{directives:[{name:"show",rawName:"v-show",value:t.showSearchSidebar,expression:"showSearchSidebar"}],attrs:{show:!0,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType,isRight:!1,sidebarStyle:{left:"auto",transform:"translateX(0)"}}}):t._e()],1),t._v(" "),n("div",{staticClass:"navbar-links"},[n("nuxt-link",{staticClass:"site-link",attrs:{to:"/recommendations"}},[t._v("城市精選綠點")]),t._v(" "),n("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#typeInfo",exact:"",id:"typeInfo-link"}},[t._v("什麼是綠餐廳")]),t._v(" "),n("nuxt-link",{staticClass:"site-link",attrs:{to:"/about#aboutUs",exact:"",id:"aboutUs-link"}},[t._v("關於我們")])],1)],1)]),t._v(" "),n("mq-layout",{attrs:{mq:"md"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",class:{"show-backdrop":t.showSearchSidebar||t.showAboutSidebar},attrs:{id:"gt-nav"}},[n("div",{staticClass:"mobile-navbar-content"},[n("a",{attrs:{href:"javascript:0"},on:{click:t.resetSearchParams}},[n("div",{staticClass:"map-logo"},[n("img",{attrs:{src:o(717),width:"40px"}})])]),t._v(" "),n("b-form",{attrs:{inline:"",id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[n("b-input-group",{staticClass:"search"},[n("b-input-group-prepend",[n("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[n("img",{attrs:{src:o(648),height:"19",width:"19"}})])],1),t._v(" "),n("b-form-input",{attrs:{placeholder:" 搜尋「店家」 ",name:"query","aria-label":"Search",autocomplete:"off",value:t.query}})],1)],1),t._v(" "),n("button",{attrs:{id:"mobile-button"},on:{click:function(e){return t.setShowAboutSidebar(!t.showAboutSidebar)}}},[t._v(t._s(t.showAboutSidebar?"✖":"☰"))])],1),t._v(" "),n("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"navbar-middle"},[t.isAboutPage()?t._e():n("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}}),t._v(" "),n("button",{attrs:{id:"mobile-type-button"},on:{click:function(e){return t.setShowSearchSidebar(!0)}}},[n("img",{attrs:{src:t.typeIcon,width:"15px"}}),t._v("\n              "+t._s(t.typeText)+"\n              "),n("img",{attrs:{src:o(692),width:"15px"}})]),t._v(" "),t.isMapPage()?n("button",{class:["back-to-index-button"],on:{click:t.backToIndex}},[t._v("✖")]):t._e(),t._v(" "),t.isMapPage()||t.isAboutPage()?t._e():n("nuxt-link",{attrs:{to:"/index-map"}},[n("button",[n("img",{attrs:{src:o(649),width:"40px"}})])])],1)])],1)]),t._v(" "),"md"===this.$mq?n("SearchSidebar",{attrs:{show:t.showSearchSidebar,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType}}):t._e(),t._v(" "),"md"===this.$mq?n("AboutSidebar",{attrs:{show:t.showAboutSidebar}}):t._e()],1)},[],!1,null,null,null));e.a=y.exports},598:function(t,e,o){"use strict";var n={props:{show:{type:Boolean,default:!0},isRight:{type:Boolean,default:!1},showCloseSidebarButton:{type:Boolean,default:!1},onCloseButtonClick:{type:Function,default:function(){}},style:{type:String,default:""},id:{type:String,default:""}}},r=(o(722),o(10)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar",class:{"show-sidebar":t.show,"is-right":t.isRight},staticStyle:{},attrs:{id:t.id}},[o("button",{staticClass:"close-sidebar-button",class:{showCloseSidebarButton:t.showCloseSidebarButton},on:{click:t.onCloseButtonClick}},[t._v("◂")]),t._v(" "),o("div",{staticClass:"content"},[t._t("content")],2)])},[],!1,null,null,null);e.a=component.exports},605:function(t,e,o){t.exports=o.p+"img/238bc99.svg"},608:function(t,e,o){"use strict";var n=o(594),r=o(604),c=o(626),d=o.n(c),l=o(627),h=o.n(l),m=o(628),f=o.n(m),y=o(629),x=o.n(y),v=o(630),w=o.n(v),M={components:{ImageHandler:n.a,VClamp:r.a},computed:{types:function(){return this.$store.state.sourceData.types},altPlaceholders:function(){return[d.a,h.a,f.a,x.a,w.a]}},props:{shop:{type:Object,default:{}},containerStyle:{type:Object,default:function(){return{}}},isMarkerClicked:{type:Boolean,default:!1}},methods:{setShop:function(){this.$store.commit("setShop",this.shop);var t=window.open(this.shop.google_map_link,"_blank");t&&t.focus&&t.focus()}}},S=(o(720),o(10)),component=Object(S.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shopItem-container",class:{isMarkerClicked:t.isMarkerClicked},staticStyle:{},on:{click:t.setShop}},[n("div",{staticClass:"shopItem-main"},[n("ImageHandler",{attrs:{src:t.shop.photo0||t.shop.facebook_avatar,alt:t.shop.name,altPlaceholders:t.altPlaceholders}})],1),t._v(" "),n("div",{staticClass:"shopItem-aside"},[n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"recommend-container"},[t.shop.is_recommended?n("p",{staticClass:"recommend"},[n("img",{attrs:{src:o(605),height:"20",width:"20"}}),t._v(" 精選店家")]):t._e()]),t._v(" "),n("h3",{on:{click:t.setShop}},[n("a",{attrs:{href:"javascript:void"},on:{click:t.setShop}},[n("v-clamp",{attrs:{autoresize:"","max-lines":1}},[t._v(t._s(t.shop.name))])],1)]),t._v(" "),n("p",{staticClass:"type"},[t._l(t.shop.type,function(e,o){return t.shop.type&&t.types[t.shop.type[0]]?n("span",[t._v("\n                    "+t._s(t.shop.open_status&&t.shop.open_status.type?" ‧ ":"")+"\n                    "+t._s(t.types[e].text+(o===t.shop.type.length-1?"":", "))+"\n                ")]):t._e()}),t._v(" "),n("span",{staticClass:"running-status"},[t._v(t._s(t.shop.open_status&&t.shop.open_status.type?t.shop.open_status.text:""))])],2),t._v(" "),n("p",{staticClass:"shopItem-description"},[n("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v(t._s(t.shop.description))])],1)])])])},[],!1,null,"07d58fbe",null);e.a=component.exports},626:function(t,e,o){t.exports=o.p+"img/f2923f8.png"},627:function(t,e,o){t.exports=o.p+"img/c017761.png"},628:function(t,e,o){t.exports=o.p+"img/0ba6e3c.png"},629:function(t,e,o){t.exports=o.p+"img/f3ab57d.png"},630:function(t,e,o){t.exports=o.p+"img/ada1af1.png"},648:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQxMC4yMyA0MTAuMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4yMyA0MTAuMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4NCgk8cGF0aCBkPSJNNDAxLjYyNSwzNjQuMDkybC0xMDcuMS0xMDcuMWMxOS4xMjUtMjYuNzc1LDMwLjYtNTkuMjg4LDMwLjYtOTMuNzEzYzAtODkuODg4LTcyLjY3NS0xNjIuNTYyLTE2Mi41NjItMTYyLjU2MiAgIFMwLDczLjM5MiwwLDE2My4yNzlzNzIuNjc1LDE2Mi41NjIsMTYyLjU2MiwxNjIuNTYyYzM0LjQyNSwwLDY2LjkzOC0xMS40NzUsOTMuNzEzLTMwLjZsMTA3LjEsMTA3LjEgICBjOS41NjIsOS41NjIsMjYuNzc1LDkuNTYyLDM4LjI1LDBsMCwwQzQxMy4xLDM5MC44NjcsNDEzLjEsMzc1LjU2Niw0MDEuNjI1LDM2NC4wOTJ6IE0xNjIuNTYyLDI4Ny41OTIgICBjLTY4Ljg1LDAtMTI0LjMxMi01NS40NjMtMTI0LjMxMi0xMjQuMzEyYzAtNjguODUsNTUuNDYyLTEyNC4zMTIsMTI0LjMxMi0xMjQuMzEyYzY4Ljg1LDAsMTI0LjMxMiw1NS40NjIsMTI0LjMxMiwxMjQuMzEyICAgQzI4Ni44NzUsMjMyLjEyOSwyMzEuNDEyLDI4Ny41OTIsMTYyLjU2MiwyODcuNTkyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPg0KPC9nPjwvZz4gPC9zdmc+DQo="},649:function(t,e,o){t.exports=o.p+"img/c87f7d8.svg"},651:function(t,e,o){var content=o(719);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("13509a74",content,!0,{sourceMap:!1})},652:function(t,e,o){var content=o(721);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("30b6cfed",content,!0,{sourceMap:!1})},653:function(t,e,o){var content=o(723);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("57a76406",content,!0,{sourceMap:!1})},654:function(t,e,o){var content=o(725);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("5010bb77",content,!0,{sourceMap:!1})},655:function(t,e,o){var content=o(727);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("1ad970b3",content,!0,{sourceMap:!1})},656:function(t,e,o){var content=o(729);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("1fcd4353",content,!0,{sourceMap:!1})},692:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+DQoJPHBhdGggZD0iTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxICAgYzEyLjM1NC0xMi4zNTQsMzIuMzg4LTEyLjM1NCw0NC43NDgsMGwxNzEuOTA1LDE3MS45MTVsMTcxLjkwNi0xNzEuOTA5YzEyLjM1OS0xMi4zNTQsMzIuMzkxLTEyLjM1NCw0NC43NDQsMCAgIGMxMi4zNjUsMTIuMzU0LDEyLjM2NSwzMi4zOTIsMCw0NC43NTFMMjQ4LjI5MiwzNDUuNDQ5QzI0Mi4xMTUsMzUxLjYyMSwyMzQuMDE4LDM1NC43MDYsMjI1LjkyMywzNTQuNzA2eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPg0KPC9nPjwvZz4gPC9zdmc+DQo="},693:function(t,e,o){t.exports=o.p+"img/0440883.png"},694:function(t,e,o){t.exports=o.p+"img/2180ab9.png"},695:function(t,e,o){t.exports=o.p+"img/c5b253d.png"},696:function(t,e,o){t.exports=o.p+"img/a0cc12e.png"},697:function(t,e,o){t.exports=o.p+"img/9320285.png"},698:function(t,e,o){t.exports=o.p+"img/7411593.png"},716:function(t,e,o){t.exports=o.p+"img/8a5b6b9.svg"},717:function(t,e,o){t.exports=o.p+"img/7e6173f.svg"},718:function(t,e,o){"use strict";var n=o(651);o.n(n).a},719:function(t,e,o){(t.exports=o(39)(!1)).push([t.i,"div[data-v-1b4d4aac]{position:relative;background-size:cover;background-position:50% 50%}img[data-v-1b4d4aac]{width:0;height:0}",""])},720:function(t,e,o){"use strict";var n=o(652);o.n(n).a},721:function(t,e,o){(t.exports=o(39)(!1)).push([t.i,".shopItem-container[data-v-07d58fbe]{padding:0;margin:20px 0;cursor:pointer}.shopItem-container:hover a[data-v-07d58fbe]{color:#44ad47}.shopItem-main[data-v-07d58fbe]{overflow:hidden}.shopItem-main img[data-v-07d58fbe]{width:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.shopItem-container h3[data-v-07d58fbe]{font-weight:700;font-size:16px;display:inline-block}.shopItem-aside[data-v-07d58fbe]{padding:10px}.shopItem-description[data-v-07d58fbe]{min-height:45px}.shopItem-container .type[data-v-07d58fbe]{border-bottom:1px solid #d3d3d3;padding-bottom:5px;margin-bottom:5px}.shopItem-container .recommend-container[data-v-07d58fbe]{min-height:21px}.shopItem-container .recommend[data-v-07d58fbe]{justify-content:flex-end}.shopItem-container .description[data-v-07d58fbe],.shopItem-container .recommend[data-v-07d58fbe],.shopItem-container .type[data-v-07d58fbe]{font-size:14px}.description[data-v-07d58fbe]{min-height:28px}.running-status[data-v-07d58fbe]{color:#44ad47}.shopItem-container[data-v-07d58fbe]{display:flex;flex-direction:row}.shopItem-main[data-v-07d58fbe]{width:35%;display:flex}.shopItem-aside[data-v-07d58fbe]{width:65%;display:flex;background-color:#fff}.isMarkerClicked[data-v-07d58fbe]{border-top:5px solid #44ad47}",""])},722:function(t,e,o){"use strict";var n=o(653);o.n(n).a},723:function(t,e,o){(t.exports=o(39)(!1)).push([t.i,".sidebar.show-sidebar{-webkit-transform:translateX(0);transform:translateX(0)}.close-sidebar-button{z-index:3;position:absolute;left:100%;top:50px;background-color:#fff;border:1px solid #9fa0a0;border-left:none;color:red;display:none}.showCloseSidebarButton{display:block}.sidebar{width:400px;background-color:#f3f4f5;padding:0;position:fixed;top:60px;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);z-index:1;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.is-right{left:auto;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.content{height:calc(100vh - 60px);overflow-x:hidden;overflow-y:auto}@media screen and (max-width:1250px){.sidebar{height:unset;padding:10px}.close-sidebar-button{display:none!important}}",""])},724:function(t,e,o){"use strict";var n=o(654);o.n(n).a},725:function(t,e,o){(t.exports=o(39)(!1)).push([t.i,".history-container[data-v-67383c3b]{max-height:120px;overflow-y:auto}.history-container li[data-v-67383c3b]{margin:10px 0}img[data-v-67383c3b]{width:50px}li[data-v-67383c3b]{cursor:pointer}.selected-type[data-v-67383c3b],.types li[data-v-67383c3b]:hover{background-color:#d8d8d8}#search-sidebar[data-v-67383c3b]{width:300px;padding:1rem 0;z-index:2}#search-sidebar ul[data-v-67383c3b]{margin:0 15px}.types li[data-v-67383c3b]{height:65px;line-height:60px;margin:10px}@media screen and (max-width:1250px){.sidebar[data-v-67383c3b]{border-top:1px solid grey}#search-sidebar[data-v-67383c3b]{padding:0;z-index:2}.search-button[data-v-67383c3b]{padding:0}.history-container[data-v-67383c3b]{max-height:120px}}",""])},726:function(t,e,o){"use strict";var n=o(655);o.n(n).a},727:function(t,e,o){(t.exports=o(39)(!1)).push([t.i,"li[data-v-21dc53a4]{cursor:pointer;border-bottom:1px solid #d3d3d3}li a[data-v-21dc53a4]{display:inline-block;width:100%;padding:20px 30px}.selected-type[data-v-21dc53a4],.types li[data-v-21dc53a4]:hover{background-color:#d8d8d8}#about-sidebar[data-v-21dc53a4]{width:300px;padding:1rem 0;z-index:2}#about-sidebar ul[data-v-21dc53a4]{margin:0 15px}@media screen and (max-width:1250px){.sidebar[data-v-21dc53a4]{border-top:1px solid grey}#about-sidebar[data-v-21dc53a4]{padding:0;z-index:2}.search-button[data-v-21dc53a4]{padding:0}}",""])},728:function(t,e,o){"use strict";var n=o(656);o.n(n).a},729:function(t,e,o){e=t.exports=o(39)(!1);var n=o(276)(o(692));e.push([t.i,"a{color:#000}a:hover{text-decoration:none;color:#44ad47}nav{height:60px;border-bottom:1px solid #d3d3d3;line-height:40px;background-color:#fff;position:relative}nav.navbar{z-index:2}nav img:nth-child(2){width:40px;height:11px}.navbar-middle{padding:10px 0 10px 20px}.input-group.search{padding:10px 20px}.map-logo img{display:block;margin:2px 15px 2px 2px}.navbar-middle{height:60px;border-left:1px solid #d3d3d3}.input-group.search{height:60px;width:300px}.search input{background-color:transparent;border-radius:0;border:none;border-bottom:1px solid;height:100%}.site-link{margin-right:20px}.custom-select{background:url("+n+') no-repeat right .75rem center/8px 10px;background-size:15px 15px;border:none}button.gm-ui-hover-effect{display:none!important}.cities-select.custom-select{width:90px}button.btn.btn-secondary.search-button{border-radius:0;background-color:transparent;border:none;border-bottom:1px solid #000}button.btn.btn-secondary.search-button:active{background-color:transparent}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(68,173,71,.5)}#search-container{height:60px;z-index:2;background-color:#fff}.show-backdrop:after{content:"";width:100vw;height:100vh;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.4)}.navbar-links{position:absolute;right:0;height:60px;padding:10px 20px}nav button{background-color:transparent;border:none}@media screen and (max-width:1250px){nav{height:unset}.map-logo{display:inline-block;border-right:1px solid grey;height:60px;padding:10px}#gt-nav{padding:0}.sidebar-inline-form{display:block;position:fixed;top:60px;width:100%;background-color:#fff;border-top:1px solid grey}.sidebar-inline-form .navbar-middle{padding:7px 10px;height:59px;width:100%;display:flex;justify-content:space-between}#mobile-button{border:none;border-left:1px solid grey;background-color:#fff;margin-left:auto;display:inline-block;width:60px;height:60px;position:absolute;right:0;top:0}.map-logo img{display:inline-block;height:100%;margin:0}.map-logo img:nth-child(2){height:70%;width:unset}.input-group.search{position:relative;border-bottom:none;background-color:#fff;padding:10px 20px}.navbar-middle{padding:10px 20px}.custom-select{margin-right:10px}.mobile-navbar-content{width:100%;background-color:#fff;z-index:2;display:flex}#search-container{width:calc(100% - 122px)}.search input,button.btn.btn-secondary.search-button{border-bottom:none}#mobile-type-button{line-height:16px;position:relative;padding-left:40px;left:-15px;margin:0 auto;white-space:nowrap}#mobile-type-button img{margin-left:15px;width:15px;height:15px}#mobile-type-button img:first-child{margin-left:0;position:absolute;left:0;top:-5px;width:40px;height:50px}nav .input-group.search{width:unset}button.back-to-index-button{position:relative;border:none;padding:0;height:unset;top:0;right:0;width:unset}}',""])}}]);