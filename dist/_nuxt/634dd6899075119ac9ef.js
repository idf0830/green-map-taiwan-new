(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{712:function(t,o,e){var content=e(722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("3d6101da",content,!0,{sourceMap:!1})},714:function(t,o){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMEMxNTMuNzU1LDAsNzAuNTczLDgzLjE4Miw3MC41NzMsMTg1LjQyNmMwLDEyNi44ODgsMTY1LjkzOSwzMTMuMTY3LDE3My4wMDQsMzIxLjAzNSAgICBjNi42MzYsNy4zOTEsMTguMjIyLDcuMzc4LDI0Ljg0NiwwYzcuMDY1LTcuODY4LDE3My4wMDQtMTk0LjE0NywxNzMuMDA0LTMyMS4wMzVDNDQxLjQyNSw4My4xODIsMzU4LjI0NCwwLDI1NiwweiBNMjU2LDI3OC43MTkgICAgYy01MS40NDIsMC05My4yOTItNDEuODUxLTkzLjI5Mi05My4yOTNTMjA0LjU1OSw5Mi4xMzQsMjU2LDkyLjEzNHM5My4yOTEsNDEuODUxLDkzLjI5MSw5My4yOTNTMzA3LjQ0MSwyNzguNzE5LDI1NiwyNzguNzE5eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzRkZTY4MCIgZmlsbD0iIzRkZTY4MCIvPg0KCTwvZz4NCjwvZz48L2c+IDwvc3ZnPg0K"},721:function(t,o,e){"use strict";var n=e(712);e.n(n).a},722:function(t,o,e){(t.exports=e(51)(!1)).push([t.i,".shopList{background-color:#f3f4f5;padding:0;transition:left 1s;overflow:auto}.no-result-placeholder{text-align:center}.no-result-placeholder img{width:30%;margin:30px auto;display:block}@media screen and (max-width:991px){.shopList{height:unset;padding:10px}}",""])},724:function(t,o,e){"use strict";var n=e(713),r=e(715),l=e(716),c=e.n(l),h=e(717),d=e.n(h),m=e(718),f=e.n(m),w=e(719),y=e.n(w),x=e(720),v=e.n(x),M={components:{ShopItem:n.a,Sidebar:r.a},data:function(){return{mascots:[c.a,d.a,f.a,y.a,v.a]}},props:{show:{type:Boolean,default:!0},onCloseButtonClick:{type:Function,default:function(){}},shops:{type:Array,default:[]}}},I=(e(721),e(12)),component=Object(I.a)(M,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("Sidebar",{attrs:{show:t.show,onCloseButtonClick:t.onCloseButtonClick,showCloseSidebarButton:!0}},[t.shops.length>0?e("ul",{staticClass:"shopList",attrs:{slot:"content"},slot:"content"},[e("lazy-render",{attrs:{data:t.shops,time:700,limit:20,"track-by-data":""}},[t._l(t.shops,function(t,o){return e("ShopItem",{attrs:{shop:t}})}),t._v(" "),e("div",{staticStyle:{display:"inline-block",margin:"20px"},attrs:{slot:"tip"},slot:"tip"},[t._v("Loading...")])],2)],1):t._e(),t._v(" "),0===t.shops.length?e("div",{staticClass:"no-result-placeholder",attrs:{slot:"content"},slot:"content"},[e("img",{attrs:{src:t.mascots[Math.floor(Math.random()*t.mascots.length)]}}),t._v(" "),e("p",[t._v("目前沒有符合的搜尋結果")])]):t._e()])},[],!1,null,null,null);o.a=component.exports},744:function(t,o,e){var content=e(793);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("21036413",content,!0,{sourceMap:!1})},745:function(t,o,e){var content=e(795);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("36873827",content,!0,{sourceMap:!1})},792:function(t,o,e){"use strict";var n=e(744);e.n(n).a},793:function(t,o,e){(t.exports=e(51)(!1)).push([t.i,".mobile-shop-list{position:absolute;top:60vh;max-height:100vh;min-height:50vh;overflow-y:scroll;background-color:#f3f4f5;width:100%}.shopList{background-color:#f3f4f5;padding:0;transition:left 1s;overflow:auto}.no-result-placeholder{text-align:center}.mobile-shop-list .no-result-placeholder img{height:25vh;width:unset;margin:20px auto;display:block}@media screen and (max-width:991px){.shopList{height:unset;padding:10px}}",""])},794:function(t,o,e){"use strict";var n=e(745);e.n(n).a},795:function(t,o,e){(t.exports=e(51)(!1)).push([t.i,".expand-map-button-index{border:none;background-color:hsla(0,0%,100%,.9);color:grey;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:1;padding:5px 30px}body,html{overflow-y:hidden}.index-map{width:100%;height:calc(100vh - 60px)}.map-container h1{font-size:16px;font-weight:700;display:inline-block;margin-right:5px;margin-bottom:0}.address{margin:10px 0}.google-map-button{color:#44ad47;border-radius:5px;padding:5px 20px;border:1px solid;font-size:12px;display:block;margin:auto}.type,p{margin:0}.type{color:#9fa0a0;font-size:13px}li{list-style-type:none}.map-container{padding:0;margin:60px 0 0;max-width:unset}.map-container>.row,.map-container>.row>div{margin:0;padding:0}p.recommend{color:#ee5593;font-weight:700;display:flex;align-items:center}.recommend img{width:unset;margin-right:5px}p.type{display:block;color:#d3d3d3;font-size:13px}.info-window-container{display:flex;justify-content:space-between;margin-bottom:5px;cursor:pointer}.info-window-container h1{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.info-window-container:hover h1{color:#44ad47}@media screen and (max-width:991px){.index-map{height:calc(60vh - 116px)}body,html{overflow-y:visible;overflow-y:initial}.map-container .sidebar,.menu{display:none}.map-container{margin-top:116px}}.gmap-info-window-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.gm-style-iw.gm-style-iw-c h1{font-size:20px}.gm-style-iw.gm-style-iw-c{padding:0;height:80px;font-family:微軟正黑體}",""])},797:function(t,o,e){"use strict";e.r(o);e(726);var n=e(727),r=e(724),l=e(713),c=e(715),h=e(716),d=e.n(h),m=e(717),f=e.n(m),w=e(718),y=e.n(w),x=e(719),v=e.n(x),M=e(720),I=e.n(M),L={components:{ShopItem:l.a,Sidebar:c.a},data:function(){return{mascots:[d.a,f.a,y.a,v.a,I.a]}},props:{shops:{type:Array,default:[]}},methods:{onScroll:function(t){var o=t.target;o.scrollTop>=o.scrollHeight-o.offsetHeight-500&&this.$store.state.pageNum<Math.ceil(this.shops.length/20)&&this.$store.commit("addPageNum")}}},k=(e(792),e(12)),S=Object(k.a)(L,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"mobile mobile-shop-list"},[t.shops.length>0?e("ul",{staticClass:"shopList",attrs:{slot:"content"},slot:"content"},t._l(t.shops.slice(0,20*this.$store.state.pageNum),function(t,o){return e("ShopItem",{attrs:{shop:t}})}),1):t._e(),t._v(" "),0===t.shops.length?e("div",{staticClass:"no-result-placeholder",attrs:{slot:"content"},slot:"content"},[e("img",{attrs:{src:t.mascots[Math.floor(Math.random()*t.mascots.length)]}}),t._v(" "),e("p",[t._v("目前沒有符合的搜尋結果")])]):t._e()])},[],!1,null,null,null).exports,z=(e(714),e(133),e(725)),D={components:{Navbar:n.a,ShopList:r.a,ImageHandler:z.a,MobileShopList:S},data:function(){return{showShopList:!0,zoomLevel:9}},computed:{visiableItemArray:function(){var map=[];for(var t in this.$store.state.sourceData.types){var o=this.$store.state.sourceData.types[t];o.checked&&map.push(o.value)}return map},shops:function(){return this.$store.state.shops},center:function(){return this.$store.state.center}},mounted:function(){this.$store.dispatch("getShops"),this.$store.dispatch("getUserLocation")},methods:{mapClick:function(t){this.$refs.myMap.mapObject._zoom<15&&alert("需要再縮小")},markerClick:function(t,o){this.$store.commit("setCenter",{lat:t.latitude,lng:t.longitude}),this.$store.commit("markerOnClick",o),this.$store.commit("setShop",t)},markerOver:function(t){t.sourceTarget.setOpacity(1)},markerOut:function(t){t.sourceTarget.setOpacity(.5)},toggleShopList:function(){this.showShopList=!this.showShopList},setShop:function(){this.$store.commit("setShop",this.$store.state.shop)},getIcon:function(t){return this.$store.state.sourceData.types[t].icon}}},N=(e(794),Object(k.a)(D,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"index-container"},[e("Navbar"),t._v(" "),e("b-container",{staticClass:"map-container"},[e("b-row",[e("b-col",{staticClass:"map",attrs:{lg:"12"}},[e("nuxt-link",{attrs:{to:"/index-map"}},[e("button",{staticClass:"expand-map-button-index mobile"},[t._v("展開地圖")])]),t._v(" "),e("no-ssr",[e("gmap-map",{staticClass:"index-map",attrs:{center:t.center,zoom:t.zoomLevel,"map-type-id":"roadmap"}},[t._l(t.shops,function(o,n){return e("gmap-marker",{key:n,attrs:{position:{lat:parseFloat(o.latitude),lng:parseFloat(o.longitude)},clickable:!0,draggable:!1,icon:{url:t.getIcon(o.type),scaledSize:{width:55,height:65}}},on:{click:function(e){return t.markerClick(o,n)}}})}),t._v(" "),e("gmap-info-window",{staticStyle:{width:"100px"},attrs:{options:{pixelOffset:{width:0,height:-35}},opened:null!==this.$store.state.shop&&Object.getOwnPropertyNames(this.$store.state.shop).length>1,position:{lat:+this.$store.state.shop.latitude||0,lng:+this.$store.state.shop.longitude||0}},on:{closeclick:function(t){}}},[e("div",{staticClass:"info-window-container",on:{click:t.setShop}},[this.$store.state.shop.facebook_avatar?e("ImageHandler",{attrs:{src:this.$store.state.shop.facebook_avatar,containerStyle:{width:"120px",height:"80px",overflow:"hidden",position:"relative"},alt:this.$store.state.shop.name}}):t._e(),t._v(" "),e("div",{staticStyle:{padding:"10px","min-width":"160px"}},[e("h1",[t._v(t._s(this.$store.state.shop.name))]),t._v(" "),e("br"),t._v(" "),e("p",{staticStyle:{"margin-top":"10px","font-size":"14px"}},[t._v("\n                    "+t._s(this.$store.state.sourceData.types[this.$store.state.shop.type]?this.$store.state.sourceData.types[this.$store.state.shop.type].text:"")+"\n                    "),e("span",{staticStyle:{float:"right",color:"#4de680","font-weight":"bold"}},[t._v(t._s(this.$store.state.shop.open_status&&this.$store.state.shop.open_status.type?this.$store.state.shop.open_status.text:""))])])])],1)])],2)],1)],1)],1),t._v(" "),e("ShopList",{attrs:{show:t.showShopList,shops:t.shops,onCloseButtonClick:t.toggleShopList}}),t._v(" "),e("MobileShopList",{attrs:{shops:t.shops}})],1)],1)},[],!1,null,null,null));o.default=N.exports}}]);