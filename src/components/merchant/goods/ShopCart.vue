<template>
  <div class="container">
    <div class="left" @click="showPop">
      <van-icon name="shopping-cart-o" :class="{'cart':true,'empty':!totalCount}" />
      <span class="bubble" v-if="totalCount">{{totalCount}}</span>
      <span :class="{'price':true,'dark':!totalCount}">￥{{totalPrice&&totalPrice.toFixed(1)}}</span>
    </div>
    <div :class="{'right':true,'noenough':totalPrice<10}">{{totalPrice>=10?"去结算":"￥10元起送"}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Icon } from "vant";
import ShopCartPop from "./ShopCartPop";
import create from "@/utils/create.js";

export default {
  data() {
    return {
      flag: true,
      shopPopComp: null
    };
  },
  props: ["merchantId"],
  components: {
    [Icon.name]: Icon
  },
  mounted() {
    // 直接在里面用ShopCartPop实现遮罩层效果不行，因为这个组件里面的元素也算作MerchantContent中van-tabs组件的子元素，所以这个遮罩层滑动的时候会切换，导致页面错乱，所以需要用util中的create方法，目的是将组件挂载到body上去
    this.shopPopComp = create(ShopCartPop, {
      props: {
        merchantId: this.merchantId
      }
    });
  },
  beforeDestroy() {
    // 销毁组件前把绑在body上的组件也销毁了
    this.shopPopComp.remove();
  },
  computed: {
    ...mapState({
      carts: state => state.cart.carts
    }),
    totalCount() {
      let cart = this.carts.find(item => item.id === this.merchantId);
      if (cart) {
        cart = cart.cart;
        return cart.reduce((num, item) => num + item.count, 0);
      } else {
        return 0;
      }
    },
    totalPrice() {
      let cart = this.carts.find(item => item.id === this.merchantId);
      if (cart) {
        cart = cart.cart;
        return cart.reduce((total, item) => total + item.count * item.price, 0);
      } else {
        return 0;
      }
    }
  },
  methods: {
    showPop() {
      if (!this.totalCount) {
        return;
      }
      this.shopPopComp.show = true;
      this.shopPopComp.backFlag = true;
    }
  }
};
</script>

<style scoped lang="less">
.container {
  position: fixed;
  z-index: 22;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgb(7, 17, 27);
  font-size: 0;
  .left {
    display: inline-block;
    width: 270px;
    height: 100%;
    .cart {
      float: left;
      margin-top: -10px;
      margin-left: 15px;
      width: 44px;
      height: 44px;
      line-height: 44px;
      border: 8px solid rgb(7, 17, 27);
      border-radius: 50%;
      font-size: 24px;
      background-color: #00a0dc;
      color: white;
      text-align: center;
      &.empty {
        background-color: #333;
        color: #999;
      }
    }
    .bubble {
      // 只要设置了position：absolute或者float，都达到display:inline-block的效果
      position: absolute;
      z-index: 23;
      margin-top: -8px;
      margin-left: -18px;
      padding: 0 5px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      border-radius: 16px;
      font-size: 10px;
      color: #fff;
      background: linear-gradient(to right, #fc9153, #f01414);
    }
    .price {
      margin-left: 5px;
      line-height: 50px;
      color: white;
      font-size: 16px;
      &.dark {
        color: #999;
      }
    }
  }
  .right {
    display: inline-block;
    width: 105px;
    line-height: 50px;
    background-color: #00b43c;
    font-size: 16px;
    color: white;
    text-align: center;
    &.noenough {
      background-color: #333;
      color: #999;
    }
  }
}
</style>