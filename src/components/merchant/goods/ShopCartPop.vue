<template>
  <div class="container" v-show="backFlag">
    <div class="back" @click="hidden" v-show="show"></div>
    <transition name="cart">
      <div class="cart" v-show="show">
        <p class="title">
          购物车
          <span class="clean" @click="removeCart(merchantId)">清空</span>
        </p>
        <div class="content">
          <p v-for="item in cart" :key="item.name">
            {{item.name}}
            <Stepper
              :food="item"
              :num="item.count"
              :drop="false"
              :merchantId="merchantId"
              class="stepper"
            />
            <span class="price">￥{{item.price}}</span>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Icon } from "vant";
import Stepper from "./Stepper";

export default {
  data() {
    return {
      show: false,
      backFlag: false
    };
  },
  props: ["merchantId"],
  computed: {
    ...mapState({
      carts: state => state.cart.carts
    }),
    cart() {
      let cart = this.carts.find(item => item.id === this.merchantId);
      return cart ? cart.cart : [];
    }
  },
  watch: {
    cart(newVal) {
      if (newVal.length === 0) {
        this.hidden();
      }
    }
  },
  methods: {
    ...mapMutations(["removeCart"]),
    hidden() {
      this.show = false;
      setTimeout(() => {
        // 购物车收回去之后，让body中的这个父元素也隐藏起来，以免造成不良影响
        this.backFlag = false;
      }, 500);
    }
  },
  components: {
    [Icon.name]: Icon,
    Stepper
  }
};
</script>

<style scoped lang="less">
.back {
  position: fixed;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #081420a6;
}

.cart {
  // 知识点：子元素不能覆盖父元素的 opacity 属性
  position: fixed;
  z-index: 21;
  left: 0;
  right: 0;
  bottom: 50px;

  &.cart-enter-active,
  &.cart-leave-active {
    transition: all 0.5s;
  }
  &.cart-enter,
  &.cart-leave-to {
    transform: translateY(100%);
  }
  .title {
    margin: 0;
    padding: 0 18px;
    line-height: 40px;
    font-size: 14px;
    background-color: #f3f5f7;
    opacity: 1;
  }
  .clean {
    float: right;
    line-height: 40px;
    font-size: 12px;
    color: #00a0dc;
  }
  .content {
    max-height: 240px;
    padding-bottom: 10px;
    background-color: white;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      // 隐藏滚动条
      display: none;
    }
    p {
      margin: 0;
      padding: 12px 18px;
      line-height: 24px;
      font-size: 14px;

      .price {
        float: right;
        margin-right: 20px;
        color: #f01414;
      }
      .stepper {
        float: right;
      }
    }
  }
}
</style>