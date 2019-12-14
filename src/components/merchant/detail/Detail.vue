<template>
  <div class="detail">
    <div class="top"></div>
  </div>
</template>

<script>
import getMerchantInfo from "@/service/getMerchantInfo.js";

export default {
  props: ["merchantId"],
  data() {
    return {
      merchantData: {}
    };
  },
  created() {
    getMerchantInfo(this.merchantId).then(res => {
      this.merchantData = res.data.data.merchant;
    });
  }
};
</script>

<style scoped lang="less">
.top {
  padding: 18px;
}
</style>