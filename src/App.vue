<template>
  <div id="app">
    <keep-alive include="home,order,user">
      <router-view />
    </keep-alive>
    <TabFooter v-if="flag" />
  </div>
</template>

<script>
import TabFooter from "@/components/footer/TabFooter";
export default {
  computed: {
    flag() {
      return ["/", "/order", "/user"].indexOf(this.$route.path) > -1;
    }
  },
  components: {
    TabFooter
  }
};
</script>

<style lang="less">
// 导入字体图标
@import url("./assets/iconfont/iconfont.css");

#app {
}
</style>
