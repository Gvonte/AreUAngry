<template>
  <div>
    <scroll-nav :merchantId="merchantId" />
    <shop-cart :merchantId="merchantId" />
  </div>
</template>

<script>
import ScrollNav from "./ScrollNav";
import ShopCart from "./ShopCart";

export default {
  props: ["merchantId"],
  components: {
    ScrollNav,
    ShopCart
  }
};
</script>

<style>
</style>