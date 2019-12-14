<template>
  <div>
    <div class="container">
      <p :class="{'title':true,'left':loginStatus}">{{loginStatus?`你好，${info.username}`:"登录开启美食之旅"}}</p>
      <a href="javascript:;" class="login" @click="login" v-if="!loginStatus">登录用户</a>
      <a href="javascript:;" class="search" @click="register" v-if="!loginStatus">注册用户</a>
      <p v-else class="info">您的余额：{{info.money}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus,
      info: state => state.user.userInfo
    })
  },
  methods: {
    login() {
      this.$router.push("/login/1");
    },
    register() {
      this.$router.push("/login/0");
    }
  }
};
</script>

<style scoped lang="less">
.container {
  position: relative;
  text-align: center;
  background: url("../../assets/images/bg-login.jpg");
  overflow: hidden;

  .title {
    font-size: 20px;
    color: #fff;

    &.left {
      text-align: left;
      text-indent: 30px;
    }
  }

  a {
    display: inline-block;
    margin: 0 15px 15px 15px;
    width: 110px;
    line-height: 40px;
    border-radius: 25px;
    font-size: 15px;
    color: #ffffff;

    &.login {
      background: #ff9a14;
    }

    &.search {
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
    }
  }
}
.info {
  margin-bottom: 20px;
  text-indent: 50px;
  font-size: 16px;
  color: white;
  text-align: left;
}
</style>
