<template>
  <div class="container">
    <!-- js绑定动画 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-if="show">
        <div class="inner"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      top: 0,
      left: 0
    };
  },
  methods: {
    start(clickElem) {
      // 获取点击位置
      const { top, left } = clickElem.getBoundingClientRect();
      this.top = top;
      this.left = left;
      this.show = true;
    },
    beforeEnter(el) {
      let x = this.left - 45,
        y = document.documentElement.clientHeight - this.top - 50;
      el.style.transform = `translate(${x}px, 0)`;
      el.querySelector(".inner").style.transform = `translate(0, ${-y}px)`;
    },
    enter(el, done) {
      // 获取offsetHeight就会重绘，重绘才能产生动画（原理不明）
      document.body.offsetHeight;

      el.style.transform = `translate(0, 0)`;
      el.querySelector(".inner").style.transform = `translate(0, 0)`;
      // 加了下面这句，body中的该元素才知道动画结束了，后面才能放心从body中删除该元素，不加这句话动画不能出现
      el.addEventListener("transitionend", done);
    },
    afterEnter() {
      // this.$emit("transitionend");
      this.remove()
    }
  }
};
</script>

<style scoped lang="less">
.container {
  .ball {
    // 初始位置
    position: fixed;
    bottom: 50px;
    left: 45px;
    z-index: 30;
    // x轴曲线
    transition: all 0.5s linear;
    .inner {
      // 内容部分，必须放在最里层
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #00a0dc;
      // y轴曲线
      transition: all 0.5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    }
  }
}
</style>