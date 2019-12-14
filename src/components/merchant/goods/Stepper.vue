<template>
  <div class="container">
    <transition name="move">
      <van-icon
        name="arrow-left"
        class="minus"
        @click="decreaseCart({merchantId,food})"
        v-if="num"
      />
    </transition>
    <transition name="number" duration="500">
      <span class="num" v-if="num">{{num}}</span>
    </transition>
    <van-icon name="arrow" class="add" @click="add({merchantId,food},$event)" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Icon } from "vant";
import DropAnimate from "./DropAnimate";
import create from "@/utils/create.js";

export default {
  props: ["num", "food", "drop", "merchantId"],
  methods: {
    ...mapMutations(["addCart", "decreaseCart"]),
    add(payload, ev) {
      this.addCart(payload);
      if (this.drop) {
        const comp = create(DropAnimate);
        comp.$on("transitionend", comp.remove);
        comp.start(ev.target);
      }
    }
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>

<style scoped lang="less">
.container {
  display: inline-block;

  .move-enter-active {
    transition: all 0.5s linear;
  }
  .move-leave-active {
    transition: all 0.5s linear;
  }
  .move-enter,
  .move-leave-to {
    transform: translateX(50px) rotate(360deg);
    opacity: 0;
  }

  // 不想在stepper消失的时候让数字慢慢消失，想让数字直接消失，由左边的按钮滚过去
  .number-leave-active {
    transition: none;
  }

  .number-leave-to {
    opacity: 0;
  }

  .add,
  .minus {
    padding: 3px;
    border: 2px solid #00a0dc;
    border-radius: 50%;
    background-color: #00a0dc;
    color: white;
    vertical-align: middle;
    font-weight: bold;
  }

  .minus {
    background-color: white;
    color: #00a0dc;
  }
  .num {
    padding: 0 15px;
  }
}
</style>