<template>
    <Sidebar :show="show" :onCloseButtonClick="onCloseButtonClick" :showCloseSidebarButton="true" :id="`shopList-sidebar`">
        <ul class="shopList" slot="content" v-if="shops.length>0" v-scroll="onScroll" >
            <ShopItem v-for="(shop, index) in shops.slice(0, 20 * this.$store.state.pageNum)" :shop="shop" :isMarkerClicked="shop.objectID===selectedShop.objectID"/>
        </ul>
        <div class="no-result-placeholder" slot="content" v-if="shops.length===0">
            <!--<img src='../assets/img/no-result-placeholder-hint.png'/>-->
            <img :src='mascots[Math.floor(Math.random()*mascots.length)]'/>
            <p>{{isLoading?"Loading...":"目前沒有符合的搜尋結果"}}</p>
        </div>
    </Sidebar>
</template>

<style>
    .shopList {
        background-color: #f3f4f5;
        padding: 0;
        transition: left 1s;
        overflow-y: auto;
        height: 100%;
    }

    .map-page-container #shopList-sidebar .content{
        height: calc(100vh - 110px);
    }

    .map-page-container #shopList-sidebar{
        height: calc(100vh - 110px);
        margin-top: 60px;
    }

    .no-result-placeholder{
        text-align: center;
    }

    /*.no-result-placeholder img:nth-child(1){
        width: 60%;
        margin: 30px auto 0;
        display: block;
    }*/
    .no-result-placeholder img{
        width: 30%;
        margin: 0 auto 30px;
        display: block;
    }

    @media screen and (max-width:1250px){
        .shopList {
            height: unset;
            padding: 10px;
        }
        .index-shop-list{
            margin-top: 0!important;
        }
    }
</style>

<script>
import ShopItem from '~/components/ShopItem.vue'
import Sidebar from '~/components/Sidebar.vue'

import throttle from '~/functions/throttle.js';

import BubbleGreenTea from '~/assets/img/BubbleGreenTea.png';
import GreenBeer from '~/assets/img/GreenBeer.png';
import GreenMilkTea from '~/assets/img/GreenMilkTea.png';
import Mocha from '~/assets/img/Mocha.png';
import GreenTea from '~/assets/img/GreenTea.png';

export default {
    components: {
        ShopItem,
        Sidebar
    },
    data() {
        return {
            mascots: [
                BubbleGreenTea,
                GreenBeer,
                GreenMilkTea,
                Mocha,
                GreenTea
            ]
        }
    },
    props:{
        show: {
            type: Boolean,
            default: true
        },
        onCloseButtonClick: {
            type: Function,
            default: ()=>{}
        },
        shops: {
            type: Array,
            default: []
        }
    },
    computed: {
        isLoading: function() {
            return this.$store.state.isLoading;
        },
        selectedShop: function() {
            return this.$store.state.shop;
        }
    },
    methods: {
        onScroll: throttle(function({target: elem}) {
            if (elem.scrollTop >= (elem.scrollHeight - elem.offsetHeight - 500) && this.$store.state.pageNum < Math.ceil(this.shops.length / 20) ) {
                this.$store.commit("addPageNum");
            }
        }, 1000)
    }
}
</script>