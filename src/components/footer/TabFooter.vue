<template>
  <div class="tab">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/" name="/">
        <span>首页</span>
        <span slot="icon" class="iconfont icon-shouye"></span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/order" name="/order">
        <span>订单</span>
        <span slot="icon" class="iconfont icon-dingdan"></span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/user" name="/user">
        <span>我的</span>
        <span slot="icon" class="iconfont icon-wode"></span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  computed: {
    active: {
      get() {
        return this.$route.path;
      },
      set() {}
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>

<style scoped lang="less">
.tab {
  .iconfont {
    font-size: 20px;
  }
}
</style>