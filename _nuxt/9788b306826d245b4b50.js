(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{725:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQxMC4yMyA0MTAuMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4yMyA0MTAuMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4NCgk8cGF0aCBkPSJNNDAxLjYyNSwzNjQuMDkybC0xMDcuMS0xMDcuMWMxOS4xMjUtMjYuNzc1LDMwLjYtNTkuMjg4LDMwLjYtOTMuNzEzYzAtODkuODg4LTcyLjY3NS0xNjIuNTYyLTE2Mi41NjItMTYyLjU2MiAgIFMwLDczLjM5MiwwLDE2My4yNzlzNzIuNjc1LDE2Mi41NjIsMTYyLjU2MiwxNjIuNTYyYzM0LjQyNSwwLDY2LjkzOC0xMS40NzUsOTMuNzEzLTMwLjZsMTA3LjEsMTA3LjEgICBjOS41NjIsOS41NjIsMjYuNzc1LDkuNTYyLDM4LjI1LDBsMCwwQzQxMy4xLDM5MC44NjcsNDEzLjEsMzc1LjU2Niw0MDEuNjI1LDM2NC4wOTJ6IE0xNjIuNTYyLDI4Ny41OTIgICBjLTY4Ljg1LDAtMTI0LjMxMi01NS40NjMtMTI0LjMxMi0xMjQuMzEyYzAtNjguODUsNTUuNDYyLTEyNC4zMTIsMTI0LjMxMi0xMjQuMzEyYzY4Ljg1LDAsMTI0LjMxMiw1NS40NjIsMTI0LjMxMiwxMjQuMzEyICAgQzI4Ni44NzUsMjMyLjEyOSwyMzEuNDEyLDI4Ny41OTIsMTYyLjU2MiwyODcuNTkyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPg0KPC9nPjwvZz4gPC9zdmc+DQo="},726:function(t,e,o){var content=o(747);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("02fa11fb",content,!0,{sourceMap:!1})},727:function(t,e,o){var content=o(749);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("1fcd4353",content,!0,{sourceMap:!1})},732:function(t,e,o){t.exports=o.p+"img/b1bcf61.png"},733:function(t,e,o){"use strict";o(74);var r=o(734),n=o(744),c={components:{ShopItem:r.a,Sidebar:n.a},props:{typeOptions:{type:Array,default:[]},show:{type:Boolean,default:!1},searchHistory:{type:Array,default:[]},search:{type:Function,default:function(){}},setType:{type:Function,default:function(){}},query:{type:String,default:""},isRight:{type:Boolean,default:!0},sidebarStyle:{type:Object,default:{}}},computed:{searchDisabled:function(){return""===this.query}},methods:{checkIfIsSelected:function(t){return t.value?this.$store.state.type[t.value]:0===this.$store.state.type.filter(function(data){return data}).length}}},l=(o(746),o(12)),h=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Sidebar",{style:t.sidebarStyle,attrs:{show:t.show,isRight:t.isRight,id:"search-sidebar"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("mq-layout",{attrs:{mq:"md"}},[r("b-form",{attrs:{id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[r("b-input-group",{staticClass:"search"},[r("b-form-input",{attrs:{placeholder:" 搜尋「減塑」 ",name:"query","aria-label":"Search",value:t.query,autocomplete:"off"}}),t._v(" "),r("b-input-group-append",[r("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[r("img",{attrs:{src:o(725),height:"19",width:"19"}})])],1)],1)],1)],1),t._v(" "),r("ul",{staticClass:"history-container"},t._l(t.searchHistory,function(e,n){return r("li",{attrs:{tabindex:"0"},on:{click:function(o){return t.search(e)}}},[r("img",{attrs:{src:o(725),height:"19",width:"19"}}),t._v("\n                "+t._s(e)+"\n            ")])}),0),t._v(" "),r("ul",{staticClass:"types"},[r("hr"),t._v(" "),t._l(t.typeOptions,function(e,o){return r("li",{class:{"selected-type":t.checkIfIsSelected(e)},attrs:{tabindex:"0"},on:{click:function(o){return t.setType(e.value)}}},[r("img",{attrs:{src:e.typeIcon}}),t._v("\n                "+t._s(e.text)+"\n            ")])}),t._v(" "),r("hr")],2)],1)])},[],!1,null,"0653afa9",null).exports,d=(o(133),{data:function(){return{showSearchSidebar:!1,searchHistory:[]}},mounted:function(){window.addEventListener("click",this.closeSearchSidebar),this.searchHistory=localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[]},beforeDestroy:function(){window.removeEventListener("scroll",this.closeSearchSidebar)},components:{SearchSidebar:h},computed:{typeOptions:function(){return this.$store.state.sourceData.types.filter(function(option){return option.checked})},cities:function(){return this.$store.state.sourceData.cities},query:function(){return this.$store.state.query},city:function(){return this.$store.state.city}},methods:{search:function(t){var e,o=t instanceof Event?t.target.elements.query.value:t;o&&((e=this.searchHistory.indexOf(o)>=0)?(this.searchHistory.unshift(this.searchHistory.splice(e,1)[0]),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory))):this.searchHistory[0]!==o&&(this.searchHistory.unshift(o),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)))),this.$store.commit("setType",0),this.$store.commit("setQuery",o),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&$nuxt.$router.push("/"),this.showSearchSidebar=!1},setCity:function(t){switch(this.$store.dispatch("setCityAndCenter",t),$nuxt.$route.name){case"recommendations":this.$store.dispatch("getRecommendationShops",t);break;case"shop":$nuxt.$router.push("/");break;case"index":console.log("getShops"),this.$store.dispatch("getShops")}},setType:function(t){this.$store.commit("setType",t),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&$nuxt.$router.push("/"),this.showSearchSidebar=!1},setShowSearchSidebar:function(t){this.showSearchSidebar=t},closeSearchSidebar:function(t){console.log(this.$mq),"lg"===this.$mq?document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||(this.showSearchSidebar=!1):document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#mobile-button").contains(t.target)||(this.showSearchSidebar=!1)},resetSearchParams:function(){this.$store.commit("setType",0),this.$store.commit("setQuery",""),"index"!==$nuxt.$route.name&&$nuxt.$router.push("/")}}}),m=(o(748),Object(l.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mq-layout",{attrs:{mq:"lg"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",attrs:{id:"gt-nav"}},[r("a",{attrs:{href:"javascript:0"},on:{click:t.resetSearchParams}},[r("div",{staticClass:"map-logo"},[r("img",{attrs:{src:o(745),width:"40px"}})])]),t._v(" "),r("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[r("div",{staticClass:"navbar-middle"},[r("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}})],1)]),t._v(" "),r("b-form",{attrs:{inline:"",id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[r("b-input-group",{staticClass:"search"},[r("b-input-group-prepend",[r("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[r("img",{attrs:{src:o(725),height:"19",width:"19"}})])],1),t._v(" "),r("b-form-input",{attrs:{placeholder:" 搜尋「減塑」 ",name:"query","aria-label":"Search",autocomplete:"off",value:t.query},nativeOn:{focus:function(e){return t.setShowSearchSidebar(!0)}}})],1),t._v(" "),"lg"===this.$mq?r("SearchSidebar",{directives:[{name:"show",rawName:"v-show",value:t.showSearchSidebar,expression:"showSearchSidebar"}],attrs:{show:!0,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType,isRight:!1,sidebarStyle:{left:"auto",transform:"translateX(0)"}}}):t._e()],1),t._v(" "),r("div",{staticClass:"navbar-links"},[r("nuxt-link",{staticClass:"site-link",attrs:{to:"/recommendations"}},[t._v("城市推薦綠點")]),t._v(" "),r("nuxt-link",{staticClass:"site-link",attrs:{to:"/about?section=type",exact:""}},[t._v("什麼是綠餐廳")]),t._v(" "),r("nuxt-link",{staticClass:"site-link",attrs:{to:"/about?section=map",exact:""}},[t._v("什麼是台灣零廢棄地圖")])],1)],1)]),t._v(" "),r("mq-layout",{attrs:{mq:"md"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",attrs:{id:"gt-nav"}},[r("a",{attrs:{href:"javascript:0"},on:{click:t.resetSearchParams}},[r("div",{staticClass:"map-logo"},[r("img",{attrs:{src:o(735),width:"40px"}}),t._v(" "),r("img",{attrs:{src:o(732),height:"70%"}})])]),t._v(" "),r("button",{attrs:{id:"mobile-button"},on:{click:function(e){return t.setShowSearchSidebar(!t.showSearchSidebar)}}},[t._v(t._s(t.showSearchSidebar?"✖":"☰"))]),t._v(" "),r("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[r("div",{staticClass:"navbar-middle"},[r("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}}),t._v(" "),r("nuxt-link",{attrs:{to:"/recommendations"}},[t._v("城市推薦綠點")])],1)])],1)]),t._v(" "),"md"===this.$mq?r("SearchSidebar",{attrs:{show:t.showSearchSidebar,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType}}):t._e()],1)},[],!1,null,null,null));e.a=m.exports},735:function(t,e,o){t.exports=o.p+"img/7e6173f.svg"},738:function(t,e,o){t.exports=o.p+"img/659a8bf.png"},739:function(t,e,o){t.exports=o.p+"img/ec0bdff.png"},740:function(t,e,o){t.exports=o.p+"img/89eedb7.png"},741:function(t,e,o){t.exports=o.p+"img/bcb1e7f.png"},742:function(t,e,o){t.exports=o.p+"img/e33d511.png"},745:function(t,e,o){t.exports=o.p+"img/8a5b6b9.svg"},746:function(t,e,o){"use strict";var r=o(726);o.n(r).a},747:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,".history-container[data-v-0653afa9]{max-height:120px;overflow-y:auto}.history-container li[data-v-0653afa9]{margin:10px 0}img[data-v-0653afa9]{width:50px}li[data-v-0653afa9]{cursor:pointer}.selected-type[data-v-0653afa9],.types li[data-v-0653afa9]:hover{background-color:#d8d8d8}#search-sidebar[data-v-0653afa9]{width:300px;padding:1rem 0;z-index:2}#search-sidebar ul[data-v-0653afa9]{margin:0 15px}.types li[data-v-0653afa9]{height:65px;line-height:60px;margin:10px}@media screen and (max-width:1250px){.sidebar[data-v-0653afa9]{border-top:1px solid grey}#search-sidebar[data-v-0653afa9]{padding:0;z-index:2}.search-button[data-v-0653afa9]{padding:0}.history-container[data-v-0653afa9]{max-height:120px}}",""])},748:function(t,e,o){"use strict";var r=o(727);o.n(r).a},749:function(t,e,o){e=t.exports=o(51)(!1);var r=o(335)(o(750));e.push([t.i,"a{color:#000}a:hover{text-decoration:none;color:#44ad47}nav{height:60px;border-bottom:1px solid #d3d3d3;line-height:40px;background-color:#fff;position:relative}nav.navbar{z-index:2}nav img:nth-child(2){width:40px;height:11px}.navbar-middle{padding:10px 0 10px 20px}.input-group.search{padding:10px 20px}.map-logo img{display:block;margin:2px 15px 2px 2px}.navbar-middle{height:60px;border-left:1px solid #d3d3d3}.input-group.search{height:60px;width:300px}.search input{background-color:transparent;border-radius:0;border:none;border-bottom:1px solid;height:100%}.site-link{margin-right:20px}.custom-select{background:url("+r+") no-repeat right .75rem center/8px 10px;background-size:15px 15px;border:none}button.gm-ui-hover-effect{display:none!important}.cities-select.custom-select{width:90px}button.btn.btn-secondary.search-button{border-radius:0;background-color:transparent;border:none;border-bottom:1px solid #000}button.btn.btn-secondary.search-button:active{background-color:transparent}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(68,173,71,.5)}#search-container{height:60px}.navbar-links{position:absolute;right:0;height:60px;padding:10px 20px}@media screen and (max-width:1250px){nav{height:unset}.map-logo{display:inline-block;border-right:1px solid grey}#gt-nav{padding:0}.sidebar-inline-form{display:block;position:fixed;top:60px;width:100%;background-color:#fff;border-top:1px solid grey}.sidebar-inline-form .navbar-middle{padding:7px 20px;height:unset;width:100%;display:flex;justify-content:space-between}.map-logo{border:none;height:60px;padding:10px}#mobile-button{border:none;border-left:1px solid grey;background-color:#fff;margin-left:auto;display:inline-block;width:60px;height:60px;position:absolute;right:0;top:0}.map-logo img{display:inline-block;height:100%;margin:0}.map-logo img:nth-child(2){height:70%;width:unset}.input-group.search{position:relative;border-bottom:none;background-color:#fff;padding:10px 20px}.navbar-middle{padding:10px 20px}.custom-select{margin-right:10px}}",""])},750:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+DQoJPHBhdGggZD0iTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxICAgYzEyLjM1NC0xMi4zNTQsMzIuMzg4LTEyLjM1NCw0NC43NDgsMGwxNzEuOTA1LDE3MS45MTVsMTcxLjkwNi0xNzEuOTA5YzEyLjM1OS0xMi4zNTQsMzIuMzkxLTEyLjM1NCw0NC43NDQsMCAgIGMxMi4zNjUsMTIuMzU0LDEyLjM2NSwzMi4zOTIsMCw0NC43NTFMMjQ4LjI5MiwzNDUuNDQ5QzI0Mi4xMTUsMzUxLjYyMSwyMzQuMDE4LDM1NC43MDYsMjI1LjkyMywzNTQuNzA2eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPg0KPC9nPjwvZz4gPC9zdmc+DQo="},771:function(t){t.exports={}},772:function(t,e,o){var content=o(813);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("3d6101da",content,!0,{sourceMap:!1})},785:function(t,e,o){"use strict";var r=o(734),n=o(744),c=o(736),l=o(738),h=o.n(l),d=o(739),m=o.n(d),y=o(740),f=o.n(y),x=o(741),M=o.n(x),v=o(742),w=o.n(v),S={components:{ShopItem:r.a,Sidebar:n.a},data:function(){return{mascots:[h.a,m.a,f.a,M.a,w.a]}},props:{show:{type:Boolean,default:!0},onCloseButtonClick:{type:Function,default:function(){}},shops:{type:Array,default:[]}},computed:{isLoading:function(){return this.$store.state.isLoading},selectedShop:function(){return this.$store.state.shop}},methods:{onScroll:Object(c.a)(function(t){var e=t.target;console.log("??"),e.scrollTop>=e.scrollHeight-e.offsetHeight-500&&this.$store.state.pageNum<Math.ceil(this.shops.length/20)&&this.$store.commit("addPageNum")},1e3)}},I=(o(812),o(12)),component=Object(I.a)(S,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Sidebar",{attrs:{show:t.show,onCloseButtonClick:t.onCloseButtonClick,showCloseSidebarButton:!0}},[t.shops.length>0?o("ul",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"shopList",attrs:{slot:"content"},slot:"content"},t._l(t.shops.slice(0,20*this.$store.state.pageNum),function(e,r){return o("ShopItem",{attrs:{shop:e,isMarkerClicked:e.objectID===t.selectedShop.objectID}})}),1):t._e(),t._v(" "),0===t.shops.length?o("div",{staticClass:"no-result-placeholder",attrs:{slot:"content"},slot:"content"},[o("img",{attrs:{src:t.mascots[Math.floor(Math.random()*t.mascots.length)]}}),t._v(" "),o("p",[t._v(t._s(t.isLoading?"Loading...":"目前沒有符合的搜尋結果"))])]):t._e()])},[],!1,null,null,null);e.a=component.exports},812:function(t,e,o){"use strict";var r=o(772);o.n(r).a},813:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,".shopList{background-color:#f3f4f5;padding:0;transition:left 1s;overflow-y:auto;height:100%}.no-result-placeholder{text-align:center}.no-result-placeholder img{width:30%;margin:0 auto 30px;display:block}@media screen and (max-width:1250px){.shopList{height:unset;padding:10px}}",""])}}]);