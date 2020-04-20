<template>
  <div class="container">
    <van-icon name="arrow-left" class="left" @click="goback" />
    <van-icon name="service-o" class="right" />
  </div>
</template>

<script>
import { Icon } from "vant";

export default {
  components: {
    [Icon.name]: Icon
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="less">
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #efecec;

  .left {
    float: left;
    margin-top: 10px;
    margin-left: 10px;
  }
  .right {
    float: right;
    margin-top: 10px;
    margin-right: 16px;
  }
}
</style>