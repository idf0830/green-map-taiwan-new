<template>
  <div>
    <div class="map-page-container">
      <Navbar/>

      <mq-layout mq="lg">
        <ShopList :show="showShopList" :shops="shops" :onCloseButtonClick="toggleShopList" />
      </mq-layout>
      <mq-layout mq="md">
        <MobileShopList :shops="shops" />
      </mq-layout>
      <Map :mapSettings="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true,
          disableDefaultUi: false
        }"
        :backToIndexButtonClass="`mapPage-back-to-index-button`"  
      >
        <mq-layout mq="md">
          <nuxt-link to="/index-map">
            <button class="expand-map-button-index mobile" @click="initPageNum">展開地圖</button>
          </nuxt-link>
        </mq-layout>
      </Map>
    </div>
    <mq-layout mq="lg" class="mapPage-indexFilterTab-container">
        <IndexFilterTab :hasMapButton="false" :hasQuery="false" :typesContainerClass="`mapPage-type-container`"/>
    </mq-layout>
  </div>
</template>

<style>
  .expand-map-button-index{
    border: none;
    background-color: rgba(255,255,255,0.9);
    color: gray;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    padding: 5px 30px;
  }
  html, body{
    overflow-y: hidden
  }
  
  .map-page-container{
    margin-top: 50px;
  }
  .map-page-container .map-container{
    margin-top: 110px;
  }

  .map-page-container .index-map{
    width: 100%; 
    height: calc(100vh - 110px);
  }

  p{
    margin: 0;
  }

  li{
    list-style-type: none;
  }

  .mapPage-indexFilterTab-container{
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    background-color: #f3f4f5;
    padding: 5px 10px;
  }

  .mapPage-indexFilterTab-container .index-filter-tab{
    padding: 5px 10px;
  }
  .mapPage-indexFilterTab-container .index-filter-tab li img{
    height: 30px;
  }
  .mapPage-indexFilterTab-container .index-filter-tab span{
    line-height: px;
  }

  .mapPage-type-container{
    width: calc(100% - 45px)!important;
  }

  .mapPage-back-to-index-button{
      top: -43px;
  }

  @media screen and (max-width:1250px){
      .map-page-container .index-map{
        height: calc(60vh - 116px);
      }
      html, body{
        overflow-y: initial;
      }
      .menu{
          display: none;
      }
      .mapPage-back-to-index-button{
          top: 10px;
      }
  }
</style>

<script>
import { defaultCoreCipherList } from 'constants';
import Navbar from '~/components/Navbar.vue';
import ShopList from '~/components/ShopList.vue';
import MobileShopList from '~/components/MobileShopList.vue';
import markerIcon from '~/assets/img/icon_location.svg';
import { mapMutations } from 'vuex'
import ImageHandler from '~/components/ImageHandler.vue';
import Map from '~/components/Map.vue';
import IndexFilterTab from '~/components/IndexFilterTab.vue';

export default {
  components: {
    Navbar,
    ShopList,
    ImageHandler,
    MobileShopList,
    Map,
    IndexFilterTab
  },
  data() {
    return {
      showShopList: true
    }
  },
  computed: {
    shops: function() {
      return this.$store.state.shops;
    },
    selectedShop: function() {
      return this.$store.state.shop;
    },
    query: function() {
      return this.$state.state.query;
    }
  },
  mounted: function() {
    this.$store.dispatch("getShops");
    this.$store.dispatch("getUserLocation");
    if(this.$store.state.userLocation) this.$store.dispatch("getNearbyShops");
  },
  methods: {
    toggleShopList: function() {
      this.showShopList = !this.showShopList;
    },
    setShop: function() {
      // this.$store.commit("setShop", this.selectedShop);
      $nuxt.$router.push(`/shop?objectID=${this.selectedShop.objectID}`);
    },
    initPageNum: function() {
      this.$store.commit("initPageNum");
    }
  }
}
</script>
