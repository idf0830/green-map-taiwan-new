(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{718:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQxMC4yMyA0MTAuMjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4yMyA0MTAuMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4NCgk8cGF0aCBkPSJNNDAxLjYyNSwzNjQuMDkybC0xMDcuMS0xMDcuMWMxOS4xMjUtMjYuNzc1LDMwLjYtNTkuMjg4LDMwLjYtOTMuNzEzYzAtODkuODg4LTcyLjY3NS0xNjIuNTYyLTE2Mi41NjItMTYyLjU2MiAgIFMwLDczLjM5MiwwLDE2My4yNzlzNzIuNjc1LDE2Mi41NjIsMTYyLjU2MiwxNjIuNTYyYzM0LjQyNSwwLDY2LjkzOC0xMS40NzUsOTMuNzEzLTMwLjZsMTA3LjEsMTA3LjEgICBjOS41NjIsOS41NjIsMjYuNzc1LDkuNTYyLDM4LjI1LDBsMCwwQzQxMy4xLDM5MC44NjcsNDEzLjEsMzc1LjU2Niw0MDEuNjI1LDM2NC4wOTJ6IE0xNjIuNTYyLDI4Ny41OTIgICBjLTY4Ljg1LDAtMTI0LjMxMi01NS40NjMtMTI0LjMxMi0xMjQuMzEyYzAtNjguODUsNTUuNDYyLTEyNC4zMTIsMTI0LjMxMi0xMjQuMzEyYzY4Ljg1LDAsMTI0LjMxMiw1NS40NjIsMTI0LjMxMiwxMjQuMzEyICAgQzI4Ni44NzUsMjMyLjEyOSwyMzEuNDEyLDI4Ny41OTIsMTYyLjU2MiwyODcuNTkyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPg0KPC9nPjwvZz4gPC9zdmc+DQo="},719:function(t,e,o){var content=o(738);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("203174ed",content,!0,{sourceMap:!1})},720:function(t,e,o){var content=o(740);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("1fcd4353",content,!0,{sourceMap:!1})},721:function(t,e,o){t.exports=o.p+"img/b1bcf61.png"},722:function(t,e,o){t.exports=o.p+"img/c87f7d8.svg"},724:function(t,e,o){var content=o(749);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("3d6101da",content,!0,{sourceMap:!1})},728:function(t,e,o){"use strict";o(74);var n=o(725),r=o(726),c={components:{ShopItem:n.a,Sidebar:r.a},props:{typeOptions:{type:Array,default:[]},show:{type:Boolean,default:!1},searchHistory:{type:Array,default:[]},search:{type:Function,default:function(){}},setType:{type:Function,default:function(){}},query:{type:String,default:""}},computed:{searchDisabled:function(){return""===this.query}},methods:{checkIfIsSelected:function(t){return+this.$store.state.type==+t.value}}},l=(o(737),o(12)),h=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Sidebar",{attrs:{show:t.show,isRight:!0,id:"search-sidebar"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("mq-layout",{attrs:{mq:"md"}},[n("b-form",{attrs:{id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[n("b-input-group",{staticClass:"search"},[n("b-form-input",{attrs:{placeholder:" 搜尋「減塑」 ",name:"query","aria-label":"Search",value:t.query,autocomplete:"off"}}),t._v(" "),n("b-input-group-append",[n("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[n("img",{attrs:{src:o(718),height:"19",width:"19"}})])],1)],1)],1)],1),t._v(" "),n("ul",{staticClass:"history-container"},t._l(t.searchHistory,function(e,r){return n("li",{on:{click:function(o){return t.search(e)}}},[n("img",{attrs:{src:o(718),height:"19",width:"19"}}),t._v("\n                "+t._s(e)+"\n            ")])}),0),t._v(" "),n("ul",{staticClass:"types"},[n("hr"),t._v(" "),t._l(t.typeOptions,function(e,o){return n("li",{class:{"selected-type":t.checkIfIsSelected(e)},on:{click:function(o){return t.setType(e.value)}}},[n("img",{attrs:{src:e.icon}}),t._v("\n                "+t._s(e.text)+"\n            ")])}),t._v(" "),n("hr")],2)],1)])},[],!1,null,"6bf6a499",null).exports,d=(o(133),{data:function(){return{showSearchSidebar:!1,searchHistory:[]}},mounted:function(){window.addEventListener("click",this.closeSearchSidebar),this.searchHistory=localStorage.getItem("searchHistory")?JSON.parse(localStorage.getItem("searchHistory")):[]},beforeDestroy:function(){window.removeEventListener("scroll",this.closeSearchSidebar)},components:{SearchSidebar:h},computed:{typeOptions:function(){return this.$store.state.sourceData.types.filter(function(option){return option.checked})},cities:function(){return this.$store.state.sourceData.cities},query:function(){return this.$store.state.query},city:function(){return this.$store.state.city}},methods:{search:function(t){var e,o=t instanceof Event?t.target.elements.query.value:t;o&&((e=this.searchHistory.indexOf(o)>=0)?(this.searchHistory.unshift(this.searchHistory.splice(e,1)[0]),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory))):this.searchHistory[0]!==o&&(this.searchHistory.unshift(o),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)))),this.$store.commit("setQuery",o),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&$nuxt.$router.push("/"),this.showSearchSidebar=!1},setCity:function(t){switch(this.$store.dispatch("setCityAndCenter",t),$nuxt.$route.name){case"recommendations":this.$store.dispatch("getRecommendationShops",t);break;case"shop":$nuxt.$router.push("/");break;case"index":console.log("getShops"),this.$store.dispatch("getShops")}},setType:function(t){this.$store.commit("setType",t),this.$store.dispatch("getShops"),"index"!==$nuxt.$route.name&&$nuxt.$router.push("/"),this.showSearchSidebar=!1},setShowSearchSidebar:function(t){this.showSearchSidebar=t},closeSearchSidebar:function(t){console.log(this.$mq),"lg"===this.$mq?document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#search-container").contains(t.target)||(this.showSearchSidebar=!1):document.querySelector("#search-sidebar").contains(t.target)||document.querySelector("#mobile-button").contains(t.target)||(this.showSearchSidebar=!1)}}}),m=(o(739),Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mq-layout",{attrs:{mq:"lg"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",attrs:{id:"gt-nav"}},[n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"map-logo"},[n("img",{attrs:{src:o(722),width:"40px"}}),t._v(" "),n("img",{attrs:{src:o(721),width:"40px"}})])]),t._v(" "),n("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"navbar-middle"},[n("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}}),t._v(" "),n("nuxt-link",{attrs:{to:"/recommendations"}},[t._v("城市推薦綠點")])],1)]),t._v(" "),n("b-form",{attrs:{inline:"",id:"search-container"},on:{submit:[function(t){t.stopPropagation(),t.preventDefault()},t.search]}},[n("b-input-group",{staticClass:"search"},[n("b-input-group-prepend",[n("b-button",{staticClass:"search-button",attrs:{type:"submit"}},[n("img",{attrs:{src:o(718),height:"19",width:"19"}})])],1),t._v(" "),n("b-form-input",{attrs:{placeholder:" 搜尋「減塑」 ",name:"query","aria-label":"Search",autocomplete:"off",value:t.query},nativeOn:{focus:function(e){return t.setShowSearchSidebar(!0)}}})],1)],1)],1)]),t._v(" "),n("mq-layout",{attrs:{mq:"md"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",attrs:{id:"gt-nav"}},[n("nuxt-link",{attrs:{to:"/"}},[n("div",{staticClass:"map-logo"},[n("img",{attrs:{src:o(722),width:"40px"}}),t._v(" "),n("img",{attrs:{src:o(721),height:"70%"}})])]),t._v(" "),n("button",{attrs:{id:"mobile-button"},on:{click:function(e){return t.setShowSearchSidebar(!t.showSearchSidebar)}}},[t._v(t._s(t.showSearchSidebar?"✖":"☰"))]),t._v(" "),n("b-form",{staticClass:"sidebar-inline-form",attrs:{inline:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"navbar-middle"},[n("b-form-select",{staticClass:"cities-select",attrs:{value:t.city,options:t.cities},on:{change:t.setCity}}),t._v(" "),n("nuxt-link",{attrs:{to:"/recommendations"}},[t._v("城市推薦綠點")])],1)])],1)]),t._v(" "),n("SearchSidebar",{attrs:{show:t.showSearchSidebar,typeOptions:t.typeOptions,searchHistory:t.searchHistory,query:t.query,search:t.search,setType:t.setType}})],1)},[],!1,null,null,null));e.a=m.exports},737:function(t,e,o){"use strict";var n=o(719);o.n(n).a},738:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,".history-container[data-v-6bf6a499]{max-height:120px;overflow-y:auto}.history-container li[data-v-6bf6a499]{margin:10px 0}img[data-v-6bf6a499]{width:50px}li[data-v-6bf6a499]{cursor:pointer}.selected-type[data-v-6bf6a499],.types li[data-v-6bf6a499]:hover{background-color:#d8d8d8}#search-sidebar[data-v-6bf6a499]{width:300px;padding:1rem 0;z-index:2}#search-sidebar ul[data-v-6bf6a499]{margin:0 15px}.types li[data-v-6bf6a499]{height:65px;line-height:60px;margin:10px}@media screen and (max-width:991px){.sidebar[data-v-6bf6a499]{border-top:1px solid grey}#search-sidebar[data-v-6bf6a499]{padding:0;z-index:2}.search-button[data-v-6bf6a499]{padding:0}.history-container[data-v-6bf6a499]{max-height:120px}}",""])},739:function(t,e,o){"use strict";var n=o(720);o.n(n).a},740:function(t,e,o){e=t.exports=o(51)(!1);var n=o(328)(o(741));e.push([t.i,"a{color:#000}a:hover{text-decoration:none;color:#44ad47}nav{height:60px;border-bottom:1px solid #d3d3d3;line-height:40px;background-color:#fff;position:relative}nav.navbar{z-index:2}nav img:nth-child(2){width:40px;height:11px}nav>div,nav>form>div{padding:10px 20px}.map-logo img{display:block;margin:2px 15px 2px 2px}.input-group.search,.navbar-middle{height:60px;border-left:1px solid #d3d3d3}.input-group.search{position:absolute;right:0;width:300px}.search input{background-color:transparent;border-radius:0;border:none;border-bottom:1px solid;height:100%}.custom-select{background:url("+n+") no-repeat right .75rem center/8px 10px;background-size:15px 15px;border:none;margin-right:10px}button.gm-ui-hover-effect{display:none!important}.cities-select.custom-select{width:90px}button.btn.btn-secondary.search-button{border-radius:0;background-color:transparent;border:none;border-bottom:1px solid #000}button.btn.btn-secondary.search-button:active{background-color:transparent}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(68,173,71,.5)}@media screen and (max-width:991px){nav{height:unset}.map-logo{display:inline-block;border-right:1px solid grey}#gt-nav{padding:0}.sidebar-inline-form{display:block;position:fixed;top:60px;width:100%;background-color:#fff;border-top:1px solid grey}.sidebar-inline-form .navbar-middle{padding:7px 20px;height:unset;width:100%;display:flex;justify-content:space-between}.map-logo{border:none;height:60px;padding:10px}#mobile-button{border:none;border-left:1px solid grey;background-color:#fff;margin-left:auto;display:inline-block;width:60px;height:60px;position:absolute;right:0;top:0}.map-logo img{display:inline-block;height:100%;margin:0}.map-logo img:nth-child(2){height:70%;width:unset;margin-left:5px}.input-group.search{position:relative;border-bottom:none;background-color:#fff;padding:10px 20px}}",""])},741:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+DQoJPHBhdGggZD0iTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxICAgYzEyLjM1NC0xMi4zNTQsMzIuMzg4LTEyLjM1NCw0NC43NDgsMGwxNzEuOTA1LDE3MS45MTVsMTcxLjkwNi0xNzEuOTA5YzEyLjM1OS0xMi4zNTQsMzIuMzkxLTEyLjM1NCw0NC43NDQsMCAgIGMxMi4zNjUsMTIuMzU0LDEyLjM2NSwzMi4zOTIsMCw0NC43NTFMMjQ4LjI5MiwzNDUuNDQ5QzI0Mi4xMTUsMzUxLjYyMSwyMzQuMDE4LDM1NC43MDYsMjI1LjkyMywzNTQuNzA2eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPg0KPC9nPjwvZz4gPC9zdmc+DQo="},742:function(t,e,o){t.exports=o.p+"img/f24b29d.png"},743:function(t,e,o){var content=o(765);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("59898f33",content,!0,{sourceMap:!1})},747:function(t){t.exports={}},748:function(t,e,o){"use strict";var n=o(724);o.n(n).a},749:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,".shopList{background-color:#f3f4f5;padding:0;transition:left 1s;overflow-y:auto;height:100%}.no-result-placeholder{text-align:center}.no-result-placeholder img:first-child{width:60%;margin:30px auto 0;display:block}.no-result-placeholder img:nth-child(2){width:30%;margin:0 auto 30px;display:block}@media screen and (max-width:991px){.shopList{height:unset;padding:10px}}",""])},750:function(t,e,o){"use strict";var n=o(725),r=o(726),c=o(730),l=o(731),h=o.n(l),d=o(732),m=o.n(d),f=o(733),x=o.n(f),v=o(734),w=o.n(v),y=o(735),M=o.n(y),I={components:{ShopItem:n.a,Sidebar:r.a},data:function(){return{mascots:[h.a,m.a,x.a,w.a,M.a]}},props:{show:{type:Boolean,default:!0},onCloseButtonClick:{type:Function,default:function(){}},shops:{type:Array,default:[]}},methods:{onScroll:Object(c.a)(function(t){var e=t.target;console.log("??"),e.scrollTop>=e.scrollHeight-e.offsetHeight-500&&this.$store.state.pageNum<Math.ceil(this.shops.length/20)&&this.$store.commit("addPageNum")},1e3)}},S=(o(748),o(12)),component=Object(S.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Sidebar",{attrs:{show:t.show,onCloseButtonClick:t.onCloseButtonClick,showCloseSidebarButton:!0}},[t.shops.length>0?n("ul",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"shopList",attrs:{slot:"content"},slot:"content"},t._l(t.shops.slice(0,20*this.$store.state.pageNum),function(t,e){return n("ShopItem",{attrs:{shop:t}})}),1):t._e(),t._v(" "),0===t.shops.length?n("div",{staticClass:"no-result-placeholder",attrs:{slot:"content"},slot:"content"},[n("img",{attrs:{src:o(742)}}),t._v(" "),n("img",{attrs:{src:t.mascots[Math.floor(Math.random()*t.mascots.length)]}}),t._v(" "),n("p",[t._v("目前沒有符合的搜尋結果")])]):t._e()])},[],!1,null,null,null);e.a=component.exports},762:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNjguOCAyNjUuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY4LjggMjY1Ljg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30NCgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMzMuNSIgeTE9IjE5IiB4Mj0iMTMzLjUiIHkyPSIyNTIuMDc3MiI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAzQzZGRiIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzcwRkYiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMzLjUsMjBDNzIuNSwyMCwyMyw2Ni44LDIzLDEyNC41YzAsMzIuNCwxNS42LDYxLjMsNDAsODAuNXYzOWwzNy42LTE5LjdjMTAuNCwzLjEsMjEuNCw0LjcsMzIuOSw0LjcNCgljNjEsMCwxMTAuNS00Ni44LDExMC41LTEwNC41UzE5NC41LDIwLDEzMy41LDIweiIvPg0KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI2MCwxNjAgMTE2LDEzMCAxNDUsMTYxIDIwNSw5NSAxNDksMTI1IDEyMCw5NiAiLz4NCjwvc3ZnPg0K"},763:function(t,e,o){t.exports=o.p+"img/3009096.svg"},764:function(t,e,o){"use strict";var n=o(743);o.n(n).a},765:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,".footer-container{background-color:#fff;padding:20px 0 0}.footer-container h3{margin-top:0}.footer-container .about-GT h3{font-size:20px;font-weight:700;margin-bottom:30px}.footer-container .about-map h3{font-size:20px;font-weight:700}.about-map{background-color:#f3f4f5;padding:30px 200px;margin-bottom:30px}.about-map p{white-space:pre-line}.footer-container .about-map h3{text-align:center}.about-GT{background-color:#f3f4f5;padding:30px 100px;display:flex;justify-content:space-between}.about-GT-text{width:55%;font-size:16px}.about-GT-contact{width:30%;font-size:16px;display:flex;flex-direction:column}.about-GT-contact img{width:30px;display:inline-block;margin-right:10px}.about-GT-contact a{display:inline-block;margin-bottom:10px}footer{height:80px;color:#9fa0a0;display:flex;align-items:center;padding:20px}footer img{position:absolute;right:20px;height:40px}",""])},766:function(t,e,o){var content=o(812);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("df59c432",content,!0,{sourceMap:!1})},776:function(t,e,o){"use strict";var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-map"},[e("h3",[this._v("台灣零廢棄地圖")]),this._v(" "),e("p",[this._v("\n        集結全台灣最完整的環保的“綠循環地圖”！\n\n        內容包含 無包裝商店（裸買店）、食物銀行、綠色友善餐廳、享食據點（食物分享櫃）、剩食餐廳、二手書店、二手商店、維修商店、飲水機、資源回收站、綠色旅館、工具租借站、圖書館、傳統市集、農夫市集、環保優惠資訊。\n\n        我們提供多元的共享經濟與循環經濟產品服務資訊，目的為了讓更多人支持綠色產業，一起減少台灣人年年劇增的垃圾量。\n\n        有一種環保，叫做用鈔票當選票、用新台幣下架環保商家。台灣的未來由你來守護，快來看看你可以選擇哪些替代性消費方案，一起成為綠循環的重要成員。\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-GT-text"},[e("h3",[this._v("關於Zero Waste Taiwan")]),this._v(" "),e("p",[this._v("\n          台灣零廢棄平台由Zero Waste Taiwan台灣零廢棄社團、社團法人蠻野心足生態協會、減塑慢行社團聯合組成，\n          致力於推廣7R(Refuse、Reduce、Reuse、Repair、Recycle、Rot、Rethink)環保生活理念。\n\n          我們長期關注台灣廢棄物增加的現象，\n          更進一步地發現垃圾進入焚化爐或掩埋場仍產生許多生態環境與世代正義問題，\n          所以我們相信從日常生活中減少一次性垃圾的源頭減量才是根本之道。\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"fontSize16"},[e("img",{attrs:{src:o(762)}}),this._v("Zero Waste Taiwan")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{Href:"mailto:greenteamtaiwan@gmail.com ?subject=【來信洽詢】&CC=ivy11628@gmail.com"}},[e("span",{staticClass:"fontSize16"},[e("img",{attrs:{src:o(763)}}),this._v("Greenteamtaiwan@gmail.com")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[this._v("\n        Copyright 2019 GT. Imagined by GT. \n        "),e("img",{staticClass:"logo",attrs:{src:o(721),alt:"GT logo"}})])}],r={methods:{openFBPagePlugin:function(){this.PopupCenter("https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzerowastetaiwan%2F&tabs=timeline%2Cmessages%2Cevents&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=706162263119818","",340,500)},PopupCenter:function(t,title,e,o){var n=null!=window.screenLeft?window.screenLeft:window.screenX,r=null!=window.screenTop?window.screenTop:window.screenY,c=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,l=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,h=c/window.screen.availWidth,d=(c-e)/2/h+n,m=(l-o)/2/h+r,f=window.open(t,title,"scrollbars=yes, width="+e+", height="+o+", top="+m+", left="+d);window.focus&&f.focus()}}},c=(o(764),o(12)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-container"},[t._m(0),t._v(" "),o("div",{staticClass:"about-GT"},[t._m(1),t._v(" "),o("div",{staticClass:"about-GT-contact"},[o("h3",{staticClass:"fontSize24"},[t._v("聯絡我們")]),t._v(" "),o("a",{attrs:{href:"javascript:void(0);"},on:{click:t.openFBPagePlugin}},[t._m(2)]),t._v(" "),t._m(3)])]),t._v(" "),t._m(4)])},n,!1,null,null,null);e.a=component.exports},804:function(t,e,o){t.exports=o.p+"img/6cd9454.svg"},805:function(t,e,o){t.exports=o.p+"img/270d1c6.svg"},806:function(t,e,o){t.exports=o.p+"img/457a0b2.svg"},807:function(t,e,o){t.exports=o.p+"img/1759291.svg"},808:function(t,e,o){t.exports=o.p+"img/c2b9a01.svg"},809:function(t,e,o){t.exports=o.p+"img/31bd149.svg"},810:function(t,e,o){t.exports=o.p+"img/97aa199.svg"},811:function(t,e,o){"use strict";var n=o(766);o.n(n).a},812:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,"body,html{overflow-y:auto!important}.recommendations-container .shop-content h3{margin-top:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:32px}.recommendations-container .first-shop .shop-content h3{margin:20px 0 40px}.recommendations-top{margin-top:60px;min-height:calc(100vh - 60px);background-color:#f3f4f5;padding:10px 30px 30px;text-align:center}.tags-container{background-color:#fff;padding:20px;margin-bottom:30px}.tags{max-width:100%;width:750px;display:flex;justify-content:space-between;margin:15px auto 0;list-style:none}.tags li{width:80px;cursor:pointer}.tags li:hover p{color:#44ad47}.tags img{max-width:100%;align-self:center;max-height:120px}.shop{width:calc((100% - 40px)/3);display:flex;flex-direction:column}.shop .read-more:hover,.shop h2:hover{color:#44ad47;cursor:pointer}.shop .img{cursor:pointer;height:250px;overflow:hidden;position:relative}.first-shop .img{height:450px}.first-shop{display:flex;flex-direction:row;margin-bottom:30px;width:100%}.first-shop .img,.first-shop .shop-content{flex:1}.first-shop .shop-content{padding-top:50px}.shop-content h3{cursor:pointer}.shop-content h3:hover{color:#44ad47}.shop-content .recommendation-data{display:flex;justify-content:space-between}.shop-content .recommendation-data .stars{color:#f8c940;font-size:20px}.first-shop h2{width:90%;margin:30px auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.shop-content{background-color:#fff;padding:30px;position:relative}.first-shop .description{white-space:pre-line;text-align:left}.read-more{position:absolute;bottom:20px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:flex;align-items:center}.arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);margin-left:5px}.read-more:hover path{fill:#44ad47}.shops{display:flex;justify-content:space-between}.story-title{font-weight:700;color:#44ad47}.recommendation-title{font-weight:700;color:#ee5593}@media screen and (max-width:991px){.recommendations-container{padding:0;margin-top:116px}.first-shop.shop{flex-direction:column-reverse;margin-bottom:30px}.shops{flex-direction:column;text-align:left}.shops:not(.first-shop) .shop-content{padding:20px}.shops:not(.first-shop) .shop-content h2{font-size:20px;font-weight:700}.shop{flex-direction:row;width:100%;margin-bottom:10px}.first-shop .img{height:350px}.first-shop .shop-content{padding-top:30px}.story-title h2{margin:20px auto 30px}.shop:not(.first-shop) .img{width:40%;height:150px}.shop:not(.first-shop) .shop-content{width:60%}.tags-container{padding:30px 0}.tags{width:85%}.tags li{flex:1}.shop-content .recommendation-data{justify-content:flex-start}}",""])},834:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"story-title"},[e("span",[this._v("● 綠點故事")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"recommendation-title"},[e("img",{attrs:{src:o(752),height:"20",width:"20"}}),this._v(" "),e("span",[this._v(" 精選店家")])])}],r=o(127),c=(o(747),o(728)),l=o(776),h=o(750),d=o(729),m=(o(193),o(194),o(195),o(196),o(197),o(777)),f=o(804),x=o.n(f),v=(o(805),o(806)),w=o.n(v),y=o(807),M=o.n(y),I=(o(808),o(809)),S=o.n(I),N=o(810),j=o.n(N);r.apps.length||r.initializeApp({apiKey:"AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8",authDomain:"greenmaptaiwan.firebaseapp.com",databaseURL:"https://greenmaptaiwan.firebaseio.com",projectId:"greenmaptaiwan",storageBucket:"greenmaptaiwan.appspot.com",messagingSenderId:"395267289672"});var _={components:{Navbar:c.a,ShopList:h.a,ImageHandler:d.a,VClamp:m.a,Footer:l.a},data:function(){return{tags:[{name:"減塑",icon:M.a},{name:"零廢棄",icon:S.a},{name:"環保商店",icon:w.a},{name:"環境友善",icon:x.a},{name:"二手商店",icon:j.a}],demoShop:{address:"台中市中區三民路二段18巷6號",business_time:"請注意粉絲頁",latitude:24.1422103,longitude:120.6589805,name:"測試2號店-素食-禾",phone:"04-22211700",remark:"第一個在台灣實踐剩食利用的經營空間，嘗試開放共食、堅持以社區付的起的價格，推動在地市場的剩食，在地消耗。他們透過明日餐桌計畫，推動社區廚房減少食材過度浪費的問題。被人類拋棄的醜蔬果及剩餘食材，在這裡變身為一道道新鮮健康佳餚，來吧，走進這裡享受盛食，體會食材的美味，實踐真正的飲食零浪費。",type:"剩食冰箱",url:"https://www.facebook.com/7upkitchen/",logo:"https://i.imgur.com/OiSniLG.jpg",stack:["tag1_Unpackaged","tag2_ZeroWaste","tag3","tag4"],pic_fb_ProfilePic:"https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/38703274_2210299285852330_4242230006752739328_n.jpg?_nc_cat=102&_nc_ht=scontent.ftpe8-4.fna&oh=b23e90ae18f480e01b246cc3a03c9ac3&oe=5D719456",pic0_main:"https://i.imgur.com/AUmRdBD.jpg",pic1:"https://i.imgur.com/nRpuru2.jpg",pic2:"https://i.imgur.com/TDOSd3k.jpg",pic3:"https://i.imgur.com/eKOQDbN.jpg",pic4:"https://i.imgur.com/iNL9nVA.jpg",pic5:"https://i.imgur.com/fpDMHnW.jpg",pic6:"https://i.imgur.com/QyiD7pp.jpg"}}},computed:{firstShop:function(){return this.$store.state.shops[0]||{}}},mounted:function(){console.log("recommendation mounted"),this.$store.dispatch("getRecommendationShops")},methods:{setShop:function(t){(this.$store.commit("setShop",t),!t.google_map_link||t.photo1||t.recommendation_description||t.description)?$nuxt.$router.push("/shop?objectID=".concat(t.objectID)):window.open(t.google_map_link,"_blank").focus()},setTag:function(t){this.$store.commit("setQuery",t),$nuxt.$router.push("/")}}},C=(o(811),o(12)),component=Object(C.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Navbar",{attrs:{cities:t.cities,typeOptions:t.items}}),t._v(" "),o("div",{staticClass:"recommendations-container"},[o("div",{staticClass:"recommendations-top"},[o("div",{staticClass:"tags-container"},[o("p",[t._v("城市熱搜")]),t._v(" "),o("ul",{staticClass:"tags"},t._l(t.tags,function(e,n){return o("li",{key:n,on:{click:function(o){return t.setTag(e.name)}}},[o("img",{attrs:{src:e.icon}}),t._v(" "),o("p",[t._v(t._s(e.name))])])}),0)]),t._v(" "),o("div",{staticClass:"first-shop shop"},[o("div",{staticClass:"shop-content"},[t._m(0),t._v(" "),o("h3",{on:{click:function(e){return t.setShop(t.firstShop)}}},[t._v(t._s(t.firstShop.name))]),t._v(" "),o("mq-layout",{attrs:{mq:"lg"}},[o("p",{staticClass:"description"},[o("v-clamp",{attrs:{autoresize:"","max-lines":8}},[t._v(t._s(t.firstShop.recommendation_description?t.firstShop.recommendation_description.trim():""))])],1)]),t._v(" "),o("p",{staticClass:"read-more"},[o("span",{on:{click:function(e){return t.setShop(t.firstShop)}}},[t._v("閱讀更多")]),t._v(" "),o("svg",{staticClass:"arrow",staticStyle:{"enable-background":"new 0 0 451.847 451.847"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0",y:"0",width:"16",height:"16",viewBox:"0 0 451.847 451.847","xml:space":"preserve",preserveAspectRatio:"xMinYMin meet"}},[o("g",[o("g",[o("path",{staticClass:"active-path",attrs:{d:"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z","data-original":"#000000","data-old_color":"#000000"}})])])])])],1),t._v(" "),o("div",{staticClass:"img",on:{click:function(e){return t.setShop(t.firstShop)}}},[o("ImageHandler",{attrs:{src:t.firstShop.recommendation_photo||t.firstShop.facebook_avatar,alt:t.firstShop.name}})],1)]),t._v(" "),o("div",{staticClass:"shops"},t._l(this.$store.state.shops.slice(1,4),function(e,n){return o("div",{key:n,staticClass:"shop"},[o("div",{staticClass:"img",on:{click:function(o){return t.setShop(e)}}},[o("ImageHandler",{attrs:{src:e.recommendation_photo||e.facebook_avatar,alt:e.name}})],1),t._v(" "),o("div",{staticClass:"shop-content"},[o("div",{staticClass:"recommendation-data"},[t._m(1,!0),t._v(" "),o("mq-layout",{attrs:{mq:"lg"}},[o("p",{staticClass:"stars"},t._l(e.stars,function(e){return o("span",[t._v("★ ")])}),0)])],1),t._v(" "),o("h3",{on:{click:function(o){return t.setShop(e)}}},[t._v(t._s(e.name))])])])}),0)]),t._v(" "),o("mq-layout",{attrs:{mq:"lg"}},[o("Footer")],1)],1)],1)},n,!1,null,null,null);e.default=component.exports}}]);