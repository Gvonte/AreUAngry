<template>
  <div class="home">
    <home-header />
    <merchant-list />
  </div>
</template>

<script>
import HomeHeader from "@/components/home/HomeHeader";
import MerchantList from "@/components/home/MerchantList";

export default {
  name: "home",
  components: {
    HomeHeader,
    MerchantList
  }
};
</script>

<style lang="less" scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40px;
  padding: 10px 18px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>