<template>
  <div class="container">
    <img src="../assets/images/back.jpg" alt="请登录" />
    <p>登录后查看{{type}}</p>
    <van-button type="primary" @click="$router.push('/login/1')">立即登录</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  props: ["type"],
  components: {
    [Button.name]: Button
  }
};
</script>

<style scoped lang="less">
.container {
  text-align: center;
  img {
    width: 200px;
  }
  p {
    font-size: 18px;
    color: #515050;
  }
}
</style>